<template>
  <q-layout view="hHh lpR fFf" class="backgroud">
    <div class="row">
      <div class="col-12 col-md">

        <SelectCard @modelo="getModel" :submit="submit" :options="options" :filterFn="filterFn"/>
    
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
import SelectCard from "../components/SelectCard"

const stringOptions = [];
export default {
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
    getModel(model){
      this.model = model
      
    },
    submit(name) {
      axios
        .get(`https://api.scryfall.com/cards/named?fuzzy=${name}`)
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
          .get(`https://api.scryfall.com/cards/autocomplete?q=${val}`)
          .then(response => {
            if (response) {
              this.options = response.data.data.filter(
                v => v.toLowerCase().indexOf(needle) > -1
              );
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

.backgroud {
  background: #f0f0f0;
}
</style>

