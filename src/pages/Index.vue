<template>
  <q-layout v-if="!isMobile()" view="hHh lpR fFf" class="background">
    <div class="row">
      <div class="col-12 absolute-center">
        <div class="text-h3 text-white text-center">Magic Trade Cards.</div>
      </div>
    </div>
  </q-layout>
  <div v-else>
    <index-mobile></index-mobile>
  </div>
</template>

<script>
import indexMobile from "../components/mobile/IndexMobile";

export default {
  components: {
    indexMobile
  },
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
        ? true
        : false;
    }
  }

  // name: 'PageName',
};
</script>
