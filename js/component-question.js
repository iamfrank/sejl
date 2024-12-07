import { answers } from "./data-answers.js"
import { questions } from "./data-questions.js"

export class Question extends HTMLElement {

  static observedAttributes = [
    'question-id'
  ]
  
  constructor() {
    super()
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed to ${newValue}, ${questions[0]}`)
    this.render(questions[newValue])
  }

  render(question) {
    this.innerHTML = `
      <h2>${ question.question }</h2>

      <img src="./img/${ question.image }" alt="">

      <form>
        ${ this.renderAnswers(question.correctAnswer, question.wrongAnswers) }
      </form>

      <sejl-right-or-wrong hidden answer="${ answers[question.correctAnswer] }"></sejl-right-or-wrong>
    `
    this.querySelector('form').addEventListener('change', this.submitAnswerHandler.bind(this))
  }

  renderAnswers(correctAnswer, wrongAnswers) {

    let wrongList = Array.from(wrongAnswers)
    const localAnswers = [answers[correctAnswer], undefined, undefined]
    const wrongAnswerPick1 = Math.floor(Math.random() * wrongAnswers.length)
    localAnswers[1] = answers[wrongAnswers[wrongAnswerPick1]]
    wrongList = wrongList.splice(wrongAnswerPick1, 1)
    const wrongAnswerPick2 = Math.floor(Math.random() * wrongAnswers.length)
    localAnswers[2] = answers[wrongAnswers[wrongAnswerPick2]]
    console.log(localAnswers)

    const shuffledAnswers = this.shuffleArray(localAnswers)
    let template = ''
    for (const answer of shuffledAnswers) {
      template += `<label class="input-answer"><input type="radio" name="answer" value="${ answer }">${ answer }</label>`
    }

    return template
  }

  submitAnswerHandler(event) {
    const rightOrWrongElement = this.querySelector('sejl-right-or-wrong')
    const rightAnswer = answers[this.getAttribute('question-id')]
    if (event.target.value === rightAnswer) {
      console.log('correct')
      rightOrWrongElement.setAttribute('verdict', 'right')
      rightOrWrongElement.hidden = false
    } else {
      console.log('wrong')
      rightOrWrongElement.setAttribute('verdict', 'wrong')
      rightOrWrongElement.hidden = false
    }
  }

  shuffleArray(array) {
    // Create a copy of the array to avoid mutating the original array
    let shuffledArray = array.slice();

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i (inclusive)
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements at indices i and j
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
  }

}