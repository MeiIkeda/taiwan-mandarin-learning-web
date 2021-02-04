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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第13章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第13章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      data: {
        title: '當代中文課程課2・第13章',
        words: [
          {
            word: '林愛麗',
            sentence: '林愛麗在路口遇見她的老師。',
            bopomofo: 'ㄌㄧㄣˊ ㄞˋ ㄌㄧˋ ㄗㄞˋ ㄌㄨˋ ㄎㄡˇ ㄩˋ ㄐㄧㄢˋ ㄊㄚ ㄉㄜ˙ ㄌㄠˇ ㄕ.',
            pinyin: 'lin2 ai4 li4 zai4 lu4 kou3 yu4 jian4 ta1 de lao3 shi1.',
            translation: '林愛麗は交差点で先生にばったり会いました。',
            memo: ''
          },
          {
            word: '掉',
            sentence: '如果你掉隨身行李, 先去警察就好了。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄉㄧㄠˋ ㄙㄨㄟˊ ㄕㄣ ㄒㄧㄥˊ ㄌㄧˇ, ㄒㄧㄢ ㄑㄩˋ ㄐㄧㄥˇ ㄔㄚˊ ㄐㄧㄡˋ ㄏㄠˇ ㄌㄜ˙.',
            pinyin: 'ru2 guo3 ni3 diao4 sui2 shen1 xing2 li3, xian1 qu4 jing3 cha2 jiu4 hao3 le.',
            translation: '身の回りの物を失くしたら、 まず警察に行くのがいいですよ。',
            memo: ''
          },
          {
            word: '低頭',
            sentence: '那個高的先生沒低頭， 所以把頭撞到天花板。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄍㄠ ㄉㄜ˙ ㄒㄧㄢ ㄕㄥ ㄇㄟˊ ㄉㄧ ㄊㄡˊ, ㄙㄨㄛˇ ㄧˇ ㄅㄚˇ ㄊㄡˊ ㄓㄨㄤˋ ㄉㄠˋ ㄊㄧㄢ ㄏㄨㄚ ㄅㄢˇ.',
            pinyin: 'na4 ge4 gao1 de xian1 sheng1 mei2 di1 tou2, suo3 yi3 ba3 tou2 zhuang4 dao4 tian1 hua1 ban3.',
            translation: 'あの背の高い人は頭を下げなかったので、 頭を天井にぶつけました。',
            memo: ''
          },
          {
            word: '傳',
            sentence: '因為我傳電子郵件給錯的人， 我被罵了。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄨㄛˇ ㄔㄨㄢˊ ㄉㄧㄢˋ ㄗˇ ㄧㄡˊ ㄐㄧㄢˋ ㄍㄟˇ ㄘㄨㄛˋ ㄉㄜ˙ ㄖㄣˊ, ㄨㄛˇ ㄅㄟˋ ㄇㄚˋ ㄌㄜ˙.',
            pinyin: 'yin1 wei4 wo3 chuan2 dian4 zi3 you2 jian4 gei3 cuo4 de ren2, wo3 bei4 ma4 le.',
            translation: '間違った人にメールを送ってしまったので、 叱られました。',
            memo: ''
          },
          {
            word: '過',
            sentence: '今天我用過所有的錢, 晚餐會吃便宜的稀飯。',
            bopomofo: 'ㄐㄧㄣ ㄊㄧㄢ ㄨㄛˇ ㄩㄥˋ ㄍㄨㄛˋ ㄙㄨㄛˇ ㄧㄡˇ ㄉㄜ˙ ㄑㄧㄢˊ, ㄨㄢˇ ㄘㄢ ㄏㄨㄟˋ ㄔ ㄆㄧㄢˊ ㄧˊ ㄉㄜ˙ ㄒㄧ ㄈㄢˋ.',
            pinyin: 'jin1 tian1 wo3 yong4 guo4 suo3 you3 de qian2, wan3 can1 hui4 chi1 pian2 yi2 de xi1 fan4.',
            translation: '今日はお金を全部使ってしまったので、 夕食には安いお粥を食べます。',
            memo: ''
          },
          {
            word: '簡訊',
            sentence: '他的簡訊太長了， 讀地我總是累。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄐㄧㄢˇ ㄒㄩㄣˋ ㄊㄞˋ ㄓㄤˇ ㄌㄜ˙, ㄉㄨˊ ㄉㄜ˙ ㄨㄛˇ ㄗㄨㄥˇ ㄕˋ ㄌㄟˋ.',
            pinyin: 'ta1 de jian3 xun4 tai4 chang2 le, du2 de wo3 zong3 shi4 lei4.',
            translation: '彼のテキストメッセージは長すぎて、 読むのにいつも疲れてしまいます。',
            memo: ''
          },
          {
            word: '功能',
            sentence: '我平常只上網， 我不在乎電腦的功能。',
            bopomofo: 'ㄨㄛˇ ㄆㄧㄥˊ ㄔㄤˊ ㄓˇ ㄕㄤˋ ㄨㄤˇ, ㄨㄛˇ ㄅㄨˋ ㄗㄞˋ ㄏㄨ˙ ㄉㄧㄢˋ ㄋㄠˇ ㄉㄜ˙ ㄍㄨㄥ ㄋㄥˊ.',
            pinyin: 'wo3 ping2 chang2 zhi3 shang4 wang3, wo3 bu4 zai4 hu1 dian4 nao3 de gong1 neng2.',
            translation: '私は普段ネットをするだけなので、 パソコンの性能は気にしません。',
            memo: ''
          },
          {
            word: '生氣',
            sentence: '大家都試摸摸， 所以那隻貓在有一點生氣。',
            bopomofo: 'ㄉㄚˋ ㄐㄧㄚ ㄉㄨ ㄕˋ ㄇㄛ ㄇㄛ, ㄙㄨㄛˇ ㄧˇ ㄋㄚˋ ㄓˇ ㄇㄠ ㄗㄞˋ ㄧㄡˇ ㄧˋ ㄉㄧㄢˇ ㄕㄥ ㄑㄧˋ.',
            pinyin: 'da4 jia1 dou1 shi4 mo1 mo1, suo3 yi3 na4 zhi1 mao1 zai4 you3 yi1 dian3 sheng1 qi4.',
            translation: 'みんなが触ろうとするので、 猫は少し怒っています。',
            memo: ''
          },
          {
            word: '叫',
            sentence: '女朋友叫了他別遲到。',
            bopomofo: 'ㄋㄩˇ ㄆㄥˊ ㄧㄡˇ ㄐㄧㄠˋ ㄌㄜ˙ ㄊㄚ ㄅㄧㄝˊ ㄔˊ ㄉㄠˋ.',
            pinyin: 'nu3 peng2 you3 jiao4 le ta1 bie2 chi2 dao4.',
            translation: '彼のガールフレンドは彼に遅れないように言いました。',
            memo: ''
          },
          {
            word: '罵',
            sentence: '在考試得到零點的孩子很害怕媽媽會罵他。',
            bopomofo: 'ㄗㄞˋ ㄎㄠˇ ㄕˋ ㄉㄜˊ ㄉㄠˋ ㄌㄧㄥˊ ㄉㄧㄢˇ ㄉㄜ˙ ㄏㄞˊ ㄗ˙ ㄏㄣˇ ㄏㄞˋ ㄆㄚˋ ㄇㄚ ㄇㄚ ㄏㄨㄟˋ ㄇㄚˋ ㄊㄚ.',
            pinyin: 'zai4 kao3 shi4 de2 dao4 ling2 dian3 de hai2 zi3 hen3 hai4 pa4 ma1 ma1 hui4 ma4 ta1.',
            translation: 'テストで零点を取った子供は、 お母さんに叱られるのではないかと怯えています。',
            memo: ''
          },
          {
            word: '健身房',
            sentence: '我實際到健身房去， 但我總是只洗澡再回來。',
            bopomofo: 'ㄨㄛˇ ㄕˊ ㄐㄧˋ ㄉㄠˋ ㄐㄧㄢˋ ㄕㄣ ㄈㄤˊ ㄑㄩˋ, ㄉㄢˋ ㄨㄛˇ ㄗㄨㄥˇ ㄕˋ ㄓˇ ㄒㄧˇ ㄗㄠˇ ㄗㄞˋ ㄏㄨㄟˊ ㄌㄞˊ.',
            pinyin: 'wo3 shi2 ji4 dao4 jian4 shen1 fang2 qu4, dan4 wo3 zong3 shi4 zhi3 xi3 zao3 zai4 hui2 lai2.',
            translation: 'ジムには行くのですが、 いつもシャワーだけ浴びて帰ってきます。',
            memo: ''
          },
          {
            word: '啦',
            sentence: '你有沒有什麼要補充的東西啦?',
            bopomofo: 'ㄋㄧˇ ㄧㄡˇ ㄇㄟˊ ㄧㄡˇ ㄕㄣˊ ㄇㄜ˙ ㄧㄠˋ ㄅㄨˇ ㄔㄨㄥ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙ ㄌㄚ˙?',
            pinyin: 'ni3 you3 mei2 you3 shen2 me yao4 bu3 chong1 de dong1 xi la?',
            translation: '何か補足する事はありますか?',
            memo: ''
          },
          {
            word: '查',
            sentence: '因為他是一個粗心的人， 你應該查他的文件一遍。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄊㄚ ㄕˋ ㄧˊ ㄍㄜˋ ㄘㄨ ㄒㄧㄣ ㄉㄜ˙ ㄖㄣˊ, ㄋㄧˇ ㄧㄥ ㄍㄞ ㄔㄚˊ ㄊㄚ ㄉㄜ˙ ㄨㄣˊ ㄐㄧㄢˋ ㄧ ㄅㄧㄢˋ.',
            pinyin: 'yin1 wei4 ta1 shi4 yi1 ge4 cu1 xin1 de ren2, ni3 ying1 gai1 cha2 ta1 de wen2 jian4 yi1 bian4.',
            translation: '彼は不注意な人なので、 彼の書類は一通りチェックした方がいいです。',
            memo: ''
          },
          {
            word: '班機',
            sentence: '連續假期的班機什麼時候應該訂位?',
            bopomofo: 'ㄌㄧㄢˊ ㄒㄩˋ ㄐㄧㄚˋ ㄑㄧ ㄉㄜ˙ ㄅㄢ ㄐㄧ ㄕㄣˊ ㄇㄜ˙ ㄕˊ ㄏㄡˋ ㄧㄥ ㄍㄞ ㄉㄧㄥˋ ㄨㄟˋ?',
            pinyin: 'lian2 xu4 jia4 qi1 de ban1 ji1 shen2 me shi2 hou4 ying1 gai1 ding4 wei4?',
            translation: '連休中のフライトはいつ予約するのがいいですか?',
            memo: ''
          },
          {
            word: '訂位',
            sentence: '訂位前, 我總是再確認我的名字是否正確。',
            bopomofo: 'ㄉㄧㄥˋ ㄨㄟˋ ㄑㄧㄢˊ, ㄨㄛˇ ㄗㄨㄥˇ ㄕˋ ㄗㄞˋ ㄑㄩㄝˋ ㄖㄣˋ ㄨㄛˇ ㄉㄜ˙ ㄇㄧㄥˊ ㄗˋ ㄕˋ ㄈㄡˇ ㄓㄥˋ ㄑㄩㄝˋ.',
            pinyin: 'ding4 wei4 qian2, wo3 zong3 shi4 zai4 que4 ren4 wo3 de ming2 zi4 shi4 fou3 zheng4 que4.',
            translation: '予約する前に、 私はいつも自分の名前が正しいかどうか再確認します。',
            memo: ''
          },
          {
            word: '電',
            sentence: '我手機的電不夠， 你可不可藉給我充電器?',
            bopomofo: 'ㄨㄛˇ ㄕㄡˇ ㄐㄧ ㄉㄜ˙ ㄉㄧㄢˋ ㄅㄨˋ ㄍㄡˋ, ㄋㄧˇ ㄎㄜˇ ㄅㄨˋ ㄎㄜˇ ㄐㄧˊ ㄍㄟˇ ㄨㄛˇ ㄔㄨㄥ ㄉㄧㄢˋ ㄑㄧˋ?',
            pinyin: 'wo3 shou3 ji1 de dian4 bu2 gou4, ni3 ke3 bu4 ke3 jie4 gei3 wo3 chong1 dian4 qi4?',
            translation: '携帯の充電が足りないので、 充電器を貸してくれませんか?',
            memo: ''
          },
          {
            word: '充電',
            sentence: '出去前我剛發現我忘記了充電。',
            bopomofo: 'ㄔㄨ ㄑㄩˋ ㄑㄧㄢˊ ㄨㄛˇ ㄍㄤ ㄈㄚ ㄒㄧㄢˋ ㄨㄛˇ ㄨㄤˋ ㄐㄧˋ ㄌㄜ˙ ㄔㄨㄥ ㄉㄧㄢˋ.',
            pinyin: 'chu1 qu4 qian2 wo3 gang1 fa1 xian4 wo3 wang4 ji4 le chong1 dian4.',
            translation: '出かける直前に、 充電を忘れていたことに気付きました。',
            memo: ''
          },
          {
            word: '糊塗',
            sentence: '錯誤了鹽和糖， 我自己覺得我很糊塗。',
            bopomofo: 'ㄘㄨㄛˋ ㄨˋ ㄌㄜ˙ ㄧㄢˊ ㄏㄢˋ ㄊㄤˊ, ㄨㄛˇ ㄗˋ ㄐㄧˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄨㄛˇ ㄏㄣˇ ㄏㄨˊ ㄊㄨˊ.',
            pinyin: 'cuo4 wu4 le yan2 han4 tang2, wo3 zi4 ji3 jue2 de wo3 hen3 hu2 tu2.',
            translation: '塩と砂糖を間違えて、 自分でもかなり混乱しているなと思いました。',
            memo: ''
          },
          {
            word: '喔',
            sentence: '別急， 悠閒慢活地做工作喔!',
            bopomofo: 'ㄅㄧㄝˊ ㄐㄧˊ, ㄧㄡ ㄒㄧㄢˊ ㄇㄢˋ ㄏㄨㄛˊ ㄉㄜ˙ ㄗㄨㄛˋ ㄍㄨㄥ ㄗㄨㄛˋ ㄛ!',
            pinyin: 'bie2 ji2, you1 jian1 man4 huo2 de zuo4 gong1 zuo4 o1!',
            translation: '急がず、 ゆっくり仕事して下さいね!',
            memo: ''
          },
          {
            word: '義大利',
            sentence: '我想吃正宗的義大利麵。',
            bopomofo: 'ㄨㄛˇ ㄒㄧㄤˇ ㄔ ㄓㄥˋ ㄗㄨㄥ ㄉㄜ˙ ㄧˋ ㄉㄚˋ ㄌㄧˋ ㄇㄧㄢˋ.',
            pinyin: 'wo3 xiang3 chi1 zheng4 zong1 de yi4 da4 li4 mian4.',
            translation: '本場のパスタを食べてみたいです。',
            memo: ''
          },
          {
            word: '拿走',
            sentence: '桌子上的東西都被貓拿走了。',
            bopomofo: 'ㄓㄨㄛ ㄗ˙ ㄕㄤˋ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙ ㄉㄡ ㄅㄟˋ ㄇㄠ ㄋㄚˊ ㄗㄡˇ ㄌㄜ˙.',
            pinyin: 'zhuo1 zi shang4 de dong1 xi dou1 bei4 mao1 na2 zou3 le.',
            translation: 'テーブルの上にあるものは全部猫に持って行かれますよ。',
            memo: ''
          },
          {
            word: '撿到',
            sentence: '我希望貓咪不再撿到蟲。',
            bopomofo: 'ㄨㄛˇ ㄒㄧ ㄨㄤˋ ㄇㄠ ㄇㄧ ㄅㄨˋ ㄗㄞˋ ㄐㄧㄢˇ ㄉㄠˋ ㄔㄨㄥˊ.',
            pinyin: 'wo3 xi1 wang4 mao1 mi1 bu2 zai4 jian3 dao4 chong2.',
            translation: '猫がもう虫を拾ってこないように願っています。',
            memo: ''
          },
          {
            word: '留下',
            sentence: '他做了五個包子， 其中一個他為了弟弟留下。',
            bopomofo: 'ㄊㄚ ㄗㄨㄛˋ ㄌㄜ˙ ㄨˇ ㄍㄜˋ ㄅㄠ ㄗ˙, ㄑㄧˊ ㄓㄨㄥ ㄧˊ ㄍㄜˋ ㄊㄚ ㄨㄟˋ ㄌㄜ˙ ㄉㄧˋ ㄉㄧ˙ ㄌㄧㄡˊ ㄒㄧㄚˋ.',
            pinyin: 'ta1 zuo4 le wu3 ge4 bao1 zi, qi2 zhong1 yi1 ge4 ta1 wei4 le di4 di4 liu2 xia4.',
            translation: '彼は肉まんを5つ作り、 その中の1つを弟に取っておきました。',
            memo: ''
          },
          {
            word: '網路',
            sentence: '網路慢的時候， 一家人一定在下載電影。',
            bopomofo: 'ㄨㄤˇ ㄌㄨˋ ㄇㄢˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄧ ㄐㄧㄚ ㄖㄣˊ ㄧˊ ㄉㄧㄥˋ ㄗㄞˋ ㄒㄧㄚˋ ㄗㄞˋ ㄉㄧㄢˋ ㄧㄥˇ.',
            pinyin: 'wang3 lu4 man4 de shi2 hou4, yi1 jia1 ren2 yi1 ding4 zai4 xia4 zai4 dian4 ying3.',
            translation: 'ネットが遅い時は、 必ず家族の誰かが映画をダウンロードしています。',
            memo: ''
          },
          {
            word: '發生',
            sentence: '喝醉後的第二天我總是有發生了什麼事的感覺。',
            bopomofo: 'ㄏㄜ ㄗㄨㄟˋ ㄏㄡˋ ㄉㄜ˙ ㄉㄧˋ ㄦˋ ㄊㄧㄢ ㄨㄛˇ ㄗㄨㄥˇ ㄕˋ ㄧㄡˇ ㄈㄚ ㄕㄥ ㄌㄜ˙ ㄕㄣˊ ㄇㄜ˙ ㄕˋ ㄉㄜ˙ ㄍㄢˇ ㄐㄩㄝˊ.',
            pinyin: 'he1 zui4 hou4 de di4 er4 tian1 wo3 zong3 shi4 you3 fa1 sheng1 le shen2 me shi4 de gan3 jue2.',
            translation: '酔いつぶれた次の日はいつも、 何が起こったんだという気持ちになります。',
            memo: ''
          },
          {
            word: '事情',
            sentence: '長大的孩子不說在學校發現的所有的事情。',
            bopomofo: 'ㄓㄤˇ ㄉㄚˋ ㄉㄜ˙ ㄏㄞˊ ㄗ˙ ㄅㄨˋ ㄕㄨㄛ ㄗㄞˋ ㄒㄩㄝˊ ㄒㄧㄠˋ ㄈㄚ ㄒㄧㄢˋ ㄉㄜ˙ ㄙㄨㄛˇ ㄧㄡˇ ㄉㄜ˙ ㄕˋ ㄑㄧㄥˊ.',
            pinyin: 'zhang3 da4 de hai2 zi bu4 shuo1 zai4 xue2 xiao4 fa1 xian4 de suo3 you3 de shi4 qing2.',
            translation: '成長した子供は、 学校で起きた全ての事を話すわけではありません。',
            memo: ''
          },
          {
            word: '消息',
            sentence: '最近在網路上可以查消息， 讀報紙的機會少了。',
            bopomofo: 'ㄗㄨㄟˋ ㄐㄧㄣˋ ㄗㄞˋ ㄨㄤˇ ㄌㄨˋ ㄕㄤˋ ㄎㄜˇ ㄧˇ ㄔㄚˊ ㄒㄧㄠ ㄒㄧ, ㄉㄨˊ ㄅㄠˋ ㄓˇ ㄉㄜ˙ ㄐㄧ ㄏㄨㄟˋ ㄕㄠˇ ㄌㄜ˙.',
            pinyin: 'zui4 jin4 zai4 wang3 lu4 shang4 ke3 yi3 cha2 xiao1 xi1, du2 bao4 zhi3 de ji1 hui4 shao3 le.',
            translation: '最近はネットでニュースをチェックできるので、 新聞を読む機会が減りました。',
            memo: ''
          },
          {
            word: '透過',
            sentence: '透過家人說的話我知道了在家附近新的餐廳會開。',
            bopomofo: 'ㄊㄡˋ ㄍㄨㄛˋ ㄐㄧㄚ ㄖㄣˊ ㄕㄨㄛ ㄉㄜ˙ ㄏㄨㄚˋ ㄨㄛˇ ㄓ ㄉㄠˋ ㄌㄜ˙ ㄗㄞˋ ㄐㄧㄚ ㄈㄨˋ ㄐㄧㄣˋ ㄒㄧㄣ ㄉㄜ˙ ㄘㄢ ㄊㄧㄥ ㄏㄨㄟˋ ㄎㄞ.',
            pinyin: 'tou4 guo4 jia1 ren2 shuo1 de hua4 wo3 zhi1 dao4 le zai4 jia1 fu4 jin4 xin1 de can1 ting1 hui4 kai1.',
            translation: '家族の話で、 家の近くに新しいレストランがオープンすることを知りました。',
            memo: ''
          },
          {
            word: '世界',
            sentence: '朋友是我的哥哥的熟人的事讓我覺得世界很狹窄。',
            bopomofo: 'ㄆㄥˊ ㄧㄡˇ ㄕˋ ㄨㄛˇ ㄉㄜ˙ ㄍㄜ ㄍㄜ˙ ㄉㄜ˙ ㄕㄨˊ ㄖㄣˊ ㄉㄜ˙ ㄕˋ ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄕˋ ㄐㄧㄝˋ ㄏㄣˇ ㄒㄧㄚˊ ㄓㄞˇ.',
            pinyin: 'peng2 you3 shi4 wo3 de ge1 ge1 de shu2 ren2 de shi4 rang4 wo3 jue2 de shi4 jie4 hen3 xia2 zhai3.',
            translation: '友達が兄の知り合いだった事で、 世界は狭いと思いました。',
            memo: ''
          },
          {
            word: '節省',
            sentence: '夏天節省冷氣的話， 我們就生病了。',
            bopomofo: 'ㄒㄧㄚˋ ㄊㄧㄢ ㄐㄧㄝˊ ㄕㄥˇ ㄌㄥˇ ㄑㄧˋ ㄉㄜ˙ ㄏㄨㄚˋ, ㄨㄛˇ ㄇㄣ˙ ㄐㄧㄡˋ ㄕㄥ ㄅㄧㄥˋ ㄌㄜ˙.',
            pinyin: 'xia4 tian1 jie2 sheng3 leng3 qi4 de hua4, wo3 men jiu4 sheng1 bing4 le.',
            translation: '夏にエアコンを節約すると病気になりますよ。',
            memo: ''
          },
          {
            word: '起床',
            sentence: '週末我到中午不起床， 我可以節省早飯費。',
            bopomofo: 'ㄓㄡ ㄇㄛˋ ㄨㄛˇ ㄉㄠˋ ㄓㄨㄥ ㄨˇ ㄅㄨˋ ㄑㄧˇ ㄔㄨㄤˊ, ㄨㄛˇ ㄎㄜˇ ㄧˇ ㄐㄧㄝˊ ㄕㄥˇ ㄗㄠˇ ㄈㄢˋ ㄈㄟˋ.',
            pinyin: 'zhou1 mo4 wo3 dao4 zhong1 wu3 bu4 qi3 chuang2 ,wo3 ke3 yi3 jie2 sheng3 zao3 fan4 fei4.',
            translation: '週末はお昼になるまで起きないので、 朝ご飯代を節約できます。',
            memo: ''
          },
          {
            word: '檢查',
            sentence: '貓在檢查櫥櫃裡有沒有可以玩的東西。',
            bopomofo: 'ㄇㄠ ㄗㄞˋ ㄐㄧㄢˇ ㄔㄚˊ ㄔㄨˊ ㄍㄨㄟˋ ㄌㄧˇ ㄧㄡˇ ㄇㄟˊ ㄧㄡˇ ㄎㄜˇ ㄧˇ ㄨㄢˊ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙.',
            pinyin: 'mao1 zai4 jian3 cha2 chu2 gui4 li3 you3 mei2 you3 ke3 yi3 wan2 de dong1 xi.',
            translation: '猫は棚の中に何か遊ぶものがないか検査しています。',
            memo: ''
          },
          {
            word: '郵件',
            sentence: '如果你在三點前送郵件， 它將在明天到達。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄗㄞˋ ㄙㄢ ㄉㄧㄢˇ ㄑㄧㄢˊ ㄙㄨㄥˋ ㄧㄡˊ ㄐㄧㄢˋ, ㄊㄚ ㄐㄧㄤ ㄗㄞˋ ㄇㄧㄥˊ ㄊㄧㄢ ㄉㄠˋ ㄉㄚˊ.',
            pinyin: 'ru2 guo3 ni3 zai4 san1 dian3 qian2 song4 you2 jian4, ta1 jiang1 zai4 ming2 tian1 dao4 da2.',
            translation: '3時までに手紙を出せば、 明日には着きますよ。',
            memo: ''
          },
          {
            word: '立刻',
            sentence: '媽媽回來了， 我們得立刻整理房間。',
            bopomofo: 'ㄇㄚ ㄇㄚ ㄏㄨㄟˊ ㄌㄞˊ ㄌㄜ˙, ㄨㄛˇ ㄇㄣ˙ ㄉㄟˇ ㄌㄧˋ ㄎㄜˋ ㄓㄥˇ ㄌㄧˇ ㄈㄤˊ ㄐㄧㄢ.',
            pinyin: 'ma1 ma1 hui2 lai2 le, wo3 men dei3 li4 ke4 zheng3 li3 fang2 jian1.',
            translation: 'お母さんが帰ってきたので、 直ちに部屋を片付ければなりません。',
            memo: ''
          },
          {
            word: '上傳',
            sentence: '我不希望你上傳我的沒化妝臉的照片。',
            bopomofo: 'ㄨㄛˇ ㄅㄨˋ ㄒㄧ ㄨㄤˋ ㄋㄧˇ ㄕㄤˋ ㄔㄨㄢˊ ㄨㄛˇ ㄉㄜ˙ ㄇㄟˊ ㄏㄨㄚˋ ㄓㄨㄤ ㄌㄧㄢˇ ㄉㄜ˙ ㄓㄠˋ ㄆㄧㄢ.',
            pinyin: 'wo3 bu4 xi1 wang4 ni3 shang4 chuan2 wo3 de mei2 hua4 zhuang1 lian3 de zhao4 pian4.',
            translation: '私のスッピン写真をアップロードするのはやめて欲しいです。',
            memo: ''
          },
          {
            word: '正常',
            sentence: '對她天天做一個小時的運動很正常。',
            bopomofo: 'ㄉㄨㄟˋ ㄊㄚ ㄊㄧㄢ ㄊㄧㄢ ㄗㄨㄛˋ ㄧˊ ㄍㄜˋ ㄒㄧㄠˇ ㄕˊ ㄉㄜ˙ ㄩㄣˋ ㄉㄨㄥˋ ㄏㄣˇ ㄓㄥˋ ㄔㄤˊ.',
            pinyin: 'dui4 ta1 tian1 tian1 zuo4 yi1 ge4 xiao3 shi2 de yun4 dong4 hen3 zheng4 chang2.',
            translation: '彼女にとって毎日1時間運動するのは普通のことです。',
            memo: ''
          },
          {
            word: '談',
            sentence: '我要跟你談新的項目。',
            bopomofo: 'ㄨㄛˇ ㄧㄠˋ ㄍㄣ ㄋㄧˇ ㄊㄢˊ ㄒㄧㄣ ㄉㄜ˙ ㄒㄧㄤˋ ㄇㄨˋ.',
            pinyin: 'wo3 yao4 gen1 ni3 tan2 xin1 de xiang4 mu4.',
            translation: '新しいプロジェクトについてあなたと話したいです。',
            memo: ''
          },
          {
            word: '現代人',
            sentence: '現代人太習慣便利生活了。',
            bopomofo: 'ㄒㄧㄢˋ ㄉㄞˋ ㄖㄣˊ ㄊㄞˋ ㄒㄧˊ ㄍㄨㄢˋ ㄅㄧㄢˋ ㄌㄧˋ ㄕㄥ ㄏㄨㄛˊ ㄌㄜ˙.',
            pinyin: 'xian4 dai4 ren2 tai4 xi2 guan4 bian4 li4 sheng1 huo2 le.',
            translation: '現代人は便利な生活に慣れすぎてます。',
            memo: ''
          },
          {
            word: '比方說',
            sentence: '我愛吃的東西，比方說拉麵，對健康不好嗎?',
            bopomofo: 'ㄨㄛˇ ㄞˋ ㄔ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙, ㄅㄧˇ ㄈㄤ ㄕㄨㄛ ㄌㄚ ㄇㄧㄢˋ, ㄉㄨㄟˋ ㄐㄧㄢˋ ㄎㄤ ㄅㄨˋ ㄏㄠˇ ㄇㄚ˙?',
            pinyin: 'wo3 ai4 chi1 de dong1 xi, bi3 fang1 shuo1 la1 mian4, dui4 jian4 kang1 bu4 hao3 ma?',
            translation: '私の好物の、 例えばラーメンは体に悪いですか?',
            memo: ''
          },
          {
            word: '做到',
            sentence: '為了搬家我必須做的事， 我終於都做到了。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄅㄢ ㄐㄧㄚ ㄨㄛˇ ㄅㄧˋ ㄒㄩ ㄗㄨㄛˋ ㄉㄜ˙ ㄕˋ, ㄨㄛˇ ㄓㄨㄥ ㄩˊ ㄉㄨ ㄗㄨㄛˋ ㄉㄠˋ ㄌㄜ˙.',
            pinyin: 'wei4 le ban1 jia1 wo3 bi4 xu1 zuo4 de shi4, wo3 zhong1 yu2 dou1 zuo4 dao4 le.',
            translation: '引っ越しのためにしなければならない事は、 全てやり終えました。',
            memo: ''
          },
          {
            word: '第一手',
            sentence: '我要沒處理的第一手數據。',
            bopomofo: 'ㄨㄛˇ ㄧㄠˋ ㄇㄟˊ ㄔㄨˇ ㄌㄧˇ ㄉㄜ˙ ㄉㄧˋ ㄧ ㄕㄡˇ ㄕㄨˋ ㄐㄩˋ.',
            pinyin: 'wo3 yao4 mei2 chu3 li3 de di4 yi1 shou3 shu4 ju4.',
            translation: '未処理の一次データが欲しいです。',
            memo: ''
          },
          {
            word: '急著',
            sentence: '她急著吃午餐，就馬上回公司去。',
            bopomofo: 'ㄊㄚ ㄐㄧˊ ㄓㄜ˙ ㄔ ㄨˇ ㄘㄢ, ㄐㄧㄡˋ ㄇㄚˇ ㄕㄤˋ ㄏㄨㄟˊ ㄍㄨㄥ ㄙ ㄑㄩˋ.',
            pinyin: 'ta1 ji2 zhe chi1 wu3 can1, jiu4 ma3 shang4 hui2 gong1 si1 qu4.',
            translation: '彼女は急いで昼食を食べて、 すぐに会社に戻って行きました。',
            memo: ''
          },
          {
            word: '打招呼',
            sentence: '請你替我跟你的父母打招呼。',
            bopomofo: 'ㄑㄧㄥˇ ㄋㄧˇ ㄊㄧˋ ㄨㄛˇ ㄍㄣ ㄋㄧˇ ㄉㄜ˙ ㄈㄨˋ ㄇㄨˇ ㄉㄚˇ ㄓㄠ ㄏㄨ.',
            pinyin: 'qing3 ni3 ti4 wo3 gen1 ni3 de fu4 mu3 da3 zhao1 hu1.',
            translation: '私の代わりにご両親によろしく言って下さいね。',
            memo: ''
          },
          {
            word: '面對面',
            sentence: '我不願意跟老闆面對面談薪水的話。',
            bopomofo: 'ㄨㄛˇ ㄅㄨˊ ㄩㄢˋ ㄧˋ ㄍㄣ ㄌㄠˇ ㄅㄢˇ ㄇㄧㄢˋ ㄉㄨㄟˋ ㄇㄧㄢˋ ㄊㄢˊ ㄒㄧㄣ ㄕㄨㄟˇ ㄉㄜ˙ ㄏㄨㄚˋ.',
            pinyin: 'wo3 bu2 yuan4 yi4 gen1 lao3 ban3 mian4 dui4 mian4 tan2 xin1 shui3 de hua4.',
            translation: '給料について社長と面と向かって話すのは気が進みません。',
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
