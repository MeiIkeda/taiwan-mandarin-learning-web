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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第9章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第9章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      // 単語数：70
      data: {
        title: '當代中文課程課3・第9章',
        words: [
          {
            word: '訂單',
            sentence: '今天接受了很多訂單, 所以我們要忙了。',
            bopomofo: 'ㄐㄧㄣ ㄊㄧㄢ ㄐㄧㄝ ㄕㄡˋ ㄌㄜ˙ ㄏㄣˇ ㄉㄨㄛ ㄉㄧㄥˋ ㄉㄢ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄇㄣ˙ ㄧㄠˋ ㄇㄤˊ ㄌㄜ˙.',
            pinyin: 'jin1 tian1 jie1 shou4 le hen3 duo1 ding4 dan1, suo3 yi3 wo3 men yao4 mang2 le.',
            translation: '今日はたくさんの注文が入ったので、 忙しくなりそうです。',
            memo: ''
          },
          {
            word: '客户',
            sentence: '客户的要求越來越多了, 我一個人忙不過來。',
            bopomofo: 'ㄎㄜˋ ㄏㄨˋ ㄉㄜ˙ ㄧㄠ ㄑㄧㄡˊ ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ ㄉㄨㄛ ㄌㄜ˙, ㄨㄛˇ ㄧ ㄍㄜ˙ ㄖㄣˊ ㄇㄤˊ ㄅㄨˊ ㄍㄨㄛˋ ㄌㄞˊ.',
            pinyin: 'ke4 hu4 de yao1 qiu2 yue4 lai2 yue4 duo1 le, wo3 yi1 ge4 ren2 mang2 bu2 guo4 lai2.',
            translation: 'クライアントの要求がますます多くなってきたので、 私一人では既に対応しきれません。',
            memo: ''
          },
          {
            word: '方便',
            sentence: '為了方便申請手續, 他開發了新系統。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄈㄤ ㄅㄧㄢˋ ㄕㄣ ㄑㄧㄥˇ ㄕㄡˇ ㄒㄩˋ, ㄊㄚ ㄎㄞ ㄈㄚ ㄌㄜ˙ ㄒㄧㄣ ㄒㄧˋ ㄊㄨㄥˇ.',
            pinyin: 'wei4 le fang1 bian4 shen1 qing3 shou3 xu4, ta1 kai1 fa1 le xin1 xi4 tong3.',
            translation: '申し込みの手続きを簡単にするために、 彼は新しいシステムを開発しました。',
            memo: ''
          },
          {
            word: '訂購',
            sentence: '我想在線上訂購運動鞋， 但是我有點擔心尺寸適合不適合。',
            bopomofo: 'ㄨㄛˇ ㄒㄧㄤˇ ㄗㄞˋ ㄒㄧㄢˋ ㄕㄤˋ ㄉㄧㄥˋ ㄍㄡˋ ㄩㄣˋ ㄉㄨㄥˋ ㄒㄧㄝˊ, ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄧㄡˇ ㄉㄧㄢˇ ㄉㄢ ㄒㄧㄣ ㄔˇ ㄘㄨㄣˋ ㄕˋ ㄏㄜˊ ㄅㄨˊ ㄕˋ ㄏㄜˊ.',
            pinyin: 'wo3 xiang3 zai4 xian4 shang4 ding4 gou4 yun4 dong4 xie2, dan4 shi4 wo3 you3 dian3 dan1 xin1 chi3 cun4 shi4 he2 bu2 shi4 he2.',
            translation: 'ネットでスニーカーを注文しようと思うのですが、 サイズが合うかどうか少し心配です。',
            memo: ''
          },
          {
            word: '成立',
            sentence: '成立公司需要很多文書工作。',
            bopomofo: 'ㄔㄥˊ ㄌㄧˋ ㄍㄨㄥ ㄙ ㄒㄩ ㄧㄠˋ ㄏㄣˇ ㄉㄨㄛ ㄨㄣˊ ㄕㄨ ㄍㄨㄥ ㄗㄨㄛˋ.',
            pinyin: 'cheng2 li4 gong1 si1 xu1 yao4 hen3 duo1 wen2 shu1 gong1 zuo4.',
            translation: '会社を設立するには多くの事務手続きが必要です。',
            memo: ''
          },
          {
            word: '假日',
            sentence: '從假日的第一天起, 我打算開始運動。',
            bopomofo: 'ㄘㄨㄥˊ ㄐㄧㄚˋ ㄖˋ ㄉㄜ˙ ㄉㄧˋ ㄧ ㄊㄧㄢ ㄑㄧˇ, ㄨㄛˇ ㄉㄚˇ ㄙㄨㄢˋ ㄎㄞ ㄕˇ ㄩㄣˋ ㄉㄨㄥˋ.',
            pinyin: 'cong2 jia4 ri4 de di4 yi1 tian1 qi3, wo3 da3 suan4 kai1 shi3 yun4 dong4.',
            translation: '休日の初日から運動を始める予定です。',
            memo: ''
          },
          {
            word: '販賣',
            sentence: '為了販賣自製的便當我需要許可證嗎?',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄈㄢˋ ㄇㄞˋ ㄗˋ ㄓˋ ㄉㄜ˙ ㄅㄧㄢˋ ㄉㄤ ㄨㄛˇ ㄒㄩ ㄧㄠˋ ㄒㄩˇ ㄎㄜˇ ㄓㄥˋ ㄇㄚ˙?',
            pinyin: 'wei4 le fan4 mai4 zi4 zhi4 de bian4 dang1 wo3 xu1 yao4 xu3 ke3 zheng4 ma?',
            translation: '手作りの弁当を販売するのに許可は必要ですか?',
            memo: ''
          },
          {
            word: '阿嬷',
            sentence: '阿嬷煮的煮菜好吃得要命。',
            bopomofo: 'ㄚ ㄇㄚˋ ㄓㄨˇ ㄉㄜ˙ ㄓㄨˇ ㄘㄞˋ ㄏㄠˇ ㄔ ㄉㄜ˙ ㄧㄠˋ ㄇㄧㄥˋ.',
            pinyin: 'a1 ma4 zhu3 de zhu3 cai4 hao3 chi1 de yao4 ming4.',
            translation: 'おばあちゃんの煮物はたまらなく美味しいです。',
            memo: ''
          },
          {
            word: '中間商',
            sentence: '因為手續費太貴了, 是否可以不通過中間商進行交易?',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄕㄡˇ ㄒㄩˋ ㄈㄟˋ ㄊㄞˋ ㄍㄨㄟˋ ㄌㄜ˙, ㄕˋ ㄈㄡˇ ㄎㄜˇ ㄧˇ ㄅㄨˋ ㄊㄨㄥ ㄍㄨㄛˋ ㄓㄨㄥ ㄐㄧㄢ ㄕㄤ ㄐㄧㄣˋ ㄒㄧㄥˊ ㄐㄧㄠ ㄧˋ?',
            pinyin: 'yin1 wei4 shou3 xu4 fei4 tai4 gui4 le, shi4 fou3 ke3 yi3 bu4 tong1 guo4 zhong1 jian1 shang1 jin4 xing2 jiao1 yi4?',
            translation: '手数料が高すぎるので、 仲介業者を通さず取引する事はできませんか?',
            memo: ''
          },
          {
            word: '經營',
            sentence: '請你告訴我怎麼不出現著赤字繼續經營。',
            bopomofo: 'ㄑㄧㄥˇ ㄋㄧˇ ㄍㄠˋ ㄙㄨˋ ㄨㄛˇ ㄗㄣˇ ㄇㄜ˙ ㄅㄨˋ ㄔㄨ ㄒㄧㄢˋ ㄓㄜ˙ ㄔˋ ㄗˋ ㄐㄧˋ ㄒㄩˋ ㄐㄧㄥ ㄧㄥˊ.',
            pinyin: 'qing3 ni3 gao4 su4 wo3 zen3 me bu4 chu1 xian4 zhe chi4 zi4 ji4 xu4 jing1 ying2.',
            translation: '赤字を出さずに経営を続けるコツを教えて下さい。',
            memo: ''
          },
          {
            word: '宅配',
            sentence: '期限不長的食物很難宅配。',
            bopomofo: 'ㄑㄧ ㄒㄧㄢˋ ㄅㄨˋ ㄔㄤˊ ㄉㄜ˙ ㄕˊ ㄨˋ ㄏㄣˇ ㄋㄢˊ ㄓㄞˊ ㄆㄟˋ.',
            pinyin: 'qi1 xian4 bu4 chang2 de shi2 wu4 hen3 nan2 zhai2 pei4.',
            translation: '日持ちのしない食べ物は、 宅配する事が難しいです。',
            memo: ''
          },
          {
            word: '下',
            sentence: '這購物網站半價到明天， 我們早點下訂單吧。',
            bopomofo: 'ㄓㄜˋ ㄍㄡˋ ㄨˋ ㄨㄤˇ ㄓㄢˋ ㄅㄢˋ ㄐㄧㄚˋ ㄉㄠˋ ㄇㄧㄥˊ ㄊㄧㄢ, ㄨㄛˇ ㄇㄣ˙ ㄗㄠˇ ㄉㄧㄢˇ ㄒㄧㄚˋ ㄉㄧㄥˋ ㄉㄢ ㄅㄚ˙.',
            pinyin: 'zhe4 gou4 wu4 wang3 zhan4 ban4 jia4 dao4 ming2 tian1, wo3 men zao3 dian3 xia4 ding4 dan1 ba.',
            translation: 'このショッピングサイトは明日まで半額なので、 早く注文しましょう。',
            memo: ''
          },
          {
            word: '既',
            sentence: '隱居的好處是既能耍廢又不需要花錢。',
            bopomofo: 'ㄧㄣˇ ㄐㄩ ㄉㄜ˙ ㄏㄠˇ ㄔㄨˋ ㄕˋ ㄐㄧˋ ㄋㄥˊ ㄕㄨㄚˇ ㄈㄟˋ ㄧㄡˋ ㄅㄨˋ ㄒㄩ ㄧㄠˋ ㄏㄨㄚ ㄑㄧㄢˊ.',
            pinyin: 'yin3 ju1 de hao3 chu4 shi4 ji4 neng2 shua3 fei4 you4 bu4 xu1 yao4 hua1 qian2.',
            translation: '引きこもりの良い所は、 ダラダラできるだけではなく、 お金も使わなくて済む事です。',
            memo: '※「引きこもり」 : 「隱居(ㄧㄣˇ ㄐㄩ/yin3 ju1)」または「悶在家裡( ㄇㄣˋ ㄗㄞˋ ㄐㄧㄚ ㄌㄧˇ/men4 zai4 jia1 li3)」でも可。'
          },
          {
            word: '隨時',
            sentence: '如果有任何問題， 你隨時都可以給我打電話。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄧㄡˇ ㄖㄣˋ ㄏㄜˊ ㄨㄣˋ ㄊㄧˊ, ㄋㄧˇ ㄙㄨㄟˊ ㄕˊ ㄉㄡ ㄎㄜˇ ㄧˇ ㄍㄟˇ ㄨㄛˇ ㄉㄚˇ ㄉㄧㄢˋ ㄏㄨㄚˋ.',
            pinyin: 'ru2 guo3 you3 ren4 he2 wen4 ti2, ni3 sui2 shi2 dou1 ke3 yi3 gei3 wo3 da3 dian4 hua4.',
            translation: '困った事があったらいつでも電話して下さい。',
            memo: ''
          },
          {
            word: '搜尋',
            sentence: '我在網路上搜尋了一陣子， 但是我要的資料卻找不到。',
            bopomofo: 'ㄨㄛˇ ㄗㄞˋ ㄨㄤˇ ㄌㄨˋ ㄕㄤˋ ㄙㄡ ㄒㄩㄣˊ ㄌㄜ˙ ㄧ ㄓㄣˋ ㄗ˙, ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄧㄠˋ ㄉㄜ˙ ㄗ ㄌㄧㄠˋ ㄑㄩㄝˋ ㄓㄠˇ ㄅㄨˊ ㄉㄠˋ.',
            pinyin: 'wo3 zai4 wang3 lu4 shang4 sou1 xun2 le yi1 zhen4 zi, dan4 shi4 wo3 yao4 de zi1 liao4 que4 zhao3 bu2 dao4.',
            translation: 'しばらくインターネットを検索しましたが、 必要な情報は見つかりませんでした。',
            memo: ''
          },
          {
            word: '冰箱',
            sentence: '冰箱裡的蔬菜快要吃完了, 媽媽回來的話我們就去買吧。',
            bopomofo: 'ㄅㄧㄥ ㄒㄧㄤ ㄌㄧˇ ㄉㄜ˙ ㄕㄨ ㄘㄞˋ ㄎㄨㄞˋ ㄧㄠˋ ㄔ ㄨㄢˊ ㄌㄜ˙, ㄇㄚ ㄇㄚ ㄏㄨㄟˊ ㄌㄞˊ ㄉㄜ˙ ㄏㄨㄚˋ ㄨㄛˇ ㄇㄣ˙ ㄐㄧㄡˋ ㄑㄩˋ ㄇㄞˇ ㄅㄚ˙.',
            pinyin: 'bing1 xiang1 li3 de shu1 cai4 kuai4 yao4 chi1 wan2 le, ma1 ma1 hui2 lai2 de hua4 wo3 men jiu4 qu4 mai3 ba.',
            translation: '冷蔵庫の中の野菜がもうすぐなくなりそうなので、 お母さんが帰って来たら買いに行きましょう。',
            memo: ''
          },
          {
            word: '吃虧',
            sentence: '我昨天原價購買的衣服今天降價了， 我感覺吃虧了。',
            bopomofo: 'ㄨㄛˇ ㄗㄨㄛˊ ㄊㄧㄢ ㄩㄢˊ ㄐㄧㄚˋ ㄍㄡˋ ㄇㄞˇ ㄉㄜ˙ ㄧ ㄈㄨˊ ㄐㄧㄣ ㄊㄧㄢ ㄐㄧㄤˋ ㄐㄧㄚˋ ㄌㄜ˙, ㄨㄛˇ ㄍㄢˇ ㄐㄩㄝˊ ㄔ ㄎㄨㄟ ㄌㄜ˙.',
            pinyin: 'wo3 zuo2 tian1 yuan2 jia4 gou4 mai3 de yi1 fu2 jin1 tian1 jiang4 jia4 le, wo3 gan3 jue2 chi1 kui1 le.',
            translation: '昨日定価で買った服が今日は値下がりしていたので、 何だか損した気分です。',
            memo: ''
          },
          {
            word: '比價',
            sentence: '即使是便宜的東西， 他也會到各個商店認真地比價。',
            bopomofo: 'ㄐㄧˊ ㄕˇ ㄕˋ ㄆㄧㄢˊ ㄧˊ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙, ㄊㄚ ㄧㄝˇ ㄏㄨㄟˋ ㄉㄠˋ ㄍㄜˋ ㄍㄜˋ ㄕㄤ ㄉㄧㄢˋ ㄖㄣˋ ㄓㄣ ㄉㄜ˙ ㄅㄧˇ ㄐㄧㄚˋ.',
            pinyin: 'ji2 shi3 shi4 pian2 yi2 de dong1 xi, ta1 ye3 hui4 dao4 ge4 ge4 shang1 dian4 ren4 zhen1 de bi3 jia4.',
            translation: '例え安いものでも、 彼は色々な店を周って真剣に値段を比べます。',
            memo: ''
          },
          {
            word: '風險',
            sentence: '因為做生意有風險而決定先問專家。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄗㄨㄛˋ ㄕㄥ ㄧˋ ㄧㄡˇ ㄈㄥ ㄒㄧㄢˇ ㄦˊ ㄐㄩㄝˊ ㄉㄧㄥˋ ㄒㄧㄢ ㄨㄣˋ ㄓㄨㄢ ㄐㄧㄚ.',
            pinyin: 'yin1 wei4 zuo4 sheng1 yi4 you3 feng1 xian3 er2 jue2 ding4 xian1 wen4 zhuan1 jia1.',
            translation: '商売にはリスクが伴うので、 最初に専門家に尋ねることにしました。',
            memo: ''
          },
          {
            word: '賣家',
            sentence: '賣家試圖賣出更高的價格， 而買家試圖買到更便宜的價格。',
            bopomofo: 'ㄇㄞˋ ㄐㄧㄚ ㄕˋ ㄊㄨˊ ㄇㄞˋ ㄔㄨ ㄍㄥˋ ㄍㄠ ㄉㄜ˙ ㄐㄧㄚˋ ㄍㄜˊ, ㄦˊ ㄇㄞˇ ㄐㄧㄚ ㄕˋ ㄊㄨˊ ㄇㄞˇ ㄉㄠˋ ㄍㄥˋ ㄆㄧㄢˊ ㄧˊ ㄉㄜ˙ ㄐㄧㄚˋ ㄍㄜˊ.',
            pinyin: 'mai4 jia1 shi4 tu2 mai4 chu1 geng4 gao1 de jia4 ge2, er2 mai3 jia1 shi4 tu2 mai3 dao4 geng4 pian2 yi2 de jia4 ge2.',
            translation: '売り手はもっと高く売ろうとし、 買い手はもっと安く買おうとします。',
            memo: ''
          },
          {
            word: '必須',
            sentence: '如果有退貨的可能性， 你必須保留發票。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄧㄡˇ ㄊㄨㄟˋ ㄏㄨㄛˋ ㄉㄜ˙ ㄎㄜˇ ㄋㄥˊ ㄒㄧㄥˋ   ㄋㄧˇ ㄅㄧˋ ㄒㄩ ㄅㄠˇ ㄌㄧㄡˊ ㄈㄚ ㄆㄧㄠˋ.',
            pinyin: 'ru2 guo3 you3 tui4 huo4 de ke3 neng2 xing4 ni3 bi4 xu1 bao3 liu2 fa1/fa4 piao4.',
            translation: '返品の可能性がある場合は、 必ずレシートを取っておかなければいけません。',
            memo: ''
          },
          {
            word: '信用',
            sentence: '難以挽回你已經失去的信用。',
            bopomofo: 'ㄋㄢˊ ㄧˇ ㄨㄢˇ ㄏㄨㄟˊ ㄋㄧˇ ㄧˇ ㄐㄧㄥ ㄕ ㄑㄩˋ ㄉㄜ˙ ㄒㄧㄣˋ ㄩㄥˋ.',
            pinyin: 'nan2 yi3 wan3 hui2 ni3 yi3 jing1 shi1 qu4 de xin4 yong4.',
            translation: '一度失ってしまった信用を取り戻すのは困難です。',
            memo: ''
          },
          {
            word: '萬一',
            sentence: '萬一颱風來了， 你要取消旅行嗎?',
            bopomofo: 'ㄨㄢˋ ㄧ ㄊㄞˊ ㄈㄥ ㄌㄞˊ ㄌㄜ˙, ㄋㄧˇ ㄧㄠˋ ㄑㄩˇ ㄒㄧㄠ ㄌㄩˇ ㄒㄧㄥˊ ㄇㄚ˙?',
            pinyin: 'wan4 yi1 tai2 feng1 lai2 le, ni3 yao4 qu3 xiao1 lu3 xing2 ma?',
            translation: '万が一台風が来たら、 旅行は中止にしますか?',
            memo: ''
          },
          {
            word: '滿意',
            sentence: '把所有的房間都打掃乾淨了, 她很滿意。',
            bopomofo: 'ㄅㄚˇ ㄙㄨㄛˇ ㄧㄡˇ ㄉㄜ˙ ㄈㄤˊ ㄐㄧㄢ ㄉㄡ ㄉㄚˇ ㄙㄠˇ ㄍㄢ ㄐㄧㄥˋ ㄌㄜ˙, ㄊㄚ ㄏㄣˇ ㄇㄢˇ ㄧˋ.',
            pinyin: 'ba3 suo3 you3 de fang2 jian1 dou1 da3 sao3 gan1 jing4 le, ta1 hen3 man3 yi4.',
            translation: '全ての部屋を綺麗に掃除し終えて、 彼女はとても満足しています。',
            memo: ''
          },
          {
            word: '以内',
            sentence: '她每天都在玩, 但考試時她總是第十名以内。',
            bopomofo: 'ㄊㄚ ㄇㄟˇ ㄊㄧㄢ ㄉㄨ ㄗㄞˋ ㄨㄢˊ, ㄉㄢˋ ㄎㄠˇ ㄕˋ ㄕˊ ㄊㄚ ㄗㄨㄥˇ ㄕˋ ㄉㄧˋ ㄕˊ ㄇㄧㄥˊ ㄧˇ ㄋㄟˋ.',
            pinyin: 'ta1 mei3 tian1 dou1 zai4 wan2, dan4 kao3 shi4 shi2 ta1 zong3 shi4 di4 shi2 ming2 yi3 nei4.',
            translation: '彼女は毎日遊んでばかりいますが、 テストの成績はいつも10番以内です。',
            memo: ''
          },
          {
            word: '普遍',
            sentence: '非現金購物越來越變普遍了。',
            bopomofo: 'ㄈㄟ ㄒㄧㄢˋ ㄐㄧㄣ ㄍㄡˋ ㄨˋ ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ ㄅㄧㄢˋ ㄆㄨˇ ㄅㄧㄢˋ ㄌㄜ˙.',
            pinyin: 'fei1 xian4 jin1 gou4 wu4 yue4 lai2 yue4 bian4 pu3 bian4 le.',
            translation: 'キャッシュレス決済はますます一般的になってきました。',
            memo: ''
          },
          {
            word: '選擇',
            sentence: '我想清爽地吃沙拉, 所以我會選擇檸檬風味醬。',
            bopomofo: 'ㄨㄛˇ ㄒㄧㄤˇ ㄑㄧㄥ ㄕㄨㄤˇ ㄉㄜ˙ ㄔ ㄕㄚ ㄌㄚ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄏㄨㄟˋ ㄒㄩㄢˇ ㄗㄜˊ ㄋㄧㄥˊ ㄇㄥˊ ㄈㄥ ㄨㄟˋ ㄐㄧㄤˋ.',
            pinyin: 'wo3 xiang3 qing1 shuang3 de chi1 sha1 la1, suo3 yi3 wo3 hui4 xuan3 ze2 ning2 meng2 feng1 wei4 jiang4.',
            translation: 'サラダはさっぱりと食べたいので、 レモンドレッシングを選びます。',
            memo: ''
          },
          {
            word: '網購',
            sentence: '網購買的物品的顏色跟我在網站上看了的稍微不一樣。',
            bopomofo: 'ㄨㄤˇ ㄍㄡˋ ㄇㄞˇ ㄉㄜ˙ ㄨˋ ㄆㄧㄣˇ ㄉㄜ˙ ㄧㄢˊ ㄙㄜˋ ㄍㄣ ㄨㄛˇ ㄗㄞˋ ㄨㄤˇ ㄓㄢˋ ㄕㄤˋ ㄎㄢˋ ㄌㄜ˙ ㄉㄜ˙ ㄕㄠ ㄨㄟ ㄅㄨˋ ㄧ ㄧㄤˋ.',
            pinyin: 'wang3 gou4 mai3 de wu4 pin3 de yan2 se4 gen1 wo3 zai4 wang3 zhan4 shang4 kan4 le de shao1 wei1 bu4 yi1 yang4.',
            translation: 'ネットで買った品物の色が、 ウェブサイトで見たものとは若干違いました。',
            memo: ''
          },
          {
            word: '貨比三家不吃虧',
            sentence: '即使你沒有時間, 貨比三家也不會不吃虧。',
            bopomofo: 'ㄐㄧˊ ㄕˇ ㄋㄧˇ ㄇㄟˊ ㄧㄡˇ ㄕˊ ㄐㄧㄢ, ㄏㄨㄛˋ ㄅㄧˇ ㄙㄢ ㄐㄧㄚ ㄧㄝˇ ㄅㄨˊ ㄏㄨㄟˋ ㄅㄨˋ ㄔ ㄎㄨㄟ.',
            pinyin: 'ji2 shi3 ni3 mei2 you3 shi2 jian1, huo4 bi3 san1 jia1 ye3 bu2 hui4 bu4 chi1 kui1.',
            translation: '時間が無くても、 買い物をする時はいくつかの店で値段を比べてから購入しましょう。',
            memo: ''
          },
          {
            word: '兩成',
            sentence: '我學習時間有兩成左右不可避免地懶惰。',
            bopomofo: 'ㄨㄛˇ ㄒㄩㄝˊ ㄒㄧˊ ㄕˊ ㄐㄧㄢ ㄧㄡˇ ㄌㄧㄤˇ ㄔㄥˊ ㄗㄨㄛˇ ㄧㄡˋ ㄅㄨˋ ㄎㄜˇ ㄅㄧˋ ㄇㄧㄢˇ ㄉㄜ˙ ㄌㄢˇ ㄉㄨㄛˋ.',
            pinyin: 'wo3 xue2 xi2 shi2 jian1 you3 liang3 cheng2 zuo3 you4 bu4 ke3 bi4 mian3 de lan3 duo4.',
            translation: '勉強時間の20%くらいはどうしても怠けてしまいます。',
            memo: ''
          },
          {
            word: '鳳梨',
            sentence: '你通常是不是把鳳梨放入糖醋肉裡?',
            bopomofo: 'ㄋㄧˇ ㄊㄨㄥ ㄔㄤˊ ㄕˋ ㄅㄨˊ ㄕˋ ㄅㄚˇ ㄈㄥˋ ㄌㄧˊ ㄈㄤˋ ㄖㄨˋ ㄊㄤˊ ㄘㄨˋ ㄖㄡˋ ㄌㄧˇ?',
            pinyin: 'ni3 tong1 chang2 shi4 bu2 shi4 ba3 feng4 li2 fang4 ru4 tang2 cu4 rou4 li3?',
            translation: '普段酢豚にパイナップルを入れますか?',
            memo: ''
          },
          {
            word: '農產品',
            sentence: '該地區的農產品的出產量一年比一年減少。',
            bopomofo: 'ㄍㄞ ㄉㄧˋ ㄑㄩ ㄉㄜ˙ ㄋㄨㄥˊ ㄔㄢˇ ㄆㄧㄣˇ ㄉㄜ˙ ㄔㄨ ㄔㄢˇ ㄌㄧㄤˋ ㄧ ㄋㄧㄢˊ ㄅㄧˇ ㄧ ㄋㄧㄢˊ ㄐㄧㄢˇ ㄕㄠˇ.',
            pinyin: 'gai1 di4 qu1 de nong2 chan3 pin3 de chu1 chan3 liang4 yi1 nian2 bi3 yi1 nian2 jian3 shao3.',
            translation: 'この地域の農作物の生産量は年々減少しています。',
            memo: ''
          },
          {
            word: '出口',
            sentence: '如果我計算出口成本， 我認為仍然存在風險。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄨㄛˇ ㄐㄧˋ ㄙㄨㄢˋ ㄔㄨ ㄎㄡˇ ㄔㄥˊ ㄅㄣˇ, ㄨㄛˇ ㄖㄣˋ ㄨㄟˊ ㄖㄥˊ ㄖㄢˊ ㄘㄨㄣˊ ㄗㄞˋ ㄈㄥ ㄒㄧㄢˇ.',
            pinyin: 'ru2 guo3 wo3 ji4 suan4 chu1 kou3 cheng2 ben3, wo3 ren4 wei2 reng2 ran2 cun2 zai4 feng1 xian3.',
            translation: '輸出にかかるコストを計算すると、 やはりリスクがあるなと思います。',
            memo: ''
          },
          {
            word: '曾經',
            sentence: '我曾經學習過跳舞三年。',
            bopomofo: 'ㄨㄛˇ ㄘㄥˊ ㄐㄧㄥ ㄒㄩㄝˊ ㄒㄧˊ ㄍㄨㄛˋ ㄊㄧㄠˋ ㄨˇ ㄙㄢ ㄋㄧㄢˊ.',
            pinyin: 'wo3 ceng2 jing1 xue2 xi2 guo4 tiao4 wu3 san1 nian2.',
            translation: 'かつて私はダンスを三年間習っていました。',
            memo: ''
          },
          {
            word: '占',
            sentence: '占這個學校的大部分的人是當地的學生。',
            bopomofo: 'ㄓㄢˋ ㄓㄜˋ ㄍㄜˋ ㄒㄩㄝˊ ㄒㄧㄠˋ ㄉㄜ˙ ㄉㄚˋ ㄅㄨˋ ㄈㄣˋ ㄉㄜ˙ ㄖㄣˊ ㄕˋ ㄉㄤ ㄉㄧˋ ㄉㄜ˙ ㄒㄩㄝˊ ㄕㄥ.',
            pinyin: 'zhan4 zhe4 ge4 xue2 xiao4 de da4 bu4 fen4 de ren2 shi4 dang1 di4 de xue2 sheng1.',
            translation: 'この学校のほとんどを占めるのは地元の学生です。',
            memo: ''
          },
          {
            word: '成本',
            sentence: '人事成本, 租金等等都是開店必須考慮的各種成本。',
            bopomofo: 'ㄖㄣˊ ㄕˋ ㄔㄥˊ ㄅㄣˇ, ㄗㄨ ㄐㄧㄣ ㄉㄥˇ ㄉㄥˇ ㄉㄡ ㄕˋ ㄎㄞ ㄉㄧㄢˋ ㄅㄧˋ ㄒㄩ ㄎㄠˇ ㄌㄩˋ ㄉㄜ˙ ㄍㄜˋ ㄓㄨㄥˇ ㄔㄥˊ ㄅㄣˇ.',
            pinyin: 'ren2 shi4 cheng2 ben3, zu1 jin1 deng3 deng3 dou1 shi4 kai1 dian4 bi4 xu1 kao3 lu4 de ge4 zhong3 cheng2 ben3.',
            translation: '人件費や家賃など、 店を開くには様々なコストを考慮しないといけません。',
            memo: ''
          },
          {
            word: '價格',
            sentence: '瘟疫的時候口罩很難買到不說, 價格也很貴。',
            bopomofo: 'ㄨㄣ ㄧˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄎㄡˇ ㄓㄠˋ ㄏㄣˇ ㄋㄢˊ ㄇㄞˇ ㄉㄠˋ ㄅㄨˋ ㄕㄨㄛ, ㄐㄧㄚˋ ㄍㄜˊ ㄧㄝˇ ㄏㄣˇ ㄍㄨㄟˋ.',
            pinyin: 'wen1 yi4 de shi2 hou4 kou3 zhao4 hen3 nan2 mai3 dao4 bu4 shuo1, jia4 ge2 ye3 hen3 gui4.',
            translation: '疫病が流行している時はマスクの購入が難しくなるのは言うまでもなく、 値段も高くなります、 。',
            memo: ''
          },
          {
            word: '競爭',
            sentence: '為了跟大公司競爭需要有相當的策略。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄍㄣ ㄉㄚˋ ㄍㄨㄥ ㄙ ㄐㄧㄥˋ ㄓㄥ ㄒㄩ ㄧㄠˋ ㄧㄡˇ ㄒㄧㄤ ㄉㄤ ㄉㄜ˙ ㄘㄜˋ ㄌㄩㄝˋ.',
            pinyin: 'wei4 le gen1 da4 gong1 si1 jing4 zheng1 xu1 yao4 you3 xiang1 dang1 de ce4 lue4.',
            translation: '大企業と競争するにはそれなりの作戦が必要です。',
            memo: ''
          },
          {
            word: '好運',
            sentence: '他的性格很開朗, 所以好運可能總會出現。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄒㄧㄥˋ ㄍㄜˊ ㄏㄣˇ ㄎㄞ ㄌㄤˇ, ㄙㄨㄛˇ ㄧˇ ㄏㄠˇ ㄩㄣˋ ㄎㄜˇ ㄋㄥˊ ㄗㄨㄥˇ ㄏㄨㄟˋ ㄔㄨ ㄒㄧㄢˋ.',
            pinyin: 'ta1 de xing4 ge2 hen3 kai1 lang3, suo3 yi3 hao3 yun4 ke3 neng2 zong3 hui4 chu1 xian4.',
            translation: '彼はとても明るい人だから、 いつも幸運が舞い込んでくるのかもしれません。',
            memo: ''
          },
          {
            word: '★内餡',
            sentence: '那家麵包店賣的草莓内餡的點心非常好吃。',
            bopomofo: 'ㄋㄚˋ ㄐㄧㄚ ㄇㄧㄢˋ ㄅㄠ ㄉㄧㄢˋ ㄇㄞˋ ㄉㄜ˙ ㄘㄠˇ ㄇㄟˊ ㄋㄟˋ ㄒㄧㄢˋ ㄉㄜ˙ ㄉㄧㄢˇ ㄒㄧㄣ ㄈㄟ ㄔㄤˊ ㄏㄠˇ ㄔ.',
            pinyin: 'na4 jia1 mian4 bao1 dian4 mai4 de cao3 mei2 nei4 xian4 de dian3 xin1 fei1 chang2 hao3 chi1.',
            translation: 'あのパン屋が売っている、 苺のフィリングが入ったペストリーはとても美味しいです。',
            memo: '※「ペストリー」は「點心」?'
          },
          {
            word: '當做',
            sentence: '他當做主任站在管理部下的立場。',
            bopomofo: 'ㄊㄚ ㄉㄤ ㄗㄨㄛˋ ㄓㄨˇ ㄖㄣˋ ㄓㄢˋ ㄗㄞˋ ㄍㄨㄢˇ ㄌㄧˇ ㄅㄨˋ ㄒㄧㄚˋ ㄉㄜ˙ ㄌㄧˋ ㄔㄤˇ.',
            pinyin: 'ta1 dang1 zuo4 zhu3 ren4 zhan4 zai4 guan3 li3 bu4 xia4 de li4 chang3.',
            translation: '彼はディレクターとして、 部下をまとめる立場にあります。',
            memo: ''
          },
          {
            word: '★喜餅',
            sentence: '在婚禮上， 孩子們的眼睛釘在喜餅上。',
            bopomofo: 'ㄗㄞˋ ㄏㄨㄣ ㄌㄧˇ ㄕㄤˋ, ㄏㄞˊ ㄗ˙ ㄇㄣ˙ ㄉㄜ˙ ㄧㄢˇ ㄐㄧㄥ ㄉㄧㄥ ㄗㄞˋ ㄒㄧˇ ㄅㄧㄥˇ ㄕㄤˋ.',
            pinyin: 'zai4 hun1 li3 shang4, hai2 zi men de yan3 jing1 ding1 zai4 xi3 bing3 shang4.',
            translation: '結婚式で、 子供たちの目はウェディングケーキに釘付けになっています。',
            memo: '※「釘」と「盯」は違う字? 「釘在喜餅上(ㄉㄧㄥ ㄗㄞˋ ㄒㄧˇ ㄅㄧㄥˇ ㄕㄤˋ/ding1 zai4 xi3 bing3 shang4)」 は 「盯著喜餅(ㄉㄧㄥ ㄓㄜ˙ ㄒㄧˇ ㄅㄧㄥˇ/ding1 zhe xi3 bing3」でも可。'
          },
          {
            word: '喜愛',
            sentence: '那個孩子喜愛毛絨熊， 每天一起睡覺。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄏㄞˊ ㄗ˙ ㄒㄧˇ ㄞˋ ㄇㄠˊ ㄖㄨㄥˊ ㄒㄩㄥˊ, ㄇㄟˇ ㄊㄧㄢ ㄧˋ ㄑㄧˇ ㄕㄨㄟˋ ㄐㄧㄠˋ.',
            pinyin: 'na4 ge4 hai2 zi xi3 ai4 mao2 rong2 xiong2, mei3 tian1 yi1 qi3 shui4 jiao4.',
            translation: 'あの子はクマのぬいぐるみがお気に入りで、 毎日一緒に寝ています。',
            memo: ''
          },
          {
            word: '茶點',
            sentence: '跟咖啡一起吃的茶點怎樣?',
            bopomofo: 'ㄍㄣ ㄎㄚ ㄈㄟ ㄧˋ ㄑㄧˇ ㄔ ㄉㄜ˙ ㄔㄚˊ ㄉㄧㄢˇ ㄗㄣˇ ㄧㄤˋ?',
            pinyin: 'gen1 ka1 fei1 yi1 qi3 chi1 de cha2 dian3 zen3 yang4?',
            translation: 'コーヒーと一緒にデザートはいかがですか?',
            memo: ''
          },
          {
            word: '商機',
            sentence: '那個人， 他認為是商機的事都會做。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄖㄣˊ, ㄊㄚ ㄖㄣˋ ㄨㄟˊ ㄕˋ ㄕㄤ ㄐㄧ ㄉㄜ˙ ㄕˋ ㄉㄡ ㄏㄨㄟˋ ㄗㄨㄛˋ.',
            pinyin: 'na4 ge4 ren2, ta1 ren4 wei2 shi4 shang1 ji1 de shi4 dou1 hui4 zuo4.',
            translation: 'あの人は、 ビジネスチャンスだと思う事は何でもやります。',
            memo: ''
          },
          {
            word: '代表',
            sentence: '他在演講比賽上當作學生代表問候大家。',
            bopomofo: 'ㄊㄚ ㄗㄞˋ ㄧㄢˇ ㄐㄧㄤˇ ㄅㄧˇ ㄙㄞˋ ㄕㄤˋ ㄉㄤ ㄗㄨㄛˋ ㄒㄩㄝˊ ㄕㄥ ㄉㄞˋ ㄅㄧㄠˇ ㄨㄣˋ ㄏㄡˋ ㄉㄚˋ ㄐㄧㄚ.',
            pinyin: 'ta1 zai4 yan3 jiang3 bi3 sai4 shang4 dang1 zuo4 xue2 sheng1 dai4 biao3 wen4 hou4 da4 jia1.',
            translation: '彼は弁論大会で学生代表として挨拶します。',
            memo: ''
          },
          {
            word: '政府',
            sentence: '政府的政策有的時候不適合一般人的生活。',
            bopomofo: 'ㄓㄥˋ ㄈㄨˇ ㄉㄜ˙ ㄓㄥˋ ㄘㄜˋ ㄧㄡˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄅㄨˊ ㄕˋ ㄏㄜˊ ㄧ ㄅㄢ ㄖㄣˊ ㄉㄜ˙ ㄕㄥ ㄏㄨㄛˊ.',
            pinyin: 'zheng4 fu3 de zheng4 ce4 you3 de shi2 hou4 bu2 shi4 he2 yi1 ban1 ren2 de sheng1 huo2.',
            translation: '政府の方針は一般人の生活に適していない事があります。',
            memo: ''
          },
          {
            word: '舉辦',
            sentence: '在學校舉辦的禮節教室中, 我第一次吃到了法國菜。',
            bopomofo: 'ㄗㄞˋ ㄒㄩㄝˊ ㄒㄧㄠˋ ㄐㄩˇ ㄅㄢˋ ㄉㄜ˙ ㄌㄧˇ ㄐㄧㄝˊ ㄐㄧㄠˋ ㄕˋ ㄓㄨㄥ, ㄨㄛˇ ㄉㄧˋ ㄧ ㄘˋ ㄔ ㄉㄠˋ ㄌㄜ˙ ㄈㄚˇ ㄍㄨㄛˊ ㄘㄞˋ.',
            pinyin: 'zai4 xue2 xiao4 ju3 ban4 de li3 jie2 jiao4 shi4 zhong1, wo3 di4 yi1 ci4 chi1 dao4 le fa3 guo2 cai4.',
            translation: '学校が主催するマナー教室で、 私は初めてフランス料理を食べました。',
            memo: ''
          },
          {
            word: '產值',
            sentence: '汽車的產值比去年增長了, 但是零件的成本也增長了。',
            bopomofo: 'ㄑㄧˋ ㄔㄜ ㄉㄜ˙ ㄔㄢˇ ㄓˊ ㄅㄧˇ ㄑㄩˋ ㄋㄧㄢˊ ㄗㄥ ㄓㄤˇ ㄌㄜ˙, ㄉㄢˋ ㄕˋ ㄌㄧㄥˊ ㄐㄧㄢˋ ㄉㄜ˙ ㄔㄥˊ ㄅㄣˇ ㄧㄝˇ ㄗㄥ ㄓㄤˇ ㄌㄜ˙.',
            pinyin: 'qi4 che1 de chan3 zhi2 bi3 qu4 nian2 zeng1 zhang3 le, dan4 shi4 ling2 jian4 de cheng2 ben3 ye3 zeng1 zhang3 le.',
            translation: '自動車の生産額は昨年より増加しましたが、 部品のコストも増加しています。',
            memo: ''
          },
          {
            word: '提高',
            sentence: '公務員的申請人數逐年提高了， 因此通過考試也難了。',
            bopomofo: 'ㄍㄨㄥ ㄨˋ ㄩㄢˊ ㄉㄜ˙ ㄕㄣ ㄑㄧㄥˇ ㄖㄣˊ ㄕㄨˋ ㄓㄨˊ ㄋㄧㄢˊ ㄊㄧˊ ㄍㄠ ㄌㄜ˙, ㄧㄣ ㄘˇ ㄊㄨㄥ ㄍㄨㄛˋ ㄎㄠˇ ㄕˋ ㄧㄝˇ ㄋㄢˊ ㄌㄜ˙.',
            pinyin: 'gong1 wu4 yuan2 de shen1 qing3 ren2 shu4 zhu2 nian2 ti2 gao1 le, yin1 ci3 tong1 guo4 kao3 shi4 ye3 nan2 le.',
            translation: '公務員の志願者数は年々増えていて、 試験に受かるのは難しくなっています。',
            memo: ''
          },
          {
            word: '知名',
            sentence: '在這附近好知名的小吃店前總是很多人在排隊。',
            bopomofo: 'ㄗㄞˋ ㄓㄜˋ ㄈㄨˋ ㄐㄧㄣˋ ㄏㄠˇ ㄓ ㄇㄧㄥˊ ㄉㄜ˙ ㄒㄧㄠˇ ㄔ ㄉㄧㄢˋ ㄑㄧㄢˊ ㄗㄨㄥˇ ㄕˋ ㄏㄣˇ ㄉㄨㄛ ㄖㄣˊ ㄗㄞˋ ㄆㄞˊ ㄉㄨㄟˋ.',
            pinyin: 'zai4 zhe4 fu4 jin4 hao3 zhi1 ming2 de xiao3 chi1 dian4 qian2 zong3 shi4 hen3 duo1 ren2 zai4 pai2 dui4.',
            translation: 'このあたりで有名なレストランの前にはいつもたくさんの人が列を作っています。',
            memo: ''
          },
          {
            word: '出現',
            sentence: '新出現了的問題看起來很嚴重, 我們應該重新考慮優先事項。',
            bopomofo: 'ㄒㄧㄣ ㄔㄨ ㄒㄧㄢˋ ㄌㄜ˙ ㄉㄜ˙ ㄨㄣˋ ㄊㄧˊ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄏㄣˇ ㄧㄢˊ ㄓㄨㄥˋ, ㄨㄛˇ ㄇㄣ˙ ㄧㄥ ㄍㄞ ㄔㄨㄥˊ ㄒㄧㄣ ㄎㄠˇ ㄌㄩˋ ㄧㄡ ㄒㄧㄢ ㄕˋ ㄒㄧㄤˋ.',
            pinyin: 'xin1 chu1 xian4 le de wen4 ti2 kan4 qi3 lai2 hen3 yan2 zhong4, wo3 men ying1 gai1 chong2 xin1 kao3 lu4 you1 xian1 shi4 xiang4.',
            translation: '新たに発生した問題はとても深刻に見えるので、 優先順位を考え直さないといけません。',
            memo: ''
          },
          {
            word: '科技',
            sentence: '為了學習最前頭的科技最好的方法是閱讀已經公開了的論文。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄒㄩㄝˊ ㄒㄧˊ ㄗㄨㄟˋ ㄑㄧㄢˊ ㄊㄡ˙ ㄉㄜ˙ ㄎㄜ ㄐㄧˋ ㄗㄨㄟˋ ㄏㄠˇ ㄉㄜ˙ ㄈㄤ ㄈㄚˇ ㄕˋ ㄩㄝˋ ㄉㄨˊ ㄧˇ ㄐㄧㄥ ㄍㄨㄥ ㄎㄞ ㄌㄜ˙ ㄉㄜ˙ ㄌㄨㄣˋ ㄨㄣˊ.',
            pinyin: 'wei4 le xue2 xi2 zui4 qian2 tou2 de ke1 ji4 zui4 hao3 de fang1 fa3 shi4 yue4 du2 yi3 jing1 gong1 kai1 le de lun4 wen2.',
            translation: '最先端の科学技術を学ぶには、 公開されている論文を読むのが一番です。',
            memo: ''
          },
          {
            word: '（台）斤',
            sentence: '大概一斤的牛排我覺得我可以一個人吃掉。',
            bopomofo: 'ㄉㄚˋ ㄍㄞˋ ㄧ ㄐㄧㄣ ㄉㄜ˙ ㄋㄧㄡˊ ㄆㄞˊ ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄨㄛˇ ㄎㄜˇ ㄧˇ ㄧˊ ㄍㄜ˙ ㄖㄣˊ ㄔ ㄉㄧㄠˋ.',
            pinyin: 'da4 gai4 yi1 jin1 de niu2 pai2 wo3 jue2 de wo3 ke3 yi3 yi1 ge4 ren2 chi1 diao4.',
            translation: '600グラムくらいのステーキなら一人で食べられると思います。',
            memo: ''
          },
          {
            word: '叔叔',
            sentence: '叔叔早就吃素了, 現在他的菜總是很簡單。',
            bopomofo: 'ㄕㄨˊ ㄕㄨ˙ ㄗㄠˇ ㄐㄧㄡˋ ㄔ ㄙㄨˋ ㄌㄜ˙, ㄒㄧㄢˋ ㄗㄞˋ ㄊㄚ ㄉㄜ˙ ㄘㄞˋ ㄗㄨㄥˇ ㄕˋ ㄏㄣˇ ㄐㄧㄢˇ ㄉㄢ.',
            pinyin: 'shu2 shu zao3 jiu4 chi1 su4 le, xian4 zai4 ta1 de cai4 zong3 shi4 hen3 jian3 dan1.',
            translation: 'おじさんはベジタリアンになってから長いので、 普段の食事はすごく質素です。',
            memo: ''
          },
          {
            word: '口味',
            sentence: '我想模仿奶奶做的料理， 但是做不出一樣的口味。',
            bopomofo: 'ㄨㄛˇ ㄒㄧㄤˇ ㄇㄛˊ ㄈㄤˇ ㄋㄞˇ ㄋㄞ˙ ㄗㄨㄛˋ ㄉㄜ˙ ㄌㄧㄠˋ ㄌㄧˇ, ㄉㄢˋ ㄕˋ ㄗㄨㄛˋ ㄅㄨˋ ㄔㄨ ㄧ ㄧㄤˋ ㄉㄜ˙ ㄎㄡˇ ㄨㄟˋ.',
            pinyin: 'wo3 xiang3 mo2 fang3 nai3 nai zuo4 de liao4 li3, dan4 shi4 zuo4 bu4 chu1 yi1 yang4 de kou3 wei4.',
            translation: 'おばあちゃんの料理を真似したいのですが、 同じ味が出せません。',
            memo: ''
          },
          {
            word: '結果',
            sentence: '他總是隨便亂交朋友, 結果他的社交網站上有很多他不記得的人。',
            bopomofo: 'ㄊㄚ ㄗㄨㄥˇ ㄕˋ ㄙㄨㄟˊ ㄅㄧㄢˋ ㄌㄨㄢˋ ㄐㄧㄠ ㄆㄥˊ ㄧㄡˇ, ㄐㄧㄝˊ ㄍㄨㄛˇ ㄊㄚ ㄉㄜ˙ ㄕㄜˋ ㄐㄧㄠ ㄨㄤˇ ㄓㄢˋ ㄕㄤˋ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄊㄚ ㄅㄨˊ ㄐㄧˋ ㄉㄜ˙ ㄉㄜ˙ ㄖㄣˊ.',
            pinyin: 'ta1 zong3 shi4 sui2 bian4 luan4 jiao1 peng2 you3, jie2 guo3 ta1 de she4 jiao1 wang3 zhan4 shang4 you3 hen3 duo1 ta1 bu2 ji4 de de ren2.',
            translation: '彼はいつもやたらと友達を作るので、 結果として彼のSNSには彼が覚えていない人がたくさんいます。',
            memo: ''
          },
          {
            word: '購買',
            sentence: '買了牛奶後， 他才發現冰箱裡已經有一瓶了。',
            bopomofo: 'ㄇㄞˇ ㄌㄜ˙ ㄋㄧㄡˊ ㄋㄞˇ ㄏㄡˋ, ㄊㄚ ㄘㄞˊ ㄈㄚ ㄒㄧㄢˋ ㄅㄧㄥ ㄒㄧㄤ ㄌㄧˇ ㄧˇ ㄐㄧㄥ ㄧㄡˇ ㄧ ㄆㄧㄥˊ ㄌㄜ˙.',
            pinyin: 'mai3 le niu2 nai3 hou4, ta1 cai2 fa1 xian4 bing1 xiang1 li3 yi3 jing1 you3 yi1 ping2 le.',
            translation: '牛乳を買った後で、 冷蔵庫の中に既に一瓶ある事に彼は気づきました。',
            memo: ''
          },
          {
            word: '改善',
            sentence: '我想改善自己的生活方式， 但我戒不了酒。',
            bopomofo: 'ㄨㄛˇ ㄒㄧㄤˇ ㄍㄞˇ ㄕㄢˋ ㄗˋ ㄐㄧˇ ㄉㄜ˙ ㄕㄥ ㄏㄨㄛˊ ㄈㄤ ㄕˋ, ㄉㄢˋ ㄨㄛˇ ㄐㄧㄝˋ ㄅㄨˋ ㄌㄧㄠˇ ㄐㄧㄡˇ.',
            pinyin: 'wo3 xiang3 gai3 shan4 zi4 ji3 de sheng1 huo2 fang1 shi4, dan4 wo3 jie4 bu4 liao3 jiu3.',
            translation: '生活習慣は改善したいと思いますが、 禁酒するのは無理です。',
            memo: ''
          },
          {
            word: '並且',
            sentence: '這個湯的湯底是鹽巴的味道， 並且加了柚子的香味。',
            bopomofo: 'ㄓㄜˋ ㄍㄜˋ ㄊㄤ ㄉㄜ˙ ㄊㄤ ㄉㄧˇ ㄕˋ ㄧㄢˊ ㄅㄚ ㄉㄜ˙ ㄨㄟˋ ㄉㄠˋ, ㄅㄧㄥˋ ㄑㄧㄝˇ ㄐㄧㄚ ㄌㄜ˙ ㄧㄡˋ ㄗ˙ ㄉㄜ˙ ㄒㄧㄤ ㄨㄟˋ.',
            pinyin: 'zhe4 ge4 tang1 de tang1 di3 shi4 yan2 ba1 de wei4 dao4, bing4 qie3 jia1 le you4 zi de xiang1 wei4.',
            translation: 'このスープのベースは醤油味で、 更に柚子の風味がプラスされています。',
            memo: ''
          },
          {
            word: '行銷',
            sentence: '為了在外國行銷你的商品， 你得找出那個國家的需求。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄗㄞˋ ㄨㄞˋ ㄍㄨㄛˊ ㄒㄧㄥˊ ㄒㄧㄠ ㄋㄧˇ ㄉㄜ˙ ㄕㄤ ㄆㄧㄣˇ, ㄋㄧˇ ㄉㄟˇ ㄓㄠˇ ㄔㄨ ㄋㄚˋ ㄍㄜˋ ㄍㄨㄛˊ ㄐㄧㄚ ㄉㄜ˙ ㄒㄩ ㄑㄧㄡˊ.',
            pinyin: 'wei4 le zai4 wai4 guo2 xing2 xiao1 ni3 de shang1 pin3, ni3 dei3 zhao3 chu1 na4 ge4 guo2 jia1 de xu1 qiu2.',
            translation: '外国で商品を販売するには、 その国のニーズを調べないといけません。',
            memo: ''
          },
          {
            word: '團購',
            sentence: '即使不團購的話， 我自己可以把五十罐的啤酒喝完。',
            bopomofo: 'ㄐㄧˊ ㄕˇ ㄅㄨˋ ㄊㄨㄢˊ ㄍㄡˋ ㄉㄜ˙ ㄏㄨㄚˋ, ㄨㄛˇ ㄗˋ ㄐㄧˇ ㄎㄜˇ ㄧˇ ㄅㄚˇ ㄨˇ ㄕˊ ㄍㄨㄢˋ ㄉㄜ˙ ㄆㄧˊ ㄐㄧㄡˇ ㄏㄜ ㄨㄢˊ.',
            pinyin: 'ji2 shi3 bu4 tuan2 gou4 de hua4, wo3 zi4 ji3 ke3 yi3 ba3 wu3 shi2 guan4 de pi2 jiu3 he1 wan2.',
            translation: '共同購入しなくても、 50缶のビールなら一人で飲み干せます。',
            memo: ''
          },
          {
            word: '店面',
            sentence: '在店面出售的配菜看起來太好吃了， 我買了回來。',
            bopomofo: 'ㄗㄞˋ ㄉㄧㄢˋ ㄇㄧㄢˋ ㄔㄨ ㄕㄡˋ ㄉㄜ˙ ㄆㄟˋ ㄘㄞˋ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄊㄞˋ ㄏㄠˇ ㄔ ㄌㄜ˙, ㄨㄛˇ ㄇㄞˇ ㄌㄜ˙ ㄏㄨㄟˊ ㄌㄞˊ.',
            pinyin: 'zai4 dian4 mian4 chu1 shou4 de pei4 cai4 kan4 qi3 lai2 tai4 hao3 chi1 le, wo3 mai3 le hui2 lai2.',
            translation: '店先で売っているおかずがあまりにも美味しそうだったので、 買って帰ってきました。',
            memo: ''
          },
          {
            word: '全',
            sentence: '一頭熊出沒的謠言迅速傳遍了全小鎮。',
            bopomofo: 'ㄧ ㄊㄡˊ ㄒㄩㄥˊ ㄔㄨ ㄇㄛˋ ㄉㄜ˙ ㄧㄠˊ ㄧㄢˊ ㄒㄩㄣˋ ㄙㄨˋ ㄔㄨㄢˊ ㄅㄧㄢˋ ㄌㄜ˙ ㄑㄩㄢˊ ㄒㄧㄠˇ ㄓㄣˋ.',
            pinyin: 'yi1 tou2 xiong2 chu1 mo4 de yao2 yan2 xun4 su4 chuan2 bian4 le quan2 xiao3 zhen4.',
            translation: '熊が出たという噂は瞬く間に町全体に広がりました。',
            memo: ''
          },
          {
            word: '閩南語',
            sentence: '在台灣南部很多人會說閩南語。',
            bopomofo: 'ㄗㄞˋ ㄊㄞˊ ㄨㄢ ㄋㄢˊ ㄅㄨˋ ㄏㄣˇ ㄉㄨㄛ ㄖㄣˊ ㄏㄨㄟˋ ㄕㄨㄛ ㄇㄧㄣˇ ㄋㄢˊ ㄩˇ.',
            pinyin: 'zai4 tai2 wan1 nan2 bu4 hen3 duo1 ren2 hui4 shuo1 min3 nan2 yu3.',
            translation: '台湾の南部では、 多くの人が台湾語を話す事ができます。',
            memo: ''
          },
          {
            word: '旺來',
            sentence: '「旺來」是台語來的, 意思就是鳳梨。',
            bopomofo: ' ㄨㄤˋ ㄌㄞˊ  ㄕˋ ㄊㄞˊ ㄩˇ ㄌㄞˊ ㄉㄜ˙, ㄧˋ ㄙ ㄐㄧㄡˋ ㄕˋ ㄈㄥˋ ㄌㄧˊ.',
            pinyin: 'wang4 lai2 shi4 tai2 yu3 lai2 de, yi4 si1 jiu4 shi4 feng4 li2.',
            translation: '「旺來」は台湾語から来ていて、 パイナップルを意味します。',
            memo: ''
          },
          {
            word: '東京',
            sentence: '東京捷運的票價很貴不說, 有的時候也很擁擠。',
            bopomofo: 'ㄉㄨㄥ ㄐㄧㄥ ㄐㄧㄝˊ ㄩㄣˋ ㄉㄜ˙ ㄆㄧㄠˋ ㄐㄧㄚˋ ㄏㄣˇ ㄍㄨㄟˋ ㄅㄨˋ ㄕㄨㄛ, ㄧㄡˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄧㄝˇ ㄏㄣˇ ㄩㄥ ㄐㄧˇ.',
            pinyin: 'dong1 jing1 jie2 yun4 de piao4 jia4 hen3 gui4 bu4 shuo1, you3 de shi2 hou4 ye3 hen3 yong1 ji3.',
            translation: '東京の電車はチケットが高いのは言うまでもなく、 すごく混んでいる事もあります。',
            memo: ''
          },
          {
            word: '鳳梨酥',
            sentence: '鳳梨酥的内餡可能沒包鳳梨。',
            bopomofo: 'ㄈㄥˋ ㄌㄧˊ ㄙㄨ ㄉㄜ˙ ㄋㄟˋ ㄒㄧㄢˋ ㄎㄜˇ ㄋㄥˊ ㄇㄟˊ ㄅㄠ ㄈㄥˋ ㄌㄧˊ.',
            pinyin: 'feng4 li2 su1 de nei4 xian4 ke3 neng2 mei2 bao1 feng4 li2.',
            translation: 'パイナップルケーキの餡には、 パイナップルが入っていない事があります。',
            memo: ''
          },
          {
            word: '第二位',
            sentence: '在考試中她不想當第二位, 所以很努力地學習。',
            bopomofo: 'ㄗㄞˋ ㄎㄠˇ ㄕˋ ㄓㄨㄥ ㄊㄚ ㄅㄨˋ ㄒㄧㄤˇ ㄉㄤ ㄉㄧˋ ㄦˋ ㄨㄟˋ, ㄙㄨㄛˇ ㄧˇ ㄏㄣˇ ㄋㄨˇ ㄌㄧˋ ㄉㄜ˙ ㄒㄩㄝˊ ㄒㄧˊ.',
            pinyin: 'zai4 kao3 shi4 zhong1 ta1 bu4 xiang3 dang1 di4 er4 wei4, suo3 yi3 hen3 nu3 li4 de xue2 xi2.',
            translation: '彼女はテストで二番にはなりたくなかったので、 一生懸命勉強しました。',
            memo: ''
          },
          {
            word: '鳳梨農',
            sentence: '為了成為鳳梨農我應該住在多少溫暖的地方?',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄔㄥˊ ㄨㄟˊ ㄈㄥˋ ㄌㄧˊ ㄋㄨㄥˊ ㄨㄛˇ ㄧㄥ ㄍㄞ ㄓㄨˋ ㄗㄞˋ ㄉㄨㄛ ㄕㄠˇ ㄨㄣ ㄋㄨㄢˇ ㄉㄜ˙ ㄉㄧˋ ㄈㄤ?',
            pinyin: 'wei4 le cheng2 wei2 feng4 li2 nong2 wo3 ying1 gai1 zhu4 zai4 duo1 shao3 wen1 nuan3 de di4 fang1?',
            translation: 'パイナップル農家になるには、 どのくらい温かい場所に住んだらよいですか?',
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
