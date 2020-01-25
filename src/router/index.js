import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import VueParticles from 'vue-particles'

import routes from './routes'

Vue.use(VueRouter)
Vue.use(VueParticles)

var firebaseConfig = {
  apiKey: "AIzaSyDwxKZ5a7GAkw_vO5F--1DYHBvcN1KDOp4",
  authDomain: "app-bar-529a0.firebaseapp.com",
  databaseURL: "https://app-bar-529a0.firebaseio.com",
  projectId: "app-bar-529a0",
  storageBucket: "app-bar-529a0.appspot.com",
  messagingSenderId: "991631173382",
  appId: "1:991631173382:web:9e0bef08d2ef87523ea087",
  measurementId: "G-RCFPXYHC4V"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore()

window.db = db

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}
