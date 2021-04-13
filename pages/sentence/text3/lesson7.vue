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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第7章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第7章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      // 単語数：74
      data: {
        title: '當代中文課程課3・第7章',
        words: [
          {
            word: '親',
            sentence: '她跟妹妹很親， 空閒的時間一直在一起。',
            bopomofo: 'ㄊㄚ ㄍㄣ ㄇㄟˋ ㄇㄟ˙ ㄏㄣˇ ㄑㄧㄣ, ㄎㄨㄥˋ ㄒㄧㄢˊ ㄉㄜ˙ ㄕˊ ㄐㄧㄢ ㄧ ㄓˊ ㄗㄞˋ ㄧˋ ㄑㄧˇ.',
            pinyin: 'ta1 gen1 mei4 mei hen3 qin1, kong4 xian2 de shi2 jian1 yi1 zhi2 zai4 yi1 qi3.',
            translation: '彼女は妹ととても仲が良く、 暇な時間はいつも一緒にいます。',
            memo: ''
          },
          {
            word: '爺爺',
            sentence: '爺爺很活潑, 像每天一樣拜訪鄰居跟大家聊天。',
            bopomofo: 'ㄧㄝˊ ㄧㄝ˙ ㄏㄣˇ ㄏㄨㄛˊ ㄆㄛ, ㄒㄧㄤˋ ㄇㄟˇ ㄊㄧㄢ ㄧˊ ㄧㄤˋ ㄅㄞˋ ㄈㄤˇ ㄌㄧㄣˊ ㄐㄩ ㄍㄣ ㄉㄚˋ ㄐㄧㄚ ㄌㄧㄠˊ ㄊㄧㄢ.',
            pinyin: 'ye2 ye hen3 huo2 po1, xiang4 mei3 tian1 yi1 yang4 bai4 fang3 lin2 ju1 gen1 da4 jia1 liao2 tian1.',
            translation: 'おじいちゃんはとても元気で、 毎日のように近所を訪ねてはお喋りをしています。',
            memo: '',
            changed: '☆'
          },
          {
            word: '鄰居',
            sentence: '鄰居在浴室裡一直唱歌, 吵死了。',
            bopomofo: 'ㄌㄧㄣˊ ㄐㄩ ㄗㄞˋ ㄩˋ ㄕˋ ㄌㄧˇ ㄧ ㄓˊ ㄔㄤˋ ㄍㄜ, ㄔㄠˇ ㄙˇ ㄌㄜ˙.',
            pinyin: 'lin2 ju1 zai4 yu4 shi4 li3 yi1 zhi2 chang4 ge1, chao3 si3 le.',
            translation: 'お隣さんがお風呂場でずっと歌い続けていて、 すごくうるさいです。',
            memo: '',
            changed: '☆'
          },
          {
            word: '狗',
            sentence: '小狗在肉的前面等了一陣子了， 口水一直流著。',
            bopomofo: 'ㄒㄧㄠˇ ㄍㄡˇ ㄗㄞˋ ㄖㄡˋ ㄉㄜ˙ ㄑㄧㄢˊ ㄇㄧㄢˋ ㄉㄥˇ ㄌㄜ˙ ㄧ ㄓㄣˋ ㄗ˙ ㄌㄜ˙. ㄎㄡˇ ㄕㄨㄟˇ ㄧ ㄓˊ ㄌㄧㄡˊ ㄓㄜ˙.',
            pinyin: 'xiao3 gou3 zai4 rou4 de qian2 mian4 deng3 le yi1 zhen4 zi le, kou3 shui3 yi1 zhi2 liu2 zhe.',
            translation: '子犬は肉の前でしばらくの間待てをしているので、 ずっとよだれを垂らしています。',
            memo: '',
            changed: '☆'
          },
          {
            word: '叫',
            sentence: '狗一發現可疑人員就猛烈地叫著。',
            bopomofo: 'ㄍㄡˇ ㄧ ㄈㄚ ㄒㄧㄢˋ ㄎㄜˇ ㄧˊ ㄖㄣˊ ㄩㄢˊ ㄐㄧㄡˋ ㄇㄥˇ ㄌㄧㄝˋ ㄉㄜ˙ ㄐㄧㄠˋ ㄓㄜ˙.',
            pinyin: 'gou3 yi1 fa1 xian4 ke3 yi2 ren2 yuan2 jiu4 meng3 lie4 de jiao4 zhe.',
            translation: '犬は不審者を見つけて激しく吠えています。',
            memo: '※「人員(ㄖㄣˊ ㄩㄢˊ/ren2 yuan2)」 = 「人士(ㄖㄣˊ ㄕˋ/ren2 shi4)」でも可。',
            changed: '☆'
          },
          {
            word: '嗯',
            sentence: '嗯， 我也覺得炸雞排是配啤酒最好的菜。',
            bopomofo: 'ㄣ˙, ㄨㄛˇ ㄧㄝˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄓㄚˊ ㄐㄧ ㄆㄞˊ ㄕˋ ㄆㄟˋ ㄆㄧˊ ㄐㄧㄡˇ ㄗㄨㄟˋ ㄏㄠˇ ㄉㄜ˙ ㄘㄞˋ.',
            pinyin: 'en, wo3 ye3 jue2 de zha2 ji1 pai2 shi4 pei4 pi2 jiu3 zui4 hao3 de cai4.',
            translation: 'はい、 私もビールに一番合うおつまみは唐揚げだと思います。',
            memo: ''
          },
          {
            word: '奶奶',
            sentence: '奶奶很有禮貌， 跟遇到的每個人打招呼。',
            bopomofo: 'ㄋㄞˇ ㄋㄞ˙ ㄏㄣˇ ㄧㄡˇ ㄌㄧˇ ㄇㄠˋ, ㄍㄣ ㄩˋ ㄉㄠˋ ㄉㄜ˙ ㄇㄟˇ ㄍㄜ˙ ㄖㄣˊ ㄉㄚˇ ㄓㄠ ㄏㄨ.',
            pinyin: 'nai3 nai hen3 you3 li3 mao4, gen1 yu4 dao4 de mei3 ge4 ren2 da3 zhao1 hu1.',
            translation: 'おばあさんはとても礼儀正しいので、 会う人みんなに挨拶をします。',
            memo: '',
            changed: '☆'
          },
          {
            word: '過世',
            sentence: '如果我突然過世了， 誰可以把我的日記隱藏起來?',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄨㄛˇ ㄊㄨ ㄖㄢˊ ㄍㄨㄛˋ ㄕˋ ㄌㄜ˙, ㄕㄨㄟˊ ㄎㄜˇ ㄧˇ ㄅㄚˇ ㄨㄛˇ ㄉㄜ˙ ㄖˋ ㄐㄧˋ ㄧㄣˇ ㄘㄤˊ ㄑㄧˇ ㄌㄞˊ?',
            pinyin: 'ru2 guo3 wo3 tu1 ran2 guo4 shi4 le, shei2 ke3 yi3 ba3 wo3 de ri4 ji4 yin3 cang2 qi3 lai2?',
            translation: '私が突然この世を去ったら、 誰が私の日記を隠してくれるでしょうか?',
            memo: '※ここでの「起來」は「覆う」ニュアンス。',
            changed: '☆'
          },
          {
            word: '領養',
            sentence: '聽說你領養了獅子， 每天需要為牠準備幾公斤的肉?',
            bopomofo: 'ㄊㄧㄥ ㄕㄨㄛ ㄋㄧˇ ㄌㄧㄥˇ ㄧㄤˇ ㄌㄜ˙ ㄕ ㄗ˙, ㄇㄟˇ ㄊㄧㄢ ㄒㄩ ㄧㄠˋ ㄨㄟˋ ㄊㄚ ㄓㄨㄣˇ ㄅㄟˋ ㄐㄧˇ ㄍㄨㄥ ㄐㄧㄣ ㄉㄜ˙ ㄖㄡˋ?',
            pinyin: 'ting1 shuo1 ni3 ling3 yang3 le shi1 zi, mei3 tian1 xu1 yao4 wei4 ta1 zhun3 bei4 ji3 gong1 jin1 de rou4?',
            translation: 'ライオンを引き取ったと聞いたのですが、 食事には毎日何キロの肉が必要なのでしょうか?',
            memo: '',
            changed: '☆'
          },
          {
            word: '隻',
            sentence: '一隻大熊貓在兩隻大熊貓上睡覺。',
            bopomofo: 'ㄧ ㄓ ㄉㄚˋ ㄒㄩㄥˊ ㄇㄠ ㄗㄞˋ ㄌㄧㄤˇ ㄓˇ ㄉㄚˋ ㄒㄩㄥˊ ㄇㄠ ㄕㄤˋ ㄕㄨㄟˋ ㄐㄧㄠˋ.',
            pinyin: 'yi1 zhi1 da4 xiong2 mao1 zai4 liang3 zhi1 da4 xiong2 mao1 shang4 shui4 jiao4.',
            translation: '2匹のパンダの上に、 1匹のパンダが重なって寝ています。',
            memo: ''
          },
          {
            word: '可愛',
            sentence: '「萌」的定義就是可愛得看到就很興奮心都融化了的感覺。',
            bopomofo: ' ㄇㄥˊ ㄉㄜ˙ ㄉㄧㄥˋ ㄧˋ ㄐㄧㄡˋ ㄕˋ ㄎㄜˇ ㄞˋ ㄉㄜˊ ㄎㄢˋ ㄉㄠˋ ㄐㄧㄡˋ ㄏㄣˇ ㄒㄧㄥ ㄈㄣˋ ㄒㄧㄣ ㄉㄡ ㄖㄨㄥˊ ㄏㄨㄚˋ ㄌㄜ˙ ㄉㄜ˙ ㄍㄢˇ ㄐㄩㄝˊ.',
            pinyin: 'meng2 de ding4 yi4 jiu4 shi4 ke3 ai4 de kan4 dao4 jiu4 hen3 xing1 fen4 xin1 dou1 rong2 hua4 le de gan3 jue2.',
            translation: '「萌え」とは、 可愛すぎて興奮のあまりメロメロになってしまう感覚の事です。',
            memo: '',
            changed: '☆'
          },
          {
            word: '孤單',
            sentence: '情人節的時候一個人時會有更孤單的感覺。',
            bopomofo: 'ㄑㄧㄥˊ ㄖㄣˊ ㄐㄧㄝˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄧˊ ㄍㄜ˙ ㄖㄣˊ ㄕˊ ㄏㄨㄟˋ ㄧㄡˇ ㄍㄥˋ ㄍㄨ ㄉㄢ ㄉㄜ˙ ㄍㄢˇ ㄐㄩㄝˊ.',
            pinyin: 'qing2 ren2 jie2 de shi2 hou4 yi1 ge4 ren2 shi2 hui4 you3 geng4 gu1 dan1 de gan3 jue2.',
            translation: 'バレンタインデーに一人でいるとより寂しさを感じます。',
            memo: '',
            changed: '☆'
          },
          {
            word: '牠',
            sentence: '對貓來說, 每天得到生魚片來代替牠的薪水。',
            bopomofo: 'ㄉㄨㄟˋ ㄇㄠ ㄌㄞˊ ㄕㄨㄛ, ㄇㄟˇ ㄊㄧㄢ ㄉㄜˊ ㄉㄠˋ ㄕㄥ ㄩˊ ㄆㄧㄢˋ ㄌㄞˊ ㄉㄞˋ ㄊㄧˋ ㄊㄚ ㄉㄜ˙ ㄒㄧㄣ ㄕㄨㄟˇ.',
            pinyin: 'dui4 mao1 lai2 shuo1, mei3 tian1 de2 dao4 sheng1 yu2 pian4 lai2 dai4 ti4 ta1 de xin1 shui3.',
            translation: '猫に言わせれば、 毎日お刺身を貰う事が彼の給料の代わりです。',
            memo: '※「每天拿到生魚片是牠薪水的替代品。(ㄇㄟˇ ㄊㄧㄢ ㄋㄚˊ ㄉㄠˋ ㄕㄥ ㄩˊ ㄆㄧㄢˋ ㄕˋ ㄊㄚ ㄒㄧㄣ ㄕㄨㄟˇ ㄉㄜ˙ ㄊㄧˋ ㄉㄞˋ ㄆㄧㄣˇ/mei3 tian1 na2 dao4 sheng1 yu2 pian4 shi4 ta1 xin1 shui3 de ti4 dai4 pin3.)」でも可。',
            changed: '☆'
          },
          {
            word: '髒',
            sentence: '我把咖啡灑在課本上, 幸虧最重要的部分沒弄髒。',
            bopomofo: 'ㄨㄛˇ ㄅㄚˇ ㄎㄚ ㄈㄟ ㄙㄚˇ ㄗㄞˋ ㄎㄜˋ ㄅㄣˇ ㄕㄤˋ, ㄒㄧㄥˋ ㄎㄨㄟ ㄗㄨㄟˋ ㄓㄨㄥˋ ㄧㄠˋ ㄉㄜ˙ ㄅㄨˋ ㄈㄣˋ ㄇㄟˊ ㄋㄨㄥˋ ㄗㄤ.',
            pinyin: 'wo3 ba3 ka1 fei1 sa3 zai4 ke4 ben3 shang4, xing4 kui1 zui4 zhong4 yao4 de bu4 fen4 mei2 nong4 zang1.',
            translation: 'コーヒーを教科書にこぼしてしまいましたが、 幸い一番大事な部分は汚れていませんでした。',
            memo: ''
          },
          {
            word: '洗澡',
            sentence: '我的狗多少喜歡洗澡, 但是很討厭被用肥皂洗。',
            bopomofo: 'ㄨㄛˇ ㄉㄜ˙ ㄍㄡˇ ㄉㄨㄛ ㄕㄠˇ ㄒㄧˇ ㄏㄨㄢ ㄒㄧˇ ㄗㄠˇ, ㄉㄢˋ ㄕˋ ㄏㄣˇ ㄊㄠˇ ㄧㄢˋ ㄅㄟˋ ㄩㄥˋ ㄈㄟˊ ㄗㄠˋ ㄒㄧˇ.',
            pinyin: 'wo3 de gou3 duo1 shao3 xi3 huan1 xi3 zao3, dan4 shi4 hen3 tao3 yan4 bei4 yong4 fei2 zao4 xi3.',
            translation: '私の犬はシャワーはある程度好きなのですが、 石鹸で洗われるのは嫌がります。',
            memo: '',
            changed: '☆'
          },
          {
            word: '養',
            sentence: '因為我養的倉鼠在輪子上跑著的聲音， 我無法入睡。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄨㄛˇ ㄧㄤˇ ㄉㄜ˙ ㄘㄤ ㄕㄨˇ ㄗㄞˋ ㄌㄨㄣˊ ㄗ˙ ㄕㄤˋ ㄆㄠˇ ㄓㄜ˙ ㄉㄜ˙ ㄕㄥ ㄧㄣ, ㄨㄛˇ ㄨˊ ㄈㄚˇ ㄖㄨˋ ㄕㄨㄟˋ.',
            pinyin: 'yin1 wei4 wo3 yang3 de cang1 shu3 zai4 lun2 zi shang4 pao3 zhe de sheng1 yin1, wo3 wu2 fa3 ru4 shui4.',
            translation: '飼っているハムスターが回し車で回る音で寝られません。',
            memo: '',
            changed: '☆'
          },
          {
            word: '亂',
            sentence: '因為房間裡很亂我以為小偷已經來過了， 但是我的狗就是犯人。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄈㄤˊ ㄐㄧㄢ ㄌㄧˇ ㄏㄣˇ ㄌㄨㄢˋ ㄨㄛˇ ㄧˇ ㄨㄟˊ ㄒㄧㄠˇ ㄊㄡ ㄧˇ ㄐㄧㄥ ㄌㄞˊ ㄍㄨㄛˋ ㄌㄜ˙, ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄉㄜ˙ ㄍㄡˇ ㄐㄧㄡˋ ㄕˋ ㄈㄢˋ ㄖㄣˊ.',
            pinyin: 'yin1 wei4 fang2 jian1 li3 hen3 luan4 wo3 yi3 wei2 xiao3 tou1 yi3 jing1 lai2 guo4 le, dan4 shi4 wo3 de gou3 jiu4 shi4 fan4 ren2.',
            translation: '部屋が散らかっているので泥棒が入ったのかと思いましたが、 私の犬が犯人でした。',
            memo: '',
            changed: '☆'
          },
          {
            word: '咬',
            sentence: '當我被貓咬傷的時候， 我也咬回去來回報牠。',
            bopomofo: 'ㄉㄤ ㄨㄛˇ ㄅㄟˋ ㄇㄠ ㄧㄠˇ ㄕㄤ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄨㄛˇ ㄧㄝˇ ㄧㄠˇ ㄏㄨㄟˊ ㄑㄩˋ ㄌㄞˊ ㄏㄨㄟˊ ㄅㄠˋ ㄊㄚ.',
            pinyin: 'dang1 wo3 bei4 mao1 yao3 shang1 de shi2 hou4, wo3 ye3 yao3 hui2 qu4 lai2 hui2 bao4 ta1.',
            translation: '猫に噛まれた時は、 私もお返しに噛み返します。',
            memo: '',
            changed: '☆'
          },
          {
            word: '打',
            sentence: '即使我從未被父親打過， 每天卻被貓打。',
            bopomofo: 'ㄐㄧˊ ㄕˇ ㄨㄛˇ ㄘㄨㄥˊ ㄨㄟˋ ㄅㄟˋ ㄈㄨˋ ㄑㄧㄣ ㄉㄚˇ ㄍㄨㄛˋ, ㄇㄟˇ ㄊㄧㄢ ㄑㄩㄝˋ ㄅㄟˋ ㄇㄠ ㄉㄚˇ.',
            pinyin: 'ji2 shi3 wo3 cong2 wei4 bei4 fu4 qin1 da3 guo4, mei3 tian1 que4 bei4 mao1 da3.',
            translation: '親父にもぶたれた事ないのに、 猫には毎日猫パンチされます。',
            memo: '※「從未(ㄘㄨㄥˊ ㄨㄟˋ/cong2 wei4)」 = 「まだ～したことがない」。 「未」 は「沒」の意味で、例えば「還沒(ㄏㄞˊ ㄇㄟˊ/hai2 mei2)」 = 「還未(ㄏㄞˊ ㄨㄟˋ/hai2 wei4)」。',
            changed: '☆'
          },
          {
            word: '分手',
            sentence: '因為分手了的重傷， 他看起來像一個空殼。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄈㄣ ㄕㄡˇ ㄌㄜ˙ ㄉㄜ˙ ㄓㄨㄥˋ ㄕㄤ, ㄊㄚ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄒㄧㄤˋ ㄧˊ ㄍㄜˋ ㄎㄨㄥ ㄎㄜˊ.',
            pinyin: 'yin1 wei4 fen1 shou3 le de zhong4 shang1, ta1 kan4 qi3 lai2 xiang4 yi1 ge4 kong1 ke2.',
            translation: '破局したダメージで、 彼はまるで抜け殻のようになっています。',
            memo: '※「抜け殻、 うつろな状態」 : 「失神(ㄕ ㄕㄣˊ/shi1 shen2)」「發呆(ㄈㄚ ㄉㄞ/fa1/ dai1)」という表現もある。 例えば「讓他失了神」。 第二文は、「他看上去一副魂不守舍的樣子(ㄊㄚ ㄎㄢˋ ㄕㄤ˙ ㄑㄩ˙ ㄧ ㄈㄨˋ ㄏㄨㄣˊ ㄅㄨˋ ㄕㄡˇ ㄕㄜˋ ㄉㄜ˙ ㄧㄤˋ ㄗ˙/ta1 kan4 shang4 qu4 yi1 fu4 hun2 bu4 shou3 she4 de yang4 zi)」でも可。',
            changed: '☆'
          },
          {
            word: '緊張',
            sentence: '我不常出去， 所以只是坐捷運就很緊張。',
            bopomofo: 'ㄨㄛˇ ㄅㄨˋ ㄔㄤˊ ㄔㄨ ㄑㄩˋ, ㄙㄨㄛˇ ㄧˇ ㄓˇ ㄕˋ ㄗㄨㄛˋ ㄐㄧㄝˊ ㄩㄣˋ ㄐㄧㄡˋ ㄏㄣˇ ㄐㄧㄣˇ ㄓㄤ.',
            pinyin: 'wo3 bu4 chang2 chu1 qu4, suo3 yi3 zhi3 shi4 zuo4 jie2 yun4 jiu4 hen3 jin3 zhang1.',
            translation: 'あまり外に出る事がないので、 電車に乗るだけでも緊張します。',
            memo: '',
            changed: '☆'
          },
          {
            word: '減輕',
            sentence: '行李的確很重， 但是我不能減輕點心和酒的重量。',
            bopomofo: 'ㄒㄧㄥˊ ㄌㄧˇ ㄉㄧˊ ㄑㄩㄝˋ ㄏㄣˇ ㄓㄨㄥˋ, ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄅㄨˋ ㄋㄥˊ ㄐㄧㄢˇ ㄑㄧㄥ ㄉㄧㄢˇ ㄒㄧㄣ ㄏㄢˋ ㄐㄧㄡˇ ㄉㄜ˙ ㄓㄨㄥˋ ㄌㄧㄤˋ.',
            pinyin: 'xing2 li3 di2 que4 hen3 zhong4, dan4 shi4 wo3 bu4 neng2 jian3 qing1 dian3 xin1 han4 jiu3 de zhong4 liang4.',
            translation: '確かに荷物は重いのですが、 お菓子とお酒だけはどうしても減らせません。',
            memo: '',
            changed: '☆'
          },
          {
            word: '送',
            sentence: '他送給妹妹生日禮物。',
            bopomofo: 'ㄊㄚ ㄙㄨㄥˋ ㄍㄟˇ ㄇㄟˋ ㄇㄟ˙ ㄕㄥ ㄖˋ ㄌㄧˇ ㄨˋ.',
            pinyin: 'ta1 song4 gei3 mei4 mei sheng1 ri4 li3 wu4.',
            translation: '彼は妹に誕生日プレゼントを送りました。',
            memo: '',
            changed: '☆'
          },
          {
            word: '美容院',
            sentence: '去美容院的時候不穿高領衣服去會比較好。',
            bopomofo: 'ㄑㄩˋ ㄇㄟˇ ㄖㄨㄥˊ ㄩㄢˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄅㄨˋ ㄔㄨㄢ ㄍㄠ ㄌㄧㄥˇ ㄧ ㄈㄨˊ ㄑㄩˋ ㄏㄨㄟˋ ㄅㄧˇ ㄐㄧㄠˋ ㄏㄠˇ.',
            pinyin: 'qu4 mei3 rong2 yuan4 de shi2 hou4 bu4 chuan1 gao1 ling3 yi1 fu2 qu4 hui4 bi3 jiao4 hao3.',
            translation: '美容院に行くときは、 タートルネックの服を着ない方がいいです。',
            memo: '',
            changed: '☆'
          },
          {
            word: '推車',
            sentence: '我的孩子已經相當大了， 但是還想上推車。',
            bopomofo: 'ㄨㄛˇ ㄉㄜ˙ ㄏㄞˊ ㄗ˙ ㄧˇ ㄐㄧㄥ ㄒㄧㄤ ㄉㄤ ㄉㄚˋ ㄌㄜ˙, ㄉㄢˋ ㄕˋ ㄏㄞˊ ㄒㄧㄤˇ ㄕㄤˋ ㄊㄨㄟ ㄔㄜ.',
            pinyin: 'wo3 de hai2 zi yi3 jing1 xiang1 dang1 da4 le, dan4 shi4 hai2 xiang3 shang4 tui1 che1.',
            translation: '私の子どもは結構大きいのですが、 いまだにベビーカーに乗りたがります。',
            memo: '',
            changed: '☆'
          },
          {
            word: '主人',
            sentence: '所有的主人都認為他們的寵物是最可愛的。',
            bopomofo: 'ㄙㄨㄛˇ ㄧㄡˇ ㄉㄜ˙ ㄓㄨˇ ㄖㄣˊ ㄉㄡ ㄖㄣˋ ㄨㄟˊ ㄊㄚ ㄇㄣ˙ ㄉㄜ˙ ㄔㄨㄥˇ ㄨˋ ㄕˋ ㄗㄨㄟˋ ㄎㄜˇ ㄞˋ ㄉㄜ˙.',
            pinyin: 'suo3 you3 de zhu3 ren2 dou1 ren4 wei2 ta1 men de chong3 wu4 shi4 zui4 ke3 ai4 de.',
            translation: '飼い主はみんな、 自分のペットが一番可愛いと思っています。',
            memo: ''
          },
          {
            word: '相處',
            sentence: '他跟同事相處得很好, 但是絕不私下聚會。',
            bopomofo: 'ㄊㄚ ㄍㄣ ㄊㄨㄥˊ ㄕˋ ㄒㄧㄤ ㄔㄨˇ ㄉㄜ˙ ㄏㄣˇ ㄏㄠˇ, ㄉㄢˋ ㄕˋ ㄐㄩㄝˊ ㄅㄨˋ ㄙ ㄒㄧㄚˋ ㄐㄩˋ ㄏㄨㄟˋ.',
            pinyin: 'ta1 gen1 tong2 shi4 xiang1 chu3 de hen3 hao3, dan4 shi4 jue2 bu4 si1 xia4 ju4 hui4.',
            translation: '彼は同僚とうまくやっていますが、 プライベートで会う事はありません。',
            memo: ''
          },
          {
            word: '生',
            sentence: '我小的時候以為人類也會生蛋。',
            bopomofo: 'ㄨㄛˇ ㄒㄧㄠˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄧˇ ㄨㄟˊ ㄖㄣˊ ㄌㄟˋ ㄧㄝˇ ㄏㄨㄟˋ ㄕㄥ ㄉㄢˋ.',
            pinyin: 'wo3 xiao3 de shi2 hou4 yi3 wei2 ren2 lei4 ye3 hui4 sheng1 dan4.',
            translation: '小さい時は、 人間も卵を産むと思っていました。',
            memo: ''
          },
          {
            word: '寵物',
            sentence: '他溺愛貓並且總是在他身邊， 所以我不知道他是貓還是寵物。',
            bopomofo: 'ㄊㄚ ㄋㄧˋ ㄞˋ ㄇㄠ ㄅㄧㄥˋ ㄑㄧㄝˇ ㄗㄨㄥˇ ㄕˋ ㄗㄞˋ ㄊㄚ ㄕㄣ ㄅㄧㄢ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄅㄨˋ ㄓ ㄉㄠˋ ㄊㄚ ㄕˋ ㄇㄠ ㄏㄞˊ ㄕˋ ㄔㄨㄥˇ ㄨˋ.',
            pinyin: 'ta1 ni4 ai4 mao1 bing4 qie3 zong3 shi4 zai4 ta1 shen1 bian1, suo3 yi3 wo3 bu4 zhi1 dao4 ta1 shi4 mao1 hai2 shi4 chong3 wu4.',
            translation: '彼は猫を溺愛していていつも側にいるので、 彼と猫どちらがペットなのか分かりません。',
            memo: '※「並且」 : 「尚且つ、 しかも」。'
          },
          {
            word: '單身',
            sentence: '反正我是單身， 所以大概三天不洗澡也沒關係。',
            bopomofo: 'ㄈㄢˇ ㄓㄥˋ ㄨㄛˇ ㄕˋ ㄉㄢ ㄕㄣ, ㄙㄨㄛˇ ㄧˇ ㄉㄚˋ ㄍㄞˋ ㄙㄢ ㄊㄧㄢ ㄅㄨˋ ㄒㄧˇ ㄗㄠˇ ㄧㄝˇ ㄇㄟˊ ㄍㄨㄢ ㄒㄧ˙.',
            pinyin: 'fan3 zheng4 wo3 shi4 dan1 shen1, suo3 yi3 da4 gai4 san1 tian1 bu4 xi3 zao3 ye3 mei2 guan1 xi.',
            translation: 'どうせ独り身なので、 3日くらいお風呂に入らなくても大丈夫です。',
            memo: '',
            changed: '☆'
          },
          {
            word: '醫院',
            sentence: '我的狗沒想到會去醫院， 正在恐懼得顫抖著。',
            bopomofo: 'ㄨㄛˇ ㄉㄜ˙ ㄍㄡˇ ㄇㄟˊ ㄒㄧㄤˇ ㄉㄠˋ ㄏㄨㄟˋ ㄑㄩˋ ㄧ ㄩㄢˋ, ㄓㄥˋ ㄗㄞˋ ㄎㄨㄥˇ ㄐㄩˋ ㄉㄜ˙ ㄔㄢˋ ㄉㄡˇ ㄓㄜ˙.',
            pinyin: 'wo3 de gou3 mei2 xiang3 dao4 hui4 qu4 yi1 yuan4, zheng4 zai4 kong3 ju4 de chan4 dou3 zhe.',
            translation: '犬は病院に行くとは予想していなかったようで、 恐怖でプルプルしています。',
            memo: '',
            changed: '☆'
          },
          {
            word: '意見',
            sentence: '她正在熱戀中， 反對的意見是聽不進去的。',
            bopomofo: 'ㄊㄚ ㄓㄥˋ ㄗㄞˋ ㄖㄜˋ ㄌㄧㄢˋ ㄓㄨㄥ, ㄈㄢˇ ㄉㄨㄟˋ ㄉㄜ˙ ㄧˋ ㄐㄧㄢˋ ㄕˋ ㄊㄧㄥ ㄅㄨˊ ㄐㄧㄣˋ ㄑㄩˋ ㄉㄜ˙.',
            pinyin: 'ta1 zheng4 zai4 re4 lian4 zhong1, fan3 dui4 de yi4 jian4 shi4 ting1 bu2 jin4 qu4 de.',
            translation: '彼女は恋愛にのめり込んでいるので、 反対意見は耳に入りません。',
            memo: '',
            changed: '☆'
          },
          {
            word: '建立',
            sentence: '我現在不能養寵物， 因為我還沒有建立生活基礎。',
            bopomofo: 'ㄨㄛˇ ㄒㄧㄢˋ ㄗㄞˋ ㄅㄨˋ ㄋㄥˊ ㄧㄤˇ ㄔㄨㄥˇ ㄨˋ, ㄧㄣ ㄨㄟˋ ㄨㄛˇ ㄏㄞˊ ㄇㄟˊ ㄧㄡˇ ㄐㄧㄢˋ ㄌㄧˋ ㄕㄥ ㄏㄨㄛˊ ㄐㄧ ㄔㄨˇ.',
            pinyin: 'wo3 xian4 zai4 bu4 neng2 yang3 chong3 wu4, yin1 wei4 wo3 hai2 mei2 you3 jian4 li4 sheng1 huo2 ji1 chu3.',
            translation: '生活基盤が確立していないので、今はペットを飼うことができません。',
            memo: ''
          },
          {
            word: '散步',
            sentence: '心情最平靜的就是帶狗散步的時候。',
            bopomofo: 'ㄒㄧㄣ ㄑㄧㄥˊ ㄗㄨㄟˋ ㄆㄧㄥˊ ㄐㄧㄥˋ ㄉㄜ˙ ㄐㄧㄡˋ ㄕˋ ㄉㄞˋ ㄍㄡˇ ㄙㄢˋ ㄅㄨˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ.',
            pinyin: 'xin1 qing2 zui4 ping2 jing4 de jiu4 shi4 dai4 gou3 san4 bu4 de shi2 hou4.',
            translation: '一番安らぐのは、 犬を散歩に連れていく時間です。',
            memo: '',
            changed: '☆'
          },
          {
            word: '家庭',
            sentence: '週末家人聚一聚的時候我們會去家庭複合式餐廳吧。',
            bopomofo: 'ㄓㄡ ㄇㄛˋ ㄐㄧㄚ ㄖㄣˊ ㄐㄩˋ ㄧ ㄐㄩˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄨㄛˇ ㄇㄣ˙ ㄏㄨㄟˋ ㄑㄩˋ ㄐㄧㄚ ㄊㄧㄥˊ ㄈㄨˋ ㄏㄜˊ ㄕˋ ㄘㄢ ㄊㄧㄥ ㄅㄚ˙.',
            pinyin: 'zhou1 mo4 jia1 ren2 ju4 yi1 ju4 de shi2 hou4 wo3 men hui4 qu4 jia1 ting2 fu4 he2 shi4 can1 ting1 ba.',
            translation: '週末家族で集まる時は、 ファミリーレストランに行きましょう。',
            memo: '',
            changed: '☆'
          },
          {
            word: '真正',
            sentence: '我看到他誤把金槍魚罐頭當貓罐頭吃， 我覺得他是個真正的笨蛋。',
            bopomofo: 'ㄨㄛˇ ㄎㄢˋ ㄉㄠˋ ㄊㄚ ㄨˋ ㄅㄚˇ ㄐㄧㄣ ㄑㄧㄤ ㄩˊ ㄍㄨㄢˋ ㄊㄡ˙ ㄉㄤ ㄇㄠ ㄍㄨㄢˋ ㄊㄡ˙ ㄔ, ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄊㄚ ㄕˋ ㄍㄜˋ ㄓㄣ ㄓㄥˋ ㄉㄜ˙ ㄅㄣˋ ㄉㄢˋ.',
            pinyin: 'wo3 kan4 dao4 ta1 wu4 ba3 jin1 qiang1 yu2 guan4 tou2 dang1 mao1 guan4 tou2 chi1, wo3 jue2 de ta1 shi4 ge4 zhen1 zheng4 de ben4 dan4.',
            translation: 'ツナ缶と間違えて猫缶を食べているのを見て、 彼は本物のバカなのだと思いました。',
            memo: '※「バカ」 : 「傻瓜(ㄕㄚˇ ㄍㄨㄚ/sha3 gua1)」でも可。 「白痴(ㄅㄞˊ ㄔ/ bai2 chi1)」はやや強い表現なのであまり使わない方が良い。',
            changed: '☆'
          },
          {
            word: '幸福',
            sentence: '她在跳蚤市場找到一些便宜貨，就很幸福的感覺。',
            bopomofo: 'ㄊㄚ ㄗㄞˋ ㄊㄧㄠˋ ㄗㄠˇ ㄕˋ ㄔㄤˇ ㄓㄠˇ ㄉㄠˋ ㄧ ㄒㄧㄝ ㄆㄧㄢˊ ㄧˊ ㄏㄨㄛˋ,  ㄐㄧㄡˋ ㄏㄣˇ ㄒㄧㄥˋ ㄈㄨˊ ㄉㄜ˙ ㄍㄢˇ ㄐㄩㄝˊ.',
            pinyin: 'ta1 zai4 tiao4 zao3 shi4 chang3 zhao3 dao4 yi1 xie1 pian2 yi2 huo4, jiu4 hen3 xing4 fu2 de gan3 jue2.',
            translation: '彼女はフリーマーケットで掘り出し物を見つけて、 とても幸せな気分になりました。',
            memo: '※「找到(ㄓㄠˇ ㄉㄠˋ/zhao3 dao4)」 = 「挖到(ㄨㄚ ㄉㄠˋ/wa1 dao4)」でも可。 「便宜貨(ㄆㄧㄢˊ ㄧˊ ㄏㄨㄛˋ/pian2 yi2 huo4)」 = 「便宜寶(ㄆㄧㄢˊ ㄧˊ ㄅㄠˇ/pian2 yi2 bao3)」でも可。',
            changed: '☆'
          },
          {
            word: '跌倒',
            sentence: '他跌倒了, 他手裡的冰淇淋掉了。',
            bopomofo: 'ㄊㄚ ㄉㄧㄝ ㄉㄠˇ ㄌㄜ˙, ㄊㄚ ㄕㄡˇ ㄌㄧˇ ㄉㄜ˙ ㄅㄧㄥ ㄑㄧˊ ㄌㄧㄣˊ ㄉㄧㄠˋ ㄌㄜ˙.',
            pinyin: 'ta1 die1 dao3 le, ta1 shou3 li3 de bing1 qi2 lin2 diao4 le.',
            translation: '彼は転んで、 手に持っていたアイスクリームを落としてしまいました。',
            memo: '',
            changed: '☆'
          },
          {
            word: '當成',
            sentence: '他通常被當成認真的人， 但是實際上是一個花花公子。',
            bopomofo: 'ㄊㄚ ㄊㄨㄥ ㄔㄤˊ ㄅㄟˋ ㄉㄤ ㄔㄥˊ ㄖㄣˋ ㄓㄣ ㄉㄜ˙ ㄖㄣˊ, ㄉㄢˋ ㄕˋ ㄕˊ ㄐㄧˋ ㄕㄤ˙ ㄕˋ ㄧˊ ㄍㄜˋ ㄏㄨㄚ ㄏㄨㄚ ㄍㄨㄥ ㄗˇ.',
            pinyin: 'ta1 tong1 chang2 bei4 dang1 cheng2 ren4 zhen1 de ren2, dan4 shi4 shi2 ji4 shang4 shi4 yi1 ge4 hua1 hua1 gong1 zi3.',
            translation: '彼は真面目な人に見られますが、 実際は遊び人です。',
            memo: '',
            changed: '☆'
          },
          {
            word: '忍不住',
            sentence: '如果我在火車上忍不住笑了我應該怎麼辦?',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄨㄛˇ ㄗㄞˋ ㄏㄨㄛˇ ㄔㄜ ㄕㄤˋ ㄖㄣˇ ㄅㄨˊ ㄓㄨˋ ㄒㄧㄠˋ ㄌㄜ˙ ㄨㄛˇ ㄧㄥ ㄍㄞ ㄗㄣˇ ㄇㄜ˙ ㄅㄢˋ?',
            pinyin: 'ru2 guo3 wo3 zai4 huo3 che1 shang4 ren3 bu2 zhu4 xiao4 le wo3 ying1 gai1 zen3 me ban4?',
            translation: '電車の中で笑いをこらえきれない時はどうしたらいいのでしょうか?',
            memo: '',
            changed: '☆'
          },
          {
            word: '多元',
            sentence: '社會問題應該從多元的看法考慮。',
            bopomofo: 'ㄕㄜˋ ㄏㄨㄟˋ ㄨㄣˋ ㄊㄧˊ ㄧㄥ ㄍㄞ ㄘㄨㄥˊ ㄉㄨㄛ ㄩㄢˊ ㄉㄜ˙ ㄎㄢˋ ㄈㄚˇ ㄎㄠˇ ㄌㄩˋ.',
            pinyin: 'she4 hui4 wen4 ti2 ying1 gai1 cong2 duo1 yuan2 de kan4 fa3 kao3 lu4.',
            translation: '社会的な問題は多元的な視点をもって考慮するべきです。',
            memo: ''
          },
          {
            word: '阿姨',
            sentence: '當阿姨做大量菜的時候， 她總是會分給我。',
            bopomofo: 'ㄉㄤ ㄚ ㄧˊ ㄗㄨㄛˋ ㄉㄚˋ ㄌㄧㄤˋ ㄘㄞˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄊㄚ ㄗㄨㄥˇ ㄕˋ ㄏㄨㄟˋ ㄈㄣ ㄍㄟˇ ㄨㄛˇ.',
            pinyin: 'dang1 a1 yi2 zuo4 da4 liang4 cai4 de shi2 hou4, ta1 zong3 shi4 hui4 fen1 gei3 wo3.',
            translation: 'おばさんはおかずをたくさん作ると、 いつも私に分けてくれます。',
            memo: '',
            changed: '☆'
          },
          {
            word: '先生',
            sentence: '再打二折， 我的先生也不會買不合身的衣服。',
            bopomofo: 'ㄗㄞˋ ㄉㄚˇ ㄦˋ ㄓㄜˊ, ㄨㄛˇ ㄉㄜ˙ ㄒㄧㄢ ㄕㄥ ㄧㄝˇ ㄅㄨˋ ㄏㄨㄟˋ ㄇㄞˇ ㄅㄨˋ ㄏㄜˊ ㄕㄣ ㄉㄜ˙ ㄧ ㄈㄨˊ.',
            pinyin: 'zai4 da3 er4 zhe2, wo3 de xian1 sheng1 ye3 bu4 hui4 mai3 bu4 he2 shen1 de yi1 fu2.',
            translation: '20%引きだとしても、 私の夫はサイズが合わない服は買いません。',
            memo: ''
          },
          {
            word: '下班',
            sentence: '因為寵物等著我， 下班後我盡量早點回家。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄔㄨㄥˇ ㄨˋ ㄉㄥˇ ㄓㄜ˙ ㄨㄛˇ, ㄒㄧㄚˋ ㄅㄢ ㄏㄡˋ ㄨㄛˇ ㄐㄧㄣˇ ㄌㄧㄤˋ ㄗㄠˇ ㄉㄧㄢˇ ㄏㄨㄟˊ ㄐㄧㄚ.',
            pinyin: 'yin1 wei4 chong3 wu4 deng3 zhe wo3, xia4 ban1 hou4 wo3 jin4 liang4 zao3 dian3 hui2 jia1.',
            translation: 'ペットが待っているので、 仕事を終えたらできるだけ早く帰宅します。',
            memo: '',
            changed: '☆'
          },
          {
            word: '改',
            sentence: '孩子問我能不能改他的作業， 但是我居然不懂任何數學問題。',
            bopomofo: 'ㄏㄞˊ ㄗ˙ ㄨㄣˋ ㄨㄛˇ ㄋㄥˊ ㄅㄨˋ ㄋㄥˊ ㄍㄞˇ ㄊㄚ ㄉㄜ˙ ㄗㄨㄛˋ ㄧㄝˋ, ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄐㄩ ㄖㄢˊ ㄅㄨˋ ㄉㄨㄥˇ ㄖㄣˋ ㄏㄜˊ ㄕㄨˋ ㄒㄩㄝˊ ㄨㄣˋ ㄊㄧˊ.',
            pinyin: 'hai2 zi wen4 wo3 neng2 bu4 neng2 gai3 ta1 de zuo4 ye4, dan4 shi4 wo3 ju1 ran2 bu4 dong3 ren4 he2 shu4 xue2 wen4 ti2.',
            translation: '宿題をチェックするよう子どもに頼まれたのですが、 驚いたことにどの数学の問題も分かりませんでした。',
            memo: '',
            changed: '☆'
          },
          {
            word: '公公',
            sentence: '公公把啤酒倒滿了杯子， 享受著一點幸福的時間。',
            bopomofo: 'ㄍㄨㄥ ㄍㄨㄥ ㄅㄚˇ ㄆㄧˊ ㄐㄧㄡˇ ㄉㄠˋ ㄇㄢˇ ㄌㄜ˙ ㄅㄟ ㄗ˙, ㄒㄧㄤˇ ㄕㄡˋ ㄓㄜ˙ ㄧˋ ㄉㄧㄢˇ ㄒㄧㄥˋ ㄈㄨˊ ㄉㄜ˙ ㄕˊ ㄐㄧㄢ.',
            pinyin: 'gong1 gong1 ba3 pi2 jiu3 dao4 man3 le bei1 zi, xiang3 shou4 zhe yi1 dian3 xing4 fu2 de shi2 jian1.',
            translation: '義父はグラスにビールをなみなみとついで、 小さな幸せを満喫しています。',
            memo: '',
            changed: '☆'
          },
          {
            word: '全',
            sentence: '他全喝醉了， 所以明天他什麼也不會記得。',
            bopomofo: 'ㄊㄚ ㄑㄩㄢˊ ㄏㄜ ㄗㄨㄟˋ ㄌㄜ˙, ㄙㄨㄛˇ ㄧˇ ㄇㄧㄥˊ ㄊㄧㄢ ㄊㄚ ㄕㄣˊ ㄇㄜ˙ ㄧㄝˇ ㄅㄨˊ ㄏㄨㄟˋ ㄐㄧˋ ㄉㄜ˙.',
            pinyin: 'ta1 quan2 he1 zui4 le, suo3 yi3 ming2 tian1 ta1 shen2 me ye3 bu2 hui4 ji4 de.',
            translation: '彼は完全に酔いつぶれているので、 明日になれば何も覚えていないでしょう。',
            memo: ''
          },
          {
            word: '靠',
            sentence: '他在家靠父母， 所以他沒有辦法下決心一個人住。',
            bopomofo: 'ㄊㄚ ㄗㄞˋ ㄐㄧㄚ ㄎㄠˋ ㄈㄨˋ ㄇㄨˇ, ㄙㄨㄛˇ ㄧˇ ㄊㄚ ㄇㄟˊ ㄧㄡˇ ㄅㄢˋ ㄈㄚˇ ㄒㄧㄚˋ ㄐㄩㄝˊ ㄒㄧㄣ ㄧˊ ㄍㄜ˙ ㄖㄣˊ ㄓㄨˋ.',
            pinyin: 'ta1 zai4 jia1 kao4 fu4 mu3, suo3 yi3 ta1 mei2 you3 ban4 fa3 xia4 jue2 xin1 yi1 ge4 ren2 zhu4.',
            translation: '彼は実家で両親に依存しているので、 一人暮らしをする決心がつきません。',
            memo: '',
            changed: '☆'
          },
          {
            word: '單親',
            sentence: '那個女孩擔心單親的媽媽， 所以經常幫忙做家務。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄋㄩˇ ㄏㄞˊ ㄉㄢ ㄒㄧㄣ ㄉㄢ ㄑㄧㄣ ㄉㄜ˙ ㄇㄚ ㄇㄚ, ㄙㄨㄛˇ ㄧˇ ㄐㄧㄥ ㄔㄤˊ ㄅㄤ ㄇㄤˊ ㄗㄨㄛˋ ㄐㄧㄚ ㄨˋ.',
            pinyin: 'na4 ge4 nu3 hai2 dan1 xin1 dan1 qin1 de ma1 ma1, suo3 yi3 jing1 chang2 bang1 mang2 zuo4 jia1 wu4.',
            translation: 'その女の子はシングルマザーの母親を気遣って、 いつも家事を手伝っています。',
            memo: '',
            changed: '☆'
          },
          {
            word: '貴族',
            sentence: '看著很努力工作的我， 貓卻過得像貴族的生活。',
            bopomofo: 'ㄎㄢˋ ㄓㄜ˙ ㄏㄣˇ ㄋㄨˇ ㄌㄧˋ ㄍㄨㄥ ㄗㄨㄛˋ ㄉㄜ˙ ㄨㄛˇ, ㄇㄠ ㄑㄩㄝˋ ㄍㄨㄛˋ ㄉㄜ˙ ㄒㄧㄤˋ ㄍㄨㄟˋ ㄗㄨˊ ㄉㄜ˙ ㄕㄥ ㄏㄨㄛˊ.',
            pinyin: 'kan4 zhe hen3 nu3 li4 gong1 zuo4 de wo3, mao1 que4 guo4 de xiang4 gui4 zu2 de sheng1 huo2.',
            translation: 'せかせか働いている私を尻目に、 猫はむしろ貴族のような生活をしています。',
            memo: '',
            changed: '☆'
          },
          {
            word: '時代',
            sentence: '現在不敢相信以前有一段沒有電器用品的時代。',
            bopomofo: 'ㄒㄧㄢˋ ㄗㄞˋ ㄅㄨˋ ㄍㄢˇ ㄒㄧㄤ ㄒㄧㄣˋ ㄧˇ ㄑㄧㄢˊ ㄧㄡˇ ㄧ ㄉㄨㄢˋ ㄇㄟˊ ㄧㄡˇ ㄉㄧㄢˋ ㄑㄧˋ ㄩㄥˋ ㄆㄧㄣˇ ㄉㄜ˙ ㄕˊ ㄉㄞˋ.',
            pinyin: 'xian4 zai4 bu4 gan3 xiang1 xin4 yi3 qian2 you3 yi1 duan4 mei2 you3 dian4 qi4 yong4 pin3 de shi2 dai4.',
            translation: '電化製品が無い時代があったなんて、今では信じられません。',
            memo: '',
            changed: '☆'
          },
          {
            word: '強',
            sentence: '白癡這個表現比較強, 所以應該用笨蛋。',
            bopomofo: 'ㄅㄞˊ ㄔ ㄓㄜˋ ㄍㄜˋ ㄅㄧㄠˇ ㄒㄧㄢˋ ㄅㄧˇ ㄐㄧㄠˋ ㄑㄧㄤˊ, ㄙㄨㄛˇ ㄧˇ ㄧㄥ ㄍㄞ ㄩㄥˋ ㄅㄣˋ ㄉㄢˋ.',
            pinyin: 'bai2 chi1 zhe4 ge4 biao3 xian4 bi3 jiao4 qiang2, suo3 yi3 ying1 gai1 yong4 ben4 dan4.',
            translation: '「白癡(ㄅㄞˊ ㄔ/bai2 chi1) = バカ」は少し強い表現なので、 「笨蛋(ㄅㄣˋ ㄉㄢˋ/ben4 dan4) = バカ」を使いましょう。',
            memo: '',
            changed: '☆'
          },
          {
            word: '追',
            sentence: '她是對他可望而不可及的， 追是沒有用的。',
            bopomofo: 'ㄊㄚ ㄕˋ ㄉㄨㄟˋ ㄊㄚ ㄎㄜˇ ㄨㄤˋ ㄦˊ ㄅㄨˋ ㄎㄜˇ ㄐㄧˊ ㄉㄜ˙, ㄓㄨㄟ ㄕˋ ㄇㄟˊ ㄧㄡˇ ㄩㄥˋ ㄉㄜ˙.',
            pinyin: 'ta1 shi4 dui4 ta1 ke3 wang4 er2 bu4 ke3 ji2 de, zhui1 shi4 mei2 you3 yong4 de.',
            translation: '彼女は彼にとって高嶺の花なので、 追いかけるのは無意味です。',
            memo: '※「遠くから眺める事はできるが近づくことはできない憧れの存在、 高嶺の花」 : 「可望而不可及(ㄎㄜˇ ㄨㄤˋ ㄦˊ ㄅㄨˋ ㄎㄜˇ ㄐㄧˊ/ke3 wang4 er2 bu4 ke3 ji2)」 、 「遙不可及(ㄧㄠˊ ㄅㄨˋ ㄎㄜˇ ㄐㄧˊ/yao2 bu4 ke3 ji2)」でも可。 ',
            changed: '☆'
          },
          {
            word: '自由',
            sentence: '連續的假期快要來了， 所以我打算享受短暫的自由。',
            bopomofo: 'ㄌㄧㄢˊ ㄒㄩˋ ㄉㄜ˙ ㄐㄧㄚˋ ㄑㄧ ㄎㄨㄞˋ ㄧㄠˋ ㄌㄞˊ ㄌㄜ˙, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄉㄚˇ ㄙㄨㄢˋ ㄒㄧㄤˇ ㄕㄡˋ ㄉㄨㄢˇ ㄗㄢˋ ㄉㄜ˙ ㄗˋ ㄧㄡˊ.',
            pinyin: 'lian2 xu4 de jia4 qi1 kuai4 yao4 lai2 le, suo3 yi3 wo3 da3 suan4 xiang3 shou4 duan3 zan4 de zi4 you2.',
            translation: 'もうすぐ連休なので、 つかの間の自由を楽しもうと思います。',
            memo: ''
          },
          {
            word: '獨立',
            sentence: '她的孩子獨立後， 她開始了新的愛好。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄏㄞˊ ㄗ˙ ㄉㄨˊ ㄌㄧˋ ㄏㄡˋ, ㄊㄚ ㄎㄞ ㄕˇ ㄌㄜ˙ ㄒㄧㄣ ㄉㄜ˙ ㄞˋ ㄏㄠˋ.',
            pinyin: 'ta1 de hai2 zi du2 li4 hou4, ta1 kai1 shi3 le xin1 de ai4 hao4.',
            translation: '子どもが独立した後、 彼女は新しい趣味を始めました。',
            memo: ''
          },
          {
            word: '安排',
            sentence: '為了安排旅行她先在網路上找飛機票。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄢ ㄆㄞˊ ㄌㄩˇ ㄒㄧㄥˊ ㄊㄚ ㄒㄧㄢ ㄗㄞˋ ㄨㄤˇ ㄌㄨˋ ㄕㄤˋ ㄓㄠˇ ㄈㄟ ㄐㄧ ㄆㄧㄠˋ.',
            pinyin: 'wei4 le an1 pai2 lu3 xing2 ta1 xian1 zai4 wang3 lu4 shang4 zhao3 fei1 ji1 piao4.',
            translation: '旅行を手配するために、 彼女はまずインターネットで飛行機のチケットを調べました。',
            memo: '',
            changed: '☆'
          },
          {
            word: '享受',
            sentence: '她的朋友把紅酒送給了她， 所以她打算跟起司一起享受。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄆㄥˊ ㄧㄡˇ ㄅㄚˇ ㄏㄨㄥˊ ㄐㄧㄡˇ ㄙㄨㄥˋ ㄍㄟˇ ㄌㄜ˙ ㄊㄚ, ㄙㄨㄛˇ ㄧˇ ㄊㄚ ㄉㄚˇ ㄙㄨㄢˋ ㄍㄣ ㄑㄧˇ ㄙ ㄧˋ ㄑㄧˇ ㄒㄧㄤˇ ㄕㄡˋ.',
            pinyin: 'ta1 de peng2 you3 ba3 hong2 jiu3 song4 gei3 le ta1, suo3 yi3 ta1 da3 suan4 gen1 qi3 si1 yi1 qi3 xiang3 shou4.',
            translation: '友達が赤ワインを贈ってくれたので、 彼女はチーズと一緒にそのボトルを楽しむつもりです。',
            memo: '',
            changed: '☆'
          },
          {
            word: '身邊',
            sentence: '我的手機突然響了， 在我身邊的貓很驚訝得跳了起來。',
            bopomofo: 'ㄨㄛˇ ㄉㄜ˙ ㄕㄡˇ ㄐㄧ ㄊㄨ ㄖㄢˊ ㄒㄧㄤˇ ㄌㄜ˙, ㄗㄞˋ ㄨㄛˇ ㄕㄣ ㄅㄧㄢ ㄉㄜ˙ ㄇㄠ ㄏㄣˇ ㄐㄧㄥ ㄧㄚˋ ㄉㄜˊ ㄊㄧㄠˋ ㄌㄜ˙ ㄑㄧˇ ㄌㄞˊ.',
            pinyin: 'wo3 de shou3 ji1 tu1 ran2 xiang3 le, zai4 wo3 shen1 bian1 de mao1 hen3 jing1 ya4 de tiao4 le qi3 lai2.',
            translation: '突然携帯が鳴ったので、 私の側にいた猫はびっくりして飛び上がりました。',
            memo: '',
            changed: '☆'
          },
          {
            word: '伴',
            sentence: '他不想一個人逛街買衣服， 所以他找朋友做伴。',
            bopomofo: 'ㄊㄚ ㄅㄨˋ ㄒㄧㄤˇ ㄧˊ ㄍㄜ˙ ㄖㄣˊ ㄍㄨㄤˋ ㄐㄧㄝ ㄇㄞˇ ㄧ ㄈㄨˊ, ㄙㄨㄛˇ ㄧˇ ㄊㄚ ㄓㄠˇ ㄆㄥˊ ㄧㄡˇ ㄗㄨㄛˋ ㄅㄢˋ.',
            pinyin: 'ta1 bu4 xiang3 yi1 ge4 ren2 guang4 jie1 mai3 yi1 fu2, suo3 yi3 ta1 zhao3 peng2 you3 zuo4 ban4.',
            translation: '彼は一人で服を買いに行きたくなかったので、 友達に付き添ってもらいました。',
            memo: '※「找朋友做伴(ㄓㄠˇ ㄆㄥˊ ㄧㄡˇ ㄗㄨㄛˋ ㄅㄢˋ/zhao3 peng2 you3 zuo4 ban4)」 = 「找朋友陪他(ㄓㄠˇ ㄆㄥˊ ㄧㄡˇ ㄆㄟˊ ㄊㄚ/zhao3 peng2 you3 pei2 ta1)」でも可。',
            changed: '☆'
          },
          {
            word: '同居',
            sentence: '那個情侶同居了半年後就結婚了。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄑㄧㄥˊ ㄌㄩˇ ㄊㄨㄥˊ ㄐㄩ ㄌㄜ˙ ㄅㄢˋ ㄋㄧㄢˊ ㄏㄡˋ ㄐㄧㄡˋ ㄐㄧㄝˊ ㄏㄨㄣ ㄌㄜ˙.',
            pinyin: 'na4 ge4 qing2 lu3 tong2 ju1 le ban4 nian2 hou4 jiu4 jie2 hun1 le.',
            translation: 'そのカップルは、 半年同棲した後結婚しました。',
            memo: ''
          },
          {
            word: '成家',
            sentence: '因為壓力太大了， 他有一點猶豫成家的事。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄧㄚ ㄌㄧˋ ㄊㄞˋ ㄉㄚˋ ㄌㄜ˙, ㄊㄚ ㄧㄡˇ ㄧˋ ㄉㄧㄢˇ ㄧㄡˊ ㄩˋ ㄔㄥˊ ㄐㄧㄚ ㄉㄜ˙ ㄕˋ.',
            pinyin: 'yin1 wei4 ya1 li4 tai4 da4 le, ta1 you3 yi1 dian3 you2 yu4 cheng2 jia1 de shi4.',
            translation: 'プレッシャーが大きすぎるので、 彼は結婚する事に少し躊躇いを感じています。',
            memo: '',
            changed: '☆'
          },
          {
            word: '負擔',
            sentence: '高中生的女兒為了幫助媽媽自己負擔學費。',
            bopomofo: 'ㄍㄠ ㄓㄨㄥ ㄕㄥ ㄉㄜ˙ ㄋㄩˇ ㄦˊ ㄨㄟˋ ㄌㄜ˙ ㄅㄤ ㄓㄨˋ ㄇㄚ ㄇㄚ ㄗˋ ㄐㄧˇ ㄈㄨˋ ㄉㄢ ㄒㄩㄝˊ ㄈㄟˋ.',
            pinyin: 'gao1 zhong1 sheng1 de nu3 er2 wei4 le bang1 zhu4 ma1 ma1 zi4 ji3 fu4 dan1 xue2 fei4.',
            translation: '高校生の娘は、 母親の手助けをするために学費を自分で負担しています。',
            memo: ''
          },
          {
            word: '養家',
            sentence: '我家有三個正在發育中的孩子， 因此養家糊口相當辛苦。',
            bopomofo: 'ㄨㄛˇ ㄐㄧㄚ ㄧㄡˇ ㄙㄢ ㄍㄜ˙ ㄓㄥˋ ㄗㄞˋ ㄈㄚ ㄩˋ ㄓㄨㄥ ㄉㄜ˙ ㄏㄞˊ ㄗ˙, ㄧㄣ ㄘˇ ㄧㄤˇ ㄐㄧㄚ ㄏㄨˊ ㄎㄡˇ ㄒㄧㄤ ㄉㄤ ㄒㄧㄣ ㄎㄨˇ.',
            pinyin: 'wo3 jia1 you3 san1 ge4 zheng4 zai4 fa1 yu4 zhong1 de hai2 zi, yin1 ci3 yang3 jia1 hu2 kou3 xiang1 dang1 xin1 ku3.',
            translation: '食べ盛りの子供が三人もいるので、 家族を養って生計を立てるのはなかなか大変です。',
            memo: '※「糊口(ㄏㄨˊ ㄎㄡˇ/hu2 kou3)」 : 「生計を立てる」。',
            changed: '☆'
          },
          {
            word: '責任',
            sentence: '吃得太多不是我的責任， 因為我媽媽做的飯很好吃。',
            bopomofo: 'ㄔ ㄉㄜˊ ㄊㄞˋ ㄉㄨㄛ ㄅㄨˊ ㄕˋ ㄨㄛˇ ㄉㄜ˙ ㄗㄜˊ ㄖㄣˋ, ㄧㄣ ㄨㄟˋ ㄨㄛˇ ㄇㄚ ㄇㄚ ㄗㄨㄛˋ ㄉㄜ˙ ㄈㄢˋ ㄏㄣˇ ㄏㄠˇ ㄔ.',
            pinyin: 'chi1 de tai4 duo1 bu2 shi4 wo3 de ze2 ren4, yin1 wei4 wo3 ma1 ma1 zuo4 de fan4 hen3 hao3 chi1.',
            translation: '食べ過ぎてしまうのは私の責任ではなく、 お母さんのご飯が美味しいからです。',
            memo: ''
          },
          {
            word: '亂',
            sentence: '因為員工們忽然辭職了， 辦公室的狀態很亂。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄩㄢˊ ㄍㄨㄥ ㄇㄣ˙ ㄏㄨ ㄖㄢˊ ㄘˊ ㄓˊ ㄌㄜ˙, ㄅㄢˋ ㄍㄨㄥ ㄕˋ ㄉㄜ˙ ㄓㄨㄤˋ ㄊㄞˋ ㄏㄣˇ ㄌㄨㄢˋ.',
            pinyin: 'yin1 wei4 yuan2 gong1 men hu1 ran2 ci2 zhi2 le, ban4 gong1 shi4 de zhuang4 tai4 hen3 luan4.',
            translation: '従業員たちが突然辞めてしまったので、 オフィスの状態はもはやカオスです。',
            memo: ''
          },
          {
            word: '教養',
            sentence: '吃飯的樣子可以看出人的教養。',
            bopomofo: 'ㄔ ㄈㄢˋ ㄉㄜ˙ ㄧㄤˋ ㄗ˙ ㄎㄜˇ ㄧˇ ㄎㄢˋ ㄔㄨ ㄖㄣˊ ㄉㄜ˙ ㄐㄧㄠˋ ㄧㄤˇ.',
            pinyin: 'chi1 fan4 de yang4 zi ke3 yi3 kan4 chu1 ren2 de jiao4 yang3.',
            translation: 'ご飯の食べ方で、 教養の程度が分かります。',
            memo: '',
            changed: '☆'
          },
          {
            word: '接受',
            sentence: '他們不能接受彼此的看法， 所以相互保持著距離。',
            bopomofo: 'ㄊㄚ ㄇㄣ˙ ㄅㄨˋ ㄋㄥˊ ㄐㄧㄝ ㄕㄡˋ ㄅㄧˇ ㄘˇ ㄉㄜ˙ ㄎㄢˋ ㄈㄚˇ, ㄙㄨㄛˇ ㄧˇ ㄒㄧㄤ ㄏㄨˋ ㄅㄠˇ ㄔˊ ㄓㄜ˙ ㄐㄩˋ ㄌㄧˊ.',
            pinyin: 'ta1 men bu4 neng2 jie1 shou4 bi3 ci3 de kan4 fa3, suo3 yi3 xiang1 hu4 bao3 chi2 zhe ju4 li2.',
            translation: '彼らはお互いの考えを受け入れることができないので、 距離をおいています。',
            memo: '※「お互い」 : 「彼此(ㄅㄧˇ ㄘˇ/bi3 ci3)」または「相互(ㄒㄧㄤ ㄏㄨˋ/xiang1 hu4)」。',
            changed: '☆'
          },
          {
            word: '組成',
            sentence: '他們組成了籃球愛好的俱樂部， 每星期六去練習。',
            bopomofo: 'ㄊㄚ ㄇㄣ˙ ㄗㄨˇ ㄔㄥˊ ㄌㄜ˙ ㄌㄢˊ ㄑㄧㄡˊ ㄞˋ ㄏㄠˋ ㄉㄜ˙ ㄐㄩˋ ㄌㄜˋ ㄅㄨˋ, ㄇㄟˇ ㄒㄧㄥ ㄑㄧ ㄌㄧㄡˋ ㄑㄩˋ ㄌㄧㄢˋ ㄒㄧˊ.',
            pinyin: 'ta1 men zu3 cheng2 le lan2 qiu2 ai4 hao4 de ju4 le4 bu4, mei3 xing1 qi1 liu4 qu4 lian4 xi2.',
            translation: '彼らはバスケットボールの同好会を形成していて、 毎週土曜日に練習しています。',
            memo: '',
            changed: '☆'
          },
          {
            word: '道德',
            sentence: '亂扔垃圾是不道德的， 不應該這樣做。',
            bopomofo: 'ㄌㄨㄢˋ ㄖㄥ ㄌㄜˋ ㄙㄜˋ ㄕˋ ㄅㄨˊ ㄉㄠˋ ㄉㄜˊ ㄉㄜ˙, ㄅㄨˋ ㄧㄥ ㄍㄞ ㄓㄜˋ ㄧㄤˋ ㄗㄨㄛˋ.',
            pinyin: 'luan4 reng1 le4 se4 shi4 bu2 dao4 de2 de, bu4 ying1 gai1 zhe4 yang4 zuo4.',
            translation: 'ポイ捨てはモラルに反しているので、 やってはいけません。',
            memo: ''
          },
          {
            word: '因此',
            sentence: '因此他對工作太認真了， 所以有的時候效率不高。',
            bopomofo: 'ㄧㄣ ㄘˇ ㄊㄚ ㄉㄨㄟˋ ㄍㄨㄥ ㄗㄨㄛˋ ㄊㄞˋ ㄖㄣˋ ㄓㄣ ㄌㄜ˙, ㄙㄨㄛˇ ㄧˇ ㄧㄡˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄒㄧㄠˋ ㄌㄩˋ ㄅㄨˋ ㄍㄠ.',
            pinyin: 'yin1 ci3 ta1 dui4 gong1 zuo4 tai4 ren4 zhen1 le, suo3 yi3 you3 de shi2 hou4 xiao4 lu4 bu4 gao1.',
            translation: '彼は仕事に真面目過ぎるので、 あまり効率的ではない時があります。',
            memo: '',
            changed: '☆'
          },
          {
            word: '完整',
            sentence: '收集的資料還不完整， 所以我們得推斷缺少的部分。',
            bopomofo: 'ㄕㄡ ㄐㄧˊ ㄉㄜ˙ ㄗ ㄌㄧㄠˋ ㄏㄞˊ ㄅㄨˋ ㄨㄢˊ ㄓㄥˇ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄇㄣ˙ ㄉㄟˇ ㄊㄨㄟ ㄉㄨㄢˋ ㄑㄩㄝ ㄕㄠˇ ㄉㄜ˙ ㄅㄨˋ ㄈㄣˋ.',
            pinyin: 'shou1 ji2 de zi1 liao4 hai2 bu4 wan2 zheng3, suo3 yi3 wo3 men dei3 tui1 duan4 que1 shao3 de bu4 fen4.',
            translation: '集めた資料は完全ではないので、 足りない箇所は推測しなくてはいけません。',
            memo: ''
          },
          {
            word: '美真',
            sentence: '美真是個完美的人, 不會失敗。',
            bopomofo: 'ㄇㄟˇ ㄓㄣ ㄕˋ ㄍㄜˋ ㄨㄢˊ ㄇㄟˇ ㄉㄧˊ ㄖㄣˊ, ㄅㄨˊ ㄏㄨㄟˋ ㄕ ㄅㄞˋ.',
            pinyin: 'mei3 zhen1 shi4 ge4 wan2 mei3 de ren2, bu2 hui4 shi1 bai4.',
            translation: '美真は完璧な人なので、 失敗する事はありません。',
            memo: '',
            changed: '☆'
          },
          {
            word: '家華',
            sentence: '家華的朋友開始跑步了, 他受到了影響最近也開始運動了。',
            bopomofo: 'ㄐㄧㄚ ㄏㄨㄚˊ ㄉㄜ˙ ㄆㄥˊ ㄧㄡˇ ㄎㄞ ㄕˇ ㄆㄠˇ ㄅㄨˋ ㄌㄜ˙, ㄊㄚ ㄕㄡˋ ㄉㄠˋ ㄌㄜ˙ ㄧㄥˇ ㄒㄧㄤˇ ㄗㄨㄟˋ ㄐㄧㄣˋ ㄧㄝˇ ㄎㄞ ㄕˇ ㄩㄣˋ ㄉㄨㄥˋ ㄌㄜ˙.',
            pinyin: 'jia1 hua2 de peng2 you3 kai1 shi3 pao3 bu4 le, ta1 shou4 dao4 le ying3 xiang3 zui4 jin4 ye3 kai1 shi3 yun4 dong4 le.',
            translation: '家華の友人がランニングを始めたので、 彼も影響を受けて運動し始めました。',
            memo: '',
            changed: '☆'
          },
          {
            word: '風雲人物',
            sentence: '他是個風雲人物, 我沒辦法像他一樣成功。',
            bopomofo: 'ㄊㄚ ㄕˋ ㄍㄜˋ ㄈㄥ ㄩㄣˊ ㄖㄣˊ ㄨˋ, ㄨㄛˇ ㄇㄟˊ ㄅㄢˋ ㄈㄚˇ ㄒㄧㄤˋ ㄊㄚ ㄧˊ ㄧㄤˋ ㄔㄥˊ ㄍㄨㄥ.',
            pinyin: 'ta1 shi4 ge4 feng1 yun2 ren2 wu4, wo3 mei2 ban4 fa3 xiang4 ta1 yi1 yang4 cheng2 gong1.',
            translation: '彼は風雲児なので、 真似しようとしてもできません。',
            memo: '',
            changed: '☆'
          },
          {
            word: '下決心',
            sentence: '他對上大學下了很大的決心， 所以每天熬夜念書。',
            bopomofo: 'ㄊㄚ ㄉㄨㄟˋ ㄕㄤˋ ㄉㄚˋ ㄒㄩㄝˊ ㄒㄧㄚˋ ㄌㄜ˙ ㄏㄣˇ ㄉㄚˋ ㄉㄜ˙ ㄐㄩㄝˊ ㄒㄧㄣ, ㄙㄨㄛˇ ㄧˇ ㄇㄟˇ ㄊㄧㄢ ㄠˊ ㄧㄝˋ ㄋㄧㄢˋ ㄕㄨ.',
            pinyin: 'ta1 dui4 shang4 da4 xue2 xia4 le hen3 da4 de jue2 xin1, suo3 yi3 mei3 tian1 ao2 ye4 nian4 shu1.',
            translation: '彼の大学へ行く決意は固いので、 毎晩遅くまで勉強しています。',
            memo: '',
            changed: '☆'
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
