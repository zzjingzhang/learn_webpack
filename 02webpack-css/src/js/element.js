// import 'css-loader!../css/style.css'  // 内联方式引入css-loader,!是一个分隔符 一般不用这种方式 
import '../css/style.css'
import "../css/title.less"
const divEl = document.createElement('div')
divEl.className = 'title'
divEl.innerHTML = "添加样式"



document.body.appendChild(divEl)