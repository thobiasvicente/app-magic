<template>
  <q-page padding class="flex flex-center">
    <q-input v-model="name" label="Search Cards" v-on:keyup.enter="submit(name)">
      <template v-slot:append>
        <q-icon name="search" v-on:click="submit(name)"/>
      </template>
    </q-input>
     <card v-if="showCard" :card="card"/> 
  </q-page>
</template>

<script>
import axios from 'axios'
import card from '../components/Card'
export default {
  components: {
    card
  },
  data() {
    return {
      card: {},
      showCard: false,
      name: ''
    }
   
  },

  methods: {
    submit (name) {
      axios.get(`https://api.scryfall.com/cards/named?fuzzy=${name}`)
      .then((response) => {
        if (response) {
          alert(response)
          this.card = response.data
          this.showCard = true
        }
      })
      .catch((err) => {
        if (err) {
          this.showCard = false
        }
      })
    },
   
  },

};
</script>
