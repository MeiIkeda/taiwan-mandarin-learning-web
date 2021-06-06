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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 4冊目・第3章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 4冊目・第3章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      // 単語数：81
      data: {
        title: '當代中文課程課4・第3章',
        words: [
          {
            word: '李文麗',
            sentence: '李文麗今天不想做什麼, 所以很難開始學習。',
            bopomofo: 'ㄌㄧˇ ㄨㄣˊ ㄌㄧˋ ㄐㄧㄣ ㄊㄧㄢ ㄅㄨˋ ㄒㄧㄤˇ ㄗㄨㄛˋ ㄕˊ ㄇㄛ˙, ㄙㄨㄛˇ ㄧˇ ㄏㄣˇ ㄋㄢˊ ㄎㄞ ㄕˇ ㄒㄩㄝˊ ㄒㄧˊ.',
            pinyin: 'li3 wen2 li4 jin1 tian1 bu4 xiang3 zuo4 shen2 me, suo3 yi3 hen3 nan2 kai1 shi3 xue2 xi2.',
            translation: '李文麗は今日は何もする気が起こらず、 なかなか勉強を始められません。',
            memo: ''
          },
          {
            word: '外婆',
            sentence: '明年滿一百歲的外婆還很有元氣。',
            bopomofo: 'ㄇㄧㄥˊ ㄋㄧㄢˊ ㄇㄢˇ ㄧ ㄅㄞˇ ㄙㄨㄟˋ ㄉㄜ˙ ㄨㄞˋ ㄆㄛˊ ㄏㄞˊ ㄏㄣˇ ㄧㄡˇ ㄩㄢˊ ㄑㄧˋ.',
            pinyin: 'ming2 nian2 man3 yi1 bai3 sui4 de wai4 po2 hai2 hen3 you3 yuan2 qi4.',
            translation: '来年100歳になるおばあちゃんはとても元気です。',
            memo: ''
          },
          {
            word: '女裝',
            sentence: '那女裝牌子新發行的洋裝很可愛, 非買不可。',
            bopomofo: 'ㄋㄚˋ ㄋㄩˇ ㄓㄨㄤ ㄆㄞˊ ㄗ˙ ㄒㄧㄣ ㄈㄚ ㄒㄧㄥˊ ㄉㄜ˙ ㄧㄤˊ ㄓㄨㄤ ㄏㄣˇ ㄎㄜˇ ㄞˋ, ㄈㄟ ㄇㄞˇ ㄅㄨˋ ㄎㄜˇ.',
            pinyin: 'na4 nu3 zhuang1 pai2 zi xin1 fa1 xing2 de yang2 zhuang1 hen3 ke3 ai4, fei1 mai3 bu4 ke3.',
            translation: 'あのレディースブランドから新発売されたワンピースがすごく可愛いので、 買わない訳にはいきません。',
            memo: '※「ワンピース」 : 台湾では「洋裝(ㄧㄤˊ ㄓㄨㄤ/yang2 zhuang1)」、 中国では「連衣裙(ㄌㄧㄢˊ ㄧ ㄑㄩㄣˊ/lian2 yi1 qun2)」が多い。'
          },
          {
            word: '何必',
            sentence: '你到便利商店去何必特意化妝?',
            bopomofo: 'ㄋㄧˇ ㄉㄠˋ ㄅㄧㄢˋ ㄌㄧˋ ㄕㄤ ㄉㄧㄢˋ ㄑㄩˋ ㄏㄜˊ ㄅㄧˋ ㄊㄜˋ ㄧˋ ㄏㄨㄚˋ ㄓㄨㄤ?',
            pinyin: 'ni3 dao4 bian4 li4 shang1 dian4 qu4 he2 bi4 te4 yi4 hua4 zhuang1?',
            translation: 'コンビニに行くのにどうしてわざわざ化粧するのですか?',
            memo: ''
          },
          {
            word: '指',
            sentence: '指南針總是指向北方。',
            bopomofo: 'ㄓˇ ㄋㄢˊ ㄓㄣ ㄗㄨㄥˇ ㄕˋ ㄓˇ ㄒㄧㄤˋ ㄅㄟˇ ㄈㄤ.',
            pinyin: 'zhi3 nan2 zhen1 zong3 shi4 zhi3 xiang4 bei3 fang1.',
            translation: '方位磁石は常に北を指し示します。',
            memo: ''
          },
          {
            word: '划算',
            sentence: '平常包三個的凍肉包子今天包五個， 很划算。',
            bopomofo: 'ㄆㄧㄥˊ ㄔㄤˊ ㄅㄠ ㄙㄢ ㄍㄜ˙ ㄉㄜ˙ ㄉㄨㄥˋ ㄖㄡˋ ㄅㄠ ㄗ˙ ㄐㄧㄣ ㄊㄧㄢ ㄅㄠ ㄨˇ ㄍㄜˋ, ㄏㄣˇ ㄏㄨㄚˊ ㄙㄨㄢˋ.',
            pinyin: 'ping2 chang2 bao1 san1 ge4 de dong4 rou4 bao1 zi jin1 tian1 bao1 wu3 ge4, hen3 hua2 suan4.',
            translation: 'いつもは3個入りの冷凍肉まんが今日は同じ値段で5個入りなので、 すごくお得です。',
            memo: ''
          },
          {
            word: '身材',
            sentence: '他的個子中等， 成績也很普通。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄍㄜˋ ㄗ˙ ㄓㄨㄥ ㄉㄥˇ, ㄔㄥˊ ㄐㄧ ㄧㄝˇ ㄏㄣˇ ㄆㄨˇ ㄊㄨㄥ.',
            pinyin: 'ta1 de ge4 zi zhong1 deng3, cheng2 ji1 ye3 hen3 pu3 tong1.',
            translation: '彼は中肉中背で、 成績も普通です。',
            memo: '※「中肉中背」 : 「身材」を使って「中等身材」では駄目?'
          },
          {
            word: '模特兒',
            sentence: '她為了變成模特兒兩個星期只喝水, 簡直瘋了。',
            bopomofo: 'ㄊㄚ ㄨㄟˋ ㄌㄜ˙ ㄅㄧㄢˋ ㄔㄥˊ ㄇㄛˊ ㄊㄜˋ ㄦˊ ㄌㄧㄤˇ ㄍㄜˋ ㄒㄧㄥ ㄑㄧˊ ㄓˇ ㄏㄜ ㄕㄨㄟˇ, ㄐㄧㄢˇ ㄓˊ ㄈㄥ ㄌㄜ˙.',
            pinyin: 'ta1 wei4 le bian4 cheng2 mo2 te4 er2 liang3 ge4 xing1 qi2 zhi3 he1 shui3, jian3 zhi2 feng1 le.',
            translation: '彼女はモデルになるため2週間水しか飲んでおらず、 全くもってクレイジーです。',
            memo: ''
          },
          {
            word: '不見得',
            sentence: '玫瑰不見得都是紅色的。',
            bopomofo: 'ㄇㄟˊ ㄍㄨㄟ ㄅㄨˊ ㄐㄧㄢˋ ㄉㄜ˙ ㄉㄡ ㄕˋ ㄏㄨㄥˊ ㄙㄜˋ ㄉㄜ˙.',
            pinyin: 'mei2 gui1 bu2 jian4 de dou1 shi4 hong2 se4 de.',
            translation: 'バラは必ずしも赤いわけではありません。',
            memo: ''
          },
          {
            word: '仿冒品',
            sentence: '他們的生意很可疑的， 拿賣的物品來說, 大部分都是仿冒品。',
            bopomofo: 'ㄊㄚ ㄇㄣ˙ ㄉㄜ˙ ㄕㄥ ㄧˋ ㄏㄣˇ ㄎㄜˇ ㄧˊ ㄉㄜ˙, ㄋㄚˊ ㄇㄞˋ ㄉㄜ˙ ㄨˋ ㄆㄧㄣˇ ㄌㄞˊ ㄕㄨㄛ, ㄉㄚˋ ㄅㄨˋ ㄈㄣˋ ㄉㄡ ㄕˋ ㄈㄤˇ ㄇㄠˋ ㄆㄧㄣˇ.',
            pinyin: 'ta1 men de sheng1 yi4 hen3 ke3 yi2 de, na2 mai4 de wu4 pin3 lai2 shuo1, da4 bu4 fen4 dou1 shi4 fang3 mao4 pin3.',
            translation: '彼らのビジネスは大変胡散臭く、 売っている品物に関して言えば、 ほとんどが偽物です。',
            memo: ''
          },
          {
            word: '瑕疵',
            sentence: '該產品的瑕疵單純是人為錯誤造成的。',
            bopomofo: 'ㄍㄞ ㄔㄢˇ ㄆㄧㄣˇ ㄉㄜ˙ ㄒㄧㄚˊ ㄘ ㄉㄢ ㄔㄨㄣˊ ㄕˋ ㄖㄣˊ ㄨㄟˊ ㄘㄨㄛˋ ㄨˋ ㄗㄠˋ ㄔㄥˊ ㄉㄜ˙.',
            pinyin: 'gai1 chan3 pin3 de xia2 ci1 dan1 chun2 shi4 ren2 wei2 cuo4 wu4 zao4 cheng2 de.',
            translation: 'この製品の欠陥は、 単に人為的ミスが原因です。',
            memo: ''
          },
          {
            word: '圖片',
            sentence: '這張圖片太粗糙， 看不出裡面照了什麼。',
            bopomofo: 'ㄓㄜˋ ㄓㄤ ㄊㄨˊ ㄆㄧㄢˋ ㄊㄞˋ ㄘㄨ ㄘㄠ, ㄎㄢˋ ㄅㄨˋ ㄔㄨ ㄌㄧˇ ㄇㄧㄢˋ ㄓㄠˋ ㄌㄜ˙ ㄕㄣˊ ㄇㄜ˙.',
            pinyin: 'zhe4 zhang1 tu2 pian4 tai4 cu1 cao1, kan4 bu4 chu1 li3 mian4 zhao4 le shen2 me.',
            translation: 'その画像は粗すぎて、 何が写っているのかよくわかりません。',
            memo: ''
          },
          {
            word: '★落差',
            sentence: '小卷跟花枝那種烏賊的名字有什麼差別?',
            bopomofo: 'ㄒㄧㄠˇ ㄐㄩㄢˋ ㄍㄣ ㄏㄨㄚ ㄓ ㄋㄚˋ ㄓㄨㄥˇ ㄨ ㄗㄟˊ ㄉㄜ˙ ㄇㄧㄥˊ ㄗˋ ㄧㄡˇ ㄕㄣˊ ㄇㄜ˙ ㄔㄚ ㄅㄧㄝˊ?',
            pinyin: 'xiao3 juan4 gen1 hua1 zhi1 na4 zhong3 wu1 zei2 de ming2 zi4 you3 shen2 me cha1 bie2?',
            translation: '小巻や花枝のような、 イカの名称の違いは何なのでしょうか?',
            memo: '※「落差」は使えない?'
          },
          {
            word: '提供',
            sentence: '兒童教材由慈善團體免費地提供。',
            bopomofo: 'ㄦˊ ㄊㄨㄥˊ ㄐㄧㄠˋ ㄘㄞˊ ㄧㄡˊ ㄘˊ ㄕㄢˋ ㄊㄨㄢˊ ㄊㄧˇ ㄇㄧㄢˇ ㄈㄟˋ ㄉㄜ˙ ㄊㄧˊ ㄍㄨㄥ.',
            pinyin: 'er2 tong2 jiao4 cai2 you2 ci2 shan4 tuan2 ti3 mian3 fei4 de ti2 gong1.',
            translation: '子ども用の教材は、 慈善団体によって無償で提供されました。',
            memo: ''
          },
          {
            word: '資訊',
            sentence: '資訊收集能力以及邏輯思維在任何工作中都是必不可少的。',
            bopomofo: 'ㄗ ㄒㄩㄣˋ ㄕㄡ ㄐㄧˊ ㄋㄥˊ ㄌㄧˋ ㄧˇ ㄐㄧˊ ㄌㄨㄛˊ ㄐㄧ˙ ㄙ ㄨㄟˊ ㄗㄞˋ ㄖㄣˋ ㄏㄜˊ ㄍㄨㄥ ㄗㄨㄛˋ ㄓㄨㄥ ㄉㄡ ㄕˋ ㄅㄧˋ ㄅㄨˋ ㄎㄜˇ ㄕㄠˇ ㄉㄜ˙.',
            pinyin: 'zi1 xun4 shou1 ji2 neng2 li4 yi3 ji2 luo2 ji2 si1 wei2 zai4 ren4 he2 gong1 zuo4 zhong1 dou1 shi4 bi4 bu4 ke3 shao3 de.',
            translation: '情報収集能力と論理的思考はどんな仕事にも不可欠です。',
            memo: '※「不可欠なもの」 : 「不可少的(ㄅㄨˋ ㄎㄜˇ ㄕㄠˇ ㄉㄜ˙/bu4 ke3 shao3 de)」または「不可或缺(ㄅㄨˋ ㄎㄜˇ ㄏㄨㄛˋ ㄑㄩㄝ/bu4 ke3 huo4 que1)」でも可。'
          },
          {
            word: '★疑問',
            sentence: '每個客人都各自提問， 員工好像很忙的樣子。',
            bopomofo: 'ㄇㄟˇ ㄍㄜˋ ㄎㄜˋ ㄖㄣˊ ㄉㄡ ㄍㄜˋ ㄗˋ ㄊㄧˊ ㄨㄣˋ, ㄩㄢˊ ㄍㄨㄥ ㄏㄠˇ ㄒㄧㄤˋ ㄏㄣˇ ㄇㄤˊ ㄉㄜ˙ ㄧㄤˋ ㄗ˙.',
            pinyin: 'mei3 ge4 ke4 ren2 dou1 ge4 zi4 ti2 wen4, yuan2 gong1 hao3 xiang4 hen3 mang2 de yang4 zi.',
            translation: 'お客さんが口々に質問をするので、 スタッフは大変忙しそうです。',
            memo: '※「疑問」は使えない?'
          },
          {
            word: '嘛',
            sentence: '看電視的人少了的理由是網路有很多有意思的影片嘛!',
            bopomofo: 'ㄎㄢˋ ㄉㄧㄢˋ ㄕˋ ㄉㄜ˙ ㄖㄣˊ ㄕㄠˇ ㄌㄜ˙ ㄉㄜ˙ ㄌㄧˇ ㄧㄡˊ ㄕˋ ㄨㄤˇ ㄌㄨˋ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄧㄡˇ ㄧˋ ㄙ ㄉㄜ˙ ㄧㄥˇ ㄆㄧㄢ ㄇㄚ˙!',
            pinyin: 'kan4 dian4 shi4 de ren2 shao3 le de li3 you2 shi4 wang3 lu4 you3 hen3 duo1 you3 yi4 si1 de ying3 pian4 ma!',
            translation: 'テレビを見る人が減った理由は、 ネット上にたくさん面白い動画があるからですよね!',
            memo: ''
          },
          {
            word: '慣',
            sentence: '我已經聽慣了他的五音不全的歌聲。',
            bopomofo: 'ㄨㄛˇ ㄧˇ ㄐㄧㄥ ㄊㄧㄥ ㄍㄨㄢˋ ㄌㄜ˙ ㄊㄚ ㄉㄜ˙ ㄨˇ ㄧㄣ ㄅㄨˋ ㄑㄩㄢˊ ㄉㄜ˙ ㄍㄜ ㄕㄥ.',
            pinyin: 'wo3 yi3 jing1 ting1 guan4 le ta1 de wu3 yin1 bu4 quan2 de ge1 sheng1.',
            translation: '彼の音痴な歌声はもう聞きなれました。',
            memo: ''
          },
          {
            word: '瀏覽',
            sentence: '你可以確認你瀏覽過後的網站的紀錄。',
            bopomofo: 'ㄋㄧˇ ㄎㄜˇ ㄧˇ ㄑㄩㄝˋ ㄖㄣˋ ㄋㄧˇ ㄌㄧㄡˊ ㄌㄢˇ ㄍㄨㄛˋ ㄏㄡˋ ㄉㄜ˙ ㄨㄤˇ ㄓㄢˋ ㄉㄜ˙ ㄐㄧˋ ㄌㄨˋ.',
            pinyin: 'ni3 ke3 yi3 que4 ren4 ni3 liu2 lan3 guo4 hou4 de wang3 zhan4 de ji4 lu4.',
            translation: '閲覧したサイトの履歴は後から確認する事ができます。',
            memo: ''
          },
          {
            word: '後悔',
            sentence: '難道你後悔喝醉後失去記憶嗎?',
            bopomofo: 'ㄋㄢˊ ㄉㄠˋ ㄋㄧˇ ㄏㄡˋ ㄏㄨㄟˇ ㄏㄜ ㄗㄨㄟˋ ㄏㄡˋ ㄕ ㄑㄩˋ ㄐㄧˋ ㄧˋ ㄇㄚ˙?',
            pinyin: 'nan2 dao4 ni3 hou4 hui3 he1 zui4 hou4 shi1 qu4 ji4 yi4 ma?',
            translation: 'まさか、 酔って記憶を失くした事を後悔しているんですか?。',
            memo: ''
          },
          {
            word: '深夜',
            sentence: '就算到了深夜, 那家拉麵店也有很多人來吃。',
            bopomofo: 'ㄐㄧㄡˋ ㄙㄨㄢˋ ㄉㄠˋ ㄌㄜ˙ ㄕㄣ ㄧㄝˋ, ㄋㄚˋ ㄐㄧㄚ ㄌㄚ ㄇㄧㄢˋ ㄉㄧㄢˋ ㄧㄝˇ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄖㄣˊ ㄌㄞˊ ㄔ.',
            pinyin: 'jiu4 suan4 dao4 le shen1 ye4, na4 jia1 la1 mian4 dian4 ye3 you3 hen3 duo1 ren2 lai2 chi1.',
            translation: 'あのラーメン屋は、 深夜であってもたくさんの人が食べに来ます。',
            memo: ''
          },
          {
            word: '任何',
            sentence: '世界變得更方便了， 在家做得到任何事情了。',
            bopomofo: 'ㄕˋ ㄐㄧㄝˋ ㄅㄧㄢˋ ㄉㄜ˙ ㄍㄥˋ ㄈㄤ ㄅㄧㄢˋ ㄌㄜ˙, ㄗㄞˋ ㄐㄧㄚ ㄗㄨㄛˋ ㄉㄜˊ ㄉㄠˋ ㄖㄣˋ ㄏㄜˊ ㄕˋ ㄑㄧㄥˊ ㄌㄜ˙.',
            pinyin: 'shi4 jie4 bian4 de geng4 fang1 bian4 le, zai4 jia1 zuo4 de dao4 ren4 he2 shi4 qing2 le.',
            translation: '世の中はとても便利になり、 どんな事でも家で出来るようになりました。',
            memo: ''
          },
          {
            word: '駭客',
            sentence: '個人信息被盜可能是駭客的行徑。',
            bopomofo: 'ㄍㄜˋ ㄖㄣˊ ㄒㄧㄣˋ ㄒㄧ ㄅㄟˋ ㄉㄠˋ ㄎㄜˇ ㄋㄥˊ ㄕˋ ㄏㄞˋ ㄎㄜˋ ㄉㄜ˙ ㄒㄧㄥˊ ㄐㄧㄥˋ.',
            pinyin: 'ge4 ren2 xin4 xi1 bei4 dao4 ke3 neng2 shi4 hai4 ke4 de xing2 jing4.',
            translation: '個人情報が盗まれたのは、 ハッカーの仕業かもしれません。',
            memo: ''
          },
          {
            word: '盜用',
            sentence: '你的帳戶被盜用了的事就算了, 馬上改變密碼就好了。',
            bopomofo: 'ㄋㄧˇ ㄉㄜ˙ ㄓㄤˋ ㄏㄨˋ ㄅㄟˋ ㄉㄠˋ ㄩㄥˋ ㄌㄜ˙ ㄉㄜ˙ ㄕˋ ㄐㄧㄡˋ ㄙㄨㄢˋ ㄌㄜ˙, ㄇㄚˇ ㄕㄤˋ ㄍㄞˇ ㄅㄧㄢˋ ㄇㄧˋ ㄇㄚˇ ㄐㄧㄡˋ ㄏㄠˇ ㄌㄜ˙.',
            pinyin: 'ni3 de zhang4 hu4 bei4 dao4 yong4 le de shi4 jiu4 suan4 le, ma3 shang4 gai3 bian4 mi4 ma3 jiu4 hao3 le.',
            translation: 'アカウントが盗まれた事はとりあえず忘れて、 すぐにパスワードを変更してください。',
            memo: ''
          },
          {
            word: '★認證',
            sentence: '我無意中忘記了用來認證了的密碼。',
            bopomofo: 'ㄨㄛˇ ㄨˊ ㄧˋ ㄓㄨㄥ ㄨㄤˋ ㄐㄧˋ ㄌㄜ˙ ㄩㄥˋ ㄌㄞˊ ㄖㄣˋ ㄓㄥˋ ㄌㄜ˙ ㄉㄜ˙ ㄇㄧˋ ㄇㄚˇ.',
            pinyin: 'wo3 wu2 yi4 zhong1 wang4 ji4 le yong4 lai2 ren4 zheng4 le de mi4 ma3.',
            translation: '認証に使用していたパスワードをうっかり忘れてしまいました。',
            memo: '※「うっかり」 : 「無意中(ㄨˊ ㄧˋ ㄓㄨㄥ/wu2 yi4 zhong1)」でも「不小心(ㄅㄨˋ ㄒㄧㄠˇ ㄒㄧㄣ/bu4 xiao3 xin1)」でも可?'
          },
          {
            word: '銀髮族',
            sentence: '這個應用程序的用法很簡單, 甚至銀髮族使用起來也沒問題。',
            bopomofo: 'ㄓㄜˋ ㄍㄜˋ ㄧㄥˋ ㄩㄥˋ ㄔㄥˊ ㄒㄩˋ ㄉㄜ˙ ㄩㄥˋ ㄈㄚˇ ㄏㄣˇ ㄐㄧㄢˇ ㄉㄢ, ㄕㄣˋ ㄓˋ ㄧㄣˊ ㄈㄚˇ ㄗㄨˊ ㄕˇ ㄩㄥˋ ㄑㄧˇ ㄌㄞˊ ㄧㄝˇ ㄇㄟˊ ㄨㄣˋ ㄊㄧˊ.',
            pinyin: 'zhe4 ge4 ying4 yong4 cheng2 xu4 de yong4 fa3 hen3 jian3 dan1, shen4 zhi4 yin2 fa3 zu2 shi3 yong4 qi3 lai2 ye3 mei2 wen4 ti2.',
            translation: 'このアプリの使い方はとても簡単なので、 シニアでも問題なく使えます。',
            memo: ''
          },
          {
            word: '從前',
            sentence: '我好久沒看到她了， 她還是跟從前一樣沒改變。',
            bopomofo: 'ㄨㄛˇ ㄏㄠˇ ㄐㄧㄡˇ ㄇㄟˊ ㄎㄢˋ ㄉㄠˋ ㄊㄚ ㄌㄜ˙, ㄊㄚ ㄏㄞˊ ㄕˋ ㄍㄣ ㄘㄨㄥˊ ㄑㄧㄢˊ ㄧ ㄧㄤˋ ㄇㄟˊ ㄍㄞˇ ㄅㄧㄢˋ.',
            pinyin: 'wo3 hao3 jiu3 mei2 kan4 dao4 ta1 le, ta1 hai2 shi4 gen1 cong2 qian2 yi1 yang4 mei2 gai3 bian4.',
            translation: '久しぶりに彼女と会ったのですが、 全く変わらず昔のままでした。',
            memo: ''
          },
          {
            word: '通常',
            sentence: '這裡的商店通常營業到晚上十點。',
            bopomofo: 'ㄓㄜˋ ㄌㄧˇ ㄉㄜ˙ ㄕㄤ ㄉㄧㄢˋ ㄊㄨㄥ ㄔㄤˊ ㄧㄥˊ ㄧㄝˋ ㄉㄠˋ ㄨㄢˇ ㄕㄤˋ ㄕˊ ㄉㄧㄢˇ.',
            pinyin: 'zhe4 li3 de shang1 dian4 tong1 chang2 ying2 ye4 dao4 wan3 shang4 shi2 dian3.',
            translation: '通常、 この辺りのお店は夜10時まで開いています。',
            memo: ''
          },
          {
            word: '取貨',
            sentence: '我可以在任何便利店取我線上買的貨嗎?',
            bopomofo: 'ㄨㄛˇ ㄎㄜˇ ㄧˇ ㄗㄞˋ ㄖㄣˋ ㄏㄜˊ ㄅㄧㄢˋ ㄌㄧˋ ㄉㄧㄢˋ ㄑㄩˇ ㄨㄛˇ ㄒㄧㄢˋ ㄕㄤˋ ㄇㄞˇ ㄉㄜ˙ ㄏㄨㄛˋ ㄇㄚ˙?',
            pinyin: 'wo3 ke3 yi3 zai4 ren4 he2 bian4 li4 dian4 qu3 wo3 xian4 shang4 mai3 de huo4 ma?',
            translation: '通販した商品は、 どこのコンビニでも受け取れますか?',
            memo: ''
          },
          {
            word: '付款',
            sentence: '您想一次性付款還是分期付款?',
            bopomofo: 'ㄋㄧㄣˊ ㄒㄧㄤˇ ㄧˊ ㄘˋ ㄒㄧㄥˋ ㄈㄨˋ ㄎㄨㄢˇ ㄏㄞˊ ㄕˋ ㄈㄣ ㄑㄧ ㄈㄨˋ ㄎㄨㄢˇ?',
            pinyin: 'nin2 xiang3 yi1 ci4 xing4 fu4 kuan3 hai2 shi4 fen1 qi1 fu4 kuan3?',
            translation: '一括か、 それとも分割払いにしますか?',
            memo: ''
          },
          {
            word: '雲端科技',
            sentence: '雲端科技方面發展得很快， 最近幾年在世界上發生了很大變化。',
            bopomofo: 'ㄩㄣˊ ㄉㄨㄢ ㄎㄜ ㄐㄧˋ ㄈㄤ ㄇㄧㄢˋ ㄈㄚ ㄓㄢˇ ㄉㄜ˙ ㄏㄣˇ ㄎㄨㄞˋ, ㄗㄨㄟˋ ㄐㄧㄣˋ ㄐㄧˇ ㄋㄧㄢˊ ㄗㄞˋ ㄕˋ ㄐㄧㄝˋ ㄕㄤ˙ ㄈㄚ ㄕㄥ ㄌㄜ˙ ㄏㄣˇ ㄉㄚˋ ㄅㄧㄢˋ ㄏㄨㄚˋ.',
            pinyin: 'yun2 duan1 ke1 ji4 fang1 mian4 fa1 zhan3 de hen3 kuai4, zui4 jin4 ji3 nian2 zai4 shi4 jie4 shang4 fa1 sheng1 le hen3 da4 bian4 hua4.',
            translation: 'クラウド技術の急速な発展により、 ここ数年で世の中は随分変わりました。',
            memo: ''
          },
          {
            word: '宅經濟',
            sentence: '最近, 跟在家工作有關的宅經濟越來越多了。',
            bopomofo: 'ㄗㄨㄟˋ ㄐㄧㄣˋ, ㄍㄣ ㄗㄞˋ ㄐㄧㄚ ㄍㄨㄥ ㄗㄨㄛˋ ㄧㄡˇ ㄍㄨㄢ ㄉㄜ˙ ㄓㄞˊ ㄐㄧㄥ ㄐㄧˋ ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ ㄉㄨㄛ ㄌㄜ˙.',
            pinyin: 'zui4 jin4, gen1 zai4 jia1 gong1 zuo4 you3 guan1 de zhai2 jing1 ji4 yue4 lai2 yue4 duo1 le.',
            translation: '最近、 在宅勤務に関連する巣ごもり消費がますます増えています。',
            memo: ''
          },
          {
            word: '用不慣',
            sentence: '我還用不慣新的電腦的鍵盤。',
            bopomofo: 'ㄨㄛˇ ㄏㄞˊ ㄩㄥˋ ㄅㄨˊ ㄍㄨㄢˋ ㄒㄧㄣ ㄉㄜ˙ ㄉㄧㄢˋ ㄋㄠˇ ㄉㄜ˙ ㄐㄧㄢˋ ㄆㄢˊ.',
            pinyin: 'wo3 hai2 yong4 bu2 guan4 xin1 de dian4 nao3 de jian4 pan2.',
            translation: '新しいパソコンのキーボードにはまだ慣れません。',
            memo: ''
          },
          {
            word: '退换',
            sentence: '你到底退换尺寸不合適的鞋子了沒?',
            bopomofo: 'ㄋㄧˇ ㄉㄠˋ ㄉㄧˇ ㄊㄨㄟˋ ㄏㄨㄢˋ ㄔˇ ㄘㄨㄣˋ ㄅㄨˋ ㄏㄜˊ ㄕˋ ㄉㄜ˙ ㄒㄧㄝˊ ㄗˇ ㄌㄜ˙ ㄇㄟˊ?',
            pinyin: 'ni3 dao4 di3 tui4 huan4 chi3 cun4 bu4 he2 shi4 de xie2 zi le mei2?',
            translation: '結局、 サイズが合わなかった靴は返品したのですか?',
            memo: ''
          },
          {
            word: '信用卡',
            sentence: '這家店不接受信用卡, 所以我不得不在某處提取現金。',
            bopomofo: 'ㄓㄜˋ ㄐㄧㄚ ㄉㄧㄢˋ ㄅㄨˋ ㄐㄧㄝ ㄕㄡˋ ㄒㄧㄣˋ ㄩㄥˋ ㄎㄚˇ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄅㄨˋ ㄉㄜˊ ㄅㄨˋ ㄗㄞˋ ㄇㄡˇ ㄔㄨˋ ㄊㄧˊ ㄑㄩˇ ㄒㄧㄢˋ ㄐㄧㄣ.',
            pinyin: 'zhe4 jia1 dian4 bu4 jie1 shou4 xin4 yong4 ka3, suo3 yi3 wo3 bu4 de2 bu4 zai4 mou3 chu4 ti2 qu3 xian4 jin1.',
            translation: 'この店ではクレジットカードが使えないので、 どこかで現金を下ろしてくるしかありません。',
            memo: ''
          },
          {
            word: '縮短',
            sentence: '如果處理得這麼粗暴， 會縮短機器的使用壽命。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄔㄨˇ ㄌㄧˇ ㄉㄜ˙ ㄓㄜˋ ㄇㄜ˙ ㄘㄨ ㄅㄠˋ, ㄏㄨㄟˋ ㄙㄨㄛ ㄉㄨㄢˇ ㄐㄧ ㄑㄧˋ ㄉㄜ˙ ㄕˇ ㄩㄥˋ ㄕㄡˋ ㄇㄧㄥˋ.',
            pinyin: 'ru2 guo3 chu3 li3 de zhe4 me cu1 bao4, hui4 suo1 duan3 ji1 qi4 de shi3 yong4 shou4 ming4.',
            translation: 'そんなに雑に扱うと、 機械の寿命を縮めますよ。',
            memo: ''
          },
          {
            word: '人們',
            sentence: '人們很驚慌失措， 但是他就很鎮定。',
            bopomofo: 'ㄖㄣˊ ㄇㄣ˙ ㄏㄣˇ ㄐㄧㄥ ㄏㄨㄤ ㄕ ㄘㄨㄛˋ, ㄉㄢˋ ㄕˋ ㄊㄚ ㄐㄧㄡˋ ㄏㄣˇ ㄓㄣˋ ㄉㄧㄥˋ.',
            pinyin: 'ren2 men hen3 jing1 huang1 shi1 cuo4, dan4 shi4 ta1 jiu4 hen3 zhen4 ding4.',
            translation: '人々はパニックに陥りましたが、 彼は落ち着いていました。',
            memo: ''
          },
          {
            word: '★距離',
            sentence: '在計算兩點之間的距離的測驗中， 問題被側出來了。',
            bopomofo: 'ㄗㄞˋ ㄐㄧˋ ㄙㄨㄢˋ ㄌㄧㄤˇ ㄉㄧㄢˇ ㄓ ㄐㄧㄢ ㄉㄜ˙ ㄐㄩˋ ㄌㄧˊ ㄉㄜ˙ ㄘㄜˋ ㄧㄢˋ ㄓㄨㄥ, ㄨㄣˋ ㄊㄧˊ ㄅㄟˋ ㄘㄜˋ ㄔㄨ ㄌㄞˊ ㄌㄜ˙.',
            pinyin: 'zai4 ji4 suan4 liang3 dian3 zhi1 jian1 de ju4 li4 de ce4 yan4 zhong1, wen4 ti2 bei4 ce4 chu1 lai2 le.',
            translation: '二点の距離を求める問題がテストで出ました。',
            memo: '訳文正しい??'
          },
          {
            word: '取代',
            sentence: '簡單的任務很快被機器取代了。',
            bopomofo: 'ㄐㄧㄢˇ ㄉㄢ ㄉㄜ˙ ㄖㄣˋ ㄨˋ ㄏㄣˇ ㄎㄨㄞˋ ㄅㄟˋ ㄐㄧ ㄑㄧˋ ㄑㄩˇ ㄉㄞˋ ㄌㄜ˙.',
            pinyin: 'jian3 dan1 de ren4 wu4 hen3 kuai4 bei4 ji1 qi4 qu3 dai4 le.',
            translation: '単純な仕事は、 あっという間に機械に取って代わられました。',
            memo: ''
          },
          {
            word: '信',
            sentence: '如果今天寄一封信， 需要幾天才能寄到?',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄐㄧㄣ ㄊㄧㄢ ㄐㄧˋ ㄧ ㄈㄥ ㄒㄧㄣˋ, ㄒㄩ ㄧㄠˋ ㄐㄧˇ ㄊㄧㄢ ㄘㄞˊ ㄋㄥˊ ㄐㄧˋ ㄉㄠˋ?',
            pinyin: 'ru2 guo3 jin1 tian1 ji4 yi1 feng1 xin4, xu1 yao4 ji3 tian1 cai2 neng2 ji4 dao4?',
            translation: '今日手紙を送ったら、 大体何日くらいで着きますか?',
            memo: ''
          },
          {
            word: '影集',
            sentence: '影集的主持人換了一個新人了。',
            bopomofo: 'ㄧㄥˇ ㄐㄧˊ ㄉㄜ˙ ㄓㄨˇ ㄔˊ ㄖㄣˊ ㄏㄨㄢˋ ㄌㄜ˙ ㄧˊ ㄍㄜˋ ㄒㄧㄣ ㄖㄣˊ ㄌㄜ˙.',
            pinyin: 'ying3 ji2 de zhu3 chi2 ren2 huan4 le yi1 ge4 xin1 ren2 le.',
            translation: 'テレビシリーズの司会者が、 新しい人に代わりました。',
            memo: ''
          },
          {
            word: '取得',
            sentence: '要是我能取得假期， 我會出國旅行。',
            bopomofo: 'ㄧㄠˋ ㄕˋ ㄨㄛˇ ㄋㄥˊ ㄑㄩˇ ㄉㄜ˙ ㄐㄧㄚˋ ㄑㄧˊ, ㄨㄛˇ ㄏㄨㄟˋ ㄔㄨ ㄍㄨㄛˊ ㄌㄩˇ ㄒㄧㄥˊ.',
            pinyin: 'yao4 shi4 wo3 neng2 qu3 de2 jia4 qi2, wo3 hui4 chu1 guo2 lu3 xing2.',
            translation: '休暇が取れたら、 海外旅行に行きます。',
            memo: ''
          },
          {
            word: '例如',
            sentence: '例如大蒜或洋蔥等有強味道的食物， 我在跟人見面之前避免。',
            bopomofo: 'ㄌㄧˋ ㄖㄨˊ ㄉㄚˋ ㄙㄨㄢˋ ㄏㄨㄛˋ ㄧㄤˊ ㄘㄨㄥ ㄉㄥˇ ㄧㄡˇ ㄑㄧㄤˊ ㄨㄟˋ ㄉㄠˋ ㄉㄜ˙ ㄕˊ ㄨˋ, ㄨㄛˇ ㄗㄞˋ ㄍㄣ ㄖㄣˊ ㄐㄧㄢˋ ㄇㄧㄢˋ ㄓ ㄑㄧㄢˊ ㄅㄧˋ ㄇㄧㄢˇ.',
            pinyin: 'li4 ru2 da4 suan4 huo4 yang2 cong1 deng3 you3 qiang2 wei4 dao4 de shi2 wu4, wo3 zai4 gen1 ren2 jian4 mian4 zhi1 qian2 bi4 mian3.',
            translation: '例えばニンニクや玉ねぎなど臭いのする食べ物は、 人に会う前は控えています。',
            memo: ''
          },
          {
            word: '民眾',
            sentence: '受民眾歡迎的是體育節目或綜藝節目。',
            bopomofo: 'ㄕㄡˋ ㄇㄧㄣˊ ㄓㄨㄥˋ ㄏㄨㄢ ㄧㄥˊ ㄉㄜ˙ ㄕˋ ㄊㄧˇ ㄩˋ ㄐㄧㄝˊ ㄇㄨˋ ㄏㄨㄛˋ ㄗㄨㄥ ㄧˋ ㄐㄧㄝˊ ㄇㄨˋ.',
            pinyin: 'shou4 min2 zhong4 huan1 ying2 de shi4 ti3 yu4 jie2 mu4 huo4 zong1 yi4 jie2 mu4.',
            translation: '大衆に人気があるのは、 スポーツ番組かバラエティです。',
            memo: ''
          },
          {
            word: '高速公路',
            sentence: '高速公路動不動就塞車了， 我們盡快出發吧。',
            bopomofo: 'ㄍㄠ ㄙㄨˋ ㄍㄨㄥ ㄌㄨˋ ㄉㄨㄥˋ ㄅㄨˊ ㄉㄨㄥˋ ㄐㄧㄡˋ ㄙㄞ ㄔㄜ ㄌㄜ˙, ㄨㄛˇ ㄇㄣ˙ ㄐㄧㄣˇ ㄎㄨㄞˋ ㄔㄨ ㄈㄚ ㄅㄚ˙.',
            pinyin: 'gao1 su4 gong1 lu4 dong4 bu2 dong4 jiu4 sai1 che1 le, wo3 men jin3 kuai4 chu1 fa1 ba.',
            translation: '高速はすぐに渋滞するので、 なるべく早く出発しましょう。',
            memo: ''
          },
          {
            word: '前',
            sentence: '我幾年前就開始在餐廳工作了， 早就習慣了長時間站著的工作了。',
            bopomofo: 'ㄨㄛˇ ㄐㄧˇ ㄋㄧㄢˊ ㄑㄧㄢˊ ㄐㄧㄡˋ ㄎㄞ ㄕˇ ㄗㄞˋ ㄘㄢ ㄊㄧㄥ ㄍㄨㄥ ㄗㄨㄛˋ ㄌㄜ˙, ㄗㄠˇ ㄐㄧㄡˋ ㄒㄧˊ ㄍㄨㄢˋ ㄌㄜ˙ ㄓㄤˇ ㄕˊ ㄐㄧㄢ ㄓㄢˋ ㄓㄜ˙ ㄉㄜ˙ ㄍㄨㄥ ㄗㄨㄛˋ ㄌㄜ˙.',
            pinyin: 'wo3 ji3 nian2 qian2 jiu4 kai1 shi3 zai4 can1 ting1 gong1 zuo4 le, zao3 jiu4 xi2 guan4 le chang2 shi2 jian1 zhan4 zhe de gong1 zuo4 le.',
            translation: '私は数年前にレストランで働き始めたので、 長時間の立ち仕事にはもう慣れました。',
            memo: ''
          },
          {
            word: '查詢',
            sentence: '山路是否因為大雨封路了， 我會打電話查詢。',
            bopomofo: 'ㄕㄢ ㄌㄨˋ ㄕˋ ㄈㄡˇ ㄧㄣ ㄨㄟˋ ㄉㄚˋ ㄩˇ ㄈㄥ ㄌㄨˋ ㄌㄜ˙, ㄨㄛˇ ㄏㄨㄟˋ ㄉㄚˇ ㄉㄧㄢˋ ㄏㄨㄚˋ ㄔㄚˊ ㄒㄩㄣˊ.',
            pinyin: 'shan1 lu4 shi4 fou3 yin1 wei4 da4 yu3 feng1 lu4 le, wo3 hui4 da3 dian4 hua4 cha2 xun2.',
            translation: '大雨で山道が通行止めになっていないか、 電話して問い合わせます。',
            memo: ''
          },
          {
            word: '路況',
            sentence: '今天的路況很壞, 這麼說我們趕不上集合時間了。',
            bopomofo: 'ㄐㄧㄣ ㄊㄧㄢ ㄉㄜ˙ ㄌㄨˋ ㄎㄨㄤˋ ㄏㄣˇ ㄏㄨㄞˋ, ㄓㄜˋ ㄇㄜ˙ ㄕㄨㄛ ㄨㄛˇ ㄇㄣ˙ ㄍㄢˇ ㄅㄨˊ ㄕㄤˋ ㄐㄧˊ ㄏㄜˊ ㄕˊ ㄐㄧㄢ ㄌㄜ˙.',
            pinyin: 'jin1 tian1 de lu4 kuang4 hen3 huai4, zhe4 me shuo1 wo3 men gan3 bu2 shang4 ji2 he2 shi2 jian1 le.',
            translation: '今日は道路状況が非常に悪く、 これでは集合時間に間に合いません。',
            memo: ''
          },
          {
            word: '避開',
            sentence: '下雨後水坑太多了， 避開走很難。',
            bopomofo: 'ㄒㄧㄚˋ ㄩˇ ㄏㄡˋ ㄕㄨㄟˇ ㄎㄥ ㄊㄞˋ ㄉㄨㄛ ㄌㄜ˙, ㄅㄧˋ ㄎㄞ ㄗㄡˇ ㄏㄣˇ ㄋㄢˊ.',
            pinyin: 'xia4 yu3 hou4 shui3 keng1 tai4 duo1 le, bi4 kai1 zou3 hen3 nan2.',
            translation: '雨の後は水たまりが多すぎて、 避けながら歩くのが大変です。',
            memo: ''
          },
          {
            word: '路段',
            sentence: '那個路段在週末變成了步行者的天堂。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄌㄨˋ ㄉㄨㄢˋ ㄗㄞˋ ㄓㄡ ㄇㄛˋ ㄅㄧㄢˋ ㄔㄥˊ ㄌㄜ˙ ㄅㄨˋ ㄒㄧㄥˊ ㄓㄜˇ ㄉㄜ˙ ㄊㄧㄢ ㄊㄤˊ.',
            pinyin: 'na4 ge4 lu4 duan4 zai4 zhou1 mo4 bian4 cheng2 le bu4 xing2 zhe3 de tian1 tang2.',
            translation: 'その区間は、 週末は歩行者天国になります。',
            memo: ''
          },
          {
            word: '若',
            sentence: '你若要矯正牙齒， 得先花足夠的時間好好諮詢。',
            bopomofo: 'ㄋㄧˇ ㄖㄨㄛˋ ㄧㄠˋ ㄐㄧㄠˇ ㄓㄥˋ ㄧㄚˊ ㄔˇ, ㄉㄟˇ ㄒㄧㄢ ㄏㄨㄚ ㄗㄨˊ ㄍㄡˋ ㄉㄜ˙ ㄕˊ ㄐㄧㄢ ㄏㄠˇ ㄏㄠˇ ㄗ ㄒㄩㄣˊ.',
            pinyin: 'ni3 ruo4 yao4 jiao3 zheng4 ya2 chi3, dei3 xian1 hua1 zu2 gou4 de shi2 jian1 hao3 hao3 zi1 xun2.',
            translation: '歯科矯正をしたいなら、 カウンセリングには十分な時間をかけなければいけません。',
            memo: ''
          },
          {
            word: '運用',
            sentence: '與其繼續運行舊系統不如創建新系統。',
            bopomofo: 'ㄩˇ ㄑㄧˊ ㄐㄧˋ ㄒㄩˋ ㄩㄣˋ ㄒㄧㄥˊ ㄐㄧㄡˋ ㄒㄧˋ ㄊㄨㄥˇ ㄅㄨˋ ㄖㄨˊ ㄔㄨㄤˋ ㄐㄧㄢˋ ㄒㄧㄣ ㄒㄧˋ ㄊㄨㄥˇ.',
            pinyin: 'yu2 qi2 ji4 xu4 yun4 xing2 jiu4 xi4 tong3 bu4 ru2 chuang4 jian4 xin1 xi4 tong3.',
            translation: '古いシステムを運用し続けるよりも、 新しいシステムを作った方が良いです。',
            memo: ''
          },
          {
            word: '病歷',
            sentence: '我容易生病， 所以我有很多病歷。',
            bopomofo: 'ㄨㄛˇ ㄖㄨㄥˊ ㄧˋ ㄕㄥ ㄅㄧㄥˋ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄅㄧㄥˋ ㄌㄧˋ.',
            pinyin: 'wo3 rong2 yi4 sheng1 bing4, suo3 yi3 wo3 you3 hen3 duo1 bing4 li4.',
            translation: '私は病気がちなので、 医療記録も結構な量です。',
            memo: ''
          },
          {
            word: '例子',
            sentence: '你有什麼具體的例子嗎?',
            bopomofo: 'ㄋㄧˇ ㄧㄡˇ ㄕㄣˊ ㄇㄜ˙ ㄐㄩˋ ㄊㄧˇ ㄉㄜ˙ ㄌㄧˋ ㄗ˙ ㄇㄚ˙?',
            pinyin: 'ni3 you3 shen2 me ju4 ti3 de li4 zi ma?',
            translation: '何か具体例はありますか?',
            memo: ''
          },
          {
            word: '更加',
            sentence: '我不敢相信天氣會變得更加熱了。',
            bopomofo: 'ㄨㄛˇ ㄅㄨˋ ㄍㄢˇ ㄒㄧㄤ ㄒㄧㄣˋ ㄊㄧㄢ ㄑㄧˋ ㄏㄨㄟˋ ㄅㄧㄢˋ ㄉㄜ˙ ㄍㄥˋ ㄐㄧㄚ ㄖㄜˋ ㄌㄜ˙.',
            pinyin: 'wo3 bu4 gan3 xiang1 xin4 tian1 qi4 hui4 bian4 de geng4 jia1 re4 le.',
            translation: 'これから更に暑くなるなんて信じられません。',
            memo: ''
          },
          {
            word: '原本',
            sentence: '我原本沒想到養倉鼠那樣的小動物。',
            bopomofo: 'ㄨㄛˇ ㄩㄢˊ ㄅㄣˇ ㄇㄟˊ ㄒㄧㄤˇ ㄉㄠˋ ㄧㄤˇ ㄘㄤ ㄕㄨˇ ㄋㄚˋ ㄧㄤˋ ㄉㄜ˙ ㄒㄧㄠˇ ㄉㄨㄥˋ ㄨˋ.',
            pinyin: 'wo3 yuan2 ben3 mei2 xiang3 dao4 yang3 cang1 shu3 na4 yang4 de xiao3 dong4 wu4.',
            translation: '元々、 ハムスターのような小動物を飼う事は考えていませんでした。',
            memo: ''
          },
          {
            word: '忙碌',
            sentence: '該部門很忙碌， 別說加班， 有時候就是週末也得工作。',
            bopomofo: 'ㄍㄞ ㄅㄨˋ ㄇㄣˊ ㄏㄣˇ ㄇㄤˊ ㄌㄨˋ, ㄅㄧㄝˊ ㄕㄨㄛ ㄐㄧㄚ ㄅㄢ, ㄧㄡˇ ㄕˊ ㄏㄡˋ ㄐㄧㄡˋ ㄕˋ ㄓㄡ ㄇㄛˋ ㄧㄝˇ ㄉㄟˇ ㄍㄨㄥ ㄗㄨㄛˋ.',
            pinyin: 'gai1 bu4 men2 hen3 mang2 lu4, bie2 shuo1 jia1 ban1, you3 shi2 hou4 jiu4 shi4 zhou1 mo4 ye3 dei3 gong1 zuo4.',
            translation: 'その部署はとても忙しく、 残業は言うまでもなく、 時には休日出勤もしなければいけません。',
            memo: ''
          },
          {
            word: '確實',
            sentence: '如果你養了一隻貓就不能離開房子， 確實是真的。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄧㄤˇ ㄌㄜ˙ ㄧ ㄓ ㄇㄠ ㄐㄧㄡˋ ㄅㄨˋ ㄋㄥˊ ㄌㄧˊ ㄎㄞ ㄈㄤˊ ㄗ˙, ㄑㄩㄝˋ ㄕˊ ㄕˋ ㄓㄣ ㄉㄜ˙.',
            pinyin: 'ru2 guo3 ni3 yang3 le yi1 zhi1 mao1 jiu4 bu4 neng2 li4 kai1 fang2 zi, que4 shi2 shi4 zhen1 de.',
            translation: '猫を飼うと家から出られなくなるというのは、 確かに本当でした。',
            memo: ''
          },
          {
            word: '控制',
            sentence: '世界上有那麼多好吃的東西， 所以我都控制不住自己的食慾。',
            bopomofo: 'ㄕˋ ㄐㄧㄝˋ ㄕㄤ˙ ㄧㄡˇ ㄋㄚˋ ㄇㄜ˙ ㄉㄨㄛ ㄏㄠˇ ㄔ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄉㄡ ㄎㄨㄥˋ ㄓˋ ㄅㄨˊ ㄓㄨˋ ㄗˋ ㄐㄧˇ ㄉㄜ˙ ㄕˊ ㄩˋ.',
            pinyin: 'shi4 jie4 shang4 you3 na4 me duo1 hao3 chi1 de dong1 xi1, suo3 yi3 wo3 dou1 kong4 zhi4 bu2 zhu4 zi4 ji3 de shi2 yu4.',
            translation: '世の中には美味しいものがたくさんありすぎて、 食欲をコントロールできません。',
            memo: ''
          },
          {
            word: '表弟',
            sentence: '紅蘿萄， 青椒等， 我那討厭蔬菜的表弟連試都不試吃。',
            bopomofo: 'ㄏㄨㄥˊ ㄌㄨㄛˊ ㄅㄛ˙, ㄑㄧㄥ ㄐㄧㄠ ㄉㄥˇ, ㄨㄛˇ ㄋㄚˋ ㄊㄠˇ ㄧㄢˋ ㄕㄨ ㄘㄞˋ ㄉㄜ˙ ㄅㄧㄠˇ ㄉㄧˋ ㄌㄧㄢˊ ㄕˋ ㄉㄡ ㄅㄨˊ ㄕˋ ㄔ.',
            pinyin: 'hong2 luo2 bo, qing1 jiao1 deng3, wo3 na4 tao3 yan4 shu1 cai4 de biao3 di4 lian2 shi4 dou1 bu2 shi4 chi1.',
            translation: '野菜嫌いのいとこは、 ニンジンとピーマン等は食べようともしません。',
            memo: ''
          },
          {
            word: '退步',
            sentence: '最近我不常跟人聊天， 所以我的溝通能力退步了。',
            bopomofo: 'ㄗㄨㄟˋ ㄐㄧㄣˋ ㄨㄛˇ ㄅㄨˋ ㄔㄤˊ ㄍㄣ ㄖㄣˊ ㄌㄧㄠˊ ㄊㄧㄢ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄉㄜ˙ ㄍㄡ ㄊㄨㄥ ㄋㄥˊ ㄌㄧˋ ㄊㄨㄟˋ ㄅㄨˋ ㄌㄜ˙.',
            pinyin: 'zui4 jin4 wo3 bu4 chang2 gen1 ren2 liao2 tian1, suo3 yi3 wo3 de gou1 tong1 neng2 li4 tui4 bu4 le.',
            translation: '最近はあまり人と喋らないので、 コミュニケーション能力が落ちています。',
            memo: ''
          },
          {
            word: '過度',
            sentence: '當壓力累積時， 我往往過度飲食。',
            bopomofo: 'ㄉㄤ ㄧㄚ ㄌㄧˋ ㄌㄟˇ ㄐㄧ ㄕˊ, ㄨㄛˇ ㄨㄤˇ ㄨㄤˇ ㄍㄨㄛˋ ㄉㄨˋ ㄧㄣˇ ㄕˊ.',
            pinyin: 'dang1 ya1 li4 lei3 ji1 shi2, wo3 wang3 wang3 guo4 du4 yin3 shi2.',
            translation: 'ストレスが溜まると、 ついつい食べ過ぎてしまいます。',
            memo: '※「食べ過ぎる」 : 「過度飲食(ㄍㄨㄛˋ ㄉㄨˋ ㄧㄣˇ ㄕˊ/ guo4 du4 yin3 shi2)」または「吃過多(ㄔ ㄍㄨㄛˋ ㄉㄨㄛ/chi1 guo4 duo1)」でも可。'
          },
          {
            word: '與',
            sentence: '巴士票， 我們有普通的與一日券兩種。',
            bopomofo: 'ㄅㄚ ㄕˋ ㄆㄧㄠˋ, ㄨㄛˇ ㄇㄣ˙ ㄧㄡˇ ㄆㄨˇ ㄊㄨㄥ ㄉㄜ˙ ㄩˇ ㄧ ㄖˋ ㄑㄩㄢˋ ㄌㄧㄤˇ ㄓㄨㄥˇ.',
            pinyin: 'ba1 shi4 piao4, wo3 men you3 pu3 tong1 de yu2 yi1 ri4 quan4 liang3 zhong3.',
            translation: 'バスのチケットには、 普通乗車券および1日乗車券の2種類があります。',
            memo: ''
          },
          {
            word: '生理',
            sentence: '你不吃油膩的東西, 你的生理狀態就會變好了。',
            bopomofo: 'ㄋㄧˇ ㄅㄨˋ ㄔ ㄧㄡˊ ㄋㄧˋ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ, ㄋㄧˇ ㄉㄜ˙ ㄕㄥ ㄌㄧˇ ㄓㄨㄤˋ ㄊㄞˋ ㄐㄧㄡˋ ㄏㄨㄟˋ ㄅㄧㄢˋ ㄏㄠˇ ㄌㄜ˙.',
            pinyin: 'ni3 bu4 chi1 you2 ni4 de dong1 xi, ni3 de sheng1 li3 zhuang4 tai4 jiu4 hui4 bian4 hao3 le.',
            translation: '脂っこいものを食べなければ、 体調は良くなりますよ。',
            memo: ''
          },
          {
            word: '盯',
            sentence: '被所有人盯著看， 如果地上有一個地洞我想鑽進去。',
            bopomofo: 'ㄅㄟˋ ㄙㄨㄛˇ ㄧㄡˇ ㄖㄣˊ ㄉㄧㄥ ㄓㄜ˙ ㄎㄢˋ, ㄖㄨˊ ㄍㄨㄛˇ ㄉㄧˋ ㄕㄤˋ ㄧㄡˇ ㄧˊ ㄍㄜˋ ㄉㄧˋ ㄉㄨㄥˋ ㄨㄛˇ ㄒㄧㄤˇ ㄗㄨㄢ ㄐㄧㄣˋ ㄑㄩˋ.',
            pinyin: 'bei4 suo3 you3 ren2 ding1 zhe kan4, ru2 guo3 di4 shang4 you3 yi1 ge4 di4 dong4 wo3 xiang3 zuan4 jin4 qu4.',
            translation: 'みんなにじっと見られて、 穴があったら入りたいです。',
            memo: ''
          },
          {
            word: '螢幕',
            sentence: '一直盯著明亮的螢幕對眼睛不好。',
            bopomofo: 'ㄧ ㄓˊ ㄉㄧㄥ ㄓㄜ˙ ㄇㄧㄥˊ ㄌㄧㄤˋ ㄉㄜ˙ ㄧㄥˊ ㄇㄨˋ ㄉㄨㄟˋ ㄧㄢˇ ㄐㄧㄥ ㄅㄨˋ ㄏㄠˇ.',
            pinyin: 'yi1 zhi2 ding1 zhe ming2 liang4 de ying2 mu4 dui4 yan3 jing1 bu4 hao3.',
            translation: '明るい画面を見続けるのは目に良くないです。',
            memo: ''
          },
          {
            word: '疲倦',
            sentence: '我在很疲倦， 但我不至於走不了路。',
            bopomofo: 'ㄨㄛˇ ㄗㄞˋ ㄏㄣˇ ㄆㄧˊ ㄐㄩㄢˋ, ㄉㄢˋ ㄨㄛˇ ㄅㄨˊ ㄓˋ ㄩˊ ㄗㄡˇ ㄅㄨˋ ㄌㄧㄠˇ ㄌㄨˋ.',
            pinyin: 'wo3 zai4 hen3 pi2 juan4, dan4 wo3 bu2 zhi4 yu2 zou3 bu4 liao3 lu4.',
            translation: 'とても疲れていますが、 歩けないほどではありません。',
            memo: ''
          },
          {
            word: '視力',
            sentence: '她玩了電視遊戲太久了, 視力也變差了。',
            bopomofo: 'ㄊㄚ ㄨㄢˊ ㄌㄜ˙ ㄉㄧㄢˋ ㄕˋ ㄧㄡˊ ㄒㄧˋ ㄊㄞˋ ㄐㄧㄡˇ ㄌㄜ˙, ㄕˋ ㄌㄧˋ ㄧㄝˇ ㄅㄧㄢˋ ㄔㄚ ㄌㄜ˙.',
            pinyin: 'ta1 wan2 le dian4 shi4 you2 xi4 tai4 jiu3 le, shi4 li4 ye3 bian4 cha1 le.',
            translation: '彼女はテレビゲームをやりすぎたせいで、 視力が悪くなりました。',
            memo: ''
          },
          {
            word: '家長',
            sentence: '學校白天為家長照顧孩子們。',
            bopomofo: 'ㄒㄩㄝˊ ㄒㄧㄠˋ ㄅㄞˊ ㄊㄧㄢ ㄨㄟˋ ㄐㄧㄚ ㄓㄤˇ ㄓㄠˋ ㄍㄨˋ ㄏㄞˊ ㄗ˙ ㄇㄣ˙.',
            pinyin: 'xue2 xiao4 bai2 tian1 wei4 jia1 zhang3 zhao4 gu4 hai2 zi men.',
            translation: '学校は日中、 両親に代わって生徒の面倒を見ています。',
            memo: ''
          },
          {
            word: '此外',
            sentence: '吃簡單的菜對身體健康， 此外也可以省錢。',
            bopomofo: 'ㄔ ㄐㄧㄢˇ ㄉㄢ ㄉㄜ˙ ㄘㄞˋ ㄉㄨㄟˋ ㄕㄣ ㄊㄧˇ ㄐㄧㄢˋ ㄎㄤ, ㄘˇ ㄨㄞˋ ㄧㄝˇ ㄎㄜˇ ㄧˇ ㄕㄥˇ ㄑㄧㄢˊ.',
            pinyin: 'chi1 jian3 dan1 de cai4 dui4 shen1 ti3 jian4 kang1, ci3 wai4 ye3 ke3 yi3 sheng3 qian2.',
            translation: '質素なおかずは健康的な事に加え、 お金の節約にもなります。',
            memo: '※「簡樸(ian3 pu3)」は一体どうやって使うのか。'
          },
          {
            word: '戶外',
            sentence: '我那不喜歡出去的弟弟即使被邀請也一向不願試著去戶外活動。',
            bopomofo: 'ㄨㄛˇ ㄋㄚˋ ㄅㄨˋ ㄒㄧˇ ㄏㄨㄢ ㄔㄨ ㄑㄩˋ ㄉㄜ˙ ㄉㄧˋ ㄉㄧ˙ ㄐㄧˊ ㄕˇ ㄅㄟˋ ㄧㄠ ㄑㄧㄥˇ ㄧㄝˇ ㄧ ㄒㄧㄤˋ ㄅㄨˊ ㄩㄢˋ ㄕˋ ㄓㄜ˙ ㄑㄩˋ ㄏㄨˋ ㄨㄞˋ ㄏㄨㄛˊ ㄉㄨㄥˋ.',
            pinyin: 'wo3 na4 bu4 xi3 huan1 chu1 qu4 de di4 di ji2 shi3 bei4 yao1 qing3 ye3 yi1 xiang4 bu2 yuan4 shi4 zhe qu4 hu4 wai4 huo2 dong4.',
            translation: '出不精の弟は、 誘われても一向にアウトドアをしたがりません。',
            memo: ''
          },
          {
            word: '人類',
            sentence: '即使有人類的智慧， 我們也無法完全控制自然。',
            bopomofo: 'ㄐㄧˊ ㄕˇ ㄧㄡˇ ㄖㄣˊ ㄌㄟˋ ㄉㄜ˙ ㄓˋ ㄏㄨㄟˋ, ㄨㄛˇ ㄇㄣ˙ ㄧㄝˇ ㄨˊ ㄈㄚˇ ㄨㄢˊ ㄑㄩㄢˊ ㄎㄨㄥˋ ㄓˋ ㄗˋ ㄖㄢˊ.',
            pinyin: 'ji2 shi3 you3 ren2 lei4 de zhi4 hui4, wo3 men ye3 wu2 fa3 wan2 quan2 kong4 zhi4 zi4 ran2.',
            translation: '人類の知恵をもってしても、 自然を完全にコントロールする事はできません。',
            memo: ''
          },
          {
            word: '正面',
            sentence: '廣告只提到商品的正面， 你要注意。',
            bopomofo: 'ㄍㄨㄤˇ ㄍㄠˋ ㄓˇ ㄊㄧˊ ㄉㄠˋ ㄕㄤ ㄆㄧㄣˇ ㄉㄜ˙ ㄓㄥˋ ㄇㄧㄢˋ, ㄋㄧˇ ㄧㄠˋ ㄓㄨˋ ㄧˋ.',
            pinyin: 'guang3 gao4 zhi3 ti2 dao4 shang1 pin3 de zheng4 mian4, ni3 yao4 zhu4 yi4.',
            translation: '広告には商品の良い面だけが書いてあるので、 注意が必要です。',
            memo: ''
          },
          {
            word: '同時',
            sentence: '她可以同時清洗和煮飯， 所以她非常受人尊敬。',
            bopomofo: 'ㄊㄚ ㄎㄜˇ ㄧˇ ㄊㄨㄥˊ ㄕˊ ㄑㄧㄥ ㄒㄧˇ ㄏㄢˋ ㄓㄨˇ ㄈㄢˋ ㄙㄨㄛˇ ㄧˇ ㄊㄚ ㄈㄟ ㄔㄤˊ ㄕㄡˋ ㄖㄣˊ ㄗㄨㄣ ㄐㄧㄥˋ.',
            pinyin: 'ta1 ke3 yi3 tong2 shi2 qing1 xi3 han4 zhu3 fan4, suo3 yi3 ta1 fei1 chang2 shou4 ren2 zun1 jing4.',
            translation: '彼女は洗濯と料理を同時にできるので、 とても尊敬されています。',
            memo: ''
          },
          {
            word: '負面',
            sentence: '她總是說負面的話， 聽的人也會覺得鬱悶。',
            bopomofo: 'ㄊㄚ ㄗㄨㄥˇ ㄕˋ ㄕㄨㄛ ㄈㄨˋ ㄇㄧㄢˋ ㄉㄧˊ ㄏㄨㄚˋ, ㄊㄧㄥ ㄉㄜ˙ ㄖㄣˊ ㄧㄝˇ ㄏㄨㄟˋ ㄐㄩㄝˊ ㄉㄜ˙ ㄩˋ ㄇㄣˋ.',
            pinyin: 'ta1 zong3 shi4 shuo1 fu4 mian4 de hua4, ting1 de ren2 ye3 hui4 jue2 de yu4 men4.',
            translation: '彼女はいつもネガティブな発言ばかりで、 聞いている方も気分が落ち込みます。',
            memo: ''
          },
          {
            word: '沉迷',
            sentence: '他沉迷於賭博， 被家人拋棄了。',
            bopomofo: 'ㄊㄚ ㄔㄣˊ ㄇㄧˊ ㄩˊ ㄉㄨˇ ㄅㄛˊ, ㄅㄟˋ ㄐㄧㄚ ㄖㄣˊ ㄆㄠ ㄑㄧˋ ㄌㄜ˙.',
            pinyin: 'ta1 chen2 mi2 yu2 du3 bo2, bei4 jia1 ren2 pao1 qi4 le.',
            translation: '彼はギャンブル依存症になり、 家族からも見放されてしまいました。',
            memo: ''
          },
          {
            word: '無形中',
            sentence: '我本是狗教， 卻無形中變成了貓教。',
            bopomofo: 'ㄨㄛˇ ㄅㄣˇ ㄕˋ ㄍㄡˇ ㄐㄧㄠˋ， ㄑㄩㄝˋ ㄨˊ ㄒㄧㄥˊ ㄓㄨㄥ ㄅㄧㄢˋ ㄔㄥˊ ㄌㄜ˙ ㄇㄠ ㄐㄧㄠˋ.',
            pinyin: 'wo3 ben3 shi4 gou3 jiao4, que4 wu2 xing2 zhong1 bian4 cheng2 le mao1 jiao4.',
            translation: '元々犬派だったのですが、 知らず知らずのうちに猫派になっていました。',
            memo: ''
          },
          {
            word: '遠距教學',
            sentence: '遠距教學可不可以讓你了解所有科系?',
            bopomofo: 'ㄩㄢˇ ㄐㄩˋ ㄐㄧㄠ ㄒㄩㄝˊ ㄎㄜˇ ㄅㄨˋ ㄎㄜˇ ㄧˇ ㄖㄤˋ ㄋㄧˇ ㄌㄧㄠˇ ㄐㄧㄝˇ ㄙㄨㄛˇ ㄧㄡˇ ㄎㄜ ㄒㄧˋ?',
            pinyin: 'yuan3 ju4 jiao1 xue2 ke3 bu4 ke3 yi3 rang4 ni3 liao3 jie3 suo3 you3 ke1 xi4?',
            translation: '遠隔授業で、 全ての科目が問題なく理解できますか?',
            memo: ''
          },
          {
            word: '大吵大鬧',
            sentence: '外面一對在吵架的情侶在大吵大鬧。',
            bopomofo: 'ㄨㄞˋ ㄇㄧㄢˋ ㄧ ㄉㄨㄟˋ ㄗㄞˋ ㄔㄠˇ ㄐㄧㄚˋ ㄉㄜ˙ ㄑㄧㄥˊ ㄌㄩˇ ㄗㄞˋ ㄉㄚˋ ㄔㄠˇ ㄉㄚˋ ㄋㄠˋ.',
            pinyin: 'wai4 mian4 yi1 dui4 zai4 chao3 jia4 de qing2 lu3 zai4 da4 chao3 da4 nao4.',
            translation: '表で喧嘩しているカップルがギャーギャー騒いでいます。',
            memo: ''
          },
          {
            word: '焦慮不安',
            sentence: '被帶到新家的狗看起來感到焦慮不安。',
            bopomofo: 'ㄅㄟˋ ㄉㄞˋ ㄉㄠˋ ㄒㄧㄣ ㄐㄧㄚ ㄉㄜ˙ ㄍㄡˇ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄍㄢˇ ㄉㄠˋ ㄐㄧㄠ ㄌㄩˋ ㄅㄨˋ ㄢ.',
            pinyin: 'bei4 dai4 dao4 xin1 jia1 de gou3 kan4 qi3 lai2 gan3 dao4 jiao1 lu4 bu4 an1.',
            translation: '新しい家に連れてこられた犬はソワソワと落ち着きません。',
            memo: ''
          },
          {
            word: '總而言之',
            sentence: '總而言之， 為了塞滿那個大胃王的肚子你得給他好幾公斤的食物。',
            bopomofo: 'ㄗㄨㄥˇ ㄦˊ ㄧㄢˊ ㄓ, ㄨㄟˋ ㄌㄜ˙ ㄙㄞ ㄇㄢˇ ㄋㄚˋ ㄍㄜˋ ㄉㄚˋ ㄨㄟˋ ㄨㄤˊ ㄉㄜ˙ ㄉㄨˇ ㄗ˙ ㄋㄧˇ ㄉㄟˇ ㄍㄟˇ ㄊㄚ ㄏㄠˇ ㄐㄧˇ ㄍㄨㄥ ㄐㄧㄣ ㄉㄜ˙ ㄕˊ ㄨˋ.',
            pinyin: 'zong3 er2 yan2 zhi1, wei4 le sai1 man3 na4 ge4 da4 wei4 wang2 de du4 zi ni3 dei3 gei3 ta1 hao3 ji3 gong1 jin1 de shi2 wu4.',
            translation: 'つまり、 あの大食いのお腹をいっぱいにするには、 数キログラムの食べ物を与えなければいけません。',
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
