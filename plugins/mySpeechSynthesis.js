export default {

  methods: {
    mySpeak (word, voices) {
      const agent = window.navigator.userAgent
      if (!('SpeechSynthesisUtterance' in window)) {
        return 'お使いのブラウザは単語再生に対応していない可能性があります。(1)' + agent
      }
      const uttr = new SpeechSynthesisUtterance(word)
      let isChinese = false
      let includeZhCn = false
      let includeTianTian = false
      voices.forEach(function (voice, i) {
        if (voice.lang.includes('zh')) {
          isChinese = true
        }
        if (voice.lang.includes('zh-CN')) {
          includeZhCn = true
        }
        if (voice.lang.includes('Tian-Tian')) {
          includeTianTian = true
        }
        // console.log('lang:' + voice.lang)
        // console.log('name:' + voice.name)
      })
      if (isChinese === false) {
        const agent = window.navigator.userAgent
        return 'お使いのブラウザーは単語再生に対応していない可能性があります。(2)' + agent
      } else if (includeTianTian === true) {
        uttr.name = 'Tian-Tian'
        uttr.lang = 'zh-CN'
      } else if (includeZhCn === true) {
        uttr.lang = 'zh-CN'
      } else {
        uttr.lang = 'zh'
      }
      speechSynthesis.cancel()
      speechSynthesis.speak(uttr)
      return 'success'
    },
    loadVoices () {
      const voices = window.speechSynthesis.getVoices()
      return voices
    }
  }
}
