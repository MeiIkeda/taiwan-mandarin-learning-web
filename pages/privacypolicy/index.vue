<template>
  <section class="container_vocabulary">
    <Header
      :name="'privacypolicy'"
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
    <div class="main-privacypolicy">
      <div class="text-itself-privacypolicy">
        <br>
        <p style="font-size: 20px; font-weight: bold; text-align: center">
          プライバシー&ポリシー
        </p>
        <p style="font-weight: bold; text-align: center">
          個人情報の利用目的
        </p>
        <p>
          当サイトでは、フォームからのお問い合わせの際に、名前/メールアドレス等の個人情報をご記入いただく場合がございます。<br>
          これらの個人情報は、質問等に対する回答をEメール送信するためご記入いただいており、それ以外の目的では利用いたしません。<br>
          <br>
        </p>
        <p style="font-weight: bold; text-align: center">
          個人情報の第三者への開示
        </p>
        <p>
          当サイトでは、個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。<br>
          ・本人のご了解がある場合<br>
          ・法令等への協力のため、開示が必要となる場合<br>
          <br>
        </p>
        <p style="font-weight: bold; text-align: center">
          広告の配信について
        </p>
        <p>
          当サイトは第三者配信の広告サービス「Google Adsense グーグルアドセンス」を利用しています。<br>
          広告配信事業者は、ユーザーの興味に応じた広告を表示するためにクッキー(Cookie)を使用することがあります。<br>
          (※クッキーとは、Webページなどでブラウザに情報を保存するための仕組みの1つで、現在多くのサイトで一般的に利用されています。<br>
          クッキーにより、利用したサービスや参照した広告の履歴、サイト内での操作履歴、端末固有の識別情報等が記録されます。<br>
          クッキーは、ユーザーのコンピュータを識別することができますが、ユーザー個人を特定することはできません。)<br>
          第三者がコンテンツおよび宣伝を提供し、訪問者から直接情報を収集し、<br>
          訪問者のブラウザにクッキーを設定したりこれを認識したりする場合があります。<br>
          クッキーを無効にする設定およびGoogleアドセンスに関する詳細は下記規約をご覧ください。
        </p>
        <p style="text-align: center">
          <a href="https://www.google.co.jp/policies/technologies/ads/" target="_blank" rel="noopener noreferrer">広告 – ポリシーと規約 – Google</a>
        </p>
        <p style="font-weight: bold; text-align: center">
          アクセス解析ツールについて
        </p>
        <p>
          当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。<br>
          Googleアナリティクスは、トラフィックデータ収集のためにクッキーを使用しています。<br>
          トラフィックデータは匿名で収集されており、個人を特定するものではありません。<br>
          この機能はクッキーを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。<br>
          Googleアナリティクスの規約に関して、詳しくは下記をご覧ください。
        </p>
        <p style="text-align: center">
          <cite><a href="https://www.google.com/analytics/terms/jp.html" target="_blank" rel="noopener noreferrer">Google アナリティクス利用規約</a></cite>
        </p>
        <p style="font-weight: bold; text-align: center">
          免責事項
        </p>
        <p>
          当サイトに含まれているコンテンツ、個々の情報（データ）および画像等に関する財産権は、当サイトに帰属します。<br>
          同コンテンツ・個々の情報（データ）につきまして、可能な限り正確な情報を掲載するよう努めておりますが、<br>
          誤情報が入り込んだり、情報が古くなっていることもございます。<br>
          掲載された内容によって生じた損害等については、一切の責任を負いかねますのでご了承ください。<br>
          また、当サイトからリンクやバナーなどによって他のサイトに移動された場合、<br>
          移動先サイトで提供される情報、サービス等について一切の責任を負いません。<br>
          <br>
        </p>
      </div>
    </div>
    <Footer
      :name="'privacypolicy'"
    />
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
      title: 'プライバシーポリシー privacypolicy',
      // script: [
      //   { 'data-ad-client': process.env.GA_ADSENSE_ID }
      // ],
      meta: [
        { hid: 'keywords', name: 'keywords', content: '中国語, 台湾, 台湾華語, 繁体字, 単語, 聞き流し, ボポモフォ, 當代中文課程課, 例文' },
        { hid: 'description', name: 'description', content: 'プライバシーポリシー privacypolicy' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'プライバシーポリシー privacypolicy' }
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
  .text-itself-privacypolicy
    text-align: left
    margin: 0 250px
    @media screen and (max-width : 767px)
      margin: 0 20px
  .main-privacypolicy
    animation: fadeIn 1.5s ease 0s 1 normal
    -webkit-animation: fadeIn 1.5s ease 0s 1 normal
    text-align: left
    background-image: url('../../static/img/redfort2_4.jpg') !important
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
