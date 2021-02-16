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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第14章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第14章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      data: {
        title: '當代中文課程課2・第14章',
        words: [
          {
            word: '將來',
            sentence: '如果我們不保護環境, 將來動物的棲息地越來越少了。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄨㄛˇ ㄇㄣ˙ ㄅㄨˋ ㄅㄠˇ ㄏㄨˋ ㄏㄨㄢˊ ㄐㄧㄥˋ, ㄐㄧㄤ ㄌㄞˊ ㄉㄨㄥˋ ㄨˋ ㄉㄜ˙ ㄑㄧ ㄒㄧˊ ㄉㄧˋ ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ ㄕㄠˇ ㄌㄜ˙.',
            pinyin: 'ru2 guo3 wo3 men bu4 bao3 hu4 huan2 jing4, jiang1 lai2 dong4 wu4 de qi1 xi2 di4 yue4 lai2 yue4 shao3 le.',
            translation: '私たちが環境を保護しなければ、 将来的に動物の生息地はますます少なくなるでしょう。',
            memo: ''
          },
          {
            word: '徵求',
            sentence: '那個先生現在徵求把辦公室內所有的東西能搬走的人。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄒㄧㄢ ㄕㄥ ㄒㄧㄢˋ ㄗㄞˋ ㄓㄥ ㄑㄧㄡˊ ㄅㄚˇ ㄅㄢˋ ㄍㄨㄥ ㄕˋ ㄋㄟˋ ㄙㄨㄛˇ ㄧㄡˇ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙ ㄋㄥˊ ㄅㄢ ㄗㄡˇ ㄉㄜ˙ ㄖㄣˊ.',
            pinyin: 'na4 ge4 xian1 sheng1 xian4 zai4 zheng1 qiu2 ba3 ban4 gong1 shi4 nei4 suo3 you3 de dong1 xi neng2 ban1 zou3 de ren2.',
            translation: 'その人は今、 オフィス内の物を全部移動くれる人を募集しています。',
            memo: ''
          },
          {
            word: '教師',
            sentence: '教師為了打掃教室叫學生把桌子推走。',
            bopomofo: 'ㄐㄧㄠˋ ㄕ ㄨㄟˋ ㄌㄜ˙ ㄉㄚˇ ㄙㄠˇ ㄐㄧㄠˋ ㄕˋ ㄐㄧㄠˋ ㄒㄩㄝˊ ㄕㄥ ㄅㄚˇ ㄓㄨㄛ ㄗ˙ ㄊㄨㄟ ㄗㄡˇ.',
            pinyin: 'jiao4 shi1 wei4 le da3 sao3 jiao4 shi4 jiao4 xue2 sheng1 ba3 zhuo1 zi tui1 zou3.',
            translation: '先生は生徒たちに、 掃除をするために教室内の机を押しやるように言いました。',
            memo: ''
          },
          {
            word: '認為',
            sentence: '我認為有人騎走了你的摩托車。',
            bopomofo: 'ㄨㄛˇ ㄖㄣˋ ㄨㄟˊ ㄧㄡˇ ㄖㄣˊ ㄑㄧˊ ㄗㄡˇ ㄌㄜ˙ ㄋㄧˇ ㄉㄜ˙ ㄇㄛˊ ㄊㄨㄛ ㄔㄜ.',
            pinyin: 'wo3 ren4 wei2 you3 ren2 qi2 zou3 le ni3 de mo2 tuo1 che1.',
            translation: '誰かがあなたのバイクに乗って行ってしまったと思います。',
            memo: ''
          },
          {
            word: '畢業',
            sentence: '為了畢業典禮要穿的西裝我想跟哥哥借, 但是他說那件已經被朋友借走了。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄅㄧˋ ㄧㄝˋ ㄉㄧㄢˇ ㄌㄧˇ ㄧㄠˋ ㄔㄨㄢ ㄉㄜ˙ ㄒㄧ ㄓㄨㄤ ㄨㄛˇ ㄒㄧㄤˇ ㄍㄣ ㄍㄜ ㄍㄜ˙ ㄐㄧㄝˋ, ㄉㄢˋ ㄕˋ ㄊㄚ ㄕㄨㄛ ㄋㄚˋ ㄐㄧㄢˋ ㄧˇ ㄐㄧㄥ ㄅㄟˋ ㄆㄥˊ ㄧㄡˇ ㄐㄧㄝˋ ㄗㄡˇ ㄌㄜ˙.',
            pinyin: 'wei4 le bi4 ye4 dian3 li3 yao4 chuan1 de xi1 zhuang1 wo3 xiang3 gen1 ge1 ge1 jie4, dan4 shi4 ta1 shuo1 na4 jian4 yi3 jing1 bei4 peng2 you3 jie4 zou3 le.',
            translation: '卒業式に着るスーツは兄のものを借りようと思っていたのですが、 既に友達に借りられてしまったと彼は言いました。',
            memo: ''
          },
          {
            word: '發展',
            sentence: '這個城市發展得很快, 你不快一點, 好房子都被買走了。',
            bopomofo: 'ㄓㄜˋ ㄍㄜˋ ㄔㄥˊ ㄕˋ ㄈㄚ ㄓㄢˇ ㄉㄜ˙ ㄏㄣˇ ㄎㄨㄞˋ, ㄋㄧˇ ㄅㄨˊ ㄎㄨㄞˋ ㄧˋ ㄉㄧㄢˇ, ㄏㄠˇ ㄈㄤˊ ㄗˇ ㄉㄡ ㄅㄟˋ ㄇㄞˇ ㄗㄡˇ ㄌㄜ˙.',
            pinyin: 'zhe4 ge4 cheng2 shi4 fa1 zhan3 de hen3 kuai4, ni3 bu2 kuai4 yi1 dian3, hao3 fang2 zi dou1 bei4 mai3 zou3 le.',
            translation: 'この都市は急速に発展しているので、 早くしないと良い家はみんな買われてしまいますよ・。',
            memo: ''
          },
          {
            word: '連',
            sentence: '那個孩子很調皮, 連工作上需要的東西都被他帶走了。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄏㄞˊ ㄗ˙ ㄏㄣˇ ㄊㄧㄠˊ ㄆㄧˊ, ㄌㄧㄢˊ ㄍㄨㄥ ㄗㄨㄛˋ ㄕㄤˋ ㄒㄩ ㄧㄠˋ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙ ㄉㄡ ㄅㄟˋ ㄊㄚ ㄉㄞˋ ㄗㄡˇ ㄌㄜ˙.',
            pinyin: 'na4 ge4 hai2 zi hen3 tiao2 pi2, lian2 gong1 zuo4 shang4 xu1 yao4 de dong1 xi dou1 bei4 ta1 dai4 zou3 le.',
            translation: 'あの子はとてもイタズラ好きで、 仕事に必要なものもみんな持って行ってしまいます。',
            memo: '※ここでの「上」は「方面」のニュアンス → 「仕事で使うもの」の意味。'
          },
          {
            word: '想法',
            sentence: '你的想法太謹慎了, 如果你慢吞吞地她很快會被別人約走了。',
            bopomofo: 'ㄋㄧˇ ㄉㄜ˙ ㄒㄧㄤˇ ㄈㄚˇ ㄊㄞˋ ㄐㄧㄣˇ ㄕㄣˋ ㄌㄜ˙, ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄇㄢˋ ㄊㄨㄣ ㄊㄨㄣ ㄉㄜ˙ ㄊㄚ ㄏㄣˇ ㄎㄨㄞˋ ㄏㄨㄟˋ ㄅㄟˋ ㄅㄧㄝˊ ㄖㄣˊ ㄩㄝ ㄗㄡˇ ㄌㄜ˙.',
            pinyin: 'ni3 de xiang3 fa3 tai4 jin3 shen4 le, ru2 guo3 ni3 man4 tun1 tun1 de ta1 hen3 kuai4 hui4 bei4 bie2 ren2 yue1 zou3 le.',
            translation: 'あなたは考え方が慎重すぎます、 ぐずぐずしていると彼女はすぐに他の誰かに誘われてしまいますよ。',
            memo: ''
          },
          {
            word: '不但',
            sentence: '不但你喜歡的藍色, 連綠色的衣服也被別人選走了。',
            bopomofo: 'ㄅㄨˊ ㄉㄢˋ ㄋㄧˇ ㄒㄧˇ ㄏㄨㄢ ㄉㄜ˙ ㄌㄢˊ ㄙㄜˋ, ㄌㄧㄢˊ ㄌㄩˋ ㄙㄜˋ ㄉㄜ˙ ㄧ ㄈㄨˊ ㄧㄝˇ ㄅㄟˋ ㄅㄧㄝˊ ㄖㄣˊ ㄒㄩㄢˇ ㄗㄡˇ ㄌㄜ˙.',
            pinyin: 'bu2 dan4 ni3 xi3 huan1 de lan2 se4, lian2 lu4 se4 de yi1 fu2 ye3 bei4 bie2 ren2 xuan3 zou3 le.',
            translation: 'あなたが好きな青だけでなく、 緑の服も既に他の人が選んでしまいましたよ。',
            memo: ''
          },
          {
            word: '繼續',
            sentence: '還有一個小時, 我們繼續運動吧!',
            bopomofo: 'ㄏㄞˊ ㄧㄡˇ ㄧˊ ㄍㄜˋ ㄒㄧㄠˇ ㄕˊ, ㄨㄛˇ ㄇㄣ˙ ㄐㄧˋ ㄒㄩˋ ㄩㄣˋ ㄉㄨㄥˋ ㄅㄚ˙!',
            pinyin: 'hai2 you3 yi1 ge4 xiao3 shi2, wo3 men ji4 xu4 yun4 dong4 ba!',
            translation: 'もう一時間、 運動を続けましょう!',
            memo: '',
            changed: '★'
          },
          {
            word: '使用',
            sentence: '小偷似乎是使用了什麼工具打窗戶打破， 錢被偷走了。',
            bopomofo: 'ㄒㄧㄠˇ ㄊㄡ ㄙˋ ㄏㄨ ㄕˋ ㄕˇ ㄩㄥˋ ㄌㄜ˙ ㄕㄣˊ ㄇㄜ˙ ㄍㄨㄥ ㄐㄩˋ ㄉㄚˇ ㄔㄨㄤ ㄏㄨˋ ㄉㄚˇ ㄆㄛˋ, ㄑㄧㄢˊ ㄅㄟˋ ㄊㄡ ㄗㄡˇ ㄌㄜ˙.',
            pinyin: 'xiao3 tou1 si4 hu1 shi4 shi3 yong4 le shen2 me gong1 ju4 da3 chuang1 hu4 da3 po4, qian2 bei4 tou1 zou3 le.',
            translation: '泥棒は道具を使って窓を壊したらしく、 お金は盗み去られてしまいました。',
            memo: ''
          },
          {
            word: '實現',
            sentence: '我在每個月的發薪日把所有的薪水提走了， 不能實現存一百萬的夢想。',
            bopomofo: 'ㄨㄛˇ ㄗㄞˋ ㄇㄟˇ ㄍㄜˋ ㄩㄝˋ ㄉㄜ˙ ㄈㄚ ㄒㄧㄣ ㄖˋ ㄅㄚˇ ㄙㄨㄛˇ ㄧㄡˇ ㄉㄜ˙ ㄒㄧㄣ ㄕㄨㄟˇ ㄊㄧˊ ㄗㄡˇ ㄌㄜ˙, ㄅㄨˋ ㄋㄥˊ ㄕˊ ㄒㄧㄢˋ ㄘㄨㄣˊ ㄧ ㄅㄞˇ ㄨㄢˋ ㄉㄜ˙ ㄇㄥˋ ㄒㄧㄤˇ.',
            pinyin: 'wo3 zai4 mei3 ge4 yue4 de fa1 xin1 ri4 ba3 suo3 you3 de xin1 shui3 ti2 zou3 le, bu4 neng2 shi2 xian4 cun2 yi1 bai3 wan4 de meng4 xiang3.',
            translation: '私は毎月給料日に給料を全額引き出してしまうので、 100万元貯める夢は実現不可能です。',
            memo: ''
          },
          {
            word: '招待',
            sentence: '他試著招待女朋友的爸爸， 但是爸爸很生氣地把他罵走了。',
            bopomofo: 'ㄊㄚ ㄕˋ ㄓㄜ˙ ㄓㄠ ㄉㄞˋ ㄋㄩˇ ㄆㄥˊ ㄧㄡˇ ㄉㄜ˙ ㄅㄚˋ ㄅㄚˋ, ㄉㄢˋ ㄕˋ ㄅㄚˋ ㄅㄚˋ ㄏㄣˇ ㄕㄥ ㄑㄧˋ ㄉㄜ˙ ㄅㄚˇ ㄊㄚ ㄇㄚˋ ㄗㄡˇ ㄌㄜ˙.',
            pinyin: 'ta1 shi4 zhe zhao1 dai4 nu3 peng2 you3 de ba4 ba4, dan4 shi4 ba4 ba4 hen3 sheng1 qi4 de ba3 ta1 ma4 zou3 le.',
            translation: '彼はガールフレンドのお父さんを楽しませようとしたのですが、 お父さんは怒って彼を追い返しました。',
            memo: ''
          },
          {
            word: '研究所',
            sentence: '那家研究所似乎在做秘密的研究。',
            bopomofo: 'ㄋㄚˋ ㄐㄧㄚ ㄧㄢˊ ㄐㄧㄡ ㄙㄨㄛˇ ㄙˋ ㄏㄨ ㄗㄞˋ ㄗㄨㄛˋ ㄇㄧˋ ㄇㄧˋ ㄉㄜ˙ ㄧㄢˊ ㄐㄧㄡ.',
            pinyin: 'na4 jia1 yan2 jiu1 suo3 si4 hu1 zai4 zuo4 mi4 mi4 de yan2 jiu1.',
            translation: 'その研究所は秘密の研究をしているようです。',
            memo: '',
            changed: '★'
          },
          {
            word: '聚',
            sentence: '我們什麼時候方便一起聚聚呢?',
            bopomofo: 'ㄨㄛˇ ㄇㄣ˙ ㄕㄣˊ ㄇㄜ˙ ㄕˊ ㄏㄡˋ ㄈㄤ ㄅㄧㄢˋ ㄧˋ ㄑㄧˇ ㄐㄩˋ ㄐㄩˋ ㄋㄜ˙?',
            pinyin: 'wo3 men shen2 me shi2 hou4 fang1 bian4 yi1 qi3 ju4 ju4 ne?',
            translation: 'みんなで集まる日はいつが都合良いでしょうか?',
            memo: '※「聚(ㄐㄩˋ/ju4)」：単独で使えない。',
            changed: '★'
          },
          {
            word: '香港',
            sentence: '他的很聰明的哥哥到香港的銀行工作。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄏㄣˇ ㄘㄨㄥ ㄇㄧㄥˊ ㄉㄜ˙ ㄍㄜ ㄍㄜ˙ ㄉㄠˋ ㄒㄧㄤ ㄍㄤˇ ㄉㄜ˙ ㄧㄣˊ ㄏㄤˊ ㄍㄨㄥ ㄗㄨㄛˋ.',
            pinyin: 'ta1 de hen3 cong1 ming2 de ge1 ge1 dao4 xiang1 gang3 de yin2 hang2 gong1 zuo4.',
            translation: '彼のとても賢いお兄さんは香港の銀行で働いています。',
            memo: ''
          },
          {
            word: '上海',
            sentence: '我看到上海的星巴克賣裡面有紅豆的烤餅。',
            bopomofo: 'ㄨㄛˇ ㄎㄢˋ ㄉㄠˋ ㄕㄤˋ ㄏㄞˇ ㄉㄜ˙ ㄒㄧㄥ ㄅㄚ ㄎㄜˋ ㄇㄞˋ ㄌㄧˇ ㄇㄧㄢˋ ㄧㄡˇ ㄏㄨㄥˊ ㄉㄡˋ ㄉㄜ˙ ㄎㄠˇ ㄅㄧㄥˇ.',
            pinyin: 'wo3 kan4 dao4 shang4 hai3 de xing1 ba1 ke4 mai4 li3 mian4 you3 hong2 dou4 de kao3 bing3.',
            translation: '上海のスターバックスで小豆入りのスコーンが売っているのを見たことがあります。',
            memo: ''
          },
          {
            word: '說到',
            sentence: '說到年終, 你今年拿到多少錢?',
            bopomofo: 'ㄕㄨㄛ ㄉㄠˋ ㄋㄧㄢˊ ㄓㄨㄥ, ㄋㄧˇ ㄐㄧㄣ ㄋㄧㄢˊ ㄋㄚˊ ㄉㄠˋ ㄉㄨㄛ ㄕㄠˇ ㄑㄧㄢˊ?',
            pinyin: 'shuo1 dao4 nian2 zhong1, ni3 jin1 nian2 na2 dao4 duo1 shao3 qian2?',
            translation: 'ボーナスに言及しますが、 今年はいくら貰えましたか?',
            memo: '',
            changed: '★'
          },
          {
            word: '念完',
            sentence: '念完大學的時候我想盡快找到工作。',
            bopomofo: 'ㄋㄧㄢˋ ㄨㄢˊ ㄉㄚˋ ㄒㄩㄝˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄨㄛˇ ㄒㄧㄤˇ ㄐㄧㄣˇ ㄎㄨㄞˋ ㄓㄠˇ ㄉㄠˋ ㄍㄨㄥ ㄗㄨㄛˋ.',
            pinyin: 'nian4 wan2 da4 xue2 de shi2 hou4 wo3 xiang3 jin3 kuai4 zhao3 dao4 gong1 zuo4.',
            translation: '大学を卒業したら、 できるだけ早く就職したいです。',
            memo: '',
            changed: '★'
          },
          {
            word: '分公司',
            sentence: '世界上到處都有麥當勞的分公司。',
            bopomofo: 'ㄕˋ ㄐㄧㄝˋ ㄕㄤ˙ ㄉㄠˋ ㄔㄨˋ ㄉㄡ ㄧㄡˇ ㄇㄞˋ ㄉㄤ ㄌㄠˊ ㄉㄜ˙ ㄈㄣ ㄍㄨㄥ ㄙ.',
            pinyin: 'shi4 jie4 shang4 dao4 chu4 dou1 you3 mai4 dang1 lao2 de fen1 gong1 si1.',
            translation: '世界中のいたる所にマクドナルドの支店はあります。',
            memo: '',
            changed: '★'
          },
          {
            word: '捨不得',
            sentence: '我真捨不得離開旅行時遇見的很可愛的狗。',
            bopomofo: 'ㄨㄛˇ ㄓㄣ ㄕㄜˇ ㄅㄨˋ ㄉㄜ˙ ㄌㄧˊ ㄎㄞ ㄌㄩˇ ㄒㄧㄥˊ ㄕˊ ㄩˋ ㄐㄧㄢˋ ㄉㄜ˙ ㄏㄣˇ ㄎㄜˇ ㄞˋ ㄉㄜ˙ ㄍㄡˇ.',
            pinyin: 'wo3 zhen1 she3 bu4 de li4 kai1 lu3 xing2 shi2 yu4 jian4 de hen3 ke3 ai4 de gou3.',
            translation: '旅行の時に出会った可愛い犬と別れるのは本当に寂しかったです。',
            memo: '',
            changed: '★'
          },
          {
            word: '聚一聚',
            sentence: '他現在計畫同學們的忘年會, 那個時候大家再聚一聚。',
            bopomofo: 'ㄊㄚ ㄒㄧㄢˋ ㄗㄞˋ ㄐㄧˋ ㄏㄨㄚˋ ㄊㄨㄥˊ ㄒㄩㄝˊ ㄇㄣ˙ ㄉㄜ˙ ㄨㄤˋ ㄋㄧㄢˊ ㄏㄨㄟˋ, ㄋㄚˋ ㄍㄜˋ ㄕˊ ㄏㄡˋ ㄉㄚˋ ㄐㄧㄚ ㄗㄞˋ ㄐㄩˋ ㄧ ㄐㄩˋ.',
            pinyin: 'ta1 xian4 zai4 ji4 hua4 tong2 xue2 men de wang4 nian2 hui4, na4 ge4 shi2 hou4 da4 jia1 zai4 ju4 yi1 ju4.',
            translation: '彼は今クラスメートの忘年会を企画していて、 その日は再びみんなが集まります。',
            memo: '※「忘年會」：一般的な忘年会。 「尾牙(ㄨㄟˇ ㄧㄚˊ/wei3 ya2)」は会社の忘年会。 「年尾的同學會」だと「年末に行われる同窓会」。',
            changed: '★'
          },
          {
            word: '當時',
            sentence: '我太糊塗了, 當時我沒意識到我的眼鏡就在我的頭上。',
            bopomofo: 'ㄨㄛˇ ㄊㄞˋ ㄏㄨˊ ㄊㄨˊ ㄌㄜ˙, ㄉㄤ ㄕˊ ㄨㄛˇ ㄇㄟˊ ㄧˋ ㄕˊ ㄉㄠˋ ㄨㄛˇ ㄉㄜ˙ ㄧㄢˇ ㄐㄧㄥˋ ㄐㄧㄡˋ ㄗㄞˋ ㄨㄛˇ ㄉㄜ˙ ㄊㄡˊ ㄕㄤˋ.',
            pinyin: 'wo3 tai4 hu2 tu2 le, dang1 shi2 wo3 mei2 yi4 shi2 dao4 wo3 de yan3 jing4 jiu4 zai4 wo3 de tou2 shang4.',
            translation: 'とても混乱していたので、 その時は眼鏡が頭の上にある事に気付きませんでした。',
            memo: ''
          },
          {
            word: '聲調',
            sentence: '如果我的聲調錯了, 有的時候人們會聽不懂嗎?',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄨㄛˇ ㄉㄜ˙ ㄕㄥ ㄉㄧㄠˋ ㄘㄨㄛˋ ㄌㄜ˙, ㄧㄡˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄖㄣˊ ㄇㄣ˙ ㄏㄨㄟˋ ㄊㄧㄥ ㄅㄨˋ ㄉㄨㄥˇ ㄇㄚ˙?',
            pinyin: 'ru2 guo3 wo3 de sheng1 diao4 cuo4 le, you3 de shi2 hou4 ren2 men hui4 ting1 bu4 dong3 ma?',
            translation: 'イントネーションを間違うと、 言っている意味がわかってもらえない事はありますか?',
            memo: '',
            changed: '★'
          },
          {
            word: '發音',
            sentence: '如果你的發音不清楚, 大家不能知道你在說什麼。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄉㄜ˙ ㄈㄚ ㄧㄣ ㄅㄨˋ ㄑㄧㄥ ㄔㄨˇ, ㄉㄚˋ ㄐㄧㄚ ㄅㄨˋ ㄋㄥˊ ㄓ ㄉㄠˋ ㄋㄧˇ ㄗㄞˋ ㄕㄨㄛ ㄕˊ ㄇㄛˇ.',
            pinyin: 'ru2 guo3 ni3 de fa1 yin1 bu4 qing1 chu3, da4 jia1 bu4 neng2 zhi1 dao4 ni3 zai4 shuo1 shen2 me.',
            translation: 'はっきりと発音しないと、 みんなあなたが何を言っているのか分かりませんよ。',
            memo: ''
          },
          {
            word: '準',
            sentence: '巴士的班次來的時間不太準。',
            bopomofo: 'ㄅㄚ ㄕˋ ㄉㄜ˙ ㄅㄢ ㄘˋ ㄌㄞˊ ㄉㄜ˙ ㄕˊ ㄐㄧㄢ ㄅㄨˋ ㄊㄞˋ ㄓㄨㄣˇ.',
            pinyin: 'ba1 shi4 de ban1 ci4 lai2 de shi2 jian1 bu2 tai4 zhun3.',
            translation: 'バスが来る時間はあまり正確ではありません。',
            memo: ''
          },
          {
            word: '企業',
            sentence: '連很大的企業都會破產了。',
            bopomofo: 'ㄌㄧㄢˊ ㄏㄣˇ ㄉㄚˋ ㄉㄜ˙ ㄑㄧˋ ㄧㄝˋ ㄉㄡ ㄏㄨㄟˋ ㄆㄛˋ ㄔㄢˇ ㄌㄜ˙.',
            pinyin: 'lian2 hen3 da4 de qi4 ye4 dou1 hui4 po4 chan3 le.',
            translation: '大企業でさえも、 時には倒産する事があります。',
            memo: '※「企業」：台湾では「ㄑㄧˋ ㄧㄝˋ/qi4 ye4」の発音が一般的。 中国は「ㄑㄧˇ ㄧㄝˋ/qi4 ye4」が多い。',
            changed: '★'
          },
          {
            word: '管理',
            sentence: '你只要用適合的工具, 資料的管理就簡單多了。',
            bopomofo: 'ㄋㄧˇ ㄓˇ ㄧㄠˋ ㄩㄥˋ ㄕˋ ㄏㄜˊ ㄉㄜ˙ ㄍㄨㄥ ㄐㄩˋ, ㄗ ㄌㄧㄠˋ ㄉㄜ˙ ㄍㄨㄢˇ ㄌㄧˇ ㄐㄧㄡˋ ㄐㄧㄢˇ ㄉㄢ ㄉㄨㄛ ㄌㄜ˙.',
            pinyin: 'ni3 zhi3 yao4 yong4 shi4 he2 de gong1 ju4, zi1 liao4 de guan3 li3 jiu4 jian3 dan1 duo1 le.',
            translation: '適切なツールを使いさえすれば、 データの管理は簡単になります。',
            memo: '',
            changed: '★'
          },
          {
            word: '系',
            sentence: '科學系的學生常常在研究室熬夜念書。',
            bopomofo: 'ㄎㄜ ㄒㄩㄝˊ ㄒㄧˋ ㄉㄜ˙ ㄒㄩㄝˊ ㄕㄥ ㄔㄤˊ ㄔㄤˊ ㄗㄞˋ ㄧㄢˊ ㄐㄧㄡ ㄕˋ ㄠˊ ㄧㄝˋ ㄋㄧㄢˋ ㄕㄨ.',
            pinyin: 'ke1 xue2 xi4 de xue2 sheng1 chang2 chang2 zai4 yan2 jiu1 shi4 ao2 ye4 nian4 shu1.',
            translation: '理系の学生はしばしば夜中まで研究室で勉強します。',
            memo: '',
            changed: '★'
          },
          {
            word: '經濟',
            sentence: '我覺得經濟的知識很重要, 但是我沒有興趣。',
            bopomofo: 'ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄐㄧㄥ ㄐㄧˋ ㄉㄜ˙ ㄓ ㄕˊ ㄏㄣˇ ㄓㄨㄥˋ ㄧㄠˋ, ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄇㄟˊ ㄧㄡˇ ㄒㄧㄥˋ ㄑㄩˋ.',
            pinyin: 'wo3 jue2 de jing1 ji4 de zhi1 shi2 hen3 zhong4 yao4, dan4 shi4 wo3 mei2 you3 xing4 qu4.',
            translation: '経済知識はとても重要だと思うのですが、 興味が湧かないのです。',
            memo: ''
          },
          {
            word: '幫助',
            sentence: '他透過朋友的幫助, 終於能畢業了。',
            bopomofo: 'ㄊㄚ ㄊㄡˋ ㄍㄨㄛˋ ㄆㄥˊ ㄧㄡˇ ㄉㄜ˙ ㄅㄤ ㄓㄨˋ, ㄓㄨㄥ ㄩˊ ㄋㄥˊ ㄅㄧˋ ㄧㄝˋ ㄌㄜ˙.',
            pinyin: 'ta1 tou4 guo4 peng2 you3 de bang1 zhu4, zhong1 yu2 neng2 bi4 ye4 le.',
            translation: '彼の友人の助けを借りて、 ついに卒業する事ができました。',
            memo: ''
          },
          {
            word: '有關',
            sentence: '貓咪有關的物品我都想收集。',
            bopomofo: 'ㄇㄠ ㄇㄧ ㄧㄡˇ ㄍㄨㄢ ㄉㄜ˙ ㄨˋ ㄆㄧㄣˇ ㄨㄛˇ ㄉㄡ ㄒㄧㄤˇ ㄕㄡ ㄐㄧˊ.',
            pinyin: 'mao1 mi1 you3 guan1 de wu4 pin3 wo3 dou1 xiang3 shou1 ji2.',
            translation: '猫関連のグッズは全部集めたくなります。',
            memo: '',
            changed: '★'
          },
          {
            word: '語法',
            sentence: '似乎他不太擔心語法, 所以他的中文是相當破。',
            bopomofo: 'ㄙˋ ㄏㄨ ㄊㄚ ㄅㄨˊ ㄊㄞˋ ㄉㄢ ㄒㄧㄣ ㄩˇ ㄈㄚˇ, ㄙㄨㄛˇ ㄧˇ ㄊㄚ ㄉㄜ˙ ㄓㄨㄥ ㄨㄣˊ ㄕˋ ㄒㄧㄤ ㄉㄤ ㄆㄛˋ.',
            pinyin: 'si4 hu1 ta1 bu2 tai4 dan1 xin1 yu3 fa3, suo3 yi3 ta1 de zhong1 wen2 shi4 xiang1 dang1 po4.',
            translation: '彼は文法をあまり気にしていないらしく、 彼の中国語はかなりブロークンです。',
            memo: ''
          },
          {
            word: '研究',
            sentence: '他研究數學, 除了數式有關的事他不常談。',
            bopomofo: 'ㄊㄚ ㄧㄢˊ ㄐㄧㄡˋ ㄕㄨˋ ㄒㄩㄝˊ, ㄔㄨˊ ㄌㄜ˙ ㄕㄨˋ ㄕˋ ㄧㄡˇ ㄍㄨㄢ ㄉㄜ˙ ㄕˋ ㄊㄚ ㄅㄨˋ ㄔㄤˊ ㄊㄢˊ.',
            pinyin: 'ta1 yan2 jiu4 shu4 xue2, chu2 le shu4 shi4 you3 guan1 de shi4 ta1 bu4 chang2 tan2.',
            translation: '彼は数学を研究していて、 数式以外の事についてはあまり語りません。',
            memo: '※「研究」の発音：台湾では「ㄧㄢˊ ㄐㄧㄡˋ/yan2 jiu4」が一般的。 中国では「ㄧㄢˊ ㄐㄧㄡ/yan2 jiu1」が多い。'
          },
          {
            word: '教書',
            sentence: '教授盡力花時間在自己的研究上, 其實覺得教書很麻煩。',
            bopomofo: 'ㄐㄧㄠˋ ㄕㄡˋ ㄐㄧㄣˋ ㄌㄧˋ ㄏㄨㄚ ㄕˊ ㄐㄧㄢ ㄗㄞˋ ㄗˋ ㄐㄧˇ ㄉㄜ˙ ㄧㄢˊ ㄐㄧㄡ ㄕㄤˋ, ㄑㄧˊ ㄕˊ ㄐㄩㄝˊ ㄉㄜ˙ ㄐㄧㄠ ㄕㄨ ㄏㄣˇ ㄇㄚˊ ㄈㄢˊ.',
            pinyin: 'jiao4 shou4 jin4 li4 hua1 shi2 jian1 zai4 zi4 ji3 de yan2 jiu1 shang4, qi2 shi2 jue2 de jiao1 shu1 hen3 ma2 fan2.',
            translation: '教授はなるべく自身の研究に時間を使うよう尽力していて、 教えるのは実際面倒だと思っています。',
            memo: '',
            changed: '★'
          },
          {
            word: '方法',
            sentence: '不是只有一種方法， 所以讓我們討論哪個是最好的。',
            bopomofo: 'ㄅㄨˊ ㄕˋ ㄓˇ ㄧㄡˇ ㄧ ㄓㄨㄥˇ ㄈㄤ ㄈㄚˇ, ㄙㄨㄛˇ ㄧˇ ㄖㄤˋ ㄨㄛˇ ㄇㄣ˙ ㄊㄠˇ ㄌㄨㄣˋ ㄋㄟˇ ㄍㄜˋ ㄕˋ ㄗㄨㄟˋ ㄏㄠˇ ㄉㄜ˙.',
            pinyin: 'bu2 shi4 zhi3 you3 yi1 zhong3 fang1 fa3, suo3 yi3 rang4 wo3 men tao3 lun4 na3 ge4 shi4 zui4 hao3 de.',
            translation: '方法は1つだけではないので、 どれが一番良いか話し合いましょう。',
            memo: ''
          },
          {
            word: '目的',
            sentence: '他不選擇任何手段來實現自己的目的。',
            bopomofo: 'ㄊㄚ ㄅㄨˋ ㄒㄩㄢˇ ㄗㄜˊ ㄖㄣˋ ㄏㄜˊ ㄕㄡˇ ㄉㄨㄢˋ ㄌㄞˊ ㄕˊ ㄒㄧㄢˋ ㄗˋ ㄐㄧˇ ㄉㄜ˙ ㄇㄨˋ ㄉㄧˋ.',
            pinyin: 'ta1 bu4 xuan3 ze2 ren4 he2 shou3 duan4 lai2 shi2 xian4 zi4 ji3 de mu4 di4.',
            translation: '目的を達成するために、 彼は手段を選びません。',
            memo: ''
          },
          {
            word: '國際',
            sentence: '民間的國際交流非常重要。',
            bopomofo: 'ㄇㄧㄣˊ ㄐㄧㄢ ㄉㄜ˙ ㄍㄨㄛˊ ㄐㄧˋ ㄐㄧㄠ ㄌㄧㄡˊ ㄈㄟ ㄔㄤˊ ㄓㄨㄥˋ ㄧㄠˋ.',
            pinyin: 'min2 jian1 de guo2 ji4 jiao1 liu2 fei1 chang2 zhong4 yao4.',
            translation: '民間の国際交流は非常に重要です。',
            memo: '',
            changed: '★'
          },
          {
            word: '翻譯',
            sentence: '為了做翻譯工作, 除了外國語言的能力你的母語能力也要提升。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄗㄨㄛˋ ㄈㄢ ㄧˋ ㄍㄨㄥ ㄗㄨㄛˋ, ㄔㄨˊ ㄌㄜ˙ ㄨㄞˋ ㄍㄨㄛˊ ㄩˇ ㄧㄢˊ ㄉㄜ˙ ㄋㄥˊ ㄌㄧˋ ㄋㄧˇ ㄉㄜ˙ ㄇㄨˇ ㄩˇ ㄋㄥˊ ㄌㄧˋ ㄧㄝˇ ㄧㄠˋ ㄊㄧˊ ㄕㄥ.',
            pinyin: 'wei4 le zuo4 fan1 yi4 gong1 zuo4, chu2 le wai4 guo2 yu3 yan2 de neng2 li4 ni3 de mu3 yu3 neng2 li4 ye3 yao4 ti2 sheng1.',
            translation: '翻訳の仕事をするためには、 外国語能力に加えて母国語能力も向上させる必要があります。',
            memo: '',
            changed: '★'
          },
          {
            word: '外交',
            sentence: '由於她的母親是外交官， 所以她從小就住在國外。',
            bopomofo: 'ㄧㄡˊ ㄩˊ ㄊㄚ ㄉㄜ˙ ㄇㄨˇ ㄑㄧㄣ ㄕˋ ㄨㄞˋ ㄐㄧㄠ ㄍㄨㄢ, ㄙㄨㄛˇ ㄧˇ ㄊㄚ ㄘㄨㄥˊ ㄒㄧㄠˇ ㄐㄧㄡˋ ㄓㄨˋ ㄗㄞˋ ㄍㄨㄛˊ ㄨㄞˋ.',
            pinyin: 'you2 yu2 ta1 de mu3 qin1 shi4 wai4 jiao1 guan1, suo3 yi3 ta1 cong2 xiao3 jiu4 zhu4 zai4 guo2 wai4.',
            translation: '彼女の母親は外交官なので、 彼女は小さなころから外国に住んでいます。',
            memo: ''
          },
          {
            word: '人員',
            sentence: '顯然沒有足夠的員工， 但是公司還是不打算僱用新的人員。',
            bopomofo: 'ㄒㄧㄢˇ ㄖㄢˊ ㄇㄟˊ ㄧㄡˇ ㄗㄨˊ ㄍㄡˋ ㄉㄜ˙ ㄩㄢˊ ㄍㄨㄥ, ㄉㄢˋ ㄕˋ ㄍㄨㄥ ㄙ ㄏㄞˊ ㄕˋ ㄅㄨˋ ㄉㄚˇ ㄙㄨㄢˋ ㄍㄨˋ ㄩㄥˋ ㄒㄧㄣ ㄉㄜ˙ ㄖㄣˊ ㄩㄢˊ.',
            pinyin: 'xian3 ran2 mei2 you3 zu2 gou4 de yuan2 gong1, dan4 shi4 gong1 si1 hai2 shi4 bu4 da3 suan4 gu4 yong4 xin1 de ren2 yuan2.',
            translation: '明らかに従業員の数が足りないのですが、 会社は新しいスタッフを雇う事を計画してくれません。',
            memo: '',
            changed: '★'
          },
          {
            word: '充實',
            sentence: '為了充實自己的知識, 他現在下班後去專業學校。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄔㄨㄥ ㄕˊ ㄗˋ ㄐㄧˇ ㄉㄜ˙ ㄓ ㄕˊ, ㄊㄚ ㄒㄧㄢˋ ㄗㄞˋ ㄒㄧㄚˋ ㄅㄢ ㄏㄡˋ ㄑㄩˋ ㄓㄨㄢ ㄧㄝˋ ㄒㄩㄝˊ ㄒㄧㄠˋ.',
            pinyin: 'wei4 le chong1 shi2 zi4 ji3 de zhi1 shi2, ta1 xian4 zai4 xia4 ban1 hou4 qu4 zhuan1 ye4 xue2 xiao4.',
            translation: '彼は知識を深めるために、 仕事の後専門学校に通っています。',
            memo: ''
          },
          {
            word: '專業',
            sentence: '她的專業是法律, 你可以問她王牌辯護人是什麼。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄓㄨㄢ ㄧㄝˋ ㄕˋ ㄈㄚˇ ㄌㄩˋ, ㄋㄧˇ ㄎㄜˇ ㄧˇ ㄨㄣˋ ㄊㄚ ㄨㄤˊ ㄆㄞˊ ㄅㄧㄢˋ ㄏㄨˋ ㄖㄣˊ ㄕˋ ㄕㄣˊ ㄇㄜ˙.',
            pinyin: 'ta1 de zhuan1 ye4 shi4 fa3 lu4, ni3 ke3 yi3 wen4 ta1 wang2 pai2 bian4 hu4 ren2 shi4 shen2 me.',
            translation: '彼女の専門は法律なので、 王牌辯護人が一体何なのかは彼女に聞くといいですよ。',
            memo: ''
          },
          {
            word: '能力',
            sentence: '我希望有跟貓咪能說話的能力。',
            bopomofo: 'ㄨㄛˇ ㄒㄧ ㄨㄤˋ ㄧㄡˇ ㄍㄣ ㄇㄠ ㄇㄧ ㄋㄥˊㄕㄨㄛ ㄏㄨㄚˋ ㄉㄜ˙ ㄋㄥˊ ㄌㄧˋ.',
            pinyin: 'wo3 xi1 wang4 you3 gen1 mao1 mi1 neng2 shuo1 hua4 de neng2 li4.',
            translation: '猫と話ができる能力があったらなと思います。',
            memo: ''
          },
          {
            word: '加拿大',
            sentence: '加拿大是很大的國家, 西部跟東部的天氣差很多。',
            bopomofo: 'ㄐㄧㄚ ㄋㄚˊ ㄉㄚˋ ㄕˋ ㄏㄣˇ ㄉㄚˋ ㄉㄜ˙ ㄍㄨㄛˊ ㄐㄧㄚ, ㄒㄧ ㄅㄨˋ ㄍㄣ ㄉㄨㄥ ㄅㄨˋ ㄉㄜ˙ ㄊㄧㄢ ㄑㄧˋ ㄔㄚˋ ㄏㄣˇ ㄉㄨㄛ.',
            pinyin: 'jia1 na2 da4 shi4 hen3 da4 de guo2 jia1, xi1 bu4 gen1 dong1 bu4 de tian1 qi4 cha1 hen3 duo1.',
            translation: 'カナダはとても大きな国で、 西と東の天気は大分異なります。',
            memo: ''
          },
          {
            word: '企業管理系(企管系)',
            sentence: '企業管理系畢業的大概百分之幾的人能成為總裁呢?',
            bopomofo: 'ㄑㄧˋ ㄧㄝˋ ㄍㄨㄢˇ ㄌㄧˇ ㄒㄧˋ ㄅㄧˋ ㄧㄝˋ ㄉㄜ˙ ㄉㄚˋ ㄍㄞˋ ㄅㄞˇ ㄈㄣ ㄓ ㄐㄧˇ ㄉㄜ˙ ㄖㄣˊ ㄋㄥˊ ㄔㄥˊ ㄨㄟˊ ㄗㄨㄥˇ ㄘㄞˊ ㄋㄜ˙?',
            pinyin: 'qi4 ye4 guan3 li3 xi4 bi4 ye4 de da4 gai4 bai3 fen1 zhi1 ji3 de ren2 neng2 cheng2 wei2 zong3 cai2 ne?',
            translation: '経営学部を卒業した人の何パーセントくらいが社長になるのですか?',
            memo: '',
            changed: '★'
          },
          {
            word: '國際關係',
            sentence: '除了國際關係的工作, 有很多使用外語的機會。',
            bopomofo: 'ㄔㄨˊ ㄌㄜ˙ ㄍㄨㄛˊ ㄐㄧˋ ㄍㄨㄢ ㄒㄧˋ ㄉㄜ˙ ㄍㄨㄥ ㄗㄨㄛˋ, ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄕˇ ㄩㄥˋ ㄨㄞˋ ㄩˇ ㄉㄜ˙ ㄐㄧ ㄏㄨㄟˋ.',
            pinyin: 'chu2 le guo2 ji4 guan1 xi4 de gong1 zuo4, you3 hen3 duo1 shi3 yong4 wai4 yu3 de ji1 hui4.',
            translation: '国際関係の仕事だけではなく、 外国語を使う機会はたくさんあります。',
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
