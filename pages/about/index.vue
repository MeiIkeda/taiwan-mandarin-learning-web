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
              <nuxt-link :to="{ name: 'about' }" style="text-decoration: underline">
                サイト概要<br>about
              </nuxt-link>
            </td><td>&nbsp;&nbsp;</td><td>
              <nuxt-link :to="{ name: 'bopomofo' }">
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
    <div class="main-text">
      <br>
      <p style="font-size: 20px">
        サイト概要
      </p>
      <p style="margin: 20px">
        華語とは中国語を指し、地域によって様々な方言が存在します。<br>
        華語は台湾でも共通語として使用されており、繁体字と呼ばれる文字を使う事などを特徴とします。<br>
        <br>
        管理人自身が台湾華語を学ぶ際に、繁体字の教材が少ないなと感じた事がサイト制作のきっかけでした。<br>
        サイト内の単語情報には、簡体字(中国語の文字として最も広く使用される)もなるべく併記しますが、<br>
        台湾独特の言い回し等がコンテンツに含まれる可能性があるため、サイト名を「台湾華語」としています。<br>
        <br>
        サイトには、単語聞き流しをはじめ、学習においてあると便利と思われる機能を盛り込み、<br>
        管理人自身の学習状況に応じて随時更新していきます。<br>
        <br>
      </p>
      <p>
        管理人について<br>
        数年間英語圏で暮らした後、アジアの食が恋しくなり台湾へ引っ越しました。<br>
        英語学習の経験から効率の良い学習法を模索しつつ、中国語の習得に励んでいます。<br>
        物事は大雑把に理解してから細かいところに目を向けるタイプで、<br>
        特に学習初期は、間違えを恐れない事が大切だと思っています。<br>
        <br>
        <br>
      </p>
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
      title: '台湾華語 taiwan-mandarin/about',
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

    //@media screen and (min-width : 1024px)
    // ここにタブレット・PCの記述
  .main-text
    text-align: center
    background-image: url('../../static/img/sunset_3.jpg') !important
    width: 95%
    height: 100%
    background-size: cover
    margin: 0 auto
    @media screen and (max-width : 767px)
      width: 100%

</style>
