<template>
  <div>
      <q-card class="my-card">
      <img :src="card.image_uris ? card.image_uris.large : null">

      <q-card-section>
        <div class="text-h6">{{card.name}}</div>
        <div class="text-subtitle2">{{card.type_line}}</div>
        <div class="text-subtitle2">{{card.oracle_text}}</div>
        <div class="text-subtitle2">{{card.flavor_text}}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>

  </div>
</template>

<script>

export default {
    props: {
        card: {
            type: Object, 
            default: null
        }
    }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>