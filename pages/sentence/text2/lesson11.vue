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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第11章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第11章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      data: {
        title: '當代中文課程課2・第11章',
        words: [
          {
            word: '其他',
            sentence: '我買完了在派對吃的東西, 但是其他準備還沒好。',
            bopomofo: 'ㄨㄛˇ ㄇㄞˇ ㄨㄢˊ ㄌㄜ˙ ㄗㄞˋ ㄆㄞˋ ㄉㄨㄟˋ ㄔ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙, ㄉㄢˋ ㄕˋ ㄑㄧˊ ㄊㄚ ㄓㄨㄣˇ ㄅㄟˋ ㄏㄞˊ ㄇㄟˊ ㄏㄠˇ.',
            pinyin: 'wo3 mai3 wan2 le zai4 pai4 dui4 chi1 de dong1 xi, dan4 shi4 qi2 ta1 zhun3 bei4 hai2 mei2 hao3.',
            translation: 'パーティーで食べるものは買い終えましたが、 他の準備はできていません。',
            memo: ''
          },
          {
            word: '假期',
            sentence: '趁比較長的假期他會去國外旅行。',
            bopomofo: 'ㄔㄣˋ ㄅㄧˇ ㄐㄧㄠˋ ㄔㄤˊ ㄉㄜ˙ ㄐㄧㄚˋ ㄑㄧˊ ㄊㄚ ㄏㄨㄟˋ ㄑㄩˋ ㄍㄨㄛˊ ㄨㄞˋ ㄌㄩˇ ㄒㄧㄥˊ.',
            pinyin: 'chen4 bi3 jiao4 chang2 de jia4 qi2 ta1 hui4 qu4 guo2 wai4 lu3 xing2.',
            translation: '比較的長い休暇を使って、 彼は海外に旅行します。',
            memo: ''
          },
          {
            word: '溫泉',
            sentence: '這個溫泉的水質對皮膚很好。',
            bopomofo: 'ㄓㄜˋ ㄍㄜˋ ㄨㄣ ㄑㄩㄢˊ ㄉㄜ˙ ㄕㄨㄟˇ ㄓˊ ㄉㄨㄟˋ ㄆㄧˊ ㄈㄨ ㄏㄣˇ ㄏㄠˇ.',
            pinyin: 'zhe4 ge4 wen1 quan2 de shui3 zhi4 dui4 pi2 fu1 hen3 hao3.',
            translation: 'この温泉の水質は肌にとても良いです。',
            memo: ''
          },
          {
            word: '建議',
            sentence: '他建議我減少房子裡的東西一點。',
            bopomofo: 'ㄊㄚ ㄐㄧㄢˋ ㄧˋ ㄨㄛˇ ㄐㄧㄢˇ ㄕㄠˇ ㄈㄤˊ ㄗ˙ ㄌㄧˇ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙ ㄧˋ ㄉㄧㄢˇ.',
            pinyin: 'ta1 jian4 yi4 wo3 jian3 shao3 fang2 zi li3 de dong1 xi yi1 dian3.',
            translation: '彼は、 家の中のものを少し減らすことを私に提案しました。',
            memo: ''
          },
          {
            word: '票',
            sentence: '差不多各種票在超商你買得到。',
            bopomofo: 'ㄔㄚ ㄅㄨˋ ㄉㄨㄛ ㄍㄜˋ ㄓㄨㄥˇ ㄆㄧㄠˋ ㄗㄞˋ ㄔㄠ ㄕㄤ ㄋㄧˇ ㄇㄞˇ ㄉㄜˊ ㄉㄠˋ.',
            pinyin: 'cha1 bu4 duo1 ge4 zhong3 piao4 zai4 chao1 shang1 ni3 mai3 de dao4.',
            translation: 'コンビニでほぼすべての種類のチケットを購入できます。',
            memo: ''
          },
          {
            word: '考慮',
            sentence: '我會考慮一下做什麼晚餐的主菜。',
            bopomofo: 'ㄨㄛˇ ㄏㄨㄟˋ ㄎㄠˇ ㄌㄩˋ ㄧ ㄒㄧㄚˋ ㄗㄨㄛˋ ㄕˊ ㄇㄛˇ ㄨㄢˇ ㄘㄢ ㄉㄜ˙ ㄓㄨˇ ㄘㄞˋ.',
            pinyin: 'wo3 hui4 kao3 lu4 yi1 xia4 zuo4 shen2 me wan3 can1 de zhu3 cai4.',
            translation: '晩御飯のメインを何にするかちょっと考えます。',
            memo: ''
          },
          {
            word: '順便',
            sentence: '因為貓在吃飯, 不用被打擾我可以順便做家事。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄇㄠ ㄗㄞˋ ㄔ ㄈㄢˋ, ㄅㄨˊ ㄩㄥˋ ㄅㄟˋ ㄉㄚˇ ㄖㄠˇ ㄨㄛˇ ㄎㄜˇ ㄧˇ ㄕㄨㄣˋ ㄅㄧㄢˋ ㄗㄨㄛˋ ㄐㄧㄚ ㄕˋ.',
            pinyin: 'yin1 wei4 mao1 zai4 chi1 fan4, bu2 yong4 bei4 da3 rao3 wo3 ke3 yi3 shun4 bian4 zuo4 jia1 shi4.',
            translation: '今は猫がご飯を食べているので、 邪魔される事なくスムーズに家事ができます。',
            memo: ''
          },
          {
            word: '湖',
            sentence: '山上湖的水甚至夏天也冷。',
            bopomofo: 'ㄕㄢ ㄕㄤˋ ㄏㄨˊ ㄉㄜ˙ ㄕㄨㄟˇ ㄕㄣˋ ㄓˋ ㄒㄧㄚˋ ㄊㄧㄢ ㄧㄝˇ ㄌㄥˇ.',
            pinyin: 'shan1 shang4 hu2 de shui3 shen4 zhi4 xia4 tian1 ye3 leng3.',
            translation: '山の湖の水は夏でも冷たいです。',
            memo: ''
          },
          {
            word: '原住民',
            sentence: '這裡原住民做的當地菜很好吃, 在其他地方不能吃到。',
            bopomofo: 'ㄓㄜˋ ㄌㄧˇ ㄩㄢˊ ㄓㄨˋ ㄇㄧㄣˊ ㄗㄨㄛˋ ㄉㄜ˙ ㄉㄤ ㄉㄧˋ ㄘㄞˋ ㄏㄣˇ ㄏㄠˇ ㄔ, ㄗㄞˋ ㄑㄧˊ ㄊㄚ ㄉㄧˋ ㄈㄤ ㄅㄨˋ ㄋㄥˊ ㄔ ㄉㄠˋ.',
            pinyin: 'zhe4 li3 yuan2 zhu4 min2 zuo4 de dang1 di4 cai4 hen3 hao3 chi1, zai4 qi2 ta1 di4 fang1 bu4 neng2 chi1 dao4.',
            translation: 'ここの原住民が作る郷土料理はとても美味しく、 他の場所では食べられません。',
            memo: ''
          },
          {
            word: '趟',
            sentence: '你為了一趟旅行要花大概多少錢?',
            bopomofo: 'ㄋㄧˇ ㄨㄟˋ ㄌㄜ˙ ㄧ ㄊㄤˋ ㄌㄩˇ ㄒㄧㄥˊ ㄧㄠˋ ㄏㄨㄚ ㄉㄚˋ ㄍㄞˋ ㄉㄨㄛ ㄕㄠˇ ㄑㄧㄢˊ?',
            pinyin: 'ni3 wei4 le yi1 tang4 lu3 xing2 yao4 hua1 da4 gai4 duo1 shao3 qian2?',
            translation: '一回の旅行にいくらくらいかけますか?',
            memo: ''
          },
          {
            word: '後來',
            sentence: '我以前早上總是吃白飯, 後來改變了吃麵包。',
            bopomofo: 'ㄨㄛˇ ㄧˇ ㄑㄧㄢˊ ㄗㄠˇ ㄕㄤˋ ㄗㄨㄥˇ ㄕˋ ㄔ ㄅㄞˊ ㄈㄢˋ, ㄏㄡˋ ㄌㄞˊ ㄍㄞˇ ㄅㄧㄢˋ ㄌㄜ˙ ㄔ ㄇㄧㄢˋ ㄅㄠ.',
            pinyin: 'wo3 yi3 qian2 zao3 shang4 zong3 shi4 chi1 bai2 fan4, hou4 lai2 gai3 bian4 le chi1 mian4 bao1.',
            translation: '以前は朝ご飯に白米を食べていましたが、 その後パンを食べるようになりました。',
            memo: ''
          },
          {
            word: '注意',
            sentence: '路上有一步， 所以要小心不要跌落。',
            bopomofo: 'ㄌㄨˋ ㄕㄤˋ ㄧㄡˇ ㄧ ㄅㄨˋ, ㄙㄨㄛˇ ㄧˇ ㄧㄠˋ ㄒㄧㄠˇ ㄒㄧㄣ ㄅㄨˊ ㄧㄠˋ ㄉㄧㄝ ㄌㄨㄛˋ.',
            pinyin: 'lu4 shang4 you3 yi1 bu4, suo3 yi3 yao4 xiao3 xin1 bu2 yao4 die1 luo4.',
            translation: '道路に段差があるので、 転ばないようにご注意ください。',
            memo: ''
          },
          {
            word: '沙灘',
            sentence: '我要躺著沙灘上喝啤酒。',
            bopomofo: 'ㄨㄛˇ ㄧㄠˋ ㄊㄤˇ ㄓㄜ˙ ㄕㄚ ㄊㄢ ㄕㄤˋ ㄏㄜ ㄆㄧˊ ㄐㄧㄡˇ.',
            pinyin: 'wo3 yao4 tang3 zhe sha1 tan1 shang4 he1 pi2 jiu3.',
            translation: 'ビーチに寝転がってビールを飲みたいです。',
            memo: ''
          },
          {
            word: '錢包',
            sentence: '我來購物， 但忘了錢包。',
            bopomofo: 'ㄨㄛˇ ㄌㄞˊ ㄍㄡˋ ㄨˋ, ㄉㄢˋ ㄨㄤˋ ㄌㄜ˙ ㄑㄧㄢˊ ㄅㄠ.',
            pinyin: 'wo3 lai2 gou4 wu4, dan4 wang4 le qian2 bao1.',
            translation: '買い物に来たのに、 財布を忘れてしまいました。',
            memo: ''
          },
          {
            word: '不見',
            sentence: '我放的桌上的生魚片不見了, 貓是懷疑的。',
            bopomofo: 'ㄨㄛˇ ㄈㄤˋ ㄉㄜ˙ ㄓㄨㄛ ㄕㄤˋ ㄉㄜ˙ ㄕㄥ ㄩˊ ㄆㄧㄢˋ ㄅㄨˊ ㄐㄧㄢˋ ㄌㄜ˙, ㄇㄠ ㄕˋ ㄏㄨㄞˊ ㄧˊ ㄉㄜ˙.',
            pinyin: 'wo3 fang4 de zhuo1 shang4 de sheng1 yu2 pian4 bu2 jian4 le, mao1 shi4 huai2 yi2  de.',
            translation: 'テーブルの上に置いた刺身が無くなっているので、 猫が疑わしいです。',
            memo: ''
          },
          {
            word: '被',
            sentence: '我買了太多啤酒, 所以我被罵了。',
            bopomofo: 'ㄨㄛˇ ㄇㄞˇ ㄌㄜ˙ ㄊㄞˋ ㄉㄨㄛ ㄆㄧˊ ㄐㄧㄡˇ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄅㄟˋ ㄇㄚˋ ㄌㄜ˙.',
            pinyin: 'wo3 mai3 le tai4 duo1 pi2 jiu3, suo3 yi3 wo3 bei4 ma4 le.',
            translation: 'ビールを買いすぎたので叱られました。',
            memo: ''
          },
          {
            word: '偷',
            sentence: '偷魚的貓在一下跑。',
            bopomofo: 'ㄊㄡ ㄩˊ ㄉㄜ˙ ㄇㄠ ㄗㄞˋ ㄧ ㄒㄧㄚˋ ㄆㄠˇ.',
            pinyin: 'tou1 yu2 de mao1 zai4 yi1 xia4 pao3.',
            translation: '魚を盗んだ猫が一目散に逃げていきます。',
            memo: ''
          },
          {
            word: '安全',
            sentence: '在咖啡店很多人放著平板去廁所, 我覺得台灣很安全。',
            bopomofo: 'ㄗㄞˋ ㄎㄚ ㄈㄟ ㄉㄧㄢˋ ㄏㄣˇ ㄉㄨㄛ ㄖㄣˊ ㄈㄤˋ ㄓㄜ˙ ㄆㄧㄥˊ ㄅㄢˇ ㄑㄩˋ ㄘㄜˋ ㄙㄨㄛˇ, ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄊㄞˊ ㄨㄢ ㄏㄣˇ ㄢ ㄑㄩㄢˊ.',
            pinyin: 'zai4 ka1 fei1 dian4 hen3 duo1 ren2 fang4 zhe ping2 ban3 qu4 ce4 suo3, wo3 jue2 de tai2 wan1 hen3 an1 quan2.',
            translation: 'カフェでは多くの人がパソコンを置いてトイレに行くので、 台湾はとても安全なのだろうと思います。',
            memo: ''
          },
          {
            word: '值得',
            sentence: '那家小火鍋店一百塊可以吃到飽, 很值得。',
            bopomofo: 'ㄋㄚˋ ㄐㄧㄚ ㄒㄧㄠˇ ㄏㄨㄛˇ ㄍㄨㄛ ㄉㄧㄢˋ ㄧ ㄅㄞˇ ㄎㄨㄞˋ ㄎㄜˇ ㄧˇ ㄔ ㄉㄠˋ ㄅㄠˇ, ㄏㄣˇ ㄓˊ ㄉㄜ˙.',
            pinyin: 'na4 jia1 xiao3 huo3 guo1 dian4 yi1 bai3 kuai4 ke3 yi3 chi1 dao4 bao3, hen3 zhi2 de.',
            translation: 'あの鍋のレストランは100元で食べ放題で、 本当に行く価値があります。',
            memo: ''
          },
          {
            word: '墾丁',
            sentence: '墾丁的海邊藍藍的, 非常漂亮。',
            bopomofo: 'ㄎㄣˇ ㄉㄧㄥ ㄉㄜ˙ ㄏㄞˇ ㄅㄧㄢ ㄌㄢˊ ㄌㄢˊ ㄉㄜ˙, ㄈㄟ ㄔㄤˊ ㄆㄧㄠˋ ㄌㄧㄤˋ.',
            pinyin: 'ken3 ding1 de hai3 bian1 lan2 lan2 de, fei1 chang2 piao4 liang4.',
            translation: '墾丁の海は青くて、 非常に綺麗です。',
            memo: ''
          },
          {
            word: '台中',
            sentence: '如果你想爬山, 先到旁邊的城市台中去就好。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄒㄧㄤˇ ㄆㄚˊ ㄕㄢ, ㄒㄧㄢ ㄉㄠˋ ㄆㄤˊ ㄅㄧㄢ ㄉㄜ˙ ㄔㄥˊ ㄕˋ ㄊㄞˊ ㄓㄨㄥ ㄑㄩˋ ㄐㄧㄡˋ ㄏㄠˇ.',
            pinyin: 'ru2 guo3 ni3 xiang3 pa2 shan1, xian1 dao4 pang2 bian1 de cheng2 shi4 tai2 zhong1 qu4 jiu4 hao3.',
            translation: '山登りがしたければ、 まずは隣の大都市である台中に行って下さい。',
            memo: ''
          },
          {
            word: '日月潭',
            sentence: '有沒有往日月潭去的公共汽車?',
            bopomofo: 'ㄧㄡˇ ㄇㄟˊ ㄧㄡˇ ㄨㄤˇ ㄖˋ ㄩㄝˋ ㄊㄢˊ ㄑㄩˋ ㄉㄜ˙ ㄍㄨㄥ ㄍㄨㄥˋ ㄑㄧˋ ㄔㄜ?',
            pinyin: 'you3 mei2 you3 wang3 ri4 yue4 tan2 qu4 de gong1 gong4 qi4 che1?',
            translation: '日月潭行きのバスはありますか?',
            memo: ''
          },
          {
            word: '水上活動',
            sentence: '我要做水上活動, 我可不可以借游衣?',
            bopomofo: 'ㄨㄛˇ ㄧㄠˋ ㄗㄨㄛˋ ㄕㄨㄟˇ ㄕㄤˋ ㄏㄨㄛˊ ㄉㄨㄥˋ, ㄨㄛˇ ㄎㄜˇ ㄅㄨˋ ㄎㄜˇ ㄧˇ ㄐㄧㄝˋ ㄧㄡˊ ㄧ?',
            pinyin: 'wo3 yao4 zuo4 shui3 shang4 huo2 dong4, wo3 ke3 bu4 ke3 yi3 jie4 you2 yi1?',
            translation: 'ウォータースポーツをしたいのですが、 水着は借りられますか?',
            memo: ''
          },
          {
            word: '風景區',
            sentence: '那個風景區最近電視介紹了, 週末一定有很多人來到。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄈㄥ ㄐㄧㄥˇ ㄑㄩ ㄗㄨㄟˋ ㄐㄧㄣˋ ㄉㄧㄢˋ ㄕˋ ㄐㄧㄝˋ ㄕㄠˋ ㄌㄜ˙, ㄓㄡ ㄇㄛˋ ㄧˊ ㄉㄧㄥˋ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄖㄣˊ ㄌㄞˊ ㄉㄠˋ.',
            pinyin: 'na4 ge4 feng1 jing3 qu1 zui4 jin4 dian4 shi4 jie4 shao4 le, zhou1 mo4 yi1 ding4 you3 hen3 duo1 ren2 lai2 dao4.',
            translation: 'あの景勝地は最近テレビで紹介されたので、  週末にはたくさんの人が来るに違いありません。',
            memo: ''
          },
          {
            word: '又',
            sentence: '貓先聞食物的味道, 又開始吃了。',
            bopomofo: 'ㄇㄠ ㄒㄧㄢ ㄨㄣˊ ㄕˊ ㄨˋ ㄉㄜ˙ ㄨㄟˋ ㄉㄠˋ, ㄧㄡˋ ㄎㄞ ㄕˇ ㄔ ㄌㄜ˙.',
            pinyin: 'mao1 xian1 wen2 shi2 wu4 de wei4 dao4, you4 kai1 shi3 chi1 le.',
            translation: '猫は最初に食べ物の匂いを嗅ぎ、 そして食べ始めました。',
            memo: ''
          },
          {
            word: '遍',
            sentence: '因為我不能相信他吃完冰箱裡所有的食物, 我從上到下確認了二, 三遍。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄨㄛˇ ㄅㄨˋ ㄋㄥˊ ㄒㄧㄤ ㄒㄧㄣˋ ㄊㄚ ㄔ ㄨㄢˊ ㄅㄧㄥ ㄒㄧㄤ ㄌㄧˇ ㄙㄨㄛˇ ㄧㄡˇ ㄉㄜ˙ ㄕˊ ㄨˋ, ㄨㄛˇ ㄘㄨㄥˊ ㄕㄤˋ ㄉㄠˋ ㄒㄧㄚˋ ㄑㄩㄝˋ ㄖㄣˋ ㄌㄜ˙ ㄦˋ, ㄙㄢ ㄅㄧㄢˋ.',
            pinyin: 'yin1 wei4 wo3 bu4 neng2 xiang1 xin4 ta1 chi1 wan2 bing1 xiang1 li3 suo3 you3 de shi2 wu4, wo3 cong2 shang4 dao4 xia4 que4 ren4 le er4 san1 bian4.',
            translation: '彼が冷蔵庫の中の食べ物を全部食べたとは信じられなかったので、 2、 3回確認しました。',
            memo: ''
          },
          {
            word: '民宿',
            sentence: '每家小民宿有特色, 我能享受差異。',
            bopomofo: 'ㄇㄟˇ ㄐㄧㄚ ㄒㄧㄠˇ ㄇㄧㄣˊ ㄙㄨˋ ㄧㄡˇ ㄊㄜˋ ㄙㄜˋ, ㄨㄛˇ ㄋㄥˊ ㄒㄧㄤˇ ㄕㄡˋ ㄔㄚ ㄧˋ.',
            pinyin: 'mei3 jia1 xiao3 min2 su4 you3 te4 se4, wo3 neng2 xiang3 shou4 cha1 yi4.',
            translation: '小さな民宿にはそれぞれ特徴があり、 違いを楽しむ事ができます。',
            memo: ''
          },
          {
            word: '運氣',
            sentence: '今天的運氣很好， 可能是因為我昨天過去廟。',
            bopomofo: 'ㄐㄧㄣ ㄊㄧㄢ ㄉㄜ˙ ㄩㄣˋ ㄑㄧˋ ㄏㄣˇ ㄏㄠˇ, ㄎㄜˇ ㄋㄥˊ ㄕˋ ㄧㄣ ㄨㄟˋ ㄨㄛˇ ㄗㄨㄛˊ ㄊㄧㄢ ㄍㄨㄛˋ ㄑㄩˋ ㄇㄧㄠˋ.',
            pinyin: 'jin1 tian1 de yun4 qi4 hen3 hao3, ke3 neng2 shi4 yin1 wei4 wo3 zuo2 tian1 guo4 qu4 miao4.',
            translation: '今日とても運が良いのは、 昨日お寺に行ったからかもしれません。',
            memo: ''
          },
          {
            word: '摩托車',
            sentence: '比以前小小的摩托車不見了。',
            bopomofo: 'ㄅㄧˇ ㄧˇ ㄑㄧㄢˊ ㄒㄧㄠˇ ㄒㄧㄠˇ ㄉㄜ˙ ㄇㄛˊ ㄊㄨㄛ ㄔㄜ ㄅㄨˊ ㄐㄧㄢˋ ㄌㄜ˙.',
            pinyin: 'bi3 yi3 qian2 xiao3 xiao3 de mo2 tuo1 che1 bu2 jian4 le.',
            translation: '以前に比べて、 小さなオートバイは見なくなりました。',
            memo: ''
          },
          {
            word: '熱帶',
            sentence: '熱帶在夏天太陽的高度很高。',
            bopomofo: 'ㄖㄜˋ ㄉㄞˋ ㄗㄞˋ ㄒㄧㄚˋ ㄊㄧㄢ ㄊㄞˋ ㄧㄤˊ ㄉㄜ˙ ㄍㄠ ㄉㄨˋ ㄏㄣˇ ㄍㄠ.',
            pinyin: 're4 dai4 zai4 xia4 tian1 tai4 yang2 de gao1 du4 hen3 gao1.',
            translation: '熱帯では、 夏の太陽高度が非常に高いです。',
            memo: ''
          },
          {
            word: '植物',
            sentence: '今年有很多下雨, 植物生長良好。',
            bopomofo: 'ㄐㄧㄣ ㄋㄧㄢˊ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄒㄧㄚˋ ㄩˇ, ㄓˊ ㄨˋ ㄕㄥ ㄓㄤˇ ㄌㄧㄤˊ ㄏㄠˇ.',
            pinyin: 'jin1 nian2 you3 hen3 duo1 xia4 yu3, zhi2 wu4 sheng1 zhang3 liang2 hao3.',
            translation: '今年は雨が多いので、 植物はよく育っています。',
            memo: ''
          },
          {
            word: '所有',
            sentence: '他平常趁所有的週末去兜風。',
            bopomofo: 'ㄊㄚ ㄆㄧㄥˊ ㄔㄤˊ ㄔㄣˋ ㄙㄨㄛˇ ㄧㄡˇ ㄉㄜ˙ ㄓㄡ ㄇㄛˋ ㄑㄩˋ ㄉㄡ ㄈㄥ.',
            pinyin: 'ta1 ping2 chang2 chen4 suo3 you3 de zhou1 mo4 qu4 dou1 feng1.',
            translation: '彼は通常、 週末を全て使ってドライブをします。',
            memo: ''
          },
          {
            word: '白天',
            sentence: '白天我不常吃東西, 晚餐吃很多像一隻熊。',
            bopomofo: 'ㄅㄞˊ ㄊㄧㄢ ㄨㄛˇ ㄅㄨˋ ㄔㄤˊ ㄔ ㄉㄨㄥ ㄒㄧ˙, ㄨㄢˇ ㄘㄢ ㄔ ㄏㄣˇ ㄉㄨㄛ ㄒㄧㄤˋ ㄧˋ ㄓ ㄒㄩㄥˊ.',
            pinyin: 'bai2 tian1 wo3 bu4 chang2 chi1 dong1 xi, wan3 can1 chi1 hen3 duo1 xiang4 yi1 zhi1 xiong2.',
            translation: '日中はあまり食べませんが、 夕食はクマのようにたくさん食べます。',
            memo: ''
          },
          {
            word: '躺',
            sentence: '我在假日整天躺著看電視。',
            bopomofo: 'ㄨㄛˇ ㄗㄞˋ ㄐㄧㄚˋ ㄖˋ ㄓㄥˇ ㄊㄧㄢ ㄊㄤˇ ㄓㄜ˙ ㄎㄢˋ ㄉㄧㄢˋ ㄕˋ.',
            pinyin: 'wo3 zai4 jia4 ri4 zheng3 tian1 tang3 zhe kan4 dian4 shi4.',
            translation: '休日はゴロゴロしながら一日中テレビを見ています。',
            memo: ''
          },
          {
            word: '黃昏',
            sentence: '我起床的時候已經是黃昏。',
            bopomofo: 'ㄨㄛˇ ㄑㄧˇ ㄔㄨㄤˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄧˇ ㄐㄧㄥ ㄕˋ ㄏㄨㄤˊ ㄏㄨㄣ.',
            pinyin: 'wo3 qi3 chuang2 de shi2 hou4 yi3 jing1 shi4 huang2 hun1.',
            translation: '起きた時には既に夕方でした。',
            memo: ''
          },
          {
            word: '條',
            sentence: '在市區的一條街今天是禁止通行。',
            bopomofo: 'ㄗㄞˋ ㄕˋ ㄑㄩ ㄉㄜ˙ ㄧ ㄊㄧㄠˊ ㄐㄧㄝ ㄐㄧㄣ ㄊㄧㄢ ㄕˋ ㄐㄧㄣˋ ㄓˇ ㄊㄨㄥ ㄒㄧㄥˊ.',
            pinyin: 'zai4 shi4 qu1 de yi1 tiao2 jie1 jin1 tian1 shi4 jin4 zhi3 tong1 xing2.',
            translation: '市内の道路の1つは今日通行止めです。',
            memo: ''
          },
          {
            word: '街',
            sentence: '節日很大龍娃娃在街走過去。',
            bopomofo: 'ㄐㄧㄝˊ ㄖˋ ㄏㄣˇ ㄉㄚˋ ㄌㄨㄥˊ ㄨㄚˊ ㄨㄚ˙ ㄗㄞˋ ㄐㄧㄝ ㄗㄡˇ ㄍㄨㄛˋ ㄑㄩˋ.',
            pinyin: 'jie2 ri4 hen3 da4 long2 wa2 wa2 zai4 jie1 zou3 guo4 qu4.',
            translation: 'お祭りの日には大きな竜の人形が通りを歩きます。',
            memo: ''
          },
          {
            word: '啤酒',
            sentence: '當地啤酒配當地料理最好。',
            bopomofo: 'ㄉㄤ ㄉㄧˋ ㄆㄧˊ ㄐㄧㄡˇ ㄆㄟˋ ㄉㄤ ㄉㄧˋ ㄌㄧㄠˋ ㄌㄧˇ ㄗㄨㄟˋ ㄏㄠˇ.',
            pinyin: 'dang1 di4 pi2 jiu3 pei4 dang1 di4 liao4 li3 zui4 hao3.',
            translation: '地元の料理には地元のビールが最適です。',
            memo: ''
          },
          {
            word: '上',
            sentence: '他穿上破掉的褲子， 周圍的人都在凝視他。',
            bopomofo: 'ㄊㄚ ㄔㄨㄢ ㄕㄤˋ ㄆㄛˋ ㄉㄧㄠˋ ㄉㄜ˙ ㄎㄨˋ ㄗ˙, ㄓㄡ ㄨㄟˊ ㄉㄜ˙ ㄖㄣˊ ㄉㄡ ㄗㄞˋ ㄋㄧㄥˊ ㄕˋ ㄊㄚ.',
            pinyin: 'ta1 chuan1 shang4 po4 diao4 de ku4 zi, zhou1 wei2 de ren2 dou1 zai4 ning2 shi4 ta1.',
            translation: '彼は敗れたパンツを履いているので、 周りの人がジロジロ見ています。',
            memo: ''
          },
          {
            word: '又',
            sentence: '他是一個開朗又輕鬆的人, 不會太擔心。',
            bopomofo: 'ㄊㄚ ㄕˋ ㄧˊ ㄍㄜˋ ㄎㄞ ㄌㄤˇ ㄧㄡˋ ㄑㄧㄥ ㄙㄨㄥ ㄉㄜ˙ ㄖㄣˊ, ㄅㄨˊ ㄏㄨㄟˋ ㄊㄞˋ ㄉㄢ ㄒㄧㄣ.',
            pinyin: 'ta1 shi4 yi1 ge4 kai1 lang3 you4 qing1 song1 de ren2, bu2 hui4 tai4 dan1 xin1.',
            translation: '彼は陽気で気楽な人なので、 あまり悩んだりしません。',
            memo: ''
          },
          {
            word: '浪漫',
            sentence: '旅行的時候住的房子牆都是粉紅色的, 太浪漫的。',
            bopomofo: 'ㄌㄩˇ ㄒㄧㄥˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄓㄨˋ ㄉㄜ˙ ㄈㄤˊ ㄗ˙ ㄑㄧㄤˊ ㄉㄡ ㄕˋ ㄈㄣˇ ㄏㄨㄥˊ ㄙㄜˋ ㄉㄜ˙, ㄊㄞˋ ㄌㄤˋ ㄇㄢˋ ㄉㄜ˙.',
            pinyin: 'lu3 xing2 de shi2 hou4 zhu4 de fang2 zi qiang2 dou1 shi4 fen3 hong2 se4 de, tai4 lang4 man4 de.',
            translation: '旅行中に泊まっていた部屋は壁が一面ピンクで、 ロマンチックすぎました。',
            memo: ''
          },
          {
            word: '家鄉',
            sentence: '我已經習慣了在國外生活， 但是想念家鄉的味道。',
            bopomofo: 'ㄨㄛˇ ㄧˇ ㄐㄧㄥ ㄒㄧˊ ㄍㄨㄢˋ ㄌㄜ˙ ㄗㄞˋ ㄍㄨㄛˊ ㄨㄞˋ ㄕㄥ ㄏㄨㄛˊ, ㄉㄢˋ ㄕˋ ㄒㄧㄤˇ ㄋㄧㄢˋ ㄐㄧㄚ ㄒㄧㄤ ㄉㄜ˙ ㄨㄟˋ ㄉㄠˋ.',
            pinyin: 'wo3 yi3 jing1 xi2 guan4 le zai4 guo2 wai4 sheng1 huo2, dan4 shi4 xiang3 nian4 jia1 xiang1 de wei4 dao4.',
            translation: '海外での生活には慣れましたが、 故郷の味は恋しいです。',
            memo: ''
          },
          {
            word: '觀光客',
            sentence: '很多觀光客給狗食物, 牠越來越胖了。',
            bopomofo: 'ㄏㄣˇ ㄉㄨㄛ ㄍㄨㄢ ㄍㄨㄤ ㄎㄜˋ ㄍㄟˇ ㄍㄡˇ ㄕˊ ㄨˋ, ㄊㄚ ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ ㄆㄤˋ ㄌㄜ˙.',
            pinyin: 'hen3 duo1 guan1 guang1 ke4 gei3 gou3 shi2 wu4, ta1 yue4 lai2 yue4 pang4 le.',
            translation: 'たくさんの観光客が餌をやるので、 犬はますます太ってきました。',
            memo: ''
          },
          {
            word: '曬太陽',
            sentence: '最近一直下雨， 所以我想差不多曬太陽。',
            bopomofo: 'ㄗㄨㄟˋ ㄐㄧㄣˋ ㄧ ㄓˊ ㄒㄧㄚˋ ㄩˇ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄒㄧㄤˇ ㄔㄚ ㄅㄨˋ ㄉㄨㄛ ㄕㄞˋ ㄊㄞˋ ㄧㄤˊ.',
            pinyin: 'zui4 jin4 yi1 zhi2 xia4 yu3, suo3 yi3 wo3 xiang3 cha1 bu4 duo1 shai4 tai4 yang2.',
            translation: '最近はずっと雨なので、 そろそろ日光を浴びたいです。',
            memo: ''
          },
          {
            word: '水上摩托車',
            sentence: '那個沙灘有一些水上摩托車的旅遊, 我們體驗一下吧。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄕㄚ ㄊㄢ ㄧㄡˇ ㄧ ㄒㄧㄝ ㄕㄨㄟˇ ㄕㄤˋ ㄇㄛˊ ㄊㄨㄛ ㄔㄜ ㄉㄜ˙ ㄌㄩˇ ㄧㄡˊ, ㄨㄛˇ ㄇㄣ˙ ㄊㄧˇ ㄧㄢˋ ㄧ ㄒㄧㄚˋ ㄅㄚ˙.',
            pinyin: 'na4 ge4 sha1 tan1 you3 yi1 xie1 shui3 shang4 mo2 tuo1 che1 de lu3 you2, wo3 men ti3 yan4 yi1 xia4 ba.',
            translation: 'そのビーチではいくつかジェットスキーツアーをやっているので、 体験してみましょう。',
            memo: ''
          },
          {
            word: '愛上',
            sentence: '我愛上跟貓的生活, 不用出去。',
            bopomofo: 'ㄨㄛˇ ㄞˋ ㄕㄤˋ ㄍㄣ ㄇㄠ ㄉㄜ˙ ㄕㄥ ㄏㄨㄛˊ, ㄅㄨˋ ㄩㄥˋ ㄔㄨ ㄑㄩˋ.',
            pinyin: 'wo3 ai4 shang4 gen1 mao1 de sheng1 huo2, bu2 yong4 chu1 qu4.',
            translation: '猫との生活に恋しているので、 外出する必要はありません。',
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
