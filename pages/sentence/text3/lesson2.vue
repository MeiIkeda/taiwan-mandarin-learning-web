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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第2章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第2章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      data: {
        title: '當代中文課程課3・第2章',
        words: [
          {
            word: '起',
            sentence: '今天賣的牛排價格是兩百元起。',
            bopomofo: 'ㄐㄧㄣ ㄊㄧㄢ ㄇㄞˋ ㄉㄜ˙ ㄋㄧㄡˊ ㄆㄞˊ ㄐㄧㄚˋ ㄍㄜˊ ㄕˋ ㄌㄧㄤˇ ㄅㄞˇ ㄩㄢˊ ㄑㄧˇ.',
            pinyin: 'jin1 tian1 mai4 de niu2 pai2 jia4 ge2 shi4 liang3 bai3 yuan2 qi3.',
            translation: '今日のステーキの価格は200元からです。',
            memo: ''
          },
          {
            word: '外套',
            sentence: '網路購買很方便, 但是在買外套前我想親眼檢查。',
            bopomofo: 'ㄨㄤˇ ㄌㄨˋ ㄍㄡˋ ㄇㄞˇ ㄏㄣˇ ㄈㄤ ㄅㄧㄢˋ, ㄉㄢˋ ㄕˋ ㄗㄞˋ ㄇㄞˇ ㄨㄞˋ ㄊㄠˋ ㄑㄧㄢˊ ㄨㄛˇ ㄒㄧㄤˇ ㄑㄧㄣ ㄧㄢˇ ㄐㄧㄢˇ ㄔㄚˊ.',
            pinyin: 'wang3 lu4 gou4 mai3 hen3 fang1 bian4, dan4 shi4 zai4 mai3 wai4 tao4 qian2 wo3 xiang3 qin1 yan3 jian3 cha2.',
            translation: 'オンラインショッピングはとても便利ですが、 上着は買う前に自分の目で見て確認したいです。',
            memo: ''
          },
          {
            word: '一般',
            sentence: '不必餐廳級的菜, 我希望至少會做一般的家庭料理。',
            bopomofo: 'ㄅㄨˋ ㄅㄧˋ ㄘㄢ ㄊㄧㄥ ㄐㄧˊ ㄉㄜ˙ ㄘㄞˋ, ㄨㄛˇ ㄒㄧ ㄨㄤˋ ㄓˋ ㄕㄠˇ ㄏㄨㄟˋ ㄗㄨㄛˋ ㄧˋ ㄅㄢ ㄉㄜ˙ ㄐㄧㄚ ㄊㄧㄥˊ ㄌㄧㄠˋ ㄌㄧˇ.',
            pinyin: 'bu2 bi4 can1 ting1 ji2 de cai4, wo3 xi1 wang4 zhi4 shao3 hui4 zuo4 yi1 ban1 de jia1 ting2 liao4 li3.',
            translation: 'レストランレベルでなくても、 一般的な家庭料理は作れるようになるといいのですが。',
            memo: ''
          },
          {
            word: '商品',
            sentence: '那家店的新商品在每星期六發售。',
            bopomofo: 'ㄋㄚˋ ㄐㄧㄚ ㄉㄧㄢˋ ㄉㄜ˙ ㄒㄧㄣ ㄕㄤ ㄆㄧㄣˇ ㄗㄞˋ ㄇㄟˇ ㄒㄧㄥ ㄑㄧ ㄌㄧㄡˋ ㄈㄚ ㄕㄡˋ.',
            pinyin: 'na4 jia1 dian4 de xin1 shang1 pin3 zai4 mei3 xing1 qi1 liu4 fa1 shou4.',
            translation: 'その店では、 毎週土曜に新商品が発売されます。',
            memo: ''
          },
          {
            word: '折扣',
            sentence: '按照各商品的銷行, 老闆決定各折扣率。',
            bopomofo: 'ㄢˋ ㄓㄠˋ ㄍㄜˋ ㄕㄤ ㄆㄧㄣˇ ㄉㄜ˙ ㄒㄧㄠ ㄒㄧㄥˊ, ㄌㄠˇ ㄅㄢˇ ㄐㄩㄝˊ ㄉㄧㄥˋ ㄍㄜˋ ㄓㄜˊ ㄎㄡˋ ㄌㄩˋ.',
            pinyin: 'an4 zhao4 ge4 shang1 pin3 de xiao1 xing2, lao3 ban3 jue2 ding4 ge4 zhe2 kou4 lu4.',
            translation: '各商品の売れ行きに応じて、 上司がそれぞれの割引率を決定します。',
            memo: ''
          },
          {
            word: '省',
            sentence: '這幾天沒有下雨， 所以我們得省水。',
            bopomofo: 'ㄓㄜˋ ㄐㄧˇ ㄊㄧㄢ ㄇㄟˊ ㄧㄡˇ ㄒㄧㄚˋ ㄩˇ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄇㄣ˙ ㄉㄟˇ ㄕㄥˇ ㄕㄨㄟˇ.',
            pinyin: 'zhe4 ji3 tian1 mei2 you3 xia4 yu3, suo3 yi3 wo3 men dei3 sheng3 shui3.',
            translation: '最近は雨が降らないので、 水を節約する必要があります。',
            memo: ''
          },
          {
            word: '牌子',
            sentence: '我對牌子沒有講究, 所以購物時我到各家商店逛逛。',
            bopomofo: 'ㄨㄛˇ ㄉㄨㄟˋ ㄆㄞˊ ㄗ˙ ㄇㄟˊ ㄧㄡˇ ㄐㄧㄤˇ ㄐㄧㄡ, ㄙㄨㄛˇ ㄧˇ ㄍㄡˋ ㄨˋ ㄕˊ ㄨㄛˇ ㄉㄠˋ ㄍㄜˋ ㄐㄧㄚ ㄕㄤ ㄉㄧㄢˋ ㄍㄨㄤˋ ㄍㄨㄤˋ.',
            pinyin: 'wo3 dui4 pai2 zi mei2 you3 jiang3 jiu1, suo3 yi3 gou4 wu4 shi2 wo3 dao4 ge4 jia1 shang1 dian4 guang4 guang4.',
            translation: 'ブランドにこだわりは無いので、 色々な店に立ち寄ります。',
            memo: ''
          },
          {
            word: '品質',
            sentence: '你怎麼知道商品的品質好還是壞?',
            bopomofo: 'ㄋㄧˇ ㄗㄣˇ ㄇㄜ˙ ㄓ ㄉㄠˋ ㄕㄤ ㄆㄧㄣˇ ㄉㄜ˙ ㄆㄧㄣˇ ㄓˊ ㄏㄠˇ ㄏㄨㄢˊ ㄕˋ ㄏㄨㄞˋ?',
            pinyin: 'ni3 zen3 me zhi1 dao4 shang1 pin3 de pin3 zhi4 hao3/hao4 hai2/huan2 shi4 huai4?',
            translation: '商品の品質が良いか悪いかはどうすれば分かりますか?',
            memo: ''
          },
          {
            word: '選擇',
            sentence: '我不會說你的選擇錯, 但是白飯跟巧克力一起吃真好吃嗎?',
            bopomofo: 'ㄨㄛˇ ㄅㄨˊ ㄏㄨㄟˋ ㄕㄨㄛ ㄋㄧˇ ㄉㄜ˙ ㄒㄩㄢˇ ㄗㄜˊ ㄘㄨㄛˋ, ㄉㄢˋ ㄕˋ ㄅㄞˊ ㄈㄢˋ ㄍㄣ ㄑㄧㄠˇ ㄎㄜˋ ㄌㄧˋ ㄧˋ ㄑㄧˇ ㄔ ㄓㄣ ㄏㄠˇ ㄔ ㄇㄚ˙?',
            pinyin: 'wo3 bu2/bu4 hui4 shuo1 ni3 de xuan3 ze2 cuo4, dan4 shi4 bai2 fan4 gen1 qiao3 ke4 li4 yi1 qi3 chi1 zhen1 hao3 chi1 ma2?',
            translation: 'あなたの選択が間違いだとは言いませんが、 白米とチョコレートを一緒に食べて本当に美味しいのですか?',
            memo: ''
          },
          {
            word: '樣子',
            sentence: '他不擅長早上, 起床後的樣子好像冬眠後的一隻熊。',
            bopomofo: 'ㄊㄚ ㄅㄨˋ ㄕㄢˋ ㄔㄤˊ ㄗㄠˇ ㄕㄤˋ, ㄑㄧˇ ㄔㄨㄤˊ ㄏㄡˋ ㄉㄜ˙ ㄧㄤˋ ㄗ˙ ㄏㄠˇ ㄒㄧㄤˋ ㄉㄨㄥ ㄇㄧㄢˊ ㄏㄡˋ ㄉㄜ˙ ㄧˋ ㄓ ㄒㄩㄥˊ.',
            pinyin: 'ta1 bu2 shan4 chang2 zao3 shang4, qi3 chuang2 hou4 de yang4 zi hao3 xiang4 dong1 mian2 hou4 de yi1 zhi1 xiong2.',
            translation: '彼は朝が苦手で、 起きた直後は見たところ冬眠明けの熊のようです。',
            memo: ''
          },
          {
            word: '摸',
            sentence: '很累的時候只要摸貓, 你就會放鬆了。',
            bopomofo: 'ㄏㄣˇ ㄌㄟˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄓˇ ㄧㄠˋ ㄇㄛ ㄇㄠ, ㄋㄧˇ ㄐㄧㄡˋ ㄏㄨㄟˋ ㄈㄤˋ ㄙㄨㄥ ㄌㄜ˙.',
            pinyin: 'hen3 lei4 de shi2 hou4 zhi3 yao4 mo1 mao1, ni3 jiu4 hui4 fang4 song4 le.',
            translation: '疲れた時は、 猫を撫でるだけで癒されますよ。',
            memo: ''
          },
          {
            word: '店員',
            sentence: '跟客人的人數比起來店員的更多, 今天會赤字的。',
            bopomofo: 'ㄍㄣ ㄎㄜˋ ㄖㄣˊ ㄉㄜ˙ ㄖㄣˊ ㄕㄨˋ ㄅㄧˇ ㄑㄧˇ ㄌㄞˊ ㄉㄧㄢˋ ㄩㄢˊ ㄉㄜ˙ ㄍㄥˋ ㄉㄨㄛ, ㄐㄧㄣ ㄊㄧㄢ ㄏㄨㄟˋ ㄔˋ ㄗˋ ㄉㄜ˙.',
            pinyin: 'gen1 ke4 ren2 de ren2 shu4 bi3 qi3 lai2 dian4 yuan2 de geng4 duo1, jin1 tian1 hui4 chi4 zi4 de.',
            translation: 'お客さんの数よりも店員の方が多いので、 今日は赤字です。',
            memo: ''
          },
          {
            word: '短',
            sentence: '我在找沒有徽標的短袖襯衫, 你有沒有黑色的?',
            bopomofo: 'ㄨㄛˇ ㄗㄞˋ ㄓㄠˇ ㄇㄟˊ ㄧㄡˇ ㄏㄨㄟ ㄅㄧㄠ ㄉㄧˋ ㄉㄨㄢˇ ㄒㄧㄡˋ ㄔㄣˋ ㄕㄢ, ㄋㄧˇ ㄧㄡˇ ㄇㄟˊ ㄧㄡˇ ㄏㄟ ㄙㄜˋ ㄉㄜ˙?',
            pinyin: 'wo3 zai4 zhao3 mei2 you3 hui1 biao1 de duan3 xiu4 chen4 shan1, ni3 you3 mei2 you3 hei1 se4 de?',
            translation: 'ロゴのない半袖シャツを探しているのですが、 黒いものはありますか?',
            memo: ''
          },
          {
            word: '羊毛',
            sentence: '這件外套是羊毛製的。',
            bopomofo: 'ㄓㄜˋ ㄐㄧㄢˋ ㄨㄞˋ ㄊㄠˋ ㄕˋ ㄧㄤˊ ㄇㄠˊ ㄓˋ ㄉㄜ˙.',
            pinyin: 'zhe4 jian4 wai4 tao4 shi4 yang2 mao2 zhi4 de.',
            translation: 'このコートはウールでできています。',
            memo: ''
          },
          {
            word: '暖和',
            sentence: '天氣變暖和的時， 我們在公園裡野餐吧。',
            bopomofo: 'ㄊㄧㄢ ㄑㄧˋ ㄅㄧㄢˋ ㄋㄨㄢˇ ㄏㄨㄛ˙ ㄉㄜ˙ ㄕˊ, ㄨㄛˇ ㄇㄣ˙ ㄗㄞˋ ㄍㄨㄥ ㄩㄢˊ ㄌㄧˇ ㄧㄝˇ ㄘㄢ ㄅㄚ˙.',
            pinyin: 'tian1 xi4 bian4 nuan3 huo de shi2, wo3 men zai4 gong1 yuan2 li3 ye3 can1 ba.',
            translation: '暖かくなったら、 公園でピクニックをしましょう。',
            memo: ''
          },
          {
            word: '打折',
            sentence: '我要的衣服現在打五十折, 所以馬上就買了。',
            bopomofo: 'ㄨㄛˇ ㄧㄠˋ ㄉㄜ˙ ㄧ ㄈㄨˊ ㄒㄧㄢˋ ㄗㄞˋ ㄉㄚˇ ㄨˇ ㄕˊ ㄓㄜˊ, ㄙㄨㄛˇ ㄧˇ ㄇㄚˇ ㄕㄤˋ ㄐㄧㄡˋ ㄇㄞˇ ㄌㄜ˙.',
            pinyin: 'wo3 yao4 de yi1 fu2 xian4 zai4 da3 wu3 shi2 zhe2, suo3 yi3 ma3 shang4 jiu4 mai3 le.',
            translation: '欲しかった服が50％オフになったので、 すぐに購入しました。',
            memo: ''
          },
          {
            word: '原價',
            sentence: '那家店賣的東西都太便宜了, 我很好奇原價多少。',
            bopomofo: 'ㄋㄚˋ ㄐㄧㄚ ㄉㄧㄢˋ ㄇㄞˋ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙ ㄉㄡ ㄊㄞˋ ㄆㄧㄢˊ ㄧˊ ㄌㄜ˙, ㄨㄛˇ ㄏㄣˇ ㄏㄠˋ ㄑㄧˊ ㄩㄢˊ ㄐㄧㄚˋ ㄉㄨㄛ ㄕㄠˇ.',
            pinyin: 'na4 jia1 dian4 mai4 de dong1 xi dou1 tai4 pian2 yi2 le, wo3 hen3 hao4 qi2 yuan2 jia4 duo1 shao3.',
            translation: 'あの店で売っている物はどれも安すぎるので、 原価がいくらなのか気になります。',
            memo: ''
          },
          {
            word: '刷卡',
            sentence: '現在在大部分的商店你都可以用現金或刷卡。',
            bopomofo: 'ㄒㄧㄢˋ ㄗㄞˋ ㄗㄞˋ ㄉㄚˋ ㄅㄨˋ ㄈㄣˋ ㄉㄜ˙ ㄕㄤ ㄉㄧㄢˋ ㄋㄧˇ ㄉㄡ ㄎㄜˇ ㄧˇ ㄩㄥˋ ㄒㄧㄢˋ ㄐㄧㄣ ㄏㄨㄛˋ ㄕㄨㄚ ㄎㄚˇ.',
            pinyin: 'xian4 zai4 zai4 da4 bu4 fen4 de shang1 dian4 ni3 dou1 ke3 yi3 yong4 xian4 jin1 huo4 shua1 ka3.',
            translation: '今は、 大体の店でカード払いも現金払いも可能です。',
            memo: ''
          },
          {
            word: '現金',
            sentence: '雖然使用現金的機會變少了, 以防萬一帶有一點比較安全。',
            bopomofo: 'ㄙㄨㄟ ㄖㄢˊ ㄕˇ ㄩㄥˋ ㄒㄧㄢˋ ㄐㄧㄣ ㄉㄜ˙ ㄐㄧ ㄏㄨㄟˋ ㄅㄧㄢˋ ㄕㄠˇ ㄌㄜ˙, ㄧˇ ㄈㄤˊ ㄨㄢˋ ㄧˊ ㄉㄞˋ ㄧㄡˇ ㄧˋ ㄉㄧㄢˇ ㄅㄧˇ ㄐㄧㄠˋ ㄢ ㄑㄩㄢˊ.',
            pinyin: 'sui1 ran2 shi3 yong4 xian4 jin1 de ji1 hui4 bian4 shao3 le, yi3 fang2 wan4 yi1 dai4 you3 yi1 dian3 bi3 jiao4 an1 quan2.',
            translation: '現金を使う機会は少なくなりましたが、 万が一のため多少は持っていた方が安全です。',
            memo: ''
          },
          {
            word: '麻煩',
            sentence: '麻煩您配合做問卷調查?',
            bopomofo: 'ㄇㄚˊ ㄈㄢˊ ㄋㄧㄣˊ ㄆㄟˋ ㄏㄜˊ ㄗㄨㄛˋ ㄨㄣˋ ㄐㄩㄢˋ ㄉㄧㄠˋ ㄔㄚˊ?',
            pinyin: 'ma2 fan2 nin2 pei4 he2 zuo4 wen4 juan4 diao4 cha2?',
            translation: 'アンケートにご協力いただけないでしょうか?',
            memo: ''
          },
          {
            word: '簽名',
            sentence: '簽名前你應該仔細檢查合約內容。',
            bopomofo: 'ㄑㄧㄢ ㄇㄧㄥˊ ㄑㄧㄢˊ ㄋㄧˇ ㄧㄥ ㄍㄞ ㄗˇ ㄒㄧˋ ㄐㄧㄢˇ ㄔㄚˊ ㄏㄜˊ ㄩㄝ ㄋㄟˋ ㄖㄨㄥˊ.',
            pinyin: 'qian1 ming2 qian2 ni3 ying1 gai1 zi3 xi4 jian3 cha2 he2 yue1 nei4 rong2.',
            translation: 'サインする前に、 契約内容は注意深く確認してください。',
            memo: ''
          },
          {
            word: '破洞',
            sentence: '為什麼起司破很多洞?',
            bopomofo: 'ㄨㄟˋ ㄕˊ ㄇㄜ˙ ㄑㄧˇ ㄙ ㄆㄛˋ ㄏㄣˇ ㄉㄨㄛ ㄉㄨㄥˋ?',
            pinyin: 'wei4 shen2 me qi3 si1 po4 hen3 duo1 dong4?',
            translation: 'どうしてチーズにはたくさん穴が開いているのですか?',
            memo: ''
          },
          {
            word: '發票',
            sentence: '我認為把發票用作抽獎是一個非常好的主意。',
            bopomofo: 'ㄨㄛˇ ㄖㄣˋ ㄨㄟˊ ㄅㄚˇ ㄈㄚ ㄆㄧㄠˋ ㄩㄥˋ ㄗㄨㄛˋ ㄔㄡ ㄐㄧㄤˇ ㄕˋ ㄧˊ ㄍㄜˋ ㄈㄟ ㄔㄤˊ ㄏㄠˇ ㄉㄜ˙ ㄓㄨˇ ㄧˋ.',
            pinyin: 'wo3 ren4 wei2 ba3 fa1 piao4 yong4 zuo4 chou1 jiang3 shi4 yi1 ge4 fei1 chang2 hao3 de zhu3 yi4.',
            translation: 'レシートをくじとして使うのは、 すごく良いアイデアだと思います。',
            memo: ''
          },
          {
            word: '弄',
            sentence: '即使弄髒了, 孩子們很喜歡玩沙。',
            bopomofo: 'ㄐㄧˊ ㄕˇ ㄋㄨㄥˋ ㄗㄤ ㄌㄜ˙, ㄏㄞˊ ㄗ˙ ㄇㄣ˙ ㄏㄣˇ ㄒㄧˇ ㄏㄨㄢ ㄨㄢˊ ㄕㄚ.',
            pinyin: 'ji2 shi3 nong4 zang1 le, hai2 zi men hen3 xi3 huan1 wan2 sha1.',
            translation: '汚れても、 子供たちは砂遊びが大好きです。',
            memo: ''
          },
          {
            word: '退',
            sentence: '退到購買的物品相當需要勇氣。',
            bopomofo: 'ㄊㄨㄟˋ ㄉㄠˋ ㄍㄡˋ ㄇㄞˇ ㄉㄜ˙ ㄨˋ ㄆㄧㄣˇ ㄒㄧㄤ ㄉㄤ ㄒㄩ ㄧㄠˋ ㄩㄥˇ ㄑㄧˋ.',
            pinyin: 'tui4 dao4 gou4 mai3 de wu4 pin3 xiang1 dang1 xu1 yao4 yong3 qi4.',
            translation: '買ったものを返品するのは、 かなり勇気が要ります。',
            memo: ''
          },
          {
            word: '換',
            sentence: '讀完書以後, 我跟朋友換互相的。',
            bopomofo: 'ㄉㄨˊ ㄨㄢˊ ㄕㄨ ㄧˇ ㄏㄡˋ, ㄨㄛˇ ㄍㄣ ㄆㄥˊ ㄧㄡˇ ㄏㄨㄢˋ ㄏㄨˋ ㄒㄧㄤ ㄉㄜ˙.',
            pinyin: 'du2 wan2 shu1 yi3 hou4, wo3 gen1 peng2 you3 huan4 hu4 xiang1 de.',
            translation: '本を読んだ後、 私は友達とお互いの本を交換します。',
            memo: ''
          },
          {
            word: '店長',
            sentence: '當店長的壓力太大了, 才工作了三個月他就辭職了。',
            bopomofo: 'ㄉㄤ ㄉㄧㄢˋ ㄓㄤˇ ㄉㄜ˙ ㄧㄚ ㄌㄧˋ ㄊㄞˋ ㄉㄚˋ ㄌㄜ˙, ㄘㄞˊ ㄍㄨㄥ ㄗㄨㄛˋ ㄌㄜ˙ ㄙㄢ ㄍㄜ˙ ㄩㄝˋ ㄊㄚ ㄐㄧㄡˋ ㄘˊ ㄓˊ ㄌㄜ˙.',
            pinyin: 'dang1 dian4 zhang3 de ya1 li4 tai4 da4 le, cai2 gong1 zuo4 le san1 ge4 yue4 ta1 jiu4 ci2 zhi2 le.',
            translation: '店長を務めるプレッシャーが大きすぎて、 たった三ヵ月で彼は退職してしまいました。',
            memo: ''
          },
          {
            word: '週年慶',
            sentence: '你忘記週年慶的話老婆會生氣的, 你一定得記得。',
            bopomofo: 'ㄋㄧˇ ㄨㄤˋ ㄐㄧˋ ㄓㄡ ㄋㄧㄢˊ ㄑㄧㄥˋ ㄉㄜ˙ ㄏㄨㄚˋ ㄌㄠˇ ㄆㄛˊ ㄏㄨㄟˋ ㄕㄥ ㄑㄧˋ ㄉㄜ˙, ㄋㄧˇ ㄧˊ ㄉㄧㄥˋ ㄉㄟˇ ㄐㄧˋ ㄉㄜ˙.',
            pinyin: 'ni3 wang4 ji4 zhou1 nian2 qing4 de hua4 lao3 po2 hui4 sheng1 qi4 de, ni3 yi1 ding4 dei3 ji4 de.',
            translation: '記念日を忘れると奥さんが怒りますから、 必ず覚えていないといけません。',
            memo: ''
          },
          {
            word: '一般來說',
            sentence: '一般來說, 貓是天使般的可愛動物。',
            bopomofo: 'ㄧˋ ㄅㄢ ㄌㄞˊ ㄕㄨㄛ, ㄇㄠ ㄕˋ ㄊㄧㄢ ㄕˇ ㄅㄢ ㄉㄜ˙ ㄎㄜˇ ㄞˋ ㄉㄨㄥˋ ㄨˋ.',
            pinyin: 'yi1 ban1 lai2 shuo1, mao1 shi4 tian1 shi3 ban1 de ke3 ai4 dong4 wu4.',
            translation: '一般的に言って、 猫は天使のように可愛い動物です。',
            memo: ''
          },
          {
            word: '試穿',
            sentence: '為什麼試穿的時候好看的衣服在家穿的時候不好看?',
            bopomofo: 'ㄨㄟˋ ㄕˊ ㄇㄜ˙ ㄕˋ ㄔㄨㄢ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄏㄠˇ ㄎㄢˋ ㄉㄜ˙ ㄧ ㄈㄨˊ ㄗㄞˋ ㄐㄧㄚ ㄔㄨㄢ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄅㄨˋ ㄏㄠˇ ㄎㄢˋ?',
            pinyin: 'wei4 shen2 me shi4 chuan1 de shi2 hou4 hao3 kan4 de yi1 fu2 zai4 jia1 chuan1 de shi2 hou4 bu4 hao3 kan4?',
            translation: '試着した時には格好よく見えた服が、 家で着るとそうでもないのはなぜですか?',
            memo: ''
          },
          {
            word: '打完折',
            sentence: '六瓶啤酒打完折一百塊， 你什麼都得拿。',
            bopomofo: 'ㄌㄧㄡˋ ㄆㄧㄥˊ ㄆㄧˊ ㄐㄧㄡˇ ㄉㄚˇ ㄨㄢˊ ㄓㄜˊ ㄧ ㄅㄞˇ ㄎㄨㄞˋ， ㄋㄧˇ ㄕㄣˊ ㄇㄜ˙ ㄉㄡ ㄉㄟˇ ㄋㄚˊ.',
            pinyin: 'liu4 ping2 pi2 jiu3 da3 wan2 zhe2 yi1 bai3 kuai4, ni3 shen2 me dou1 dei3 na2.',
            translation: '6本入りのビールが割引後100元です、 何が何でも手に入れないといけません。',
            memo: ''
          },
          {
            word: '弄丢',
            sentence: '雖然我告訴了很多次， 他還常弄丢錢包， 我希望你適可而止。',
            bopomofo: 'ㄙㄨㄟ ㄖㄢˊ ㄨㄛˇ ㄍㄠˋ ㄙㄨˋ ㄌㄜ˙ ㄏㄣˇ ㄉㄨㄛ ㄘˋ, ㄊㄚ ㄏㄞˊ ㄔㄤˊ ㄋㄨㄥˋ ㄉㄧㄡ ㄑㄧㄢˊ ㄅㄠ, ㄨㄛˇ ㄒㄧ ㄨㄤˋ ㄋㄧˇ ㄕˋ ㄎㄜˇ ㄦˊ ㄓˇ.',
            pinyin: 'sui1 ran2 wo3 gao4 su4 le hen3 duo1 ci4, ta1 hai2 chang2 nong4 diu1 qian2 bao1, wo3 xi1 wang4 ni3 shi4 ke3 er2 zhi3.',
            translation: '私が何度言っても彼は頻繁に財布を失くすので、 もういい加減にして欲しいです。',
            memo: ''
          },
          {
            word: '購物',
            sentence: '媽媽到新開的商場去購物。',
            bopomofo: 'ㄇㄚ ㄇㄚ ㄉㄠˋ ㄒㄧㄣ ㄎㄞ ㄉㄜ˙ ㄕㄤ ㄔㄤˇ ㄑㄩˋ ㄍㄡˋ ㄨˋ.',
            pinyin: 'ma1 ma1 dao4 xin1 kai1 de shang1 chang2 qu4 gou4 wu4.',
            translation: 'お母さんは、 新しくオープンしたモールに買い物に行きました。',
            memo: ''
          },
          {
            word: '糾紛',
            sentence: '先吃喜歡的食物還是留下到最後一口是不完的糾紛。',
            bopomofo: 'ㄒㄧㄢ ㄔ ㄒㄧˇ ㄏㄨㄢ ㄉㄜ˙ ㄕˊ ㄨˋ ㄏㄞˊ ㄕˋ ㄌㄧㄡˊ ㄒㄧㄚˋ ㄉㄠˋ ㄗㄨㄟˋ ㄏㄡˋ ㄧ ㄎㄡˇ ㄕˋ ㄅㄨˋ ㄨㄢˊ ㄉㄜ˙ ㄐㄧㄡ ㄈㄣ.',
            pinyin: 'xian1 chi1 xi3 huan1 de shi2 wu4 hai2 shi4 liu2 xia4 dao4 zui4 hou4 yi1 kou3 shi4 bu4 wan2 de jiu1 fen1.',
            translation: '好きな食べ物を先に食べるか最後の一口に残すかは、 終わる事の無い論争です。',
            memo: ''
          },
          {
            word: '電信',
            sentence: '一前從國外電信費非常高， 現在因為有網路情況改良了。',
            bopomofo: 'ㄧ ㄑㄧㄢˊ ㄘㄨㄥˊ ㄍㄨㄛˊ ㄨㄞˋ ㄉㄧㄢˋ ㄒㄧㄣˋ ㄈㄟˋ ㄈㄟ ㄔㄤˊ ㄍㄠ, ㄒㄧㄢˋ ㄗㄞˋ ㄧㄣ ㄨㄟˋ ㄧㄡˇ ㄨㄤˇ ㄌㄨˋ ㄑㄧㄥˊ ㄎㄨㄤˋ ㄍㄞˇ ㄌㄧㄤˊ ㄌㄜ˙.',
            pinyin: 'yi1 qian2 cong2 guo2 wai4 dian4 xin4 fei4 fei1 chang2 gao1, xian4 zai4 yin1 wei4 you3 wang3 lu4 qing2 kuang4 gai3 liang2 le.',
            translation: '昔は外国からの通信費は非常に高額だったのですが、 インターネットによって状況は改善しました。',
            memo: ''
          },
          {
            word: '門市',
            sentence: '網上購物還不錯， 但是我更喜歡在門市聊著店員買東西。',
            bopomofo: 'ㄨㄤˇ ㄕㄤˋ ㄍㄡˋ ㄨˋ ㄏㄞˊ ㄅㄨˋ ㄘㄨㄛˋ, ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄍㄥˋ ㄒㄧˇ ㄏㄨㄢ ㄗㄞˋ ㄇㄣˊ ㄕˋ ㄌㄧㄠˊ ㄓㄜ˙ ㄉㄧㄢˋ ㄩㄢˊ ㄇㄞˇ ㄉㄨㄥ ㄒㄧ˙.',
            pinyin: 'wang3 shang4 gou4 wu4 hai2 bu2 cuo4, dan4 shi4 wo3 geng4 xi3 huan1 zai4 men2 shi4 liao2 zhe dian4 yuan2 mai3 dong1 xi.',
            translation: 'オンラインショッピングも悪く無いですが、 小売店で店員さんと話しながら買い物をする方が好みです。',
            memo: ''
          },
          {
            word: '居留證',
            sentence: '居留證還用作身份證明， 所以別弄丟了。',
            bopomofo: 'ㄐㄩ ㄌㄧㄡˊ ㄓㄥˋ ㄏㄞˊ ㄩㄥˋ ㄗㄨㄛˋ ㄕㄣ ㄈㄣˋ ㄓㄥˋ ㄇㄧㄥˊ, ㄙㄨㄛˇ ㄧˇ ㄅㄧㄝˊ ㄋㄨㄥˋ ㄉㄧㄡ ㄌㄜ˙.',
            pinyin: 'ju1 liu2 zheng4 hai2 yong4 zuo4 shen1 fen4 zheng4 ming2, suo3 yi3 bie2 nong4 diu1 le.',
            translation: '居留証は身分証明書としても使用されるので、 失くさないで下さい。',
            memo: ''
          },
          {
            word: '月租型',
            sentence: '說到付錢， 跟月租型比起來年租型優惠得多。',
            bopomofo: 'ㄕㄨㄛ ㄉㄠˋ ㄈㄨˋ ㄑㄧㄢˊ, ㄍㄣ ㄩㄝˋ ㄗㄨ ㄒㄧㄥˊ ㄅㄧˇ ㄑㄧˇ ㄌㄞˊ ㄋㄧㄢˊ ㄗㄨ ㄒㄧㄥˊ ㄧㄡ ㄏㄨㄟˋ ㄉㄜ˙ ㄉㄨㄛ.',
            pinyin: 'shuo1 dao4 fu4 qian2, gen1 yue4 zu1 xing2 bi3 qi3 lai2 nian2 zu1 xing2 you1 hui4 de duo1.',
            translation: '支払いに関しては、 月払いよりも年払いの方がはるかにお得です。',
            memo: ''
          },
          {
            word: '帳單',
            sentence: '因為某些原因這個月手機的帳單來了兩次， 我會給公司打電話確認。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄇㄡˇ ㄒㄧㄝ ㄩㄢˊ ㄧㄣ ㄓㄜˋ ㄍㄜˋ ㄩㄝˋ ㄕㄡˇ ㄐㄧ ㄉㄜ˙ ㄓㄤˋ ㄉㄢ ㄌㄞˊ ㄌㄜ˙ ㄌㄧㄤˇ ㄘˋ, ㄨㄛˇ ㄏㄨㄟˋ ㄍㄟˇ ㄍㄨㄥ ㄙ ㄉㄚˇ ㄉㄧㄢˋ ㄏㄨㄚˋ ㄑㄩㄝˋ ㄖㄣˋ.',
            pinyin: 'yin1 wei4 mou3 xie1 yuan2 yin1 zhe4 ge4 yue4 shou3 ji1 de zhang4 dan1 lai2 le liang3 ci4, wo3 hui4 gei3 gong1 si1 da3 dian4 hua4 que4 ren4.',
            translation: 'どういう訳か今月は携帯の請求書が2回届いたので、 会社に電話して確認します。',
            memo: ''
          },
          {
            word: '並',
            sentence: '我只不喜歡甜的食物， 並不是我不喜歡你做的。',
            bopomofo: 'ㄨㄛˇ ㄓˇ ㄅㄨˋ ㄒㄧˇ ㄏㄨㄢ ㄊㄧㄢˊ ㄉㄜ˙ ㄕˊ ㄨˋ, ㄅㄧㄥˋ ㄅㄨˊ ㄕˋ ㄨㄛˇ ㄅㄨˋ ㄒㄧˇ ㄏㄨㄢ ㄋㄧˇ ㄗㄨㄛˋ ㄉㄜ˙.',
            pinyin: 'wo3 zhi3 bu4 xi3 huan1 tian2 de shi2 wu4, bing4 bu2 shi4 wo3 bu4 xi3 huan1 ni3 zuo4 de.',
            translation: '私はただ甘いものが嫌いなだけで、 けしてあなたの作ったものが嫌いという事ではありません。',
            memo: ''
          },
          {
            word: '包括',
            sentence: '我希望下次的銷售包括冬天用的外套。',
            bopomofo: 'ㄨㄛˇ ㄒㄧ ㄨㄤˋ ㄒㄧㄚˋ ㄘˋ ㄉㄜ˙ ㄒㄧㄠ ㄕㄡˋ ㄅㄠ ㄎㄨㄛˋ ㄉㄨㄥ ㄊㄧㄢ ㄩㄥˋ ㄉㄜ˙ ㄨㄞˋ ㄊㄠˋ.',
            pinyin: 'wo3 xi1 wang4 xia4 ci4 de xiao1 shou4 bao1 kuo4 dong1 tian1 yong4 de wai4 tao4.',
            translation: '次のセールには冬用の上着が含まれるといいなと思っています。',
            memo: ''
          },
          {
            word: '解釋',
            sentence: '為什麼大量的牛奶灑掉在地上請你解釋一下。',
            bopomofo: 'ㄨㄟˋ ㄕˊ ㄇㄜ˙ ㄉㄚˋ ㄌㄧㄤˋ ㄉㄜ˙ ㄋㄧㄡˊ ㄋㄞˇ ㄙㄚˇ ㄉㄧㄠˋ ㄗㄞˋ ㄉㄧˋ ㄕㄤˋ ㄑㄧㄥˇ ㄋㄧˇ ㄐㄧㄝˇ ㄕˋ ㄧ ㄒㄧㄚˋ.',
            pinyin: 'wei4 shen2 me da4 liang4 de niu2 nai3 sa3 diao4 zai4 di4 shang4 qing3 ni3 jie3 shi4 yi1 xia4.',
            translation: '床に大量のミルクがこぼれている理由を説明して下さい。',
            memo: ''
          },
          {
            word: '顧客',
            sentence: '顧客的個人信息是機密的， 不應洩露。',
            bopomofo: 'ㄍㄨˋ ㄎㄜˋ ㄉㄜ˙ ㄍㄜˋ ㄖㄣˊ ㄒㄧㄣˋ ㄒㄧ ㄕˋ ㄐㄧ ㄇㄧˋ ㄉㄜ˙, ㄅㄨˋ ㄧㄥ ㄒㄧㄝˋ ㄌㄨˋ.',
            pinyin: 'gu4 ke4 de ge4 ren2 xin4 xi1 shi4 ji1 mi4 de, bu4 ying1 yi4 lu4.',
            translation: '顧客の個人情報は機密情報なので、 漏らしてはいけません。',
            memo: ''
          },
          {
            word: '尤其',
            sentence: '鄰居的孩子很活潑， 尤其假日他們整天在外面玩。',
            bopomofo: 'ㄌㄧㄣˊ ㄐㄩ ㄉㄜ˙ ㄏㄞˊ ㄗ˙ ㄏㄣˇ ㄏㄨㄛˊ ㄆㄛ, ㄧㄡˊ ㄑㄧˊ ㄐㄧㄚˋ ㄖˋ ㄊㄚ ㄇㄣ˙ ㄓㄥˇ ㄊㄧㄢ ㄗㄞˋ ㄨㄞˋ ㄇㄧㄢˋ ㄨㄢˊ.',
            pinyin: 'lin2 ju1 de hai2 zi hen3 huo2 po1, you2 qi2 jia4 ri4 ta1 men zheng3 tian1 zai4 wai4 mian4 wan2.',
            translation: '隣の子供たちはとても活発で、 特に休日は一日中外で遊んでいます。',
            memo: ''
          },
          {
            word: '騙',
            sentence: '那個聽起來太好事了， 我懷疑我在被騙。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄊㄧㄥ ㄑㄧˇ ㄌㄞˊ ㄊㄞˋ ㄏㄠˇ ㄕˋ ㄌㄜ˙, ㄨㄛˇ ㄏㄨㄞˊ ㄧˊ ㄨㄛˇ ㄗㄞˋ ㄅㄟˋ ㄆㄧㄢˋ.',
            pinyin: 'na4 ge4 ting1 qi3 lai2 tai4 hao3 shi4 le, wo3 huai2 yi2 wo3 zai4 bei4 pian4.',
            translation: 'それはあまりに上手い話なので、 私は騙されているのではないかと疑っています。',
            memo: ''
          },
          {
            word: '頓',
            sentence: '他敲門了兩三頓但是沒有人出來, 他放棄了回家。',
            bopomofo: 'ㄊㄚ ㄑㄧㄠ ㄇㄣˊ ㄌㄜ˙ ㄌㄧㄤˇ ㄙㄢ ㄉㄨㄣˋ, ㄉㄢˋ ㄕˋ ㄇㄟˊ ㄧㄡˇ ㄖㄣˊ ㄔㄨ ㄌㄞˊ, ㄊㄚ ㄈㄤˋ ㄑㄧˋ ㄌㄜ˙ ㄏㄨㄟˊ ㄐㄧㄚ.',
            pinyin: 'ta1 qiao1 men2 le liang3 san1 dun4 dan4 shi4 mei2 you3 ren2 chu1 lai2, ta1 fang4 qi4 le hui2 jia1.',
            translation: '彼は2、3回ドアをノックしたのですが誰も出てこなかったので、 諦めて家に帰りました。',
            memo: ''
          },
          {
            word: '辦法',
            sentence: '對專家問一下的話我們可能找到辦法。',
            bopomofo: 'ㄉㄨㄟˋ ㄓㄨㄢ ㄐㄧㄚ ㄨㄣˋ ㄧ ㄒㄧㄚˋ ㄉㄜ˙ ㄏㄨㄚˋ ㄨㄛˇ ㄇㄣ˙ ㄎㄜˇ ㄋㄥˊ ㄓㄠˇ ㄉㄠˋ ㄅㄢˋ ㄈㄚˇ.',
            pinyin: 'dui4 zhuan1 jia1 wen4 yi1 xia4 de hua4 wo3 men ke3 neng2 zhao3 dao4 ban4 fa3.',
            translation: '専門家に尋ねてみたら、 方法が見つかるかもしれません。',
            memo: ''
          },
          {
            word: '自動',
            sentence: '我並沒試偷你的蛋糕， 我的手自動拿到了。',
            bopomofo: 'ㄨㄛˇ ㄅㄧㄥˋ ㄇㄟˊ ㄕˋ ㄊㄡ ㄋㄧˇ ㄉㄜ˙ ㄉㄢˋ ㄍㄠ, ㄨㄛˇ ㄉㄜ˙ ㄕㄡˇ ㄗˋ ㄉㄨㄥˋ ㄋㄚˊ ㄉㄠˋ ㄌㄜ˙.',
            pinyin: 'wo3 bing4 mei2 shi4 tou1 ni3 de dan4 gao1, wo3 de shou3 zi4 dong4 na2 dao4 le.',
            translation: '私はけしてあなたのケーキを盗もうとしたのではなく、 手が勝手に取ったのです。',
            memo: ''
          },
          {
            word: '關機',
            sentence: '把電腦關機後別問我做工作。',
            bopomofo: 'ㄅㄚˇ ㄉㄧㄢˋ ㄋㄠˇ ㄍㄨㄢ ㄐㄧ ㄏㄡˋ ㄅㄧㄝˊ ㄨㄣˋ ㄨㄛˇ ㄗㄨㄛˋ ㄍㄨㄥ ㄗㄨㄛˋ.',
            pinyin: 'ba3 dian4 nao3 guan1 ji1 hou4 bie2 wen4 wo3 zuo4 gong1 zuo4.',
            translation: 'コンピューターの電源を切った後に仕事を頼むのはやめて下さい。',
            memo: ''
          },
          {
            word: '修理',
            sentence: '你的機車已經修理了好幾次， 我覺得你應該快要買新的。',
            bopomofo: 'ㄋㄧˇ ㄉㄜ˙ ㄐㄧ ㄔㄜ ㄧˇ ㄐㄧㄥ ㄒㄧㄡ ㄌㄧˇ ㄌㄜ˙ ㄏㄠˇ ㄐㄧˇ ㄘˋ, ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄋㄧˇ ㄧㄥ ㄍㄞ ㄎㄨㄞˋ ㄧㄠˋ ㄇㄞˇ ㄒㄧㄣ ㄉㄜ˙.',
            pinyin: 'ni3 de ji1 che1 yi3 jing1 xiu1 li3 le hao3 ji3 ci4, wo3 jue2 de ni3 ying1 gai1 kuai4 yao4 mai3 xin1 de.',
            translation: 'あなたのモーターバイクは既に何度か修理しているので、 そろそろ新しいものを買うべきだと思います。',
            memo: ''
          },
          {
            word: '缴費',
            sentence: '提款現金的時候需要缴一百塊費， 所以我平常刷卡。',
            bopomofo: 'ㄊㄧˊ ㄎㄨㄢˇ ㄒㄧㄢˋ ㄐㄧㄣ　ㄉㄜ˙　ㄕˊ ㄏㄡˋ ㄒㄩ ㄧㄠˋ ㄐㄧㄠˇ ㄧ ㄅㄞˇ ㄎㄨㄞˋ ㄈㄟˋ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄆㄧㄥˊ ㄔㄤˊ ㄕㄨㄚ ㄎㄚˇ.',
            pinyin: 'ti2 kuan3 xian4 jin1 de shi2 hou4 xu1 yao4 jiao3 yi1 bai3 kuai4 fei4, suo3 yi3 wo3 ping2 chang2 shua1 ka3.',
            translation: '現金を引き出す時は毎回100元支払わなくてはいけないので、 私は普段クレジットカードを使います。',
            memo: ''
          },
          {
            word: '預付卡',
            sentence: '在機場你可以買那個國家的預付卡。',
            bopomofo: 'ㄗㄞˋ ㄐㄧ ㄔㄤˇ ㄋㄧˇ ㄎㄜˇ ㄧˇ ㄇㄞˇ ㄋㄚˋ ㄍㄜˋ ㄍㄨㄛˊ ㄐㄧㄚ ㄉㄜ˙ ㄩˋ ㄈㄨˋ ㄎㄚˇ.',
            pinyin: 'zai4 ji1 chang3 ni3 ke3 yi3 mai3 na4 ge4 guo2 jia1 de yu4 fu4 ka3.',
            translation: '空港でその国のプリペイドSIMカードを購入する事ができます。',
            memo: ''
          },
          {
            word: '換成',
            sentence: '我正在考慮換成電信公司發表的新的費用套餐。',
            bopomofo: 'ㄨㄛˇ ㄓㄥˋ ㄗㄞˋ ㄎㄠˇ ㄌㄩˋ ㄏㄨㄢˋ ㄔㄥˊ ㄉㄧㄢˋ ㄒㄧㄣˋ ㄍㄨㄥ ㄙ ㄈㄚ ㄅㄧㄠˇ ㄉㄜ˙ ㄒㄧㄣ ㄉㄜ˙ ㄈㄟˋ ㄩㄥˋ ㄊㄠˋ ㄘㄢ.',
            pinyin: 'wo3 zheng4 zai4 kao3 lu4 huan4 cheng2 dian4 xin4 gong1 si1 fa1 biao3 de xin1 de fei4 yong4 tao4 can1.',
            translation: '現在、 通信会社が発表した新しい料金パッケージへの切り替えを検討しています。',
            memo: ''
          },
          {
            word: '吃到飽',
            sentence: '去吃到飽後， 我們總是太飽得走不了路。',
            bopomofo: 'ㄑㄩˋ ㄔ ㄉㄠˋ ㄅㄠˇ ㄏㄡˋ, ㄨㄛˇ ㄇㄣ˙ ㄗㄨㄥˇ ㄕˋ ㄊㄞˋ ㄅㄠˇ ㄉㄜ˙ ㄗㄡˇ ㄅㄨˋ ㄌㄧㄠˇ ㄌㄨˋ.',
            pinyin: 'qu4 chi1 dao4 bao3 hou4, wo3 men zong3 shi4 tai4 bao3 de zou3 bu4 liao3 lu4.',
            translation: '食べ放題に行った後はいつも、 お腹がいっぱいで歩けなくなります。',
            memo: ''
          },
          {
            word: '嚇一跳',
            sentence: '貓嚇一跳著眼睛變很圓了。',
            bopomofo: 'ㄇㄠ ㄒㄧㄚˋ ㄧ ㄊㄧㄠˋ ㄓㄨㄛˊ ㄧㄢˇ ㄐㄧㄥ ㄅㄧㄢˋ ㄏㄣˇ ㄩㄢˊ ㄌㄜ˙.',
            pinyin: 'mao1 xia4 yi1 tiao4 zhe yan3 jing1 bian4 hen3 yuan2 le.',
            translation: '猫は驚いて、 目がまん丸になりました。',
            memo: ''
          },
          {
            word: '客服中心',
            sentence: '給客服中心打電話很難通， 聊天比較快。',
            bopomofo: 'ㄍㄟˇ ㄎㄜˋ ㄈㄨˊ ㄓㄨㄥ ㄒㄧㄣ ㄉㄚˇ ㄉㄧㄢˋ ㄏㄨㄚˋ ㄏㄣˇ ㄋㄢˊ ㄊㄨㄥ, ㄌㄧㄠˊ ㄊㄧㄢ ㄅㄧˇ ㄐㄧㄠˋ ㄎㄨㄞˋ.',
            pinyin: 'gei3 ke4 fu2 zhong1 xin1 da3 dian4 hua4 hen3 nan2 tong1, liao2 tian1 bi3 jiao4 kuai4.',
            translation: 'カスタマーサービスセンターに電話をしても中々繋がらないので、 チャットの方が早いですよ。',
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
