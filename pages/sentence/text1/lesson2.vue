<template>
  <section>
    <Header
      :name="'sentence'"
    />
    <TextExampleSentenceFormat
      :data="data"
    />
    <Footer
      :name="'sentence'"
    />
    <br>
  </section>
</template>

<script>
import Header from '../../components/header'
import Footer from '../../components/footer'
import TextExampleSentenceFormat from '../components/textExampleSentenceFormat'
export default {
  components: {
    Header,
    Footer,
    TextExampleSentenceFormat
  },
  head () {
    return {
      title: '例文集 sentence',
      meta: [
        { hid: 'keywords', name: 'keywords', content: '中国語, 台湾, 台湾華語, 繁体字, 単語, 聞き流し, ボポモフォ, 當代中文課程課, 例文' },
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第2章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第2章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      data: {
        title: '當代中文課程課1・第2章',
        words: [
          {
            word: '的',
            sentence: '我要新的手機。',
            bopomofo: 'ㄨㄛˇ ㄧㄠˋ ㄒㄧㄣ ㄉㄜˊ ㄕㄡˇ ㄐㄧ.',
            pinyin: 'wo3 yao4 xin1 de shou3 ji1.',
            translation: '新しい携帯が欲しいです。'
          },
          {
            word: '家人',
            sentence: '你的家人在哪裡?',
            bopomofo: 'ㄋㄧˇ ㄉㄜ˙ ㄐㄧㄚ ㄖㄣˊ ㄗㄞˋ ㄋㄚˇ ㄌㄧˇ?',
            pinyin: 'ni3 de jia1 ren2 zai4 na3 li3?',
            translation: 'あなたの家族はどこですか?'
          },
          {
            word: '家',
            sentence: '我家附近有一家便利商店。',
            bopomofo: 'ㄨㄛˇ ㄐㄧㄚ ㄈㄨˋ ㄐㄧㄣˋ ㄧㄡˇ ㄧ ㄐㄧㄚ ㄅㄧㄢˋ ㄌㄧˋ ㄕㄤ ㄉㄧㄢˋ.',
            pinyin: 'wo3 jia1 fu4 jin4 you3 yi1 jia1 bian4 li4 shang1 dian4.',
            translation: '私の家の近くにコンビニが一軒あります。'
          },
          {
            word: '漂亮',
            sentence: '台灣的夏天很漂亮, 可是熱。',
            bopomofo: 'ㄊㄞˊ ㄨㄢ ㄉㄜ˙ ㄒㄧㄚˋ ㄊㄧㄢ ㄏㄣˇ ㄆㄧㄠˋ ㄌㄧㄤˋ, ㄎㄜˇ ㄕˋ ㄖㄜˋ',
            pinyin: 'tai2 wan1 de xia4 tian1 hen3 piao4 liang4, ke3 shi4 re4.',
            translation: '台湾の夏はとても美しいですが、暑いです。',
            memo: '※どちらかというと女性的な印象の「綺麗」。男性アイドルにも使ったりする。'
          },
          {
            word: '房子',
            sentence: '這裡有五個房子, 其中一個是我的家。',
            bopomofo: 'ㄓㄜˋ ㄌㄧˇ ㄧㄡˇ ㄨˇ ㄍㄜˋ ㄈㄤˊ ㄗ˙, ㄑㄧˊ ㄓㄨㄥ ㄧˊ ㄍㄜˋ ㄕˋ ㄨㄛˇ ㄉㄜ˙ ㄐㄧㄚ.',
            pinyin: 'zhe4 li3 you3 wu3 ge4 fang2 zi3, qi2 zhong1 yi1 ge4 shi4 wo3 de jia1.',
            translation: 'ここには家が5軒あり、1軒は私の家です。'
          },
          {
            word: '坐',
            sentence: '我坐飛機, 你坐車, 他坐電梯。',
            bopomofo: 'ㄨㄛˇ ㄗㄨㄛˋ ㄈㄟ ㄐㄧ, ㄋㄧˇ ㄗㄨㄛˋ ㄔㄜ, ㄊㄚ ㄗㄨㄛˋ ㄉㄧㄢˋ ㄊㄧ.',
            pinyin: 'wo3 zuo4 fe1i ji1, ni3 zuo4 che1, ta1 zuo4 dian4 ti1.',
            translation: '私は飛行機に乗り、あなたは車に乗り、彼はエレベーターに乗ります。',
            memo: '※馬、モーターバイクなど跨るものは「騎(ㄑㄧˊ/qi2)を使う。」'
          },
          {
            word: '好',
            sentence: '我可以喝啤酒嗎? 好。',
            bopomofo: 'ㄨㄛˇ ㄎㄜˇ ㄧˇ ㄏㄜ ㄆㄧˊ ㄐㄧㄡˇ ㄇㄚ˙? ㄏㄠˇ.',
            pinyin: 'wo3 ke3 yi3 he1 pi2 jiu3 ma2? hao3.',
            translation: 'ビールを飲んでもいいですか？ いいですよ。'
          },
          {
            word: '有',
            sentence: '你們有什麼東西我可以吃嗎?',
            bopomofo: 'ㄋㄧˇ ㄇㄣ˙ ㄧㄡˇ ㄕㄣˊ ㄇㄜ˙ ㄉㄨㄥ ㄒㄧ˙ ㄨㄛˇ ㄎㄜˇ ㄧˇ ㄔ ㄇㄚ˙?',
            pinyin: 'ni3 men you3 shen2 me dong1 xi wo3 ke3 yi3 chi1 ma2?',
            translation: '何か私が食べていいものありますか?'
          },
          {
            word: '多',
            sentence: '公園有很多烏鴉。',
            bopomofo: 'ㄍㄨㄥ ㄩㄢˊ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄨ ㄧㄚ.',
            pinyin: 'gong1 yuan2 you3 hen3 duo1 wu1 ya1.',
            translation: '公園にはカラスがたくさんいます。'
          },
          {
            word: '照片',
            sentence: '誰拍照這張照片?',
            bopomofo: 'ㄕㄨㄟˊ ㄆㄞ ㄓㄠˋ ㄓㄜˋ ㄓㄤ ㄓㄠˋ ㄆㄧㄢˋ?',
            pinyin: 'shei2 pa1i zhao4 zhe4 zhang1 zhao4 pian4?',
            translation: 'この写真を撮ったのは誰ですか?'
          },
          {
            word: '都',
            sentence: '我的家人都喜歡看電影。',
            bopomofo: 'ㄨㄛˇ ㄉㄜ˙ ㄐㄧㄚ ㄖㄣˊ ㄉㄡ ㄒㄧˇ ㄏㄨㄢ ㄎㄢˋ ㄉㄧㄢˋ ㄧㄥˇ.',
            pinyin: 'wo3 de jia1 ren2 dou1 xi3 huan1 kan4 dian4 ying3.',
            translation: '私の家族はみんな映画を見るのが好きです。'
          },
          {
            word: '照相',
            sentence: '撮影師照相。',
            bopomofo: 'ㄘㄨㄛ ㄧㄥˇ ㄕ ㄓㄠˋ ㄒㄧㄤˋ.',
            pinyin: 'cuo1 ying3 shi1 zhao4 xiang4.',
            translation: '写真家は写真を撮ります。'
          },
          {
            word: '張',
            sentence: '請給我一張衛生紙。',
            bopomofo: 'ㄑㄧㄥˇ ㄍㄟˇ ㄨㄛˇ ㄧ ㄓㄤ ㄨㄟˋ ㄕㄥ ㄓˇ.',
            pinyin: 'qing3 ge3i wo3 yi1 zhang1 wei4 sheng1 zhi3.',
            translation: 'ティッシュを1枚下さい。'
          },
          {
            word: '好看',
            sentence: '她的哥哥很好看。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄍㄜ ㄍㄜ˙ ㄏㄣˇ ㄏㄠˇ ㄎㄢˋ.',
            pinyin: 'ta1 de ge1 ge1 hen3 hao3 kan4.',
            translation: '彼女の兄はとても格好いい。'
          },
          {
            word: '誰',
            sentence: '這個是誰的錢包呢?',
            bopomofo: 'ㄓㄜˋ ㄍㄜˋ ㄕˋ ㄕㄨㄟˊ ㄉㄜ˙ ㄑㄧㄢˊ ㄅㄠ ㄋㄜ˙?',
            pinyin: 'zhe4 ge4 shi4 shei2 de qian2 bao1 ne?',
            translation: 'これは誰の財布ですか?'
          },
          {
            word: '姐姐',
            sentence: '他的姐姐是老師。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄐㄧㄝˇ ㄐㄧㄝ˙ ㄕˋ ㄌㄠˇ ㄕ.',
            pinyin: 'ta1 de jie3 jie3 shi4 lao3 shi1.',
            translation: '彼のお姉さんは先生です。'
          },
          {
            word: '妹妹',
            sentence: '我的妹妹養一隻公貓。',
            bopomofo: 'ㄨㄛˇ ㄉㄜ˙ ㄇㄟˋ ㄇㄟ˙ ㄧㄤˇ ㄧˋ ㄓ ㄍㄨㄥ ㄇㄠ.',
            pinyin: 'wo3 de me4i me4i yang3 yi1 zhi1 gong1 mao1.',
            translation: '妹はオス猫を飼っています。'
          },
          {
            word: '爸爸',
            sentence: '他的爸爸常常看書。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄅㄚˋ ㄅㄚ˙ ㄔㄤˊ ㄔㄤˊ ㄎㄢˋ ㄕㄨ.',
            pinyin: 'ta1 de ba4 ba chang2 chang2 kan4 shu1.',
            translation: '彼の父はよく本を読みます。'
          },
          {
            word: '媽媽',
            sentence: '我跟媽媽一起住。',
            bopomofo: 'ㄨㄛˇ ㄍㄣ ㄇㄚ ㄇㄚ ㄧˋ ㄑㄧˇ ㄓㄨˋ.',
            pinyin: 'wo3 gen1 ma1 ma yi1 qi3 zhu4.',
            translation: '私はお母さんと一緒に住んでいます。'
          },
          {
            word: '請進',
            sentence: '請進, 我們一起喝咖啡吧。',
            bopomofo: 'ㄑㄧㄥˇ ㄐㄧㄣˋ, ㄨㄛˇ ㄇㄣ˙ ㄧˋ ㄑㄧˇ ㄏㄜ ㄎㄚ ㄈㄟ ㄅㄚ˙.',
            pinyin: 'qing3 jin4, wo3 men yi1 qi3 he1 ka1 fei1 ba.',
            translation: '入ってください、一緒にコーヒーを飲みましょう。'
          },
          {
            word: '伯母',
            sentence: '他的伯母喜歡吃餅乾。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄅㄛˊ ㄇㄨˇ ㄒㄧˇ ㄏㄨㄢ ㄔ ㄅㄧㄥˇ ㄍㄢ.',
            pinyin: 'ta1 de bo2 mu3 xi3 huan1 chi1 bing3 gan1.',
            translation: '彼の叔母はクッキーを食べるのが好きです'
          },
          {
            word: '名字',
            sentence: '他會用漢字寫他的名字。',
            bopomofo: 'ㄊㄚ ㄏㄨㄟˋ ㄩㄥˋ ㄏㄢˋ ㄗˋ ㄒㄧㄝˇ ㄊㄚ ㄉㄜ˙ ㄇㄧㄥˊ ㄗˋ.',
            pinyin: 'ta1 hui4 yong4 han4 zi4 xie3 ta1 de ming2 zi4.',
            translation: '彼は漢字で自分の名前を書くことができます.'
          },
          {
            word: '書',
            sentence: '這個月我看過三本書。',
            bopomofo: 'ㄓㄜˋ ㄍㄜˋ ㄩㄝˋ ㄨㄛˇ ㄎㄢˋ ㄍㄨㄛˋ ㄙㄢ ㄅㄣˇ ㄕㄨ.',
            pinyin: 'zhe4 ge4 yue4 wo3 kan4 guo4 san1 ben3 shu1.',
            translation: '今月は３冊の本を読みました。'
          },
          {
            word: '哥哥',
            sentence: '很帥的哥哥!',
            bopomofo: 'ㄏㄣˇ ㄕㄨㄞˋ ㄉㄜ˙ ㄍㄜ ㄍㄜ˙!',
            pinyin: 'hen3 shuai4 de ge1 ge!',
            translation: 'とても格好いいお兄さん!'
          },
          {
            word: '老師',
            sentence: '幾位老師會來學校呢?',
            bopomofo: 'ㄐㄧˇ ㄨㄟˋ ㄌㄠˇ ㄕ ㄏㄨㄟˋ ㄌㄞˊ ㄒㄩㄝˊ ㄒㄧㄠˋ ㄋㄜ˙?',
            pinyin: 'ji3 wei4 lao3 shi1 hui4 lai2 xue2 xiao4 ne?',
            translation: '何名の先生が学校に来ますか?'
          },
          {
            word: '看書',
            sentence: '我喜歡看書配咖啡。',
            bopomofo: 'ㄨㄛˇ ㄒㄧˇ ㄏㄨㄢ ㄎㄢˋ ㄕㄨ ㄆㄟˋ ㄎㄚ ㄈㄟ.',
            pinyin: 'wo3 xi3 huan1 kan4 shu1 pei4 ka1 fe1i.',
            translation: '私はコーヒーを飲みながら本を読むのが好きです。'
          },
          {
            word: '幾',
            sentence: '請問你的電話幾號?',
            bopomofo: 'ㄑㄧㄥˇ ㄨㄣˋ ㄋㄧˇ ㄉㄜ˙ ㄉㄧㄢˋ ㄏㄨㄚˋ ㄐㄧˇ ㄏㄠˋ?',
            pinyin: 'qing3 wen4 ni3 de dian4 hua4 ji3 hao4?',
            translation: '電話番号は何番ですか?'
          },
          {
            word: '個',
            sentence: '我要一個袋子。',
            bopomofo: 'ㄨㄛˇ ㄧㄠˋ ㄧˊ ㄍㄜˋ ㄉㄞˋ ㄗ˙.',
            pinyin: 'wo3 yao4 yi1 ge4 dai4 zi.',
            translation: '袋が一枚欲しいです。'
          },
          {
            word: '沒',
            sentence: '我沒吃晚餐。',
            bopomofo: 'ㄨㄛˇ ㄇㄟˊ ㄔ ㄨㄢˇ ㄘㄢ.',
            pinyin: 'wo3 mei2 chi1 wan3 can1.',
            translation: '私は夕食を食べませんでした。'
          },
          {
            word: '兄弟',
            sentence: '兄弟之中, 只有我運動。',
            bopomofo: 'ㄒㄩㄥ ㄉㄧˋ ㄓ ㄓㄨㄥ, ㄓˇ ㄧㄡˇ ㄨㄛˇ ㄩㄣˋ ㄉㄨㄥˋ.',
            pinyin: 'xiong1 di4 zhi1 zhong1, zhi3 you3 wo3 yun4 dong4.',
            translation: '兄弟の間では、私だけが運動します。'
          },
          {
            word: '姐妹',
            sentence: '我有四個姐妹, 沒有兄弟。',
            bopomofo: 'ㄨㄛˇ ㄧㄡˇ ㄙˋ ㄍㄜˋ ㄐㄧㄝˇ ㄇㄟˋ, ㄇㄟˊ ㄧㄡˇ ㄒㄩㄥ ㄉㄧˋ.',
            pinyin: 'wo3 you3 si4 ge4 jie3 mei4, mei2 you3 xiong1 di4.',
            translation: '私には4人の姉妹がいて、兄弟はいません。'
          },
          {
            word: '五',
            sentence: '這五個之中, 我要一個。',
            bopomofo: 'ㄓㄜˋ ㄨˇ ㄍㄜˋ ㄓ ㄓㄨㄥ, ㄨㄛˇ ㄧㄠˋ ㄧˊ ㄍㄜˋ.',
            pinyin: 'zhe4 wu3 ge4 zhi1 zhong1, wo3 yao4 yi1 ge4.',
            translation: '5つのうち1つが欲しいです。'
          },
          {
            word: '兩',
            sentence: '這兩枝筆只有一枝是紅的。',
            bopomofo: 'ㄓㄜˋ ㄌㄧㄤˇ ㄓ ㄅㄧˇ ㄓˇ ㄧㄡˇ ㄧ ㄓ ㄕˋ ㄏㄨㄥˊ ㄉㄜ˙.',
            pinyin: 'zhe4 liang3 zhi1 bi3 zhi3 you3 yi1 zhi1 shi4 hong2 de.',
            translation: 'これら2本のペンの内、 1本だけが赤です。'
          }
        ]
      }
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
