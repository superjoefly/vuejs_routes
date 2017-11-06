import Vue from 'vue';
import App from './App.vue';


// Global Event Bus
// export const eventBus = new Vue();


// Import Router
import Router from 'vue-router';

// Tell Vue to use the router
Vue.use(Router);

//Import routes const from './routes'
import {routes} from './routes.js';


// Create const for router; set mode to history
const router = new Router ({
  mode: 'history',
  // this is the file path to the project on the website
  base: '/pages/projects/vuejs_routes/',
  routes,

  //code to navigate to specific point on page
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return {x: 0, y: 500};
  }
  });

  // Global beforeEnter Guard
  router.beforeEach((to, from, next) => {
    console.log('Global beforeEach Guard!');
    next();

    //Three Options:
    //next(); // continues to load desired page
    //next(false); // will abort
    //next(path '/' or {object}); // will redirect
  });





// Add router to Vue.js root instance
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
