// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 1
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// 2
import VueApollo from "vue-apollo";

import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

// 3
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: "http://localhost:4000/"
});

// 4
const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache
});

// 5
Vue.use(VueApollo);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueFormGenerator)
// 6
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  apollo: {},
  // 7
  provide: apolloProvider.provide(),
  router,
  render: h => h(App)
});

