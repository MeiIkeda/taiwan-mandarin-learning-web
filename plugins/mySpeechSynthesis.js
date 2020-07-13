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
      voices.some(function (voice) {
        if (voice.name.includes('Mei-Jia')) {
          uttr.name = 'Mei-Jia'
          return true
        }
        if (voice.name.includes('Google 國語（臺灣）')) {
          uttr.name = 'Google 國語（臺灣）'
          return true
        }
        if (voice.name.includes('國語（臺灣）')) {
          uttr.name = '國語（臺灣）'
          return true
        }
        if (voice.name.includes('中国語 台湾')) {
          uttr.name = '中国語 台湾'
          return true
        }
        if (voice.name.includes('中国語 中国')) {
          uttr.name = '中国語 中国'
          return true
        }
        if (voice.name.includes('Yu-shu')) {
          uttr.name = 'Yu-shu'
          return true
        }
        if (voice.name.includes('Google 普通话（中国大陆）')) {
          uttr.name = 'Google 普通话（中国大陆）'
          return true
        }
        if (voice.name.includes('普通话（中国大陆）')) {
          uttr.name = '普通话（中国大陆）'
          return true
        }
      })
      voices.some(function (voice) {
        if (voice.lang.includes('zh')) {
          isChinese = true
        }
        if (voice.lang.includes('zh-TW')) {
          uttr.lang = 'zh-TW'
          return true
        }
        if (voice.lang.includes('zh_TW_#Hant')) {
          uttr.lang = 'zh_TW_#Hant'
          return true
        }
        if (voice.lang.includes('zh-CN')) {
          uttr.lang = 'zh-CN'
          return true
        }
        if (voice.lang.includes('zh_CN_#Hans')) {
          uttr.lang = 'zh_CN_#Hans'
          return true
        }
      })
      if (isChinese === false) {
        const agent = window.navigator.userAgent
        return 'お使いのブラウザーは単語再生に対応していない可能性があります。(2)' + agent
      }
      console.log('lang=' + uttr.lang)
      console.log('name=' + uttr.name)
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
