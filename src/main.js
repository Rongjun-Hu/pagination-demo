import Vue from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'

import axios from 'axios'

// Extend the base view instance, axios now can use in all components
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')


