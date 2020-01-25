<template>
  <q-layout view="hHh lpR fFf" class="background">
    <div class="absolute-center text-center">
      <div class="text-h5 text-white">Faça Login para continuar.</div>
      <q-btn color="purple" text-color="white" class="q-mt-md" label="Login" @click="login()" />
    </div>
  </q-layout>
</template>

<script>
import firebase from "firebase";

export default {
  methods: {
    login() {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          let token = result.credential.accessToken;
          let user = result.user;
          this.$router.push("/home");
        })
        .catch(function(error) {
          let errorCode = error.code;
          let errorMessage = error.message;
          let email = error.email;
          let credential = error.credential;
          // ...
        });
    }
  }
};
</script>

