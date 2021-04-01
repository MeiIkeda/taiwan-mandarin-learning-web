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
      let includeZhVoice = null
      let includeZhTwVoice = null
      let includeZhCnVoice = null
      let foundVoice = null
      voices.forEach(function (voice) {
        if (voice.lang.includes('zh')) {
          includeZhVoice = voice
        }
        if (voice.lang.includes('zh-CN')) {
          includeZhCnVoice = voice
        }
        if (voice.lang.includes('zh-TW')) {
          includeZhTwVoice = voice
        }
      })
      voices.some(function (voice) {
        // 大陸発音一旦コメントアウト
        // if (voice.lang.includes('zh_CN_#Hans')) {
        //   foundVoice = voice
        //   return true
        // }
        // if (voice.name.includes('中国語 中国')) {
        //   uttr.voice = voice
        //   return true
        // }
        // if (voice.name.includes('Yu-Shu')) {
        //   foundVoice = voice
        //   return true
        // }
        // if (voice.name.includes('Google 普通话（中国大陆）')) {
        //   foundVoice = voice
        //   return true
        // }
        // if (voice.name.includes('普通话（中国大陆）')) {
        //   foundVoice = voice
        //   return true
        // }
        if (voice.lang.includes('zh_TW_#Hant')) {
          foundVoice = voice
          return true
        }
        if (voice.name.includes('Mei-Jia')) {
          foundVoice = voice
          return true
        }
        if (voice.name.includes('Google 國語（臺灣）')) {
          foundVoice = voice
          return true
        }
        if (voice.name.includes('國語（臺灣）')) {
          foundVoice = voice
          return true
        }
        if (voice.name.includes('中国語 台湾')) {
          foundVoice = voice
          return true
        }
        if (voice.lang.includes('Yating')) {
          foundVoice = voice
          return true
        }
      })
      if (includeZhVoice == null) {
        const agent = window.navigator.userAgent
        return 'お使いのブラウザーは単語再生に対応していない可能性があります。(2)' + agent
      }
      if (foundVoice != null) {
        uttr.voice = foundVoice
      } else if (includeZhTwVoice) {
        uttr.voice = includeZhTwVoice
      } else if (includeZhCnVoice) {
        uttr.voice = includeZhCnVoice
      } else {
        uttr.voice = includeZhVoice
      }
      console.log('voice(lang,name)=' + uttr.voice.lang + ',' + uttr.voice.name)
      speechSynthesis.cancel()
      uttr.rate = 0.8
      speechSynthesis.speak(uttr)
      return 'success'
    },
    loadVoices () {
      let voices = null
      if (window.speechSynthesis != null) {
        voices = window.speechSynthesis.getVoices()
      }
      return voices
    }
  }
}
