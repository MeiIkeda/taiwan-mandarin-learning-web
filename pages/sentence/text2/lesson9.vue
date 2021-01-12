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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第9章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第9章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      data: {
        title: '當代中文課程課2・第9章',
        words: [
          {
            word: '春假',
            sentence: '這個春假之後， 他的孩子將念中學。',
            bopomofo: 'ㄓㄜˋ ㄍㄜˋ ㄔㄨㄣ ㄐㄧㄚˋ ㄓ ㄏㄡˋ, ㄊㄚ ㄉㄜ˙ ㄏㄞˊ ㄗˇ ㄐㄧㄤ ㄋㄧㄢˋ ㄓㄨㄥ ㄒㄩㄝˊ.',
            pinyin: 'zhe4 ge4 chun1 jia4 zhi1 hou4, ta1 de hai2 zi3 jiang1 nian4 zhong1 xue2.',
            translation: 'この春休みの後、　彼の子供は中学校に入学します。',
            memo: ''
          },
          {
            word: '好',
            sentence: '我的衣服還沒洗好, 我現在不能出去。',
            bopomofo: 'ㄨㄛˇ ㄉㄜ˙ ㄧ ㄈㄨˊ ㄏㄞˊ ㄇㄟˊ ㄒㄧˇ ㄏㄠˇ, ㄨㄛˇ ㄒㄧㄢˋ ㄗㄞˋ ㄅㄨˋ ㄋㄥˊ ㄔㄨ ㄑㄩˋ.',
            pinyin: 'wo3 de yi1 fu2 hai2 mei2 xi3 hao3, wo3 xian4 zai4 bu4 neng2 chu1 qu4.',
            translation: 'まだ服を洗い終わっていないので、　外に出られません。',
            memo: ''
          },
          {
            word: '到',
            sentence: '我於是理解到老鼠和倉鼠之間的區別。',
            bopomofo: 'ㄨㄛˇ ㄩˊ ㄕˋ ㄌㄧˇ ㄐㄧㄝˇ ㄉㄠˋ ㄌㄠˇ ㄕㄨˇ ㄏㄢˋ ㄘㄤ ㄕㄨˇ ㄓ ㄐㄧㄢ ㄉㄜ˙ ㄑㄩ ㄅㄧㄝˊ.',
            pinyin: 'wo3 yu1 shi4 li3 jie3 dao4 lao3 shu3 han4 cang1 shu3 zhi1 jian1 de qu1 bie2.',
            translation: '私はついに鼠とハムスターの違いを理解しました。',
            memo: ''
          },
          {
            word: '特色',
            sentence: '大部分房子的屋頂是藍色的是這個村的特色。',
            bopomofo: 'ㄉㄚˋ ㄅㄨˋ ㄈㄣˋ ㄈㄤˊ ㄗ˙ ㄉㄜ˙ ㄨ ㄉㄧㄥˇ ㄕˋ ㄌㄢˊ ㄙㄜˋ ㄉㄜ˙ ㄕˋ ㄓㄜˋ ㄍㄜˋ ㄘㄨㄣ ㄉㄜ˙ ㄊㄜˋ ㄙㄜˋ.',
            pinyin: 'da4 bu4 fen4 fang2 zi3 de wu1 ding3 shi4 lan2 se4 de shi4 zhe4 ge4 cun1 de te4 se4.',
            translation: '大半の家の屋根が青いことがこの村の特徴です。',
            memo: ''
          },
          {
            word: '夠',
            sentence: '我酒喝得不夠， 我們再去一家居酒屋吧。',
            bopomofo: 'ㄨㄛˇ ㄐㄧㄡˇ ㄏㄜ ㄉㄜˊ ㄅㄨˋ ㄍㄡˋ, ㄨㄛˇ ㄇㄣ˙ ㄗㄞˋ ㄑㄩˋ ㄧ ㄐㄧㄚ ㄐㄩ ㄐㄧㄡˇ ㄨ ㄅㄚ˙.',
            pinyin: 'wo3 jiu3 he1 de bu2 gou4, wo3 men zai4 qu4 yi1 jia1 ju1 jiu3 wu1 ba.',
            translation: '飲み足りないので、　もう一軒居酒屋に行きましょう。',
            memo: ''
          },
          {
            word: '顏色',
            sentence: '你覺得這件紅色的外套適合什麼顏色的鞋子呢?',
            bopomofo: 'ㄋㄧˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄓㄜˋ ㄐㄧㄢˋ ㄏㄨㄥˊ ㄙㄜˋ ㄉㄜ˙ ㄨㄞˋ ㄊㄠˋ ㄕˋ ㄏㄜˊ ㄕㄣˊ ㄇㄜ˙ ㄧㄢˊ ㄙㄜˋ ㄉㄜ˙ ㄒㄧㄝˊ ㄗ˙ ㄋㄜ˙?',
            pinyin: 'ni3 jue2 de zhe4 jian4 hong2 se4 de wai4 tao4 shi4 he2 shen2 me yan2 se4 de xie2 zi ne?',
            translation: 'この赤いコートには何色の靴が合うと思いますか?',
            memo: ''
          },
          {
            word: '廟',
            sentence: '這座城市有很多廟， 所以每個星期都有一家廟舉行活動。',
            bopomofo: 'ㄓㄜˋ ㄗㄨㄛˋ ㄔㄥˊ ㄕˋ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄇㄧㄠˋ, ㄙㄨㄛˇ ㄧˇ ㄇㄟˇ ㄍㄜˋ ㄒㄧㄥ ㄑㄧˊ ㄉㄡ ㄧㄡˇ ㄧ ㄐㄧㄚ ㄇㄧㄠˋ ㄐㄩˇ ㄒㄧㄥˊ ㄏㄨㄛˊ ㄉㄨㄥˋ.',
            pinyin: 'zhe4 zuo4 cheng2 shi4 you3 hen3 duo1 miao4, suo3 yi3 mei3 ge4 xing1 qi2 dou1 you3 yi1 jia1 miao4 ju3 xing2 huo2 dong4.',
            translation: '街にはお寺がたくさんあるので、　毎週どこかしらでお祭りがあります。',
            memo: ''
          },
          {
            word: '像',
            sentence: '那個孩子吃飯的樣子像一隻餓著肚子的小狗。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄏㄞˊ ㄗ˙ ㄔ ㄈㄢˋ ㄉㄜ˙ ㄧㄤˋ ㄗ˙ ㄒㄧㄤˋ ㄧˋ ㄓ ㄜˋ ㄓㄜ˙ ㄉㄨˇ ㄗ˙ ㄉㄜ˙ ㄒㄧㄠˇ ㄍㄡˇ.',
            pinyin: 'na4 ge4 hai2 zi chi1 fan4 de yang4 zi xiang4 yi1 zhi1 e4 zhe du4 zi de xiao3 gou3.',
            translation: 'あの子供が食事する様子はまるでお腹をすかせた子犬のようです。',
            memo: ''
          },
          {
            word: '教堂',
            sentence: '在星期天， 有很多人來上教堂。',
            bopomofo: 'ㄗㄞˋ ㄒㄧㄥ ㄑㄧˊ ㄊㄧㄢ, ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄖㄣˊ ㄌㄞˊ ㄕㄤˋ ㄐㄧㄠˋ ㄊㄤˊ.',
            pinyin: 'zai4 xing1 qi2 tian1, you3 hen3 duo1 ren2 lai2 shang4 jiao4 tang2.',
            translation: '日曜日には、　たくさんの人が教会にやって来ます。',
            memo: '※ここで「上」は「去」の意味。'
          },
          {
            word: '南部',
            sentence: '在冬天台灣南部的天氣很好, 但是非常乾燥。',
            bopomofo: 'ㄗㄞˋ ㄉㄨㄥ ㄊㄧㄢ ㄊㄞ ㄨㄢ ㄋㄢˊ ㄅㄨˋ ㄉㄜ˙ ㄊㄧㄢ ㄑㄧˋ ㄏㄣˇ ㄏㄠˇ, ㄉㄢˋ ㄕˋ ㄈㄟ ㄔㄤˊ ㄍㄢ ㄗㄠˋ.',
            pinyin: 'zai4 dong1 tian1 tai2 wan1 nan2 bu4 de tian1 qi4 hen3 hao3, dan4 shi4 fei1 chang2 gan1 zao4.',
            translation: '冬の台湾南部の天気は良いですが、　とても乾燥しています。',
            memo: ''
          },
          {
            word: '潛水',
            sentence: '如果你擅長潛水, 你也許能抓到海膽。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄕㄢˋ ㄔㄤˊ ㄑㄧㄢˊ ㄕㄨㄟˇ, ㄋㄧˇ ㄧㄝˇ ㄒㄩˇ ㄋㄥˊ ㄓㄨㄚ ㄉㄠˋ ㄏㄞˇ ㄉㄢˇ.',
            pinyin: 'ru2 guo3 ni3 shan4 chang2 qian2 shui3, ni3 ye3 xu3 neng2 zhua1 dao4 hai3 dan3.',
            translation: 'ダイビングが上手なら、　ウニを採れるかもしれません。',
            memo: ''
          },
          {
            word: '各',
            sentence: '有各種尺寸， 請試穿一下。',
            bopomofo: 'ㄧㄡˇ ㄍㄜˋ ㄓㄨㄥˇ ㄔˇ ㄘㄨㄣˋ, ㄑㄧㄥˇ ㄕˋ ㄔㄨㄢ ㄧ ㄒㄧㄚˋ.',
            pinyin: 'you3 ge4 zhong3 chi3 cun4, qing3 shi4 chuan1 yi1 xia4.',
            translation: '色々なサイズがありますので、　是非試着してみて下さい。',
            memo: ''
          },
          {
            word: '魚',
            sentence: '晚餐是魚的時候， 貓從做飯的時候就開始不安靜了。',
            bopomofo: 'ㄨㄢˇ ㄘㄢ ㄕˋ ㄩˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄇㄠ ㄘㄨㄥˊ ㄗㄨㄛˋ ㄈㄢˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄐㄧㄡˋ ㄎㄞ ㄕˇ ㄅㄨˋ ㄢ ㄐㄧㄥˋ ㄌㄜ˙.',
            pinyin: 'wan3 can1 shi4 yu2 de shi2 hou4, mao1 cong2 zuo4 fan4 de shi2 hou4 jiu4 kai1 shi3 bu4 an1 jing4 le.',
            translation: '夕飯が魚の時は、　調理している時から猫がソワソワし始めます。',
            memo: ''
          },
          {
            word: '酸',
            sentence: '牛奶酸掉了是不太好了, 對嗎?',
            bopomofo: 'ㄋㄧㄡˊ ㄋㄞˇ ㄙㄨㄢ ㄉㄧㄠˋ ㄌㄜ˙ ㄕˋ ㄅㄨˋ ㄊㄞˋ ㄏㄠˇ ㄌㄜ˙, ㄉㄨㄟˋ ㄇㄚ˙?',
            pinyin: 'niu2 nai3 suan1 diao4 le shi4 bu2 tai4 hao3 le, dui4 ma?',
            translation: '牛乳が酸っぱいのはあまり良くないんじゃないですか?',
            memo: ''
          },
          {
            word: '檸檬',
            sentence: '檸檬跟料理放在一起看起來漂亮， 所以我很推薦。',
            bopomofo: 'ㄋㄧㄥˊ ㄇㄥˊ ㄍㄣ ㄌㄧㄠˋ ㄌㄧˇ ㄈㄤˋ ㄗㄞˋ ㄧˋ ㄑㄧˇ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄆㄧㄠˋ ㄌㄧㄤˋ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄏㄣˇ ㄊㄨㄟ ㄐㄧㄢˋ.',
            pinyin: 'ning2 meng2 gen1 liao4 li3 fang4 zai4 yi1 qi3 kan4 qi3 lai2 piao4 liang4, suo3 yi3 wo3 hen3 tui1 jian4.',
            translation: 'レモンを料理に添えるとお洒落に見えるので、　とてもお勧めです。',
            memo: ''
          },
          {
            word: '味道',
            sentence: '我個人覺得便宜的紅酒的味道比貴的更好。',
            bopomofo: 'ㄨㄛˇ ㄍㄜˋ ㄖㄣˊ ㄐㄩㄝˊ ㄉㄜ˙ ㄆㄧㄢˊ ㄧˊ ㄉㄜ˙ ㄏㄨㄥˊ ㄐㄧㄡˇ ㄉㄜ˙ ㄨㄟˋ ㄉㄠˋ ㄅㄧˇ ㄍㄨㄟˋ ㄉㄜ˙ ㄍㄥˋ ㄏㄠˇ.',
            pinyin: 'wo3 ge4 ren2 jue2 de pian2 yi2 de hong2 jiu3 de wei4 dao4 bi3 gui4 de geng4 hao3.',
            translation: '個人的には安い赤ワインの方が高いものよりも美味しいと思います。',
            memo: ''
          },
          {
            word: '泰國',
            sentence: '我喜歡加很多椰奶的泰國菜。',
            bopomofo: 'ㄨㄛˇ ㄒㄧˇ ㄏㄨㄢ ㄐㄧㄚ ㄏㄣˇ ㄉㄨㄛ ㄧㄝ ㄋㄞˇ ㄉㄜ˙ ㄊㄞˋ ㄍㄨㄛˊ ㄘㄞˋ.',
            pinyin: 'wo3 xi3 huan1 jia1 hen3 duo1 ye1 nai3 de tai4 guo2 cai4.',
            translation: 'ココナッツミルクをたっぷり使ったタイ料理が好きです。',
            memo: ''
          },
          {
            word: '比起來',
            sentence: '台灣的醬油的顏色跟日本的比起來深。',
            bopomofo: 'ㄊㄞˊ ㄨㄢ ㄉㄜ˙ ㄐㄧㄤˋ ㄧㄡˊ ㄉㄜ˙ ㄧㄢˊ ㄙㄜˋ ㄍㄣ ㄖˋ ㄅㄣˇ ㄉㄜ˙ ㄅㄧˇ ㄑㄧˇ ㄌㄞˊ ㄕㄣ.',
            pinyin: 'tai2 wan1 de jiang4 you2 de yan2 se4 gen1 ri4 ben3 de bi3 qi3 lai2 shen1.',
            translation: '台湾の醤油の色は日本のものよりも濃いです。',
            memo: '※(色が)濃い:深(ㄕㄣ/shen1)/濃(ㄋㄨㄥˊ/nong2)'
          },
          {
            word: '極了',
            sentence: '貓的毛蓬極了, 摸起來很舒服。',
            bopomofo: 'ㄇㄠ ㄉㄜ˙ ㄇㄠˊ ㄆㄥˊ ㄐㄧˊ ㄌㄜ˙, ㄇㄛ ㄑㄧˇ ㄌㄞˊ ㄏㄣˇ ㄕㄨ ㄈㄨˊ.',
            pinyin: 'mao1 de mao2 peng2 ji3 le, mo1 qi3 lai2 hen3 shu1 fu2.',
            translation: '猫の毛は最高にふわふわで、　触り心地がとても良いです。',
            memo: ''
          },
          {
            word: '忘不了',
            sentence: '在某年的尾牙我差不多不記得發現了什麼事, 那是忘不了的經驗。',
            bopomofo: 'ㄗㄞˋ ㄇㄡˇ ㄋㄧㄢˊ ㄉㄜ˙ ㄨㄟˇ ㄧㄚˊ ㄨㄛˇ ㄔㄚ ㄅㄨˋ ㄉㄨㄛ ㄅㄨˋ ㄐㄧˋ ㄉㄜ˙ ㄈㄚ ㄒㄧㄢˋ ㄌㄜ˙ ㄕㄣˊ ㄇㄜ˙ ㄕˋ, ㄋㄚˋ ㄕ˙ ㄨㄤˋ ㄅ ㄨˋ ㄌㄧㄠˇ ㄉㄜ˙ ㄐㄧㄥ ㄧㄢˋ.',
            pinyin: 'zai4 mou3 nian2 de wei3 ya2 wo3 cha1 bu4 duo1 bu2 ji4 de fa1 xian4 le shen2 me shi4, na4 shi4 wang4 bu4 liao3 de jing1 yan4.',
            translation: 'ある年の忘年会でほぼ全て記憶を失くしたのは、 忘れられない経験です。',
            memo: '※(酔っぱらって)潰れる:「喝到掛了(ㄏㄜ ㄉㄠˋ ㄍㄨㄚˋ ㄌㄜ˙/he1 dao4 gua4 le)」。'
          },
          {
            word: '鄉下',
            sentence: '網路很發達了， 最近你甚至在鄉下也可以做城市的工作。',
            bopomofo: 'ㄨㄤˇ ㄌㄨˋ ㄏㄣˇ ㄈㄚ ㄉㄚˊ ㄌㄜ˙, ㄗㄨㄟˋ ㄐㄧㄣˋ ㄋㄧˇ ㄕㄣˋ ㄓˋ ㄗㄞˋ ㄒㄧㄤ ㄒㄧㄚˋ ㄧㄝˇ ㄎㄜˇ ㄧˇ ㄗㄨㄛˋ ㄔㄥˊ ㄕˋ ㄉㄜ˙ ㄍㄨㄥ ㄗㄨㄛˋ.',
            pinyin: 'wang3 lu4 hen3 fa1 da2 le, zui4 jin4 ni3 shen4 zhi4 zai4 xiang1 xia4 ye3 ke3 yi3 zuo4 cheng2 shi4 de gong1 zuo4.',
            translation: 'ネットが非常に発達したので、 最近では田舎で都市の仕事をすることさえできます。',
            memo: ''
          },
          {
            word: '氣氛',
            sentence: '因為我有一個不耐煩的同事, 工作的氣氛不是很好。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄨㄛˇ ㄧㄡˇ ㄧˊ ㄍㄜˋ ㄅㄨˋ ㄋㄞˋ ㄈㄢˊ ㄉㄜ˙ ㄊㄨㄥˊ ㄕˋ, ㄍㄨㄥ ㄗㄨㄛˋ ㄉㄜ˙ ㄑㄧˋ ㄈㄣ ㄅㄨˊ ㄕˋ ㄏㄣˇ ㄏㄠˇ.',
            pinyin: 'yin1 wei4 wo3 you3 yi1 ge4 bu2 nai4 fan2 de tong2 shi4, gong1 zuo4 de qi4 fen1 bu2 shi4 hen3 hao3.',
            translation: 'イライラしている同僚がいるので、　職場の雰囲気はあまり良くないです。',
            memo: ''
          },
          {
            word: '鎮',
            sentence: '新聞說一隻熊走進了一個山上的小鎮。',
            bopomofo: 'ㄒㄧㄣ ㄨㄣˊ ㄕㄨㄛ ㄧˋ ㄓ ㄒㄩㄥˊ ㄗㄡˇ ㄐㄧㄣˋ ㄌㄜ˙ ㄧˊ ㄍㄜˋ ㄕㄢ ㄕㄤˋ ㄉㄜ˙ ㄒㄧㄠˇ ㄓㄣˋ.',
            pinyin: 'xin1 wen2 shuo1 yi1 zhi1 xiong2 zou3 jin4 le yi1 ge4 shan1 shang4 de xiao3 zhen4.',
            translation: 'そのニュースによると、　クマが山の近くの小さな町に入ったらしい。',
            memo: ''
          },
          {
            word: '不同',
            sentence: '北部和南部的菜不同, 如果你喜歡甜甜的應該到台南去。',
            bopomofo: 'ㄅㄟˇ ㄅㄨˋ ㄏㄢˋ ㄋㄢˊ ㄅㄨˋ ㄉㄜ˙ ㄘㄞˋ ㄅㄨˋ ㄊㄨㄥˊ, ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄒㄧˇ ㄏㄨㄢ ㄊㄧㄢˊ ㄊㄧㄢˊ ㄉㄜ˙ ㄧㄥˋ ㄍㄞ ㄉㄠˋ ㄊㄞˊ ㄋㄢˊ ㄑㄩˋ.',
            pinyin: 'bei3 bu4 han4 nan2 bu4 de cai4 bu4 tong2, ru2 guo3 ni3 xi3 huan1 tian2 tian2 de ying1 gai1 dao4 tai2 nan2 qu4.',
            translation: '北部と南部の料理は異なっているので、　もしあなたが甘い味が好きなら台南に行くべきです。',
            memo: '※「不同」の反対語：「相同(ㄒㄧㄤ ㄊㄨㄥˊ/xiang1 tong2)」/「一樣(ㄧ ㄧㄤˋ/yi1 yang4)」。'
          },
          {
            word: '現代',
            sentence: '現代的問題和過去的完全不同, 我們得考慮新對策。',
            bopomofo: 'ㄒㄧㄢˋ ㄉㄞˋ ㄉㄜ˙ ㄨㄣˋ ㄊㄧˊ ㄏㄢˋ ㄍㄨㄛˋ ㄑㄩˋ ㄉㄜ˙ ㄨㄢˊ ㄑㄩㄢˊ ㄅㄨˋ ㄊㄨㄥˊ, ㄨㄛˇ ㄇㄣ˙ ㄉㄟˇ ㄎㄠˇ ㄌㄩˋ ㄒㄧㄣ ㄉㄨㄟˋ ㄘㄜˋ.',
            pinyin: 'xian4 dai4 de wen4 ti2 han4 guo4 qu4 de wan2 quan2 bu4 tong2, wo3 men dei3 kao3 lu4 xin1 dui4 ce4.',
            translation: '現代の問題は過去とはまったく異なり、　新しい解決策を検討する必要があります。',
            memo: '※「新對策(ㄒㄧㄣ ㄉㄨㄟˋ ㄘㄜˋ/xin1 dui4 ce4)」 = 「新的解決方法(ㄒㄧㄣ ㄉㄜ˙ ㄐㄧㄝˇ ㄐㄩㄝˊ ㄈㄤ ㄈㄚˇ/xin1 de jie3 jue2 fang1 fa3)」'
          },
          {
            word: '公寓',
            sentence: '在這棟公寓大部分的居民都好像學生， 他們每天都在開派對。',
            bopomofo: 'ㄗㄞˋ ㄓㄜˋ ㄉㄨㄥˋ ㄍㄨㄥ ㄩˋ ㄉㄚˋ ㄅㄨˋ ㄈㄣˋ ㄉㄜ˙ ㄐㄩ ㄇㄧㄣˊ ㄉㄡ ㄏㄠˇ ㄒㄧㄤˋ ㄒㄩㄝˊ ㄕㄥ, ㄊㄚ ㄇㄣ˙ ㄇㄟˇ ㄊㄧㄢ ㄉㄨ ㄗㄞˋ ㄎㄞ ㄆㄞˋ ㄉㄨㄟˋ.',
            pinyin: 'zai4 zhe4 dong4 gong1 yu4 da4 bu4 fen4 de ju1 min2 dou1 hao3 xiang4 xue2 sheng1, ta1 men mei3 tian1 dou1 zai4 kai1 pai4 dui4.',
            translation: 'このアパートの住人のほとんどは学生のようで、 毎日パーティーを開いています。',
            memo: ''
          },
          {
            word: '馬路',
            sentence: '馬路上躺著一個喝醉了的人, 有人可以處理嗎?',
            bopomofo: 'ㄇㄚˇ ㄌㄨˋ ㄕㄤˋ ㄊㄤˇ ㄓㄜ˙ ㄧˊ ㄍㄜˋ ㄏㄜ ㄗㄨㄟˋ ㄌㄜ˙ ㄉㄜ˙ ㄖㄣˊ, ㄧㄡˇ ㄖㄣˊ ㄎㄜˇ ㄧˇ ㄔㄨˇ ㄌㄧˇ ㄇㄚ˙?',
            pinyin: 'ma3 lu4 shang4 tang3 zhe yi1 ge4 he1 zui4 le de ren2, you3 ren2 ke3 yi3 chu3 li3 ma?',
            translation: '道に寝転んでいる酔っ払いがいますが、　誰か何とかしてくれませんか?',
            memo: ''
          },
          {
            word: '寬',
            sentence: '貓的額頭不寬。',
            bopomofo: 'ㄇㄠ ㄉㄜ˙ ㄜˊ ㄊㄡˊ ㄅㄨˋ ㄎㄨㄢ.',
            pinyin: 'mao1 de e2 tou2 bu4 kuan1.',
            translation: '猫の額は広くない。',
            memo: ''
          },
          {
            word: '汽車',
            sentence: '在鄉下需要汽車， 所以你應該早一點拿到駕照。',
            bopomofo: 'ㄗㄞˋ ㄒㄧㄤ ㄒㄧㄚˋ ㄒㄩ ㄧㄠˋ ㄑㄧˋ ㄔㄜ, ㄙㄨㄛˇ ㄧˇ ㄋㄧˇ ㄧㄥ ㄍㄞ ㄗㄠˇ ㄧˋ ㄉㄧㄢˇ ㄋㄚˊ ㄉㄠˋ ㄐㄧㄚˋ ㄓㄠˋ.',
            pinyin: 'zai4 xiang1 xia4 xu1 yao4 qi4 che1, suo3 yi3 ni3 ying1 gai1 zao3 yi1 dian3 na2 dao4 jia4 zhao4.',
            translation: '田舎では車が必要なので、 早めに免許を取りに行った方がいいですよ。',
            memo: ''
          },
          {
            word: '建築',
            sentence: '她喜歡西式建築， 經常去拍照。',
            bopomofo: 'ㄊㄚ ㄒㄧˇ ㄏㄨㄢ ㄒㄧ ㄕˋ ㄐㄧㄢˋ ㄓㄨˊ, ㄐㄧㄥ ㄔㄤˊ ㄑㄩˋ ㄆㄞ ㄓㄠˋ.',
            pinyin: 'ta1 xi3 huan xi1 shi4 jian4 zhu2, jing1 chang2 qu4 pai1 zhao4.',
            translation: '彼女は洋風の建築が好きで、 よく写真を撮りに行っています。',
            memo: ''
          },
          {
            word: '老',
            sentence: '背包客旅館分散在老街。',
            bopomofo: 'ㄅㄟ ㄅㄠ ㄎㄜˋ ㄌㄩˇ ㄍㄨㄢˇ ㄈㄣ ㄙㄢˇ ㄗㄞˋ ㄌㄠˇ ㄐㄧㄝ.',
            pinyin: 'bei1 bao1 ke4 lu3 guan3 fen1 san4 zai4 lao3 jie1.',
            translation: 'バックパッカー宿は旧市街に点在しています。',
            memo: '「分散」の発音：台湾では「ㄈㄣ ㄙㄢˋ/fen1 san4」、　中国では「ㄈㄣ ㄙㄢˇ/fen1 san3」が多い。'
          },
          {
            word: '層',
            sentence: '我想搬到高的層樓因為那裡應該沒有蟲。',
            bopomofo: 'ㄨㄛˇ ㄒㄧㄤˇ ㄅㄢ ㄉㄠˋ ㄍㄠ ㄉㄜ˙ ㄘㄥˊ ㄌㄡˊ ㄧㄣ ㄨㄟˋ ㄋㄚˋ ㄌㄧˇ ㄧㄥ ㄍㄞ ㄇㄟˊ ㄧㄡˇ ㄔㄨㄥˊ.',
            pinyin: 'wo3 xiang3 ban1 dao4 gao1 de ceng2 lou2 yin1 wei4 na4 li3 ying1 gai1 mei2 you3 chong2.',
            translation: '虫がいないはずなので高層階に引っ越したいです。',
            memo: ''
          },
          {
            word: '北部',
            sentence: '我以為夏天涼快的北部很好, 但是看到冬天的狀態後我改變了想法。',
            bopomofo: 'ㄨㄛˇ ㄧˇ ㄨㄟˊ ㄒㄧㄚˋ ㄊㄧㄢ ㄌㄧㄤˊ ㄎㄨㄞˋ ㄉㄜ˙ ㄅㄟˇ ㄅㄨˋ ㄏㄣˇ ㄏㄠˇ, ㄉㄢˋ ㄕˋ ㄎㄢˋ ㄉㄠˋ ㄉㄨㄥ ㄊㄧㄢ ㄉㄜ˙ ㄓㄨㄤˋ ㄊㄞˋ ㄏㄡˋ ㄨㄛˇ ㄍㄞˇ ㄅㄧㄢˋ ㄌㄜ˙ ㄒㄧㄤˇ ㄈㄚˇ.',
            pinyin: 'wo3 yi3 wei2 xia4 tian1 liang2 kuai4 de bei3 bu4 hen3 hao3, dan4 shi4 kan4 dao4 dong1 tian1 de/ zhuang4 tai4 hou4 wo3 gai3 bian4 le xiang3 fa3.',
            translation: '夏が涼しい北部は良いと思っていましたが、 冬の様子を見て気が変わりました。',
            memo: ''
          },
          {
            word: '熱情',
            sentence: '在城市我不常跟別人交流， 鄉下人的熱情讓我感動。',
            bopomofo: 'ㄗㄞˋ ㄔㄥˊ ㄕˋ ㄨㄛˇ ㄅㄨˋ ㄔㄤˊ ㄍㄣ ㄅㄧㄝˊ ㄖㄣˊ ㄐㄧㄠ ㄌㄧㄡˊ, ㄒㄧㄤ ㄒㄧㄚˋ ㄖㄣˊ ㄉㄜ˙ ㄖㄜˋ ㄑㄧㄥˊ ㄖㄤˋ ㄨㄛˇ ㄍㄢˇ ㄉㄨㄥˋ.',
            pinyin: 'zai4 cheng2 shi4 wo3 bu4 chang2 gen1 bie2 ren2 jiao1 liu2, xiang1 xia4 ren2 de re4 qing2 rang4 wo3 gan3 dong4.',
            translation: '都会ではあまり人と関わらないので、 田舎の人の親切さに感動しました。',
            memo: ''
          },
          {
            word: '擠',
            sentence: '你有沒有坐過在東京最擠的時間的捷運呢?',
            bopomofo: 'ㄋㄧˇ ㄧㄡˇ ㄇㄟˊ ㄧㄡˇ ㄗㄨㄛˋ ㄍㄨㄛˋ ㄗㄞˋ ㄉㄨㄥ ㄐㄧㄥ ㄗㄨㄟˋ ㄐㄧˇ ㄉㄜ˙ ㄕˊ ㄐㄧㄢ ㄉㄜ˙ ㄐㄧㄝˊ ㄩㄣˋ ㄋㄜ˙?',
            pinyin: 'ni3 you3 mei2 you3 zuo4 guo4 zai4 dong1 jing1 zui4 ji3 de shi2 jian1 de jie2 yun4 ne?',
            translation: '東京の最も混雑した時間帯の電車に乗ったことがありますか?',
            memo: '※「すし詰め」 : 「擠沙丁魚(ㄐㄧˇ ㄕㄚ ㄉㄧㄥ ㄩˊ/ji3 sha1 ding1 yu2)」。'
          },
          {
            word: '飲料',
            sentence: '台灣有的飲料置物架非常方便。',
            bopomofo: 'ㄊㄞˊ ㄨㄢ ㄧㄡˇ ㄉㄜ˙ ㄧㄣˇ ㄌㄧㄠˋ ㄓˋ ㄨˋ ㄐㄧㄚˋ ㄈㄟ ㄔㄤˊ ㄈㄤ ㄅㄧㄢˋ.',
            pinyin: 'tai2 wan1 you3 de yin3 liao4 zhi4 wu4 jia4 fei1 chang2 fang1 bian4.',
            translation: '台湾の飲み物ホルダーはとても便利です。',
            memo: ''
          },
          {
            word: '巴黎',
            sentence: '巴黎有一座有名的塔， 所以我想爬上它。',
            bopomofo: 'ㄅㄚ ㄌㄧˊ ㄧㄡˇ ㄧ ㄗㄨㄛˋ ㄧㄡˇ ㄇㄧㄥˊ ㄉㄜ˙ ㄊㄚˇ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄒㄧㄤˇ ㄆㄚˊ ㄕㄤˋ ㄊㄚ.',
            pinyin: 'ba1 li2 you3 yi1 zuo4 you3 ming2 de ta3, suo3 yi3 wo3 xiang3 pa2 shang4 ta1.',
            translation: 'パリには有名な塔があるので、 登ってみたいです。',
            memo: ''
          },
          {
            word: '高雄市',
            sentence: '早上從台南到高雄市的機場坐公車去最好。',
            bopomofo: 'ㄗㄠˇ ㄕㄤˋ ㄘㄨㄥˊ ㄊㄞˊ ㄋㄢˊ ㄉㄠˋ ㄍㄠ ㄒㄩㄥˊ ㄕˋ ㄉㄜ˙ ㄐㄧ ㄔㄤˇ ㄗㄨㄛˋ ㄍㄨㄥ ㄔㄜ ㄑㄩˋ ㄗㄨㄟˋ ㄏㄠˇ.',
            pinyin: 'zao3 shang4 cong2 tai2 nan2 dao4 gao1 xiong2 shi4 de ji1 chang2 zuo4 gong1 che1 qu4 zui4 hao3.',
            translation: '早朝に台南から高雄の空港に行くには、　バスに乗るのが最善です。',
            memo: ''
          },
          {
            word: '中南部',
            sentence: '中南部的人差不多會說台語。',
            bopomofo: 'ㄓㄨㄥ ㄋㄢˊ ㄅㄨˋ ㄉㄜ˙ ㄖㄣˊ ㄔㄚˋ ㄅㄨˋ ㄉㄨㄛ ㄏㄨㄟˋ ㄕㄨㄛ ㄊㄞˊ ㄩˇ.',
            pinyin: 'zhong1 nan2 bu4 de ren2 cha1 bu4 duo1 hui4 shuo1 tai2 yu3.',
            translation: '中南部の人々はほとんど台湾語を話せます。',
            memo: ''
          },
          {
            word: '買得起',
            sentence: '電鍋又便利又安全, 如果你買得起應該入手一個。',
            bopomofo: 'ㄉㄧㄢˋ ㄍㄨㄛ ㄧㄡˋ ㄅㄧㄢˋ ㄌㄧˋ ㄧㄡˋ ㄢ ㄑㄩㄢˊ, ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄇㄞˇ ㄉㄜ˙ ㄑㄧˇ ㄧㄥ ㄍㄞ ㄖㄨˋ ㄕㄡˇ ㄧˊ ㄍㄜˋ.',
            pinyin: 'dian4 guo1 you4 bian4 li4 you4 an1 quan2, ru2 guo3 ni3 mai3 de qi3 ying1 gai1 ru4 shou3 yi1 ge4.',
            translation: '電気蒸し器は便利で安全なので、 買う余裕があれば手に入れるべきです。',
            memo: ''
          },
          {
            word: '百貨公司',
            sentence: '百貨公司的東西比較貴, 我要先去小小的店購物。',
            bopomofo: 'ㄅㄞˇ ㄏㄨㄛˋ ㄍㄨㄥ ㄙ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ ㄅㄧˇ ㄐㄧㄠˋ ㄍㄨㄟˋ, ㄨㄛˇ ㄧㄠˋ ㄒㄧㄢ ㄑㄩˋ ㄒㄧㄠˇ ㄒㄧㄠˇ ㄉㄜ˙ ㄉㄧㄢˋ ㄍㄡˋ ㄨˋ.',
            pinyin: 'bai3 huo4 gong1 si1 de dong1 xi1 bi3 jiao4 gui4, wo3 yao4 xian1 qu4 xiao3 xiao3 de dian4 gou4 wu4.',
            translation: 'デパートの品物は高めなので、 先に小さな店に買い物に行きます。',
            memo: ''
          },
          {
            word: '越來越',
            sentence: '因為天氣越來越冷, 我上次出去是兩個星期前了。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄊㄧㄢ ㄑㄧˋ ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ ㄌㄥˇ, ㄨㄛˇ ㄕㄤˋ ㄘˋ ㄔㄨ ㄑㄩˋ ㄕˋ ㄌㄧㄤˇ ㄍㄜˋ ㄒㄧㄥ ㄑㄧ ㄑㄧㄢˊ ㄌㄜ˙.',
            pinyin: 'yin1 wei4 tian1 qi4 yue4 lai2 yue4 leng3, wo3 shang4 ci4 chu1 qu4 shi4 liang3 ge4 xing1 qi1 qian2 le.',
            translation: 'どんどん寒くなってきているので、　最後に出かけたのは二週間前です。',
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
