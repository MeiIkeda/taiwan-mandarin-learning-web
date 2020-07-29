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
        <p style="font-size: 20px; text-align: center">
          當代中文課程課1・第2章
        </p>
        <p>
          【新単語+例文】
        </p>
        <p>
          ・
        </p>
        <SentenceFormat
          :sentence="''"
          :bopomofo="''"
          :pinyin="''"
          :translation="''"
        />
        <br>
        <p>
          ・
        </p>
        <SentenceFormat
          :sentence="''"
          :bopomofo="''"
          :pinyin="''"
          :translation="''"
        />
        <br>
        <p>
          ・
        </p>
        <SentenceFormat
          :sentence="''"
          :bopomofo="''"
          :pinyin="''"
          :translation="''"
        />
        <br>
        <p>
          ・
        </p>
        <SentenceFormat
          :sentence="''"
          :bopomofo="''"
          :pinyin="''"
          :translation="''"
        />
        <br>
        <p>
          ・
        </p>
        <SentenceFormat
          :sentence="''"
          :bopomofo="''"
          :pinyin="''"
          :translation="''"
        />
        <br>
        <p>
          ・
        </p>
        <SentenceFormat
          :sentence="''"
          :bopomofo="''"
          :pinyin="''"
          :translation="''"
        />
        <br>
        <p>
          ・
        </p>
        <SentenceFormat
          :sentence="''"
          :bopomofo="''"
          :pinyin="''"
          :translation="''"
        />
        <br>
        <p>
          ・
        </p>
        <SentenceFormat
          :sentence="''"
          :bopomofo="''"
          :pinyin="''"
          :translation="''"
        />
        <br>
        <p>
          ・
        </p>
        <SentenceFormat
          :sentence="''"
          :bopomofo="''"
          :pinyin="''"
          :translation="''"
        />
        <br>
        <p>
          ・
        </p>
        <SentenceFormat
          :sentence="''"
          :bopomofo="''"
          :pinyin="''"
          :translation="''"
        />
        <br>
        <p>
          ・
        </p>
        <SentenceFormat
          :sentence="''"
          :bopomofo="''"
          :pinyin="''"
          :translation="''"
        />
        <br>
        <p>
          ・
        </p>
        <SentenceFormat
          :sentence="''"
          :bopomofo="''"
          :pinyin="''"
          :translation="''"
        />
        <br>
        <p>
          ・
        </p>
        <SentenceFormat
          :sentence="''"
          :bopomofo="''"
          :pinyin="''"
          :translation="''"
        />
        <br>
        <p>
          ・
        </p>
        <SentenceFormat
          :sentence="''"
          :bopomofo="''"
          :pinyin="''"
          :translation="''"
        />
        <br>
        <p>
          ・
        </p>
        <SentenceFormat
          :sentence="''"
          :bopomofo="''"
          :pinyin="''"
          :translation="''"
        />
        <br>
        <p>
          ・
        </p>
        <SentenceFormat
          :sentence="''"
          :bopomofo="''"
          :pinyin="''"
          :translation="''"
        />
        <br>

        <p>
          ・
        </p>
        <SentenceFormat
          :sentence="''"
          :bopomofo="''"
          :pinyin="''"
          :translation="''"
        />
        <br>
        <p>
          ・
        </p>
        <SentenceFormat
          :sentence="''"
          :bopomofo="''"
          :pinyin="''"
          :translation="''"
        />
        <br>
        <p>
          ・
        </p>
        <SentenceFormat
          :sentence="''"
          :bopomofo="''"
          :pinyin="''"
          :translation="''"
        />
        <br>
        <p>
          ・
        </p>
        <SentenceFormat
          :sentence="''"
          :bopomofo="''"
          :pinyin="''"
          :translation="''"
        />
        <br>
        <p>
          ・
        </p>
        <SentenceFormat
          :sentence="''"
          :bopomofo="''"
          :pinyin="''"
          :translation="''"
        />
        <br>
        <p>
          ・
        </p>
        <SentenceFormat
          :sentence="''"
          :bopomofo="''"
          :pinyin="''"
          :translation="''"
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
      title: '台湾華語 taiwan-mandarin/blog',
      script: [
        { 'data-ad-client': process.env.GA_ADSENSE_ID }
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
