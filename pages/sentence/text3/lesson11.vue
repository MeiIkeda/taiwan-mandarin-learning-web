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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第11章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第11章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      // 単語数：85
      data: {
        title: '當代中文課程課3・第11章',
        words: [
          {
            word: '建',
            sentence: '我的房子前面建了一棟公寓房， 日光變差了。',
            bopomofo: 'ㄨㄛˇ ㄉㄜ˙ ㄈㄤˊ ㄗ˙ ㄑㄧㄢˊ ㄇㄧㄢˋ ㄐㄧㄢˋ ㄌㄜ˙ ㄧ ㄉㄨㄥˋ ㄍㄨㄥ ㄩˋ ㄈㄤˊ, ㄖˋ ㄍㄨㄤ ㄅㄧㄢˋ ㄔㄚ ㄌㄜ˙.',
            pinyin: 'wo3 de fang2 zi qian2 mian4 jian4 le yi1 dong4 gong1 yu4 fang2, ri4 guang1 bian4 cha1 le.',
            translation: '家の前に集合住宅が建てられ、 日当たりが悪くなりました。',
            memo: ''
          },
          {
            word: '重建',
            sentence: '需要花費相當的精力來重建信任關係。',
            bopomofo: 'ㄒㄩ ㄧㄠˋ ㄏㄨㄚ ㄈㄟˋ ㄒㄧㄤ ㄉㄤ ㄉㄜ˙ ㄐㄧㄥ ㄌㄧˋ ㄌㄞˊ ㄔㄨㄥˊ ㄐㄧㄢˋ ㄒㄧㄣˋ ㄖㄣˋ ㄍㄨㄢ ㄒㄧˋ.',
            pinyin: 'xu1 yao4 hua1 fei4 xiang1 dang1 de jing1 li4 lai2 chong2 jian4 xin4 ren4 guan1 xi4.',
            translation: '信頼関係を再構築するには、 それなりの努力が必要です。',
            memo: ''
          },
          {
            word: '到底',
            sentence: '員工也發表意見， 但是到底由老闆來決定。',
            bopomofo: 'ㄩㄢˊ ㄍㄨㄥ ㄧㄝˇ ㄈㄚ ㄅㄧㄠˇ ㄧˋ ㄐㄧㄢˋ, ㄉㄢˋ ㄕˋ ㄉㄠˋ ㄉㄧˇ ㄧㄡˊ ㄌㄠˇ ㄅㄢˇ ㄌㄞˊ ㄐㄩㄝˊ ㄉㄧㄥˋ.',
            pinyin: 'yuan2 gong1 ye3 fa1 biao3 yi4 jian4, dan4 shi4 dao4 di3 you2 lao3 ban3 lai2 jue2 ding4.',
            translation: '従業員も意見は出しますが、 最終的には上司が決めます。',
            memo: '※「由」 : 「～によって」。'
          },
          {
            word: '世紀',
            sentence: '那位百萬富翁購買了幾世紀前做的古董家具。',
            bopomofo: 'ㄋㄚˋ ㄨㄟˋ ㄅㄞˇ ㄨㄢˋ ㄈㄨˋ ㄨㄥ ㄍㄡˋ ㄇㄞˇ ㄌㄜ˙ ㄐㄧˇ ㄕˋ ㄐㄧˋ ㄑㄧㄢˊ ㄗㄨㄛˋ ㄉㄜ˙ ㄍㄨˇ ㄉㄨㄥˇ ㄐㄧㄚ ㄐㄩˋ.',
            pinyin: 'na4 wei4 bai3 wan4 fu4 weng1 gou4 mai3 le ji3 shi4 ji4 qian2 zuo4 de gu3 dong3 jia1 ju4.',
            translation: 'その大富豪は、 数世紀前のアンティーク家具を購入しました。',
            memo: ''
          },
          {
            word: '貿易',
            sentence: '在主要港口附近有很多貿易公司。',
            bopomofo: 'ㄗㄞˋ ㄓㄨˇ ㄧㄠˋ ㄍㄤˇ ㄎㄡˇ ㄈㄨˋ ㄐㄧㄣˋ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄇㄠˋ ㄧˋ ㄍㄨㄥ ㄙ.',
            pinyin: 'zai4 zhu3 yao4 gang3 kou3 fu4 jin4 you3 hen3 duo1 mao4 yi4 gong1 si1.',
            translation: '主要な港の近くには、 貿易会社が多くあります。',
            memo: ''
          },
          {
            word: '★商業',
            sentence: '他正在考慮使用當地特產品的新事業（生意）。',
            bopomofo: 'ㄊㄚ ㄓㄥˋ ㄗㄞˋ ㄎㄠˇ ㄌㄩˋ ㄕˇ ㄩㄥˋ ㄉㄤ ㄉㄧˋ ㄊㄜˋ ㄔㄢˇ ㄆㄧㄣˇ ㄉㄜ˙ ㄒㄧㄣ ㄕˋ ㄧㄝˋ (ㄕㄥ ㄧˋ).',
            pinyin: 'ta1 zheng4 zai4 kao3 lu4 shi3 yong4 dang1 di4 te4 chan3 pin3 de xin1 shi4 ye4 (sheng1 yi4).',
            translation: '彼は、 地元の特産品を使った新しいビジネスを検討しています。',
            memo: '※「商業」は使えない?'
          },
          {
            word: '★利益',
            sentence: '老闆希望三年以內她的公司可以得到利益。',
            bopomofo: 'ㄌㄠˇ ㄅㄢˇ ㄒㄧ ㄨㄤˋ ㄙㄢ ㄋㄧㄢˊ ㄧˇ ㄋㄟˋ ㄊㄚ ㄉㄜ˙ ㄍㄨㄥ ㄙ ㄎㄜˇ ㄧˇ ㄉㄜˊ ㄉㄠˋ ㄌㄧˋ ㄧˋ.',
            pinyin: 'lao3 ban3 xi1 wang4 san1 nian2 yi3 nei4 ta1 de gong1 si1 ke3 yi3 de2 dao4 li4 yi4.',
            translation: '社長は、 3年以内に会社が利益を得ることができるようになると予想しています。',
            memo: '※「希望」で「予想している」という意味にもなる? 「利益(ㄌㄧˋ ㄧˋ/li4 yi4)」は「收益(ㄕㄡ ㄧˋ/shou1 yi4)」でも可。'
          },
          {
            word: '派',
            sentence: '她被公司派去跟海外企業做生意。',
            bopomofo: 'ㄊㄚ ㄅㄟˋ ㄍㄨㄥ ㄙ ㄆㄞˋ ㄑㄩˋ ㄍㄣ ㄏㄞˇ ㄨㄞˋ ㄑㄧˋ ㄧㄝˋ ㄗㄨㄛˋ ㄕㄥ ㄧˋ.',
            pinyin: 'ta1 bei4 gong1 si1 pai4 qu4 gen1 hai3 wai4 qi4 ye4 zuo4 sheng1 yi4.',
            translation: '海外の企業と取引するために、 彼女は会社から派遣されました。',
            memo: ''
          },
          {
            word: '軍隊',
            sentence: '兩國軍隊都在邊界附近積極進行軍事演習， 緊張的氣氛正在加劇。',
            bopomofo: 'ㄌㄧㄤˇ ㄍㄨㄛˊ ㄐㄩㄣ ㄉㄨㄟˋ ㄉㄡ ㄗㄞˋ ㄅㄧㄢ ㄐㄧㄝˋ ㄈㄨˋ ㄐㄧㄣˋ ㄐㄧ ㄐㄧˊ ㄐㄧㄣˋ ㄒㄧㄥˊ ㄐㄩㄣ ㄕˋ ㄧㄢˇ ㄒㄧˊ, ㄐㄧㄣˇ ㄓㄤ ㄉㄜ˙ ㄑㄧˋ ㄈㄣ ㄓㄥˋ ㄗㄞˋ ㄐㄧㄚ ㄐㄩˋ.',
            pinyin: 'liang3 guo2 jun1 dui4 dou1 zai4 bian1 jie4 fu4 jin4 ji1 ji2 jin4 xing2 jun1 shi4 yan3 xi2, jin3 zhang1 de qi4 fen1 zheng4 zai4 jia1 ju4.',
            translation: '両国の軍隊は国境付近で盛んに軍事演習を行い、 緊張が高まっています。',
            memo: '※「加劇(ㄐㄧㄚ ㄐㄩˋ/jia1 ju4)」は「升高(ㄕㄥ ㄍㄠ/sheng1 gao1)」「高漲(ㄍㄠ ㄓㄤˇ/gao1 zhang3」でも可。'
          },
          {
            word: '★燒',
            sentence: '當我嘗試點煙時， 我不小心用打火機點燃的火燒到了劉海。',
            bopomofo: 'ㄉㄤ ㄨㄛˇ ㄔㄤˊ ㄕˋ ㄉㄧㄢˇ ㄧㄢ ㄕˊ, ㄨㄛˇ ㄅㄨˋ ㄒㄧㄠˇ ㄒㄧㄣ ㄩㄥˋ ㄉㄚˇ ㄏㄨㄛˇ ㄐㄧ ㄉㄧㄢˇ ㄖㄢˊ ㄉㄜ˙ ㄏㄨㄛˇ ㄕㄠ ㄉㄠˋ ㄌㄜ˙ ㄌㄧㄡˊ ㄏㄞˇ.',
            pinyin: 'dang1 wo3 chang2 shi4 dian3 yan1 shi2, wo3 bu4 xiao3 xin1 yong4 da3 huo3 ji1 dian3 ran2 de huo3 shao1 dao4 le liu2 hai3.',
            translation: 'タバコに火をつけようとした時、 誤ってライターの炎で前髪も燃やしてしまいました。',
            memo: '※「火(ㄏㄨㄛˇ/huo3)」は「焰(ㄧㄢˋ/yan4)」でも可。 「點燃(ㄉㄧㄢˇ ㄖㄢˊ/dian3 ran2)」 : 「火をつけて燃やす」。'
          },
          {
            word: '城牆',
            sentence: '士兵們正在在城牆上警戒。',
            bopomofo: 'ㄕˋ ㄅㄧㄥ ㄇㄣ˙ ㄓㄥˋ ㄗㄞˋ ㄗㄞˋ ㄔㄥˊ ㄑㄧㄤˊ ㄕㄤˋ ㄐㄧㄥˇ ㄐㄧㄝˋ.',
            pinyin: 'shi4 bing1 men zheng4 zai4 zai4 cheng2 qiang2 shang4 jing3 jie4.',
            translation: '城壁の上で、 兵隊さんが見張りをしています。',
            memo: ''
          },
          {
            word: '頭髮',
            sentence: '我的頭髮和她的差不多一樣長。',
            bopomofo: 'ㄨㄛˇ ㄉㄜ˙ ㄊㄡˊ ㄈㄚˇ ㄏㄢˋ ㄊㄚ ㄉㄜ˙ ㄔㄚˋ ㄅㄨˋ ㄉㄨㄛ ㄧˊ ㄧㄤˋ ㄔㄤˊ.',
            pinyin: 'wo3 de tou2 fa3 han4 ta1 de cha1 bu4 duo1 yi1 yang4 chang2.',
            translation: '私の髪は、 彼女とほぼ同じ長さです。',
            memo: ''
          },
          {
            word: '★甚至',
            sentence: '連十年來的第一次相聚, 他都不會來。',
            bopomofo: 'ㄌㄧㄢˊ ㄕˊ ㄋㄧㄢˊ ㄌㄞˊ ㄉㄜ˙ ㄉㄧˋ ㄧ ㄘˋ ㄒㄧㄤ ㄐㄩˋ, ㄊㄚ ㄉㄡ ㄅㄨˊ ㄏㄨㄟˋ ㄌㄞˊ.',
            pinyin: 'lian2 shi2 nian2 lai2 de di4 yi1 ci4 xiang1 ju4, ta1 dou1 bu2 hui4 lai2.',
            translation: '10年来の集まりにすら、 彼は姿を見せません。',
            memo: '※「甚至」は使えない?'
          },
          {
            word: '打仗',
            sentence: '由於打長期的仗， 難民一直湧向鄰國。',
            bopomofo: 'ㄧㄡˊ ㄩˊ ㄉㄚˇ ㄔㄤˊ ㄑㄧˊ ㄉㄜ˙ ㄓㄤˋ, ㄋㄢˋ ㄇㄧㄣˊ ㄧ ㄓˊ ㄩㄥˇ ㄒㄧㄤˋ ㄌㄧㄣˊ ㄍㄨㄛˊ.',
            pinyin: 'you2 yu2 da3 chang2 qi2 de zhang4, nan2 min2 yi1 zhi2 yong3 xiang4 lin2 guo2.',
            translation: '長い戦争のせいで、 隣国には難民が押し寄せています。',
            memo: ''
          },
          {
            word: '★少數',
            sentence: '少數民族之間的衝突演變成混戰一場。',
            bopomofo: 'ㄕㄠˇ ㄕㄨˋ ㄇㄧㄣˊ ㄗㄨˊ ㄓ ㄐㄧㄢ ㄉㄜ˙ ㄔㄨㄥ ㄊㄨˊ ㄧㄢˇ ㄅㄧㄢˋ ㄔㄥˊ ㄏㄨㄣˋ ㄓㄢˋ ㄧ ㄔㄤˇ.',
            pinyin: 'shao3 shu4 min2 zu2 zhi1 jian1 de chong1 tu2 yan3 bian4 cheng2 hun4 zhan4 yi1 chang3.',
            translation: '少数民族同士の対立は泥沼の内戦に発展しました。',
            memo: '※この「演」の意味は? 「泥沼の内戦」は「泥潭的內戰(ㄋㄧˊ ㄊㄢˊ ㄉㄜ˙ ㄋㄟˋ ㄓㄢˋ)」ではおかしい?'
          },
          {
            word: '★開墾',
            sentence: '開墾這片土地了的農民大多數都是從外國(的?)來的移民。',
            bopomofo: 'ㄎㄞ ㄎㄣˇ ㄓㄜˋ ㄆㄧㄢˋ ㄊㄨˇ ㄉㄧˋ ㄌㄜ˙ ㄉㄜ˙ ㄋㄨㄥˊ ㄇㄧㄣˊ ㄉㄚˋ ㄉㄨㄛ ㄕㄨˋ ㄉㄡ ㄕˋ ㄘㄨㄥˊ ㄨㄞˋ ㄍㄨㄛˊ (ㄉㄜ˙) ㄌㄞˊ ㄉㄜ˙ ㄧˊ ㄇㄧㄣˊ.',
            pinyin: 'kai1 ken3 zhe4 pian4 tu3 di4 le de nong2 min2 da4 duo1 shu4 dou1 shi4 cong2 wai4 guo2 (de) lai2 de yi2 min2.',
            translation: 'この土地を開墾した農民は、 ほとんどが外国からの移民です。',
            memo: ''
          },
          {
            word: '將軍',
            sentence: '他是自從建國以來最勇敢而聰明的將軍。',
            bopomofo: 'ㄊㄚ ㄕˋ ㄗˋ ㄘㄨㄥˊ ㄐㄧㄢˋ ㄍㄨㄛˊ ㄧˇ ㄌㄞˊ ㄗㄨㄟˋ ㄩㄥˇ ㄍㄢˇ ㄦˊ ㄘㄨㄥ ㄇㄧㄥˊ ㄉㄜ˙ ㄐㄧㄤ ㄐㄩㄣ.',
            pinyin: 'ta1 shi4 zi4 cong2 jian4 guo2 yi3 lai2 zui4 yong3 gan3 er2 cong1 ming2 de jiang1 jun1.',
            translation: '彼は、 建国以来最も勇敢で聡明な将軍です。',
            memo: ''
          },
          {
            word: '軍人',
            sentence: '他不是徵兵而是職業軍人。',
            bopomofo: 'ㄊㄚ ㄅㄨˊ ㄕˋ ㄓㄥ ㄅㄧㄥ ㄦˊ ㄕˋ ㄓˊ ㄧㄝˋ ㄐㄩㄣ ㄖㄣˊ.',
            pinyin: 'ta1 bu2 shi4 zheng1 bing1 er2 shi4 zhi2 ye4 jun1 ren2.',
            translation: '彼は徴兵された兵士ではなく、 職業軍人です。',
            memo: ''
          },
          {
            word: '平原',
            sentence: '這個平原不適合農業， 所以畜產業很興旺。',
            bopomofo: 'ㄓㄜˋ ㄍㄜˋ ㄆㄧㄥˊ ㄩㄢˊ ㄅㄨˊ ㄕˋ ㄏㄜˊ ㄋㄨㄥˊ ㄧㄝˋ, ㄙㄨㄛˇ ㄧˇ ㄒㄩˋ ㄔㄢˇ ㄧㄝˋ ㄏㄣˇ ㄒㄧㄥ ㄨㄤˋ.',
            pinyin: 'zhe4 ge4 ping2 yuan2 bu2 shi4 he2 nong2 ye4, suo3 yi3 xu4 chan3 ye4 hen3 xing1 wang4.',
            translation: 'この平原は農業には適さないため、 畜産が盛んです。',
            memo: ''
          },
          {
            word: '人口',
            sentence: '長期不景氣也助長了人口下降。',
            bopomofo: 'ㄔㄤˊ ㄑㄧˊ ㄅㄨˋ ㄐㄧㄥˇ ㄑㄧˋ ㄧㄝˇ ㄓㄨˋ ㄓㄤˇ ㄌㄜ˙ ㄖㄣˊ ㄎㄡˇ ㄒㄧㄚˋ ㄐㄧㄤˋ.',
            pinyin: 'chang2 qi2 bu4 jing3 qi4 ye3 zhu4 zhang3 le ren2 kou3 xia4 jiang4.',
            translation: '長引く不況も、 人口減少の一因です。',
            memo: ''
          },
          {
            word: '★血統',
            sentence: '我跟伯母沒有血緣關係。',
            bopomofo: 'ㄨㄛˇ ㄍㄣ ㄅㄛˊ ㄇㄨˇ ㄇㄟˊ ㄧㄡˇ ㄒㄧㄝˇ ㄩㄢˊ ㄍㄨㄢ ㄒㄧˋ.',
            pinyin: 'wo3 gen1 bo2 mu3 mei2 you3 xie3 yuan2 wan1 xi4.',
            translation: '父方の伯父さんの奥さんと私には、 血縁関係がありません。',
            memo: '※血縁関係の表現→「父方の伯父さんの奥さん」は「大媽」ではない? 「伯母さん」は友達のお母さん? ここでは「血統」は使えない?'
          },
          {
            word: '嘍',
            sentence: '如果免費, 你一定會去那家酒吧喝啤酒嘍?',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄇㄧㄢˇ ㄈㄟˋ, ㄋㄧˇ ㄧˊ ㄉㄧㄥˋ ㄏㄨㄟˋ ㄑㄩˋ ㄋㄚˋ ㄐㄧㄚ ㄐㄧㄡˇ ㄅㄚ ㄏㄜ ㄆㄧˊ ㄐㄧㄡˇ ㄌㄡˊ?',
            pinyin: 'ru2 guo3 mian3 fei4, ni3 yi1 ding4 hui4 qu4 na4 jia1 jiu3 ba1 he1 pi2 jiu3 lou2?',
            translation: 'もしタダなら、 間違いなくそのバーにビールを飲みに行くんじゃないですか?',
            memo: ''
          },
          {
            word: '孫子',
            sentence: '奶奶很愛她的孫子， 總是太寵著他。',
            bopomofo: 'ㄋㄞˇ ㄋㄞ˙ ㄏㄣˇ ㄞˋ ㄊㄚ ㄉㄜ˙ ㄙㄨㄣ ㄗ˙, ㄗㄨㄥˇ ㄕˋ ㄊㄞˋ ㄔㄨㄥˇ ㄓㄜ˙ ㄊㄚ.',
            pinyin: 'nai3 nai hen3 ai4 ta1 de sun1 zi, zong3 shi4 tai4 chong3 zhe ta1.',
            translation: 'おばあさんは孫をとても可愛がっていて、 いつも甘やかしすぎてしまいます。',
            memo: ''
          },
          {
            word: '領土',
            sentence: '每個國家多少都有領土問題。',
            bopomofo: 'ㄇㄟˇ ㄍㄜˋ ㄍㄨㄛˊ ㄐㄧㄚ ㄉㄨㄛ ㄕㄠˇ ㄉㄡ ㄧㄡˇ ㄌㄧㄥˇ ㄊㄨˇ ㄨㄣˋ ㄊㄧˊ.',
            pinyin: 'mei3 ge4 guo2 jia1 duo1 shao3 dou1 you3 ling3 tu3 wen4 ti2.',
            translation: 'どの国にも多少の領土問題は存在します。',
            memo: ''
          },
          {
            word: '男性',
            sentence: '要說是哪一個的話,　該商品在男性中受歡迎。',
            bopomofo: 'ㄧㄠˋ ㄕㄨㄛ ㄕˋ ㄋㄚˇ ㄧ ㄍㄜ˙ ㄉㄜ˙ ㄏㄨㄚˋ, ㄍㄞ ㄕㄤ ㄆㄧㄣˇ ㄗㄞˋ ㄋㄢˊ ㄒㄧㄥˋ ㄓㄨㄥ ㄕㄡˋ ㄏㄨㄢ ㄧㄥˊ.',
            pinyin: 'yao4 shuo1 shi4 na3 yi1 ge4 de hua4, gai1 shang1 pin3 zai4 nan2 xing4 zhong1 shou4 huan1 ying2.',
            translation: 'この製品は、　どちらかと言うと男性に人気があります。',
            memo: ''
          },
          {
            word: '禁止',
            sentence: '禁止亂扔垃圾後， 路上變得相當乾淨了。',
            bopomofo: 'ㄐㄧㄣˋ ㄓˇ ㄌㄨㄢˋ ㄖㄥ ㄌㄜˋ ㄙㄜˋ ㄏㄡˋ, ㄌㄨˋ ㄕㄤˋ ㄅㄧㄢˋ ㄉㄜ˙ ㄒㄧㄤ ㄉㄤ ㄍㄢ ㄐㄧㄥˋ ㄌㄜ˙.',
            pinyin: 'jin4 zhi3 luan4 reng1 la4 se4 hou4, lu4 shang4 bian4 de xiang1 dang1 gan1 jing4 le.',
            translation: 'ポイ捨てを禁止してから、 道路はかなり綺麗になりました。',
            memo: ''
          },
          {
            word: '娶',
            sentence: '自從娶了妻子以來， 他似乎每天都過得很幸福。',
            bopomofo: 'ㄗˋ ㄘㄨㄥˊ ㄑㄩˇ ㄌㄜ˙ ㄑㄧ ㄗˇ ㄧˇ ㄌㄞˊ, ㄊㄚ ㄙˋ ㄏㄨ ㄇㄟˇ ㄊㄧㄢ ㄉㄨ ㄍㄨㄛˋ ㄉㄜ˙ ㄏㄣˇ ㄒㄧㄥˋ ㄈㄨˊ.',
            pinyin: 'zi4 cong2 qu3 le qi1 zi3 yi3 lai2, ta1 si4 hu1 mei3 tian1 dou1 guo4 de hen3 xing4 fu2.',
            translation: 'お嫁さんを貰ってから、 彼は毎日幸せそうです。',
            memo: ''
          },
          {
            word: '相信',
            sentence: '我不能相信他麻將比賽中排名了前十名。',
            bopomofo: 'ㄨㄛˇ ㄅㄨˋ ㄋㄥˊ ㄒㄧㄤ ㄒㄧㄣˋ ㄊㄚ ㄇㄚˊ ㄐㄧㄤ ㄅㄧˇ ㄙㄞˋ ㄓㄨㄥ ㄆㄞˊ ㄇㄧㄥˊ ㄌㄜ˙ ㄑㄧㄢˊ ㄕˊ ㄇㄧㄥˊ.',
            pinyin: 'wo3 bu4 neng2 xiang1 xin4 ta1 ma2 jiang1 bi3 sai4 zhong1 pai2 ming2 le qian2 shi2 ming2.',
            translation: '彼が麻雀大会でトップ10に入ったなんて、 信じられません。',
            memo: ''
          },
          {
            word: '精彩',
            sentence: '她的嘻哈舞蹈表演得非常精彩。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄒㄧ ㄏㄚ ㄨˇ ㄉㄠˇ ㄅㄧㄠˇ ㄧㄢˇ ㄉㄜˊ ㄈㄟ ㄔㄤˊ ㄐㄧㄥ ㄘㄞˇ.',
            pinyin: 'ta1 de xi1 ha1 wu3 dao3 biao3 yan3 de fei1 chang2 jing1 cai3.',
            translation: '彼女のヒップホップダンスのパフォーマンスは大変素晴らしいものでした。',
            memo: ''
          },
          {
            word: '紅毛城',
            sentence: '紅毛城最初是西班牙人建造的城堡。',
            bopomofo: 'ㄏㄨㄥˊ ㄇㄠˊ ㄔㄥˊ ㄗㄨㄟˋ ㄔㄨ ㄕˋ ㄒㄧ ㄅㄢ ㄧㄚˊ ㄖㄣˊ ㄐㄧㄢˋ ㄗㄠˋ ㄉㄜ˙ ㄔㄥˊ ㄅㄠˇ.',
            pinyin: 'hong2 mao2 cheng2 zui4 chu1 shi4 xi1 ban1 ya2 ren2 jian4 zao4 de cheng2 bao3.',
            translation: '紅毛城は、 元々スペイン人が建てた城です。',
            memo: ''
          },
          {
            word: '東方',
            sentence: '絲綢是從東方被帶到西方的物品之一。',
            bopomofo: 'ㄙ ㄔㄡˊ ㄕˋ ㄘㄨㄥˊ ㄉㄨㄥ ㄈㄤ ㄅㄟˋ ㄉㄞˋ ㄉㄠˋ ㄒㄧ ㄈㄤ ㄉㄜ˙ ㄨˋ ㄆㄧㄣˇ ㄓ ㄧ.',
            pinyin: 'si1 chou2 shi4 cong2 dong1 fang1 bei4 dai4 dao4 xi1 fang1 de wu4 pin3 zhi1 yi1.',
            translation: '東洋から西洋にもたらされた品物の1つに、 シルクがあります。',
            memo: ''
          },
          {
            word: '淡水',
            sentence: '從台北車站到淡水可以不轉車去嗎?',
            bopomofo: 'ㄘㄨㄥˊ ㄊㄞˊ ㄅㄟˇ ㄔㄜ ㄓㄢˋ ㄉㄠˋ ㄉㄢˋ ㄕㄨㄟˇ ㄎㄜˇ ㄧˇ ㄅㄨˋ ㄓㄨㄢˇ ㄔㄜ ㄑㄩˋ ㄇㄚ˙?',
            pinyin: 'cong2 tai2 bei3 che1 zhan4 dao4 dan4 shui3 ke3 yi3 bu4 zhuan3 che1 qu4 ma?',
            translation: '淡水までは、 台北メインステーションから一本で行けますか?',
            memo: ''
          },
          {
            word: '漢人',
            sentence: '漢人安家落戶所在的唐人街遍布世界各地。',
            bopomofo: 'ㄏㄢˋ ㄖㄣˊ ㄢ ㄐㄧㄚ ㄌㄨㄛˋ ㄏㄨˋ ㄙㄨㄛˇ ㄗㄞˋ ㄉㄜ˙ ㄊㄤˊ ㄖㄣˊ ㄐㄧㄝ ㄅㄧㄢˋ ㄅㄨˋ ㄕˋ ㄐㄧㄝˋ ㄍㄜˋ ㄉㄧˋ.',
            pinyin: 'han4 ren2 an1 jia1 luo4 hu4 suo3 zai4 de tang2 ren2 jie1 bian4 bu4 shi4 jie4 ge4 di4.',
            translation: '漢民族が移り住んだ中華街は、 世界の至る所に点在します。',
            memo: '※「安家落戶(ㄢ ㄐㄧㄚ ㄌㄨㄛˋ ㄏㄨˋ/an1 jia1 luo4 hu4)」 : 「住みつく」。'
          },
          {
            word: '鄭成功',
            sentence: '台南的安平古堡以鄭成功洋芋片作為紀念品販賣。',
            bopomofo: 'ㄊㄞˊ ㄋㄢˊ ㄉㄜ˙ ㄢ ㄆㄧㄥˊ ㄍㄨˇ ㄅㄠˇ ㄧˇ ㄓㄥˋ ㄔㄥˊ ㄍㄨㄥ ㄧㄤˊ ㄩˋ ㄆㄧㄢˋ ㄗㄨㄛˋ ㄨㄟˊ ㄐㄧˋ ㄋㄧㄢˋ ㄆㄧㄣˇ ㄈㄢˋ ㄇㄞˋ.',
            pinyin: 'tai2 nan2 de an1 ping2 gu3 bao3 yi3 zheng4 cheng2 gong1 yang2 yu4 pian4 zuo4 wei2 ji4 nian4 pin3 fan4 mai4.',
            translation: '台南の安平古堡は、 鄭成功ポテトチップスをお土産に販売しています。',
            memo: ''
          },
          {
            word: '明朝',
            sentence: '故宮是在明朝時代建造的。',
            bopomofo: 'ㄍㄨˋ ㄍㄨㄥ ㄕˋ ㄗㄞˋ ㄇㄧㄥˊ ㄔㄠˊ ㄕˊ ㄉㄞˋ ㄐㄧㄢˋ ㄗㄠˋ ㄉㄜ˙.',
            pinyin: 'gu4 gong1 shi4 zai4 ming2 chao2 shi2 dai4 jian4 zao4 de.',
            translation: '紫禁城は、 明朝の時代に建てられました。',
            memo: ''
          },
          {
            word: '中南美洲',
            sentence: '如果你去中南美洲， 會說西班牙語是很有利的。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄑㄩˋ ㄓㄨㄥ ㄋㄢˊ ㄇㄟˇ ㄓㄡ, ㄏㄨㄟˋ ㄕㄨㄛ ㄒㄧ ㄅㄢ ㄧㄚˊ ㄩˇ ㄕˋ ㄏㄣˇ ㄧㄡˇ ㄌㄧˋ ㄉㄜ˙.',
            pinyin: 'ru2 guo3 ni3 qu4 zhong1 nan2 mei3 zhou1, hui4 shuo1 xi1 ban1 ya2 yu3 shi4 hen3 you3 li4 de.',
            translation: '中南米に行くなら、 スペイン語ができると有利です。',
            memo: ''
          },
          {
            word: '清朝',
            sentence: '清朝是中國最後一個統一的朝代。',
            bopomofo: 'ㄑㄧㄥ ㄔㄠˊ ㄕˋ ㄓㄨㄥ ㄍㄨㄛˊ ㄗㄨㄟˋ ㄏㄡˋ ㄧˊ ㄍㄜˋ ㄊㄨㄥˇ ㄧ ㄉㄜ˙ ㄔㄠˊ ㄉㄞˋ.',
            pinyin: 'qing1 chao2 shi4 zhong1 guo2 zui4 hou4 yi1 ge4 tong3 yi1 de chao2 dai4.',
            translation: '清朝は、 中国最後の統一王朝です。',
            memo: ''
          },
          {
            word: '大清帝國',
            sentence: '大清帝國是一個龐大的國家， 包括今天的中國和蒙古。',
            bopomofo: 'ㄉㄚˋ ㄑㄧㄥ ㄉㄧˋ ㄍㄨㄛˊ ㄕˋ ㄧˊ ㄍㄜˋ ㄆㄤˊ ㄉㄚˋ ㄉㄜ˙ ㄍㄨㄛˊ ㄐㄧㄚ, ㄅㄠ ㄎㄨㄛˋ ㄐㄧㄣ ㄊㄧㄢ ㄉㄜ˙ ㄓㄨㄥ ㄍㄨㄛˊ ㄏㄢˋ ㄇㄥˊ ㄍㄨˇ.',
            pinyin: 'da4 qing1 di4 guo2 shi4 yi1 ge4 pang2 da4 de guo2 jia1, bao1 kuo4 jin1 tian1 de zhong1 guo2 han4 meng2 gu3.',
            translation: '大清帝国は、 現在の中国とモンゴル等も含む巨大な国でした。',
            memo: ''
          },
          {
            word: '輪到',
            sentence: '我的家人輪流做晚飯， 明天輪到爸爸了。',
            bopomofo: 'ㄨㄛˇ ㄉㄜ˙ ㄐㄧㄚ ㄖㄣˊ ㄌㄨㄣˊ ㄌㄧㄡˊ ㄗㄨㄛˋ ㄨㄢˇ ㄈㄢˋ, ㄇㄧㄥˊ ㄊㄧㄢ ㄌㄨㄣˊ ㄉㄠˋ ㄅㄚˋ ㄅㄚ˙ ㄌㄜ˙.',
            pinyin: 'wo3 de jia1 ren2 lun2 liu2 zuo4 wan3 fan4, ming2 tian1 lun2 dao4 ba4 ba le.',
            translation: '家族で交代で夕飯作りをしていて、 明日はお父さんの番です。',
            memo: ''
          },
          {
            word: '十七世紀初',
            sentence: '十七世紀初, 世界上第一家股份制公司成立了。',
            bopomofo: 'ㄕˊ ㄑㄧ ㄕˋ ㄐㄧˋ ㄔㄨ, ㄕˋ ㄐㄧㄝˋ ㄕㄤ˙ ㄉㄧˋ ㄧ ㄐㄧㄚ ㄍㄨˇ ㄈㄣˋ ㄓˋ ㄍㄨㄥ ㄙ ㄔㄥˊ ㄌㄧˋ ㄌㄜ˙.',
            pinyin: 'shi2 qi1 shi4 ji4 chu1, shi4 jie4 shang4 di4 yi1 jia1 gu3 fen4 zhi4 gong1 si1 cheng2 li4 le.',
            translation: '17世紀初頭、 世界初の株式会社が設立されました。',
            memo: ''
          },
          {
            word: '打敗',
            sentence: '終於人工智能打敗了圍棋冠軍。',
            bopomofo: 'ㄓㄨㄥ ㄩˊ ㄖㄣˊ ㄍㄨㄥ ㄓˋ ㄋㄥˊ ㄉㄚˇ ㄅㄞˋ ㄌㄜ˙ ㄨㄟˊ ㄑㄧˊ ㄍㄨㄢˋ ㄐㄩㄣ.',
            pinyin: 'zhong1 yu2 ren2 gong1 zhi4 neng2 da3 bai4 le wei2 qi2 guan4 jun1.',
            translation: 'ついに、 AIが囲碁のチャンピオンを打ち負かしました。',
            memo: ''
          },
          {
            word: '十七世紀末',
            sentence: '萬有引力定律是在十七世紀末發表的。',
            bopomofo: 'ㄨㄢˋ ㄧㄡˇ ㄧㄣˇ ㄌㄧˋ ㄉㄧㄥˋ ㄌㄩˋ ㄕˋ ㄗㄞˋ ㄕˊ ㄑㄧ ㄕˋ ㄐㄧˋ ㄇㄛˋ ㄈㄚ ㄅㄧㄠˇ ㄉㄜ˙.',
            pinyin: 'wan4 you3 yin3 li4 ding4 lu4 shi4 zai4 shi2 qi1 shi4 ji4 mo4 fa1 biao3 de.',
            translation: '万有引力の法則は、 17世紀の末に発表されました。',
            memo: ''
          },
          {
            word: '★餐桌',
            sentence: '在餐桌上餐具已經被整齊地排放好了。',
            bopomofo: 'ㄗㄞˋ ㄘㄢ ㄓㄨㄛ ㄕㄤˋ ㄘㄢ ㄐㄩˋ ㄧˇ ㄐㄧㄥ ㄅㄟˋ ㄓㄥˇ ㄑㄧˊ ㄉㄜ˙ ㄆㄞˊ ㄈㄤˋ ㄏㄠˇ ㄌㄜ˙.',
            pinyin: 'zai4 can1 zhuo1 shang4 can1 ju4 yi3 jing1 bei4 zheng3 qi2 de pai2 fang4 hao3 le.',
            translation: 'ダイニングテーブルには、 既に食器がきちんとセッティングされています。',
            memo: '※「排放(ㄆㄞˊ ㄈㄤˋ/pai2 fang4)」で「セッティングする」?'
          },
          {
            word: '中式',
            sentence: '中式餐桌可以旋轉， 很方便拿到菜。',
            bopomofo: 'ㄓㄨㄥ ㄕˋ ㄘㄢ ㄓㄨㄛ ㄎㄜˇ ㄧˇ ㄒㄩㄢˊ ㄓㄨㄢˇ, ㄏㄣˇ ㄈㄤ ㄅㄧㄢˋ ㄋㄚˊ ㄉㄠˋ ㄘㄞˋ.',
            pinyin: 'zhong1 shi4 can1 zhuo1 ke3 yi3 xuan2 zhuan3, hen3 fang1 bian4 na2 dao4 cai4.',
            translation: '中華風のダイニングテーブルは回転するので、 料理を取るのに便利です。',
            memo: ''
          },
          {
            word: '套',
            sentence: '似乎缺少了刀叉， 可以拿幾套給我嗎?',
            bopomofo: 'ㄙˋ ㄏㄨ ㄑㄩㄝ ㄕㄠˇ ㄌㄜ˙ ㄉㄠ ㄔㄚ, ㄎㄜˇ ㄧˇ ㄋㄚˊ ㄐㄧˇ ㄊㄠˋ ㄍㄟˇ ㄨㄛˇ ㄇㄚ˙?',
            pinyin: 'si4 hu1 que1 shao3 le dao1 cha1, ke3 yi3 na2 ji3 tao4 gei3 wo3 ma?',
            translation: 'ナイフとフォークが足りないみたいなので、 何セットか持ってきてもらえませんか?',
            memo: ''
          },
          {
            word: '★燒餅',
            sentence: '那家店的很受歡迎的燒餅, 我沒想到(光?)才兩個小時就都賣光了。',
            bopomofo: 'ㄋㄚˋ ㄐㄧㄚ ㄉㄧㄢˋ ㄉㄜ˙ ㄏㄣˇ ㄕㄡˋ ㄏㄨㄢ ㄧㄥˊ ㄉㄜ˙ ㄕㄠ ㄅㄧㄥˇ, ㄨㄛˇ ㄇㄟˊ ㄒㄧㄤˇ ㄉㄠˋ (ㄍㄨㄤ?) ㄘㄞˊ ㄌㄧㄤˇ ㄍㄜˋ ㄒㄧㄠˇ ㄕˊ ㄐㄧㄡˋ ㄉㄡ ㄇㄞˋ ㄍㄨㄤ ㄌㄜ˙.',
            pinyin: 'na4 jia1 dian4 de hen3 shou4 huan1 ying2 de shao1 bing3, wo3 mei2 xiang3 dao4 (guang1?) cai2 liang3 ge4 xiao3 shi2 jiu4 dou1 mai4 guang1 le.',
            translation: 'その店で人気の燒餅が、 たった2時間で完売するとは思ってもみませんでした。',
            memo: ''
          },
          {
            word: '油條',
            sentence: '油條浸泡在豆漿裡一起吃很美味。',
            bopomofo: 'ㄧㄡˊ ㄊㄧㄠˊ ㄐㄧㄣˋ ㄆㄠˋ ㄗㄞˋ ㄉㄡˋ ㄐㄧㄤ ㄌㄧˇ ㄧˋ ㄑㄧˇ ㄔ ㄏㄣˇ ㄇㄟˇ ㄨㄟˋ.',
            pinyin: 'you2 tiao2 jin4 pao4 zai4 dou4 jiang1 li3 yi1 qi3 chi1 hen3 mei3 wei4.',
            translation: '油條を豆乳に浸して一緒に食べると美味しいです。',
            memo: ''
          },
          {
            word: '飯糰',
            sentence: '午餐， 我用飯糰簡單地吃完。',
            bopomofo: 'ㄨˇ ㄘㄢ, ㄨㄛˇ ㄩㄥˋ ㄈㄢˋ ㄊㄨㄢˊ ㄐㄧㄢˇ ㄉㄢ ㄉㄜ˙ ㄔ ㄨㄢˊ.',
            pinyin: 'wu3 can1, wo3 yong4 fan4 tuan2 jian3 dan1 de chi1 wan2.',
            translation: 'お昼ご飯は、 おにぎりで簡単に済ませます。',
            memo: ''
          },
          {
            word: '豆漿',
            sentence: '取決於原料的豆類， 可以做出很多不同的豆漿。',
            bopomofo: 'ㄑㄩˇ ㄐㄩㄝˊ ㄩˊ ㄩㄢˊ ㄌㄧㄠˋ ㄉㄜ˙ ㄉㄡˋ ㄌㄟˋ, ㄎㄜˇ ㄧˇ ㄗㄨㄛˋ ㄔㄨ ㄏㄣˇ ㄉㄨㄛ ㄅㄨˋ ㄊㄨㄥˊ ㄉㄜ˙ ㄉㄡˋ ㄐㄧㄤ.',
            pinyin: 'qu3 jue2 yu2 yuan2 liao4 de dou4 lei4, ke3 yi3 zuo4 chu1 hen3 duo1 bu4 tong2 de dou4 jiang1.',
            translation: '原料にする豆によって、 様々な種類の豆乳ができます。',
            memo: ''
          },
          {
            word: '內戰',
            sentence: '內戰給國民帶來貧困, 人口的一半流離失所。',
            bopomofo: 'ㄋㄟˋ ㄓㄢˋ ㄍㄟˇ ㄍㄨㄛˊ ㄇㄧㄣˊ ㄉㄞˋ ㄌㄞˊ ㄆㄧㄣˊ ㄎㄨㄣˋ, ㄖㄣˊ ㄎㄡˇ ㄉㄜ˙ ㄧ ㄅㄢˋ ㄌㄧㄡˊ ㄌㄧˊ ㄕ ㄙㄨㄛˇ.',
            pinyin: 'nei4 zhan4 gei3 guo2 min2 dai4 lai2 pin2 kun4, ren2 kou3 de yi1 ban4 liu2 li2 shi1 suo3.',
            translation: '内戦は人々に貧困をもたらし、 人口の半分は家を失いました。',
            memo: '※「流離失所(ㄌㄧㄡˊ ㄌㄧˊ ㄕ ㄙㄨㄛˇ/liu2 li2 shi1 suo3)」 : 「(戦禍の中で)流浪する、 さまよう」。'
          },
          {
            word: '人民',
            sentence: '中產階級人民的生活是相似的。',
            bopomofo: 'ㄓㄨㄥ ㄔㄢˇ ㄐㄧㄝ ㄐㄧˊ ㄖㄣˊ ㄇㄧㄣˊ ㄉㄜ˙ ㄕㄥ ㄏㄨㄛˊ ㄕˋ ㄒㄧㄤ ㄙˋ ㄉㄜ˙.',
            pinyin: 'zhong1 chan3 jie1 ji2 ren2 min2 de sheng1 huo2 shi4 xiang1 si4 de.',
            translation: '中流階級の人々の暮らしは似たり寄ったりです。',
            memo: ''
          },
          {
            word: '攤子',
            sentence: '有幾家賣相同小吃的攤子， 但是我喜歡那家店的口味。',
            bopomofo: 'ㄧㄡˇ ㄐㄧˇ ㄐㄧㄚ ㄇㄞˋ ㄒㄧㄤˋ ㄊㄨㄥˊ ㄒㄧㄠˇ ㄔ ㄉㄜ˙ ㄊㄢ ㄗ˙, ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄒㄧˇ ㄏㄨㄢ ㄋㄚˋ ㄐㄧㄚ ㄉㄧㄢˋ ㄉㄜ˙ ㄎㄡˇ ㄨㄟˋ.',
            pinyin: 'you3 ji3 jia1 mai4 xiang1 tong2 xiao3 chi1 de tan1 zi, dan4 shi4 wo3 xi3 huan1 na4 jia1 dian4 de kou3 wei4.',
            translation: '同じスナックを売っている屋台はいくつかありますが、 私はあの店の味がお気に入りです。',
            memo: ''
          },
          {
            word: '菜單',
            sentence: '他不會說當地的語言, 所以靠餐廳菜單上的照片點菜。',
            bopomofo: 'ㄊㄚ ㄅㄨˊ ㄏㄨㄟˋ ㄕㄨㄛ ㄉㄤ ㄉㄧˋ ㄉㄜ˙ ㄩˇ ㄧㄢˊ, ㄙㄨㄛˇ ㄧˇ ㄎㄠˋ ㄘㄢ ㄊㄧㄥ ㄘㄞˋ ㄉㄢ ㄕㄤˋ ㄉㄜ˙ ㄓㄠˋ ㄆㄧㄢ ㄉㄧㄢˇ ㄘㄞˋ.',
            pinyin: 'ta1 bu2 hui4 shuo1 dang1 di4 de yu3 yan2, suo3 yi3 kao4 can1 ting1 cai4 dan1 shang4 de zhao4 pian4 dian3 cai4.',
            translation: '彼は地元の言葉を話せないので、 レストランのメニューの写真を使って注文します。',
            memo: ''
          },
          {
            word: '蘿萄',
            sentence: '收穫了直徑大概十厘米的大蘿蔔。',
            bopomofo: 'ㄕㄡ ㄏㄨㄛˋ ㄌㄜ˙ ㄓˊ ㄐㄧㄥˋ ㄉㄚˋ ㄍㄞˋ ㄕˊ ㄌㄧˊ ㄇㄧˇ ㄉㄜ˙ ㄉㄚˋ ㄌㄨㄛˊ ㄅㄛ˙.',
            pinyin: 'shou1 huo4 le zhi2 jing4 da4 gai4 shi2 li2 mi3 de da4 luo2 bo.',
            translation: '直径およそ10センチメートルの立派な大根が採れました。',
            memo: ''
          },
          {
            word: '接著',
            sentence: '她打開了窗戶， 接著把洗好的衣服收進來了。',
            bopomofo: 'ㄊㄚ ㄉㄚˇ ㄎㄞ ㄌㄜ˙ ㄔㄨㄤ ㄏㄨˋ, ㄐㄧㄝ ㄓㄜ˙ ㄅㄚˇ ㄒㄧˇ ㄏㄠˇ ㄉㄜ˙ ㄧ ㄈㄨˊ ㄕㄡ ㄐㄧㄣˋ ㄌㄞˊ ㄌㄜ˙.',
            pinyin: 'ta1 da3 kai1 le chuang1 hu4, jie1 zhe ba3 xi3 hao3 de yi1 fu2 shou1 jin4 lai2 le.',
            translation: '彼女は窓を開けてすぐに、 洗濯物を取り込みました。',
            memo: ''
          },
          {
            word: '戰爭',
            sentence: '那位演員的演過的電影我什麼都看過了, 就是這個戰爭片我還沒看。',
            bopomofo: 'ㄋㄚˋ ㄨㄟˋ ㄧㄢˇ ㄩㄢˊ ㄉㄜ˙ ㄧㄢˇ ㄍㄨㄛˋ ㄉㄜ˙ ㄉㄧㄢˋ ㄧㄥˇ ㄨㄛˇ ㄕㄣˊ ㄇㄜ˙ ㄉㄡ ㄎㄢˋ ㄍㄨㄛˋ ㄌㄜ˙, ㄐㄧㄡˋ ㄕˋ ㄓㄜˋ ㄍㄜˋ ㄓㄢˋ ㄓㄥ ㄆㄧㄢˋ ㄨㄛˇ ㄏㄞˊ ㄇㄟˊ ㄎㄢˋ.',
            pinyin: 'na4 wei4 yan3 yuan2 de yan3 guo4 de dian4 ying3 wo3 shen2 me dou1 kan4 guo4 le, jiu4 shi4 zhe4 ge4 zhan4 zheng1 pian4 wo3 hai2 mei2 kan4.',
            translation: 'あの俳優が演じたもの映画は全て見ましたが、 この戦争映画は見たことがありません。',
            memo: '※「什麼都.., 就是..」。'
          },
          {
            word: '不断',
            sentence: '因為他接連不斷地提問， 她終於生氣了。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄊㄚ ㄐㄧㄝ ㄌㄧㄢˊ ㄅㄨˊ ㄉㄨㄢˋ ㄉㄜ˙ ㄊㄧˊ ㄨㄣˋ, ㄊㄚ ㄓㄨㄥ ㄩˊ ㄕㄥ ㄑㄧˋ ㄌㄜ˙.',
            pinyin: 'yin1 wei4 ta1 jie1 lian2 bu2 duan4 de ti2 wen4, ta1 zhong1 yu2 sheng1 qi4 le.',
            translation: '彼がひっきりなしに質問したので、 彼女はとうとう怒り出してしまいました。',
            memo: '※「接連不斷(ㄐㄧㄝ ㄌㄧㄢˊ ㄅㄨˊ ㄉㄨㄢˋ/jie1 lian2 bu2 duan4)」 : 「絶え間なく」。'
          },
          {
            word: '遷移',
            sentence: '我想引進一個新系統， 但是我擔心數據遷移是否會成功。',
            bopomofo: 'ㄨㄛˇ ㄒㄧㄤˇ ㄧㄣˇ ㄐㄧㄣˋ ㄧˊ ㄍㄜˋ ㄒㄧㄣ ㄒㄧˋ ㄊㄨㄥˇ, ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄉㄢ ㄒㄧㄣ ㄕㄨˋ ㄐㄩˋ ㄑㄧㄢ ㄧˊ ㄕˋ ㄈㄡˇ ㄏㄨㄟˋ ㄔㄥˊ ㄍㄨㄥ.',
            pinyin: 'wo3 xiang3 yin3 jin4 yi1 ge4 xin1 xi4 tong3, dan4 shi4 wo3 dan1 xin1 shu4 ju4 qian1 yi2 shi4 fou3 hui4 cheng2 gong1.',
            translation: '新しいシステムを導入したいのですが、 データ移行が上手くいくか心配です。',
            memo: ''
          },
          {
            word: '多半',
            sentence: '在多半情況下， 我最晚八點從工作中解放了。',
            bopomofo: 'ㄗㄞˋ ㄉㄨㄛ ㄅㄢˋ ㄑㄧㄥˊ ㄎㄨㄤˋ ㄒㄧㄚˋ, ㄨㄛˇ ㄗㄨㄟˋ ㄨㄢˇ ㄅㄚ ㄉㄧㄢˇ ㄘㄨㄥˊ ㄍㄨㄥ ㄗㄨㄛˋ ㄓㄨㄥ ㄐㄧㄝˇ ㄈㄤˋ ㄌㄜ˙.',
            pinyin: 'zai4 duo1 ban4 qing2 kuang4 xia4, wo3 zui4 wan3 ba1 dian3 cong2 gong1 zuo4 zhong1 jie3 fang4 le.',
            translation: 'ほとんどの場合、 遅くとも8時には仕事から解放されます。',
            memo: ''
          },
          {
            word: '困難',
            sentence: '睡覺的時候覺得呼吸困難就醒來了， 原來是貓坐在我的胸口上。',
            bopomofo: 'ㄕㄨㄟˋ ㄐㄧㄠˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄐㄩㄝˊ ㄉㄜ˙ ㄏㄨ ㄒㄧ ㄎㄨㄣˋ ㄋㄢˊ ㄐㄧㄡˋ ㄒㄧㄥˇ ㄌㄞˊ ㄌㄜ˙, ㄩㄢˊ ㄌㄞˊ ㄕˋ ㄇㄠ ㄗㄨㄛˋ ㄗㄞˋ ㄨㄛˇ ㄉㄜ˙ ㄒㄩㄥ ㄎㄡˇ ㄕㄤˋ.',
            pinyin: 'shui4 jiao4 de shi2 hou4 jue2 de hu1 xi1 kun4 nan2 jiu4 xing3 lai2 le, yuan2 lai2 shi4 mao1 zuo4 zai4 wo3 de xiong1 kou3 shang4.',
            translation: '寝ている時に息苦しくて目が覚めたら、 猫が胸の上に座っていました。',
            memo: ''
          },
          {
            word: '★節儉',
            sentence: '吃簡樸的菜既對身體健康又可以省錢。',
            bopomofo: 'ㄔ ㄐㄧㄢˇ ㄆㄨˊ ㄉㄜ˙ ㄘㄞˋ ㄐㄧˋ ㄉㄨㄟˋ ㄕㄣ ㄊㄧˇ ㄐㄧㄢˋ ㄎㄤ ㄧㄡˋ ㄎㄜˇ ㄧˇ ㄕㄥˇ ㄑㄧㄢˊ.',
            pinyin: 'chi1 jian3 pu2 de cai4 ji4 dui4 shen1 ti3 jian4 kang1 you4 ke3 yi3 sheng3 qian2.',
            translation: '質素なおかずは健康的な上に、 お金の節約にもなります。',
            memo: '※「節儉」は使えない?'
          },
          {
            word: '主婦',
            sentence: '從結婚以後, 她就成為主婦了。',
            bopomofo: 'ㄘㄨㄥˊ ㄐㄧㄝˊ ㄏㄨㄣ ㄧˇ ㄏㄡˋ, ㄊㄚ ㄐㄧㄡˋ ㄔㄥˊ ㄨㄟˊ ㄓㄨˇ ㄈㄨˋ ㄌㄜ˙.',
            pinyin: 'cong2 jie2 hun1 yi3 hou4, ta1 jiu4 cheng2 wei2 zhu3 fu4 le.',
            translation: '結婚してから、 彼女は主婦になりました。',
            memo: ''
          },
          {
            word: '★煎',
            sentence: '我把培根煎到酥脆， 夾在麵包裡跟煎雞蛋一起吃。',
            bopomofo: 'ㄨㄛˇ ㄅㄚˇ ㄆㄟˊ ㄍㄣ ㄐㄧㄢ ㄉㄠˋ ㄙㄨ ㄘㄨㄟˋ, ㄐㄧㄚ ㄗㄞˋ ㄇㄧㄢˋ ㄅㄠ ㄌㄧˇ ㄍㄣ ㄐㄧㄢ ㄐㄧ ㄉㄢˋ ㄧˋ ㄑㄧˇ ㄔ.',
            pinyin: 'wo3 ba3 pei2 gen1 jian1 dao4 su1 cui4, jia1 zai4 mian4 bao1 li3 gen1 jian1 ji1 dan4 yi1 qi3 chi1.',
            translation: 'ベーコンをカリカリに焼いてから、 目玉焼きと一緒にパンに挟んで食べます。',
            memo: '※「夾(ㄐㄧㄚ/jia1)」は挟む?'
          },
          {
            word: '菜色',
            sentence: '她的平常飲食很簡單, 但是在菜色上很講究。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄆㄧㄥˊ ㄔㄤˊ ㄧㄣˇ ㄕˊ ㄏㄣˇ ㄐㄧㄢˇ ㄉㄢ, ㄉㄢˋ ㄕˋ ㄗㄞˋ ㄘㄞˋ ㄙㄜˋ ㄕㄤˋ ㄏㄣˇ ㄐㄧㄤˇ ㄐㄧㄡˋ.',
            pinyin: 'ta1 de ping2 chang2 yin3 shi2 hen3 jian3 dan1, dan4 shi4 zai4 cai4 se4 shang4 hen3 jiang3 jiu4.',
            translation: '彼女の普段の食事はとてもシンプルですが、 料理のバラエティにはこだわりがあります。',
            memo: ''
          },
          {
            word: '以及',
            sentence: '請教職員工以及學生集合在體育館。',
            bopomofo: 'ㄑㄧㄥˇ ㄐㄧㄠ ㄓˊ ㄩㄢˊ ㄍㄨㄥ ㄧˇ ㄐㄧˊ ㄒㄩㄝˊ ㄕㄥ ㄐㄧˊ ㄏㄜˊ ㄗㄞˋ ㄊㄧˇ ㄩˋ ㄍㄨㄢˇ.',
            pinyin: 'qing3 jiao1 zhi2 yuan2 gong1 yi3 ji2 xue2 sheng1 ji2 he2 zai4 ti3 yu4 guan3.',
            translation: '教職員及び生徒は、 体育館に集まって下さい。',
            memo: ''
          },
          {
            word: '美味',
            sentence: '五顏六色的水果看上去很美味。',
            bopomofo: 'ㄨˇ ㄧㄢˊ ㄌㄧㄡˋ ㄙㄜˋ ㄉㄜ˙ ㄕㄨㄟˇ ㄍㄨㄛˇ ㄎㄢˋ ㄕㄤ˙ ㄑㄩ˙ ㄏㄣˇ ㄇㄟˇ ㄨㄟˋ.',
            pinyin: 'wu3 yan2 liu4 se4 de shui3 guo3 kan4 shang4 qu4 hen3 mei3 wei4.',
            translation: '色とりどりの果物がとても美味しそうです。',
            memo: '※「五顏六色(ㄨˇ ㄧㄢˊ ㄌㄧㄡˋ ㄙㄜˋ/wu3 yan2 liu4 se4)」 : 「色とりどりの」。'
          },
          {
            word: '點心',
            sentence: '我還沒學到這個點心的做法。',
            bopomofo: 'ㄨㄛˇ ㄏㄞˊ ㄇㄟˊ ㄒㄩㄝˊ ㄉㄠˋ ㄓㄜˋ ㄍㄜˋ ㄉㄧㄢˇ ㄒㄧㄣ ㄉㄜ˙ ㄗㄨㄛˋ ㄈㄚˇ.',
            pinyin: 'wo3 hai2 mei2 xue2 dao4 zhe4 ge4 dian3 xin1 de zuo4 fa3.',
            translation: '私はまだ、 このデザートの作り方を学んでいません。',
            memo: ''
          },
          {
            word: '日式',
            sentence: '壽司和天婦羅等日式料理在海外也聞名。',
            bopomofo: 'ㄕㄡˋ ㄙ ㄏㄢˋ ㄊㄧㄢ ㄈㄨˋ ㄌㄨㄛˊ ㄉㄥˇ ㄖˋ ㄕˋ ㄌㄧㄠˋ ㄌㄧˇ ㄗㄞˋ ㄏㄞˇ ㄨㄞˋ ㄧㄝˇ ㄨㄣˊ ㄇㄧㄥˊ.',
            pinyin: 'shou4 si1 han4 tian1 fu4 luo2 deng3 ri4 shi4 liao4 li3 zai4 hai3 wai4 ye3 wen2 ming2.',
            translation: '寿司や天ぷらなどの日本料理は海外でも有名です。',
            memo: ''
          },
          {
            word: '飲食',
            sentence: '碳水化合物占了我的大部分的飲食。',
            bopomofo: 'ㄊㄢˋ ㄕㄨㄟˇ ㄏㄨㄚˋ ㄏㄜˊ ㄨˋ ㄓㄢˋ ㄌㄜ˙ ㄨㄛˇ ㄉㄜ˙ ㄉㄚˋ ㄅㄨˋ ㄈㄣˋ ㄉㄜ˙ ㄧㄣˇ ㄕˊ.',
            pinyin: 'tan4 shui3 hua4 he2 wu4 zhan4 le wo3 de da4 bu4 fen4 de yin3 shi2.',
            translation: '炭水化物は私の食事の大部分を占めています。',
            memo: ''
          },
          {
            word: '★深',
            sentence: '當你沖離這個海灘遠一點時， 水深突然會變得更深了。',
            bopomofo: 'ㄉㄤ ㄋㄧˇ ㄔㄨㄥ ㄌㄧˊ ㄓㄜˋ ㄍㄜˋ ㄏㄞˇ ㄊㄢ ㄩㄢˇ ㄧˋ ㄉㄧㄢˇ ㄕˊ, ㄕㄨㄟˇ ㄕㄣ ㄊㄨ ㄖㄢˊ ㄏㄨㄟˋ ㄅㄧㄢˋ ㄉㄜ˙ ㄍㄥˋ ㄕㄣ ㄌㄜ˙.',
            pinyin: 'dang1 ni3 chong1 li2 zhe4 ge4 hai3 tan1 yuan3 yi1 dian3 shi2, shui3 shen1 tu1 ran2 hui4 bian4 de geng4 shen1 le.',
            translation: 'このビーチは、 少し沖へ行くと急に水深が深くなります。',
            memo: '※「沖(ㄔㄨㄥ/chong1)」で「沖へ行く」という意味の動詞?'
          },
          {
            word: '蔣介石',
            sentence: '在蔣介石時代， 頒布了長期的戒嚴法。',
            bopomofo: 'ㄗㄞˋ ㄐㄧㄤˇ ㄐㄧㄝˋ ㄕˊ ㄕˊ ㄉㄞˋ, ㄅㄢ ㄅㄨˋ ㄌㄜ˙ ㄔㄤˊ ㄑㄧˊ ㄉㄜ˙ ㄐㄧㄝˋ ㄧㄢˊ ㄈㄚˇ.',
            pinyin: 'zai4 jiang3 jie4 shi2 shi2 dai4, ban1 bu4 le chang2 qi2 de jie4 yan2 fa3.',
            translation: '蒋介石の時代には、 長期にわたる戒厳令がしかれました。',
            memo: ''
          },
          {
            word: '國共內戰',
            sentence: '在國共內戰中， 國民黨和中國共產黨進行了鬥爭。',
            bopomofo: 'ㄗㄞˋ ㄍㄨㄛˊ ㄍㄨㄥˋ ㄋㄟˋ ㄓㄢˋ ㄓㄨㄥ, ㄍㄨㄛˊ ㄇㄧㄣˊ ㄉㄤˇ ㄏㄢˋ ㄓㄨㄥ ㄍㄨㄛˊ ㄍㄨㄥˋ ㄔㄢˇ ㄉㄤˇ ㄐㄧㄣˋ ㄒㄧㄥˊ ㄌㄜ˙ ㄉㄡˋ ㄓㄥ.',
            pinyin: 'zai4 guo2 gong4 nei4 zhan4 zhong1, guo2 min2 tang3 han4 zhong1 guo2 gong4 chan3 tang3 jin4 xing2 le dou4 zheng1.',
            translation: '国共内戦では、 中国国民党と中国共産党とが戦いました。',
            memo: ''
          },
          {
            word: '客家人',
            sentence: '客家人自古以來就反复遷徙。',
            bopomofo: 'ㄎㄜˋ ㄐㄧㄚ ㄖㄣˊ ㄗˋ ㄍㄨˇ ㄧˇ ㄌㄞˊ ㄐㄧㄡˋ ㄈㄢˇ ㄈㄨˋ ㄑㄧㄢ ㄒㄧˇ.',
            pinyin: 'ke4 jia1 ren2 zi4 gu3 yi3 lai2 jiu4 fan3 fu4 qian1 xi3.',
            translation: '客家人は古来から、 移住を繰り返してきました。',
            memo: ''
          },
          {
            word: '閩南人',
            sentence: '清朝時期， 一些閩南人從福建南部移民到台灣。',
            bopomofo: 'ㄑㄧㄥ ㄔㄠˊ ㄕˊ ㄑㄧˊ, ㄧ ㄒㄧㄝ ㄇㄧㄣˇ ㄋㄢˊ ㄖㄣˊ ㄘㄨㄥˊ ㄈㄨˊ ㄐㄧㄢˋ ㄋㄢˊ ㄅㄨˋ ㄧˊ ㄇㄧㄣˊ ㄉㄠˋ ㄊㄞˊ ㄨㄢ.',
            pinyin: 'qing1 chao2 shi2 qi2, yi1 xie1 min3 nan2 ren2 cong2 fu2 jian4 nan2 bu4 yi2 min2 dao4 tai2 wan1.',
            translation: '閩南人の一部は、 清朝時代に福建省南部から台湾に移住しました。',
            memo: ''
          },
          {
            word: '蛋餅',
            sentence: '醬油膏也是蛋餅味道的致勝的關鍵。',
            bopomofo: 'ㄐㄧㄤˋ ㄧㄡˊ ㄍㄠ ㄧㄝˇ ㄕˋ ㄉㄢˋ ㄅㄧㄥˇ ㄨㄟˋ ㄉㄠˋ ㄉㄜ˙ ㄓˋ ㄕㄥˋ ㄉㄜ˙ ㄍㄨㄢ ㄐㄧㄢˋ.',
            pinyin: 'jiang4 you2 gao1 ye3 shi4 dan4 bing3 wei4 dao4 de zhi4 sheng4 de guan1 jian4.',
            translation: '甘めのソースも、 蛋餅の味の決め手です。',
            memo: ''
          },
          {
            word: '★打輸',
            sentence: '由於某些原因， 我出剪刀石頭布總是輸。',
            bopomofo: 'ㄧㄡˊ ㄩˊ ㄇㄡˇ ㄒㄧㄝ ㄩㄢˊ ㄧㄣ, ㄨㄛˇ ㄔㄨ ㄐㄧㄢˇ ㄉㄠ ㄕˊ ㄊㄡ˙ ㄅㄨˋ ㄗㄨㄥˇ ㄕˋ ㄕㄨ.',
            pinyin: 'you2 yu2 mou3 xie1 yuan2 yin1, wo3 chu1 jian3 dao1 shi2 tou2 bu4 zong3 shi4 shu1.',
            translation: 'ジャンケンには何故かいつも負けてしまいます。',
            memo: '※「打輸」は使えない?'
          },
          {
            word: '擺攤子',
            sentence: '我會擺章魚燒的攤子， 所以請你們一定要來吃。',
            bopomofo: 'ㄨㄛˇ ㄏㄨㄟˋ ㄅㄞˇ ㄓㄤ ㄩˊ ㄕㄠ ㄉㄜ˙ ㄊㄢ ㄗ˙, ㄙㄨㄛˇ ㄧˇ ㄑㄧㄥˇ ㄋㄧˇ ㄇㄣ˙ ㄧˊ ㄉㄧㄥˋ ㄧㄠˋ ㄌㄞˊ ㄔ.',
            pinyin: 'wo3 hui4 bai3 zhang1 yu2 shao1 de tan1 zi, suo3 yi3 qing3 ni3 men yi1 ding4 yao4 lai2 chi1.',
            translation: 'たこ焼きの屋台を出すので、 是非食べに来てください。',
            memo: ''
          },
          {
            word: '蘿蔔糕',
            sentence: '我喜歡蘿蔔糕QQ的口感。',
            bopomofo: 'ㄨㄛˇ ㄒㄧˇ ㄏㄨㄢ ㄌㄨㄛˊ ㄅㄛ˙ ㄍㄠ QQ ㄉㄜ˙ ㄎㄡˇ ㄍㄢˇ.',
            pinyin: 'wo3 xi3 huan1 luo2 bo gao1 QQ de kou3 gan3.',
            translation: '大根餅のもちもちとした食感が好きです。',
            memo: ''
          },
          {
            word: '★烹飪課',
            sentence: '在烹飪課上， 從怎麼把食材事前大致準備仔細地教你。',
            bopomofo: 'ㄗㄞˋ ㄆㄥ ㄖㄣˋ ㄎㄜˋ ㄕㄤˋ, ㄘㄨㄥˊ ㄗㄣˇ ㄇㄜ˙ ㄅㄚˇ ㄕˊ ㄘㄞˊ ㄕˋ ㄑㄧㄢˊ ㄉㄚˋ ㄓˋ ㄓㄨㄣˇ ㄅㄟˋ ㄗˇ ㄒㄧˋ ㄉㄜ˙ ㄐㄧㄠ ㄋㄧˇ.',
            pinyin: 'zai4 peng1 ren4 ke4 shang4, cong2 zen3 me ba3 shi2 cai2 shi4 qian2 da4 zhi4 zhun3 bei4 zi3 xi4 de jiao1 ni3.',
            translation: '料理教室では、 食材の下処理から丁寧に教えてくれます。',
            memo: '※「事前大致準備(ㄕˋ ㄑㄧㄢˊ ㄉㄚˋ ㄓˋ ㄓㄨㄣˇ ㄅㄟˋ/shi4 qian2 da4 zhi4 zhun3 bei4)」 : 「下処理」?'
          },
          {
            word: '曬乾',
            sentence: '曬乾的水果不但可以長期保存， 而且也增加了甜度。',
            bopomofo: 'ㄕㄞˋ ㄍㄢ ㄉㄜ˙ ㄕㄨㄟˇ ㄍㄨㄛˇ ㄅㄨˊ ㄉㄢˋ ㄎㄜˇ ㄧˇ ㄔㄤˊ ㄑㄧˊ ㄅㄠˇ ㄘㄨㄣˊ, ㄦˊ ㄑㄧㄝˇ ㄧㄝˇ ㄗㄥ ㄐㄧㄚ ㄌㄜ˙ ㄊㄧㄢˊ ㄉㄨˋ.',
            pinyin: 'shai4 gan1 de shui3 guo3 bu2 dan4 ke3 yi3 chang2 qi2 bao3 cun2, er2 qie3 ye3 zeng1 jia1 le tian2 du4.',
            translation: '果物を天日干しすると、 長期保存が可能になるだけでなく甘みも増します。',
            memo: ''
          },
          {
            word: '各種各樣',
            sentence: '遊樂園裡有各種各樣的遊樂設施， 但是因為暈了他不能坐任何一個。',
            bopomofo: 'ㄧㄡˊ ㄌㄜˋ ㄩㄢˊ ㄌㄧˇ ㄧㄡˇ ㄍㄜˋ ㄓㄨㄥˇ ㄍㄜˋ ㄧㄤˋ ㄉㄜ˙ ㄧㄡˊ ㄌㄜˋ ㄕㄜˋ ㄕ, ㄉㄢˋ ㄕˋ ㄧㄣ ㄨㄟˋ ㄩㄣ ㄌㄜ˙ ㄊㄚ ㄅㄨˋ ㄋㄥˊ ㄗㄨㄛˋ ㄖㄣˋ ㄏㄜˊ ㄧˊ ㄍㄜˋ.',
            pinyin: 'you2 le4 yuan2 li3 you3 ge4 zhong3 ge4 yang4 de you2 le4 she4 shi1, dan4 shi4 yin1 wei4 yun1 le ta1 bu4 neng2 zuo4 ren4 he2 yi1 ge4.',
            translation: '遊園地にある様々なアトラクションがありますが、彼は酔ってしまうのでどれも乗れません。',
            memo: ''
          },
          {
            word: '殖民統治',
            sentence: '在殖民統治下， 大多數時候與當地人發生軍事衝突。',
            bopomofo: 'ㄗㄞˋ ㄓˊ ㄇㄧㄣˊ ㄊㄨㄥˇ ㄓˋ ㄒㄧㄚˋ, ㄉㄚˋ ㄉㄨㄛ ㄕㄨˋ ㄕˊ ㄏㄡˋ ㄩˇ ㄉㄤ ㄉㄧˋ ㄖㄣˊ ㄈㄚ ㄕㄥ ㄐㄩㄣ ㄕˋ ㄔㄨㄥ ㄊㄨˊ.',
            pinyin: 'zai4 zhi2 min2 tong3 zhi4 xia4, da4 duo1 shu4 shi2 hou4 yu3 dang1 di4 ren2 fa1 sheng1 jun1 shi4 chong1 tu2.',
            translation: '植民地支配においては、 ほとんどの場合現地人との間で軍事的な衝突が起こります。',
            memo: '※「與(ㄩˇ/yu3)」 : 「～と(=跟)」。'
          },
          {
            word: '味噌湯',
            sentence: '我會把冰箱裡的剩下的蔬菜用作味噌湯的材料。',
            bopomofo: 'ㄨㄛˇ ㄏㄨㄟˋ ㄅㄚˇ ㄅㄧㄥ ㄒㄧㄤ ㄌㄧˇ ㄉㄜ˙ ㄕㄥˋ ㄒㄧㄚˋ ㄉㄜ˙ ㄕㄨ ㄘㄞˋ ㄩㄥˋ ㄗㄨㄛˋ ㄨㄟˋ ㄗㄥ ㄊㄤ ㄉㄜ˙ ㄘㄞˊ ㄌㄧㄠˋ.',
            pinyin: 'wo3 hui4 ba3 bing1 xiang1 li3 de sheng4 xia4 de shu1 cai4 yong4 zuo4 wei4 zeng1 tang1 de cai2 liao4.',
            translation: '冷蔵庫の中の余っている野菜を、 味噌汁の具にします。',
            memo: ''
          },
          {
            word: '蘿蔔乾',
            sentence: '蘿蔔乾洗淨， 在水中浸泡一陣子去除鹽分。',
            bopomofo: 'ㄌㄨㄛˊ ㄅㄛ˙ ㄍㄢ ㄒㄧˇ ㄐㄧㄥˋ, ㄗㄞˋ ㄕㄨㄟˇ ㄓㄨㄥ ㄐㄧㄣˋ ㄆㄠˋ ㄧ ㄓㄣˋ ㄗ˙ ㄑㄩˋ ㄔㄨˊ ㄧㄢˊ ㄈㄣˋ.',
            pinyin: 'luo2 bo gan1 xi3 jing4, zai4 shui3 zhong1 jin4 pao4 yi1 zhen4 zi qu4 chu2 yan2 fen4.',
            translation: '乾燥大根を綺麗に洗い、 しばらく水に浸して塩分を取り除きます。',
            memo: ''
          },
          {
            word: '進一步',
            sentence: '這個城市通過重建得到了進一步發展。',
            bopomofo: 'ㄓㄜˋ ㄍㄜˋ ㄔㄥˊ ㄕˋ ㄊㄨㄥ ㄍㄨㄛˋ ㄔㄨㄥˊ ㄐㄧㄢˋ ㄉㄜˊ ㄉㄠˋ ㄌㄜ˙ ㄐㄧㄣˋ ㄧ ㄅㄨˋ ㄈㄚ ㄓㄢˇ.',
            pinyin: 'zhe4 ge4 cheng2 shi4 tong1 guo4 chong2 jian4 de dao4 le jin4 yi1 bu4 fa1 zhan3.',
            translation: 'この街は、 再開発によって更なる発展を遂げました。',
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
