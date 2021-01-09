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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第7章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第7章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      data: {
        title: '當代中文課程課2・第7章',
        words: [
          {
            word: '垃圾',
            sentence: '可燃垃圾和不可燃垃圾一定得做分類。',
            bopomofo: 'ㄎㄜˇ ㄖㄢˊ ㄌㄜˋ ㄙㄜˋ ㄏㄢˋ ㄅㄨˋ ㄎㄜˇ ㄖㄢˊ ㄌㄜˋ ㄙㄜˋ ㄧˊ ㄉㄧㄥˋ ㄉㄟˇ ㄗㄨㄛˋ ㄈㄣ ㄌㄟˋ.',
            pinyin: 'ke3 ran2 le4 se4 han4 bu4 ke3 ran2 le4 se4 yi1 ding4 dei3 zuo4 fen1 lei4.',
            translation: '可燃性のゴミと不燃性のゴミは分類する必要があります。'
          },
          {
            word: '倒',
            sentence: '倒垃圾來不及了, 我看到垃圾車剛剛過去了。',
            bopomofo: 'ㄉㄠˋ ㄌㄜˋ ㄙㄜˋ ㄌㄞˊ ㄅㄨˋ ㄐㄧˊ ㄌㄜ˙, ㄨㄛˇ ㄎㄢˋ ㄉㄠˋ ㄌㄜˋ ㄙㄜˋ ㄔㄜ ㄍㄤ ㄍㄤ ㄍㄨㄛˋ ㄑㄩˋ ㄌㄜ˙.',
            pinyin: 'dao4 le4 se4 lai2 bu4 ji2 le, wo3 kan4 dao4 le4 se4 che1 gang1 gang1 guo4 qu4 le.',
            translation: 'ゴミ出しに間に合いません、 ゴミの車がたった今通りすぎたのを見ました。'
          },
          {
            word: ' 丟',
            sentence: '恐怕我的手錶丟在垃圾中了。',
            bopomofo: 'ㄎㄨㄥˇ ㄆㄚˋ ㄨㄛˇ ㄉㄜ˙ ㄕㄡˇ ㄅㄧㄠˇ ㄉㄧㄡ ㄗㄞˋ ㄌㄜˋ ㄙㄜˋ ㄓㄨㄥ ㄌㄜ˙.',
            pinyin: 'kong3 pa4 wo3 de shou3 biao3 diu1 zai4 le4 se4 zhong1 le.',
            translation: '捨てたゴミの中に腕時計があったのではないかと恐れています。'
          },
          {
            word: '收',
            sentence: '儘可能收到更多人的簽署。',
            bopomofo: 'ㄐㄧㄣˋ ㄎㄜˇ ㄋㄥˊ ㄕㄡ ㄉㄠˋ ㄍㄥˋ ㄉㄨㄛ ㄉㄜ˙ ㄖㄣˊ ㄉㄜ˙ ㄑㄧㄢ ㄕㄨˇ.',
            pinyin: 'jin4 ke3 neng2 shou1 dao4 gen4 duo1 de ren2 de qian1 shu3.',
            translation: 'できるだけ多くの人から署名を集める必要があります。'
          },
          {
            word: '以為',
            sentence: '我以為生菜和高麗菜是一樣的蔬菜。',
            bopomofo: 'ㄨㄛˇ ㄧˇ ㄨㄟˊ ㄕㄥ ㄘㄞˋ ㄏㄜˊ ㄍㄠ ㄌㄧˋ ㄘㄞˋ ㄕˋ ㄧˊ ㄧㄤˋ ㄉㄜ˙ ㄕㄨ ㄘㄞˋ.',
            pinyin: 'wo3 yi3 wei2 sheng1 cai4 han4 gao1 li4 cai4 shi4 yi1 yang4 de shu1 cai4.',
            translation: 'レタスとキャベツは同じ野菜だと思っていました。'
          },
          {
            word: '回收',
            sentence: '我總是疑惑便當盒可不可以回收。',
            bopomofo: 'ㄨㄛˇ ㄗㄨㄥˇ ㄕˋ ㄧˊ ㄏㄨㄛˋ ㄅㄧㄢˋ ㄉㄤ ㄏㄜˊ ㄎㄜˇ ㄅㄨˋ ㄎㄜˇ ㄧˇ ㄏㄨㄟˊ ㄕㄡ.',
            pinyin: 'wo3 zong3 shi4 yi2 huo4 bian4 dang1 he2 ke3 bu4 ke3 yi3 hui2 shou1.',
            translation: '弁当箱はリサイクルできるのかどうかいつも迷います。'
          },
          {
            word: '規定',
            sentence: '小學常常有奇怪的規定。',
            bopomofo: 'ㄒㄧㄠˇ ㄒㄩㄝˊ ㄔㄤˊ ㄔㄤˊ ㄧㄡˇ ㄑㄧˊ ㄍㄨㄞˋ ㄉㄜ˙ ㄍㄨㄟ ㄉㄧㄥˋ.',
            pinyin: 'xiao3 xue2 chang2 chang2 you3 qi2 guai4 de gui1 ding4.',
            translation: '小学校にはしばしば奇妙な規則があります。'
          },
          {
            word: '要不然',
            sentence: '你得捕魚, 要不然你的貓沒有晚餐吃。',
            bopomofo: 'ㄋㄧˇ ㄉㄟˇ ㄅㄨˇ ㄩˊ, ㄧㄠˋ ㄅㄨˋ ㄖㄢˊ ㄋㄧˇ ㄉㄜ˙ ㄇㄠ ㄇㄟˊ ㄧㄡˇ ㄨㄢˇ ㄘㄢ ㄔ.',
            pinyin: 'ni3 dei3 bu3 yu2, yao4 bu4 ran2 ni3 de mao1 mei2 you3 wan3 can1 chi1.',
            translation: '釣りをしないと、 あなたの猫は夕飯を食べられませんよ。'
          },
          {
            word: '皮包',
            sentence: '皮包內滿滿的發票。',
            bopomofo: 'ㄆㄧˊ ㄅㄠ ㄋㄟˋ ㄇㄢˇ ㄇㄢˇ ㄉㄜ˙ ㄈㄚ ㄆㄧㄠˋ.',
            pinyin: 'pi2 bao1 nei4 man2 man2 de fa1 piao4.',
            translation: '財布の中はレシートで一杯です。'
          },
          {
            word: '跑',
            sentence: '樓上的孩子跑來跑去的聲音很吵。',
            bopomofo: 'ㄌㄡˊ ㄕㄤˋ ㄉㄜ˙ ㄏㄞˊ ㄗ˙ ㄆㄠˇ ㄌㄞˊ ㄆㄠˇ ㄑㄩˋ ㄉㄜ˙ ㄕㄥ ㄧㄣ ㄏㄣˇ ㄔㄠˇ.',
            pinyin: 'lou2 shang4 de hai2 zi3 pao3 lai2 pao3 qu4 de sheng1 yin1 hen3 chao3.',
            translation: '上の階で子供が走っている音がすごくうるさいです。'
          },
          {
            word: '追',
            sentence: '貓追老鼠， 但是老鼠躲進洞裡了。',
            bopomofo: 'ㄇㄠ ㄓㄨㄟ ㄌㄠˇ ㄕㄨˇ， ㄉㄢˋ ㄕˋ ㄌㄠˇ ㄕㄨˇ ㄉㄨㄛˇ ㄐㄧㄣˋ ㄉㄨㄥˋ ㄌㄧˇ ㄌㄜ˙.',
            pinyin: 'mao1 zhui1 lao3 shu3, dan4 shi4 lao3 shu3 duo3 jin4 le dong4 li3 le.',
            translation: '猫はネズミを追いかけましたが、 ネズミは穴に逃げ込みました。'
          },
          {
            word: '有趣',
            sentence: '因為一直聽到鄰居的笑聲, 我覺得他看的動畫一定很有趣。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄧ ㄓˊ ㄊㄧㄥ ㄉㄠˋ ㄌㄧㄣˊ ㄐㄩ ㄉㄜ˙ ㄒㄧㄠˋ ㄕㄥ, ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄊㄚ ㄎㄢˋ ㄉㄜ˙ ㄉㄨㄥˋ ㄏㄨㄚˋ ㄧˊ ㄉㄧㄥˋ ㄏㄣˇ ㄧㄡˇ ㄑㄩˋ.',
            pinyin: 'yin1 wei4 yi1 zhi2 ting1 dao4 lin2 ju1 de xiao4 sheng1, wo3 jue2 de ta1 kan4 de dong4 hua4 yi1 ding4 hen3 you3 qu4.',
            translation: 'お隣さんの笑い声がずっと聞こえてくるので、 彼が見ているアニメは面白いに違いないです。'
          },
          {
            word: '不壞',
            sentence: '他的性格不壞， 可是他的嘴很毒.',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄒㄧㄥˋ ㄍㄜˊ ㄅㄨˊ ㄏㄨㄞˋ， ㄎㄜˇ ㄕˋ ㄊㄚ ㄉㄜ˙ ㄗㄨㄟˇ ㄏㄣˇ ㄉㄨˊ.',
            pinyin: 'ta1 de xing4 ge2 bu2 huai4, ke3 shi4 ta1 de zui3 hen3 du2.',
            translation: '彼の性格は悪く無いのですが、 口がとても悪いです。'
          },
          {
            word: '天天',
            sentence: '我的貓天天希望吃生魚片。',
            bopomofo: 'ㄨㄛˇ ㄉㄜ˙ ㄇㄠ ㄊㄧㄢ ㄊㄧㄢ ㄒㄧ ㄨㄤˋ ㄔ ㄕㄥ ㄩˊ ㄆㄧㄢˋ.',
            pinyin: 'wo3 de mao1 tian1 tian1 xi1 wang4 chi1 sheng1 yu2 pian4.',
            translation: '私の猫は毎日刺身が食べたいと思っています。'
          },
          {
            word: '汽水罐',
            sentence: '我每天喝威士忌跟氣泡水， 所以得回收很多汽水罐。',
            bopomofo: 'ㄨㄛˇ ㄇㄟˇ ㄊㄧㄢ ㄏㄜ ㄨㄟ ㄕˋ ㄐㄧˋ ㄍㄣ ㄑㄧˋ ㄆㄠˋ ㄕㄨㄟˇ， ㄙㄨㄛˇ ㄧˇ ㄉㄜˊ ㄏㄨㄟˊ ㄕㄡ ㄏㄣˇ ㄉㄨㄛ ㄑㄧˋ ㄕㄨㄟˇ ㄍㄨㄢˋ.',
            pinyin: 'wo3 mei3 tian1 he1 wei1 shi4 ji4 gen1 qi4 pao4 shui3, suo3 yi3 dei3 hui2 shou1 hen3 duo1 qi4 shui3 guan4.',
            translation: '私は毎日ハイボールを飲むので、 ソーダ缶をたくさんリサイクルに出さないといけません。'
          },
          {
            word: '紙杯',
            sentence: '賞櫻的時候用的紙杯你已經拿到嗎?',
            bopomofo: 'ㄕㄤˇ ㄧㄥ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄩㄥˋ ㄉㄜ˙ ㄓˇ ㄅㄟ ㄋㄧˇ ㄧˇ ㄐㄧㄥ ㄋㄚˊ ㄉㄠˋ ㄇㄚ˙?',
            pinyin: 'shang3 ying1 de shi2 hou4 yong4 de zhi3 bei1 ni3 yi3 jing1 na2 dao4 ma?',
            translation: '花見をする時に使う紙コップはもう持ちましたか?'
          },
          {
            word: '放下',
            sentence: '我抱的貓太胖太重了， 我於是把牠放下了。',
            bopomofo: 'ㄨㄛˇ ㄅㄠˋ ㄉㄜ˙ ㄇㄠ ㄊㄞˋ ㄆㄤˋ ㄊㄞˋ ㄓㄨㄥˋ ㄌㄜ˙， ㄨㄛˇ ㄩˊ ㄕˋ ㄅㄚˇ ㄊㄚ ㄈㄤˋ ㄒㄧㄚˋ ㄌㄜ˙.',
            pinyin: 'wo3 bao4 de mao1 tai4 pang4 tai4 zhong4 le, wo3 yu2 shi4 ba3 ta1 fang4 xia4 le.',
            translation: '私が抱っこしていた猫は太りすぎて重かったので、 ついに下に下ろしました。',
            memo: '※「於是(ㄩˊ ㄕˋ/yu2 shi4)」=「ついに」、 「終於(ㄓㄨㄥ ㄩˊ/zhong1 yu2)」=「やっと」。'
          },
          {
            word: '走出來',
            sentence: '雨停了之後很多人從超市走出來了。',
            bopomofo: 'ㄩˇ ㄊㄧㄥˊ ㄌㄜ˙ ㄓ ㄏㄡˋ ㄏㄣˇ ㄉㄨㄛ ㄖㄣˊ ㄘㄨㄥˊ ㄔㄠ ㄕˋ ㄗㄡˇ ㄔㄨ ㄌㄞˊ ㄌㄜ˙.',
            pinyin: 'yu3 ting2 le zhi1 hou4 hen3 duo1 ren2 cong2 chao1 shi4 zou3 chu1 lai2 le.',
            translation: '雨がやんだ後、 たくさんの人がスーパーマーケットから出て来ました。'
          },
          {
            word: '怎麼辦',
            sentence: '躺在電腦上的貓怎麼辦?',
            bopomofo: 'ㄊㄤˇ ㄗㄞˋ ㄉㄧㄢˋ ㄋㄠˇ ㄕㄤˋ ㄉㄜ˙ ㄇㄠ ㄗㄣˇ ㄇㄜ˙ ㄅㄢˋ?',
            pinyin: 'tang3 zai4 dian4 nao3 shang4 de mao1 zen3 me ban4?',
            translation: 'パソコンの上に横になっている猫をどうしましょうか?'
          },
          {
            word: '聊',
            sentence: '在超市每天閒人們都在聊八卦。',
            bopomofo: 'ㄗㄞˋ ㄔㄠ ㄕˋ ㄇㄟˇ ㄊㄧㄢ ㄒㄧㄢˊ ㄖㄣˊ ㄇㄣ˙ ㄉㄡ ㄗㄞˋ ㄌㄧㄠˊ ㄅㄚ ㄍㄨㄚˋ.',
            pinyin: 'zai4 chao1 shi4 mei3 tian1 xian2 ren2 men dou1 zai4 liao2 ba1 gua4.',
            translation: 'スーパーでは、 毎日暇な人たちが噂話をしています。',
            memo: '※「噂話をする」=「聊是非(ㄌㄧㄠˊ ㄕˋ ㄈㄟ/liao2 shi4 fei1)」でも可。'
          },
          {
            word: '忽然',
            sentence: '我忽然餓了, 現在差不多走不動了。',
            bopomofo: 'ㄨㄛˇ ㄏㄨ ㄖㄢˊ ㄜˋ ㄌㄜ˙, ㄒㄧㄢˋ ㄗㄞˋ ㄔㄚˋ ㄅㄨˋ ㄉㄨㄛ ㄗㄡˇ ㄅㄨˋ ㄉㄨㄥˋ ㄌㄜ˙.',
            pinyin: 'wo3 hu1 ran2 e4 le, xian4 zai4 cha1 bu4 duo1 zou3 bu2 dong4 le.',
            translation: '突然お腹が空いて、 今ほとんど歩けない状態です。',
            memo: '※「走不動(ㄗㄡˇ ㄅㄨˋ ㄉㄨㄥˋ/zou3 bu2 dong4)」=「不能走的狀態(ㄅㄨˋ ㄋㄥˊ ㄗㄡˇ ㄉㄜ˙ ㄓㄨㄤˋ ㄊㄞˋ/bu4 neng2 zou3 de zhuang4 tai4)」。'
          },
          {
            word: '聲音',
            sentence: '從路上忽然聽到很大的聲音, 每個人都很困惑。',
            bopomofo: 'ㄘㄨㄥˊ ㄌㄨˋ ㄕㄤˋ ㄏㄨ ㄖㄢˊ ㄊㄧㄥ ㄉㄠˋ ㄏㄣˇ ㄉㄚˋ ㄉㄜ˙ ㄕㄥ ㄧㄣ, ㄇㄟˇ ㄍㄜ˙ ㄖㄣˊ ㄉㄡ ㄏㄣˇ ㄎㄨㄣˋ ㄏㄨㄛˋ.',
            pinyin: 'cong2 lu4 shang4 hu1 ran2 ting1 dao4 hen3 da4 de sheng1 yin1, mei3 ge4 ren2 dou1 hen3 kun4 huo4.',
            translation: '突然道路から大きな音がしたので、 みんな困惑しました。'
          },
          {
            word: '奇怪',
            sentence: '他今天很奇怪， 肯定他在隱滿什麼。',
            bopomofo: 'ㄊㄚ ㄐㄧㄣ ㄊㄧㄢ ㄏㄣˇ ㄑㄧˊ ㄍㄨㄞˋ， ㄎㄣˇ ㄉㄧㄥˋ ㄊㄚ ㄗㄞˋ ㄧㄣˇ ㄇㄢˇ ㄕㄣˊ什ㄇㄜ˙.',
            pinyin: 'ta1 jin1 tian1 hen3 qi2 guai4, ken3 ding4 ta1 zai4 yin3 man3 shen22 me.',
            translation: '彼は今日とても変なので、 きっと何か隠していると思います。',
            memo: '※「肯定(ㄎㄣˇ ㄉㄧㄥˋ/ken3 ding4)」＝「我覺得(ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙/wo3 jue2 de)」なので、 「我肯定」とはしない。'
          },
          {
            word: '袋子',
            sentence: '購物袋子必須付錢, 所以我總是自己帶。',
            bopomofo: 'ㄍㄡˋ ㄨˋ ㄉㄞˋ ㄗ˙ ㄅㄧˋ ㄒㄩ ㄈㄨˋ ㄑㄧㄢˊ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄗㄨㄥˇ ㄕˋ ㄗˋ ㄐㄧˇ ㄉㄞˋ.',
            pinyin: 'gou4 wu4 dai4 zi3 bi4 xu1 fu4 qian2, suo3 yi3 wo3 zong3 shi4 zi4 ji3 dai4.',
            translation: '買い物袋にはお金を払わなければならないので、 私はいつも自分で持っています。'
          },
          {
            word: '輛',
            sentence: '今天有三輛汽車相撞。',
            bopomofo: 'ㄐㄧㄣ ㄊㄧㄢ ㄧㄡˇ ㄙㄢ ㄌㄧㄤˋ ㄑㄧˋ ㄔㄜ ㄒㄧㄤ ㄓㄨㄤˋ.',
            pinyin: 'jin1 tian1 you3 san1 liang4 qi4 che1 xiang1 zhuang4.',
            translation: '今日、 3台の車が衝突する事故がありました。',
            memo: '※「事故」：「相撞(ㄒㄧㄤ ㄓㄨㄤˋ/xiang1 zhuang4)」＝「互いにぶつかる」または「車禍(ㄔㄜ ㄏㄨㄛˋ/che1 huo4)」＝「車同士の事故」。'
          },
          {
            word: '一定',
            sentence: '我有一段時間持續吃一定的食物的習慣。',
            bopomofo: 'ㄨㄛˇ ㄧㄡˇ ㄧ ㄉㄨㄢˋ ㄕˊ ㄐㄧㄢ ㄔˊ ㄒㄩˋ ㄔ ㄧˊ ㄉㄧㄥˋ ㄉㄜ˙ ㄕˊ ㄨˋ ㄉㄜ˙ ㄒㄧˊ ㄍㄨㄢˋ.',
            pinyin: 'wo3 you3 yi1 duan4 shi2 jian1 chi2 xu4 chi1 yi1 ding4 de shi2 wu4 de xi2 guan4.',
            translation: '私はしばらくの間、 特定の食べ物を食べ続ける習慣があります。',
            memo: '※「持續(ㄔˊ ㄒㄩˋ/chi2 xu4)」:「習慣を続ける()」≠「繼續(ㄐㄧˋ ㄒㄩˋ/ji4 xu4)」「その動作を続ける」。'
          },
          {
            word: '地點',
            sentence: '我用中文傳達要去的地點， 但是司機再用台語問我。',
            bopomofo: 'ㄨㄛˇ ㄩㄥˋ ㄓㄨㄥ ㄨㄣˊ ㄔㄨㄢˊ ㄉㄚˊ ㄧㄠˋ ㄑㄩˋ ㄉㄜ˙ ㄉㄧˋ ㄉㄧㄢˇ， ㄉㄢˋ ㄕˋ ㄙ ㄐㄧ ㄗㄞˋ ㄩㄥˋ ㄊㄞˊ ㄩˇ ㄨㄣˋ ㄨㄛˇ.',
            pinyin: 'wo3 yong4 zhong1 wen2 chuan2 da2 yao4 qu4 de di4 dian3, dan4 shi4 si1 ji1 zai4 yong4 tai2 yu3 wen4 wo3.',
            translation: '目的地の住所を中国語で伝えましたが、 運転手さんに台湾語で聞き返されました。'
          },
          {
            word: '為了',
            sentence: '為了洗完澡後的幸福的時間， 請你把啤酒冰在冰箱裡。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄒㄧˇ ㄨㄢˊ ㄗㄠˇ ㄏㄡˋ ㄉㄜ˙ ㄒㄧㄥˋ ㄈㄨˊ ㄉㄜ˙ ㄕˊ ㄐㄧㄢ， ㄑㄧㄥˇ ㄋㄧˇ ㄅㄚˇ　ㄆㄧˊ ㄐㄧㄡˇ　ㄅㄧㄥ ㄗㄞˋ ㄅㄧㄥ ㄒㄧㄤ ㄌㄧˇ.',
            pinyin: 'wei4 le xi3 wan2 zao3 hou4 de xing4 fu2 de shi2 jian1, qing3 ni3 ba3 pi2 jiu3 bing1 zai4 bing1 xiang1 li3.',
            translation: 'シャワーの後の幸せな時間の為に、 冷蔵庫でビールを冷やしておいて下さい。'
          },
          {
            word: '保護',
            sentence: '我捐錢保護無尾熊。',
            bopomofo: 'ㄨㄛˇ ㄐㄩㄢ ㄑㄧㄢˊ ㄅㄠˇ ㄏㄨˋ ㄨˊ ㄨㄟˇ ㄒㄩㄥˊ.',
            pinyin: 'wo3 juan1 qian2 bao3 hu4 wu2 wei3 xiong2.',
            translation: 'コアラを保護するための寄付をしました。',
            memo: '※「コアラ」は台湾では主に「無尾熊(ㄨˊ ㄨㄟˇ ㄒㄩㄥˊ/wu2 wei3 xiong2)」と呼ぶ。 中国では「考拉(ㄎㄠˇ ㄌㄚ/ kao3 la1)」が多い。 ' +
              '例文は「為了保護無尾熊我捐了錢」とも書き換えられて、 文中で「動詞+動詞」の形の場合後ろの動詞は「為了」の意だが、 例文の方が自然な表現。'
          },
          {
            word: '分類',
            sentence: '根據分類， 貓和獅子屬於同一貓科。',
            bopomofo: 'ㄍㄣ ㄐㄩˋ ㄈㄣ ㄌㄟˋ， ㄇㄠ ㄏㄜˊ ㄕ ㄗ˙ ㄕㄨˇ ㄩˊ ㄊㄨㄥˊ ㄧ ㄇㄠ ㄎㄜ.',
            pinyin: 'gen1 ju4 fen lei4, mao1 han4 shi1 zi shu3 yu2 tong2 yi1 mao1 ke1.',
            translation: '分類によると、 猫とライオンは同じネコ科に属しています。'
          },
          {
            word: '利用',
            sentence: '很多媽媽利用孩子睡覺的時間做家事。',
            bopomofo: 'ㄏㄣˇ ㄉㄨㄛ ㄇㄚ ㄇㄚ ㄌㄧˋ ㄩㄥˋ ㄏㄞˊ ㄗ˙ ㄕㄨㄟˋ ㄐㄧㄠˋ ㄉㄜ˙ ㄕˊ ㄐㄧㄢ ㄗㄨㄛˋ ㄐㄧㄚ ㄕˋ.',
            pinyin: 'hen3 duo1 ma1 ma1 li4 yong4 hai2 zi3 shui4 jiao4 de shi2 jian1 zuo4 jia1 shi4.',
            translation: '多くのお母さんは子供が寝た時間を利用して家事をします。'
          },
          {
            word: '紙',
            sentence: '為了減少紙張使用量， 請避免不必要的影印。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄐㄧㄢˇ ㄕㄠˇ ㄓˇ ㄓㄤ ㄕˇ ㄩㄥˋ ㄌㄧㄤˋ， ㄑㄧㄥˇ ㄅㄧˋ ㄇㄧㄢˇ ㄅㄨˋ ㄅㄧˋ ㄧㄠˋ ㄉㄜ˙ ㄧㄥˇ ㄧㄣˋ.',
            pinyin: 'wei4 le jian3 shao3 zhi3 zhang1 shi3 yong4 liang4, qing3 bi4 mian3 bu2 bi4 yao4 de ying3 yin4.',
            translation: '紙の使用量を減らすために、 無駄なコピーは避けて下さい。',
            memo: '※「コピーする」は台湾では主に「影印(ㄧㄥˇ ㄧㄣˋ/ying3 yin4)」と言う。 中国では「複印(ㄈㄨˋ ㄧㄣˋ/fu4 yin4)」が多い。 ' +
              'ちなみに、 「印刷する」は台湾では「列印(ㄌㄧㄝˋ ㄧㄣˋ/lie4 yin4)」、中国では「打印(ㄉㄚˇ ㄧㄣˋ/da3 yin4)」が多い。'
          },
          {
            word: '瓶子',
            sentence: '請你把破掉的瓶子用報紙包起來丟掉。',
            bopomofo: 'ㄑㄧㄥˇ ㄋㄧˇ ㄅㄚˇ ㄆㄛˋ ㄉㄧㄠˋ ㄉㄜ˙ ㄆㄧㄥˊ ㄗ˙ ㄩㄥˋ ㄅㄠˋ ㄓˇ ㄅㄠ ㄑㄧˇ ㄌㄞˊ ㄉㄧㄡ ㄉㄧㄠˋ.',
            pinyin: 'qing3 ni3 ba3 po4 diao4 de ping2 zi3 yong4 bao4 zhi3 bao1 qi3 lai2 diu1 diao4.',
            translation: '割れた瓶は新聞に包んで捨ててください。',
            memo: '※「包起來(ㄅㄠ ㄑㄧˇ ㄌㄞˊ/ bao1 qi3 lai2)」は、 「包(包む)」+「起來(上げる)」 → 「包み上げる」感じ。'
          },
          {
            word: '塑膠',
            sentence: '有時候我可能會覺得塑膠包裝過多。',
            bopomofo: 'ㄧㄡˇ ㄕˊ ㄏㄡˋ ㄨㄛˇ ㄎㄜˇ ㄋㄥˊ ㄏㄨㄟˋ ㄐㄩㄝˊ ㄉㄜ˙ ㄙㄨˋ ㄐㄧㄠ ㄅㄠ ㄓㄨㄤ ㄍㄨㄛˋ ㄉㄨㄛ.',
            pinyin: 'you3 shi2 hou4 wo3 ke3 neng2 hui4 jue2 de su4 jiao1 bao1 zhuang1 guo4 duo1.',
            translation: 'プラスチックの包装は過剰だと感じる時があります。'
          },
          {
            word: '資源',
            sentence: '紙, 塑膠等那類的資源都能回收。',
            bopomofo: 'ㄓˇ, ㄙㄨˋ ㄐㄧㄠ ㄉㄥˇ ㄋㄚˋ ㄌㄟˋ類(ㄓㄨㄥˇ種)ㄉㄜ˙的 ㄗ ㄩㄢˊ ㄉㄡ ㄋㄥˊ ㄏㄨㄟˊ ㄕㄡ.',
            pinyin: 'zhi3, su4 jiao1 deng3 na4 lei4 zhong3 de zi1 yuan2 dou1 neng2 hui2 shou1.',
            translation: '紙やプラスチックなどの資源はリサイクルできます。',
            memo: '※「那類(ㄋㄚˋ ㄌㄟˋ/na4 lei4)」は、「那種(ㄋㄚˋ ㄓㄨㄥˇ/na4 zhong3)」でも可。'
          },
          {
            word: '回收桶',
            sentence: '別把一般垃圾放進回收桶。',
            bopomofo: 'ㄅㄧㄝˊ ㄅㄚˇ ㄧˋ ㄅㄢ ㄌㄜˋ ㄙㄜˋ ㄈㄤˋ ㄐㄧㄣˋ ㄏㄨㄟˊ ㄕㄡ ㄊㄨㄥˇ.',
            pinyin: 'bie2 ba3 yi1 ban1 le4 se4 fang4 jin4 hui2 shou1 tong3.',
            translation: '一般ゴミをリサイクルボックスに入れないで下さい。'
          },
          {
            word: '城市',
            sentence: '根據城市的公告， 年初年底不收垃圾。',
            bopomofo: 'ㄍㄣ ㄐㄩˋ ㄔㄥˊ ㄕˋ ㄉㄜ˙ ㄍㄨㄥ ㄍㄠˋ， ㄋㄧㄢˊ ㄔㄨ ㄋㄧㄢˊ ㄉㄧˇ ㄅㄨˋ ㄕㄡ ㄌㄜˋ ㄙㄜˋ .',
            pinyin: 'gen1 ju4 cheng2 shi4 de gong1 gao4, nian2 chu1 nian2 di3 bu4 shou1 le4 se4.',
            translation: '市のお知らせによると、 年末年始のゴミ収集はありません。',
            memo: '※中国語では「年末年始」とは言わない。'
          },
          {
            word: '聽見',
            sentence: '我聽見外面傳來醉漢的歌聲。',
            bopomofo: 'ㄨㄛˇ ㄊㄧㄥ ㄐㄧㄢˋ ㄨㄞˋ ㄇㄧㄢˋ ㄔㄨㄢˊ　ㄌㄞˊ　ㄗㄨㄟˋ ㄏㄢˋ ㄉㄜ˙ ㄍㄜ ㄕㄥ.',
            pinyin: 'wo3 ting1 jian4 wai4 mian4 chuan2 lai2 zui4 han4 de ge1 sheng1.',
            translation: '外から酔っぱらいの歌声が聞こえます。'
          },
          {
            word: '開過來',
            sentence: '校車會開過來接孩子們。',
            bopomofo: 'ㄒㄧㄠˋ ㄔㄜ ㄏㄨㄟˋ ㄎㄞ ㄍㄨㄛˋ ㄌㄞˊ ㄐㄧㄝ ㄏㄞˊ ㄗ˙ ㄇㄣ˙.',
            pinyin: 'xiao4 che1 hui4 kai1 guo4 lai2 jie1 hai2 zi3 men.',
            translation: 'スクールバスが子供たちを迎えに来ます。'
          },
          {
            word: '走過來',
            sentence: '有一個阿媽走過來, 她拿著看起來很重的帶子, 我們過去幫忙吧!',
            bopomofo: 'ㄧㄡˇ ㄧˊ ㄍㄜˋ ㄚ ㄇㄚ ㄗㄡˇ ㄍㄨㄛˋ ㄌㄞˊ, ㄊㄚ ㄋㄚˊ ㄓㄜ˙ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄏㄣˇ ㄓㄨㄥˋ ㄉㄜ˙ ㄉㄞˋ ㄗ˙, ㄨㄛˇ ㄇㄣ˙ ㄍㄨㄛˋ ㄑㄩˋ ㄅㄤ ㄇㄤˊ ㄅㄚ˙!',
            pinyin: 'you3 yi1 ge4 a1 ma1 zou3 guo4 lai2, ta1 na2 zhe kan4 qi3 lai2 hen3 zhong4 de dai4 zi3, wo3 men guo4 qu4 bang1 mang2 ba!',
            translation: 'おばあさんが歩いてきますが、 とても重そうな袋を持っているので、手伝いましょう!'
          },
          {
            word: '丟進去',
            sentence: '他把捲起的衛生紙丟進垃圾桶去。',
            bopomofo: 'ㄊㄚ ㄅㄚˇ ㄐㄩㄢˇ ㄑㄧˇ ㄉㄜ˙ ㄨㄟˋ ㄕㄥ ㄓˇ ㄉㄧㄡ ㄐㄧㄣˋ ㄌㄜˋ ㄙㄜˋ ㄊㄨㄥˇ ㄑㄩˋ .',
            pinyin: 'ta1 ba3 juan3 qi3 de wei4 sheng1 zhi3 diu1 jin4 le4 se4 tong3 qu4.',
            translation: '彼は丸めたティッシュペーパーをゴミ箱に投げ入れました。'
          },
          {
            word: '路上',
            sentence: '有人將垃圾倒在路上, 所以烏鴉聚在一起。',
            bopomofo: 'ㄧㄡˇ ㄖㄣˊ ㄐㄧㄤ ㄌㄜˋ ㄙㄜˋ ㄉㄠˋ ㄗㄞˋ ㄌㄨˋ ㄕㄤˋ, ㄙㄨㄛˇ ㄧˇ ㄨ ㄧㄚ ㄐㄩˋ ㄗㄞˋ ㄧˋ ㄑㄧˇ.',
            pinyin: 'you3 ren2 jiang1 le4 se4 dao4 zai4 lu4 shang4, suo3 yi3 wu1 ya1 ju4 zai4 yi1 qi3.',
            translation: '誰かが道路にゴミを捨てたので、カラスが集まっています。'
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
