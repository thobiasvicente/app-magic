<template>
  <q-layout view="hHh lpR fFf">
    <div class="row">
      <div class="col-12 col-md">
        <SelectCard @modelo="getModel" :submit="submit" :options="options" :filterFn="filterFn" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="flex flex-center q-pt-xl">
          <card v-if="showCard" :card="card" />
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import axios from "axios";
import card from "../components/Card";
import SelectCard from "../components/SelectCard";
import firebase from "firebase";

const stringOptions = [];
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          next();
        } else {
          vm.$router.push("/login");
        }
      });
    });
  },
  components: {
    card,
    SelectCard
  },
  data() {
    return {
      card: {},
      showCard: false,
      name: "",
      options: stringOptions,
      model: null
    };
  },

  methods: {
    getModel(model) {
      this.model = model;
    },
    submit(name) {
      axios
        .get(`https://api.scryfall.com/cards/named?&pretty=true&fuzzy=${name}`)
        .then(response => {
          if (response) {
            this.card = response.data;
            this.showCard = true;
          }
        })
        .catch(err => {
          if (err) {
            this.showCard = false;
          }
        });
    },
    filterFn(val, update, abort) {
      if (val.length < 4) {
        abort();
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        axios
          .get(
            `https://api.scryfall.com/cards/search?order=cmc&pretty=true&include_multilingual=true&q=${val}`
          )
          .then(response => {
            if (response) {
              console.log(response.data.data.map(cards => cards.printed_name)
                .filter(Boolean));
              this.options = response.data.data
                .map(cards => cards.name)
                .filter(Boolean);
            }
          })
          .catch(err => {
            if (err) {
              this.showCard = false;
            }
          });
      });
    }
  }
};
</script>

<style  scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>

