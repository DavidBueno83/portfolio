
/** classe typewriter
 * @params elemento(DOM), 
 * textos(array de strings)
 * velocidade dos caracteres(number)
 * velocidade de deletar(number)
 * velocidade do pause(number)
 * cursor piscando(boolean)
 */
export default class Typewriter {
  constructor(element, texts = [], typingSpeed = 100, deletingSpeed = 50, pauseTime = 1500, blinkCursor = true) {
    this.element = element
    this.texts = texts
    this.typingSpeed = typingSpeed
    this.deletingSpeed = deletingSpeed ?? 50 // default 50 se undefined
    this.pauseTime = pauseTime ?? 0 // default 0 se undefined
    this.blinkCursor = blinkCursor

    this.textIndex = 0
    this.charIndex = 0
    this.deleting = false
    this.started = false

    if (this.blinkCursor) {
      this.element.classList.add('typewriter-cursor')
    }

    this.canDelete = this.deletingSpeed > 0
    this.shouldLoop = this.pauseTime > 0

    // inicia apenas quando entra na tela
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.started) {
          this.started = true
          if(!this.blinkCursor){
            this.element.classList.add('show-type')
          }
          this.type()
          this.observer.unobserve(this.element)
        }
      })
    }, { threshold: 0.1 })

    this.observer.observe(this.element)
  }

  type() {
    const currentText = this.texts[this.textIndex]

    if (!this.deleting || !this.canDelete) {
      // digitando
      this.element.textContent = currentText.substring(0, this.charIndex + 1)
      this.charIndex++

      if (this.charIndex === currentText.length) {
        if (this.canDelete && this.shouldLoop) {
          this.deleting = true
          setTimeout(() => this.type(), this.pauseTime)
        } else if (this.shouldLoop) {
          setTimeout(() => {
            this.charIndex = 0
            this.textIndex = (this.textIndex + 1) % this.texts.length
            this.type()
          }, this.pauseTime)
        }
        // se não pode apagar e não deve repetir, termina aqui
        return
      }
    } else {
      // apagando
      this.element.textContent = currentText.substring(0, this.charIndex - 1)
      this.charIndex--

      if (this.charIndex === 0) {
        this.deleting = false
        this.textIndex = (this.textIndex + 1) % this.texts.length
      }
    }

    const speed = (!this.deleting || !this.canDelete) ? this.typingSpeed : this.deletingSpeed
    setTimeout(() => this.type(), speed)
  }
}
