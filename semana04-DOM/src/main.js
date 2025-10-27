import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1 class="text-amber-300 text-6xl> DOM - Manipulacion del DOM con JavaScript </h1>
  </div>
`

setupCounter(document.querySelector('#counter'))
