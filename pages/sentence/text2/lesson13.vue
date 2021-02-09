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
            sentence: '如果你掉了隨身行李, 先去警察局就好了。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄉㄧㄠˋ ㄌㄜ˙ ㄙㄨㄟˊ ㄕㄣ ㄒㄧㄥˊ ㄌㄧˇ, ㄒㄧㄢ ㄑㄩˋ ㄐㄧㄥˇ ㄔㄚˊ ㄐㄩˊ ㄐㄧㄡˋ ㄏㄠˇ ㄌㄜ˙.',
            pinyin: 'ru2 guo3 ni3 diao4 le sui2 shen1 xing2 li3, xian1 qu4 jing3 cha2 ju2 jiu4 hao3 le.',
            translation: '身の回りの物を失くしたら、 まず警察に行くのがいいですよ。',
            memo: '',
            changed: '★'
          },
          {
            word: '低頭',
            sentence: '那個高的先生沒低頭， 所以頭撞到天花板了。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄍㄠ ㄉㄜ˙ ㄒㄧㄢ ㄕㄥ ㄇㄟˊ ㄉㄧ ㄊㄡˊ, ㄙㄨㄛˇ ㄧˇ ㄊㄡˊ ㄓㄨㄤˋ ㄉㄠˋ ㄊㄧㄢ ㄏㄨㄚ ㄅㄢˇ ㄌㄜ˙.',
            pinyin: 'na4 ge4 gao1 de xian1 sheng1 mei2 di1 tou2, suo3 yi3 tou2 zhuang4 dao4 tian1 hua1 ban3 le.',
            translation: 'あの背の高い人は頭を下げなかったので、 頭を天井にぶつけました。',
            memo: '',
            changed: '★'
          },
          {
            word: '傳',
            sentence: '因為我傳錯電子郵件給別人了， 所以被罵了。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄨㄛˇ ㄔㄨㄢˊ ㄘㄨㄛˋ ㄉㄧㄢˋ ㄗˇ ㄧㄡˊ ㄐㄧㄢˋ ㄍㄟˇ ㄅㄧㄝˊ ㄖㄣˊ ㄌㄜ˙, ㄙㄨㄛˇ ㄧˇ ㄅㄟˋ ㄇㄚˋ ㄌㄜ˙.',
            pinyin: 'yin1 wei4 wo3 chuan2 cuo4 dian4 zi3 you2 jian4 gei3 bie2 ren2 le, suo3 yi3 bei4 ma4 le.',
            translation: '間違った人にメールを送ってしまったので、 叱られました。',
            memo: '',
            changed: '★'
          },
          {
            word: '過',
            sentence: '你給過我烤肉的錢嗎? 我忘記了。',
            bopomofo: 'ㄋㄧˇ ㄍㄟˇ ㄍㄨㄛˋ ㄨㄛˇ ㄎㄠˇ ㄖㄡˋ ㄉㄜ˙ ㄑㄧㄢˊ ㄇㄚ˙? ㄨㄛˇ ㄨㄤˋ ㄐㄧˋ ㄌㄜ˙.',
            pinyin: 'ni3 gei3 guo4 wo3 kao3 rou4 de qian2 ma? wo3 wang4 ji4 le.',
            translation: '焼き肉のお金を既に私に渡してくれていましたっけ? 忘れてしまいました。',
            memo: '',
            changed: '★'
          },
          {
            word: '簡訊',
            sentence: '他的簡訊太長了， 讀得我頭都痛了。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄐㄧㄢˇ ㄒㄩㄣˋ ㄊㄞˋ ㄔㄤˊ ㄌㄜ˙,  ㄉㄨˊ ㄉㄜˊ ㄨㄛˇ ㄊㄡˊ ㄉㄡ ㄊㄨㄥˋ ㄌㄜ˙.',
            pinyin: 'ta1 de jian3 xun4 tai4 chang2 le, du2 de wo3 tou2 dou1 tong4 le.',
            translation: '彼のテキストメッセージは長すぎて、 読むと頭が痛くなります。',
            memo: '',
            changed: '★'
          },
          {
            word: '功能',
            sentence: '我平常只用來上網， 我不在乎電腦有什麼功能。',
            bopomofo: 'ㄨㄛˇ ㄆㄧㄥˊ ㄔㄤˊ ㄓˇ ㄩㄥˋ ㄌㄞˊ ㄕㄤˋ ㄨㄤˇ, ㄨㄛˇ ㄅㄨˋ ㄗㄞˋ ㄏㄨ˙ ㄉㄧㄢˋ ㄋㄠˇ ㄧㄡˇ ㄕㄣˊ ㄇㄜ˙ ㄍㄨㄥ ㄋㄥˊ.',
            pinyin: 'wo3 ping2 chang2 zhi3 yong4 lai2 shang4 wang3, wo3 bu2 zai4 hu1 dian4 nao3 you3 shen2 me gong1 neng2.',
            translation: '私は普段ネットをするだけなので、 パソコンの性能は気にしません。',
            memo: '',
            changed: '★'
          },
          {
            word: '生氣',
            sentence: '大家都要摸， 所以那隻貓在有一點生氣。',
            bopomofo: 'ㄉㄚˋ ㄐㄧㄚ ㄉㄡ ㄧㄠˋ ㄇㄛ, ㄙㄨㄛˇ ㄧˇ ㄋㄚˋ ㄓˇ ㄇㄠ ㄗㄞˋ ㄧㄡˇ ㄧˋ ㄉㄧㄢˇ ㄕㄥ ㄑㄧˋ.',
            pinyin: 'da4 jia1 dou1 yao4 mo1, suo3 yi3 na4 zhi1 mao1 zai4 you3 yi1 dian3 sheng1 qi4.',
            translation: 'みんなが触ろうとするので、 猫は少し怒っています。',
            memo: '',
            changed: '★'
          },
          {
            word: '叫',
            sentence: '女朋友叫他別遲到。',
            bopomofo: 'ㄋㄩˇ ㄆㄥˊ ㄧㄡˇ ㄐㄧㄠˋ ㄊㄚ ㄅㄧㄝˊ ㄔˊ ㄉㄠˋ.',
            pinyin: 'nu3 peng2 you3 jiao4 ta1 bie2 chi2 dao4.',
            translation: '彼のガールフレンドは彼に遅れないように言いました。',
            memo: '',
            changed: '★'
          },
          {
            word: '罵',
            sentence: '在考試得到零分的孩子很害怕媽媽會罵他。',
            bopomofo: 'ㄗㄞˋ ㄎㄠˇ ㄕˋ ㄉㄜˊ ㄉㄠˋ ㄌㄧㄥˊ ㄈㄣ ㄉㄜ˙ ㄏㄞˊ ㄗ˙ ㄏㄣˇ ㄏㄞˋ ㄆㄚˋ ㄇㄚ ㄇㄚ ㄏㄨㄟˋ ㄇㄚˋ ㄊㄚ.',
            pinyin: 'zai4 kao3 shi4 de2 dao4 ling2 fen1 de hai2 zi hen3 hai4 pa4 ma1 ma1 hui4 ma4 ta1.',
            translation: 'テストで零点を取った子供は、 お母さんに叱られるのではないかと怯えています。',
            memo: '※0点を取る事を「考鴨蛋(ㄎㄠˇ ㄧㄚ ㄉㄢˋ/kao3 ya1 dan4)」とも言う。→ アヒルの卵は「0」の形！',
            changed: '★'
          },
          {
            word: '健身房',
            sentence: '我實際到健身房去， 但我總是只洗了澡再回來。',
            bopomofo: 'ㄨㄛˇ ㄕˊ ㄐㄧˋ ㄉㄠˋ ㄐㄧㄢˋ ㄕㄣ ㄈㄤˊ ㄑㄩˋ, ㄉㄢˋ ㄨㄛˇ ㄗㄨㄥˇ ㄕˋ ㄓˇ ㄒㄧˇ ㄌㄜ˙ ㄗㄠˇ ㄗㄞˋ ㄏㄨㄟˊ ㄌㄞˊ.',
            pinyin: 'wo3 shi2 ji4 dao4 jian4 shen1 fang2 qu4, dan4 wo3 zong3 shi4 zhi3 xi3 le zao3 zai4 hui2 lai2.',
            translation: 'ジムには行くのですが、 いつもシャワーだけ浴びて帰ってきます。',
            memo: '',
            changed: '★'
          },
          {
            word: '啦',
            sentence: '你有沒有什麼要補充的東西啦?',
            bopomofo: 'ㄋㄧˇ ㄧㄡˇ ㄇㄟˊ ㄧㄡˇ ㄕㄣˊ ㄇㄜ˙ ㄧㄠˋ ㄅㄨˇ ㄔㄨㄥ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙ ㄌㄚ˙?',
            pinyin: 'ni3 you3 mei2 you3 shen2 me yao4 bu3 chong1 de dong1 xi la?',
            translation: '何か補足する事はありますか?',
            memo: '※「了」 + 「啊」 = 「啦」 のニュアンス。 '
          },
          {
            word: '查',
            sentence: '因為他是一個粗心的人， 你應該把他的文件查一查。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄊㄚ ㄕˋ ㄧˊ ㄍㄜˋ ㄘㄨ ㄒㄧㄣ ㄉㄜ˙ ㄖㄣˊ, ㄋㄧˇ ㄧㄥ ㄍㄞ ㄅㄚˇ ㄊㄚ ㄉㄜ˙ ㄨㄣˊ ㄐㄧㄢˋ ㄔㄚˊ ㄧ ㄔㄚˊ.',
            pinyin: 'yin1 wei4 ta1 shi4 yi1 ge4 cu1 xin1 de ren2, ni3 ying1 gai1 ba3 ta1 de wen2 jian4 cha2 yi1 cha2.',
            translation: '彼は不注意な人なので、 彼の書類は一通りチェックした方がいいです。',
            memo: '',
            changed: '★'
          },
          {
            word: '班機',
            sentence: '連續假期的班機什麼時候訂位好呢?',
            bopomofo: 'ㄌㄧㄢˊ ㄒㄩˋ ㄐㄧㄚˋ ㄑㄧ ㄉㄜ˙ ㄅㄢ ㄐㄧ ㄕㄣˊ ㄇㄜ˙ ㄕˊ ㄏㄡˋ ㄉㄧㄥˋ ㄨㄟˋ ㄏㄠˇ ㄋㄜ˙?',
            pinyin: 'lian2 xu4 jia4 qi1 de ban1 ji1 shen2 me shi2 hou4 ding4 wei4 hao3 ne?',
            translation: '連休中のフライトはいつ予約するのがいいですか?',
            memo: '',
            changed: '★'
          },
          {
            word: '訂位',
            sentence: '訂位前, 我再三確認我的名字是否正確。',
            bopomofo: 'ㄉㄧㄥˋ ㄨㄟˋ ㄑㄧㄢˊ, ㄨㄛˇ ㄗㄞˋ ㄙㄢ ㄑㄩㄝˋ ㄖㄣˋ ㄨㄛˇ ㄉㄜ˙ ㄇㄧㄥˊ ㄗ˙ ㄕˋ ㄈㄡˇ ㄓㄥˋ ㄑㄩㄝˋ.',
            pinyin: 'ding4 wei4 qian2, wo3 zai4 san1 que4 ren4 wo3 de ming2 zi shi4 fou3 zheng4 que4.',
            translation: '予約する前に、 私はいつも自分の名前が正しいかどうか再確認します。',
            memo: '',
            changed: '★'
          },
          {
            word: '電',
            sentence: '我手機的電不夠， 你可不可以借給我充電器?',
            bopomofo: 'ㄨㄛˇ ㄕㄡˇ ㄐㄧ ㄉㄜ˙ ㄉㄧㄢˋ ㄅㄨˊ ㄍㄡˋ, ㄋㄧˇ ㄎㄜˇ ㄅㄨˋ ㄎㄜˇ ㄧˇ ㄐㄧㄝˋ ㄍㄟˇ ㄨㄛˇ ㄔㄨㄥ ㄉㄧㄢˋ ㄑㄧˋ?',
            pinyin: 'wo3 shou3 ji1 de dian4 bu2 gou4, ni3 ke3 bu4 ke3 jie4 gei3 wo3 chong1 dian4 qi4?',
            translation: '携帯の充電が足りないので、 充電器を貸してくれませんか?',
            memo: '※繁体字においては異なる文字でも、 簡体字においては同一の文字の場合がある。 ' +
              '例：繁体字で「借(ㄐㄧㄝˋ/jie4) = 借りる」、 「藉口(ㄐㄧㄝˋ ㄎㄡˇ/jie4 kou3) = 言い訳」 は、 簡体字でそれぞれ「借」「借口」。'
          },
          {
            word: '充電',
            sentence: '我剛發現我忘了充電了。',
            bopomofo: 'ㄨㄛˇ ㄍㄤ ㄈㄚ ㄒㄧㄢˋ ㄨㄛˇ ㄨㄤˋ ㄌㄜ˙ ㄔㄨㄥ ㄉㄧㄢˋ ㄌㄜ˙.',
            pinyin: 'wo3 gang1 fa1 xian4 wo3 wang4 le chong1 dian4 le.',
            translation: '充電を忘れていたことにたった今気付きました。',
            memo: '',
            changed: '★'
          },
          {
            word: '糊塗',
            sentence: '弄錯了鹽和糖， 我自己覺得我很糊塗。',
            bopomofo: 'ㄋㄨㄥˋ ㄘㄨㄛˋ ㄌㄜ˙ ㄧㄢˊ ㄏㄢˋ ㄊㄤˊ, ㄨㄛˇ ㄗˋ ㄐㄧˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄨㄛˇ ㄏㄣˇ ㄏㄨˊ ㄊㄨˊ.',
            pinyin: 'nong4 cuo4 le yan2 han4 tang2, wo3 zi4 ji3 jue2 de wo3 hen3 hu2 tu2.',
            translation: '塩と砂糖を間違えて、 自分でもかなりまぬけだなと思いました。',
            memo: '※「糊塗(ㄏㄨˊ ㄊㄨˊ/hu2 tu2)」 = 「混乱している、 まぬけな、 天然な」。 「被弄糊塗了」 = 「混乱させられる」。',
            changed: '★'
          },
          {
            word: '喔',
            sentence: '別急， 悠哉悠哉地做工作喔!',
            bopomofo: 'ㄅㄧㄝˊ ㄐㄧˊ, ㄧㄡ ㄗㄞ ㄧㄡ ㄗㄞ ㄉㄜ˙ ㄗㄨㄛˋ ㄍㄨㄥ ㄗㄨㄛˋ ㄛ!',
            pinyin: 'bie2 ji2, you1 zai1 you1 zai1 de zuo4 gong1 zuo4 o1!',
            translation: '急がず、 のんびり仕事して下さいね!',
            memo: '',
            changed: '★'
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
            sentence: '桌子上的東西都被誰拿走了。',
            bopomofo: 'ㄓㄨㄛ ㄗ˙ ㄕㄤˋ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙ ㄉㄡ ㄅㄟˋ ㄕㄨㄟˊ ㄋㄚˊ ㄗㄡˇ ㄌㄜ˙.',
            pinyin: 'zhuo1 zi shang4 de dong1 xi dou1 bei4 shei2 na2 zou3 le.',
            translation: 'テーブルの上にあるものは全部誰か持って行かれますよ。',
            memo: '※拿走 → 猫の場合は 「叼走(ㄉㄧㄠ ㄗㄡˇ/liao1 zou3)」 = 「咥えて持っていく」。',
            changed: '★'
          },
          {
            word: '撿到',
            sentence: '我希望貓咪不要再撿到蟲了。',
            bopomofo: 'ㄨㄛˇ ㄒㄧ ㄨㄤˋ ㄇㄠ ㄇㄧ ㄅㄨˊ ㄧㄠˋ ㄗㄞˋ ㄐㄧㄢˇ ㄉㄠˋ ㄔㄨㄥˊ ㄌㄜ˙.',
            pinyin: 'wo3 xi1 wang4 mao1 mi1 bu2 yao4 zai4 jian3 dao4 chong2 le.',
            translation: '猫がもう虫を拾ってこないように願っています。',
            memo: '',
            changed: '★'
          },
          {
            word: '留下',
            sentence: '他做了五個包子， 留下一個給弟弟。',
            bopomofo: 'ㄊㄚ ㄗㄨㄛˋ ㄌㄜ˙ ㄨˇ ㄍㄜˋ ㄅㄠ ㄗ˙, ㄌㄧㄡˊ ㄒㄧㄚˋ ㄧ ㄍㄜ˙ ㄍㄟˇ ㄉㄧˋ ㄉㄧ˙.',
            pinyin: 'ta1 zuo4 le wu3 ge4 bao1 zi, liu2 xia4 yi1 ge4 gei3 di4 di.',
            translation: '彼は肉まんを5つ作り、 その中の1つを弟に取っておきました。',
            memo: '',
            changed: '★'
          },
          {
            word: '網路',
            sentence: '網路忙線的時候， 一家人一定先下載好電影。',
            bopomofo: 'ㄨㄤˇ ㄌㄨˋ ㄇㄤˊ ㄒㄧㄢˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄧ ㄐㄧㄚ ㄖㄣˊ ㄧˊ ㄉㄧㄥˋ ㄒㄧㄢ ㄒㄧㄚˋ ㄗㄞˇ ㄏㄠˇ ㄉㄧㄢˋ ㄧㄥˇ.',
            pinyin: 'wang3 lu4 mang2 xian de shi2 hou4, yi1 jia1 ren2 yi1 ding4 xian1 xia4 zai4 hao3 dian4 ying3.',
            translation: 'ネットが遅い時は、 必ず家族の誰かが映画をダウンロードしています。',
            memo: '',
            changed: '★'
          },
          {
            word: '發生',
            sentence: '喝醉後的第二天我總是有什麼事發生了的感覺。',
            bopomofo: 'ㄏㄜ ㄗㄨㄟˋ ㄏㄡˋ ㄉㄜ˙ ㄉㄧˋ ㄦˋ ㄊㄧㄢ ㄨㄛˇ ㄗㄨㄥˇ ㄕˋ ㄧㄡˇ ㄕㄣˊ ㄇㄜ˙ ㄕˋ ㄈㄚ ㄕㄥ ㄌㄜ˙ ㄉㄜ˙ ㄍㄢˇ ㄐㄩㄝˊ.',
            pinyin: 'he1 zui4 hou4 de di4 er4 tian1 wo3 zong3 shi4 you3 shen2 me shi4 fa1 sheng1 le de gan3 jue2.',
            translation: '酔いつぶれた次の日はいつも、 何が起こったんだという気持ちになります。',
            memo: '',
            changed: '★'
          },
          {
            word: '事情',
            sentence: '孩子長大了以後, 不會說在學校發生了什麼事情。',
            bopomofo: 'ㄏㄞˊ ㄗ˙ ㄓㄤˇ ㄉㄚˋ ㄌㄜ˙ ㄧˇ ㄏㄡˋ, ㄅㄨˊ ㄏㄨㄟˋ ㄕㄨㄛ ㄗㄞˋ ㄒㄩㄝˊ ㄒㄧㄠˋ ㄈㄚ ㄕㄥ ㄌㄜ˙ ㄕㄣˊ ㄇㄜ˙ ㄕˋ ㄑㄧㄥˊ.',
            pinyin: 'hai2 zi zhang3 da4 le yi3 hou4, bu2 hui4 shuo1 zai4 xue2 xiao4 fa1 sheng1 le shen2 me shi4 qing2.',
            translation: '成長すると、 子どもは学校で起きた事を話さなくなります。',
            memo: '',
            changed: '★'
          },
          {
            word: '消息',
            sentence: '最近在網路上可以查到消息， 讀報紙的機會減少了。',
            bopomofo: 'ㄗㄨㄟˋ ㄐㄧㄣˋ ㄗㄞˋ ㄨㄤˇ ㄌㄨˋ ㄕㄤˋ ㄎㄜˇ ㄧˇ ㄔㄚˊ ㄉㄠˋ ㄒㄧㄠ ㄒㄧˊ , ㄉㄨˊ ㄅㄠˋ ㄓˇ ㄉㄜ˙ ㄐㄧ ㄏㄨㄟˋ ㄐㄧㄢˇ ㄕㄠˇ ㄌㄜ˙.',
            pinyin: 'zui4 jin4 zai4 wang3 lu4 shang4 ke3 yi3 cha2 dao4 xiao1 xi2, du2 bao4 zhi3 de ji1 hui4 jian3 shao3 le.',
            translation: '最近はネットでニュースをチェックできるので、 新聞を読む機会が減りました。',
            memo: '※「消息」 の発音は台湾では「ㄒㄧㄠ ㄒㄧˊ/xiao1 xi2」、 中国では「ㄒㄧㄠ ㄒㄧxiao1 xi1」 が多い。 ',
            changed: '★'
          },
          {
            word: '透過',
            sentence: '透過家人說的話, 我知道了我的家附近快要開一家餐廳。',
            bopomofo: 'ㄊㄡˋ ㄍㄨㄛˋ ㄐㄧㄚ ㄖㄣˊ ㄕㄨㄛ ㄉㄜ˙ ㄏㄨㄚˋ, ㄨㄛˇ ㄓ ㄉㄠˋ ㄌㄜ˙ ㄨㄛˇ ㄉㄜ˙ ㄐㄧㄚ ㄈㄨˋ ㄐㄧㄣˋ ㄎㄨㄞˋ ㄧㄠˋ ㄎㄞ ㄧ ㄐㄧㄚ ㄘㄢ ㄊㄧㄥ.',
            pinyin: 'tou4 guo4 jia1 ren2 shuo1 de hua4, wo3 zhi1 dao4 le wo3 de jia1 fu4 jin4 kuai4 yao4 kai1 yi1 jia1 can1 ting1.',
            translation: '家族の話で、 家の近くにレストランがオープンすることを知りました。',
            memo: '',
            changed: '★'
          },
          {
            word: '世界',
            sentence: '朋友是我的哥哥的認識的人的事讓我覺得世界很小。',
            bopomofo: 'ㄆㄥˊ ㄧㄡˇ ㄕˋ ㄨㄛˇ ㄉㄜ˙ ㄍㄜ ㄍㄜ˙ ㄉㄜ˙ ㄖㄣˋ ㄕ˙ ㄉㄜ˙ ㄖㄣˊ ㄉㄜ˙ ㄕˋ ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄕˋ ㄐㄧㄝˋ ㄏㄣˇ ㄒㄧㄠˇ.',
            pinyin: 'peng2 you3 shi4 wo3 de ge1 ge1 de ren4 shi2 de ren2 de shi4 rang4 wo3 jue2 de shi4 jie4 hen3 xiao3.',
            translation: '友達が兄の知り合いだった事で、 世界は狭いと思いました。',
            memo: '',
            changed: '★'
          },
          {
            word: '節省',
            sentence: '夏天節省冷氣的話， 我們就會生病了。',
            bopomofo: 'ㄒㄧㄚˋ ㄊㄧㄢ ㄐㄧㄝˊ ㄕㄥˇ ㄌㄥˇ ㄑㄧˋ ㄉㄜ˙ ㄏㄨㄚˋ, ㄨㄛˇ ㄇㄣ˙ ㄐㄧㄡˋ ㄏㄨㄟˋ ㄕㄥ ㄅㄧㄥˋ ㄌㄜ˙.',
            pinyin: 'xia4 tian1 jie2 sheng3 leng3 qi4 de hua4, wo3 men jiu4 hui4 sheng1 bing4 le.',
            translation: '夏にエアコンを節約すると病気になりますよ。',
            memo: '',
            changed: '★'
          },
          {
            word: '起床',
            sentence: '週末中午前我不起床， 可以節省早餐的費用。',
            bopomofo: 'ㄓㄡ ㄇㄛˋ ㄓㄨㄥ ㄨˇ ㄑㄧㄢˊ ㄨㄛˇ ㄅㄨˋ ㄑㄧˇ ㄔㄨㄤˊ, ㄎㄜˇ ㄧˇ ㄐㄧㄝˊ ㄕㄥˇ ㄗㄠˇ ㄘㄢ ㄉㄜ˙ ㄈㄟˋ ㄩㄥˋ.',
            pinyin: 'zhou1 mo4 zhong1 wu3 qian2 wo3 bu4 qi3 chuang2, ke3 yi3 jie2 sheng3 zao3 can1 de fei4 yong4.',
            translation: '週末はお昼になるまで起きないので、 朝ご飯代を節約できます。',
            memo: '',
            changed: '★'
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
            sentence: '如果你在三點前送郵件， 它會明天到。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄗㄞˋ ㄙㄢ ㄉㄧㄢˇ ㄑㄧㄢˊ ㄙㄨㄥˋ ㄧㄡˊ ㄐㄧㄢˋ, ㄊㄚ ㄏㄨㄟˋ ㄇㄧㄥˊ ㄊㄧㄢ ㄉㄠˋ.',
            pinyin: 'ru2 guo3 ni3 zai4 san1 dian3 qian2 song4 you2 jian4, ta1 hui4 ming2 tian1 dao4.',
            translation: '3時までに手紙を出せば、 明日には着きますよ。',
            memo: '',
            changed: '★'
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
            sentence: '我不希望你上傳我的素顏的照片。',
            bopomofo: 'ㄨㄛˇ ㄅㄨˋ ㄒㄧ ㄨㄤˋ ㄋㄧˇ ㄕㄤˋ ㄔㄨㄢˊ ㄨㄛˇ ㄉㄜ˙ ㄙㄨˋ ㄧㄢˊ ㄉㄜ˙ ㄓㄠˋ ㄆㄧㄢ.',
            pinyin: 'wo3 bu4 xi1 wang4 ni3 shang4 chuan2 wo3 de su4 yan2 de zhao4 pian4.',
            translation: '私のスッピン写真をアップロードするのはやめて欲しいです。',
            memo: '',
            changed: '★'
          },
          {
            word: '正常',
            sentence: '對她來說天天做一個小時的運動很正常。',
            bopomofo: 'ㄉㄨㄟˋ ㄊㄚ ㄌㄞˊ ㄕㄨㄛ ㄊㄧㄢ ㄊㄧㄢ ㄗㄨㄛˋ ㄧˊ ㄍㄜˋ ㄒㄧㄠˇ ㄕˊ ㄉㄜ˙ ㄩㄣˋ ㄉㄨㄥˋ ㄏㄣˇ ㄓㄥˋ ㄔㄤˊ.',
            pinyin: 'dui4 ta1 lai2 shuo1 tian1 tian1 zuo4 yi1 ge4 xiao3 shi2 de yun4 dong4 hen3 zheng4 chang2.',
            translation: '彼女にとって毎日1時間運動するのは普通のことです。',
            memo: '',
            changed: '★'
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
            sentence: '現代人太習慣便利的生活了。',
            bopomofo: 'ㄒㄧㄢˋ ㄉㄞˋ ㄖㄣˊ ㄊㄞˋ ㄒㄧˊ ㄍㄨㄢˋ ㄅㄧㄢˋ ㄌㄧˋ ㄉㄜ˙ ㄕㄥ ㄏㄨㄛˊ ㄌㄜ˙.',
            pinyin: 'xian4 dai4 ren2 tai4 xi2 guan4 bian4 li4 de sheng1 huo2 le.',
            translation: '現代人は便利な生活に慣れすぎています。',
            memo: ''
          },
          {
            word: '比方說',
            sentence: '我愛吃的東西， 比方說拉麵， 對健康不好嗎?',
            bopomofo: 'ㄨㄛˇ ㄞˋ ㄔ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙, ㄅㄧˇ ㄈㄤ ㄕㄨㄛ ㄌㄚ ㄇㄧㄢˋ, ㄉㄨㄟˋ ㄐㄧㄢˋ ㄎㄤ ㄅㄨˋ ㄏㄠˇ ㄇㄚ˙?',
            pinyin: 'wo3 ai4 chi1 de dong1 xi, bi3 fang1 shuo1 la1 mian4, dui4 jian4 kang1 bu4 hao3 ma?',
            translation: '私の好物の、 例えばラーメンは体に悪いですか?',
            memo: ''
          },
          {
            word: '做到',
            sentence: '每天四點起床做不到。',
            bopomofo: 'ㄇㄟˇ ㄊㄧㄢ ㄙˋ ㄉㄧㄢˇ ㄑㄧˇ ㄔㄨㄤˊ ㄗㄨㄛˋ ㄅㄨˊ ㄉㄠˋ.',
            pinyin: 'mei3 tian1 si4 dian3 qi3 chuang2 zuo4 bu2 dao4.',
            translation: '毎日4時に起きるのは無理です。',
            memo: '',
            changed: '★'
          },
          {
            word: '第一手',
            sentence: '我要拿到沒有人知道的第一手消息。',
            bopomofo: 'ㄨㄛˇ ㄧㄠˋ ㄋㄚˊ ㄉㄠˋ ㄇㄟˊ ㄧㄡˇ ㄖㄣˊ ㄓ ㄉㄠˋ ㄉㄜ˙ ㄉㄧˋ ㄧ ㄕㄡˇ ㄒㄧㄠ ㄒㄧˊ .',
            pinyin: 'wo3 yao4 na2 dao4 mei2 you3 ren2 zhi1 dao4 de di4 yi1 shou3 xiao1 xi2.',
            translation: '誰も知らない最新のニュースを手に入れたいです。',
            memo: '※「第一手(ㄉㄧˋ ㄧ ㄕㄡˇ/di4 yi1 shou3)」 = 「最新の」。',
            changed: '★'
          },
          {
            word: '急著',
            sentence: '她急著吃了午餐， 就馬上回公司去了。',
            bopomofo: 'ㄊㄚ ㄐㄧˊ ㄓㄜ˙ ㄔ ㄌㄜ˙ ㄨˇ ㄘㄢ, ㄐㄧㄡˋ ㄇㄚˇ ㄕㄤˋ ㄏㄨㄟˊ ㄍㄨㄥ ㄙ ㄑㄩˋ ㄌㄜ˙.',
            pinyin: 'ta1 ji2 zhe chi1 le wu3 can1, jiu4 ma3 shang4 hui2 gong1 si1 qu4 le.',
            translation: '彼女は急いで昼食を食べて、すぐに会社に戻って行きました。',
            memo: '',
            changed: '★'
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
            sentence: '我不願意跟老闆面對面地談薪水。',
            bopomofo: 'ㄨㄛˇ ㄅㄨˊ ㄩㄢˋ ㄧˋ ㄍㄣ ㄌㄠˇ ㄅㄢˇ ㄇㄧㄢˋ ㄉㄨㄟˋ ㄇㄧㄢˋ ㄉㄜ˙ ㄊㄢˊ ㄒㄧㄣ ㄕㄨㄟˇ.',
            pinyin: 'wo3 bu2 yuan4 yi4 gen1 lao3 ban3 mian4 dui4 mian4 de tan2 xin1 shui3.',
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
