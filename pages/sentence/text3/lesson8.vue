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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第8章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第8章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      // 単語数：84
      data: {
        title: '當代中文課程課3・第8章',
        words: [
          {
            word: '整夜',
            sentence: '學生們整夜玩了電腦遊戲，　所以他們都睡過頭了。',
            bopomofo: 'ㄒㄩㄝˊ ㄕㄥ ㄇㄣ˙ ㄓㄥˇ ㄧㄝˋ ㄨㄢˊ ㄌㄜ˙ ㄉㄧㄢˋ ㄋㄠˇ ㄧㄡˊ ㄒㄧˋ   ㄙㄨㄛˇ ㄧˇ ㄊㄚ ㄇㄣ˙ ㄉㄡ ㄕㄨㄟˋ ㄍㄨㄛˋ ㄊㄡˊ ㄌㄜ˙.',
            pinyin: 'xue2 sheng1 men2/men zheng3 ye4 wan2 le/liao3 dian4 nao3 you2 xi4 suo3 yi3 ta1 men2/men dou1 shui4 guo4 tou2 le/liao3.',
            translation: '学生たちは一晩中コンピュータゲームをしていたので、 全員寝坊しました。',
            memo: ''
          },
          {
            word: '開',
            sentence: '今天的溫度三十多度， 除了開冷氣沒有別的辦法。',
            bopomofo: 'ㄐㄧㄣ ㄊㄧㄢ ㄉㄜ˙ ㄨㄣ ㄉㄨˋ ㄙㄢ ㄕˊ ㄉㄨㄛ ㄉㄨˋ   ㄔㄨˊ ㄌㄜ˙ ㄎㄞ ㄌㄥˇ ㄑㄧˋ ㄇㄟˊ ㄧㄡˇ ㄅㄧㄝˊ ㄉㄜ˙ ㄅㄢˋ ㄈㄚˇ.',
            pinyin: 'jin1 tian1 de/di2/di4 wen1 du4 san1 shi2 duo1 du4 chu2 le/liao3 kai1 leng3 xi4 mei2/mo4 you3 bie2/bie4 de/di2/di4 ban4 fa3.',
            translation: '今日の気温は30度を超えているので、 冷房をつけるしかありません。',
            memo: ''
          },
          {
            word: '燈',
            sentence: '從門的縫隙照進來的燈光很明亮。',
            bopomofo: 'ㄘㄨㄥˊ ㄇㄣˊ ㄉㄜ˙ ㄈㄥˋ ㄒㄧˋ ㄓㄠˋ ㄐㄧㄣˋ ㄌㄞˊ ㄉㄜ˙ ㄉㄥ ㄍㄨㄤ ㄏㄣˇ ㄇㄧㄥˊ ㄌㄧㄤˋ.',
            pinyin: 'cong2 men2 de/di2/di4 feng2/feng4 xi4 zhao4 jin4 lai2 de/di2/di4 deng1 guang1 hen3 ming2 liang4.',
            translation: 'ドアの隙間から差し込んでいるランプの灯りがとても眩しいです。',
            memo: ''
          },
          {
            word: '電玩',
            sentence: '他是個電玩迷， 每個月去買新發售的。',
            bopomofo: 'ㄊㄚ ㄕˋ ㄍㄜˋ ㄉㄧㄢˋ ㄨㄢˊ ㄇㄧˊ   ㄇㄟˇ ㄍㄜˋ ㄩㄝˋ ㄑㄩˋ ㄇㄞˇ ㄒㄧㄣ ㄈㄚ ㄕㄡˋ ㄉㄜ˙.',
            pinyin: 'ta1 shi4 ge4 dian4 wan2 mi2 mei3 ge4 yue4 qu4 mai3 xin1 fa1/fa4 shou4 de/di2/di4.',
            translation: '彼はテレビゲームマニアで、 毎月新しいものを購入しています。',
            memo: ''
          },
          {
            word: '球賽',
            sentence: '我不是不擅長球賽, 而是不擅長運動。（運動都不擅長）。',
            bopomofo: 'ㄨㄛˇ ㄅㄨˊ ㄕˋ ㄅㄨˋ ㄕㄢˋ ㄔㄤˊ ㄑㄧㄡˊ ㄙㄞˋ   ㄦˊ ㄕˋ ㄅㄨˋ ㄕㄢˋ ㄔㄤˊ ㄩㄣˋ ㄉㄨㄥˋ   ㄩㄣˋ ㄉㄨㄥˋ ㄉㄡ ㄅㄨˋ ㄕㄢˋ ㄔㄤˊ.',
            pinyin: 'wo3 bu2/bu4 shi4 bu2/bu4 shan4 chang2/zhang3 qiu2 sai4 er2 shi4 bu2/bu4 shan4 chang2/zhang3 yun4 dong4 yun4 dong4 dou1 bu2/bu4 shan4 chang2/zhang3.',
            translation: '私は球技が苦手な訳ではなく、 運動全般が苦手です。',
            memo: ''
          },
          {
            word: '激動',
            sentence: '當我開始新的東西時， 我總是很激動。',
            bopomofo: 'ㄉㄤ ㄨㄛˇ ㄎㄞ ㄕˇ ㄒㄧㄣ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ ㄕˊ   ㄨㄛˇ ㄗㄨㄥˇ ㄕˋ ㄏㄣˇ ㄐㄧ ㄉㄨㄥˋ.',
            pinyin: 'dang1/dang4 wo3 kai1 shi3 xin1 de/di2/di4 dong1 xi1 shi2 wo3 zong3 shi4 hen3 ji1 dong4.',
            translation: '新しい事を始める時はいつもワクワクします。',
            memo: ''
          },
          {
            word: '喊',
            sentence: '因為周圍很吵， 為了叫孩子我大聲喊了。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄓㄡ ㄨㄟˊ ㄏㄣˇ ㄔㄠˇ   ㄨㄟˋ ㄌㄜ˙ ㄐㄧㄠˋ ㄏㄞˊ ㄗ˙ ㄨㄛˇ ㄉㄚˋ ㄕㄥ ㄏㄢˇ ㄌㄜ˙.',
            pinyin: 'yin1 wei2/wei4 zhou1 wei2 hen3 chao3 wei2/wei4 le/liao3 jiao4 hai2 zi3 wo3 da4 sheng1 han3 le/liao3.',
            translation: '周りが騒がしかったので、 子供を呼ぶために大声で叫びました。',
            memo: ''
          },
          {
            word: '公職',
            sentence: '他有公職， 所以收入很穩定。',
            bopomofo: 'ㄊㄚ ㄧㄡˇ ㄍㄨㄥ ㄓˊ   ㄙㄨㄛˇ ㄧˇ ㄕㄡ ㄖㄨˋ ㄏㄣˇ ㄨㄣˇ ㄉㄧㄥˋ.',
            pinyin: 'ta1 you3 gong1 zhi2 suo3 yi3 shou1 ru4 hen3 wen3 ding4.',
            translation: '彼は公職についているので、 収入は安定しています。',
            memo: ''
          },
          {
            word: '其實',
            sentence: '你應該整理睡亂的頭髮, 實際上難看死了。',
            bopomofo: 'ㄋㄧˇ ㄧㄥ ㄍㄞ ㄓㄥˇ ㄌㄧˇ ㄕㄨㄟˋ ㄌㄨㄢˋ ㄉㄜ˙ ㄊㄡˊ ㄈㄚˋ   ㄕˊ ㄐㄧˋ ㄕㄤ˙ ㄋㄢˊ ㄎㄢˋ ㄙˇ ㄌㄜ˙.',
            pinyin: 'ni3 ying1/ying4 gai1 zheng3 li3 shui4 luan4 de/di2/di4 tou2 fa4 shi2 ji4 shang4 nan2/nan4 kan4/kan1 si3 le/liao3.',
            translation: '寝ぐせは直した方が良いと思います、 実際みっともないですよ。',
            memo: ''
          },
          {
            word: '公務員',
            sentence: '當公務員有適合的不適合的。',
            bopomofo: 'ㄉㄤ ㄍㄨㄥ ㄨˋ ㄩㄢˊ ㄧㄡˇ ㄕˋ ㄏㄜˊ ㄉㄜ˙ ㄅㄨˋ ㄕˋ ㄏㄜˊ ㄉㄜ˙.',
            pinyin: 'dang1/dang4 gong1 wu4 yuan2 you3 shi4 he2 de/di2/di4 bu2/bu4 shi4 he2 de/di2/di4.',
            translation: '公務員をするには向き不向きがあります。',
            memo: ''
          },
          {
            word: '煩',
            sentence: '我的瀏海變長了很煩, 所以我要剪掉。',
            bopomofo: 'ㄨㄛˇ ㄉㄜ˙ ㄌㄧㄡˊ ㄏㄞˇ ㄅㄧㄢˋ ㄓㄤˇ ㄌㄜ˙ ㄏㄣˇ ㄈㄢˊ   ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄧㄠˋ ㄐㄧㄢˇ ㄉㄧㄠˋ.',
            pinyin: 'wo3 de/di2/di4 liu2 hai3 bian4 chang2/zhang3 le/liao3 hen3 fan2 suo3 yi3 wo3 yao1/yao4 jian3 diao4.',
            translation: '前髪が伸びて煩わしいので、 切らなくてはいけません。',
            memo: ''
          },
          {
            word: '聽話',
            sentence: '那個孩子知道他會得到零用錢, 所以今天很聽話。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄏㄞˊ ㄗ˙ ㄓ ㄉㄠˋ ㄊㄚ ㄏㄨㄟˋ ㄉㄜ˙ ㄉㄠˋ ㄌㄧㄥˊ ㄩㄥˋ ㄑㄧㄢˊ   ㄙㄨㄛˇ ㄧˇ ㄐㄧㄣ ㄊㄧㄢ ㄏㄣˇ ㄊㄧㄥ ㄏㄨㄚˋ.',
            pinyin: 'na4 ge4 hai2 zi3 zhi1 dao4 ta1 hui4 de/de2/dei3 dao4 ling2 yong4 qian2 suo3 yi3 jin1 tian1 hen3 ting hua4.',
            translation: 'お小遣いが貰えると知っているので、 あの子供は今日とても従順です。',
            memo: ''
          },
          {
            word: '失業率',
            sentence: '失業率正在下降， 景氣也不好， 我的薪水卻沒有增加。',
            bopomofo: 'ㄕ ㄧㄝˋ ㄌㄩˋ ㄓㄥˋ ㄗㄞˋ ㄒㄧㄚˋ ㄐㄧㄤˋ   ㄐㄧㄥˇ ㄑㄧˋ ㄧㄝˇ ㄅㄨˋ ㄏㄠˇ   ㄨㄛˇ ㄉㄜ˙ ㄒㄧㄣ ㄕㄨㄟˇ ㄑㄩㄝˋ ㄇㄟˊ ㄧㄡˇ ㄗㄥ ㄐㄧㄚ.',
            pinyin: 'shi1 ye4 lv4 zheng4 zai4 xia4 jiang4/xiang2 jing3 xi4 ye3 bu2/bu4 hao3/hao4 wo3 de/di2/di4 xin1 shui3 que4 mei2/mo4 you3 zeng1 jia1.',
            translation: '失業率が下がって景気も良くなってきているのに、 私の給料は増えません。',
            memo: ''
          },
          {
            word: '門',
            sentence: '因為明天有五門科目的考試, 我快要死了。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄇㄧㄥˊ ㄊㄧㄢ ㄧㄡˇ ㄨˇ ㄇㄣˊ ㄎㄜ ㄇㄨˋ ㄉㄧˋ ㄎㄠˇ ㄕˋ   ㄨㄛˇ ㄎㄨㄞˋ ㄧㄠˋ ㄙˇ ㄌㄜ˙.',
            pinyin: 'yin1 wei2/wei4 ming2 tian1 you3 wu3 men2 ke1 mu4 de/di2/di4 kao3 shi4 wo3 kuai4 yao1/yao4 si3 le/liao3.',
            translation: '明日は5科目のテストがあるので、 死にそうです。',
            memo: ''
          },
          {
            word: '讀書',
            sentence: '我沒有專心的能力， 所以我總是在讀書的時候不小心睡著了。',
            bopomofo: 'ㄨㄛˇ ㄇㄟˊ ㄧㄡˇ ㄓㄨㄢ ㄒㄧㄣ ㄉㄜ˙ ㄋㄥˊ ㄌㄧˋ   ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄗㄨㄥˇ ㄕˋ ㄗㄞˋ ㄉㄨˊ ㄕㄨ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄅㄨˋ ㄒㄧㄠˇ ㄒㄧㄣ ㄕㄨㄟˋ ㄓㄠˊ ㄌㄜ˙.',
            pinyin: 'wo3 mei2/mo4 you3 zhuan1 xin1 de/di2/di4 neng2 li4 suo3 yi3 wo3 zong3 shi4 zai4 du2 shu1 de/di2/di4 shi2 hou4 bu2/bu4 xiao3 xin1 shui4 zhe/zhuo2 le/liao3.',
            translation: '集中力が無いので、 読書をするといつも寝てしまいます。',
            memo: ''
          },
          {
            word: '學分',
            sentence: '我可能無法畢業了 ，因為我算錯了學分。',
            bopomofo: 'ㄨㄛˇ ㄎㄜˇ ㄋㄥˊ ㄨˊ ㄈㄚˇ ㄅㄧˋ ㄧㄝˋ ㄌㄜ˙   ㄧㄣ ㄨㄟˋ ㄨㄛˇ ㄙㄨㄢˋ ㄘㄨㄛˋ ㄌㄜ˙ ㄒㄩㄝˊ ㄈㄣ.',
            pinyin: 'wo3 ke3 neng2 wu2 fa3 bi4 ye4 le/liao3 yin1 wei2/wei4 wo3 suan4 cuo4 le/liao3 xue2 fen1/fen4/fen.',
            translation: '単位を数え間違えていたので、 卒業できないかもしれません。',
            memo: ''
          },
          {
            word: '修',
            sentence: '我應該修什麼課程才能成為寵物剪毛師?',
            bopomofo: 'ㄨㄛˇ ㄧㄥ ㄍㄞ ㄒㄧㄡ ㄕㄣˊ ㄇㄜ˙ ㄎㄜˋ ㄔㄥˊ ㄘㄞˊ ㄋㄥˊ ㄔㄥˊ ㄨㄟˊ ㄔㄨㄥˇ ㄨˋ ㄐㄧㄢˇ ㄇㄠˊ ㄕ?',
            pinyin: 'wo3 ying1/ying4 gai1 xiu1 shen2 me/mo2 ke4 cheng2 cai2 neng2 cheng2 wei2/wei4 chong3 wu4 jian3 mao2 shi1?',
            translation: 'トリマーになるにはどのコースを受講したらよいですか?',
            memo: ''
          },
          {
            word: '專心',
            sentence: '工作時間久了, 就不能專心了。',
            bopomofo: 'ㄍㄨㄥ ㄗㄨㄛˋ ㄕˊ ㄐㄧㄢ ㄐㄧㄡˇ ㄌㄜ˙   ㄐㄧㄡˋ ㄅㄨˋ ㄋㄥˊ ㄓㄨㄢ ㄒㄧㄣ ㄌㄜ˙.',
            pinyin: 'gong1 zuo1/zuo4 shi2 jian1/jian4 jiu3 le/liao3 jiu4 bu2/bu4 neng2 zhuan1 xin1 le/liao3.',
            translation: '労働時間が長くなるにつれて、 集中できなくなります。',
            memo: ''
          },
          {
            word: '修課',
            sentence: '有很多想修化學課的學生， 可能會有測驗。',
            bopomofo: 'ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄒㄧㄤˇ ㄒㄧㄡ ㄏㄨㄚˋ ㄒㄩㄝˊ ㄎㄜˋ ㄉㄜ˙ ㄒㄩㄝˊ ㄕㄥ   ㄎㄜˇ ㄋㄥˊ ㄏㄨㄟˋ ㄧㄡˇ ㄘㄜˋ ㄧㄢˋ.',
            pinyin: 'you3 hen3 duo1 xiang3 xiu1 hua4 xue2 ke4 de/di2/di4 xue2 sheng1 ke3 neng2 hui4 you3 ce4 yan4.',
            translation: '化学の授業を受講したい学生は多いので、 試験になるかもしれません。',
            memo: ''
          },
          {
            word: '輔系',
            sentence: '他的專業是企業管理學， 而輔系是經濟學。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄓㄨㄢ ㄧㄝˋ ㄕˋ ㄑㄧˇ ㄧㄝˋ ㄍㄨㄢˇ ㄌㄧˇ ㄒㄩㄝˊ   ㄦˊ ㄈㄨˇ ㄒㄧˋ ㄕˋ ㄐㄧㄥ ㄐㄧˋ ㄒㄩㄝˊ.',
            pinyin: 'ta1 de/di2/di4 zhuan1 ye4 shi4 qi3 ye4 guan3 li3 xue2 er2 fu3 xi4 shi4 jing1 ji3/ji4 xue2.',
            translation: '彼の専攻は経営ですが、 副専攻は経済です。',
            memo: ''
          },
          {
            word: '瘋',
            sentence: '他很不耐煩, 有的時候他瘋了似地罵別人。',
            bopomofo: 'ㄊㄚ ㄏㄣˇ ㄅㄨˋ ㄋㄞˋ ㄈㄢˊ   ㄧㄡˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄊㄚ ㄈㄥ ㄌㄜ˙ ㄕˋ ㄉㄧˋ ㄇㄚˋ ㄅㄧㄝˊ ㄖㄣˊ.',
            pinyin: 'ta1 hen3 bu2/bu4 nai4 fan2 you3 de/di2/di4 shi2 hou4 ta1 feng1 le/liao3 shi4/si4 di4 ma4 bie2/bie4 ren2.',
            translation: '彼はとても短気で、 狂ったように人を罵る時があります。',
            memo: ''
          },
          {
            word: '誇張',
            sentence: '說他是一個天才並不誇張。',
            bopomofo: 'ㄕㄨㄛ ㄊㄚ ㄕˋ ㄧˊ ㄍㄜˋ ㄊㄧㄢ ㄘㄞˊ ㄅㄧㄥˋ ㄅㄨˋ ㄎㄨㄚ ㄓㄤ.',
            pinyin: 'shuo1 ta1 shi4 yi1 ge4 tian1 cai2 bing4 bu2/bu4 qu4 zhang1.',
            translation: '彼は天才と言っても過言ではありません。',
            memo: ''
          },
          {
            word: '舉行',
            sentence: '那個政治家似乎針對他的醜聞開記者招待會。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄓㄥˋ ㄓˋ ㄐㄧㄚ ㄙˋ ㄏㄨ ㄓㄣ ㄉㄨㄟˋ ㄊㄚ ㄉㄜ˙ ㄔㄡˇ ㄨㄣˊ ㄎㄞ ㄐㄧˋ ㄓㄜˇ ㄓㄠ ㄉㄞ ㄏ��ㄟˋ.',
            pinyin: 'na4 ge4 zheng4 zhi4 jia1 shi4/si4 hu1 zhen1 dui4 ta1 de/di2/di4 chou3 wen2 kai1 ji4 zhe3 zhao1 dai1/dai4 hui4.',
            translation: 'あの政治家は、 自らのスキャンダルに関する記者会見を開くようです。',
            memo: ''
          },
          {
            word: '遺憾',
            sentence: '他很帥， 但是遺憾的是他沒有穿衣服的品味。',
            bopomofo: 'ㄊㄚ ㄏㄣˇ ㄕㄨㄞˋ   ㄉㄢˋ ㄕˋ ㄧˊ ㄏㄢˋ ㄉㄜ˙ ㄕˋ ㄊㄚ ㄇㄟˊ ㄧㄡˇ ㄔㄨㄢ ㄧ ㄈㄨ˙ ㄉㄜ˙ ㄆㄧㄣˇ ㄨㄟˋ.',
            pinyin: 'ta1 hen3 shuai4 dan4 shi4 yi2 han4 de/di2/di4 shi4 ta1 mei2/mo4 you3 chuan1 yi1 fu2 de/di2/di4 pin3 wei4.',
            translation: '彼はハンサムなのですが、 服のセンスが無い事が残念です。',
            memo: ''
          },
          {
            word: '兒子',
            sentence: '兒子一回家就把包包甩再地上。',
            bopomofo: 'ㄦˊ ㄗ˙ ㄧ ㄏㄨㄟˊ ㄐㄧㄚ ㄐㄧㄡˋ ㄅㄚˇ ㄅㄠ ㄅㄠ ㄕㄨㄞˇ ㄗㄞˋ ㄉㄧˋ ㄕㄤˋ.',
            pinyin: 'er2 zi3 yi1 hui2 jia1 jiu4 ba3 bao1 bao1 shuai3 zai4 di4 shang4.',
            translation: '息子は、 家に帰るとすぐ鞄を床に放り投げました。',
            memo: ''
          },
          {
            word: '期望',
            sentence: '我想符合父母的期望，但我不想當公務員。',
            bopomofo: 'ㄨㄛˇ ㄒㄧㄤˇ ㄈㄨˊ ㄏㄜˊ ㄈㄨˋ ㄇㄨˇ ㄉㄜ˙ ㄑㄧ ㄨㄤˋ  ㄉㄢˋ ㄨㄛˇ ㄅㄨˋ ㄒㄧㄤˇ ㄉㄤ ㄍㄨㄥ ㄨˋ ㄩㄢˊ.',
            pinyin: 'wo3 xiang3 fu2 he2 fu4 mu3 de/di2/di4 qi1 wang4 dan4 wo3 bu2/bu4 xiang3 dang1/dang4 gong1 wu4 yuan2.',
            translation: '両親の期待には応えたいのですが、 公務員にはなりたくありません。',
            memo: ''
          },
          {
            word: '狀元',
            sentence: '她每天都在玩， 但是考試時她總是第一名。',
            bopomofo: 'ㄊㄚ ㄇㄟˇ ㄊㄧㄢ ㄉㄨ ㄗㄞˋ ㄨㄢˊ   ㄉㄢˋ ㄕˋ ㄎㄠˇ ㄕˋ ㄕˊ ㄊㄚ ㄗㄨㄥˇ ㄕˋ ㄉㄧˋ ㄧ ㄇㄧㄥˊ.',
            pinyin: 'ta1 mei3 tian1 dou1 zai4 wan2 dan4 shi4 kao3 shi4 shi2 ta1 zong3 shi4 di4 yi1 ming2.',
            translation: '彼女は毎日遊んでばかりいますが、 テストではいつもトップです。',
            memo: ''
          },
          {
            word: '努力',
            sentence: '我一方面想賺錢, 一方面又不想努力工作。',
            bopomofo: 'ㄨㄛˇ ㄧ ㄈㄤ ㄇㄧㄢˋ ㄒㄧㄤˇ ㄓㄨㄢˋ ㄑㄧㄢˊ   ㄧ ㄈㄤ ㄇㄧㄢˋ ㄧㄡˋ ㄅㄨˋ ㄒㄧㄤˇ ㄋㄨˇ ㄌㄧˋ ㄍㄨㄥ ㄗㄨㄛˋ.',
            pinyin: 'wo3 yi1 fang1 mian4 xiang3 zhuan4 qian2 yi1 fang1 mian4 you4 bu2/bu4 xiang3 nu3 li4 gong1 zuo1/zuo4.',
            translation: 'お金は稼ぎたいですが、 頑張って仕事したくはありません。',
            memo: ''
          },
          {
            word: '怎麼回事',
            sentence: '怎麼回事, 他們兩個從剛才就一直吵個不停。',
            bopomofo: 'ㄗㄣˇ ㄇㄜ˙ ㄏㄨㄟˊ ㄕˋ   ㄊㄚ ㄇㄣ˙ ㄌㄧㄤˇ ㄍㄜˋ ㄘㄨㄥˊ ㄍㄤ ㄘㄞˊ ㄐㄧㄡˋ ㄧ ㄓˊ ㄔㄠˇ ㄍㄜˋ ㄅㄨˋ ㄊㄧㄥˊ.',
            pinyin: 'zen3 me/mo2 hui2 shi4 ta1 men2/men liang3 ge4 cong2 gang1 cai2 jiu4 yi1 zhi2 chao3 ge4 bu2/bu4 ting2.',
            translation: '何事でしょう、 彼ら2人はさっきから口喧嘩し続けています。',
            memo: ''
          },
          {
            word: '大喊大叫',
            sentence: '不要對店員大喊大叫, 這樣讓你看起來很沒品。',
            bopomofo: 'ㄅㄨˊ ㄧㄠˋ ㄉㄨㄟˋ ㄉㄧㄢˋ ㄩㄢˊ ㄉㄚˋ ㄏㄢˇ ㄉㄚˋ ㄐㄧㄠˋ   ㄓㄜˋ ㄧㄤˋ ㄖㄤˋ ㄋㄧˇ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄏㄣˇ ㄇㄟˊ ㄆㄧㄣˇ.',
            pinyin: 'bu2/bu4 yao1/yao4 dui4 dian4 yuan2 da4 han3 da4 jiao4 zhe4 yang4 rang4 ni3 kan4/kan1 qi3 lai2 hen3 mei2/mo4 pin3.',
            translation: '店員さんに大声でがなり立てるのはやめましょう、 品が無いですよ。',
            memo: ''
          },
          {
            word: '期中考',
            sentence: '期中考的成績不好， 所以我必須在期末考中盡力而為。',
            bopomofo: 'ㄑㄧ ㄓㄨㄥ ㄎㄠˇ ㄉㄜ˙ ㄔㄥˊ ㄐㄧ ㄅㄨˋ ㄏㄠˇ   ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄅㄧˋ ㄒㄩ ㄗㄞˋ ㄑㄧ ㄇㄛˋ ㄎㄠˇ ㄓㄨㄥ ㄐㄧㄣˋ ㄌㄧˋ ㄦˊ ㄨㄟˊ.',
            pinyin: 'qi1 zhong1/zhong4 kao3 de/di2/di4 cheng2 ji4 bu2/bu4 hao3/hao4 suo3 yi3 wo3 bi4 xu1 zai4 qi1 mo4 kao3 zhong1/zhong4 jin3/jin4 li4 er2 wei2/wei4.',
            translation: '中間試験の結果が良く無かったので、 期末試験は頑張らないといけません。',
            memo: ''
          },
          {
            word: '密集班',
            sentence: '我不知道為什麼大部分的密集班在夏天舉行, 太熱了不能集中吧。',
            bopomofo: 'ㄨㄛˇ ㄅㄨˋ ㄓ ㄉㄠˋ ㄨㄟˋ ㄕˊ ㄇㄜ˙ ㄉㄚˋ ㄅㄨˋ ㄈㄣˋ ㄉㄜ˙ ㄇㄧˋ ㄐㄧˊ ㄅㄢ ㄗㄞˋ ㄒㄧㄚˋ ㄊㄧㄢ ㄐㄩˇ ㄒㄧㄥˊ   ㄊㄞˋ ㄖㄜˋ ㄌㄧㄠˇ ㄅㄨˋ ㄋㄥˊ ㄐㄧˊ ㄓㄨㄥ ㄅㄚ˙.',
            pinyin: 'wo3 bu2/bu4 zhi1 dao4 wei2/wei4 shen2 me/mo2 da4 bu4 fen1/fen4/fen de/di2/di4 mi4 ji2 ban1 zai4 xia4 tian1 ju hang2/xing2/hang4/heng2 tai4 re4 le/liao3 bu2/bu4 neng2 ji2 zhong1/zhong4 ba.',
            translation: '集中講義のほとんどが夏に行われる理由が分かりません、 暑すぎて集中できないです。',
            memo: ''
          },
          {
            word: '畢業展',
            sentence: '他為了畢業展提交了的那尊奇怪的雕像在網上變有名了。',
            bopomofo: 'ㄊㄚ ㄨㄟˋ ㄌㄜ˙ ㄅㄧˋ ㄧㄝˋ ㄓㄢˇ ㄊㄧˊ ㄐㄧㄠ ㄌㄜ˙ ㄉㄜ˙ ㄋㄚˋ ㄗㄨㄣ ㄑㄧˊ ㄍㄨㄞˋ ㄉㄜ˙ ㄉㄧㄠ ㄒㄧㄤˋ ㄗㄞˋ ㄨㄤˇ ㄕㄤˋ ㄅㄧㄢˋ ㄧㄡˇ ㄇㄧㄥˊ ㄌㄜ˙.',
            pinyin: 'ta1 wei2/wei4 le/liao3 bi4 ye4 zhan3 ti2/di1 jiao1 le/liao3 de/di2/di4 na4 zun1 qi2/ji1 guai4 de/di2/di4 diao1 xiang4 zai4 wang3 shang4 bian4 you3 ming2 le/liao3.',
            translation: '彼が卒業制作展のため提出した奇妙な像は、ネットで有名になりました。',
            memo: ''
          },
          {
            word: '服裝設計',
            sentence: '他從事服裝設計， 但是自己衣服總是很簡單。',
            bopomofo: 'ㄊㄚ ㄘㄨㄥˊ ㄕˋ ㄈㄨˊ ㄓㄨㄤ ㄕㄜˋ ㄐㄧˋ   ㄉㄢˋ ㄕˋ ㄗˋ ㄐㄧˇ ㄧ ㄈㄨˊ ㄗㄨㄥˇ ㄕˋ ㄏㄣˇ ㄐㄧㄢˇ ㄉㄢ.',
            pinyin: 'ta1 cong2 shi4 fu2 zhuang1 she4 ji4 dan4 shi4 zi4 ji3 yi1 fu2 zong3 shi4 hen3 jian3 dan1.',
            translation: '彼はファッションデザインに携わっていますが、 自身の普段着はとてもシンプルです。',
            memo: ''
          },
          {
            word: '醫學系',
            sentence: '她打算念醫學系， 將來會成為醫生。',
            bopomofo: 'ㄊㄚ ㄉㄚˇ ㄙㄨㄢˋ ㄋㄧㄢˋ ㄧ ㄒㄩㄝˊ ㄒㄧˋ   ㄐㄧㄤ ㄌㄞˊ ㄏㄨㄟˋ ㄔㄥˊ ㄨㄟˊ ㄧ ㄕㄥ.',
            pinyin: 'ta1 da3 suan4 nian4 yi3 xue2 xi4 jiang1/jiang4 lai2 hui4 cheng2 wei2/wei4 yi3 sheng1.',
            translation: '彼女は医学系に進んで、 将来はお医者さんになるつもりです。',
            memo: ''
          },
          {
            word: '行行出狀元',
            sentence: '你不應該從職業的種類判斷一個人的卓越, 行行出狀元。',
            bopomofo: 'ㄋㄧˇ ㄅㄨˋ ㄧㄥ ㄍㄞ ㄘㄨㄥˊ ㄓˊ ㄧㄝˋ ㄉㄜ˙ ㄓㄨㄥˇ ㄌㄟˋ ㄆㄢˋ ㄉㄨㄢˋ ㄧˊ ㄍㄜ˙ ㄖㄣˊ ㄉㄜ˙ ㄓㄨㄛ ㄩㄝˋ   ㄒㄧㄥˊ ㄒㄧㄥˊ ㄔㄨ ㄓㄨㄤˋ ㄩㄢˊ.',
            pinyin: 'ni3 bu2/bu4 ying1/ying4 gai1 cong2 zhi2 ye4 de/di2/di4 zhong4/zhong3 lei4 pan4 duan4 yi1 ge4 ren2 de/di2/di4 zhuo1/zhuo2 yue4 hang2/xing2/hang4/heng2 hang2/xing2/hang4/heng2 chu1 zhuang4 yuan2.',
            translation: '職種から人の優秀さを判断すべきではありません、 どの業界にも優秀なリーダーは現われます。',
            memo: ''
          },
          {
            word: '冠軍',
            sentence: '成為大胃王比賽冠軍的那個人吃了二十份的炒飯。',
            bopomofo: 'ㄔㄥˊ ㄨㄟˊ ㄉㄚˋ ㄨㄟˋ ㄨㄤˊ ㄅㄧˇ ㄙㄞˋ ㄍㄨㄢˋ ㄐㄩㄣ ㄉㄜ˙ ㄋㄚˋ ㄍㄜˋ ㄖㄣˊ ㄔ ㄌㄜ˙ ㄦˋ ㄕˊ ㄈㄣˋ ㄉㄜ˙ ㄔㄠˇ ㄈㄢˋ.',
            pinyin: 'cheng2 wei2/wei4 da4 wei4 wang2 bi3 sai4 guan4/guan1 jun1 de/di2/di4 na4 ge4 ren2 chi1 le/liao3 er4 shi2 fen4 de/di2/di4 chao3 fan4.',
            translation: '大食い大会のチャンピオンになったあの人は、 チャーハンを20人前食べました。',
            memo: ''
          },
          {
            word: '大賽',
            sentence: '我參加了馬拉鬆大賽， 但是在五公里時棄權了。',
            bopomofo: 'ㄨㄛˇ ㄘㄢ ㄐㄧㄚ ㄌㄜ˙ ㄇㄚˇ ㄌㄚ ㄙㄨㄥ ㄉㄚˋ ㄙㄞˋ   ㄉㄢˋ ㄕˋ ㄗㄞˋ ㄨˇ ㄍㄨㄥ ㄌㄧˇ ㄕˊ ㄑㄧˋ ㄑㄩㄢˊ ㄌㄜ˙.',
            pinyin: 'wo3 can1/cen1/shen1 jia1 le/liao3 ma3 la1 song4 da4 sai4 dan4 shi4 zai4 wu3 gong1 li3 shi2 qi4 quan2 le/liao3.',
            translation: 'マラソン大会に出ましたが、 5キロで棄権しました。',
            memo: ''
          },
          {
            word: '通過',
            sentence: '我通過了招聘考試的文件審核了， 但對面試我沒有信心。',
            bopomofo: 'ㄨㄛˇ ㄊㄨㄥ ㄍㄨㄛˋ ㄌㄜ˙ ㄓㄠ ㄆㄧㄣˋ ㄎㄠˇ ㄕˋ ㄉㄜ˙ ㄨㄣˊ ㄐㄧㄢˋ ㄕㄣˇ ㄏㄜˊ ㄌㄜ˙   ㄉㄢˋ ㄉㄨㄟˋ ㄇㄧㄢˋ ㄕˋ ㄨㄛˇ ㄇㄟˊ ㄧㄡˇ ㄒㄧㄣˋ ㄒㄧㄣ.',
            pinyin: 'wo3 tong1 guo4 le/liao3 zhao1 pin4 kao3 shi4 de/di2/di4 wen2 jian4 shen3 he2 le/liao3 dan4 dui4 mian4 shi4 wo3 mei2/mo4 you3 xin4 xin1.',
            translation: '入社試験の書類審査は通ったのですが、 面接は自信がありません。',
            memo: ''
          },
          {
            word: '高級',
            sentence: '一般來說法國菜算是高級的料理。',
            bopomofo: 'ㄧˋ ㄅㄢ ㄌㄞˊ ㄕㄨㄛ ㄈㄚˇ ㄍㄨㄛˊ ㄘㄞˋ ㄙㄨㄢˋ ㄕˋ ㄍㄠ ㄐㄧˊ ㄉㄜ˙ ㄌㄧㄠˋ ㄌㄧˇ.',
            pinyin: 'yi1 ban1 lai2 shuo1 fa3 guo2 cai4 suan4 shi4 gao1 ji2 de/di2/di4 liao4 li3.',
            translation: '一般的には、 フランス料理は高級だとされています。',
            memo: ''
          },
          {
            word: '碩士',
            sentence: '如果你擁有碩士學位, 可以在更好的條件下工作。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄩㄥ ㄧㄡˇ ㄕㄨㄛˋ ㄕˋ ㄒㄩㄝˊ ㄨㄟˋ   ㄎㄜˇ ㄧˇ ㄗㄞˋ ㄍㄥˋ ㄏㄠˇ ㄉㄜ˙ ㄊㄧㄠˊ ㄐㄧㄢˋ ㄒㄧㄚˋ ㄍㄨㄥ ㄗㄨㄛˋ.',
            pinyin: 'ru2 guo3 ni3 yong1 you3 shuo4 shi4 xue2 wei4 ke3 yi3 zai4 geng1/geng4 hao3/hao4 de/di2/di4 tiao2 jian4 xia4 gong1 zuo1/zuo4.',
            translation: '修士号があれば、 より良い条件で働く事ができます。',
            memo: ''
          },
          {
            word: '面試',
            sentence: '我以為面試失敗了， 但是還好結果還是通過了。',
            bopomofo: 'ㄨㄛˇ ㄧˇ ㄨㄟˊ ㄇㄧㄢˋ ㄕˋ ㄕ ㄅㄞˋ ㄌㄜ˙   ㄉㄢˋ ㄕˋ ㄏㄞˊ ㄏㄠˇ ㄐㄧㄝˊ ㄍㄨㄛˇ ㄏㄞˊ ㄕˋ ㄊㄨㄥ ㄍㄨㄛˋ ㄌㄜ˙.',
            pinyin: 'wo3 yi3 wei2/wei4 mian4 shi4 shi1 bai4 le/liao3 dan4 shi4 hai2/huan2 hao3/hao4 jie1/jie2 guo3 hai2/huan2 shi4 tong1 guo4 le/liao3.',
            translation: '面接は失敗したと思いましたが、 幸い合格しました。',
            memo: ''
          },
          {
            word: '卻',
            sentence: '他很想戒煙, 事實上卻抽個不停。',
            bopomofo: 'ㄊㄚ ㄏㄣˇ ㄒㄧㄤˇ ㄐㄧㄝˋ ㄧㄢ   ㄕˋ ㄕˊ ㄕㄤˋ ㄑㄩㄝˋ ㄔㄡ ㄍㄜˋ ㄅㄨˋ ㄊㄧㄥˊ.',
            pinyin: 'ta1 hen3 xiang3 jie4 yan1 shi4 shi2 shang4 que4 chou1 ge4 bu2/bu4 ting2.',
            translation: '彼は禁煙したいと思いつつ、 実際は中々やめられません。',
            memo: ''
          },
          {
            word: '國中',
            sentence: '國中一方面可以學習如何配合， 一方面卻又失去個性。',
            bopomofo: 'ㄍㄨㄛˊ ㄓㄨㄥ ㄧ ㄈㄤ ㄇㄧㄢˋ ㄎㄜˇ ㄧˇ ㄒㄩㄝˊ ㄒㄧˊ ㄖㄨˊ ㄏㄜˊ ㄆㄟˋ ㄏㄜˊ   ㄧ ㄈㄤ ㄇㄧㄢˋ ㄑㄩㄝˋ ㄧㄡˋ ㄕ ㄑㄩˋ ㄍㄜˋ ㄒㄧㄥˋ.',
            pinyin: 'guo2 zhong1/zhong4 yi1 fang1 mian4 ke3 yi3 xue2 xi2 ru2 he2 pei4 he2 yi1 fang1 mian4 que4 you4 shi1 qu4 ge4 xing4.',
            translation: '中学校では協調性を学ぶ事ができますが、 個性を失ってしまう一面もあります。',
            memo: ''
          },
          {
            word: '學歷',
            sentence: '她的學歷很完美， 誰都覺得她可以到任何公司就職。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄒㄩㄝˊ ㄌㄧˋ ㄏㄣˇ ㄨㄢˊ ㄇㄟˇ   ㄕㄨㄟˊ ㄉㄡ ㄐㄩㄝˊ ㄉㄜ˙ ㄊㄚ ㄎㄜˇ ㄧˇ ㄉㄠˋ ㄖㄣˋ ㄏㄜˊ ㄍㄨㄥ ㄙ ㄐㄧㄡˋ ㄓˊ.',
            pinyin: 'ta1 de/di2/di4 xue2 li4 hen3 wan2 mei3 shei2/shui2 dou1 jiao4/jue2 de/de2/dei3 ta1 ke3 yi3 dao4 ren4 he2 gong1 si1 jiu4 zhi2.',
            translation: '彼女の学歴は完璧なので、 どんな会社でも入る事ができると誰もが思います。',
            memo: ''
          },
          {
            word: '拒絕',
            sentence: '因為他太執著了， 所以貓終於開始拒絕被抱了。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄊㄚ ㄊㄞˋ ㄓˊ ㄓㄨㄛˊ ㄌㄜ˙   ㄙㄨㄛˇ ㄧˇ ㄇㄠ ㄓㄨㄥ ㄩˊ ㄎㄞ ㄕˇ ㄐㄩˋ ㄐㄩㄝˊ ㄅㄟˋ ㄅㄠˋ ㄌㄜ˙.',
            pinyin: 'yin1 wei2/wei4 ta1 tai4 zhi2 zhe/zhuo2 le/liao3 suo3 yi3 mao1 zhong1 wu1/yu1 kai1 shi3 ju4 jue2 bei4 bao4 le/liao3.',
            translation: '彼があまりにもしつこいので、 猫はついに抱っこを拒絶し始めました。',
            memo: ''
          },
          {
            word: '引起',
            sentence: '頂嘴讓她更生氣了， 你應該老實一點比較好喔。',
            bopomofo: 'ㄉㄧㄥˇ ㄗㄨㄟˇ ㄖㄤˋ ㄊㄚ ㄍㄥ ㄕㄥ ㄑㄧˋ ㄌㄜ˙   ㄋㄧˇ ㄧㄥ ㄍㄞ ㄌㄠˇ ㄕˊ ㄧˋ ㄉㄧㄢˇ ㄅㄧˇ ㄐㄧㄠˋ ㄏㄠˇ ㄛ.',
            pinyin: 'ding3 zui3 rang4 ta1 geng1/geng4 sheng1 xi4 le/liao3 ni3 ying1/ying4 gai1 lao3 shi2 yi1 dian3 bi3 jiao4 hao3/hao4 wo1/o1.',
            translation: '口答えすると彼女は更に怒るので、 大人しくしていた方がいいですよ。',
            memo: ''
          },
          {
            word: '彈性',
            sentence: '貓的肉球很有弹性, 摸它會感到很幸福。',
            bopomofo: 'ㄇㄠ ㄉㄜ˙ ㄖㄡˋ ㄑㄧㄡˊ ㄏㄣˇ ㄧㄡˇ ㄊㄢˊ ㄒㄧㄥˋ   ㄇㄛ ㄊㄚ ㄏㄨㄟˋ ㄍㄢˇ ㄉㄠˋ ㄏㄣˇ ㄒㄧㄥˋ ㄈㄨˊ.',
            pinyin: 'mao1 de/di2/di4 rou4 qiu2 hen3 you3 dan4/tan2 xing4 mo1/mo2 ta1 hui4 gan3 dao4 hen3 xing4 fu2.',
            translation: '猫の肉球はとてもプニプニで、 触ると幸せな気分になれます。',
            memo: ''
          },
          {
            word: '改變',
            sentence: '他小時候不喜歡蔬菜, 然後他的味覺改變了。',
            bopomofo: 'ㄊㄚ ㄒㄧㄠˇ ㄕˊ ㄏㄡˋ ㄅㄨˋ ㄒㄧˇ ㄏㄨㄢ ㄕㄨ ㄘㄞˋ   ㄖㄢˊ ㄏㄡˋ ㄊㄚ ㄉㄜ˙ ㄨㄟˋ ㄐㄩㄝˊ ㄍㄞˇ ㄅㄧㄢˋ ㄌㄜ˙.',
            pinyin: 'ta1 xiao3 shi2 hou4 bu2/bu4 xi3 huan shu1 cai4 ran2 hou4 ta1 de/di2/di4 wei4 jiao4/jue2 gai3 bian4 le/liao3.',
            translation: '彼は子供の頃野菜が好きではありませんでしたが、 その後味覚が変わりました。',
            memo: ''
          },
          {
            word: '制度',
            sentence: '最近公司的制度改變了, 現在我們可以隨意的時間上班。',
            bopomofo: 'ㄗㄨㄟˋ ㄐㄧㄣˋ ㄍㄨㄥ ㄙ ㄉㄜ˙ ㄓˋ ㄉㄨˋ ㄍㄞˇ ㄅㄧㄢˋ ㄌㄜ˙   ㄒㄧㄢˋ ㄗㄞˋ ㄨㄛˇ ㄇㄣ˙ ㄎㄜˇ ㄧˇ ㄙㄨㄟˊ ㄧˋ ㄉㄜ˙ ㄕˊ ㄐㄧㄢ ㄕㄤˋ ㄅㄢ.',
            pinyin: 'zui4 jin4 gong1 si1 de/di2/di4 zhi4 du4 gai3 bian4 le/liao3 xian4 zai4 wo3 men2/men ke3 yi3 sui2 yi4 de/di2/di4 shi2 jian1/jian4 shang4 ban1.',
            translation: '最近会社の制度が変わって、 好きな時間に出社できるようになりました。',
            memo: ''
          },
          {
            word: '基礎',
            sentence: '這個湯的湯底是醬油的味道， 也加了柚子的香味。',
            bopomofo: 'ㄓㄜˋ ㄍㄜˋ ㄊㄤ ㄉㄜ˙ ㄊㄤ ㄉㄧˇ ㄕˋ ㄐㄧㄤˋ ㄧㄡˊ ㄉㄜ˙ ㄨㄟˋ ㄉㄠˋ   ㄧㄝˇ ㄐㄧㄚ ㄌㄜ˙ ㄧㄡˋ ㄗ˙ ㄉㄜ˙ ㄒㄧㄤ ㄨㄟˋ.',
            pinyin: 'zhe4 ge4 tang1 de/di2/di4 tang1 di3 shi4 jiang4 you2 de/di2/di4 wei4 dao4 ye3 jia1 le/liao3 you2/you4 zi3 de/di2/di4 xiang1 wei4.',
            translation: 'このスープのベースは醤油味で、 柚子の風味がプラスされています。',
            memo: ''
          },
          {
            word: '認真',
            sentence: '他太認真了， 他不能容忍蛋殼進菜裡。',
            bopomofo: 'ㄊㄚ ㄊㄞˋ ㄖㄣˋ ㄓㄣ ㄌㄜ˙   ㄊㄚ ㄅㄨˋ ㄋㄥˊ ㄖㄨㄥˊ ㄖㄣˇ ㄉㄢˋ ㄎㄜˊ ㄐㄧㄣˋ ㄘㄞˋ ㄌㄧˇ.',
            pinyin: 'ta1 tai4 ren4 zhen1 le/liao3 ta1 bu2/bu4 neng2 rong2 ren3 dan4 ke2/qiao4 jin4 cai4 li3.',
            translation: '彼はとても真面目なので、 卵料理に卵の殻が入っているのは許せません。',
            memo: ''
          },
          {
            word: '公平',
            sentence: '我想盡可能公平地分割蛋糕，但是我最愛的巧克力蛋糕的話我想多吃一點。',
            bopomofo: 'ㄨㄛˇ ㄒㄧㄤˇ ㄐㄧㄣˋ ㄎㄜˇ ㄋㄥˊ ㄍㄨㄥ ㄆㄧㄥˊ ㄉㄧˋ ㄈㄣ ㄍㄜ ㄉㄢˋ ㄍㄠ  ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄗㄨㄟˋ ㄞˋ ㄉㄜ˙ ㄑㄧㄠˇ ㄎㄜˋ ㄌㄧˋ ㄉㄢˋ ㄍㄠ ㄉㄜ˙ ㄏㄨㄚˋ ㄨㄛˇ ㄒㄧㄤˇ ㄉㄨㄛ ㄔ ㄧˋ ㄉㄧㄢˇ.',
            pinyin: 'wo3 xiang3 jin3/jin4 ke3 neng2 gong1 ping2 di4 fen1/fen4/fen ge1 dan4 gao1 dan4 shi4 wo3 zui4 ai4 de/di2/di4 qiao3 ke4 li4 dan4 gao1 de/di2/di4 hua4 wo3 xiang3 duo1 chi1 yi1 dian3.',
            translation: 'ケーキはなるべく公平に分けたいのですが、 私の大好きなチョコケーキの場合は少し多めに食べたいです。',
            memo: ''
          },
          {
            word: '出生',
            sentence: '媽媽生我的時候,我差一點在馬桶裡出生了。',
            bopomofo: 'ㄇㄚ ㄇㄚ ㄕㄥ ㄨㄛˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ  ㄨㄛˇ ㄔㄚˋ ㄧˋ ㄉㄧㄢˇ ㄗㄞˋ ㄇㄚˇ ㄊㄨㄥˇ ㄌㄧˇ ㄔㄨ ㄕㄥ ㄌㄜ˙.',
            pinyin: 'ma1 ma1 sheng1 wo3 de/di2/di4 shi2 hou4 wo3 cha1/cha4/chai1/ci1 yi1 dian3 zai4 ma3 tong3 li3 chu1 sheng1 le/liao3.',
            translation: 'お母さんが私を産んだ時、 危うくトイレの中に産み落とすところでした。',
            memo: ''
          },
          {
            word: '窮',
            sentence: '她很窮, 總是吃沒有放料的拉麵。',
            bopomofo: 'ㄊㄚ ㄏㄣˇ ㄑㄩㄥˊ   ㄗㄨㄥˇ ㄕˋ ㄔ ㄇㄟˊ ㄧㄡˇ ㄈㄤˋ ㄌㄧㄠˋ ㄉㄜ˙ ㄌㄚ ㄇㄧㄢˋ.',
            pinyin: 'ta1 hen3 qiong2 zong3 shi4 chi1 mei2/mo4 you3 fang4 liao4 de/di2/di4 la1 mian4.',
            translation: '彼女はとても貧乏で、 いつも具無しのラーメンを食べています。',
            memo: ''
          },
          {
            word: '父親',
            sentence: '他的父親買的新車就像停在那裡的那樣。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄈㄨˋ ㄑㄧㄣ ㄇㄞˇ ㄉㄜ˙ ㄒㄧㄣ ㄔㄜ ㄐㄧㄡˋ ㄒㄧㄤˋ ㄊㄧㄥˊ ㄗㄞˋ ㄋㄚˋ ㄌㄧ˙ ㄉㄜ˙ ㄋㄚˋ ㄧㄤˋ.',
            pinyin: 'ta1 de/di2/di4 fu4 qin1 mai3 de/di2/di4 xin1 che1 jiu4 xiang4 ting2 zai4 na4 li3 de/di2/di4 na4 yang4.',
            translation: '彼の父親が買った新しい車は、 そこに停まっている車のような感じです。',
            memo: ''
          },
          {
            word: '母親',
            sentence: '母親發現一孩子的鞋子發霉了， 就丟掉了。',
            bopomofo: 'ㄇㄨˇ ㄑㄧㄣ ㄈㄚ ㄒㄧㄢˋ ㄧ ㄏㄞˊ ㄗ˙ ㄉㄜ˙ ㄒㄧㄝˊ ㄗˇ ㄈㄚ ㄇㄟˊ ㄌㄜ˙   ㄐㄧㄡˋ ㄉㄧㄡ ㄉㄧㄠˋ ㄌㄜ˙.',
            pinyin: 'mu3 qin1 fa1/fa4 xian4 yi1 hai2 zi3 de/di2/di4 xie2 zi3 fa1/fa4 mei2 le/liao3 jiu4 diu1 diao4 le/liao3.',
            translation: '母親は子どもの靴にカビが生えているのを見つけて、 すぐに捨てました。',
            memo: ''
          },
          {
            word: '學徒',
            sentence: '學徒犯了很嚴重錯誤, 難怪他面無表情。',
            bopomofo: 'ㄒㄩㄝˊ ㄊㄨˊ ㄈㄢˋ ㄌㄜ˙ ㄏㄣˇ ㄧㄢˊ ㄓㄨㄥˋ ㄘㄨㄛˋ ㄨˋ   ㄋㄢˊ ㄍㄨㄞˋ ㄊㄚ ㄇㄧㄢˋ ㄨˊ ㄅㄧㄠˇ ㄑㄧㄥˊ.',
            pinyin: 'xue2 tu2 fan4 le/liao3 hen3 yan2 chong2/zhong4 cuo4 wu4 nan2/nan4 guai4 ta1 mian4 wu2 biao3 qing2.',
            translation: '見習いは大きなミスをしたので、 とてもひどい顔色をしているのも無理はありません。',
            memo: ''
          },
          {
            word: '吃苦',
            sentence: '跟那個新的同事完全沒辦法溝通， 他吃了很多苦。',
            bopomofo: 'ㄍㄣ ㄋㄚˋ ㄍㄜˋ ㄒㄧㄣ ㄉㄜ˙ ㄊㄨㄥˊ ㄕˋ ㄨㄢˊ ㄑㄩㄢˊ ㄇㄟˊ ㄅㄢˋ ㄈㄚˇ ㄍㄡ ㄊㄨㄥ   ㄊㄚ ㄔ ㄌㄜ˙ ㄏㄣˇ ㄉㄨㄛ ㄎㄨˇ.',
            pinyin: 'gen1 na4 ge4 xin1 de/di2/di4 tong2 shi4 wan2 quan2 mei2/mo4 ban4 fa3 gou1 tong1 ta1 chi1 le/liao3 hen3 duo1 ku3.',
            translation: '新しく入ってきた同僚とは全くコミュニケーションが取れないので、 彼はとても苦しんでいます。',
            memo: ''
          },
          {
            word: '明白',
            sentence: '奶奶終於明白了網路的好處, 就開始在網路上找朋友了。',
            bopomofo: 'ㄋㄞˇ ㄋㄞˇ ㄓㄨㄥ ㄩˊ ㄇㄧㄥˊ ㄅㄞˊ ㄌㄜ˙ ㄨㄤˇ ㄌㄨˋ ㄉㄜ˙ ㄏㄠˇ ㄔㄨˋ   ㄐㄧㄡˋ ㄎㄞ ㄕˇ ㄗㄞˋ ㄨㄤˇ ㄌㄨˋ ㄕㄤˋ ㄓㄠˇ ㄆㄥˊ ㄧㄡˇ ㄌㄜ˙.',
            pinyin: 'nai3 nai3 zhong1 wu1/yu1 ming2 bai2 le/liao3 wang3 lu4 de/di2/di4 hao3/hao4 chu3/chu4 jiu4 kai1 shi3 zai4 wang3 lu4 shang4 zhao3 peng2 you3 le/liao3.',
            translation: 'おばあちゃんはついにインターネットの利点を理解し、 ネットで友達探しまで始めました。',
            memo: ''
          },
          {
            word: '當兵',
            sentence: '孩子快要當兵了，所以他會離家生活。',
            bopomofo: 'ㄏㄞˊ ㄗ˙ ㄎㄨㄞˋ ㄧㄠˋ ㄉㄤ ㄅㄧㄥ ㄌㄜ˙  ㄙㄨㄛˇ ㄧˇ ㄊㄚ ㄏㄨㄟˋ ㄌㄧˊ ㄐㄧㄚ ㄕㄥ ㄏㄨㄛˊ.',
            pinyin: 'hai2 zi3 kuai4 yao1/yao4 dang1/dang4 bing1 le/liao3 suo3 yi3 ta1 hui4 li4 jia1 sheng1 huo2.',
            translation: '子どもはそろそろ兵役に就くので、 しばらくは家族と離れて暮らします。',
            memo: ''
          },
          {
            word: '認字',
            sentence: '學習新文字的時候電腦鍵盤也很有用。',
            bopomofo: 'ㄒㄩㄝˊ ㄒㄧˊ ㄒㄧㄣ ㄨㄣˊ ㄗˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄉㄧㄢˋ ㄋㄠˇ ㄐㄧㄢˋ ㄆㄢˊ ㄧㄝˇ ㄏㄣˇ ㄧㄡˇ ㄩㄥˋ.',
            pinyin: 'xue2 xi2 xin1 wen2 zi4 de/di2/di4 shi2 hou4 dian4 nao3 jian4 xuan2 ye3 hen3 you3 yong4.',
            translation: '新しい文字を学ぶ時は、パソコンのキーボードも有用です。',
            memo: ''
          },
          {
            word: '烘焙',
            sentence: '鄰居好像在烤餅乾， 味道很香。',
            bopomofo: 'ㄌㄧㄣˊ ㄐㄩ ㄏㄠˇ ㄒㄧㄤˋ ㄗㄞˋ ㄎㄠˇ ㄅㄧㄥˇ ㄍㄢ   ㄨㄟˋ ㄉㄠˋ ㄏㄣˇ ㄒㄧㄤ.',
            pinyin: 'lin2 ju1 hao3/hao4 xiang4 zai4 kao3 bing3 qian2 wei4 dao4 hen3 xiang1.',
            translation: 'お隣さんはクッキーを焼いているようで、 とてもいい匂いがします。',
            memo: ''
          },
          {
            word: '學習',
            sentence: '有的時候在家學習不如在咖啡廳更能專心。',
            bopomofo: 'ㄧㄡˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄗㄞˋ ㄐㄧㄚ ㄒㄩㄝˊ ㄒㄧˊ ㄅㄨˋ ㄖㄨˊ ㄗㄞˋ ㄎㄚ ㄈㄟ ㄊㄧㄥ ㄍㄥˋ ㄋㄥˊ ㄓㄨㄢ ㄒㄧㄣ.',
            pinyin: 'you3 de/di2/di4 shi2 hou4 zai4 jia1 xue2 xi2 bu2/bu4 ru2 zai4 ga1/ka1 fei1 ting1 geng1/geng4 neng2 zhuan1 xin1.',
            translation: '家で勉強するよりも、 カフェで勉強した方が集中できる時があります。',
            memo: ''
          },
          {
            word: '技術',
            sentence: '電氣工作需要技術， 因此外行不能做。',
            bopomofo: 'ㄉㄧㄢˋ ㄑㄧˋ ㄍㄨㄥ ㄗㄨㄛˋ ㄒㄩ ㄧㄠˋ ㄐㄧˋ ㄕㄨˋ   ㄧㄣ ㄘˇ ㄨㄞˋ ㄏㄤˊ ㄅㄨˋ ㄋㄥˊ ㄗㄨㄛˋ.',
            pinyin: 'dian4 xi4 gong1 zuo1/zuo4 xu1 yao1/yao4 ji4 shu4 yin1 ci3 wai4 hang2/xing2/hang4/heng2 bu2/bu4 neng2 zuo4.',
            translation: '電気工事には技術が必要なので、 素人にはできません。',
            memo: ''
          },
          {
            word: '藝術',
            sentence: '我覺得我的寶寶畫的畫已經到了藝術的領域。',
            bopomofo: 'ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄨㄛˇ ㄉㄜ˙ ㄅㄠˇ ㄅㄠˇ ㄏㄨㄚˋ ㄉㄜ˙ ㄏㄨㄚˋ ㄧˇ ㄐㄧㄥ ㄉㄠˋ ㄌㄜ˙ ㄧˋ ㄕㄨˋ ㄉㄜ˙ ㄌㄧㄥˇ ㄩˋ.',
            pinyin: 'wo3 jiao4/jue2 de/de2/dei3 wo3 de/di2/di4 bao)3 bao)3 hua4 de/di2/di4 hua4 yi3 jing1 dao4 le/liao3 yi4 shu4 de/di2/di4 ling3 yu4.',
            translation: '私の赤ちゃんの描いた絵は既に芸術の領域に達していると思います。',
            memo: ''
          },
          {
            word: '經過',
            sentence: '經過管理層討論和作出結論, 我們將按照新的規定。',
            bopomofo: 'ㄐㄧㄥ ㄍㄨㄛˋ ㄍㄨㄢˇ ㄌㄧˇ ㄘㄥˊ ㄊㄠˇ ㄌㄨㄣˋ ㄏㄜˊ ㄗㄨㄛˋ ㄔㄨ ㄐㄧㄝˊ ㄌㄨㄣˋ   ㄨㄛˇ ㄇㄣ˙ ㄐㄧㄤ ㄢˋ ㄓㄠˋ ㄒㄧㄣ ㄉㄜ˙ ㄍㄨㄟ ㄉㄧㄥˋ.',
            pinyin: 'jing1 guo4 guan3 li3 ceng2 tao3 lun4 he2/he/huo/he4/hu2/huo2/huo4 zuo1/zuo4 chu1 jie1/jie2 lun4 wo3 men2/men jiang1/jiang4 an4 zhao4 xin1 de/di2/di4 gui4 ding4.',
            translation: '経営陣が話し合って結論を出した後、 私たちは新しい規定に従う事になります。',
            memo: ''
          },
          {
            word: '終於',
            sentence: '他終於懂了國際象棋的規則。',
            bopomofo: 'ㄊㄚ ㄓㄨㄥ ㄩˊ ㄉㄨㄥˇ ㄌㄜ˙ ㄍㄨㄛˊ ㄐㄧˋ ㄒㄧㄤˋ ㄑㄧˊ ㄉㄜ˙ ㄍㄨㄟ ㄗㄜˊ.',
            pinyin: 'ta1 zhong1 wu1/yu1 dong3 le/liao3 guo2 ji4 xiang4 qi2 de/di2/di4 gui4 ze2.',
            translation: '彼はついにチェスのルールを理解しました。',
            memo: ''
          },
          {
            word: '億',
            sentence: '如果妄想中了一億元的彩票後應該這麼早， 這樣想總是浪費時間。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄨㄤˋ ㄒㄧㄤˇ ㄓㄨㄥ ㄌㄜ˙ ㄧ ㄧˋ ㄩㄢˊ ㄉㄜ˙ ㄘㄞˇ ㄆㄧㄠˋ ㄏㄡˋ ㄧㄥ ㄍㄞ ㄓㄜˋ ㄇㄜ˙ ㄗㄠˇ   ㄓㄜˋ ㄧㄤˋ ㄒㄧㄤˇ ㄗㄨㄥˇ ㄕˋ ㄌㄤˋ ㄈㄟˋ ㄕˊ ㄐㄧㄢ.',
            pinyin: 'ru2 guo3 wang4 xiang3 zhong1/zhong4 le/liao3 yi1 yi4 yuan2 de/di2/di4 cai3 piao4 hou4 ying1/ying4 gai1 zhe4 me/mo2 zao3 zhe4 yang4 xiang3 zong3 shi4 lang4 fei4 shi2 jian1/jian4.',
            translation: '宝くじで一億円当たったら何に使うかという妄想で、 いつも無駄な時間を過ごしてしまいます。',
            memo: ''
          },
          {
            word: '夢想',
            sentence: '我的夢想是跟我的貓一起喝啤酒。',
            bopomofo: 'ㄨㄛˇ ㄉㄜ˙ ㄇㄥˋ ㄒㄧㄤˇ ㄕˋ ㄍㄣ ㄨㄛˇ ㄉㄜ˙ ㄇㄠ ㄧˋ ㄑㄧˇ ㄏㄜ ㄆㄧˊ ㄐㄧㄡˇ.',
            pinyin: 'wo3 de/di2/di4 meng4 xiang3 shi4 gen1 wo3 de/di2/di4 mao1 yi1 qi3 he1 pi2 jiu3.',
            translation: '私の夢は猫と一緒にビールを飲むことです。',
            memo: ''
          },
          {
            word: '成為',
            sentence: '我覺得跟愛喝酒的人能成為好朋友。',
            bopomofo: 'ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄍㄣ ㄞˋ ㄏㄜ ㄐㄧㄡˇ ㄉㄜ˙ ㄖㄣˊ ㄋㄥˊ ㄔㄥˊ ㄨㄟˊ ㄏㄠˇ ㄆㄥˊ ㄧㄡ˙.',
            pinyin: 'wo3 jiao4/jue2 de/de2/dei3 gen1 ai4 he1 jiu3 de/di2/di4 ren2 neng2 cheng2 wei2/wei4 hao3/hao4 peng2 you3.',
            translation: 'お酒を飲むのが好きな人とは良い友達になれると思います。',
            memo: ''
          },
          {
            word: '企業家',
            sentence: '那位企業家的生意做得有聲有色。',
            bopomofo: 'ㄋㄚˋ ㄨㄟˋ ㄑㄧˇ ㄧㄝˋ ㄐㄧㄚ ㄉㄜ˙ ㄕㄥ ㄧˋ ㄗㄨㄛˋ ㄉㄜˊ ㄧㄡˇ ㄕㄥ ㄧㄡˇ ㄙㄜˋ.',
            pinyin: 'na4 wei4 qi3 ye4 jia1 de/di2/di4 sheng1 yi4 zuo4 de/de2/dei3 you3 sheng1 you3 se4.',
            translation: 'その起業家の事業は非常に上手くいっています。',
            memo: ''
          },
          {
            word: '分店',
            sentence: '那家商店很賺錢，所以最近在這附近開了一家分店。',
            bopomofo: 'ㄋㄚˋ ㄐㄧㄚ ㄕㄤ ㄉㄧㄢˋ ㄏㄣˇ ㄓㄨㄢˋ ㄑㄧㄢˊ  ㄙㄨㄛˇ ㄧˇ ㄗㄨㄟˋ ㄐㄧㄣˋ ㄗㄞˋ ㄓㄜˋ ㄈㄨˋ ㄐㄧㄣˋ ㄎㄞ ㄌㄜ˙ ㄧ ㄐㄧㄚ ㄈㄣ ㄉㄧㄢˋ.',
            pinyin: 'na4 jia1 shang1 dian4 hen3 zhuan4 qian2 suo3 yi3 zui4 jin4 zai4 zhe4 fu4 jin4 kai1 le/liao3 yi1 jia1 fen1/fen4/fen dian4.',
            translation: 'あの店は儲かっているので、 最近近所に支店を出しました。',
            memo: ''
          },
          {
            word: '原因',
            sentence: '發生火災的原因是一來有人抽煙， 二來那裡沒有滅火器。',
            bopomofo: 'ㄈㄚ ㄕㄥ ㄏㄨㄛˇ ㄗㄞ ㄉㄜ˙ ㄩㄢˊ ㄧㄣ ㄕˋ ㄧ ㄌㄞˊ ㄧㄡˇ ㄖㄣˊ ㄔㄡ ㄧㄢ   ㄦˋ ㄌㄞˊ ㄋㄚˋ ㄌㄧˇ ㄇㄟˊ ㄧㄡˇ ㄇㄧㄝˋ ㄏㄨㄛˇ ㄑㄧˋ.',
            pinyin: 'fa1/fa4 sheng1 huo3 zai1 de/di2/di4 yuan2 yin1 shi4 yi1 lai2 you3 ren2 chou1 yan1 er4 lai2 na4 li3 mei2/mo4 you3 mie4 huo3 qi4.',
            translation: '火災が発生した原因は第一に誰かがタバコを吸った事であり、 第二には消火器が無かった事です。',
            memo: ''
          },
          {
            word: '錄取',
            sentence: '在經濟不景氣的期間， 他終於被錄取正式員工了。',
            bopomofo: 'ㄗㄞˋ ㄐㄧㄥ ㄐㄧˋ ㄅㄨˋ ㄐㄧㄥˇ ㄑㄧˋ ㄉㄜ˙ ㄑㄧ ㄐㄧㄢ   ㄊㄚ ㄓㄨㄥ ㄩˊ ㄅㄟˋ ㄌㄨˋ ㄑㄩˇ ㄓㄥˋ ㄕˋ ㄩㄢˊ ㄍㄨㄥ ㄌㄜ˙.',
            pinyin: 'zai4 jing1 ji3/ji4 bu2/bu4 jing3 xi4 de/di2/di4 qi1 jian1/jian4 ta1 zhong1 wu1/yu1 bei4 lu4 qu3 zheng4 shi4 yuan2 gong1 le/liao3.',
            translation: '不景気の中、 彼はついに正社員として採用されました。',
            memo: ''
          },
          {
            word: '成功',
            sentence: '那個孩子學會怎麼騎機車, 因此成功了取得駕照。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄏㄞˊ ㄗ˙ ㄒㄩㄝˊ ㄏㄨㄟˋ ㄗㄣˇ ㄇㄜ˙ ㄑㄧˊ ㄐㄧ ㄔㄜ   ㄧㄣ ㄘˇ ㄔㄥˊ ㄍㄨㄥ ㄌㄜ˙ ㄑㄩˇ ㄉㄜ˙ ㄐㄧㄚˋ ㄓㄠˋ.',
            pinyin: 'na4 ge4 hai2 zi3 xue2 hui4 zen3 me/mo2 qi2 ji1 che1 yin1 ci3 cheng2 gong1 le/liao3 qu3 de/de2/dei3 jia4 zhao4.',
            translation: '子供はバイクの乗り方を学び、 運転免許を取得することに成功しました。',
            memo: ''
          },
          {
            word: '鼓勵',
            sentence: '國家最近鼓勵在家工作。',
            bopomofo: 'ㄍㄨㄛˊ ㄐㄧㄚ ㄗㄨㄟˋ ㄐㄧㄣˋ ㄍㄨˇ ㄌㄧˋ ㄗㄞˋ ㄐㄧㄚ ㄍㄨㄥ ㄗㄨㄛˋ.',
            pinyin: 'guo2 jia1 zui4 jin4 gu3 li4 zai4 jia1 gong1 zuo1/zuo4.',
            translation: '国は最近、 在宅勤務を奨励しています。',
            memo: ''
          },
          {
            word: '吳寶春',
            sentence: '吳寶春先生的麵包店賣非常獨特的麵包。',
            bopomofo: 'ㄨˊ ㄅㄠˇ ㄔㄨㄣ ㄒㄧㄢ ㄕㄥ ㄉㄜ˙ ㄇㄧㄢˋ ㄅㄠ ㄉㄧㄢˋ ㄇㄞˋ ㄈㄟ ㄔㄤˊ ㄉㄨˊ ㄊㄜˋ ㄉㄜ˙ ㄇㄧㄢˋ ㄅㄠ.',
            pinyin: 'wu2 bao)3 chun1 xian1 sheng1 de/di2/di4 mian4 bao1 dian4 mai4 fei1 chang2 du2 te4 de/di2/di4 mian4 bao1.',
            translation: '吳寶春さんのパン屋では非常にユニークなパンが販売されています。',
            memo: ''
          },
          {
            word: '新加坡',
            sentence: '你的語言能力是不是在新加坡的留學進步的?',
            bopomofo: 'ㄋㄧˇ ㄉㄜ˙ ㄩˇ ㄧㄢˊ ㄋㄥˊ ㄌㄧˋ ㄕˋ ㄅㄨˊ ㄕˋ ㄗㄞˋ ㄒㄧㄣ ㄐㄧㄚ ㄆㄛ ㄉㄜ˙ ㄌㄧㄡˊ ㄒㄩㄝˊ ㄐㄧㄣˋ ㄅㄨˋ ㄉㄜ˙?',
            pinyin: 'ni3 de/di2/di4 yu3 yan2 neng2 li4 shi4 bu2/bu4 shi4 zai4 xin1 jia1 po1 de/di2/di4 liu2 xue2 jin4 bu4 de/di2/di4?',
            translation: 'あなたの語学力はシンガポールでの留学によって上達したのですか?',
            memo: ''
          },
          {
            word: '日文',
            sentence: '日文使用很多元音， 因此即使你說的聲音很小我也容易聽得到。',
            bopomofo: 'ㄖˋ ㄨㄣˊ ㄕˇ ㄩㄥˋ ㄏㄣˇ ㄉㄨㄛ ㄩㄢˊ ㄧㄣ   ㄧㄣ ㄘˇ ㄐㄧˊ ㄕˇ ㄋㄧˇ ㄕㄨㄛ ㄉㄜ˙ ㄕㄥ ㄧㄣ ㄏㄣˇ ㄒㄧㄠˇ ㄨㄛˇ ㄧㄝˇ ㄖㄨㄥˊ ㄧˋ ㄊㄧㄥ ㄉㄜˊ ㄉㄠˋ.',
            pinyin: 'ri4 wen2 shi3 yong4 hen3 duo1 yuan2 yin1 yin1 ci3 ji2 shi3 ni3 shuo1 de/di2/di4 sheng1 yin1 hen3 xiao3 wo3 ye3 rong2 yi4 ting de/de2/dei3 dao4.',
            translation: '日本語は母音を多用するので、 小さな声で喋っても聞き取りやすいです。',
            memo: ''
          },
          {
            word: '世界麵包大賽',
            sentence: '看著世界麵包大賽， 我覺得做麵包是一種藝術。',
            bopomofo: 'ㄎㄢˋ ㄓㄜ˙ ㄕˋ ㄐㄧㄝˋ ㄇㄧㄢˋ ㄅㄠ ㄉㄚˋ ㄙㄞˋ   ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄗㄨㄛˋ ㄇㄧㄢˋ ㄅㄠ ㄕˋ ㄧ ㄓㄨㄥˇ ㄧˋ ㄕㄨˋ.',
            pinyin: 'kan4/kan1 zhe/zhuo2 shi4 jie4 mian4 bao1 da4 sai4 wo3 jiao4/jue2 de/de2/dei3 zuo4 mian4 bao1 shi4 yi1 zhong4/zhong3 yi4 shu4.',
            translation: '世界パンコンテストを見ていると、 パン作りも一種のアートのような気がしてきます。',
            memo: ''
          },
          {
            word: 'EMBA（高級管理人員工商管理碩士）',
            sentence: '他的公司為了鼓勵得到EMBA, 用公司的錢出國留學並非沒有可能。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄍㄨㄥ ㄙ ㄨㄟˋ ㄌㄜ˙ ㄍㄨˇ ㄌㄧˋ ㄉㄜˊ ㄉㄠˋ       ㄩㄥˋ ㄍㄨㄥ ㄙ ㄉㄜ˙ ㄑㄧㄢˊ ㄔㄨ ㄍㄨㄛˊ ㄌㄧㄡˊ ㄒㄩㄝˊ ㄅㄧㄥˋ ㄈㄟ ㄇㄟˊ ㄧㄡˇ ㄎㄜˇ ㄋㄥˊ.',
            pinyin: 'ta1 de/di2/di4 gong1 si1 wei2/wei4 le/liao3 gu3 li4 de/de2/dei3 dao4 yong4 gong1 si1 de/di2/di4 qian2 chu1 guo2 liu2 xue2 bing4 fei1 mei2/mo4 you3 ke3 neng2.',
            translation: '彼の会社はEMBAの取得を奨励していて、 会社のお金で留学する事も不可能ではありません。',
            memo: ''
          },
          {
            word: '小時候',
            sentence: '我小時候常常去海邊， 所以我擅長游泳。',
            bopomofo: 'ㄨㄛˇ ㄒㄧㄠˇ ㄕˊ ㄏㄡˋ ㄔㄤˊ ㄔㄤˊ ㄑㄩˋ ㄏㄞˇ ㄅㄧㄢ   ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄕㄢˋ ㄔㄤˊ ㄧㄡˊ ㄩㄥˇ.',
            pinyin: 'wo3 xiao3 shi2 hou4 chang2 chang2 qu4 hai3 bian1 suo3 yi3 wo3 shan4 chang2/zhang3 you/you2 yong3.',
            translation: '小さい頃はよく海に行っていたので、 泳ぎは得意です。',
            memo: ''
          },
          {
            word: '大開眼界',
            sentence: '他在大學的時候認識了一些外國朋友, 那個經驗讓他大開眼界。',
            bopomofo: 'ㄊㄚ ㄗㄞˋ ㄉㄚˋ ㄒㄩㄝˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄖㄣˋ ㄕ˙ ㄌㄜ˙ ㄧ ㄒㄧㄝ ㄨㄞˋ ㄍㄨㄛˊ ㄆㄥˊ ㄧㄡˇ   ㄋㄚˋ ㄍㄜˋ ㄐㄧㄥ ㄧㄢˋ ㄖㄤˋ ㄊㄚ ㄉㄚˋ ㄎㄞ ㄧㄢˇ ㄐㄧㄝˋ.',
            pinyin: 'ta1 zai4 da4 xue2 de/di2/di4 shi2 hou4 ren4 shi2 le/liao3 yi1 xie1 wai4 guo2 peng2 you3 na4 ge4 jing1 yan4 rang4 ta1 da4 kai1 yan3 jie4.',
            translation: '彼は大学時代に何人かの外国人と知り合い、 それが彼の視野を広げるきっかけになりました。',
            memo: ''
          },
          {
            word: 'X分之Y',
            sentence: '據說世界人口的三分之一看不到銀河。',
            bopomofo: 'ㄐㄩˋ ㄕㄨㄛ ㄕˋ ㄐㄧㄝˋ ㄖㄣˊ ㄎㄡˇ ㄉㄜ˙ ㄙㄢ ㄈㄣ ㄓ ㄧ ㄎㄢˋ ㄅㄨˊ ㄉㄠˋ ㄧㄣˊ ㄏㄜˊ.',
            pinyin: 'ju4 shuo1 shi4 jie4 ren2 kou3 de/di2/di4 san1 fen1/fen4/fen zhi1 yi1 kan4/kan1 bu2/bu4 dao4 yin2 he2.',
            translation: '世界の人口の3分の1が天の川を見ることができないと言われています。',
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
