<template>
  <section class="container_vocabulary">
    <h1 class="title_vocabulary">
      台湾華語<br>taiwan_mandarin
    </h1>
    <div align="center" style="white-space: nowrap; vertical-align: top">
      <table>
        <tbody>
          <tr style="font-weight:300; font-size: 18px; text-align:center">
            <td>
              <nuxt-link :to="{ name: 'index' }">
                ホーム<br>home
              </nuxt-link>
            </td><td>&nbsp;&nbsp;</td><td>
              <nuxt-link :to="{ name: 'about' }">
                サイト概要<br>about
              </nuxt-link>
            </td><td>&nbsp;&nbsp;</td><td>
              <nuxt-link :to="{ name: 'bopomofo' }" style="text-decoration: underline">
                ボポモフォ<br>bopomofo
              </nuxt-link>
            </td><td>&nbsp;&nbsp;</td><td>
              <nuxt-link :to="{ name: 'vocabulary' }">
                中国語語彙<br>vocabulary
              </nuxt-link>
            </td><td>&nbsp;&nbsp;</td><td>
              <nuxt-link :to="{ name: 'search' }">
                単語検索<br>search
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <!--    <head>-->
    <!--      <script data-ad-client="ca-pub-9333963654003765" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />-->
    <!--      <title />-->
    <!--    </head>-->
    <!--
    <div style="color: #3b8070" align="center">
      スポンサーリンク
    </div>
    <script data-ad-client="ca-pub-9333963654003765" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
    -->
    <div class="main-image-bopomofo">
      <b-alert v-model="showErrorAlert" style="color: red; background-color: transparent; border-color: transparent" variant="info">
        {{ error_message }}
      </b-alert>
      <div align="center">
        <br>
        <div style="color: black">
          Bopomofo
        </div>
        <table align="center" style="table-layout:fixed; text-align: center">
          <!--1行目-->
          <tbody>
            <tr>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.b)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.b }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.d)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.d }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button style="background-color: #f5f5f5; color: black" disabled>
                  &nbsp;{{ tone.three }}&nbsp;
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button style="background-color: #f5f5f5; color: black" disabled>
                  &nbsp;{{ tone.four }}&nbsp;
                </b-button>
              </td>

              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.zh)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.zh }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button style="background-color: #f5f5f5; color: black" disabled>
                  &nbsp;{{ tone.two }}&nbsp;
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button style="background-color: #f5f5f5; color: black" disabled>
                  &nbsp;{{ tone.five }}&nbsp;
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.a)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.a }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.ai)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.ai }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.an)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.an }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.er)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.er }}
                </b-button>
              </td>
            </tr>
            <tr>
              <td>{{ pinyin.b }}</td><td>{{ pinyin.d }}</td><td /><td /><td>{{ pinyin.zh }}</td><td /><td /><td>{{ pinyin.a }}</td><td>{{ pinyin.ai }}</td><td>{{ pinyin.an }}</td><td>{{ pinyin.er }}</td>
            </tr>
          </tbody>
        </table>
        <table align="center" style="table-layout:fixed; text-align: center">
          <!--2行目-->
          <tbody>
            <tr>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.p)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.p }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.t)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.t }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.g)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.g }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.j)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.j }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.ch)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.ch }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.z)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.z }}
                </b-button>
              </td><td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.y)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.y }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.o)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.o }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.ei)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.ei }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.en)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.en }}
                </b-button>
              </td>
            </tr>
            <tr>
              <td>{{ pinyin.p }}</td><td>{{ pinyin.t }}</td><td>{{ pinyin.g }}</td><td>{{ pinyin.j }}</td><td>{{ pinyin.ch }}</td><td>{{ pinyin.z }}</td><td>{{ pinyin.y }}</td><td>{{ pinyin.o }}</td><td>{{ pinyin.ei }}</td><td>{{ pinyin.en }}</td>
            </tr>
          </tbody>
        </table>

        <table align="center" style="margin-left:40px; table-layout:fixed; text-align: center">
          <!--3行目-->
          <tbody>
            <tr>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.m)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.m }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.n)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.n }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.k)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.k }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.q)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.q }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.sh)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.sh }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.c)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.c }}
                </b-button>
              </td><td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.w)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.w }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.e)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.e }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.ao)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.ao }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.ang)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.ang }}
                </b-button>
              </td>
            </tr>
            <tr>
              <td>{{ pinyin.m }}</td><td>{{ pinyin.n }}</td><td>{{ pinyin.k }}</td><td>{{ pinyin.q }}</td><td>{{ pinyin.sh }}</td><td>{{ pinyin.c }}</td><td>{{ pinyin.w }}</td><td>{{ pinyin.e }}</td><td>{{ pinyin.ao }}</td><td>{{ pinyin.ang }}</td>
            </tr>
          </tbody>
        </table>
        <table align="center" style="margin-left:0px; table-layout:fixed; text-align: center">
          <!--4行目-->
          <tbody>
            <tr>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.f)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.f }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.l)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.l }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.h)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.h }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.x)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.x }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.r)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.r }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.s)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.s }}
                </b-button>
              </td><td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.yu)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.yu }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.eh)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.eh }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.ou)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.ou }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.eng)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.eng }}
                </b-button>
              </td>
            </tr>
            <tr>
              <td>{{ pinyin.f }}</td><td>{{ pinyin.l }}</td><td>{{ pinyin.h }}</td><td>{{ pinyin.x }}</td><td>{{ pinyin.r }}</td><td>{{ pinyin.s }}</td><td>{{ pinyin.yu }}</td><td>{{ pinyin.eh }}</td><td>{{ pinyin.ou }}</td><td>{{ pinyin.eng }}</td>
            </tr>
          </tbody>
        </table>
        <!-- <p>声調記号</p>-->
        <br>
        <div style="color: black; white-space: nowrap">
          声調記号
        </div>
        <table class="table-bordered">
          <thead class="thead-light" style="background-color: #e6e6fa">
            <tr><th>第一声</th><th>第二声</th><th>第三声</th><th>第四声</th><th>軽声</th></tr>
          </thead>
          <tbody style="text-align: center">
            <tr><td>無し</td><td>{{ tone.two }}</td><td>{{ tone.three }}</td><td>{{ tone.four }}</td><td>{{ tone.five }}</td></tr>
          </tbody>
        </table>
        <br><br>
      </div>
    </div>
    <br>
    <div align="center">
      <p style="font-weight: bold">
        ボポモフォ
      </p>
      <p>
        ボポモフォ(Bopomofo)とは、またの名を注音(ㄓㄨˋ ㄧㄣ)と言い、台湾のひらがなにあたります。<br>
        各漢字に対し、母音と子音を計1~3字、そして声調記号を組み合わせて発音を表します。<br>
        「あいうえお」のように、最初の4つ「ㄅ・ㄆ・ㄇ・ㄈ」の読みから、ボポモフォ(Bopomofo)と呼ばれています。<br>
      </p>
      <hr width="80%">
      <br>
      <p style="font-weight: bold">
        ピンイン
      </p>
      <p>
        台湾以外では、中国語の発音記号として、拼音(ピンイン)と呼ばれるアルファベット表記のものが広く使われています。<br>
        ボポモフォよりもピンインの方が発音記号として一般的ではありますが、<br>
        アルファベット表記なのでどうしても英語またはローマ字を連想してしまい、誤った発音になりがちです。<br>
        先入観に囚われることなく事無く発音を学べるという点で、ボポモフォは大変有効です。<br>
      </p>
      <hr width="80%">
      <br>
      <p style="font-weight: bold">
        声調
      </p>
      <p>
        中国語は、音の高低によっても単語の意味が区別され、この音の高低の事を声調と言います。<br>
        日本語で例えるなら雨と飴のように、音としては同一であっても、イントネーションの違いによって意味は全く異なります。<br>
        上記の表の通り、中国語には5種類の声調が存在し、これをボポモフォ(またはピンイン)と組み合わせて最終的な発音を表します。<br>
        例：ㄊㄞˊㄨㄢ<br>
        各声調の違いを確認するために、例としてㄇㄚの発音を下記に記しました。<br>
        (よく聞く、「まーまーまーまー」という例。)
      </p>
      <table class="table-bordered" style="align: center; text-align: left">
        <thead style="text-align: center">
          <tr>
            <th style="background-color: #e6e6fa">
              第一声
            </th>
            <th style="background-color: #e6e6fa">
              第二声
            </th>
            <th style="background-color: #e6e6fa">
              第三声
            </th>
            <th style="background-color: #e6e6fa">
              第四声
            </th>
            <th style="background-color: #e6e6fa">
              軽声
            </th>
          </tr>
        </thead>
        <tbody style="white-space:nowrap; align: center; text-align: center">
          <tr>
            <td>
              <b-button @click="speak_bopomofo('ㄇㄚ')" style="background-color: #f7f8fb; color: black">
                ㄇㄚ
              </b-button>
            </td>
            <td>
              <b-button @click="speak_bopomofo('ㄇㄚˊ')" style="background-color: #f7f8fb; color: black">
                ㄇㄚˊ
              </b-button>
            </td>
            <td>
              <b-button @click="speak_bopomofo('ㄇㄚˇ')" style="background-color: #f7f8fb; color: black">
                ㄇㄚˇ
              </b-button>
            </td>
            <td>
              <b-button @click="speak_bopomofo('ㄇㄚˋ')" style="background-color: #f7f8fb; color: black">
                ㄇㄚˋ
              </b-button>
            </td>
            <td>
              <b-button @click="speak_bopomofo('ㄇㄚ˙')" style="background-color: #f7f8fb; color: black">
                ㄇㄚ˙
              </b-button>
            </td>
          </tr>
        </tbody>
      </table>
      <hr width="80%">
      <br>
      <p>
        本ページには、ボポモフォと、対応するピンインを載せています。<br>
        台湾のパソコン/スマホのキーボードと並びが同じなので、眺めてみて下さい。<br>
        キーボードの[<span style="background-color: honeydew">&nbsp;&nbsp;&nbsp;</span>]で色付けされた部分が子音で、
        [<span style="background-color: aliceblue">&nbsp;&nbsp;&nbsp;</span>]の部分が母音です。<br>
        各ボポモフォのボタンを押すと、発音を聞くことができます。<br>
      </p>
      <p style="color: red">
        ※音声再生に関して:お使いのブラウザやバージョンによっては、音声再生に対応していない場合があります。<br>
        推奨ブラウザはGoogle Chromeです。<br>
      </p>
      <p>
        本格的に勉強したい場合は、お持ちのパソコン/スマホにボポモフォキーボードをインストールしてみるのもお勧めです。<br>
      </p>
    </div>
    <!--
    <div style="color: #3b8070" align="center">
      スポンサーリンク
    </div>
    <script data-ad-client="ca-pub-9333963654003765" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
    -->
    <br>
    <div align="center" style="white-space: nowrap; vertical-align: top">
      <table>
        <tbody>
          <tr style="font-weight:300; font-size: 16px; text-align:center">
            <td>
              <nuxt-link :to="{ name: 'privacypolicy' }">
                プライバシー＆ポリシー<br>privacy&policy
              </nuxt-link>
            </td><td>&nbsp;&nbsp;</td><td /><td>&nbsp;&nbsp;</td><td>
              <nuxt-link :to="{ name: 'contact' }">
                お問い合わせ<br>contact
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: '台湾華語 taiwan-mandarin/bopomofo'
    }
  },

  data () {
    return {
      selected: '',
      tone: {
        one: '',
        two: 'ˊ',
        three: 'ˇ',
        four: 'ˋ',
        five: '˙'
      },
      bopomofo: {
        b: 'ㄅ',
        p: 'ㄆ',
        m: 'ㄇ',
        f: 'ㄈ',
        d: 'ㄉ',
        t: 'ㄊ',
        n: 'ㄋ',
        l: 'ㄌ',
        g: 'ㄍ',
        k: 'ㄎ',
        h: 'ㄏ',
        j: 'ㄐ',
        q: 'ㄑ',
        x: 'ㄒ',
        zh: 'ㄓ',
        ch: 'ㄔ',
        sh: 'ㄕ',
        r: 'ㄖ',
        z: 'ㄗ',
        c: 'ㄘ',
        s: 'ㄙ',
        a: 'ㄚ',
        o: 'ㄛ',
        e: 'ㄜ',
        eh: 'ㄝ',
        ai: 'ㄞ',
        ei: 'ㄟ',
        ao: 'ㄠ',
        ou: 'ㄡ',
        an: 'ㄢ',
        en: 'ㄣ',
        ang: 'ㄤ',
        eng: 'ㄥ',
        er: 'ㄦ',
        y: 'ㄧ',
        w: 'ㄨ',
        yu: 'ㄩ'
      },
      pinyin: {
        b: 'b',
        p: 'p',
        m: 'm',
        f: 'f',
        d: 'd',
        t: 't',
        n: 'n',
        l: 'l',
        g: 'g',
        k: 'k',
        h: 'h',
        j: 'j',
        q: 'q',
        x: 'x',
        zh: 'zh',
        ch: 'ch',
        sh: 'sh',
        r: 'r',
        z: 'z',
        c: 'c',
        s: 's',
        a: 'a',
        o: 'o',
        e: 'e',
        eh: 'ê',
        ai: 'ai',
        ei: 'ei',
        ao: 'ao',
        ou: 'ou',
        an: 'an',
        en: 'en',
        ang: 'ang',
        eng: 'eng',
        er: 'er',
        y: 'i/y',
        w: 'u/w',
        yu: 'ü/yu'
      },
      error_message: '',
      showErrorAlert: false
    }
  },

  methods: {
    speak_bopomofo (char) {
      const agent = window.navigator.userAgent
      if (!('SpeechSynthesisUtterance' in window)) {
        this.error_message = 'お使いのブラウザは音声再生に対応していない可能性があります。 (Google Chrome推奨)'
        this.error_message_sentry = 'お使いのブラウザは単語再生に対応していない可能性があります。(1)' + agent
        console.log(this.error_message_sentry)
        this.showErrorAlert = true
        this.$sentry.captureException(new Error('Error = ' + this.error_message_sentry))
        return
      }
      const uttr = new SpeechSynthesisUtterance(char)
      uttr.localService = false
      // uttr.lang = process.env.SPEAK_LANGUAGE
      uttr.lang = 'zh-CN'
      const voices = speechSynthesis.getVoices()
      let isChinese = false
      const me = this
      voices.forEach(function (voice, i) {
        if (voice.lang.includes('zh')) {
          isChinese = true
        }
        if ((i === (voices.length - 1)) && !isChinese) {
          const agent = window.navigator.userAgent
          me.error_message = 'お使いのブラウザーは音声再生に対応していない可能性があります。(Google Chrome推奨)'
          me.error_message_sentry = 'お使いのブラウザーは単語再生に対応していない可能性があります。(2)' + agent
          console.log(me.error_message_sentry)
          me.showErrorAlert = true
          me.$sentry.captureException(new Error('Error = ' + me.error_message_sentry))
        }
      })
      speechSynthesis.speak(uttr)
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

  .speak_button
    text-align:center
    margin:auto

  .main_table
    margin: auto
    align-self: center
    border-collapse: separate
    border-spacing:20px 5px

    //@media screen and (min-width : 1024px)
    // ここにタブレット・PCの記述
  .main-image-bopomofo
    text-align: center
    background-image: url('../../static/img/background_baloon2.jpg') !important
    width: 90%
    height: 60%
    background-size: cover
    margin: 0 auto

</style>
