// import { createApp } from 'vue/dist/vue.esm-bundler'
import { createApp } from 'vue'
import { sum } from './js/math.js'
const { priceFormat } = require('./js/format.js')

import App from './vue/App.vue'
import './js/element'
console.log(sum(10, 20))
console.log(priceFormat())



// const app = createApp({
//     template: `<h2>vuevuevuevuevuevuevue</h2>`,
//     data() {
//         return {
//             message: 'vuevuevuevuevuevuevue'
//         }
//     }
// })
const app = createApp(App)
app.mount('#app')