import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function(el) {
    this.init(el) //el 가져와서 자신의 속성으로 가짐
    this.inputEl = document.querySelector('[type=text]') //document에서 type=text인 element 찾아서 inputEl로 지정(즉 ipnut box)
    this.resetEl = document.querySelector('[type=reset]') //type=reset인 element(즉 reset button) 찾아서 resetEl로 지정
    this.showResetBtn(false)
}

FormView.showResetBtn = function(show = true) {
    this.resetEl.style.display = show ? 'block' : 'none'
}

export default FormView // FormView를 control해서 사용할 것이라서 export 해주기
