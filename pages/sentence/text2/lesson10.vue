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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第10章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第10章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      data: {
        title: '當代中文課程課2・第10章',
        words: [
          {
            word: '馬丁',
            sentence: '馬丁從比較冷的地方來的, 台灣的天氣對他很熱。',
            bopomofo: 'ㄇㄚˇ ㄉㄧㄥ ㄘㄨㄥˊ ㄅㄧˇ ㄐㄧㄠˋ ㄌㄥˇ ㄉㄜ˙ ㄉㄧˋ ㄈㄤ ㄌㄞˊ ㄉㄜ˙, ㄊㄞˊ ㄨㄢ ㄉㄜ˙ ㄊㄧㄢ ㄑㄧˋ ㄉㄨㄟˋ ㄊㄚ ㄏㄣˇ ㄖㄜˋ.',
            pinyin: 'ma3 ding1 cong2 bi3 jiao4 leng3 de di4 fang1 lai2 de, tai2 wan1 de tian1 qi4 dui4 ta1 hen3 re4.',
            translation: 'マーティンは比較的寒い地域から来たので、 彼にとって台湾は暑いです。',
            memo: '',
            changed: '★'
          },
          {
            word: '包',
            sentence: '禮物用彩色的紙包起來。',
            bopomofo: 'ㄌㄧˇ ㄨˋ ㄩㄥˋ ㄘㄞˇ ㄙㄜˋ ㄉㄜ˙ ㄓˇ ㄅㄠ ㄑㄧˇ ㄌㄞˊ.',
            pinyin: 'li3 wu4 yong4 cai3 se4 de zhi3 bao1 qi3 lai2.',
            translation: 'プレゼントはカラフルな紙で包まれています。',
            memo: '',
            changed: '★'
          },
          {
            word: '餃子',
            sentence: '台灣的超市賣的餃子種類很多。',
            bopomofo: 'ㄊㄞˊ ㄨㄢ ㄉㄜ˙ ㄔㄠ ㄕˋ ㄇㄞˋ ㄉㄜ˙ ㄐㄧㄠˇ ㄗ˙ ㄓㄨㄥˇ ㄌㄟˋ ㄏㄣˇ ㄉㄨㄛ.',
            pinyin: 'tai2 wan1 de chao1 shi4 mai4 de jiao3 zi zhong3 lei4 hen3 duo1.',
            translation: '台湾のスーパーマーケットでは、 さまざまな種類の餃子を販売しています。',
            memo: ''
          },
          {
            word: '脫',
            sentence: '房子裡有一點熱, 但是如果脫外套會冷。',
            bopomofo: 'ㄈㄤˊ ㄗ˙ ㄌㄧˇ ㄧㄡˇ ㄧˋ ㄉㄧㄢˇ ㄖㄜˋ,  ㄉㄢˋ ㄕˋ ㄖㄨˊ ㄍㄨㄛˇ ㄊㄨㄛ ㄨㄞˋ ㄊㄠˋ ㄏㄨㄟˋ ㄌㄥˇ.',
            pinyin: 'fang2 zi li3 you3 yi1 dian3 re4, dan4 shi4 ru2 guo3 tuo1 wai4 tao4 hui4 leng3.',
            translation: '家の中は少し暑いですが、 コートを脱ぐと寒そうです。',
            memo: '',
            changed: '★'
          },
          {
            word: '鞋',
            sentence: '你不應該穿著皮鞋爬山。',
            bopomofo: 'ㄋㄧˇ ㄅㄨˋ ㄧㄥ ㄍㄞ ㄔㄨㄢ ㄓㄜ˙ ㄆㄧˊ ㄒㄧㄝˊ ㄆㄚˊ ㄕㄢ.',
            pinyin: 'ni3 bu4 ying1 gai1 chuan1 zhe pi2 xie2 pa2 shan1.',
            translation: '山登りする時に革靴は履かない方がいいですよ。',
            memo: '',
            changed: '★'
          },
          {
            word: '關',
            sentence: '蟲可能進到房間來, 請把窗戶關上。',
            bopomofo: 'ㄔㄨㄥˊ ㄎㄜˇ ㄋㄥˊ ㄐㄧㄣˋ ㄉㄠˋ ㄈㄤˊ ㄐㄧㄢ ㄌㄞˊ, ㄑㄧㄥˇ ㄅㄚˇ ㄔㄨㄤ ㄏㄨˋ ㄍㄨㄢ ㄕㄤˋ.',
            pinyin: 'chong2 ke3 neng2 jin4 dao4 fang2 jian1 lai2, qing3 ba3 chuang1 hu4 guan1 shang4.',
            translation: '虫が部屋に入ってくるかもしれないので、 窓を閉めてください。',
            memo: '※ここでの「上」は補語。',
            changed: '★'
          },
          {
            word: '門',
            sentence: '門的鑰匙壞了， 所以我要打電話給房東。',
            bopomofo: 'ㄇㄣˊ ㄉㄜ˙ ㄧㄠˋ ㄕ˙ ㄏㄨㄞˋ ㄌㄜ˙, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄧㄠˋ ㄉㄚˇ ㄉㄧㄢˋ ㄏㄨㄚˋ ㄍㄟˇ ㄈㄤˊ ㄉㄨㄥ.',
            pinyin: 'men2 de yao4 shi huai4 le, suo3 yi3 wo3 yao4 da3 dian4 hua4 gei3 fang2 dong1.',
            translation: 'ドアの鍵が壊れているので、 家主に電話します。',
            memo: ''
          },
          {
            word: '春捲',
            sentence: '你喜歡放在春捲裡的材料是什麼?',
            bopomofo: 'ㄋㄧˇ ㄒㄧˇ ㄏㄨㄢ ㄈㄤˋ ㄗㄞˋ ㄔㄨㄣ ㄐㄩㄢˇ ㄌㄧˇ ㄉㄜ˙ ㄘㄞˊ ㄌㄧㄠˋ ㄕˋ ㄕㄣˊ ㄇㄜ˙?',
            pinyin: 'ni3 xi3 huan1 fang4 zai4 chun1 juan4 li3 de cai2 liao4 shi4 shen2 me?',
            translation: '春巻きの具で好きなものは何ですか?',
            memo: '',
            changed: '★'
          },
          {
            word: '泡菜',
            sentence: '自己做的泡菜能保存多久?',
            bopomofo: 'ㄗˋ ㄐㄧˇ ㄗㄨㄛˋ ㄉㄜ˙ ㄆㄠˋ ㄘㄞˋ ㄋㄥˊ ㄅㄠˇ ㄘㄨㄣˊ ㄉㄨㄛ ㄐㄧㄡˇ?',
            pinyin: 'zi4 ji3 zuo4 de pao4 cai4 neng2 bao3 cun2 duo1 jiu3?',
            translation: '自分で作ったキムチはいつまで保存できますか?',
            memo: ''
          },
          {
            word: '飯廳',
            sentence: '我打掃飯廳打掃得很乾淨, 但是別的房間都很隨便。',
            bopomofo: 'ㄨㄛˇ ㄉㄚˇ ㄙㄠˇ ㄈㄢˋ ㄊㄧㄥ ㄉㄚˇ ㄙㄠˇ ㄉㄜ˙ ㄏㄣˇ ㄍㄢ ㄐㄧㄥˋ, ㄉㄢˋ ㄕˋ ㄅㄧㄝˊ ㄉㄜ˙ ㄈㄤˊ ㄐㄧㄢ ㄉㄡ ㄏㄣˇ ㄙㄨㄟˊ ㄅㄧㄢˋ.',
            pinyin: 'wo3 da3 sao3 fan4 ting1 da3 sao3 de hen3 qian2 jing4, dan4 shi4 bie2 de fang2 jian1 dou1 hen3 sui2 bian4.',
            translation: 'ダイニングルームはきれいに掃除しますが、 他の部屋は適当です。',
            memo: '※「隨便」は形容詞。',
            changed: '★'
          },
          {
            word: '下',
            sentence: '冰箱裡放不下我們買的大量食物。',
            bopomofo: 'ㄅㄧㄥ ㄒㄧㄤ ㄌㄧˇ ㄈㄤˋ ㄅㄨˊ ㄒㄧㄚˋ ㄨㄛˇ ㄇㄣ˙ ㄇㄞˇ ㄉㄜ˙ ㄉㄚˋ ㄌㄧㄤˋ ㄕˊ ㄨˋ.',
            pinyin: 'bing1 xiang1 li3 fang4 bu2 xia4 wo3 men mai3 de da4 liang4 shi2 wu4.',
            translation: '私たちが買った大量の食べ物は冷蔵庫に収まりませんでした。',
            memo: '',
            changed: '★'
          },
          {
            word: '洗',
            sentence: '你洗貓睡覺用的被子的時候, 牠哭嗎?',
            bopomofo: 'ㄋㄧˇ ㄒㄧˇ ㄇㄠ ㄕㄨㄟˋ ㄐㄧㄠˋ ㄩㄥˋ ㄉㄜ˙ ㄅㄟˋ ㄗ˙ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄊㄚ ㄎㄨ ㄇㄚ˙?',
            pinyin: 'ni3 xi3 mao1 shui4 jiao4 yong4 de bei4 zi de shi2 hou4, ta1 ku1 ma?',
            translation: '寝る時用のブランケットを洗ってしまったら、 猫は泣きますか?',
            memo: '',
            changed: '★'
          },
          {
            word: '做菜',
            sentence: '使用微波爐能縮短做菜的時間。',
            bopomofo: 'ㄕˇ ㄩㄥˋ ㄨㄟ ㄅㄛ ㄌㄨˊ ㄋㄥˊ ㄙㄨㄛ ㄉㄨㄢˇ ㄗㄨㄛˋ ㄘㄞˋ ㄉㄜ˙ ㄕˊ ㄐㄧㄢ.',
            pinyin: 'shi3 yong4 wei1 bo1 lu2 neng2 suo1 duan3 zuo4 cai4 de shi2 jian1.',
            translation: '電子レンジを使うと、 調理時間を短縮できます。',
            memo: '',
            changed: '★'
          },
          {
            word: '水餃',
            sentence: '水餃的醬你要買還是自己做?',
            bopomofo: 'ㄕㄨㄟˇ ㄐㄧㄠˇ ㄉㄜ˙ ㄐㄧㄤˋ ㄋㄧˇ ㄧㄠˋ ㄇㄞˇ ㄏㄞˊ ㄕˋ ㄗˋ ㄐㄧˇ ㄗㄨㄛˋ?',
            pinyin: 'shui3 jiao3 de jiang4 ni3 yao4 mai3 hai2 shi4 zi4 ji3 zuo4?',
            translation: '水餃子のタレは買いますか、 それとも自分で作りますか?',
            memo: '',
            changed: '★'
          },
          {
            word: '煮',
            sentence: '菜可以在外面買, 我只煮白飯。',
            bopomofo: 'ㄘㄞˋ ㄎㄜˇ ㄧˇ ㄗㄞˋ　ㄨㄞˋ ㄇㄧㄢˋ ㄇㄞˇ, ㄨㄛˇ ㄓˇ ㄓㄨˇ ㄅㄞˊ ㄈㄢˋ.',
            pinyin: 'cai4 ke3 yi3 zai4 wai4 mian4 mai3, wo3 zhi3 zhu3 bai2 fan4.',
            translation: 'おかずは外で買えるので、 ご飯だけ炊きます。',
            memo: ''
          },
          {
            word: '壞',
            sentence: '天氣壞的時候不能出門。',
            bopomofo: 'ㄊㄧㄢ ㄑㄧˋ ㄏㄨㄞˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄅㄨˋ ㄋㄥˊ ㄔㄨ ㄇㄣˊ.',
            pinyin: 'tian1 qi4 huai4 de shi2 hou4 bu4 neng2 chu1 men2.',
            translation: '天気が悪い時は表に出られません。',
            memo: '',
            changed: '★'
          },
          {
            word: '破',
            sentence: '舊的書一翻就破了, 要注意。',
            bopomofo: 'ㄐㄧㄡˋ ㄉㄜ˙ ㄕㄨ ㄧ ㄈㄢ ㄐㄧㄡˋ ㄆㄛˋ ㄌㄜ˙, ㄧㄠˋ ㄓㄨˋ ㄧˋ.',
            pinyin: 'jiu4 de shu1 yi1 fan1 jiu4 po4 le, yao4 zhu4 yi4.',
            translation: '古い本はめくっただけで簡単に破れるので、 注意してください。',
            memo: ''
          },
          {
            word: '餡兒',
            sentence: '為了讓餡兒變香, 請你多放一點大蒜。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄖㄤˋ ㄒㄧㄢˋ ㄦ ㄅㄧㄢˋ ㄒㄧㄤ, ㄑㄧㄥˇ ㄋㄧˇ ㄉㄨㄛ ㄈㄤˋ ㄧˋ ㄉㄧㄢˇ ㄉㄚˋ ㄙㄨㄢˋ.',
            pinyin: 'wei4 le rang4 xian4 er1 bian4 xiang1, qing3 ni3 duo1 fang4 yi1 dian3 da4 suan4.',
            translation: '餡の風味を良くするために、 もっとニンニクを入れてください。',
            memo: '',
            changed: '★'
          },
          {
            word: '扁',
            sentence: '他的肚子以前扁扁的, 但是因為啤酒現在變啤酒肚了。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄉㄨˇ ㄗ˙ ㄧˇ ㄑㄧㄢˊ ㄅㄧㄢˇ ㄅㄧㄢˇ ㄉㄜ˙, ㄉㄢˋ ㄕˋ ㄧㄣ ㄨㄟˋ ㄆㄧˊ ㄐㄧㄡˇ ㄒㄧㄢˋ ㄗㄞˋ ㄅㄧㄢˋ ㄆㄧˊ ㄐㄧㄡˇ ㄉㄨˋ ㄌㄜ˙.',
            pinyin: 'ta1 de du4 zi yi3 qian2 bian3 bian3 de, dan4 shi4 yin1 wei4 pi2 jiu3 xian4 zai4 bian4 pi2 jiu3 du4 le.',
            translation: '彼のお腹は以前はペッタンコでしたが、 今はビールのせいでビール腹になりました。',
            memo: '※「掰掰袖」=「プヨプヨの二の腕」、 「蘿蔔腿」=「大根足」。',
            changed: '★'
          },
          {
            word: '材料',
            sentence: '甚至簡單的材料可以做咖喱。',
            bopomofo: 'ㄕㄣˋ ㄓˋ ㄐㄧㄢˇ ㄉㄢ ㄉㄜ˙ ㄘㄞˊ ㄌㄧㄠˋ ㄎㄜˇ ㄧˇ ㄗㄨㄛˋ ㄍㄚ ㄌㄧˊ.',
            pinyin: 'shen4 zhi4 jian3 dan1 de cai2 liao4 ke3 yi3 zuo4 ga1 li2.',
            translation: 'シンプルな食材でもカレーは作れます。',
            memo: ''
          },
          {
            word: '道',
            sentence: '你家的晚飯平常有幾道菜?',
            bopomofo: 'ㄋㄧˇ ㄐㄧㄚ ㄉㄜ˙ ㄨㄢˇ ㄈㄢˋ ㄆㄧㄥˊ ㄔㄤˊ ㄧㄡˇ ㄐㄧˇ ㄉㄠˋ ㄘㄞˋ?',
            pinyin: 'ni3 jia1 de wan3 fan4 ping2 chang2 you3 ji3 dao4 cai4?',
            translation: 'あなたの家の夕飯はいつも何品おかずを食べますか?',
            memo: ''
          },
          {
            word: '飽',
            sentence: '即使我吃飽了， 有食物還是會吃',
            bopomofo: 'ㄐㄧˊ ㄕˇ ㄨㄛˇ ㄔ ㄅㄠˇ ㄌㄜ˙,  ㄧㄡˇ ㄕˊ ㄨˋ ㄏㄞˊ ㄕˋ ㄏㄨㄟˋ ㄔ.',
            pinyin: 'ji2 shi3 wo3 chi1 bao3 le, you3 shi2 wu4 hai2 shi4 hui4 chi1.',
            translation: 'たとえ満腹でも、 食べ物があれば食べます。',
            memo: '',
            changed: '★'
          },
          {
            word: '光',
            sentence: '如果你能在十秒鐘內喝光一升啤酒， 就能獲得一萬元。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄋㄥˊ ㄗㄞˋ ㄕˊ ㄇㄧㄠˇ ㄓㄨㄥ ㄋㄟˋ ㄏㄜ ㄍㄨㄤ ㄧ ㄕㄥ ㄆㄧˊ ㄐㄧㄡˇ, ㄐㄧㄡˋ ㄋㄥˊ ㄏㄨㄛˋ ㄉㄜˊ ㄧ ㄨㄢˋ ㄩㄢˊ.',
            pinyin: 'ru2 guo3 ni3 neng2 zai4 shi2 miao3 zhong1 nei4 he1 guang1 yi1 sheng1 pi2 jiu3, jiu4 neng2 huo4 de2 yi1 wan4 yuan2.',
            translation: '1リットルのビールを10秒で飲み干せたら、 1万元貰えます。',
            memo: '※「獲得」 = 「得到」。',
            changed: '★'
          },
          {
            word: '鍋子',
            sentence: '我怎麼洗鐵製的鍋子?',
            bopomofo: 'ㄨㄛˇ ㄗㄣˇ ㄇㄜ˙ ㄒㄧˇ ㄊㄧㄝˇ ㄓˋ ㄉㄜ˙ ㄍㄨㄛ ㄗ˙?',
            pinyin: 'wo3 zen3 me xi3 tie3 zhi4 de guo1 zi?',
            translation: '鉄の鍋はどうやって洗えばいいですか?',
            memo: ''
          },
          {
            word: '筷子',
            sentence: '你能不能用筷子把豆子拿起來?',
            bopomofo: 'ㄋㄧˇ ㄋㄥˊ ㄅㄨˋ ㄋㄥˊ ㄩㄥˋ ㄎㄨㄞˋ ㄗ˙ ㄅㄚˇ ㄉㄡˋ ㄗ˙ ㄋㄚˊ ㄑㄧˇ ㄌㄞˊ?',
            pinyin: 'ni3 neng2 bu4 neng2 yong4 kuai4 zi ba3 dou4 zi na2 qi3 lai2?',
            translation: 'お箸を使って豆を持ち上げられますか?',
            memo: ''
          },
          {
            word: '碗',
            sentence: '餓的時候我可以吃至少五碗。',
            bopomofo: 'ㄜˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄨㄛˇ ㄎㄜˇ ㄧˇ ㄔ ㄓˋ ㄕㄠˇ ㄨˇ ㄨㄢˇ.',
            pinyin: 'e4 de shi2 hou4 wo3 ke3 yi3 chi1 zhi4 shao3 wu3 wan3.',
            translation: 'お腹が空いていたら少なくとも5杯は食べられます。',
            memo: ''
          },
          {
            word: '韓國',
            sentence: '用各種蔬菜做的韓國菜對健康很好。',
            bopomofo: 'ㄩㄥˋ ㄍㄜˋ ㄓㄨㄥˇ ㄕㄨ ㄘㄞˋ ㄗㄨㄛˋ ㄉㄜ˙ ㄏㄢˊ ㄍㄨㄛˊ ㄘㄞˋ ㄉㄨㄟˋ ㄐㄧㄢˋ ㄎㄤ ㄏㄣˇ ㄏㄠˇ.',
            pinyin: 'yong4 ge4 zhong3 shu1 cai4 zuo4 de han2 guo2 cai4 dui4 jian4 kang1 hen3 hao3.',
            translation: 'さまざまな野菜を使った韓国料理はとても健康的です。',
            memo: '',
            changed: '★'
          },
          {
            word: '看不出來',
            sentence: '那個先生看不出來當醫生。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄒㄧㄢ ㄕㄥ ㄎㄢˋ ㄅㄨˋ ㄔㄨ ㄌㄞˊ ㄉㄤ ㄧ ㄕㄥ.',
            pinyin: 'na4 ge4 xian1 sheng1 kan4 bu4 chu1 lai2 dang1 yi1 sheng1.',
            translation: 'あの人は医者には見えません。',
            memo: ''
          },
          {
            word: '酸辣湯',
            sentence: '加入太白粉, 煮滑滑嫩嫩的酸辣湯。',
            bopomofo: 'ㄐㄧㄚ ㄖㄨˋ ㄊㄞˋ ㄅㄞˊ ㄈㄣˇ, ㄓㄨˇ ㄏㄨㄚˊ ㄏㄨㄚˊ ㄋㄣˋ ㄋㄣˋ ㄉㄜ˙ ㄙㄨㄢ ㄌㄚˋ ㄊㄤ.',
            pinyin: 'jia1 ru4 tai4 bai2 fen3, zhu3 hua2 hua2 nen4 nen4 de suan1 la4 tang1.',
            translation: '片栗粉を入れて、 トロトロの酸辣湯を作ります。',
            memo: ''
          },
          {
            word: '學期',
            sentence: '這個學期完的時候弟弟要回家。',
            bopomofo: 'ㄓㄜˋ ㄍㄜˋ ㄒㄩㄝˊ ㄑㄧ ㄨㄢˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄉㄧˋ ㄉㄧ˙ ㄧㄠˋ ㄏㄨㄟˊ ㄐㄧㄚ.',
            pinyin: 'zhe4 ge4 xue2 qi1 wan2 de shi2 hou4 di4 di4 yao4 hui2 jia1.',
            translation: '私の弟は今学期の終わりに家に帰ってきます。',
            memo: ''
          },
          {
            word: '趁',
            sentence: '趁人比較少的平日他們去旅行。',
            bopomofo: 'ㄔㄣˋ ㄖㄣˊ ㄅㄧˇ ㄐㄧㄠˋ ㄕㄠˇ ㄉㄜ˙ ㄆㄧㄥˊ ㄖˋ ㄊㄚ ㄇㄣ˙ ㄑㄩˋ ㄌㄩˇ ㄒㄧㄥˊ.',
            pinyin: 'chen4 ren2 bi3 jiao4 shao3 de ping2 ri4 ta1 men qu4 lu3 xing2.',
            translation: '人が少ない平日を使って彼らは旅行します。',
            memo: ''
          },
          {
            word: '皮',
            sentence: '為了不讓很薄的春捲皮破掉, 他們很認真地包。',
            bopomofo: 'ㄨㄟˋ ㄌㄧㄠˇ ㄅㄨˊ  ㄖㄤˋ ㄏㄣˇ ㄅㄠˊ ㄉㄜ˙ ㄔㄨㄣ ㄐㄩㄢˇ ㄆㄧˊ ㄆㄛˋ ㄉㄧㄠˋ, ㄊㄚ ㄇㄣ˙ ㄏㄣˇ ㄖㄣˋ ㄓㄣ ㄉㄜ˙ ㄅㄠ.',
            pinyin: 'wei4 le bu2 rang4 hen3 bao2 de chun1 juan4 pi2 po4 diao4, ta1 men hen3 ren4 zhen1 de bao1.',
            translation: 'とても薄い春巻きの皮を破らないように、 彼らはそれをとても丁寧に巻いています。',
            memo: '※「薄」の発音：「ㄅㄠˊ/bao2(台湾)」、 「ㄅㄛˊ/bo2(中国)」。',
            changed: '★'
          },
          {
            word: '嚐',
            sentence: '我做飯做得不太好, 所以我負責嚐味道。',
            bopomofo: 'ㄨㄛˇ ㄗㄨㄛˋ ㄈㄢˋ ㄗㄨㄛˋ ㄉㄜˊ ㄅㄨˋ ㄊㄞˋ ㄏㄠˇ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄈㄨˋ ㄗㄜˊ ㄔㄤˊ ㄨㄟˋ ㄉㄠˋ.',
            pinyin: 'wo3 zuo4 fan4 zuo4 de bu2 tai4 hao3, suo3 yi3 wo3 fu4 ze2 chang2 wei4 dao4.',
            translation: 'あまり料理が得意ではないので、 味見を担当しています。',
            memo: '',
            changed: '★'
          },
          {
            word: '大白菜',
            sentence: '除了亞洲以外， 我在其他超市看不到很多大白菜。',
            bopomofo: 'ㄔㄨˊ ㄌㄜ˙ ㄧㄚˋ ㄓㄡ ㄧˇ ㄨㄞˋ, ㄨㄛˇ ㄗㄞˋ ㄑㄧˊ ㄊㄚ ㄔㄠ ㄕˋ ㄎㄢˋ ㄅㄨˊ ㄉㄠˋ ㄏㄣˇ ㄉㄨㄛ ㄉㄚˋ ㄅㄞˊ ㄘㄞˋ.',
            pinyin: 'chu2 le ya4 zhou1 yi3 wai4, wo3 zai4 qi2 ta1 chao1 shi4 kan4 bu2 dao4 hen3 duo1 da4 bai2 cai4.',
            translation: 'アジア以外のスーパーで、 白菜はあまり見かけません。',
            memo: ''
          },
          {
            word: '加',
            sentence: '香菜的味道比較強, 所以請一點一點加。',
            bopomofo: 'ㄒㄧㄤ ㄘㄞˋ ㄉㄜ˙ ㄨㄟˋ ㄉㄠˋ ㄅㄧˇ ㄐㄧㄠˋ ㄑㄧㄤˊ, ㄙㄨㄛˇ ㄧˇ ㄑㄧㄥˇ ㄧˋ ㄉㄧㄢˇ ㄧˋ ㄉㄧㄢˇ ㄐㄧㄚ.',
            pinyin: 'xiang1 cai4 de wei4 dao4 bi3 jiao4 qiang2, suo3 yi3 qing3 yi1 dian3 yi1 dian3 jia1.',
            translation: 'パクチーは風味が強いので、 少しづつ加えて下さい。',
            memo: ''
          },
          {
            word: '鹽',
            sentence: '鹽是在烤牛排之前撒一下。',
            bopomofo: 'ㄧㄢˊ ㄕˋ ㄗㄞˋ ㄎㄠˇ ㄋㄧㄡˊ ㄆㄞˊ ㄓ ㄑㄧㄢˊ ㄙㄚ ㄧ ㄒㄧㄚˋ.',
            pinyin: 'yan2 shi4 zai4 kao3 niu2 pai2 zhi1 qian2 sa1 yi1 xia4.',
            translation: '塩はステーキを焼く直前に振って下さい。',
            memo: '',
            changed: '★'
          },
          {
            word: '拌',
            sentence: '為了別煮焦， 鍋子請你充分拌勻。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄅㄧㄝˊ ㄓㄨˇ ㄐㄧㄠ, ㄍㄨㄛ ㄗ˙ ㄑㄧㄥˇ ㄋㄧˇ ㄔㄨㄥ ㄈㄣˋ ㄅㄢˋ ㄩㄣˊ.',
            pinyin: 'wei4 le bie2 zhu3 jiao1, guo1 zi qing3 ni3 chong1 fen4 ban4 yun2.',
            translation: '焦げないように、 鍋をよくかき混ぜてください。',
            memo: '',
            changed: '★'
          },
          {
            word: '辣椒',
            sentence: '辣椒的種子比辣椒本身更辣。',
            bopomofo: 'ㄌㄚˋ ㄐㄧㄠ ㄉㄜ˙ ㄓㄨㄥˇ ㄗ˙ ㄅㄧˇ ㄌㄚˋ ㄐㄧㄠ ㄅㄣˇ ㄕㄣ ㄍㄥˋ ㄌㄚˋ.',
            pinyin: 'la4 jiao1 de zhong3 zi bi3 la4 jiao1 ben3 shen1 geng4 la4.',
            translation: 'チリの種はチリ本体よりも辛いです。',
            memo: ''
          },
          {
            word: '調味料',
            sentence: '如果你要做外國的料理, 應該先入手他們的調味料。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄧㄠˋ ㄗㄨㄛˋ ㄨㄞˋ ㄍㄨㄛˊ ㄉㄜ˙ ㄌㄧㄠˋ ㄌㄧˇ, ㄧㄥ ㄍㄞ ㄒㄧㄢ ㄖㄨˋ ㄕㄡˇ ㄊㄚ ㄇㄣ˙ ㄉㄜ˙ ㄊㄧㄠˊ ㄨㄟˋ ㄌㄧㄠˋ.',
            pinyin: 'ru2 guo3 ni3 yao4 zuo4 wai4 guo2 de liao4 li3, ying1 gai1 xian1 ru4 shou3 ta1 men de tiao2 wei4 liao4.',
            translation: '外国の料理を作りたいなら、 まず彼らの調味料を手に入れるべきです。',
            memo: ''
          },
          {
            word: '裝',
            sentence: '我把剩菜剩飯裝進塑膠盒明天再吃。',
            bopomofo: 'ㄨㄛˇ ㄅㄚˇ ㄕㄥˋ ㄘㄞˋ ㄕㄥˋ ㄈㄢˋ ㄓㄨㄤ ㄐㄧㄣˋ ㄙㄨˋ ㄐㄧㄠ ㄏㄜˊ ㄇㄧㄥˊ ㄊㄧㄢ ㄗㄞˋ ㄔ.',
            pinyin: 'wo3 ba3 sheng4 cai4 sheng4 fan4 zhuang1 jin4 su4 jiao1 he2 ming2 tian1 zai4 chi1.',
            translation: '残り物はタッパーに入れて明日食べます。',
            memo: ''
          },
          {
            word: '玻璃',
            sentence: '他們不使用玻璃餐具，可能是因為他們有寶寶。',
            bopomofo: 'ㄊㄚ ㄇㄣ˙ ㄅㄨˋ ㄕˇ ㄩㄥˋ ㄅㄛ ㄌㄧˊ ㄘㄢ ㄐㄩˋ, ㄎㄜˇ ㄋㄥˊ ㄕˋ ㄧㄣ ㄨㄟˋ ㄊㄚ ㄇㄣ˙ ㄧㄡˇ ㄅㄠˇ ㄅㄠˇ.',
            pinyin: 'ta1 men bu4 shi3 yong4 bo1 li2 can1 ju4, ke3 neng2 shi4 yin1 wei4 ta1 men you3 bao3 bao3.',
            translation: '赤ちゃんがいるからか、 彼らはガラス製の食器を使いません。',
            memo: '',
            changed: '★'
          },
          {
            word: '壽司',
            sentence: '壽司可以用筷子吃或是手吃。',
            bopomofo: 'ㄕㄡˋ ㄙ ㄎㄜˇ ㄧˇ ㄩㄥˋ ㄎㄨㄞˋ ㄗ˙ ㄔ ㄏㄨㄛˋ ㄕˋ ㄕㄡˇ ㄔ.',
            pinyin: 'shou4 si1 ke3 yi3 yong4 kuai4 zi chi1 huo4 shi4 shou3 chi1.',
            translation: '寿司は箸でも手でも食べられます。',
            memo: '',
            changed: '★'
          },
          {
            word: '像',
            sentence: '你去聽演講的時候， 應該帶可以做筆記的東西像筆記本。',
            bopomofo: 'ㄋㄧˇ ㄑㄩˋ ㄊㄧㄥ ㄧㄢˇ ㄐㄧㄤˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄧㄥ ㄍㄞ ㄉㄞˋ ㄎㄜˇ ㄧˇ ㄗㄨㄛˋ ㄅㄧˇ ㄐㄧˋ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙ ㄒㄧㄤˋ ㄅㄧˇ ㄐㄧˋ ㄅㄣˇ.',
            pinyin: 'ni3 qu4 ting1 yan3 jiang3 de shi2 hou4, ying1 gai1 dai4 ke3 yi3 zuo4 bi3 ji4 de dong1 xi xiang4 bi3 ji4 ben3.',
            translation: '講義に行くときは、 ノートのようにメモできるものを持参してください。',
            memo: '',
            changed: '★'
          },
          {
            word: '食物',
            sentence: '因為他對食物很講究, 找到一家能一起去的餐廳不簡單。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄊㄚ ㄉㄨㄟˋ ㄕˊ ㄨˋ ㄏㄣˇ ㄐㄧㄤˇ ㄐㄧㄡ, ㄓㄠˇ ㄉㄠˋ ㄧ ㄐㄧㄚ ㄋㄥˊ ㄧˋ ㄑㄧˇ ㄑㄩˋ ㄉㄜ˙ ㄘㄢ ㄊㄧㄥ ㄅㄨˋ ㄐㄧㄢˇ ㄉㄢ.',
            pinyin: 'yin1 wei4 ta1 dui4 shi2 wu4 hen3 jiang3 jiu1, zhao3 dao4 yi1 jia1 neng2 yi1 qi3 qu4 de can1 ting1 bu4 jian3 dan1.',
            translation: '彼は食べ物にとてもこだわっているので、 一緒に行くレストランを見つけるのは簡単ではありません。',
            memo: '',
            changed: '★'
          },
          {
            word: '做起來',
            sentence: '保護環境做起來對動物很好。',
            bopomofo: 'ㄅㄠˇ ㄏㄨˋ ㄏㄨㄢˊ ㄐㄧㄥˋ ㄗㄨㄛˋ ㄑㄧˇ ㄌㄞˊ ㄉㄨㄟˋ ㄉㄨㄥˋ ㄨˋ ㄏㄣˇ ㄏㄠˇ.',
            pinyin: 'bao3 hu4 huan2 jing4 zuo4 qi3 lai2 dui4 dong4 wu4 hen3 hao3.',
            translation: '環境を保護することは動物たちにとって良いことです。',
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
