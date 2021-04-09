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
            sentence: '爺爺很活潑, 每天拜訪附近著跟大家聊天。',
            bopomofo: 'ㄧㄝˊ ㄧㄝ˙ ㄏㄣˇ ㄏㄨㄛˊ ㄆㄛ, ㄇㄟˇ ㄊㄧㄢ ㄅㄞˋ ㄈㄤˇ ㄈㄨˋ ㄐㄧㄣˋ ㄓㄜ˙ ㄍㄣ ㄉㄚˋ ㄐㄧㄚ ㄌㄧㄠˊ ㄊㄧㄢ.',
            pinyin: 'ye2 ye hen3 huo2 po1, mei3 tian1 bai4 fang3 fu4 jin4 zhe gen1 da4 jia1 liao2 tian1.',
            translation: 'おじいちゃんはとても元気で、 毎日のように近所を訪ねてはお喋りをしています。',
            memo: ''
          },
          {
            word: '鄰居',
            sentence: '鄰居在淋浴房一直唱歌, 吵死了。',
            bopomofo: 'ㄌㄧㄣˊ ㄐㄩ ㄗㄞˋ ㄌㄧㄣˊ ㄩˋ ㄈㄤˊ ㄧ ㄓˊ ㄔㄤˋ ㄍㄜ, ㄔㄠˇ ㄙˇ ㄌㄜ˙.',
            pinyin: 'lin2 ju1 zai4 lin2 yu4 fang2 yi1 zhi2 chang4 ge1, chao3 si3 le.',
            translation: 'お隣さんがお風呂場でずっと歌い続けていて、すごくうるさいです。',
            memo: ''
          },
          {
            word: '狗',
            sentence: '小狗在肉的前面一陣子等, 口水一直流著。',
            bopomofo: 'ㄒㄧㄠˇ ㄍㄡˇ ㄗㄞˋ ㄖㄡˋ ㄉㄜ˙ ㄑㄧㄢˊ ㄇㄧㄢˋ ㄧ ㄓㄣˋ ㄗ˙ ㄉㄥˇ, ㄎㄡˇ ㄕㄨㄟˇ ㄧ ㄓˊ ㄌㄧㄡˊ ㄓㄜ˙.',
            pinyin: 'xiao3 gou3 zai4 rou4 de qian2 mian4 yi1 zhen4 zi deng3, kou3 shui3 yi1 zhi2 liu2 zhe.',
            translation: '子犬は肉の前でしばらくの間待てをしているので、 ずっとよだれを垂らしています。',
            memo: ''
          },
          {
            word: '叫',
            sentence: '狗發現可疑人員並猛烈地叫著。',
            bopomofo: 'ㄍㄡˇ ㄈㄚ ㄒㄧㄢˋ ㄎㄜˇ ㄧˊ ㄖㄣˊ ㄩㄢˊ ㄅㄧㄥˋ ㄇㄥˇ ㄌㄧㄝˋ ㄉㄜ˙ ㄐㄧㄠˋ ㄓㄜ˙.',
            pinyin: 'gou3 fa1 xian4 ke3 yi2 ren2 yuan2 bing4 meng3 lie4 de jiao4 zhe.',
            translation: '犬は不審者を見つけて激しく吠えています。',
            memo: ''
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
            sentence: '奶奶很有禮貌， 跟遇到的每個人致意。',
            bopomofo: 'ㄋㄞˇ ㄋㄞ˙ ㄏㄣˇ ㄧㄡˇ ㄌㄧˇ ㄇㄠˋ, ㄍㄣ ㄩˋ ㄉㄠˋ ㄉㄜ˙ ㄇㄟˇ ㄍㄜ˙ ㄖㄣˊ ㄓˋ ㄧˋ.',
            pinyin: 'nai3 nai hen3 you3 li3 mao4, gen1 yu4 dao4 de mei3 ge4 ren2 zhi4 yi4.',
            translation: 'おばあさんはとても礼儀正しいので、 会う人みんなに挨拶をします。',
            memo: ''
          },
          {
            word: '過世',
            sentence: '如果我突然過世了，誰可以隱藏我的日記?',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄨㄛˇ ㄊㄨ ㄖㄢˊ ㄍㄨㄛˋ ㄕˋ ㄌㄜ˙  ㄕㄨㄟˊ ㄎㄜˇ ㄧˇ ㄧㄣˇ ㄘㄤˊ ㄨㄛˇ ㄉㄜ˙ ㄖˋ ㄐㄧˋ?',
            pinyin: 'ru2 guo3 wo3 tu1 ran2 guo4 shi4 le/liao3 shei2/shui2 ke3 yi3 yin3 cang2/zang4 wo3 de/di2/di4 ri4 ji4?',
            translation: '私が突然この世を去ったら、 誰が私の日記を隠してくれるでしょうか?',
            memo: ''
          },
          {
            word: '領養',
            sentence: '聽說你領養了獅子， 為了牠的餐每天需要幾公斤的肉?',
            bopomofo: 'ㄊㄧㄥ ㄕㄨㄛ ㄋㄧˇ ㄌㄧㄥˇ ㄧㄤˇ ㄌㄜ˙ ㄕ ㄗ˙, ㄨㄟˋ ㄌㄜ˙ ㄊㄚ ㄉㄜ˙ ㄘㄢ ㄇㄟˇ ㄊㄧㄢ ㄒㄩ ㄧㄠˋ ㄐㄧˇ ㄍㄨㄥ ㄐㄧㄣ ㄉㄜ˙ ㄖㄡˋ?',
            pinyin: 'ting1 shuo1 ni3 ling3 yang3 le shi1 zi, wei4 le ta1 de can1 mei3 tian1 xu1 yao4 ji3 gong1 jin1 de rou4?',
            translation: 'ライオンを引き取ったと聞いたのですが、 食事には毎日何キロの肉が必要なのでしょうか?',
            memo: ''
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
            sentence: '「萌」的定義就是太可愛得看到就很興奮心都融化了的感覺。',
            bopomofo: ' ㄇㄥˊ ㄉㄜ˙ ㄉㄧㄥˋ ㄧˋ ㄐㄧㄡˋ ㄕˋ ㄊㄞˋ ㄎㄜˇ ㄞˋ ㄉㄜˊ ㄎㄢˋ ㄉㄠˋ ㄐㄧㄡˋ ㄏㄣˇ ㄒㄧㄥ ㄈㄣˋ ㄒㄧㄣ ㄉㄡ ㄖㄨㄥˊ ㄏㄨㄚˋ ㄌㄜ˙ ㄉㄜ˙ ㄍㄢˇ ㄐㄩㄝˊ.',
            pinyin: 'meng2 de ding4 yi4 jiu4 shi4 tai4 ke3 ai4 de kan4 dao4 jiu4 hen3 xing1 fen4 xin1 dou1 rong2 hua4 le de gan3 jue2.',
            translation: '「萌え」とは、 可愛すぎて興奮のあまりメロメロになってしまう感覚の事です。',
            memo: ''
          },
          {
            word: '孤單',
            sentence: '情人節的時候在一個人情況會有更孤單的感覺。',
            bopomofo: 'ㄑㄧㄥˊ ㄖㄣˊ ㄐㄧㄝˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄗㄞˋ ㄧˊ ㄍㄜ˙ ㄖㄣˊ ㄑㄧㄥˊ ㄎㄨㄤˋ ㄏㄨㄟˋ ㄧㄡˇ ㄍㄥˋ ㄍㄨ ㄉㄢ ㄉㄜ˙ ㄍㄢˇ ㄐㄩㄝˊ.',
            pinyin: 'qing2 ren2 jie2 de shi2 hou4 zai4 yi1 ge4 ren2 qing2 kuang4 hui4 you3 geng4 gu1 dan1 de gan3 jue2.',
            translation: 'バレンタインデーに一人でいるとより寂しさを感じます。',
            memo: ''
          },
          {
            word: '牠',
            sentence: '對貓來說, 每天拿得到生魚片是牠的薪水的代替。',
            bopomofo: 'ㄉㄨㄟˋ ㄇㄠ ㄌㄞˊ ㄕㄨㄛ, ㄇㄟˇ ㄊㄧㄢ ㄋㄚˊ ㄉㄜ˙ ㄉㄠˋ ㄕㄥ ㄩˊ ㄆㄧㄢˋ ㄕˋ ㄊㄚ ㄉㄜ˙ ㄒㄧㄣ ㄕㄨㄟˇ ㄉㄜ˙ ㄉㄞˋ ㄊㄧˋ.',
            pinyin: 'dui4 mao1 lai2 shuo1, mei3 tian1 na2 de dao4 sheng1 yu2 pian4 shi4 ta1 de xin1 shui3 de dai4 ti4.',
            translation: '猫に言わせれば、 毎日お刺身を貰う事が彼の給料の代わりです。',
            memo: ''
          },
          {
            word: '髒',
            sentence: '我把咖啡灑在課本上, 幸虧最重要的部分沒弄髒了。',
            bopomofo: 'ㄨㄛˇ ㄅㄚˇ ㄎㄚ ㄈㄟ ㄙㄚˇ ㄗㄞˋ ㄎㄜˋ ㄅㄣˇ ㄕㄤˋ, ㄒㄧㄥˋ ㄎㄨㄟ ㄗㄨㄟˋ ㄓㄨㄥˋ ㄧㄠˋ ㄉㄜ˙ ㄅㄨˋ ㄈㄣˋ ㄇㄟˊ ㄋㄨㄥˋ ㄗㄤ ㄌㄜ˙.',
            pinyin: 'wo3 ba3 ka1 fei1 sa3 zai4 ke4 ben3 shang4, xing4 kui1 zui4 zhong4 yao4 de bu4 fen4 mei2 nong4 zang1 le.',
            translation: 'コーヒーを教科書にこぼしてしまいましたが、 幸い一番大事な部分は汚れていませんでした。',
            memo: ''
          },
          {
            word: '洗澡',
            sentence: '我的狗多少喜歡洗澡, 但是很討厭用肥皂被洗。',
            bopomofo: 'ㄨㄛˇ ㄉㄜ˙ ㄍㄡˇ ㄉㄨㄛ ㄕㄠˇ ㄒㄧˇ ㄏㄨㄢ ㄒㄧˇ ㄗㄠˇ, ㄉㄢˋ ㄕˋ ㄏㄣˇ ㄊㄠˇ ㄧㄢˋ ㄩㄥˋ ㄈㄟˊ ㄗㄠˋ ㄅㄟˋ ㄒㄧˇ.',
            pinyin: 'wo3 de gou3 duo1 shao3 xi3 huan1 xi3 zao3, dan4 shi4 hen3 tao3 yan4 yong4 fei2 zao4 bei4 xi3.',
            translation: '私の犬はシャワーはる程度好きなのですが、 石鹸で洗われるのは嫌がります。',
            memo: ''
          },
          {
            word: '養',
            sentence: '為了我養的倉鼠在倉鼠輪跑的聲音， 我無法入睡。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄨㄛˇ ㄧㄤˇ ㄉㄜ˙ ㄘㄤ ㄕㄨˇ ㄗㄞˋ ㄘㄤ ㄕㄨˇ ㄌㄨㄣˊ ㄆㄠˇ ㄉㄜ˙ ㄕㄥ ㄧㄣ, ㄨㄛˇ ㄨˊ ㄈㄚˇ ㄖㄨˋ ㄕㄨㄟˋ.',
            pinyin: 'wei4 le wo3 yang3 de cang1 shu3 zai4 cang1 shu3 lun2 pao3 de sheng1 yin1, wo3 wu2 fa3 ru4 shui4.',
            translation: '飼っているハムスターが回し車で回る音で寝られません。',
            memo: ''
          },
          {
            word: '亂',
            sentence: '因為房間裡很亂了我以為小偷已經進來了， 但是我的狗是罪犯。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄈㄤˊ ㄐㄧㄢ ㄌㄧˇ ㄏㄣˇ ㄌㄨㄢˋ ㄌㄜ˙ ㄨㄛˇ ㄧˇ ㄨㄟˊ ㄒㄧㄠˇ ㄊㄡ ㄧˇ ㄐㄧㄥ ㄐㄧㄣˋ ㄌㄞˊ ㄌㄜ˙, ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄉㄜ˙ ㄍㄡˇ ㄕˋ ㄗㄨㄟˋ ㄈㄢˋ.',
            pinyin: 'yin1 wei4 fang2 jian1 li3 hen3 luan4 le wo3 yi3 wei2 xiao3 tou1 yi3 jing1 jin4 lai2 le, dan4 shi4 wo3 de gou3 shi4 zui4 fan4.',
            translation: '部屋が散らかっているので泥棒が入ったのかと思いましたが、 私の犬が犯人でした。',
            memo: ''
          },
          {
            word: '咬',
            sentence: '當我被貓咬傷的時候， 我作為回報也要咬牠一口。',
            bopomofo: 'ㄉㄤ ㄨㄛˇ ㄅㄟˋ ㄇㄠ ㄧㄠˇ ㄕㄤ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄨㄛˇ ㄗㄨㄛˋ ㄨㄟˊ ㄏㄨㄟˊ ㄅㄠˋ ㄧㄝˇ ㄧㄠˋ ㄧㄠˇ ㄊㄚ ㄧ ㄎㄡˇ.',
            pinyin: 'dang1 wo3 bei4 mao1 yao3 shang1 de shi2 hou4, wo3 zuo4 wei2 hui2 bao4 ye3 yao3 yao3 ta1 yi1 kou3.',
            translation: '猫に噛まれた時は、 私もお返しに噛み返します。',
            memo: ''
          },
          {
            word: '打',
            sentence: '即使我從未被父親打過， 每天都有貓在打我。',
            bopomofo: 'ㄐㄧˊ ㄕˇ ㄨㄛˇ ㄘㄨㄥˊ ㄨㄟˋ ㄅㄟˋ ㄈㄨˋ ㄑㄧㄣ ㄉㄚˇ ㄍㄨㄛˋ, ㄇㄟˇ ㄊㄧㄢ ㄉㄨ ㄧㄡˇ ㄇㄠ ㄗㄞˋ ㄉㄚˇ ㄨㄛˇ.',
            pinyin: 'ji2 shi3 wo3 cong2 wei4 bei4 fu4 qin1 da3 guo4, mei3 tian1 dou1 you3 mao1 zai4 da3 wo3.',
            translation: '親父にもぶたれた事ないのに、 猫には毎日猫パンチされます。',
            memo: ''
          },
          {
            word: '分手',
            sentence: '因為分手了的重傷， 他看上去像一副魂不守舍。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄈㄣ ㄕㄡˇ ㄌㄜ˙ ㄉㄜ˙ ㄓㄨㄥˋ ㄕㄤ, ㄊㄚ ㄎㄢˋ ㄕㄤˋ ㄑㄩˋ ㄒㄧㄤˋ ㄧ ㄈㄨˋ ㄏㄨㄣˊ ㄅㄨˋ ㄕㄡˇ ㄕㄜˋ.',
            pinyin: 'yin1 wei4 fen1 shou3 le de zhong4 shang1, ta1 kan4 shang4 qu4 xiang4 yi1 fu4 hun2 bu4 shou3 she4.',
            translation: '破局したダメージで、 彼はまるで抜け殻のようになっています。',
            memo: ''
          },
          {
            word: '緊張',
            sentence: '我不常出去， 所以只是坐捷運很緊張。',
            bopomofo: 'ㄨㄛˇ ㄅㄨˋ ㄔㄤˊ ㄔㄨ ㄑㄩˋ, ㄙㄨㄛˇ ㄧˇ ㄓˇ ㄕˋ ㄗㄨㄛˋ ㄐㄧㄝˊ ㄩㄣˋ ㄏㄣˇ ㄐㄧㄣˇ ㄓㄤ.',
            pinyin: 'wo3 bu4 chang2 chu1 qu4, suo3 yi3 zhi3 shi4 zuo4 jie2 yun4 hen3 jin3 zhang1.',
            translation: 'あまり外に出る事がないので、 電車に乗るだけでも緊張します。',
            memo: ''
          },
          {
            word: '減輕',
            sentence: '確實行李很重， 但是我不能減輕糖果和酒的量。',
            bopomofo: 'ㄑㄩㄝˋ ㄕˊ ㄒㄧㄥˊ ㄌㄧˇ ㄏㄣˇ ㄓㄨㄥˋ, ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄅㄨˋ ㄋㄥˊ ㄐㄧㄢˇ ㄑㄧㄥ ㄊㄤˊ ㄍㄨㄛˇ ㄏㄢˋ ㄐㄧㄡˇ ㄉㄜ˙ ㄌㄧㄤˋ.',
            pinyin: 'que4 shi2 xing2 li3 hen3 zhong4, dan4 shi4 wo3 bu4 neng2 jian3 qing1 tang2 guo3 han4 jiu3 de liang4.',
            translation: '確かに荷物は重いのですが、 お菓子とお酒だけはどうしても減らせません。',
            memo: ''
          },
          {
            word: '送',
            sentence: '我第一次約會就送她去了寄生蟲博物館， 可能是個錯誤。',
            bopomofo: 'ㄨㄛˇ ㄉㄧˋ ㄧ ㄘˋ ㄩㄝ ㄏㄨㄟˋ ㄐㄧㄡˋ ㄙㄨㄥˋ ㄊㄚ ㄑㄩˋ ㄌㄜ˙ ㄐㄧˋ ㄕㄥ ㄔㄨㄥˊ ㄅㄛˊ ㄨˋ ㄍㄨㄢˇ, ㄎㄜˇ ㄋㄥˊ ㄕˋ ㄍㄜˋ ㄘㄨㄛˋ ㄨˋ.',
            pinyin: 'wo3 di4 yi1 ci4 yue1 hui4 jiu4 song4 ta1 qu4 le ji4 sheng1 chong2 bo2 wu4 guan3, ke3 neng2 shi4 ge4 cuo4 wu4.',
            translation: '初デートで彼女を寄生虫博物館に連れていったのですが、 間違いだったかもしれません。',
            memo: ''
          },
          {
            word: '美容院',
            sentence: '去美容院的時候應該不穿高領衣服比較好。',
            bopomofo: 'ㄑㄩˋ ㄇㄟˇ ㄖㄨㄥˊ ㄩㄢˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄧㄥ ㄍㄞ ㄅㄨˋ ㄔㄨㄢ ㄍㄠ ㄌㄧㄥˇ ㄧ ㄈㄨˊ ㄅㄧˇ ㄐㄧㄠˋ ㄏㄠˇ.',
            pinyin: 'qu4 mei3 rong2 yuan4 de shi2 hou4 ying1 gai1 bu4 chuan1 gao1 ling3 yi1 fu2 bi3 jiao4 hao3.',
            translation: '美容院に行くときは、 タートルネックの服を着ない方がいいです。',
            memo: ''
          },
          {
            word: '推車',
            sentence: '我的孩子已經相當長大了， 但是還想上推車。',
            bopomofo: 'ㄨㄛˇ ㄉㄜ˙ ㄏㄞˊ ㄗ˙ ㄧˇ ㄐㄧㄥ ㄒㄧㄤ ㄉㄤ ㄓㄤˇ ㄉㄚˋ ㄌㄜ˙, ㄉㄢˋ ㄕˋ ㄏㄞˊ ㄒㄧㄤˇ ㄕㄤˋ ㄊㄨㄟ ㄔㄜ.',
            pinyin: 'wo3 de hai2 zi yi3 jing1 xiang1 dang1 zhang3 da4 le, dan4 shi4 hai2 xiang3 shang4 tui1 che1.',
            translation: '私の子どもは結構大きいのですが、 いまだにベビーカーに乗りたがります。',
            memo: ''
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
            sentence: '他溺愛貓並且總是在他身邊， 所以我不知道他還是貓是寵物。',
            bopomofo: 'ㄊㄚ ㄋㄧˋ ㄞˋ ㄇㄠ ㄅㄧㄥˋ ㄑㄧㄝˇ ㄗㄨㄥˇ ㄕˋ ㄗㄞˋ ㄊㄚ ㄕㄣ ㄅㄧㄢ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄅㄨˋ ㄓ ㄉㄠˋ ㄊㄚ ㄏㄞˊ ㄕˋ ㄇㄠ ㄕˋ ㄔㄨㄥˇ ㄨˋ.',
            pinyin: 'ta1 ni4 ai4 mao1 bing4 qie3 zong3 shi4 zai4 ta1 shen1 bian1, suo3 yi3 wo3 bu4 zhi1 dao4 ta1 hai2 shi4 mao1 shi4 chong3 wu4.',
            translation: '彼は猫を溺愛していていつも側にいるので、 彼と猫どちらがペットなのか分かりません。',
            memo: ''
          },
          {
            word: '單身',
            sentence: '反正我是單身， 所以我不必洗大概三天的澡。',
            bopomofo: 'ㄈㄢˇ ㄓㄥˋ ㄨㄛˇ ㄕˋ ㄉㄢ ㄕㄣ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄅㄨˊ ㄅㄧˋ ㄒㄧˇ ㄉㄚˋ ㄍㄞˋ ㄙㄢ ㄊㄧㄢ ㄉㄜ˙ ㄗㄠˇ.',
            pinyin: 'fan3 zheng4 wo3 shi4 dan1 shen1, suo3 yi3 wo3 bu2 bi4 xi3 da4 gai4 san1 tian1 de zao3.',
            translation: 'どうせ独り身なので、 3日くらいお風呂に入らなくても大丈夫です。',
            memo: ''
          },
          {
            word: '醫院',
            sentence: '我的狗沒想到會去醫院， 正在因恐懼而顫抖。',
            bopomofo: 'ㄨㄛˇ ㄉㄜ˙ ㄍㄡˇ ㄇㄟˊ ㄒㄧㄤˇ ㄉㄠˋ ㄏㄨㄟˋ ㄑㄩˋ ㄧ ㄩㄢˋ, ㄓㄥˋ ㄗㄞˋ ㄧㄣ ㄎㄨㄥˇ ㄐㄩˋ ㄦˊ ㄔㄢˋ ㄉㄡˇ.',
            pinyin: 'wo3 de gou3 mei2 xiang3 dao4 hui4 qu4 yi3 yuan4, zheng4 zai4 yin1 kong3 ju4 er2 chan4 dou3.',
            translation: '犬は病院に行くとは予想していなかったようで、 恐怖でプルプルしています。',
            memo: ''
          },
          {
            word: '意見',
            sentence: '她在熱戀中， 以至於沒有聽到反對的意見。',
            bopomofo: 'ㄊㄚ ㄗㄞˋ ㄖㄜˋ ㄌㄧㄢˋ ㄓㄨㄥ, ㄧˇ ㄓˋ ㄩˊ ㄇㄟˊ ㄧㄡˇ ㄊㄧㄥ ㄉㄠˋ ㄈㄢˇ ㄉㄨㄟˋ ㄉㄜ˙ ㄧˋ ㄐㄧㄢˋ.',
            pinyin: 'ta1 zai4 re4 lian4 zhong1, yi3 zhi4 yu2 mei2 you3 ting1 dao4 fan3 dui4 de yi4 jian4.',
            translation: '彼女は恋愛にのめり込んでいるので、 反対意見は耳に入りません。',
            memo: ''
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
            sentence: '最心情平靜的就是帶狗散步的時候。',
            bopomofo: 'ㄗㄨㄟˋ ㄒㄧㄣ ㄑㄧㄥˊ ㄆㄧㄥˊ ㄐㄧㄥˋ ㄉㄜ˙ ㄐㄧㄡˋ ㄕˋ ㄉㄞˋ ㄍㄡˇ ㄙㄢˋ ㄅㄨˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ.',
            pinyin: 'zui4 xin1 qing2 ping2 jing4 de jiu4 shi4 dai4 gou3 san4 bu4 de shi2 hou4.',
            translation: '一番安らぐのは、 犬を散歩に連れていく時間です。',
            memo: ''
          },
          {
            word: '家庭',
            sentence: '我以為家庭中個人會叫醒我， 但他們都睡過頭了。',
            bopomofo: 'ㄨㄛˇ ㄧˇ ㄨㄟˊ ㄐㄧㄚ ㄊㄧㄥˊ ㄓㄨㄥ ㄍㄜˋ ㄖㄣˊ ㄏㄨㄟˋ ㄐㄧㄠˋ ㄒㄧㄥˇ ㄨㄛˇ, ㄉㄢˋ ㄊㄚ ㄇㄣ˙ ㄉㄡ ㄕㄨㄟˋ ㄍㄨㄛˋ ㄊㄡˊ ㄌㄜ˙.',
            pinyin: 'wo3 yi3 wei2 jia1 ting2 zhong1 ge4 ren2 hui4 jiao4 xing3 wo3, dan4 ta1 men dou1 shui4 guo4 tou2 le.',
            translation: '家族の誰かが起こしてくれるだろうと思っていましたが、 全員寝坊しました。',
            memo: ''
          },
          {
            word: '真正',
            sentence: '我看到他誤以金槍魚罐頭吃貓罐頭， 我以為他是個真正的白痴。',
            bopomofo: 'ㄨㄛˇ ㄎㄢˋ ㄉㄠˋ ㄊㄚ ㄨˋ ㄧˇ ㄐㄧㄣ ㄑㄧㄤ ㄩˊ ㄍㄨㄢˋ ㄊㄡ˙ ㄔ ㄇㄠ ㄍㄨㄢˋ ㄊㄡ˙, ㄨㄛˇ ㄧˇ ㄨㄟˊ ㄊㄚ ㄕˋ ㄍㄜˋ ㄓㄣ ㄓㄥˋ ㄉㄜ˙ ㄅㄞˊ ㄔ.',
            pinyin: 'wo3 kan4 dao4 ta1 wu4 yi3 jin1 qiang1 yu2 guan4 tou2 chi1 mao1 guan4 tou2, wo3 yi3 wei2 ta1 shi4 ge4 zhen1 zheng4 de bai2 chi1.',
            translation: 'ツナ缶と間違えて猫缶を食べているのを見て、 彼は本物のバカなのだと思いました。',
            memo: ''
          },
          {
            word: '幸福',
            sentence: '她在跳蚤市場找到一些便宜貨， 有了很幸福的感覺。',
            bopomofo: 'ㄊㄚ ㄗㄞˋ ㄊㄧㄠˋ ㄗㄠˇ ㄕˋ ㄔㄤˇ ㄓㄠˇ ㄉㄠˋ ㄧ ㄒㄧㄝ ㄆㄧㄢˊ ㄧˊ ㄏㄨㄛˋ, ㄧㄡˇ ㄌㄜ˙ ㄏㄣˇ ㄒㄧㄥˋ ㄈㄨˊ ㄉㄜ˙ ㄍㄢˇ ㄐㄩㄝˊ.',
            pinyin: 'ta1 zai4 tiao4 zao3 shi4 chang3 zhao3 dao4 yi1 xie1 pian2 yi2 huo4, you3 le hen3 xing4 fu2 de gan3 jue2.',
            translation: '彼女はフリーマーケットで掘り出し物を見つけて、 とても幸せな気分になりました。',
            memo: ''
          },
          {
            word: '跌倒',
            sentence: '如果三秒內， 即使是跌倒在地上的食物你可以吃。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄙㄢ ㄇㄧㄠˇ ㄋㄟˋ, ㄐㄧˊ ㄕˇ ㄕˋ ㄉㄧㄝ ㄉㄠˇ ㄗㄞˋ ㄉㄧˋ ㄕㄤˋ ㄉㄜ˙ ㄕˊ ㄨˋ ㄋㄧˇ ㄎㄜˇ ㄧˇ ㄔ.',
            pinyin: 'ru2 guo3 san1 miao3 nei4, ji2 shi3 shi4 die1 dao3 zai4 di4 shang4 de shi2 wu4 ni3 ke3 yi3 chi1.',
            translation: '床に落ちた食べ物でも、 3秒以内なら食べられます。',
            memo: ''
          },
          {
            word: '當成',
            sentence: '他通常當成認真的人， 但是實際是一個花花公子。',
            bopomofo: 'ㄊㄚ ㄊㄨㄥ ㄔㄤˊ ㄉㄤ ㄔㄥˊ ㄖㄣˋ ㄓㄣ ㄉㄜ˙ ㄖㄣˊ, ㄉㄢˋ ㄕˋ ㄕˊ ㄐㄧˋ ㄕˋ ㄧ ㄍㄜˋ ㄏㄨㄚ ㄏㄨㄚ ㄍㄨㄥ ㄗˇ.',
            pinyin: 'ta1 tong1 chang2 dang1 cheng2 ren4 zhen1 de ren2, dan4 shi4 shi2 ji4 shi4 yi1 ge4 hua1 hua1 gong1 zi3.',
            translation: '彼は真面目な人に見られますが、 実際は遊び人です。',
            memo: ''
          },
          {
            word: '忍不住',
            sentence: '如果我在火車上忍不住笑我應該怎麼辦?',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄨㄛˇ ㄗㄞˋ ㄏㄨㄛˇ ㄔㄜ ㄕㄤˋ ㄖㄣˇ ㄅㄨˊ ㄓㄨˋ ㄒㄧㄠˋ ㄨㄛˇ ㄧㄥ ㄍㄞ ㄗㄣˇ ㄇㄜ˙ ㄅㄢˋ?',
            pinyin: 'ru2 guo3 wo3 zai4 huo3 che1 shang4 ren3 bu2 zhu4 xiao4 wo3 ying1 gai1 zen3 me ban4?',
            translation: '電車の中で笑いをこらえきれない時はどうしたらいいのでしょうか?',
            memo: ''
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
            sentence: '當阿姨做大量菜的時， 她總是把它們分給我。',
            bopomofo: 'ㄉㄤ ㄚ ㄧˊ ㄗㄨㄛˋ ㄉㄚˋ ㄌㄧㄤˋ ㄘㄞˋ ㄉㄜ˙ ㄕˊ, ㄊㄚ ㄗㄨㄥˇ ㄕˋ ㄅㄚˇ ㄊㄚ ㄇㄣ˙ ㄈㄣ ㄍㄟˇ ㄨㄛˇ.',
            pinyin: 'dang1 a1 yi2 zuo4 da4 liang4 cai4 de shi2, ta1 zong3 shi4 ba3 ta1 men fen1 gei3 wo3.',
            translation: 'おばさんはおかずをたくさん作ると、 いつも私に分けてくれます。',
            memo: ''
          },
          {
            word: '先生',
            sentence: '再打二折， 我的先生也不買不合身的衣服。',
            bopomofo: 'ㄗㄞˋ ㄉㄚˇ ㄦˋ ㄓㄜˊ, ㄨㄛˇ ㄉㄜ˙ ㄒㄧㄢ ㄕㄥ ㄧㄝˇ ㄅㄨˋ ㄇㄞˇ ㄅㄨˋ ㄏㄜˊ ㄕㄣ ㄉㄜ˙ ㄧ ㄈㄨˊ.',
            pinyin: 'zai4 da3 er4 zhe2, wo3 de xian1 sheng1 ye3 bu4 mai3 bu4 he2 shen1 de yi1 fu2.',
            translation: '20%引きだとしても、 私の夫はサイズが合わない服は買いません。',
            memo: ''
          },
          {
            word: '下班',
            sentence: '因為寵物等著我， 下班後我盡量早回家。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄔㄨㄥˇ ㄨˋ ㄉㄥˇ ㄓㄜ˙ ㄨㄛˇ, ㄒㄧㄚˋ ㄅㄢ ㄏㄡˋ ㄨㄛˇ ㄐㄧㄣˋ ㄌㄧㄤˋ ㄗㄠˇ ㄏㄨㄟˊ ㄐㄧㄚ.',
            pinyin: 'yin1 wei4 chong3 wu4 deng3 zhe wo3, xia4 ban1 hou4 wo3 jin4 liang4 zao3 hui2 jia1.',
            translation: 'ペットが待っているので、 仕事を終えたらできるだけ早く帰宅します。',
            memo: ''
          },
          {
            word: '改',
            sentence: '孩子問我改他的作業， 但是我居然不懂任何數學問題。',
            bopomofo: 'ㄏㄞˊ ㄗ˙ ㄨㄣˋ ㄨㄛˇ ㄍㄞˇ ㄊㄚ ㄉㄜ˙ ㄗㄨㄛˋ ㄧㄝˋ, ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄐㄩ ㄖㄢˊ ㄅㄨˋ ㄉㄨㄥˇ ㄖㄣˋ ㄏㄜˊ ㄕㄨˋ ㄒㄩㄝˊ ㄨㄣˋ ㄊㄧˊ.',
            pinyin: 'hai2 zi wen4 wo3 gai3 ta1 de zuo4 ye4, dan4 shi4 wo3 ju1 ran2 bu4 dong3 ren4 he2 shu4 xue2 wen4 ti2.',
            translation: '宿題をチェックするよう子どもに頼まれたのですが、 驚いたことにどの数学の問題も分かりませんでした。',
            memo: ''
          },
          {
            word: '公公',
            sentence: '公公對杯子倒滿了啤酒， 享受著一點幸福的時間。',
            bopomofo: 'ㄍㄨㄥ ㄍㄨㄥ ㄉㄨㄟˋ ㄅㄟ ㄗ˙ ㄉㄠˋ ㄇㄢˇ ㄌㄜ˙ ㄆㄧˊ ㄐㄧㄡˇ, ㄒㄧㄤˇ ㄕㄡˋ ㄓㄜ˙ ㄧˋ ㄉㄧㄢˇ ㄒㄧㄥˋ ㄈㄨˊ ㄉㄜ˙ ㄕˊ ㄐㄧㄢ.',
            pinyin: 'gong1 gong1 dui4 bei1 zi dao4 man3 le pi2 jiu3, xiang3 shou4 zhe yi1 dian3 xing4 fu2 de shi2 jian1.',
            translation: '義父はグラスにビールをなみなみとついで、 小さな幸せを満喫しています。',
            memo: ''
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
            sentence: '他很靠父母的家， 所以他不能決定一個人住。',
            bopomofo: 'ㄊㄚ ㄏㄣˇ ㄎㄠˋ ㄈㄨˋ ㄇㄨˇ ㄉㄜ˙ ㄐㄧㄚ, ㄙㄨㄛˇ ㄧˇ ㄊㄚ ㄅㄨˋ ㄋㄥˊ ㄐㄩㄝˊ ㄉㄧㄥˋ ㄧˊ ㄍㄜ˙ ㄖㄣˊ ㄓㄨˋ.',
            pinyin: 'ta1 hen3 kao4 fu4 mu3 de jia1, suo3 yi3 ta1 bu4 neng2 jue2 ding4 yi1 ge4 ren2 zhu4.',
            translation: '彼は実家に依存しているので、 一人暮らしをする決心がつきません。',
            memo: ''
          },
          {
            word: '單親',
            sentence: '那個女孩好好的擔心單親的媽媽， 經常幫忙做家務。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄋㄩˇ ㄏㄞˊ ㄏㄠˇ ㄏㄠˇ ㄉㄜ˙ ㄉㄢ ㄒㄧㄣ ㄉㄢ ㄑㄧㄣ ㄉㄜ˙ ㄇㄚ ㄇㄚ, ㄐㄧㄥ ㄔㄤˊ ㄅㄤ ㄇㄤˊ ㄗㄨㄛˋ ㄐㄧㄚ ㄨˋ.',
            pinyin: 'na4 ge4 nu3 hai2 hao3 hao3 de dan1 xin1 dan1 qin1 de ma1 ma1, jing1 chang2 bang1 mang2 zuo4 jia1 wu4.',
            translation: 'その女の子はシングルマザーの母親を気遣って、 いつも家事を手伝っています。',
            memo: ''
          },
          {
            word: '貴族',
            sentence: '看著很努力工作的我， 貓過像貴族的生活。',
            bopomofo: 'ㄎㄢˋ ㄓㄜ˙ ㄏㄣˇ ㄋㄨˇ ㄌㄧˋ ㄍㄨㄥ ㄗㄨㄛˋ ㄉㄜ˙ ㄨㄛˇ, ㄇㄠ ㄍㄨㄛˋ ㄒㄧㄤˋ ㄍㄨㄟˋ ㄗㄨˊ ㄉㄜ˙ ㄕㄥ ㄏㄨㄛˊ.',
            pinyin: 'kan4 zhe hen3 nu3 li4 gong1 zuo4 de wo3, mao1 guo4 xiang4 gui4 zu2 de sheng1 huo2.',
            translation: 'せかせか働いている私を尻目に、 猫は貴族のような生活をしています。',
            memo: ''
          },
          {
            word: '時代',
            sentence: '現在不敢相信以前有一段時代沒有電器用品。',
            bopomofo: 'ㄒㄧㄢˋ ㄗㄞˋ ㄅㄨˋ ㄍㄢˇ ㄒㄧㄤ ㄒㄧㄣˋ ㄧˇ ㄑㄧㄢˊ ㄧㄡˇ ㄧ ㄉㄨㄢˋ ㄕˊ ㄉㄞˋ ㄇㄟˊ ㄧㄡˇ ㄉㄧㄢˋ ㄑㄧˋ ㄩㄥˋ ㄆㄧㄣˇ.',
            pinyin: 'xian4 zai4 bu4 gan3 xiang1 xin4 yi3 qian2 you3 yi1 duan4 shi2 dai4 mei2 you3 dian4 qi4 yong4 pin3.',
            translation: '電化製品が無い時代があったなんて、今では信じられません。',
            memo: ''
          },
          {
            word: '強',
            sentence: '我的貓似乎對吵架很強， 牠在當老闆貓把這附近凌駕。',
            bopomofo: 'ㄨㄛˇ ㄉㄜ˙ ㄇㄠ ㄙˋ ㄏㄨ ㄉㄨㄟˋ ㄔㄠˇ ㄐㄧㄚˋ ㄏㄣˇ ㄑㄧㄤˊ, ㄊㄚ ㄗㄞˋ ㄉㄤ ㄌㄠˇ ㄅㄢˇ ㄇㄠ ㄅㄚˇ ㄓㄜˋ ㄈㄨˋ ㄐㄧㄣˋ ㄌㄧㄥˊ ㄐㄧㄚˋ.',
            pinyin: 'wo3 de mao1 si4 hu1 dui4 chao3 jia4 hen3 qiang2, ta1 zai4 dang1 lao3 ban3 mao1 ba3 zhe4 fu4 jin4 ling2 jia4.',
            translation: '私の猫は喧嘩がとても強いようで、 この辺りのボス猫として君臨しています。',
            memo: ''
          },
          {
            word: '追',
            sentence: '她是對他可望而不可及， 追是沒有用的。',
            bopomofo: 'ㄊㄚ ㄕˋ ㄉㄨㄟˋ ㄊㄚ ㄎㄜˇ ㄨㄤˋ ㄦˊ ㄅㄨˋ ㄎㄜˇ ㄐㄧˊ, ㄓㄨㄟ ㄕˋ ㄇㄟˊ ㄧㄡˇ ㄩㄥˋ ㄉㄜ˙.',
            pinyin: 'ta1 shi4 dui4 ta1 ke3 wang4 er2 bu4 ke3 ji2, zhui1 shi4 mei2 you3 yong4 de.',
            translation: '彼女は彼にとって高嶺の花なので、 追いかけるのは無意味です。',
            memo: ''
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
            sentence: '為了安排旅行她先網路上查找飛機票。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄢ ㄆㄞˊ ㄌㄩˇ ㄒㄧㄥˊ ㄊㄚ ㄒㄧㄢ ㄨㄤˇ ㄌㄨˋ ㄕㄤˋ ㄔㄚˊ ㄓㄠˇ ㄈㄟ ㄐㄧ ㄆㄧㄠˋ.',
            pinyin: 'wei4 le an1 pai2 lu3 xing2 ta1 xian1 wang3 lu4 shang4 cha2 zhao3 fei1 ji1 piao4.',
            translation: '旅行を手配するために、 彼女はまずインターネットで飛行機のチケットを調べました。',
            memo: ''
          },
          {
            word: '享受',
            sentence: '她的朋友把紅酒送了給她， 所以她打算跟起司享受那瓶。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄆㄥˊ ㄧㄡˇ ㄅㄚˇ ㄏㄨㄥˊ ㄐㄧㄡˇ ㄙㄨㄥˋ ㄌㄜ˙ ㄍㄟˇ ㄊㄚ, ㄙㄨㄛˇ ㄧˇ ㄊㄚ ㄉㄚˇ ㄙㄨㄢˋ ㄍㄣ ㄑㄧˇ ㄙ ㄒㄧㄤˇ ㄕㄡˋ ㄋㄚˋ ㄆㄧㄥˊ.',
            pinyin: 'ta1 de peng2 you3 ba3 hong2 jiu3 song4 le gei3 ta1, suo3 yi3 ta1 da3 suan4 gen1 qi3 si1 xiang3 shou4 na4 ping2.',
            translation: '友達が赤ワインを贈ってくれたので、 彼女はチーズと一緒にそのボトルを楽しむつもりです。',
            memo: ''
          },
          {
            word: '身邊',
            sentence: '突然我的手機響了， 在我身邊的貓很驚訝著跳了起來。',
            bopomofo: 'ㄊㄨ ㄖㄢˊ ㄨㄛˇ ㄉㄜ˙ ㄕㄡˇ ㄐㄧ ㄒㄧㄤˇ ㄌㄜ˙, ㄗㄞˋ ㄨㄛˇ ㄕㄣ ㄅㄧㄢ ㄉㄜ˙ ㄇㄠ ㄏㄣˇ ㄐㄧㄥ ㄧㄚˋ ㄓㄜ˙ ㄊㄧㄠˋ ㄌㄜ˙ ㄑㄧˇ ㄌㄞˊ.',
            pinyin: 'tu1 ran2 wo3 de shou3 ji1 xiang3 le, zai4 wo3 shen1 bian1 de mao1 hen3 jing1 ya4 zhe tiao4 le qi3 lai2.',
            translation: '突然携帯が鳴ったので、 私の側にいた猫はびっくりして飛び上がりました。',
            memo: ''
          },
          {
            word: '伴',
            sentence: '他不想一個人逛街買衣服， 所以他問朋友做伴他。',
            bopomofo: 'ㄊㄚ ㄅㄨˋ ㄒㄧㄤˇ ㄧˊ ㄍㄜ˙ ㄖㄣˊ ㄍㄨㄤˋ ㄐㄧㄝ ㄇㄞˇ ㄧ ㄈㄨˊ, ㄙㄨㄛˇ ㄧˇ ㄊㄚ ㄨㄣˋ ㄆㄥˊ ㄧㄡˇ ㄗㄨㄛˋ ㄅㄢˋ ㄊㄚ.',
            pinyin: 'ta1 bu4 xiang3 yi1 ge4 ren2 guang4 jie1 mai3 yi1 fu2, suo3 yi3 ta1 wen4 peng2 you3 zuo4 ban4 ta1.',
            translation: '彼は一人で服を買いに行きたくなかったので、 友達に付き添ってもらいました。',
            memo: ''
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
            sentence: '因為壓力太大了， 他有一點躊躇成家。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄧㄚ ㄌㄧˋ ㄊㄞˋ ㄉㄚˋ ㄌㄜ˙, ㄊㄚ ㄧㄡˇ ㄧˋ ㄉㄧㄢˇ ㄔㄡˊ ㄔㄨˊ ㄔㄥˊ ㄐㄧㄚ.',
            pinyin: 'yin1 wei4 ya1 li4 tai4 da4 le, ta1 you3 yi1 dian3 chou2 chu2 cheng2 jia1.',
            translation: 'プレッシャーが大きすぎるので、 彼は結婚する事に少し躊躇いを感じています。',
            memo: ''
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
            sentence: '我家有三個正是能吃的時候的， 所以因此養家糊口相當困難。',
            bopomofo: 'ㄨㄛˇ ㄐㄧㄚ ㄧㄡˇ ㄙㄢ ㄍㄜ˙ ㄓㄥˋ ㄕˋ ㄋㄥˊ ㄔ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄉㄜ˙, ㄙㄨㄛˇ ㄧˇ ㄧㄣ ㄘˇ ㄧㄤˇ ㄐㄧㄚ ㄏㄨˊ ㄎㄡˇ ㄒㄧㄤ ㄉㄤ ㄎㄨㄣˋ ㄋㄢˊ.',
            pinyin: 'wo3 jia1 you3 san1 ge4 zheng4 shi4 neng2 chi1 de shi2 hou4 de, suo3 yi3 yin1 ci3 yang3 jia1 hu2 kou3 xiang1 dang1 kun4 nan2.',
            translation: '食べ盛りの子供が三人もいるので、 家族を養うのはなかなか大変です。',
            memo: ''
          },
          {
            word: '責任',
            sentence: '吃得太多不是我的責任， 因為我媽媽的飯很好吃。',
            bopomofo: 'ㄔ ㄉㄜˊ ㄊㄞˋ ㄉㄨㄛ ㄅㄨˊ ㄕˋ ㄨㄛˇ ㄉㄜ˙ ㄗㄜˊ ㄖㄣˋ, ㄧㄣ ㄨㄟˋ ㄨㄛˇ ㄇㄚ ㄇㄚ ㄉㄜ˙ ㄈㄢˋ ㄏㄣˇ ㄏㄠˇ ㄔ.',
            pinyin: 'chi1 de tai4 duo1 bu2 shi4 wo3 de ze2 ren4, yin1 wei4 wo3 ma1 ma1 de fan4 hen3 hao3 chi1.',
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
            sentence: '父母很寬縱地教養了他， 所以他長大得很大方。',
            bopomofo: 'ㄈㄨˋ ㄇㄨˇ ㄏㄣˇ ㄎㄨㄢ ㄗㄨㄥˋ ㄉㄜ˙ ㄐㄧㄠˋ ㄧㄤˇ ㄌㄜ˙ ㄊㄚ, ㄙㄨㄛˇ ㄧˇ ㄊㄚ ㄓㄤˇ ㄉㄚˋ ㄉㄜ˙ ㄏㄣˇ ㄉㄚˋ ㄈㄤ.',
            pinyin: 'fu4 mu3 hen3 kuan1 zong4 di4 jiao4 yang3 le ta1, suo3 yi3 ta1 zhang3 da4 de hen3 da4 fang1.',
            translation: '両親は彼を甘やかして育てたので、 彼はのびのびと育ちました。',
            memo: ''
          },
          {
            word: '接受',
            sentence: '他們不能接受相互的點子，所以相互保持著距離。',
            bopomofo: 'ㄊㄚ ㄇㄣ˙ ㄅㄨˋ ㄋㄥˊ ㄐㄧㄝ ㄕㄡˋ ㄒㄧㄤ ㄏㄨˋ ㄉㄜ˙ ㄉㄧㄢˇ ㄗˇ, ㄙㄨㄛˇ ㄧˇ ㄒㄧㄤ ㄏㄨˋ ㄅㄠˇ ㄔˊ ㄓㄜ˙ ㄐㄩˋ ㄌㄧˊ.',
            pinyin: 'ta1 men bu4 neng2 jie1 shou4 xiang1 hu4 de dian3 zi3, suo3 yi3 xiang1 hu4 bao3 chi2 zhe ju4 li4.',
            translation: '彼らはお互いの考えを受け入れることができないので、 距離をおいています。',
            memo: ''
          },
          {
            word: '組成',
            sentence: '他們組成著籃球愛好的俱樂部， 每星期六去練習。',
            bopomofo: 'ㄊㄚ ㄇㄣ˙ ㄗㄨˇ ㄔㄥˊ ㄓㄜ˙ ㄌㄢˊ ㄑㄧㄡˊ ㄞˋ ㄏㄠˋ ㄉㄜ˙ ㄐㄩˋ ㄌㄜˋ ㄅㄨˋ, ㄇㄟˇ ㄒㄧㄥ ㄑㄧ ㄌㄧㄡˋ ㄑㄩˋ ㄌㄧㄢˋ ㄒㄧˊ.',
            pinyin: 'ta1 men zu3 cheng2 zhe lan2 qiu2 ai4 hao4 de ju4 le4 bu4, mei3 xing1 qi1 liu4 qu4 lian4 xi2.',
            translation: '彼らはバスケットボールの同好会を形成していて、 毎週土曜日に練習しています。',
            memo: ''
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
            sentence: '因此他對工作太認真的， 所以有的時候效率不高。',
            bopomofo: 'ㄧㄣ ㄘˇ ㄊㄚ ㄉㄨㄟˋ ㄍㄨㄥ ㄗㄨㄛˋ ㄊㄞˋ ㄖㄣˋ ㄓㄣ ㄉㄜ˙, ㄙㄨㄛˇ ㄧˇ ㄧㄡˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄒㄧㄠˋ ㄌㄩˋ ㄅㄨˋ ㄍㄠ.',
            pinyin: 'yin1 ci3 ta1 dui4 gong1 zuo4 tai4 ren4 zhen1 de, suo3 yi3 you3 de shi2 hou4 xiao4 lu4 bu4 gao1.',
            translation: '彼は仕事に真面目過ぎるので、 あまり効率的ではない時があります。',
            memo: ''
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
            sentence: '美真是個完美的人, 從來不失敗。',
            bopomofo: 'ㄇㄟˇ ㄓㄣ ㄕˋ ㄍㄜˋ ㄨㄢˊ ㄇㄟˇ ㄉㄧˊ ㄖㄣˊ, ㄘㄨㄥˊ ㄌㄞˊ ㄅㄨˋ ㄕ ㄅㄞˋ.',
            pinyin: 'mei3 zhen1 shi4 ge4 wan2 mei3 de ren2, cong2 lai2 bu4 shi1 bai4.',
            translation: '美真は完璧な人なので、 失敗する事はありません。',
            memo: ''
          },
          {
            word: '家華',
            sentence: '家華的朋友開始跑步, 他受到了影響最近也開始運動。',
            bopomofo: 'ㄐㄧㄚ ㄏㄨㄚˊ ㄉㄜ˙ ㄆㄥˊ ㄧㄡˇ ㄎㄞ ㄕˇ ㄆㄠˇ ㄅㄨˋ, ㄊㄚ ㄕㄡˋ ㄉㄠˋ ㄌㄜ˙ ㄧㄥˇ ㄒㄧㄤˇ ㄗㄨㄟˋ ㄐㄧㄣˋ ㄧㄝˇ ㄎㄞ ㄕˇ ㄩㄣˋ ㄉㄨㄥˋ.',
            pinyin: 'jia1 hua2 de peng2 you3 kai1 shi3 pao3 bu4, ta1 shou4 dao4 le ying3 xiang3 zui4 jin4 ye3 kai1 shi3 yun4 dong4.',
            translation: '家華の友人がランニングを始めたので、 彼も影響を受けて運動し始めました。',
            memo: ''
          },
          {
            word: '風雲人物',
            sentence: '他是個風雲人物的人, 我甚至無法模仿。',
            bopomofo: 'ㄊㄚ ㄕˋ ㄍㄜˋ ㄈㄥ ㄩㄣˊ ㄖㄣˊ ㄨˋ ㄉㄜ˙ ㄖㄣˊ, ㄨㄛˇ ㄕㄣˋ ㄓˋ ㄨˊ ㄈㄚˇ ㄇㄛˊ ㄈㄤˇ.',
            pinyin: 'ta1 shi4 ge4 feng1 yun2 ren2 wu4 de ren2, wo3 shen4 zhi4 wu2 fa3 mo2 fang3.',
            translation: '彼は風雲児なので、 真似しようとしてもできません。',
            memo: ''
          },
          {
            word: '下決心',
            sentence: '他對上大學的下決心很強， 所以每天熬夜念書。',
            bopomofo: 'ㄊㄚ ㄉㄨㄟˋ ㄕㄤˋ ㄉㄚˋ ㄒㄩㄝˊ ㄉㄜ˙ ㄒㄧㄚˋ ㄐㄩㄝˊ ㄒㄧㄣ ㄏㄣˇ ㄑㄧㄤˊ, ㄙㄨㄛˇ ㄧˇ ㄇㄟˇ ㄊㄧㄢ ㄠˊ ㄧㄝˋ ㄋㄧㄢˋ ㄕㄨ.',
            pinyin: 'ta1 dui4 shang4 da4 xue2 de xia4 jue2 xin1 hen3 qiang2, suo3 yi3 mei3 tian1 ao2 ye4 nian4 shu1.',
            translation: '彼の大学へ行く決意は固いので、 毎晩遅くまで勉強しています。',
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
