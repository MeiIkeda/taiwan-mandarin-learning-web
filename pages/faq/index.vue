<template>
  <section class="container_vocabulary">
    <Header
      :name="'faq'"
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
    <div class="main-faq">
      <div class="text-itself-faq">
        <br>
        <p style="font-size: 20px; text-align: center; font-style: italic">
          FAQ/よくあるご質問
        </p>
        <p>
          <span>・音声が再生されない時</span><br>
          お使いのデバイスのスピーカーがミュート/音量ゼロになっていないかご確認ください。<br>
          <br>
          &nbsp;1)&nbsp;パソコンをお使いの場合<br>
          &nbsp;使用ブラウザをご確認ください。推奨はGoogle Chromeです。<br>
          &nbsp;2)&nbsp;スマホをお使いの場合<br>
          &nbsp;&nbsp;2-1)&nbsp;iPhoneをお使いの場合<br>
          &nbsp;&nbsp;ブラウザの「優先する言語」設定を、「繁體中文」または「简体中文」にしてみてください。<br>
          <br>
        </p>
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
      :name="'faq'"
    />
  </section>
</template>

<script>
import Header from '../components/header'
import Footer from '../components/footer'
export default {
  components: {
    Header,
    Footer
  },
  head () {
    return {
      title: 'よくあるご質問 faq',
      // script: [
      //   { 'data-ad-client': process.env.GA_ADSENSE_ID }
      // ]
      meta: [
        { hid: 'keywords', name: 'keywords', content: '中国語, 台湾, 台湾華語, 繁体字, 単語, 聞き流し, ボポモフォ, 當代中文課程課, 例文' },
        { hid: 'description', name: 'description', content: 'よくあるご質問 faq' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'よくあるご質問 faq' }
      ]
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
  .text-itself-faq
    text-align: left
    margin: 0 300px
    @media screen and (max-width : 767px)
      margin: 0 20px
    //@media screen and (min-width : 1024px)
    // ここにタブレット・PCの記述
  .main-faq
    animation: fadeIn 1.5s ease 0s 1 normal
    -webkit-animation: fadeIn 1.5s ease 0s 1 normal
    text-align: center
    background-image: url('../../static/img/binlan3.jpg') !important
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
