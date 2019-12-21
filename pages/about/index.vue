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
            </td><td>&nbsp;&nbsp;</td><td>
              <nuxt-link :to="{ name: 'contact' }">
                お問い合わせ<br>contact
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>

    <div style="color: #3b8070" align="center">
      スポンサーリンク
    </div>
    <script data-ad-client="ca-pub-9333963654003765" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />

    <div class="main-text">
      <br>
      <p style="font-size: 20px">
        このサイトについて
      </p>
      <p>
        台湾好きな管理人が、中国語を勉強しつつ更新する学習サイトです。<br><br>
        華語とは中国語を指し、地域によって様々な方言が存在します。<br>
        華語は台湾でも共通語として使用されており、<br>
        繁体字と呼ばれる文字を使う事などを特徴とします。<br>
        本サイトでは、広く使用される簡体字もなるべく併記するようにしますが、<br>
        将来的に台湾独特の言い回しなどもコンテンツに含めていけたらいいなと思い、<br>
        サイト名を"台湾華語"としました。<br><br>
        学習を進めていく中で、コンテンツも充実させていけたらと思っています。<br>
        どうぞよろしくお願いいたします。<br><br>
        管理人<br><br>
      </p>
    </div>
    <br>

    <div style="color: #3b8070" align="center">
      スポンサーリンク
    </div>
    <script data-ad-client="ca-pub-9333963654003765" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
  </section>
</template>

<script>
export default {
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
    background-image: url('../../static/img/sunset_2.jpg') !important
    width: 95%
    height: 100%
    background-size: cover
    margin: 0 auto

</style>
