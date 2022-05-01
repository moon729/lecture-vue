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

FormView.bindEvents = function(){
    this.inputEl.addEventListener('keyup', e => this.onKeyup(e)) //inputEl 에 'keyup' 이벤트 발 생 시 onKeyup 호출
}

FormView.onKeyup = function(){
    this.showResetBtn(this.inputEl.value.length) //input값에 length가 있을 경우 true 전달 > x 버튼 노출 
}

export default FormView