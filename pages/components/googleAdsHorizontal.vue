<template>
  <div style="color: #3b8070" align="center">
    <adsbygoogle :ad-format="'horizontal'" :ad-style="gadStyle" style="display:block; margin: 10px 0 0 0; padding: 0; border: #3b8070;" />
    <p style="margin: 0; padding: 0">
      Ads by Google
    </p>
    <br>
  </div>
</template>

<script>
export default {
  data () {
    return {
      widthSize: 767,
      gadStyle: {
        display: 'inline-block',
        width: this.widthSize > 767 ? '730px' : '500px'
      }
    }
  },
  mounted () {
    const widthSize = this.getWindowSize()
    if (widthSize > 767) {
      this.gadStyle.width = '730px'
    } else {
      this.gadStyle.width = '300px'
    }
  },
  methods: {
    getWindowSize () {
      return window.innerWidth
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
