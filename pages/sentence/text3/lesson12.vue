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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第12章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第12章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      // 単語数：84
      data: {
        title: '當代中文課程課3・第12章',
        words: [
          {
            word: '★投票',
            sentence: '我們通過投票表決今晚的晚餐會是義大利料理或印度料理。',
            bopomofo: 'ㄨㄛˇ ㄇㄣ˙ ㄊㄨㄥ ㄍㄨㄛˋ ㄊㄡˊ ㄆㄧㄠˋ ㄅㄧㄠˇ ㄐㄩㄝˊ ㄐㄧㄣ ㄨㄢˇ ㄉㄜ˙ ㄨㄢˇ ㄘㄢ ㄏㄨㄟˋ ㄕˋ ㄧˋ ㄉㄚˋ ㄌㄧˋ ㄌㄧㄠˋ ㄌㄧˇ ㄏㄨㄛˋ ㄧㄣˋ ㄉㄨˋ ㄌㄧㄠˋ ㄌㄧˇ.',
            pinyin: 'wo3 men tong1 guo4 tou2 piao4 biao3 jue2 jin1 wan3 de wan3 can1 hui4 shi4 yi4 da4 li4 liao4 li3 huo4 yin4 du4 liao4 li3.',
            translation: '今夜の夕飯はイタリアンがいいかインド料理がいいか、 投票で決める事になりました。',
            memo: '※「投票表決」どちらかではなく一単語?'
          },
          {
            word: '抱歉',
            sentence: '我放了太多辣椒到菜餚裡了， 我很抱歉。',
            bopomofo: 'ㄨㄛˇ ㄈㄤˋ ㄌㄜ˙ ㄊㄞˋ ㄉㄨㄛ ㄌㄚˋ ㄐㄧㄠ ㄉㄠˋ ㄘㄞˋ ㄧㄠˊ ㄌㄧˇ ㄌㄜ˙, ㄨㄛˇ ㄏㄣˇ ㄅㄠˋ ㄑㄧㄢˋ.',
            pinyin: 'wo3 fang4 le tai4 duo1 la4 jiao1 dao4 cai4 yao2 li3 le, wo3 hen3 bao4 qian4.',
            translation: 'おかずに唐辛子を入れ過ぎてしまって、 本当にすみません。',
            memo: '※「菜餚(ㄘㄞˋ ㄧㄠˊ/cai4 yao2)」 : 「料理」。'
          },
          {
            word: '表妹',
            sentence: '表妹正在考慮使用當地特產品的新事業。',
            bopomofo: 'ㄅㄧㄠˇ ㄇㄟˋ ㄓㄥˋ ㄗㄞˋ ㄎㄠˇ ㄌㄩˋ ㄕˇ ㄩㄥˋ ㄉㄤ ㄉㄧˋ ㄊㄜˋ ㄔㄢˇ ㄆㄧㄣˇ ㄉㄜ˙ ㄒㄧㄣ ㄕˋ ㄧㄝˋ.',
            pinyin: 'biao3 mei4 zheng4 zai4 kao3 lu4 shi3 yong4 dang1 di4 te4 chan3 pin3 de xin1 shi4 ye4.',
            translation: 'いとこは、 地元の特産品を使った新しいビジネスを検討しています。',
            memo: ''
          },
          {
            word: '反核',
            sentence: '在反核辯論中, 應該也考慮替代能源。',
            bopomofo: 'ㄗㄞˋ ㄈㄢˇ ㄏㄜˊ ㄅㄧㄢˋ ㄌㄨㄣˋ ㄓㄨㄥ, ㄧㄥ ㄍㄞ ㄧㄝˇ ㄎㄠˇ ㄌㄩˋ ㄊㄧˋ ㄉㄞˋ ㄋㄥˊ ㄩㄢˊ.',
            pinyin: 'zai4 fan3 he2 bian4 lun4 zhong1, ying1 gai1 ye3 kao3 lu4 ti4 dai4 neng2 yuan2.',
            translation: '反核に関する議論においては、 代替エネルギーについても考慮すべきです。',
            memo: ''
          },
          {
            word: '遊行',
            sentence: '年輕人也開始參加了遊行， 結果改革的熱潮變高了。',
            bopomofo: 'ㄋㄧㄢˊ ㄑㄧㄥ ㄖㄣˊ ㄧㄝˇ ㄎㄞ ㄕˇ ㄘㄢ ㄐㄧㄚ ㄌㄜ˙ ㄧㄡˊ ㄒㄧㄥˊ, ㄐㄧㄝˊ ㄍㄨㄛˇ ㄍㄞˇ ㄍㄜˊ ㄉㄜ˙ ㄖㄜˋ ㄔㄠˊ ㄅㄧㄢˋ ㄍㄠ ㄌㄜ˙.',
            pinyin: 'nian2 qing1 ren2 ye3 kai1 shi3 can1 jia1 le you2 xing2, jie2 guo3 gai3 ge2 de re4 chao2 bian4 gao1 le.',
            translation: '若者もデモに加わり出し、 改革への機運は高まりました。',
            memo: ''
          },
          {
            word: '政治',
            sentence: '我個人對政治沒有太多興趣, 但是覺得去投票是為了盡民主的義務。',
            bopomofo: 'ㄨㄛˇ ㄍㄜˋ ㄖㄣˊ ㄉㄨㄟˋ ㄓㄥˋ ㄓˋ ㄇㄟˊ ㄧㄡˇ ㄊㄞˋ ㄉㄨㄛ ㄒㄧㄥˋ ㄑㄩˋ, ㄉㄢˋ ㄕˋ ㄐㄩㄝˊ ㄉㄜ˙ ㄑㄩˋ ㄊㄡˊ ㄆㄧㄠˋ ㄕˋ ㄨㄟˋ ㄌㄜ˙ ㄐㄧㄣˇ ㄇㄧㄣˊ ㄓㄨˇ ㄉㄜ˙ ㄧˋ ㄨˋ.',
            pinyin: 'wo3 ge4 ren2 dui4 zheng4 zhi4 mei2 you3 tai4 duo1 xing4 qu4, dan4 shi4 jue2 de qu4 tou2 piao4 shi4 wei4 le jin3 min2 zhu3 de yi4 wu4.',
            translation: '個人的には政治にあまり興味がありませんが、 投票に行く事は民主主義を守る為の義務だと思います。',
            memo: ''
          },
          {
            word: '熱衷',
            sentence: '她是那個男性偶像的非常熱衷的追星族。',
            bopomofo: 'ㄊㄚ ㄕˋ ㄋㄚˋ ㄍㄜˋ ㄋㄢˊ ㄒㄧㄥˋ ㄡˇ ㄒㄧㄤˋ ㄉㄜ˙ ㄈㄟ ㄔㄤˊ ㄖㄜˋ ㄓㄨㄥ ㄉㄜ˙ ㄓㄨㄟ ㄒㄧㄥ ㄗㄨˊ.',
            pinyin: 'ta1 shi4 na4 ge4 nan2 xing4 ou3 xiang4 de fei1 chang2 re4 zhong1 de zhui1 xing1 zu2.',
            translation: '彼女は、 あの男性アイドルのとても熱心な追っかけです。',
            memo: ''
          },
          {
            word: '★前途',
            sentence: '他是個很有前途的年輕人， 但是現在變成了身心俱疲症候群（過勞症）。',
            bopomofo: 'ㄊㄚ ㄕˋ ㄍㄜˋ ㄏㄣˇ ㄧㄡˇ ㄑㄧㄢˊ ㄊㄨˊ ㄉㄜ˙ ㄋㄧㄢˊ ㄑㄧㄥ ㄖㄣˊ, ㄉㄢˋ ㄕˋ ㄒㄧㄢˋ ㄗㄞˋ ㄅㄧㄢˋ ㄔㄥˊ ㄌㄜ˙ ㄕㄣ ㄒㄧㄣ ㄐㄩˋ ㄆㄧˊ ㄓㄥˋ ㄏㄡˋ ㄑㄩㄣˊ.',
            pinyin: 'ta1 shi4 ge4 hen3 you3 qian2 tu2 de nian2 qing1 ren2, dan4 shi4 xian4 zai4 bian4 cheng2 le shen1 xin1 ju4 pi2 zheng4 hou4 qun2.',
            translation: '彼は将来有望な若者でしたが、 燃え尽き症候群に陥っています。',
            memo: '※「燃え尽き症候群」 : 「身心俱疲症候群(ㄕㄣ ㄒㄧㄣ ㄐㄩˋ ㄆㄧˊ ㄓㄥˋ ㄏㄡˋ ㄑㄩㄣˊ/shen1 xin1 ju4 pi2 zheng4 hou4 qun2)」/「過勞症(ㄍㄨㄛˋ ㄌㄠˊ ㄓㄥˋ/guo4 lao2 zheng4)」?'
          },
          {
            word: '勸',
            sentence: '我每天給貓生魚片但是牠對我卻很冷清, 所以你能不能勸他感謝我一點呢?',
            bopomofo: 'ㄨㄛˇ ㄇㄟˇ ㄊㄧㄢ ㄍㄟˇ ㄇㄠ ㄕㄥ ㄩˊ ㄆㄧㄢˋ ㄉㄢˋ ㄕˋ ㄊㄚ ㄉㄨㄟˋ ㄨㄛˇ ㄑㄩㄝˋ ㄏㄣˇ ㄌㄥˇ ㄑㄧㄥ, ㄙㄨㄛˇ ㄧˇ ㄋㄧˇ ㄋㄥˊ ㄅㄨˋ ㄋㄥˊ ㄑㄩㄢˋ ㄊㄚ ㄍㄢˇ ㄒㄧㄝˋ ㄨㄛˇ ㄧˋ ㄉㄧㄢˇ ㄋㄜ˙?',
            pinyin: 'wo3 mei3 tian1 gei3 mao1 sheng1 yu2 pian4 dan4 shi4 ta1 dui4 wo3 que4 hen3 leng3 qing1, suo3 yi3 ni3 neng2 bu4 neng2 quan4 ta1 gan3 xie4 wo3 yi1 dian3 ne?',
            translation: '毎日刺身をあげているのに猫がすごく素っ気ないので、 もう少し私に感謝するよう説得してもらえませんか?',
            memo: ''
          },
          {
            word: '而已',
            sentence: '我只游一百公尺而已, 還不累。',
            bopomofo: 'ㄨㄛˇ ㄓˇ ㄧㄡˊ ㄧ ㄅㄞˇ ㄍㄨㄥ ㄔˇ ㄦˊ ㄧˇ, ㄏㄞˊ ㄅㄨˊ ㄌㄟˋ.',
            pinyin: 'wo3 zhi3 you2 yi1 bai3 gong1 chi3 er2 yi3, hai2 bu2 lei4.',
            translation: '100メートル泳いだだけなので、 まだ疲れていません。',
            memo: ''
          },
          {
            word: '民主',
            sentence: '我家有四個人但是所有的事情由媽媽來決定, 這並不民主。',
            bopomofo: 'ㄨㄛˇ ㄐㄧㄚ ㄧㄡˇ ㄙˋ ㄍㄜˋ ㄖㄣˊ ㄉㄢˋ ㄕˋ ㄙㄨㄛˇ ㄧㄡˇ ㄉㄜ˙ ㄕˋ ㄑㄧㄥˊ ㄧㄡˊ ㄇㄚ ㄇㄚ ㄌㄞˊ ㄐㄩㄝˊ ㄉㄧㄥˋ, ㄓㄜˋ ㄅㄧㄥˋ ㄅㄨˋ ㄇㄧㄣˊ ㄓㄨˇ.',
            pinyin: 'wo3 jia1 you3 si4 ge4 ren2 dan4 shi4 suo3 you3 de shi4 qing2 you2 ma1 ma1 lai2 jue2 ding4, zhe4 bing4 bu4 min2 zhu3.',
            translation: '我が家は四人家族ですが、 お母さんが何もかも決めるので、 あまり民主的ではありません。',
            memo: ''
          },
          {
            word: '表達',
            sentence: '貓的可愛無法用言語表達。',
            bopomofo: 'ㄇㄠ ㄉㄜ˙ ㄎㄜˇ ㄞˋ ㄨˊ ㄈㄚˇ ㄩㄥˋ ㄧㄢˊ ㄩˇ ㄅㄧㄠˇ ㄉㄚˊ.',
            pinyin: 'mao1 de ke3 ai4 wu2 fa3 yong4 yan2 yu3 biao3 da2.',
            translation: '猫の可愛さは、 言葉では言い表せません。',
            memo: ''
          },
          {
            word: '公共',
            sentence: '這裡是一個公共場所， 所以不要裸身。',
            bopomofo: 'ㄓㄜˋ ㄌㄧˇ ㄕˋ ㄧˊ ㄍㄜˋ ㄍㄨㄥ ㄍㄨㄥˋ ㄔㄤˇ ㄙㄨㄛˇ, ㄙㄨㄛˇ ㄧˇ ㄅㄨˊ ㄧㄠˋ ㄌㄨㄛˇ ㄕㄣ.',
            pinyin: 'zhe4 li3 shi4 yi1 ge4 gong1 gong4 chang3 suo3, suo3 yi3 bu2 yao4 luo3 shen1.',
            translation: 'ここは公共の場所なので、 裸になっては駄目です。',
            memo: ''
          },
          {
            word: '議題',
            sentence: '喜歡的食物先吃還是留到最後吃是討論沒完沒了的議題。',
            bopomofo: 'ㄒㄧˇ ㄏㄨㄢ ㄉㄜ˙ ㄕˊ ㄨˋ ㄒㄧㄢ ㄔ ㄏㄞˊ ㄕˋ ㄌㄧㄡˊ ㄉㄠˋ ㄗㄨㄟˋ ㄏㄡˋ ㄔ ㄕˋ ㄊㄠˇ ㄌㄨㄣˋ ㄇㄟˊ ㄨㄢˊ ㄇㄟˊ ㄌㄧㄠˇ ㄉㄜ˙ ㄧˋ ㄊㄧˊ.',
            pinyin: 'xi3 huan1 de shi2 wu4 xian1 chi1 hai2 shi4 liu2 dao4 zui4 hou4 chi1 shi4 tao3 lun4 mei2 wan2 mei2 le de yi4 ti2.',
            translation: '好きな食べ物を先に食べるか最後の一口に残すかは、 議論し終わる事の無い問題です。',
            memo: ''
          },
          {
            word: '核能',
            sentence: '針對如何利用核能大家一定得花更多時間認真地討論。',
            bopomofo: 'ㄓㄣ ㄉㄨㄟˋ ㄖㄨˊ ㄏㄜˊ ㄌㄧˋ ㄩㄥˋ ㄏㄜˊ ㄋㄥˊ ㄉㄚˋ ㄐㄧㄚ ㄧˊ ㄉㄧㄥˋ ㄉㄟˇ ㄏㄨㄚ ㄍㄥˋ ㄉㄨㄛ ㄕˊ ㄐㄧㄢ ㄖㄣˋ ㄓㄣ ㄉㄜ˙ ㄊㄠˇ ㄌㄨㄣˋ.',
            pinyin: 'zhen1 dui4 ru2 he2 li4 yong4 he2 neng2 da4 jia1 yi1 ding4 dei3 hua1 geng4 duo1 shi2 jian1 ren4 zhen1 de tao3 lun4.',
            translation: '原子力の利用には、 より多くの時間を使って真剣に議論しなければいけません。',
            memo: ''
          },
          {
            word: '電廠',
            sentence: '新建的電廠給當地人帶來了就業機會。',
            bopomofo: 'ㄒㄧㄣ ㄐㄧㄢˋ ㄉㄜ˙ ㄉㄧㄢˋ ㄔㄤˇ ㄍㄟˇ ㄉㄤ ㄉㄧˋ ㄖㄣˊ ㄉㄞˋ ㄌㄞˊ ㄌㄜ˙ ㄐㄧㄡˋ ㄧㄝˋ ㄐㄧ ㄏㄨㄟˋ.',
            pinyin: 'xin1 jian4 de dian4 chang3 gei3 dang1 di4 ren2 dai4 lai2 le jiu4 ye4 ji1 hui4.',
            translation: '新しく建設された発電所は地元の人々に雇用をもたらしました。',
            memo: ''
          },
          {
            word: '由',
            sentence: '所有的果實都由猴子吃掉了。',
            bopomofo: 'ㄙㄨㄛˇ ㄧㄡˇ ㄉㄜ˙ ㄍㄨㄛˇ ㄕˊ ㄉㄡ ㄧㄡˊ ㄏㄡˊ ㄗ˙ ㄔ ㄉㄧㄠˋ ㄌㄜ˙.',
            pinyin: 'suo3 you3 de guo3 shi2 dou1 you2 hou2 zi chi1 diao4 le.',
            translation: '木の実は、 全て猿によって食べられてしまいました。',
            memo: ''
          },
          {
            word: '專家',
            sentence: '為了當IT專家現場的經驗很重要。',
            bopomofo: 'ㄨㄟˋ ㄌㄧㄠˇ ㄉㄤˋ IT ㄓㄨㄢ ㄐㄧㄚ ㄒㄧㄢˋ ㄔㄤˇ ㄉㄜ˙ ㄐㄧㄥ ㄧㄢˋ ㄏㄣˇ ㄓㄨㄥˋ ㄧㄠˋ.',
            pinyin: 'wei4 le dang1 IT zhuan1 jia1 xian4 chang3 de jing1 yan4 hen3 zhong4 yao4.',
            translation: 'ITの専門家になるには、 現場での経験がとても重要です。',
            memo: ''
          },
          {
            word: '全面',
            sentence: '需要採取全面措施， 而不是個別措施。',
            bopomofo: 'ㄒㄩ ㄧㄠˋ ㄘㄞˇ ㄑㄩˇ ㄑㄩㄢˊ ㄇㄧㄢˋ ㄘㄨㄛˋ ㄕ, ㄦˊ ㄅㄨˊ ㄕˋ ㄍㄜˋ ㄅㄧㄝˊ ㄘㄨㄛˋ ㄕ.',
            pinyin: 'xu1 yao4 cai3 qu3 quan2 mian4 cuo4 shi1, er2 bu2 shi4 ge4 bie2 cuo4 shi1.',
            translation: '個別的ではなく、 包括的な対策を講じる必要があります。',
            memo: ''
          },
          {
            word: '民意',
            sentence: '政治的方向應該靠民意。',
            bopomofo: 'ㄓㄥˋ ㄓˋ ㄉㄜ˙ ㄈㄤ ㄒㄧㄤˋ ㄧㄥ ㄍㄞ ㄎㄠˋ ㄇㄧㄣˊ ㄧˋ.',
            pinyin: 'zheng4 zhi4 de fang1 xiang4 ying1 gai1 kao4 min2 yi4.',
            translation: '政治の方向性は、 民意に委ねられるべきです。',
            memo: ''
          },
          {
            word: '代表',
            sentence: '我們俱樂部的代表有點不靠譜， 但是是個很好的人。',
            bopomofo: 'ㄨㄛˇ ㄇㄣ˙ ㄐㄩˋ ㄌㄜˋ ㄅㄨˋ ㄉㄜ˙ ㄉㄞˋ ㄅㄧㄠˇ ㄧㄡˇ ㄉㄧㄢˇ ㄅㄨˊ ㄎㄠˋ ㄆㄨˇ, ㄉㄢˋ ㄕˋ ㄕˋ ㄍㄜˋ ㄏㄣˇ ㄏㄠˇ ㄉㄜ˙ ㄖㄣˊ.',
            pinyin: 'wo3 men ju4 le4 bu4 de dai4 biao3 you3 dian3 bu2 kao4 pu3, dan4 shi4 shi4 ge4 hen3 hao3 de ren2.',
            translation: '私たちのクラブの代表は少し頼りないですが、 とてもいい人です。',
            memo: ''
          },
          {
            word: '處理',
            sentence: '那種數據的格式太舊了， 用最近的電腦不能處理。',
            bopomofo: 'ㄋㄚˋ ㄓㄨㄥˇ ㄕㄨˋ ㄐㄩˋ ㄉㄜ˙ ㄍㄜˊ ㄕˋ ㄊㄞˋ ㄐㄧㄡˋ ㄌㄜ˙, ㄩㄥˋ ㄗㄨㄟˋ ㄐㄧㄣˋ ㄉㄜ˙ ㄉㄧㄢˋ ㄋㄠˇ ㄅㄨˋ ㄋㄥˊ ㄔㄨˇ ㄌㄧˇ.',
            pinyin: 'na4 zhong3 shu4 ju4 de ge2 shi4 tai4 jiu4 le, yong4 zui4 jin4 de dian4 nao3 bu4 neng2 chu3 li3.',
            translation: 'そのデータはフォーマットが古すぎるので、 最近のコンピューターでは処理できません。',
            memo: ''
          },
          {
            word: '政黨',
            sentence: '快要選舉了， 各個政黨很熱心地參與競選活動。',
            bopomofo: 'ㄎㄨㄞˋ ㄧㄠˋ ㄒㄩㄢˇ ㄐㄩˇ ㄌㄜ˙, ㄍㄜˋ ㄍㄜˋ ㄓㄥˋ ㄉㄤˇ ㄏㄣˇ ㄖㄜˋ ㄒㄧㄣ ㄉㄜ˙ ㄘㄢ ㄩˋ ㄐㄧㄥˋ ㄒㄩㄢˇ ㄏㄨㄛˊ ㄉㄨㄥˋ.',
            pinyin: 'kuai4 yao4 xuan3 ju3 le, ge4 ge4 zheng4 tang3 hen3 re4 xin1 de can1 yu2 jing4 xuan3 huo2 dong4.',
            translation: '選挙が近いので、 各政党はそれぞれ熱心に選挙運動を行っています。',
            memo: ''
          },
          {
            word: '難道',
            sentence: '怎麼可能在沒聽見鬧鐘的情況下睡過頭了?',
            bopomofo: 'ㄗㄣˇ ㄇㄜ˙ ㄎㄜˇ ㄋㄥˊ ㄗㄞˋ ㄇㄟˊ ㄊㄧㄥ ㄐㄧㄢˋ ㄋㄠˋ ㄓㄨㄥ ㄉㄜ˙ ㄑㄧㄥˊ ㄎㄨㄤˋ ㄒㄧㄚˋ ㄕㄨㄟˋ ㄍㄨㄛˋ ㄊㄡˊ ㄌㄜ˙?',
            pinyin: 'zen3 me ke3 neng2 zai4 mei2 ting1 jian4 nao4 zhong1 de qing2 kuang4 xia4 shui4 guo4 tou2 le?',
            translation: '目覚ましの音が聞こえなくて寝坊するなんて事がまさかあるのでしょうか?',
            memo: ''
          },
          {
            word: '滿',
            sentence: '我今年滿五歲的女兒非常愛講話。',
            bopomofo: 'ㄨㄛˇ ㄐㄧㄣ ㄋㄧㄢˊ ㄇㄢˇ ㄨˇ ㄙㄨㄟˋ ㄉㄜ˙ ㄋㄩˇ ㄦˊ ㄈㄟ ㄔㄤˊ ㄞˋ ㄐㄧㄤˇ ㄏㄨㄚˋ.',
            pinyin: 'wo3 jin1 nian2 man3 wu3 sui4 de nu3 er2 fei1 chang2 ai4 jiang3 hua4.',
            translation: '今年で満5歳になる娘は、 とてもお喋りです。',
            memo: ''
          },
          {
            word: '憲法',
            sentence: '憲法頒布了， 該國朝著民主化邁出了一步。',
            bopomofo: 'ㄒㄧㄢˋ ㄈㄚˇ ㄅㄢ ㄅㄨˋ ㄌㄜ˙, ㄍㄞ ㄍㄨㄛˊ ㄔㄠˊ ㄓㄜ˙ ㄇㄧㄣˊ ㄓㄨˇ ㄏㄨㄚˋ ㄇㄞˋ ㄔㄨ ㄌㄜ˙ ㄧ ㄅㄨˋ.',
            pinyin: 'xian4 fa3 ban1 bu4 le, gai1 guo2 chao2 zhe min2 zhu3 hua4 mai4 chu1 le yi1 bu4.',
            translation: '憲法が制定され、 その国は民主化への一歩を踏み出しました。',
            memo: ''
          },
          {
            word: '投票權',
            sentence: '在投票權上, 人們的權利一定是公平的。',
            bopomofo: 'ㄗㄞˋ ㄊㄡˊ ㄆㄧㄠˋ ㄑㄩㄢˊ ㄕㄤˋ, ㄖㄣˊ ㄇㄣ˙ ㄉㄜ˙ ㄑㄩㄢˊ ㄌㄧˋ ㄧˊ ㄉㄧㄥˋ ㄕˋ ㄍㄨㄥ ㄆㄧㄥˊ ㄉㄜ˙.',
            pinyin: 'zai4 tou2 piao4 quan2 shang4, ren2 men de quan2 li4 yi1 ding4 shi4 gong1 ping2 de.',
            translation: '投票権に関しては、 人々の権利は公平でなければなりません。',
            memo: ''
          },
          {
            word: '選舉',
            sentence: '這個週末， 會選舉新市長。',
            bopomofo: 'ㄓㄜˋ ㄍㄜˋ ㄓㄡ ㄇㄛˋ, ㄏㄨㄟˋ ㄒㄩㄢˇ ㄐㄩˇ ㄒㄧㄣ ㄕˋ ㄓㄤˇ.',
            pinyin: 'zhe4 ge4 zhou1 mo4, hui4 xuan3 ju3 xin1 shi4 zhang3.',
            translation: '今週末に、 新しい市長を選ぶ選挙が行われます。',
            memo: ''
          },
          {
            word: '權利',
            sentence: '你只有給貓食物, 才得到摸貓的權利。',
            bopomofo: 'ㄋㄧˇ ㄓˇ ㄧㄡˇ ㄍㄟˇ ㄇㄠ ㄕˊ ㄨˋ, ㄘㄞˊ ㄉㄜˊ ㄉㄠˋ ㄇㄛ ㄇㄠ ㄉㄜ˙ ㄑㄩㄢˊ ㄌㄧˋ.',
            pinyin: 'ni3 zhi3 you3 gei3 mao1 shi2 wu4, cai2 de2 dao4 mo1 mao1 de quan2 li4.',
            translation: '食べ物を与えてはじめて、 猫を撫でる権利が得られます。',
            memo: ''
          },
          {
            word: '表示',
            sentence: '三天前我表明了減肥的決心， 但是好像快挫敗了。',
            bopomofo: 'ㄙㄢ ㄊㄧㄢ ㄑㄧㄢˊ ㄨㄛˇ ㄅㄧㄠˇ ㄇㄧㄥˊ ㄌㄧㄠˇ ㄐㄧㄢˇ ㄈㄟˊ ㄉㄜ˙ ㄐㄩㄝˊ ㄒㄧㄣ, ㄉㄢˋ ㄕˋ ㄏㄠˇ ㄒㄧㄤˋ ㄎㄨㄞˋ ㄘㄨㄛˋ ㄅㄞˋ ㄌㄜ.',
            pinyin: 'san1 tian1 qian2 wo3 biao3 ming2 le jian3 fei2 de jue2 xin1, dan4 shi4 hao3 xiang4 kuai4 cuo4 bai4 le.',
            translation: '三日前にダイエットする決意を表明したのですが、 もう挫折しそうです。',
            memo: '※「表示」は使えない?'
          },
          {
            word: '反映',
            sentence: '反映流行的服裝賣得很好。',
            bopomofo: 'ㄈㄢˇ ㄧㄥˋ ㄌㄧㄡˊ ㄒㄧㄥˊ ㄉㄜ˙ ㄈㄨˊ ㄓㄨㄤ ㄇㄞˋ ㄉㄜ˙ ㄏㄣˇ ㄏㄠˇ.',
            pinyin: 'fan3 ying4 liu2 xing2 de fu2 zhuang1 mai4 de hen3 hao3.',
            translation: '流行を反映した衣服はよく売れます。',
            memo: ''
          },
          {
            word: '為',
            sentence: '我為下個星期的派對準備了一件新裙子。',
            bopomofo: 'ㄨㄛˇ ㄨㄟˋ ㄒㄧㄚˋ ㄍㄜˋ ㄒㄧㄥ ㄑㄧˊ ㄉㄜ˙ ㄆㄞˋ ㄉㄨㄟˋ ㄓㄨㄣˇ ㄅㄟˋ ㄌㄜ˙ ㄧ ㄐㄧㄢˋ ㄒㄧㄣ ㄑㄩㄣˊ ㄗ˙.',
            pinyin: 'wo3 wei4 xia4 ge4 xing1 qi2 de pai4 dui4 zhun3 bei4 le yi1 jian4 xin1 qun2 zi.',
            translation: '来週のパーティの為に、 ドレスを新調しました。',
            memo: ''
          },
          {
            word: '服務',
            sentence: '他是貓奴， 因此他很樂意地每天為貓服務。',
            bopomofo: 'ㄊㄚ ㄕˋ ㄇㄠ ㄋㄨˊ, ㄧㄣ ㄘˇ ㄊㄚ ㄏㄣˇ ㄌㄜˋ ㄧˋ ㄉㄜ˙ ㄇㄟˇ ㄊㄧㄢ ㄨㄟˋ ㄇㄠ ㄈㄨˊ ㄨˋ.',
            pinyin: 'ta1 shi4 mao1 nu2, yin1 ci3 ta1 hen3 le4 yi4 de mei3 tian1 wei4 mao1 fu2 wu4.',
            translation: '彼は猫奴隷なので、 毎日喜んで猫様にご奉仕しています。',
            memo: ''
          },
          {
            word: '職位',
            sentence: '我比起為了得到更高的職位每天都加班， 我寧可維持現狀。',
            bopomofo: 'ㄨㄛˇ ㄅㄧˇ ㄑㄧˇ ㄨㄟˋ ㄌㄧㄠˇ ㄉㄜˊ ㄉㄠˋ ㄍㄥˋ ㄍㄠ ㄉㄜ˙ ㄓˊ ㄨㄟˋ ㄇㄟˇ ㄊㄧㄢ ㄉㄨ ㄐㄧㄚ ㄅㄢ, ㄨㄛˇ ㄋㄧㄥˊ ㄎㄜˇ ㄨㄟˊ ㄔˊ ㄒㄧㄢˋ ㄓㄨㄤˋ.',
            pinyin: 'wo3 bi3 qi3 wei4 le de2 dao4 geng4 gao1 de zhi2 wei4 mei3 tian1 dou1 jia1 ban1, wo3 ning2 ke3 wei2 chi2 xian4 zhuang4.',
            translation: 'ポジションが上がって毎日残業するよりは、 現状維持がいいです。',
            memo: ''
          },
          {
            word: '任期',
            sentence: '這份工作的任期是三年， 但是我在三天內就厭倦了。',
            bopomofo: 'ㄓㄜˋ ㄈㄣˋ ㄍㄨㄥ ㄗㄨㄛˋ ㄉㄜ˙ ㄖㄣˋ ㄑㄧˊ ㄕˋ ㄙㄢ ㄋㄧㄢˊ, ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄗㄞˋ ㄙㄢ ㄊㄧㄢ ㄋㄟˋ ㄐㄧㄡˋ ㄧㄢˋ ㄐㄩㄢˋ ㄌㄜ˙.',
            pinyin: 'zhe4 fen4 gong1 zuo4 de ren4 qi2 shi4 san1 nian2, dan4 shi4 wo3 zai4 san1 tian1 nei4 jiu4 yan4 juan4 le.',
            translation: 'この仕事の任期は3年なのですが、 3日で飽きてしまいました。',
            memo: ''
          },
          {
            word: '選民',
            sentence: '他是旁邊小鎮的居民， 因此他沒有這個小鎮的鎮長選舉的權利。',
            bopomofo: 'ㄊㄚ ㄕˋ ㄆㄤˊ ㄅㄧㄢ ㄒㄧㄠˇ ㄓㄣˋ ㄉㄜ˙ ㄐㄩ ㄇㄧㄣˊ, ㄧㄣ ㄘˇ ㄊㄚ ㄇㄟˊ ㄧㄡˇ ㄓㄜˋ ㄍㄜˋ ㄒㄧㄠˇ ㄓㄣˋ ㄉㄜ˙ ㄓㄣˋ ㄓㄤˇ ㄒㄩㄢˇ ㄐㄩˇ ㄉㄜ˙ ㄑㄩㄢˊ ㄌㄧˋ.',
            pinyin: 'ta1 shi4 pang2 bian1 xiao3 zhen4 de ju1 min2, yin1 ci3 ta1 mei2 you3 zhe4 ge4 xiao3 zhen4 de zhen4 zhang3 xuan3 ju3 de quan2 li4.',
            translation: '彼は隣町の住人なので、 この町の町長選の有権者ではありません。',
            memo: '※「選民」は使えない?'
          },
          {
            word: '完美',
            sentence: '他的服裝完美, 但是包包裡總是很亂。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄈㄨˊ ㄓㄨㄤ ㄨㄢˊ ㄇㄟˇ, ㄉㄢˋ ㄕˋ ㄅㄠ ㄅㄠ ㄌㄧˇ ㄗㄨㄥˇ ㄕˋ ㄏㄣˇ ㄌㄨㄢˋ.',
            pinyin: 'ta1 de fu2 zhuang1 wan2 mei3, dan4 shi4 bao1 bao1 li3 zong3 shi4 hen3 luan4.',
            translation: '彼の服装は完璧ですが、 バッグの中はいつも汚いです。',
            memo: ''
          },
          {
            word: '積極',
            sentence: '說實話， 我不太擅長對工作太積極的人。',
            bopomofo: 'ㄕㄨㄛ ㄕˊ ㄏㄨㄚˋ, ㄨㄛˇ ㄅㄨˊ ㄊㄞˋ ㄕㄢˋ ㄔㄤˊ ㄉㄨㄟˋ ㄍㄨㄥ ㄗㄨㄛˋ ㄊㄞˋ ㄐㄧ ㄐㄧˊ ㄉㄜ˙ ㄖㄣˊ.',
            pinyin: 'shuo1 shi2 hua4, wo3 bu2 tai4 shan4 chang2 dui4 gong1 zuo4 tai4 ji1 ji2 de ren2.',
            translation: '正直なところ、 仕事に積極的過ぎる人がちょっと苦手です。',
            memo: ''
          },
          {
            word: '最佳',
            sentence: '我認為日常生活的最佳溫度約為二十二, 三度。',
            bopomofo: 'ㄨㄛˇ ㄖㄣˋ ㄨㄟˊ ㄖˋ ㄔㄤˊ ㄕㄥ ㄏㄨㄛˊ ㄉㄜ˙ ㄗㄨㄟˋ ㄐㄧㄚ ㄨㄣ ㄉㄨˋ ㄩㄝ ㄨㄟˋ ㄦˋ ㄕˊ ㄦˋ, ㄙㄢ ㄉㄨˋ.',
            pinyin: 'wo3 ren4 wei2 ri4 chang2 sheng1 huo2 de zui4 jia1 wen1 du4 yue1 wei4 er4 shi2 er4, san1 du4.',
            translation: '日常生活に最適な気温は22、 23度くらいだと思います。',
            memo: ''
          },
          {
            word: '推銷員',
            sentence: '當推銷員既要口才好又要能管理時間。',
            bopomofo: 'ㄉㄤ ㄊㄨㄟ ㄒㄧㄠ ㄩㄢˊ ㄐㄧˋ ㄧㄠˋ ㄎㄡˇ ㄘㄞˊ ㄏㄠˇ ㄧㄡˋ ㄧㄠˋ ㄋㄥˊ ㄍㄨㄢˇ ㄌㄧˇ ㄕˊ ㄐㄧㄢ.',
            pinyin: 'dang1 tui1 xiao1 yuan2 ji4 yao4 kou3 cai2 hao3 you4 yao4 neng2 guan3 li3 shi2 jian1.',
            translation: 'セールスマンをするには、 話が上手くて時間の管理もできなければいけません。',
            memo: ''
          },
          {
            word: '有道理',
            sentence: '在我狹小房間裡我可以坐著就拿到東西， 我覺得很有道理。',
            bopomofo: 'ㄗㄞˋ ㄨㄛˇ ㄒㄧㄚˊ ㄒㄧㄠˇ ㄈㄤˊ ㄐㄧㄢ ㄌㄧˇ ㄨㄛˇ ㄎㄜˇ ㄧˇ ㄗㄨㄛˋ ㄓㄜ˙ ㄐㄧㄡˋ ㄋㄚˊ ㄉㄠˋ ㄉㄨㄥ ㄒㄧ˙, ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄏㄣˇ ㄧㄡˇ ㄉㄠˋ ㄌㄧ˙.',
            pinyin: 'zai4 wo3 xia2 xiao3 fang2 jian1 li3 wo3 ke3 yi3 zuo4 zhe jiu4 na2 dao4 dong1 xi, wo3 jue2 de hen3 you3 dao4 li3.',
            translation: '私の狭い部屋では何でも座ったまま取れるので、 とても理にかなっていると思います。',
            memo: ''
          },
          {
            word: '候選人',
            sentence: '那個候選人因為自己的醜聞落選了。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄏㄡˋ ㄒㄩㄢˇ ㄖㄣˊ ㄧㄣ ㄨㄟˋ ㄗˋ ㄐㄧˇ ㄉㄜ˙ ㄔㄡˇ ㄨㄣˊ ㄌㄨㄛˋ ㄒㄩㄢˇ ㄌㄜ˙.',
            pinyin: 'na4 ge4 hou4 xuan3 ren2 yin1 wei4 zi4 ji3 de chou3 wen2 luo4 xuan3 le.',
            translation: 'その候補者は、 自身のスキャンダルのせいで落選しました。',
            memo: ''
          },
          {
            word: '學術界',
            sentence: '他是在學術界最近成為話題的論文的作者。',
            bopomofo: 'ㄊㄚ ㄕˋ ㄗㄞˋ ㄒㄩㄝˊ ㄕㄨˋ ㄐㄧㄝˋ ㄗㄨㄟˋ ㄐㄧㄣˋ ㄔㄥˊ ㄨㄟˊ ㄏㄨㄚˋ ㄊㄧˊ ㄉㄜ˙ ㄌㄨㄣˋ ㄨㄣˊ ㄉㄜ˙ ㄗㄨㄛˋ ㄓㄜˇ.',
            pinyin: 'ta1 shi4 zai4 xue2 shu4 jie4 zui4 jin4 cheng2 wei2 hua4 ti2 de lun4 wen2 de zuo4 zhe3.',
            translation: '彼は、 学術界で最近話題になった論文の著者です。',
            memo: ''
          },
          {
            word: '從政',
            sentence: '她的家人三代都從政了。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄐㄧㄚ ㄖㄣˊ ㄙㄢ ㄉㄞˋ ㄉㄡ ㄘㄨㄥˊ ㄓㄥˋ ㄌㄜ˙.',
            pinyin: 'ta1 de jia1 ren2 san1 dai4 dou1 cong2 zheng4 le.',
            translation: '彼女の家族は3代にわたって政治に携わってきました。',
            memo: ''
          },
          {
            word: '政策',
            sentence: '政府的政策太愚蠢了， 國民都驚呆了。',
            bopomofo: 'ㄓㄥˋ ㄈㄨˇ ㄉㄜ˙ ㄓㄥˋ ㄘㄜˋ ㄊㄞˋ ㄩˊ ㄔㄨㄣˇ ㄌㄜ˙, ㄍㄨㄛˊ ㄇㄧㄣˊ ㄉㄡ ㄐㄧㄥ ㄉㄞ ㄌㄜ˙.',
            pinyin: 'zheng4 fu3 de zheng4 ce4 tai4 yu2 chun3 le, guo2 min2 dou1 jing1 dai1 le.',
            translation: '政府の政策があまりにも馬鹿げていたので、 国民は呆れています。',
            memo: ''
          },
          {
            word: '安定',
            sentence: '即使沒有刺激， 安定的生活是最好的。',
            bopomofo: 'ㄐㄧˊ ㄕˇ ㄇㄟˊ ㄧㄡˇ ㄘˋ ㄐㄧ, ㄢ ㄉㄧㄥˋ ㄉㄜ˙ ㄕㄥ ㄏㄨㄛˊ ㄕˋ ㄗㄨㄟˋ ㄏㄠˇ ㄉㄜ˙.',
            pinyin: 'ji2 shi3 mei2 you3 ci4 ji1, an1 ding4 de sheng1 huo2 shi4 zui4 hao3 de.',
            translation: '刺激は無くても、 安定した生活が一番です。',
            memo: ''
          },
          {
            word: '辭',
            sentence: '那個公司有太多辭職的人， 一定是黑心公司。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄍㄨㄥ ㄙ ㄧㄡˇ ㄊㄞˋ ㄉㄨㄛ ㄘˊ ㄓˊ ㄉㄜ˙ ㄖㄣˊ, ㄧˊ ㄉㄧㄥˋ ㄕˋ ㄏㄟ ㄒㄧㄣ ㄍㄨㄥ ㄙ.',
            pinyin: 'na4 ge4 gong1 si1 you3 tai4 duo1 ci2 zhi2 de ren2, yi1 ding4 shi4 hei1 xin1 gong1 si1.',
            translation: 'その会社は辞職する人が多すぎるので、 ブラック企業に違いありません。',
            memo: '※「辭」だけでは駄目?'
          },
          {
            word: '頭腦',
            sentence: '我很困惑， 所以我去冷靜頭腦一下。',
            bopomofo: 'ㄨㄛˇ ㄏㄣˇ ㄎㄨㄣˋ ㄏㄨㄛˋ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄑㄩˋ ㄌㄥˇ ㄐㄧㄥˋ ㄊㄡˊ ㄋㄠˇ ㄧ ㄒㄧㄚˋ.',
            pinyin: 'wo3 hen3 kun4 huo4, suo3 yi3 wo3 qu4 leng3 jing4 tou2 nao3 yi1 xia4.',
            translation: '混乱しているので、 ちょっと頭を冷やしてきます。',
            memo: ''
          },
          {
            word: '改革',
            sentence: '公司的制度也已經落伍了， 需要進行改革。',
            bopomofo: 'ㄍㄨㄥ ㄙ ㄉㄜ˙ ㄓˋ ㄉㄨˋ ㄧㄝˇ ㄧˇ ㄐㄧㄥ ㄌㄨㄛˋ ㄨˇ ㄌㄜ˙, ㄒㄩ ㄧㄠˋ ㄐㄧㄣˋ ㄒㄧㄥˊ ㄍㄞˇ ㄍㄜˊ.',
            pinyin: 'gong1 si1 de zhi4 du4 ye3 yi3 jing1 luo4 wu3 le, xu1 yao4 jin4 xing2 gai3 ge2.',
            translation: '会社の制度も時代遅れになってきているので、 改革が必要です。',
            memo: ''
          },
          {
            word: '看法',
            sentence: '用新的看法看事情是非常重要的。',
            bopomofo: 'ㄩㄥˋ ㄒㄧㄣ ㄉㄜ˙ ㄎㄢˋ ㄈㄚˇ ㄎㄢˋ ㄕˋ ㄑㄧㄥˊ ㄕˋ ㄈㄟ ㄔㄤˊ ㄓㄨㄥˋ ㄧㄠˋ ㄉㄜ˙.',
            pinyin: 'yong4 xin1 de kan4 fa3 kan4 shi4 qing2 shi4 fei1 chang2 zhong4 yao4 de.',
            translation: '新しい見方で物を見る事はとても大切です。',
            memo: ''
          },
          {
            word: '教育',
            sentence: '新在這一年以內會施行新的教育方式。',
            bopomofo: 'ㄒㄧㄣ ㄗㄞˋ ㄓㄜˋ ㄧ ㄋㄧㄢˊ ㄧˇ ㄋㄟˋ ㄏㄨㄟˋ ㄕ ㄒㄧㄥˊ ㄒㄧㄣ ㄉㄜ˙ ㄐㄧㄠˋ ㄩˋ ㄈㄤ ㄕˋ.',
            pinyin: 'xin1 zai4 zhe4 yi1 nian2 yi3 nei4 hui4 shi1 xing2 xin1 de jiao4 yu4 fang1 shi4.',
            translation: '新しい教育方式は今年中に施行されます。',
            memo: ''
          },
          {
            word: '方面',
            sentence: '我不熟悉金融方面的主題。',
            bopomofo: 'ㄨㄛˇ ㄅㄨˋ ㄕㄨˊ ㄒㄧ ㄐㄧㄣ ㄖㄨㄥˊ ㄈㄤ ㄇㄧㄢˋ ㄉㄧˊ ㄓㄨˇ ㄊㄧˊ.',
            pinyin: 'wo3 bu4 shu2 xi1 jin1 rong2 fang1 mian4 de zhu3 ti2.',
            translation: '金融方面の話題には疎いです。',
            memo: ''
          },
          {
            word: '得到',
            sentence: '我得到僅限今天的折扣票， 所以我要馬上去購物。',
            bopomofo: 'ㄨㄛˇ ㄉㄜˊ ㄉㄠˋ ㄐㄧㄣˇ ㄒㄧㄢˋ ㄐㄧㄣ ㄊㄧㄢ ㄉㄜ˙ ㄓㄜˊ ㄎㄡˋ ㄆㄧㄠˋ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄧㄠˋ ㄇㄚˇ ㄕㄤˇ ㄑㄩˋ ㄍㄡˋ ㄨˋ.',
            pinyin: 'wo3 de2 dao4 jin3 xian4 jin1 tian1 de zhe2 kou4 piao4, suo3 yi3 wo3 yao4 ma3 shang4 qu4 gou4 wu4.',
            translation: '本日限定の割引券をゲットしたので、 早速買い物に行ってきます。',
            memo: ''
          },
          {
            word: '連任',
            sentence: '我不認為那個議員可以連任， 因為他失言了好幾次。',
            bopomofo: 'ㄨㄛˇ ㄅㄨˊ ㄖㄣˋ ㄨㄟˊ ㄋㄚˋ ㄍㄜˋ ㄧˋ ㄩㄢˊ ㄎㄜˇ ㄧˇ ㄌㄧㄢˊ ㄖㄣˋ, ㄧㄣ ㄨㄟˋ ㄊㄚ ㄕ ㄧㄢˊ ㄌㄜ˙ ㄏㄠˇ ㄐㄧˇ ㄘˋ.',
            pinyin: 'wo3 bu2 ren4 wei2 na4 ge4 yi4 yuan2 ke3 yi3 lian2 ren4, yin1 wei4 ta1 shi1 yan2 le hao3 ji3 ci4.',
            translation: 'あの議員は失言が多いので、 再選はできないと思います。',
            memo: ''
          },
          {
            word: '屆',
            sentence: '下屆的總會會用遠端舉行。',
            bopomofo: 'ㄒㄧㄚˋ ㄐㄧㄝˋ ㄉㄜ˙ ㄗㄨㄥˇ ㄏㄨㄟˋ ㄏㄨㄟˋ ㄩㄥˋ ㄩㄢˇ ㄉㄨㄢ ㄐㄩˇ ㄒㄧㄥˊ.',
            pinyin: 'xia4 jie4 de zong3 hui4 hui4 yong4 yuan3 duan1 ju3 xing2.',
            translation: '次回の総会は、 リモートで行われます。',
            memo: ''
          },
          {
            word: '支持度',
            sentence: '執政黨的支持度在直線下降。',
            bopomofo: 'ㄓˊ ㄓㄥˋ ㄉㄤˇ ㄉㄜ˙ ㄓ ㄔˊ ㄉㄨˋ ㄗㄞˋ ㄓˊ ㄒㄧㄢˋ ㄒㄧㄚˋ ㄐㄧㄤˋ.',
            pinyin: 'zhi2 zheng4 dang3 de zhi1 chi2 du4 zai4 zhi2 xian4 xia4 jiang4.',
            translation: '与党の支持率は急落しています。',
            memo: ''
          },
          {
            word: '落選',
            sentence: '由於落選了， 他完全失去動力了。',
            bopomofo: 'ㄧㄡˊ ㄩˊ ㄌㄨㄛˋ ㄒㄩㄢˇ ㄌㄜ˙, ㄊㄚ ㄨㄢˊ ㄑㄩㄢˊ ㄕ ㄑㄩˋ ㄉㄨㄥˋ ㄌㄧˋ ㄌㄜ˙.',
            pinyin: 'you2 yu2 luo4 xuan3 le, ta1 wan2 quan2 shi1 qu4 dong4 li4 le.',
            translation: '彼は落選したので、 すっかりやる気を失くしてしまいました。',
            memo: ''
          },
          {
            word: '得票率',
            sentence: '贏得選舉的政黨的得票率超過了百分之七十。',
            bopomofo: 'ㄧㄥˊ ㄉㄜ˙ ㄒㄩㄢˇ ㄐㄩˇ ㄉㄜ˙ ㄓㄥˋ ㄉㄤˇ ㄉㄜ˙ ㄉㄜˊ ㄆㄧㄠˋ ㄌㄩˋ ㄔㄠ ㄍㄨㄛˋ ㄌㄜ˙ ㄅㄞˇ ㄈㄣ ㄓ ㄑㄧ ㄕˊ.',
            pinyin: 'ying2 de xuan3 ju3 de zheng4 dang3 de de2 piao4 lu4 chao1 guo4 le bai3 fen1 zhi1 qi1 shi2.',
            translation: '選挙に勝った政党の得票率は70%を超えました。',
            memo: ''
          },
          {
            word: '預期',
            sentence: '我以為我支持的黨會贏, 不過沒想到被出賣了。',
            bopomofo: 'ㄨㄛˇ ㄧˇ ㄨㄟˊ ㄨㄛˇ ㄓ ㄔˊ ㄉㄜ˙ ㄉㄤˇ ㄏㄨㄟˋ ㄧㄥˊ, ㄅㄨˊ ㄍㄨㄛˋ ㄇㄟˊ ㄒㄧㄤˇ ㄉㄠˋ ㄅㄟˋ ㄔㄨ ㄇㄞˋ ㄌㄜ˙.',
            pinyin: 'wo3 yi3 wei2 wo3 zhi1 chi2 de dang3 hui4 ying2, bu2 guo4 mei2 xiang3 dao4 bei4 chu1 mai4 le.',
            translation: '支持政党が勝つと思っていましたが、 期待は裏切られました。',
            memo: ''
          },
          {
            word: '暫時',
            sentence: '既然瘟疫盛行, 我們暫時在家工作。',
            bopomofo: 'ㄐㄧˋ ㄖㄢˊ ㄨㄣ ㄧˋ ㄕㄥˋ ㄒㄧㄥˊ, ㄨㄛˇ ㄇㄣ˙ ㄗㄢˋ ㄕˊ ㄗㄞˋ ㄐㄧㄚ ㄍㄨㄥ ㄗㄨㄛˋ.',
            pinyin: 'ji4 ran2 wen1 yi4 sheng4 xing2, wo3 men zan4 shi2 zai4 jia1 gong1 zuo4.',
            translation: '疫病が蔓延しているので、 一時的に在宅で仕事をします。',
            memo: ''
          },
          {
            word: '老家',
            sentence: '傳統上， 在我老家人們常吃烤內臟。',
            bopomofo: 'ㄔㄨㄢˊ ㄊㄨㄥˇ ㄕㄤˋ, ㄗㄞˋ ㄨㄛˇ ㄌㄠˇ ㄐㄧㄚ ㄖㄣˊ ㄇㄣ˙ ㄔㄤˊ ㄔ ㄎㄠˇ ㄋㄟˋ ㄗㄤˋ.',
            pinyin: 'chuan2 tong3 shang4, zai4 wo3 lao3 jia1 ren2 men chang2 chi1 kao3 nei4 zang4.',
            translation: '伝統的に、 私の故郷ではホルモンをよく食べます。',
            memo: ''
          },
          {
            word: '形象',
            sentence: '我印象她很潔癖， 我無法想像她的私生活。',
            bopomofo: 'ㄨㄛˇ ㄧㄣˋ ㄒㄧㄤˋ ㄊㄚ ㄏㄣˇ ㄐㄧㄝˊ ㄆㄧˇ, ㄨㄛˇ ㄨˊ ㄈㄚˇ ㄒㄧㄤˇ ㄒㄧㄤˋ ㄊㄚ ㄉㄜ˙ ㄙ ㄕㄥ ㄏㄨㄛˊ.',
            pinyin: 'wo3 yin4 xiang4 ta1 hen3 jie2 pi3, wo3 wu2 fa3 xiang3 xiang4 ta1 de si1 sheng1 huo2.',
            translation: '彼女は潔癖症なイメージがあるので、 私生活が想像つきません。',
            memo: '※「形象」は使えない?'
          },
          {
            word: '商量',
            sentence: '隱藏了的問題被顯露了， 因此我們必須商量對策。',
            bopomofo: 'ㄧㄣˇ ㄘㄤˊ ㄌㄜ˙ ㄉㄜ˙ ㄨㄣˋ ㄊㄧˊ ㄅㄟˋ ㄒㄧㄢˇ ㄌㄨˋ ㄌㄜ˙, ㄧㄣ ㄘˇ ㄨㄛˇ ㄇㄣ˙ ㄅㄧˋ ㄒㄩ ㄕㄤ ㄌㄧㄤˊ ㄉㄨㄟˋ ㄘㄜˋ.',
            pinyin: 'yin3 cang2 le de wen4 ti2 bei4 xian3 lu4 le, yin1 ci3 wo3 men bi4 xu1 shang1 liang2 dui4 ce4.',
            translation: '隠蔽していた問題が暴露されてしまったので、 対策を協議しなければいけません。',
            memo: ''
          },
          {
            word: '人脈',
            sentence: '我雖然知道人脈的重要， 但是到人們聚集的地方去真的很累。',
            bopomofo: 'ㄨㄛˇ ㄙㄨㄟ ㄖㄢˊ ㄓ ㄉㄠˋ ㄖㄣˊ ㄇㄞˋ ㄉㄜ˙ ㄓㄨㄥˋ ㄧㄠˋ, ㄉㄢˋ ㄕˋ ㄉㄠˋ ㄖㄣˊ ㄇㄣ˙ ㄐㄩˋ ㄐㄧˊ ㄉㄜ˙ ㄉㄧˋ ㄈㄤ ㄑㄩˋ ㄓㄣ ㄉㄜ˙ ㄏㄣˇ ㄌㄟˋ.',
            pinyin: 'wo3 sui1 ran2 zhi1 dao4 ren2 mai4 de zhong4 yao4, dan4 shi4 dao4 ren2 men ju4 ji2 de di4 fang1 qu4 zhen1 de hen3 lei4.',
            translation: '人脈の大事さは分かっているのですが、 人が集まる場所に行くのは本当に疲れます。',
            memo: ''
          },
          {
            word: '弱勢',
            sentence: '任何人都可能由於疾病或失業變成社會弱勢。',
            bopomofo: 'ㄖㄣˋ ㄏㄜˊ ㄖㄣˊ ㄉㄡ ㄎㄜˇ ㄋㄥˊ ㄧㄡˊ ㄩˊ ㄐㄧˊ ㄅㄧㄥˋ ㄏㄨㄛˋ ㄕ ㄧㄝˋ ㄅㄧㄢˋ ㄔㄥˊ ㄕㄜˋ ㄏㄨㄟˋ ㄖㄨㄛˋ ㄕˋ.',
            pinyin: 'ren4 he2 ren2 dou1 ke3 neng2 you2 yu2 ji2 bing4 huo4 shi1 ye4 bian4 cheng2 she4 hui4 ruo4 shi4.',
            translation: '病気や失業等により、 どんな人でも社会的弱者になる可能性があります。',
            memo: ''
          },
          {
            word: '退休',
            sentence: '她提早退休後， 在鄉下過著悠閒自得生活。',
            bopomofo: 'ㄊㄚ ㄊㄧˊ ㄗㄠˇ ㄊㄨㄟˋ ㄒㄧㄡ ㄏㄡˋ, ㄗㄞˋ ㄒㄧㄤ ㄒㄧㄚˋ ㄍㄨㄛˋ ㄓㄜ˙ ㄧㄡ ㄒㄧㄢˊ ㄗˋ ㄉㄜˊ ㄕㄥ ㄏㄨㄛˊ.',
            pinyin: 'ta1 ti2 zao3 tui4 xiu1 hou4, zai4 xiang1 xia4 guo4 zhe you1 xian2 zi4 de sheng1 huo2.',
            translation: '彼女は早期リタイアしたあと、 田舎で悠々自適に暮らしています。',
            memo: ''
          },
          {
            word: '事業',
            sentence: '他們聊來聊去總是跟新事業的主意有關。',
            bopomofo: 'ㄊㄚ ㄇㄣ˙ ㄌㄧㄠˊ ㄌㄞˊ ㄌㄧㄠˊ ㄑㄩˋ ㄗㄨㄥˇ ㄕˋ ㄍㄣ ㄒㄧㄣ ㄕˋ ㄧㄝˋ ㄉㄜ˙ ㄓㄨˇ ㄧˋ ㄧㄡˇ ㄍㄨㄢ.',
            pinyin: 'ta1 men liao2 lai2 liao2 qu4 zong3 shi4 gen1 xin1 shi4 ye4 de zhu3 yi4 you3 guan1.',
            translation: '彼らは口々に、 新しいビジネスのアイデアについて話しています。',
            memo: ''
          },
          {
            word: '捐',
            sentence: '大量現金匿名捐了給一個兒童保護組織。',
            bopomofo: 'ㄉㄚˋ ㄌㄧㄤˋ ㄒㄧㄢˋ ㄐㄧㄣ ㄋㄧˋ ㄇㄧㄥˊ ㄐㄩㄢ ㄌㄜ˙ ㄍㄟˇ ㄧˊ ㄍㄜˋ ㄦˊ ㄊㄨㄥˊ ㄅㄠˇ ㄏㄨˋ ㄗㄨˇ ㄓ.',
            pinyin: 'da4 liang4 xian4 jin1 ni4 ming2 juan1 le gei3 yi1 ge4 er2 tong2 bao3 hu4 zu3 zhi1.',
            translation: '多額の現金が、 匿名で児童保護団体に寄付されました。',
            memo: ''
          },
          {
            word: '義務',
            sentence: '他在海灘上義務撿垃圾。',
            bopomofo: 'ㄊㄚ ㄗㄞˋ ㄏㄞˇ ㄊㄢ ㄕㄤˋ ㄧˋ ㄨˋ ㄐㄧㄢˇ ㄌㄚ ㄐㄧ.',
            pinyin: 'ta1 zai4 hai3 tan1 shang4 yi4 wu4 jian3 la1 ji1.',
            translation: '彼は、 ボランティアでビーチのゴミ拾いをしています。',
            memo: ''
          },
          {
            word: '經費',
            sentence: '經營餐廳要花很多經費。',
            bopomofo: 'ㄐㄧㄥ ㄧㄥˊ ㄘㄢ ㄊㄧㄥ ㄧㄠˋ ㄏㄨㄚ ㄏㄣˇ ㄉㄨㄛ ㄐㄧㄥ ㄈㄟˋ.',
            pinyin: 'jing1 ying2 can1 ting1 yao4 hua1 hen3 duo1 jing1 fei4.',
            translation: '飲食店経営には、 たくさんの資金が必要です。',
            memo: ''
          },
          {
            word: '競選',
            sentence: '在競選活動中賄賂是非法的。',
            bopomofo: 'ㄗㄞˋ ㄐㄧㄥˋ ㄒㄩㄢˇ ㄏㄨㄛˊ ㄉㄨㄥˋ ㄓㄨㄥ ㄏㄨㄟˋ ㄌㄨˋ ㄕˋ ㄈㄟ ㄈㄚˇ ㄉㄜ˙.',
            pinyin: 'zai4 jing4 xuan3 huo2 dong4 zhong1 hui4 lu4 shi4 fei1 fa3 de.',
            translation: '選挙運動において、 贈収賄は違法です。',
            memo: ''
          },
          {
            word: '也許',
            sentence: '超商的牛排也許不如肉類專賣店的便宜。',
            bopomofo: 'ㄔㄠ ㄕㄤ ㄉㄜ˙ ㄋㄧㄡˊ ㄆㄞˊ ㄧㄝˇ ㄒㄩˇ ㄅㄨˋ ㄖㄨˊ ㄖㄡˋ ㄌㄟˋ ㄓㄨㄢ ㄇㄞˋ ㄉㄧㄢˋ ㄉㄜ˙ ㄆㄧㄢˊ ㄧˊ.',
            pinyin: 'chao1 shang1 de niu2 pai2 ye3 xu3 bu4 ru2 rou4 lei4 zhuan1 mai4 dian4 de pian2 yi2.',
            translation: 'スーパーのステーキは、 肉屋のステーキほど安くはないかもしれません。',
            memo: ''
          },
          {
            word: '政治界',
            sentence: '因為他從小對政治界很有興趣而成為了政治家。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄊㄚ ㄘㄨㄥˊ ㄒㄧㄠˇ ㄉㄨㄟˋ ㄓㄥˋ ㄓˋ ㄐㄧㄝˋ ㄏㄣˇ ㄧㄡˇ ㄒㄧㄥˋ ㄑㄩˋ ㄦˊ ㄔㄥˊ ㄨㄟˊ ㄌㄜ˙ ㄓㄥˋ ㄓˋ ㄐㄧㄚ.',
            pinyin: 'yin1 wei4 ta1 cong2 xiao3 dui4 zheng4 zhi4 jie4 hen3 you3 xing4 qu4 er2 cheng2 wei2 le zheng4 zhi4 jia1.',
            translation: '彼は子供の頃から政治に興味があったので、 政治家になりました。',
            memo: ''
          },
          {
            word: '權力',
            sentence: '總經理擁有絕對的權力， 沒有人可以抗拒。',
            bopomofo: 'ㄗㄨㄥˇ ㄐㄧㄥ ㄌㄧˇ ㄩㄥ ㄧㄡˇ ㄐㄩㄝˊ ㄉㄨㄟˋ ㄉㄜ˙ ㄑㄩㄢˊ ㄌㄧˋ, ㄇㄟˊ ㄧㄡˇ ㄖㄣˊ ㄎㄜˇ ㄧˇ ㄎㄤˋ ㄐㄩˋ.',
            pinyin: 'zong3 jing1 li3 yong1 you3 jue2 dui4 de quan2 li4, mei2 you3 ren2 ke3 yi3 kang4 ju4.',
            translation: '社長には絶対的な権力があり、 誰も逆らえません。',
            memo: '※「抗拒(ㄎㄤˋ ㄐㄩˋ/kang4 ju4)」 = 「忤逆(ㄨˇ ㄋㄧˋ/wu3 ni4)」でも可。'
          },
          {
            word: '辭掉',
            sentence: '他無法跟老闆相處， 結果辭掉了。',
            bopomofo: 'ㄊㄚ ㄨˊ ㄈㄚˇ ㄍㄣ ㄌㄠˇ ㄅㄢˇ ㄒㄧㄤ ㄔㄨˇ, ㄐㄧㄝˊ ㄍㄨㄛˇ ㄘˊ ㄉㄧㄠˋ ㄌㄜ˙.',
            pinyin: 'ta1 wu2 fa3 gen1 lao3 ban3 xiang1 chu3, jie2 guo3 ci2 diao4 le.',
            translation: '彼は上司と折り合いがつかず、 結局は辞職してしまいました。',
            memo: '※「到底」は使えない?'
          },
          {
            word: '提出',
            sentence: '她在提出為消滅貧困的措施。',
            bopomofo: 'ㄊㄚ ㄗㄞˋ ㄊㄧˊ ㄔㄨ ㄨㄟˋ ㄒㄧㄠ ㄇㄧㄝˋ ㄆㄧㄣˊ ㄎㄨㄣˋ ㄉㄜ˙ ㄘㄨㄛˋ ㄕ.',
            pinyin: 'ta1 zai4 ti2 chu1 wei4 xiao1 mie4 pin2 kun4 de cuo4 shi1.',
            translation: '彼女は、 貧困撲滅のための施策を提唱しています。',
            memo: ''
          },
          {
            word: '國民年金',
            sentence: '我從幾歲開始可以領到國民年金呢?',
            bopomofo: 'ㄨㄛˇ ㄘㄨㄥˊ ㄐㄧˇ ㄙㄨㄟˋ ㄎㄞ ㄕˇ ㄎㄜˇ ㄧˇ ㄌㄧㄥˇ ㄉㄠˋ ㄍㄨㄛˊ ㄇㄧㄣˊ ㄋㄧㄢˊ ㄐㄧㄣ ㄋㄜ˙?',
            pinyin: 'wo3 cong2 ji3 sui4 kai1 shi3 ke3 yi3 ling3 dao4 guo2 min2 nian2 jin1 ne?',
            translation: '国民年金は何歳から受け取れるようになりますか?',
            memo: ''
          },
          {
            word: '中間選民',
            sentence: '關鍵是如何獲得中間選民的支持。',
            bopomofo: 'ㄍㄨㄢ ㄐㄧㄢˋ ㄕˋ ㄖㄨˊ ㄏㄜˊ ㄏㄨㄛˋ ㄉㄜˊ ㄓㄨㄥˋ ㄐㄧㄢ ㄒㄩㄢˇ ㄇㄧㄣˊ ㄉㄜ˙ ㄓ ㄔˊ.',
            pinyin: 'guan1 jian4 shi4 ru2 he2 huo4 de2 zhong1 jian1 xuan3 min2 de zhi1 chi2.',
            translation: '浮動票層の支持をいかに集めるかが鍵となります。',
            memo: ''
          },
          {
            word: '一陣子',
            sentence: '我不能一下子就跟媽媽不能說出我得到零分的話來。',
            bopomofo: 'ㄨㄛˇ ㄅㄨˋ ㄋㄥˊ ㄧ ㄒㄧㄚˋ ㄗˇ ㄐㄧㄡˋ ㄍㄣ ㄇㄚ ㄇㄚ ㄅㄨˋ ㄋㄥˊ ㄕㄨㄛ ㄔㄨ ㄨㄛˇ ㄉㄜˊ ㄉㄠˋ ㄌㄧㄥˊ ㄈㄣ ㄉㄜ˙ ㄏㄨㄚˋ ㄌㄞˊ.',
            pinyin: 'wo3 bu4 neng2 yi1 xia4 zi3 jiu4 gen1 ma1 ma1 bu4 neng2 shuo1 chu1 wo3 de2 dao4 ling2 fen1 de hua4 lai2.',
            translation: '零点を取った事を、 しばらくの間お母さんに言い出せませんでした。',
            memo: '※「一陣子」は使えない?'
          },
          {
            word: '下一步',
            sentence: '他想出了好主意來， 下一步是找到合作者。',
            bopomofo: 'ㄊㄚ ㄒㄧㄤˇ ㄔㄨ ㄌㄜ˙ ㄏㄠˇ ㄓㄨˇ ㄧˋ ㄌㄞˊ, ㄒㄧㄚˋ ㄧ ㄅㄨˋ ㄕˋ ㄓㄠˇ ㄉㄠˋ ㄏㄜˊ ㄗㄨㄛˋ ㄓㄜˇ.',
            pinyin: 'ta1 xiang3 chu1 le hao3 zhu3 yi4 lai2, xia4 yi1 bu4 shi4 zhao3 dao4 he2 zuo4 zhe3.',
            translation: '彼は良いアイデアを思いついたので、 次のステップは協力者を見つける事です。',
            memo: ''
          },
          {
            word: '盡可能',
            sentence: '我們盡可能想出所有人滿意的辦法來吧。',
            bopomofo: 'ㄨㄛˇ ㄇㄣ˙ ㄐㄧㄣˋ ㄎㄜˇ ㄋㄥˊ ㄒㄧㄤˇ ㄔㄨ ㄙㄨㄛˇ ㄧㄡˇ ㄖㄣˊ ㄇㄢˇ ㄧˋ ㄉㄜ˙ ㄅㄢˋ ㄈㄚˇ ㄌㄞˊ ㄅㄚ˙.',
            pinyin: 'wo3 men jin4 ke3 neng2 xiang3 chu1 suo3 you3 ren2 man3 yi4 de ban4 fa3 lai2 ba.',
            translation: '可能な限り、 みんなが満足できる方法を考え出しましょう。',
            memo: ''
          },
          {
            word: '出版社',
            sentence: '由於紙張版本媒體的衰落， 出版社陷入了困境。',
            bopomofo: 'ㄧㄡˊ ㄩˊ ㄓˇ ㄓㄤ ㄅㄢˇ ㄅㄣˇ ㄇㄟˊ ㄊㄧˇ ㄉㄜ˙ ㄕㄨㄞ ㄌㄨㄛˋ, ㄔㄨ ㄅㄢˇ ㄕㄜˋ ㄒㄧㄢˋ ㄖㄨˋ ㄌㄜ˙ ㄎㄨㄣˋ ㄐㄧㄥˋ.',
            pinyin: 'you2 yu2 zhi3 zhang1 ban3 ben3 mei2 ti3 de shuai1 luo4, chu1 ban3 she4 xian4 ru4 le kun4 jing4.',
            translation: '紙媒体の衰退によって、 出版社は苦境に立たされています。',
            memo: ''
          },
          {
            word: '捐出',
            sentence: '每年我都捐給保護稀有動物的基金一些錢。',
            bopomofo: 'ㄇㄟˇ ㄋㄧㄢˊ ㄨㄛˇ ㄉㄡ ㄐㄩㄢ ㄍㄟˇ ㄅㄠˇ ㄏㄨˋ ㄒㄧ ㄧㄡˇ ㄉㄨㄥˋ ㄨˋ ㄉㄜ˙ ㄐㄧ ㄐㄧㄣ ㄧ ㄒㄧㄝ ㄑㄧㄢˊ.',
            pinyin: 'mei3 nian2 wo3 dou1 juan1 gei3 bao3 hu4 xi1 you3 dong4 wu4 de ji1 jin1 yi1 xie1 qian2.',
            translation: '毎年、 希少動物保護のための基金に多少のお金を寄付しています。',
            memo: '※「捐出」では駄目?'
          },
          {
            word: '二手書',
            sentence: '我檢查了附近的書店， 就是還沒有調查二手書店。',
            bopomofo: 'ㄨㄛˇ ㄐㄧㄢˇ ㄔㄚˊ ㄌㄜ˙ ㄈㄨˋ ㄐㄧㄣˋ ㄉㄜ˙ ㄕㄨ ㄉㄧㄢˋ, ㄐㄧㄡˋ ㄕˋ ㄏㄞˊ ㄇㄟˊ ㄧㄡˇ ㄉㄧㄠˋ ㄔㄚˊ ㄦˋ ㄕㄡˇ ㄕㄨ ㄉㄧㄢˋ.',
            pinyin: 'wo3 jian3 cha2 le fu4 jin4 de shu1 dian4, jiu4 shi4 hai2 mei2 you3 diao4 cha2 er4 shou3 shu1 dian4.',
            translation: '近所の本屋は全て調べましたが、 古本屋はまだです。',
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
