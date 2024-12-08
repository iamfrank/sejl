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
      <article>
        <h2>${ question.question }</h2>
        <img src="./img/${ question.image }" alt="">
        <form>
          ${ this.renderAnswers(question.answer) }
        </form>
        <sejl-right-or-wrong hidden answer="${ question.answer }"></sejl-right-or-wrong>
      </article>
    `
    this.querySelector('form').addEventListener('change', this.submitAnswerHandler.bind(this))
  }

  renderAnswers(answer) {
    
    const correctAnswerIndex = this.getRandom(3)
    let template = ''
    for (let i = 0; i < 3; i++) {
      let localAnswer = ''
      if (i === correctAnswerIndex) {
        localAnswer = answer
      } else {
        localAnswer = questions[this.getRandom(questions.length)].answer
      }
      template += `<label class="input-answer"><input type="radio" name="answer" value="${ localAnswer }">${ localAnswer }</label>`
    }
    return template
  }

  submitAnswerHandler(event) {
    const rightOrWrongElement = this.querySelector('sejl-right-or-wrong')
    const rightAnswer = questions[this.getAttribute('question-id')].answer
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

  getRandom(max) {
    return Math.floor(Math.random() * max)
  }

  shuffleArray(array) {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
    }
    return shuffledArray
  }

}