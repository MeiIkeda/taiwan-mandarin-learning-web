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
import MySpeechSynthesis from '../../../plugins/mySpeechSynthesis.js'
import TextExampleSentenceFormat from '../components/textExampleSentenceFormat'
export default {
  components: {
    Header,
    Footer,
    TextExampleSentenceFormat
  },
  component: {
    MySpeechSynthesis
  },
  head () {
    return {
      title: '例文集 sentence',
      meta: [
        { hid: 'keywords', name: 'keywords', content: '中国語, 台湾, 台湾華語, 繁体字, 単語, 聞き流し, ボポモフォ, 當代中文課程課, 例文' },
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第8章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第8章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      data: {
        title: '當代中文課程課2・第8章',
        words: [
          {
            word: '功夫',
            sentence: '多虧了一些電影，功夫才變有名了。',
            bopomofo: 'ㄉㄨㄛ ㄎㄨㄟ ㄌㄜ˙ ㄧ ㄒㄧㄝ ㄉㄧㄢˋ ㄧㄥˇ, ㄍㄨㄥ ㄈㄨ ㄘㄞˊ ㄅㄧㄢˋ ㄧㄡˇ ㄇㄧㄥˊ ㄌㄜ˙.',
            pinyin: 'duo1 kui1 le yi1 xie1 dian4 ying3, gong1 fu1 cai2 bian4 you3 ming2 le.',
            translation: '映画のおかげで、カンフーは有名になりました。'
          },
          {
            word: '叫',
            sentence: '我從外面叫主人但是沒有人出去了。',
            bopomofo: 'ㄨㄛˇ ㄘㄨㄥˊ ㄨㄞˋ ㄇㄧㄢˋ ㄐㄧㄠˋ ㄓㄨˇ ㄖㄣˊ ㄉㄢˋ ㄕˋ ㄇㄟˊ ㄧㄡˇ ㄖㄣˊ ㄔㄨ ㄑㄩˋ ㄌㄜ˙.',
            pinyin: 'wo3 cong2 wai4 mian4 jiao4 zhu3 ren2 dan4 shi4 mei2 you3 ren2 chu1 qu4 le.',
            translation: '私は表から家の人を呼びましたが、 誰も出てきませんでした。'
          },
          {
            word: '見',
            sentence: '這部電影的評論太難了， 我不懂。',
            bopomofo: 'ㄓㄜˋ ㄅㄨˋ ㄉㄧㄢˋ ㄧㄥˇ ㄉㄜ˙ ㄆㄧㄥˊ ㄌㄨㄣˋ ㄊㄞˋ ㄋㄢˊ ㄌㄜ˙， ㄨㄛˇ ㄅㄨˋ ㄉㄨㄥˇ.',
            pinyin: 'zhe4 bu4 dian4 ying3 de ping2 lun4 tai4 nan2 le, wo3 bu4 dong3.',
            translation: 'この映画のレビューは難しすぎて、わかりません。'
          },
          {
            word: '推',
            sentence: '打開這個門不是推, 拉就開了。',
            bopomofo: 'ㄉㄚˇ ㄎㄞ ㄓㄜˋ ㄍㄜˋ ㄇㄣˊ ㄅㄨˊ ㄕˋ ㄊㄨㄟ, ㄌㄚ ㄐㄧㄡˋ ㄎㄞ ㄌㄜ˙.',
            pinyin: 'da3 kai1 zhe4 ge4 men2 bu2 shi4 tui1 la1 jiu4 kai1 le.',
            translation: 'このドアは押すのではなく、引くと開きます。'
          },
          {
            word: '體育館',
            sentence: '體育館現在有空調， 但是如果還有浴室更好。',
            bopomofo: 'ㄊㄧˇ ㄩˋ ㄍㄨㄢˇ ㄒㄧㄢˋ ㄗㄞˋ ㄧㄡˇ ㄎㄨㄥˋ ㄊㄧㄠˊ, ㄉㄢˋ ㄕˋ ㄖㄨˊ ㄍㄨㄛˇ ㄏㄞˊ ㄧㄡˇ ㄩˋ ㄕˋ ㄍㄥˋ ㄏㄠˇ.',
            pinyin: 'ti3 yu4 guan3 xian4 zai4 you3 kong4 tiao2, dan4 shi4 ru2 guo3 hai2 you3 yu4 shi4 geng4 hao3.',
            translation: '体育館には今空調が付いていますが、シャワーもあるとなお良いです。'
          },
          {
            word: '太極拳',
            sentence: '做太極拳的人們都善於早起。',
            bopomofo: 'ㄗㄨㄛˋ ㄊㄞˋ ㄐㄧˊ ㄑㄩㄢˊ ㄉㄜ˙ ㄖㄣˊ ㄇㄣ˙ ㄉㄡ ㄕㄢˋ ㄩˊ ㄗㄠˇ ㄑㄧˇ.',
            pinyin: 'zuo4 tai4 ji2 quan2 de ren2 men dou1 shan4 yu2 zao3 qi3.',
            translation: '太極拳をする人たちはみんな早起きが得意です。'
          },
          {
            word: '師父',
            sentence: '書法的師父特別嚴格, 我不能遲到。',
            bopomofo: 'ㄕㄨ ㄈㄚˇ ㄉㄜ˙ ㄕ ㄈㄨˋ ㄊㄜˋ ㄅㄧㄝˊ ㄧㄢˊ ㄍㄜˊ, ㄨㄛˇ ㄅㄨˋ ㄋㄥˊ ㄔˊ ㄉㄠˋ.',
            pinyin: 'shu1 fa3 de shi1 fu4 te4 bie2 yan2 ge2, wo3 bu4 neng2 chi2 dao4.',
            translation: '書道の先生はとても厳しいので、 遅刻できません。'
          },
          {
            word: '天分',
            sentence: '看到貓的時候我總是覺得， 可愛的是一種天分。',
            bopomofo: 'ㄎㄢˋ ㄉㄠˋ ㄇㄠ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄨㄛˇ ㄗㄨㄥˇ ㄕˋ ㄐㄩㄝˊ ㄉㄜ˙, ㄎㄜˇ ㄞˋ ㄉㄜ˙ ㄕˋ ㄧ ㄓㄨㄥˇ ㄊㄧㄢ ㄈㄣˋ.',
            pinyin: 'kan4 dao4 mao1 de shi2 hou4 wo3 zong3 shi4 jue2 de, ke3 ai4 de shi4 yi1 zhong3 tian1 fen4.',
            translation: '猫を見るといつも、 可愛いのは一種の才能だと思います。'
          },
          {
            word: '懂',
            sentence: '他的說話很長， 所以很難懂他想說什麼。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄕㄨㄛ ㄏㄨㄚˋ ㄏㄣˇ ㄔㄤˊ,  ㄙㄨㄛˇ ㄧˇ ㄏㄣˇ ㄋㄢˊ ㄉㄨㄥˇ ㄊㄚ ㄒㄧㄤˇ ㄕㄨㄛ ㄕˊ ㄇㄛˇ.',
            pinyin: 'ta1 de shuo1 hua4 hen3 chang2, suo3 yi3 hen3 nan2 dong3 ta1 xiang3 shuo1 shen2 me.',
            translation: '彼の話はとても長いので、 何が言いたいのか理解するのは難しいです。'
          },
          {
            word: '起來',
            sentence: '外面的鳥起來得很早, 牠們的聲音讓我起床。',
            bopomofo: 'ㄨㄞˋ ㄇㄧㄢˋ ㄉㄜ˙ ㄋㄧㄠˇ ㄑㄧˇ ㄌㄞˊ ㄉㄜ˙ ㄏㄣˇ ㄗㄠˇ, ㄊㄚ ㄇㄣ˙ ㄉㄜ˙ ㄕㄥ ㄧㄣ ㄖㄤˋ ㄨㄛˇ ㄑㄧˇ ㄔㄨㄤˊ.',
            pinyin: 'wai4 mian4 de niao3 qi3 lai2 de hen3 zao3, ta1 men de sheng1 yin1 rang4 wo3 qi3 chuang2.',
            translation: '表の鳥はあまりにも早く起きるので、 その声で起こされます。'
          },
          {
            word: '動作',
            sentence: '他的所有的動作太粗了, 所以他常常壞東西。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄙㄨㄛˇ ㄧㄡˇ ㄉㄜ˙ ㄉㄨㄥˋ ㄗㄨㄛˋ ㄊㄞˋ ㄘㄨ ㄌㄜ˙, ㄙㄨㄛˇ ㄧˇ ㄊㄚ ㄔㄤˊ ㄔㄤˊ ㄏㄨㄞˋ ㄉㄨㄥ ㄒㄧ.',
            pinyin: 'ta1 de suo3 you3 de dong4 zuo4 tai4 cu1 le, suo3 yi3 ta1 chang2 chang2 huai4 dong1 xi.',
            translation: '`彼の動作は荒っぽすぎるので、 しばしば物を壊します。'
          },
          {
            word: '輕',
            sentence: '他輕輕地小貓抱起來。',
            bopomofo: 'ㄊㄚ ㄑㄧㄥ ㄑㄧㄥ ㄉㄜ˙ ㄒㄧㄠˇ ㄇㄠ ㄅㄠˋ ㄑㄧˇ ㄌㄞˊ.',
            pinyin: 'ta1 qing1 qing1 de xiao3 mao1 bao4 qi3 lai2.',
            translation: '彼はそっと子猫を抱き上げました。'
          },
          {
            word: '腿',
            sentence: '我一陣子沒走路, 所以現在腿沒有筋肉了。',
            bopomofo: 'ㄨㄛˇ ㄧ ㄓㄣˋ ㄗ˙ ㄇㄟˊ ㄗㄡˇ ㄌㄨˋ, ㄙㄨㄛˇ ㄧˇ ㄒㄧㄢˋ ㄗㄞˋ ㄊㄨㄟˇ ㄇㄟˊ ㄧㄡˇ ㄐㄧㄣ ㄖㄡˋ ㄌㄜ˙.',
            pinyin: 'wo3 yi1 zhen4 zi3 mei2 zou3 lu4, suo3 yi3 xian4 zai4 tui3 mei2 you3 jin1 rou4 le.',
            translation: 'しばらく歩いていなかったので、 足の筋肉が落ちました。'
          },
          {
            word: '了',
            sentence: '枕頭太高了， 入不了睡。',
            bopomofo: 'ㄓㄣˇ ㄊㄡˊ  ㄊㄞˋ ㄍㄠ ㄌㄜ˙， ㄖㄨˋ ㄅㄨˋ ㄌㄧㄠˇ ㄕㄨㄟˋ.',
            pinyin: 'zhen3 tou2 tai4 gao1 le, ru4 bu4 liao3 shui4.',
            translation: '枕が高すぎて眠れません。'
          },
          {
            word: '下去',
            sentence: '冷的季節來的時候, 我不想做得下去運動。',
            bopomofo: 'ㄌㄥˇ ㄉㄜ˙ ㄐㄧˋ ㄐㄧㄝˊ ㄌㄞˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄨㄛˇ ㄅㄨˋ ㄒㄧㄤˇ ㄗㄨㄛˋ ㄉㄜˊ ㄒㄧㄚˋ ㄑㄩˋ ㄩㄣˋ ㄉㄨㄥˋ.',
            pinyin: 'leng3 de ji4 jie2 lai2 de shi2 hou4, wo3 bu4 xiang3 zuo4 de xia4 qu4 yun4 dong4.',
            translation: '寒い季節になったら、 運動を続けたくないです。'
          },
          {
            word: '興趣',
            sentence: '有一些興趣讓你的人生更開心。',
            bopomofo: 'ㄧㄡˇ ㄧ ㄒㄧㄝ ㄒㄧㄥˋ ㄑㄩˋ ㄖㄤˋ ㄋㄧˇ ㄉㄜ˙ ㄖㄣˊ ㄕㄥ ㄍㄥˋ ㄎㄞ ㄒㄧㄣ.',
            pinyin: 'you3 yi1 xie1 xing4 qu4 rang4 ni3 de ren2 sheng1 geng4 kai1 xin1.',
            translation: '趣味を持つと、人生は更に楽しくなります。'
          },
          {
            word: '借',
            sentence: '最近借書的人少了, 大家都在網路上找書。',
            bopomofo: 'ㄗㄨㄟˋ ㄐㄧㄣˋ ㄐㄧㄝˋ ㄕㄨ ㄉㄜ˙ ㄖㄣˊ ㄕㄠˇ ㄌㄜ˙, ㄉㄚˋ ㄐㄧㄚ ㄉㄡ ㄗㄞˋ ㄨㄤˇ ㄌㄨˋ ㄕㄤˋ ㄓㄠˇ ㄕㄨ.',
            pinyin: 'zui4 jin4 jie4 shu1 de ren2 shao3 le, da4 jia1 dou1 zai4 wang3 lu4 shang4 zhao3 shu1.',
            translation: '最近は本を借りる人が少なくなり、 誰もがインターネットで本を探しています。'
          },
          {
            word: '有天分',
            sentence: '雖然他不擅長學習, 對運動有天分。',
            bopomofo: 'ㄙㄨㄟ ㄖㄢˊ ㄊㄚ ㄅㄨˊ ㄕㄢˋ ㄔㄤˊ ㄒㄩㄝˊ ㄒㄧˊ, ㄉㄨㄟˋ ㄩㄣˋ ㄉㄨㄥˋ ㄧㄡˇ ㄊㄧㄢ ㄈㄣˋ.',
            pinyin: 'sui1 ran2 ta1 bu2 shan4 chang2 xue2 xi2, dui4 yun4 dong4 you3 tian1 fen4.',
            translation: '彼は勉強が苦手ですが、 スポーツの才能があります。'
          },
          {
            word: '學會',
            sentence: '為了認真學會中文, 你需要一位老師。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄖㄣˋ ㄓㄣ ㄒㄩㄝˊ ㄏㄨㄟˋ ㄓㄨㄥ ㄨㄣˊ, ㄋㄧˇ ㄒㄩ ㄧㄠˋ ㄧ ㄨㄟˋ ㄌㄠˇ ㄕ.',
            pinyin: 'wei4 le ren4 zhen1 xue2 hui4 zhong1 wen2, ni3 xu1 yao4 yi1 wei4 lao3 shi1.',
            translation: '真剣に中国語を学ぶには、 先生が必要です。'
          },
          {
            word: '起不來',
            sentence: '他早上自己起不來, 你一定得去叫他。',
            bopomofo: 'ㄊㄚ ㄗㄠˇ ㄕㄤˋ ㄗˋ ㄐㄧˇ ㄑㄧˇ ㄅㄨˋ ㄌㄞˊ, ㄋㄧˇ ㄧˊ ㄉㄧㄥˋ ㄉㄟˇ ㄑㄩˋ ㄐㄧㄠˋ ㄊㄚ.',
            pinyin: 'ta1 zao3 shang4 zi4 ji3 qi3 bu4 lai2, ni3 yi1 ding4 dei3 qu4 jiao4 ta1.',
            translation: '彼は朝一人で起きられないので、 呼びに行かなくてはいけません。'
          },
          {
            word: '走不了路',
            sentence: '我買不到新化妝品， 所以我太失望地走不了路。',
            bopomofo: 'ㄨㄛˇ ㄇㄞˇ ㄅㄨˊ ㄉㄠˋ ㄒㄧㄣ ㄏㄨㄚˋ ㄓㄨㄤ ㄆㄧㄣˇ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄊㄞˋ ㄕ ㄨㄤˋ ㄉㄜ˙ ㄗㄡˇ ㄅㄨˋ ㄌㄧㄠˇ ㄌㄨˋ.',
            pinyin: 'wo3 mai3 bu2 dao4 xin1 hua4 zhuang1 pin3, suo3 yi3 wo3 tai4 shi1 wang4 de zou3 bu4 liao3 lu4.',
            translation: '新発売の化粧品を手に入れる事ができなかったので、 絶望で歩けません。'
          },
          {
            word: '好處',
            sentence: '養貓的好處無數。',
            bopomofo: 'ㄧㄤˇ ㄇㄠ ㄉㄜ˙ ㄏㄠˇ ㄔㄨˋ ㄨˊ ㄕㄨˋ.',
            pinyin: 'yang3 mao1 de hao3 chu4 wu2 shu4.',
            translation: '猫を飼う事のメリットは数えきれません。'
          },
          {
            word: '抱怨',
            sentence: '只抱怨不能解決問題， 所以我們考慮怎麼做吧。',
            bopomofo: 'ㄓˇ ㄅㄠˋ ㄩㄢˋ ㄅㄨˋ ㄋㄥˊ ㄐㄧㄝˇ ㄐㄩㄝˊ ㄨㄣˋ ㄊㄧˊ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄇㄣ˙ ㄎㄠˇ ㄌㄩˋ ㄗㄣˇ ㄇㄜ˙ ㄗㄨㄛˋ ㄅㄚ˙.',
            pinyin: 'zhi3 bao4 yuan4 bu4 neng2 jie3 jue2 wen4 ti2, suo3 yi3 wo3 men kao3 lu4 zen3 me zuo4 ba.',
            translation: '不平を言うだけでは問題は解決しないので、どうしたらいいか考えてみましょう。'
          },
          {
            word: '公尺',
            sentence: '霧太濃， 看不到十公尺遠。',
            bopomofo: 'ㄨˋ ㄊㄞˋ ㄋㄨㄥˊ, ㄎㄢˋ ㄅㄨˊ ㄉㄠˋ ㄕˊ ㄍㄨㄥ ㄔˇ ㄩㄢˇ.',
            pinyin: 'wu4 tai4 nong2, kan4 bu2 dao4 shi2 gong1 chi3 yuan3.',
            translation: '霧が濃すぎて10メートル先も見ることができません。'
          },
          {
            word: '總是',
            sentence: '從後面感覺到視線並轉身的時候, 總是有隻貓。',
            bopomofo: 'ㄘㄨㄥˊ ㄏㄡˋ ㄇㄧㄢˋ ㄍㄢˇ ㄐㄩㄝˊ ㄉㄠˋ ㄕˋ ㄒㄧㄢˋ ㄅㄧㄥˋ ㄓㄨㄢˇ ㄕㄣ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄗㄨㄥˇ ㄕˋ ㄧㄡˇ ㄓˇ ㄇㄠ.',
            pinyin: 'ncong2 hou4 mian4 gan3 jue2 dao4 shi4 xian4 bing4 zhuan3 shen1 de shi2 hou4, zong3 shi4 you3 zhi1 mao1.',
            translation: '後ろからの視線を感じて振り返ると、いつも猫がいます。'
          },
          {
            word: '完',
            sentence: '快要喝完啤酒了， 我們準備清酒吧。',
            bopomofo: 'ㄎㄨㄞˋ ㄧㄠˋ ㄏㄜ ㄨㄢˊ ㄆㄧˊ ㄐㄧㄡˇ ㄌㄜ˙, ㄨㄛˇ ㄇㄣ˙ ㄓㄨㄣˇ ㄅㄟˋ ㄑㄧㄥ ㄐㄧㄡˇ ㄅㄚ.',
            pinyin: 'kuai4 yao4 he1 wan2 pi2 jiu3 le, wo3 men zhun3 bei4 qing1 jiu3 ba.',
            translation: 'ビールはもうすぐ飲み終えてしまうので、 日本酒を用意しましょう。'
          },
          {
            word: '體力',
            sentence: '喝雞精真的會增強體力嗎?',
            bopomofo: 'ㄏㄜ ㄐㄧ ㄐㄧㄥ ㄓㄣ ㄉㄜ˙ ㄏㄨㄟˋ ㄗㄥ ㄑㄧㄤˊ ㄊㄧˇ ㄌㄧˋ ㄇㄚ˙?',
            pinyin: 'he1 ji1 jing1 zhen1 de hui4 zeng1 qiang2 ti3 li4 ma?',
            translation: '雞精を飲むと体力が増すというのは本当ですか?'
          },
          {
            word: '整天',
            sentence: '因為我有太多空閒時間, 我整天都在考慮食物。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄨㄛˇ ㄧㄡˇ ㄊㄞˋ ㄉㄨㄛ ㄎㄨㄥ ㄒㄧㄢˊ ㄕˊ ㄐㄧㄢ, ㄨㄛˇ ㄓㄥˇ ㄊㄧㄢ ㄉㄨ ㄗㄞˋ ㄎㄠˇ ㄌㄩˋ ㄕˊ ㄨˋ.',
            pinyin: 'yin1 wei4 wo3 you3 tai4 duo1 kong1 xian2 shi2 jian1, wo3 zheng3 tian1 dou1 zai4 kao3 lu4 shi2 wu4.',
            translation: '暇すぎるので、 一日中食べ物のことを考えています。'
          },
          {
            word: '精神',
            sentence: '我沒有精神做晚飯, 今天想吃泡麵。',
            bopomofo: 'ㄨㄛˇ ㄇㄟˊ ㄧㄡˇ ㄐㄧㄥ ㄕㄣˊ ㄗㄨㄛˋ ㄨㄢˇ ㄈㄢˋ, ㄐㄧㄣ ㄊㄧㄢ ㄒㄧㄤˇ ㄔ ㄆㄠˋ ㄇㄧㄢˋ.',
            pinyin: 'wo3 mei2 you3 jing1 shen2 zuo4 wan3 fan4, jin1 tian1 xiang3 chi1 pao4 mian4.',
            translation: '夕食を作る気力がないので、今日はインスタントヌードルを食べたいです。'
          },
          {
            word: '本來',
            sentence: '雖然他本來很懶惰的人, 最近很努力工作。',
            bopomofo: 'ㄙㄨㄟ ㄖㄢˊ ㄊㄚ ㄅㄣˇ ㄌㄞˊ ㄏㄣˇ ㄌㄢˇ ㄉㄨㄛˋ ㄉㄜ˙ ㄖㄣˊ, ㄗㄨㄟˋ ㄐㄧㄣˋ ㄏㄣˇ ㄋㄨˇ ㄌㄧˋ ㄍㄨㄥ ㄗㄨㄛˋ.',
            pinyin: 'sui1 ran2 ta1 ben3 lai2 hen3 lan3 duo4 de ren2, zui4 jin4 hen3 nu3 li4 gong1 zuo4.',
            translation: '彼は元々とても怠け者だったのですが、 最近は頑張って働いています。'
          },
          {
            word: '可能',
            sentence: '如果貓睡覺的時， 你可能會摸摸牠的肚子。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄇㄠ ㄕㄨㄟˋ ㄐㄧㄠˋ ㄉㄜ˙ ㄕˊ, ㄋㄧˇ ㄎㄜˇ ㄋㄥˊ ㄏㄨㄟˋ ㄇㄛ ㄇㄛ ㄊㄚ ㄉㄜ˙ ㄉㄨˇ ㄗ˙.',
            pinyin: 'ru2 guo3 mao1 shui4 jiao4 de shi2, ni3 ke3 neng2 hui4 mo1 mo1 ta1 de du4 zi.',
            translation: '猫が寝ている間なら、お腹に触れるかもしれません。'
          },
          {
            word: '回',
            sentence: '討老婆的歡心我買蛋糕回家。',
            bopomofo: 'ㄊㄠˇ ㄌㄠˇ ㄆㄛˊ ㄉㄜ˙ ㄏㄨㄢ ㄒㄧㄣ ㄨㄛˇ ㄇㄞˇ ㄉㄢˋ ㄍㄠ ㄏㄨㄟˊ ㄐㄧㄚ.',
            pinyin: 'tao3 lao3 po2 de huan1 xin1 wo3 mai3 dan4 gao1 hui2 jia1.',
            translation: '妻を喜ばせるために、ケーキを買って家に帰ります。'
          },
          {
            word: '影響',
            sentence: '那個孩子看起來從動畫被影響。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄏㄞˊ ㄗ˙ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄘㄨㄥˊ ㄉㄨㄥˋ ㄏㄨㄚˋ ㄅㄟˋ ㄧㄥˇ ㄒㄧㄤˇ.',
            pinyin: 'na4 ge4 hai2 zi3 kan4 qi3 lai2 cong2 dong4 hua4 bei4 ying3 xiang3.',
            translation: 'あの子供はアニメの影響を受けているようです。'
          },
          {
            word: '身體',
            sentence: '為了身體健康, 你應該少吃一點油膩的東西。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄕㄣ ㄊㄧˇ ㄐㄧㄢˋ ㄎㄤ, ㄋㄧˇ ㄧㄥ ㄍㄞ ㄕㄠˇ ㄔ ㄧˋ ㄉㄧㄢˇ ㄧㄡˊ ㄋㄧˋ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ.',
            pinyin: 'wei4 le shen1 ti3 jian4 kang1, ni3 ying1 gai1 shao3 chi1 yi1 dian3 you2 ni4 de dong1 xi.',
            translation: '身体の健康のために、脂っこいものは少な目に食べた方がいいですよ。'
          },
          {
            word: '練',
            sentence: '我只是在公園練跳舞， 但是附近的人報警了。',
            bopomofo: 'ㄨㄛˇ ㄓˇ ㄕˋ ㄗㄞˋ ㄍㄨㄥ ㄩㄢˊ ㄌㄧㄢˋ ㄊㄧㄠˋ ㄨˇ, ㄉㄢˋ ㄕˋ ㄈㄨˋ ㄐㄧㄣˋ ㄉㄜ˙ ㄖㄣˊ ㄅㄠˋ ㄐㄧㄥˇ ㄌㄜ˙.',
            pinyin: 'wo3 zhi3 shi4 zai4 gong1 yuan2 lian4 tiao4 wu3, dan4 shi4 fu4 jin4 de ren2 bao4 jing3 le.',
            translation: '私は公園でダンスの練習をしていただけなのですが、 付近の人に通報されてしまいました。'
          },
          {
            word: '想起',
            sentence: '我不想有人想起我喝醉的時候的事。',
            bopomofo: 'ㄨㄛˇ ㄅㄨˋ ㄒㄧㄤˇ ㄧㄡˇ ㄖㄣˊ ㄒㄧㄤˇ ㄑㄧˇ ㄨㄛˇ ㄏㄜ ㄗㄨㄟˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄉㄜ˙ ㄕˋ.',
            pinyin: 'wo3 bu4 xiang3 you3 ren2 xiang3 qi3 wo3 he1 zui4 de shi2 hou4 de shi4.',
            translation: '私が酔い潰れた時の事は、誰にも思い出して欲しくないです。'
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
