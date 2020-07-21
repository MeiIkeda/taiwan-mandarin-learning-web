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
        if (voice.lang.includes('zh')) {
          isChinese = true
        }
        if (voice.lang.includes('zh-TW')) {
          uttr.voice = voice
          return true
        }
        if (voice.lang.includes('zh_TW_#Hant')) {
          uttr.voice = voice
          return true
        }
        if (voice.lang.includes('zh-CN')) {
          uttr.voice = voice
          return true
        }
        if (voice.lang.includes('zh_CN_#Hans')) {
          uttr.voice = voice
          return true
        }
        if (voice.name.includes('Mei-Jia')) {
          uttr.voice = voice
          return true
        }
        if (voice.name.includes('Google 國語（臺灣）')) {
          uttr.voice = voice
          return true
        }
        if (voice.name.includes('國語（臺灣）')) {
          uttr.voice = voice
          return true
        }
        if (voice.name.includes('中国語 台湾')) {
          uttr.voice = voice
          return true
        }
        if (voice.name.includes('中国語 中国')) {
          uttr.voice = voice
          return true
        }
        if (voice.name.includes('Yu-shu')) {
          uttr.voice = voice
          return true
        }
        if (voice.name.includes('Google 普通话（中国大陆）')) {
          uttr.voice = voice
          return true
        }
        if (voice.name.includes('普通话（中国大陆）')) {
          uttr.voice = voice
          return true
        }
      })
      if (isChinese === false) {
        const agent = window.navigator.userAgent
        return 'お使いのブラウザーは単語再生に対応していない可能性があります。(2)' + agent
      }
      console.log('voice(lang,name)=' + uttr.voice.lang + ',' + uttr.voice.name)
      speechSynthesis.cancel()
      uttr.rate = 0.7
      speechSynthesis.speak(uttr)
      return 'success'
    },
    loadVoices () {
      const voices = window.speechSynthesis.getVoices()
      return voices
    }
  }
}
