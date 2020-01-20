export default {
  methods: {
    mySpeak (word) {
      const agent = window.navigator.userAgent
      if (!('SpeechSynthesisUtterance' in window)) {
        return 'お使いのブラウザは単語再生に対応していない可能性があります。(1)' + agent
      }
      const uttr = new SpeechSynthesisUtterance(word)
      speechSynthesis.getVoices()
      const voices = speechSynthesis.getVoices()
      let isChinese = false
      voices.forEach(function (voice, i) {
        if (voice.lang.includes('zh')) {
          isChinese = true
          uttr.lang = 'zh'
        }
        // if (voice.lang.includes('zh-CN')) {
        //   isChinese = true
        //   uttr.lang = 'zh-CN'
        // }
        console.log('lang:' + voice.lang)
        console.log('name:' + voice.name)
      })
      if (isChinese === false) {
        const agent = window.navigator.userAgent
        return 'お使いのブラウザーは単語再生に対応していない可能性があります。(2)' + agent
      }
      console.log('debug:' + uttr)
      speechSynthesis.speak(uttr)
      return 'success'
    }
  }
}
