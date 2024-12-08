import { Question } from "./component-question.js"
import { RightOrWrong } from "./component-rightwrong.js"
import { PointTrack } from "./component-points.js"
import { Intro } from "./component-intro.js"
import { Outro } from "./component-outro.js"
import { getRandomQuestionId } from "./data-questions.js"

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
customElements.define('sejl-point-track', PointTrack)
customElements.define('sejl-intro', Intro)
customElements.define('sejl-outro', Outro)

const questionElement = document.querySelector('sejl-question')
const pointTrackElement = document.querySelector('sejl-point-track')
const outroElement = document.querySelector('sejl-outro')
questionElement.setAttribute('question-id', 22)
//questionElement.setAttribute('question-id', getRandomQuestionId())

document.addEventListener('next', (event) => {
  if (event.detail.verdict === 'right') {
    pointTrackElement.setAttribute('right', Number(pointTrackElement.getAttribute('right')) + 1)
  } else if (event.detail.verdict === 'wrong') {
    pointTrackElement.setAttribute('wrong', Number(pointTrackElement.getAttribute('wrong')) + 1)
  }
  questionElement.setAttribute('question-id', getRandomQuestionId())
})

document.addEventListener('gameover', (event) => {
  pointTrackElement.setAttribute('right', 0)
  pointTrackElement.setAttribute('wrong', 0)
  questionElement.setAttribute('question-id', getRandomQuestionId())
  outroElement.hidden = true
})
