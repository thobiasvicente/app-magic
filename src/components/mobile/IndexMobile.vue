<template>
  <q-layout view="hHh lpR fFf" class="background">
    <div class="row">
      <div class="col-12 absolute-center">
        <div class="text-h3 text-white text-center">Magic Trade Cards.</div>
        <div class="text-center q-pt-xl">
          <q-spinner-facebook color="white" size="3em" />
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
export default {
  created() {
    setTimeout(() => this.$router.push({ path: "/home" }), 3000);
  }
};
</script>

<style lang="scss" scoped>
</style>