
require('./bootstrap');

window.Vue = require('vue');


// Vuex support
import Vuex from 'vuex'

Vue.use(Vuex)
import storeData from './store/index'

const store = new Vuex.Store(
    storeData
)

// filter.js file support
import {filter} from './filter'
// vue router support
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// vue routes
import {routes} from './routes'

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);
Vue.component('home-main', require('./components/public/publicMaster').default);

// V-form
import { Form, HasError, AlertError } from 'vform'

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

// SweetAlert 2
import Swal from 'sweetalert2'
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

window.Toast = Toast;


const router = new VueRouter({
    mode:'hash',
    routes // short for `routes: routes`
  })


const app = new Vue({
    el: '#app',
    router,
    store,
});
