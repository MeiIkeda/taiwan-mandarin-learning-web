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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 4冊目・第2章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 4冊目・第2章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      // 単語数：79
      data: {
        title: '當代中文課程課4・第2章',
        words: [
          {
            word: '李雲真',
            sentence: '李雲真是在一百多人前面演講過。',
            bopomofo: 'ㄌㄧˇ ㄩㄣˊ ㄓㄣ ㄕˋ ㄗㄞˋ ㄧ ㄅㄞˇ ㄉㄨㄛ ㄖㄣˊ ㄑㄧㄢˊ ㄇㄧㄢˋ ㄧㄢˇ ㄐㄧㄤˇ ㄍㄨㄛˋ.',
            pinyin: 'li3 yun2 zhen1 shi4 zai4 yi1 bai3 duo1 ren2 qian2 mian4 yan3 jiang3 guo4.',
            translation: '李雲真は100人以上の人々を前にスピーチしました。',
            memo: ''
          },
          {
            word: '眼睛',
            sentence: '因為我的眼睛動不動就乾了， 所以我買了眼藥水。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄨㄛˇ ㄉㄜ˙ ㄧㄢˇ ㄐㄧㄥ ㄉㄨㄥˋ ㄅㄨˊ ㄉㄨㄥˋ ㄐㄧㄡˋ ㄍㄢ ㄌㄜ˙, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄇㄞˇ ㄌㄜ˙ ㄧㄢˇ ㄧㄠˋ ㄕㄨㄟˇ.',
            pinyin: 'yin1 wei4 wo3 de yan3 jing1 dong4 bu2 dong4 jiu4 gan1 le, suo3 yi3 wo3 mai3 le yan3 yao4 shui3.',
            translation: '目がすぐに乾くので、 目薬を買いました。',
            memo: ''
          },
          {
            word: '耳朵',
            sentence: '聽到煮泡麵不算菜, 我不能相信我的耳朵了。',
            bopomofo: 'ㄊㄧㄥ ㄉㄠˋ ㄓㄨˇ ㄆㄠ ㄇㄧㄢˋ ㄅㄨˊ ㄙㄨㄢˋ ㄘㄞˋ, ㄨㄛˇ ㄅㄨˋ ㄋㄥˊ ㄒㄧㄤ ㄒㄧㄣˋ ㄨㄛˇ ㄉㄜ˙ ㄦˇ ㄉㄨㄛ˙ ㄌㄜ˙.',
            pinyin: 'ting1 dao4 zhu3 pao4 mian4 bu2 suan4 cai4, wo3 bu4 neng2 xiang1 xin4 wo3 de er3 duo le.',
            translation: 'インスタントラーメンを作るのは料理ではないと聞き、 私は自分の耳を疑いました。',
            memo: ''
          },
          {
            word: '饗宴',
            sentence: '她生日那天舉行了盛大的饗宴。',
            bopomofo: 'ㄊㄚ ㄕㄥ ㄖˋ ㄋㄚˋ ㄊㄧㄢ ㄐㄩˇ ㄒㄧㄥˊ ㄌㄜ˙ ㄕㄥˋ ㄉㄚˋ ㄉㄜ˙ ㄒㄧㄤˇ ㄧㄢˋ.',
            pinyin: 'ta1 sheng1 ri4 na4 tian1 ju3 xing2 le sheng4 da4 de xiang3 yan4.',
            translation: '彼女の誕生日には、 盛大な宴会が催されました。',
            memo: ''
          },
          {
            word: '打扮',
            sentence: '她為了今天的約會很漂亮地打扮了。',
            bopomofo: 'ㄊㄚ ㄨㄟˋ ㄌㄜ˙ ㄐㄧㄣ ㄊㄧㄢ ㄉㄜ˙ ㄩㄝ ㄏㄨㄟˋ ㄏㄣˇ ㄆㄧㄠˋ ㄌㄧㄤˋ ㄉㄜ˙ ㄉㄚˇ ㄅㄢˋ ㄌㄜ˙.',
            pinyin: 'ta1 wei4 le jin1 tian1 de yue1 hui4 hen3 piao4 liang4 de da3 ban4 le.',
            translation: '彼女は今日のデートの為に綺麗にドレスアップしました。',
            memo: ''
          },
          {
            word: '音樂廳',
            sentence: '自從這個音樂廳開放以來滿了十年了， 因此會舉行紀念音樂會。',
            bopomofo: 'ㄗˋ ㄘㄨㄥˊ ㄓㄜˋ ㄍㄜˋ ㄧㄣ ㄩㄝˋ ㄊㄧㄥ ㄎㄞ ㄈㄤˋ ㄧˇ ㄌㄞˊ ㄇㄢˇ ㄌㄜ˙ ㄕˊ ㄋㄧㄢˊ ㄌㄜ˙, ㄧㄣ ㄘˇ ㄏㄨㄟˋ ㄐㄩˇ ㄒㄧㄥˊ ㄐㄧˋ ㄋㄧㄢˋ ㄧㄣ ㄩㄝˋ ㄏㄨㄟˋ.',
            pinyin: 'zi4 cong2 zhe4 ge4 yin1 yue4 ting1 kai1 fang4 yi3 lai2 man3 le shi2 nian2 le, yin1 ci3 hui4 ju3 xing2 ji4 nian4 yin1 yue4 hui4.',
            translation: 'コンサートホールがオープンして満10年なので、 記念のコンサートが開催されます。',
            memo: ''
          },
          {
            word: '表演',
            sentence: '他們的表演很厲害, 拿唱歌來說, 算是專業水準的了。',
            bopomofo: 'ㄊㄚ ㄇㄣ˙ ㄉㄜ˙ ㄅㄧㄠˇ ㄧㄢˇ ㄏㄣˇ ㄌㄧˋ ㄏㄞˋ, ㄋㄚˊ ㄔㄤˋ ㄍㄜ ㄌㄞˊ ㄕㄨㄛ, ㄙㄨㄢˋ ㄕˋ ㄓㄨㄢ ㄧㄝˋ ㄕㄨㄟˇ ㄓㄨㄣˇ ㄉㄧˋ ㄌㄜ˙.',
            pinyin: 'ta1 men de biao3 yan3 hen3 li4 hai4, na2 chang4 ge1 lai2 shuo1, suan4 shi4 zhuan1 ye4 shui3 zhun3 de le.',
            translation: '彼らのパフォーマンスは素晴らしく、 歌唱に関して言えばプロレベルです。',
            memo: ''
          },
          {
            word: '整齊',
            sentence: '很多書整齊地排列在書架上。',
            bopomofo: 'ㄏㄣˇ ㄉㄨㄛ ㄕㄨ ㄓㄥˇ ㄑㄧˊ ㄉㄧˋ ㄆㄞˊ ㄌㄧㄝˋ ㄗㄞˋ ㄕㄨ ㄐㄧㄚˋ ㄕㄤˋ.',
            pinyin: 'hen3 duo1 shu1 zheng3 qi2 de pai2 lie4 zai4 shu1 jia4 shang4.',
            translation: '本棚には、 たくさんの本が整然と並べられています。',
            memo: ''
          },
          {
            word: '★穿著',
            sentence: '我精疲力盡得穿著衣服睡著了。',
            bopomofo: 'ㄨㄛˇ ㄐㄧㄥ ㄆㄧˊ ㄌㄧˋ ㄐㄧㄣˋ ㄉㄜˊ ㄔㄨㄢ ㄓㄨㄛˊ ㄧ ㄈㄨˊ ㄕㄨㄟˋ ㄓㄠˊ ㄌㄜ˙.',
            pinyin: 'wo3 jing1 pi2 li4 jin4 de chuan1 zhuo2 yi1 fu2 shui4 zhao2 le.',
            translation: '私は疲れ果てて、 服を着たまま眠り込んでしまいました。',
            memo: '※「精疲力盡(ㄐㄧㄥ ㄆㄧˊ ㄌㄧˋ ㄐㄧㄣˋ/jing1 pi2 li4 jin4)」 : 「くたばる」。 「穿著(ㄔㄨㄢ ㄓㄨㄛˊ)」ではなく「穿著(ㄔㄨㄢ ㄓㄜ˙)」?'
          },
          {
            word: '丢臉',
            sentence: '我在街上華麗地摔倒了， 丢臉死了。',
            bopomofo: 'ㄨㄛˇ ㄗㄞˋ ㄐㄧㄝ ㄕㄤˋ ㄏㄨㄚˊ ㄌㄧˋ ㄉㄜ˙ ㄕㄨㄞ ㄉㄠˇ ㄌㄜ˙, ㄉㄧㄡ ㄌㄧㄢˇ ㄙˇ ㄌㄜ˙.',
            pinyin: 'wo3 zai4 jie1 shang4 hua2 li4 de shuai1 dao3 le, diu1 lian3 si3 le.',
            translation: '街中で派手に転んでしまって、 恥をかきました。',
            memo: ''
          },
          {
            word: '短褲',
            sentence: '我穿著短褲， 所以我被一隻蚊子咬了。',
            bopomofo: 'ㄨㄛˇ ㄔㄨㄢ ㄓㄜ˙ ㄉㄨㄢˇ ㄎㄨˋ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄅㄟˋ ㄧ ㄓ ㄨㄣˊ ㄗ˙ ㄧㄠˇ ㄌㄜ˙.',
            pinyin: 'wo3 chuan1 zhe duan3 ku4, suo3 yi3 wo3 bei4 yi1 zhi1 wen2 zi yao3 le.',
            translation: '短パンを履いていたので、 蚊に刺されました。',
            memo: ''
          },
          {
            word: '★涼鞋',
            sentence: '爺爺穿著涼鞋出去散步了。',
            bopomofo: 'ㄧㄝˊ ㄧㄝ˙ ㄔㄨㄢ ㄓㄜ˙ ㄌㄧㄤˊ ㄒㄧㄝˊ ㄔㄨ ㄑㄩˋ ㄙㄢˋ ㄅㄨˋ ㄌㄜ˙.',
            pinyin: 'ye2 ye chuan1 zhe liang2 xie2 chu1 qu4 san4 bu4 le.',
            translation: 'おじいさんは、 サンダルをつっかけて散歩に行きました。',
            memo: '※「靸著(sa3 zhe)」で「(サンダル等を)つっかける」という意味にはならない?'
          },
          {
            word: '★擋',
            sentence: '這塊遮光窗簾太短了， 不能完全擋住光線。',
            bopomofo: 'ㄓㄜˋ ㄎㄨㄞˋ ㄓㄜ ㄍㄨㄤ ㄔㄨㄤ ㄌㄧㄢˊ ㄊㄞˋ ㄉㄨㄢˇ ㄌㄜ˙, ㄅㄨˋ ㄋㄥˊ ㄨㄢˊ ㄑㄩㄢˊ ㄉㄤˇ ㄓㄨˋ ㄍㄨㄤ ㄒㄧㄢˋ.',
            pinyin: 'zhe4 kuai4 zhe1 guang1 chuang1 lian2 tai4 duan3 le, bu4 neng2 wan2 quan2 dang3 zhu4 guang1 xian4.',
            translation: 'この遮光カーテンは短すぎて、 光を完全に遮ることができません。',
            memo: '※「擋住」の「住」は何?'
          },
          {
            word: '★演出者',
            sentence: '他曾作為演出者在多個舞台上演出。',
            bopomofo: 'ㄊㄚ ㄘㄥˊ ㄗㄨㄛˋ ㄨㄟˊ ㄧㄢˇ ㄔㄨ ㄓㄜˇ ㄗㄞˋ ㄉㄨㄛ ㄍㄜˋ ㄨˇ ㄊㄞˊ ㄕㄤˋ ㄧㄢˇ ㄔㄨ.',
            pinyin: 'ta1 ceng2 zuo4 wei2 yan3 chu1 zhe3 zai4 duo1 ge4 wu3 tai2 shang4 yan3 chu1.',
            translation: '彼はパフォーマーとして多くの舞台に出演しました。',
            memo: '※「曾」は「曾經」の「曾」?'
          },
          {
            word: '尊重',
            sentence: '媽媽常常使喚我， 所以我希望她多尊重我的人權一點。',
            bopomofo: 'ㄇㄚ ㄇㄚ ㄔㄤˊ ㄔㄤˊ ㄕˇ ㄏㄨㄢˋ ㄨㄛˇ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄒㄧ ㄨㄤˋ ㄊㄚ ㄉㄨㄛ ㄗㄨㄣ ㄓㄨㄥˋ ㄨㄛˇ ㄉㄜ˙ ㄖㄣˊ ㄑㄩㄢˊ ㄧˋ ㄉㄧㄢˇ.',
            pinyin: 'ma1 ma1 chang2 chang2 shi3 huan4 wo3, suo3 yi3 wo3 xi1 wang4 ta1 duo1 zun1 zhong4 wo3 de ren2 quan2 yi4 dian3.',
            translation: 'お母さんはいつも私をこき使うので、 もう少し私の人権を尊重して欲しいです。',
            memo: ''
          },
          {
            word: '社交',
            sentence: '如果可能的話, 我不想參加社交酒會以及餐會。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄎㄜˇ ㄋㄥˊ ㄉㄜ˙ ㄏㄨㄚˋ, ㄨㄛˇ ㄅㄨˋ ㄒㄧㄤˇ ㄘㄢ ㄐㄧㄚ ㄕㄜˋ ㄐㄧㄠ ㄐㄧㄡˇ ㄏㄨㄟˋ ㄧˇ ㄐㄧˊ ㄘㄢ ㄏㄨㄟˋ.',
            pinyin: 'ru2 guo3 ke3 neng2 de hua4, wo3 bu4 xiang3 can1 jia1 she4 jiao1 jiu3 hui4 yi3 ji2 can1 hui4.',
            translation: 'できれば、 付き合いでの飲み会や食事会には参加したくありません。',
            memo: ''
          },
          {
            word: '免得',
            sentence: '我會在今晚準備好行李， 免得在明天早上我會急躁。',
            bopomofo: 'ㄨㄛˇ ㄏㄨㄟˋ ㄗㄞˋ ㄐㄧㄣ ㄨㄢˇ ㄓㄨㄣˇ ㄅㄟˋ ㄏㄠˇ ㄒㄧㄥˊ ㄌㄧˇ, ㄇㄧㄢˇ ㄉㄜ˙ ㄗㄞˋ ㄇㄧㄥˊ ㄊㄧㄢ ㄗㄠˇ ㄕㄤˋ ㄨㄛˇ ㄏㄨㄟˋ ㄐㄧˊ ㄗㄠˋ.',
            pinyin: 'wo3 hui4 zai4 jin1 wan3 zhun3 bei4 hao3 xing2 li3, mian3 de zai4 ming2 tian1 zao3 shang4 wo3 hui4 ji2 zao4.',
            translation: '明日の朝焦らないで済むように、 今夜のうちに荷物を準備します。',
            memo: ''
          },
          {
            word: '★中場',
            sentence: '從中場休息後， 遊戲的流程改變了。',
            bopomofo: 'ㄘㄨㄥˊ ㄓㄨㄥ ㄔㄤˇ ㄒㄧㄡ ㄒㄧˊ ㄏㄡˋ, ㄧㄡˊ ㄒㄧˋ ㄉㄜ˙ ㄌㄧㄡˊ ㄔㄥˊ ㄍㄞˇ ㄅㄧㄢˋ ㄌㄜ˙.',
            pinyin: 'cong2 zhong1 chang3 xiu1 xi2 hou4, you2 xi4 de liu2 cheng2 gai3 bian4 le.',
            translation: 'ハーフタイムの後から、 ゲームの流れが変わりました。',
            memo: '※「試合」の意図の場合は「比賽」がベター?'
          },
          {
            word: '準時',
            sentence: '他總是準時離開辦公室。',
            bopomofo: 'ㄊㄚ ㄗㄨㄥˇ ㄕˋ ㄓㄨㄣˇ ㄕˊ ㄌㄧˊ ㄎㄞ ㄅㄢˋ ㄍㄨㄥ ㄕˋ.',
            pinyin: 'ta1 zong3 shi4 zhun3 shi2 li4 kai1 ban4 gong1 shi4.',
            translation: '彼はいつも、 定時きっかりに退社します。',
            memo: ''
          },
          {
            word: '禮貌',
            sentence: '她沒有什麼禮貌, 不能帶她到高級餐廳去。',
            bopomofo: 'ㄊㄚ ㄇㄟˊ ㄧㄡˇ ㄕㄣˊ ㄇㄜ˙ ㄌㄧˇ ㄇㄠˋ, ㄅㄨˋ ㄋㄥˊ ㄉㄞˋ ㄊㄚ ㄉㄠˋ ㄍㄠ ㄐㄧˊ ㄘㄢ ㄊㄧㄥ ㄑㄩˋ.',
            pinyin: 'ta1 mei2 you3 shen2 me li3 mao4, bu4 neng2 dai4 ta1 dao4 gao1 ji2 can1 ting1 qu4.',
            translation: '彼女は行儀が悪いので、 高級レストランに連れて行くことはできません。',
            memo: ''
          },
          {
            word: '或',
            sentence: '如果是M尺寸或L尺寸， 這個襯衫有現貨。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄕˋ M ㄔˇ ㄘㄨㄣˋ ㄏㄨㄛˋ L ㄔˇ ㄘㄨㄣˋ, ㄓㄜˋ ㄍㄜˋ ㄔㄣˋ ㄕㄢ ㄧㄡˇ ㄒㄧㄢˋ ㄏㄨㄛˋ.',
            pinyin: 'ru2 guo3 shi4 M chi3 cun4 huo4 L chi3 cun4, zhe4 ge4 chen4 shan1 you3 xian4 huo4.',
            translation: 'このシャツは、 MサイズまたはLサイズなら在庫がございます。',
            memo: ''
          },
          {
            word: '熟',
            sentence: '他對運動方面的事情很熟。',
            bopomofo: 'ㄊㄚ ㄉㄨㄟˋ ㄩㄣˋ ㄉㄨㄥˋ ㄈㄤ ㄇㄧㄢˋ ㄉㄧˊ ㄕˋ ㄑㄧㄥˊ ㄏㄣˇ ㄕㄡˊ.',
            pinyin: 'ta1 dui4 yun4 dong4 fang1 mian4 de shi4 qing2 hen3 shou2.',
            translation: '彼はスポーツ方面に関してはかなり詳しいです。',
            memo: ''
          },
          {
            word: '★提',
            sentence: '我希望沒有人提我把劉海剪過頭的事。',
            bopomofo: 'ㄨㄛˇ ㄒㄧ ㄨㄤˋ ㄇㄟˊ ㄧㄡˇ ㄖㄣˊ ㄊㄧˊ ㄨㄛˇ ㄅㄚˇ ㄌㄧㄡˊ ㄏㄞˇ ㄐㄧㄢˇ ㄍㄨㄛˋ ㄊㄡˊ ㄉㄜ˙ ㄕˋ.',
            pinyin: 'wo3 xi1 wang4 mei2 you3 ren2 ti2 wo3 ba3 liu2 hai3 jian3 guo4 tou2 de shi4.',
            translation: '前髪を切りすぎた事に関しては、 あまり触れて欲しくありません。',
            memo: '※「剪頭」で「切る」、 「剪過頭」で「切りすぎる」?'
          },
          {
            word: '咳嗽',
            sentence: '我最近咳嗽, 所以今天的聚會我不得不缺席。',
            bopomofo: 'ㄨㄛˇ ㄗㄨㄟˋ ㄐㄧㄣˋ ㄎㄜˊ ㄙㄡˋ, ㄙㄨㄛˇ ㄧˇ ㄐㄧㄣ ㄊㄧㄢ ㄉㄜ˙ ㄐㄩˋ ㄏㄨㄟˋ ㄨㄛˇ ㄅㄨˋ ㄉㄜˊ ㄅㄨˋ ㄑㄩㄝ ㄒㄧˊ.',
            pinyin: 'wo3 zui4 jin4 ke2 sou4, suo3 yi3 jin1 tian1 de ju4 hui4 wo3 bu4 de2 bu4 que1 xi2.',
            translation: '最近咳が出るので、 今日の会合は欠席する他ありません。',
            memo: ''
          },
          {
            word: '關',
            sentence: '我趕時間去購物， 但是商店已經關上百葉窗了。',
            bopomofo: 'ㄨㄛˇ ㄍㄢˇ ㄕˊ ㄐㄧㄢ ㄑㄩˋ ㄍㄡˋ ㄨˋ, ㄉㄢˋ ㄕˋ ㄕㄤ ㄉㄧㄢˋ ㄧˇ ㄐㄧㄥ ㄍㄨㄢ ㄕㄤˋ ㄅㄞˇ ㄧㄝˋ ㄔㄨㄤ ㄌㄜ˙.',
            pinyin: 'wo3 gan3 shi2 jian1 qu4 gou4 wu4, dan4 shi4 shang1 dian4 yi3 jing1 guan1 shang4 bai3 ye4 chuang1 le.',
            translation: '急いで買い物に行きましたが、 店はシャッターを閉めた後でした。',
            memo: ''
          },
          {
            word: '哇',
            sentence: '哇, 你一個人清空了三瓶威士忌嗎?',
            bopomofo: 'ㄨㄚ˙, ㄋㄧˇ ㄧˊ ㄍㄜ˙ ㄖㄣˊ ㄑㄧㄥ ㄎㄨㄥ ㄌㄜ˙ ㄙㄢ ㄆㄧㄥˊ ㄨㄟ ㄕˋ ㄐㄧˋ ㄇㄚ˙?',
            pinyin: 'wa, ni3 yi1 ge4 ren2 qing1 kong1 le san1 ping2 wei1 shi4 ji4 ma?',
            translation: 'わぁ、 あなたは一人でウィスキーを三本空けたんですか?',
            memo: ''
          },
          {
            word: '★水準',
            sentence: '考不考得上得看考生自己的水準。',
            bopomofo: 'ㄎㄠˇ ㄅㄨˋ ㄎㄠˇ ㄉㄜˊ ㄕㄤˋ ㄉㄟˇ ㄎㄢˋ ㄎㄠˇ ㄕㄥ ㄗˋ ㄐㄧˇ ㄉㄜ˙ ㄕㄨㄟˇ ㄓㄨㄣˇ.',
            pinyin: 'kao3 bu4 kao3 de shang4 dei3 kan4 kao3 sheng1 zi4 ji3 de shui3 zhun3.',
            translation: '試験に受かるかどうかは、 受験者のレベル次第です。',
            memo: '※「水準、 レベル」 : 「水準」は台湾でよく使われる。 中国では「水平」が多い。'
          },
          {
            word: '★手冊',
            sentence: '這本手冊是由前任的來做的。',
            bopomofo: 'ㄓㄜˋ ㄅㄣˇ ㄕㄡˇ ㄘㄜˋ ㄕˋ ㄧㄡˊ ㄑㄧㄢˊ ㄖㄣˋ ㄉㄜ˙ ㄌㄞˊ ㄗㄨㄛˋ ㄉㄜ˙.',
            pinyin: 'zhe4 ben3 shou3 ce4 shi4 you2 qian2 ren4 de lai2 zuo4 de.',
            translation: 'このマニュアルは、 前任者によって作成されました。',
            memo: '※「前任的來做」の「的」は必要?'
          },
          {
            word: '★洗手間',
            sentence: '我忍著不去洗手間太久了， 最後忍出冷汗了。',
            bopomofo: 'ㄨㄛˇ ㄖㄣˇ ㄓㄜ˙ ㄅㄨˊ ㄑㄩˋ ㄒㄧˇ ㄕㄡˇ ㄐㄧㄢ ㄊㄞˋ ㄐㄧㄡˇ ㄌㄜ˙, ㄗㄨㄟˋ ㄏㄡˋ ㄖㄣˇ ㄔㄨ ㄌㄥˇ ㄏㄢˋ ㄌㄜ˙.',
            pinyin: 'wo3 ren3 zhe bu2 qu4 xi3 shou3 jian1 tai4 jiu3 le, zui4 hou4 ren3 chu1 leng3 han4 le.',
            translation: 'トイレに行くのを我慢しすぎて、 ついに冷や汗が出てきました。',
            memo: '※「忍出冷汗」の「忍出」はなぜ「出てくる」という意味になる?'
          },
          {
            word: '提醒',
            sentence: '媽媽提醒了孩子別忘記關燈。',
            bopomofo: 'ㄇㄚ ㄇㄚ ㄊㄧˊ ㄒㄧㄥˇ ㄌㄜ˙ ㄏㄞˊ ㄗ˙ ㄅㄧㄝˊ ㄨㄤˋ ㄐㄧˋ ㄍㄨㄢ ㄉㄥ.',
            pinyin: 'ma1 ma1 ti2 xing3 le hai2 zi bie2 wang4 ji4 guan1 deng1.',
            translation: 'お母さんは子供が電気を消し忘れないよう念押ししました。',
            memo: ''
          },
          {
            word: '響',
            sentence: '他家的門鈴響了，但是似乎沒有人在家。',
            bopomofo: 'ㄊㄚ ㄐㄧㄚ ㄉㄜ˙ ㄇㄣˊ ㄌㄧㄥˊ ㄒㄧㄤˇ ㄌㄜ˙, ㄉㄢˋ ㄕˋ ㄙˋ ㄏㄨ ㄇㄟˊ ㄧㄡˇ ㄖㄣˊ ㄗㄞˋ ㄐㄧㄚ.',
            pinyin: 'ta1 jia1 de men2 ling2 xiang3 le, dan4 shi4 si4 hu1 mei2 you3 ren2 zai4 jia1.',
            translation: '家の呼び鈴を鳴らしましたが、 留守のようでした。',
            memo: '※「呼び鈴を押す」 : 「我按了他家的門鈴(ㄨㄛˇ ㄢˋ ㄌㄜ˙ ㄊㄚ ㄐㄧㄚ ㄉㄜ˙ ㄇㄣˊ ㄌㄧㄥˊ/wo3 an4 le ta1 jia1 de men2 ling2)」でも可。'
          },
          {
            word: '糟',
            sentence: '早上我被鳥糞便直接滴到了， 心情很糟。',
            bopomofo: 'ㄗㄠˇ ㄕㄤˋ ㄨㄛˇ ㄅㄟˋ ㄋㄧㄠˇ ㄈㄣˋ ㄅㄧㄢˋ ㄓˊ ㄐㄧㄝ ㄉㄧ ㄉㄠˋ ㄌㄜ˙, ㄒㄧㄣ ㄑㄧㄥˊ ㄏㄣˇ ㄗㄠ.',
            pinyin: 'zao3 shang4 wo3 bei4 niao3 fen4 bian4 zhi2 jie1 di1 dao4 le, xin1 qing2 hen3 zao1.',
            translation: '朝から鳥の糞の直撃をくらい、 最悪な気分です。',
            memo: ''
          },
          {
            word: '嘘',
            sentence: '嘘， 孩子正在睡覺所以請不要叫醒他。',
            bopomofo: 'ㄒㄩ, ㄏㄞˊ ㄗ˙ ㄓㄥˋ ㄗㄞˋ ㄕㄨㄟˋ ㄐㄧㄠˋ ㄙㄨㄛˇ ㄧˇ ㄑㄧㄥˇ ㄅㄨˊ ㄧㄠˋ ㄐㄧㄠˋ ㄒㄧㄥˇ ㄊㄚ.',
            pinyin: 'xu1, hai2 zi zheng4 zai4 shui4 jiao4 suo3 yi3 qing3 bu2 yao4 jiao4 xing3 ta1.',
            translation: 'シー、 子どもが寝ているので起こさないであげて下さい。',
            memo: ''
          },
          {
            word: '看不成',
            sentence: '雲太多， 所以我看不成月食了。',
            bopomofo: 'ㄩㄣˊ ㄊㄞˋ ㄉㄨㄛ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄎㄢˋ ㄅㄨˋ ㄔㄥˊ ㄩㄝˋ ㄕˊ ㄌㄜ˙.',
            pinyin: 'yun2 tai4 duo1, suo3 yi3 wo3 kan4 bu4 cheng2 yue4 shi2 le.',
            translation: '曇ってしまったので、 月蝕を見ることができませんでした。',
            memo: ''
          },
          {
            word: '★聯絡感情',
            sentence: '他們通過運動加深了感情。',
            bopomofo: 'ㄊㄚ ㄇㄣ˙ ㄊㄨㄥ ㄍㄨㄛˋ ㄩㄣˋ ㄉㄨㄥˋ ㄐㄧㄚ ㄕㄣ ㄌㄜ˙ ㄍㄢˇ ㄑㄧㄥˊ.',
            pinyin: 'ta1 men tong1 guo4 yun4 dong4 jia1 shen1 le gan3 qing2.',
            translation: '彼らは、 スポーツを通じて友情を深めました。',
            memo: '※「聯絡感情」は使えない?'
          },
          {
            word: '擤鼻涕',
            sentence: '難道你用我的手帕擤鼻涕嗎?',
            bopomofo: 'ㄋㄢˊ ㄉㄠˋ ㄋㄧˇ ㄩㄥˋ ㄨㄛˇ ㄉㄜ˙ ㄕㄡˇ ㄆㄚˋ ㄒㄧㄥˇ ㄅㄧˊ ㄊㄧˋ ㄇㄚ˙?',
            pinyin: 'nan2 dao4 ni3 yong4 wo3 de shou3 pa4 xing3 bi2 ti4 ma?',
            translation: 'まさか、 私のハンカチで鼻をかんだんじゃないでしょうね?',
            memo: '※「鼻涕(ㄅㄧˊ ㄊㄧˋ/bi2 ti4)」は「鼻水」、 「擤鼻涕(ㄒㄧㄥˇ ㄅㄧˊ ㄊㄧˋ/xing3 bi2 ti4)」で「鼻をかむ」。'
          },
          {
            word: '場',
            sentence: '上一場表演人坐得滿滿的。',
            bopomofo: 'ㄕㄤˋ ㄧ ㄔㄤˇ ㄅㄧㄠˇ ㄧㄢˇ ㄖㄣˊ ㄗㄨㄛˋ ㄉㄜ˙ ㄇㄢˇ ㄇㄢˇ ㄉㄜ˙.',
            pinyin: 'shang4 yi1 chang3 biao3 yan3 ren2 zuo4 de man3 man3 de.',
            translation: '前回の公演は満員御礼でした。',
            memo: ''
          },
          {
            word: '強調',
            sentence: '他強調了新產品的卓越度。',
            bopomofo: 'ㄊㄚ ㄑㄧㄤˊ ㄉㄧㄠˋ ㄌㄜ˙ ㄒㄧㄣ ㄔㄢˇ ㄆㄧㄣˇ ㄉㄜ˙ ㄓㄨㄛ ㄩㄝˋ ㄉㄨˋ.',
            pinyin: 'ta1 qiang2 diao4 le xin1 chan3 pin3 de zhuo1 yue4 du4.',
            translation: '彼は新製品の素晴らしさを強調しました。',
            memo: ''
          },
          {
            word: '團體',
            sentence: '大家的努力為團體帶來了勝利。',
            bopomofo: 'ㄉㄚˋ ㄐㄧㄚ ㄉㄜ˙ ㄋㄨˇ ㄌㄧˋ ㄨㄟˋ ㄊㄨㄢˊ ㄊㄧˇ ㄉㄞˋ ㄌㄞˊ ㄌㄜ˙ ㄕㄥˋ ㄌㄧˋ.',
            pinyin: 'da4 jia1 de nu3 li4 wei4 tuan2 ti3 dai4 lai2 le sheng4 li4.',
            translation: 'みんなの努力が、 団体に勝利をもたらしました。',
            memo: ''
          },
          {
            word: '千萬',
            sentence: '他對小事很生氣， 所以你千萬要小心。',
            bopomofo: 'ㄊㄚ ㄉㄨㄟˋ ㄒㄧㄠˇ ㄕˋ ㄏㄣˇ ㄕㄥ ㄑㄧˋ, ㄙㄨㄛˇ ㄧˇ ㄋㄧˇ ㄑㄧㄢ ㄨㄢˋ ㄧㄠˋ ㄒㄧㄠˇ ㄒㄧㄣ.',
            pinyin: 'ta1 dui4 xiao3 shi4 hen3 sheng1 qi4, suo3 yi3 ni3 qian1 wan4 yao4 xiao3 xin1.',
            translation: '彼は小さな事で腹を立てるので、 くれぐれも気を付けて下さい。',
            memo: ''
          },
          {
            word: '鋼琴',
            sentence: '鋼琴的旋律讓她感動地哭了。',
            bopomofo: 'ㄍㄤ ㄑㄧㄣˊ ㄉㄜ˙ ㄒㄩㄢˊ ㄌㄩˋ ㄖㄤˋ ㄊㄚ ㄍㄢˇ ㄉㄨㄥˋ ㄉㄜ˙ ㄎㄨ ㄌㄜ˙.',
            pinyin: 'gang1 qin2 de xuan2 lu4 rang4 ta1 gan3 dong4 de ku1 le.',
            translation: '彼女はピアノの音色に大変感動して涙しました。',
            memo: ''
          },
          {
            word: '小提琴',
            sentence: '鄰居的孩子練習拉小提琴， 每天聽得見吱吱聲。',
            bopomofo: 'ㄌㄧㄣˊ ㄐㄩ ㄉㄜ˙ ㄏㄞˊ ㄗ˙ ㄌㄧㄢˋ ㄒㄧˊ ㄌㄚ ㄒㄧㄠˇ ㄊㄧˊ ㄑㄧㄣˊ, ㄇㄟˇ ㄊㄧㄢ ㄊㄧㄥ ㄉㄜ˙ ㄐㄧㄢˋ ㄓ ㄓ ㄕㄥ.',
            pinyin: 'lin2 ju1 de hai2 zi lian4 xi2 la1 xiao3 ti2 qin2, mei3 tian1 ting1 de jian4 zhi1 zhi1 sheng1.',
            translation: '隣の子供はバイオリンの練習をしていて、 毎日のようにキーキー音が聞こえます。',
            memo: ''
          },
          {
            word: '古典',
            sentence: '我只不過了解一點古典音樂而已, 我比較常聽流行音樂。',
            bopomofo: 'ㄨㄛˇ ㄓˇ ㄅㄨˊ ㄍㄨㄛˋ ㄌㄧㄠˇ ㄐㄧㄝˇ ㄧ ㄉㄧㄢˇ ㄍㄨˇ ㄉㄧㄢˇ ㄧㄣ ㄩㄝˋ ㄦˊ ㄧˇ, ㄨㄛˇ ㄅㄧˇ ㄐㄧㄠˋ ㄔㄤˊ ㄊㄧㄥ ㄌㄧㄡˊ ㄒㄧㄥˊ ㄧㄣ ㄩㄝˋ.',
            pinyin: 'wo3 zhi3 bu2 guo4 liao3 jie3 yi1 dian3 gu3 dian3 yin1 yue4 er2 yi3, wo3 bi3 jiao4 chang2 ting1 liu2 xing2 yin1 yue4.',
            translation: 'クラシック音楽については少ししか知りませんが、 ポップならよく聴きます。',
            memo: '※「只不過(ㄓˇ ㄅㄨˊ ㄍㄨㄛˋ/zhi3 bu2 guo4)～」 : 「ただ～にすぎない」。'
          },
          {
            word: '畫家',
            sentence: '那位畫家一向都畫農村的風景。',
            bopomofo: 'ㄋㄚˋ ㄨㄟˋ ㄏㄨㄚˋ ㄐㄧㄚ ㄧ ㄒㄧㄤˋ ㄉㄡ ㄏㄨㄚˋ ㄋㄨㄥˊ ㄘㄨㄣ ㄉㄜ˙ ㄈㄥ ㄐㄧㄥˇ.',
            pinyin: 'na4 wei4 hua4 jia1 yi1 xiang4 dou1 hua4 nong2 cun1 de feng1 jing3.',
            translation: 'あの画家はいつも農村の風景を描いています。',
            memo: ''
          },
          {
            word: '畫',
            sentence: '他的朋友們各自畫他的畫像。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄆㄥˊ ㄧㄡˇ ㄇㄣ˙ ㄍㄜˋ ㄗˋ ㄏㄨㄚˋ ㄊㄚ ㄉㄜ˙ ㄏㄨㄚˋ ㄒㄧㄤˋ.',
            pinyin: 'ta1 de peng2 you3 men ge4 zi4 hua4 ta1 de hua4 xiang4.',
            translation: '友達たちはそれぞれ、 彼の似顔絵を描きました。',
            memo: ''
          },
          {
            word: '舞蹈',
            sentence: '她在舞蹈上是個無可爭議的天才。',
            bopomofo: 'ㄊㄚ ㄗㄞˋ ㄨˇ ㄉㄠˇ ㄕㄤˋ ㄕˋ ㄍㄜˋ ㄨˊ ㄎㄜˇ ㄓㄥ ㄧˋ ㄉㄜ˙ ㄊㄧㄢ ㄘㄞˊ.',
            pinyin: 'ta1 zai4 wu3 dao3 shang4 shi4 ge4 wu2 ke3 zheng1 yi4 de tian1 cai2.',
            translation: '彼女は、 ダンスに関しては誰もが求める天才です。',
            memo: '※「無可爭議(ㄨˊ ㄎㄜˇ ㄓㄥ ㄧˋ/wu2 ke3 zheng1 yi4)」 : 「議論の余地のない」。'
          },
          {
            word: '★文學',
            sentence: '被選為傑出獎的是一位年輕作家的文學作品。',
            bopomofo: 'ㄅㄟˋ ㄒㄩㄢˇ ㄨㄟˊ ㄐㄧㄝˊ ㄔㄨ ㄐㄧㄤˇ ㄉㄜ˙ ㄕˋ ㄧ ㄨㄟˋ ㄋㄧㄢˊ ㄑㄧㄥ ㄗㄨㄛˋ ㄐㄧㄚ ㄉㄜ˙ ㄨㄣˊ ㄒㄩㄝˊ ㄗㄨㄛˋ ㄆㄧㄣˇ.',
            pinyin: 'bei4 xuan3 wei2 jie2 chu1 jiang3 de shi4 yi1 wei4 nian2 qing1 zuo4 jia1 de wen2 xue2 zuo4 pin3.',
            translation: '優秀賞に選ばれたのは、 若い作家の文学作品でした。',
            memo: '※ポジティブな文でも「被」は使える?'
          },
          {
            word: '繪畫',
            sentence: '這張繪畫太精緻了， 簡直就像一張照片。',
            bopomofo: 'ㄓㄜˋ ㄓㄤ ㄏㄨㄟˋ ㄏㄨㄚˋ ㄊㄞˋ ㄐㄧㄥ ㄓˋ ㄌㄜ˙, ㄐㄧㄢˇ ㄓˊ ㄐㄧㄡˋ ㄒㄧㄤˋ ㄧ ㄓㄤ ㄓㄠˋ ㄆㄧㄢˋ.',
            pinyin: 'zhe4 zhang1 hui4 hua4 tai4 jing1 zhi4 le, jian3 zhi2 jiu4 xiang4 yi1 zhang1 zhao4 pian4.',
            translation: 'この絵は精巧すぎて、 まるで写真のように見えます。',
            memo: ''
          },
          {
            word: '等',
            sentence: '隨著肚子餓了, 像油炸食物等的油膩的食物更想吃了。',
            bopomofo: 'ㄙㄨㄟˊ ㄓㄜ˙ ㄉㄨˇ ㄗ˙ ㄜˋ ㄌㄜ˙, ㄒㄧㄤˋ ㄧㄡˊ ㄓㄚˊ ㄕˊ ㄨˋ ㄉㄥˇ ㄉㄜ˙ ㄧㄡˊ ㄋㄧˋ ㄉㄜ˙ ㄕˊ ㄨˋ ㄍㄥˋ ㄒㄧㄤˇ ㄔ ㄌㄜ˙.',
            pinyin: 'sui2 zhe du4 zi e4 le, xiang4 you2 zha2 shi2 wu4 deng3 de you2 ni4 de shi2 wu4 geng4 xiang3 chi1 le.',
            translation: 'お腹がすくにつれ、 揚げ物のような脂っこい食べ物が食べたくなります。',
            memo: ''
          },
          {
            word: '寺廟',
            sentence: '因為週末， 所以去參拜寺廟的人比平時多。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄓㄡ ㄇㄛˋ, ㄙㄨㄛˇ ㄧˇ ㄑㄩˋ ㄘㄢ ㄅㄞˋ ㄙˋ ㄇㄧㄠˋ ㄉㄜ˙ ㄖㄣˊ ㄅㄧˇ ㄆㄧㄥˊ ㄕˊ ㄉㄨㄛ.',
            pinyin: 'yin1 wei4 zhou1 mo4, suo3 yi3 qu4 can1 bai4 si4 miao4 de ren2 bi3 ping2 shi2 duo1.',
            translation: '週末なので、 お寺を拝観する人はいつもより多いです。',
            memo: ''
          },
          {
            word: '表現',
            sentence: '不只是語言， 表情等也能表現心情。',
            bopomofo: 'ㄅㄨˋ ㄓˇ ㄕˋ ㄩˇ ㄧㄢˊ, ㄅㄧㄠˇ ㄑㄧㄥˊ ㄉㄥˇ ㄧㄝˇ ㄋㄥˊ ㄅㄧㄠˇ ㄒㄧㄢˋ ㄒㄧㄣ ㄑㄧㄥˊ.',
            pinyin: 'bu4 zhi3 shi4 yu3 yan2, biao3 qing2 deng3 ye3 neng2 biao3 xian4 xin1 qing2.',
            translation: '言葉だけではなく、 表情などでも気持ちを表現できます。',
            memo: ''
          },
          {
            word: '之',
            sentence: '他的實力是全團隊之中最好的。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄕˊ ㄌㄧˋ ㄕˋ ㄑㄩㄢˊ ㄊㄨㄢˊ ㄉㄨㄟˋ ㄓ ㄓㄨㄥ ㄗㄨㄟˋ ㄏㄠˇ ㄉㄜ˙.',
            pinyin: 'ta1 de shi2 li4 shi4 quan2 tuan2 dui4 zhi1 zhong1 zui4 hao3 de.',
            translation: '彼の実力は、 チームの中でも随一です。',
            memo: ''
          },
          {
            word: '★劇情',
            sentence: '我還沒看連續劇的最新集， 所以別洩露劇情。',
            bopomofo: 'ㄨㄛˇ ㄏㄞˊ ㄇㄟˊ ㄎㄢˋ ㄌㄧㄢˊ ㄒㄩˋ ㄐㄩˋ ㄉㄜ˙ ㄗㄨㄟˋ ㄒㄧㄣ ㄐㄧˊ, ㄙㄨㄛˇ ㄧˇ ㄅㄧㄝˊ ㄒㄧㄝˋ ㄌㄡˋ ㄐㄩˋ ㄑㄧㄥˊ.',
            pinyin: 'wo3 hai2 mei2 kan4 lian2 xu4 ju4 de zui4 xin1 ji2, suo3 yi3 bie2 xie4 lou4 ju4 qing2.',
            translation: '連続ドラマの最新エピソードはまだ見ていないので、 ネタバレはやめて下さい。',
            memo: '※「洩露」の発音は「xie4 lou4」または「yi4 lou4」どっち?'
          },
          {
            word: '★導演',
            sentence: '電影導演對演員的表演並不十分信服， 一遍又一遍地重新拍攝同一場景。',
            bopomofo: 'ㄉㄧㄢˋ ㄧㄥˇ ㄉㄠˇ ㄧㄢˇ ㄉㄨㄟˋ ㄧㄢˇ ㄩㄢˊ ㄉㄜ˙ ㄅㄧㄠˇ ㄧㄢˇ ㄅㄧㄥˋ ㄅㄨˋ ㄕˊ ㄈㄣ ㄒㄧㄣˋ ㄈㄨˊ, ㄧ ㄅㄧㄢˋ ㄧㄡˋ ㄧ ㄅㄧㄢˋ ㄉㄜ˙ ㄔㄨㄥˊ ㄒㄧㄣ ㄆㄞ ㄕㄜˋ ㄊㄨㄥˊ ㄧ ㄔㄤˇ ㄐㄧㄥˇ.',
            pinyin: 'dian4 ying3 dao3 yan3 dui4 yan3 yuan2 de biao3 yan3 bing4 bu4 shi2 fen1 xin4 fu2, yi1 bian4 you4 yi1 bian4 de chong2/zhong4 xin1 pai1 she4 tong2 yi1 chang3 jing3.',
            translation: '映画監督は役者の演技に中々納得がいかず、 同じシーンを何度も撮り直しています。',
            memo: '※「重新」の発音は「chong2/zhong4 xin1」どっち? 「信服(Xìnfú)」と「幸福(xìngfú)」の音の違いが分からない。'
          },
          {
            word: '所',
            sentence: '我所知道的， 他有兩個女兒。',
            bopomofo: 'ㄨㄛˇ ㄙㄨㄛˇ ㄓ ㄉㄠˋ ㄉㄜ˙, ㄊㄚ ㄧㄡˇ ㄌㄧㄤˇ ㄍㄜˋ ㄋㄩˇ ㄦˊ.',
            pinyin: 'wo3 suo3 zhi1 dao4 de, ta1 you3 liang3 ge4 nu3 er2.',
            translation: '私が知るところによれば、 彼には娘が2人います。',
            memo: ''
          },
          {
            word: '紅',
            sentence: '她是現在最紅的一個偶像。',
            bopomofo: 'ㄊㄚ ㄕˋ ㄒㄧㄢˋ ㄗㄞˋ ㄗㄨㄟˋ ㄏㄨㄥˊ ㄉㄜ˙ ㄧˊ ㄍㄜˋ ㄡˇ ㄒㄧㄤˋ.',
            pinyin: 'ta1 shi4 xian4 zai4 zui4 hong2 de yi1 ge4 ou3 xiang4.',
            translation: '彼女は今をときめくアイドルです。',
            memo: ''
          },
          {
            word: '明星',
            sentence: '他一個明星在外面走的時候總是被要求握手。',
            bopomofo: 'ㄊㄚ ㄧ ㄍㄜˋ ㄇㄧㄥˊ ㄒㄧㄥ ㄗㄞˋ ㄨㄞˋ ㄇㄧㄢˋ ㄗㄡˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄗㄨㄥˇ ㄕˋ ㄅㄟˋ ㄧㄠ ㄑㄧㄡˊ ㄨㄛˋ ㄕㄡˇ.',
            pinyin: 'ta1 yi1 ge4 ming2 xing1 zai4 wai4 mian4 zou3 de shi2 hou4 zong3 shi4 bei4 yao1 qiu2 wo4 shou3.',
            translation: '大スターの彼は、 外を歩けばいつも握手を求められます。',
            memo: ''
          },
          {
            word: '演技',
            sentence: '我覺得新出演的演員很酷， 至於演技好不好我沒有意見。',
            bopomofo: 'ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄒㄧㄣ ㄔㄨ ㄧㄢˇ ㄉㄜ˙ ㄧㄢˇ ㄩㄢˊ ㄏㄣˇ ㄎㄨˋ, ㄓˋ ㄩˊ ㄧㄢˇ ㄐㄧˋ ㄏㄠˇ ㄅㄨˋ ㄏㄠˇ ㄨㄛˇ ㄇㄟˊ ㄧㄡˇ ㄧˋ ㄐㄧㄢˋ.',
            pinyin: 'wo3 jue2 de xin1 chu1 yan3 de yan3 yuan2 hen3 ku4, zhi4 yu2 yan3 ji4 hao3 bu4 hao3 wo3 mei2 you3 yi4 jian4.',
            translation: '新しい俳優はとてもかっこいいと思いますが、 演技についてはノーコメントです。',
            memo: '※「至於(ㄓˋ ㄩˊ/zhi4 yu2 )～」 : 「～はどうかと言うと」。'
          },
          {
            word: '得',
            sentence: '如果今天買這個牌子的商品, 你可以得到限定點數。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄐㄧㄣ ㄊㄧㄢ ㄇㄞˇ ㄓㄜˋ ㄍㄜˋ ㄆㄞˊ ㄗ˙ ㄉㄜ˙ ㄕㄤ ㄆㄧㄣˇ, ㄋㄧˇ ㄎㄜˇ ㄧˇ ㄉㄜˊ ㄉㄠˋ ㄒㄧㄢˋ ㄉㄧㄥˋ ㄉㄧㄢˇ ㄕㄨˋ.',
            pinyin: 'ru2 guo3 jin1 tian1 mai3 zhe4 ge4 pai2 zi de shang1 pin3, ni3 ke3 yi3 de2 dao4 xian4 ding4 dian3 shu4.',
            translation: '今日このブランドの商品を購入すれば、 限定ポイントをゲットできます。',
            memo: ''
          },
          {
            word: '獎',
            sentence: '為了在大胃王比賽中得到獎， 她正在努力地訓練自己的胃。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄗㄞˋ ㄉㄚˋ ㄨㄟˋ ㄨㄤˊ ㄅㄧˇ ㄙㄞˋ ㄓㄨㄥ ㄉㄜˊ ㄉㄠˋ ㄐㄧㄤˇ, ㄊㄚ ㄓㄥˋ ㄗㄞˋ ㄋㄨˇ ㄌㄧˋ ㄉㄜ˙ ㄒㄩㄣˋ ㄌㄧㄢˋ ㄗˋ ㄐㄧˇ ㄉㄜ˙ ㄨㄟˋ.',
            pinyin: 'wei4 le zai4 da4 wei4 wang2 bi3 sai4 zhong1 de2 dao4 jiang3, ta1 zheng4 zai4 nu3 li4 de xun4 lian4 zi4 ji3 de wei4.',
            translation: '大食い大会で賞を取るために、 彼女は一生懸命胃を鍛えています。',
            memo: ''
          },
          {
            word: '廣場',
            sentence: '在廣場上， 一個看起來很閒的叔叔正在餵鳥。',
            bopomofo: 'ㄗㄞˋ ㄍㄨㄤˇ ㄔㄤˇ ㄕㄤˋ, ㄧ ㄍㄜˋ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄏㄣˇ ㄒㄧㄢˊ ㄉㄜ˙ ㄕㄨˊ ㄕㄨ˙ ㄓㄥˋ ㄗㄞˋ ㄨㄟˋ ㄋㄧㄠˇ.',
            pinyin: 'zai4 guang3 chang3 shang4, yi1 ge4 kan4 qi3 lai2 hen3 xian2 de shu2 shu zheng4 zai4 wei4 niao3.',
            translation: '広場では、 暇そうなおじさんが鳥に餌をやっています。',
            memo: ''
          },
          {
            word: '或',
            sentence: '海邊或山， 你更喜歡哪一個?',
            bopomofo: 'ㄏㄞˇ ㄅㄧㄢ ㄏㄨㄛˋ ㄕㄢ, ㄋㄧˇ ㄍㄥˋ ㄒㄧˇ ㄏㄨㄢ ㄋㄚˇ ㄧ ㄍㄜˋ?',
            pinyin: 'hai3 bian1 huo4 shan1, ni3 geng4 xi3 huan1 na3 yi1 ge4?',
            translation: '海と山ならどちらが好きですか?',
            memo: ''
          },
          {
            word: '仔細',
            sentence: '奶奶每早上很仔細地讀報紙到每個角落。',
            bopomofo: 'ㄋㄞˇ ㄋㄞ˙ ㄇㄟˇ ㄗㄠˇ ㄕㄤˋ ㄏㄣˇ ㄗˇ ㄒㄧˋ ㄉㄜ˙ ㄉㄨˊ ㄅㄠˋ ㄓˇ ㄉㄠˋ ㄇㄟˇ ㄍㄜˋ ㄐㄧㄠˇ ㄌㄨㄛˋ.',
            pinyin: 'nai3 nai mei3 zao3 shang4 hen3 zi3 xi4 de du2 bao4 zhi3 dao4 mei3 ge4 jiao3 luo4.',
            translation: 'おばあさんは、 毎朝新聞を隅々まで注意深く読みます。',
            memo: ''
          },
          {
            word: '留意',
            sentence: '該留意的項目寫在這張紙上， 請你仔細閱讀。',
            bopomofo: 'ㄍㄞ ㄌㄧㄡˊ ㄧˋ ㄉㄜ˙ ㄒㄧㄤˋ ㄇㄨˋ ㄒㄧㄝˇ ㄗㄞˋ ㄓㄜˋ ㄓㄤ ㄓˇ ㄕㄤˋ, ㄑㄧㄥˇ ㄋㄧˇ ㄗˇ ㄒㄧˋ ㄩㄝˋ ㄉㄨˊ.',
            pinyin: 'gai1 liu2 yi4 de xiang4 mu4 xie3 zai4 zhe4 zhang1 zhi3 shang4, qing3 ni3 zi3 xi4 yue4 du2.',
            translation: '留意すべき事項はこの紙に書かれていますので、 よくお読み下さい。',
            memo: ''
          },
          {
            word: '處處',
            sentence: '她處處都是完美的, 所以我擔心她是不是太勉強了。',
            bopomofo: 'ㄊㄚ ㄔㄨˋ ㄔㄨˋ ㄉㄡ ㄕˋ ㄨㄢˊ ㄇㄟˇ ㄉㄜ˙, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄉㄢ ㄒㄧㄣ ㄊㄚ ㄕˋ ㄅㄨˊ ㄕˋ ㄊㄞˋ ㄇㄧㄢˇ ㄑㄧㄤˇ ㄌㄜ˙.',
            pinyin: 'ta1 chu4 chu4 dou1 shi4 wan2 mei3 de, suo3 yi3 wo3 dan1 xin1 ta1 shi4 bu2 shi4 tai4 mian3 qiang3 le.',
            translation: '彼女はあらゆる面で完璧なので、 無理をしているのではないかと心配です。',
            memo: ''
          },
          {
            word: '滿足',
            sentence: '我想滿足地吃， 所以我決定不再試著減肥了。',
            bopomofo: 'ㄨㄛˇ ㄒㄧㄤˇ ㄇㄢˇ ㄗㄨˊ ㄉㄜ˙ ㄔ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄐㄩㄝˊ ㄉㄧㄥˋ ㄅㄨˊ ㄗㄞˋ ㄕˋ ㄓㄜ˙ ㄐㄧㄢˇ ㄈㄟˊ ㄌㄜ˙.',
            pinyin: 'wo3 xiang3 man3 zu2 de chi1, suo3 yi3 wo3 jue2 ding4 bu2 zai4 shi4 zhe jian3 fei2 le.',
            translation: '満足するまで食べたいので、 私はもうダイエットしないことにしました。',
            memo: ''
          },
          {
            word: '豐盛',
            sentence: '派對上的大餐很豐盛, 甚至那位美食家也很滿意。',
            bopomofo: 'ㄆㄞˋ ㄉㄨㄟˋ ㄕㄤˋ ㄉㄜ˙ ㄉㄚˋ ㄘㄢ ㄏㄣˇ ㄈㄥ ㄕㄥˋ, ㄕㄣˋ ㄓˋ ㄋㄚˋ ㄨㄟˋ ㄇㄟˇ ㄕˊ ㄐㄧㄚ ㄧㄝˇ ㄏㄣˇ ㄇㄢˇ ㄧˋ.',
            pinyin: 'pai4 dui4 shang4 de da4 can1 hen3 feng1 sheng4, shen4 zhi4 na4 wei4 mei3 shi2 jia1 ye3 hen3 man3 yi4.',
            translation: 'パーティーのご馳走はとても豪華で、 あの美食家でさえとても満足していました。',
            memo: ''
          },
          {
            word: '國家戲劇院 ',
            sentence: '我今晚要到國家戲劇院去看戲， 所以我要打扮。',
            bopomofo: 'ㄨㄛˇ ㄐㄧㄣ ㄨㄢˇ ㄧㄠˋ ㄉㄠˋ ㄍㄨㄛˊ ㄐㄧㄚ ㄒㄧˋ ㄐㄩˋ ㄩㄢˋ ㄑㄩˋ ㄎㄢˋ ㄒㄧˋ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄧㄠˋ ㄉㄚˇ ㄅㄢˋ.',
            pinyin: 'wo3 jin1 wan3 yao4 dao4 guo2 jia1 xi4 ju4 yuan4 qu4 kan4 xi4, suo3 yi3 wo3 yao4 da3 ban4.',
            translation: '今夜は国立劇場で観劇するので、 お洒落しようと思います',
            memo: ''
          },
          {
            word: '雲門舞集',
            sentence: '雲門舞集是一個被世界實力認可的現代舞的團體。',
            bopomofo: 'ㄩㄣˊ ㄇㄣˊ ㄨˇ ㄐㄧˊ ㄕˋ ㄧˊ ㄍㄜˋ ㄅㄟˋ ㄕˋ ㄐㄧㄝˋ ㄕˊ ㄌㄧˋ ㄖㄣˋ ㄎㄜˇ ㄉㄜ˙ ㄒㄧㄢˋ ㄉㄞˋ ㄨˇ ㄉㄜ˙ ㄊㄨㄢˊ ㄊㄧˇ.',
            pinyin: 'yun2 men2 wu3 ji2 shi4 yi1 ge4 bei4 shi4 jie4 shi2 li4 ren4 ke3 de xian4 dai4 wu3 de tuan2 ti3.',
            translation: '雲門舞集は、 世界的に実力が認められた現代舞踊の団体です。',
            memo: ''
          },
          {
            word: '國家音樂廳',
            sentence: '到底誰會在國家音樂廳的音樂會上做最後的演奏?',
            bopomofo: 'ㄉㄠˋ ㄉㄧˇ ㄕㄨㄟˊ ㄏㄨㄟˋ ㄗㄞˋ ㄍㄨㄛˊ ㄐㄧㄚ ㄧㄣ ㄩㄝˋ ㄊㄧㄥ ㄉㄜ˙ ㄧㄣ ㄩㄝˋ ㄏㄨㄟˋ ㄕㄤˋ ㄗㄨㄛˋ ㄗㄨㄟˋ ㄏㄡˋ ㄉㄜ˙ ㄧㄢˇ ㄗㄡˋ?',
            pinyin: 'dao4 di3 shei2 hui4 zai4 guo2 jia1 yin1 yue4 ting1 de yin1 yue4 hui4 shang4 zuo4 zui4 hou4 de yan3 zou4?',
            translation: 'いったい誰が、 国立コンサートホールの音楽会で一番最後に演奏するのですか?',
            memo: ''
          },
          {
            word: '金馬影展',
            sentence: '如果你想知道金馬影展有關的信息, 你應該看一下首頁。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄒㄧㄤˇ ㄓ ㄉㄠˋ ㄐㄧㄣ ㄇㄚˇ ㄧㄥˇ ㄓㄢˇ ㄧㄡˇ ㄍㄨㄢ ㄉㄜ˙ ㄒㄧㄣˋ ㄒㄧˊ, ㄋㄧˇ ㄧㄥ ㄍㄞ ㄎㄢˋ ㄧ ㄒㄧㄚˋ ㄕㄡˇ ㄧㄝˋ.',
            pinyin: 'ru2 guo3 ni3 xiang3 zhi1 dao4 jin1 ma3 ying3 zhan3 you3 guan1 de xin4 xi2, ni3 ying1 gai1 kan4 yi1 xia4 shou3 ye4.',
            translation: '金馬奨映画祭に関する情報を知りたいなら、 ホームページを見るといいですよ。',
            memo: ''
          },
          {
            word: '現代舞',
            sentence: '幸虧還剩下最後一張， 我買到了我想看的現代舞的票。',
            bopomofo: 'ㄒㄧㄥˋ ㄎㄨㄟ ㄏㄞˊ ㄕㄥˋ ㄒㄧㄚˋ ㄗㄨㄟˋ ㄏㄡˋ ㄧ ㄓㄤ, ㄨㄛˇ ㄇㄞˇ ㄉㄠˋ ㄌㄜ˙ ㄨㄛˇ ㄒㄧㄤˇ ㄎㄢˋ ㄉㄜ˙ ㄒㄧㄢˋ ㄉㄞˋ ㄨˇ ㄉㄜ˙ ㄆㄧㄠˋ.',
            pinyin: 'xing4 kui1 hai2 sheng4 xia4 zui4 hou4 yi1 zhang1, wo3 mai3 dao4 le wo3 xiang3 kan4 de xian4 dai4 wu3 de piao4.',
            translation: '幸い最後の一枚が残っていたので、 観たかったモダンダンスのチケットを購入できました。',
            memo: ''
          },
          {
            word: '無人不知無人不曉',
            sentence: '這家餐廳現在有名了像無人不知， 無人不曉。',
            bopomofo: 'ㄓㄜˋ ㄐㄧㄚ ㄘㄢ ㄊㄧㄥ ㄒㄧㄢˋ ㄗㄞˋ ㄧㄡˇ ㄇㄧㄥˊ ㄌㄜ˙ ㄒㄧㄤˋ ㄨˊ ㄖㄣˊ ㄅㄨˋ ㄓ, ㄨˊ ㄖㄣˊ ㄅㄨˋ ㄒㄧㄠˇ.',
            pinyin: 'zhe4 jia1 can1 ting1 xian4 zai4 you3 ming2 le xiang4 wu2 ren2 bu4 zhi1, wu2 ren2 bu4 xiao3.',
            translation: 'その店は、 今や知らない人がいないくらい有名になりました。',
            memo: ''
          },
          {
            word: '百聞不如一見',
            sentence: '直到我使用除濕機後我才知道它很好用， 所以我認為百聞不如一見真對了。',
            bopomofo: 'ㄓˊ ㄉㄠˋ ㄨㄛˇ ㄕˇ ㄩㄥˋ ㄔㄨˊ ㄕ ㄐㄧ ㄏㄡˋ ㄨㄛˇ ㄘㄞˊ ㄓ ㄉㄠˋ ㄊㄚ ㄏㄣˇ ㄏㄠˇ ㄩㄥˋ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄖㄣˋ ㄨㄟˊ ㄅㄞˇ ㄨㄣˊ ㄅㄨˋ ㄖㄨˊ ㄧ ㄐㄧㄢˋ ㄓㄣ ㄉㄨㄟˋ ㄌㄜ˙.',
            pinyin: 'zhi2 dao4 wo3 shi3 yong4 chu2 shi1 ji1 hou4 wo3 cai2 zhi1 dao4 ta1 hen3 hao3 yong4, suo3 yi3 wo3 ren4 wei2 bai3 wen2 bu4 ru2 yi1 jian4 zhen1 dui4 le.',
            translation: '除湿器は使って初めて良さが分かったので、 まさに百聞は一見に如かずだと思いました。',
            memo: ''
          },
          {
            word: '★老街',
            sentence: '這周圍是一個古樸的老街， 晚上的氣氛很好。',
            bopomofo: 'ㄓㄜˋ ㄓㄡ ㄨㄟˊ ㄕˋ ㄧˊ ㄍㄜˋ ㄍㄨˇ ㄆㄨˇ ㄉㄜ˙ ㄌㄠˇ ㄐㄧㄝ, ㄨㄢˇ ㄕㄤˋ ㄉㄜ˙ ㄑㄧˋ ㄈㄣ ㄏㄣˇ ㄏㄠˇ.',
            pinyin: 'zhe4 zhou1 wei2 shi4 yi1 ge4 gu3 pu3 de lao3 jie1, wan3 shang4 de qi4 fen1 hen3 hao3.',
            translation: 'この辺りは趣のある古い街で、 夜はとても雰囲気が良いです。',
            memo: '※「古樸(ㄍㄨˇ ㄆㄨˇ)」 : 「趣のある」の発音?'
          },
          {
            word: '街頭藝術',
            sentence: '該鎮街頭藝術的創始人是一群年輕藝術家。',
            bopomofo: 'ㄍㄞ ㄓㄣˋ ㄐㄧㄝ ㄊㄡˊ ㄧˋ ㄕㄨˋ ㄉㄜ˙ ㄔㄨㄤˋ ㄕˇ ㄖㄣˊ ㄕˋ ㄧ ㄑㄩㄣˊ ㄋㄧㄢˊ ㄑㄧㄥ ㄧˋ ㄕㄨˋ ㄐㄧㄚ.',
            pinyin: 'gai1 zhen4 jie1 tou2 yi4 shu4 de chuang4 shi3 ren2 shi4 yi1 qun2 nian2 qing1 yi4 shu4 jia1.',
            translation: 'この町のストリートアートの発起人は、 若い芸術家の集団です。',
            memo: ''
          },
          {
            word: '裝置藝術',
            sentence: '裝置藝術是一門用五種感官享受的藝術。',
            bopomofo: 'ㄓㄨㄤ ㄓˋ ㄧˋ ㄕㄨˋ ㄕˋ ㄧ ㄇㄣˊ ㄩㄥˋ ㄨˇ ㄓㄨㄥˇ ㄍㄢˇ ㄍㄨㄢ ㄒㄧㄤˇ ㄕㄡˋ ㄉㄜ˙ ㄧˋ ㄕㄨˋ.',
            pinyin: 'zhuang1 zhi4 yi4 shu4 shi4 yi1 men2 yong4 wu3 zhong3 gan3 guan1 xiang3 shou4 de yi4 shu4.',
            translation: 'インスタレーションは、 五感で楽しむアートです。',
            memo: ''
          },
          {
            word: '填飽',
            sentence: '以前我以為可以填飽就好了， 但是現在覺得比起數量質量更重要。',
            bopomofo: 'ㄧˇ ㄑㄧㄢˊ ㄨㄛˇ ㄧˇ ㄨㄟˊ ㄎㄜˇ ㄧˇ ㄊㄧㄢˊ ㄅㄠˇ ㄐㄧㄡˋ ㄏㄠˇ ㄌㄜ˙, ㄉㄢˋ ㄕˋ ㄒㄧㄢˋ ㄗㄞˋ ㄐㄩㄝˊ ㄉㄜ˙ ㄅㄧˇ ㄑㄧˇ ㄕㄨˋ ㄌㄧㄤˋ ㄓˊ ㄌㄧㄤˋ ㄍㄥˋ ㄓㄨㄥˋ ㄧㄠˋ.',
            pinyin: 'yi3 qian2 wo3 yi3 wei2 ke3 yi3 tian2 bao3 jiu4 hao3 le, dan4 shi4 xian4 zai4 jue2 de bi3 qi3 shu4 liang4 zhi2 liang4 geng4 zhong4 yao4.',
            translation: '以前はお腹が満たせればそれで良かったのですが、 今は量より質だと思います。',
            memo: ''
          },
          {
            word: '口腹之慾',
            sentence: '他的口腹之慾像無底洞。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄎㄡˇ ㄈㄨˋ ㄓ ㄩˋ ㄒㄧㄤˋ ㄨˊ ㄉㄧˇ ㄉㄨㄥˋ.',
            pinyin: 'ta1 de kou3 fu4 zhi1 yu4 xiang4 wu2 di3 dong4.',
            translation: '彼の食欲は底なしです。',
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
