export class RightOrWrong extends HTMLElement {

  static observedAttributes = [
    'verdict',
    'answer'
  ]

  constructor() {
    super()
  }

  attributeChangedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
      <h3>${ this.translateVerdict(this.getAttribute('verdict')) }</h3>
      <p>Det rigtige svar er:</p>
      <p>${ this.getAttribute('answer') }</p>
      <button>Videre</button>
    `
    this.querySelector('button').addEventListener('click', () => {
      this.setAttribute('hidden', true)
      this.dispatchEvent(new CustomEvent('next', {bubbles: true, detail: {verdict: this.getAttribute('verdict')}}))
    })
  }

  translateVerdict(verdict) {
    if (verdict === 'right') {
      return 'Rigtigt'
    } else {
      return 'Forkert'
    }
  }

}