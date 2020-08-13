<template>
  <section>
    <Header
      :name="'sentence'"
    />
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
    <div class="main-text1">
      <div class="text-itself-about">
        <br>
        <h1 style="font-size: 20px; text-align: center">
          自己紹介
        </h1>
        <p>
          ・初めて会う時
        </p>
        <SentenceFormat
          :sentence="'初次見面. 我姓田中, 叫誠一.'"
          :bopomofo="'ㄔㄨ ㄘˋ ㄐㄧㄢˋ ㄇㄧㄢˋ. ㄨㄛˇ ㄒㄧㄥˋ ㄊㄧㄢˊ ㄓㄨㄥ, ㄐㄧㄠˋ ㄔㄥˊ ㄧ'"
          :pinyin="'chu1 ci4 jian4 mian4. wo3 xing4 tian2 zhong1, jiao4 cheng2 yi1.'"
          :translation="'初めまして。名字を田中、名前を誠一といいます。'"
        />
        <br>
        <SentenceFormat
          :sentence="'我是工程師, 現在在東京.'"
          :bopomofo="'ㄨㄛˇ ㄕˋ ㄍㄨㄥ ㄔㄥˊ ㄕ, ㄒㄧㄢˋ ㄗㄞˋ ㄗㄞˋ ㄉㄨㄥ ㄐㄧㄥ'"
          :pinyin="'wo3 shi4 gong1 cheng2 shi1, xian4 zai4 zai4 dong1 jing1.'"
          :translation="'私はエンジニアで、現在東京にいます。'"
        />
        <br>
        <p>
          ・名前を尋ねる
        </p>
        <SentenceFormat
          :sentence="'小姐, 您貴姓? 您是哪裡人呢?'"
          :bopomofo="'ㄒㄧㄢ ㄕㄥ, ㄋㄧㄣˊ ㄍㄨㄟˋ ㄒㄧㄥˋ? ㄋㄧㄣˊ ㄕˋ ㄋㄚˇ ㄌㄧˇ ㄖㄣˊ ㄋㄜ˙?'"
          :pinyin="'xiao2 jie3, nin2 gui4 xing4? nin2 shi4 na3 li3 ren2 ne?'"
          :translation="'あなた、お名前は何ですか? どこから来ましたか?'"
          :memo="'※呼びかけ：男性の場合は「先生(ㄒㄧㄢ ㄕㄥ)」、女性は「小姐(ㄒㄧㄠˇ ㄐㄧㄝˇ)」'"
        />
        <br>
        <SentenceFormat
          :sentence="'我姓王, 叫開文. 我是台灣人.'"
          :bopomofo="'ㄨㄛˇ ㄒㄧㄥˋ ㄨㄤˊ, ㄐㄧㄠˋ ㄎㄞ ㄨㄣˊ. ㄨㄛˇ ㄕˋ ㄊㄞˊ ㄨㄢ ㄖㄣˊ.'"
          :pinyin="'wo3 xing4 wang2, jiao4 kai1 wen2. wo3 shi4 tai2 wan1 ren2.'"
          :translation="'名字を王、名前を開文といいます。私は台湾人です。'"
        />
        <br>
        <p>
          ・その他
        </p>
        <SentenceFormat
          :sentence="'我的姓很特別.'"
          :bopomofo="'ㄨㄛˇ ㄉㄜ˙ ㄒㄧㄥˋ ㄏㄣˇ ㄊㄜˋ ㄅㄧㄝˊ'"
          :pinyin="'wo3 de xing4 hen3 te4 bie2'"
          :translation="'私の名前は特別です。'"
        />
        <br>
        <SentenceFormat
          :sentence="'她是東京小姐.'"
          :bopomofo="'ㄊㄚ ㄕˋ ㄉㄨㄥ ㄐㄧㄥ ㄒㄧㄠˇ ㄐㄧㄝˇ.'"
          :pinyin="'ta1 shi4 dong1 jing1 xiao3 jie3.'"
          :translation="'彼女はシティガールです。'"
        />
        <br>
      </div>
    </div>
    <br>
    <!--
    <div style="color: #3b8070" align="center">
      スポンサーリンク
    </div>
    <script data-ad-client="ca-pub-9333963654003765" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
    -->
    <!--    <head>-->
    <!--      <script data-ad-client="ca-pub-9333963654003765" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />-->
    <!--      <title />-->
    <!--    </head>-->
    <Footer
      :name="'sentence'"
    />
    <br>
  </section>
</template>

<script>
import Header from '../../components/header'
import Footer from '../../components/footer'
import MySpeechSynthesis from '../../../plugins/mySpeechSynthesis.js'
import SentenceFormat from '../components/sentenceFormat'
export default {
  components: {
    Header,
    Footer,
    SentenceFormat
  },
  component: {
    MySpeechSynthesis
  },
  head () {
    return {
      title: '例文集 sentence',
      script: [{
        'data-ad-client': process.env.GA_ADSENSE_ID,
        async: true,
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
      }],
      meta: [
        { hid: 'keywords', name: 'keywords', content: '中国語, 台湾, 台湾華語, 繁体字, 単語, 聞き流し, ボポモフォ, 當代中文課程課, 例文' },
        { hid: 'description', name: 'description', content: '例文集ページ。 シーン別の対話例や、 テキスト「當代中文課程課」で登場する単語で作成した例文など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: '例文集ページ。 シーン別の対話例や、 テキスト「當代中文課程課」で登場する単語で作成した例文など' }
      ]
    }
  }
}
</script>

<style lang="stylus">
  .text-itself-about
    text-align: left
    margin: 0 250px
    @media screen and (max-width : 767px)
      margin: 0 20px
    //@media screen and (min-width : 1024px)
    // ここにタブレット・PCの記述
  .main-text1
    /*animation: fadeIn 1.5s ease 0s 1 normal*/
    /*-webkit-animation: fadeIn 1.5s ease 0s 1 normal*/
    text-align: center
    // background-image: url('../../static/img/sunset_4.jpg') !important
    background: #f0f7ff;
    border: dashed 2px #5b8bd0;/*点線*/
    width: 95%
    height: 100%
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
