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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第3章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第3章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      data: {
        title: '當代中文課程課3・第3章',
        words: [
          {
            word: '陳敏萱',
            sentence: '在陳敏萱國家的人平均身高很高。',
            bopomofo: 'ㄗㄞˋ ㄔㄣˊ ㄇㄧㄣˇ ㄒㄩㄢ ㄍㄨㄛˊ ㄐㄧㄚ ㄉㄜ˙ ㄖㄣˊ ㄆㄧㄥˊ ㄐㄩㄣ ㄕㄣ ㄍㄠ ㄏㄣˇ ㄍㄠ.',
            pinyin: 'zai4 chen2 min3 xuan1 guo2 jia1 de ren2 ping2 jun1 shen1 gao1 hen3 gao1.',
            translation: '陳敏萱の国では平均身長がとても高いです。',
            memo: '',
            changed: '☆'
          },
          {
            word: '高橋健太',
            sentence: '高橋健太敲門敲了兩三下但是沒有人出來， 所以放棄回家去了。',
            bopomofo: 'ㄍㄠ ㄑㄧㄠˊ ㄐㄧㄢˋ ㄊㄞˋ ㄑㄧㄠ ㄇㄣˊ ㄑㄧㄠ ㄌㄜ˙ ㄌㄧㄤˇ ㄙㄢ ㄒㄧㄚˋ ㄉㄢˋ ㄕˋ ㄇㄟˊ ㄧㄡˇ ㄖㄣˊ ㄔㄨ ㄌㄞˊ, ㄙㄨㄛˇ ㄧˇ ㄈㄤˋ ㄑㄧˋ ㄏㄨㄟˊ ㄐㄧㄚ ㄑㄩˋ ㄌㄜ˙.',
            pinyin: 'gao1 qiao2 jian4 tai4 qiao1 men2 qiao1 le liang3 san1 xia4 dan4 shi4 mei2 you3 ren2 chu1 lai2, suo3 yi3 fang4 qi4 hui2 jia1 qu4 le.',
            translation: '高橋健太は2、3回ドアをノックしたのですが誰も出てこなかったので、 諦めて家に帰りました。',
            memo: ''
          },
          {
            word: '空氣',
            sentence: '一直晴天雖然是好事， 但是我有點擔心空氣污染。',
            bopomofo: 'ㄧ ㄓˊ ㄑㄧㄥˊ ㄊㄧㄢ ㄙㄨㄟ ㄖㄢˊ ㄕˋ ㄏㄠˇ ㄕˋ, ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄧㄡˇ ㄉㄧㄢˇ ㄉㄢ ㄒㄧㄣ ㄎㄨㄥ ㄑㄧˋ ㄨ ㄖㄢˇ.',
            pinyin: 'yi1 zhi2 qing2 tian1 sui1 ran2 shi4 hao3 shi4, dan4 shi4 wo3 you3 dian3 dan1 xin1 kong1 qi4 wu1 ran3.',
            translation: '晴れが続くのはいいのですが、 空気の汚染が少し心配です。',
            memo: '',
            changed: '☆'
          },
          {
            word: '影響',
            sentence: '他們兩個打架了， 給別人的影響很大， 看起來大家都很緊張。',
            bopomofo: 'ㄊㄚ ㄇㄣ˙ ㄌㄧㄤˇ ㄍㄜˋ ㄉㄚˇ ㄐㄧㄚˋ ㄌㄜ˙, ㄍㄟˇ ㄅㄧㄝˊ ㄖㄣˊ ㄉㄜ˙ ㄧㄥˇ ㄒㄧㄤˇ ㄏㄣˇ ㄉㄚˋ, ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄉㄚˋ ㄐㄧㄚ ㄉㄡ ㄏㄣˇ ㄐㄧㄣˇ ㄓㄤ.',
            pinyin: 'ta1 men liang3 ge4 da3 jia4 le, gei3 bie2 ren2 de ying3 xiang3 hen3 da4, kan4 qi3 lai2 da4 jia1 dou1 hen3 jin3 zhang1.',
            translation: '彼ら2人が喧嘩をした影響はとても大きく、 今日はみんなが緊張しているようです。',
            memo: '',
            changed: '☆'
          },
          {
            word: '穩定',
            sentence: '她是個心思細膩的人, 一直希望穩定的人生。',
            bopomofo: 'ㄊㄚ ㄕˋ ㄍㄜˋ ㄒㄧㄣ ㄙ ㄒㄧˋ ㄋㄧˋ ㄉㄜ˙ ㄖㄣˊ, ㄧ ㄓˊ ㄒㄧ ㄨㄤˋ ㄨㄣˇ ㄉㄧㄥˋ ㄉㄜ˙ ㄖㄣˊ ㄕㄥ.',
            pinyin: 'ta1 shi4 ge4 xin1 si1 xi4 ni4 de ren2, yi1 zhi2 xi1 wang4 wen3 ding4 de ren2 sheng1.',
            translation: '彼女はとても繊細な人で、 安定した人生を常に望んでいます。',
            memo: ''
          },
          {
            word: '幸虧',
            sentence: '幸虧今年淡季的收入是旺季的三分之二多。',
            bopomofo: 'ㄒㄧㄥˋ ㄎㄨㄟ ㄐㄧㄣ ㄋㄧㄢˊ ㄉㄢˋ ㄐㄧˋ ㄉㄜ˙ ㄕㄡ ㄖㄨˋ ㄕˋ ㄨㄤˋ ㄐㄧˋ ㄉㄜ˙ ㄙㄢ ㄈㄣ ㄓ ㄦˋ ㄉㄨㄛ.',
            pinyin: 'xing4 kui1 jin1 nian2 dan4 ji4 de shou1 ru4 shi4 wang4 ji4 de san1 fen1 zhi1 er4 duo1.',
            translation: '幸いな事に、 今年のローシーズンの収入はハイシーズンの2/3以上でした。',
            memo: ''
          },
          {
            word: '躲',
            sentence: '為了養正在躲在院子裡的貓, 我一定得說服媽媽。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄧㄤˇ ㄓㄥˋ ㄗㄞˋ ㄉㄨㄛˇ ㄗㄞˋ ㄩㄢˋ ㄗ˙ ㄌㄧˇ ㄉㄜ˙ ㄇㄠ, ㄨㄛˇ ㄧˊ ㄉㄧㄥˋ ㄉㄟˇ ㄕㄨㄛ ㄈㄨˊ ㄇㄚ ㄇㄚ.',
            pinyin: 'wei4 le yang3 zheng4 zai4 duo3 zai4 yuan4 zi li3 de mao1, wo3 yi1 ding4 dei3 shuo1 fu2 ma1 ma1.',
            translation: '今は庭に隠している猫を飼えるように、 なんとかお母さんを説得しないといけません。',
            memo: ''
          },
          {
            word: '度',
            sentence: '我在溫度降到五度以下的日子絕對不想出去。',
            bopomofo: 'ㄨㄛˇ ㄗㄞˋ ㄨㄣ ㄉㄨˋ ㄐㄧㄤˋ ㄉㄠˋ ㄨˇ ㄉㄨˋ ㄧˇ ㄒㄧㄚˋ ㄉㄜ˙ ㄖˋ ㄗ˙ ㄐㄩㄝˊ ㄉㄨㄟˋ ㄅㄨˋ ㄒㄧㄤˇ ㄔㄨ ㄑㄩˋ.',
            pinyin: 'wo3 zai4 wen1 du4 jiang4 dao4 wu3 du4 yi3 xia4 de ri4 zi jue2 dui4 bu4 xiang3 chu1 qu4.',
            translation: '気温が5度を下回る日は、 絶対に外出したくないです。',
            memo: ''
          },
          {
            word: '★温度',
            sentence: '溫泉的溫度太高了， 變成水煮蛋了。',
            bopomofo: 'ㄨㄣ ㄑㄩㄢˊ ㄉㄜ˙ ㄨㄣ ㄉㄨˋ ㄊㄞˋ ㄍㄠ ㄌㄜ˙, ㄅㄧㄢˋ ㄔㄥˊ ㄕㄨㄟˇ ㄓㄨˇ ㄉㄢˋ ㄌㄜ˙.',
            pinyin: 'wen1 quan2 de wen1 du4 tai4 gao1 le, bian4 cheng2 shui3 zhu3 dan4 le.',
            translation: '温泉の温度が高すぎて、 ゆで卵になってしまいますよ。',
            memo: '※「ユデダコ」の中国語?',
            changed: '☆'
          },
          {
            word: '零下',
            sentence: '零下的情況連熊都冬眠了， 為什麼我們得上班?',
            bopomofo: 'ㄌㄧㄥˊ ㄒㄧㄚˋ ㄉㄜ˙ ㄑㄧㄥˊ ㄎㄨㄤˋ ㄌㄧㄢˊ ㄒㄩㄥˊ ㄉㄡ ㄉㄨㄥ ㄇㄧㄢˊ ㄌㄜ˙, ㄨㄟˋ ㄕˊ ㄇㄜ˙ ㄨㄛˇ ㄇㄣ˙ ㄉㄟˇ ㄕㄤˋ ㄅㄢ?',
            pinyin: 'ling2 xia4 de qing2 kuang4 lian2 xiong2 dou1 dong1 mian2 le, wei4 shen2 me wo3 men dei3 shang4 ban1?',
            translation: '氷点下の状況では熊ですら冬眠するのに、 なぜ私たちは仕事に行かないといけないのですか?',
            memo: '',
            changed: '☆'
          },
          {
            word: '★感覺',
            sentence: '貓身上的灰塵好像揚起來了， 應該要給牠洗澡了。',
            bopomofo: 'ㄇㄠ ㄕㄣ ㄕㄤˋ ㄉㄜ˙ ㄏㄨㄟ ㄔㄣˊ ㄏㄠˇ ㄒㄧㄤˋ ㄧㄤˊ ㄑㄧˇ ㄌㄞˊ ㄌㄜ˙, ㄧㄥ ㄍㄞ ㄧㄠˋ ㄍㄟˇ ㄊㄚ ㄒㄧˇ ㄗㄠˇ ㄌㄜ˙.',
            pinyin: 'mao1 shen1 shang4 de hui1 chen2 hao3 xiang4 yang2 qi3 lai2 le, ying1 gai1 yao4 gei3 ta1 xi3 zao3 le.',
            translation: '猫が少し埃っぽい感じがするので、 そろそろお風呂に入れた方がいいかもしれません。',
            memo: '※「感覺」は使えない?',
            changed: '☆'
          },
          {
            word: '★實際',
            sentence: '事實上，青春期的孩子或多或少都得了中二病。',
            bopomofo: 'ㄕˋ ㄕˊ ㄕㄤˋ, ㄑㄧㄥ ㄔㄨㄣ ㄑㄧ ㄉㄜ˙ ㄏㄞˊ ㄗ˙ ㄏㄨㄛˋ ㄉㄨㄛ ㄏㄨㄛˋ ㄕㄠˇ ㄉㄡ ㄉㄜˊ ㄌㄜ˙ ㄓㄨㄥ ㄦˋ ㄅㄧㄥˋ.',
            pinyin: 'shi4 shi2 shang4, qing1 chun1 qi1 de hai2 zi huo4 duo1 huo4 shao3 dou1 de2 le zhong1 er4 bing4.',
            translation: '実際、 思春期の子供はみんな多かれ少なかれ中二病を患っています。',
            memo: '※中文沒有清楚的解釋， 但是簡單來說就是「裝大人」的意思。',
            changed: '☆'
          },
          {
            word: '★難怪',
            sentence: '因為那個大胃王把五公斤的歐姆蛋包飯吃光了, 難怪他嚇傻了。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄋㄚˋ ㄍㄜˋ ㄉㄚˋ ㄨㄟˋ ㄨㄤˊ ㄅㄚˇ ㄨˇ ㄍㄨㄥ ㄐㄧㄣ ㄉㄜ˙ ㄡ ㄇㄨˇ ㄉㄢˋ ㄅㄠ ㄈㄢˋ ㄔ ㄍㄨㄤ ㄌㄜ˙, ㄋㄢˊ ㄍㄨㄞˋ ㄊㄚ ㄒㄧㄚˋ ㄕㄚˇ ㄌㄜ˙.',
            pinyin: 'yin1 wei4 na4 ge4 da4 wei4 wang2 ba3 wu3 gong1 jin1 de ou1 mu3 dan4 bao1 fan4 chi1 guang1 le, nan2 guai4 ta1 xia4 sha3 le.',
            translation: 'その大食いの人は5キロのオムライスを平らげたので、 彼が驚いてポカンとしたのも不思議ではありません。',
            memo: '※「嚇傻了(ㄒㄧㄚˋ ㄕㄚˇ ㄌㄜ˙)」の発音?'
          },
          {
            word: '季節',
            sentence: '季節變化的時候, 我皮膚總是有一點粗糙。',
            bopomofo: 'ㄐㄧˋ ㄐㄧㄝˊ ㄅㄧㄢˋ ㄏㄨㄚˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄨㄛˇ ㄆㄧˊ ㄈㄨ ㄗㄨㄥˇ ㄕˋ ㄧㄡˇ ㄧˋ ㄉㄧㄢˇ ㄘㄨ ㄘㄠ.',
            pinyin: 'ji4 jie2 bian4 hua4 de shi2 hou4, wo3 pi2 fu1 zong3 shi4 you3 yi4 dian3 cu1 cao1.',
            translation: '季節の変わり目は、 いつも少し肌が荒れます。',
            memo: '',
            changed: '☆'
          },
          {
            word: '★火鍋',
            sentence: '叔叔的個性很大剌剌, 即使把鳳梨放在火鍋裡他也不會察覺到。',
            bopomofo: 'ㄕㄨ ㄕㄨ ㄉㄜ˙ ㄍㄜˋ ㄒㄧㄥˋ ㄏㄣˇ ㄉㄚˋ ㄌㄚˋ ㄌㄚˋ, ㄐㄧˊ ㄕˇ ㄅㄚˇ ㄈㄥˋ ㄌㄧˊ ㄈㄤˋ ㄗㄞˋ ㄏㄨㄛˇ ㄍㄨㄛ ㄌㄧˇ ㄊㄚ ㄧㄝˇ ㄅㄨˊ ㄏㄨㄟˋ ㄔㄚˊ ㄐㄩㄝˊ ㄉㄠˋ.',
            pinyin: 'shu1 shu1 de ge4 xing4 hen3 da4 la4 la4, ji2 shi3 ba3 feng4 li2 fang4 zai4 huo3 guo1 li3 ta1 ye3 bu2 hui4 cha2 jue2 dao4.',
            translation: 'おじさんはとても大雑把な性格をしているので、 鍋にパイナップルを入れても気が付きません。',
            memo: '※「察覺到」:「気付く」? 「注意到」とは違う?',
            changed: '☆'
          },
          {
            word: '海鮮',
            sentence: '這趟旅行的目的地是海邊, 一定有很好吃的海鮮料理。',
            bopomofo: 'ㄓㄜˋ ㄊㄤˋ ㄌㄩˇ ㄒㄧㄥˊ ㄉㄜ˙ ㄇㄨˋ ㄉㄧˋ ㄉㄧˋ ㄕˋ ㄏㄞˇ ㄅㄧㄢ, ㄧ ㄉㄧㄥˋ ㄧㄡˇ ㄏㄣˇ ㄏㄠˇ ㄔ ㄉㄜ˙ ㄏㄞˇ ㄒㄧㄢ ㄌㄧㄠˋ ㄌㄧˇ.',
            pinyin: 'zhe4 tang4 lu3 xing2 de mu4 di4 di4 shi4 hai3 bian1, yi1 ding4 you3 hen3 hao3 chi1 de hai3 xian1 liao4 li3.',
            translation: '今回の旅行の目的地は海沿いなので、 おいしいシーフード料理があるに違いありません。',
            memo: ''
          },
          {
            word: '新鮮',
            sentence: '新鮮的生魚片甚至不必要醬油。',
            bopomofo: 'ㄒㄧㄣ ㄒㄧㄢ ㄉㄜ˙ ㄕㄥ ㄩˊ ㄆㄧㄢˋ ㄕㄣˋ ㄓˋ ㄅㄨˋ ㄅㄧˋ ㄧㄠˋ ㄐㄧㄤˋ ㄧㄡˊ.',
            pinyin: 'xin1 xian1 de sheng1 yu2 pian4 shen4 zhi4 bu2 bi4 yao4 jiang4 you2.',
            translation: '新鮮な刺身は、 醤油すら必要ありません。',
            memo: '',
            changed: '☆'
          },
          {
            word: '櫻花',
            sentence: '櫻花正在盛開， 所以我們去賞櫻吧。',
            bopomofo: 'ㄧㄥ ㄏㄨㄚ ㄓㄥˋ ㄗㄞˋ ㄕㄥˋ ㄎㄞ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄇㄣ˙ ㄑㄩˋ ㄕㄤˇ ㄧㄥ ㄅㄚ˙.',
            pinyin: 'ying1 hua1 zheng4 zai4 sheng4 kai1, suo3 yi3 wo3 men qu4 shang3 ying1 ba.',
            translation: '桜が満開なので、 お花見に行きましょう。',
            memo: ''
          },
          {
            word: '變化',
            sentence: '從星星的移動變化能知道季節的變化。',
            bopomofo: 'ㄘㄨㄥˊ ㄒㄧㄥ ㄒㄧㄥ ㄉㄜ˙ ㄧˊ ㄉㄨㄥˋ ㄅㄧㄢˋ ㄏㄨㄚˋ ㄋㄥˊ ㄓ ㄉㄠˋ ㄐㄧˋ ㄐㄧㄝˊ ㄉㄜ˙ ㄅㄧㄢˋ ㄏㄨㄚˋ.',
            pinyin: 'cong2 xing1 xing1 de yi2 dong4 bian4 hua4 neng2 zhi1 dao4 ji4 jie2 de bian4 hua4.',
            translation: '星の移り変わりから、 季節の変化を知る事ができます。',
            memo: '※「物換星移(ㄨˋ ㄏㄨㄢˋ ㄒㄧㄥ ㄧˊ/wu4 huan4 xing1 yi2)」 : 「世の中が移り変わること」。',
            changed: '☆'
          },
          {
            word: '氣溫',
            sentence: '因為氣溫突然變低了, 大家都感冒了。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄑㄧˋ ㄨㄣ ㄊㄨ ㄖㄢˊ ㄅㄧㄢˋ ㄉㄧ ㄌㄜ˙, ㄉㄚˋ ㄐㄧㄚ ㄉㄡ ㄍㄢˇ ㄇㄠˋ ㄌㄜ˙.',
            pinyin: 'yin1 wei4 qi4 wen1 tu1 ran2 bian4 di1 le, da4 jia1 dou1 gan3 mao4 le.',
            translation: '気温が急に下がったので、 みんな風邪を引いてしまいました。',
            memo: '※「気温が急に下がる」 : 「氣溫突然驟降(ㄑㄧˋ ㄨㄣ ㄊㄨ ㄖㄢˊ ㄓㄡˋ ㄐㄧㄤˋ /qi4 wen1 tu1 ran2 zhou4 jiang4)」でも可。'
          },
          {
            word: '差',
            sentence: '跟你認為的比起來, 好吃的臭豆腐和不好吃的差多了。',
            bopomofo: 'ㄍㄣ ㄋㄧˇ ㄖㄣˋ ㄨㄟˊ ㄉㄜ˙ ㄅㄧˇ ㄑㄧˇ ㄌㄞˊ, ㄏㄠˇ ㄔ ㄉㄜ˙ ㄔㄡˋ ㄉㄡˋ ㄈㄨˇ ㄏㄢˋ ㄅㄨˋ ㄏㄠˇ ㄔ ㄉㄜ˙ ㄔㄚˋ ㄉㄨㄛ ㄌㄜ˙.',
            pinyin: 'gen1 ni3 ren4 wei4 de bi3 qi3 lai2, hao3 chi1 de chou4 dou4 fu3 han4 bu4 hao3 chi1 de cha1 duo1 le.',
            translation: '美味しい臭豆腐とまずい臭豆腐の差は、 あなたが思っているよりも大きいです。',
            memo: '',
            changed: '☆'
          },
          {
            word: '幾乎',
            sentence: '他累得幾乎翻白眼了。',
            bopomofo: 'ㄊㄚ ㄌㄟˋ ㄉㄜ˙ ㄐㄧ ㄏㄨ ㄈㄢ ㄅㄞˊ ㄧㄢˇ ㄌㄜ˙.',
            pinyin: 'ta1 lei4 de ji3 hu1 fan1 bai2 yan3 le.',
            translation: '彼は疲れ切っていて、 ほとんど白目をむいています。',
            memo: '',
            changed: '☆'
          },
          {
            word: '乾',
            sentence: '夏天在使用吹風機的時候也會出汗， 頭髮不容易乾。',
            bopomofo: 'ㄒㄧㄚˋ ㄊㄧㄢ ㄗㄞˋ ㄕˇ ㄩㄥˋ ㄔㄨㄟ ㄈㄥ ㄐㄧ ㄉㄜ˙ ㄕˊ ㄏㄡˋ  ㄧㄝˇ ㄏㄨㄟˋ ㄔㄨ ㄏㄢˋ, ㄊㄡˊ ㄈㄚˋ ㄅㄨˋ ㄖㄨㄥˊ ㄧˋ ㄍㄢ.',
            pinyin: 'xia4 tian1 zai4 shi3 yong4 chui1 feng1 ji1 de shi2 hou4 ye3 hui4 chu1 han4, tou2 fa4 bu4 rong2 yi4 gan1.',
            translation: '夏はドライヤーを使っている間にも汗をかくので、 髪がなかなか乾きません。',
            memo: '',
            changed: '☆'
          },
          {
            word: '發霉',
            sentence: '因為我一直宅在家裡， 所以感覺身體快發霉了。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄨㄛˇ ㄧ ㄓˊ ㄓㄞˊ ㄗㄞˋ ㄐㄧㄚ ㄌㄧˇ， ㄙㄨㄛˇ ㄧˇ ㄍㄢˇ ㄐㄩㄝˊ ㄕㄣ ㄊㄧˇ ㄎㄨㄞˋ ㄈㄚ ㄇㄟˊ ㄌㄜ˙.',
            pinyin: 'yin1 wei4 wo3 yi1 zhi2 zhai2 zai4 jia1 li3, suo3 yi3 gan3 jue2 shen1 ti3 kuai4 fa1 mei2 le.',
            translation: 'いつも家にいるので、 そろそろ体からカビが生えてきそうです。',
            memo: ''
          },
          {
            word: '除濕機',
            sentence: '乾燥季節來了, 現在除濕機的價格變半價了。',
            bopomofo: 'ㄍㄢ ㄗㄠˋ ㄐㄧˋ ㄐㄧㄝˊ ㄌㄞˊ ㄌㄜ˙, ㄒㄧㄢˋ ㄗㄞˋ ㄔㄨˊ ㄕ ㄐㄧ ㄉㄜ˙ ㄐㄧㄚˋ ㄍㄜˊ ㄅㄧㄢˋ ㄅㄢˋ ㄐㄧㄚˋ ㄌㄜ˙.',
            pinyin: 'gan1 zao4 ji4 jie2 lai2 le, xian4 zai4 chu2 shi1 ji1 de jia4 ge2 bian4 ban4 jia4 le.',
            translation: '乾季がやってきて、 除湿器の価格は半額になりました。',
            memo: ''
          },
          {
            word: '★雨季',
            sentence: '由於雨季， 你只要在外面把要洗的衣服掛就能弄得乾乾淨淨。',
            bopomofo: 'ㄧㄡˊ ㄩˊ ㄩˇ ㄐㄧˋ, ㄋㄧˇ ㄓˇ ㄧㄠˋ ㄗㄞˋ ㄨㄞˋ ㄇㄧㄢˋ ㄅㄚˇ ㄧㄠˋ ㄒㄧˇ ㄉㄜ˙ ㄧ ㄈㄨˊ ㄍㄨㄚˋ ㄐㄧㄡˋ ㄋㄥˊ ㄋㄨㄥˋ ㄉㄜˊ ㄍㄢˋ ㄍㄢ ㄐㄧㄥˋ ㄐㄧㄥˋ.',
            pinyin: 'you2 yu2 yu3 ji4, ni3 zhi3 yao4 zai4 wai4 mian4 ba3 yao4 xi3 de yi1 fu2 gua4 jiu4 neng2 nong4 de gan1 gan1 jing4 jing4.',
            translation: '雨季のおかげで、 洗濯物は外に干しておくだけで綺麗になります。',
            memo: '※意思不懂'
          },
          {
            word: '涼快',
            sentence: '貓很擅長找到在家裡最涼快的地方。',
            bopomofo: 'ㄇㄠ ㄏㄣˇ ㄕㄢˋ ㄔㄤˊ ㄓㄠˇ ㄉㄠˋ ㄗㄞˋ ㄐㄧㄚ ㄌㄧˇ ㄗㄨㄟˋ ㄌㄧㄤˊ ㄎㄨㄞˋ ㄉㄜ˙ ㄉㄧˋ ㄈㄤ.',
            pinyin: 'mao1 hen3 shan4 chang2 zhao3 dao4 zai4 jia1 li3 zui4 liang2 kuai4 de di4 fang1.',
            translation: '猫は家の中で最も涼しい場所を見つけるのがとても上手です。',
            memo: ''
          },
          {
            word: '潮濕',
            sentence: '潮濕的氣候讓人不舒服， 但實際上對皮膚很好。',
            bopomofo: 'ㄔㄠˊ ㄕ ㄉㄜ˙ ㄑㄧˋ ㄏㄡˋ ㄖㄤˋ ㄖㄣˊ ㄅㄨˋ ㄕㄨ ㄈㄨ˙, ㄉㄢˋ ㄕˊ ㄐㄧˋ ㄕㄤ˙ ㄉㄨㄟˋ ㄆㄧˊ ㄈㄨ ㄏㄣˇ ㄏㄠˇ.',
            pinyin: 'chao2 shi1 de qi4 hou4 rang4 ren2 bu4 shu1 fu2, dan4 shi2 ji4 shang4 dui4 pi2 fu1 hen3 hao3.',
            translation: '湿気の多い気候は不快ではありますが、 実際お肌にはとても良いです。',
            memo: '',
            changed: '☆'
          },
          {
            word: '悶',
            sentence: '睡覺的時候覺得呼吸困難就醒來了， 原來是貓坐在我的胸口上。',
            bopomofo: 'ㄕㄨㄟˋ ㄐㄧㄠˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄐㄩㄝˊ ㄉㄜ˙ ㄏㄨ ㄒㄧ ㄎㄨㄣˋ ㄋㄢˊ ㄐㄧㄡˋ ㄒㄧㄥˇ ㄌㄞˊ ㄌㄜ˙, ㄩㄢˊ ㄌㄞˊ ㄕˋ ㄇㄠ ㄗㄨㄛˋ ㄗㄞˋ ㄨㄛˇ ㄉㄜ˙ ㄒㄩㄥ ㄎㄡˇ ㄕㄤˋ.',
            pinyin: 'shui4 jiao4 de shi2 hou4 jue2 de hu1 xi1 kun4 nan2 jiu4 xing3 lai2 le, yuan2 lai2 shi4 mao1 zuo4 zai4 wo3 de xiong1 kou3 shang4.',
            translation: '寝ている時に息苦しくて目が覚めたら、 猫が胸の上に座っていました。',
            memo: '',
            changed: '☆'
          },
          {
            word: '冷氣',
            sentence: '冷氣有問題， 夏天來之前我會把它修理好。',
            bopomofo: 'ㄌㄥˇ ㄑㄧˋ ㄧㄡˇ ㄨㄣˋ ㄊㄧˊ, ㄒㄧㄚˋ ㄊㄧㄢ ㄌㄞˊ ㄓ ㄑㄧㄢˊ ㄨㄛˇ ㄏㄨㄟˋ ㄅㄚˇ ㄊㄚ ㄒㄧㄡ ㄌㄧˇ ㄏㄠˇ.',
            pinyin: 'leng3 qi4 you3 wen4 ti2, xia4 tian1 lai2 zhi1 qian2 wo3 hui4 ba3 ta1 xiu1 li3 hao3.',
            translation: '冷房の調子が悪いので、 夏前に修理します。',
            memo: '',
            changed: '☆'
          },
          {
            word: '荷蘭',
            sentence: '荷蘭有很多風車。',
            bopomofo: 'ㄏㄜˊ ㄌㄢˊ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄈㄥ ㄔㄜ.',
            pinyin: 'he2 lan2 you3 hen3 duo1 feng1 che1.',
            translation: 'オランダにはたくさんの風車があります。',
            memo: ''
          },
          {
            word: '出大太陽',
            sentence: '出大太陽的時候, 得把洗好的衣服拿去曬乾。',
            bopomofo: 'ㄔㄨ ㄉㄚˋ ㄊㄞˋ ㄧㄤˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄉㄟˇ ㄅㄚˇ ㄒㄧˇ ㄏㄠˇ ㄉㄜ˙ ㄧ ㄈㄨˊ ㄋㄚˊ ㄑㄩˋ ㄕㄞˋ ㄍㄢ.',
            pinyin: 'chu1 da4 tai4 yang2 de shi2 hou4, dei3 ba3 xi3 hao3 de yi1 fu2 na2 qu4 shai4 gan1.',
            translation: '太陽が出てきたら、 洗濯物を干さないといけません。',
            memo: '',
            changed: '☆'
          },
          {
            word: '★颳風',
            sentence: '山上颳大風， 你應該把防風外套帶著。',
            bopomofo: 'ㄕㄢ ㄕㄤˋ ㄍㄨㄚ ㄉㄚˋ ㄈㄥ, ㄋㄧˇ ㄧㄥ ㄍㄞ ㄅㄚˇ ㄈㄤˊ ㄈㄥ ㄨㄞˋ ㄊㄠˋ ㄉㄞˋ ㄓㄜ˙.',
            pinyin: 'shan1 shang4 gua1 da4 feng1, ni3 ying1 gai1 ba3 fang2 feng1 wai4 tao4 dai4 zhe.',
            translation: '山では風が強い事があるので、 防風ジャケットを持って行った方がいいです。',
            memo: '※「颳風」の意味は「風が強い」ではない?',
            changed: '☆'
          },
          {
            word: '受到',
            sentence: '弟弟受到家人的幫助, 好不容易把作業寫完了。',
            bopomofo: 'ㄉㄧˋ ㄉㄧ˙ ㄕㄡˋ ㄉㄠˋ ㄐㄧㄚ ㄖㄣˊ ㄉㄜ˙ ㄅㄤ ㄓㄨˋ, ㄏㄠˇ ㄅㄨˋ ㄖㄨㄥˊ ㄧˋ ㄅㄚˇ ㄗㄨㄛˋ ㄧㄝˋ ㄒㄧㄝˇ ㄨㄢˊ ㄌㄜ˙.',
            pinyin: 'di4 di shou4 dao4 jia1 ren2 de bang1 zhu4, hao3 bu4 rong2 yi4 ba3 zuo4 ye4 xie3 wan2 le.',
            translation: '弟は家族の助けを借りて、 ようやく宿題を終えました。',
            memo: '',
            changed: '☆'
          },
          {
            word: '受不了',
            sentence: '現在還在下午三點, 但是我想喝得受不了。',
            bopomofo: 'ㄒㄧㄢˋ ㄗㄞˋ ㄏㄞˊ ㄗㄞˋ ㄒㄧㄚˋ ㄨˇ ㄙㄢ ㄉㄧㄢˇ, ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄒㄧㄤˇ ㄏㄜ ㄉㄜˊ ㄕㄡˋ ㄅㄨˋ ㄌㄧㄠˇ.',
            pinyin: 'xian4 zai4 hai2 zai4 xia4 wu3 san1 dian3, dan4 shi4 wo3 xiang3 he1 de shou4 bu4 liao3.',
            translation: 'まだ午後の3時なのですが、 飲みたくてたまりません。',
            memo: '',
            changed: '☆'
          },
          {
            word: '餓死了',
            sentence: '我餓死了, 除了食物以外沒辦法思考。',
            bopomofo: 'ㄨㄛˇ ㄜˋ ㄙˇ ㄌㄜ˙, ㄔㄨˊ ㄌㄜ˙ ㄕˊ ㄨˋ ㄧˇ ㄨㄞˋ ㄇㄟˊ ㄅㄢˋ ㄈㄚˇ ㄙ ㄎㄠˇ.',
            pinyin: 'wo3 e4 si3 le, chu2 le shi2 wu4 yi3 wai4 mei2 ban4 fa3 si1 kao3.',
            translation: 'お腹がすいて死にそうなので、 食べ物の事以外考えられません。',
            memo: '',
            changed: '☆'
          },
          {
            word: '★後母臉',
            sentence: '一聽到後母就想到嚴格， 但是我婆婆對我沒有那樣。',
            bopomofo: 'ㄧ ㄊㄧㄥ ㄉㄠˋ ㄏㄡˋ ㄇㄨˇ ㄐㄧㄡˋ ㄒㄧㄤˇ ㄉㄠˋ ㄧㄢˊ ㄍㄜˊ, ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄆㄛˊ ㄆㄛˊ ㄉㄨㄟˋ ㄨㄛˇ ㄇㄟˊ ㄧㄡˇ ㄋㄚˋ ㄧㄤˋ.',
            pinyin: 'yi1 ting dao4 hou4 mu3 jiu4 xiang3 dao4 yan2 ge2, dan4 shi4 wo3 po2 po2 dui4 wo3 mei2 you3 na4 yang4.',
            translation: '義母は私にとても甘いので、 「継母の顔」のような厳しさとは無縁です。',
            memo: '※「後母臉」を使うには?',
            changed: '☆'
          },
          {
            word: '祖先',
            sentence: '查找我們的祖先從哪裡來的很有意思。',
            bopomofo: 'ㄔㄚˊ ㄓㄠˇ ㄨㄛˇ ㄇㄣ˙ ㄉㄜ˙ ㄗㄨˇ ㄒㄧㄢ ㄘㄨㄥˊ ㄋㄚˇ ㄌㄧˇ ㄌㄞˊ ㄉㄜ˙ ㄏㄣˇ ㄧㄡˇ ㄧˋ ㄙ.',
            pinyin: 'cha2 zhao3 wo3 men de zu3 xian1 cong2 na3 li3 lai2 de hen3 you3 yi4 si1.',
            translation: '私たちの祖先がどこから来たのか調べるのは、 とても興味深い事です。',
            memo: '',
            changed: '☆'
          },
          {
            word: '移民',
            sentence: '移民到別的國家不是容易的事。',
            bopomofo: 'ㄧˊ ㄇㄧㄣˊ ㄉㄠˋ ㄅㄧㄝˊ ㄉㄜ˙ ㄍㄨㄛˊ ㄐㄧㄚ ㄅㄨˊ ㄕˋ ㄖㄨㄥˊ ㄧˋ ㄉㄜ˙ ㄕˋ.',
            pinyin: 'yi2 min2 dao4 bie2 de guo2 jia1 bu2 shi4 rong2 yi4 de shi4.',
            translation: '別の国に移住するのは簡単な事ではありません。',
            memo: '',
            changed: '☆'
          },
          {
            word: '當中',
            sentence: '小動物當中， 她最喜歡松鼠。',
            bopomofo: 'ㄒㄧㄠˇ ㄉㄨㄥˋ ㄨˋ ㄉㄤ ㄓㄨㄥ, ㄊㄚ ㄗㄨㄟˋ ㄒㄧˇ ㄏㄨㄢ ㄙㄨㄥ ㄕㄨˇ.',
            pinyin: 'xiao3 dong4 wu4 dang1 zhong1, ta1 zui4 xi3 huan song1 shu3.',
            translation: '小動物の中で、 彼女のお気に入りはリスです。',
            memo: '',
            changed: '☆'
          },
          {
            word: '根據',
            sentence: '根據廣告, 那家商店今天來的客人都拿得到免費的飲料。',
            bopomofo: 'ㄍㄣ ㄐㄩˋ ㄍㄨㄤˇ ㄍㄠˋ, ㄋㄚˋ ㄐㄧㄚ ㄕㄤ ㄉㄧㄢˋ ㄐㄧㄣ ㄊㄧㄢ ㄌㄞˊ ㄉㄜ˙ ㄎㄜˋ ㄖㄣˊ ㄉㄡ ㄋㄚˊ ㄉㄜ˙ ㄉㄠˋ ㄇㄧㄢˇ ㄈㄟˋ ㄉㄜ˙ ㄧㄣˇ ㄌㄧㄠˋ.',
            pinyin: 'gen1 ju4 guang3 gao4, na4 jia1 shang1 dian4 jin1 tian1 lai2 de ke4 ren2 dou1 na2 de dao4 mian3 fei4 de yin3 liao4.',
            translation: '広告によると、 今日その店に来るお客さんはみんな無料の飲み物を貰えます。',
            memo: ''
          },
          {
            word: '農曆',
            sentence: '農曆的每個月一號都是新月。',
            bopomofo: 'ㄋㄨㄥˊ ㄌㄧˋ ㄉㄜ˙ ㄇㄟˇ ㄍㄜˋ ㄩㄝˋ ㄧ ㄏㄠˋ ㄉㄡ ㄕˋ ㄒㄧㄣ ㄩㄝˋ.',
            pinyin: 'nong2 li4 de mei3 ge4 yue4 yi1 hao4 dou1 shi4 xin1 yue4.',
            translation: '太陰暦の毎月1日は新月です。',
            memo: ''
          },
          {
            word: '農業',
            sentence: '這裡的土壤很貧瘠, 不適合發展農業。',
            bopomofo: 'ㄓㄜˋ ㄌㄧˇ ㄉㄜ˙ ㄊㄨˇ ㄖㄤˇ ㄏㄣˇ ㄆㄧㄣˊ ㄐㄧˊ , ㄅㄨˊ ㄕˋ ㄏㄜˊ ㄈㄚ ㄓㄢˇ ㄋㄨㄥˊ ㄧㄝˋ.',
            pinyin: 'zhe4 li3 de tu3 rang3 hen3 pin2 ji2, bu2 shi4 he2 fa1 zhan3 nong2 ye4.',
            translation: 'ここの土は痩せているので、 農業をするにはあまり向きません。',
            memo: '※「這裡的土壤很薄, 為了農業不太適合(ㄓㄜˋ ㄌㄧˇ ㄉㄜ˙ ㄊㄨˇ ㄖㄤˇ ㄏㄣˇ ㄅㄠˊ, ㄨㄟˋ ㄌㄜ˙ ㄋㄨㄥˊ ㄧㄝˋ ㄅㄨˋ ㄊㄞˋ ㄕˋ ㄏㄜˊ/zhe4 li3 de tu3 rang3 hen3 bao2, wei4 le nong2 ye4 bu2 tai4 shi4 he2)」でも可。',
            changed: '☆'
          },
          {
            word: '農人',
            sentence: '農人很早起, 很多人在黎明時去農場工作。',
            bopomofo: 'ㄋㄨㄥˊ ㄖㄣˊ ㄏㄣˇ ㄗㄠˇ ㄑㄧˇ, ㄏㄣˇ ㄉㄨㄛ ㄖㄣˊ ㄗㄞˋ ㄌㄧˊ ㄇㄧㄥˊ ㄕˊ ㄑㄩˋ ㄋㄨㄥˊ ㄔㄤˇ ㄍㄨㄥ ㄗㄨㄛˋ.',
            pinyin: 'nong2 ren2 hen3 zao3 qi3, hen3 duo1 ren2 zai4 li2 ming2 shi2 qu4 nong2 chang3 gong1 zuo4.',
            translation: '農家の人は早起きで、 多くの人が夜明けとともに農場に出ていきます。',
            memo: ''
          },
          {
            word: '★難得',
            sentence: '很難得的鳥就在院子裡, 我們試拍照吧。',
            bopomofo: 'ㄏㄣˇ ㄋㄢˊ ㄉㄜˊ ㄉㄜ˙ ㄋㄧㄠˇ ㄐㄧㄡˋ ㄗㄞˋ ㄩㄢˋ ㄗ˙ ㄌㄧˇ, ㄨㄛˇ ㄇㄣ˙ ㄕˋ ㄆㄞ ㄓㄠˋ ㄅㄚ˙.',
            pinyin: 'hen3 nan2 de2 de niao3 jiu4 zai4 yuan4 zi li3, wo3 men shi4 pai1 zhao4 ba.',
            translation: '珍しい鳥が庭にいるので、 写真を撮ってみましょう。',
            memo: '※解答：「很少見到的鳥在院子裡， 我們拍拍看吧」。 「難得」は使えない? 意味は「珍しい」ではなく「得難い」?'
          },
          {
            word: '祭祖',
            sentence: '有各種各樣的方法， 但是許多地區都有祭祖的習慣。',
            bopomofo: 'ㄧㄡˇ ㄍㄜˋ ㄓㄨㄥˇ ㄍㄜˋ ㄧㄤˋ ㄉㄜ˙ ㄈㄤ ㄈㄚˇ, ㄉㄢˋ ㄕˋ ㄒㄩˇ ㄉㄨㄛ ㄉㄧˋ ㄑㄩ ㄉㄡ ㄧㄡˇ ㄐㄧˋ ㄗㄨˇ ㄉㄜ˙ ㄒㄧˊ ㄍㄨㄢˋ.',
            pinyin: 'you3 ge4 zhong3 ge4 yang4 de fang1 fa3, dan4 shi4 xu3 duo1 di4 qu1 dou1 you3 ji4 zu3 de xi2 guan4.',
            translation: '方式は様々ですが、 多くの地域では先祖を祀る習慣があります。',
            memo: ''
          },
          {
            word: '拜',
            sentence: '寺廟舉行許多拜神的儀式。',
            bopomofo: 'ㄙˋ ㄇㄧㄠˋ ㄐㄩˇ ㄒㄧㄥˊ ㄒㄩˇ ㄉㄨㄛ ㄅㄞˋ ㄕㄣˊ ㄉㄜ˙ ㄧˊ ㄕˋ.',
            pinyin: 'si4 miao4 ju3 xing2 xu3 duo1 bai4 shen2 de yi2 shi4.',
            translation: 'お寺では、 神々を祀るためのたくさんの儀式を行います。',
            memo: '',
            changed: '☆'
          },
          {
            word: '神',
            sentence: '他像神一樣崇拜一位漫畫家。',
            bopomofo: 'ㄊㄚ ㄒㄧㄤˋ ㄕㄣˊ ㄧ ㄧㄤˋ ㄔㄨㄥˊ ㄅㄞˋ ㄧ ㄨㄟˋ ㄇㄢˋ ㄏㄨㄚˋ ㄐㄧㄚ.',
            pinyin: 'ta1 xiang4 shen2 yi1 yang4 chong2 bai4 yi1 wei4 man4 hua4 jia1.',
            translation: '彼はある漫画家をまるで神様のように崇拝しています。',
            memo: ''
          },
          {
            word: '拜拜',
            sentence: '他單相思， 所以我聽說他會去拜月下老人。',
            bopomofo: 'ㄊㄚ ㄉㄢ ㄒㄧㄤ ㄙ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄊㄧㄥ ㄕㄨㄛ ㄊㄚ ㄏㄨㄟˋ ㄑㄩˋ ㄅㄞˋ ㄩㄝˋ ㄒㄧㄚˋ ㄌㄠˇ ㄖㄣˊ.',
            pinyin: 'ta1 dan1 xiang1 si1, suo3 yi3 wo3 ting1 shuo1 ta1 hui4 qu4 bai4 yue4 xia4 lao3 ren2.',
            translation: '彼は片思いをしているので、　月下老人にお参りをしに行くそうです。',
            memo: ''
          },
          {
            word: '蚊蟲',
            sentence: '她很討厭蚊蟲, 總是關著紗窗。',
            bopomofo: 'ㄊㄚ ㄏㄣˇ ㄊㄠˇ ㄧㄢˋ ㄨㄣˊ ㄔㄨㄥˊ, ㄗㄨㄥˇ ㄕˋ ㄍㄨㄢ ㄓㄜ˙ ㄕㄚ ㄔㄨㄤ.',
            pinyin: 'ta1 hen3 tao3 yan4 wen2 chong2, zong3 shi4 guan1 zhe sha1 chuang1.',
            translation: '彼女は虫がすごく苦手なので、 いつも網戸を閉めています。',
            memo: '',
            changed: '☆'
          },
          {
            word: '戴',
            sentence: '她今天戴著媽媽給她的項鍊。',
            bopomofo: 'ㄊㄚ ㄐㄧㄣ ㄊㄧㄢ ㄉㄞˋ ㄓㄜ˙ ㄇㄚ ㄇㄚ ㄍㄟˇ ㄊㄚ ㄉㄜ˙ ㄒㄧㄤˋ ㄌㄧㄢˋ.',
            pinyin: 'ta1 jin1 tian1 dai4 zhe ma1 ma1 gei3 ta1 de xiang4 lian4.',
            translation: '彼女は今日お母さんに貰ったネックレスをつけています。',
            memo: ''
          },
          {
            word: '香包',
            sentence: '我應該把哪種植物放入香包中?',
            bopomofo: 'ㄨㄛˇ ㄧㄥ ㄍㄞ ㄅㄚˇ ㄋㄚˇ ㄓㄨㄥˇ ㄓˊ ㄨˋ ㄈㄤˋ ㄖㄨˋ ㄒㄧㄤ ㄅㄠ ㄓㄨㄥ?',
            pinyin: 'wo3 ying1 gai1 ba3 na3 zhong3 zhi2 wu4 fang4 ru4 xiang1 bao1 zhong1?',
            translation: '匂い袋の中にはどんな植物を入れるといいですか?',
            memo: ''
          },
          {
            word: '掛',
            sentence: '擦手巾在牆上掛著。',
            bopomofo: 'ㄘㄚ ㄕㄡˇ ㄐㄧㄣ ㄗㄞˋ ㄑㄧㄤˊ ㄕㄤˋ ㄍㄨㄚˋ ㄓㄜ˙.',
            pinyin: 'ca1 shou3 jin1 zai4 qiang2 shang4 gua4 zhe.',
            translation: '手を拭くタオルは壁に掛かっていますよ。',
            memo: '',
            changed: '☆'
          },
          {
            word: '瘟疫',
            sentence: '即使瘟疫不普遍的時候， 洗手漱口也很重要。',
            bopomofo: 'ㄐㄧˊ ㄕˇ ㄨㄣ ㄧˋ ㄅㄨˋ ㄆㄨˇ ㄅㄧㄢˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄒㄧˇ ㄕㄡˇ ㄕㄨˋ ㄎㄡˇ ㄧㄝˇ ㄏㄣˇ ㄓㄨㄥˋ ㄧㄠˋ.',
            pinyin: 'ji2 shi3 wen1 yi4 bu4 pu3 bian4 de shi2 hou4, xi3 shou3 shu4 kou3 ye3 hen3 zhong4 yao4.',
            translation: '疫病が流行っていない時でも、 手洗いうがいはとても大事です。',
            memo: ''
          },
          {
            word: '做法',
            sentence: '我認為用洗潔精洗身體是錯誤的做法。',
            bopomofo: 'ㄨㄛˇ ㄖㄣˋ ㄨㄟˊ ㄩㄥˋ ㄒㄧˇ ㄐㄧㄝˊ ㄐㄧㄥ ㄒㄧˇ ㄕㄣ ㄊㄧˇ ㄕˋ ㄘㄨㄛˋ ㄨˋ ㄉㄜ˙ ㄗㄨㄛˋ ㄈㄚˇ.',
            pinyin: 'wo3 ren4 wei2 yong4 xi3 jie2 jing1 xi3 shen1 ti3 shi4 cuo4 wu4 de zuo4 fa3.',
            translation: '食器用洗剤で体を洗うのは間違ったやり方だと思います。',
            memo: ''
          },
          {
            word: '多少',
            sentence: '我來農場做工作三個月了, 多少習慣了自然生活。',
            bopomofo: 'ㄨㄛˇ ㄌㄞˊ ㄋㄨㄥˊ ㄔㄤˇ ㄗㄨㄛˋ ㄍㄨㄥ ㄗㄨㄛˋ ㄙㄢ ㄍㄜ˙ ㄩㄝˋ ㄌㄜ˙, ㄉㄨㄛ ㄕㄠˇ ㄒㄧˊ ㄍㄨㄢˋ ㄌㄜ˙ ㄗˋ ㄖㄢˊ ㄕㄥ ㄏㄨㄛˊ.',
            pinyin: 'wo3 lai2 nong2 chang3 zuo4 gong1 zuo4 san1 ge4 yue4 le, duo1 shao3 xi2 guan4 le zi4 ran2 sheng1 huo2.',
            translation: '農場に来て働きだしてから3ヵ月が経って、 自然の中での生活にもいくらか慣れてきました。',
            memo: ''
          },
          {
            word: '作用',
            sentence: '安眠藥的作用使他立刻睡著了。',
            bopomofo: 'ㄢ ㄇㄧㄢˊ ㄧㄠˋ ㄉㄜ˙ ㄗㄨㄛˋ ㄩㄥˋ ㄕˇ ㄊㄚ ㄌㄧˋ ㄎㄜˋ ㄕㄨㄟˋ ㄓㄠˊ ㄌㄜ˙.',
            pinyin: 'an1 mian2 yao4 de zuo4 yong4 shi3 ta1 li4 ke4 shui4 zhao2 le.',
            translation: '睡眠薬の作用で、 彼はたちまち眠り込んでしまいました。',
            memo: ''
          },
          {
            word: '迷信',
            sentence: '雖然迷信， 但是他馬上就相信的單純的人。',
            bopomofo: 'ㄙㄨㄟ ㄖㄢˊ ㄇㄧˊ ㄒㄧㄣˋ, ㄉㄢˋ ㄕˋ ㄊㄚ ㄇㄚˇ ㄕㄤˋ ㄐㄧㄡˋ ㄒㄧㄤ ㄒㄧㄣˋ ㄉㄜ˙ ㄉㄢ ㄔㄨㄣˊ ㄉㄜ˙ ㄖㄣˊ.',
            pinyin: 'sui1 ran2 mi2 xin4, dan4 shi4 ta1 ma3 shang4 jiu4 xiang1 xin4 de dan1 chun2 de ren2.',
            translation: '彼は、 迷信でもすぐに信じてしまう素直な人です。',
            memo: '',
            changed: '☆'
          },
          {
            word: '收成',
            sentence: '收成香蕉的人員不夠, 請你介紹一些有力氣的人?',
            bopomofo: 'ㄕㄡ ㄔㄥˊ ㄒㄧㄤ ㄐㄧㄠ ㄉㄜ˙ ㄖㄣˊ ㄩㄢˊ ㄅㄨˋ ㄍㄡˋ, ㄑㄧㄥˇ ㄋㄧˇ ㄐㄧㄝˋ ㄕㄠˋ ㄧ ㄒㄧㄝ ㄧㄡˇ ㄌㄧˋ ㄑㄧˋ ㄉㄜ˙ ㄖㄣˊ?',
            pinyin: 'shou1 cheng2 xiang1 jiao1 de ren2 yuan2 bu2 gou4, qing3 ni3 jie4 shao4 yi1 xie1 you3 li4 qi4 de ren2?',
            translation: 'バナナを収穫するスタッフが足りないので、 力持ちな人を何人か紹介してくれませんか?',
            memo: '',
            changed: '☆'
          },
          {
            word: '民族',
            sentence: '城市的發展雖然是好事， 但是我對失去民族獨特文化感到遺憾。',
            bopomofo: 'ㄔㄥˊ ㄕˋ ㄉㄜ˙ ㄈㄚ ㄓㄢˇ ㄙㄨㄟ ㄖㄢˊ ㄕˋ ㄏㄠˇ ㄕˋ, ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄉㄨㄟˋ ㄕ ㄑㄩˋ ㄇㄧㄣˊ ㄗㄨˊ ㄉㄨˊ ㄊㄜˋ ㄨㄣˊ ㄏㄨㄚˋ ㄍㄢˇ ㄉㄠˋ ㄧˊ ㄏㄢˋ.',
            pinyin: 'cheng2 shi4 de fa1 zhan3 sui1 ran2 shi4 hao3 shi4, dan4 shi4 wo3 dui4 shi1 qu4 min2 zu2 du2 te4 wen2 hua4 gan3 dao4 yi2 han4.',
            translation: '街の発展は良い事ですが、 民族独自の文化が失われるのは少し寂しい気もします。',
            memo: '※「遺憾」「複雜」「難過」。',
            changed: '☆'
          },
          {
            word: '月亮',
            sentence: '在滿月的夜晚月亮的光線亮到可以讀書。',
            bopomofo: 'ㄗㄞˋ ㄇㄢˇ ㄩㄝˋ ㄉㄜ˙ ㄧㄝˋ ㄨㄢˇ ㄩㄝˋ ㄌㄧㄤˋ ㄉㄜ˙ ㄍㄨㄤ ㄒㄧㄢˋ ㄌㄧㄤˋ ㄉㄠˋ ㄎㄜˇ ㄧˇ ㄉㄨˊ ㄕㄨ.',
            pinyin: 'zai4 man3 yue4 de ye4 wan3 yue4 liang4 de guang1 xian4 liang4 dao4 ke3 yi3 du2 shu1.',
            translation: '満月の夜は、 月の光で本が読めるくらい明るいです。',
            memo: '',
            changed: '☆'
          },
          {
            word: '圓',
            sentence: '貓的身體到處都是圓圓的， 所以很可愛。',
            bopomofo: 'ㄇㄠ ㄉㄜ˙ ㄕㄣ ㄊㄧˇ ㄉㄠˋ ㄔㄨˋ ㄉㄡ ㄕˋ ㄩㄢˊ ㄩㄢˊ ㄉㄜ˙, ㄙㄨㄛˇ ㄧˇ ㄏㄣˇ ㄎㄜˇ ㄞˋ.',
            pinyin: 'mao1 de shen1 ti3 dao4 chu4 dou1 shi4 yuan2 yuan2 de, suo3 yi3 hen3 ke3 ai4.',
            translation: '猫の体はどこもかしこも丸いので、 とても可愛いです。',
            memo: ''
          },
          {
            word: '社會',
            sentence: '我只跟貓說話， 所以很難適應社會。',
            bopomofo: 'ㄨㄛˇ ㄓˇ ㄍㄣ ㄇㄠ ㄕㄨㄛ ㄏㄨㄚˋ, ㄙㄨㄛˇ ㄧˇ ㄏㄣˇ ㄋㄢˊ ㄕˋ ㄧㄥˋ ㄕㄜˋ ㄏㄨㄟˋ.',
            pinyin: 'wo3 zhi3 gen1 mao1 shuo1 hua4, suo3 yi3 hen3 nan2 shi4 ying4 she4 hui4.',
            translation: '猫とばかり話をしているので、 社会になかなか馴染めません。',
            memo: ''
          },
          {
            word: '團聚',
            sentence: '同學們都很期待著十年來的第一次團聚。',
            bopomofo: 'ㄊㄨㄥˊ ㄒㄩㄝˊ ㄇㄣ˙ ㄉㄡ ㄏㄣˇ ㄑㄧ ㄉㄞˋ ㄓㄜ˙ ㄕˊ ㄋㄧㄢˊ ㄌㄞˊ ㄉㄜ˙ ㄉㄧˋ ㄧ ㄘˋ ㄊㄨㄢˊ ㄐㄩˋ.',
            pinyin: 'tong2 xue2 men dou1 hen3 qi1 dai4 zhe shi2 nian2 lai2 de di4 yi1 ci4 tuan2 ju4.',
            translation: '同級生たちはみんな、 10年ぶりの再会を楽しみにしています。',
            memo: ''
          },
          {
            word: '月餅',
            sentence: '她吃了太多月餅, 現在動不了。',
            bopomofo: 'ㄊㄚ ㄔ ㄌㄜ˙ ㄊㄞˋ ㄉㄨㄛ ㄩㄝˋ ㄅㄧㄥˇ, ㄒㄧㄢˋ ㄗㄞˋ ㄉㄨㄥˋ ㄅㄨˋ ㄌㄧㄠˇ.',
            pinyin: 'ta1 chi1 le tai4 duo1 yue4 bing3, xian4 zai4 dong4 bu4 liao3.',
            translation: '彼女は月餅を食べ過ぎたので、 今は動けません。',
            memo: '',
            changed: '☆'
          },
          {
            word: '柚子',
            sentence: '柚子易於使用, 放進料理又好， 放進甜點又好。',
            bopomofo: 'ㄧㄡˋ ㄗ˙ ㄧˋ ㄩˊ ㄕˇ ㄩㄥˋ, ㄈㄤˋ ㄐㄧㄣˋ ㄌㄧㄠˋ ㄌㄧˇ ㄧㄡˋ ㄏㄠˇ, ㄈㄤˋ ㄐㄧㄣˋ ㄊㄧㄢˊ ㄉㄧㄢˇ ㄧㄡˋ ㄏㄠˇ.',
            pinyin: 'you4 zi yi4 yu2 shi3 yong4, fang4 jin4 liao4 li3 you4 hao3, fang4 jin4 tian2 dian3 you4 hao3.',
            translation: '柚子は使い勝手がいいので、 料理に入れても良し、 お菓子に入れても良しです。',
            memo: ''
          },
          {
            word: '故事',
            sentence: '鬼故事讓孩子們非常害怕， 他們晚上不能一個人上廁所。',
            bopomofo: 'ㄍㄨㄟˇ ㄍㄨˋ ㄕˋ ㄖㄤˋ ㄏㄞˊ ㄗ˙ ㄇㄣ˙ ㄈㄟ ㄔㄤˊ ㄏㄞˋ ㄆㄚˋ, ㄊㄚ ㄇㄣ˙ ㄨㄢˇ ㄕㄤˋ ㄅㄨˋ ㄋㄥˊ ㄧˊ ㄍㄜ˙ ㄖㄣˊ ㄕㄤˋ ㄘㄜˋ ㄙㄨㄛˇ.',
            pinyin: 'gui3 gu4 shi4 rang4 hai2 zi men fei1 chang2 hai4 pa4, ta1 men wan3 shang4 bu4 neng2 yi1 ge4 ren2 shang4 ce4 suo3.',
            translation: 'おばけの話で子供達はすっかり怖がってしまったので、 今夜は一人でトイレに行けないでしょう。',
            memo: '',
            changed: '☆'
          },
          {
            word: '溫馨',
            sentence: '我希望會有更多溫馨的消息。',
            bopomofo: 'ㄨㄛˇ ㄒㄧ ㄨㄤˋ ㄏㄨㄟˋ ㄧㄡˇ ㄍㄥˋ ㄉㄨㄛ ㄨㄣ ㄒㄧㄣ ㄉㄜ˙ ㄒㄧㄠ ㄒㄧˊ.',
            pinyin: 'wo3 xi1 wang4 hui4 you3 geng4 duo1 wen1 xin1 de xiao1 xi2.',
            translation: '心温まるニュースがもっと増えるといいなと思います。',
            memo: ''
          },
          {
            word: '端午節',
            sentence: '在端午節， 龍舟比賽在各地舉行。',
            bopomofo: 'ㄗㄞˋ ㄉㄨㄢ ㄨˇ ㄐㄧㄝˊ, ㄌㄨㄥˊ ㄓㄡ ㄅㄧˇ ㄙㄞˋ ㄗㄞˋ ㄍㄜˋ ㄉㄧˋ ㄐㄩˇ ㄒㄧㄥˊ.',
            pinyin: 'zai4 duan1 wu3 jie2, long2 zhou1 bi3 sai4 zai4 ge4 di4 ju3 xing2.',
            translation: '端午の節句には、 各地でドラゴンボートレースが開催されます。',
            memo: ''
          },
          {
            word: '中秋節',
            sentence: '中秋節的期間我天天都去吃烤肉。',
            bopomofo: 'ㄓㄨㄥ ㄑㄧㄡ ㄐㄧㄝˊ ㄉㄜ˙ ㄑㄧ ㄐㄧㄢ ㄨㄛˇ ㄊㄧㄢ ㄊㄧㄢ ㄉㄨ ㄑㄩˋ ㄔ ㄎㄠˇ ㄖㄡˋ.',
            pinyin: 'zhong1 qiu1 jie2 de qi1 jian1 wo3 tian1 tian1 dou1 qu4 chi1 kao3 rou4.',
            translation: '中秋節の期間、 私は毎日バーベキューを食べに行きます。',
            memo: ''
          },
          {
            word: '★雄黄酒',
            sentence: '在端午節的時候喝的雄黄酒的作用作為一種解毒劑。',
            bopomofo: 'ㄗㄞˋ ㄉㄨㄢ ㄨˇ ㄐㄧㄝˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄏㄜ ㄉㄜ˙ ㄒㄩㄥˊ ㄏㄨㄤˊ ㄐㄧㄡˇ ㄉㄜ˙ ㄗㄨㄛˋ ㄩㄥˋ ㄗㄨㄛˋ ㄨㄟˊ ㄧ ㄓㄨㄥˇ ㄐㄧㄝˇ ㄉㄨˊ ㄐㄧˋ.',
            pinyin: 'zai4 duan1 wu3 jie2 de shi2 hou4 he1 de xiong2 huang2 jiu3 de zuo4 yong4 zuo4 wei2 yi1 zhong3 jie3 du2 ji4.',
            translation: '端午の節句の時に飲まれる雄黄酒は、 一種の解毒剤としての働きをします。',
            memo: '※「作為(ㄗㄨㄛˋ ㄨㄟˊ)」の発音?',
            changed: '☆'
          },
          {
            word: '古時候',
            sentence: '古時候， 這個地區的人過著農業生活。',
            bopomofo: 'ㄍㄨˇ ㄕˊ ㄏㄡˋ, ㄓㄜˋ ㄍㄜˋ ㄉㄧˋ ㄑㄩ ㄉㄜ˙ ㄖㄣˊ ㄍㄨㄛˋ ㄓㄜ˙ ㄋㄨㄥˊ ㄧㄝˋ ㄕㄥ ㄏㄨㄛˊ.',
            pinyin: 'gu3 shi2 hou4, zhe4 ge4 di4 qu1 de ren2 guo4 zhe nong2 ye4 sheng1 huo2.',
            translation: 'その昔、 この地域の人々は農業をしながら暮らしていました。',
            memo: '',
            changed: '☆'
          },
          {
            word: '趕走',
            sentence: '孩子大聲喊叫著把鴿子趕走。',
            bopomofo: 'ㄏㄞˊ ㄗ˙ ㄉㄚˋ ㄕㄥ ㄏㄢˇ ㄐㄧㄠˋ ㄓㄜ˙ ㄅㄚˇ ㄍㄜ ㄗ˙ ㄍㄢˇ ㄗㄡˇ.',
            pinyin: 'hai2 zi da4 sheng1 han3 jiao4 zhe ba3 ge1 zi gan3 zou3.',
            translation: '子どもは大声を出して鳩を追い払っています。',
            memo: ''
          },
          {
            word: '過節',
            sentence: '看書， 聽音樂， 大家以各自的方式過節。',
            bopomofo: 'ㄎㄢˋ ㄕㄨ, ㄊㄧㄥ ㄧㄣ ㄩㄝˋ, ㄉㄚˋ ㄐㄧㄚ ㄧˇ ㄍㄜˋ ㄗˋ ㄉㄜ˙ ㄈㄤ ㄕˋ ㄍㄨㄛˋ ㄐㄧㄝˊ.',
            pinyin: 'kan4 shu1, ting1 yin1 yue4, da4 jia1 yi3 ge4 zi4 de fang1 shi4 guo4 jie2.',
            translation: '本を読んだり、 音楽を聴いたり、 みんな思い思いに休日を過ごしています。',
            memo: '※「看看書, 聽聽音樂， 每個人按照自己的方式過假日」でも可。'
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
