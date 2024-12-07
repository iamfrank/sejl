import { Question } from "./component-question.js"
import { RightOrWrong } from "./component-rightwrong.js"

// pages
//  intro
//  help/info
//  question
//  salute


// Data
//   questions
//   answers
//   lights
//   score/failed questions

// Light components (svg?)

customElements.define('sejl-question', Question)
customElements.define('sejl-right-or-wrong', RightOrWrong)

const sejlElement = document.querySelector('sejl-question')
sejlElement.setAttribute('question-id', 0)
