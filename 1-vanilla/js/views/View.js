const tag = '[View]'

export default {
  init(el) { //전달받은 element를 자신의 property로 갖게 됨
    if (!el) throw el
    this.el = el
    return this
  },

  on(event, handler) { //element에서 event 발생시 handler 시행
    this.el.addEventListener(event, handler)
    return this
  },

  emit(event, data) { //생성한 event 방출 
    const evt = new CustomEvent(event, { detail: data })
    this.el.dispatchEvent(evt)
    return this
  },

  hide() { //element 숨기기
    this.el.style.display = 'none'
    return this
  },

  show() { //element 보이기 
    this.el.style.display = ''
    return this
  }
}