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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第2章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第2章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      data: {
        title: '當代中文課程課2・第2章',
        words: [
          {
            word: '還是',
            sentence: '雨和風太大了, 你還是穿雨衣吧。',
            bopomofo: 'ㄩˇ ㄏㄢˋ ㄈㄥ ㄊㄞˋ ㄉㄚˋ ㄌㄜ˙, ㄋㄧˇ ㄏㄞˊ ㄕˋ ㄔㄨㄢ ㄩˇ ㄧ ㄅㄚ˙.',
            pinyin: 'yu3 han4 feng1 tai4 da4 le, ni3 hai2 shi4 chuan1 yu3 yi1 ba.',
            translation: '雨も風も強いので、 レインコートを着ていった方がいいですよ。'
          },

          {
            word: '早',
            sentence: '早! 今天我們去吃哪家早點呢?',
            bopomofo: 'ㄗㄠˇ! ㄐㄧㄣ ㄊㄧㄢ ㄨㄛˇ ㄇㄣ˙ ㄑㄩˋ ㄔ ㄋㄚˇ ㄐㄧㄚ ㄗㄠˇ ㄉㄧㄢˇ ㄋㄜ˙?',
            pinyin: 'zao3! jin1 tian1 wo3 men qu4 chi1 na3 jia1 zao3 dian3 ne?',
            translation: 'おはようございます！ 今日はどこの朝ご飯屋さんに行きましょうか?'
          },

          {
            word: '約',
            sentence: '我約了孩子去公園玩。',
            bopomofo: 'ㄨㄛˇ ㄩㄝ ㄌㄜ˙ ㄏㄞˊ ㄗ˙ ㄑㄩˋ ㄍㄨㄥ ㄩㄢˊ ㄨㄢˊ.',
            pinyin: 'wo3 yue1 le hai2 zi3 qu4 gong1 yuan2 wan2.',
            translation: '公園に遊びに行こうと子供を誘いました。'
          },

          {
            word: '對面',
            sentence: '車站對面的大樓是我們會住的飯店。',
            bopomofo: 'ㄔㄜ ㄓㄢˋ ㄉㄨㄟˋ ㄇㄧㄢˋ ㄉㄧˊ ㄉㄚˋ ㄌㄡˊ ㄕˋ ㄨㄛˇ ㄇㄣ˙ ㄏㄨㄟˋ ㄓㄨˋ ㄉㄜ˙ ㄈㄢˋ ㄉㄧㄢˋ.',
            pinyin: 'che1 zhan4 dui4 mian4 de da4 lou2 shi4 wo3 men hui4 zhu4 de fan4 dian4.',
            translation: '駅の向かいの建物が私達が泊まるホテルです。'
          },

          {
            word: '直接',
            sentence: '現在沒有直接往目的地航班。',
            bopomofo: 'ㄒㄧㄢˋ ㄗㄞˋ ㄇㄟˊ ㄧㄡˇ ㄓˊ ㄐㄧㄝ ㄨㄤˇ ㄇㄨˋ ㄉㄧˋ ㄉㄧˋ ㄏㄤˊ ㄅㄢ.',
            pinyin: 'xian4 zai4 mei2 you3 zhi2 jie1 wang3 mu4 di4 di4 hang2 ban1.',
            translation: '現在、目的地への直行便はありません。'
          },

          {
            word: '不必',
            sentence: '你不必帶東西， 人來了就好。',
            bopomofo: 'ㄋㄧˇ ㄅㄨˊ ㄅㄧˋ ㄉㄞˋ ㄉㄨㄥ ㄒㄧ˙， ㄖㄣˊ ㄌㄞˊ ㄌㄜ˙ ㄐㄧㄡˋ ㄏㄠˇ.',
            pinyin: 'ni3 bu2 bi4 dai4 dong1 xi, ren2 lai2 le jiu4 hao3.',
            translation: 'ものを持ってくる必要はありません、 来るだけで大丈夫です。'
          },

          {
            word: '換',
            sentence: '到台南車站在哪裡換車?',
            bopomofo: 'ㄉㄠˋ ㄊㄞˊ ㄋㄢˊ ㄔㄜ ㄓㄢˋ ㄗㄞˋ ㄋㄚˇ ㄌㄧˇ ㄏㄨㄢˋ ㄔㄜ?',
            pinyin: 'dao4 tai2 nan2 che1 zhan4 zai4 na3 li3 huan4 che1?',
            translation: '台南駅へ行くにはどこで乗り換えたらいいですか?'
          },

          {
            word: '車站',
            sentence: '在車站屋頂的鳥窩現在有小鳥了。',
            bopomofo: 'ㄗㄞˋ ㄔㄜ ㄓㄢˋ ㄨ ㄉㄧㄥˇ ㄉㄜ˙ ㄋㄧㄠˇ ㄨㄛ ㄒㄧㄢˋ ㄗㄞˋ ㄧㄡˇ ㄒㄧㄠˇ ㄋㄧㄠˇ ㄌㄜ˙.',
            pinyin: 'zai4 che1 zhan4 wu1 ding3 de niao3 wo1 xian4 zai4 you3 xiao3 niao3 le.',
            translation: '駅の屋根にある鳥の巣に小鳥がいます。'
          },

          {
            word: '麻煩',
            sentence: '因為有很多麻煩的文件， 今天我得加班。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄇㄚˊ ㄈㄢˊ ㄉㄜ˙ ㄨㄣˊ ㄐㄧㄢˋ， ㄐㄧㄣ ㄊㄧㄢ ㄨㄛˇ ㄉㄟˇ ㄐㄧㄚ ㄅㄢ.',
            pinyin: 'yin1 wei4 you3 hen3 duo1 ma2 fan2 de wen2 jian4, jin1 tian1 wo3 dei3 jia1 ban1.',
            translation: '面倒な書類が多いので、 今日は残業しなければなりません。'
          },

          {
            word: '趕快',
            sentence: '如果我不趕快做完功課， 我不能出去。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄨㄛˇ ㄅㄨˋ ㄍㄢˇ ㄎㄨㄞˋ ㄗㄨㄛˋ ㄨㄢˊ ㄍㄨㄥ ㄎㄜˋ， ㄨㄛˇ ㄅㄨˋ ㄋㄥˊ ㄔㄨ ㄑㄩˋ.',
            pinyin: 'ru2 guo3 wo3 bu4 gan3 kuai4 zuo4 wan2 gong1 ke4, wo3 bu4 neng2 chu1 qu4.',
            translation: '宿題を早く終わらせないと外出できません。'
          },

          {
            word: '走',
            sentence: '火車快要出發了， 買票的人要趕快走。',
            bopomofo: 'ㄏㄨㄛˇ ㄔㄜ ㄎㄨㄞˋ ㄧㄠˋ ㄔㄨ ㄈㄚ ㄌㄜ˙， ㄇㄞˇ ㄆㄧㄠˋ ㄉㄜ˙ ㄖㄣˊ ㄧㄠˋ ㄍㄢˇ ㄎㄨㄞˋ ㄗㄡˇ.',
            pinyin: 'huo3 che1 kuai4 yao4 chu1 fa1 le, mai3 piao4 de ren2 yao4 gan3 kuai4 zou3.',
            translation: '電車がもうすぐ出発するので、 チケットを買った人は早く行かなくてはいけません。'
          },

          {
            word: '班次',
            sentence: '台北捷運的班次很多， 每三分就有一班。',
            bopomofo: 'ㄊㄞˊ ㄅㄟˇ ㄐㄧㄝˊ ㄩㄣˋ ㄉㄜ˙ ㄅㄢ ㄘˋ ㄏㄣˇ ㄉㄨㄛ， ㄇㄟˇ ㄙㄢ ㄈㄣ ㄐㄧㄡˋ ㄧㄡˇ ㄧ ㄅㄢ.',
            pinyin: 'tai2 bei3 jie2 yun4 de ban1 ci4 hen3 duo1, mei3 san1 fen1 jiu4 you3 yi1 ban1.',
            translation: '台北のMRTの便はとても多いので、 3分ごとに電車が来ます。'
          },

          {
            word: '禮拜',
            sentence: '因為這個是第一次的嘗試， 準備要幾個禮拜。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄓㄜˋ ㄍㄜˋ ㄕˋ ㄉㄧˋ ㄧ ㄘˋ ㄉㄜ˙ ㄔㄤˊ ㄕˋ， ㄓㄨㄣˇ ㄅㄟˋ ㄧㄠˋ ㄐㄧˇ ㄍㄜˋ ㄌㄧˇ ㄅㄞˋ.',
            pinyin: 'yin1 wei4 zhe4 ge4 shi4 di4 yi1 ci4 de chang2 shi4, zhun3 bei4 yao4 ji3 ge4 li3 bai4.',
            translation: 'これは初めての試みなので、 準備に数週間かかります。'
          },

          {
            word: '見',
            sentence: '我們兩個白天很忙， 下班後見。',
            bopomofo: 'ㄨㄛˇ ㄇㄣ˙ ㄌㄧㄤˇ ㄍㄜˋ ㄅㄞˊ ㄊㄧㄢ ㄏㄣˇ ㄇㄤˊ， ㄒㄧㄚˋ ㄅㄢ ㄏㄡˋ ㄐㄧㄢˋ.',
            pinyin: 'wo3 men liang3 ge4 bai2 tian1 hen3 mang2, xia4 ban1 hou4 jian4.',
            translation: '私達は2人とも昼間忙しいので、 仕事が終わったら会いましょう。'
          },

          {
            word: '電腦展',
            sentence: '他每年去電腦展， 每次很驚訝技術在進步。',
            bopomofo: 'ㄊㄚ ㄇㄟˇ ㄋㄧㄢˊ ㄑㄩˋ ㄉㄧㄢˋ ㄋㄠˇ ㄓㄢˇ， ㄇㄟˇ ㄘˋ ㄏㄣˇ ㄐㄧㄥ ㄧㄚˋ ㄐㄧˋ ㄕㄨˋ ㄗㄞˋ ㄐㄧㄣˋ ㄅㄨˋ.',
            pinyin: 'ta1 mei3 nian2 qu4 dian4 nao3 zhan3, mei3 ci4 hen3 jing1 ya4 ji4 shu4 zai4 jin4 bu4.',
            translation: '彼は毎年コンピューターの展示会に行きますが、 毎回技術の進歩に驚いています。'
          },

          {
            word: '世貿展覽館',
            sentence: '世貿展覽館總是有什麼企畫展。',
            bopomofo: 'ㄕˋ ㄇㄠˋ ㄓㄢˇ ㄌㄢˇ ㄍㄨㄢˇ ㄗㄨㄥˇ ㄕˋ ㄧㄡˇ ㄕㄣˊ ㄇㄜ˙ ㄑㄧˋ ㄏㄨㄚˋ ㄓㄢˇ.',
            pinyin: 'shi4 mao4 zhan3 lan3 guan3 zong3 shi4 you3 shen2 me qi4 hua4 zhan3.',
            translation: '世貿展覽館ではいつも何かの企画展を行っています。',
            memo: '※「企畫(ㄑㄧˋ ㄏㄨㄚˋ/qi4 hua4)」の発音は台湾では 4声+4声。'
          },

          {
            word: '展覽館',
            sentence: '他借了小小的展覽館來展出他畫的畫。',
            bopomofo: 'ㄊㄚ ㄐㄧㄝˋ ㄌㄜ˙ ㄒㄧㄠˇ ㄒㄧㄠˇ ㄉㄜ˙ ㄓㄢˇ ㄌㄢˇ ㄍㄨㄢˇ ㄌㄞˊ ㄓㄢˇ ㄔㄨ ㄊㄚ ㄏㄨㄚˋ ㄉㄜ˙ ㄏㄨㄚˋ.',
            pinyin: 'ta1 jie4 le xiao3 xiao3 de zhan3 lan3 guan3 lai2 zhan3 chu1 ta1 hua4 de hua4.',
            translation: '彼は自分の絵を展示するために小さな展示場を借りました。',
            memo: '※ここでの「來」は「來做什麼」のように目的を強調していて、 「来る」という意味ではない。'
          },

          {
            word: '台北101',
            sentence: '新年的時刻， 台北101有很壯觀的煙火。',
            bopomofo: 'ㄒㄧㄣ ㄋㄧㄢˊ ㄉㄜ˙ ㄕˊ ㄎㄜˋ， ㄊㄞˊ ㄅㄟˇ 101 ㄧㄡˇ ㄏㄣˇ ㄓㄨㄤˋ ㄍㄨㄢ ㄉㄜ˙ ㄧㄢ ㄏㄨㄛˇ.',
            pinyin: 'xin1 nian2 de shi2 ke4, tai2 bei3 101 you3 hen3 zhuang4 guan1 de yan1 huo3.',
            translation: '年越しの時刻には、 台北101で壮大な花火が上がります。'
          },

          {
            word: '台北',
            sentence: '台北的房租太貴， 所以年輕人在新竹租房子。',
            bopomofo: 'ㄊㄞˊ ㄅㄟˇ ㄉㄜ˙ ㄈㄤˊ ㄗㄨ ㄊㄞˋ ㄍㄨㄟˋ， ㄙㄨㄛˇ ㄧˇ ㄋㄧㄢˊ ㄑㄧㄥ ㄖㄣˊ ㄗㄞˋ ㄒㄧㄣ ㄓㄨˊ ㄗㄨ ㄈㄤˊ ㄗ˙.',
            pinyin: 'tai2 bei3 de fang2 zu1 tai4 gui4, suo3 yi3 nian2 qing1 ren2 zai4 xin1 zhu2 zu1 fang2 zi3.',
            translation: '台北の家賃は高すぎるので、 若い人は新竹で部屋を借ります。'
          },

          {
            word: '2號線',
            sentence: '2號線的捷運是往反方向的， 你應該去1號線。',
            bopomofo: '2 ㄏㄠˋ ㄒㄧㄢˋ ㄉㄜ˙ ㄐㄧㄝˊ ㄩㄣˋ ㄕˋ ㄨㄤˇ ㄈㄢˇ ㄈㄤ ㄒㄧㄤˋ ㄉㄜ˙， ㄋㄧˇ ㄧㄥ ㄍㄞ ㄑㄩˋ 1 ㄏㄠˋ ㄒㄧㄢˋ.',
            pinyin: ' 2 hao4 xian4 de jie2 yun4 shi4 wan3 fan3 fang1 xiang4 de, ni3 ying1 gai1 qu4 1 hao4 xian4.',
            translation: '2番線の電車は反対方向へ行くので、 1番線に行った方がよいです。'
          },

          {
            word: '別急',
            sentence: '別急， 超市的打折剛剛開始。',
            bopomofo: 'ㄅㄧㄝˊ ㄐㄧˊ， ㄔㄠ ㄕˋ ㄉㄜ˙ ㄉㄚˇ ㄓㄜˊ ㄍㄤ ㄍㄤ ㄎㄞ ㄕˇ.',
            pinyin: 'bie2 ji2, chao1 shi4 de da3 zhe2 gang1 gang1 kai1 shi3.',
            translation: '急がないで下さい、 スーパーの安売りは始まったばかりです。'
          },

          {
            word: '飛機',
            sentence: '我也喜歡看飛機， 所以我常常去機場。',
            bopomofo: 'ㄨㄛˇ ㄧㄝˇ ㄒㄧˇ ㄏㄨㄢ ㄎㄢˋ ㄈㄟ ㄐㄧ， ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄔㄤˊ ㄔㄤˊ ㄑㄩˋ ㄐㄧ ㄔㄤˇ.',
            pinyin: 'wo3 ye3 xi3 huan1 kan4 fei1 ji1, suo3 yi3 wo3 chang2 chang2 qu4 ji1 chang2.',
            translation: '飛行機は見るのも好きなので、 空港にはよく行きます。'
          },

          {
            word: '轉機',
            sentence: '你得轉兩次機。 先在西班牙，然後在美國。',
            bopomofo: 'ㄋㄧˇ ㄉㄟˇ ㄓㄨㄢˇ ㄌㄧㄤˇ ㄘˋ ㄐㄧ。 ㄒㄧㄢ ㄗㄞˋ ㄒㄧ ㄅㄢ ㄧㄚˊ， ㄖㄢˊ ㄏㄡˋ ㄗㄞˋ ㄇㄟˇ ㄍㄨㄛˊ.',
            pinyin: 'ni3 dei3 zhuan3 liang3 ci4 ji1. xian1 zai4 xi1 ban1 ya2, ran2 hou4 zai4 mei3 guo2.',
            translation: 'あなたは2回トランジットする必要があります。 最初はスペインで、 次はアメリカです。'
          },

          {
            word: '機場',
            sentence: '兩個小時以前我們一定要到機場， 否則坐飛機會遲到。',
            bopomofo: 'ㄌㄧㄤˇ ㄍㄜˋ ㄒㄧㄠˇ ㄕˊ ㄧˇ ㄑㄧㄢˊ ㄨㄛˇ ㄇㄣ˙ ㄧˊ ㄉㄧㄥˋ ㄧㄠˋ ㄉㄠˋ ㄐㄧ ㄔㄤˇ， ㄈㄡˇ ㄗㄜˊ ㄗㄨㄛˋ ㄈㄟ ㄐㄧ ㄏㄨㄟˋ ㄔˊ ㄉㄠˋ.',
            pinyin: 'liang3 ge4 xiao3 shi2 yi3 qian2 wo3 men yi1 ding4 yao4 dao4 ji1 chang2, fou3 ze2 zuo4 fei1 ji1 hui4 chi2 dao4.',
            translation: '2時間前には空港に着かなくてはいけません、 さもないと飛行機に乗り遅れます。'
          },

          {
            word: '巴士',
            sentence: '坐台北的巴士可以用悠遊卡。',
            bopomofo: 'ㄗㄨㄛˋ ㄊㄞˊ ㄅㄟˇ ㄉㄜ˙ ㄅㄚ ㄕˋ ㄎㄜˇ ㄧˇ ㄩㄥˋ ㄧㄡ ㄧㄡˊ ㄎㄚˇ.',
            pinyin: 'zuo4 tai2 bei3 de ba1 shi4 ke3 yi3 yong4 you1 you2 ka3.',
            translation: '台北でバスに乗るには悠遊カードが使えます。'
          },

          {
            word: '市區',
            sentence: '通勤的時間市區太擁擠、 我們別的時間出門吧。',
            bopomofo: 'ㄊㄨㄥ ㄑㄧㄣˊ ㄉㄜ˙ ㄕˊ ㄐㄧㄢ ㄕˋ ㄑㄩ ㄊㄞˋ ㄩㄥ ㄐㄧˇ、 ㄨㄛˇ ㄇㄣ˙ ㄅㄧㄝˊ ㄉㄜ˙ ㄕˊ ㄐㄧㄢ ㄔㄨ ㄇㄣˊ ㄅㄚ˙.',
            pinyin: 'tong1 qin2 de shi2 jian1 shi4 qu1 tai4 yong1 ji3, wo3 men bie2 de shi2 jian1 chu1 men2 ba.',
            translation: '通勤時間は市内がとても混んでいるので、 別の時間に出かけましょう。'
          },

          {
            word: '下',
            sentence: '在台北車站別忘地下車。 從這一站算第三站到了。',
            bopomofo: 'ㄗㄞˋ ㄊㄞˊ ㄅㄟˇ ㄔㄜ ㄓㄢˋ ㄅㄧㄝˊ ㄨㄤˋ ㄉㄜ˙ ㄒㄧㄚˋ ㄔㄜ。 ㄘㄨㄥˊ ㄓㄜˋ ㄧ ㄓㄢˋ ㄙㄨㄢˋ ㄉㄧˋ ㄙㄢ ㄓㄢˋ ㄉㄠˋ ㄌㄜ˙.',
            pinyin: 'zai4 tai2 be3i che1 zhan4 bie2 wang4 de xia4 che1. cong2 zhe4 yi1 zhan4 suan4 di4 san1 zhan4 dao4 le.',
            translation: '台北駅でバスを降りるのを忘れないで下さい。 この駅から三番目です。'
          },

          {
            word: '交通',
            sentence: '為了讓交通變通暢， 這個城市開始出借腳踏車。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄖㄤˋ ㄐㄧㄠ ㄊㄨㄥ ㄅㄧㄢˋ ㄊㄨㄥ ㄔㄤˋ， ㄓㄜˋ ㄍㄜˋ ㄔㄥˊ ㄕˋ ㄎㄞ ㄕˇ ㄔㄨ ㄐㄧㄝˋ ㄐㄧㄠˇ ㄊㄚˋ ㄔㄜ.',
            pinyin: 'wei4 le rang4 jiao1 tong1 bian4 tong1 chang4, zhe4 ge4 cheng2 shi4 kai1 shi3 chu1 jie4 jiao3 ta4 che1.',
            translation: '交通をスムーズにするために、 市は自転車の貸し出しを始めました。'
          },

          {
            word: '便利',
            sentence: '最近出現了找餐廳的便利網站。',
            bopomofo: 'ㄗㄨㄟˋ ㄐㄧㄣˋ ㄔㄨ ㄒㄧㄢˋ ㄌㄜ˙ ㄓㄠˇ ㄘㄢ ㄊㄧㄥ ㄉㄜ˙ ㄅㄧㄢˋ ㄌㄧˋ ㄨㄤˇ ㄓㄢˋ.',
            pinyin: 'zui4 jin4 chu1 xian4 le zhao3 can1 ting1 de bian4 li4 wang3 zhan4.',
            translation: '最近、レストランを探すのにとても便利なウェブサイトが登場しました。'
          },

          {
            word: '到處',
            sentence: '因為是情人節， 到處都有情侶。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄕˋ ㄑㄧㄥˊ ㄖㄣˊ ㄐㄧㄝˊ， ㄉㄠˋ ㄔㄨˋ ㄉㄡ ㄧㄡˇ  ㄧㄥˊ ㄌㄩˇ.',
            pinyin: 'yin1 wei4 shi4 qing2 ren2 jie2, dao4 chu4 dou1 you3 qing2 lu3.',
            translation: 'バレンタインデーなので、 いたるところにカップルがいます。'
          },

          {
            word: '路線',
            sentence: '這個路線雖然便宜可是要轉太多次， 我們做別的路線吧。',
            bopomofo: 'ㄓㄜˋ ㄍㄜˋ ㄌㄨˋ ㄒㄧㄢˋ ㄙㄨㄟ ㄖㄢˊ ㄆㄧㄢˊ ㄧˊ ㄎㄜˇ ㄕˋ ㄧㄠˋ ㄓㄨㄢˇ ㄊㄞˋ ㄉㄨㄛ ㄘˋ， ㄨㄛˇ ㄇㄣ˙ ㄗㄨㄛˋ ㄅㄧㄝˊ ㄉㄜ˙ ㄌㄨˋ ㄒㄧㄢˋ ㄅㄚ˙.',
            pinyin: 'zhe4 ge4 lu4 xian4 sui1 ran2 pian2 yi2 ke3 shi4 yao4 zhuan3 tai4 duo1 ci4, wo3 men zuo4 bie2 de lu4 xian1 ba.',
            translation: 'このルートは安いですが乗り換えが多すぎるので、 別のルートを使いましょう。'
          },

          {
            word: '複雜',
            sentence: '費用系統太複雜， 我放棄了報名課。',
            bopomofo: 'ㄈㄟˋ ㄩㄥˋ ㄒㄧˋ ㄊㄨㄥˇ ㄊㄞˋ ㄈㄨˋ ㄗㄚˊ， ㄨㄛˇ ㄈㄤˋ ㄑㄧˋ ㄌㄜ˙ ㄅㄠˋ ㄇㄧㄥˊ ㄎㄜˋ.',
            pinyin: 'fei4 yong4 xi4 tong3 tai4 fu4 za2, wo3 fang4 qi4 le bao4 ming2 ke4.',
            translation: '料金体系が複雑すぎるので、 授業に申し込むのを諦めました。'
          },

          {
            word: '輕鬆',
            sentence: '因為台灣是很安全的地方， 可以輕鬆旅行。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄊㄞˊ ㄨㄢ ㄕˋ ㄏㄣˇ ㄢ ㄑㄩㄢˊ ㄉㄜ˙ ㄉㄧˋ ㄈㄤ， ㄎㄜˇ ㄧˇ ㄑㄧㄥ ㄙㄨㄥ ㄌㄩˇ ㄒㄧㄥˊ.',
            pinyin: 'yin1 wei4 tai2 wan1 shi4 hen3 an1 quan2 de di4 fang1, ke3 yi3 qing1 song4 lu3 xing2.',
            translation: '台湾はとても安全な場所なので、 旅行もリラックスしてできます。'
          },

          {
            word: '東部',
            sentence: '東京的東部和西部的氣氛很不同。',
            bopomofo: 'ㄉㄨㄥ ㄐㄧㄥ ㄉㄜ˙ ㄉㄨㄥ ㄅㄨˋ ㄏㄢˋ ㄒㄧ ㄅㄨˋ ㄉㄜ˙ ㄑㄧˋ ㄈㄣ ㄏㄣˇ ㄅㄨˋ ㄊㄨㄥˊ.',
            pinyin: 'dong1 jing1 de dong1 bu4 han4 xi1 bu4 de qi4 fen1 hen3 bu4 tong2.',
            translation: '東京の東部と西部は雰囲気が違います。'
          },

          {
            word: '海邊',
            sentence: '如果你住在海邊， 留著短髮比較方便。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄓㄨˋ ㄗㄞˋ ㄏㄞˇ ㄅㄧㄢ， ㄌㄧㄡˊ ㄓㄜ˙ ㄉㄨㄢˇ ㄈㄚ ㄅㄧˇ ㄐㄧㄠˋ ㄈㄤ ㄅㄧㄢˋ.',
            pinyin: 'ru2 guo3 ni3 zhu4 zai4 hai3 bian1, liu2 zhe duan3 fa4 bi3 jiao4 fang1 bian4.',
            translation: '海沿いに住むなら、 髪は短くしておいた方が便利です。'
          },

          {
            word: '島',
            sentence: '從海灘可以看見小小的島。',
            bopomofo: 'ㄘㄨㄥˊ ㄏㄞˇ ㄊㄢ ㄎㄜˇ ㄧˇ ㄎㄢˋ ㄐㄧㄢˋ ㄒㄧㄠˇ ㄒㄧㄠˇ ㄉㄜ˙ ㄉㄠˇ.',
            pinyin: 'cong2 hai3 tan1 ke3 yi3 kan4 jian4 xiao3 xiao3 de dao3.',
            translation: 'ビーチからは小さな島が見えます。'
          },

          {
            word: '搭',
            sentence: '從台灣到外國去， 搭飛機比搭船快。',
            bopomofo: 'ㄘㄨㄥˊ ㄊㄞˊ ㄨㄢ ㄉㄠˋ ㄨㄞˋ ㄍㄨㄛˊ ㄑㄩˋ， ㄉㄚ ㄈㄟ ㄐㄧ ㄅㄧˇ ㄉㄚ ㄔㄨㄢˊ ㄎㄨㄞˋ.',
            pinyin: 'cong2 tai2 wan1 dao4 wai4 guo2 qu4, da1 fei1 ji1 bi3 da1 chuan2 kuai4.',
            translation: '台湾から海外へ行く時、 船よりも飛行機の方が早いです。'
          },

          {
            word: '船',
            sentence: '有船的人必須拿到執照才行嗎?',
            bopomofo: 'ㄧㄡˇ ㄔㄨㄢˊ ㄉㄜ˙ ㄖㄣˊ ㄅㄧˋ ㄒㄩ ㄋㄚˊ ㄉㄠˋ ㄓˊ ㄓㄠˋ ㄘㄞˊ ㄒㄧㄥˊ ㄇㄚ˙?',
            pinyin: 'you3 chuan2 de ren2 bi4 xu1 na2 dao4 zhi2 zhao4 cai2 xing2 ma?',
            translation: '船を所有する人はライセンスを取る必要がありますか?',
            memo: '※ここでの「行」は「可以」の意。'
          },

          {
            word: '地',
            sentence: '因為平日沒有塞車, 可以舒服地開車。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄆㄧㄥˊ ㄖˋ ㄇㄛˋ ㄧㄡˇ ㄙㄞ ㄔㄜ, ㄎㄜˇ ㄧˇ ㄕㄨ ㄈㄨ˙ ㄉㄜ˙ ㄎㄞ ㄔㄜ.',
            pinyin: 'yin1 wei4 ping2 ri4 mei2 you3 sai1 che1, ke3 yi3 shu1 fu de kai1 che1.',
            translation: '平日は渋滞がないので、 快適に運転できます。'
          },

          {
            word: '美美',
            sentence: '美美是在日本的外國語言課本很一般的名字。',
            bopomofo: 'ㄇㄟˇ ㄇㄟˇ ㄕˋ ㄗㄞˋ ㄖˋ ㄅㄣˇ ㄉㄜ˙ ㄨㄞˋ ㄍㄨㄛˊ ㄩˇ ㄧㄢˊ ㄎㄜˋ ㄅㄣˇ ㄏㄣˇ ㄧˋ ㄅㄢ ㄉㄜ˙ ㄇㄧㄥˊ ㄗˋ.',
            pinyin: 'mei3 mei3 shi4 zai4 ri4 ben3 de wai4 guo2 yu3 yan2 ke4 ben3 hen3 yi1 ban1 de ming2 zi4.',
            translation: '美美は日本の外国語の教科書に出てくる一般的な名前です。'
          },

          {
            word: '法國',
            sentence: '法國菜很貴， 但是法國人說他們也有一般家庭料理。',
            bopomofo: 'ㄈㄚˇ ㄍㄨㄛˊ ㄘㄞˋ ㄏㄣˇ ㄍㄨㄟˋ， ㄉㄢˋ ㄕˋ ㄈㄚˇ ㄍㄨㄛˊ ㄖㄣˊ ㄕㄨㄛ ㄊㄚ ㄇㄣ˙ ㄧㄝˇ ㄧㄡˇ ㄧˋ ㄅㄢ ㄐㄧㄚ ㄊㄧㄥˊ ㄌㄧㄠˋ ㄌㄧˇ.',
            pinyin: 'fa3 guo2 cai4 hen3 gui4, dan4 shi4 fa3 guo2 ren2 shuo1 ta1 men ye3 you3 yi1 ban1 jia1 ting2 liao4 li3.',
            translation: 'フランス料理はとても高価ですが、 フランス人は家庭料理もあると言います。'
          },

          {
            word: '歐洲',
            sentence: '台灣和歐洲的時差太大， 選擇打電話的時間很難。',
            bopomofo: 'ㄊㄞˊ ㄨㄢ ㄏㄜˊ ㄡ ㄓㄡ ㄉㄜ˙ ㄕˊ ㄔㄚˋ ㄊㄞˋ ㄉㄚˋ， ㄒㄩㄢˇ ㄗㄜˊ ㄉㄚˇ ㄉㄧㄢˋ ㄏㄨㄚˋ ㄉㄜ˙ ㄕˊ ㄐㄧㄢ ㄏㄣˇ ㄋㄢˊ.',
            pinyin: 'tai2 wan1 han4 ou1 zhou1 de shi2 cha4 tai4 da4, xuan3 ze2 da3 dian4 hua4 de shi2 jian1 hen3 nan2.',
            translation: '台湾とヨーロッパは時差が大きいので、 電話をかける時間を選ぶのが難しいです。'
          },

          {
            word: '悠遊卡',
            sentence: '在便利商店可以儲值到悠遊卡。',
            bopomofo: 'ㄗㄞˋ ㄅㄧㄢˋ ㄌㄧˋ ㄕㄤ ㄉㄧㄢˋ ㄎㄜˇ ㄧˇ ㄔㄨˇ ㄓˊ ㄉㄠˋ ㄧㄡ ㄧㄡˊ ㄎㄚˇ.',
            pinyin: 'zai4 bian4 li4 shang1 dian4 ke3 yi3 chu3 zhi2 dao4 you1 you2 ka3.',
            translation: 'コンビニで、 悠遊カードにお金をチャージできます。'
          },

          {
            word: '綠島',
            sentence: '在綠島你可以看到很多海龜， 但是肯定不可以摸。',
            bopomofo: 'ㄗㄞˋ ㄌㄩˋ ㄉㄠˇ ㄋㄧˇ ㄎㄜˇ ㄧˇ ㄎㄢˋ ㄉㄠˋ ㄏㄣˇ ㄉㄨㄛ ㄏㄞˇ ㄍㄨㄟ， ㄉㄢˋ ㄕˋ ㄎㄣˇ ㄉㄧㄥˋ ㄅㄨˋ ㄎㄜˇ ㄧˇ  ㄇㄛ.',
            pinyin: 'zai4 lu4 dao3 ni3 ke3 yi3 kan4 dao4 hen3 duo1 hai3 gui1, dan4 shi4 ken3 ding4 bu4 ke3 yi3 mo1.',
            translation: '綠島ではたくさんの海亀を見る事が出来ますが、 絶対に触ってはいけません。'
          },

          {
            word: '東南邊',
            sentence: '亞洲東南邊的咖喱常常放椰奶。',
            bopomofo: 'ㄧㄚˋ ㄓㄡ ㄉㄨㄥ ㄋㄢˊ ㄅㄧㄢ ㄉㄜ˙ ㄍㄚ ㄌㄧˊ ㄔㄤˊ ㄔㄤˊ ㄈㄤˋ ㄧㄝ ㄋㄞˇ.',
            pinyin: 'ya4 zhou1 dong1 nan2 bian1 de ga1 li2 chang2 chang2 fang4 ye1 nai3.',
            translation: '東南アジアのカレーにはよくココナッツミルクが使われています。'
          },

          {
            word: '好好地',
            sentence: '兒子今天很好, 從早上好好地整理房間。',
            bopomofo: 'ㄦˊ ㄗ˙ ㄐㄧㄣ ㄊㄧㄢ ㄏㄣˇ ㄏㄠˇ, ㄘㄨㄥˊ ㄗㄠˇ ㄕㄤˋ ㄏㄠˇ ㄏㄠˇ ㄉㄜ˙ ㄓㄥˇ ㄌㄧˇ ㄈㄤˊ ㄐㄧㄢ.',
            pinyin: 'er2 zi3 jin1 tian1 hen3 hao3, cong2 zao3 shang4 hao3 hao3 de zheng3 li3 fang2 jian1.',
            translation: '息子は今日とても良い子で、 朝からちゃんと部屋を片付けていました。',
            memo: '※例2：「好好地清楚地說」=「ちゃんとハッキリ言う」。'
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
