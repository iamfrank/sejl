export class RightOrWrong extends HTMLElement {

  static observedAttributes = [
    'verdict',
    'answer'
  ]

  constructor() {
    super()
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render()
  }

  render() {
    this.innerHTML = `
      <h3>${ this.translateVerdict(this.getAttribute('verdict')) }</h3>
      <p>${ this.getAttribute('answer') }</p>
      <button>Luk</button>
    `
    this.querySelector('button').addEventListener('click', () => {
      this.setAttribute('hidden', true)
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