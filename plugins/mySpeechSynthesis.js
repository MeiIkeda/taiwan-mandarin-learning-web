// import Vue from 'vue'
//
// Vue.prototype.$speak = (word) => {
//   this.mySpeak(word)
// this.speak(word)
// const agent = window.navigator.userAgent
// if (!('SpeechSynthesisUtterance' in window)) {
//   this.error_message = 'お使いのブラウザは音声再生に対応していない可能性があります。 (Google Chrome推奨)'
//   this.error_message_sentry = 'お使いのブラウザは単語再生に対応していない可能性があります。(1)' + agent
//   this.$sentry.captureException(new Error('Error = ' + this.error_message_sentry))
//   console.log(this.error_message_sentry)
//   this.showErrorAlert = true
//   return
// }
// const uttr = new SpeechSynthesisUtterance(word)
// uttr.localService = false
// uttr.lang = 'zh-CN'
// const voices = speechSynthesis.getVoices()
// let isChinese = false
// const me = this
// voices.forEach(function (voice, i) {
//   if (voice.lang.includes('zh')) {
//     isChinese = true
//   }
//   console.log('ボイス:' + voice.lang)
//   if ((i === (voices.length - 1)) && !isChinese) {
//     const agent = window.navigator.userAgent
//     me.error_message = 'お使いのブラウザーは音声再生に対応していない可能性があります。(Google Chrome推奨)'
//     me.error_message_sentry = 'お使いのブラウザーは単語再生に対応していない可能性があります。(2)' + agent
//     me.$sentry.captureException(new Error('Error = ' + me.error_message_sentry))
//     console.log(me.error_message_sentry)
//     me.showErrorAlert = true
//   }
// })
// console.log('debug:' + uttr)
// speechSynthesis.speak(uttr)
// }
export default {
  methods: {
    mySpeak (word) {
      const agent = window.navigator.userAgent
      if (!('SpeechSynthesisUtterance' in window)) {
        this.error_message = 'お使いのブラウザは音声再生に対応していない可能性があります。 (Google Chrome推奨)'
        this.error_message_sentry = 'お使いのブラウザは単語再生に対応していない可能性があります。(1)' + agent
        this.$sentry.captureException(new Error('Error = ' + this.error_message_sentry))
        console.log(this.error_message_sentry)
        this.showErrorAlert = true
        return
      }
      const uttr = new SpeechSynthesisUtterance(word)
      uttr.localService = false
      uttr.lang = 'zh-CN'
      const voices = speechSynthesis.getVoices()
      let isChinese = false
      const me = this
      voices.forEach(function (voice, i) {
        if (voice.lang.includes('zh')) {
          isChinese = true
        }
        console.log('ボイス:' + voice.lang)
        if ((i === (voices.length - 1)) && !isChinese) {
          const agent = window.navigator.userAgent
          me.error_message = 'お使いのブラウザーは音声再生に対応していない可能性があります。(Google Chrome推奨)'
          me.error_message_sentry = 'お使いのブラウザーは単語再生に対応していない可能性があります。(2)' + agent
          me.$sentry.captureException(new Error('Error = ' + me.error_message_sentry))
          console.log(me.error_message_sentry)
          me.showErrorAlert = true
        }
      })
      console.log('debug:' + uttr)
      speechSynthesis.speak(uttr)
    }
  }
}
