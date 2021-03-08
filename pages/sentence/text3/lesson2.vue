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
            sentence: '網路購物雖然方便， 但買外套以前我想親自檢查。',
            bopomofo: 'ㄨㄤˇ ㄌㄨˋ ㄍㄡˋ ㄨˋ ㄙㄨㄟ ㄖㄢˊ ㄈㄤ ㄅㄧㄢˋ   ㄉㄢˋ ㄇㄞˇ ㄨㄞˋ ㄊㄠˋ ㄧˇ ㄑㄧㄢˊ ㄨㄛˇ ㄒㄧㄤˇ ㄑㄧㄣ ㄗˋ ㄐㄧㄢˇ ㄔㄚˊ.',
            pinyin: 'wang3 lu4 gou4 wu4 sui1 ran2 fang1 bian4, dan4 mai3 wai4 tao4 yi3 qian2 wo3 xiang3 qin1 zi4 jian3 cha2.',
            translation: 'オンラインショッピングはとても便利ですが、 上着は買う前に自分の目で見て確認したいです。',
            memo: '',
            changed: '☆'
          },
          {
            word: '一般',
            sentence: '無需做到餐廳那樣的菜色， 但希望至少會做一般的家常菜。',
            bopomofo: 'ㄨˊ ㄒㄩ ㄗㄨㄛˋ ㄉㄠˋ ㄘㄢ ㄊㄧㄥ ㄋㄚˋ ㄧㄤˋ ㄉㄜ˙ ㄘㄞˋ ㄙㄜˋ, ㄉㄢˋ ㄒㄧ ㄨㄤˋ ㄓˋ ㄕㄠˇ ㄏㄨㄟˋ ㄗㄨㄛˋ ㄧˋ ㄅㄢ ㄉㄜ˙ ㄐㄧㄚ ㄔㄤˊ ㄘㄞˋ.',
            pinyin: 'wu2 xu1 zuo4 dao4 can1 ting1 na4 yang4 de cai4 se4, dan4 xi1 wang4 zhi4 shao3 hui4 zuo4 yi4 ban1 de jia1 chang2 cai4.',
            translation: 'レストランレベルでなくても、 一般的な家庭料理は作れるようになるといいのですが。',
            memo: '※「不必餐廳級的菜, 我希望至少會做一般的家庭料理(ㄅㄨˋ ㄅㄧˋ ㄘㄢ ㄊㄧㄥ ㄐㄧˊ ㄉㄜ˙ ㄘㄞˋ, ㄨㄛˇ ㄒㄧ ㄨㄤˋ ㄓˋ ㄕㄠˇ ㄏㄨㄟˋ ㄗㄨㄛˋ ㄧˋ ㄅㄢ ㄉㄜ˙ ㄐㄧㄚ ㄊㄧㄥˊ ㄌㄧㄠˋ ㄌㄧˇ/bu2 bi4 can1 ting1 ji2 de cai4, wo3 xi1 wang4 zhi4 shao3 hui4 zuo4 yi1 ban1 de jia1 ting2 liao4 li3)」でも可。'
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
            sentence: '按照各商品的銷路， 主管決定各個的折扣。',
            bopomofo: 'ㄢˋ ㄓㄠˋ ㄍㄜˋ ㄕㄤ ㄆㄧㄣˇ ㄉㄜ˙ ㄒㄧㄠ ㄌㄨˋ, ㄓㄨˇ ㄍㄨㄢˇ ㄐㄩㄝˊ ㄉㄧㄥˋ ㄍㄜˋ ㄍㄜˋ ㄉㄜ˙ ㄓㄜˊ ㄎㄡˋ.',
            pinyin: 'an4 zhao4 ge4 shang1 pin3 de xiao1 lu4, zhu3 guan3 jue2 ding4 ge4 ge4 de zhe2 kou4.',
            translation: '各商品の売れ行きに応じて、 上司がそれぞれの割引率を決定します。',
            memo: '',
            changed: '☆'
          },
          {
            word: '省',
            sentence: '最近都沒下雨， 所以我們得省水。',
            bopomofo: 'ㄗㄨㄟˋ ㄐㄧㄣˋ ㄉㄡ ㄇㄟˊ ㄒㄧㄚˋ ㄩˇ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄇㄣ˙ ㄉㄟˇ ㄕㄥˇ ㄕㄨㄟˇ.',
            pinyin: 'zui4 jin4 dou1 mei2 xia4 yu3, suo3 yi3 wo3 men dei3 sheng3 shui3.',
            translation: '最近は雨が降らないので、 水を節約する必要があります。',
            memo: '※「省水(ㄕㄥˇ ㄕㄨㄟˇ/sheng3 shui3)」は「節約用水(ㄐㄧㄝˊ ㄩㄝ ㄩㄥˋ ㄕㄨㄟˇ/jie2 yue1 yong4 shui3)」でも可。',
            changed: '☆'
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
            sentence: '你怎麼分辨商品品質的好壞?',
            bopomofo: 'ㄋㄧˇ ㄗㄣˇ ㄇㄜ˙ ㄈㄣ ㄅㄧㄢˋ ㄕㄤ ㄆㄧㄣˇ ㄆㄧㄣˇ ㄓˊ ㄉㄜ˙ ㄏㄠˇ ㄏㄨㄞˋ?',
            pinyin: 'ni3 zen3 me fen1 bian4 shang1 pin3 pin3 zhi2 de hao3 huai4?',
            translation: '商品の品質が良いか悪いかはどうすれば分かりますか?',
            memo: '※「你怎麼知道商品的品質好還是壞(ㄋㄧˇ ㄗㄣˇ ㄇㄜ˙ ㄓ ㄉㄠˋ ㄕㄤ ㄆㄧㄣˇ ㄉㄜ˙ ㄆㄧㄣˇ ㄓˊ ㄏㄠˇ ㄏㄨㄢˊ ㄕˋ ㄏㄨㄞˋ?/ni3 zen3 me zhi1 dao4 shang1 pin3 de pin3 zhi2 hao3 hai2 shi4 huai4?)」でも可。',
            changed: '☆'
          },
          {
            word: '選擇',
            sentence: '我不會說你的選擇不對，但是白飯跟巧克力一起吃真的好吃嗎?',
            bopomofo: 'ㄨㄛˇ ㄅㄨˊ ㄏㄨㄟˋ ㄕㄨㄛ ㄋㄧˇ ㄉㄜ˙ ㄒㄩㄢˇ ㄗㄜˊ ㄅㄨˊ ㄉㄨㄟˋ, ㄉㄢˋ ㄕˋ ㄅㄞˊ ㄈㄢˋ ㄍㄣ ㄑㄧㄠˇ ㄎㄜˋ ㄌㄧˋ ㄧˋ ㄑㄧˇ ㄔ ㄓㄣ ㄉㄜ˙ ㄏㄠˇ ㄔ ㄇㄚ˙?',
            pinyin: 'wo3 bu2 hui4 shuo1 ni3 de xuan3 ze2 bu2 dui4, dan4 shi4 bai2 fan4 gen1 qiao3 ke4 li4 yi4 qi3 chi1 zhen1 de hao3 chi1 ma?',
            translation: 'あなたの選択が間違いだとは言いませんが、 白米とチョコレートを一緒に食べて本当に美味しいのですか?',
            memo: '※「我不會說你的選擇錯, 但是白飯跟巧克力一起吃真好吃嗎?(ㄨㄛˇ ㄅㄨˊ ㄏㄨㄟˋ ㄕㄨㄛ ㄋㄧˇ ㄉㄜ˙ ㄒㄩㄢˇ ㄗㄜˊ ㄘㄨㄛˋ, ㄉㄢˋ ㄕˋ ㄅㄞˊ ㄈㄢˋ ㄍㄣ ㄑㄧㄠˇ ㄎㄜˋ ㄌㄧˋ ㄧˋ ㄑㄧˇ ㄔ ㄓㄣ ㄏㄠˇ ㄔ ㄇㄚ˙?/wo3 bu2/bu4 hui4 shuo1 ni3 de xuan3 ze2 cuo4, dan4 shi4 bai2 fan4 gen1 qiao3 ke4 li4 yi1 qi3 chi1 zhen1 hao3 chi1 ma?)」でも可。',
            changed: '☆'
          },
          {
            word: '樣子',
            sentence: '他不擅長早起， 剛起床的樣子好像冬眠後的熊。',
            bopomofo: 'ㄊㄚ ㄅㄨˊ ㄕㄢˋ ㄔㄤˊ ㄗㄠˇ ㄑㄧˇ, ㄍㄤ ㄑㄧˇ ㄔㄨㄤˊ ㄉㄜ˙ ㄧㄤˋ ㄗ˙ ㄏㄠˇ ㄒㄧㄤˋ ㄉㄨㄥ ㄇㄧㄢˊ ㄏㄡˋ ㄉㄜ˙ ㄒㄩㄥˊ.',
            pinyin: 'ta1 bu2 shan4 chang2 zao3 qi3, gang1 qi3 chuang2 de yang4 zi hao3 xiang4 dong1 mian2 hou4 de xiong2.',
            translation: '彼は朝が苦手で、 起きた直後は見たところ冬眠明けの熊のようです。',
            memo: '',
            changed: '☆'
          },
          {
            word: '摸',
            sentence: '很累的時候只要摸摸貓， 就會覺得很療癒。',
            bopomofo: 'ㄏㄣˇ ㄌㄟˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄓˇ ㄧㄠˋ ㄇㄛ ㄇㄛ ㄇㄠ, ㄐㄧㄡˋ ㄏㄨㄟˋ ㄐㄩㄝˊ ㄉㄜ˙ ㄏㄣˇ ㄌㄧㄠˊ ㄩˋ.',
            pinyin: 'hen3 lei4 de shi2 hou4 zhi3 yao4 mo1 mo1 mao1, jiu4 hui4 jue2 de hen3 liao2 yu4.',
            translation: '疲れた時は、 猫を撫でるだけで癒されますよ。',
            memo: '※「很累的時候只要摸貓, 你就會放鬆了(ㄏㄣˇ ㄌㄟˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄓˇ ㄧㄠˋ ㄇㄛ ㄇㄠ, ㄋㄧˇ ㄐㄧㄡˋ ㄏㄨㄟˋ ㄈㄤˋ ㄙㄨㄥ ㄌㄜ˙/hen3 lei4 de shi2 hou4 zhi3 yao4 mo1 mao1, ni3 jiu4 hui4 fang4 song4 le)」でも可。',
            changed: '☆'
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
            sentence: '我想要的衣服現在打五折， 所以馬上就買了。',
            bopomofo: 'ㄨㄛˇ ㄒㄧㄤˇ ㄧㄠˋ ㄉㄜ˙ ㄧ ㄈㄨˊ ㄒㄧㄢˋ ㄗㄞˋ ㄉㄚˇ ㄨˇ ㄓㄜˊ, ㄙㄨㄛˇ ㄧˇ ㄇㄚˇ ㄕㄤˋ ㄐㄧㄡˋ ㄇㄞˇ ㄌㄜ˙.',
            pinyin: 'wo3 xiang3 yao4 de yi1 fu2 xian4 zai4 da3 wu3 zhe2, suo3 yi3 ma3 shang4 jiu4 mai3 le.',
            translation: '欲しかった服が50％オフになったので、 すぐに購入しました。',
            memo: '',
            changed: '☆'
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
            sentence: '現在大部分的店你都能付現或刷卡。',
            bopomofo: 'ㄒㄧㄢˋ ㄗㄞˋ ㄉㄚˋ ㄅㄨˋ ㄈㄣˋ ㄉㄜ˙ ㄉㄧㄢˋ ㄋㄧˇ ㄉㄡ ㄋㄥˊ ㄈㄨˋ ㄒㄧㄢˋ ㄏㄨㄛˋ ㄕㄨㄚ ㄎㄚˇ.',
            pinyin: 'xian4 zai4 da4 bu4 fen4 de dian4 ni3 dou1 neng2 fu4 xian4 huo4 shua1 ka3.',
            translation: '今は、 大体の店でカード払いも現金払いも可能です。',
            memo: '※「現在在大部分的商店你都可以用現金或刷卡(ㄒㄧㄢˋ ㄗㄞˋ ㄗㄞˋ ㄉㄚˋ ㄅㄨˋ ㄈㄣˋ ㄉㄜ˙ ㄕㄤ ㄉㄧㄢˋ ㄋㄧˇ ㄉㄡ ㄎㄜˇ ㄧˇ ㄩㄥˋ ㄒㄧㄢˋ ㄐㄧㄣ ㄏㄨㄛˋ ㄕㄨㄚ ㄎㄚˇ/xian4 zai4 zai4 da4 bu4 fen4 de shang1 dian4 ni3 dou1 ke3 yi3 yong4 xian4 jin1 huo4 shua1 ka3)」でも可。',
            changed: '☆'
          },
          {
            word: '現金',
            sentence: '現在用現金的機會雖然少了， 但以防萬一你還是帶一點比較安全。',
            bopomofo: 'ㄒㄧㄢˋ ㄗㄞˋ ㄩㄥˋ ㄒㄧㄢˋ ㄐㄧㄣ ㄉㄜ˙ ㄐㄧ ㄏㄨㄟˋ ㄙㄨㄟ ㄖㄢˊ ㄕㄠˇ ㄌㄜ˙, ㄉㄢˋ ㄧˇ ㄈㄤˊ ㄨㄢˋ ㄧ ㄋㄧˇ ㄏㄞˊ ㄕˋ ㄉㄞˋ ㄧˋ ㄉㄧㄢˇ ㄅㄧˇ ㄐㄧㄠˋ ㄢ ㄑㄩㄢˊ.',
            pinyin: 'xian4 zai4 yong4 xian4 jin1 de ji1 hui4 sui1 ran2 shao3 le, dan4 yi3 fang2 wan4 yi1 ni3 hai2 shi4 dai4 yi4 dian3 bi3 jiao4 an1 quan2.',
            translation: '現金を使う機会は少なくなりましたが、 万が一のため多少は持っていた方が安全です。',
            memo: '',
            changed: '☆'
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
            sentence: '我覺得把發票當作抽獎是個非常好的主意。',
            bopomofo: 'ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄅㄚˇ ㄈㄚ ㄆㄧㄠˋ ㄉㄤˋ ㄗㄨㄛˋ ㄔㄡ ㄐㄧㄤˇ ㄕˋ ㄍㄜˋ ㄈㄟ ㄔㄤˊ ㄏㄠˇ ㄉㄜ˙ ㄓㄨˇ ㄧˋ.',
            pinyin: 'wo3 jue2 de ba3 fa1 piao4 dang4 zuo4 chou1 jiang3 shi4 ge4 fei1 chang2 hao3 de zhu3 yi4.',
            translation: 'レシートをくじとして使うのは、 すごく良いアイデアだと思います。',
            memo: '',
            changed: '☆'
          },
          {
            word: '弄',
            sentence: '即使弄髒了，　孩子們還是很喜歡玩沙。',
            bopomofo: 'ㄐㄧˊ ㄕˇ ㄋㄨㄥˋ ㄗㄤ ㄌㄜ˙, ㄏㄞˊ ㄗ˙ ㄇㄣ˙ ㄏㄞˊ ㄕˋ ㄏㄣˇ ㄒㄧˇ ㄏㄨㄢ ㄨㄢˊ ㄕㄚ.',
            pinyin: 'ji2 shi3 nong4 zang1 le, hai2 zi men hai2 shi4 hen3 xi3 huan1 wan2 sha1.',
            translation: '汚れても、 子供たちは砂遊びが大好きです。',
            memo: '',
            changed: '☆'
          },
          {
            word: '★退',
            sentence: '退貨相當需要勇氣。',
            bopomofo: 'ㄊㄨㄟˋ ㄏㄨㄛˋ ㄒㄧㄤ ㄉㄤ ㄒㄩ ㄧㄠˋ ㄩㄥˇ ㄑㄧˋ.',
            pinyin: 'tui4 huo4 xiang1 dang1 xu1 yao4 yong3 qi4.',
            translation: '買ったものを返品するのは、 かなり勇気が要ります。',
            memo: '※「貨」は「買ったもの」？',
            changed: '☆'
          },
          {
            word: '換',
            sentence: '讀完書以後，我跟朋友互換書本。',
            bopomofo: 'ㄉㄨˊ ㄨㄢˊ ㄕㄨ ㄧˇ ㄏㄡˋ, ㄨㄛˇ ㄍㄣ ㄆㄥˊ ㄧㄡˇ ㄏㄨˋ ㄏㄨㄢˋ ㄕㄨ ㄅㄣˇ.',
            pinyin: 'du2 wan2 shu1 yi3 hou4, wo3 gen1 peng2 you3 hu4 huan4 shu1 ben3.',
            translation: '本を読んだ後、 私は友達とお互いの本を交換します。',
            memo: '',
            changed: '☆'
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
            sentence: '週年慶的時候百貨公司常賣特別的紀念品。',
            bopomofo: 'ㄓㄡ ㄋㄧㄢˊ ㄑㄧㄥˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄅㄞˇ ㄏㄨㄛˋ ㄍㄨㄥ ㄙ ㄔㄤˊ ㄇㄞˋ ㄊㄜˋ ㄅㄧㄝˊ ㄉㄜ˙ ㄐㄧˋ ㄋㄧㄢˋ ㄆㄧㄣˇ.',
            pinyin: 'zhou1 nian2 qing4 de shi2 hou4 bai3 huo4 gong1 si1 chang2 mai4 te4 bie2 de ji4 nian4 pin3.',
            translation: 'オープン周年記念セールの時に、 デパートではノベルティを売ることがよくあります。',
            memo: ''
          },
          {
            word: '一般來說',
            sentence: '一般來說， 貓像天使般的可愛動物。',
            bopomofo: 'ㄧˋ ㄅㄢ ㄌㄞˊ ㄕㄨㄛ, ㄇㄠ ㄒㄧㄤˋ ㄊㄧㄢ ㄕˇ ㄅㄢ ㄉㄜ˙ ㄎㄜˇ ㄞˋ ㄉㄨㄥˋ ㄨˋ.',
            pinyin: 'yi1 ban1 lai2 shuo1, mao1 xiang4 tian1 shi3 ban1 de ke3 ai4 dong4 wu4.',
            translation: '一般的に言って、 猫は天使のように可愛い動物です。',
            memo: '',
            changed: '☆'
          },
          {
            word: '試穿',
            sentence: '為什麼試穿的時候看起來很好看， 在家穿的時候卻不是那樣?',
            bopomofo: 'ㄨㄟˋ ㄕˊ ㄇㄜ˙ ㄕˋ ㄔㄨㄢ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄏㄣˇ ㄏㄠˇ ㄎㄢˋ, ㄗㄞˋ ㄐㄧㄚ ㄔㄨㄢ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄑㄩㄝˋ ㄅㄨˊ ㄕˋ ㄋㄚˋ ㄧㄤˋ?',
            pinyin: 'wei4 shen2 me shi4 chuan1 de shi2 hou4 kan4 qi3 lai2 hen3 hao3 kan4, zai4 jia1 chuan1 de shi2 hou4 que4 bu2 shi4 na4 yang4?',
            translation: '試着した時には格好よく見えた服が、 家で着るとそうでもないのはなぜですか?',
            memo: '',
            changed: '☆'
          },
          {
            word: '★打完折',
            sentence: ' 六瓶啤酒打完折後是一百塊錢， 怎麼樣都得拿。',
            bopomofo: ' ㄌㄧㄡˋ ㄆㄧㄥˊ ㄆㄧˊ ㄐㄧㄡˇ ㄉㄚˇ ㄨㄢˊ ㄓㄜˊ ㄏㄡˋ ㄕˋ ㄧ ㄅㄞˇ ㄎㄨㄞˋ ㄑㄧㄢˊ, ㄗㄣˇ ㄇㄜ˙ ㄧㄤˋ ㄉㄡ ㄉㄟˇ ㄋㄚˊ.',
            pinyin: 'liu4 ping2 pi2 jiu3 da3 wan2 zhe2 hou4 shi4 yi1 bai3 kuai4 qian2, zen3 me yang4 dou1 dei3 na2.',
            translation: '6本入りのビールが割引後100元です、 何が何でも手に入れないといけません。',
            memo: '「怎麼樣都得」=「何がなんでも」?',
            changed: '☆'
          },
          {
            word: '★弄丢',
            sentence: '我已經說了好幾次了， 還是常弄丟錢包， 我希望他適可而止。',
            bopomofo: 'ㄨㄛˇ ㄧˇ ㄐㄧㄥ ㄕㄨㄛ ㄌㄜ˙ ㄏㄠˇ ㄐㄧˇ ㄘˋ ㄌㄜ˙, ㄏㄞˊ ㄕˋ ㄔㄤˊ ㄋㄨㄥˋ ㄉㄧㄡ ㄑㄧㄢˊ ㄅㄠ, ㄨㄛˇ ㄒㄧ ㄨㄤˋ ㄊㄚ ㄕˋ ㄎㄜˇ ㄦˊ ㄓˇ.',
            pinyin: 'wo3 yi3 jing1 shuo1 le hao3 ji3 ci4 le, hai2 shi4 chang2 nong4 diu1 qian2 bao1, wo3 xi1 wang4 ta1 shi4 ke3 er2 zhi3.',
            translation: '私が何度言っても彼は頻繁に財布を失くすので、 もういい加減にして欲しいです。',
            memo: '※「適可」:「いい加減に」?',
            changed: '☆'
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
            word: '★糾紛',
            sentence: '喜歡的食物先吃還是留到最後吃是沒完沒了的爭論。',
            bopomofo: 'ㄒㄧˇ ㄏㄨㄢ ㄉㄜ˙ ㄕˊ ㄨˋ ㄒㄧㄢ ㄔ ㄏㄞˊ ㄕˋ ㄌㄧㄡˊ ㄉㄠˋ ㄗㄨㄟˋ ㄏㄡˋ ㄔ ㄕˋ ㄇㄟˊ ㄨㄢˊ ㄇㄟˊ ㄌㄧㄠˇ ㄉㄜ˙ ㄓㄥ ㄌㄨㄣˋ.',
            pinyin: 'xi3 huan1 de shi2 wu4 xian1 chi1 hai2 shi4 liu2 dao4 zui4 hou4 chi1 shi4 mei2 wan2 mei2 liao3 de zheng1 lun4.',
            translation: '好きな食べ物を先に食べるか最後の一口に残すかは、 終わる事の無い論争です。',
            memo: '※「糾紛」は使えない?',
            changed: '☆'
          },
          {
            word: '電信',
            sentence: '以前國外的電信費非常高， 現在有了網路情況改善多了。',
            bopomofo: 'ㄧˇ ㄑㄧㄢˊ ㄍㄨㄛˊ ㄨㄞˋ ㄉㄜ˙ ㄉㄧㄢˋ ㄒㄧㄣˋ ㄈㄟˋ ㄈㄟ ㄔㄤˊ ㄍㄠ, ㄒㄧㄢˋ ㄗㄞˋ ㄧㄡˇ ㄌㄜ˙ ㄨㄤˇ ㄌㄨˋ ㄑㄧㄥˊ ㄎㄨㄤˋ ㄍㄞˇ ㄕㄢˋ ㄉㄨㄛ ㄌㄜ˙.',
            pinyin: 'yi3 qian2 guo2 wai4 de dian4 xin4 fei4 fei1 chang2 gao1, xian4 zai4 you3 le wang3 lu4 qing2 kuang4 gai3 shan4 duo1 le.',
            translation: '昔は外国からの通信費は非常に高額だったのですが、 インターネットによって状況は改善しました。',
            memo: '',
            changed: '☆'
          },
          {
            word: '門市',
            sentence: '網路購物還不錯， 但是我更喜歡在門市跟店員聊天買東西。',
            bopomofo: 'ㄨㄤˇ ㄌㄨˋ ㄍㄡˋ ㄨˋ ㄏㄞˊ ㄅㄨˋ ㄘㄨㄛˋ, ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄍㄥˋ ㄒㄧˇ ㄏㄨㄢ ㄗㄞˋ ㄇㄣˊ ㄕˋ ㄍㄣ ㄉㄧㄢˋ ㄩㄢˊ ㄌㄧㄠˊ ㄊㄧㄢ ㄇㄞˇ ㄉㄨㄥ ㄒㄧ˙.',
            pinyin: 'wang3 lu4 gou4 wu4 hai2 bu2 cuo4, dan4 shi4 wo3 geng4 xi3 huan1 zai4 men2 shi4 gen1 dian4 yuan2 liao2 tian1 mai3 dong1 xi.',
            translation: 'オンラインショッピングも悪く無いですが、 小売店で店員さんと話しながら買い物をする方が好みです。',
            memo: '',
            changed: '☆'
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
            sentence: '我只是不喜歡甜的， 並不是嫌棄你做的。',
            bopomofo: 'ㄨㄛˇ ㄓˇ ㄕˋ ㄅㄨˋ ㄒㄧˇ ㄏㄨㄢ ㄊㄧㄢˊ ㄉㄜ˙, ㄅㄧㄥˋ ㄅㄨˊ ㄕˋ ㄒㄧㄢˊ ㄑㄧˋ ㄋㄧˇ ㄗㄨㄛˋ ㄉㄜ˙.',
            pinyin: 'wo3 zhi3 shi4 bu4 xi3 huan1 tian2 de, bing4 bu2 shi4 xian2 qi4 ni3 zuo4 de.',
            translation: '私はただ甘いものが嫌いなだけで、 けしてあなたの作ったものが嫌いという事ではありません。',
            memo: '',
            changed: '☆'
          },
          {
            word: '包括',
            sentence: '我希望下次的銷售包括冬天用的上衣。',
            bopomofo: 'ㄨㄛˇ ㄒㄧ ㄨㄤˋ ㄒㄧㄚˋ ㄘˋ ㄉㄜ˙ ㄒㄧㄠ ㄕㄡˋ ㄅㄠ ㄎㄨㄛˋ ㄉㄨㄥ ㄊㄧㄢ ㄩㄥˋ ㄉㄜ˙ ㄕㄤˋ ㄧ.',
            pinyin: 'wo3 xi1 wang4 xia4 ci4 de xiao1 shou4 bao1 kuo4 dong1 tian1 yong4 de shang4 yi1.',
            translation: '次のセールには冬用の上着が含まれるといいなと思っています。',
            memo: '',
            changed: '☆'
          },
          {
            word: '解釋',
            sentence: '請你解釋一下為什麼牛奶大量灑在地上。',
            bopomofo: 'ㄑㄧㄥˇ ㄋㄧˇ ㄐㄧㄝˇ ㄕˋ ㄧ ㄒㄧㄚˋ ㄨㄟˋ ㄕˊ ㄇㄜ˙ ㄋㄧㄡˊ ㄋㄞˇ ㄉㄚˋ ㄌㄧㄤˋ ㄙㄚˇ ㄗㄞˋ ㄉㄧˋ ㄕㄤˋ.',
            pinyin: 'qing3 ni3 jie3 shi4 yi1 xia4 wei4 shen2 me niu2 nai3 da4 liang4 sa3 zai4 di4 shang4.',
            translation: '床に大量のミルクがこぼれている理由を説明して下さい。',
            memo: '',
            changed: '☆'
          },
          {
            word: '顧客',
            sentence: '顧客的個資是機密， 不應洩漏。',
            bopomofo: 'ㄍㄨˋ ㄎㄜˋ ㄉㄜ˙ ㄍㄜˋ ㄗ ㄕˋ ㄐㄧ ㄇㄧˋ, ㄅㄨˋ ㄧㄥ ㄒㄧㄝˋ ㄌㄡˋ.',
            pinyin: 'gu4 ke4 de ge4 zi1 shi4 ji1 mi4, bu4 ying1 yi4 lou4.',
            translation: '顧客の個人情報は機密情報なので、 漏らしてはいけません。',
            memo: '※「顧客的個人信息是機密的， 不應洩露(ㄍㄨˋ ㄎㄜˋ ㄉㄜ˙ ㄍㄜˋ ㄖㄣˊ ㄒㄧㄣˋ ㄒㄧ ㄕˋ ㄐㄧ ㄇㄧˋ ㄉㄜ˙, ㄅㄨˋ ㄧㄥ ㄒㄧㄝˋ ㄌㄨˋ/gu4 ke4 de ge4 ren2 xin4 xi1 shi4 ji1 mi4 de, bu4 ying1 yi4 lu4)」でも可。',
            changed: '☆'
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
            sentence: '那個聽起來太好了， 我懷疑我被騙了。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄊㄧㄥ ㄑㄧˇ ㄌㄞˊ ㄊㄞˋ ㄏㄠˇ ㄌㄜ˙, ㄨㄛˇ ㄏㄨㄞˊ ㄧˊ ㄨㄛˇ ㄅㄟˋ ㄆㄧㄢˋ ㄌㄜ˙.',
            pinyin: 'na4 ge4 ting qi3 lai2 tai4 hao3 le, wo3 huai2 yi2 wo3 bei4 pian4 le.',
            translation: 'それはあまりに上手い話なので、 私は騙されているのではないかと疑っています。',
            memo: '',
            changed: '☆'
          },
          {
            word: '頓',
            sentence: '他敲門敲了兩三下但是沒有人出來， 所以放棄回家去了。',
            bopomofo: 'ㄊㄚ ㄑㄧㄠ ㄇㄣˊ ㄑㄧㄠ ㄌㄜ˙ ㄌㄧㄤˇ ㄙㄢ ㄒㄧㄚˋ ㄉㄢˋ ㄕˋ ㄇㄟˊ ㄧㄡˇ ㄖㄣˊ ㄔㄨ ㄌㄞˊ, ㄙㄨㄛˇ ㄧˇ ㄈㄤˋ ㄑㄧˋ ㄏㄨㄟˊ ㄐㄧㄚ ㄑㄩˋ ㄌㄜ˙.',
            pinyin: 'ta1 qiao1 men2 qiao1 le liang3 san1 xia4 dan4 shi4 mei2 you3 ren2 chu1 lai2, suo3 yi3 fang4 qi4 hui2 jia1 qu4 le.',
            translation: '彼は2、3回ドアをノックしたのですが誰も出てこなかったので、 諦めて家に帰りました。',
            memo: '',
            changed: '☆'
          },
          {
            word: '辦法',
            sentence: '詢問一下專家的話可能找到辦法。',
            bopomofo: 'ㄒㄩㄣˊ ㄨㄣˋ ㄧ ㄒㄧㄚˋ ㄓㄨㄢ ㄐㄧㄚ ㄉㄜ˙ ㄏㄨㄚˋ ㄎㄜˇ ㄋㄥˊ ㄓㄠˇ ㄉㄠˋ ㄅㄢˋ ㄈㄚˇ.',
            pinyin: 'xun2 wen4 yi1 xia4 zhuan1 jia1 de hua4 ke3 neng2 zhao3 dao4 ban4 fa3.',
            translation: '専門家に尋ねてみたら、 方法が見つかるかもしれません。',
            memo: '',
            changed: '☆'
          },
          {
            word: '★自動',
            sentence: '我並沒有要偷你的蛋糕， 只是隨手碰到了而已。',
            bopomofo: 'ㄨㄛˇ ㄅㄧㄥˋ ㄇㄟˊ ㄧㄡˇ ㄧㄠˋ ㄊㄡ ㄋㄧˇ ㄉㄜ˙ ㄉㄢˋ ㄍㄠ, ㄓˇ ㄕˋ ㄙㄨㄟˊ ㄕㄡˇ ㄆㄥˋ ㄉㄠˋ ㄌㄜ˙ ㄦˊ ㄧˇ.',
            pinyin: 'wo3 bing4 mei2 you3 yao4 tou1 ni3 de dan4 gao1, zhi3 shi4 sui2 shou3 peng4 dao4 le er2 yi3.',
            translation: '私はけしてあなたのケーキを盗もうとしたのではなく、 手が勝手に取ったのです。',
            memo: '※「而已(ㄦˊ ㄧˇ/er2 yi3)」 : 「～にすぎない」。 「隨手碰到」 : 「手が勝手に」? 「自動」を使うには?',
            changed: '☆'
          },
          {
            word: '關機',
            sentence: '電腦關機以後別再請我工作了。',
            bopomofo: 'ㄉㄧㄢˋ ㄋㄠˇ ㄍㄨㄢ ㄐㄧ ㄧˇ ㄏㄡˋ ㄅㄧㄝˊ ㄗㄞˋ ㄑㄧㄥˇ ㄨㄛˇ ㄍㄨㄥ ㄗㄨㄛˋ ㄌㄜ˙.',
            pinyin: 'dian4 nao3 guan1 ji1 yi3 hou4 bie2 zai4 qing3 wo3 gong1 zuo4 le.',
            translation: 'コンピューターの電源を切った後に仕事を頼むのはやめて下さい。',
            memo: '',
            changed: '☆'
          },
          {
            word: '修理',
            sentence: '你的機車已經修了好幾次了， 我覺得你快要買新的了。',
            bopomofo: 'ㄋㄧˇ ㄉㄜ˙ ㄐㄧ ㄔㄜ ㄧˇ ㄐㄧㄥ ㄒㄧㄡ ㄌㄜ˙ ㄏㄠˇ ㄐㄧˇ ㄘˋ ㄌㄜ˙, ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄋㄧˇ ㄎㄨㄞˋ ㄧㄠˋ ㄇㄞˇ ㄒㄧㄣ ㄉㄜ˙ ㄌㄜ˙.',
            pinyin: 'ni3 de ji1 che1 yi3 jing1 xiu1 le hao3 ji3 ci4 le, wo3 jue2 de ni3 kuai4 yao4 mai3 xin1 de le.',
            translation: 'あなたのモーターバイクは既に何度か修理しているので、 そろそろ新しいものを買うべきだと思います。',
            memo: '',
            changed: '☆'
          },
          {
            word: '繳費',
            sentence: '提款現金的時候需要繳一百塊費， 所以我平常刷卡。',
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
            word: '★換成',
            sentence: '我正在考慮換成電信公司發表的新資費方案。',
            bopomofo: 'ㄨㄛˇ ㄓㄥˋ ㄗㄞˋ ㄎㄠˇ ㄌㄩˋ ㄏㄨㄢˋ ㄔㄥˊ ㄉㄧㄢˋ ㄒㄧㄣˋ ㄍㄨㄥ ㄙ ㄈㄚ ㄅㄧㄠˇ ㄉㄜ˙ ㄒㄧㄣ ㄗ ㄈㄟˋ ㄈㄤ ㄢˋ.',
            pinyin: 'wo3 zheng4 zai4 kao3 lu4 huan4 cheng2 dian4 xin4 gong1 si1 fa1 biao3 de xin1 zi1 fei4 fang1 an4.',
            translation: '現在、 通信会社が発表した新しい料金パッケージへの切り替えを検討しています。',
            memo: '※「資費方案」 : 「料金パッケージ」?',
            changed: '☆'
          },
          {
            word: '吃到飽',
            sentence: '去吃到飽以後， 我們總是飽到得走不了路。',
            bopomofo: 'ㄑㄩˋ ㄔ ㄉㄠˋ ㄅㄠˇ ㄧˇ ㄏㄡˋ, ㄨㄛˇ ㄇㄣ˙ ㄗㄨㄥˇ ㄕˋ ㄅㄠˇ ㄉㄠˋ ㄉㄜ˙ ㄗㄡˇ ㄅㄨˋ ㄌㄧㄠˇ ㄌㄨˋ.',
            pinyin: 'qu4 chi1 dao4 bao3 yi3 hou4, wo3 men zong3 shi4 bao3 dao4 de zou3 bu4 liao3 lu4.',
            translation: '食べ放題に行った後はいつも、 お腹がいっぱいで歩けなくなります。',
            memo: '',
            changed: '☆'
          },
          {
            word: '★嚇一跳',
            sentence: '貓嚇到的時候， 眼睛變得很圓。',
            bopomofo: 'ㄇㄠ ㄒㄧㄚˋ ㄉㄠˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄧㄢˇ ㄐㄧㄥ ㄅㄧㄢˋ ㄉㄜ˙ ㄏㄣˇ ㄩㄢˊ.',
            pinyin: 'mao1 xia4 dao4 de shi2 hou4, yan3 jing1 bian4 de hen3 yuan2.',
            translation: '猫が驚いた時は、 目がまん丸になります。',
            memo: '嚇一跳？',
            changed: '☆'
          },
          {
            word: '客服中心',
            sentence: '給客服中心打電話很難通， 聊天比較快。',
            bopomofo: 'ㄍㄟˇ ㄎㄜˋ ㄈㄨˊ ㄓㄨㄥ ㄒㄧㄣ ㄉㄚˇ ㄉㄧㄢˋ ㄏㄨㄚˋ ㄏㄣˇ ㄋㄢˊ ㄊㄨㄥ, ㄌㄧㄠˊ ㄊㄧㄢ ㄅㄧˇ ㄐㄧㄠˋ ㄎㄨㄞˋ.',
            pinyin: 'gei3 ke4 fu2 zhong1 xin1 da3 dian4 hua4 hen3 nan2 tong1, liao2 tian1 bi3 jiao4 kuai4.',
            translation: 'カスタマーサービスセンターに電話をしても中々繋がらないので、 チャットの方が早いですよ。',
            memo: '※（意思不懂）'
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
