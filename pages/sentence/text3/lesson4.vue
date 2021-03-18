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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第4章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第4章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      data: {
        title: '當代中文課程課3・第4章',
        words: [
          {
            word: '愛',
            sentence: '我愛在午夜吃的拉麵。',
            bopomofo: 'ㄨㄛˇ ㄞˋ ㄗㄞˋ ㄨˇ ㄧㄝˋ ㄔ ㄉㄜ˙ ㄌㄚ ㄇㄧㄢˋ.',
            pinyin: 'wo3 ai4 zai4 wu3 ye4 chi1 de la1 mian4.',
            translation: '深夜に食べるラーメンが大好きです。',
            memo: ''
          },
          {
            word: '人情味',
            sentence: '她的父母經營充滿人情味的居酒屋。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄈㄨˋ ㄇㄨˇ ㄐㄧㄥ ㄧㄥˊ ㄔㄨㄥ ㄇㄢˇ ㄖㄣˊ ㄑㄧㄥˊ ㄨㄟˋ ㄉㄜ˙ ㄐㄩ ㄐㄧㄡˇ ㄨ.',
            pinyin: 'ta1 de fu4 mu3 jing1 ying2 chong1 man3 ren2 qing2 wei4 de ju1 jiu3 wu1.',
            translation: '彼女の実家は、 人間味あふれる居酒屋を営んでいます。',
            memo: ''
          },
          {
            word: '放',
            sentence: '他從久時間的勞工放了, 開開心心的去喝酒。',
            bopomofo: 'ㄊㄚ ㄘㄨㄥˊ ㄐㄧㄡˇ ㄕˊ ㄐㄧㄢ ㄉㄜ˙ ㄌㄠˊ ㄍㄨㄥ ㄈㄤˋ ㄌㄜ˙, ㄎㄞ ㄎㄞ ㄒㄧㄣ ㄒㄧㄣ ㄉㄜ˙ ㄑㄩˋ ㄏㄜ ㄐㄧㄡˇ.',
            pinyin: 'ta1 cong2 jiu3 shi2 jian1 de lao2 gong1 fang4 le, kai1 kai1 xin1 xin1 de qu4 he1 jiu3.',
            translation: '彼は長時間の労働から解放されて、 喜んで飲みに行きました。',
            memo: ''
          },
          {
            word: '天燈',
            sentence: '你在天燈上會寫什麼許願?',
            bopomofo: 'ㄋㄧˇ ㄗㄞˋ ㄊㄧㄢ ㄉㄥ ㄕㄤˋ ㄏㄨㄟˋ ㄒㄧㄝˇ ㄕㄣˊ ㄇㄜ˙ ㄒㄩˇ ㄩㄢˋ?',
            pinyin: 'ni3 zai4 tian1 deng1 shang4 hui4 xie3 shen2 me xu3 yuan4?',
            translation: 'あなたはランタンにどんな願い事を書きますか?',
            memo: ''
          },
          {
            word: '願望',
            sentence: '她的願望就是過著被動物包圍的生活。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄩㄢˋ ㄨㄤˋ ㄐㄧㄡˋ ㄕˋ ㄍㄨㄛˋ ㄓㄜ˙ ㄅㄟˋ ㄉㄨㄥˋ ㄨˋ ㄅㄠ ㄨㄟˊ ㄉㄜ˙ ㄕㄥ ㄏㄨㄛˊ.',
            pinyin: 'ta1 de yuan4 wang4 jiu4 shi4 guo4 zhe bei4 dong4 wu4 bao1 wei2 de sheng1 huo2.',
            translation: '彼女の願いは、 動物に囲まれた生活を送る事です。',
            memo: ''
          },
          {
            word: '訊號',
            sentence: '大家都習慣了有手機的生活, 如果沒有訊號覺得很苦難。',
            bopomofo: 'ㄉㄚˋ ㄐㄧㄚ ㄉㄡ ㄒㄧˊ ㄍㄨㄢˋ ㄌㄜ˙ ㄧㄡˇ ㄕㄡˇ ㄐㄧ ㄉㄜ˙ ㄕㄥ ㄏㄨㄛˊ, ㄖㄨˊ ㄍㄨㄛˇ ㄇㄟˊ ㄧㄡˇ ㄒㄩㄣˋ ㄏㄠˋ ㄐㄩㄝˊ ㄉㄜ˙ ㄏㄣˇ ㄎㄨˇ ㄋㄢˋ.',
            pinyin: 'da4 jia1 dou1 xi2 guan4 le you3 shou3 ji1 de sheng1 huo2, ru2 guo3 mei2 you3 xun4 hao4 jue2 de hen3 ku3 nan4.',
            translation: '誰もが携帯のある生活に慣れてしまっているので、 電波が無いと困ります。',
            memo: ''
          },
          {
            word: '元宵',
            sentence: '元宵是個有名的節日, 連從外國很多人也來看看。',
            bopomofo: 'ㄩㄢˊ ㄒㄧㄠ ㄕˋ ㄍㄜˋ ㄧㄡˇ ㄇㄧㄥˊ ㄉㄜ˙ ㄐㄧㄝˊ ㄖˋ, ㄌㄧㄢˊ ㄘㄨㄥˊ ㄨㄞˋ ㄍㄨㄛˊ ㄏㄣˇ ㄉㄨㄛ ㄖㄣˊ ㄧㄝˇ ㄌㄞˊ ㄎㄢˋ ㄎㄢˋ.',
            pinyin: 'yuan2 xiao1 shi4 ge4 you3 ming2 de jie2 ri4, lian2 cong2 wai4 guo2 hen3 duo1 ren2 ye3 lai2 kan4 kan4.',
            translation: 'ランタンフェスティバルは有名なお祭りで、 海外からも多くの人が見に訪れます。',
            memo: ''
          },
          {
            word: '牆',
            sentence: '說到牆的圖案， 你果然認為心形圖案很奇怪嗎?',
            bopomofo: 'ㄕㄨㄛ ㄉㄠˋ ㄑㄧㄤˊ ㄉㄜ˙ ㄊㄨˊ ㄢˋ, ㄋㄧˇ ㄍㄨㄛˇ ㄖㄢˊ ㄖㄣˋ ㄨㄟˊ ㄒㄧㄣ ㄒㄧㄥˊ ㄊㄨˊ ㄢˋ ㄏㄣˇ ㄑㄧˊ ㄍㄨㄞˋ ㄇㄚ˙?',
            pinyin: 'shuo1 dao4 qiang2 de tu2 an4, ni3 guo3 ran2 ren4 wei2 xin1 xing2 tu2 an4 hen3 qi2 guai4 ma?',
            translation: '壁の模様についてなのですが、 やはりハート型は変だと思いますか?',
            memo: ''
          },
          {
            word: '耐心',
            sentence: '他在很耐心地禁酒， 所以在他面前喝酒是可憐的。',
            bopomofo: 'ㄊㄚ ㄗㄞˋ ㄏㄣˇ ㄋㄞˋ ㄒㄧㄣ ㄉㄜ˙ ㄐㄧㄣˋ ㄐㄧㄡˇ, ㄙㄨㄛˇ ㄧˇ ㄗㄞˋ ㄊㄚ ㄇㄧㄢˋ ㄑㄧㄢˊ ㄏㄜ ㄐㄧㄡˇ ㄕˋ ㄎㄜˇ ㄌㄧㄢˊ ㄉㄜ˙.',
            pinyin: 'ta1 zai4 hen3 nai4 xin1 de jin4 jiu3, suo3 yi3 zai4 ta1 mian4 qian2 he1 jiu3 shi4 ke3 lian2 de.',
            translation: '彼は忍耐強く禁酒しているので、 彼の前で飲んだら可哀想ですよ。',
            memo: ''
          },
          {
            word: '感動',
            sentence: '我宅在家裡兩個禮拜後房間長香菇了, 我很感動了。',
            bopomofo: 'ㄨㄛˇ ㄓㄞˊ ㄗㄞˋ ㄐㄧㄚ ㄌㄧˇ ㄌㄧㄤˇ ㄍㄜˋ ㄌㄧˇ ㄅㄞˋ ㄏㄡˋ ㄈㄤˊ ㄐㄧㄢ ㄓㄤˇ ㄒㄧㄤ ㄍㄨ ㄌㄜ˙, ㄨㄛˇ ㄏㄣˇ ㄍㄢˇ ㄉㄨㄥˋ ㄌㄜ˙.',
            pinyin: 'wo3 zhai2 zai4 jia1 li3 liang3 ge4 li3 bai4 hou4 fang2 jian1 zhang3 xiang1 gu1 le, wo3 hen3 gan3 dong4 le.',
            translation: '2週間引き籠っていたら部屋にキノコが生えてきて、 とても感動しました。',
            memo: ''
          },
          {
            word: '擔仔麵',
            sentence: '擔仔麵的湯用蝦子煮出来的, 很好喝。',
            bopomofo: 'ㄉㄢˋ ㄗㄞˇ ㄇㄧㄢˋ ㄉㄜ˙ ㄊㄤ ㄩㄥˋ ㄒㄧㄚ ㄗ˙ ㄓㄨˇ ㄔㄨ ㄌㄞˊ ㄉㄜ˙, ㄏㄣˇ ㄏㄠˇ ㄏㄜ.',
            pinyin: 'dan4 zai3 mian4 de tang1 yong4 xia1 zi zhu3 chu1 lai2 de, hen3 hao3 he1.',
            translation: '擔仔麵のスープはエビで出汁を取っていて、 とても美味しいです。',
            memo: ''
          },
          {
            word: '招牌',
            sentence: '那家小吃店甚至沒有招牌, 但是我保障味道。',
            bopomofo: 'ㄋㄚˋ ㄐㄧㄚ ㄒㄧㄠˇ ㄔ ㄉㄧㄢˋ ㄕㄣˋ ㄓˋ ㄇㄟˊ ㄧㄡˇ ㄓㄠ ㄆㄞˊ, ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄅㄠˇ ㄓㄤˋ ㄨㄟˋ ㄉㄠˋ.',
            pinyin: 'na4 jia1 xiao3 chi1 dian4 shen4 zhi4 mei2 you3 zhao1 pai2, dan4 shi4 wo3 bao3 zhang4 wei4 dao4.',
            translation: 'あの軽食屋は看板すらありませんが、 味は保証します。',
            memo: ''
          },
          {
            word: '當地',
            sentence: '你可以透過口音大概判斷是否是當地人。',
            bopomofo: 'ㄋㄧˇ ㄎㄜˇ ㄧˇ ㄊㄡˋ ㄍㄨㄛˋ ㄎㄡˇ ㄧㄣ ㄉㄚˋ ㄍㄞˋ ㄆㄢˋ ㄉㄨㄢˋ ㄕˋ ㄈㄡˇ ㄕˋ ㄉㄤ ㄉㄧˋ ㄖㄣˊ.',
            pinyin: 'ni3 ke3 yi3 tou4 guo4 kou3 yin1 da4 gai4 pan4 duan4 shi4 fou3 shi4 dang1 di4 ren2.',
            translation: '地元の人かどうかは、 訛りで大体わかります。',
            memo: ''
          },
          {
            word: '賺',
            sentence: '如果我賺了很多錢, 會每天躺下來生活。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄨㄛˇ ㄓㄨㄢˋ ㄌㄜ˙ ㄏㄣˇ ㄉㄨㄛ ㄑㄧㄢˊ, ㄏㄨㄟˋ ㄇㄟˇ ㄊㄧㄢ ㄊㄤˇ ㄒㄧㄚˋ ㄌㄞˊ ㄕㄥ ㄏㄨㄛˊ.',
            pinyin: 'ru2 guo3 wo3 zhuan4 le hen3 duo1 qian2, hui4 mei3 tian1 tang3 xia4 lai2 sheng1 huo2.',
            translation: 'もしお金をたくさん稼いだら、 毎日ゴロゴロして暮らします。',
            memo: ''
          },
          {
            word: '而',
            sentence: '他愛油膩的拉麵, 而是有點擔心胖了。',
            bopomofo: 'ㄊㄚ ㄞˋ ㄧㄡˊ ㄋㄧˋ ㄉㄜ˙ ㄌㄚ ㄇㄧㄢˋ, ㄦˊ ㄕˋ ㄧㄡˇ ㄉㄧㄢˇ ㄉㄢ ㄒㄧㄣ ㄆㄤˋ ㄌㄜ˙.',
            pinyin: 'ta1 ai4 you2 ni4 de la1 mian4, er2 shi4 you3 dian3 dan1 xin1 pang4 le.',
            translation: '彼は脂っこいラーメンが大好きですが、 その一方で、 太った事も若干気にしています。',
            memo: ''
          },
          {
            word: '交',
            sentence: '這個孩子很擅長交朋友, 常常帶著小野狗回家。',
            bopomofo: 'ㄓㄜˋ ㄍㄜˋ ㄏㄞˊ ㄗ˙ ㄏㄣˇ ㄕㄢˋ ㄔㄤˊ ㄐㄧㄠ ㄆㄥˊ ㄧㄡˇ, ㄔㄤˊ ㄔㄤˊ ㄉㄞˋ ㄓㄜ˙ ㄒㄧㄠˇ ㄧㄝˇ ㄍㄡˇ ㄏㄨㄟˊ ㄐㄧㄚ.',
            pinyin: 'zhe4 ge4 hai2 zi hen3 shan4 chang2 jiao1 peng2 you3, chang2 chang2 dai4 zhe xiao3 ye3 gou3 hui2 jia1.',
            translation: 'この子は友達を作るのがとても上手で、 しょっちゅう野良犬を連れて帰ってきます。',
            memo: ''
          },
          {
            word: '理想',
            sentence: '妳的理想太高了, 什麼地方有那麼完美的男生?',
            bopomofo: 'ㄋㄞˇ ㄉㄜ˙ ㄌㄧˇ ㄒㄧㄤˇ ㄊㄞˋ ㄍㄠ ㄌㄜ˙, ㄕㄣˊ ㄇㄜ˙ ㄉㄧˋ ㄈㄤ˙ ㄧㄡˇ ㄋㄚˋ ㄇㄜ˙ ㄨㄢˊ ㄇㄟˇ ㄉㄧˊ ㄋㄢˊ ㄕㄥ?',
            pinyin: 'ni3 de li3 xiang3 tai4 gao1 le, shen2 me di4 fang1 you3 na4 me wan2 mei3 de nan2 sheng1?',
            translation: 'あなたの理想は高すぎますよ、 どこにそんな完璧な男性がいるんですか?',
            memo: ''
          },
          {
            word: '剛剛',
            sentence: '雖然我剛剛吃過午餐, 如果甜點我仍然可以吃。',
            bopomofo: 'ㄙㄨㄟ ㄖㄢˊ ㄨㄛˇ ㄍㄤ ㄍㄤ ㄔ ㄍㄨㄛˋ ㄨˇ ㄘㄢ, ㄖㄨˊ ㄍㄨㄛˇ ㄊㄧㄢˊ ㄉㄧㄢˇ ㄨㄛˇ ㄖㄥˊ ㄖㄢˊ ㄎㄜˇ ㄧˇ ㄔ.',
            pinyin: 'sui1 ran2 wo3 gang1 gang1 chi1 guo4 wu3 can1, ru2 guo3 tian2 dian3 wo3 reng2 ran2 ke3 yi3 chi1.',
            translation: 'ランチを食べたばかりですが、 デザートならまだ食べられます。',
            memo: ''
          },
          {
            word: '改天',
            sentence: '今天市公所太擠了, 我們改天再來吧。',
            bopomofo: 'ㄐㄧㄣ ㄊㄧㄢ ㄕˋ ㄍㄨㄥ ㄙㄨㄛˇ ㄊㄞˋ ㄐㄧˇ ㄌㄜ˙, ㄨㄛˇ ㄇㄣ˙ ㄍㄞˇ ㄊㄧㄢ ㄗㄞˋ ㄌㄞˊ ㄅㄚ˙.',
            pinyin: 'jin1 tian1 shi4 gong1 suo3 tai4 ji3 le, wo3 men gai3 tian1 zai4 lai2 ba.',
            translation: '今日は市役所がとても混雑しているので、 日を改めてまた来ましょう。',
            memo: ''
          },
          {
            word: '無聊',
            sentence: '工作太無聊的時候, 我煮咖啡改變心情。',
            bopomofo: 'ㄍㄨㄥ ㄗㄨㄛˋ ㄊㄞˋ ㄨˊ ㄌㄧㄠˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄨㄛˇ ㄓㄨˇ ㄎㄚ ㄈㄟ ㄍㄞˇ ㄅㄧㄢˋ ㄒㄧㄣ ㄑㄧㄥˊ.',
            pinyin: 'gong1 zuo4 tai4 wu2 liao2 de shi2 hou4, wo3 zhu3 ka1 fei1 gai3 bian4 xin1 qing2.',
            translation: '仕事があまりにも退屈な時は、 コーヒーを淹れて気分転換します。',
            memo: ''
          },
          {
            word: '東區',
            sentence: '我很少去東區， 所以我需要導航系統開車。',
            bopomofo: 'ㄨㄛˇ ㄏㄣˇ ㄕㄠˇ ㄑㄩˋ ㄉㄨㄥ ㄑㄩ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄒㄩ ㄧㄠˋ ㄉㄠˇ ㄏㄤˊ ㄒㄧˋ ㄊㄨㄥˇ ㄎㄞ ㄔㄜ.',
            pinyin: 'wo3 hen3 shao3 qu4 dong1 qu1, suo3 yi3 wo3 xu1 yao4 dao3 hang2 xi4 tong3 kai1 che1.',
            translation: '東区に行く事は滅多にないので、 運転にはナビが必要です。',
            memo: ''
          },
          {
            word: '煙火',
            sentence: '煙花師們在從船上發射煙花。',
            bopomofo: 'ㄧㄢ　ㄏㄨㄛˇ ㄕ ㄇㄣ˙ ㄗㄞˋ ㄘㄨㄥˊ ㄔㄨㄢˊ ㄕㄤˋ ㄈㄚ ㄕㄜˋ ㄧㄢ　ㄏㄨㄛˇ.',
            pinyin: 'yan1 huo3 shi1 men zai4 cong2 chuan2 shang4 fa1 she4 yan1 huo3.',
            translation: '花火師たちは、 船から花火を打ち上げています。',
            memo: ''
          },
          {
            word: '跨年',
            sentence: '因為跨年, 年輕人在市區都在大驚小怪。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄎㄨㄚˋ ㄋㄧㄢˊ, ㄋㄧㄢˊ ㄑㄧㄥ ㄖㄣˊ ㄗㄞˋ ㄕˋ ㄑㄩ ㄉㄡ ㄗㄞˋ ㄉㄚˋ ㄐㄧㄥ ㄒㄧㄠˇ ㄍㄨㄞˋ.',
            pinyin: 'yin1 wei4 kua4 nian2, nian2 qing1 ren2 zai4 shi4 qu1 dou1 zai4 da4 jing1 xiao3 guai4.',
            translation: '年越しのため、 若者たちは繁華街で大騒ぎしています。',
            memo: ''
          },
          {
            word: '種類',
            sentence: '菜單的種類不應太多也不應太少就好, 要不然我選擇不到。',
            bopomofo: 'ㄘㄞˋ ㄉㄢ ㄉㄜ˙ ㄓㄨㄥˇ ㄌㄟˋ ㄅㄨˋ ㄧㄥ ㄊㄞˋ ㄉㄨㄛ ㄧㄝˇ ㄅㄨˋ ㄧㄥ ㄊㄞˋ ㄕㄠˇ ㄐㄧㄡˋ ㄏㄠˇ, ㄧㄠˋ ㄅㄨˋ ㄖㄢˊ ㄨㄛˇ ㄒㄩㄢˇ ㄗㄜˊ ㄅㄨˊ ㄉㄠˋ.',
            pinyin: 'cai4 dan1 de zhong3 lei4 bu4 ying1 tai4 duo1 ye3 bu4 ying1 tai4 shao3 jiu4 hao3, yao4 bu4 ran2 wo3 xuan3 ze2 bu2 dao4.',
            translation: 'メニューの種類は多すぎず少なすぎずがいいです、 さもないと選べません。',
            memo: ''
          },
          {
            word: '價錢',
            sentence: '這個價錢是不是包括稅?',
            bopomofo: 'ㄓㄜˋ ㄍㄜˋ ㄐㄧㄚˋ ㄑㄧㄢˊ ㄕˋ ㄅㄨˊ ㄕˋ ㄅㄠ ㄎㄨㄛˋ ㄕㄨㄟˋ?',
            pinyin: 'zhe4 ge4 jia4 qian2 shi4 bu2 shi4 bao1 kuo4 shui4?',
            translation: 'この価格には税金が含まれていますか?',
            memo: ''
          },
          {
            word: '感覺',
            sentence: '春天的微風給我很爽的感覺。',
            bopomofo: 'ㄔㄨㄣ ㄊㄧㄢ ㄉㄜ˙ ㄨㄟ ㄈㄥ ㄍㄟˇ ㄨㄛˇ ㄏㄣˇ ㄕㄨㄤˇ ㄉㄜ˙ ㄍㄢˇ ㄐㄩㄝˊ.',
            pinyin: 'chun1 tian1 de wei1 feng1 gei3 wo3 hen3 shuang3 de gan3 jue2.',
            translation: '春のそよ風が、 とてもさわやかな気分にさせてくれます。',
            memo: ''
          },
          {
            word: '雞排',
            sentence: '雞排越大越好, 又多汁的話就是完美的。',
            bopomofo: 'ㄐㄧ ㄆㄞˊ ㄩㄝˋ ㄉㄚˋ ㄩㄝˋ ㄏㄠˇ, ㄧㄡˋ ㄉㄨㄛ ㄓ ㄉㄜ˙ ㄏㄨㄚˋ ㄐㄧㄡˋ ㄕˋ ㄨㄢˊ ㄇㄟˇ ㄉㄜ˙.',
            pinyin: 'ji1 pai2 yue4 da4 yue4 hao3, you4 duo1 zhi1 de hua4 jiu4 shi4 wan2 mei3 de.',
            translation: 'ジーパイは大きければ大きいほど良いです、 更にジューシーであれば完璧です。',
            memo: ''
          },
          {
            word: '口',
            sentence: '你的一口總是太大了, 我不會給你吃我的蛋糕。',
            bopomofo: 'ㄋㄧˇ ㄉㄜ˙ ㄧ ㄎㄡˇ ㄗㄨㄥˇ ㄕˋ ㄊㄞˋ ㄉㄚˋ ㄌㄜ˙, ㄨㄛˇ ㄅㄨˊ ㄏㄨㄟˋ ㄍㄟˇ ㄋㄧˇ ㄔ ㄨㄛˇ ㄉㄜ˙ ㄉㄢˋ ㄍㄠ.',
            pinyin: 'ni3 de yi1 kou3 zong3 shi4 tai4 da4 le, wo3 bu2 hui4 gei3 ni3 chi1 wo3 de dan4 gao1.',
            translation: 'あなたの一口はいつも大きすぎるので、 私のケーキはあげませんよ。',
            memo: ''
          },
          {
            word: '紅茶',
            sentence: '我以為配紅茶是牛奶或檸檬, 但珍珠奶茶也不錯。',
            bopomofo: 'ㄨㄛˇ ㄧˇ ㄨㄟˊ ㄆㄟˋ ㄏㄨㄥˊ ㄔㄚˊ ㄕˋ ㄋㄧㄡˊ ㄋㄞˇ ㄏㄨㄛˋ ㄋㄧㄥˊ ㄇㄥˊ, ㄉㄢˋ ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ ㄧㄝˇ ㄅㄨˋ ㄘㄨㄛˋ.',
            pinyin: 'wo3 yi3 wei2 pei4 hong2 cha2 shi4 niu2 nai3 huo4 ning2 meng2, dan4 zhen1 zhu1 nai3 cha2 ye3 bu2/bu4 cuo4.',
            translation: '紅茶にはミルクかレモンだと思っていましたが、 タピオカミルクティーも悪くないですね。',
            memo: ''
          },
          {
            word: '平溪',
            sentence: '平溪以元宵節聞名， 但瀑布也很受歡迎。',
            bopomofo: 'ㄆㄧㄥˊ ㄒㄧ ㄧˇ ㄩㄢˊ ㄒㄧㄠ ㄐㄧㄝˊ ㄨㄣˊ ㄇㄧㄥˊ, ㄉㄢˋ ㄆㄨˋ ㄅㄨˋ ㄧㄝˇ ㄏㄣˇ ㄕㄡˋ ㄏㄨㄢ ㄧㄥˊ.',
            pinyin: 'ping2 xi1 yi3 yuan2 xiao1 jie2 wen2 ming2, dan4 pu4 bu4 ye3 hen3 shou4 huan1 ying2.',
            translation: '平溪はランタンフェスティバルも有名ですが、 滝も人気です。',
            memo: ''
          },
          {
            word: '元宵節',
            sentence: '元宵節的時候吃的元宵跟湯圓有什麼不同?',
            bopomofo: 'ㄩㄢˊ ㄒㄧㄠ ㄐㄧㄝˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄔ ㄉㄜ˙ ㄩㄢˊ ㄒㄧㄠ ㄍㄣ ㄊㄤ ㄩㄢˊ ㄧㄡˇ ㄕㄣˊ ㄇㄜ˙ ㄅㄨˋ ㄊㄨㄥˊ?',
            pinyin: 'yuan2 xiao1 jie2 de shi2 hou4 chi1 de yuan2 xiao1 gen1 tang1 yuan2 you3 shen2 me bu4 tong2?',
            translation: 'ランタンフェスティバルの時に食べる元宵と湯圓の違いは何ですか?',
            memo: ''
          },
          {
            word: '孔廟',
            sentence: '孔廟的外面都是被紅牆包圍, 你馬上就會發現到。',
            bopomofo: 'ㄎㄨㄥˇ ㄇㄧㄠˋ ㄉㄜ˙ ㄨㄞˋ ㄇㄧㄢˋ ㄉㄡ ㄕˋ ㄅㄟˋ ㄏㄨㄥˊ ㄑㄧㄤˊ ㄅㄠ ㄨㄟˊ, ㄋㄧˇ ㄇㄚˇ ㄕㄤˋ ㄐㄧㄡˋ ㄏㄨㄟˋ ㄈㄚ ㄒㄧㄢˋ ㄉㄠˋ.',
            pinyin: 'kong3 miao4 de wai4 mian4 dou1 shi4 bei4 hong2 qiang2 bao1 wei2, ni3 ma3 shang4 jiu4 hui4 fa1 xian4 dao4.',
            translation: '孔子廟は赤い壁に囲まれているので、 すぐにわかりますよ。',
            memo: ''
          },
          {
            word: '校外教學',
            sentence: '校外教學的內容差不多都是參觀有歷史的建築。',
            bopomofo: 'ㄒㄧㄠˋ ㄨㄞˋ ㄐㄧㄠˋ ㄒㄩㄝˊ ㄉㄜ˙ ㄋㄟˋ ㄖㄨㄥˊ ㄔㄚ ㄅㄨˋ ㄉㄨㄛ ㄉㄡ ㄕˋ ㄘㄢ ㄍㄨㄢ ㄧㄡˇ ㄌㄧˋ ㄕˇ ㄉㄜ˙ ㄐㄧㄢˋ ㄓㄨˋ.',
            pinyin: 'xiao4 wai4 jiao4 xue2 de nei4 rong2 cha1 bu4 duo1 dou1 shi4 can1 guan1 you3 li4 shi3 de jian4 zhu4.',
            translation: '校外学習の内容はほとんど全て、 歴史的建造物への訪問です。',
            memo: ''
          },
          {
            word: '碰到',
            sentence: '他偶然碰到了一位著名的時裝設計師。',
            bopomofo: 'ㄊㄚ ㄡˇ ㄖㄢˊ ㄆㄥˋ ㄉㄠˋ ㄌㄜ˙ ㄧ ㄨㄟˋ ㄓㄨˋ　ㄇㄧㄥˊ ㄉㄜ˙ ㄕˊ ㄓㄨㄤ ㄕㄜˋ ㄐㄧˋ ㄕ.',
            pinyin: 'ta1 ou3 ran2 peng4 dao4 le yi1 wei4 zhu4 ming2 de shi2 zhuang1 she4 ji4 shi1.',
            translation: '彼は偶然、 有名なファッションデザイナーに遭遇しました。',
            memo: ''
          },
          {
            word: '水煎包',
            sentence: '水煎包的裡面包滿滿的燙肉汁, 小心吃。',
            bopomofo: 'ㄕㄨㄟˇ ㄐㄧㄢ ㄅㄠ ㄉㄜ˙ ㄌㄧˇ ㄇㄧㄢˋ ㄅㄠ ㄇㄢˇ ㄇㄢˇ ㄉㄜ˙ ㄊㄤˋ ㄖㄡˋ ㄓ, ㄒㄧㄠˇ ㄒㄧㄣ ㄔ.',
            pinyin: 'shui3 jian1 bao1 de li3 mian4 bao1 man3 man3 de tang4 rou4 zhi1, xiao3 xin1 chi1.',
            translation: '焼き小籠包の中はアツアツの肉汁がたっぷり入っているので、 気を付けて食べて下さい。',
            memo: ''
          },
          {
            word: '同事',
            sentence: '我仍然有的時候跟我的前同事保持聯繫。',
            bopomofo: 'ㄨㄛˇ ㄖㄥˊ ㄖㄢˊ ㄧㄡˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄍㄣ ㄨㄛˇ ㄉㄜ˙ ㄑㄧㄢˊ ㄊㄨㄥˊ ㄕˋ ㄅㄠˇ ㄔˊ ㄌㄧㄢˊ ㄒㄧˋ.',
            pinyin: 'wo3 reng2 ran2 you3 de shi2 hou4 gen1 wo3 de qian2 tong2 shi4 bao3 chi2 lian2 xi4.',
            translation: '前の職場の同僚とは、 今でも時々連絡を取っています。',
            memo: ''
          },
          {
            word: '美食',
            sentence: '她對當地的美食有興趣, 週末總是一邊走一邊吃。',
            bopomofo: 'ㄊㄚ ㄉㄨㄟˋ ㄉㄤ ㄉㄧˋ ㄉㄜ˙ ㄇㄟˇ ㄕˊ ㄧㄡˇ ㄒㄧㄥˋ ㄑㄩˋ, ㄓㄡ ㄇㄛˋ ㄗㄨㄥˇ ㄕˋ ㄧˋ ㄅㄧㄢ ㄗㄡˇ ㄧˋ ㄅㄧㄢ ㄔ.',
            pinyin: 'ta1 dui4 dang1 di4 de mei3 shi2 you3 xing4 qu4, zhou1 mo4 zong3 shi4 yi4 bian1 zou3 yi4 bian1 chi1.',
            translation: '彼女はご当地グルメに興味があり、 週末はいつも食べ歩きをしています。',
            memo: ''
          },
          {
            word: '上',
            sentence: '上了高牆的貓不能自己下來了。',
            bopomofo: 'ㄕㄤˋ ㄌㄜ˙ ㄍㄠ ㄑㄧㄤˊ ㄉㄜ˙ ㄇㄠ ㄅㄨˋ ㄋㄥˊ ㄗˋ ㄐㄧˇ ㄒㄧㄚˋ ㄌㄞˊ ㄌㄜ˙.',
            pinyin: 'shang4 le gao1 qiang2 de mao1 bu4 neng2 zi4 ji3 xia4 lai2 le.',
            translation: '高い壁の上に上がった猫は、 自力で下りられなくなってしまいました。',
            memo: ''
          },
          {
            word: '泡',
            sentence: '一邊喝酒一邊泡溫泉有一點危險, 但是很舒服。',
            bopomofo: 'ㄧˋ ㄅㄧㄢ ㄏㄜ ㄐㄧㄡˇ ㄧˋ ㄅㄧㄢ ㄆㄠˋ ㄨㄣ ㄑㄩㄢˊ ㄧㄡˇ ㄧˋ ㄉㄧㄢˇ ㄨㄟ ㄒㄧㄢˇ, ㄉㄢˋ ㄕˋ ㄏㄣˇ ㄕㄨ ㄈㄨˊ.',
            pinyin: 'yi4 bian1 he1 jiu3 yi4 bian1 pao4 wen1 quan2 you3 yi1 dian3 wei1 xian3, dan4 shi4 hen3 shu1 fu2.',
            translation: 'お酒を飲みながら温泉につかるのはちょっと危険ですが、 とてもいい気分です。',
            memo: ''
          },
          {
            word: '錯過',
            sentence: '他錯過很難得的包無尾熊的機會, 現在很失望。',
            bopomofo: 'ㄊㄚ ㄘㄨㄛˋ ㄍㄨㄛˋ ㄏㄣˇ ㄋㄢˊ ㄉㄜˊ  ㄉㄜ˙ ㄅㄠ ㄨˊ ㄨㄟˇ ㄒㄩㄥˊ ㄉㄜ˙ ㄐㄧ ㄏㄨㄟˋ, ㄒㄧㄢˋ ㄗㄞˋ ㄏㄣˇ ㄕ ㄨㄤˋ.',
            pinyin: 'ta1 cuo4 guo4 hen3 nan2 de2 de bao1 wu2 wei3 xiong2 de ji1 hui4, xian4 zai4 hen3 shi1 wang4.',
            translation: '彼はコアラを抱っこできる珍しい機会を逃してしまって、 ひどく残念がっています。',
            memo: ''
          },
          {
            word: '營業',
            sentence: '那家商店通宵營業的。',
            bopomofo: 'ㄋㄚˋ ㄐㄧㄚ ㄕㄤ ㄉㄧㄢˋ ㄊㄨㄥ ㄒㄧㄠ ㄧㄥˊ ㄧㄝˋ ㄉㄜ˙.',
            pinyin: 'na4 jia1 shang1 dian4 tong1 xiao1 ying2 ye4 de.',
            translation: 'あの店は一晩中営業しています。',
            memo: ''
          },
          {
            word: '夜景',
            sentence: '如果霧不出來, 從山上看得到很漂亮的夜景。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄨˋ ㄅㄨˋ ㄔㄨ ㄌㄞˊ, ㄘㄨㄥˊ ㄕㄢ ㄕㄤˋ ㄎㄢˋ ㄉㄜ˙ ㄉㄠˋ ㄏㄣˇ ㄆㄧㄠˋ ㄌㄧㄤˋ ㄉㄜ˙ ㄧㄝˋ ㄐㄧㄥˇ.',
            pinyin: 'ru2 guo3 wu4 bu4 chu1 lai2, cong2 shan1 shang4 kan4 de dao4 hen3 piao4 liang4 de ye4 jing3.',
            translation: '霧が出なければ山からの美しい夜景が見られます。',
            memo: ''
          },
          {
            word: '古老',
            sentence: '池塘的岸邊有很古老的櫻樹。',
            bopomofo: 'ㄔˊ ㄊㄤˊ ㄉㄜ˙ ㄢˋ ㄅㄧㄢ ㄧㄡˇ ㄏㄣˇ ㄍㄨˇ ㄌㄠˇ ㄉㄜ˙ ㄧㄥ ㄕㄨˋ.',
            pinyin: 'chi2 tang2 de an4 bian1 you3 hen3 gu3 lao3 de ying1 shu4.',
            translation: '池のほとりにはとても古い桜の木があります。',
            memo: ''
          },
          {
            word: '古蹟',
            sentence: '他的祖父愛好旅遊古蹟， 歷史知識很豐富。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄗㄨˇ ㄈㄨˋ ㄞˋ ㄏㄠˋ ㄌㄩˇ ㄧㄡˊ ㄍㄨˇ ㄐㄧ, ㄌㄧˋ ㄕˇ ㄓ ㄕˊ ㄏㄣˇ ㄈㄥ ㄈㄨˋ.',
            pinyin: 'ta1 de zu3 fu4 ai4 hao3 lu3 you2 gu3 ji1, li4 shi3 zhi1 shi2 hen3 feng1 fu4.',
            translation: '彼のおじいさんは史跡巡りが好きで、 歴史についてとても物知りです。',
            memo: ''
          },
          {
            word: '重視',
            sentence: '跟體重比起來, 我覺得你應該重視肌肉量。',
            bopomofo: 'ㄍㄣ ㄊㄧˇ ㄓㄨㄥˋ ㄅㄧˇ ㄑㄧˇ ㄌㄞˊ, ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄋㄧˇ ㄧㄥ ㄍㄞ ㄓㄨㄥˋ ㄕˋ ㄐㄧ ㄖㄡˋ ㄌㄧㄤˋ.',
            pinyin: 'gen1 ti3 zhong4 bi3 qi3 lai2, wo3 jue2 de ni3 ying1 gai1 zhong4 shi4 ji1 rou4 liang4.',
            translation: '体重よりも、 筋肉量を重視すべきだと思います。',
            memo: ''
          },
          {
            word: '歷史',
            sentence: '各人的歷史的解釋不一樣, 沒有絕對的答案。',
            bopomofo: 'ㄍㄜˋ ㄖㄣˊ ㄉㄜ˙ ㄌㄧˋ ㄕˇ ㄉㄜ˙ ㄐㄧㄝˇ ㄕˋ ㄅㄨˋ ㄧˊ ㄧㄤˋ, ㄇㄟˊ ㄧㄡˇ ㄐㄩㄝˊ ㄉㄨㄟˋ ㄉㄜ˙ ㄉㄚˊ ㄢˋ.',
            pinyin: 'ge4 ren2 de li4 shi3 de jie3 shi4 bu4 yi1 yang4, mei2 you3 jue2 dui4 de da2 an4.',
            translation: '歴史の解釈は人によって異なるため、 絶対的な正解はありません。',
            memo: ''
          },
          {
            word: '風俗',
            sentence: '學習當地風俗讓你可以了解不同的文化。',
            bopomofo: 'ㄒㄩㄝˊ ㄒㄧˊ ㄉㄤ ㄉㄧˋ ㄈㄥ ㄙㄨˊ ㄖㄤˋ ㄋㄧˇ ㄎㄜˇ ㄧˇ ㄌㄧㄠˇ ㄐㄧㄝˇ ㄅㄨˋ ㄊㄨㄥˊ ㄉㄜ˙ ㄨㄣˊ ㄏㄨㄚˋ.',
            pinyin: 'xue2 xi2 dang1 di4 feng1 su2 rang4 ni3 ke3 yi3 liao3 jie3 bu4 tong2 de wen2 hua4.',
            translation: '現地の風習を学ぶ事は、 異文化理解に繋がります。',
            memo: ''
          },
          {
            word: '習慣',
            sentence: '貓咪沒有洗澡的習慣, 但是總是舔身體保持身體清潔。',
            bopomofo: 'ㄇㄠ ㄇㄧ ㄇㄟˊ ㄧㄡˇ ㄒㄧˇ ㄗㄠˇ ㄉㄜ˙ ㄒㄧˊ ㄍㄨㄢˋ, ㄉㄢˋ ㄕˋ ㄗㄨㄥˇ ㄕˋ ㄊㄧㄢˇ ㄕㄣ ㄊㄧˇ ㄅㄠˇ ㄔˊ ㄕㄣ ㄊㄧˇ ㄑㄧㄥ ㄐㄧㄝˊ.',
            pinyin: 'mao1 mi1 mei2 you3 xi3 zao3 de xi2 guan4, dan4 shi4 zong3 shi4 tian3 shen1 ti3 bao3 chi2 shen1 ti3 qing1 jie2.',
            translation: '猫にはシャワーを浴びる習慣がありませんが、 いつも体を舐めて綺麗にしています。',
            memo: ''
          },
          {
            word: '道地',
            sentence: '她是把外語在一個月內可以學會的道地天才。',
            bopomofo: 'ㄊㄚ ㄕˋ ㄅㄚˇ ㄨㄞˋ ㄩˇ ㄗㄞˋ ㄧ ㄍㄜˋ ㄩㄝˋ ㄋㄟˋ ㄎㄜˇ ㄧˇ ㄒㄩㄝˊ ㄏㄨㄟˋ ㄉㄜ˙ ㄉㄠˋ ㄉㄧˋ ㄊㄧㄢ ㄘㄞˊ.',
            pinyin: 'ta1 shi4 ba3 wai4 yu3 zai4 yi1 ge4 yue4 nei4 ke3 yi3 xue2 hui4 de dao4 di4 tian1 cai2.',
            translation: '彼女は1ヶ月以内に外国語をマスターする事ができる本物の天才です。',
            memo: ''
          },
          {
            word: '粥',
            sentence: '喝酒後第二天, 粥是最好的早餐。',
            bopomofo: 'ㄏㄜ ㄐㄧㄡˇ ㄏㄡˋ ㄉㄧˋ ㄦˋ ㄊㄧㄢ, ㄓㄡ ㄕˋ ㄗㄨㄟˋ ㄏㄠˇ ㄉㄜ˙ ㄗㄠˇ ㄘㄢ.',
            pinyin: 'he1 jiu3 hou4 di4 er4 tian1, zhou1 shi4 zui4 hao3 de zao3 can1.',
            translation: 'お酒を飲んだ次の日の朝ご飯は、 お粥が一番です。',
            memo: ''
          },
          {
            word: '講究',
            sentence: '拍照的時候我很講究臉部的角度。',
            bopomofo: 'ㄆㄞ ㄓㄠˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄨㄛˇ ㄏㄣˇ ㄐㄧㄤˇ ㄐㄧㄡˋ ㄌㄧㄢˇ ㄅㄨˋ ㄉㄜ˙ ㄐㄧㄠˇ ㄉㄨˋ.',
            pinyin: 'pai1 zhao4 de shi2 hou4 wo3 hen3 jiang3 jiu4 lian3 bu4 de jiao3 du4.',
            translation: '写真を撮るときは、 顔の角度にこだわります。',
            memo: ''
          },
          {
            word: '頓',
            sentence: '有工作的日子沒有太多時間吃一頓午餐。',
            bopomofo: 'ㄧㄡˇ ㄍㄨㄥ ㄗㄨㄛˋ ㄉㄜ˙ ㄖˋ ㄗ˙ ㄇㄟˊ ㄧㄡˇ ㄊㄞˋ ㄉㄨㄛ ㄕˊ ㄐㄧㄢ ㄔ ㄧ ㄉㄨㄣˋ ㄨˇ ㄘㄢ.',
            pinyin: 'you3 gong1 zzuo4 de ri4 zi mei2 you3 tai4 duo1 shi2 jian1 chi1 yi1 dun4 wu3 can1.',
            translation: '仕事がある日は、 昼食をとる時間があまりありません。',
            memo: ''
          },
          {
            word: '速度',
            sentence: '小偷像光的速度一樣逃跑了。',
            bopomofo: 'ㄒㄧㄠˇ ㄊㄡ ㄒㄧㄤˋ ㄍㄨㄤ ㄉㄜ˙ ㄙㄨˋ ㄉㄨˋ ㄧˊ ㄧㄤˋ ㄊㄠˊ ㄆㄠˇ ㄌㄜ˙.',
            pinyin: 'xiao3 tou1 xiang4 guang1 de su4 du4 yi1 yang4 tao2 pao3 le.',
            translation: '泥棒は、 光のような速さで逃げていきました。',
            memo: ''
          },
          {
            word: '窄',
            sentence: '貓很喜歡窄的地方, 正在在紙板箱裡。',
            bopomofo: 'ㄇㄠ ㄏㄣˇ ㄒㄧˇ ㄏㄨㄢ ㄓㄞˇ ㄉㄜ˙ ㄉㄧˋ ㄈㄤ, ㄓㄥˋ ㄗㄞˋ ㄗㄞˋ ㄓˇ ㄅㄢˇ ㄒㄧㄤ ㄌㄧˇ.',
            pinyin: 'mao1 hen3 xi3 huan1 zhai3 de di4 fang1, zheng4 zai4 zai4 zhi3 ban3 xiang1 li3.',
            translation: '猫は狭い場所がとても好きで、 今は段ボール箱の中にいます。',
            memo: ''
          },
          {
            word: '街道',
            sentence: '街道擠死了, 怪不得他遲到了。',
            bopomofo: 'ㄐㄧㄝ ㄉㄠˋ ㄐㄧˇ ㄙˇ ㄌㄜ˙, ㄍㄨㄞˋ ㄅㄨˋ ㄉㄜˊ ㄊㄚ ㄔˊ ㄉㄠˋ ㄌㄜ˙.',
            pinyin: 'jie1 dao4 ji3 si3 le, guai4 bu4 de2 ta1 chi2 dao4 le.',
            translation: '通りはこれ以上ないくらい混雑していたので、 彼が遅れたのも無理はありません。',
            memo: ''
          },
          {
            word: '蓋',
            sentence: '近年來， 各國家都爭奪著蓋高塔。',
            bopomofo: 'ㄐㄧㄣˋ ㄋㄧㄢˊ ㄌㄞˊ, ㄍㄜˋ ㄍㄨㄛˊ ㄐㄧㄚ ㄉㄡ ㄓㄥ ㄉㄨㄛˊ ㄓㄜ˙ ㄍㄞˋ ㄍㄠ ㄊㄚˇ.',
            pinyin: 'jin4 nian2 lai2, ge4 guo2 jia1 dou1 zheng1 duo2 zhe gai4 gao1 ta3.',
            translation: '近年、 各国は競い合って高い塔を建設しています。',
            memo: ''
          },
          {
            word: '待',
            sentence: '外面還在下雨， 所以我要在咖啡廳再待一點。',
            bopomofo: 'ㄨㄞˋ ㄇㄧㄢˋ ㄏㄞˊ ㄗㄞˋ ㄒㄧㄚˋ ㄩˇ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄧㄠˋ ㄗㄞˋ ㄎㄚ ㄈㄟ ㄊㄧㄥ ㄗㄞˋ ㄉㄞ ㄧ ㄉㄧㄢˇ.',
            pinyin: 'wai4 mian4 hai2 zai4 xia4 yu3, suo3 yi3 wo3 yao4 zai4 ka1 fei1 ting1 zai4 dai1 yi1 dian3.',
            translation: '外はまだ雨が降っているので、 喫茶店にもう少し留まろうと思います。',
            memo: ''
          },
          {
            word: '欣賞',
            sentence: '朋友給我的衣服九成新, 我很欣賞。',
            bopomofo: 'ㄆㄥˊ ㄧㄡˇ ㄍㄟˇ ㄨㄛˇ ㄉㄜ˙ ㄧ ㄈㄨˊ ㄐㄧㄡˇ ㄔㄥˊ ㄒㄧㄣ, ㄨㄛˇ ㄏㄣˇ ㄒㄧㄣ ㄕㄤˇ.',
            pinyin: 'peng2 you3 gei3 wo3 de yi1 fu2 jiu3 cheng2 xin1, wo3 hen3 xin1 shang3.',
            translation: '友達がくれた服はほぼ新品で、 とても有難いです。',
            memo: ''
          },
          {
            word: '美麗',
            sentence: '夏天的海邊很美麗, 讓我想起青春時代來。',
            bopomofo: 'ㄒㄧㄚˋ ㄊㄧㄢ ㄉㄜ˙ ㄏㄞˇ ㄅㄧㄢ ㄏㄣˇ ㄇㄟˇ ㄌㄧˋ, ㄖㄤˋ ㄨㄛˇ ㄒㄧㄤˇ ㄑㄧˇ ㄑㄧㄥ ㄔㄨㄣ ㄕˊ ㄉㄞˋ ㄌㄞˊ .',
            pinyin: 'xia4 tian1 de hai3 bian1 hen3 mei3 li4, rang4 wo3 xiang3 qi3 qing1 chun1 shi2 dai4 lai2 .',
            translation: '夏の海はとても美しく、 青春時代を思い起こさせます。',
            memo: ''
          },
          {
            word: '鈴木',
            sentence: '鈴木先生再不會游泳, 也想試潛水。',
            bopomofo: 'ㄌㄧㄥˊ ㄇㄨˋ ㄒㄧㄢ ㄕㄥ ㄗㄞˋ ㄅㄨˊ ㄏㄨㄟˋ ㄧㄡˊ ㄩㄥˇ, ㄧㄝˇ ㄒㄧㄤˇ ㄕˋ ㄑㄧㄢˊ ㄕㄨㄟˇ.',
            pinyin: 'ling2 mu4 xian1 sheng1 zai4 bu2 hui4 you2 yong3, ye3 xiang3 shi4 qian2 shui3.',
            translation: '鈴木さんは泳げなくても、 ダイビングをしてみたいと思っています。',
            memo: ''
          },
          {
            word: '赤崁樓',
            sentence: '晚上的赤崁樓被照亮，非常漂亮。',
            bopomofo: 'ㄨㄢˇ ㄕㄤˋ ㄉㄜ˙ ㄔˋ ㄎㄢˇ ㄌㄡˊ ㄅㄟˋ ㄓㄠˋ ㄌㄧㄤˋ, ㄈㄟ ㄔㄤˊ ㄆㄧㄠˋ ㄌㄧㄤˋ.',
            pinyin: 'wan3 shang4 de chi4 kan3 lou2 bei4 zhao4 liang4, fei1 chang2 piao4 liang4.',
            translation: '夜の赤崁樓はライトアップされて、 とても綺麗です。',
            memo: ''
          },
          {
            word: '留下來',
            sentence: '在載具裡被留下來的小狗看起來很不安。',
            bopomofo: 'ㄗㄞˋ ㄗㄞˋ ㄐㄩˋ ㄌㄧˇ ㄅㄟˋ ㄌㄧㄡˊ ㄒㄧㄚˋ ㄌㄞˊ ㄉㄜ˙ ㄒㄧㄠˇ ㄍㄡˇ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄏㄣˇ ㄅㄨˋ ㄢ.',
            pinyin: 'zai4 zai4 ju4 li3 bei4 liu2 xia4 lai2 de xiao3 gou3 kan4 qi3 lai2 hen3 bu4 an1.',
            translation: '乗り物の中に取り残された犬はとても不安そうです。',
            memo: ''
          },
          {
            word: '木造',
            sentence: '木造建築有很溫馨的氣氛, 我比混凝土製的喜歡。',
            bopomofo: 'ㄇㄨˋ ㄗㄠˋ ㄐㄧㄢˋ ㄓㄨˊ ㄧㄡˇ ㄏㄣˇ ㄨㄣ ㄒㄧㄣ ㄉㄜ˙ ㄑㄧˋ ㄈㄣ, ㄨㄛˇ ㄅㄧˇ ㄏㄨㄣˋ ㄋㄧㄥˊ ㄊㄨˇ ㄓˋ ㄉㄜ˙ ㄒㄧˇ ㄏㄨㄢ.',
            pinyin: 'mu4 zao4 jian4 zhu2 you3 hen3 wen1 xin1 de qi4 fen1, wo3 bi3 hun4 ning2 tu3 zhi4 de xi3 huan1.',
            translation: '木造建築は温かみのある雰囲気で、 私はコンクリート製よりも好きです。',
            memo: ''
          },
          {
            word: '非去不可',
            sentence: '新開的水族館非去不可, 你可以覺得自己好像在海裡。',
            bopomofo: 'ㄒㄧㄣ ㄎㄞ ㄉㄜ˙ ㄕㄨㄟˇ ㄗㄨˊ ㄍㄨㄢˇ ㄈㄟ ㄑㄩˋ ㄅㄨˋ ㄎㄜˇ, ㄋㄧˇ ㄎㄜˇ ㄧˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄗˋ ㄐㄧˇ ㄏㄠˇ ㄒㄧㄤˋ ㄗㄞˋ ㄏㄞˇ ㄌㄧˇ.',
            pinyin: 'xin1 kai1 de shui3 zu2 guan3 fei1 qu4 bu4 ke3, ni3 ke3 yi3 jue2 de zi4 ji3 hao3 xiang4 zai4 hai3 li3.',
            translation: '新しくオープンした水族館は必見です、 まるで海の中にいるような気分が味わえますよ。',
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
