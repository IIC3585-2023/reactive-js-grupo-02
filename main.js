import './style.css'
import { setupCounter } from './counter.js'
import { gridHtml } from './scripts/gridGenerator.js'

document.querySelector('#app').innerHTML = `
  <div>
    ${gridHtml(10, 10)}
  </div>
`

setupCounter(document.querySelector('#counter'))
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]