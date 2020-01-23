<template>
  <div>
    <div class="text-center">
      <q-btn color="red" icon="mail" icon-right="send" @click="login()" label="Login com Conta Google" />
    </div>
  </div>
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
          // This gives you a Google Access Token. You can use it to access the Google API.
          let token = result.credential.accessToken;
          // The signed-in user info.
          let user = result.user;
          this.$router.push("/home");
        })
        .catch(function(error) {
          // Handle Errors here.
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
</style>
