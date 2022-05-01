import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el) {
    this.init(el)
    this.inputEl = el.querySelector('[type=text]')
    this.resetEl = el.querySelector('[type=reset')
    this.showResetBtn(false)
    this.bindEvents()
    return this
}

FormView.showResetBtn = function (show = true) {
    this.resetEl.style.display = show ? 'block' : 'none'
}

FormView.bindEvents = function () {
    this.on('submit', e => e.preventDefault())
    this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
}

FormView.onKeyup = function (e) { //키보드 동작에 대한 정의 
    const enter = 13
    this.showResetBtn(this.inputEl.value.length)
    if(e.keyCode !== 13) return
    //else.. keycode = 13이면 즉 enter 입력 시 input에 입력된 값 전달 
    this.emit('@submit', {input: this.inputEl.value}) //key=input, value=inputEl.value 의 형태로 전달 
}

export default FormView