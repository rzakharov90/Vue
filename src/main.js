import Vue from 'vue/dist/vue.js'
import BootstrapVue from 'bootstrap-vue';
import App from './App';

Vue.use(BootstrapVue);


new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App: App
    }
})