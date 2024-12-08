export class PointTrack extends HTMLElement {

  static observedAttributes = [
    'wrong',
    'right',
    'max'
  ]

  constructor() {
    super()
  }

  attributeChangedCallback() {
    if (Number(this.getAttribute('right')) + Number(this.getAttribute('wrong')) >= Number(this.getAttribute('max'))) {
      const outroElement = document.querySelector('sejl-outro')
      outroElement.setAttribute('percentage', Number(this.getAttribute('right')) / Number(this.getAttribute('max')) * 100)
      outroElement.hidden = false
    } 
    this.render()
  }

  render() {
    let template = ''
    if (this.getAttribute('right')) {
      for (let i = 0; i < this.getAttribute('right'); i++) {
        template += '<span class="notch-right"></span>'
      }
    }
    if (this.getAttribute('wrong')) {
      for (let j = 0; j < this.getAttribute('wrong'); j++) {
        template += '<span class="notch-wrong"></span>'
      }
    }
    template += '</p>'
    
    this.innerHTML = template
  }

}