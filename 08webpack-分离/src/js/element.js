import '../css/style.css'
import "../css/title.less"
import "../css/image.css"
import "../font/icon.css"

import img2 from '../img/02.jpg'
const divEl = document.createElement('div')
divEl.className = 'title'
divEl.innerHTML = "添加样式"


// 设置背景图片
const bgEl = document.createElement('div')
bgEl.className = "image-bg"

// 设置img元素的src
const imgEl = document.createElement('img')
imgEl.src = img2
imgEl.className = "img-jpg"

// i元素
const iEl = document.createElement('i')
iEl.className = 'icon icon-uni9050'


document.body.appendChild(divEl)
document.body.appendChild(bgEl)
document.body.appendChild(imgEl)
document.body.appendChild(iEl)