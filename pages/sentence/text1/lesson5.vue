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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第5章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第5章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      data: {
        title: '當代中文課程課1・第5章',
        words: [
          {
            word: '牛肉',
            sentence: '旁邊有很有名的牛肉麵店。',
            bopomofo: 'ㄆㄤˊ ㄅㄧㄢ ㄧㄡˇ ㄏㄣˇ ㄧㄡˇ ㄇㄧㄥˊ ㄉㄜ˙ ㄋㄧㄡˊ ㄖㄡˋ ㄇㄧㄢˋ ㄉㄧㄢˋ.',
            pinyin: 'pang2 bian1 you3 hen3 you3 ming2 de niu2 rou4 mian4 dian4.',
            translation: '隣には有名な牛肉麺屋があります。'
          },
          {
            word: '麵',
            sentence: '我喜歡粗的麵。',
            bopomofo: 'ㄨㄛˇ ㄒㄧˇ ㄏㄨㄢ ㄘㄨ ㄉㄜ˙ ㄇㄧㄢˋ.',
            pinyin: 'wo3 xi3 huan1 cu1 de mian4.',
            translation: '太めの麺が好き。'
          },
          {
            word: '真',
            sentence: '他做的菜真好吃。',
            bopomofo: 'ㄊㄚ ㄗㄨㄛˋ ㄉㄜ˙ ㄘㄞˋ ㄓㄣ ㄏㄠˇ ㄔ.',
            pinyin: 'ta1 zuo4 de cai4 zhen1 hao3 chi1.',
            translation: '彼は本当においしい料理を作ってくれます。'
          },
          {
            word: '好吃',
            sentence: '我喜歡所有好吃的東西。',
            bopomofo: 'ㄨㄛˇ ㄒㄧˇ ㄏㄨㄢ ㄙㄨㄛˇ ㄧㄡˇ ㄏㄠˇ ㄔ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙.',
            pinyin: 'wo3 xi3 huan1 suo3 you3 hao3 chi1 de dong1 xi.',
            translation: '美味しいものは全部好きです。'
          },
          {
            word: '說',
            sentence: '他說明天會下雨。',
            bopomofo: 'ㄊㄚ ㄕㄨㄛ ㄇㄧㄥˊ ㄊㄧㄢ ㄏㄨㄟˋ ㄒㄧㄚˋ ㄩˇ.',
            pinyin: 'ta1 shuo1 ming2 tian1 hui4 xia4 yu3.',
            translation: '彼は明日は雨だと言いました。'
          },
          {
            word: '少',
            sentence: '我看到公園裡有不少孩子。',
            bopomofo: 'ㄨㄛˇ ㄎㄢˋ ㄉㄠˋ ㄍㄨㄥ ㄩㄢˊ ㄌㄧˇ ㄧㄡˇ ㄅㄨˋ ㄕㄠˇ ㄏㄞˊ ㄗ˙.',
            pinyin: 'wo3 kan4 dao4 gong1 yuan2 li3 you3 bu4 shao3 hai2 zi.',
            translation: '公園にはたくさんの子供たちがいます。',
            memo: '※少は、「不少」か「很少」で使う。'
          },
          {
            word: '有名',
            sentence: '小吃很有名, 那是台灣的庶民美食。',
            bopomofo: 'ㄒㄧㄠˇ ㄔ ㄏㄣˇ ㄧㄡˇ ㄇㄧㄥˊ, ㄋㄚˋ ㄕ˙ ㄊㄞˊ ㄨㄢ ㄉㄜ˙ ㄕㄨˋ ㄇㄧㄣˊ ㄇㄟˇ ㄕˊ.',
            pinyin: 'xiao3 chi1 hen3 you3 ming2, na4 shi4 tai2 wan1 de shu4 min2 mei3 shi2.',
            translation: '小吃はとても有名な、台湾の庶民の料理です。'
          },
          {
            word: '小吃',
            sentence: '小吃和點心是一樣嗎? 不一樣。',
            bopomofo: 'ㄒㄧㄠˇ ㄔ ㄏㄢˇ  ㄉㄧㄢˇ ㄒㄧㄣ ㄕˋ ㄧˊ ㄧㄤˋ ㄇㄚ˙? ㄅㄨˋ ㄧˊ ㄧㄤˋ.',
            pinyin: 'xiao3 chi1 han4 dian3 xin1 shi4 yi1 yang4 ma2 bu4 yi1 yang4.',
            translation: '小吃と点心は同じですか? いいえ、違います。',
            memo: '※同じスナックでも小吃はおかず的なもの、点心はどちらかというとおやつ。'
          },
          {
            word: '最',
            sentence: '這支是我買過最貴的手機。',
            bopomofo: 'ㄓㄜˋ ㄓ ㄕˋ ㄨㄛˇ ㄇㄞˇ ㄍㄨㄛˋ ㄗㄨㄟˋ ㄍㄨㄟˋ ㄉㄜ˙ ㄕㄡˇ ㄐㄧ.',
            pinyin: 'zhe4 zhi1 shi4 wo3 mai3 guo4 zui4 gui4 de shou3 ji1.',
            translation: 'これは私が買った中で一番高い携帯です。'
          },
          {
            word: '湯',
            sentence: '他用很多辣椒做這個辣的湯。',
            bopomofo: 'ㄊㄚ ㄩㄥˋ ㄏㄣˇ ㄉㄨㄛ ㄌㄚˋ ㄐㄧㄠ ㄗㄨㄛˋ ㄓㄜˋ ㄍㄜˋ ㄌㄚˋ ㄉㄜ˙ ㄊㄤ.',
            pinyin: 'ta1 yong4 hen3 duo1 la4 jiao1 zuo4 zhe4 ge4 la4 de tang1.',
            translation: '彼はこの辛いスープを作るためにたくさんの唐辛子を使いました。'
          },
          {
            word: '這麼',
            sentence: '我的貓咪在睡覺。 這麼可愛!',
            bopomofo: 'ㄨㄛˇ ㄉㄜ˙ ㄇㄠ ㄇㄧ ㄗㄞˋ ㄕㄨㄟˋ ㄐㄧㄠˋ. ㄓㄜˋ ㄇㄜ˙ ㄎㄜˇ ㄞˋ!',
            pinyin: 'wo3 de mao1 mi1 zai4 shui4 jiao4. zhe4 me ke3 ai4!',
            translation: '私の猫は寝ています。 とても可愛い!'
          },
          {
            word: '知道',
            sentence: '警察知道我的地點。',
            bopomofo: 'ㄐㄧㄥˇ ㄔㄚˊ ㄓ ㄉㄠˋ ㄨㄛˇ ㄉㄜ˙ ㄉㄧˋ ㄉㄧㄢˇ.',
            pinyin: 'jing3 cha2 zhi1 dao4 wo3 de di4 dian3.',
            translation: '警察は私の居場所を知っています。',
            memo: '※遲到(ㄔˊ ㄉㄠˋ/chi2 dao4)=遅刻する と似ているので注意。'
          },
          {
            word: '家',
            sentence: '三個人在家。',
            bopomofo: 'ㄙㄢ ㄍㄜ˙ ㄖㄣˊ ㄗㄞˋ ㄐㄧㄚ.',
            pinyin: 'san1 ge4 ren2 zai4 jia1.',
            translation: '3人が家にいます。'
          },
          {
            word: '店',
            sentence: '我家附近沒什麼店。',
            bopomofo: 'ㄨㄛˇ ㄐㄧㄚ ㄈㄨˋ ㄐㄧㄣˋ ㄇㄟˊ ㄕㄣˊ ㄇㄜ˙ ㄉㄧㄢˋ.',
            pinyin: 'wo3 jia1 fu4 jin4 mei3 shen3 me dian4.',
            translation: '私の家の付近にはあまりお店がありません。'
          },
          {
            word: '一定',
            sentence: '我有考試, 一定學中文。',
            bopomofo: 'ㄨㄛˇ ㄧㄡˇ ㄎㄠˇ ㄕˋ, ㄧˊ ㄉㄧㄥˋ ㄒㄩㄝˊ ㄓㄨㄥ ㄨㄣˊ.',
            pinyin: 'wo3 you3 kao3 shi4, yi1 ding4 xue2 zhong1 wen2.',
            translation: '試験があるので、中国語を勉強しなければならない。'
          },
          {
            word: '點',
            sentence: '我點的菜沒來。',
            bopomofo: 'ㄨㄛˇ ㄉㄧㄢˇ ㄉㄜ˙ ㄘㄞˋ ㄇㄟˊ ㄌㄞˊ.',
            pinyin: 'wo3 dian3 de cai4 mei2 lai2.',
            translation: '頼んだ料理が来ていません。'
          },
          {
            word: '碗',
            sentence: '這個碗有滿滿的菜。',
            bopomofo: 'ㄓㄜˋ ㄍㄜˋ ㄨㄢˇ ㄧㄡˇ ㄇㄢˇ ㄇㄢˇ ㄉㄜ˙ ㄘㄞˋ.',
            pinyin: 'zhe4 ge4 wan3 you3 man3 man3 de cai4.',
            translation: 'このお椀は料理で一杯です。'
          },
          {
            word: '是阿',
            sentence: '是阿， 我必須在家。',
            bopomofo: 'ㄕˋ ㄚ， ㄨㄛˇ ㄅㄧˋ ㄒㄩ ㄗㄞˋ ㄐㄧㄚ.',
            pinyin: 'shi4 a1, wo3 bi4 xu1 zai4 jia1.',
            translation: 'その通りです、 私は家にいなくてはいけません。'
          },
          {
            word: '小籠包',
            sentence: '小籠包的湯很燙。',
            bopomofo: 'ㄒㄧㄠˇ ㄌㄨㄥˊ ㄅㄠ ㄉㄜ˙ ㄊㄤ ㄏㄣˇ ㄊㄤˋ.',
            pinyin: 'xiao3 long2 bao1 de tang1 hen3 tang4.',
            translation: '小籠包のスープはとても熱い。',
            memo: '※「熱」<<「燙燙」。 「燙」はより高溫。'
          },
          {
            word: '臭豆腐',
            sentence: '我來台灣後, 還沒吃過臭豆腐。',
            bopomofo: 'ㄨㄛˇ ㄌㄞˊ ㄊㄞˊ ㄨㄢ ㄏㄡˋ, ㄏㄞˊ ㄇㄟˊ ㄔ ㄍㄨㄛˋ ㄔㄡˋ ㄉㄡˋ ㄈㄨˇ.',
            pinyin: 'wo3 lai2 tai2 wan1 hou4, hai2 mei2 chi1 guo4 chou4 dou4 fu3.',
            translation: '台湾に来てからまだ臭豆腐を食べていません。'
          },
          {
            word: '太好了',
            sentence: '夏天太好了，我可以吃牡蠣。',
            bopomofo: 'ㄒㄧㄚˋ ㄊㄧㄢ ㄊㄞˋ ㄏㄠˇ ㄌㄜ˙， ㄨㄛˇ ㄎㄜˇ ㄧˇ ㄔ ㄇㄨˇ ㄌㄧˋ.',
            pinyin: 'xia4 tian1 tai4 hao3 le, wo3 ke3 yi3 chi1 mu3 li4.',
            translation: '夏は最高、 牡蠣が食べられる。'
          },
          {
            word: '昨天',
            sentence: '昨天我做夜猫子了。',
            bopomofo: 'ㄗㄨㄛˊ ㄊㄧㄢ ㄨㄛˇ ㄗㄨㄛˋ ㄧㄝˋ ㄇㄠ ㄗˇ ㄌㄜ˙.',
            pinyin: 'zuo2 tian1 wo3 zuo4 ye4 mao1 zi3 le.',
            translation: '昨日は夜更かしをしました。'
          },
          {
            word: '餐廳',
            sentence: '什麼餐廳可以喝啤酒呢?',
            bopomofo: 'ㄕㄣˊ ㄇㄜ˙ ㄘㄢ ㄊㄧㄥ ㄎㄜˇ ㄧˇ ㄏㄜ ㄆㄧˊ ㄐㄧㄡˇ ㄋㄜ˙?',
            pinyin: 'shen2 me can1 ting1 ke3 yi3 he1 pi2 jiu3 ne?',
            translation: 'どのレストランでビールが飲めますか?'
          },
          {
            word: '可是',
            sentence: '今天下雨, 可是我有很多要洗的衣服。',
            bopomofo: 'ㄐㄧㄣ ㄊㄧㄢ ㄒㄧㄚˋ ㄩˇ, ㄎㄜˇ ㄕˋ ㄨㄛˇ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄧㄠˋ ㄒㄧˇ ㄉㄜ˙ ㄧ ㄈㄨˊ.',
            pinyin: 'jin1 tian1 xia4 yu3, ke3 shi4 wo3 you3 hen3 duo1 yao4 xi3 de yi1 fu2.',
            translation: '今日は雨が降っていますが、洗濯する服がたくさんあります。'
          },
          {
            word: '辣',
            sentence: '我要加辣到這個菜。',
            bopomofo: 'ㄨㄛˇ ㄧㄠˋ ㄐㄧㄚ ㄌㄚˋ ㄉㄠˋ ㄓㄜˋ ㄍㄜˋ ㄘㄞˋ.',
            pinyin: 'wo3 yao4 jia1 la4 dao4 zhe4 ge4 cai4.',
            translation: 'この料理に辛さを加えたい。'
          },
          {
            word: '怕',
            sentence: '我怕摸到蟲。',
            bopomofo: 'ㄨㄛˇ ㄆㄚˋ ㄇㄛ ㄉㄠˋ ㄔㄨㄥˊ.',
            pinyin: 'wo3 pa4 mo1 dao4 chong2.',
            translation: '虫に触るのが怖いです。'
          },
          {
            word: '所以',
            sentence: '今天我很累了, 所以我沒做作業。',
            bopomofo: 'ㄐㄧㄣ ㄊㄧㄢ ㄨㄛˇ ㄏㄣˇ ㄌㄟˋ ㄌㄜ˙, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄇㄟˊ ㄗㄨㄛˋ ㄗㄨㄛˋ ㄧㄝˋ.',
            pinyin: 'ji1n tian1 wo3 hen3 lei4 le, suo3 yi3 wo3 mei2 zuo4 zuo4 ye4.',
            translation: '今日はとても疲れていたので宿題はしませんでした。'
          },
          {
            word: '自己',
            sentence: '我自己去火車站。',
            bopomofo: 'ㄨㄛˇ ㄗˋ ㄐㄧˇ ㄑㄩˋ ㄏㄨㄛˇ ㄔㄜ ㄓㄢˋ.',
            pinyin: 'wo3 zi4 ji3 qu4 huo3 che1 zhan4.',
            translation: '私は自分で駅に行きます。'
          },
          {
            word: '做飯',
            sentence: '做飯的時候, 我聽音樂。',
            bopomofo: 'ㄗㄨㄛˋ ㄈㄢˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄨㄛˇ ㄊㄧㄥ ㄧㄣ ㄩㄝˋ.',
            pinyin: 'zuo4 fan4 de shi2 hou4, wo3 ting1 yin1 yue4.',
            translation: '料理をする時は、音楽をかけます。'
          },
          {
            word: '得',
            sentence: '那個孩子騎脚踏車, 騎得很好。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄏㄞˊ ㄗ˙ ㄑㄧˊ ㄐㄧㄠˇ ㄊㄚˋ ㄔㄜ, ㄑㄧˊ ㄉㄜ˙ ㄏㄣˇ ㄏㄠˇ.',
            pinyin: 'na4 ge4 hai2 zi3 qi2 jiao3 ta4 che1, qi2 de hen3 hao3.',
            translation: 'あの子供は自転車に乗るのがとても上手です。'
          },
          {
            word: '會',
            sentence: '我會寫中文的漢字。',
            bopomofo: 'ㄨㄛˇ ㄏㄨㄟˋ ㄒㄧㄝˇ ㄓㄨㄥ ㄨㄣˊ ㄉㄜ˙ ㄏㄢˋ ㄗˋ.',
            pinyin: 'wo3 hui4 xie3 zhong1 wen2 de han4 zi4.',
            translation: '漢字が書けます。'
          },
          {
            word: '甜點',
            sentence: '她可以吃很多甜點。',
            bopomofo: 'ㄊㄚ ㄎㄜˇ ㄧˇ ㄔ ㄏㄣˇ ㄉㄨㄛ ㄊㄧㄢˊ ㄉㄧㄢˇ.',
            pinyin: 'ta1 ke3 yi3 chi1 hen3 duo1 tian2 dian3.',
            translation: '彼女はスイーツをたくさん食べられる。'
          },
          {
            word: '不錯',
            sentence: '姐姐做肉圓了, 做得不錯。',
            bopomofo: 'ㄐㄧㄝˇ ㄐㄧㄝ˙ ㄗㄨㄛˋ ㄖㄡˋ ㄩㄢˊ ㄌㄜ˙, ㄗㄨㄛˋ ㄉㄜˊ ㄅㄨˋ ㄘㄨㄛˋ.',
            pinyin: 'jie3 jie3 zuo4 rou4 yuan2 le, zuo4 de bu2 cuo4.',
            translation: 'お姉さんが作った肉圓は悪くなかった。'
          },
          {
            word: '可以',
            sentence: '今天可以喝啤酒嗎?',
            bopomofo: 'ㄐㄧㄣ ㄊㄧㄢ ㄎㄜˇ ㄧˇ ㄏㄜ ㄆㄧˊ ㄐㄧㄡˇ ㄇㄚ˙?',
            pinyin: 'jin1 tian1 ke3 yi3 he1 pi2 jiu3 ma2?',
            translation: '今日はビールを飲んでもいいですか?'
          },
          {
            word: '教',
            sentence: '他教我怎麼去便利商店。',
            bopomofo: 'ㄊㄚ ㄐㄧㄠˋ ㄨㄛˇ ㄗㄣˇ ㄇㄜ˙ ㄑㄩˋ ㄅㄧㄢˋ ㄌㄧˋ ㄕㄤ ㄉㄧㄢˋ..',
            pinyin: 'ta1 jiao4 wo3 zen3 me qu4 bian4 li4 shang1 dian4.',
            translation: '彼は私にコンビニへの行き方を教えてくれました。'
          },
          {
            word: '到',
            sentence: '下午一點之前我必須到銀行去。',
            bopomofo: 'ㄒㄧㄚˋ ㄨˇ ㄧˋ ㄉㄧㄢˇ ㄓ ㄑㄧㄢˊ ㄨㄛˇ ㄅㄧˋ ㄒㄩ ㄉㄠˋ ㄧㄣˊ ㄏㄤˊ ㄑㄩˋ.',
            pinyin: 'xia4 wu3 yi1 dian3 zhi1 qian2 wo3 bi4 xu1 dao4 yin2 hang2 qu4..',
            translation: '午後1時前に銀行に行かなければならない。',
            memo: '※ここでの「到」は前置詞だが、台湾や中国の南方では動詞としても使える。\n(例文の最後の「去」無しでOK。)'
          },
          {
            word: '有一點',
            sentence: '日本的辣在台灣只有一點辣。',
            bopomofo: 'ㄖˋ ㄅㄣˇ ㄉㄜ˙ ㄌㄚˋ ㄗㄞˋ ㄊㄞˊ ㄨㄢ ㄓˇ ㄧㄡˇ ㄧˋ ㄉㄧㄢˇ ㄌㄚˋ.',
            pinyin: 'ri4 ben3 de la4 zai4 tai2 wan1 zhi3 you3 yi1 dian3 la4.',
            translation: '日本の「辛い」は台湾の「少し辛い」。',
            memo: '※有一點と一點→意味はどちらも「少し」だが、語順は有一點(副詞)+形容詞、 形容詞+一點(副詞)。\n有一點はネガティブな意味で使い、一點はポジティブ。'
          },
          {
            word: '不好',
            sentence: '太常用電腦對眼睛不好。',
            bopomofo: 'ㄊㄞˋ ㄔㄤˊ ㄩㄥˋ ㄉㄧㄢˋ ㄋㄠˇ ㄉㄨㄟˋ ㄧㄢˇ ㄐㄧㄥ ㄅㄨˋ ㄏㄠˇ.',
            pinyin: 'tai4 chang2 yong4 dian4 nao3 dui4 yan3 jing1 bu4 hao3.',
            translation: 'コンピュータを使い過ぎると目に悪いです。'
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
