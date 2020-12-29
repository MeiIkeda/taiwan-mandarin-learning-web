<template>
  <section class="container_vocabulary">
    <Header
      :name="'vocabulary'"
    />
    <GoogleAds />
    <div class="main-image-vocabulary">
      <b-alert v-model="showErrorAlert" style="text-align:center; color: red; background-color: transparent; border-color: transparent" variant="info">
        {{ error_message }}
      </b-alert>
      <div class="choose_level">
        <label>Choose Level
          <select v-model="level" class="custom-select">
            <option disabled value="">選択</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <!--<option value="18">18</option>-->
          </select>
        </label>
      </div>
      <div class="next_button">
        <b-button @click="autoStart" style="background-color: #f0fff0; color: black">
          AutoStart
        </b-button>
        <b-button @click="autoStop" style="background-color: #f8f8ff; color: black">
          AutoStop
        </b-button><br><br>
        <b-button @click="back" style="background-color: #ffebcd; color: black">
          Back
        </b-button>
        <b-button @click="speak" style="background-color: #f0f8ff; color: black">
          Speak!
        </b-button>
        <b-button @click="next" style="background-color: lemonchiffon; color: black">
          Next
        </b-button>
      </div>
      <div class="body_vocabulary">
        <table class="main_table">
          <tbody>
            <tr>
              <td style="white-space:nowrap">
                <div class="word_itself">
                  {{ word.traditional }}
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div align="center">
          <table class="table-bordered" style="align: center; text-align: left">
            <thead style="white-space:nowrap; align: center; text-align: center;">
              <tr>
                <th>繁体字(Traditional)</th>
                <th>簡体字(Simplified)</th>
              </tr>
            </thead>
            <tbody style="white-space:nowrap; align: center; text-align: center">
              <tr>
                <td>{{ word.traditional }}</td>
                <td>{{ word.simplified }}</td>
              </tr>
            </tbody>
            <thead style="white-space:nowrap; align: center; text-align: center">
              <tr>
                <th>拼音(Pinyin)</th>
                <th>注音(Bopomofo)</th>
              </tr>
            </thead>
            <tbody style="white-space:nowrap; align: center; text-align: center">
              <tr>
                <td>{{ word.pinyin }}</td>
                <td>{{ word.bopomofo }}</td>
              </tr>
            </tbody>
          </table>
          <br>
          <div>意味(Meaning):{{ word.meaning }}</div>
          <!--     <table class="table-bordered" style="align: center; text-align: left">
            <thead style="white-space:nowrap; align: center; text-align: center">
            <tr>
              <th>意味(Meaning)</th>
            </tr>
            </thead>
            <tbody style="white-space:nowrap; align: center; text-align: center">
            <tr>
              <td>{{ word.meaning }}</td>
            </tr>
            </tbody>
          </table>-->
          <br>
          <div v-if="word.exampleDtoList != null && word.exampleDtoList.length !== 0">
            <table style="align: center; text-align: left">
              <tbody style="white-space:nowrap; align: center; text-align: center">
                <!-- <tr>-->
                <tr v-for="list in word.exampleDtoList" :key="list.id">
                  <td>例文</td><td>:</td><td>{{ list.sentence }}</td>
                  <td>訳</td><td>:</td><td>{{ list.translation }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br>
      </div>
    </div>
    <div align="center">
      <div class="text-itself-vocabulary">
        <GoogleAds />
        <br>
        <hr width="80%">
        <h1 style="font-size:17px; font-weight: bold; text-align: center">
          台湾華語&nbsp;語彙ページ&nbsp;<br>(レベル別単語リスト、発音、聞き流しetc)
        </h1>
        <br>
        <p>
          このページでは、単語をレベル毎に取得して、意味や発音を確認したり、単語の聞き流しをしたりする事ができます。<br>
        </p><p style="font-weight: bold">
          1). レベル別単語リストの取得
        </p>
        <p>
          「Choose Level」からレベルを選び、データを取得してください。各レベルには、およそ150の単語が含まれています。<br>
          <span style="color: red">※混雑状況などにより、データが反映されるまで時間がかかる事があります。</span>
        </p>
        <!--<p> おおよそですが、中国語検定HSKとの対照表は以下の通りです。<br>
      </p>
      <table class="table-bordered" style="align: center; text-align: left">
        <tbody style="white-space:nowrap; align: center; text-align: center">
          <tr>
            <td style="background-color: mintcream">
              1級
            </td><td>Level 1</td>
          </tr>
          <tr>
            <td style="background-color: mintcream">
              2級
            </td><td>Level 2</td>
          </tr>
          <tr>
            <td style="background-color: mintcream">
              3級
            </td><td>Level 3 ~ Level 4</td>
          </tr>
          <tr>
            <td style="background-color: mintcream">
              4級
            </td><td>Level 5 ~ Level 8</td>
          </tr>
          <tr>
            <td style="background-color: mintcream">
              5級
            </td><td>Level 9 ~ Level 17</td>
          </tr>
          <tr>
            <td style="background-color: mintcream">
              6級
            </td><td>Level 18 ~ ※準備中</td>
          </tr>
        </tbody>
      </table>-->
        <p style="font-weight: bold">
          2). 基本操作
        </p>
        <p>
          単語の発音を聞きたいときは「Speak!」、次の単語を見たいときは「Next」、前の単語に戻りたい時は「Back」を押して下さい。<br>
        </p>
        <p style="font-weight: bold">
          3). 聞き流し
        </p>
        <p>
          「AutoStart」を押すと、単語リストを自動再生します。「AutoStop」で、自動再生を終了します。<br><br>
          <span style="color: red">※音声再生に関して：お使いのブラウザやバージョンによっては、音声再生に対応していない場合があります。
            詳しくは
            <nuxt-link :to="{ name: 'faq' }">
              FAQページ
            </nuxt-link>
            をご覧ください。<br></span>
        </p>
        <p>
          発音記号ボポモフォ/ピンイン  について詳しく知りたい場合は、
          <nuxt-link :to="{ name: 'bopomofo' }">
            ボポモフォ解説ページ
          </nuxt-link>
          へ移動してください。<br>
        </p>
        <hr width="80%">
        <p style="font-weight: bold">
          単語学習にあたって
        </p>
        <p>
          日本語においては、1つの漢字が複数の読み方を持つのが普通です。
          しかし中国語では、例外はあるものの、基本的に読み方は1つです。<br>
          したがって、例えば「台湾」という単語の読み方さえ覚えれば、別の場面で「台」や「湾」という漢字が出てきた時、意味は分からなかったとしても、 少なくとも読む事ができるようになります。<br>
          <br>
          そもそも個々の漢字はそれぞれ意味を持っており、同じく漢字を使う日本人はそれらの意味が何となく頭に入っている事が多いので、
          中国語の読み方さえ分かれば、語彙力を飛躍的に伸ばすことができる筈です。<br>
          多くの単語の発音を聞く事で1つ1つの漢字の読み方が記憶に定着しますので、是非たくさん聞いてみて下さい。
          本ページの聞き流し機能(AutoStart/Stopボタン)を使うと、たくさんの単語を手軽に聞き流すことができます。<br>
          <br>
          最初はおおまかな読み方を把握するだけでも効果的だと思いますが、 それぞれの単語の発音記号(=ボポモフォ/ピンインと声調記号)も覚える事ができれば、より正確に安定した発音をする事ができます。
          更に中国語キーボードも使う事ができるようにもなりますので、是非少しずつ覚えてみて下さい。<br>
          ※
          <nuxt-link :to="{ name: 'bopomofo' }">
            ボポモフォ解説ページ
          </nuxt-link>
          に、一般的なボポモフォキーボードの並びを表示しています。<br>
        </p>
        <hr width="80%">
      </div>
    </div>
    <GoogleAds />
    <Footer
      :name="'vocabulary'"
    />
  </section>
</template>

<script>
import Header from '../components/header'
import Footer from '../components/footer'
import MySpeechSynthesis from '../../plugins/mySpeechSynthesis.js'
import GoogleAds from '../components/googleAdsHorizontal'
export default {
  head () {
    return {
      title: '中国語語彙 vocabulary',
      meta: [
        { hid: 'description', name: 'description', content: '中国語語彙ページ。 レベル別に単語を表示したり、音声再生、聞き流しができます' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: '中国語語彙ページ。 レベル別に単語を表示したり、音声再生、聞き流しができます' }
      ]
    }
  },
  components: {
    Header,
    Footer,
    GoogleAds
  },
  component: {
    MySpeechSynthesis
  },

  data () {
    return {
      level: 1,
      word_index: 0,
      word: {
        simplified: '台湾',
        traditional: '台湾',
        pinyin: 'tai2 wan1',
        bopomofo: 'ㄊㄞˊㄨㄢ',
        meaning: '台湾',
        pronunciation: ''
      },
      word_fromDB: [],
      error_message: '',
      error_message_sentry: '',
      isAuto: false,
      timer: '',
      count: 0,
      showErrorAlert: false,
      isSearching: false
    }
  },

  watch: {
    level (val) {
      this.getData()
    }
  },

  mounted () {
    this.getData()
  },

  methods: {
    async getData () {
      this.isAuto = false
      this.showErrorAlert = false
      this.word_fromDB = []
      const me = this
      this.isSearching = true
      const data = await this.$axios.$get(process.env.BASE_URL_API + '/api/v1/vocabulary/' + this.level, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        auth: {
          username: process.env.BASIC_AUTH_USERNAME,
          password: process.env.BASIC_AUTH_PASSWORD
        }
      }).catch(function (error) {
        if (error.response) {
          if (error.response.data && error.response.data.message != null) {
            me.error_message = '単語情報を取得できません。 しばらくしてからもう一度お試しください。'
            me.error_message_sentry = '単語情報を取得できません。 しばらくしてからもう一度お試しください。' + error.response.data.message
          } else {
            me.error_message = '単語情報を取得できません。 しばらくしてからもう一度お試しください。'
            me.error_message_sentry = '単語情報を取得できません。 しばらくしてからもう一度お試しください。' + error
          }
          me.showErrorAlert = true
          me.$sentry.captureException(new Error('Error = ' + me.error_message_sentry))
        } else {
          me.error_message = '単語情報を取得できません。 しばらくしてからもう一度お試しください。'
          me.error_message_sentry = '単語情報を取得できません。 しばらくしてからもう一度お試しください。' + error
          me.showErrorAlert = true
          me.$sentry.captureException(new Error('Error = ' + me.error_message_sentry))
        }
      })
      if (data) {
        this.word_fromDB = data
        this.word = this.word_fromDB[0]
      }
      this.isSearching = false
    },

    next () {
      if (this.isSearching) {
        return
      }
      if (this.word_index === (this.word_fromDB.length - 1)) {
        this.word_index = 0
        this.word = this.word_fromDB[this.word_index]
      } else {
        this.word_index++
        this.word = this.word_fromDB[this.word_index]
      }
    },
    back () {
      if (this.isSearching) {
        return
      }
      if (this.word_index === 0) {
        this.word_index = this.word_fromDB.length - 1
        this.word = this.word_fromDB[this.word_index]
      } else {
        this.word_index--
        this.word = this.word_fromDB[this.word_index]
      }
    },

    sleep (time) {
      return new Promise(resolve => setTimeout(resolve, time))
    },

    async interval (voices) {
      this.showErrorAlert = false
      const message = MySpeechSynthesis.methods.mySpeak(this.word.traditional, voices)
      if (message !== 'success') {
        this.error_message = 'お使いのブラウザは音声再生に対応していない可能性があります。 (Google Chrome推奨)'
        this.$sentry.captureException(new Error('Error = ' + message))
        this.showErrorAlert = true
      }
      await this.sleep(2000)
      MySpeechSynthesis.methods.mySpeak(this.word.traditional, voices)
      await this.sleep(3000)
      this.count++
    },

    async autoStart () {
      if (this.isSearching) {
        return
      }
      this.isAuto = true
      while (this.isAuto) {
        let count = 0
        let voices = MySpeechSynthesis.methods.loadVoices()
        while (voices == null || voices.length === 0) {
          console.log('count=' + count)
          await this.sleep(1000)
          voices = MySpeechSynthesis.methods.loadVoices()
          count++
          if (count > 10) {
            break
          }
        }
        await this.interval(voices)
        this.next()
        if (this.count === 1000) {
          break
        }
      }
    },
    autoStop () {
      if (this.isSearching) {
        return
      }
      this.isAuto = false
    },
    async speak () {
      if (this.isSearching) {
        return
      }
      if (this.word_fromDB === null || this.word_fromDB === []) {
        return
      }
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
      const message = MySpeechSynthesis.methods.mySpeak(this.word.traditional, voices)
      if (message !== 'success') {
        this.error_message = 'お使いのブラウザは音声再生に対応していない可能性があります。 (Google Chrome推奨)'
        this.$sentry.captureException(new Error('Error = ' + message))
        this.showErrorAlert = true
      }
    }
  }
}
</script>

<style lang="stylus">
  .title_vocabulary
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
    display: block
    font-weight: 300
    font-size: 50px
    text-align :center
    color: #35495e
    letter-spacing: 1px
  .subtitle_vocabulary
    font-weight: 300
    font-size: 20px
    align: center !important
    text-align :center
    color: #526488

  .container
    margin: auto
    min-height: 100vh
    display: flex
    justify-content: center
    align-items: center
    text-align: center

  .word_itself
    font-family:serif
    font-size: 90px
    border: groove
    color: black
    text-shadow: 1.5px 1.5px 0 white

  .body_vocabulary
    // margin: 0px 100px 0px 100px
    margin: 0px auto 0px auto
    color: black
    font-weight: bold
    text-shadow: 0.5px 0.5px 0 white

  .speak_button
    text-align:center
    margin:auto

  .main_table
    margin: auto
    align-self: center
    //text-align: center
    border-collapse: separate
    border-spacing:20px 5px

  .choose_level
    text-align:center
    margin: auto

  .next_button
    text-align:center
    margin: auto

  .custom-select
    width:60px
    position: relative
    display: inline-block
    background-color:#e0ffff
    outline: none !important
    border:1px solid black
  .text-itself-vocabulary
    text-align: left
    margin: 0 250px
    @media screen and (max-width : 767px)
      margin: 0 20px
  // @media screen and (min-width : 1024px)
  // ここにタブレット・PCの記述
  .main-image-vocabulary
    animation: fadeIn 1.5s ease 0s 1 normal
    -webkit-animation: fadeIn 1.5s ease 0s 1 normal
    text-align: left
    background-image: url('../../static/img/lion_3.jpg') !important
    width: 95%
    background-size: cover
    margin: 0 auto
    @media screen and (max-width : 767px)
      width: 100%
  /* じわっと画像が表示される */
  @keyframes fadeIn  /*上のbody内で呼び出しているアニメーションと名前をそろえる*/
    0% {opacity: 0} /* 始め */
    100% {opacity: 1} /* 終わり */
  /*古いブラウザ用*/
  @-webkit-keyframes fadeIn
    0% {opacity: 0}
    100% {opacity: 1}
</style>
