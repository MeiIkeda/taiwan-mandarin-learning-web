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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第5章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第5章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      // 単語数：67
      data: {
        title: '當代中文課程課3・第5章',
        words: [
          {
            word: '流行',
            sentence: '孩子們的小學現在的流行是收集橡皮。',
            bopomofo: 'ㄏㄞˊ ㄗ˙ ㄇㄣ˙ ㄉㄜ˙ ㄒㄧㄠˇ ㄒㄩㄝˊ ㄒㄧㄢˋ ㄗㄞˋ ㄉㄜ˙ ㄌㄧㄡˊ ㄒㄧㄥˊ ㄕˋ ㄕㄡ ㄐㄧˊ ㄒㄧㄤˋ ㄆㄧˊ.',
            pinyin: 'hai2 zi men de xiao3 xue2 xian4 zai4 de liu2 xing2 shi4 shou1 ji2 xiang4 pi2.',
            translation: '子供の小学校では今、 消しゴムを集める事が流行っています。',
            memo: ''
          },
          {
            word: '唉',
            sentence: '唉， 我剛剛喝的不是水而是醋!',
            bopomofo: 'ㄞ， ㄨㄛˇ ㄍㄤ ㄍㄤ ㄏㄜ ㄉㄜ˙ ㄅㄨˊ ㄕˋ ㄕㄨㄟˇ ㄦˊ ㄕˋ ㄘㄨˋ!',
            pinyin: 'ai1, wo3 gang1 gang1 he1 de bu2 shi4 shui3 er2 shi4 cu4!',
            translation: 'うわっ、 水を飲んだと思ったらお酢でした!',
            memo: ''
          },
          {
            word: '演唱會',
            sentence: '著名的歌手的演唱會可以動員好幾十萬人。',
            bopomofo: 'ㄓㄨˋ ㄇㄧㄥˊ ㄉㄜ˙ ㄍㄜ ㄕㄡˇ ㄉㄜ˙ ㄧㄢˇ ㄔㄤˋ ㄏㄨㄟˋ ㄎㄜˇ ㄧˇ ㄉㄨㄥˋ ㄩㄢˊ ㄏㄠˇ ㄐㄧˇ ㄕˊ ㄨㄢˋ ㄖㄣˊ.',
            pinyin: 'zhu4 ming2 de ge1 shou3 de yan3 chang4 hui4 ke3 yi3 dong4 yuan2 hao3 ji3 shi2 wan4 ren2.',
            translation: '有名な歌手のコンサートは、 何十万人もの人々を動員することができます。',
            memo: ''
          },
          {
            word: '塞車',
            sentence: '高速公路塞車很久, 司機在被很弄煩了。',
            bopomofo: 'ㄍㄠ ㄙㄨˋ ㄍㄨㄥ ㄌㄨˋ ㄙㄞ ㄔㄜ ㄏㄣˇ ㄐㄧㄡˇ, ㄙ ㄐㄧ ㄗㄞˋ ㄅㄟˋ ㄏㄣˇ ㄋㄨㄥˋ ㄈㄢˊ ㄌㄜ˙.',
            pinyin: 'gao1 su4 gong1 lu4 sai1 che1 hen3 jiu3, si1 ji1 zai4 bei4 hen3 nong4 fan2 le.',
            translation: '高速道路は長い間渋滞していて、 運転手はイライラしています。',
            memo: ''
          },
          {
            word: '上線',
            sentence: '為了上線, 你一定需要密碼。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄕㄤˋ ㄒㄧㄢˋ, ㄋㄧˇ ㄧ ㄉㄧㄥˋ ㄒㄩ ㄧㄠˋ ㄇㄧˋ ㄇㄚˇ.',
            pinyin: 'wei4 le shang4 xian4, ni3 yi1 ding4 xu1 yao4 mi4 ma3.',
            translation: 'ログインするには、 パスワードが必要です。',
            memo: ''
          },
          {
            word: '成功',
            sentence: '他成功了只用微波做菜, 很高興。',
            bopomofo: 'ㄊㄚ ㄔㄥˊ ㄍㄨㄥ ㄌㄜ˙ ㄓˇ ㄩㄥˋ ㄨㄟ ㄅㄛ ㄗㄨㄛˋ ㄘㄞˋ, ㄏㄣˇ ㄍㄠ ㄒㄧㄥˋ.',
            pinyin: 'ta1 cheng2 gong1 le zhi3 yong4 wei1 bo1 zuo4 cai4, hen3 gao1 xing4.',
            translation: '彼は電子レンジだけで料理をすることに成功したので、 すごく喜んでいます。',
            memo: ''
          },
          {
            word: '倒楣',
            sentence: '所有的商店都賣完了啤酒, 我很倒楣。',
            bopomofo: 'ㄙㄨㄛˇ ㄧㄡˇ ㄉㄜ˙ ㄕㄤ ㄉㄧㄢˋ ㄉㄡ ㄇㄞˋ ㄨㄢˊ ㄌㄜ˙ ㄆㄧˊ ㄐㄧㄡˇ, ㄨㄛˇ ㄏㄣˇ ㄉㄠˇ ㄇㄟˊ.',
            pinyin: 'suo3 you3 de shang1 dian4 dou1 mai4 wan2 le pi2 jiu3, wo3 hen3 dao3 mei2.',
            translation: '全部の店でビールが売り切れていて、 とても不運です。',
            memo: ''
          },
          {
            word: '樂團',
            sentence: '他在組成一支學生樂團, 被年輕人很受歡迎。',
            bopomofo: 'ㄊㄚ ㄗㄞˋ ㄗㄨˇ ㄔㄥˊ ㄧ ㄓ ㄒㄩㄝˊ ㄕㄥ ㄩㄝˋ ㄊㄨㄢˊ, ㄅㄟˋ ㄋㄧㄢˊ ㄑㄧㄥ ㄖㄣˊ ㄏㄣˇ ㄕㄡˋ ㄏㄨㄢ ㄧㄥˊ.',
            pinyin: 'ta1 zai4 zu3 cheng2 yi1 zhi1 xue2 sheng1 yue4 tuan2, bei4 nian2 qing1 ren2 hen3 shou4 huan1 ying2.',
            translation: '彼は学生バンドを組んでいて、 若者の間で非常に人気があります。',
            memo: ''
          },
          {
            word: '唱',
            sentence: '貓的鼾聽起來牠在唱歌。',
            bopomofo: 'ㄇㄠ ㄉㄜ˙ ㄏㄢ ㄊㄧㄥ ㄑㄧˇ ㄌㄞˊ ㄊㄚ ㄗㄞˋ ㄔㄤˋ ㄍㄜ.',
            pinyin: 'mao1 de han1 ting1 qi3 lai2 ta1 zai4 chang4 ge1.',
            translation: '猫のいびきは、 歌を歌っているように聞こえます。',
            memo: ''
          },
          {
            word: '興奮',
            sentence: '她的最喜歡的藝術家在她的城市舉行一場演唱會, 她興奮得不得了。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄗㄨㄟˋ ㄒㄧˇ ㄏㄨㄢ ㄉㄜ˙ ㄧˋ ㄕㄨˋ ㄐㄧㄚ ㄗㄞˋ ㄊㄚ ㄉㄜ˙ ㄔㄥˊ ㄕˋ ㄐㄩˇ ㄒㄧㄥˊ ㄧ ㄔㄤˇ ㄧㄢˇ ㄔㄤˋ ㄏㄨㄟˋ, ㄊㄚ ㄒㄧㄥ ㄈㄣˋ ㄉㄜˊ ㄅㄨˋ ㄉㄜˊ ㄌㄧㄠˇ.',
            pinyin: 'ta1 de zui4 xi3 huan1 de yi4 shu4 jia1 zai4 ta1 de cheng2 shi4 ju3 xing2 yi1 chang3 yan3 chang4 hui4, ta1 xing1 fen4 de bu4 de2 liao3.',
            translation: 'お気に入りのアーティストが彼女の街でコンサートをするので、 彼女はとても興奮しています。',
            memo: ''
          },
          {
            word: '迷',
            sentence: '為了他太迷收集玩具娃娃, 他的女朋友跟他分開了。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄊㄚ ㄊㄞˋ ㄇㄧˊ ㄕㄡ ㄐㄧˊ ㄨㄢˊ ㄐㄩˋ ㄨㄚˊ ㄨㄚ˙, ㄊㄚ ㄉㄜ˙ ㄋㄩˇ ㄆㄥˊ ㄧㄡˇ ㄍㄣ ㄊㄚ ㄈㄣ ㄎㄞ ㄌㄜ˙.',
            pinyin: 'wei4 le ta1 tai4 mi2 shou1 ji2 wan2 ju4 wa2 wa, ta1 de nu3 peng2 you3 gen1 ta1 fen1 kai1 le.',
            translation: '彼はフィギュアを集める事に夢中になりすぎているので、 ガールフレンドから別れを告げられました。',
            memo: ''
          },
          {
            word: '歌詞',
            sentence: '那個歌手看起來忘記了歌詞, 在舞台上很不耐煩。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄍㄜ ㄕㄡˇ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄨㄤˋ ㄐㄧˋ ㄌㄜ˙ ㄍㄜ ㄘˊ, ㄗㄞˋ ㄨˇ ㄊㄞˊ ㄕㄤˋ ㄏㄣˇ ㄅㄨˊ ㄋㄞˋ ㄈㄢˊ.',
            pinyin: 'na4 ge4 ge1 shou3 kan4 qi3 lai2 wang4 ji4 le ge1 ci2, zai4 wu3 tai2 shang4 hen3 bu2 nai4 fan2.',
            translation: 'あの歌手は歌詞を忘れたようで、 舞台の上でかなり焦っています。',
            memo: ''
          },
          {
            word: '難過',
            sentence: '貓的聲音聽起來很難過, 他應該餓了。',
            bopomofo: 'ㄇㄠ ㄉㄜ˙ ㄕㄥ ㄧㄣ ㄊㄧㄥ ㄑㄧˇ ㄌㄞˊ ㄏㄣˇ ㄋㄢˊ ㄍㄨㄛˋ, ㄊㄚ ㄧㄥ ㄍㄞ ㄜˋ ㄌㄜ˙.',
            pinyin: 'mao1 de sheng1 yin1 ting1 qi3 lai2 hen3 nan2 guo4, ta1 ying1 gai1 e4 le.',
            translation: '猫の鳴き声がすごく悲しそうに聞こえるので、 きっとお腹がすいたんですよ。',
            memo: ''
          },
          {
            word: '不如',
            sentence: '所有的壽司很好吃, 但是不如海邊的鮮魚用的。',
            bopomofo: 'ㄙㄨㄛˇ ㄧㄡˇ ㄉㄜ˙ ㄕㄡˋ ㄙ ㄏㄣˇ ㄏㄠˇ ㄔ, ㄉㄢˋ ㄕˋ ㄅㄨˋ ㄖㄨˊ ㄏㄞˇ ㄅㄧㄢ ㄉㄜ˙ ㄒㄧㄢ ㄩˊ ㄩㄥˋ ㄉㄜ˙.',
            pinyin: 'suo3 you3 de shou4 si1 hen3 hao3 chi1, dan4 shi4 bu4 ru2 hai3 bian1 de xian1 yu2 yong4 de.',
            translation: 'お寿司はどれも美味しいですが、 海沿いの新鮮な魚を使ったものには敵いません。',
            memo: ''
          },
          {
            word: '現場',
            sentence: '現代不必去現場, 你只要用網路差不多所有的事情可以在家做得到。',
            bopomofo: 'ㄒㄧㄢˋ ㄉㄞˋ ㄅㄨˊ ㄅㄧˋ ㄑㄩˋ ㄒㄧㄢˋ ㄔㄤˇ, ㄋㄧˇ ㄓˇ ㄧㄠˋ ㄩㄥˋ ㄨㄤˇ ㄌㄨˋ ㄔㄚ ㄅㄨˋ ㄉㄨㄛ ㄙㄨㄛˇ ㄧㄡˇ ㄉㄜ˙ ㄕˋ ㄑㄧㄥˊ ㄎㄜˇ ㄧˇ ㄗㄞˋ ㄐㄧㄚ ㄗㄨㄛˋ ㄉㄜㄜ˙ ㄉㄠˋ.',
            pinyin: 'xian4 dai4 bu2 bi4 qu4 xian4 chang3, ni3 zhi3 yao4 yong4 wang3 lu4 cha1 bu4 duo1 suo3 you3 de shi4 qing2 ke3 yi3 zai4 jia1 zuo4 de dao4.',
            translation: '今は現場に行かなくても、 ネットさえあれば大体の事は家で済ませられます。',
            memo: ''
          },
          {
            word: '跳',
            sentence: '眼睛紅紅的兔子在跳來跳去。',
            bopomofo: 'ㄧㄢˇ ㄐㄧㄥ ㄏㄨㄥˊ ㄏㄨㄥˊ ㄉㄜ˙ ㄊㄨˋ ㄗ˙ ㄗㄞˋ ㄊㄧㄠˋ ㄌㄞˊ ㄊㄧㄠˋ ㄑㄩˋ.',
            pinyin: 'yan3 jing1 hong2 hong2 de tu4 zi zai4 tiao4 lai2 tiao4 qu4.',
            translation: '赤い目のウサギが飛び跳ねています。',
            memo: ''
          },
          {
            word: '整',
            sentence: '當我注意到時， 我整夜都在看動漫。',
            bopomofo: 'ㄉㄤ ㄨㄛˇ ㄓㄨˋ ㄧˋ ㄉㄠˋ ㄕˊ, ㄨㄛˇ ㄓㄥˇ ㄧㄝˋ ㄉㄡ ㄗㄞˋ ㄎㄢˋ ㄉㄨㄥˋ ㄇㄢˋ.',
            pinyin: 'dang1 wo3 zhu4 yi4 dao4 shi2, wo3 zheng3 ye4 dou1 zai4 kan4 dong4 man4.',
            translation: '気が付いたら、 一晩中アニメを観ていました。',
            memo: ''
          },
          {
            word: '震動',
            sentence: '我的房子有一點舊, 所以家前面卡車通行的時候震動。',
            bopomofo: 'ㄨㄛˇ ㄉㄜ˙ ㄈㄤˊ ㄗ˙ ㄧㄡˇ ㄧˋ ㄉㄧㄢˇ ㄐㄧㄡˋ, ㄙㄨㄛˇ ㄧˇ ㄐㄧㄚ ㄑㄧㄢˊ ㄇㄧㄢˋ ㄎㄚˇ ㄔㄜ ㄊㄨㄥ ㄒㄧㄥˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄓㄣˋ ㄉㄨㄥˋ.',
            pinyin: 'wo3 de fang2 zi you3 yi1 dian3 jiu4, suo3 yi3 jia1 qian2 mian4 ka3 che1 tong1 xing2 de shi2 hou4 zhen4 dong4.',
            translation: '私の家は少し古いので、 家の前のトラックが通り過ぎると振動します。',
            memo: ''
          },
          {
            word: '漫畫',
            sentence: '最近漫畫的內容很複雜了, 我得讀兩三遍才可以理解。',
            bopomofo: 'ㄗㄨㄟˋ ㄐㄧㄣˋ ㄇㄢˋ ㄏㄨㄚˋ ㄉㄜ˙ ㄋㄟˋ ㄖㄨㄥˊ ㄏㄣˇ ㄈㄨˋ ㄗㄚˊ ㄌㄜ˙, ㄨㄛˇ ㄉㄜˊ ㄉㄨˊ ㄌㄧㄤˇ ㄙㄢ ㄅㄧㄢˋ ㄘㄞˊ ㄎㄜˇ ㄧˇ ㄌㄧˇ ㄐㄧㄝˇ.',
            pinyin: 'zui4 jin4 man4 hua4 de nei4 rong2 hen3 fu4 za2 le, wo3 de du2 liang3 san1 bian4 cai2 ke3 yi3 li3 jie3.',
            translation: '最近の漫画はとても複雑なので、 理解するためには2、3回読まなくてはいけません。',
            memo: ''
          },
          {
            word: '内容',
            sentence: '他完全沒了解剛剛看了電影的内容， 但是裝作了解了。',
            bopomofo: 'ㄊㄚ ㄨㄢˊ ㄑㄩㄢˊ ㄇㄟˊ ㄌㄧㄠˇ ㄐㄧㄝˇ ㄍㄤ ㄍㄤ ㄎㄢˋ ㄌㄜ˙ ㄉㄧㄢˋ ㄧㄥˇ ㄉㄜ˙ ㄋㄟˋ ㄖㄨㄥˊ, ㄉㄢˋ ㄕˋ ㄓㄨㄤ ㄗㄨㄛˋ ㄌㄧㄠˇ ㄐㄧㄝˇ ㄌㄜ˙.',
            pinyin: 'ta1 wan2 quan2 mei2 liao3 jie3 gang1 gang1 kan4 le dian4 ying3 de nei4 rong2, dan4 shi4 zhuang1 zuo4 liao3 jie3 le.',
            translation: '彼はたった今観た映画の内容を全く理解していないのですが、 分かったフリをしています。',
            memo: ''
          },
          {
            word: '色情',
            sentence: '家人一起看電視的時候如果有色情的場景, 會有真尷尬的氣氛。',
            bopomofo: 'ㄐㄧㄚ ㄖㄣˊ ㄧ ㄑㄧˇ ㄎㄢˋ ㄉㄧㄢˋ ㄕˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄖㄨˊ ㄍㄨㄛˇ ㄧㄡˇ ㄙㄜˋ ㄑㄧㄥˊ ㄉㄜ˙ ㄔㄤˇ ㄐㄧㄥˇ, ㄏㄨㄟˋ ㄧㄡˇ ㄓㄣ ㄍㄢ ㄍㄚˋ ㄉㄜ˙ ㄑㄧˋ ㄈㄣ.',
            pinyin: 'jia1 ren2 yi1 qi3 kan4 dian4 shi4 de shi2 hou4 ru2 guo3 you3 se4 qing2 de chang3 jing3, hui4 you3 zhen1 gan1 ga4 de qi4 fen1.',
            translation: '家族で映画を観ている時にセクシーなシーンが出てくると、 とても気まずくなります。',
            memo: ''
          },
          {
            word: '放鬆',
            sentence: '當我想放鬆時， 我總之喝啤酒。',
            bopomofo: 'ㄉㄤ ㄨㄛˇ ㄒㄧㄤˇ ㄈㄤˋ ㄙㄨㄥ ㄕˊ, ㄨㄛˇ ㄗㄨㄥˇ ㄓ ㄏㄜ ㄆㄧˊ ㄐㄧㄡˇ.',
            pinyin: 'dang1 wo3 xiang3 fang4 song1 shi2, wo3 zong3 zhi1 he1 pi2 jiu3.',
            translation: 'リラックスしたい時は、 とりあえずビールを飲みます。',
            memo: ''
          },
          {
            word: '心情',
            sentence: '他似乎心情很好， 正在哼歌。',
            bopomofo: 'ㄊㄚ ㄙˋ ㄏㄨ ㄒㄧㄣ ㄑㄧㄥˊ ㄏㄣˇ ㄏㄠˇ, ㄓㄥˋ ㄗㄞˋ ㄏㄥ ㄍㄜ.',
            pinyin: 'ta1 si4 hu1 xin1 qing2 hen3 hao3, zheng4 zai4 heng1 ge1.',
            translation: '彼は機嫌がいいようで、 フンフン鼻歌を歌っています。',
            memo: ''
          },
          {
            word: '五月天',
            sentence: '如果你常看電視, 一定在廣告看過五月天。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄔㄤˊ ㄎㄢˋ ㄉㄧㄢˋ ㄕˋ, ㄧ ㄉㄧㄥˋ ㄗㄞˋ ㄍㄨㄤˇ ㄍㄠˋ ㄎㄢˋ ㄍㄨㄛˋ ㄨˇ ㄩㄝˋ ㄊㄧㄢ.',
            pinyin: 'ru2 guo3 ni3 chang2 kan4 dian4 shi4, yi1 ding4 zai4 guang3 gao4 kan4 guo4 wu3 yue4 tian1.',
            translation: 'よくテレビを見るなら、 CMで五月天を見たことがある筈です。',
            memo: ''
          },
          {
            word: '算了',
            sentence: '聽到什麼? 算了, 我並沒說到老闆的壞話。',
            bopomofo: 'ㄊㄧㄥ ㄉㄠˋ ㄕㄣˊ ㄇㄜ˙? ㄙㄨㄢˋ ㄌㄜ˙, ㄨㄛˇ ㄅㄧㄥˋ ㄇㄟˊ ㄕㄨㄛ ㄉㄠˋ ㄌㄠˇ ㄅㄢˇ ㄉㄜ˙ ㄏㄨㄞˋ ㄏㄨㄚˋ.',
            pinyin: 'ting1 dao4 shen2 me? suan4 le, wo3 bing4 mei2 shuo1 dao4 lao3 ban3 de huai4 hua4.',
            translation: '何か聞こえましたか? 忘れて下さい、 私は上司の悪口なんか言っていませんよ。',
            memo: ''
          },
          {
            word: '受歡迎',
            sentence: '最近受歡迎的廚具可以一邊煮一邊烤。',
            bopomofo: 'ㄗㄨㄟˋ ㄐㄧㄣˋ ㄕㄡˋ ㄏㄨㄢ ㄧㄥˊ ㄉㄜ˙ ㄔㄨˊ ㄐㄩˋ ㄎㄜˇ ㄧˇ ㄧˋ ㄅㄧㄢ ㄓㄨˇ ㄧˋ ㄅㄧㄢ ㄎㄠˇ.',
            pinyin: 'zui4 jin4 shou4 huan1 ying2 de chu2 ju4 ke3 yi3 yi4 bian1 zhu3 yi4 bian1 kao3.',
            translation: '最近人気の調理器具は、 一方で煮ながら一方で焼くことができます。',
            memo: ''
          },
          {
            word: '擠滿',
            sentence: '因為閒逛很適合的季節, 老街擠滿了遊客。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄒㄧㄢˊ ㄍㄨㄤˋ ㄏㄣˇ ㄕˋ ㄏㄜˊ ㄉㄜ˙ ㄐㄧˋ ㄐㄧㄝˊ, ㄌㄠˇ ㄐㄧㄝ ㄐㄧˇ ㄇㄢˇ ㄌㄜ˙ ㄧㄡˊ ㄎㄜˋ.',
            pinyin: 'yin1 wei4 xian2 guang4 hen3 shi4 he2 de ji4 jie2, lao3 jie1 ji3 man3 le you2 ke4.',
            translation: '街歩きにぴったりの季節なので、 旧市街は観光客でいっぱいです。',
            memo: ''
          },
          {
            word: '租書店',
            sentence: '我去租書店, 租了通常不會閱讀那種的書。',
            bopomofo: 'ㄨㄛˇ ㄑㄩˋ ㄗㄨ ㄕㄨ ㄉㄧㄢˋ, ㄗㄨ ㄌㄜ˙ ㄊㄨㄥ ㄔㄤˊ ㄅㄨˊ ㄏㄨㄟˋ ㄩㄝˋ ㄉㄨˊ ㄋㄚˋ ㄓㄨㄥˇ ㄉㄜ˙ ㄕㄨ.',
            pinyin: 'wo3 qu4 zu1 shu1 dian4, zu1 le tong1 chang2 bu2 hui4 yue4 du2 na4 zhong3 de shu1.',
            translation: '貸本屋に行って、 普段読まないタイプの本を借りてきました。',
            memo: ''
          },
          {
            word: '平板電腦',
            sentence: '我選擇平板電腦的時候最重要的一點是怎麼輕。',
            bopomofo: 'ㄨㄛˇ ㄒㄩㄢˇ ㄗㄜˊ ㄆㄧㄥˊ ㄅㄢˇ ㄉㄧㄢˋ ㄋㄠˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄗㄨㄟˋ ㄓㄨㄥˋ ㄧㄠˋ ㄉㄜ˙ ㄧ ㄉㄧㄢˇ ㄕˋ ㄗㄣˇ ㄇㄜ˙ ㄑㄧㄥ.',
            pinyin: 'wo3 xuan3 ze2 ping2 ban3 dian4 nao3 de shi2 hou4 zui4 zhong4 yao4 de yi1 dian3 shi4 zen3 me qing1.',
            translation: '私がタブレットを選ぶ時に一番大事なポイントは軽さです。',
            memo: ''
          },
          {
            word: '智慧型手機',
            sentence: '我的智慧型手機的屏幕壞了， 所以正在尋找一家可以修理的店。',
            bopomofo: 'ㄨㄛˇ ㄉㄜ˙ ㄓˋ ㄏㄨㄟˋ ㄒㄧㄥˊ ㄕㄡˇ ㄐㄧ ㄉㄜ˙ ㄆㄧㄥˊ ㄇㄨˋ ㄏㄨㄞˋ ㄌㄜ˙, ㄙㄨㄛˇ ㄧˇ ㄓㄥˋ ㄗㄞˋ ㄒㄩㄣˊ ㄓㄠˇ ㄧ ㄐㄧㄚ ㄎㄜˇ ㄧˇ ㄒㄧㄡ ㄌㄧˇ ㄉㄜ˙ ㄉㄧㄢˋ.',
            pinyin: 'wo3 de zhi4 hui4 xing2 shou3 ji1 de ping2 mu4 huai4 le, suo3 yi3 zheng4 zai4 xun2 zhao3 yi1 jia1 ke3 yi3 xiu1 li3 de dian4.',
            translation: 'スマホの画面が割れてしまったので、 修理できる店を探しています。',
            memo: ''
          },
          {
            word: '殺時間',
            sentence: '為了殺時間他開始喝了今天第三杯的咖啡。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄕㄚ ㄕˊ ㄐㄧㄢ ㄊㄚ ㄎㄞ ㄕˇ ㄏㄜ ㄌㄜ˙ ㄐㄧㄣ ㄊㄧㄢ ㄉㄧˋ ㄙㄢ ㄅㄟ ㄉㄜ˙ ㄎㄚ ㄈㄟ.',
            pinyin: 'wei4 le sha1 shi2 jian1 ta1 kai1 shi3 he1 le jin1 tian1 di4 san1 bei1 de ka1 fei1.',
            translation: '時間をつぶすために、 彼は今日3杯目のコーヒーを飲み始めました。',
            memo: ''
          },
          {
            word: '漫畫展',
            sentence: '在這附近舉行大型漫畫展, 今天車站很擠滿了。',
            bopomofo: 'ㄗㄞˋ ㄓㄜˋ ㄈㄨˋ ㄐㄧㄣˋ ㄐㄩˇ ㄒㄧㄥˊ ㄉㄚˋ ㄒㄧㄥˊ ㄇㄢˋ ㄏㄨㄚˋ ㄓㄢˇ, ㄐㄧㄣ ㄊㄧㄢ ㄔㄜ ㄓㄢˋ ㄏㄣˇ ㄐㄧˇ ㄇㄢˇ ㄌㄜ˙.',
            pinyin: 'zai4 zhe4 fu4 jin4 ju3 xing2 da4 xing2 man4 hua4 zhan3, jin1 tian1 che1 zhan4 hen3 ji3 man3 le.',
            translation: '近くで大規模な漫画展が開催されているので、 今日は駅が混雑しています。',
            memo: ''
          },
          {
            word: '來不及',
            sentence: '老師跟我們突然講今天下午會考試, 覺得來不及準備。',
            bopomofo: 'ㄌㄠˇ ㄕ ㄍㄣ ㄨㄛˇ ㄇㄣ˙ ㄊㄨ ㄖㄢˊ ㄐㄧㄤˇ ㄐㄧㄣ ㄊㄧㄢ ㄒㄧㄚˋ ㄨˇ ㄏㄨㄟˋ ㄎㄠˇ ㄕˋ, ㄐㄩㄝˊ ㄉㄜ˙ ㄌㄞˊ ㄅㄨˋ ㄐㄧˊ ㄓㄨㄣˇ ㄅㄟˋ.',
            pinyin: 'lao3 shi1 gen1 wo3 men tu1 ran2 jiang3 jin1 tian1 xia4 wu3 hui4 kao3 shi4, jue2 de lai2 bu4 ji2 zhun3 bei4.',
            translation: '今日の午後にテストをすると先生が突然言い出したので、 準備する時間は無いと思います。',
            memo: ''
          },
          {
            word: '撞衫',
            sentence: '在捷運我跟坐在我旁邊的人的恤衫撞衫, 有很尷尬的感覺。',
            bopomofo: 'ㄗㄞˋ ㄐㄧㄝˊ ㄩㄣˋ ㄨㄛˇ ㄍㄣ ㄗㄨㄛˋ ㄗㄞˋ ㄨㄛˇ ㄆㄤˊ ㄅㄧㄢ ㄉㄜ˙ ㄖㄣˊ ㄉㄜ˙ ㄒㄩˋ ㄕㄢ ㄓㄨㄤˋ ㄕㄢ, ㄧㄡˇ ㄏㄣˇ ㄍㄢ ㄍㄚˋ ㄉㄜ˙ ㄍㄢˇ ㄐㄩㄝˊ.',
            pinyin: 'zai4 jie2 yun4 wo3 gen1 zuo4 zai4 wo3 pang2 bian1 de ren2 de xu4 shan1 zhuang4 shan1, you3 hen3 gan1 ga4 de gan3 jue2.',
            translation: '電車で隣に座っている人とTシャツがかぶってしまって、 とても気まずいです。',
            memo: ''
          },
          {
            word: '它',
            sentence: '她很討厭恐怖電影, 我覺得你應該不要把它給她看。',
            bopomofo: 'ㄊㄚ ㄏㄣˇ ㄊㄠˇ ㄧㄢˋ ㄎㄨㄥˇ ㄅㄨˋ ㄉㄧㄢˋ ㄧㄥˇ, ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄋㄧˇ ㄧㄥ ㄍㄞ ㄅㄨˊ ㄧㄠˋ ㄅㄚˇ ㄊㄚ ㄍㄟˇ ㄊㄚ ㄎㄢˋ.',
            pinyin: 'ta1 hen3 tao3 yan4 kong3 bu4 dian4 ying3, wo3 jue2 de ni3 ying1 gai1 bu2 yao4 ba3 ta1 gei3 ta1 kan4.',
            translation: '彼女はホラー映画が大嫌いなので、 それは彼女に見せない方がいいと思います。',
            memo: ''
          },
          {
            word: '塞',
            sentence: '因為我們要去野餐, 她在背包裡正在塞很多零食。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄨㄛˇ ㄇㄣ˙ ㄧㄠˋ ㄑㄩˋ ㄧㄝˇ ㄘㄢ, ㄊㄚ ㄗㄞˋ ㄅㄟ ㄅㄠ ㄌㄧˇ ㄓㄥˋ ㄗㄞˋ ㄙㄞ ㄏㄣˇ ㄉㄨㄛ ㄌㄧㄥˊ ㄕˊ.',
            pinyin: 'yin1 wei4 wo3 men yao4 qu4 ye3 can1, ta1 zai4 bei1 bao1 li3 zheng4 zai4 sai1 hen3 duo1 ling2 shi2.',
            translation: 'ピクニックに行くので、 彼女はお菓子をたくさんバックパックに詰め込んでいます。',
            memo: ''
          },
          {
            word: '當季',
            sentence: '用當季的食材的料理最好吃。',
            bopomofo: 'ㄩㄥˋ ㄉㄤ ㄐㄧˋ ㄉㄜ˙ ㄕˊ ㄘㄞˊ ㄉㄜ˙ ㄌㄧㄠˋ ㄌㄧˇ ㄗㄨㄟˋ ㄏㄠˇ ㄔ.',
            pinyin: 'yong4 dang1 ji4 de shi2 cai2 de liao4 li3 zui4 hao3 chi1.',
            translation: '旬の食材を使った料理が一番おいしいです。',
            memo: ''
          },
          {
            word: '款式',
            sentence: '我一年比一年不知道現代款式的服裝是什麼。',
            bopomofo: 'ㄨㄛˇ ㄧ ㄋㄧㄢˊ ㄅㄧˇ ㄧ ㄋㄧㄢˊ ㄅㄨˋ ㄓ ㄉㄠˋ ㄒㄧㄢˋ ㄉㄞˋ ㄎㄨㄢˇ ㄕˋ ㄉㄜ˙ ㄈㄨˊ ㄓㄨㄤ ㄕˋ ㄕㄣˊ ㄇㄜ˙.',
            pinyin: 'wo3 yi1 nian2 bi3 yi1 nian2 bu4 zhi1 dao4 xian4 dai4 kuan3 shi4 de fu2 zhuang1 shi4 shen2 me.',
            translation: '今時の服装というものが何なのか年々分からなくなります。',
            memo: ''
          },
          {
            word: '連續劇',
            sentence: '你看連續劇一集後, 就只好看到最後一集。',
            bopomofo: 'ㄋㄧˇ ㄎㄢˋ ㄌㄧㄢˊ ㄒㄩˋ ㄐㄩˋ ㄧ ㄐㄧˊ ㄏㄡˋ, ㄐㄧㄡˋ ㄓˇ ㄏㄠˇ ㄎㄢˋ ㄉㄠˋ ㄗㄨㄟˋ ㄏㄡˋ ㄧ ㄐㄧˊ.',
            pinyin: 'ni3 kan4 lian2 xu4 ju4 yi1 ji2 hou4, jiu4 zhi3 hao3 kan4 dao4 zui4 hou4 yi1 ji2.',
            translation: '連続ドラマは一話観てしまうと、 最終回まで観ずにはいられなくなります。',
            memo: ''
          },
          {
            word: '主角',
            sentence: '我們家的主角無疑是貓。',
            bopomofo: 'ㄨㄛˇ ㄇㄣ˙ ㄐㄧㄚ ㄉㄜ˙ ㄓㄨˇ ㄐㄧㄠˇ ㄨˊ ㄧˊ ㄕˋ ㄇㄠ.',
            pinyin: 'wo3 men jia1 de zhu3 jiao3 wu2 yi2 shi4 mao1.',
            translation: '我が家の主役はまぎれもなく猫です。',
            memo: ''
          },
          {
            word: '甜美',
            sentence: '所有的主人都認為他們的寵物是最甜美的。',
            bopomofo: 'ㄙㄨㄛˇ ㄧㄡˇ ㄉㄜ˙ ㄓㄨˇ ㄖㄣˊ ㄉㄡ ㄖㄣˋ ㄨㄟˊ ㄊㄚ ㄇㄣ˙ ㄉㄜ˙ ㄔㄨㄥˇ ㄨˋ ㄕˋ ㄗㄨㄟˋ ㄊㄧㄢˊ ㄇㄟˇ ㄉㄜ˙.',
            pinyin: 'suo3 you3 de zhu3 ren2 dou1 ren4 wei2 ta1 men de chong3 wu4 shi4 zui4 tian2 mei3 de.',
            translation: '飼い主はみんな、 自分のペットが一番可愛いと思っています。',
            memo: ''
          },
          {
            word: '寄',
            sentence: '出國旅行的時候， 我從當地給父母寄信。',
            bopomofo: 'ㄔㄨ ㄍㄨㄛˊ ㄌㄩˇ ㄒㄧㄥˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄨㄛˇ ㄘㄨㄥˊ ㄉㄤ ㄉㄧˋ ㄍㄟˇ ㄈㄨˋ ㄇㄨˇ ㄐㄧˋ ㄒㄧㄣˋ.',
            pinyin: 'chu1 guo2 lu3 xing2 de shi2 hou4, wo3 cong2 dang1 di4 gei3 fu4 mu3 ji4 xin4.',
            translation: '海外旅行に行った時は、 現地から両親に手紙を出します。',
            memo: ''
          },
          {
            word: '居然',
            sentence: '我沒想到塑膠居然是石油製成的。',
            bopomofo: 'ㄨㄛˇ ㄇㄟˊ ㄒㄧㄤˇ ㄉㄠˋ ㄙㄨˋ ㄐㄧㄠ ㄐㄩ ㄖㄢˊ ㄕˋ ㄕˊ ㄧㄡˊ ㄓˋ ㄔㄥˊ ㄉㄜ˙.',
            pinyin: 'wo3 mei2 xiang3 dao4 su4 jiao1 ju1 ran2 shi4 shi2 you2 zhi4 cheng2 de.',
            translation: 'プラスチックが石油でできているとは思ってもいませんでした。',
            memo: ''
          },
          {
            word: '害',
            sentence: '他最喜歡的偶像的婚姻害他喝一頓悶酒。',
            bopomofo: 'ㄊㄚ ㄗㄨㄟˋ ㄒㄧˇ ㄏㄨㄢ ㄉㄜ˙ ㄡˇ ㄒㄧㄤˋ ㄉㄜ˙ ㄏㄨㄣ ㄧㄣ ㄏㄞˋ ㄊㄚ ㄏㄜ ㄧ ㄉㄨㄣˋ ㄇㄣˋ ㄐㄧㄡˇ.',
            pinyin: 'ta1 zui4 xi3 huan1 de ou3 xiang4 de hun1 yin1 hai4 ta1 he1 yi1 dun4 men4 jiu3.',
            translation: 'お気に入りのアイドルが結婚したので、 彼はやけ酒をしました。',
            memo: ''
          },
          {
            word: '既然',
            sentence: '既然開啤酒, 你一定得把它喝完。',
            bopomofo: 'ㄐㄧˋ ㄖㄢˊ ㄎㄞ ㄆㄧˊ ㄐㄧㄡˇ, ㄋㄧˇ ㄧ ㄉㄧㄥˋ ㄉㄟˇ ㄅㄚˇ ㄊㄚ ㄏㄜ ㄨㄢˊ.',
            pinyin: 'ji4 ran2 kai1 pi2 jiu3, ni3 yi1 ding4 dei3 ba3 ta1 he1 wan2.',
            translation: 'ビールを開けたからには、 飲み干さなくてはいけません。',
            memo: ''
          },
          {
            word: '服裝',
            sentence: '他總是穿著浮華的服裝， 所以從遠的地方可以識別他。',
            bopomofo: 'ㄊㄚ ㄗㄨㄥˇ ㄕˋ ㄔㄨㄢ ㄓㄜ˙ ㄈㄨˊ ㄏㄨㄚˊ ㄉㄜ˙ ㄈㄨˊ ㄓㄨㄤ, ㄙㄨㄛˇ ㄧˇ ㄘㄨㄥˊ ㄩㄢˇ ㄉㄜ˙ ㄉㄧˋ ㄈㄤ ㄎㄜˇ ㄧˇ ㄕˊ ㄅㄧㄝˊ ㄊㄚ.',
            pinyin: 'ta1 zong3 shi4 chuan1 zhe fu2 hua2 de fu2 zhuang1, suo3 yi3 cong2 yuan3 de di4 fang1 ke3 yi3 shi2 bie2 ta1.',
            translation: '彼はいつもとても派手な服を着ているので、 遠くからでも彼だと分かります。',
            memo: ''
          },
          {
            word: '媒體',
            sentence: '根據你使用什麼媒體， 廣告的形式會變化。',
            bopomofo: 'ㄍㄣ ㄐㄩˋ ㄋㄧˇ ㄕˇ ㄩㄥˋ ㄕㄣˊ ㄇㄜ˙ ㄇㄟˊ ㄊㄧˇ, ㄍㄨㄤˇ ㄍㄠˋ ㄉㄜ˙ ㄒㄧㄥˊ ㄕˋ ㄏㄨㄟˋ ㄅㄧㄢˋ ㄏㄨㄚˋ.',
            pinyin: 'gen1 ju4 ni3 shi3 yong4 shen2 me mei2 ti3, guang3 gao4 de xing2 shi4 hui4 bian4 hua4.',
            translation: 'どんなメディアを使うかによって、 広告の形式は変わってきます。',
            memo: ''
          },
          {
            word: '方式',
            sentence: '我最近不能集中精力， 所以正在考慮改變學習方式。',
            bopomofo: 'ㄨㄛˇ ㄗㄨㄟˋ ㄐㄧㄣˋ ㄅㄨˋ ㄋㄥˊ ㄐㄧˊ ㄓㄨㄥ ㄐㄧㄥ ㄌㄧˋ, ㄙㄨㄛˇ ㄧˇ ㄓㄥˋ ㄗㄞˋ ㄎㄠˇ ㄌㄩˋ ㄍㄞˇ ㄅㄧㄢˋ ㄒㄩㄝˊ ㄒㄧˊ ㄈㄤ ㄕˋ.',
            pinyin: 'wo3 zui4 jin4 bu4 neng2 ji2 zhong1 jing1 li4, suo3 yi3 zheng4 zai4 kao3 lu4 gai3 bian4 xue2 xi2 fang1 shi4.',
            translation: '最近あまり集中できないので、 勉強方式を変えてみようかと考えています。',
            memo: ''
          },
          {
            word: '吸引',
            sentence: '他的褲子的屁股上有一個大洞， 在吸引路人的注意。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄎㄨˋ ㄗ˙ ㄉㄜ˙ ㄆㄧˋ ㄍㄨˇ ㄕㄤˋ ㄧㄡˇ ㄧ ㄍㄜˋ ㄉㄚˋ ㄉㄨㄥˋ, ㄗㄞˋ ㄒㄧ ㄧㄣˇ ㄌㄨˋ ㄖㄣˊ ㄉㄜ˙ ㄓㄨˋ ㄧˋ.',
            pinyin: 'ta1 de ku4 zi de pi4 gu3 shang4 you3 yi1 ge4 da4 dong4, zai4 xi1 yin3 lu4 ren2 de zhu4 yi4.',
            translation: '彼のズボンのお尻の部分には大きな穴が空いていて、 通行人の注目を集めています。',
            memo: ''
          },
          {
            word: '避免',
            sentence: '為了避免添麻煩， 我不借錢或貸款。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄅㄧˋ ㄇㄧㄢˇ ㄊㄧㄢ ㄇㄚˊ ㄈㄢˊ, ㄨㄛˇ ㄅㄨˊ ㄐㄧㄝˋ ㄑㄧㄢˊ ㄏㄨㄛˋ ㄉㄞˋ ㄎㄨㄢˇ.',
            pinyin: 'wei4 le bi4 mian3 tian1 ma2 fan2, wo3 bu2 jie4 qian2 huo4 dai4 kuan3.',
            translation: 'トラブルを避けるために、 お金の貸し借りはしません。',
            memo: ''
          },
          {
            word: '包包',
            sentence: '從包包我發現了我不知道什麼時候放進了的麵包。',
            bopomofo: 'ㄘㄨㄥˊ ㄅㄠ ㄅㄠ ㄨㄛˇ ㄈㄚ ㄒㄧㄢˋ ㄌㄜ˙ ㄨㄛˇ ㄅㄨˋ ㄓ ㄉㄠˋ ㄕㄣˊ ㄇㄜ˙ ㄕˊ ㄏㄡˋ ㄈㄤˋ ㄐㄧㄣˋ ㄌㄜ˙ ㄉㄜ˙ ㄇㄧㄢˋ ㄅㄠ.',
            pinyin: 'cong2 bao1 bao1 wo3 fa1 xian4 le wo3 bu4 zhi1 dao4 shen2 me shi2 hou4 fang4 jin4 le de mian4 bao1.',
            translation: 'バッグの中から、 いつものか分からないパンが出てきました。',
            memo: ''
          },
          {
            word: '商人',
            sentence: '那個商人訪問著每家房子，試試賣新發售的電器用品。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄕㄤ ㄖㄣˊ ㄈㄤˇ ㄨㄣˋ ㄓㄜ˙ ㄇㄟˇ ㄐㄧㄚ ㄈㄤˊ ㄗ˙, ㄕˋ ㄕˋ ㄇㄞˋ ㄒㄧㄣ ㄈㄚ ㄕㄡˋ ㄉㄜ˙ ㄉㄧㄢˋ ㄑㄧˋ ㄩㄥˋ ㄆㄧㄣˇ.',
            pinyin: 'na4 ge4 shang1 ren2 fang3 wen4 zhe mei3 jia1 fang2 zi, shi4 shi4 mai4 xin1 fa1 shou4 de dian4 qi4 yong4 pin3.',
            translation: 'あのビジネスマンは一軒一軒家を訪ねて、 新発売の電気製品を売ろうとしています。',
            memo: ''
          },
          {
            word: '產品',
            sentence: '如果有可以把土豆皮自動剝的產品， 你會購買嗎?',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄧㄡˇ ㄎㄜˇ ㄧˇ ㄅㄚˇ ㄊㄨˇ ㄉㄡˋ ㄆㄧˊ ㄗˋ ㄉㄨㄥˋ ㄅㄛ ㄉㄜ˙ ㄔㄢˇ ㄆㄧㄣˇ, ㄋㄧˇ ㄏㄨㄟˋ ㄍㄡˋ ㄇㄞˇ ㄇㄚ˙?',
            pinyin: 'ru2 guo3 you3 ke3 yi3 ba3 tu3 dou4 pi2 zi4 dong4 bo1 de chan3 pin3, ni3 hui4 gou4 mai3 ma?',
            translation: 'もしジャガイモの皮を自動的に剥いてくれる製品があったら、 買いますか?',
            memo: ''
          },
          {
            word: '電子',
            sentence: '那家電子元件製造商今年達成了有史以來的最高銷售。',
            bopomofo: 'ㄋㄚˋ ㄐㄧㄚ ㄉㄧㄢˋ ㄗˇ ㄩㄢˊ ㄐㄧㄢˋ ㄓˋ ㄗㄠˋ ㄕㄤ ㄐㄧㄣ ㄋㄧㄢˊ ㄉㄚˊ ㄔㄥˊ ㄌㄜ˙ ㄧㄡˇ ㄕˇ ㄧˇ ㄌㄞˊ ㄉㄜ˙ ㄗㄨㄟˋ ㄍㄠ ㄒㄧㄠ ㄕㄡˋ.',
            pinyin: 'na4 jia1 dian4 zi3 yuan2 jian4 zhi4 zao4 shang1 jin1 nian2 da2 cheng2 le you3 shi3 yi3 lai2 de zui4 gao1 xiao1 shou4.',
            translation: 'その電子部品メーカーは今年、 過去最高の売上を達成しました。',
            memo: ''
          },
          {
            word: '市場',
            sentence: '調查了市場的趨勢， 我發現了年輕人的消費量正在下降。',
            bopomofo: 'ㄉㄧㄠˋ ㄔㄚˊ ㄌㄜ˙ ㄕˋ ㄔㄤˇ ㄉㄜ˙ ㄑㄩ ㄕˋ, ㄨㄛˇ ㄈㄚ ㄒㄧㄢˋ ㄌㄜ˙ ㄋㄧㄢˊ ㄑㄧㄥ ㄖㄣˊ ㄉㄜ˙ ㄒㄧㄠ ㄈㄟˋ ㄌㄧㄤˋ ㄓㄥˋ ㄗㄞˋ ㄒㄧㄚˋ ㄐㄧㄤˋ.',
            pinyin: 'diao4 cha2 le shi4 chang3 de qu1 shi4, wo3 fa1 xian4 le nian2 qing1 ren2 de xiao1 fei4 liang4 zheng4 zai4 xia4 jiang4.',
            translation: '市場の動向を調査したところ、 若い人の消費が落ち込んでいる事が分かりました。',
            memo: ''
          },
          {
            word: '新型',
            sentence: '聽說最近的新型髮型是染成右側和左側不同的顏色。',
            bopomofo: 'ㄊㄧㄥ ㄕㄨㄛ ㄗㄨㄟˋ ㄐㄧㄣˋ ㄉㄜ˙ ㄒㄧㄣ ㄒㄧㄥˊ ㄈㄚˋ ㄒㄧㄥˊ ㄕˋ ㄖㄢˇ ㄔㄥˊ ㄧㄡˋ ㄘㄜˋ ㄏㄢˇ ㄗㄨㄛˇ ㄘㄜˋ ㄅㄨˋ ㄊㄨㄥˊ ㄉㄜ˙ ㄧㄢˊ ㄙㄜˋ.',
            pinyin: 'ting1 shuo1 zui4 jin4 de xin1 xing2 fa4 xing2 shi4 ran3 cheng2 you4 ce4 han4 zuo3 ce4 bu4 tong2 de yan2 se4.',
            translation: '髪を右側と左側で違う色に染めるのが、 最近の新しいスタイルだそうです。',
            memo: ''
          },
          {
            word: '落伍',
            sentence: '女兒告訴我我最近學到的新單詞已經落伍了， 我感到震驚。',
            bopomofo: 'ㄋㄩˇ ㄦˊ ㄍㄠˋ ㄙㄨˋ ㄨㄛˇ ㄨㄛˇ ㄗㄨㄟˋ ㄐㄧㄣˋ ㄒㄩㄝˊ ㄉㄠˋ ㄉㄜ˙ ㄒㄧㄣ ㄉㄢ ㄘˊ ㄧˇ ㄐㄧㄥ ㄌㄨㄛˋ ㄨˇ ㄌㄜ˙, ㄨㄛˇ ㄍㄢˇ ㄉㄠˋ ㄓㄣˋ ㄐㄧㄥ.',
            pinyin: 'nu3 er2 gao4 su4 wo3 wo3 zui4 jin4 xue2 dao4 de xin1 dan1 ci2 yi3 jing1 luo4 wu3 le, wo3 gan3 dao4 zhen4 jing1.',
            translation: '最近新しく覚えた言葉が既に時代遅れだと娘に言われて、 愕然としています。',
            memo: ''
          },
          {
            word: '知音',
            sentence: '他們從小就一直是最好的知音， 就像兄弟一樣。',
            bopomofo: 'ㄊㄚ ㄇㄣ˙ ㄘㄨㄥˊ ㄒㄧㄠˇ ㄐㄧㄡˋ ㄧ ㄓˊ ㄕˋ ㄗㄨㄟˋ ㄏㄠˇ ㄉㄜ˙ ㄓ ㄧㄣ, ㄐㄧㄡˋ ㄒㄧㄤˋ ㄒㄩㄥ ㄉㄧˋ ㄧˊ ㄧㄤˋ.',
            pinyin: 'ta1 men cong2 xiao3 jiu4 yi1 zhi2 shi4 zui4 hao3 de zhi1 yin1, jiu4 xiang4 xiong1 di4 yi1 yang4.',
            translation: '彼らは子どもの頃からの大親友で、 まるで兄弟のようです。',
            memo: ''
          },
          {
            word: '想像',
            sentence: '請你想像胖乎乎的貓的肚子， 你是不是感到幸福?',
            bopomofo: 'ㄑㄧㄥˇ ㄋㄧˇ ㄒㄧㄤˇ ㄒㄧㄤˋ ㄆㄤˋ ㄏㄨ ㄏㄨ ㄉㄜ˙ ㄇㄠ ㄉㄜ˙ ㄉㄨˇ ㄗ˙, ㄋㄧˇ ㄕˋ ㄅㄨˊ ㄕˋ ㄍㄢˇ ㄉㄠˋ ㄒㄧㄥˋ ㄈㄨˊ?',
            pinyin: 'qing3 ni3 xiang3 xiang4 pang4 hu1 hu1 de mao1 de du4 zi, ni3 shi4 bu2 shi4 gan3 dao4 xing4 fu2?',
            translation: '丸々とした猫のお腹を想像してみて下さい、 幸せな気分になりませんか?',
            memo: ''
          },
          {
            word: '喇叭褲',
            sentence: '穿喇叭褲讓腿看起來很長， 我相當喜歡。',
            bopomofo: 'ㄔㄨㄢ ㄌㄚˇ ㄅㄚ ㄎㄨˋ ㄖㄤˋ ㄊㄨㄟˇ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄏㄣˇ ㄔㄤˊ, ㄨㄛˇ ㄒㄧㄤ ㄉㄤ ㄒㄧˇ ㄏㄨㄢ.',
            pinyin: 'chuan1 la3 ba1 ku4 rang4 tui3 kan4 qi3 lai2 hen3 chang2, wo3 xiang1 dang1 xi3 huan1.',
            translation: 'ベルボトムを履くと足が長く見えるので、 私は結構好きです。',
            memo: ''
          },
          {
            word: '印象',
            sentence: '穿淺色衣服會給人柔和的印象。',
            bopomofo: 'ㄔㄨㄢ ㄑㄧㄢˇ ㄙㄜˋ ㄧ ㄈㄨˊ ㄏㄨㄟˋ ㄍㄟˇ ㄖㄣˊ ㄖㄡˊ ㄏㄜˊ ㄉㄜ˙ ㄧㄣˋ ㄒㄧㄤˋ.',
            pinyin: 'chuan1 qian3 se4 yi1 fu2 hui4 gei3 ren2 rou2 he2 de yin4 xiang4.',
            translation: '淡い色の服を着ると、 優しい印象を与える事ができます。',
            memo: ''
          },
          {
            word: '遊戲',
            sentence: '我一邊喝酒一邊玩遊戲的時候肯定會輸。',
            bopomofo: 'ㄨㄛˇ ㄧˋ ㄅㄧㄢ ㄏㄜ ㄐㄧㄡˇ ㄧˋ ㄅㄧㄢ ㄨㄢˊ ㄧㄡˊ ㄒㄧˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄎㄣˇ ㄉㄧㄥˋ ㄏㄨㄟˋ ㄕㄨ.',
            pinyin: 'wo3 yi4 bian1 he1 jiu3 yi4 bian1 wan2 you2 xi4 de shi2 hou4 ken3 ding4 hui4 shu1.',
            translation: '飲みながらゲームをすると絶対負けます。',
            memo: ''
          },
          {
            word: '化妝',
            sentence: '化妝是否做得好是取決於當天的運氣。',
            bopomofo: 'ㄏㄨㄚˋ ㄓㄨㄤ ㄕˋ ㄈㄡˇ ㄗㄨㄛˋ ㄉㄜ˙ ㄏㄠˇ ㄕˋ ㄑㄩˇ ㄐㄩㄝˊ ㄩˊ ㄉㄤˋ ㄊㄧㄢ ㄉㄜ˙ ㄩㄣˋ ㄑㄧˋ.',
            pinyin: 'hua4 zhuang1 shi4 fou3 zuo4 de hao3 shi4 qu3 jue2 yu2 dang4 tian1 de yun4 qi4.',
            translation: '化粧が上手くいくかどうかは、 その日の運次第です。',
            memo: ''
          },
          {
            word: '一模一樣',
            sentence: '她的女兒的臉跟她的年輕的時候一模一樣。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄋㄩˇ ㄦˊ ㄉㄜ˙ ㄌㄧㄢˇ ㄍㄣ ㄊㄚ ㄉㄜ˙ ㄋㄧㄢˊ ㄑㄧㄥ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄧˋ ㄇㄛˊ ㄧˊ ㄧㄤˋ.',
            pinyin: 'ta1 de nu3 er2 de lian3 gen1 ta1 de nian2 qing1 de shi2 hou4 yi4 mo2 yi2 yang4.',
            translation: '彼女の娘の顔は彼女が若い頃と瓜二つです。',
            memo: ''
          },
          {
            word: '淺蓝色',
            sentence: '在淺藍色的天空一些雲也沒有。',
            bopomofo: 'ㄗㄞˋ ㄑㄧㄢˇ ㄌㄢˊ ㄙㄜˋ ㄉㄜ˙ ㄊㄧㄢ ㄎㄨㄥ ㄧ ㄒㄧㄝ ㄩㄣˊ ㄧㄝˇ ㄇㄟˊ ㄧㄡˇ.',
            pinyin: 'zai4 qian3 lan2 se4 de tian1 kong1 yi1 xie1 yun2 ye3 mei2 you3.',
            translation: '青い空には雲一つありません。',
            memo: ''
          },
          {
            word: '脫掉',
            sentence: '請把脫掉的外套掛在衣架上。',
            bopomofo: 'ㄑㄧㄥˇ ㄅㄚˇ ㄊㄨㄛ ㄉㄧㄠˋ ㄉㄜ˙ ㄨㄞˋ ㄊㄠˋ ㄍㄨㄚˋ ㄗㄞˋ ㄧ ㄐㄧㄚˋ ㄕㄤˋ.',
            pinyin: 'qing3 ba3 tuo1 diao4 de wai4 tao4 gua4 zai4 yi1 jia4 shang4.',
            translation: '脱いだ上着はハンガーにかけておいて下さい。',
            memo: ''
          },
          {
            word: '小題大作',
            sentence: '他說的是總是小題大作， 你不要認真接受。',
            bopomofo: 'ㄊㄚ ㄕㄨㄛ ㄉㄜ˙ ㄕˋ ㄗㄨㄥˇ ㄕˋ ㄒㄧㄠˇ ㄊㄧˊ ㄉㄚˋ ㄗㄨㄛˋ, ㄋㄧˇ ㄅㄨˊ ㄧㄠˋ ㄖㄣˋ ㄓㄣ ㄐㄧㄝ ㄕㄡˋ.',
            pinyin: 'ta1 shuo1 de shi4 zong3 shi4 xiao3 ti2 da4 zuo4, ni3 bu2 yao4 ren4 zhen1 jie1 shou4.',
            translation: '彼の言う事はいつも大袈裟なので、 真面目に受け取る必要はありません。',
            memo: ''
          },
          {
            word: '推出',
            sentence: '到這個月底公司要推出新商品，大家很累地工作。',
            bopomofo: 'ㄉㄠˋ ㄓㄜˋ ㄍㄜˋ ㄩㄝˋ ㄉㄧˇ ㄍㄨㄥ ㄙ ㄧㄠˋ ㄊㄨㄟ ㄔㄨ ㄒㄧㄣ ㄕㄤ ㄆㄧㄣˇ, ㄉㄚˋ ㄐㄧㄚ ㄏㄣˇ ㄌㄟˋ ㄉㄜ˙ ㄍㄨㄥ ㄗㄨㄛˋ.',
            pinyin: 'dao4 zhe4 ge4 yue4 di3 gong1 si1 yao4 tui1 chu1 xin1 shang1 pin3, da4 jia1 hen3 lei4 de gong1 zuo4.',
            translation: ' 今月末までに会社は新商品を売り出す予定なので、 みんなヘトヘトになりながら働いています。',
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
