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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第8章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第8章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      data: {
        title: '當代中文課程課1・第8章',
        words: [
          {
            word: '坐',
            sentence: '最近我變肥了, 所以我不坐電梯。',
            bopomofo: 'ㄗㄨㄟˋ ㄐㄧㄣˋ ㄨㄛˇ ㄅㄧㄢˋ ㄈㄟˊ ㄌㄜ˙, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄅㄨˋ ㄗㄨㄛˋ ㄉㄧㄢˋ ㄊㄧ.',
            pinyin: 'zui4 jin4 wo3 bian4 fei2 le, suo3 yi3 wo3 bu4 zuo4 dian4 ti1.',
            translation: '最近太ってしまったので、エレベーターに乗るのを止めました。'
          },
          {
            word: '火車',
            sentence: '因為人太多, 我不喜歡在東京坐火車。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄖㄣˊ ㄊㄞˋ ㄉㄨㄛ, ㄨㄛˇ ㄅㄨˋ ㄒㄧˇ ㄏㄨㄢ ㄗㄞˋ ㄉㄨㄥ ㄐㄧㄥ ㄗㄨㄛˋ ㄏㄨㄛˇ ㄔㄜ.',
            pinyin: 'yin1 wei4 ren2 tai4 duo1, wo3 bu4 xi3 huan1 zai4 dong1 jing1 zuo4 huo3 che1.',
            translation: '人が多すぎて、 東京で電車に乗るのは嫌いです。'
          },
          {
            word: '跟',
            sentence: '我要跟你一起配著啤酒看電影。',
            bopomofo: 'ㄨㄛˇ ㄧㄠˋ ㄍㄣ ㄋㄧˇ ㄧˋ ㄑㄧˇ ㄆㄟˋ ㄓㄜ˙ ㄆㄧˊ ㄐㄧㄡˇ ㄎㄢˋ ㄉㄧㄢˋ ㄧㄥˇ.',
            pinyin: 'wo3 yao4 gen1 ni3 yi1 qi3 pei4 zhe pi2 jiu3 kan4 dian4 ying3.',
            translation: 'あなたとビールを飲みながら映画を見たいです。'
          },
          {
            word: '玩',
            sentence: '他會去他的朋友家玩。',
            bopomofo: 'ㄊㄚ ㄏㄨㄟˋ ㄑㄩˋ ㄊㄚ ㄉㄜ˙ ㄆㄥˊ ㄧㄡˇ ㄐㄧㄚ ㄨㄢˊ.',
            pinyin: 'ta1 hui4 qu4 ta1 de peng2 you3 jia1 wan2.',
            translation: '彼は友達の家に遊びに行きます。'
          },
          {
            word: '怎麼',
            sentence: '請告訴我apple用中文怎麼說。',
            bopomofo: 'ㄑㄧㄥˇ ㄍㄠˋ ㄙㄨˋ ㄨㄛˇ apple ㄩㄥˋ ㄓㄨㄥ ㄨㄣˊ ㄗㄣˇ ㄇㄜ˙ ㄕㄨㄛ.',
            pinyin: 'qing3 gao4 su4 wo3 apple yong4 zhong1 wen2 zen3 me shuo1.',
            translation: '中国語でりんごを何と言うか教えて。'
          },
          {
            word: '慢',
            sentence: '雖然郵局有很多人，手續不太慢。',
            bopomofo: 'ㄙㄨㄟ ㄖㄢˊ ㄧㄡˊ ㄐㄩˊ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄖㄣˊ， ㄕㄡˇ ㄒㄩˋ ㄅㄨˋ ㄊㄞˋ ㄇㄢˋ.',
            pinyin: 'sui1 ran2 you2 ju2 you3 hen3 duo1 ren2, shou3 xu4 bu4 tai4 man4.',
            translation: '郵便局にはたくさんの人がいますが、手続きは遅くありません。'
          },
          {
            word: '鐘頭',
            sentence: '做這個菜要兩個多鐘頭。',
            bopomofo: 'ㄗㄨㄛˋ ㄓㄜˋ ㄍㄜˋ ㄘㄞˋ ㄧㄠˋ ㄌㄧㄤˇ ㄍㄜˋ ㄉㄨㄛ ㄓㄨㄥ ㄊㄡˊ.',
            pinyin: 'zuo4 zhe4 ge4 cai4 yao4 liang3 ge4 duo1 zhong1 tou2.',
            translation: 'この料理を作るのに2時間以上かかります。'
          },
          {
            word: '比較',
            sentence: '他的中文比較好。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄓㄨㄥ ㄨㄣˊ ㄅㄧˇ ㄐㄧㄠˋ ㄏㄠˇ.',
            pinyin: 'ta1 de zhong1 wen2 bi3 jiao4 hao3.',
            translation: '彼の中国語はより上手です。'
          },
          {
            word: '快',
            sentence: '我得快走，不然來不及吃飯了。',
            bopomofo: 'ㄨㄛˇ ㄉㄟˇ ㄎㄨㄞˋ ㄗㄡˇ， ㄅㄨˋ ㄖㄢˊ ㄌㄞˊ ㄅㄨˋ ㄐㄧˊ ㄔ ㄈㄢˋ ㄌㄜ˙.',
            pinyin: 'wo3 dei3 kuai4 zou3, bu4 ran2 lai2 bu4 ji2 chi1 fan4 le.',
            translation: '急いで行かなければ、食べる時間がありません。'
          },
          {
            word: '車票',
            sentence: '你幫我確認這張車票的火車到了嗎。',
            bopomofo: 'ㄋㄧˇ ㄅㄤ ㄨㄛˇ ㄑㄩㄝˋ ㄖㄣˋ ㄓㄜˋ ㄓㄤ ㄔㄜ ㄆㄧㄠˋ ㄉㄜ˙ ㄏㄨㄛˇ ㄔㄜ ㄉㄠˋ ㄌㄜ˙ ㄇㄚ˙.',
            pinyin: 'ni3 bang1 wo3 que4 ren4 zhe4 zhang1 che1 piao4 de huo3 che1 dao4 le ma2.',
            translation: 'このチケットの列車が到着していないことを確認してください。'
          },
          {
            word: '非常',
            sentence: '這家店好像非常忙。',
            bopomofo: 'ㄓㄜˋ ㄐㄧㄚ ㄉㄧㄢˋ ㄏㄠˇ ㄒㄧㄤˋ ㄈㄟ ㄔㄤˊ ㄇㄤˊ.',
            pinyin: 'zhe4 jia1 dian4 hao3 xiang4 fei1 chang2 mang2.',
            translation: 'この店はとても忙しいようです。'
          },
          {
            word: '但是',
            sentence: '他說我必須去學校，但是我不要。',
            bopomofo: 'ㄊㄚ ㄕㄨㄛ ㄨㄛˇ ㄅㄧˋ ㄒㄩ ㄑㄩˋ ㄒㄩㄝˊ ㄒㄧㄠˋ， ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄅㄨˊ ㄧㄠˋ.',
            pinyin: 'ta1 shuo1 wo3 bi4 xu1 qu4 xue2 xiao4, dan4 shi4 wo3 bu2 yao4.',
            translation: '彼は私が学校に行かなければならないと言ったが、私は行きたくない。'
          },
          {
            word: '又',
            sentence: '這季節的芒果又甜又便宜。',
            bopomofo: 'ㄓㄜˋ ㄐㄧˋ ㄐㄧㄝˊ ㄉㄜ˙ ㄇㄤˊ ㄍㄨㄛˇ ㄧㄡˋ ㄊㄧㄢˊ ㄧㄡˋ ㄆㄧㄢˊ ㄧˊ.',
            pinyin: 'zhe4 ji4 jie2 de mang2 guo3 you4 tian2 you4 pian2 yi2.',
            translation: '今シーズンのマンゴーはとても甘くて安いです。'
          },
          {
            word: '舒服',
            sentence: '冷氣讓夏天的房間很舒服。',
            bopomofo: 'ㄌㄥˇ ㄑㄧˋ ㄖㄤˋ ㄒㄧㄚˋ ㄊㄧㄢ ㄉㄜ˙ ㄈㄤˊ ㄐㄧㄢ ㄏㄣˇ ㄕㄨ ㄈㄨˊ.',
            pinyin: 'leng3 qi4 rang4 xia4 tian1 de fang2 jian1 hen3 shu1 fu2.',
            translation: 'エアコンは夏の部屋をとても快適にします。'
          },
          {
            word: '站',
            sentence: '我可以在車站買便當嗎?',
            bopomofo: 'ㄨㄛˇ ㄎㄜˇ ㄧˇ ㄗㄞˋ ㄔㄜ ㄓㄢˋ ㄇㄞˇ ㄅㄧㄢˋ ㄉㄤ ㄇㄚ˙?',
            pinyin: 'wo3 ke3 yi3 zai4 che1 zhan4 mai3 bian4 dang1 ma?',
            translation: '駅で弁当は買えますか？'
          },
          {
            word: '或是',
            sentence: '那家店可以接受現金或是信用卡。',
            bopomofo: 'ㄋㄚˋ ㄐㄧㄚ ㄉㄧㄢˋ ㄎㄜˇ ㄧˇ ㄐㄧㄝ ㄕㄡˋ ㄒㄧㄢˋ ㄐㄧㄣ ㄏㄨㄛˋ ㄕˋ ㄒㄧㄣˋ ㄩㄥˋ ㄎㄚˇ.',
            pinyin: 'na4 jia1 dian4 ke3 yi3 jie1 shou4 xian4 jin1 huo4 shi4 xin4 yong4 ka3.',
            translation: 'あの店では現金またはクレジットカードが使えます。'
          },
          {
            word: '臺南',
            sentence: '從台北到臺南坐公共汽車需要五個小時。',
            bopomofo: 'ㄘㄨㄥˊ ㄊㄞˊ ㄅㄟˇ ㄉㄠˋ ㄊㄞˊ ㄋㄢˊ ㄗㄨㄛˋ ㄍㄨㄥ ㄍㄨㄥˋ ㄑㄧˋ ㄔㄜ ㄒㄩ ㄧㄠˋ ㄨˇ ㄍㄜˋ ㄒㄧㄠˇ ㄕˊ .',
            pinyin: 'cong2 tai2 bei3 dao4 tai2 nan2 zuo4 gong1 gong4 qi4 che1 xu1 yao4 wu3 ge4 xiao3 shi2.',
            translation: '台北から台南までバスで5時間かかります。'
          },
          {
            word: '高鐵',
            sentence: '我希望高鐵票變便宜。',
            bopomofo: 'ㄨㄛˇ ㄒㄧ ㄨㄤˋ ㄍㄠ ㄊㄧㄝˇ ㄆㄧㄠˋ ㄅㄧㄢˋ ㄆㄧㄢˊ ㄧˊ.',
            pinyin: 'wo3 xi1 wang4 gao1 tie3 piao4 bian4 pian2 yi2.',
            translation: '私は高速鉄道の切符が安くなることを期待しています。'
          },
          {
            word: '網路上',
            sentence: '他在網路上找二手書。',
            bopomofo: 'ㄊㄚ ㄗㄞˋ ㄨㄤˇ ㄌㄨˋ ㄕㄤˋ ㄓㄠˇ ㄦˋ ㄕㄡˇ ㄕㄨ.',
            pinyin: 'ta1 zai4 wang3 lu4 shang4 zhao3 er4 shou3 shu1.',
            translation: '彼はインターネットで古本を探しています。'
          },
          {
            word: '便利商店',
            sentence: '車站前面的便利商店是二十四小時営業。',
            bopomofo: 'ㄔㄜ ㄓㄢˋ ㄑㄧㄢˊ ㄇㄧㄢˋ ㄉㄜ˙ ㄅㄧㄢˋ ㄌㄧˋ ㄕㄤ ㄉㄧㄢˋ ㄕˋ ㄦˋ ㄕˊ ㄙˋ ㄒㄧㄠˇ ㄕˊ ㄧㄥˊ ㄧㄝˋ.',
            pinyin: 'che1 zhan4 qian2 mian4 de bian4 li4 shang1 dian4 shi4 er4 shi2 si4 xiao3 shi2 ying2 ye4.',
            translation: '駅前のコンビニは24時間営業です。'
          },
          {
            word: '同學',
            sentence: '有時候我見到高中同學。',
            bopomofo: 'ㄧㄡˇ ㄕˊ ㄏㄡˋ ㄨㄛˇ ㄐㄧㄢˋ ㄉㄠˋ ㄍㄠ ㄓㄨㄥ ㄊㄨㄥˊ ㄒㄩㄝˊ.',
            pinyin: 'you3 shi2 hou4 wo3 jian4 dao4 gao1 zhong1 tong2 xue2.',
            translation: '時々高校のクラスメートに会います。'
          },
          {
            word: '參觀',
            sentence: '一個星期我參觀工廠兩次。',
            bopomofo: 'ㄧˊ ㄍㄜˋ ㄒㄧㄥ ㄑㄧˊ ㄨㄛˇ ㄘㄢ ㄍㄨㄢ ㄍㄨㄥㄔㄤˇ ㄌㄧㄤˇ ㄘˋ.',
            pinyin: 'yi1 ge4 xing1 qi2 wo3 can1 guan1 gong1 chang3 liang3 ci4.',
            translation: '私は週に2回工場を訪ねます。'
          },
          {
            word: '古代',
            sentence: '我喜歡讀古代故事。',
            bopomofo: 'ㄨㄛˇ ㄒㄧˇ ㄏㄨㄢ ㄉㄨˊ ㄍㄨˇ ㄉㄞˋ ㄍㄨˋ ㄕˋ.',
            pinyin: 'wo3 xi3 huan1 du2 gu3 dai4 gu4 shi4.',
            translation: '私は古代の物語を読むのが好きです。'
          },
          {
            word: '騎',
            sentence: '我常常騎機車兜兜風。',
            bopomofo: 'ㄨㄛˇ ㄔㄤˊ ㄔㄤˊ ㄑㄧˊ ㄐㄧ ㄔㄜ ㄉㄡ ㄉㄡ ㄈㄥ.',
            pinyin: 'wo3 chang2 chang2 qi2 ji1 che1 dou1 dou1 feng1.',
            translation: '私はよくモーターバイクでドライブします。'
          },
          {
            word: '機車',
            sentence: '我想拿到機車的駕駛執照。',
            bopomofo: 'ㄨㄛˇ ㄒㄧㄤˇ ㄋㄚˊ ㄉㄠˋ ㄐㄧ ㄔㄜ ㄉㄜ˙ ㄐㄧㄚˋ ㄕˇ ㄓˊ ㄓㄠˋ.',
            pinyin: 'wo3 xiang3 na2 dao4 ji1 che1 de jia4 shi3 zhi2 zhao4.',
            translation: '私はモーターバイクの免許を取りたいです。'
          },
          {
            word: '載',
            sentence: '朋友開車載我去學校。',
            bopomofo: 'ㄆㄥˊ ㄧㄡˇ ㄎㄞ ㄔㄜ ㄗㄞˋ ㄨㄛˇ ㄑㄩˋ ㄒㄩㄝˊ ㄒㄧㄠˋ.',
            pinyin: 'peng2 you3 kai1 che1 zai4 wo3 qu4 xue2 xiao4.',
            translation: '友達は学校まで私を車に乗せて行ってくれました。'
          },
          {
            word: '捷運',
            sentence: '坐捷運的時候， 用悠遊卡很方便。',
            bopomofo: 'ㄗㄨㄛˋ ㄐㄧㄝˊ ㄩㄣˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ， ㄩㄥˋ ㄧㄡ ㄧㄡˊ ㄎㄚˇ ㄏㄣˇ ㄈㄤ ㄅㄧㄢˋ.',
            pinyin: 'zuo4 jie2 yun4 de shi2 hou4, yong4 you1 you2 ka3 hen3 fang1 bian4.',
            translation: 'MRTに乗る時は、 悠遊カードが便利です。'
          },
          {
            word: '比',
            sentence: '走這條路比走那條路快嗎?',
            bopomofo: 'ㄗㄡˇ ㄓㄜˋ ㄊㄧㄠˊ ㄌㄨˋ ㄅㄧˇ ㄗㄡˇ ㄋㄚˋ ㄊㄧㄠˊ ㄌㄨˋ ㄎㄨㄞˋ ㄇㄚ˙?',
            pinyin: 'zou3 zhe4 tiao2 lu4 bi3 zou3 na4 tiao2 lu4 kuai4 ma2?',
            translation: 'この道を行くより、あの道を行った方が早いですか？'
          },
          {
            word: '故宮博物院',
            sentence: '他還沒參觀故宮博物院。',
            bopomofo: 'ㄊㄚ ㄏㄞˊ ㄇㄟˊ ㄘㄢ ㄍㄨㄢ ㄍㄨˋ ㄍㄨㄥ ㄅㄛˊ ㄨˋ ㄩㄢˋ.',
            pinyin: 'ta1 hai2 mei2 can1 guan1 gu4 gong1 bo2 wu4 yuan4.',
            translation: '彼はまだ宮殿博物館を訪れていません。'
          },
          {
            word: '中國',
            sentence: '動物園裡有中國熊貓。',
            bopomofo: 'ㄉㄨㄥˋ ㄨˋ ㄩㄢˊ ㄌㄧˇ ㄧㄡˇ ㄓㄨㄥ ㄍㄨㄛˊ ㄒㄩㄥˊ ㄇㄠ.',
            pinyin: 'dong4 wu4 yuan2 li3 you3 zhong1 guo2 xiong2 mao1.',
            translation: '動物園には中国から来たパンダがいます。'
          },
          {
            word: '公共汽車',
            sentence: '公共汽車按時到達。',
            bopomofo: 'ㄍㄨㄥ ㄍㄨㄥˋ ㄑㄧˋ ㄔㄜ ㄢˋ ㄕˊ ㄉㄠˋ ㄉㄚˊ.',
            pinyin: 'gong1 gong4 qi4 che1 an4 shi2 dao4 da2.',
            translation: 'バスは時間通りに到着します。'
          },
          {
            word: '不行',
            sentence: '我們可以去買什麼酒嗎? 不行， 商店已經關門了。',
            bopomofo: 'ㄨㄛˇ ㄇㄣ˙ ㄎㄜˇ ㄧˇ ㄑㄩˋ ㄇㄞˇ ㄕㄣˊ ㄇㄜ˙ ㄐㄧㄡˇ ㄇㄚ˙? ㄅㄨˋ ㄒㄧㄥˊ， ㄕㄤ ㄉㄧㄢˋ ㄧˇ ㄐㄧㄥ ㄍㄨㄢ ㄇㄣˊ ㄌㄜ˙.',
            pinyin: 'wo3 men ke3 yi3 qu4 mai3 shen2 me jiu3 ma2? bu4 xing2, shang1 dian4 yi3 jing1 guan1 men2 le.',
            translation: '何かお酒を買いに行けますか? いいえ、店は既に閉まりました。'
          },
          {
            word: '計程車',
            sentence: '如果坐計程車去，大概需要兩百元。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄗㄨㄛˋ ㄐㄧˋ ㄔㄥˊ ㄔㄜ ㄑㄩˋ， ㄉㄚˋ ㄍㄞˋ ㄒㄩ ㄧㄠˋ ㄌㄧㄤˇ ㄅㄞˇ ㄩㄢˊ.',
            pinyin: 'ru2 guo3 zuo4 ji4 cheng2 che1 qu4, da4 gai4 xu1 yao4 liang3 bai3 yuan2.',
            translation: 'タクシーで行くと約200元かかります。'
          },
          {
            word: '差不多',
            sentence: '這家店跟網路上的價格差不多。',
            bopomofo: 'ㄓㄜˋ ㄐㄧㄚ ㄉㄧㄢˋ ㄍㄣ ㄨㄤˇ ㄌㄨ ㄕㄤˋ ㄉㄜ˙ ㄐㄧㄚˋ ㄍㄜˊ ㄔㄚ ㄅㄨ˙ ㄉㄨㄛ.',
            pinyin: 'zhe4 jia1 dian4 gen1 wang3 lu4 shang4 de jia4 ge2 cha1 bu5 duo1.',
            translation: 'この店の価格はインターネットとほとんど同じです。'
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
