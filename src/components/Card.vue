<template>
  <div>
    <q-card class="my-card">
      <q-img :src="card.image_uris ? card.image_uris.art_crop : null" />

      <q-card-section>
        <q-btn
          dense
          round
          color="purple"
          icon="remove_red_eye"
          class="absolute"
          size="md"
          style="bottom: 14rem; right: 12px;"
        />
        <q-btn
          fab
          color="primary"
          icon="star"
          class="absolute"
          style="top: 0; right: 10px; transform: translateY(-50%);"
        />
        <q-btn
          fab
          color="primary"
          icon="playlist_add_check"
          class="absolute"
          style="top: 0;left:125px; transform: translateY(-50%);"
        />
        <q-btn
          fab
          color="primary"
          icon="share"
          class="absolute"
          style="top: 0;left:10px; transform: translateY(-50%);"
        />
        <div class="row no-wrap items-center q-mt-md">
          <div class="col text-h6 ellipsis">{{card.name}}</div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">$・Italian, Cafe</div>
        <div
          class="text-caption text-grey"
        >Small plates, salads & sandwiches in an intimate setting.</div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary">Reserve</q-btn>
      </q-card-actions>
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
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>