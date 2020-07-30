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
              <nuxt-link v-if="name === 'index'" :to="{ name: 'index' }" style="text-decoration: underline">
                ホーム<br>home
              </nuxt-link>
              <nuxt-link v-else :to="{ name: 'index' }">
                ホーム<br>home
              </nuxt-link>
            </td><td>&nbsp;&nbsp;</td><td>
              <nuxt-link v-if="name === 'about'" :to="{ name: 'about' }" style="text-decoration: underline">
                サイト概要<br>about
              </nuxt-link>
              <nuxt-link v-else :to="{ name: 'about' }">
                サイト概要<br>about
              </nuxt-link>
            </td><td>&nbsp;&nbsp;</td><td>
              <nuxt-link v-if="name === 'bopomofo'" :to="{ name: 'bopomofo' }" style="text-decoration: underline">
                ボポモフォ<br>bopomofo
              </nuxt-link>
              <nuxt-link v-else :to="{ name: 'bopomofo' }">
                ボポモフォ<br>bopomofo
              </nuxt-link>
            </td><td>&nbsp;&nbsp;</td><td>
              <nuxt-link v-if="name === 'vocabulary'" :to="{ name: 'vocabulary' }" style="text-decoration: underline">
                中国語語彙<br>vocabulary
              </nuxt-link>
              <nuxt-link v-else :to="{ name: 'vocabulary' }">
                中国語語彙<br>vocabulary
              </nuxt-link>
            </td><td>&nbsp;&nbsp;</td><td>
              <nuxt-link v-if="name === 'search'" :to="{ name: 'search' }" style="text-decoration: underline">
                単語検索<br>search
              </nuxt-link>
              <nuxt-link v-else :to="{ name: 'search' }">
                単語検索<br>search
              </nuxt-link>
            </td><td>&nbsp;&nbsp;</td><td>
              <nuxt-link v-if="name === 'sentence'" :to="{ name: 'sentence' }" style="text-decoration: underline">
                例文集<br>sentence
              </nuxt-link>
              <nuxt-link v-else :to="{ name: 'sentence' }">
                例文集<br>sentence
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>
      <br>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/prop-name-casing,vue/require-default-prop
    name: String
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
