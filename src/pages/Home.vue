<template>
  <q-page padding class="flex flex-center">
    <q-input v-model="text" :dense="dense" label="Search Cards">
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      ph: ""
    };
  }
};
</script>
