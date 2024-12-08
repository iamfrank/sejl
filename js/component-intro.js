export class Intro extends HTMLElement {

  constructor() {
    super()
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
      <h1>Genkende signallys</h1>
      <p style="margin-bottom: 4rem;">Her kan du øve dig i at genkende forskellige signaler og lys på havet.</p>
      <button>Start</button>
    `
    this.querySelector('button').addEventListener('click', (event) => {
      this.hidden = true
    })
  }
}