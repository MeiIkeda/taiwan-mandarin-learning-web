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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第1章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第1章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      data: {
        title: '當代中文課程課3・第1章',
        words: [
          {
            word: '安德思',
            sentence: '安德思兩轉機來到台灣了。',
            bopomofo: 'ㄢ ㄉㄜˊ ㄙ ㄌㄧㄤˇ ㄓㄨㄢˇ ㄐㄧ ㄌㄞˊ ㄉㄠˋ ㄊㄞˊ ㄨㄢ ㄌㄜ˙.',
            pinyin: 'an1 de2 si1 liang3 zhuan3 ji1 lai2 dao4 tai2 wan1 le.',
            translation: '安德思は二回乗り継ぎして台湾に来ました。',
            memo: ''
          },
          {
            word: '羅珊蒂',
            sentence: '羅珊蒂的口音是好像台灣人的。',
            bopomofo: 'ㄌㄨㄛˊ ㄕㄢ ㄉㄧˋ ㄉㄜ˙ ㄎㄡˇ ㄧㄣ ㄕˋ ㄏㄠˇ ㄒㄧㄤˋ ㄊㄞˊ ㄨㄢ ㄖㄣˊ ㄉㄜ˙.',
            pinyin: 'luo2 shan1 di4 de kou3 yin1 shi4 hao3 xiang4 tai2 wan1 ren2 de.',
            translation: '羅珊蒂のアクセントは台湾人みたいです。',
            memo: ''
          },
          {
            word: '何雅婷',
            sentence: '何雅婷這幾天一直在加班, 有一點累了。',
            bopomofo: 'ㄏㄜˊ ㄧㄚˇ ㄊㄧㄥˊ ㄓㄜˋ ㄐㄧˇ ㄊㄧㄢ ㄧ ㄓˊ ㄗㄞˋ ㄐㄧㄚ ㄅㄢ, ㄧㄡˇ ㄧˋ ㄉㄧㄢˇ ㄌㄟˋ ㄌㄜ˙.',
            pinyin: 'he2 ya3 ting2 zhe4 ji3 tian1 yi1 zhi2 zai4 jia1 ban1, you3 yi1 dian3 lei4 le.',
            translation: '何雅婷はこのところ残業続きで少し疲れています。',
            memo: ''
          },
          {
            word: '開學',
            sentence: '我得到開學買好文具, 我怕來不及。',
            bopomofo: 'ㄨㄛˇ ㄉㄟˇ ㄉㄠˋ ㄎㄞ ㄒㄩㄝˊ ㄇㄞˇ ㄏㄠˇ ㄨㄣˊ ㄐㄩˋ, ㄨㄛˇ ㄆㄚˋ ㄌㄞˊ ㄅㄨˋ ㄐㄧˊ.',
            pinyin: 'wo3 dei3 dao4 kai1 xue2 mai3 hao3 wen2 ju4, wo3 pa4 lai2 bu4 ji2.',
            translation: '学校が始まるまでに文房具を買い揃えなければいけないのですが、 間に合わないのではないかと心配しています。',
            memo: ''
          },
          {
            word: '班',
            sentence: '學生都想進入水平更高的班， 所以大家很努力學習。',
            bopomofo: 'ㄒㄩㄝˊ ㄕㄥ ㄉㄡ ㄒㄧㄤˇ ㄐㄧㄣˋ ㄖㄨˋ ㄕㄨㄟˇ ㄆㄧㄥˊ ㄍㄥˋ ㄍㄠ ㄉㄜ˙ ㄅㄢ, ㄙㄨㄛˇ ㄧˇ ㄉㄚˋ ㄐㄧㄚ ㄏㄣˇ ㄋㄨˇ ㄌㄧˋ ㄒㄩㄝˊ ㄒㄧˊ.',
            pinyin: 'xue2 sheng1 dou1 xiang3 jin4 ru4 shui3 ping2 geng4 gao1 de ban1, suo3 yi3 da4 jia1 hen3 nu3 li4 xue2 xi2.',
            translation: '学生はみんなレベルが更に高いクラスに入りたいので、 頑張って勉強します。',
            memo: ''
          },
          {
            word: '新生',
            sentence: '新生什麼都不知道, 請你溫柔地教。',
            bopomofo: 'ㄒㄧㄣ ㄕㄥ ㄕㄣˊ ㄇㄜ˙ ㄉㄡ ㄅㄨˋ ㄓ ㄉㄠˋ, ㄑㄧㄥˇ ㄋㄧˇ ㄨㄣ ㄖㄡˊ ㄉㄜ˙ ㄐㄧㄠ.',
            pinyin: 'xin1 sheng1 shen2 me dou1 bu4 zhi1 dao4, qing3 ni3 wen1 rou2 de jiao1.',
            translation: '新入生は何も分からないので、 優しく教えてあげてください。',
            memo: ''
          },
          {
            word: '嚴',
            sentence: '老師太嚴得學生都在第一天就逃跑了。',
            bopomofo: 'ㄌㄠˇ ㄕ ㄊㄞˋ ㄧㄢˊ ㄉㄜ˙ ㄒㄩㄝˊ ㄕㄥ ㄉㄡ ㄗㄞˋ ㄉㄧˋ ㄧˋ ㄊㄧㄢ ㄐㄧㄡˋ ㄊㄠˊ ㄆㄠˇ ㄌㄜ˙.',
            pinyin: 'lao3 shi1 tai4 yan2 de xue2 sheng1 dou1 zai4 di4 yi1 tian1 jiu4 tao2 pao3 le.',
            translation: '先生が厳しすぎたので、 生徒は初日に全員が逃げてしまいました。',
            memo: ''
          },
          {
            word: '口試',
            sentence: '她不擅長讀寫， 但是她對口試充滿信心。',
            bopomofo: 'ㄊㄚ ㄅㄨˊ ㄕㄢˋ ㄔㄤˊ ㄉㄨˊ ㄒㄧㄝˇ, ㄉㄢˋ ㄕˋ ㄊㄚ ㄉㄨㄟˋ ㄎㄡˇ ㄕˋ ㄔㄨㄥ ㄇㄢˇ ㄒㄧㄣˋ ㄒㄧㄣ.',
            pinyin: 'ta1 bu2 shan4 chang2 du2 xie3, dan4 shi4 ta1 dui4 kou3 shi4 chong1 man3 xin4 xin1.',
            translation: '彼女は読み書きが苦手ですが、 口頭試験なら自信があります。',
            memo: ''
          },
          {
            word: '筆試',
            sentence: '筆試的時侯一直流鼻血, 完全不能集中精神了。',
            bopomofo: 'ㄅㄧˇ ㄕˋ ㄉㄜ˙ ㄕˊ ㄏㄡˊ ㄧ ㄓˊ ㄌㄧㄡˊ ㄅㄧˊ ㄒㄧㄝˇ, ㄨㄢˊ ㄑㄩㄢˊ ㄅㄨˋ ㄋㄥˊ ㄐㄧˊ ㄓㄨㄥ ㄐㄧㄥ ㄕㄣˊ ㄌㄜ˙.',
            pinyin: 'bi3 shi4 de shi2 hou4 yi1 zhi2 liu2 bi2 xie3, wan2 quan2 bu4 neng2 ji2 zhong1 jing1 shen2 le.',
            translation: '筆記試験の時ずっと鼻血が出ていたせいで、 全く集中できませんでした。',
            memo: ''
          },
          {
            word: '以外',
            sentence: '八角以外， 我可以吃差不多什麼食物。',
            bopomofo: 'ㄅㄚ ㄐㄧㄠˇ ㄧˇ ㄨㄞˋ, ㄨㄛˇ ㄎㄜˇ ㄧˇ ㄔ ㄔㄚ ㄅㄨˋ ㄉㄨㄛ ㄕㄣˊ ㄇㄜ˙ ㄕˊ ㄨˋ.',
            pinyin: 'ba1 jiao3 yi3 wai4, wo3 ke3 yi3 chi1 cha1 bu4 duo1 shen2 me shi2 wu4.',
            translation: '八角以外なら、 ほとんど何でも食べられます。',
            memo: ''
          },
          {
            word: '口頭',
            sentence: '部下完全忘記了老闆口頭講的內容。',
            bopomofo: 'ㄅㄨˋ ㄒㄧㄚˋ ㄨㄢˊ ㄑㄩㄢˊ ㄨㄤˋ ㄐㄧˋ ㄌㄜ˙ ㄌㄠˇ ㄅㄢˇ ㄎㄡˇ ㄊㄡˊ ㄐㄧㄤˇ ㄉㄜ˙ ㄋㄟˋ ㄖㄨㄥˊ.',
            pinyin: 'bu4 xia4 wan2 quan2 wang4 ji4 le lao3 ban3 kou3 tou2 jiang3 de nei4 rong2.',
            translation: '部下は、 上司が口頭で伝えた内容をすっかり忘れてしまいました。',
            memo: ''
          },
          {
            word: '報告',
            sentence: '如果有什麼不同尋常， 請你做報告。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄧㄡˇ ㄕㄣˊ ㄇㄜ˙ ㄅㄨˋ ㄊㄨㄥˊ ㄒㄩㄣˊ ㄔㄤˊ, ㄑㄧㄥˇ ㄋㄧˇ ㄗㄨㄛˋ ㄅㄠˋ ㄍㄠˋ.',
            pinyin: 'ru2 guo3 you3 shen2 me bu4 tong2 xun2 chang2, qing3 ni3 zuo4 bao4 gao4.',
            translation: '何か異常があれば、 報告してください。',
            memo: ''
          },
          {
            word: '壓力',
            sentence: '老闆對他非常期待， 他感到有些壓力。',
            bopomofo: 'ㄌㄠˇ ㄅㄢˇ ㄉㄨㄟˋ ㄊㄚ ㄈㄟ ㄔㄤˊ ㄑㄧ ㄉㄞˋ, ㄊㄚ ㄍㄢˇ ㄉㄠˋ ㄧㄡˇ ㄒㄧㄝ ㄧㄚ ㄌㄧˋ.',
            pinyin: 'lao3 ban3 dui4 ta1 fei1 chang2 qi1 dai4, ta1 gan3 dao4 you3 xie1 ya1 li4.',
            translation: '上司は彼にとても期待しているので、 彼は少しプレッシャーを感じています。',
            memo: ''
          },
          {
            word: '說明',
            sentence: '對如何進行工作沒有什麼說明， 所以我在網路上檢查自己想方法。',
            bopomofo: 'ㄉㄨㄟˋ ㄖㄨˊ ㄏㄜˊ ㄐㄧㄣˋ ㄒㄧㄥˊ ㄍㄨㄥ ㄗㄨㄛˋ ㄇㄟˊ ㄧㄡˇ ㄕㄣˊ ㄇㄜ˙ ㄕㄨㄛ ㄇㄧㄥˊ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄗㄞˋ ㄨㄤˇ ㄌㄨˋ ㄕㄤˋ ㄐㄧㄢˇ ㄔㄚˊ ㄗˋ ㄐㄧˇ ㄒㄧㄤˇ ㄈㄤ ㄈㄚˇ.',
            pinyin: 'dui4 ru2 he2 jin4 xing2 gong1 zuo4 mei2 you3 shen2 me shuo1 ming2, suo3 yi3 wo3 zai4 wang3 lu4 shang4 jian3 cha2 zi4 ji3 xiang3 fang1 fa3.',
            translation: '仕事の進め方について何も説明が無いので、 ネットで調べて自分で何とかします。',
            memo: ''
          },
          {
            word: '清楚',
            sentence: '貓的好惡很清楚， 如果牠咬你應該放棄抱牠。',
            bopomofo: 'ㄇㄠ ㄉㄜ˙ ㄏㄠˋ ㄨˋ ㄏㄣˇ ㄑㄧㄥ ㄔㄨˇ, ㄖㄨˊ ㄍㄨㄛˇ ㄊㄚ ㄧㄠˇ ㄋㄧˇ ㄧㄥ ㄍㄞ ㄈㄤˋ ㄑㄧˋ ㄅㄠˋ ㄊㄚ.',
            pinyin: 'mao1 de hao3 wu4 hen3 qing1 chu3, ru2 guo3 ta1 yao3 ni3 ying1 gai1 fang4 qi4 bao4 ta1.',
            translation: '猫の好き嫌いははっきりしているので、 もしあなたを咬むようなら抱っこは諦めた方がいいですよ。',
            memo: ''
          },
          {
            word: '位子',
            sentence: '在電影館我們先找位子， 然後再去買爆米花吧。',
            bopomofo: 'ㄗㄞˋ ㄉㄧㄢˋ ㄧㄥˇ ㄍㄨㄢˇ ㄨㄛˇ ㄇㄣ˙ ㄒㄧㄢ ㄓㄠˇ ㄨㄟˋ ㄗ˙, ㄖㄢˊ ㄏㄡˋ ㄗㄞˋ ㄑㄩˋ ㄇㄞˇ ㄅㄠˋ ㄇㄧˇ ㄏㄨㄚ ㄅㄚ˙.',
            pinyin: 'zai4 dian4 ying3 guan3 wo3 men xian1 zhao3 wei4 zi, ran2 hou4 zai4 qu4 mai3 bao4 mi3 hua1 ba.',
            translation: '映画館ではまず席を見つけて、 それからポップコーンを買いに行きましょう。',
            memo: ''
          },
          {
            word: '旁聽',
            sentence: '他是文學系的學生， 但是常常來數學科的課旁聽。',
            bopomofo: 'ㄊㄚ ㄕˋ ㄨㄣˊ ㄒㄩㄝˊ ㄒㄧˋ ㄉㄜ˙ ㄒㄩㄝˊ ㄕㄥ, ㄉㄢˋ ㄕˋ ㄔㄤˊ ㄔㄤˊ ㄌㄞˊ ㄕㄨˋ ㄒㄩㄝˊ ㄎㄜ ㄉㄜ˙ ㄎㄜˋ ㄆㄤˊ ㄊㄧㄥ.',
            pinyin: 'ta1 shi4 wen2 xue2 xi4 de xue2 sheng1, dan4 shi4 chang2 chang2 lai2 shu4 xue2 ke1 de ke4 pang2 ting1.',
            translation: '彼は文学部の学生ですが、 数学科の授業にもよく聴講しに来ます。',
            memo: ''
          },
          {
            word: '分',
            sentence: '可能是我的錯覺， 但是答題紙上的數字看起來零分。',
            bopomofo: 'ㄎㄜˇ ㄋㄥˊ ㄕˋ ㄨㄛˇ ㄉㄜ˙ ㄘㄨㄛˋ ㄐㄩㄝˊ, ㄉㄢˋ ㄕˋ ㄉㄚˊ ㄊㄧˊ ㄓˇ ㄕㄤˋ ㄉㄜ˙ ㄕㄨˋ ㄗˋ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄌㄧㄥˊ ㄈㄣ.',
            pinyin: 'ke3 neng2 shi4 wo3 de cuo4 jue2, dan4 shi4 da2 ti2 zhi3 shang4 de shu4 zi4 kan4 qi3 lai2 ling2 fen1.',
            translation: '私の錯覚かもしれませんが、 答案用紙の数字は零点と書いてあるように見えます。',
            memo: ''
          },
          {
            word: '羡慕',
            sentence: '蓬蓬的貓爬上朋友的腿上， 我羡慕死了。',
            bopomofo: 'ㄆㄥˊ ㄆㄥˊ ㄉㄜ˙ ㄇㄠ ㄆㄚˊ ㄕㄤˋ ㄆㄥˊ ㄧㄡˇ ㄉㄜ˙ ㄊㄨㄟˇ ㄕㄤˋ, ㄨㄛˇ ㄒㄧㄢˋ ㄇㄨˋ ㄙˇ ㄌㄜ˙.',
            pinyin: 'peng2 peng2 de mao1 pa2 shang4 peng2 you3 de tui3 shang4, wo3 xian4 mu4 si3 le.',
            translation: 'ふわふわな猫が友達の膝の上に乗ったので、 羨ましすぎて死にそうでした。',
            memo: ''
          },
          {
            word: '休學',
            sentence: '我在苦惱是否要休學去國外學習。',
            bopomofo: 'ㄨㄛˇ ㄗㄞˋ ㄎㄨˇ ㄋㄠˇ ㄕˋ ㄈㄡˇ ㄧㄠˋ ㄒㄧㄡ ㄒㄩㄝˊ ㄑㄩˋ ㄍㄨㄛˊ ㄨㄞˋ ㄒㄩㄝˊ ㄒㄧˊ.',
            pinyin: 'wo3 zai4 ku3 nao3 shi4 fou3 yao4 xiu1 xue2 qu4 guo2 wai4 xue2 xi2.',
            translation: '留学のために休学するかどうかで悩んでいます。',
            memo: ''
          },
          {
            word: '用功',
            sentence: '他太用功學習， 所以燒成灰了也很快。',
            bopomofo: 'ㄊㄚ ㄊㄞˋ ㄩㄥˋ ㄍㄨㄥ ㄒㄩㄝˊ ㄒㄧˊ, ㄙㄨㄛˇ ㄧˇ ㄕㄠ ㄔㄥˊ ㄏㄨㄟ ㄌㄜ˙ ㄧㄝˇ ㄏㄣˇ ㄎㄨㄞˋ.',
            pinyin: 'ta1 tai4 yong4 gong1 xue2 xi2, suo3 yi3 shao1 cheng2 hui1 le ye3 hen3 kuai4.',
            translation: '彼は真面目に勉強し過ぎるので、 燃え尽きるのも早いです。',
            memo: ''
          },
          {
            word: '行',
            sentence: '把甜甜的東西放進小火鍋真不行。',
            bopomofo: 'ㄅㄚˇ ㄊㄧㄢˊ ㄊㄧㄢˊ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ ㄈㄤˋ ㄐㄧㄣˋ ㄒㄧㄠˇ ㄏㄨㄛˇ ㄍㄨㄛ ㄓㄣ ㄅㄨˋ ㄒㄧㄥˊ.',
            pinyin: 'ba3 tian2 tian2 de dong1 xi fang4 jin4 xiao3 huo3 guo1 zhen1 bu4 xing2.',
            translation: '甘いものを鍋に入れるのは絶対にだめです。',
            memo: ''
          },
          {
            word: '轉',
            sentence: '她想轉到完全不同的部門, 一定會很辛苦的。',
            bopomofo: 'ㄊㄚ ㄒㄧㄤˇ ㄓㄨㄢˇ ㄉㄠˋ ㄨㄢˊ ㄑㄩㄢˊ ㄅㄨˋ ㄊㄨㄥˊ ㄉㄜ˙ ㄅㄨˋ ㄇㄣˊ, ㄧˊ ㄉㄧㄥˋ ㄏㄨㄟˋ ㄏㄣˇ ㄒㄧㄣ ㄎㄨˇ ㄉㄜ˙.',
            pinyin: 'ta1 xiang3 zhuan3 dao4 wan2 quan2 bu4 tong2 de bu4 men2, yi1 ding4 hui4 hen3 xin1 ku3 de.',
            translation: '彼女は全く違う学科に専攻を変えたいと思っているので、 間違いなく苦労します。',
            memo: ''
          },
          {
            word: '原來',
            sentence: '他原來不太喜歡有毛的動物， 現在很迷上貓。',
            bopomofo: 'ㄊㄚ ㄩㄢˊ ㄌㄞˊ ㄅㄨˊ ㄊㄞˋ ㄒㄧˇ ㄏㄨㄢ ㄧㄡˇ ㄇㄠˊ ㄉㄜ˙ ㄉㄨㄥˋ ㄨˋ, ㄒㄧㄢˋ ㄗㄞˋ ㄏㄣˇ ㄇㄧˊ ㄕㄤˋ ㄇㄠ.',
            pinyin: 'ta1 yuan2 lai2 bu2 tai4 xi3 huan1 you3 mao2 de dong4 wu4, xian4 zai4 hen3 mi2 shang4 mao1.',
            translation: '彼は元々毛のある動物はあまり好きではなかったのですが、 今では猫に夢中です。',
            memo: ''
          },
          {
            word: '會計',
            sentence: '如果你取得會計資格， 找到工作不會很難。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄑㄩˇ ㄉㄜˊ ㄎㄨㄞˋ ㄐㄧˋ ㄗ ㄍㄜˊ, ㄓㄠˇ ㄉㄠˋ ㄍㄨㄥ ㄗㄨㄛˋ ㄅㄨˊ ㄏㄨㄟˋ ㄏㄣˇ ㄋㄢˊ.',
            pinyin: 'ru2 guo3 ni3 qu3 de2 kuai4 ji4 zi1 ge2, zhao3 dao4 gong1 zuo4 bu2 hui4 hen3 nan2.',
            translation: '会計の資格を取れば、 仕事探しには困りませんよ。',
            memo: ''
          },
          {
            word: '熱門',
            sentence: '那個牌子的口紅很熱門， 甚至在發賣日買不到。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄆㄞˊ ㄗ˙ ㄉㄜ˙ ㄎㄡˇ ㄏㄨㄥˊ ㄏㄣˇ ㄖㄜˋ ㄇㄣˊ, ㄕㄣˋ ㄓˋ ㄗㄞˋ ㄈㄚ ㄇㄞˋ ㄖˋ ㄇㄞˇ ㄅㄨˊ ㄉㄠˋ.',
            pinyin: 'na4 ge4 pai2 zi de kou3 hong2 hen3 re4 men2, shen4 zhi4 zai4 fa1 mai4 ri4 mai3 bu2 dao4.',
            translation: 'そのブランドの口紅はとても人気なので、 発売日ですら買う事ができません。',
            memo: ''
          },
          {
            word: '熬夜',
            sentence: '我能熬夜繼續談貓的可愛程度。',
            bopomofo: 'ㄨㄛˇ ㄋㄥˊ ㄠˊ ㄧㄝˋ ㄐㄧˋ ㄒㄩˋ ㄊㄢˊ ㄇㄠ ㄉㄜ˙ ㄎㄜˇ ㄞˋ ㄔㄥˊ ㄉㄨˋ.',
            pinyin: 'wo3 neng2 ao2 ye4 ji4 xu4 tan2 mao1 de ke3 ai4 cheng2 du4.',
            translation: '私は夜遅くまで猫の可愛さを語り続けることができます。',
            memo: ''
          },
          {
            word: '當',
            sentence: '他每天一直玩， 所以被當很自然。',
            bopomofo: 'ㄊㄚ ㄇㄟˇ ㄊㄧㄢ ㄧ ㄓˊ ㄨㄢˊ, ㄙㄨㄛˇ ㄧˇ ㄅㄟˋ ㄉㄤ ㄏㄣˇ ㄗˋ ㄖㄢˊ.',
            pinyin: 'ta1 mei3 tian1 yi1 zhi2 wan2, suo3 yi3 bei4 dang1 hen3 zi4 ran2.',
            translation: '彼は毎日遊んでばかりいるので、 落第するのも当然です。',
            memo: ''
          },
          {
            word: '恐怕',
            sentence: '我恐怕從那家餐廳的菜單我喜歡的拉麵會沒了。',
            bopomofo: 'ㄨㄛˇ ㄎㄨㄥˇ ㄆㄚˋ ㄘㄨㄥˊ ㄋㄚˋ ㄐㄧㄚ ㄘㄢ ㄊㄧㄥ　ㄉㄜ˙ ㄘㄞˋ ㄉㄢ ㄨㄛˇ ㄒㄧˇ ㄏㄨㄢ ㄉㄜ˙ ㄌㄚ ㄇㄧㄢˋ ㄏㄨㄟˋ ㄇㄟˊ ㄌㄜ˙.',
            pinyin: 'wo3 kong3 pa4 cong2 na4 jia1 can1 ting1 de cai4 dan1 wo3 xi3 huan1 de la1 mian4 hui4 mei2 le.',
            translation: 'あのレストランのメニューから、 私の好物のラーメンが無くなるのではないかと恐れています。',
            memo: ''
          },
          {
            word: '口才',
            sentence: '如果你學會怎麼打幫腔， 你的口才聽起來進步了。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄒㄩㄝˊ ㄏㄨㄟˋ ㄗㄣˇ ㄇㄜ˙ ㄉㄚˇ ㄅㄤ ㄑㄧㄤ, ㄋㄧˇ ㄉㄜ˙ ㄎㄡˇ ㄘㄞˊ ㄊㄧㄥ ㄑㄧˇ ㄌㄞˊ ㄐㄧㄣˋ ㄅㄨˋ ㄌㄜ˙.',
            pinyin: 'ru2 guo3 ni3 xue2 hui4 zen3 me da3 bang1 qiang1, ni3 de kou3 cai2 ting1 qi3 lai2 jin4 bu4 le.',
            translation: '相槌の打ち方を覚えれば、 スピーキングスキルが向上したように聞こえますよ。',
            memo: ''
          },
          {
            word: '事',
            sentence: '他的兒子贏得了網球比賽的事， 他很感到驕傲。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄦˊ ㄗ˙ ㄧㄥˊ ㄉㄜˊ ㄌㄜ˙ ㄨㄤˇ ㄑㄧㄡˊ ㄅㄧˇ ㄙㄞˋ ㄉㄜ˙ ㄕˋ, ㄊㄚ ㄏㄣˇ ㄍㄢˇ ㄉㄠˋ ㄐㄧㄠ ㄠˋ.',
            pinyin: 'ta1 de er2 zi ying2 de2 le wang3 qiu2 bi3 sai4 de shi4, ta1 hen3 gan3 dao4 jiao1 ao4.',
            translation: '息子がテニスの大会で優勝したことを、 彼はとても誇りに思っています。',
            memo: ''
          },
          {
            word: '遲到',
            sentence: '她總是很慢地走路， 所以常常遲到上班。',
            bopomofo: 'ㄊㄚ ㄗㄨㄥˇ ㄕˋ ㄏㄣˇ ㄇㄢˋ ㄉㄜ˙ ㄗㄡˇ ㄌㄨˋ, ㄙㄨㄛˇ ㄧˇ ㄔㄤˊ ㄔㄤˊ ㄔˊ ㄉㄠˋ ㄕㄤˋ ㄅㄢ.',
            pinyin: 'ta1 zong3 shi4 hen3 man4 de zou3 lu4, suo3 yi3 chang2 chang2 chi2 dao4 shang4 ban1.',
            translation: '彼女はいつもとてもゆっくり歩くので、 仕事に遅れてくることがよくあります。',
            memo: ''
          },
          {
            word: '差一點',
            sentence: '那隻貓喝牛奶喝得很笨拙, 差一點灑。',
            bopomofo: 'ㄋㄚˋ ㄓˇ ㄇㄠ ㄏㄜ ㄋㄧㄡˊ ㄋㄞˇ ㄏㄜ ㄉㄜ˙ ㄏㄣˇ ㄅㄣˋ ㄓㄨㄛ, ㄔㄚˋ ㄧˋ ㄉㄧㄢˇ ㄙㄚˇ.',
            pinyin: 'na4 zhi3 mao1 he1 niu2 nai3 he1 de hen3 ben4 zhuo1, cha4 yi4 dian3 sa3.',
            translation: 'あの猫はミルクの飲み方が不器用なので、 ほとんど全部こぼしてしまっています。',
            memo: ''
          },
          {
            word: '這樣下去',
            sentence: '你的吃法都沒有禮貌， 這樣下去我不會再跟你一起吃飯。',
            bopomofo: 'ㄋㄧˇ ㄉㄜ˙ ㄔ ㄈㄚˇ ㄉㄡ ㄇㄟˊ ㄧㄡˇ ㄌㄧˇ ㄇㄠˋ, ㄓㄜˋ ㄧㄤˋ ㄒㄧㄚˋ ㄑㄩˋ ㄨㄛˇ ㄅㄨˊ ㄏㄨㄟˋ ㄗㄞˋ ㄍㄣ ㄋㄧˇ ㄧˋ ㄑㄧˇ ㄔ ㄈㄢˋ.',
            pinyin: 'ni3 de chi1 fa3 dou1 mei2 you3 li3 mao4, zhe4 yang4 xia4 qu4 wo3 bu2 hui4 zai4 gen1 ni3 yi1 qi3 chi1 fan4.',
            translation: 'あなたの食べ方は行儀が悪すぎるので、 これを続けるなら私は二度と一緒に食事をしませんよ。',
            memo: ''
          },
          {
            word: '沒辦法',
            sentence: '除了排長隊， 沒辦法可以在那家受歡迎的餐廳用餐。',
            bopomofo: 'ㄔㄨˊ ㄌㄜ˙ ㄆㄞˊ ㄔㄤˊ ㄉㄨㄟˋ, ㄇㄟˊ ㄅㄢˋ ㄈㄚˇ ㄎㄜˇ ㄧˇ ㄗㄞˋ ㄋㄚˋ ㄐㄧㄚ ㄕㄡˋ ㄏㄨㄢ ㄧㄥˊ ㄉㄜ˙ ㄘㄢ ㄊㄧㄥ ㄩㄥˋ ㄘㄢ.',
            pinyin: 'chu2 le pai2 chang2 dui4, mei2 ban4 fa3 ke3 yi3 zai4 na4 jia1 shou4 huan1 ying2 de can1 ting1 yong4 can1.',
            translation: '長蛇の列に並ぶ以外に、 あの人気レストランで食事をする術はありません。',
            memo: ''
          },
          {
            word: '獨生女',
            sentence: '因為她是獨生女， 跟鄰居的朋友好像姐妹一樣一起長大了。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄊㄚ ㄕˋ ㄉㄨˊ ㄕㄥ ㄋㄩˇ, ㄍㄣ ㄌㄧㄣˊ ㄐㄩ ㄉㄜ˙ ㄆㄥˊ ㄧㄡˇ ㄏㄠˇ ㄒㄧㄤˋ ㄐㄧㄝˇ ㄇㄟˋ ㄧˊ ㄧㄤˋ ㄧˋ ㄑㄧˇ ㄓㄤˇ ㄉㄚˋ ㄌㄜ˙.',
            pinyin: 'yin1 wei4 ta1 shi4 du2 sheng1 nu3, gen1 lin2 ju1 de peng2 you3 hao3 xiang4 jie3 mei4 yi1 yang4 yi1 qi3 zhang3 da4 le.',
            translation: '彼女は一人っ子だったので、 隣に住んでいる友達とまるで姉妹のように育ちました。',
            memo: ''
          },
          {
            word: '私立',
            sentence: '各私立學校都有特色， 一定得檢查一下。',
            bopomofo: 'ㄍㄜˋ ㄙ ㄌㄧˋ ㄒㄩㄝˊ ㄒㄧㄠˋ ㄉㄡ ㄧㄡˇ ㄊㄜˋ ㄙㄜˋ, ㄧˊ ㄉㄧㄥˋ ㄉㄟˇ ㄐㄧㄢˇ ㄔㄚˊ ㄧ ㄒㄧㄚˋ.',
            pinyin: 'ge4 si1 li4 xue2 xiao4 dou1 you3 te4 se4, yi1 ding4 dei3 jian3 cha2 yi1 xia4.',
            translation: '私立の学校にはそれぞれ特徴があるので、 調べる必要があります。',
            memo: ''
          },
          {
            word: '理想',
            sentence: '我的理想是住在可以看到海邊的地方。',
            bopomofo: 'ㄨㄛˇ ㄉㄜ˙ ㄌㄧˇ ㄒㄧㄤˇ ㄕˋ ㄓㄨˋ ㄗㄞˋ ㄎㄜˇ ㄧˇ ㄎㄢˋ ㄉㄠˋ ㄏㄞˇ ㄅㄧㄢ ㄉㄜ˙ ㄉㄧˋ ㄈㄤ.',
            pinyin: 'wo3 de li3 xiang3 shi4 zhu4 zai4 ke3 yi3 kan4 dao4 hai3 bian1 de di4 fang1.',
            translation: '海が見える場所に住むことが理想です。',
            memo: ''
          },
          {
            word: '合',
            sentence: '哪裡都有性格不合的人， 你不需要改變自己。',
            bopomofo: 'ㄋㄚˇ ㄌㄧˇ ㄉㄡ ㄧㄡˇ ㄒㄧㄥˋ ㄍㄜˊ ㄅㄨˋ ㄏㄜˊ ㄉㄜ˙ ㄖㄣˊ, ㄋㄧˇ ㄅㄨˋ ㄒㄩ ㄧㄠˋ ㄍㄞˇ ㄅㄧㄢˋ ㄗˋ ㄐㄧˇ.',
            pinyin: 'na3 li3 dou1 you3 xing4 ge2 bu4 he2 de ren2, ni3 bu4 xu1 yao4 gai3 bian4 zi4 ji3.',
            translation: '性格の合わない人はどこにでもいるので、 自分を変える必要はありませんよ。',
            memo: ''
          },
          {
            word: '痛苦',
            sentence: '貓正在要被洗身體， 牠的表情似乎非常痛苦。',
            bopomofo: 'ㄇㄠ ㄓㄥˋ ㄗㄞˋ ㄧㄠˋ ㄅㄟˋ ㄒㄧˇ ㄕㄣ ㄊㄧˇ, ㄊㄚ ㄉㄜ˙ ㄅㄧㄠˇ ㄑㄧㄥˊ ㄙˋ ㄏㄨ ㄈㄟ ㄔㄤˊ ㄊㄨㄥˋ ㄎㄨˇ.',
            pinyin: 'mao1 zheng4 zai4 yao4 bei4 xi3 shen1 ti3, ta1 de biao3 qing2 si4 hu1 fei1 chang2 tong4 ku3.',
            translation: '猫は今まさにお風呂に入れられるところで、 とても辛そうな表情をしています。',
            memo: ''
          },
          {
            word: '科系',
            sentence: '選擇科系時你應該想一想自己的興趣和將來的計畫。',
            bopomofo: 'ㄒㄩㄢˇ ㄗㄜˊ ㄎㄜ ㄒㄧˋ ㄕˊ ㄋㄧˇ ㄧㄥ ㄍㄞ ㄒㄧㄤˇ ㄧ ㄒㄧㄤˇ ㄗˋ ㄐㄧˇ ㄉㄜ˙ ㄒㄧㄥˋ ㄑㄩˋ ㄏㄢˇ ㄐㄧㄤ ㄌㄞˊ ㄉㄜ˙ ㄐㄧˋ ㄏㄨㄚˋ.',
            pinyin: 'xuan3 ze2 ke1 xi4 shi2 ni3 ying1 gai1 xiang3 yi1 xiang3 zi4 ji3 de xing4 qu4 han4 jiang1 lai2 de ji4 hua4.',
            translation: '学科を選ぶときは、 自身の興味と将来設計について考えた方がいいですよ。',
            memo: ''
          },
          {
            word: '放棄',
            sentence: '因為媽媽反對了， 我哭著放棄了帶貓去散步。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄇㄚ ㄇㄚ ㄈㄢˇ ㄉㄨㄟˋ ㄌㄜ˙, ㄨㄛˇ ㄎㄨ ㄓㄜ˙ ㄈㄤˋ ㄑㄧˋ ㄌㄜ˙ ㄉㄞˋ ㄇㄠ ㄑㄩˋ ㄙㄢˋ ㄅㄨˋ.',
            pinyin: 'yin1 wei4 ma1 ma1 fan3 dui4 le, wo3 ku1 zhe fang4 qi4 le dai4 mao1 qu4 san4 bu4.',
            translation: 'お母さんが反対したので、 私は泣く泣く猫を散歩に連れて行く事を諦めました。',
            memo: ''
          },
          {
            word: '不管',
            sentence: '不管非常冷的天氣， 孩子們在穿短袖的衣服。',
            bopomofo: 'ㄅㄨˋ ㄍㄨㄢˇ ㄈㄟ ㄔㄤˊ ㄌㄥˇ ㄉㄜ˙ ㄊㄧㄢ ㄑㄧˋ, ㄏㄞˊ ㄗ˙ ㄇㄣ˙ ㄗㄞˋ ㄔㄨㄢ ㄉㄨㄢˇ ㄒㄧㄡˋ ㄉㄜ˙ ㄧ ㄈㄨˊ.',
            pinyin: 'bu4 guan3 fei1 chang2 leng3 de tian1 qi4, hai2 zi men zai4 chuan1 duan3 xiu4 de yi1 fu2.',
            translation: '非常に寒い天候にもかかわらず、 子供たちは半袖の服を着ています。',
            memo: ''
          },
          {
            word: '反對',
            sentence: '我一定要反對你三天一直喝酒的計畫。',
            bopomofo: 'ㄨㄛˇ ㄧˊ ㄉㄧㄥˋ ㄧㄠˋ ㄈㄢˇ ㄉㄨㄟˋ ㄋㄧˇ ㄙㄢ ㄊㄧㄢ ㄧ ㄓˊ ㄏㄜ ㄐㄧㄡˇ ㄉㄜ˙ ㄐㄧˋ ㄏㄨㄚˋ.',
            pinyin: 'wo3 yi1 ding4 yao4 fan3 dui4 ni3 san1 tian1 yi1 zhi2 he1 jiu3 de ji4 hua4.',
            translation: 'あなたの3日間飲み続ける計画には絶対反対です。',
            memo: ''
          },
          {
            word: '個性',
            sentence: '她的有很懶散的個性， 所以她很少出去。',
            bopomofo: 'ㄊㄚ ㄧㄡˇ ㄏㄣˇ ㄌㄢˇ ㄙㄢˇ ㄉㄜ˙ ㄍㄜˋ ㄒㄧㄥˋ, ㄙㄨㄛˇ ㄧˇ ㄊㄚ ㄏㄣˇ ㄕㄠˇ ㄔㄨ ㄑㄩˋ.',
            pinyin: 'ta1 you3 hen3 lan3 san3 de ge4 xing4, suo3 yi3 ta1 hen3 shao3 chu1 qu4.',
            translation: '彼女はとても面倒くさがりな性格なので、 外出することは滅多にありません。',
            memo: ''
          },
          {
            word: '活潑',
            sentence: '那隻小狗很活潑， 看起來牠還是寶寶。',
            bopomofo: 'ㄋㄚˋ ㄓˇ ㄒㄧㄠˇ ㄍㄡˇ ㄏㄣˇ ㄏㄨㄛˊ ㄆㄛ, ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄊㄚ ㄏㄞˊ ㄕˋ ㄅㄠˇ ㄅㄠˇ.',
            pinyin: 'na4 zhi3 xiao3 gou3 hen3 huo2 po1, kan4 qi3 lai2 ta1 hai2 shi4 bao3 bao3.',
            translation: 'あの子犬はとても活発で、 まだ赤ちゃんのように見えます。',
            memo: ''
          },
          {
            word: '外語',
            sentence: '即使你學會外語， 如果你沒有自己的想法你不能跟人好好說話。',
            bopomofo: 'ㄐㄧˊ ㄕˇ ㄋㄧˇ ㄒㄩㄝˊ ㄏㄨㄟˋ ㄨㄞˋ ㄩˇ, ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄇㄟˊ ㄧㄡˇ ㄗˋ ㄐㄧˇ ㄉㄜ˙ ㄒㄧㄤˇ ㄈㄚˇ ㄋㄧˇ ㄅㄨˋ ㄋㄥˊ ㄍㄣ ㄖㄣˊ ㄏㄠˇ ㄏㄠˇ ㄕㄨㄛ ㄏㄨㄚˋ.',
            pinyin: 'ji2 shi3 ni3 xue2 hui4 wai4 yu3, ru2 guo3 ni3 mei2 you3 zi4 ji3 de xiang3 fa3 ni3 bu4 neng2 gen1 ren2 hao3 hao3 shuo1 hua4.',
            translation: '外国語を学んでも、 自分の考えが無ければ人とちゃんと話す事はできませんよ。',
            memo: ''
          },
          {
            word: '擔心',
            sentence: '我一個擔心的就是將來對酒類的稅會怎麼貴。',
            bopomofo: 'ㄨㄛˇ ㄧˊ ㄍㄜˋ ㄉㄢ ㄒㄧㄣ ㄉㄜ˙ ㄐㄧㄡˋ ㄕˋ ㄐㄧㄤ ㄌㄞˊ ㄉㄨㄟˋ ㄐㄧㄡˇ ㄌㄟˋ ㄉㄜ˙ ㄕㄨㄟˋ ㄏㄨㄟˋ ㄗㄣˇ ㄇㄜ˙ ㄍㄨㄟˋ.',
            pinyin: 'wo3 yi1 ge4 dan1 xin1 de jiu4 shi4 jiang1 lai2 dui4 jiu3 lei4 de shui4 hui4 zen3 me gui4.',
            translation: '私の懸念の1つは、 アルコールに対する税金が将来どれほど高くなるかということです。',
            memo: ''
          },
          {
            word: '填',
            sentence: '請您把需要的信息填這張紙。',
            bopomofo: 'ㄑㄧㄥˇ ㄋㄧㄣˊ ㄅㄚˇ ㄒㄩ ㄧㄠˋ ㄉㄜ˙ ㄒㄧㄣˋ ㄒㄧ ㄊㄧㄢˊ ㄓㄜˋ ㄓㄤ ㄓˇ.',
            pinyin: 'qing3 nin2 ba3 xu1 yao4 de xin4 xi1 tian2 zhe4 zhang1 zhi3.',
            translation: 'この紙に必要な情報を記入してください。',
            memo: ''
          },
          {
            word: '表',
            sentence: '現在的輸入表太複雜了， 你可不可以作成一個更簡單的?',
            bopomofo: 'ㄒㄧㄢˋ ㄗㄞˋ ㄉㄜ˙ ㄕㄨ ㄖㄨˋ ㄅㄧㄠˇ ㄊㄞˋ ㄈㄨˋ ㄗㄚˊ ㄌㄜ˙, ㄋㄧˇ ㄎㄜˇ ㄅㄨˋ ㄎㄜˇ ㄧˇ ㄗㄨㄛˋ ㄔㄥˊ ㄧˊ ㄍㄜˋ ㄍㄥˋ ㄐㄧㄢˇ ㄉㄢ ㄉㄜ˙?',
            pinyin: 'xian4 zai4 de shu1 ru4 biao3 tai4 fu4 za2 le, ni3 ke3 bu4 ke3 yi3 zuo4 cheng2 yi1 ge4 geng4 jian3 dan1 de?',
            translation: '今の入力フォームは複雑すぎるので、 もう少し簡単なものに作り直してもらえませんか?',
            memo: ''
          },
          {
            word: '辦',
            sentence: '我上次辦護照是快十年前， 就要得去換新的了。',
            bopomofo: 'ㄨㄛˇ ㄕㄤˋ ㄘˋ ㄅㄢˋ ㄏㄨˋ ㄓㄠˋ ㄕˋ ㄎㄨㄞˋ ㄕˊ ㄋㄧㄢˊ ㄑㄧㄢˊ, ㄐㄧㄡˋ ㄧㄠˋ ㄉㄟˇ ㄑㄩˋ ㄏㄨㄢˋ ㄒㄧㄣ ㄉㄜ˙ ㄌㄜ˙.',
            pinyin: 'wo3 shang4 ci4 ban4 hu4 zhao4 shi4 kuai4 shi2 nian2 qian2, jiu4 yao4 dei3 qu4 huan4 xin1 de le.',
            translation: '前回パスポートの取得手続きをしたのは10年近く前なので、 そろそろ新しいものに変えなくてはいけません。',
            memo: ''
          },
          {
            word: '手續',
            sentence: '我在政府辦公室辦手續的時候, 我總是試儘早去。',
            bopomofo: 'ㄨㄛˇ ㄗㄞˋ ㄓㄥˋ ㄈㄨˇ ㄅㄢˋ ㄍㄨㄥ ㄕˋ ㄅㄢˋ ㄕㄡˇ ㄒㄩˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄨㄛˇ ㄗㄨㄥˇ ㄕˋ ㄕˋ ㄐㄧㄣˋ ㄗㄠˇ ㄑㄩˋ.',
            pinyin: 'wo3 zai4 zheng4 fu3 ban4 gong1 shi4 ban4 shou3 xu4 de shi2 hou4, wo3 zong3 shi4 shi4 jin4 zao3 qu4.',
            translation: '役所で手続きをする時は、 できるだけ早い時間に行くよう心がけています。',
            memo: ''
          },
          {
            word: '申請',
            sentence: '在申請簽證的時候如果你犯錯了會有問題的, 您應該再檢查一邊。',
            bopomofo: 'ㄗㄞˋ ㄕㄣ ㄑㄧㄥˇ ㄑㄧㄢ ㄓㄥˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄈㄢˋ ㄘㄨㄛˋ ㄌㄜ˙ ㄏㄨㄟˋ ㄧㄡˇ ㄨㄣˋ ㄊㄧˊ ㄉㄜ˙, ㄋㄧㄣˊ ㄧㄥ ㄍㄞ ㄗㄞˋ ㄐㄧㄢˇ ㄔㄚˊ ㄧ ㄅㄧㄢ.',
            pinyin: 'zai4 shen1 qing3 qian1 zheng4 de shi2 hou4 ru2 guo3 ni3 fan4 cuo4 le hui4 you3 wen4 ti2 de, nin2 ying1 gai1 zai4 jian3 cha2 yi1 bian1.',
            translation: 'ビザの申請をする時は間違えると大変なので、 もう一度チェックして下さい。',
            memo: ''
          },
          {
            word: '成績單',
            sentence: '因為弟弟玩笑地把我的成績單貼在牆上， 被媽媽發現了。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄉㄧˋ ㄉㄧ˙ ㄨㄢˊ ㄒㄧㄠˋ ㄉㄜ˙ ㄅㄚˇ ㄨㄛˇ ㄉㄜ˙ ㄔㄥˊ ㄐㄧ ㄉㄢ ㄊㄧㄝ ㄗㄞˋ ㄑㄧㄤˊ ㄕㄤˋ, ㄅㄟˋ ㄇㄚ ㄇㄚ ㄈㄚ ㄒㄧㄢˋ ㄌㄜ˙.',
            pinyin: 'yin1 wei4 di4 di4 wan2 xiao4 de ba3 wo3 de cheng2 ji4 dan1 tie1 zai4 qiang2 shang4, bei4 ma1 ma1 fa1 xian4 le.',
            translation: '弟がふざけて私の成績表を壁に貼ったので、 お母さんに見つかってしまいました。',
            memo: ''
          },
          {
            word: '考上',
            sentence: '半年後我得考上重要的資格， 現在沒有時間玩。',
            bopomofo: 'ㄅㄢˋ ㄋㄧㄢˊ ㄏㄡˋ ㄨㄛˇ ㄉㄟˇ ㄎㄠˇ ㄕㄤˋ ㄓㄨㄥˋ ㄧㄠˋ ㄉㄜ˙ ㄗ ㄍㄜˊ, ㄒㄧㄢˋ ㄗㄞˋ ㄇㄟˊ ㄧㄡˇ ㄕˊ ㄐㄧㄢ ㄨㄢˊ.',
            pinyin: 'ban4 nian2 hou4 wo3 dei3 kao3 shang4 zhong4 yao4 de zi1 ge2, xian4 zai4 mei2 you3 shi2 jian4 wan2.',
            translation: '半年後に大事な資格のテストを受けるので、 今は遊んでいる時間がありません。',
            memo: ''
          },
          {
            word: '推薦信',
            sentence: '如果你要申請這種工作， 你至少需要三封推薦信。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄧㄠˋ ㄕㄣ ㄑㄧㄥˇ ㄓㄜˋ ㄓㄨㄥˇ ㄍㄨㄥ ㄗㄨㄛˋ, ㄋㄧˇ ㄓˋ ㄕㄠˇ ㄒㄩ ㄧㄠˋ ㄙㄢ ㄈㄥ ㄊㄨㄟ ㄐㄧㄢˋ ㄒㄧㄣˋ.',
            pinyin: 'ru2 guo3 ni3 yao4 shen1 qing3 zhe4 zhong3 gong1 zuo4, ni3 zhi4 shao3 xu1 yao4 san1 feng1 tui1 jian4 xin4.',
            translation: 'この種の仕事に応募したい場合は、 少なくとも3通の推薦状が必要です。',
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
