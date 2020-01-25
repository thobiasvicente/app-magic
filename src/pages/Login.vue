<template>
  <q-layout view="hHh lpR fFf" class="backgroud">
      <div class="absolute-center text-center">
        <div class="text-h5">Faça Login para continuar.</div>
        <q-btn flat style="color: #FF0080" @click="login()" label="Login" />
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
          // The email of the user's account used.
          let email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          let credential = error.credential;
          // ...
        });
    }
  }
};
</script>

<style scoped>
.backgroud {
  background: rgb(180, 177, 238);
  background: radial-gradient(
    circle,
    rgba(180, 177, 238, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
}
</style>
