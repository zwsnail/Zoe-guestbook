/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueRouter from 'vue-router';




window.Vue = require('vue');

Vue.use(ElementUI);
Vue.use(VueRouter);



/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('page', require('./components/Page.vue').default);
Vue.component('signatures', require('./components/Signatures.vue').default);
Vue.component('signature-form', require('./components/SignatureForm.vue').default);
Vue.component('paginate', require('vuejs-paginate'));
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import Signatures from './components/Signatures.vue';
import Forms from './components/SignatureForm.vue';
// import Page from './components/Page.vue';


const router = new VueRouter({
    routes: [
        { path: '/sign', component: Forms },
        { path: '/home', component: Signatures },
    ]
})

// const router = new VueRouter({
//     routes: [
//         { path: '/',
//             // component: Page,
//             // redirect: '/welcome',
//             children: [
//                 {path: '/home', component: Signatures},
//                 {path: '/sign', component: SignatureForm},
//             ]
//         }
//     ]
// })




const app = new Vue({
    router,
    el: '#app',
});
