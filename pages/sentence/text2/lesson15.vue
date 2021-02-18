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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第15章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第15章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      data: {
        title: '當代中文課程課2・第15章',
        words: [
          {
            word: '春節',
            sentence: '春節的時候收到的烏魚子爸爸整個的吃了。',
            bopomofo: 'ㄔㄨㄣ ㄐㄧㄝˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄕㄡ ㄉㄠˋ ㄉㄜ˙ ㄨ ㄩˊ ㄗˇ ㄅㄚˋ ㄅㄚˋ ㄓㄥˇ ㄍㄜˋ ㄉㄜ˙ ㄔ ㄌㄜ˙.',
            pinyin: 'chun1 jie2 de shi2 hou4 shou1 dao4 de wu1 yu2 zi ba4 ba4 zheng3 ge4 de chi1 le.',
            translation: '春節の時にもらったカラスミをお父さんは丸かじりしていました。',
            memo: ''
          },
          {
            word: '伯伯',
            sentence: '伯伯喝了很多酒, 正在午睡。',
            bopomofo: 'ㄅㄛˊ ㄅㄛ˙ ㄏㄜ ㄌㄜ˙ ㄏㄣˇ ㄉㄨㄛ ㄐㄧㄡˇ, ㄓㄥˋ ㄗㄞˋ ㄨˇ ㄕㄨㄟˋ.',
            pinyin: 'bo2 bo he1 le hen3 duo1 jiu3, zheng4 zai4 wu3 shui4.',
            translation: '友達のお父さんはお酒をたくさん飲んで、 今は昼寝をしています。',
            memo: ''
          },
          {
            word: '年夜飯',
            sentence: '雖然不知道是否傳統, 我們的年夜飯是牛排。',
            bopomofo: 'ㄙㄨㄟ ㄖㄢˊ ㄅㄨˋ ㄓ ㄉㄠˋ ㄕˋ ㄈㄡˇ ㄔㄨㄢˊ ㄊㄨㄥˇ, ㄨㄛˇ ㄇㄣ˙ ㄉㄜ˙ ㄋㄧㄢˊ ㄧㄝˋ ㄈㄢˋ ㄕˋ ㄋㄧㄡˊ ㄆㄞˊ.',
            pinyin: 'sui1 ran2 bu4 zhi1 dao4 shi4 fou3 chuan2 tong3, wo3 men de nian2 ye4 fan4 shi4 niu2 pai2.',
            translation: '伝統的かは分かりませんが、 大晦日のディナーはステーキです。',
            memo: ''
          },
          {
            word: '打擾',
            sentence: '你不要打擾在看動漫的弟弟, 要不然他一定會很生氣的。',
            bopomofo: 'ㄋㄧˇ ㄅㄨˊ ㄧㄠˋ ㄉㄚˇ ㄖㄠˇ ㄗㄞˋ ㄎㄢˋ ㄉㄨㄥˋ ㄇㄢˋ ㄉㄜ˙ ㄉㄧˋ ㄉㄧ˙, ㄧㄠˋ ㄅㄨˋ ㄖㄢˊ ㄊㄚ ㄧˊ ㄉㄧㄥˋ ㄏㄨㄟˋ ㄏㄣˇ ㄕㄥ ㄑㄧˋ ㄉㄜ˙.',
            pinyin: 'ni3 bu2 yao4 da3 rao3 zai4 kan4 dong4 man4 de di4 di, yao4 bu4 ran2 ta1 yi1 ding4 hui4 hen3 sheng1 qi4 de.',
            translation: 'アニメを見ている弟の邪魔をしないで下さい、 さもないと怒られますよ。',
            memo: ''
          },
          {
            word: '女兒',
            sentence: '女兒常常試把小狗抱起來, 所以牠很害怕。',
            bopomofo: 'ㄋㄩˇ ㄦˊ ㄔㄤˊ ㄔㄤˊ ㄕˋ ㄅㄚˇ ㄒㄧㄠˇ ㄍㄡˇ ㄅㄠˋ ㄑㄧˇ ㄌㄞˊ, ㄙㄨㄛˇ ㄧˇ ㄊㄚ ㄏㄣˇ ㄏㄞˋ ㄆㄚˋ.',
            pinyin: 'nu3 er2 chang2 chang2 shi4 ba3 xiao3 gou3 bao4 qi3 lai2, suo3 yi3 ta1 hen3 hai4 pa4.',
            translation: '娘が頻繁に抱き上げようとするので、 犬はとても怯えています。',
            memo: ''
          },
          {
            word: '國外',
            sentence: '去國外的話你什麼時候換錢?',
            bopomofo: 'ㄑㄩˋ ㄍㄨㄛˊ ㄨㄞˋ ㄉㄜ˙ ㄏㄨㄚˋ ㄋㄧˇ ㄕㄣˊ ㄇㄜ˙ ㄕˊ ㄏㄡˋ ㄏㄨㄢˋ ㄑㄧㄢˊ?',
            pinyin: 'qu4 guo2 wai4 de hua4 ni3 shen2 me shi2 hou4 huan4 qian2?',
            translation: '海外に行く時、 あなたはいつ両替えしますか?',
            memo: ''
          },
          {
            word: '圍爐',
            sentence: '分居的家人也會在除夕一起圍爐。',
            bopomofo: 'ㄈㄣ ㄐㄩ ㄉㄜ˙ ㄐㄧㄚ ㄖㄣˊ ㄧㄝˇ ㄏㄨㄟˋ ㄗㄞˋ ㄔㄨˊ ㄒㄧ ㄧˋ ㄑㄧˇ ㄨㄟˊ ㄌㄨˊ.',
            pinyin: 'fen1 ju1 de jia1 ren2 ye3 hui4 zai4 chu2 xi1 yi1 qi3 wei2 lu2.',
            translation: '離れて暮らしている家族も、 大晦日にはみんなで集まります。',
            memo: ''
          },
          {
            word: '意思',
            sentence: '他很喝醉著一直說我不明白意思的話。',
            bopomofo: 'ㄊㄚ ㄏㄣˇ ㄏㄜ ㄗㄨㄟˋ ㄓㄜ˙ ㄧ ㄓˊ ㄕㄨㄛ ㄨㄛˇ ㄅㄨˋ ㄇㄧㄥˊ ㄅㄞˊ ㄧˋ ㄙ ㄉㄜ˙ ㄏㄨㄚˋ.',
            pinyin: 'ta1 hen3 he1 zui4 zhe yi1 zhi2 shuo1 wo3 bu4 ming2 bai2 yi4 si1 de hua4.',
            translation: '彼はひどく酔っぱらって、 意味が分からない事を話続けています。',
            memo: ''
          },
          {
            word: '全家',
            sentence: '全家包括貓喜歡吃魚。',
            bopomofo: 'ㄑㄩㄢˊ ㄐㄧㄚ ㄅㄠ ㄎㄨㄛˋ ㄇㄠ ㄒㄧˇ ㄏㄨㄢ ㄔ ㄩˊ.',
            pinyin: 'quan2 jia1 bao1 kuo4 mao1 xi3 huan1 chi1 yu2.',
            translation: '猫を含む家族全員、 魚を食べる事が好きです。',
            memo: ''
          },
          {
            word: '孩子',
            sentence: '孩子們其實都知道大人的事情。',
            bopomofo: 'ㄏㄞˊ ㄗ˙ ㄇㄣ˙ ㄑㄧˊ ㄕˊ ㄉㄡ ㄓ ㄉㄠˋ ㄉㄚˋ ㄖㄣˊ ㄉㄜ˙ ㄕˋ ㄑㄧㄥˊ.',
            pinyin: 'hai2 zi men qi2 shi2 dou1 zhi1 dao4 da4 ren2 de shi4 qing2.',
            translation: '子どもたちは実際、 大人の事情を全て分かっています。',
            memo: ''
          },
          {
            word: '吉祥',
            sentence: '紅色的東西是不是都吉祥?',
            bopomofo: 'ㄏㄨㄥˊ ㄙㄜˋ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ ㄕˋ ㄅㄨˊ ㄕˋ ㄉㄡ ㄐㄧˊ ㄒㄧㄤˊ?',
            pinyin: 'hong2 se4 de dong1 xi1 shi4 bu2 shi4 dou1 ji2 xiang2?',
            translation: '赤い色のものは全て縁起が良いのですか?',
            memo: ''
          },
          {
            word: '年紀',
            sentence: '大概從三十歲的時候我不太明白我的年紀。',
            bopomofo: 'ㄉㄚˋ ㄍㄞˋ ㄘㄨㄥˊ ㄙㄢ ㄕˊ ㄙㄨㄟˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄨㄛˇ ㄅㄨˊ ㄊㄞˋ ㄇㄧㄥˊ ㄅㄞˊ ㄨㄛˇ ㄉㄜ˙ ㄋㄧㄢˊ ㄐㄧˋ.',
            pinyin: 'da4 gai4 cong2 san1 shi2 sui4 de shi2 hou4 wo3 bu2 tai4 ming2 bai2 wo3 de nian2 ji4.',
            translation: '30歳くらいの時から、 自分の年齢がよく分からなくなってきました。',
            memo: ''
          },
          {
            word: '過年',
            sentence: '鞭炮的聲音有過年的氣氛我很喜歡, 但是貓看起來不高興。',
            bopomofo: 'ㄅㄧㄢ ㄆㄠˋ ㄉㄜ˙ ㄕㄥ ㄧㄣ ㄧㄡˇ ㄍㄨㄛˋ ㄋㄧㄢˊ ㄉㄜ˙ ㄑㄧˋ ㄈㄣ ㄨㄛˇ ㄏㄣˇ ㄒㄧˇ ㄏㄨㄢ, ㄉㄢˋ ㄕˋ ㄇㄠ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄅㄨˋ ㄍㄠ ㄒㄧㄥˋ.',
            pinyin: 'bian1 pao4 de sheng1 yin1 you3 guo4 nian2 de qi4 fen1 wo3 hen3 xi3 huan1, dan4 shi4 mao1 kan4 qi3 lai2 bu4 gao1 xing4.',
            translation: '爆竹の音はお正月の雰囲気で私はとても好きなのですが、 猫は嬉しくなさそうです。',
            memo: ''
          },
          {
            word: '除夕夜',
            sentence: '如果你不喝酒， 那不是除夕夜。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄅㄨˋ ㄏㄜ ㄐㄧㄡˇ, ㄋㄚˋ ㄅㄨˊ ㄕˋ ㄔㄨˊ ㄒㄧ ㄧㄝˋ.',
            pinyin: 'ru2 guo3 ni3 bu4 he1 jiu3, na4 bu2 shi4 chu2 xi1 ye4.',
            translation: 'お酒を飲まなければ大晦日ではありません',
            memo: ''
          },
          {
            word: '睡著',
            sentence: '坐在教室前面的學生似乎睡著， 他的頭從一邊搖到另一邊。',
            bopomofo: 'ㄗㄨㄛˋ ㄗㄞˋ ㄐㄧㄠˋ ㄕˋ ㄑㄧㄢˊ ㄇㄧㄢˋ ㄉㄧˊ ㄒㄩㄝˊ ㄕㄥ ㄙˋ ㄏㄨ ㄕㄨㄟˋ ㄓㄠˊ, ㄊㄚ ㄉㄜ˙ ㄊㄡˊ ㄘㄨㄥˊ ㄧˋ ㄅㄧㄢ ㄧㄠˊ ㄉㄠˋ ㄌㄧㄥˋ ㄧˋ ㄅㄧㄢ.',
            pinyin: 'zuo4 zai4 jiao4 shi4 qian2 mian4 de xue2 sheng1 si4 hu1 shui4 zhao2, ta1 de tou2 cong2 yi4 bian1 yao2 dao4 ling4 yi4 bian1.',
            translation: '教室の前に座っている生徒は寝てしまっているようで、 頭が左右に揺れています。',
            memo: ''
          },
          {
            word: '壓歲錢',
            sentence: '代替壓歲錢， 把生魚片給貓吃。',
            bopomofo: 'ㄉㄞˋ ㄊㄧˋ ㄧㄚ ㄙㄨㄟˋ ㄑㄧㄢˊ, ㄅㄚˇ ㄕㄥ ㄩˊ ㄆㄧㄢˋ ㄍㄟˇ ㄇㄠ ㄔ.',
            pinyin: 'dai4 ti4 ya1 sui4 qian2, ba3 sheng1 yu2 pian4 gei3 mao1 chi1.',
            translation: 'お年玉の代わりに、 猫にはお刺身をあげます。',
            memo: ''
          },
          {
            word: '恭喜發財',
            sentence: '如果孩子說「恭喜發財」, 你的錢一定會出去。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄏㄞˊ ㄗ˙ ㄕㄨㄛ  ㄍㄨㄥ ㄒㄧˇ ㄈㄚ ㄘㄞˊ, ㄋㄧˇ ㄉㄜ˙ ㄑㄧㄢˊ ㄧˊ ㄉㄧㄥˋ ㄏㄨㄟˋ ㄔㄨ ㄑㄩˋ.',
            pinyin: 'ru2 guo3 hai2 zi shuo1 gong1 xi3 fa1 cai2, ni3 de qian2 yi1 ding4 hui4 chu1 qu4.',
            translation: '子どもが「お金が貯まりますように」と言うと、 あなたのお金はなくなります。',
            memo: '※「恭喜發財」：「おめでとう」「お金が貯まりますように」の意味。 子どもが紅包(お年玉のようなもの)を貰う時に言う。'
          },
          {
            word: '好了',
            sentence: '好了, 現在還是早上八點我能睡再一, 兩個小時。',
            bopomofo: 'ㄏㄠˇ ㄌㄜ˙, ㄒㄧㄢˋ ㄗㄞˋ ㄏㄞˊ ㄕˋ ㄗㄠˇ ㄕㄤˋ ㄅㄚ ㄉㄧㄢˇ ㄨㄛˇ ㄋㄥˊ ㄕㄨㄟˋ ㄗㄞˋ ㄧ, ㄌㄧㄤˇ ㄍㄜˋ ㄒㄧㄠˇ ㄕˊ.',
            pinyin: 'hao3 le, xian4 zai4 hai2 shi4 zao3 shang4 ba1 dian3 wo3 neng2 shui4 zai4 yi1, liang3 ge4 xiao3 shi2.',
            translation: '大丈夫、 まだ朝の8時なのであと1、 2時間は寝られます。',
            memo: ''
          },
          {
            word: '節日',
            sentence: '節日快要來了, 孩子們看起來都很期待。',
            bopomofo: 'ㄐㄧㄝˊ ㄖˋ ㄎㄨㄞˋ ㄧㄠˋ ㄌㄞˊ ㄌㄜ˙, ㄏㄞˊ ㄗ˙ ㄇㄣ˙ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄉㄡ ㄏㄣˇ ㄑㄧ ㄉㄞˋ.',
            pinyin: 'jie2 ri4 kuai4 yao4 lai2 le, hai2 zi men kan4 qi3 lai2 dou1 hen3 qi1 dai4.',
            translation: 'もうすぐお祭りなので、 子供たちはとても楽しみにしています。',
            memo: ''
          },
          {
            word: '打掃',
            sentence: '因為落葉的季節, 我們得每天打掃我家前面一次。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄌㄨㄛˋ ㄧㄝˋ ㄉㄜ˙ ㄐㄧˋ ㄐㄧㄝˊ, ㄨㄛˇ ㄇㄣ˙ ㄉㄟˇ ㄇㄟˇ ㄊㄧㄢ ㄉㄚˇ ㄙㄠˇ ㄨㄛˇ ㄐㄧㄚ ㄑㄧㄢˊ ㄇㄧㄢˋ ㄧ ㄘˋ.',
            pinyin: 'yin1 wei4 luo4 ye4 de ji4 jie2, wo3 men dei3 mei3 tian1 da3 sao3 wo3 jia1 qian2 mian4 yi1 ci4.',
            translation: '落ち葉の季節のため、 家の前を1日1回掃除しなければなりません。',
            memo: ''
          },
          {
            word: '另外',
            sentence: '我的狗當然吃肉, 另外也吃一些蔬菜。',
            bopomofo: 'ㄨㄛˇ ㄉㄜ˙ ㄍㄡˇ ㄉㄤ ㄖㄢˊ ㄔ ㄖㄡˋ, ㄌㄧㄥˋ ㄨㄞˋ ㄧㄝˇ ㄔ ㄧ ㄒㄧㄝ ㄕㄨ ㄘㄞˋ.',
            pinyin: 'wo3 de gou3 dang1 ran2 chi1 rou4, ling4 wai4 ye3 chi1 yi1 xie1 shu1 cai4.',
            translation: '私の犬はもちろん肉を食べますが、 それに加えていくつかの野菜も食べます。',
            memo: ''
          },
          {
            word: '春聯',
            sentence: '春聯上寫的句子說什麼?',
            bopomofo: 'ㄔㄨㄣ ㄌㄧㄢˊ ㄕㄤˋ ㄒㄧㄝˇ ㄉㄜ˙ ㄐㄩˋ ㄗ˙ ㄕㄨㄛ ㄕˊ ㄇㄛ˙?',
            pinyin: 'chun1 lian2 shang4 xie3 de ju4 zi shuo1 shen2 me?',
            translation: '春聯には何と書かれていますか?',
            memo: '※「春聯」：赤い紙に縁起の良い言葉を書いたもので、 旧正月（春節）の時に家の入口などに貼る。'
          },
          {
            word: '除夕',
            sentence: '在除夕你打不打算去看煙火?',
            bopomofo: 'ㄗㄞˋ ㄔㄨˊ ㄒㄧ ㄋㄧˇ ㄉㄚˇ ㄅㄨˋ ㄉㄚˇ ㄙㄨㄢˋ ㄑㄩˋ ㄎㄢˋ ㄧㄢ ㄏㄨㄛˇ?',
            pinyin: 'zai4 chu2 xi1 ni3 da3 bu4 da3 suan4 qu4 kan4 yan1 huo3?',
            translation: '大晦日の日は花火を見に行く予定ですか?',
            memo: ''
          },
          {
            word: '年糕',
            sentence: '年糕的材料和味道因地區而異。',
            bopomofo: 'ㄋㄧㄢˊ ㄍㄠ ㄉㄜ˙ ㄘㄞˊ ㄌㄧㄠˋ ㄏㄢˋ ㄨㄟˋ ㄉㄠˋ ㄧㄣ ㄉㄧˋ ㄑㄩ ㄦˊ ㄧˋ.',
            pinyin: 'nian2 gao1 de cai2 liao4 han4 wei4 dao4 yin1 di4 qu1 er2 yi4.',
            translation: '年糕の材料や味は地域によって異なります。',
            memo: '※「年糕」：旧正月（春節）に食べる餅のこと。'
          },
          {
            word: '橘子',
            sentence: '我的住在鄉下的親戚每年送很多橘子給我們。',
            bopomofo: 'ㄨㄛˇ ㄉㄜ˙ ㄓㄨˋ ㄗㄞˋ ㄒㄧㄤ ㄒㄧㄚˋ ㄉㄜ˙ ㄑㄧㄣ ㄑㄧ ㄇㄟˇ ㄋㄧㄢˊ ㄙㄨㄥˋ ㄏㄣˇ ㄉㄨㄛ ㄐㄩˊ ㄗ˙ ㄍㄟˇ ㄨㄛˇ ㄇㄣ˙.',
            pinyin: 'wo3 de zhu4 zai4 xiang1 xia4 de qin1 qi1 mei3 nian2 song4 hen3 duo1 ju2 zi gei3 wo3 men.',
            translation: '田舎の親戚は毎年たくさんのオレンジを送ってくれます。',
            memo: ''
          },
          {
            word: '守歲',
            sentence: '我通常熬夜， 所以我擅長守歲。',
            bopomofo: 'ㄨㄛˇ ㄊㄨㄥ ㄔㄤˊ ㄠˊ ㄧㄝˋ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄕㄢˋ ㄔㄤˊ ㄕㄡˇ ㄙㄨㄟˋ.',
            pinyin: 'wo3 tong1 chang2 ao2 ye4, suo3 yi3 wo3 shan4 chang2 shou3 sui4.',
            translation: '普段から夜更かしなので、 守歲は得意です。',
            memo: '※「守歲」：大晦日に、 年が明けるまで起きていること。'
          },
          {
            word: '說法',
            sentence: '那個教授的說法很邏輯, 總是很明白。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄐㄧㄠˋ ㄕㄡˋ ㄉㄜ˙ ㄕㄨㄛ ㄈㄚˇ ㄏㄣˇ ㄌㄨㄛˊ ㄐㄧ˙, ㄗㄨㄥˇ ㄕˋ ㄏㄣˇ ㄇㄧㄥˊ ㄅㄞˊ.',
            pinyin: 'na4 ge4 jiao4 shou4 de shuo1 fa3 hen3 luo2 ji, zong3 shi4 hen3 ming2 bai2.',
            translation: '教授の話し方は非常に論理的で、 常に明確です。',
            memo: ''
          },
          {
            word: '晚',
            sentence: '我到國外送的行李到達得很晚。',
            bopomofo: 'ㄨㄛˇ ㄉㄠˋ ㄍㄨㄛˊ ㄨㄞˋ ㄙㄨㄥˋ ㄉㄜ˙ ㄒㄧㄥˊ ㄌㄧˇ ㄉㄠˋ ㄉㄚˊ ㄉㄜ˙ ㄏㄣˇ ㄨㄢˇ.',
            pinyin: 'wo3 dao4 guo2 wai4 song4 de xing2 li3 dao4 da2 de hen3 wan3.',
            translation: '海外に送った荷物はとても遅れて届きました。',
            memo: ''
          },
          {
            word: '活',
            sentence: '在公園有一隻活得很久的老貓, 牠總是午睡。',
            bopomofo: 'ㄗㄞˋ ㄍㄨㄥ ㄩㄢˊ ㄧㄡˇ ㄧˋ ㄓ ㄏㄨㄛˊ ㄉㄜ˙ ㄏㄣˇ ㄐㄧㄡˇ ㄉㄜ˙ ㄌㄠˇ ㄇㄠ, ㄊㄚ ㄗㄨㄥˇ ㄕˋ ㄨˇ ㄕㄨㄟˋ.',
            pinyin: 'zai4 gong1 yuan2 you3 yi1 zhi1 huo2 de hen3 jiu3 de lao3 mao1, ta1 zong3 shi4 wu3 shui4.',
            translation: '公園には一匹の長生きな猫がいて、 いつも昼寝をしています。',
            memo: ''
          },
          {
            word: '平安',
            sentence: '從昨天媽媽生氣了, 家裡有不平安的氣氛。',
            bopomofo: 'ㄘㄨㄥˊ ㄗㄨㄛˊ ㄊㄧㄢ ㄇㄚ ㄇㄚ ㄕㄥ ㄑㄧˋ ㄌㄜ˙, ㄐㄧㄚ ㄌㄧˇ ㄧㄡˇ ㄅㄨˋ ㄆㄧㄥˊ ㄢ ㄉㄜ˙ ㄑㄧˋ ㄈㄣ.',
            pinyin: 'cong2 zuo2 tian1 ma1 ma1 sheng1 qi4 le, jia1 li3 you3 bu4 ping2 an1 de qi4 fen1.',
            translation: '昨日からお母さんがイライラしているので、 家の中には不穏な空気が漂っています。',
            memo: ''
          },
          {
            word: '出門',
            sentence: '他在十點起床, 慢慢地吃早飯, 下午二點才出門了。',
            bopomofo: 'ㄊㄚ ㄗㄞˋ ㄕˊ ㄉㄧㄢˇ ㄑㄧˇ ㄔㄨㄤˊ, ㄇㄢˋ ㄇㄢˋ ㄉㄜ˙ ㄔ ㄗㄠˇ ㄈㄢˋ, ㄒㄧㄚˋ ㄨˇ ㄦˋ ㄉㄧㄢˇ ㄘㄞˊ ㄔㄨ ㄇㄣˊ ㄌㄜ˙.',
            pinyin: 'ta1 zai4 shi2 dian3 qi3 chuang2, man4 man4 de chi1 zao3 fan4, xia4 wu3 er4 dian3 cai2 chu1 men2 le.',
            translation: '彼は10時に起きてゆっくり朝食を食べ、 午後2時にようやく出かけて行きました。',
            memo: ''
          },
          {
            word: '拜年',
            sentence: '我跟姐姐的孩子每年一次拜年的時候見面。',
            bopomofo: 'ㄨㄛˇ ㄍㄣ ㄐㄧㄝˇ ㄐㄧㄝ˙ ㄉㄜ˙ ㄏㄞˊ ㄗ˙ ㄇㄟˇ ㄋㄧㄢˊ ㄧ ㄘˋ ㄅㄞˋ ㄋㄧㄢˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄐㄧㄢˋ ㄇㄧㄢˋ.',
            pinyin: 'wo3 gen1 jie3 jie de hai2 zi mei3 nian2 yi1 ci4 bai4 nian2 de shi2 hou4 jian4 mian4.',
            translation: '姉の子供とは、 毎年一回新年の挨拶をする時に会います。',
            memo: ''
          },
          {
            word: '又',
            sentence: '你又吃了賞味期限過的食物把肚子壞了嗎?',
            bopomofo: 'ㄋㄧˇ ㄧㄡˋ ㄔ ㄌㄜ˙ ㄕㄤˇ ㄨㄟˋ ㄑㄧ ㄒㄧㄢˋ ㄍㄨㄛˋ ㄉㄜ˙ ㄕˊ ㄨˋ ㄅㄚˇ ㄉㄨˇ ㄗ˙ ㄏㄨㄞˋ ㄌㄜ˙ ㄇㄚ˙?',
            pinyin: 'ni3 you4 chi1 le shang3 wei4 qi1 xian4 guo4 de shi2 wu4 ba3 du4 zi huai4 le ma?',
            translation: 'また賞味期限切れの食べ物を食べてお腹を壊したんですか?',
            memo: ''
          },
          {
            word: '起來',
            sentence: '他的動力似乎沒了, 最近懶惰起來了。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄉㄨㄥˋ ㄌㄧˋ ㄙˋ ㄏㄨ ㄇㄟˊ ㄌㄜ˙, ㄗㄨㄟˋ ㄐㄧㄣˋ ㄌㄢˇ ㄉㄨㄛˋ ㄑㄧˇ ㄌㄞˊ ㄌㄜ˙.',
            pinyin: 'ta1 de dong4 li4 si4 hu1 mei2 le, zui4 jin4 lan3 duo4 qi3 lai2 le.',
            translation: '彼はやる気が無くなったようで、 最近は怠け始めました。',
            memo: ''
          },
          {
            word: '華人',
            sentence: '在城市的東部一個華人賣的食物非常受歡迎。',
            bopomofo: 'ㄗㄞˋ ㄔㄥˊ ㄕˋ ㄉㄜ˙ ㄉㄨㄥ ㄅㄨˋ ㄧˊ ㄍㄜˋ ㄏㄨㄚˊ ㄖㄣˊ ㄇㄞˋ ㄉㄜ˙ ㄕˊ ㄨˋ ㄈㄟ ㄔㄤˊ ㄕㄡˋ ㄏㄨㄢ ㄧㄥˊ.',
            pinyin: 'zai4 cheng2 shi4 de dong1 bu4 yi1 ge4 hua2 ren2 mai4 de shi2 wu4 fei1 chang2 shou4 huan1 ying2.',
            translation: '街の東側で、 中華系の人が売っている食べ物はとても評判がいいです。',
            memo: ''
          },
          {
            word: '貼上',
            sentence: '在牆上一個學生把單詞表貼上，我覺得那種學習方法很聰明。',
            bopomofo: 'ㄗㄞˋ ㄑㄧㄤˊ ㄕㄤˋ ㄧ ㄍㄜ˙ ㄒㄩㄝˊ ㄕㄥ ㄅㄚˇ ㄉㄢ ㄘˊ ㄅㄧㄠˇ ㄊㄧㄝ ㄕㄤˋ, ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄋㄚˋ ㄓㄨㄥˇ ㄒㄩㄝˊ ㄒㄧˊ ㄈㄤ ㄈㄚˇ ㄏㄣˇ ㄘㄨㄥ ㄇㄧㄥˊ.',
            pinyin: 'zai4 qiang2 shang4 yi1 ge4 xue2 sheng1 ba3 dan1 ci2 biao3 tie1 shang4, wo3 jue2 de na4 zhong3 xue2 xi2 fang1 fa3 hen3 cong1 ming2.',
            translation: 'ある学生が壁に単語リストを張り付けていて、 とても賢い学習方法だなと思いました。',
            memo: ''
          },
          {
            word: '年年有餘',
            sentence: '他失業了， 我不知道是好還是壞跟他說「年年有餘」。',
            bopomofo: 'ㄊㄚ ㄕ ㄧㄝˋ ㄌㄜ˙, ㄨㄛˇ ㄅㄨˋ ㄓ ㄉㄠˋ ㄕˋ ㄏㄠˇ ㄏㄨㄢˊ ㄕˋ ㄏㄨㄞˋ ㄍㄣ ㄊㄚ ㄕㄨㄛ  ㄋㄧㄢˊ ㄋㄧㄢˊ ㄧㄡˇ ㄩˊ.',
            pinyin: 'ta1 shi1 ye4 le, wo3 bu4 zhi1 dao4 shi4 hao3 hai2 shi4 huai4 gen1 ta1 shuo1 nian2 nian2 you3 yu2.',
            translation: '彼は失業中なので、 彼に「年年有餘」と言ってよいのか分かりません。',
            memo: '※「年年有餘」：「毎年金銭があまる、 ゆとりある生活を送ることができるように」という意味。'
          },
          {
            word: '步步高升',
            sentence: '她上了很好的公司， 一直步步高升。',
            bopomofo: 'ㄊㄚ ㄕㄤˋ ㄌㄜ˙ ㄏㄣˇ ㄏㄠˇ ㄉㄜ˙ ㄍㄨㄥ ㄙ, ㄧ ㄓˊ ㄅㄨˋ ㄅㄨˋ ㄍㄠ ㄕㄥ.',
            pinyin: 'ta1 shang4 le hen3 hao3 de gong1 si1, yi1 zhi2 bu4 bu4 gao1 sheng1.',
            translation: '彼女は良い会社に入って、 出世し続けています。',
            memo: '※「步步高升」：「出世できますように」という意味。'
          },
          {
            word: '大吉大利',
            sentence: '那個小孩似乎學了一個新的生詞， 走著對大家說「大吉大利」。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄒㄧㄠˇ ㄏㄞˊ ㄙˋ ㄏㄨ ㄒㄩㄝˊ ㄌㄜ˙ ㄧˊ ㄍㄜˋ ㄒㄧㄣ ㄉㄜ˙ ㄕㄥ ㄘˊ, ㄗㄡˇ ㄓㄜ˙ ㄉㄨㄟˋ ㄉㄚˋ ㄐㄧㄚ ㄕㄨㄛ  ㄉㄚˋ ㄐㄧˊ ㄉㄚˋ ㄌㄧˋ.',
            pinyin: 'na4 ge4 xiao3 hai2 si4 hu1 xue2 le yi1 ge4 xin1 de sheng1 ci2, zou3 zhe dui4 da4 jia1 shuo1 da4 ji2 da4 li4.',
            translation: 'あの子供は新しい言葉を覚えたらしく、 みんなに「大吉大利」と言ってまわっています。',
            memo: '※「縁起が良く、 順調である事」を意味する言葉。'
          },
          {
            word: '放鞭炮',
            sentence: '你只要戴頭盔, 走進放鞭炮的地方就安全嗎?',
            bopomofo: 'ㄋㄧˇ ㄓˇ ㄧㄠˋ ㄉㄞˋ ㄊㄡˊ ㄎㄨㄟ, ㄗㄡˇ ㄐㄧㄣˋ ㄈㄤˋ ㄅㄧㄢ ㄆㄠˋ ㄉㄜ˙ ㄉㄧˋ ㄈㄤ ㄐㄧㄡˋ ㄢ ㄑㄩㄢˊ ㄇㄚ˙?',
            pinyin: 'ni3 zhi3 yao4 dai4 tou2 kui1, zou3 jin4 fang4 bian1 pao4 de di4 fang1 jiu4 an1 quan2 ma?',
            translation: 'ヘルメットを被れば、 爆竹が鳴っている場所に入っても大丈夫ですか?',
            memo: ''
          },
          {
            word: '大年初一',
            sentence: '在大年初一我每年一直睡覺很吃東西。',
            bopomofo: 'ㄗㄞˋ ㄉㄚˋ ㄋㄧㄢˊ ㄔㄨ ㄧ ㄨㄛˇ ㄇㄟˇ ㄋㄧㄢˊ ㄧ ㄓˊ ㄕㄨㄟˋ ㄐㄧㄠˋ ㄏㄣˇ ㄔ ㄉㄨㄥ ㄒㄧ.',
            pinyin: 'zai4 da4 nian2 chu1 yi1 wo3 mei3 nian2 yi1 zhi2 shui4 jiao4 hen3 chi1 dong1 xi.',
            translation: '毎年、 元旦は寝るか食べるかしかしていません。',
            memo: ''
          },
          {
            word: '大年初五',
            sentence: '大年初五， 上班族都希望有能帶回時間的魔法。',
            bopomofo: 'ㄉㄚˋ ㄋㄧㄢˊ ㄔㄨ ㄨˇ, ㄕㄤˋ ㄅㄢ ㄗㄨˊ ㄉㄡ ㄒㄧ ㄨㄤˋ ㄧㄡˇ ㄋㄥˊ ㄉㄞˋ ㄏㄨㄟˊ ㄕˊ ㄐㄧㄢ ㄉㄜ˙ ㄇㄛˊ ㄈㄚˇ.',
            pinyin: 'da4 nian2 chu1 wu3, shang4 ban1 zu2 dou1 xi1 wang4 you3 neng2 dai4 hui2 shi2 jian1 de mo2 fa3.',
            translation: '正月の5日目、 サラリーマンはみんな時間を戻す魔法があればいいのにと思います。',
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
