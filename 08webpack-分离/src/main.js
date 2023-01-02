// import { createApp } from 'vue/dist/vue.esm-bundler'
import { createApp } from 'vue'
import axios from 'axios'
import { sum } from './js/math.js'
const { priceFormat } = require('./js/format.js')

import App from './vue/App'
import './js/element'

if (module.hot) {
    module.hot.accept('./js/element', () => {
        console.log('lee 模块更新了')
    })
}
console.log(sum(10, 20))
console.log(priceFormat())
console.log('66666')
console.log('66666')
console.log('66666')



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
