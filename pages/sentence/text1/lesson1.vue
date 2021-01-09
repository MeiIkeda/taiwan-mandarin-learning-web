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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第1章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第1章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      data: {
        title: '當代中文課程課1・第1章',
        words: [
          {
            word: '你',
            sentence: '你是日本人嗎?',
            bopomofo: 'ㄋㄧˇ ㄕˋ ㄖˋ ㄅㄣˇ ㄖㄣˊ ㄇㄚ˙?',
            pinyin: 'ni3 shi4 ri4 ben3 ren2 ma?',
            translation: 'あなたは日本人ですか?'
          },
          {
            word: '來',
            sentence: '明天他會來家。',
            bopomofo: 'ㄇㄧㄥˊ ㄊㄧㄢ ㄊㄚ ㄏㄨㄟˋ ㄌㄞˊ ㄐㄧㄚ.',
            pinyin: 'ming2 tian1 ta1 hui4 lai2 jia1.',
            translation: '明日、彼が家に来る。'
          },
          {
            word: '是',
            sentence: '這是很好吃的包子。',
            bopomofo: 'ㄓㄜˋ ㄕˋ ㄏㄣˇ ㄏㄠˇ ㄔ ㄉㄜ˙ ㄅㄠ ㄗ˙.',
            pinyin: 'zhe4 shi4 hen3 hao3 chi1 de bao1 zi3.',
            translation: 'これはとても美味しい肉まんです。'
          },
          {
            word: '小姐',
            sentence: '陳小姐是台灣人。',
            bopomofo: 'ㄔㄣˊ ㄒㄧㄠˇ ㄐㄧㄝˇ ㄕˋ ㄊㄞˊ ㄨㄢ ㄖㄣˊ.',
            pinyin: 'chen2 xiao3 jie3 shi4 tai2 wan1 ren2.',
            translation: 'Ms/Miss.陳は台湾人です。'
          },
          {
            word: '嗎',
            sentence: '我可以吃這個嗎?',
            bopomofo: 'ㄨㄛˇ ㄎㄜˇ ㄧˇ ㄔ ㄓㄜˋ ㄍㄜˋ ㄇㄚ˙?',
            pinyin: 'wo3 ke3 yi3 chi1 zhe4 ge4 ma?',
            translation: 'これを食べてもいいですか?'
          },
          {
            word: '接',
            sentence: '他來機場接我。',
            bopomofo: 'ㄊㄚ ㄌㄞˊ ㄐㄧ ㄔㄤˇ ㄐㄧㄝ ㄨㄛˇ.',
            pinyin: 'ta1 lai2 ji1 chang3 jie1 wo3.',
            translation: '彼は私を迎えに空港に来る。'
          },
          {
            word: '我們',
            sentence: '我們都喜歡貓咪。',
            bopomofo: 'ㄨㄛˇ ㄇㄣ˙ ㄉㄡ ㄒㄧˇ ㄏㄨㄢ ㄇㄠ ㄇㄧ.',
            pinyin: 'wo3 men dou1 xi3 huan1 mao1 mi1.',
            translation: '私たちはみんな猫が好き。'
          },
          {
            word: '我',
            sentence: '我在家。',
            bopomofo: 'ㄨㄛˇ ㄗㄞˋ ㄐㄧㄚ.',
            pinyin: 'wo3 zai4 jia1.',
            translation: '家にいます。'
          },
          {
            word: '這',
            sentence: '這是我的蛋糕。',
            bopomofo: 'ㄓㄜˋ ㄕˋ ㄨㄛˇ ㄉㄜ˙ ㄉㄢˋ ㄍㄠ.',
            pinyin: 'zhe4 shi4 wo3 de dan4 gao1.',
            translation: 'これは私のケーキです。'
          },
          {
            word: '先生',
            sentence: '王先生喜歡喝茶。',
            bopomofo: 'ㄨㄤˊ ㄒㄧㄢ ㄕㄥ ㄒㄧˇ ㄏㄨㄢ ㄏㄜ ㄔㄚˊ.',
            pinyin: 'wang2 xian1 sheng1 xi3 huan1 he1 cha2.',
            translation: 'Mr.王はお茶を飲むのが好きです。'
          },
          {
            word: '好',
            sentence: '我很好。',
            bopomofo: 'ㄨㄛˇ ㄏㄣˇ ㄏㄠˇ.',
            pinyin: 'wo3 hen3 hao3.',
            translation: '元気です。'
          },
          {
            word: '姓',
            sentence: '您的姓是什麼?',
            bopomofo: 'ㄋㄧㄣˊ ㄉㄜ˙ ㄒㄧㄥˋ ㄕˋ ㄕㄣˊ ㄇㄜ˙?',
            pinyin: 'nin2 de xing4 shi4 shen2 me?.',
            translation: '名字は何と仰るのですか?'
          },
          {
            word: '叫',
            sentence: '你叫什麼名字?',
            bopomofo: 'ㄋㄧˇ ㄐㄧㄠˋ ㄕㄣˊ ㄇㄜ˙ ㄇㄧㄥˊ ㄗˋ?',
            pinyin: 'ni3 jiao4 shen2 me ming2 zi4?',
            translation: '名前は何ですか?'
          },
          {
            word: '你們',
            sentence: '你們都會去看電影嗎?',
            bopomofo: 'ㄋㄧˇ ㄇㄣ˙ ㄉㄡ ㄏㄨㄟˋ ㄑㄩˋ ㄎㄢˋ ㄉㄧㄢˋ ㄧㄥˇ ㄇㄚ˙?',
            pinyin: 'ni3 men dou1 hui4 qu4 kan4 dian4 ying3 ma?',
            translation: 'あなた達はみんな映画を見に行くのですか?'
          },
          {
            word: '台灣',
            sentence: '台灣有很多好吃的菜。',
            bopomofo: 'ㄊㄞˊ ㄨㄢ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄏㄠˇ ㄔ ㄉㄜ˙ ㄘㄞˋ.',
            pinyin: 'tai2 wan1 you3 hen3 duo1 hao3 chi1 de cai4.',
            translation: '台湾にはおいしい料理がたくさんあります。'
          },
          {
            word: '歡迎',
            sentence: '歡迎光臨!',
            bopomofo: 'ㄏㄨㄢ ㄧㄥˊ ㄍㄨㄤ ㄌㄧㄣˊ!',
            pinyin: 'huan ying2 guang1 lin2!',
            translation: 'いらっしゃいませ!'
          },
          {
            word: '請問',
            sentence: '請問, 這是你的包包嗎?',
            bopomofo: 'ㄑㄧㄥˇ ㄨㄣˋ, ㄓㄜˋ ㄕˋ ㄋㄧˇ ㄉㄜ˙ ㄅㄠ ㄅㄠ ㄇㄚ˙?',
            pinyin: 'qing3 wen4, zhe4 shi4 ni3 de bao1 bao1 ma?.',
            translation: 'すみません、これはあなたのバッグですか?'
          },
          {
            word: '是的',
            sentence: '是的, 這是我的包包。',
            bopomofo: 'ㄕˋ ㄉㄜ˙, ㄓㄜˋ ㄕˋ ㄨㄛˇ ㄉㄜ˙ ㄅㄠ ㄅㄠ.',
            pinyin: 'shi4 de, zhe4 shi4 wo3 de bao1 bao1.',
            translation: 'そうです、私のバッグです。'
          },
          {
            word: '謝謝',
            sentence: '謝謝你來接我。',
            bopomofo: 'ㄒㄧㄝˋ ㄒㄧㄝˋ ㄋㄧˇ ㄌㄞˊ ㄐㄧㄝ ㄨㄛˇ.',
            pinyin: 'xie4 xie4 ni3 lai2 jie1 wo3.',
            translation: '迎えに来てくれてありがとう。'
          },
          {
            word: '不客氣',
            sentence: '謝謝你的幫忙。 不客氣。',
            bopomofo: 'ㄒㄧㄝˋ ㄒㄧㄝˋ ㄋㄧˇ ㄉㄜ˙ ㄅㄤ ㄇㄤˊ。 ㄅㄨˊ ㄎㄜˋ ㄑㄧˋ',
            pinyin: 'xie4 xie4 ni3 de bang1 mang2. bu2 ke4 qi4.',
            translation: 'ご協力ありがとうございました。 どういたしまして。',
            memo: '※台湾では「不會(ㄅㄨˊ ㄏㄨㄟˋ/bu2 hui4)」もよく使う。'
          },
          {
            word: '你好',
            sentence: '你好, 你是李先生嗎?',
            bopomofo: 'ㄋㄧˇ ㄏㄠˇ, ㄋㄧˇ ㄕˋ ㄌㄧˇ ㄒㄧㄢ ㄕㄥ ㄇㄚ˙？',
            pinyin: 'ni3 hao3, ni3 shi4 li3 xian1 sheng1 ma?.',
            translation: 'こんにちは、Mr.李さんですか?'
          },
          {
            word: '請',
            sentence: '請給我一個杯子。',
            bopomofo: 'ㄑㄧㄥˇ ㄍㄟˇ ㄨㄛˇ ㄧ ㄍㄜˋ ㄅㄟ ㄗ˙.',
            pinyin: 'qing3 gei3 wo3 yi1 ge4 be1i zi3.',
            translation: 'コップを1つ下さい。'
          },
          {
            word: '喝',
            sentence: '你喜不喜歡喝茶?',
            bopomofo: 'ㄋㄧˇ ㄒㄧˇ ㄅㄨˋ ㄒㄧˇ ㄏㄨㄢ ㄏㄜ ㄔㄚˊ?',
            pinyin: 'ni3 xi3 bu4 xi3 huan1 he1 cha2?',
            translation: 'あなたはお茶を飲むのが好きですか?'
          },
          {
            word: '茶',
            sentence: '你們有哪種茶?',
            bopomofo: 'ㄋㄧˇ ㄇㄣ˙ ㄧㄡˇ ㄋㄚˇ ㄓㄨㄥˇ ㄔㄚˊ?',
            pinyin: 'ni3 men you3 na3 zhong3 cha2?',
            translation: 'どんな種類のお茶がありますか?'
          },
          {
            word: '很',
            sentence: '很高興認識你。',
            bopomofo: 'ㄏㄣˇ ㄍㄠ ㄒㄧㄥˋ ㄖㄣˋ ㄕ˙ ㄋㄧˇ.',
            pinyin: 'hen3 gao1 xing4 ren4 shi2 ni3.',
            translation: 'お会い出来て嬉しいです。'
          },
          {
            word: '好喝',
            sentence: '這個啤酒很好喝。',
            bopomofo: 'ㄓㄜˋ ㄍㄜˋ ㄆㄧˊ ㄐㄧㄡˇ ㄏㄣˇ ㄏㄠˇ ㄏㄜ.',
            pinyin: 'zhe4 ge4 pi2 jiu3 hen3 hao3 he1.',
            translation: 'このビールはとても美味しいです。'
          },
          {
            word: '什麼',
            sentence: '我不知道美國菜是什麼味道。',
            bopomofo: 'ㄨㄛˇ ㄅㄨˋ ㄓ ㄉㄠˋ ㄇㄟˇ ㄍㄨㄛˊ ㄘㄞˋ ㄕˋ ㄕㄣˊ ㄇㄜ˙ ㄨㄟˋ ㄉㄠˋ.',
            pinyin: 'wo3 bu4 zhi1 dao4 mei3 guo2 cai4 shi4 shen2 me wei4 dao4.',
            translation: '私はアメリカ料理がどんな味か知りません。'
          },
          {
            word: '人',
            sentence: '今天城市有很多人。',
            bopomofo: 'ㄐㄧㄣ ㄊㄧㄢ ㄔㄥˊ ㄕˋ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄖㄣˊ.',
            pinyin: 'jin1 tian1 cheng2 shi4 you3 hen3 duo1 ren2.',
            translation: '今日、街にはたくさんの人がいます。'
          },
          {
            word: '喜歡',
            sentence: '我喜歡看電影配啤酒和炸雞。',
            bopomofo: 'ㄨㄛˇ ㄒㄧˇ ㄏㄨㄢ ㄎㄢˋ ㄉㄧㄢˋ ㄧㄥˇ ㄆㄟˋ ㄆㄧˊ ㄐㄧㄡˇ ㄏㄜˊ ㄓㄚˊ ㄐㄧ.',
            pinyin: 'wo3 xi3 huan1 kan4 dian4 ying3 pei4 pi2 jiu3 he2 zha2 ji1 .',
            translation: '私はビールと唐揚げと一緒に映画を見るのが好きです。'
          },
          {
            word: '呢',
            sentence: '我去超市,你呢?',
            bopomofo: 'ㄨㄛˇ ㄑㄩˋ ㄔㄠ ㄕˋ, ㄋㄧˇ ㄋㄜ˙?',
            pinyin: 'wo3 qu4 chao1 shi4, ni3 ne?',
            translation: '私はスーパーに行きます、あなたは?',
            memo: '※「呢?」→Yes/No以外の疑問文につける。どちらかと言うと女性らしい言葉。'
          },
          {
            word: '他',
            sentence: '他要美式咖啡/拿鐵。',
            bopomofo: 'ㄊㄚ ㄧㄠˋ ㄇㄟˇ ㄕˋ ㄎㄚ ㄈㄟ / ㄋㄚˊ ㄊㄧㄝˇ.',
            pinyin: 'ta1 yao4 mei3 shi4 ka1 fe1i / na2 tie.',
            translation: '彼はアメリカン/ラテが欲しいです。'
          },
          {
            word: '不',
            sentence: '我不要吃香菜。',
            bopomofo: 'ㄨㄛˇ ㄅㄨˊ ㄧㄠˋ ㄔ ㄒㄧㄤ ㄘㄞˋ.',
            pinyin: 'wo3 bu2 yao4 chi1 xiang1 cai4.',
            translation: 'パクチーは食べたくありません。'
          },
          {
            word: '哪',
            sentence: '你喜歡哪個杯子?',
            bopomofo: 'ㄋㄧˇ ㄒㄧˇ ㄏㄨㄢ ㄋㄟˇ ㄍㄜˋ ㄅㄟ ㄗ˙?',
            pinyin: 'ni3 xi3 huan1 na3 ge4 bei1 zi.',
            translation: 'どのコップが好きですか?'
          },
          {
            word: '要',
            sentence: '我要去買牛奶。',
            bopomofo: 'ㄨㄛˇ ㄧㄠˋ ㄑㄩˋ ㄇㄞˇ ㄋㄧㄡˊ ㄋㄞˇ.',
            pinyin: 'wo3 yao4 qu4 mai3 niu2 nai3.',
            translation: '私は牛乳を買いに行きたい。'
          },
          {
            word: '咖啡',
            sentence: '我要熱的黑咖啡。',
            bopomofo: 'ㄨㄛˇ ㄧㄠˋ ㄖㄜˋ ㄉㄜ˙ ㄏㄟ ㄎㄚ ㄈㄟ.',
            pinyin: 'wo3 yao4 re4 de hei1 ka1 fe1i.',
            translation: '私はホットのブラックコーヒーが欲しいです。'
          },
          {
            word: '烏龍茶',
            sentence: '台灣的烏龍茶很好喝。',
            bopomofo: 'ㄊㄞˊ ㄨㄢ ㄉㄜ˙ ㄨ ㄌㄨㄥˊ ㄔㄚˊ ㄏㄣˇ ㄏㄠˇ ㄏㄜ.',
            pinyin: 'tai2 wan1 de wu1 long2 cha2 hen3 ha3o he1.',
            translation: '台湾のウーロン茶は美味しい。'
          },
          {
            word: '日本',
            sentence: '我是日本人。',
            bopomofo: 'ㄨㄛˇ ㄕˋ ㄖˋ ㄅㄣˇ ㄖㄣˊ.',
            pinyin: 'wo3 shi4 ri4 ben3 ren2.',
            translation: '私は日本人です。'
          },
          {
            word: '美國',
            sentence: '她是美國人。',
            bopomofo: 'ㄊㄚ ㄕˋ ㄇㄟˇ ㄍㄨㄛˊ ㄖㄣˊ.',
            pinyin: 'ta1 shi4 mei3 guo2 ren2.',
            translation: '彼女はアメリカ人です。'
          },
          {
            word: '對不起',
            sentence: '對不起, 我忘記了。',
            bopomofo: 'ㄉㄨㄟˋ ㄅㄨˋ ㄑㄧˇ, ㄨㄛˇ ㄨㄤˋ ㄐㄧˋ ㄌㄜ˙.',
            pinyin: 'dui4 bu4 qi3, wo3 wang4 ji4 le.',
            translation: 'ごめんなさい、忘れていました。'
          },
          {
            word: '哪國',
            sentence: '你喜歡哪國的菜呢?',
            bopomofo: 'ㄋㄧˇ ㄒㄧˇ ㄏㄨㄢ ㄋㄚˇ ㄍㄨㄛˊ ㄉㄜ˙ ㄘㄞˋ ㄋㄜ˙?',
            pinyin: 'ni3 xi3 huan1 na3 guo2 de cai4 ne?',
            translation: 'どの国の料理が好きですか?'
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
