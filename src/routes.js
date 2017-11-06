// Import Components

import Header from './components/Header.vue';

import Home from './components/Home.vue';

import User from './components/user/User.vue';

import UserStart from './components/user/UserStart.vue';

import UserDetail from './components/user/UserDetail.vue';

import UserEdit from './components/user/UserEdit.vue';




// Set URL Paths and Other Details for the Components

export const routes = [
 { path: '', components: {
    default: Header},
    children: [
   { path: '', component: Home, name: 'home' },
   { path: '/user', components: {
      default: User },
      children: [
         { path: '', component: UserStart },
         { path: ':id', component: UserDetail },
         { path: ':id/edit', component: UserEdit, name: 'userEdit' }
      ]}
]}
];
