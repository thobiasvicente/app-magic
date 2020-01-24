<template>
  <q-page padding class="flex flex-center">
    <q-input v-model="name" label="Search Cards" v-on:keyup.enter="submit(name)">
      <template v-slot:append>
        <q-icon name="search" v-on:click="submit(name)"/>
      </template>
    </q-input>
      <p>{{card}}</p>  
  </q-page>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      card: '',
      name: ''
    }
   
  },

  methods: {
    submit (name) {
      axios.get(`https://api.scryfall.com/cards/named?fuzzy=${name}`)
      .then(response => (this.card = response.data))
      .catch(err => (err))
    },
   
  },

};
</script>
