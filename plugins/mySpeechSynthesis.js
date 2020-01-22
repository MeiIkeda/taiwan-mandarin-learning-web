export default {

  methods: {
    checkSpeechSynthesisUtterance () {
      const agent = window.navigator.userAgent
      if (!('SpeechSynthesisUtterance' in window)) {
        return 'お使いのブラウザは単語再生に対応していない可能性があります。(1)' + agent
      }
      return 'success'
    },
    mySpeak (word, voices) {
      const uttr = new SpeechSynthesisUtterance(word)
      let isChinese = false
      // let includeZhTw = false
      let includeZhCn = false
      // let includeZhTwAndroid = false
      let includeZhCnAndroid = false
      voices.forEach(function (voice, i) {
        if (voice.lang.includes('zh')) {
          isChinese = true
        }
        if (voice.lang.includes('zh-CN')) {
          includeZhCn = true
        }
        // if (voice.lang.includes('zh-TW')) {
        //   includeZhTw = true
        // }
        // if (voice.lang.includes('zh_TW_#Hant')) {
        //   includeZhTwAndroid = true
        // }
        if (voice.lang.includes('zh_CN_#Hans')) {
          includeZhCnAndroid = true
        }
        // console.log('lang:' + voice.lang)
        // console.log('name:' + voice.name)
      })
      if (isChinese === false) {
        const agent = window.navigator.userAgent
        return 'お使いのブラウザーは単語再生に対応していない可能性があります。(2)' + agent
        // } else if (includeZhTw === true) {
        //   uttr.lang = 'zh-TW'
        // } else if (includeZhTwAndroid === true) {
        //   uttr.lang = 'zh_TW_#Hant'
      } else if (includeZhCn === true) {
        uttr.lang = 'zh-CN'
      } else if (includeZhCnAndroid === true) {
        uttr.lang = 'zh_CN_#Hans'
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
