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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第12章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第12章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      data: {
        title: '當代中文課程課2・第12章',
        words: [
          {
            word: '新',
            sentence: '新穿的鞋子總是有一點難走。',
            bopomofo: 'ㄒㄧㄣ ㄔㄨㄢ ㄉㄜ˙ ㄒㄧㄝˊ ㄗˇ ㄗㄨㄥˇ ㄕˋ ㄧㄡˇ ㄧˋ ㄉㄧㄢˇ ㄋㄢˊ ㄗㄡˇ.',
            pinyin: 'xin1 chuan1 de xie2 zi3 zong3 shi4 you3 yi1 dian3 nan2 zou3.',
            translation: '新しい靴はいつも少し歩きにくいです。',
            memo: ''
          },
          {
            word: '開',
            sentence: '我覺得開小籠包店比開珍珠奶茶店好。',
            bopomofo: 'ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄎㄞ ㄒㄧㄠˇ ㄌㄨㄥˊ ㄅㄠ ㄉㄧㄢˋ ㄅㄧˇ ㄎㄞ ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ ㄉㄧㄢˋ ㄏㄠˇ.',
            pinyin: 'wo3 jue2 de kai1 xiao3 long2 bao1 dian4 bi3 kai1 zhen1 zhu1 nai3 cha2 dian4 hao3.',
            translation: '小籠包店を開く方が、 タピオカミルクティー店を開くよりも良いと思います。',
            memo: ''
          },
          {
            word: '素食',
            sentence: '我喜歡吃肉, 但是有的時候也試試看素食。',
            bopomofo: 'ㄨㄛˇ ㄒㄧˇ ㄏㄨㄢ ㄔ ㄖㄡˋ, ㄉㄢˋ ㄕˋ ㄧㄡˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄧㄝˇ ㄕˋ ㄕˋ ㄎㄢˋ ㄙㄨˋ ㄕˊ.',
            pinyin: 'wo3 xi3 huan1 chi1 rou4, dan4 shi4 you3 de shi2 hou4 ye3 shi4 shi4 kan4 su4 shi2.',
            translation: '肉を食べるのが好きですが、 時にはベジタリアンフードも試します。',
            memo: ''
          },
          {
            word: '錯',
            sentence: '那個學生對老師問的答案都很錯。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄒㄩㄝˊ ㄕㄥ ㄉㄨㄟˋ ㄌㄠˇ ㄕ ㄨㄣˋ ㄉㄜ˙ ㄉㄚˊ ㄢˋ ㄉㄡ ㄏㄣˇ ㄘㄨㄛˋ.',
            pinyin: 'na4 ge4 xue2 sheng1 dui4 lao3 shi1 wen4 de da2 an4 dou1 hen3 cuo4.',
            translation: '先生の質問に対する生徒の答えはすべて間違っていました。',
            memo: ''
          },
          {
            word: '肉',
            sentence: '為了吃好吃的肉重要的事是多少新鮮, 怎麼烤。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄔ ㄏㄠˇ ㄔ ㄉㄜ˙ ㄖㄡˋ ㄓㄨㄥˋ ㄧㄠˋ ㄉㄜ˙ ㄕˋ ㄕˋ ㄉㄨㄛ ㄕㄠˇ ㄒㄧㄣ ㄒㄧㄢ   ㄗㄣˇ ㄇㄜ˙ ㄎㄠˇ.',
            pinyin: 'wei4 le chi1 hao3 chi1 de rou4 zhong4 yao4 de shi4 shi4 duo1 shao3 xin1 xian1, zen3 me kao3.',
            translation: '美味しいお肉を食べるために大切なのは、 新鮮さや焼き方です。',
            memo: ''
          },
          {
            word: '欸',
            sentence: '欸, 很多貓毛粘在你的衣服上。',
            bopomofo: 'ㄟˋ, ㄏㄣˇ ㄉㄨㄛ ㄇㄠ ㄇㄠˊ ㄋㄧㄢˊ ㄗㄞˋ ㄋㄧˇ ㄉㄜ˙ ㄧ ㄈㄨˊ ㄕㄤˋ.',
            pinyin: 'ei4, hen3 duo1 mao1 mao2 nian2 zai4 ni3 de yi1 fu2 shang4.',
            translation: 'ねえ、 猫の毛がたくさん服にくっついていますよ。',
            memo: ''
          },
          {
            word: '讓',
            sentence: '你的狗在吠, 你應該讓牠吃飯。',
            bopomofo: 'ㄋㄧˇ ㄉㄜ˙ ㄍㄡˇ ㄗㄞˋ ㄈㄟˋ, ㄋㄧˇ ㄧㄥ ㄍㄞ ㄖㄤˋ ㄊㄚ ㄔ ㄈㄢˋ.',
            pinyin: 'ni3 de gou3 zai4 fei4, ni3 ying1 gai1 rang4 ta2 chi1 fan4.',
            translation: 'あなたの犬が吠えているので、 ご飯を食べさせた方が良いですよ。',
            memo: ''
          },
          {
            word: '吃素',
            sentence: '最近吃素的餐廳比以前多了。',
            bopomofo: 'ㄗㄨㄟˋ ㄐㄧㄣˋ ㄔ ㄙㄨˋ ㄉㄜ˙ ㄘㄢ ㄊㄧㄥ ㄅㄧˇ ㄧˇ ㄑㄧㄢˊ ㄉㄨㄛ ㄌㄜ˙.',
            pinyin: 'zui4 jin4 chi1 su4 de can1 ting1 bi3 yi3 qian2 duo1 le.',
            translation: '最近は以前に比べてベジタリアンレストランが増えました。',
            memo: ''
          },
          {
            word: '漢堡',
            sentence: '我煩惱選原味還是大蒜醬的漢堡。',
            bopomofo: 'ㄨㄛˇ ㄈㄢˊ ㄋㄠˇ ㄒㄩㄢˇ ㄩㄢˊ ㄨㄟˋ ㄏㄞˊ ㄕˋ ㄉㄚˋ ㄙㄨㄢˋ ㄐㄧㄤˋ ㄉㄜ˙ ㄏㄢˋ ㄅㄠˇ.',
            pinyin: 'wo3 fan2 nao3 xuan3 yuan2 wei4 hai2 shi4 da4 suan4 jiang4 de han4 bao3.',
            translation: 'オリジナルか、 ガーリックソースのハンバーガーを選ぶかで迷っています。',
            memo: ''
          },
          {
            word: '變',
            sentence: '新朋友的影響, 他變看動畫的人。',
            bopomofo: 'ㄒㄧㄣ ㄆㄥˊ ㄧㄡˇ ㄉㄜ˙ ㄧㄥˇ ㄒㄧㄤˇ, ㄊㄚ ㄅㄧㄢˋ ㄎㄢˋ ㄉㄨㄥˋ ㄏㄨㄚˋ ㄉㄜ˙ ㄖㄣˊ.',
            pinyin: 'xin1 peng2 you3 de ying3 xiang3, ta1 bian4 kan4 dong4 hua4 de ren2.',
            translation: '新しい友達の影響で、彼はアニメを見るようになりました。',
            memo: ''
          },
          {
            word: '胖',
            sentence: '他穿著衣服看起來瘦, 但是其實相當胖。',
            bopomofo: 'ㄊㄚ ㄔㄨㄢ ㄓㄜ˙　ㄧ ㄈㄨ˙ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄕㄡˋ, ㄉㄢˋ ㄕˋ ㄑㄧˊ ㄕˊ ㄒㄧㄤˋ ㄉㄤ ㄆㄤˋ.',
            pinyin: 'ta1 chuan1 zhe yi1 fu2 kan4 qi3 lai2 shou4, dan4 shi4 qi2 shi2 xiang4 dang1 pang4.',
            translation: '彼は服を着ていると痩せているように見えますが、　実際にはかなり太っています。',
            memo: ''
          },
          {
            word: '素菜',
            sentence: '一道是牛排, 所以我們做再一道素菜吧。',
            bopomofo: 'ㄧ ㄉㄠˋ ㄕˋ ㄋㄧㄡˊ ㄆㄞˊ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄇㄣ˙ ㄗㄨㄛˋ ㄗㄞˋ ㄧ ㄉㄠˋ ㄙㄨˋ ㄘㄞˋ ㄅㄚ˙.',
            pinyin: 'yi1 dao4 shi4 niu2 pai2, suo3 yi3 wo3 men zuo4 zai4 yi1 dao4 su4 cai4 ba.',
            translation: '一品はステーキなので、 もう一品は野菜料理を作りましょう。',
            memo: ''
          },
          {
            word: '油膩',
            sentence: '我基本不喜歡油膩的東西, 但是拉麵的話是另一個。',
            bopomofo: 'ㄨㄛˇ ㄐㄧ ㄅㄣˇ ㄅㄨˋ ㄒㄧˇ ㄏㄨㄢ ㄧㄡˊ ㄋㄧˋ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙, ㄉㄢˋ ㄕˋ ㄌㄚ ㄇㄧㄢˋ ㄉㄧˊ ㄏㄨㄚˋ ㄕˋ ㄌㄧㄥˋ ㄧˊ ㄍㄜˋ.',
            pinyin: 'wo3 ji1 ben3 bu4 xi3 huan1 you2 ni4 de dong1 xi, dan4 shi4 la1 mian4 de hua4 shi4 ling4 yi1 ge4.',
            translation: '基本的に脂っこいものは嫌いですが、 ラーメンは別です。',
            memo: ''
          },
          {
            word: '樣',
            sentence: '桌子上的三樣菜都是用高麗菜做的。',
            bopomofo: 'ㄓㄨㄛ ㄗ˙ ㄕㄤˋ ㄉㄜ˙ ㄙㄢ ㄧㄤˋ ㄘㄞˋ ㄉㄡ ㄕˋ ㄩㄥˋ ㄍㄠ ㄌㄧˊ ㄘㄞˋ ㄗㄨㄛˋ ㄉㄜ˙.',
            pinyin: 'zhuo1 zi shang4 de san1 yang4 cai4 dou1 shi4 yong4 gao1 li2 cai4 zuo4 de.',
            translation: 'テーブルの上の3つの料理はすべてキャベツで作られています。',
            memo: ''
          },
          {
            word: '好奇',
            sentence: '我很好奇晚上我的貓到哪裡去。',
            bopomofo: 'ㄨㄛˇ ㄏㄣˇ ㄏㄠˋ ㄑㄧˊ ㄨㄢˇ ㄕㄤˋ ㄨㄛˇ ㄉㄜ˙ ㄇㄠ ㄉㄠˋ ㄋㄚˇ ㄌㄧˇ ㄑㄩˋ.',
            pinyin: 'wo3 hen3 hao3 qi2 wan3 shang4 wo3 de mao1 dao4 na3 li3 qu4.',
            translation: '猫が夜どこに行くのかとても気になります。',
            memo: ''
          },
          {
            word: '女孩',
            sentence: '女孩們正在吃著冰淇淋吵吵地聊天。',
            bopomofo: 'ㄋㄩˇ ㄏㄞˊ ㄇㄣ˙ ㄓㄥˋ ㄗㄞˋ ㄔ ㄓㄜ˙ ㄅㄧㄥ ㄑㄧˊ ㄌㄧㄣˊ ㄔㄠ ㄔㄠ˙ ㄉㄧˋ ㄌㄧㄠˊ ㄊㄧㄢ.',
            pinyin: 'nu3 hai2 men zheng4 zai4 chi1 zhe bing1 qi2 lin2 chao3 chao3 de liao2 tian1.',
            translation: '女の子たちはアイスクリームを食べながら騒々しくおしゃべりしています。',
            memo: ''
          },
          {
            word: '青菜',
            sentence: '對健康好的青菜那個孩子都討厭。',
            bopomofo: 'ㄉㄨㄟˋ ㄐㄧㄢˋ ㄎㄤ ㄏㄠˇ ㄉㄜ˙ ㄑㄧㄥ ㄘㄞˋ ㄋㄚˋ ㄍㄜˋ ㄏㄞˊ ㄗ˙ ㄉㄡ ㄊㄠˇ ㄧㄢˋ.',
            pinyin: 'dui4 jian4 kang1 hao3 de qing1 cai4 na4 ge4 hai2 zi dou1 tao3 yan4.',
            translation: 'その子供は健康的に良い野菜がみんな嫌いです。',
            memo: ''
          },
          {
            word: '瘦',
            sentence: '不在台灣的時候我不吃很多, 總是變瘦。',
            bopomofo: 'ㄅㄨˋ ㄗㄞˋ ㄊㄞˊ ㄨㄢ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄨㄛˇ ㄅㄨˋ ㄔ ㄏㄣˇ ㄉㄨㄛ, ㄗㄨㄥˇ ㄕˋ ㄅㄧㄢˋ ㄕㄡˋ.',
            pinyin: 'bu2 zai4 tai2 wan1 de shi2 hou4 wo3 bu4 chi1 hen3 duo1, zong3 shi4 bian4 shou4.',
            translation: '台湾にいないときはあまり食べないので、 いつも体重が減ります。',
            memo: ''
          },
          {
            word: '室友',
            sentence: '因為室友每晚熬夜, 我也不能睡覺。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄕˋ ㄧㄡˇ ㄇㄟˇ ㄨㄢˇ ㄠˊ ㄧㄝˋ, ㄨㄛˇ ㄧㄝˇ ㄅㄨˋ ㄋㄥˊ ㄕㄨㄟˋ ㄐㄧㄠˋ.',
            pinyin: 'yin1 wei4 shi4 you3 mei3 wan3 ao2 ye4, wo3 ye3 bu4 neng2 shui4 jiao4.',
            translation: 'ルームメイトが毎晩遅くまで起きているので、 私も眠れません。',
            memo: ''
          },
          {
            word: '豬肉',
            sentence: '台灣的代表菜滷肉飯用豬肉。',
            bopomofo: 'ㄊㄞˊ ㄨㄢ ㄉㄜ˙ ㄉㄞˋ ㄅㄧㄠˇ ㄘㄞˋ ㄌㄨˇ ㄖㄡˋ ㄈㄢˋ ㄩㄥˋ ㄓㄨ ㄖㄡˋ.',
            pinyin: 'tai2 wan1 de dai4 biao3 cai4 lu3 rou4 fan4 yong4 zhu1 rou4.',
            translation: '台湾の代表的な料理の滷肉飯は豚肉を使っています。',
            memo: ''
          },
          {
            word: '西方',
            sentence: '西方來的像漢堡的菜越來越一般的。',
            bopomofo: 'ㄒㄧ ㄈㄤ ㄌㄞˊ ㄉㄜ˙ ㄒㄧㄤˋ ㄏㄢˋ ㄅㄠˇ ㄉㄜ˙ ㄘㄞˋ ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ ㄧˋ ㄅㄢ ㄉㄜ˙.',
            pinyin: 'xi1 fang1 lai2 de xiang4 han4 bao3 de cai4 yue4 lai2 yue4 yi4 ban1 de.',
            translation: '西洋から来たハンバーガーのような料理はますます一般的になっています。',
            memo: ''
          },
          {
            word: '完全',
            sentence: '她的不化妝的臉跟化妝的臉完全不一樣。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄅㄨˊ ㄏㄨㄚˋ ㄓㄨㄤ ㄉㄜ˙ ㄌㄧㄢˇ ㄍㄣ ㄏㄨㄚˋ ㄓㄨㄤ ㄉㄜ˙ ㄌㄧㄢˇ ㄨㄢˊ ㄑㄩㄢˊ ㄅㄨˋ ㄧˊ ㄧㄤˋ.',
            pinyin: 'ta1 de bu2 hua4 zhuang1 de lian3 gen1 hua4 zhuang1 de lian3 wan2 quan2 bu4 yi1 yang4.',
            translation: '彼女のスッピンと化粧をしてた顔は全く違います。',
            memo: ''
          },
          {
            word: '鹹',
            sentence: '喝酒的時候有鹹鹹的東西就好。',
            bopomofo: 'ㄏㄜ ㄐㄧㄡˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄧㄡˇ ㄒㄧㄢˊ ㄒㄧㄢˊ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙ ㄐㄧㄡˋ ㄏㄠˇ.',
            pinyin: 'he1 jiu3 de shi2 hou4 you3 xian2 xian2 de dong1 xi jiu4 hao3.',
            translation: '飲むときは塩辛いものがあるといいですね。',
            memo: ''
          },
          {
            word: '炸',
            sentence: '我嘗試了炸起司, 那個很下紅酒。',
            bopomofo: 'ㄨㄛˇ ㄔㄤˊ ㄕˋ ㄌㄜ˙ ㄓㄚˋ ㄑㄧˇ ㄙ, ㄋㄚˋ ㄍㄜˋ ㄏㄣˇ ㄒㄧㄚˋ ㄏㄨㄥˊ ㄐㄧㄡˇ.',
            pinyin: 'wo3 chang2 shi4 le zha4 qi3 si1, na4 ge4 hen3 xia4 hong2 jiu3.',
            translation: '試しにチーズを揚げてみたら、 赤ワインとよく合いました。',
            memo: ''
          },
          {
            word: '烤',
            sentence: '烤魚的時候房間變臭臭的, 你一定開窗戶。',
            bopomofo: 'ㄎㄠˇ ㄩˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄈㄤˊ ㄐㄧㄢ ㄅㄧㄢˋ ㄔㄡˋ ㄔㄡˋ ㄉㄜ˙, ㄋㄧˇ ㄧˊ ㄉㄧㄥˋ ㄎㄞ ㄔㄨㄤ ㄏㄨˋ.',
            pinyin: 'kao3 yu2 de shi2 hou4 fang2 jian1 bian4 chou4 chou4 de, ni3 yi1 ding4 kai1 chuang1 hu4.',
            translation: '魚を焼くと部屋が臭くなるので、 窓を開けなくてはいけません。',
            memo: ''
          },
          {
            word: '沙拉',
            sentence: '我現在減肥中, 總是只吃沙拉。',
            bopomofo: 'ㄨㄛˇ ㄒㄧㄢˋ ㄗㄞˋ ㄐㄧㄢˇ ㄈㄟˊ ㄓㄨㄥ, ㄗㄨㄥˇ ㄕˋ ㄓˇ ㄔ ㄕㄚ ㄌㄚ.',
            pinyin: 'wo3 xian4 zai4 jian3 fei2 zhong1, zong3 shi4 zhi3 chi1 sha1 la1.',
            translation: 'ダイエット中なので、 サラダしか食べていません。',
            memo: ''
          },
          {
            word: '麥當勞',
            sentence: '各國的麥當勞有特別的菜, 我想都試試看。',
            bopomofo: 'ㄍㄜˋ ㄍㄨㄛˊ ㄉㄜ˙ ㄇㄞˋ ㄉㄤ ㄌㄠˊ ㄧㄡˇ ㄊㄜˋ ㄅㄧㄝˊ ㄉㄜ˙ ㄘㄞˋ, ㄨㄛˇ ㄒㄧㄤˇ ㄉㄨ ㄕˋ ㄕˋ ㄎㄢˋ.',
            pinyin: 'ge4 guo2 de mai4 dang1 lao2 you3 te4 bie2 de cai4, wo3 xiang3 dou1 shi4 shi4 kan4.',
            translation: '各国のマクドナルドにはそれぞれ特別なメニューがあるので、 全部食べてみたいです。',
            memo: ''
          },
          {
            word: '速食店',
            sentence: '我沒想到在速食店等一個小時。',
            bopomofo: 'ㄨㄛˇ ㄇㄟˊ ㄒㄧㄤˇ ㄉㄠˋ ㄗㄞˋ ㄙㄨˋ ㄕˊ ㄉㄧㄢˋ ㄉㄥˇ ㄧˊ ㄍㄜˋ ㄒㄧㄠˇ ㄕˊ.',
            pinyin: 'wo3 mei2 xiang3 dao4 zai4 su4 shi2 dian4 deng3 yi1 ge4 xiao3 shi2.',
            translation: 'ファーストフード店で1時間待つとは思っていませんでした。',
            memo: ''
          },
          {
            word: '只要',
            sentence: '老闆間沒有鎖, 你只要敲一下就好。',
            bopomofo: 'ㄌㄠˇ ㄅㄢˇ ㄐㄧㄢ ㄇㄟˊ ㄧㄡˇ ㄙㄨㄛˇ, ㄋㄧˇ ㄓˇ ㄧㄠˋ ㄑㄧㄠ ㄧ ㄒㄧㄚˋ ㄐㄧㄡˋ ㄏㄠˇ.',
            pinyin: 'lao3 ban3 jian1 mei2 you3 suo3, ni3 zhi3 yao4 qiao1 yi1 xia4 jiu4 hao3.',
            translation: '上司の部屋に鍵はかかっていないので、 ノックするだけで大丈夫です。',
            memo: ''
          },
          {
            word: '討厭',
            sentence: '我真討厭腿抽筋, 睡覺以前按摩腳。',
            bopomofo: 'ㄨㄛˇ ㄓㄣ ㄊㄠˇ ㄧㄢˋ ㄊㄨㄟˇ ㄔㄡ ㄐㄧㄣ, ㄕㄨㄟˋ ㄐㄧㄠˋ ㄧˇ ㄑㄧㄢˊ ㄢˋ ㄇㄛˊ ㄐㄧㄠˇ.',
            pinyin: 'wo3 zhen1 tao3 yan4 tui3 chou1 jin1, shui4 jiao4 yi3 qian2 an4 mo2 jiao3.',
            translation: '足がつるのが本当に嫌なので、 寝る前に足をマッサージします。',
            memo: ''
          },
          {
            word: '餐',
            sentence: '她每天吃五餐, 食費太高了。',
            bopomofo: 'ㄊㄚ ㄇㄟˇ ㄊㄧㄢ ㄔ ㄨˇ ㄘㄢ, ㄕˊ ㄈㄟˋ ㄊㄞˋ ㄍㄠ ㄌㄜ˙.',
            pinyin: 'ta1 mei3 tian1 chi1 wu3 can1, shi2 fei4 tai4 gao1 le.',
            translation: '彼女は毎日5食食べるので、 食費がかかりすぎます。',
            memo: ''
          },
          {
            word: '宗教',
            sentence: '他為了宗教的關係不能吃牛肉。',
            bopomofo: 'ㄊㄚ ㄨㄟˋ ㄌㄜ˙ ㄗㄨㄥ ㄐㄧㄠˋ ㄉㄜ˙ ㄍㄨㄢ ㄒㄧˋ ㄅㄨˋ ㄋㄥˊ ㄔ ㄋㄧㄡˊ ㄖㄡˋ.',
            pinyin: 'ta1 wei4 le zong1 jiao4 de guan1 xi4 bu4 neng2 chi1 niu2 rou4.',
            translation: '彼は宗教上の理由で牛肉を食べることができません。',
            memo: ''
          },
          {
            word: '關係',
            sentence: '養多隻寵物的時候, 牠們的關係很重要。',
            bopomofo: 'ㄧㄤˇ ㄉㄨㄛ ㄓˇ ㄔㄨㄥˇ ㄨˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ. ㄊㄚ ㄇㄣ˙ ㄉㄜ˙ ㄍㄨㄢ ㄒㄧˋ ㄏㄣˇ ㄓㄨㄥˋ ㄧㄠˋ.',
            pinyin: 'yang3 duo1 zhi3 chong3 wu4 de shi2 hou4, ta1 men de guan1 xi4 hen3 zhong4 yao4.',
            translation: '複数のペットを飼育する場合、 ペット同士の関係はとても重要です。',
            memo: ''
          },
          {
            word: '薯條',
            sentence: '我只喜歡嫩嫩油膩的薯條, 其他的入不了我的眼。',
            bopomofo: 'ㄨㄛˇ ㄓˇ ㄒㄧˇ ㄏㄨㄢ ㄋㄣˋ ㄋㄣˋ ㄧㄡˊ ㄋㄧˋ ㄉㄜ˙ ㄕㄨˇ ㄊㄧㄠˊ, ㄑㄧˊ ㄊㄚ ㄉㄜ˙ ㄖㄨˋ ㄅㄨˋ ㄌㄧㄠˇ ㄨㄛˇ ㄉㄜ˙ ㄧㄢˇ.',
            pinyin: 'wo3 zhi3 xi3 huan1 nen4 nen4 you2 ni4 de shu3 tiao2, qi2 ta1 de ru4 bu4 liao3 wo3 de yan3.',
            translation: '私は柔らかくて脂っこいフライドポテトだけが好きなので、 他のものは目に入りません。',
            memo: ''
          },
          {
            word: '作法',
            sentence: '他的前女朋友不喜歡他的吃飯作法, 所以他們分手了。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄑㄧㄢˊ ㄋㄩˇ ㄆㄥˊ ㄧㄡˇ ㄅㄨˋ ㄒㄧˇ ㄏㄨㄢ ㄊㄚ ㄉㄜ˙ ㄔ ㄈㄢˋ ㄗㄨㄛˋ ㄈㄚˇ, ㄙㄨㄛˇ ㄧˇ ㄊㄚ ㄇㄣ˙ ㄈㄣ ㄕㄡˇ ㄌㄜ˙.',
            pinyin: 'ta1 de qian2 nu3 peng2 you3 bu4 xi3 huan1 ta1 de chi1 fan4 zuo4 fa3, suo3 yi3 ta1 men fen1 shou3 le.',
            translation: '彼の元カノは彼の食べ方が気に入らなかったので、 彼らは別れる事になりました。',
            memo: ''
          },
          {
            word: '越',
            sentence: '因為他太常翹課, 越不懂課程的內容了。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄊㄚ ㄊㄞˋ ㄔㄤˊ ㄑㄧㄠˋ ㄎㄜˋ, ㄩㄝˋ ㄅㄨˋ ㄉㄨㄥˇ ㄎㄜˋ ㄔㄥˊ ㄉㄜ˙ ㄋㄟˋ ㄖㄨㄥˊ ㄌㄜ˙.',
            pinyin: 'yin1 wei4 ta1 tai4 chang2 qiao4 ke4, yue4 bu4 dong3 ke4 cheng2 de nei4 rong2 le.',
            translation: '彼は授業をサボりすぎるので、 授業の内容が更に分からなくなりました。',
            memo: ''
          },
          {
            word: '簡單',
            sentence: '隨著年齡的增長, 我越來越喜歡簡單的菜了。',
            bopomofo: 'ㄙㄨㄟˊ ㄓㄜ˙ ㄋㄧㄢˊ ㄌㄧㄥˊ ㄉㄜ˙ ㄗㄥ ㄓㄤˇ, ㄨㄛˇ ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ ㄒㄧˇ ㄏㄨㄢ ㄐㄧㄢˇ ㄉㄢ ㄉㄜ˙ ㄘㄞˋ ㄌㄜ˙.',
            pinyin: 'sui2 zhe nian2 ling2 de zeng1 zhang3, wo3 yue4 lai2 yue4 xi3 huan1 jian3 dan1 de cai4 le.',
            translation: '年をとるにつれて、 シンプルな料理が好きになりました。',
            memo: ''
          },
          {
            word: '蒸',
            sentence: '餃子有很多做法, 我個人最喜歡蒸餃子。',
            bopomofo: 'ㄐㄧㄠˇ ㄗ˙ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄗㄨㄛˋ ㄈㄚˇ, ㄨㄛˇ ㄍㄜˋ ㄖㄣˊ ㄗㄨㄟˋ ㄒㄧˇ ㄏㄨㄢ ㄓㄥ ㄐㄧㄠˇ ㄗ˙.',
            pinyin: 'jiao3 zi you3 hen3 duo1 zuo4 fa3, wo3 ge4 ren2 zui4 xi3 huan1 zheng1 jiao3 zi.',
            translation: '餃子の調理方法はたくさんありますが、 個人的には蒸し餃子が一番好きです。',
            memo: ''
          },
          {
            word: '有機',
            sentence: '有機菜對身體很好, 但是種得不容易。',
            bopomofo: 'ㄧㄡˇ ㄐㄧ ㄘㄞˋ ㄉㄨㄟˋ ㄕㄣ ㄊㄧˇ ㄏㄣˇ ㄏㄠˇ, ㄉㄢˋ ㄕˋ ㄓㄨㄥˇ ㄉㄜ˙ ㄅㄨˋ ㄖㄨㄥˊ ㄧˋ.',
            pinyin: 'you3 ji1 cai4 dui4 shen1 ti3 hen3 hao3, dan4 shi4 zhong3 de bu4 rong2 yi4.',
            translation: '有機野菜は体に良いのですが、 育てるのは用意ではありません。',
            memo: ''
          },
          {
            word: '食品',
            sentence: '試試看外國的各種食品很有意思。',
            bopomofo: 'ㄕˋ ㄕˋ ㄎㄢˋ ㄨㄞˋ ㄍㄨㄛˊ ㄉㄜ˙ ㄍㄜˋ ㄓㄨㄥˇ ㄕˊ ㄆㄧㄣˇ ㄏㄣˇ ㄧㄡˇ ㄧˋ ㄙ.',
            pinyin: 'shi4 shi4 kan4 wai4 guo2 de ge4 zhong3 shi2 pin3 hen3 you3 yi4 si1.',
            translation: 'いろいろな外国の食べ物を試すのは面白いです。',
            memo: ''
          },
          {
            word: '地球',
            sentence: '地球的環境要花很久時間內變化。',
            bopomofo: 'ㄉㄧˋ ㄑㄧㄡˊ ㄉㄜ˙ ㄏㄨㄢˊ ㄐㄧㄥˋ ㄧㄠˋ ㄏㄨㄚ ㄏㄣˇ ㄐㄧㄡˇ ㄕˊ ㄐㄧㄢ ㄋㄟˋ ㄅㄧㄢˋ ㄏㄨㄚˋ.',
            pinyin: 'di4 qiu2 de huan2 jing4 yao4 hua1 hen3 jiu3 shi2 jian1 nei4 bian4 hua4.',
            translation: '地球の環境は長い時間をかけて変化していきます。',
            memo: ''
          },
          {
            word: '汙染',
            sentence: '晴天很舒服, 但是有一點擔心空氣汙染的問題。',
            bopomofo: 'ㄑㄧㄥˊ ㄊㄧㄢ ㄏㄣˇ ㄕㄨ ㄈㄨˊ, ㄉㄢˋ ㄕˋ ㄧㄡˇ ㄧˋ ㄉㄧㄢˇ ㄉㄢ ㄒㄧㄣ ㄎㄨㄥ ㄑㄧˋ ㄨ ㄖㄢˇ ㄉㄜ˙ ㄨㄣˋ ㄊㄧˊ.',
            pinyin: 'qing2 tian1 hen3 shu1 fu2, dan4 shi4 you3 yi1 dian3 dan1 xin1 kong1 qi4 wu1 ran3 de wen4 ti2.',
            translation: '晴れた日は気持ちがいいですが、 大気汚染が少し心配です。',
            memo: ''
          },
          {
            word: '嚴重',
            sentence: '移民的規定很嚴重, 如果你做壞壞的事就被遣返回國。',
            bopomofo: 'ㄧˊ ㄇㄧㄣˊ ㄉㄜ˙ ㄍㄨㄟ ㄉㄧㄥˋ ㄏㄣˇ ㄧㄢˊ ㄓㄨㄥˋ, ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄗㄨㄛˋ ㄏㄨㄞˋ ㄏㄨㄞˋ ㄉㄜ˙ ㄕˋ ㄐㄧㄡˋ ㄅㄟˋ ㄑㄧㄢˇ ㄈㄢˇ ㄏㄨㄟˊ ㄍㄨㄛˊ.',
            pinyin: 'yi2 min2 de gui4 ding4 hen3 yan2 zhong4, ru2 guo3 ni3 zuo4 huai4 huai4 de shi4 jiu4 bei4 qian3 fan3 hui2 guo2.',
            translation: '移民政策は非常に厳しいので、 悪い事をすると国に送還されてしまいます。',
            memo: ''
          },
          {
            word: '衛生',
            sentence: '日本是很衛生的國家, 日本人跟其他國人比起來肚子虛弱。',
            bopomofo: 'ㄖˋ ㄅㄣˇ ㄕˋ ㄏㄣˇ ㄨㄟˋ ㄕㄥ ㄉㄜ˙ ㄍㄨㄛˊ ㄐㄧㄚ, ㄖˋ ㄅㄣˇ ㄖㄣˊ ㄍㄣ ㄑㄧˊ ㄊㄚ ㄍㄨㄛˊ ㄖㄣˊ ㄅㄧˇ ㄑㄧˇ ㄌㄞˊ ㄉㄨˇ ㄗ˙ ㄒㄩ ㄖㄨㄛˋ.',
            pinyin: 'ri4 ben3 shi4 hen3 wei4 sheng1 de guo2 jia1, ri4 ben3 ren2 gen1 qi2 ta1 guo2 ren2 bi3 qi3 lai2 du4 zi xu1 ruo4.',
            translation: '日本はとても衛生的な国なので、 他の国の人に比べてお腹が弱いです。',
            memo: ''
          },
          {
            word: '營養',
            sentence: '連一粒飯粒也有營養， 所以我不會留下。',
            bopomofo: 'ㄌㄧㄢˊ ㄧ ㄌㄧˋ ㄈㄢˋ ㄌㄧˋ ㄧㄝˇ ㄧㄡˇ ㄧㄥˊ ㄧㄤˇ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄅㄨˊ ㄏㄨㄟˋ ㄌㄧㄡˊ ㄒㄧㄚˋ.',
            pinyin: 'lian2 yi1 li4 fan4 li4 ye3 you3 ying2 yang3, suo3 yi3 wo3 bu2 hui4 liu2 xia4.',
            translation: '一粒のお米でも栄養価があるので、 残さないで食べます。',
            memo: ''
          },
          {
            word: '什麼的',
            sentence: '我想盡可能避免念書什麼的麻煩的東西。',
            bopomofo: 'ㄨㄛˇ ㄒㄧㄤˇ ㄐㄧㄣˋ ㄎㄜˇ ㄋㄥˊ ㄅㄧˋ ㄇㄧㄢˇ ㄋㄧㄢˋ ㄕㄨ ㄕㄣˊ ㄇㄜ˙ ㄉㄜ˙ ㄇㄚˊ ㄈㄢˊ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙.',
            pinyin: 'wo3 xiang3 jin4 ke3 neng2 bi4 mian3 nian4 shu1 shen2 me de ma2 fan2 de dong1 xi.',
            translation: '勉強のような面倒なことはできるだけ避けたいです。',
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
