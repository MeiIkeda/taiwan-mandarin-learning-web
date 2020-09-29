<template>
  <section class="container_vocabulary">
    <Header
      :name="'about'"
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
    <div class="main-text">
      <div class="text-itself-about">
        <br>
        <h1 style="font-size: 20px; text-align: center">
          サイト概要
        </h1>
        <br>
        <p>
          華語とは中国語を指し、地域によって様々な方言が存在します。<br>
          華語は台湾でも共通語として使用されており、繁体字と呼ばれる文字を使う事などを特徴とします。<br>
          <br>
          管理人が台湾華語を学ぶ際に、繁体字の教材が少ないなと感じた事がサイト制作のきっかけでした。<br>
          サイト内の単語情報には、簡体字(中国語の文字として最も広く使用される)もなるべく併記しますが、<br>
          台湾独特の言い回し等がコンテンツに含まれる可能性があるため、サイト名を「台湾華語」としています。<br>
          <br>
          サイトには、単語聞き流しをはじめ、学習においてあると便利と思われる機能を盛り込み、随時更新していきます。<br>
          <br>
        </p>
        <p style="text-align: center">
          管理人について<br>
        </p>
        <p>
          数年間英語圏で暮らした後、アジアの食が恋しくなり台湾に移り住みました。<br>
          英語学習の経験から効率の良い学習法を模索しつつ、中国語の習得に励んでいます。<br>
          <br>
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
      :name="'about'"
    />
    <br>
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
      title: 'サイト概要 about',
      script: [
        { 'data-ad-client': process.env.GA_ADSENSE_ID }
      ],
      meta: [
        { hid: 'keywords', name: 'keywords', content: '中国語, 台湾, 台湾華語, 繁体字, 単語, 聞き流し, ボポモフォ, 當代中文課程課, 例文' },
        { hid: 'description', name: 'description', content: 'サイト概要 about' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'サイト概要 about' }
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
  .text-itself-about
    text-align: left
    margin: 0 250px
    @media screen and (max-width : 767px)
      margin: 0 20px
    //@media screen and (min-width : 1024px)
    // ここにタブレット・PCの記述
  .main-text
    animation: fadeIn 1.5s ease 0s 1 normal
    -webkit-animation: fadeIn 1.5s ease 0s 1 normal
    text-align: center
    background-image: url('../../static/img/sunset_4.jpg') !important
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
