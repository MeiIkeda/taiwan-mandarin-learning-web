<template>
  <section>
    <GoogleAdsHorizontal />
    <div class="main-text-example-sentence-format">
      <div class="text-itself-example-sentence-format">
        <br>
        <h1 style="font-size: 20px; text-align: center">
          {{ data.title }}
        </h1>
        <div v-if="isPcWindow">
          <p>
            【新単語+例文】
          </p>
          <div :key="item.words" v-for="item in data.words">
            ・{{ item.word }}
            <SentenceFormat
              :sentence="item.sentence"
              :bopomofo="item.bopomofo"
              :pinyin="item.pinyin"
              :translation="item.translation"
              :memo="item.memo"
            />
            <br>
            <div v-if="(data.words.length -1 !== data.words.indexOf(item) && data.words.length -2 !== data.words.indexOf(item)) && data.words.indexOf(item) !== 0 && data.words.indexOf(item) % 7 === 0">
              <GoogleAdsHorizontal />
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <GoogleAdsHorizontal />
    <br>
  </section>
</template>

<script>
import SentenceFormat from '../components/sentenceFormat'
import GoogleAdsHorizontal from '../../components/googleAdsHorizontal'
export default {
  components: {
    SentenceFormat,
    GoogleAdsHorizontal
  },
  props: {
    // eslint-disable-next-line vue/prop-name-casing,vue/require-default-prop
    data: Object
  },
  methods: {
    isPcWindow () {
      const widthSize = this.getWindowSize()
      return widthSize > 767
    }
  }
}
</script>

<style lang="stylus">
  .text-itself-example-sentence-format
    text-align: left
    margin: 0 250px
    @media screen and (max-width : 767px)
      margin: 0 20px
  //@media screen and (min-width : 1024px)
  // ここにタブレット・PCの記述
  .main-text-example-sentence-format
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
