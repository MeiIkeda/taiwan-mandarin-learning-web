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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 4冊目・第1章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 4冊目・第1章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      // 単語数：70
      data: {
        title: '當代中文課程課4・第1章',
        words: [
          {
            word: '小玲',
            sentence: '朋友生寶寶的時候, 小玲就像生自己的寶寶一樣幸福。',
            bopomofo: 'ㄆㄥˊ ㄧㄡˇ ㄕㄥ ㄅㄠˇ ㄅㄠ˙ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄒㄧㄠˇ ㄌㄧㄥˊ ㄐㄧㄡˋ ㄒㄧㄤˋ ㄕㄥ ㄗˋ ㄐㄧˇ ㄉㄜ˙ ㄅㄠˇ ㄅㄠ˙ ㄧˊ ㄧㄤˋ ㄒㄧㄥˋ ㄈㄨˊ.',
            pinyin: 'peng2 you3 sheng1 bao3 bao de shi2 hou4, xiao3 ling2 jiu4 xiang4 sheng1 zi4 ji3 de bao3 bao yi1 yang4 xing4 fu2.',
            translation: '友達の赤ちゃんが産まれた時、 小玲は自分の子が産まれたかのように幸せでした。',
            memo: ''
          },
          {
            word: '阿建',
            sentence: '阿建沒加鹽， 所以菜沒有味道。',
            bopomofo: 'ㄚ ㄐㄧㄢˋ ㄇㄟˊ ㄐㄧㄚ ㄧㄢˊ, ㄙㄨㄛˇ ㄧˇ ㄘㄞˋ ㄇㄟˊ ㄧㄡˇ ㄨㄟˋ ㄉㄠˋ.',
            pinyin: 'a1 jian4 mei2 jia1 yan2, suo3 yi3 cai4 mei2 you3 wei4 dao4.',
            translation: '阿建は塩を入れなかったので、 料理は味がしませんでした。',
            memo: ''
          },
          {
            word: '聊天室',
            sentence: '甚至在午夜， 有些人也已登錄進聊天室。',
            bopomofo: 'ㄕㄣˋ ㄓˋ ㄗㄞˋ ㄨˇ ㄧㄝˋ, ㄧㄡˇ ㄒㄧㄝ ㄖㄣˊ ㄧㄝˇ ㄧˇ ㄉㄥ ㄌㄨˋ ㄐㄧㄣˋ ㄌㄧㄠˊ ㄊㄧㄢ ㄕˋ.',
            pinyin: 'shen4 zhi4 zai4 wu3 ye4, you3 xie1 ren2 ye3 yi3 deng1 lu4 jin4 liao2 tian1 shi4.',
            translation: '深夜にも関わらず、 チャットルームにログインしている人がいます。',
            memo: ''
          },
          {
            word: '上班族',
            sentence: '他看不出來是上班族, 我以為他就是一位老師。',
            bopomofo: 'ㄊㄚ ㄎㄢˋ ㄅㄨˊ ㄔㄨ ㄌㄞˊ ㄕˋ ㄕㄤˋ ㄅㄢ ㄗㄨˊ, ㄨㄛˇ ㄧˇ ㄨㄟˊ ㄊㄚ ㄐㄧㄡˋ ㄕˋ ㄧ ㄨㄟˋ ㄌㄠˇ ㄕ.',
            pinyin: 'ta1 kan4 bu2 chu1 lai2 shi4 shang4 ban1 zu2, wo3 yi3 wei2 ta1 jiu4 shi4 yi1 wei4 lao3 shi1.',
            translation: '彼は会社員のようには見えません、 彼は教師だと私は思います。',
            memo: ''
          },
          {
            word: '與其',
            sentence: '我與其在家渾渾噩噩地過一天， 我覺得不如出去。',
            bopomofo: 'ㄨㄛˇ ㄩˇ ㄑㄧˊ ㄗㄞˋ ㄐㄧㄚ ㄏㄨㄣˊ ㄏㄨㄣˊ ㄜˋ ㄜˋ ㄉㄜ˙ ㄍㄨㄛˋ ㄧˋ ㄊㄧㄢ, ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄅㄨˋ ㄖㄨˊ ㄔㄨ ㄑㄩˋ.',
            pinyin: 'wo3 yu3 qi2 zai4 jia1 hun2 hun2 e4 e4 di4 guo4 yi1 tian1, wo3 jue2 de bu4 ru2 chu1 qu4.',
            translation: '家でだらだらと一日を過ごすよりも、 外に出た方がいいと思います。',
            memo: '※「だらだらと」 : 「無所事事(ㄨˊ ㄙㄨㄛˇ ㄕˋ ㄕˋ/wu2 suo3 shi4 shi4)」でも可。'
          },
          {
            word: '冷清',
            sentence: '該地區是旅遊勝地， 所以平日都很冷清。',
            bopomofo: 'ㄍㄞ ㄉㄧˋ ㄑㄩ ㄕˋ ㄌㄩˇ ㄧㄡˊ ㄕㄥˋ ㄉㄧˋ, ㄙㄨㄛˇ ㄧˇ ㄆㄧㄥˊ ㄖˋ ㄉㄡ ㄏㄣˇ ㄌㄥˇ ㄑㄧㄥ.',
            pinyin: 'gai1 di4 qu1 shi4 lu3 you2 sheng4 di4, suo3 yi3 ping2 ri4 dou1 hen3 leng3 qing1.',
            translation: 'この辺りは観光地なので、 平日は閑散としています。',
            memo: ''
          },
          {
            word: '高就',
            sentence: '教授的令郎也在大學高就。',
            bopomofo: 'ㄐㄧㄠˋ ㄕㄡˋ ㄉㄜ˙ ㄌㄧㄥˋ ㄌㄤˊ ㄧㄝˇ ㄗㄞˋ ㄉㄚˋ ㄒㄩㄝˊ ㄍㄠ ㄐㄧㄡˋ.',
            pinyin: 'jiao4 shou4 de ling4 lang2 ye3 zai4 da4 xue2 gao1 jiu4.',
            translation: '教授のご子息も、 大学で働かれています。',
            memo: '※令郎（古代用語）  兒子。'
          },
          {
            word: '部門',
            sentence: '我們的部門會議快開始了， 所以會議室坐滿了人。',
            bopomofo: 'ㄨㄛˇ ㄇㄣ˙ ㄉㄜ˙ ㄅㄨˋ ㄇㄣˊ ㄏㄨㄟˋ ㄧˋ ㄎㄨㄞˋ ㄎㄞ ㄕˇ ㄌㄜ˙, ㄙㄨㄛˇ ㄧˇ ㄏㄨㄟˋ ㄧˋ ㄕˋ ㄗㄨㄛˋ ㄇㄢˇ ㄌㄜ˙ ㄖㄣˊ.',
            pinyin: 'wo3 men de bu4 men2 hui4 yi4 kuai4 kai1 shi3 le, suo3 yi3 hui4 yi4 shi4 zuo4 man3 le ren2.',
            translation: '私たちの部署ではもうすぐ会議が始まるので、 会議室は人でいっぱいです。',
            memo: ''
          },
          {
            word: '厲害',
            sentence: '如果用豬骨頭煮久時間, 可以煮出很厲害的湯頭來。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄩㄥˋ ㄓㄨ ㄍㄨˊ ㄊㄡ˙ ㄓㄨˇ ㄐㄧㄡˇ ㄕˊ ㄐㄧㄢ, ㄎㄜˇ ㄧˇ ㄓㄨˇ ㄔㄨ ㄏㄣˇ ㄌㄧˋ ㄏㄞˋ ㄉㄜ˙ ㄊㄤ ㄊㄡˊ ㄌㄞˊ.',
            pinyin: 'ru2 guo3 yong4 zhu1 gu3 tou2 zhu3 jiu3 shi2 jian1, ke3 yi3 zhu3 chu1 hen3 li4 hai4 de tang1 tou2 lai2.',
            translation: '豚骨を長時間煮込むと、 素晴らしく美味しいスープができます。',
            memo: ''
          },
          {
            word: '加班',
            sentence: '最近我每天都加班, 這樣下去我都快要生病了。',
            bopomofo: 'ㄗㄨㄟˋ ㄐㄧㄣˋ ㄨㄛˇ ㄇㄟˇ ㄊㄧㄢ ㄉㄨ ㄐㄧㄚ ㄅㄢ, ㄓㄜˋ ㄧㄤˋ ㄒㄧㄚˋ ㄑㄩˋ ㄨㄛˇ ㄉㄡ ㄎㄨㄞˋ ㄧㄠˋ ㄕㄥ ㄅㄧㄥˋ ㄌㄜ˙.',
            pinyin: 'zui4 jin4 wo3 mei3 tian1 dou1 jia1 ban1, zhe4 yang4 xia4 qu4 wo3 dou1 kuai4 yao4 sheng1 bing4 le.',
            translation: '最近は残業続きなので、 このままでは病気になってしまいます。',
            memo: ''
          },
          {
            word: '類',
            sentence: '巴士票， 我們有普通的和一天票兩種。',
            bopomofo: 'ㄅㄚ ㄕˋ ㄆㄧㄠˋ, ㄨㄛˇ ㄇㄣ˙ ㄧㄡˇ ㄆㄨˇ ㄊㄨㄥ ㄉㄜ˙ ㄏㄢˋ ㄧˋ ㄊㄧㄢ ㄆㄧㄠˋ ㄌㄧㄤˇ ㄓㄨㄥˇ.',
            pinyin: 'ba1 shi4 piao4, wo3 men you3 pu3 tong1 de han4 yi1 tian1 piao4 liang3 zhong3.',
            translation: 'バスのチケットには、 普通のチケットと1日券の2種類があります。',
            memo: ''
          },
          {
            word: '恐怖片',
            sentence: '她是愛害怕的人，我覺得你不要讓她看恐怖片比較好。',
            bopomofo: 'ㄊㄚ ㄕˋ ㄞˋ ㄏㄞˋ ㄆㄚˋ ㄉㄜ˙ ㄖㄣˊ, ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄋㄧˇ ㄅㄨˊ ㄧㄠˋ ㄖㄤˋ ㄊㄚ ㄎㄢˋ ㄎㄨㄥˇ ㄅㄨˋ ㄆㄧㄢˋ ㄅㄧˇ ㄐㄧㄠˋ ㄏㄠˇ.',
            pinyin: 'ta1 shi4 ai4 hai4 pa4 de ren2, wo3 jue2 de ni3 bu2 yao4 rang4 ta1 kan4 kong3 bu4 pian4 bi3 jiao4 hao3.',
            translation: '彼女は怖がりなので、 ホラー映画は彼女には見せない方がいいと思います。',
            memo: '※「怖がり」 : 「愛害怕的人(ㄞˋ ㄏㄞˋ ㄆㄚˋ ㄉㄜ˙ ㄖㄣˊ/ai4 hai4 pa4 de ren2)」「膽小鬼( ㄉㄢˇ ㄒㄧㄠˇ ㄍㄨㄟˇ/dan3 xiao3 gui3)」。'
          },
          {
            word: '愛情片',
            sentence: '他隨便選了要看的電影, 沒想到那片是他不喜歡的愛情片。',
            bopomofo: 'ㄊㄚ ㄙㄨㄟˊ ㄅㄧㄢˋ ㄒㄩㄢˇ ㄌㄜ˙ ㄧㄠˋ ㄎㄢˋ ㄉㄜ˙ ㄉㄧㄢˋ ㄧㄥˇ, ㄇㄟˊ ㄒㄧㄤˇ ㄉㄠˋ ㄋㄚˋ ㄆㄧㄢˋ ㄕˋ ㄊㄚ ㄅㄨˋ ㄒㄧˇ ㄏㄨㄢ ㄉㄜ˙ ㄞˋ ㄑㄧㄥˊ ㄆㄧㄢˋ.',
            pinyin: 'ta1 sui2 bian4 xuan3 le yao4 kan4 de dian4 ying3, mei2 xiang3 dao4 na4 pian4 shi4 ta1 bu4 xi3 huan1 de ai4 qing2 pian4.',
            translation: '彼は見る映画を適当に選んだのですが、 それが彼が嫌いな恋愛映画だったとは思ってもみませんでした。',
            memo: ''
          },
          {
            word: '嚇',
            sentence: '聽到鬼故事的孩子嚇得哭出來了。',
            bopomofo: 'ㄊㄧㄥ ㄉㄠˋ ㄍㄨㄟˇ ㄍㄨˋ ㄕˋ ㄉㄜ˙ ㄏㄞˊ ㄗ˙ ㄒㄧㄚˋ ㄉㄜ˙ ㄎㄨ ㄔㄨ ㄌㄞˊ ㄌㄜ˙.',
            pinyin: 'ting1 dao4 gui3 gu4 shi4 de hai2 zi xia4 de ku1 chu1 lai2 le.',
            translation: 'お化けの話を聞いた子供は、 怖がって泣き出してしまいました。',
            memo: ''
          },
          {
            word: '哭',
            sentence: '她很容易流眼淚， 看什麼電影開始十分後就哭起來了。',
            bopomofo: 'ㄊㄚ ㄏㄣˇ ㄖㄨㄥˊ ㄧˋ ㄌㄧㄡˊ ㄧㄢˇ ㄌㄟˋ, ㄎㄢˋ ㄕㄣˊ ㄇㄜ˙ ㄉㄧㄢˋ ㄧㄥˇ ㄎㄞ ㄕˇ ㄕˊ ㄈㄣ ㄏㄡˋ ㄐㄧㄡˋ ㄎㄨ ㄑㄧˇ ㄌㄞˊ ㄌㄜ˙.',
            pinyin: 'ta1 hen3 rong2 yi4 liu2 yan3 lei4, kan4 shen2 me dian4 ying3 kai1 shi3 shi2 fen1 hou4 jiu4 ku1 qi3 lai2 le.',
            translation: '彼女はとても涙もろく、 どんな映画でも開始10分で泣き始めます。',
            memo: '※「涙もろい」 : 「流眼淚(ㄌㄧㄡˊ ㄧㄢˇ ㄌㄟˋ/liu2 yan3 lei4)」「愛哭鬼(ㄞˋ ㄎㄨ ㄍㄨㄟˇ/ai4 ku1 gui3)」。'
          },
          {
            word: '上瘾',
            sentence: '我對貓的肉球的質感會上癮。',
            bopomofo: 'ㄨㄛˇ ㄉㄨㄟˋ ㄇㄠ ㄉㄜ˙ ㄖㄡˋ ㄑㄧㄡˊ ㄉㄜ˙ ㄓˊ ㄍㄢˇ ㄏㄨㄟˋ ㄕㄤˋ ㄧㄣˇ.',
            pinyin: 'wo3 dui4 mao1 de rou4 qiu2 de zhi4 gan3 hui4 shang4 yin3.',
            translation: '猫の肉球の触り心地にハマっています。',
            memo: ''
          },
          {
            word: '刺激',
            sentence: '他對自己的外貌很在意， 所以你不要刺激他的自卑感。',
            bopomofo: 'ㄊㄚ ㄉㄨㄟˋ ㄗˋ ㄐㄧˇ ㄉㄜ˙ ㄨㄞˋ ㄇㄠˋ ㄏㄣˇ ㄗㄞˋ ㄧˋ, ㄙㄨㄛˇ ㄧˇ ㄋㄧˇ ㄅㄨˊ ㄧㄠˋ ㄘˋ ㄐㄧ ㄊㄚ ㄉㄜ˙ ㄗˋ ㄅㄟ ㄍㄢˇ.',
            pinyin: 'ta1 dui4 zi4 ji3 de wai4 mao4 hen3 zai4 yi4, suo3 yi3 ni3 bu2 yao4 ci4 ji1 ta1 de zi4 bei1 gan3.',
            translation: '彼は自分の容姿をすごく気にしているので、 コンプレックスを刺激するのはやめて下さい。',
            memo: ''
          },
          {
            word: '★簡直',
            sentence: '該機器的故障單純是因為設定的錯誤， 它並沒有壞掉。',
            bopomofo: 'ㄍㄞ ㄐㄧ ㄑㄧˋ ㄉㄜ˙ ㄍㄨˋ ㄓㄤˋ ㄉㄢ ㄔㄨㄣˊ ㄕˋ ㄧㄣ ㄨㄟˋ ㄕㄜˋ ㄉㄧㄥˋ ㄉㄜ˙ ㄘㄨㄛˋ ㄨˋ, ㄊㄚ ㄅㄧㄥˋ ㄇㄟˊ ㄧㄡˇ ㄏㄨㄞˋ ㄉㄧㄠˋ.',
            pinyin: 'gai1 ji1 qi4 de gu4 zhang4 dan1 chun2 shi4 yin1 wei4 she4 ding4 de cuo4 wu4, ta1 bing4 mei2 you3 huai4 diao4.',
            translation: 'この機械の不具合は単に設定ミスが原因なので、 壊れてはいません。',
            memo: '※「簡直」は使えない?'
          },
          {
            word: '膽子',
            sentence: '我基本上沒有膽子， 所以肌肉訓練不會持續。',
            bopomofo: 'ㄨㄛˇ ㄐㄧ ㄅㄣˇ ㄕㄤˋ ㄇㄟˊ ㄧㄡˇ ㄉㄢˇ ㄗ˙, ㄙㄨㄛˇ ㄧˇ ㄐㄧ ㄖㄡˋ ㄒㄩㄣˋ ㄌㄧㄢˋ ㄅㄨˊ ㄏㄨㄟˋ ㄔˊ ㄒㄩˋ.',
            pinyin: 'wo3 ji1 ben3 shang4 mei2 you3 dan3 zi, suo3 yi3 ji1 rou4 xun4 lian4 bu2 hui4 chi2 xu4.',
            translation: '私は基本的に根性が無いので、 筋トレは中々続きません。',
            memo: ''
          },
          {
            word: '部',
            sentence: '這部電影無論我看多少次都會給我留下深刻的印象。',
            bopomofo: 'ㄓㄜˋ ㄅㄨˋ ㄉㄧㄢˋ ㄧㄥˇ ㄨˊ ㄌㄨㄣˋ ㄨㄛˇ ㄎㄢˋ ㄉㄨㄛ ㄕㄠˇ ㄘˋ ㄉㄡ ㄏㄨㄟˋ ㄍㄟˇ ㄨㄛˇ ㄌㄧㄡˊ ㄒㄧㄚˋ ㄕㄣ ㄎㄜˋ ㄉㄜ˙ ㄧㄣˋ ㄒㄧㄤˋ.',
            pinyin: 'zhe4 bu4 dian4 ying3 wu2 lun4 wo3 kan4 duo1 shao3 ci4 dou1 hui4 gei3 wo3 liu2 xia4 shen1 ke4 de yin4 xiang4.',
            translation: 'この映画は、 何度見ても感動します。',
            memo: ''
          },
          {
            word: '限制級',
            sentence: '那部電影變成限制級, 結果很多年輕人偷偷看。',
            bopomofo: 'ㄋㄚˋ ㄅㄨˋ ㄉㄧㄢˋ ㄧㄥˇ ㄅㄧㄢˋ ㄔㄥˊ ㄒㄧㄢˋ ㄓˋ ㄐㄧˊ, ㄐㄧㄝˊ ㄍㄨㄛˇ ㄏㄣˇ ㄉㄨㄛ ㄋㄧㄢˊ ㄑㄧㄥ ㄖㄣˊ ㄊㄡ ㄊㄡ ㄎㄢˋ.',
            pinyin: 'na4 bu4 dian4 ying3 bian4 cheng2 xian4 zhi4 ji2, jie2 guo3 hen3 duo1 nian2 qing1 ren2 tou1 tou1 kan4.',
            translation: 'その映画に年齢制限がついた結果、 多くの若者がこっそり見ています。',
            memo: ''
          },
          {
            word: '電影院',
            sentence: '在電影院裡觀看的電影要比在家觀看的有氣勢得多。',
            bopomofo: 'ㄗㄞˋ ㄉㄧㄢˋ ㄧㄥˇ ㄩㄢˋ ㄌㄧˇ ㄍㄨㄢ ㄎㄢˋ ㄉㄜ˙ ㄉㄧㄢˋ ㄧㄥˇ ㄧㄠˋ ㄅㄧˇ ㄗㄞˋ ㄐㄧㄚ ㄍㄨㄢ ㄎㄢˋ ㄉㄜ˙ ㄧㄡˇ ㄑㄧˋ ㄕˋ ㄉㄜˊ ㄉㄨㄛ.',
            pinyin: 'zai4 dian4 ying3 yuan4 li3 guan1 kan4 de dian4 ying3 yao4 bi3 zai4 jia1 guan1 kan4 de you3 qi4 shi4 de duo1.',
            translation: 'シネマで観る映画は、 家で観る時と比べて迫力が段違いです。',
            memo: ''
          },
          {
            word: '呃',
            sentence: '呃， 我遲到的理由不是我的錯， 而是鬧鐘壞了。',
            bopomofo: 'ㄜˋ, ㄨㄛˇ ㄔˊ ㄉㄠˋ ㄉㄜ˙ ㄌㄧˇ ㄧㄡˊ ㄅㄨˊ ㄕˋ ㄨㄛˇ ㄉㄜ˙ ㄘㄨㄛˋ, ㄦˊ ㄕˋ ㄋㄠˋ ㄓㄨㄥ ㄏㄨㄞˋ ㄌㄜ˙.',
            pinyin: 'e4, wo3 chi2 dao4 de li3 you2 bu2 shi4 wo3 de cuo4, er2 shi4 nao4 zhong1 huai4 le.',
            translation: 'ええと、 遅刻したのは私のせいではなく、 目覚ましが故障したからです。',
            memo: ''
          },
          {
            word: '建設公司',
            sentence: '那家建設公司贏得了新建造商業設施的競賽。',
            bopomofo: 'ㄋㄚˋ ㄐㄧㄚ ㄐㄧㄢˋ ㄕㄜˋ ㄍㄨㄥ ㄙ ㄧㄥˊ ㄉㄜˊ ㄌㄜ˙ ㄒㄧㄣ ㄐㄧㄢˋ ㄗㄠˋ ㄕㄤ ㄧㄝˋ ㄕㄜˋ ㄕ ㄉㄜ˙ ㄐㄧㄥˋ ㄙㄞˋ.',
            pinyin: 'na4 jia1 jian4 she4 gong1 si1 ying2 de2 le xin1 jian4 zao4 shang1 ye4 she4 shi1 de jing4 sai4.',
            translation: 'あの建設会社は、 商業施設建設のコンペに勝ちました。',
            memo: ''
          },
          {
            word: '業務經理',
            sentence: '業務經理正在反覆試行錯誤的同時， 嘗試建立一個好的團隊。',
            bopomofo: 'ㄧㄝˋ ㄨˋ ㄐㄧㄥ ㄌㄧˇ ㄓㄥˋ ㄗㄞˋ ㄈㄢˇ ㄈㄨˋ ㄕˋ ㄒㄧㄥˊ ㄘㄨㄛˋ ㄨˋ ㄉㄜ˙ ㄊㄨㄥˊ ㄕˊ, ㄔㄤˊ ㄕˋ ㄐㄧㄢˋ ㄌㄧˋ ㄧˊ ㄍㄜˋ ㄏㄠˇ ㄉㄜ˙ ㄊㄨㄢˊ ㄉㄨㄟˋ.',
            pinyin: 'ye4 wu4 jing1 li3 zheng4 zai4 fan3 fu4 shi4 xing2 cuo4 wu4 de tong2 shi2, chang2 shi4 jian4 li4 yi1 ge4 hao3 de tuan2 dui4.',
            translation: 'マネージャーは試行錯誤を繰り返しながら、 良いチームを作ろうとしています。',
            memo: ''
          },
          {
            word: '室內設計',
            sentence: '我多少有一點室內設計的經驗, 你知不知道什麼公司正在徵求員工?',
            bopomofo: 'ㄨㄛˇ ㄉㄨㄛ ㄕㄠˇ ㄧㄡˇ ㄧˋ ㄉㄧㄢˇ ㄕˋ ㄋㄟˋ ㄕㄜˋ ㄐㄧˋ ㄉㄜ˙ ㄐㄧㄥ ㄧㄢˋ, ㄋㄧˇ ㄓ ㄅㄨˋ ㄓ ㄉㄠˋ ㄕㄣˊ ㄇㄜ˙ ㄍㄨㄥ ㄙ ㄓㄥˋ ㄗㄞˋ ㄓㄥ ㄑㄧㄡˊ ㄩㄢˊ ㄍㄨㄥ?',
            pinyin: 'wo3 duo1 shao3 you3 yi1 dian3 shi4 nei4 she4 ji4 de jing1 yan4, ni3 zhi1 bu4 zhi1 dao4 shen2 me gong1 si1 zheng4 zai4 zheng1 qiu2 yuan2 gong1?',
            translation: '多少はインテリアデザインの経験があるのですが、 どこか今求人を出している会社を知りませんか?',
            memo: ''
          },
          {
            word: '溫暖',
            sentence: '溫暖的氣候給該地區帶來很豐富的水果種類。',
            bopomofo: 'ㄨㄣ ㄋㄨㄢˇ ㄉㄜ˙ ㄑㄧˋ ㄏㄡˋ ㄍㄟˇ ㄍㄞ ㄉㄧˋ ㄑㄩ ㄉㄞˋ ㄌㄞˊ ㄏㄣˇ ㄈㄥ ㄈㄨˋ ㄉㄜ˙ ㄕㄨㄟˇ ㄍㄨㄛˇ ㄓㄨㄥˇ ㄌㄟˋ.',
            pinyin: 'wen1 nuan3 de qi4 hou4 gei3 gai1 di4 qu1 dai4 lai2 hen3 feng1 fu4 de shui3 guo3 zhong3 lei4.',
            translation: '温暖な気候がこの地方に多種多様な果物を実らせます。',
            memo: ''
          },
          {
            word: '目前',
            sentence: '目前還有十五分鐘， 到三點他過不過得來?',
            bopomofo: 'ㄇㄨˋ ㄑㄧㄢˊ ㄏㄞˊ ㄧㄡˇ ㄕˊ ㄨˇ ㄈㄣ ㄓㄨㄥ, ㄉㄠˋ ㄙㄢ ㄉㄧㄢˇ ㄊㄚ ㄍㄨㄛˋ ㄅㄨˊ ㄍㄨㄛˋ ㄉㄜ˙ ㄌㄞˊ?',
            pinyin: 'mu4 qian2 hai2 you3 shi2 wu3 fen1 zhong1, dao4 san1 dian3 ta1 guo4 bu2 guo4 de lai2?',
            translation: 'もう15分前ですが、 彼は3時までに来られるのでしょうか?',
            memo: ''
          },
          {
            word: '所',
            sentence: '我聽說該村的兩所國中將合併為一所。',
            bopomofo: 'ㄨㄛˇ ㄊㄧㄥ ㄕㄨㄛ ㄍㄞ ㄘㄨㄣ ㄉㄜ˙ ㄌㄧㄤˇ ㄙㄨㄛˇ ㄍㄨㄛˊ ㄓㄨㄥ ㄐㄧㄤˋ ㄏㄜˊ ㄅㄧㄥˋ ㄨㄟˋ ㄧ ㄙㄨㄛˇ.',
            pinyin: 'wo3 ting1 shuo1 gai1 cun1 de liang3 suo3 guo2 zhong1 jiang4 he2 bing4 wei4 yi1 suo3.',
            translation: '村の2つの中学校が、 1つに統合されるそうです。',
            memo: ''
          },
          {
            word: '就讀',
            sentence: '她很困惑是去就讀研究生還是找工作。',
            bopomofo: 'ㄊㄚ ㄏㄣˇ ㄎㄨㄣˋ ㄏㄨㄛˋ ㄕˋ ㄑㄩˋ ㄐㄧㄡˋ ㄉㄨˊ ㄧㄢˊ ㄐㄧㄡ ㄕㄥ ㄏㄨㄢˊ ㄕˋ ㄓㄠˇ ㄍㄨㄥ ㄗㄨㄛˋ.',
            pinyin: 'ta1 hen3 kun4 huo4 shi4 qu4 jiu4 du2 yan2 jiu1 sheng1 hai2 shi4 zhao3 gong1 zuo4.',
            translation: '彼女は、 大学院へ行くか就職するかで迷っています。',
            memo: ''
          },
          {
            word: '不至於',
            sentence: '損害不至於到我想像的程度。',
            bopomofo: 'ㄙㄨㄣˇ ㄏㄞˋ ㄅㄨˊ ㄓˋ ㄩˊ ㄉㄠˋ ㄨㄛˇ ㄒㄧㄤˇ ㄒㄧㄤˋ ㄉㄜ˙ ㄔㄥˊ ㄉㄨˋ.',
            pinyin: 'sun3 hai4 bu2 zhi4 yu2 dao4 wo3 xiang3 xiang4 de cheng2 du4.',
            translation: '被害は、 想像していた程ではありませんでした。',
            memo: ''
          },
          {
            word: '但',
            sentence: '我想引進一個新系統， 但我擔心數據轉移是否會成功。',
            bopomofo: 'ㄨㄛˇ ㄒㄧㄤˇ ㄧㄣˇ ㄐㄧㄣˋ ㄧˊ ㄍㄜˋ ㄒㄧㄣ ㄒㄧˋ ㄊㄨㄥˇ, ㄉㄢˋ ㄨㄛˇ ㄉㄢ ㄒㄧㄣ ㄕㄨˋ ㄐㄩˋ ㄓㄨㄢˇ ㄧˊ ㄕˋ ㄈㄡˇ ㄏㄨㄟˋ ㄔㄥˊ ㄍㄨㄥ.',
            pinyin: 'wo3 xiang3 yin3 jin4 yi1 ge4 xin1 xi4 tong3, dan4 wo3 dan1 xin1 shu4 ju4 zhuan3 yi2 shi4 fou3 hui4 cheng2 gong1.',
            translation: '新しいシステムを導入したいのですが、 データ移行が上手くいくか心配です。',
            memo: ''
          },
          {
            word: '放學',
            sentence: '我的孩子放學後的零用錢總是在五十錢以內。',
            bopomofo: 'ㄨㄛˇ ㄉㄜ˙ ㄏㄞˊ ㄗ˙ ㄈㄤˋ ㄒㄩㄝˊ ㄏㄡˋ ㄉㄜ˙ ㄌㄧㄥˊ ㄩㄥˋ ㄑㄧㄢˊ ㄗㄨㄥˇ ㄕˋ ㄗㄞˋ ㄨˇ ㄕˊ ㄑㄧㄢˊ ㄧˇ ㄋㄟˋ.',
            pinyin: 'wo3 de hai2 zi fang4 xue2 hou4 de ling2 yong4 qian2 zong3 shi4 zai4 wu3 shi2 qian2 yi3 nei4.',
            translation: '私の子供の放課後のおこづかいはいつも50元未満です。',
            memo: ''
          },
          {
            word: '後',
            sentence: '上了飛機後, 我總是在起飛前睡覺。',
            bopomofo: 'ㄕㄤˋ ㄌㄜ˙ ㄈㄟ ㄐㄧ ㄏㄡˋ, ㄨㄛˇ ㄗㄨㄥˇ ㄕˋ ㄗㄞˋ ㄑㄧˇ ㄈㄟ ㄑㄧㄢˊ ㄕㄨㄟˋ ㄐㄧㄠˋ.',
            pinyin: 'shang4 le fei1 ji1 hou4, wo3 zong3 shi4 zai4 qi3 fei1 qian2 shui4 jiao4.',
            translation: '飛行機に乗った後は、 いつも離陸前から寝てしまいます。',
            memo: ''
          },
          {
            word: '解決',
            sentence: '他想著想著, 就發現到怎麼解決這個問題了。',
            bopomofo: 'ㄊㄚ ㄒㄧㄤˇ ㄓㄨㄛˊ ㄒㄧㄤˇ ㄓㄜ˙, ㄐㄧㄡˋ ㄈㄚ ㄒㄧㄢˋ ㄉㄠˋ ㄗㄣˇ ㄇㄜ˙ ㄐㄧㄝˇ ㄐㄩㄝˊ ㄓㄜˋ ㄍㄜˋ ㄨㄣˋ ㄊㄧˊ ㄌㄜ˙.',
            pinyin: 'ta1 xiang3 zhe xiang3 zhe, jiu4 fa1 xian4 dao4 zen3 me jie3 jue2 zhe4 ge4 wen4 ti2 le.',
            translation: '彼は考えて考えて、 この問題をどう解決したらいいか分かりました。',
            memo: '※「V著V著就..了」 : 「..している内に」。'
          },
          {
            word: '寂寞',
            sentence: '她說了沒關係, 但心裡話可能是寂寞。',
            bopomofo: 'ㄊㄚ ㄕㄨㄛ ㄌㄜ˙ ㄇㄟˊ ㄍㄨㄢ ㄒㄧˋ, ㄉㄢˋ ㄒㄧㄣ ㄌㄧˇ ㄏㄨㄚˋ ㄎㄜˇ ㄋㄥˊ ㄕˋ ㄐㄧˋ ㄇㄛˋ.',
            pinyin: 'ta1 shuo1 le mei2 guan1 xi4, dan4 xin1 li3 hua4 ke3 neng2 shi4 ji4 mo4.',
            translation: '彼女は大丈夫だと言いましたが、 本音を言えば寂しいのかもしれません。',
            memo: ''
          },
          {
            word: '網友',
            sentence: '她剛剛搬家了在附近還沒有朋友, 所以她都靠網友來商量。',
            bopomofo: 'ㄊㄚ ㄍㄤ ㄍㄤ ㄅㄢ ㄐㄧㄚ ㄌㄜ˙ ㄗㄞˋ ㄈㄨˋ ㄐㄧㄣˋ ㄏㄞˊ ㄇㄟˊ ㄧㄡˇ ㄆㄥˊ ㄧㄡˇ, ㄙㄨㄛˇ ㄧˇ ㄊㄚ ㄉㄡ ㄎㄠˋ ㄨㄤˇ ㄧㄡˇ ㄌㄞˊ ㄕㄤ ㄌㄧㄤˊ.',
            pinyin: 'ta1 gang1 gang1 ban1 jia1 le zai4 fu4 jin4 hai2 mei2 you3 peng2 you3, suo3 yi3 ta1 dou1 kao4 wang3 you3 lai2 shang1 liang2.',
            translation: '彼女は引っ越したばかりで近くに友達がいないので、 相談事は全てネットの友達に頼っています。',
            memo: ''
          },
          {
            word: '陪伴',
            sentence: '她勉強地陪伴醉漢。',
            bopomofo: 'ㄊㄚ ㄇㄧㄢˇ ㄑㄧㄤˇ ㄉㄜ˙ ㄆㄟˊ ㄅㄢˋ ㄗㄨㄟˋ ㄏㄢˋ.',
            pinyin: 'ta1 mian3 qiang3 de pei2 ban4 zui4 han4.',
            translation: '彼女はしぶしぶ酔っ払いの相手をしています。',
            memo: '※しぶしぶ(不情願）的意思。'
          },
          {
            word: '電腦',
            sentence: '學習新文字的時候電腦鍵盤也有用。',
            bopomofo: 'ㄒㄩㄝˊ ㄒㄧˊ ㄒㄧㄣ ㄨㄣˊ ㄗˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄉㄧㄢˋ ㄋㄠˇ ㄐㄧㄢˋ ㄆㄢˊ ㄧㄝˇ ㄧㄡˇ ㄩㄥˋ.',
            pinyin: 'xue2 xi2 xin1 wen2 zi4 de shi2 hou4 dian4 nao3 jian4 xuan2 ye3 you3 yong4.',
            translation: '新しい文字を学ぶ時は、 パソコンのキーボードも有用です。',
            memo: ''
          },
          {
            word: '進入',
            sentence: '進入隔壁班的女生似乎很可愛, 我非看不可。',
            bopomofo: 'ㄐㄧㄣˋ ㄖㄨˋ ㄍㄜˊ ㄅㄧˋ ㄅㄢ ㄉㄜ˙ ㄋㄩˇ ㄕㄥ ㄙˋ ㄏㄨ ㄏㄣˇ ㄎㄜˇ ㄞˋ, ㄨㄛˇ ㄈㄟ ㄎㄢˋ ㄅㄨˋ ㄎㄜˇ.',
            pinyin: 'jin4 ru4 ge2 bi4 ban1 de nu3 sheng1 si4 hu1 hen3 ke3 ai4, wo3 fei1 kan4 bu4 ke3.',
            translation: '隣のクラスに入った女の子はとても可愛いらしいので、 見に行かない訳には行きません。',
            memo: ''
          },
          {
            word: '線上',
            sentence: '線上會議的時候， 只穿好上半身就好了。',
            bopomofo: 'ㄒㄧㄢˋ ㄕㄤˋ ㄏㄨㄟˋ ㄧˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄓˇ ㄔㄨㄢ ㄏㄠˇ ㄕㄤˋ ㄅㄢˋ ㄕㄣ ㄐㄧㄡˋ ㄏㄠˇ ㄌㄜ˙.',
            pinyin: 'xian4 shang4 hui4 yi4 de shi2 hou4, zhi3 chuan1 hao3 shang4 ban4 shen1 jiu4 hao3 le.',
            translation: 'オンライン会議の時は、 上半身だけ服を着れば大丈夫です。',
            memo: ''
          },
          {
            word: '★感情',
            sentence: '養寵物的最大的理由是感情的需要。',
            bopomofo: 'ㄧㄤˇ ㄔㄨㄥˇ ㄨˋ ㄉㄜ˙ ㄗㄨㄟˋ ㄉㄚˋ ㄉㄜ˙ ㄌㄧˇ ㄧㄡˊ ㄕˋ ㄍㄢˇ ㄑㄧㄥˊ ㄉㄜ˙ ㄒㄩ ㄧㄠˋ.',
            pinyin: 'yang3 chong3 wu4 de zui4 da4 de li3 you2 shi4 gan3 qing2 de xu1 yao4.',
            translation: 'ペットを飼う最大の理由は、 愛情の必要性です。',
            memo: '※先生が前に言っていた「感情的需要」、 どう翻訳するのが一番自然でしょうか?'
          },
          {
            word: '小氣',
            sentence: '如果他的經濟情況沒有問題的話， 他就是小氣了。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄊㄚ ㄉㄜ˙ ㄐㄧㄥ ㄐㄧˋ ㄑㄧㄥˊ ㄎㄨㄤˋ ㄇㄟˊ ㄧㄡˇ ㄨㄣˋ ㄊㄧˊ ㄉㄜ˙ ㄏㄨㄚˋ, ㄊㄚ ㄐㄧㄡˋ ㄕˋ ㄒㄧㄠˇ ㄑㄧˋ ㄌㄜ˙.',
            pinyin: 'ru2 guo3 ta1 de jing1 ji4 qing2 kuang4 mei2 you3 wen4 ti2 de hua4, ta1 jiu4 shi4 xiao3 qi4 le.',
            translation: '彼の経済状況に問題がないとすれば、 彼はただのケチです。',
            memo: ''
          },
          {
            word: '時',
            sentence: '雨季時身體不舒服不說, 房間空氣中也有霉味。',
            bopomofo: 'ㄩˇ ㄐㄧˋ ㄕˊ ㄕㄣ ㄊㄧˇ ㄅㄨˋ ㄕㄨ ㄈㄨ˙ ㄅㄨˋ ㄕㄨㄛ, ㄈㄤˊ ㄐㄧㄢ ㄎㄨㄥ ㄑㄧˋ ㄓㄨㄥ ㄧㄝˇ ㄧㄡˇ ㄇㄟˊ ㄨㄟˋ.',
            pinyin: 'yu3 ji4 shi2 shen1 ti3 bu4 shu1 fu2 bu4 shuo1, fang2 jian1 kong1 qi4 zhong1 ye3 you3 mei2 wei4.',
            translation: '雨季は体の調子が悪くなるだけではなく、 部屋もカビ臭くなります。',
            memo: ''
          },
          {
            word: '往往',
            sentence: '他往往對老師表現出叛逆的態度。',
            bopomofo: 'ㄊㄚ ㄨㄤˇ ㄨㄤˇ ㄉㄨㄟˋ ㄌㄠˇ ㄕ ㄅㄧㄠˇ ㄒㄧㄢˋ ㄔㄨ ㄆㄢˋ ㄋㄧˋ ㄉㄜ˙ ㄊㄞˋ ㄉㄨˋ.',
            pinyin: 'ta1 wang3 wang3 dui4 lao3 shi1 biao3 xian4 chu1 pan4 ni4 de tai4 du4.',
            translation: '彼はしばしば教師に対して反抗的な態度をとります。',
            memo: ''
          },
          {
            word: '打氣',
            sentence: '每當我沮喪的時候， 這個樂隊的歌都會給我打氣。',
            bopomofo: 'ㄇㄟˇ ㄉㄤ ㄨㄛˇ ㄐㄩˇ ㄙㄤˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄓㄜˋ ㄍㄜˋ ㄩㄝˋ ㄉㄨㄟˋ ㄉㄜ˙ ㄍㄜ ㄉㄡ ㄏㄨㄟˋ ㄍㄟˇ ㄨㄛˇ ㄉㄚˇ ㄑㄧˋ.',
            pinyin: 'mei3 dang1 wo3 ju3 sang4 de shi2 hou4, zhe4 ge4 yue4 dui4 de ge1 dou1 hui4 gei3 wo3 da3 qi4.',
            translation: '落ち込んでいる時は、 いつもこのバンドの歌に元気づけられます。',
            memo: ''
          },
          {
            word: '安慰',
            sentence: '跟女朋友分手了的時候安慰我的東西只有酒而已。',
            bopomofo: 'ㄍㄣ ㄋㄩˇ ㄆㄥˊ ㄧㄡˇ ㄈㄣ ㄕㄡˇ ㄌㄜ˙ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄢ ㄨㄟˋ ㄨㄛˇ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙ ㄓˇ ㄧㄡˇ ㄐㄧㄡˇ ㄦˊ ㄧˇ.',
            pinyin: 'gen1 nu3 peng2 you3 fen1 shou3 le de shi2 hou4 an1 wei4 wo3 de dong1 xi zhi3 you3 jiu3 er2 yi3.',
            translation: '彼女に振られた時に私を慰めてくれるのはお酒だけです。',
            memo: ''
          },
          {
            word: '心裡',
            sentence: '他微笑著， 但是他心裡內總是詛罵著。',
            bopomofo: 'ㄊㄚ ㄨㄟ ㄒㄧㄠˋ ㄓㄜ˙, ㄉㄢˋ ㄕˋ ㄊㄚ ㄒㄧㄣ ㄌㄧˇ ㄋㄟˋ ㄗㄨㄥˇ ㄕˋ ㄗㄨˇ ㄇㄚˋ ㄓㄜ˙.',
            pinyin: 'ta1 wei1 xiao4 zhe, dan4 shi4 ta1 xin1 li3 nei4 zong3 shi4 zu3 ma4 zhe.',
            translation: '彼はニコニコしていますが、 心の中ではいつも悪態をついています。',
            memo: ''
          },
          {
            word: '大膽',
            sentence: '她把頭髮染成了紅色， 大膽地改變印象了。',
            bopomofo: 'ㄊㄚ ㄅㄚˇ ㄊㄡˊ ㄈㄚˇ ㄖㄢˇ ㄔㄥˊ ㄌㄜ˙ ㄏㄨㄥˊ ㄙㄜˋ, ㄉㄚˋ ㄉㄢˇ ㄉㄜ˙ ㄍㄞˇ ㄅㄧㄢˋ ㄧㄣˋ ㄒㄧㄤˋ ㄌㄜ˙.',
            pinyin: 'ta1 ba3 tou2 fa3 ran3 cheng2 le hong2 se4, da4 dan3 de gai3 bian4 yin4 xiang4 le.',
            translation: '彼女は髪を赤く染めて、 大胆なイメージチェンジをしました。',
            memo: ''
          },
          {
            word: '紓解',
            sentence: '組織內的問題解決了， 緊張的氣氛終於紓解了。',
            bopomofo: 'ㄗㄨˇ ㄓ ㄋㄟˋ ㄉㄜ˙ ㄨㄣˋ ㄊㄧˊ ㄐㄧㄝˇ ㄐㄩㄝˊ ㄌㄜ˙, ㄐㄧㄣˇ ㄓㄤ ㄉㄜ˙ ㄑㄧˋ ㄈㄣ ㄓㄨㄥ ㄩˊ ㄕㄨ ㄐㄧㄝˇ ㄌㄜ˙.',
            pinyin: 'zu3 zhi1 nei4 de wen4 ti2 jie3 jue2 le, jin3 zhang1 de qi4 fen1 zhong1 yu2 shu1 jie3 le.',
            translation: '組織内の問題が解決し、 ようやく緊張が緩和されました。',
            memo: ''
          },
          {
            word: '轉換',
            sentence: '由於她心情變不好了， 他急忙地轉換了話題。',
            bopomofo: 'ㄧㄡˊ ㄩˊ ㄊㄚ ㄒㄧㄣ ㄑㄧㄥˊ ㄅㄧㄢˋ ㄅㄨˋ ㄏㄠˇ ㄌㄜ˙, ㄊㄚ ㄐㄧˊ ㄇㄤˊ ㄉㄜ˙ ㄓㄨㄢˇ ㄏㄨㄢˋ ㄌㄜ˙ ㄏㄨㄚˋ ㄊㄧˊ.',
            pinyin: 'you2 yu2 ta1 xin1 qing2 bian4 bu4 hao3 le, ta1 ji2 mang2 de zhuan3 huan4 le hua4 ti2.',
            translation: '彼女の機嫌が悪くなったので、 彼は慌てて話題を変えました。',
            memo: ''
          },
          {
            word: '虛擬',
            sentence: '在這個遊戲中， 你可以體驗虛擬農業。',
            bopomofo: 'ㄗㄞˋ ㄓㄜˋ ㄍㄜˋ ㄧㄡˊ ㄒㄧˋ ㄓㄨㄥ, ㄋㄧˇ ㄎㄜˇ ㄧˇ ㄊㄧˇ ㄧㄢˋ ㄒㄩ ㄋㄧˇ ㄋㄨㄥˊ ㄧㄝˋ.',
            pinyin: 'zai4 zhe4 ge4 you2 xi4 zhong1, ni3 ke3 yi3 ti3 yan4 xu1 ni3 nong2 ye4.',
            translation: 'このゲームでは、 農業を仮想的に体験する事ができます。',
            memo: ''
          },
          {
            word: '現實',
            sentence: '我遭遇過只有一百元得過一個星期的殘酷的現實。',
            bopomofo: 'ㄨㄛˇ ㄗㄠ ㄩˋ ㄍㄨㄛˋ ㄓˇ ㄧㄡˇ ㄧ ㄅㄞˇ ㄩㄢˊ ㄉㄟˇ ㄍㄨㄛˋ ㄧˊ ㄍㄜˋ ㄒㄧㄥ ㄑㄧˊ ㄉㄜ˙ ㄘㄢˊ ㄎㄨˋ ㄉㄜ˙ ㄒㄧㄢˋ ㄕˊ.',
            pinyin: 'wo3 zao1 yu4 guo4 zhi3 you3 yi1 bai3 yuan2 dei3 guo4 yi1 ge4 xing1 qi2 de can2 ku4 de xian4 shi2.',
            translation: 'たった100元で10日過ごさなくてはいけない厳しい現実に直面しています。',
            memo: ''
          },
          {
            word: '心理',
            sentence: '家裡所有的事都得靠她一個人， 對她來說很大的心理負擔。',
            bopomofo: 'ㄐㄧㄚ ㄌㄧˇ ㄙㄨㄛˇ ㄧㄡˇ ㄉㄜ˙ ㄕˋ ㄉㄡ ㄉㄟˇ ㄎㄠˋ ㄊㄚ ㄧˊ ㄍㄜ˙ ㄖㄣˊ, ㄉㄨㄟˋ ㄊㄚ ㄌㄞˊ ㄕㄨㄛ ㄏㄣˇ ㄉㄚˋ ㄉㄜ˙ ㄒㄧㄣ ㄌㄧˇ ㄈㄨˋ ㄉㄢ.',
            pinyin: 'jia1 li3 suo3 you3 de shi4 dou1 dei3 kao4 ta1 yi1 ge4 ren2, dui4 ta1 lai2 shuo1 hen3 da4 de xin1 li3 fu4 dan1.',
            translation: '家の中の事を全て一人でしなければならないのは、 彼女にとって大きな心理的負担です。',
            memo: ''
          },
          {
            word: '即使',
            sentence: '即使是掉在地上的食物， 在三秒內你都可以吃。',
            bopomofo: 'ㄐㄧˊ ㄕˇ ㄕˋ ㄉㄧㄠˋ ㄗㄞˋ ㄉㄧˋ ㄕㄤˋ ㄉㄜ˙ ㄕˊ ㄨˋ, ㄗㄞˋ ㄙㄢ ㄇㄧㄠˇ ㄋㄟˋ ㄋㄧˇ ㄉㄡ ㄎㄜˇ ㄧˇ ㄔ.',
            pinyin: 'ji2 shi3 shi4 diao4 zai4 di4 shang4 de shi2 wu4, zai4 san1 miao3 nei4 ni3 dou1 ke3 yi3 chi1.',
            translation: '床に落ちた食べ物でも、 3秒以内なら食べられます。',
            memo: ''
          },
          {
            word: '責備',
            sentence: '因為我昨天吃了太多大蒜（味道太濃），我受到了大家的責備。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄨㄛˇ ㄗㄨㄛˊ ㄊㄧㄢ ㄔ ㄌㄜ˙ ㄊㄞˋ ㄉㄨㄛ ㄉㄚˋ ㄙㄨㄢˋ (ㄨㄟˋ ㄉㄠˋ ㄊㄞˋ ㄋㄨㄥˊ), ㄨㄛˇ ㄕㄡˋ ㄉㄠˋ ㄌㄜ˙ ㄉㄚˋ ㄐㄧㄚ ㄉㄜ˙ ㄗㄜˊ ㄅㄟˋ.',
            pinyin: 'yin1 wei4 wo3 zuo2 tian1 chi1 le tai4 duo1 da4 suan4 (wei4 dao4 tai4 nong2), wo3 shou4 dao4 le da4 jia1 de ze2 bei4.',
            translation: '昨日食べ過ぎたニンニクの臭いのせいで、 みんなから非難されました。',
            memo: ''
          },
          {
            word: '期待',
            sentence: '我以為家裡有誰會叫醒我, 那個期待被出賣了。',
            bopomofo: 'ㄨㄛˇ ㄧˇ ㄨㄟˊ ㄐㄧㄚ ㄌㄧˇ ㄧㄡˇ ㄕㄨㄟˊ ㄏㄨㄟˋ ㄐㄧㄠˋ ㄒㄧㄥˇ ㄨㄛˇ, ㄋㄚˋ ㄍㄜˋ ㄑㄧ ㄉㄞˋ ㄅㄟˋ ㄔㄨ ㄇㄞˋ ㄌㄜ˙.',
            pinyin: 'wo3 yi3 wei2 jia1 li3 you3 shei2 hui4 jiao4 xing3 wo3, na4 ge4 qi1 dai4 bei4 chu1 mai4 le.',
            translation: '家族の誰かが起こしてくれるだろうと思っていましたが、 その期待は裏切られました。',
            memo: ''
          },
          {
            word: '喘氣',
            sentence: '因為我缺乏運動， 只是上下樓梯就讓我喘氣了。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄨㄛˇ ㄑㄩㄝ ㄈㄚˊ ㄩㄣˋ ㄉㄨㄥˋ, ㄓˇ ㄕˋ ㄕㄤˋ ㄒㄧㄚˋ ㄌㄡˊ ㄊㄧ ㄐㄧㄡˋ ㄖㄤˋ ㄨㄛˇ ㄔㄨㄢˇ ㄑㄧˋ ㄌㄜ˙.',
            pinyin: 'yin1 wei4 wo3 que1 fa2 yun4 dong4, zhi3 shi4 shang4 xia4 lou2 ti1 jiu4 rang4 wo3 chuan3 qi4 le.',
            translation: '運動不足なので、　階段を上り下りするだけで息が上がってしまいます。',
            memo: ''
          },
          {
            word: '自在',
            sentence: '我想在南部小島上悠閒自在地渡過。',
            bopomofo: 'ㄨㄛˇ ㄒㄧㄤˇ ㄗㄞˋ ㄋㄢˊ ㄅㄨˋ ㄒㄧㄠˇ ㄉㄠˇ ㄕㄤˋ ㄧㄡ ㄒㄧㄢˊ ㄗˋ ㄗㄞˋ ㄉㄜ˙ ㄉㄨˋ ㄍㄨㄛˋ.',
            pinyin: 'wo3 xiang3 zai4 nan2 bu4 xiao3 dao3 shang4 you1 jian1 zi4 zai4 de du4 guo4.',
            translation: '南の島でのんびり気ままに暮らしたいです。',
            memo: ''
          },
          {
            word: '交友',
            sentence: '為了在新的地方交友, 你既得變友好又有耐心。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄗㄞˋ ㄒㄧㄣ ㄉㄜ˙ ㄉㄧˋ ㄈㄤ ㄐㄧㄠ ㄧㄡˇ, ㄋㄧˇ ㄐㄧˋ ㄉㄟˇ ㄅㄧㄢˋ ㄧㄡˇ ㄏㄠˇ ㄧㄡˋ ㄧㄡˇ ㄋㄞˋ ㄒㄧㄣ.',
            pinyin: 'wei4 le zai4 xin1 de di4 fang1 jiao1 you3, ni3 ji4 dei3 bian4 you3 hao3 you4 you3 nai4 xin1.',
            translation: '新しい場所で友達を作るには、 友好的でかつ忍耐強くならなければなりません。',
            memo: ''
          },
          {
            word: '暴力',
            sentence: '給孩子看有暴力場面的電影有很壞的影響。',
            bopomofo: 'ㄍㄟˇ ㄏㄞˊ ㄗ˙ ㄎㄢˋ ㄧㄡˇ ㄅㄠˋ ㄌㄧˋ ㄔㄤˇ ㄇㄧㄢˋ ㄉㄧˊ ㄉㄧㄢˋ ㄧㄥˇ ㄧㄡˇ ㄏㄣˇ ㄏㄨㄞˋ ㄉㄜ˙ ㄧㄥˇ ㄒㄧㄤˇ.',
            pinyin: 'gei3 hai2 zi kan4 you3 bao4 li4 chang3 mian4 de dian4 ying3 you3 hen3 huai4 de ying3 xiang3.',
            translation: '暴力的なシーンがある映画を見せるのは、 子どもにとって悪影響です。',
            memo: ''
          },
          {
            word: '點',
            sentence: '輸入信息完成後請你點OK按鈕。',
            bopomofo: 'ㄕㄨ ㄖㄨˋ ㄒㄧㄣˋ ㄒㄧ ㄨㄢˊ ㄔㄥˊ ㄏㄡˋ ㄑㄧㄥˇ ㄋㄧˇ ㄉㄧㄢˇ OK ㄢˋ ㄋㄧㄡˇ.',
            pinyin: 'shu1 ru4 xin4 xi1 wan2 cheng2 hou4 qing3 ni3 dian3 OK an4 niu3.',
            translation: '情報を入力したら、 OKボタンをクリックしてください。',
            memo: ''
          },
          {
            word: '懂得',
            sentence: '他一有不懂得的東西， 他就立即問別人。',
            bopomofo: 'ㄊㄚ ㄧ ㄧㄡˇ ㄅㄨˋ ㄉㄨㄥˇ ㄉㄜ˙ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙ , ㄊㄚ ㄐㄧㄡˋ ㄌㄧˋ ㄐㄧˊ ㄨㄣˋ ㄅㄧㄝˊ ㄖㄣˊ.',
            pinyin: 'ta1 yi1 you3 bu4 dong3 de de dong1 xi, ta1 jiu4 li4 ji2 wen4 bie2 ren2.',
            translation: '彼は、 わからないことがあればすぐに他の人に尋ねます。',
            memo: ''
          },
          {
            word: '★陷阱',
            sentence: '我認為賺錢的花言巧語通常是一個陷阱。',
            bopomofo: 'ㄨㄛˇ ㄖㄣˋ ㄨㄟˊ ㄓㄨㄢˋ ㄑㄧㄢˊ ㄉㄜ˙ ㄏㄨㄚ ㄧㄢˊ ㄑㄧㄠˇ ㄩˇ ㄊㄨㄥ ㄔㄤˊ ㄕˋ ㄧˊ ㄍㄜˋ ㄒㄧㄢˋ ㄐㄧㄥˇ.',
            pinyin: 'wo3 ren4 wei2 zhuan4 qian2 de hua1 yan2 qiao3 yu3 tong1 chang2 shi4 yi1 ge4 xian4 jing3.',
            translation: 'お金儲けのうまい話は、 大体罠だと思います。',
            memo: '??'
          },
          {
            word: '★明星高中',
            sentence: '那個孩子為了念明星高中目前很努力地學習。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄏㄞˊ ㄗ˙ ㄨㄟˋ ㄌㄜ˙ ㄋㄧㄢˋ ㄇㄧㄥˊ ㄒㄧㄥ ㄍㄠ ㄓㄨㄥ ㄇㄨˋ ㄑㄧㄢˊ ㄏㄣˇ ㄋㄨˇ ㄌㄧˋ ㄉㄜ˙ ㄒㄩㄝˊ ㄒㄧˊ.',
            pinyin: 'na4 ge4 hai2 zi wei4 le nian4 ming2 xing1 gao1 zhong1 mu4 qian2 hen3 nu3 li4 de xue2 xi2.',
            translation: 'あの子は、 進学校に行くために一生懸命勉強しています。',
            memo: '※明星高中=進学校?'
          },
          {
            word: '早出晚歸',
            sentence: '老公最近每天早出晚歸， 他可能出軌了。',
            bopomofo: 'ㄌㄠˇ ㄍㄨㄥ ㄗㄨㄟˋ ㄐㄧㄣˋ ㄇㄟˇ ㄊㄧㄢ ㄗㄠˇ ㄔㄨ ㄨㄢˇ ㄍㄨㄟ, ㄊㄚ ㄎㄜˇ ㄋㄥˊ ㄔㄨ ㄍㄨㄟˇ ㄌㄜ˙.',
            pinyin: 'lao3 gong1 zui4 jin4 mei3 tian1 zao3 chu1 wan3 gui1, ta1 ke3 neng2 chu1 gui3 les.',
            translation: '夫は最近毎日朝早く出かけて夜遅く帰ってくるので、 浮気をしているのかもしれません。',
            memo: ''
          },
          {
            word: '打開',
            sentence: '既然貓想要, 我就打開了貓罐給牠吃。',
            bopomofo: 'ㄐㄧˋ ㄖㄢˊ ㄇㄠ ㄒㄧㄤˇ ㄧㄠˋ, ㄨㄛˇ ㄐㄧㄡˋ ㄉㄚˇ ㄎㄞ ㄌㄜ˙ ㄇㄠ ㄍㄨㄢˋ ㄍㄟˇ ㄊㄚ ㄔ.',
            pinyin: 'ji4 ran2 mao1 xiang3 yao4, wo3 jiu4 da3 kai1 le mao1 guan4 gei3 ta1 chi1.',
            translation: '猫が欲しがっていたので、 猫缶を開けて食べさせました。',
            memo: ''
          },
          {
            word: '喘不過氣',
            sentence: '他急著跑來了， 現在喘不過氣來。',
            bopomofo: 'ㄊㄚ ㄐㄧˊ ㄓㄜ˙ ㄆㄠˇ ㄌㄞˊ ㄌㄜ˙, ㄒㄧㄢˋ ㄗㄞˋ ㄔㄨㄢˇ ㄅㄨˊ ㄍㄨㄛˋ ㄑㄧˋ ㄌㄞˊ.',
            pinyin: 'ta1 ji2 zhe pao3 lai2 le, xian4 zai4 chuan3 bu2 guo4 qi4 lai2.',
            translation: '彼は急いで走って来たので、 息を切らしています。',
            memo: ''
          },
          {
            word: '躲進',
            sentence: '害羞的孩子躲在媽媽的後面。',
            bopomofo: 'ㄏㄞˋ ㄒㄧㄡ ㄉㄜ˙ ㄏㄞˊ ㄗ˙ ㄉㄨㄛˇ ㄗㄞˋ ㄇㄚ ㄇㄚ ㄉㄜ˙ ㄏㄡˋ ㄇㄧㄢˋ.',
            pinyin: 'hai4 xiu1 de hai2 zi duo3 zai4 ma1 ma1 de hou4 mian4.',
            translation: '恥ずかしがり屋の子供は、 母親の後ろに隠れてしまいました。',
            memo: '※「躲進」は使えない?'
          },
          {
            word: '掉進',
            sentence: '我不小心把硬幣掉進排水溝了。',
            bopomofo: 'ㄨㄛˇ ㄅㄨˋ ㄒㄧㄠˇ ㄒㄧㄣ ㄅㄚˇ ㄧㄥˋ ㄅㄧˋ ㄉㄧㄠˋ ㄐㄧㄣˋ ㄆㄞˊ ㄕㄨㄟˇ ㄍㄡ ㄌㄜ˙.',
            pinyin: 'wo3 bu4 xiao3 xin1 ba3 ying4 bi4 diao4 jin4 pai2 shui3 gou1 le.',
            translation: '不注意で、 小銭を側溝に落としてしまいました。',
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
