<template>
  <section class="container_vocabulary">
    <Header
      :name="'blog'"
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
      <div>
        <br>
        <p style="font-size: 20px; text-align: center">
          例文集
        </p>
        <p class="text-itself-about">
          ・シーン別<br>
          シーン別の例文集です。<br>
        </p>
        <p>
          <nuxt-link :to="{ name: 'sentence-scene-introduce' }" style="text-align: center">
            初めて会う時
          </nuxt-link>
        </p>
        <br>
        <p class="text-itself-about">
          ・「當代中文課程課 A Course in Contemporary Chinese」<br>
          この教科書は台湾師範大学国語教学中心が編集したもので、
          台湾の中国語教室では、公立/私立を問わず広く使われています。<br>
          全6冊の各章毎に、新しい単語の例文+学んだ事や気づいた事を記していこうと思います。<br>
          <br>
        </p>
        <p>
          <nuxt-link :to="{ name: 'sentence-text1-lesson1' }" style="text-align: center">
            當代中文課程課1・第1章
          </nuxt-link>
          <br>
          <nuxt-link :to="{ name: 'sentence-text1-lesson2' }" style="text-align: center">
            當代中文課程課1・第2章
          </nuxt-link>
          <br>
          <nuxt-link :to="{ name: 'sentence-text1-lesson3' }" style="text-align: center">
            當代中文課程課1・第3章
          </nuxt-link>
          <br>
          <nuxt-link :to="{ name: 'sentence-text1-lesson4' }" style="text-align: center">
            當代中文課程課1・第4章
          </nuxt-link>
        </p>
        <br>
      </div>
    </div>
    <br><br>
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
      :name="'blog'"
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
      title: '台湾華語 taiwan-mandarin/sentence',
      script: [
        { 'data-ad-client': process.env.GA_ADSENSE_ID }
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
  .main-text1
    /*animation: fadeIn 1.5s ease 0s 1 normal*/
    /*-webkit-animation: fadeIn 1.5s ease 0s 1 normal*/
    text-align: center
    /*background-image: url('../../static/img/sunset_4.jpg') !important*/
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
