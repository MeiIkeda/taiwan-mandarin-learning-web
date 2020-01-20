export default {
  methods: {
    mySpeak (word) {
      const agent = window.navigator.userAgent
      if (!('SpeechSynthesisUtterance' in window)) {
        return 'お使いのブラウザは単語再生に対応していない可能性があります。(1)' + agent
      }
      const uttr = new SpeechSynthesisUtterance(word)
      let isChinese = false
      let includeZhCn = false
      let includeTianTian = false
      const voices = speechSynthesis.getVoices()
      voices.forEach(function (voice, i) {
        if (voice.lang.includes('zh')) {
          isChinese = true
          // uttr.lang = 'zh'
        }
        if (voice.lang.includes('zh-CN')) {
          includeZhCn = true
          // uttr.lang = 'zh'
        }
        if (voice.lang.includes('Tian-Tian')) {
          includeTianTian = true
          // uttr.lang = 'zh'
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
      } else if (includeTianTian === true) {
        uttr.name = 'Tian-Tian'
        uttr.lang = 'zh-CN'
      } else if (includeZhCn === true) {
        uttr.lang = 'zh-CN'
      } else {
        uttr.lang = 'zh'
      }
      console.log('debug:' + uttr)
      speechSynthesis.cancel()
      speechSynthesis.speak(uttr)
      return 'success'
    }
  }
}
