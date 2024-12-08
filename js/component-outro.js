export class Outro extends HTMLElement {

  static observedAttributes = [
    'percentage'
  ]
  fireworks

  constructor() {
    super()
  }

  connectedCallback() {
    this.fireworks = new Fireworks.default(this)
  }

  attributeChangedCallback() {
    this.render()
    
    if (Number(this.getAttribute('percentage')) > 75) {
      this.fireworks.start()
    }
  }

  render() {
    this.innerHTML = `
      <div id="outro-text">
        <h3>Du havde ${ this.getAttribute('percentage') }% rigtige.</h3>
        <p><button>Prøv igen</button></p>
      </div>
    `
    this.querySelector('button').addEventListener('click', (event) => {
      this.dispatchEvent(new CustomEvent('gameover', {bubbles: true}))
      this.fireworks.end()
    })
  }
}