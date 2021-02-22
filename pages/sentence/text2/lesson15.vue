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
            word: '☆春節',
            sentence: '春節收到的烏魚子爸爸把它吃完了。',
            bopomofo: 'ㄔㄨㄣ ㄐㄧㄝˊ ㄕㄡ ㄉㄠˋ ㄉㄜ˙ ㄨ ㄩˊ ㄗˇ ㄅㄚˋ ㄅㄚˋ ㄅㄚˇ ㄊㄚ ㄔ ㄨㄢˊ ㄌㄜ˙.',
            pinyin: 'chun1 jie2 shou1 dao4 de wu1 yu2 zi3 ba4 ba4 ba3 ta1 chi1 wan2 le.',
            translation: '春節の時にもらったカラスミをお父さんは食べてしまいました。',
            memo: '',
            changed: '★'
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
            word: '☆女兒',
            sentence: '女兒想把小狗抱起來， 讓牠很害怕。',
            bopomofo: 'ㄋㄩˇ ㄦˊ ㄒㄧㄤˇ ㄅㄚˇ ㄒㄧㄠˇ ㄍㄡˇ ㄅㄠˋ ㄑㄧˇ ㄌㄞˊ, ㄖㄤˋ ㄊㄚ ㄏㄣˇ ㄏㄞˋ ㄆㄚˋ.',
            pinyin: 'nu3 er2 xiang3 ba3 xiao3 gou3 bao4 qi3 lai2, rang4 ta1 hen3 hai4 pa4.',
            translation: '娘が抱き上げようとするので、 犬はとても怯えています。',
            memo: '',
            changed: '★'
          },
          {
            word: '☆國外',
            sentence: '去外國時， 你什麼時候換錢?',
            bopomofo: 'ㄑㄩˋ ㄨㄞˋ ㄍㄨㄛˊ ㄕˊ, ㄋㄧˇ ㄕㄣˊ ㄇㄜ˙ ㄕˊ ㄏㄡˋ ㄏㄨㄢˋ ㄑㄧㄢˊ?',
            pinyin: 'qu4 wai4 guo2 shi2, ni3 shen2 me shi2 hou4 huan4 qian2?',
            translation: '海外に行く時、 あなたはいつ両替えしますか?',
            memo: '',
            changed: '★'
          },
          {
            word: '☆圍爐',
            sentence: '分開住的家人在除夕夜也會聚在一起圍爐。',
            bopomofo: 'ㄈㄣ ㄎㄞ ㄓㄨˋ ㄉㄜ˙ ㄐㄧㄚ ㄖㄣˊ ㄗㄞˋ ㄔㄨˊ ㄒㄧˋ ㄧㄝˋ ㄧㄝˇ ㄏㄨㄟˋ ㄐㄩˋ ㄗㄞˋ ㄧˋ ㄑㄧˇ ㄨㄟˊ ㄌㄨˊ.',
            pinyin: 'fen1 kai1 zhu4 de jia1 ren2 zai4 chu2 xi4 ye4 ye3 hui4 ju4 zai4 yi1 qi3 wei2 lu2.',
            translation: '離れて暮らしている家族も、 大晦日にはみんなで集まります。',
            memo: '',
            changed: '★'
          },
          {
            word: '☆意思',
            sentence: '他醉得很厲害， 一直說著我聽不明白的話。',
            bopomofo: 'ㄊㄚ ㄗㄨㄟˋ ㄉㄜ˙ ㄏㄣˇ ㄌㄧˋ ㄏㄞˋ, ㄧ ㄓˊ ㄕㄨㄛ ㄓㄜ˙ ㄨㄛˇ ㄊㄧㄥ ㄅㄨˋ ㄇㄧㄥˊ ㄅㄞˊ ㄉㄜ˙ ㄏㄨㄚˋ.',
            pinyin: 'ta1 zui4 de hen3 li4 hai4, yi1 zhi2 shuo1 zhe wo3 ting1 bu4 ming2 bai2 de hua4.',
            translation: '彼はひどく酔っぱらって、 意味が分からない事を話し続けています。',
            memo: '',
            changed: '★'
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
            word: '★吉祥',
            sentence: '紅色的東西是不是都是吉利的（好的）?',
            bopomofo: 'ㄏㄨㄥˊ ㄙㄜˋ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ ㄕˋ ㄅㄨˊ ㄕˋ ㄉㄡ ㄐㄧˊ ㄒㄧㄤˊ?',
            pinyin: 'hong2 se4 de dong1 xi shi4 bu2 shi4 dou1 ji2 xiang2?',
            translation: '赤い色のものは全て縁起が良いのですか?',
            memo: '',
            changed: '★'
          },
          {
            word: '☆年紀',
            sentence: '大概從三十歲起， 我不太清楚記得自己的年紀。',
            bopomofo: 'ㄉㄚˋ ㄍㄞˋ ㄘㄨㄥˊ ㄙㄢ ㄕˊ ㄙㄨㄟˋ ㄑㄧˇ, ㄨㄛˇ ㄅㄨˊ ㄊㄞˋ ㄑㄧㄥ ㄔㄨˇ ㄐㄧˋ ㄉㄜ˙ ㄗˋ ㄐㄧˇ ㄉㄜ˙ ㄋㄧㄢˊ ㄐㄧˋ.',
            pinyin: 'da4 gai4 cong2 san1 shi2 sui4 qi3, wo3 bu2 tai4 qing1 chu3 ji4 de zi4 ji3 de nian2 ji4.',
            translation: '30歳くらいの時から、 自分の年齢がよく分からなくなってきました。',
            memo: '',
            changed: '★'
          },
          {
            word: '☆過年',
            sentence: '鞭炮聲有過年的氣氛我很喜歡， 不過貓看起來不太開心。',
            bopomofo: 'ㄅㄧㄢ ㄆㄠˋ ㄕㄥ ㄧㄡˇ ㄍㄨㄛˋ ㄋㄧㄢˊ ㄉㄜ˙ ㄑㄧˋ ㄈㄣ ㄨㄛˇ ㄏㄣˇ ㄒㄧˇ ㄏㄨㄢ, ㄅㄨˊ ㄍㄨㄛˋ ㄇㄠ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄅㄨˊ ㄊㄞˋ ㄎㄞ ㄒㄧㄣ.',
            pinyin: 'bian1 pao4 sheng1 you3 guo4 nian2 de qi4 fen1 wo3 hen3 xi3 huanq, bu2 guo4 mao1 kan4 qi3 lai2 bu2 tai4 kai1 xin1.',
            translation: '爆竹の音はお正月の雰囲気がして私はとても好きなのですが、 猫は嬉しくなさそうです。',
            memo: '',
            changed: '★'
          },
          {
            word: '★除夕夜',
            sentence: '不喝酒就不算是除夕夜了。',
            bopomofo: 'ㄅㄨˋ ㄏㄜ ㄐㄧㄡˇ ㄐㄧㄡˋ ㄅㄨˊ ㄙㄨㄢˋ ㄕˋ ㄔㄨˊ ㄒㄧˋ ㄧㄝˋ ㄌㄜ˙.',
            pinyin: 'bu4 he1 jiu3 jiu4 bu2 suan4 shi4 chu2 xi4 ye4 le.',
            translation: 'お酒を飲まなければ大晦日ではありません',
            memo: '※「就(不)算是」:「～とみなす(みなさない)」?',
            changed: '★'
          },
          {
            word: '☆睡著',
            sentence: '坐在教室前面的學生似乎睡著了， 頭腦左右搖晃著。',
            bopomofo: 'ㄗㄨㄛˋ ㄗㄞˋ ㄐㄧㄠˋ ㄕˋ ㄑㄧㄢˊ ㄇㄧㄢˋ ㄉㄧˊ ㄒㄩㄝˊ ㄕㄥ ㄙˋ ㄏㄨ ㄕㄨㄟˋ ㄓㄠˊ ㄌㄜ˙, ㄊㄡˊ ㄋㄠˇ ㄗㄨㄛˇ ㄧㄡˋ ㄧㄠˊ ㄏㄨㄤˋ ㄓㄜ˙.',
            pinyin: 'zuo4 zai4 jiao4 shi4 qian2 mian4 de xue2 sheng1 si4 hu1 shui4 zhao2 le, tou2 nao3 zuo3 you4 yao2 huang4 zhe.',
            translation: '教室の前に座っている生徒は寝てしまっているようで、 頭が左右に揺れています。',
            memo: '',
            changed: '★'
          },
          {
            word: '☆壓歲錢',
            sentence: '把生魚片代替壓歲錢給貓。',
            bopomofo: 'ㄅㄚˇ ㄕㄥ ㄩˊ ㄆㄧㄢˋ ㄉㄞˋ ㄊㄧˋ ㄧㄚ ㄙㄨㄟˋ ㄑㄧㄢˊ ㄍㄟˇ ㄇㄠ.',
            pinyin: 'ba3 sheng1 yu2 pian4 dai4 ti4 ya1 sui4 qian2 gei3 mao1.',
            translation: 'お年玉の代わりに、 猫にはお刺身をあげます。',
            memo: '',
            changed: '★'
          },
          {
            word: '☆恭喜發財',
            sentence: '如果孩子說「恭喜發財」, 你的錢一定會出去。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄏㄞˊ ㄗ˙ ㄕㄨㄛ  ㄍㄨㄥ ㄒㄧˇ ㄈㄚ ㄘㄞˊ, ㄋㄧˇ ㄉㄜ˙ ㄑㄧㄢˊ ㄧˊ ㄉㄧㄥˋ ㄏㄨㄟˋ ㄔㄨ ㄑㄩˋ.',
            pinyin: 'ru2 guo3 hai2 zi shuo1 gong1 xi3 fa1 cai2, ni3 de qian2 yi1 ding4 hui4 chu1 qu4.',
            translation: '子どもが「お金が貯まりますように」と言うと、 あなたのお金はなくなります。',
            memo: '※「恭喜發財」：「おめでとう」「お金が貯まりますように」の意味。 子どもが紅包(お年玉のようなもの)を貰う時に言う。'
          },
          {
            word: '☆好了',
            sentence: '好了， 現在還是早上八點， 我能再睡一兩個小時。',
            bopomofo: 'ㄏㄠˇ ㄌㄜ˙, ㄒㄧㄢˋ ㄗㄞˋ ㄏㄞˊ ㄕˋ ㄗㄠˇ ㄕㄤˋ ㄅㄚ ㄉㄧㄢˇ, ㄨㄛˇ ㄋㄥˊ ㄗㄞˋ ㄕㄨㄟˋ ㄧ ㄌㄧㄤˇ ㄍㄜˋ ㄒㄧㄠˇ ㄕˊ.',
            pinyin: 'hao3 le, xian4 zai4 hai2 shi4 zao3 shang4 ba1 dian3, wo3 neng2 zai4 shui4 yi1 liang3 ge4 xiao3 shi2.',
            translation: '大丈夫、 まだ朝の8時なのであと1、 2時間は寝られます。',
            memo: '',
            changed: '★'
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
            word: '☆春聯',
            sentence: '春聯上寫的句子在說什麼呢?',
            bopomofo: 'ㄔㄨㄣ ㄌㄧㄢˊ ㄕㄤˋ ㄒㄧㄝˇ ㄉㄜ˙ ㄐㄩˋ ㄗ˙ ㄗㄞˋ ㄕㄨㄛ ㄕˊ ㄇㄛˇ ㄋㄜ˙?',
            pinyin: 'chun1 lian2 shang4 xie3 de ju4 zi3 zai4 shuo1 shen2 me ne?',
            translation: '春聯には何と書かれていますか?',
            memo: '※「春聯」：赤い紙に縁起の良い言葉を書いたもので、 旧正月（春聯）の時に家の入口などに貼る。',
            changed: '★'
          },
          {
            word: '☆除夕',
            sentence: '除夕你打不打算去看煙火?',
            bopomofo: 'ㄔㄨˊ ㄒㄧˋ ㄋㄧˇ ㄉㄚˇ ㄅㄨˋ ㄉㄚˇ ㄙㄨㄢˋ ㄑㄩˋ ㄎㄢˋ ㄧㄢ ㄏㄨㄛˇ?',
            pinyin: 'chu2 xi4 ni3 da3 bu4 da3 suan4 qu4 kan4 yan1 huo3?',
            translation: '大晦日の日は花火を見に行く予定ですか?',
            memo: '',
            changed: '★'
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
            word: '☆橘子',
            sentence: '住鄉下的親戚每年送給我們很多橘子。',
            bopomofo: 'ㄓㄨˋ ㄒㄧㄤ ㄒㄧㄚˋ ㄉㄜ˙ ㄑㄧㄣ ㄑㄧ ㄇㄟˇ ㄋㄧㄢˊ ㄙㄨㄥˋ ㄍㄟˇ ㄨㄛˇ ㄇㄣ˙ ㄏㄣˇ ㄉㄨㄛ ㄐㄩˊ ㄗ˙.',
            pinyin: 'zhu4 xiang1 xia4 de qin1 qi1 mei3 nian2 song4 gei3 wo3 men hen3 duo1 ju2 zi.',
            translation: '田舎の親戚は毎年たくさんのオレンジを送ってくれます。',
            memo: '',
            changed: '★'
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
            word: '★說法',
            sentence: '那個教授的話非常有邏輯, 總是很清楚。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄐㄧㄠˋ ㄕㄡˋ ㄉㄜ˙ ㄏㄨㄚˋ ㄈㄟ ㄔㄤˊ ㄧㄡˇ ㄌㄨㄛˊ ㄐㄧ˙, ㄗㄨㄥˇ ㄕˋ ㄏㄣˇ ㄑㄧㄥ ㄔㄨˇ.',
            pinyin: 'na4 ge4 jiao4 shou4 de hua4 fei1 chang2 you3 luo2 ji2, zong3 shi4 hen3 qing1 chu3.',
            translation: '教授の話し方は非常に論理的で、 常に明確です。',
            memo: '※「邏輯」の発音',
            changed: '★'
          },
          {
            word: '☆晚',
            sentence: '我寄到國外的行李很晚才到達。',
            bopomofo: 'ㄨㄛˇ ㄐㄧˋ ㄉㄠˋ ㄍㄨㄛˊ ㄨㄞˋ ㄉㄜ˙ ㄒㄧㄥˊ ㄌㄧˇ ㄏㄣˇ ㄨㄢˇ ㄘㄞˊ ㄉㄠˋ ㄉㄚˊ.',
            pinyin: 'wo3 ji4 dao4 guo2 wai4 de xing2 li3 hen3 wan3 cai2 dao4 da2.',
            translation: '海外に送った荷物はとても遅れて届きました。',
            memo: '',
            changed: '★'
          },
          {
            word: '☆活',
            sentence: '公園裡有一隻活了很久的老貓， 牠總是在睡午覺。',
            bopomofo: 'ㄍㄨㄥ ㄩㄢˊ ㄌㄧˇ ㄧㄡˇ ㄧˋ ㄓ ㄏㄨㄛˊ ㄌㄜ˙ ㄏㄣˇ ㄐㄧㄡˇ ㄉㄜ˙ ㄌㄠˇ ㄇㄠ, ㄊㄚ ㄗㄨㄥˇ ㄕˋ ㄗㄞˋ ㄕㄨㄟˋ ㄨˇ ㄐㄧㄠˋ.',
            pinyin: 'gong1 yuan2 li3 you3 yi1 zhi1 huo2 le hen3 jiu3 de lao3 mao1, ta1 zong3 shi4 zai4 shui4 wu3 jiao4.',
            translation: '公園には一匹の長生きな猫がいて、 いつも昼寝をしています。',
            memo: '',
            changed: '★'
          },
          {
            word: '★平安',
            sentence: '從昨天媽媽生氣了， 家裡漂著不安定的氣氛。',
            bopomofo: 'ㄘㄨㄥˊ ㄗㄨㄛˊ ㄊㄧㄢ ㄇㄚ ㄇㄚ ㄕㄥ ㄑㄧˋ ㄌㄜ˙, ㄐㄧㄚ ㄌㄧˇ ㄆㄧㄠˋ ㄓㄜ˙ ㄅㄨˋ ㄢ ㄉㄧㄥˋ ㄉㄜ˙ ㄑㄧˋ ㄈㄣ.',
            pinyin: 'cong2 zuo2 tian1 ma1 ma1 sheng1 qi4 le, jia1 li3 piao4 zhe bu4 an1 ding4 de qi4 fen1.',
            translation: '昨日からお母さんがイライラしているので、 家の中には不穏な空気が漂っています。',
            memo: '',
            changed: '★'
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
            word: '☆又',
            sentence: '你又吃了超過賞味期限的食物把肚子搞壞了?',
            bopomofo: 'ㄋㄧˇ ㄧㄡˋ ㄔ ㄌㄜ˙ ㄔㄠ ㄍㄨㄛˋ ㄕㄤˇ ㄨㄟˋ ㄑㄧ ㄒㄧㄢˋ ㄉㄜ˙ ㄕˊ ㄨˋ ㄅㄚˇ ㄉㄨˇ ㄗ˙ ㄍㄠˇ ㄏㄨㄞˋ ㄌㄜ˙?',
            pinyin: 'ni3 you4 chi1 le chao1 guo4 shang3 wei4 qi1 xian4 de shi2 wu4 ba3 du4 zi gao3 huai4 le?',
            translation: 'また賞味期限切れの食べ物を食べてお腹を壊したんですか?',
            memo: '',
            changed: '★'
          },
          {
            word: '☆起來',
            sentence: '他似乎沒了幹勁， 最近懶散起來了。',
            bopomofo: 'ㄊㄚ ㄙˋ ㄏㄨ ㄇㄟˊ ㄌㄜ˙ ㄍㄢˋ ㄐㄧㄣˋ, ㄗㄨㄟˋ ㄐㄧㄣˋ ㄌㄢˇ ㄙㄢˇ ㄑㄧˇ ㄌㄞˊ ㄌㄜ˙.',
            pinyin: 'ta1 si4 hu1 mei2 le gan4 jin4, zui4 jin4 lan3 san3 qi3 lai2 le.',
            translation: '彼はやる気が無くなったようで、 最近は怠け始めました。',
            memo: '',
            changed: '★'
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
            word: '★貼上',
            sentence: '有學生把單字貼在牆上， 我覺得那種學習方式很聰明。',
            bopomofo: 'ㄧㄡˇ ㄒㄩㄝˊ ㄕㄥ ㄅㄚˇ ㄉㄢ ㄗˋ ㄊㄧㄝ ㄗㄞˋ ㄑㄧㄤˊ ㄕㄤˋ, ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄋㄚˋ ㄓㄨㄥˇ ㄒㄩㄝˊ ㄒㄧˊ ㄈㄤ ㄕˋ ㄏㄣˇ ㄘㄨㄥ ㄇㄧㄥˊ.',
            pinyin: 'you3 xue2 sheng1 ba3 dan1 zi4 tie1 zai4 qiang2 shang4, wo3 jue2 de na4 zhong3 xue2 xi2 fang1 shi4 hen3 cong1 ming2.',
            translation: 'ある学生が壁に単語リストを張り付けていて、 とても賢い学習方法だなと思いました。',
            memo: '',
            changed: '★'
          },
          {
            word: '☆年年有餘',
            sentence: '他失業了， 跟他說「年年有餘」不知道是好還是壞。',
            bopomofo: 'ㄊㄚ ㄕ ㄧㄝˋ ㄌㄜ˙, ㄍㄣ ㄊㄚ ㄕㄨㄛ  ㄋㄧㄢˊ ㄋㄧㄢˊ ㄧㄡˇ ㄩˊ  ㄅㄨˋ ㄓ ㄉㄠˋ ㄕˋ ㄏㄠˇ ㄏㄨㄢˊ ㄕˋ ㄏㄨㄞˋ.',
            pinyin: 'ta1 shi1 ye4 le, gen1 ta1 shuo1 nian2 nian2 you3 yu2 bu4 zhi1 dao4 shi4 hao3 hai2 shi4 huai4.',
            translation: '彼は失業中なので、 彼に「年年有餘」と言ってよいのか分かりません。',
            memo: '※「年年有餘」：「毎年金銭があまる、 ゆとりある生活を送ることができるように」という意味。',
            changed: '★'
          },
          {
            word: '★步步高升',
            sentence: '她進了很好的公司， 出人頭地了（慢慢地往上爬了）。',
            bopomofo: 'ㄊㄚ ㄐㄧㄣˋ ㄌㄜ˙ ㄏㄣˇ ㄏㄠˇ ㄉㄜ˙ ㄍㄨㄥ ㄙ, ㄔㄨ ㄖㄣˊ ㄊㄡˊ ㄉㄧˋ ㄌㄜ˙. (ㄇㄢˋ ㄇㄢˋ ㄉㄧˋ ㄨㄤˇ ㄕㄤˋ ㄆㄚˊ ㄌㄜ˙).',
            pinyin: 'ta1 jin4 le hen3 hao3 de gong1 si1, chu1 ren2 tou2 de le. (man4 man4 di4 wang3 shang4 pa2 le).',
            translation: '彼女は良い会社に入って、 出世し続けています。',
            memo: '※「步步高升」：「出世できますように」という意味。',
            changed: '★'
          },
          {
            word: '☆大吉大利',
            sentence: '那個孩子似乎學到了一個新單詞， 走著對大家說「大吉大利」。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄏㄞˊ ㄗ˙ ㄙˋ ㄏㄨ ㄒㄩㄝˊ ㄉㄠˋ ㄌㄜ˙ ㄧˊ ㄍㄜˋ ㄒㄧㄣ ㄉㄢ ㄘˊ, ㄗㄡˇ ㄓㄜ˙ ㄉㄨㄟˋ ㄉㄚˋ ㄐㄧㄚ ㄕㄨㄛ  ㄉㄚˋ ㄐㄧˊ ㄉㄚˋ ㄌㄧˋ.',
            pinyin: 'na4 ge4 hai2 zi si4 hu1 xue2 dao4 le yi1 ge4 xin1 dan1 ci2, zou3 zhe dui4 da4 jia1 shuo1 da4 ji2 da4 li4.',
            translation: 'あの子供は新しい言葉を覚えたらしく、 みんなに「大吉大利」と言ってまわっています。',
            memo: '※「縁起が良く、 順調である事」を意味する言葉。',
            changed: '★'
          },
          {
            word: '☆放鞭炮',
            sentence: '你覺得只要帶著安全帽進放鞭炮的地方就安全了嗎?',
            bopomofo: 'ㄋㄧˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄓˇ ㄧㄠˋ ㄉㄞˋ ㄓㄜ˙ ㄢ ㄑㄩㄢˊ ㄇㄠˋ ㄐㄧㄣˋ ㄈㄤˋ ㄅㄧㄢ ㄆㄠˋ ㄉㄜ˙ ㄉㄧˋ ㄈㄤ ㄐㄧㄡˋ ㄢ ㄑㄩㄢˊ ㄌㄜ˙ ㄇㄚ˙?',
            pinyin: 'ni3 jue2 de zhi3 yao4 dai4 zhe an1 quan2 mao4 jin4 fang4 bian1 pao4 de di4 fang1 jiu4 an1 quan2 le ma2?',
            translation: 'ヘルメットを被れば、 爆竹が鳴っている場所に入っても大丈夫ですか?',
            memo: '※「頭盔(ㄊㄡˊ ㄎㄨㄟ/tou2 kui1)」は「かぶと」。',
            changed: '★'
          },
          {
            word: '★大年初一',
            sentence: '每年大年初一， 我不是吃就是睡。',
            bopomofo: 'ㄇㄟˇ ㄋㄧㄢˊ ㄉㄚˋ ㄋㄧㄢˊ ㄔㄨ ㄧ, ㄨㄛˇ ㄅㄨˊ ㄕˋ ㄔ ㄐㄧㄡˋ ㄕˋ ㄕㄨㄟˋ.',
            pinyin: 'mei3 nian2 da4 nian2 chu1 yi1, wo3 bu2 shi4 chi1 jiu4 shi4 shui4.',
            translation: '毎年、 元旦は寝るか食べるかしかしていません。',
            memo: '',
            changed: '★'
          },
          {
            word: '★大年初五',
            sentence: '大年初五， 上班族們都希望擁有回到過去的魔法。',
            bopomofo: 'ㄉㄚˋ ㄋㄧㄢˊ ㄔㄨ ㄨˇ, ㄕㄤˋ ㄅㄢ ㄗㄨˊ ㄇㄣ˙ ㄉㄡ ㄒㄧ ㄨㄤˋ ㄩㄥ ㄧㄡˇ ㄏㄨㄟˊ ㄉㄠˋ ㄍㄨㄛˋ ㄑㄩˋ ㄉㄜ˙ ㄇㄛˊ ㄈㄚˇ.',
            pinyin: 'da4 nian2 chu1 wu3, shang4 ban1 zu2 men dou1 xi1 wang4 yong1 you3 hui2 dao4 guo4 qu4 de mo2 fa3.',
            translation: '正月の五日目、 サラリーマンはみんな時間を戻す魔法があればいいのにと思います。',
            memo: '',
            changed: '★'
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
