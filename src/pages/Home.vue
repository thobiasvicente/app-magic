<template>
  <q-layout view="hHh lpR fFf" class="backgroud">
    <div class="row">
      <div class="col-12">
        <div class="flex flex-center q-pt-xl">
          <q-input v-model="name" label="Search Cards" v-on:keyup.enter="submit(name)">
            <template v-slot:append>
              <q-icon name="search" v-on:click="submit(name)" />
            </template>
          </q-input>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md">
        <div class="flex flex-center q-pt-xl">
          <q-select
            filled
            v-model="model"
            use-input
            hide-selected
            fill-input
            input-debounce="0"
            :options="options"
            @filter="filterFn"
            hint="Mininum 4 characters to trigger autocomplete"
            style="width: 250px; padding-bottom: 32px"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">No results</q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
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
const stringOptions = [];
export default {
  components: {
    card
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

