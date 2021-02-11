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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第14章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第14章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      data: {
        title: '當代中文課程課2・第14章',
        words: [
          {
            word: '將來',
            sentence: '他的不久的將來要用的課本被朋友拿走了。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄅㄨˋ ㄐㄧㄡˇ ㄉㄜ˙ ㄐㄧㄤ ㄌㄞˊ ㄧㄠˋ ㄩㄥˋ ㄉㄜ˙ ㄎㄜˋ ㄅㄣˇ ㄅㄟˋ ㄆㄥˊ ㄧㄡˇ ㄋㄚˊ ㄗㄡˇ ㄌㄜ˙.',
            pinyin: 'ta1 de bu4 jiu3 de jiang1 lai2 yao4 yong4 de ke4 ben3 bei4 peng2 you3 na2 zou3 le.',
            translation: '彼が近い将来使う筈だった教科書は友達に持っていかれてしまいました。',
            memo: '拿走'
          },
          {
            word: '徵求',
            sentence: '那個先生現在徵求把辦公室內所有的東西能搬走的人。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄒㄧㄢ ㄕㄥ ㄒㄧㄢˋ ㄗㄞˋ ㄓㄥ ㄑㄧㄡˊ ㄅㄚˇ ㄅㄢˋ ㄍㄨㄥ ㄕˋ ㄋㄟˋ ㄙㄨㄛˇ ㄧㄡˇ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙ ㄋㄥˊ ㄅㄢ ㄗㄡˇ ㄉㄜ˙ ㄖㄣˊ.',
            pinyin: 'na4 ge4 xian1 sheng1 xian4 zai4 zheng1 qiu2 ba3 ban4 gong1 shi4 nei4 suo3 you3 de dong1 xi neng2 ban1 zou3 de ren2.',
            translation: 'その人は今、 オフィス内の物を全部移動くれる人を募集しています。',
            memo: '搬走'
          },
          {
            word: '教師',
            sentence: '教師為了打掃叫學生教室裡的桌子推走。',
            bopomofo: 'ㄐㄧㄠˋ ㄕ ㄨㄟˋ ㄌㄜ˙ ㄉㄚˇ ㄙㄠˇ ㄐㄧㄠˋ ㄒㄩㄝˊ ㄕㄥ ㄐㄧㄠˋ ㄕˋ ㄌㄧˇ ㄉㄜ˙ ㄓㄨㄛ ㄗ˙ ㄊㄨㄟ ㄗㄡˇ.',
            pinyin: 'jiao4 shi1 wei4 le da3 sao3 jiao4 xue2 sheng1 jiao4 shi4 li3 de zhuo1 zi tui1 zou3.',
            translation: '先生は生徒たちに、 掃除をするために教室内の机を押しやるように言いました。',
            memo: '推走'
          },
          {
            word: '認為',
            sentence: '我認為你的摩托車被誰騎走了。',
            bopomofo: 'ㄨㄛˇ ㄖㄣˋ ㄨㄟˊ ㄋㄧˇ ㄉㄜ˙ ㄇㄛˊ ㄊㄨㄛ ㄔㄜ ㄅㄟˋ ㄕㄨㄟˊ ㄑㄧˊ ㄗㄡˇ ㄌㄜ˙.',
            pinyin: 'wo3 ren4 wei2 ni3 de mo2 tuo1 che1 bei4 shei2 qi2 zou3 le.',
            translation: '誰かがあなたのバイクに乗って行ってしまったと思います。',
            memo: '騎走'
          },
          {
            word: '畢業',
            sentence: '為了畢業典禮我需要西裝, 所以我把哥哥的借走了。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄅㄧˋ ㄧㄝˋ ㄉㄧㄢˇ ㄌㄧˇ ㄨㄛˇ ㄒㄩ ㄧㄠˋ ㄒㄧ ㄓㄨㄤ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄅㄚˇ ㄍㄜ ㄍㄜ˙ ㄉㄜ˙ ㄐㄧㄝˋ ㄗㄡˇ ㄌㄜ˙.',
            pinyin: 'wei4 le bi4 ye4 dian3 li3 wo3 xu1 yao4 xi1 zhuang1, suo3 yi3 wo3 ba3 ge1 ge1 de jie4 zou3 le.',
            translation: '卒業式の為にはスーツが必要だったので、 兄のものを借りてきました。',
            memo: '借走'
          },
          {
            word: '發展',
            sentence: '這個城市發展得很快, 你不快一點, 好房子都被買走了。',
            bopomofo: 'ㄓㄜˋ ㄍㄜˋ ㄔㄥˊ ㄕˋ ㄈㄚ ㄓㄢˇ ㄉㄜ˙ ㄏㄣˇ ㄎㄨㄞˋ, ㄋㄧˇ ㄅㄨˊ ㄎㄨㄞˋ ㄧˋ ㄉㄧㄢˇ, ㄏㄠˇ ㄈㄤˊ ㄗˇ ㄉㄡ ㄅㄟˋ ㄇㄞˇ ㄗㄡˇ ㄌㄜ˙.',
            pinyin: 'zhe4 ge4 cheng2 shi4 fa1 zhan3 de hen3 kuai4, ni3 bu2 kuai4 yi1 dian3, hao3 fang2 zi dou1 bei4 mai3 zou3 le.',
            translation: 'この都市は急速に発展しているので、 早くしないと良い家はみんな買われてしまいますよ・。',
            memo: '買走'
          },
          {
            word: '連',
            sentence: '那個孩子很調皮, 連工作需要的東西都被他帶走了。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄏㄞˊ ㄗ˙ ㄏㄣˇ ㄊㄧㄠˊ ㄆㄧˊ, ㄌㄧㄢˊ ㄍㄨㄥ ㄗㄨㄛˋ ㄒㄩ ㄧㄠˋ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙ ㄉㄡ ㄅㄟˋ ㄊㄚ ㄉㄞˋ ㄗㄡˇ ㄌㄜ˙.',
            pinyin: 'na4 ge4 hai2 zi hen3 tiao2 pi2, lian2 gong1 zuo4 xu1 yao4 de dong1 xi dou1 bei4 ta1 dai4 zou3 le.',
            translation: 'あの子はとてもイタズラ好きで、 仕事に必要なものもみんな持って行ってしまいます。',
            memo: '帶走'
          },
          {
            word: '想法',
            sentence: '你的想法太小心了, 如果你只磨蹭她很快會被別人約走了。',
            bopomofo: 'ㄋㄧˇ ㄉㄜ˙ ㄒㄧㄤˇ ㄈㄚˇ ㄊㄞˋ ㄒㄧㄠˇ ㄒㄧㄣ ㄌㄜ˙, ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄓˇ ㄇㄛˊ ㄘㄥˋ ㄊㄚ ㄏㄣˇ ㄎㄨㄞˋ ㄏㄨㄟˋ ㄅㄟˋ ㄅㄧㄝˊ ㄖㄣˊㄩㄝ ㄗㄡˇ ㄌㄜ˙.',
            pinyin: 'ni3 de xiang3 fa3 tai4 xiao3 xin1 le, ru2 guo3 ni3 zhi3 mo2 ceng4 ta1 hen3 kuai4 hui4 bei4 bie2 ren2 yue1 zou3 le.',
            translation: 'あなたは考え方が慎重すぎます、 ぐずぐずしていると彼女はすぐに他の誰かに誘われてしまいますよ。',
            memo: '約走'
          },
          {
            word: '不但',
            sentence: '不但你喜歡的藍色, 連綠色的衣服已經被別人選走了。',
            bopomofo: 'ㄅㄨˊ ㄉㄢˋ ㄋㄧˇ ㄒㄧˇ ㄏㄨㄢ ㄉㄜ˙ ㄌㄢˊ ㄙㄜˋ,  ㄌㄧㄢˊ ㄌㄩˋ ㄙㄜˋ ㄉㄜ˙ ㄧ ㄈㄨˊ ㄧˇ ㄐㄧㄥ ㄅㄟˋ ㄅㄧㄝˊ ㄖㄣˊ ㄒㄩㄢˇ ㄗㄡˇ ㄌㄜ˙.',
            pinyin: 'bu2 dan4 ni3 xi3 huan1 de lan2 se4, lian2 lu4 se4 de yi1 fu2 yi3 jing1 bei4 bie2 ren2 xuan3 zou3 le.',
            translation: 'あなたが好きな青だけでなく、 緑の服も既に他の人が選んでしまいましたよ。',
            memo: '選走'
          },
          {
            word: '繼續',
            sentence: '村人繼續把年輕的人到大城市送走。',
            bopomofo: 'ㄘㄨㄣ ㄖㄣˊ ㄐㄧˋ ㄒㄩˋ ㄅㄚˇ ㄋㄧㄢˊ ㄑㄧㄥ ㄉㄜ˙ ㄖㄣˊ ㄉㄠˋ ㄉㄞˋ ㄔㄥˊ ㄕˋ ㄙㄨㄥˋ ㄗㄡˇ.',
            pinyin: 'cun1 ren2 ji4 xu4 ba3 nian2 qing1 de ren2 dao4 da4 cheng2 shi4 song4 zou3.',
            translation: '村人たちは、 都会に出る若者を見送り続けています。',
            memo: '送走'
          },
          {
            word: '使用',
            sentence: '小偷似乎使用工具打破了窗戶， 錢被偷走了。',
            bopomofo: 'ㄒㄧㄠˇ ㄊㄡ ㄙˋ ㄏㄨ ㄕˇ ㄩㄥˋ ㄍㄨㄥ ㄐㄩˋ ㄉㄚˇ ㄆㄛˋ ㄌㄜ˙ ㄔㄨㄤ ㄏㄨˋ, ㄑㄧㄢˊ ㄅㄟˋ ㄊㄡ ㄗㄡˇ ㄌㄜ˙.',
            pinyin: 'xiao3 tou1 si4 hu1 shi3 yong4 gong1 ju4 da3 po4 le chuang1 hu4, qian2 bei4 tou1 zou3 le.',
            translation: '泥棒は道具を使って窓を壊したらしく、 お金は盗み去られてしまいました。',
            memo: '偷走'
          },
          {
            word: '實現',
            sentence: '我在每個月的發薪日把所有的薪水提走， 存錢不能實現了。',
            bopomofo: 'ㄨㄛˇ ㄗㄞˋ ㄇㄟˇ ㄍㄜˋ ㄩㄝˋ ㄉㄜ˙ ㄈㄚ ㄒㄧㄣ ㄖˋ ㄅㄚˇ ㄙㄨㄛˇ ㄧㄡˇ ㄉㄜ˙ ㄒㄧㄣ ㄕㄨㄟˇ ㄊㄧˊ ㄗㄡˇ, ㄘㄨㄣˊ ㄑㄧㄢˊ ㄅㄨˋ ㄋㄥˊ ㄕˊ ㄒㄧㄢˋ ㄌㄜ˙.',
            pinyin: 'wo3 zai4 mei3 ge4 yue4 de fa1 xin1 ri4 ba3 suo3 you3 de xin1 shui3 ti2 zou3, cun2 qian2 bu4 neng2 shi2 xian4 le.',
            translation: '私は毎月給料日に給料を全額引き出してしまうので、 貯金は不可能です。',
            memo: '提走'
          },
          {
            word: '招待',
            sentence: '他試了招待女朋友的爸爸， 但是爸爸很生氣罵走他。',
            bopomofo: 'ㄊㄚ ㄕˋ ㄌㄜ˙ ㄓㄠ ㄉㄞˋ ㄋㄩˇ ㄆㄥˊ ㄧㄡˇ ㄉㄜ˙ ㄅㄚˋ ㄅㄚˋ, ㄉㄢˋ ㄕˋ ㄅㄚˋ ㄅㄚˋ ㄏㄣˇ ㄕㄥ ㄑㄧˋ ㄇㄚˋ ㄗㄡˇ ㄊㄚ.',
            pinyin: 'ta1 shi4 le zhao1 dai4 nu3 peng2 you3 de ba4 ba4, dan4 shi4 ba4 ba4 hen3 sheng1 qi4 ma4 zou3 ta1.',
            translation: '彼はガールフレンドのお父さんを楽しませようとしたのですが、 お父さんは怒って彼を追い返しました。',
            memo: '罵走'
          },
          {
            word: '研究所',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '聚',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '香港',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '上海',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '說到',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '念完',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '分公司',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '捨不得',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '聚一聚',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '當時',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '聲調',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '發音',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '準',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '企業',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '管理',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '系',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '經濟',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '幫助',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '有關',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '語法',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '研究',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '教書',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '方法',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '目的',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '國際',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '翻譯',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '外交',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '人員',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '充實',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '專業',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '能力',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '加拿大',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '企業管理系(企管系)',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
          },
          {
            word: '國際關係',
            sentence: '。',
            bopomofo: '.',
            pinyin: '.',
            translation: '。',
            memo: ''
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
