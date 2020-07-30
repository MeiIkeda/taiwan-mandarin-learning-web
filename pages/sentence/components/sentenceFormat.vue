<template>
  <section>
    <table>
      <tbody>
        <tr>
          <td>
            <b-button @click="speak(bopomofo)" style="background-color: lightskyblue; color: black">
              speak!
            </b-button>
          </td><td>&nbsp;&nbsp;&nbsp;</td><td>
            {{ sentence }}<br>
            {{ bopomofo }}<br>
            {{ pinyin }}<br>
            {{ translation }}<br>
            <span v-if="memo != null">{{ memo }}<br></span>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import MySpeechSynthesis from '../../../plugins/mySpeechSynthesis.js'
export default {
  component: {
    MySpeechSynthesis
  },
  props: {
    // eslint-disable-next-line vue/prop-name-casing,vue/require-default-prop
    sentence: String,
    // eslint-disable-next-line vue/prop-name-casing,vue/require-default-prop
    bopomofo: String,
    // eslint-disable-next-line vue/prop-name-casing,vue/require-default-prop
    pinyin: String,
    // eslint-disable-next-line vue/prop-name-casing,vue/require-default-prop
    translation: String,
    // eslint-disable-next-line vue/prop-name-casing,vue/require-default-prop
    memo: String
  },
  methods: {
    sleep (time) {
      return new Promise(resolve => setTimeout(resolve, time))
    },
    async speak (char) {
      const isSpeechSynthesisMessage = MySpeechSynthesis.methods.checkSpeechSynthesisUtterance()
      if (isSpeechSynthesisMessage !== 'success') {
        this.error_message = 'お使いのブラウザは音声再生に対応していない可能性があります。 (Google Chrome推奨)'
        this.$sentry.captureException(new Error('Error = ' + isSpeechSynthesisMessage))
        this.showErrorAlert = true
        return
      }
      let count = 0
      let voices = MySpeechSynthesis.methods.loadVoices()
      while (voices == null || voices.length === 0) {
        await this.sleep(1000)
        voices = MySpeechSynthesis.methods.loadVoices()
        count++
        if (count > 10) {
          break
        }
      }
      this.showErrorAlert = false
      const message = MySpeechSynthesis.methods.mySpeak(char, voices)
      if (message !== 'success') {
        this.error_message = 'お使いのブラウザは音声再生に対応していない可能性があります。 (Google Chrome推奨)'
        this.$sentry.captureException(new Error('Error = ' + message))
        this.showErrorAlert = true
      }
    }
  }
}
</script>
