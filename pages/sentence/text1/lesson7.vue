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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第7章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第7章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      data: {
        title: '當代中文課程課1・第7章',
        words: [
          {
            word: '點',
            sentence: '請你上午九點半之前來教室。',
            bopomofo: 'ㄑㄧㄥˇ ㄋㄧˇ ㄕㄤˋ ㄨˇ ㄐㄧㄡˇ ㄉㄧㄢˇ ㄅㄢˋ ㄓ ㄑㄧㄢˊ ㄌㄞˊ ㄐㄧㄠˋ ㄕˋ.',
            pinyin: 'qing3 ni3 shang4 wu3 jiu3 dian3 ban4 zhi1 qian2 lai2 jiao4 shi4.',
            translation: '午前9時30分までに教室にお越しください。',
            memo: '※「之前(ㄓ ㄑㄧㄢˊ/zhi1 qian2)」でも「以前(ㄧˇ ㄑㄧㄢˊ/yi3 qian2)」でもOK。'
          },
          {
            word: 'KTV',
            sentence: '在台灣KTV裡的日本歌都很老。',
            bopomofo: 'ㄗㄞˋ ㄊㄞˊ ㄨㄢ KTV ㄌㄧˇ ㄉㄜ˙ ㄖˋ ㄅㄣˇ ㄍㄜ ㄉㄡ ㄏㄣˇ ㄌㄠˇ.',
            pinyin: 'zai4 tai2 wan1 KTV li3 de ri4 ben3 ge1 dou1 hen3 lao3.',
            translation: '台湾KTVにある日本の歌はどれも古いです。'
          },
          {
            word: '唱歌',
            sentence: '我不能用英文唱歌。',
            bopomofo: 'ㄨㄛˇ ㄅㄨˋ ㄋㄥˊ ㄩㄥˋ ㄧㄥ ㄨㄣˊ ㄔㄤˋ ㄍㄜ.',
            pinyin: 'wo3 bu4 neng2 yong4 ying1 wen2 chang4 ge1.',
            translation: '私は英語で歌えません。',
            memo: '※ここでの「用」は介詞(前置詞)になる。'
          },
          {
            word: '分',
            sentence: '十分後以後, 幫我關冷氣。',
            bopomofo: 'ㄕˊ ㄈㄣ ㄏㄡˋ ㄧˇ ㄏㄡˋ, ㄅㄤ ㄨㄛˇ ㄍㄨㄢ ㄌㄥˇ ㄑㄧˋ.',
            pinyin: 'shi2 fen1 hou4 yi3 hou4, bang1 wo3 guan1 leng3 qi4.',
            translation: 'あと10分経ったら、 冷房を消してください。'
          },
          {
            word: '見面',
            sentence: '我不喜歡跟我不知道的人見面。',
            bopomofo: 'ㄨㄛˇ ㄅㄨˋ ㄒㄧˇ ㄏㄨㄢ ㄍㄣ ㄨㄛˇ ㄅㄨˋ ㄓ ㄉㄠˋ ㄉㄜ˙ ㄖㄣˊ ㄐㄧㄢˋ ㄇㄧㄢˋ.',
            pinyin: 'wo3 bu4 xi3 huan1 gen1 wo3 bu4 zhi1 dao4 de ren2 jian4 mian4.',
            translation: '知らない人に会うのは好きではありません。'
          },
          {
            word: '從',
            sentence: '那隻貓的尾巴從頭到尾是直的。',
            bopomofo: 'ㄋㄚˋ ㄓˇ ㄇㄠ ㄉㄜ˙ ㄨㄟˇ ㄅㄚ ㄘㄨㄥˊ ㄊㄡˊ ㄉㄠˋ ㄨㄟˇ ㄕˋ ㄓˊ ㄉㄜ˙.',
            pinyin: 'na4 zhi1 mao1 de wei3 ba1 cong2 tou2 dao4 wei3 shi4 zhi2 de.',
            translation: 'あの猫の尻尾は根元から先までまっすぐです。'
          },
          {
            word: '中午',
            sentence: '派對正好中午開始。',
            bopomofo: 'ㄆㄞˋ ㄉㄨㄟˋ ㄓㄥˋ ㄏㄠˇ ㄓㄨㄥ ㄨˇ ㄎㄞ ㄕˇ.',
            pinyin: 'pai4 dui4 zheng4 hao3 zhong1 wu3 kai1 shi3.',
            translation: 'パーティはちょうど正午に始まります。'
          },
          {
            word: '得',
            sentence: '我得買兩種豆腐做麻婆豆腐。',
            bopomofo: 'ㄨㄛˇ ㄉㄟˇ ㄇㄞˇ ㄌㄧㄤˇ ㄓㄨㄥˇ ㄉㄡˋ ㄈㄨˇ ㄗㄨㄛˋ ㄇㄚˊ ㄆㄛˊ ㄉㄡˋ ㄈㄨˇ.',
            pinyin: 'wo3 dei3 mai3 liang3 zhong3 dou4 fu3 zuo4 ma2 po2 dou4 fu3.',
            translation: '麻婆豆腐を作るには2種類の豆腐を買わなければなりません。'
          },
          {
            word: '銀行',
            sentence: '我得去銀行提錢。',
            bopomofo: 'ㄨㄛˇ ㄉㄟˇ ㄑㄩˋ ㄧㄣˊ ㄏㄤˊ ㄊㄧˊ ㄑㄧㄢˊ.',
            pinyin: 'wo3 dei3 qu4 yin2 hang2 ti2 qian2.',
            translation: '銀行にお金をおろしに行かなくてはいけません。',
            memo: '※「お金を引き出す」は「提錢(ㄊㄧˊ ㄑㄧㄢˊ/ti2 qian2)」「提款(ㄊㄧˊ ㄎㄨㄢˇ/ti2 kuan3)」どちらもOK'
          },
          {
            word: '時候',
            sentence: '在超市的時候我常常買不用的東西。',
            bopomofo: 'ㄗㄞˋ ㄔㄠ ㄕˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄨㄛˇ ㄔㄤˊ ㄔㄤˊ ㄇㄞˇ ㄅㄨˊ ㄩㄥˋ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ.',
            pinyin: 'zai4 chao1 shi4 de shi2 hou4 wo3 chang2 chang2 mai3 bu2 yong4 de dong1 xi1.',
            translation: 'スーパーでは、 使わないものを度々買ってしまう。'
          },
          {
            word: '後天',
            sentence: '明天是假日, 從後天開始工作。',
            bopomofo: 'ㄇㄧㄥˊ ㄊㄧㄢ ㄕˋ ㄐㄧㄚˋ ㄖˋ, ㄘㄨㄥˊ ㄏㄡˋ ㄊㄧㄢ ㄎㄞ ㄕˇ ㄍㄨㄥ ㄗㄨㄛˋ.',
            pinyin: 'ming2 tian1 shi4 jia4 ri4, cong2 hou4 tian1 kai1 shi3 gong1 zuo4.',
            translation: '明日は休日で、明後日から働きます。'
          },
          {
            word: '大安',
            sentence: '在日本「大安」是幸運日子, 也是台灣的一家KTV的名字。',
            bopomofo: 'ㄗㄞˋ ㄖˋ ㄅㄣˇ 「ㄉㄚˋ ㄢ」 ㄕˋ ㄒㄧㄥˋ ㄩㄣˋ ㄖˋ ㄗ˙, ㄧㄝˇ ㄕˋ ㄊㄞˊ ㄨㄢ ㄉㄜ˙ ㄧ ㄐㄧㄚ KTV ㄉㄜ˙ ㄇㄧㄥˊ ㄗˋ.',
            pinyin: 'zai4 ri4 ben3 da4 an1 shi4 xing4 yun4 ri4 zi3, ye3 shi4 tai2 wa1n de yi1 jia1 KTV de ming2 zi4.',
            translation: '日本では「大安」はラッキーな日で、台湾ではKTVの名前です。'
          },
          {
            word: '下次',
            sentence: '今天的台灣菜做得很好, 下次我會做法國菜。',
            bopomofo: 'ㄐㄧㄣ ㄊㄧㄢ ㄉㄜ˙ ㄊㄞˊ ㄨㄢ ㄘㄞˋ ㄗㄨㄛˋ ㄉㄜ˙ ㄏㄣˇ ㄏㄠˇ, ㄒㄧㄚˋ ㄘˋ ㄨㄛˇ ㄏㄨㄟˋ ㄗㄨㄛˋ ㄈㄚˇ ㄍㄨㄛˊ ㄘㄞˋ.',
            pinyin: 'ji1n tian1 de tai2 wan1 cai4 zuo4 de hen3 hao3, xia4 ci4 wo3 hui4 zuo4 fa3 guo2 cai4.',
            translation: '今日の台湾料理はとてもよく出来ました、 次回はフランス料理を作ります。'
          },
          {
            word: '沒問題',
            sentence: '我手機壞了. 沒問題, 二手店有便宜的。',
            bopomofo: 'ㄨㄛˇ ㄕㄡˇ ㄐㄧ ㄏㄨㄞˋ ㄌㄜ˙. ㄇㄟˊ ㄨㄣˋ ㄊㄧˊ, ㄦˋ ㄕㄡˇ ㄉㄧㄢˋ ㄧㄡˇ ㄆㄧㄢˊ ㄧˊ ㄉㄜ˙.',
            pinyin: 'wo3 shou3 ji1 huai4 le. mei2 wen4 ti2, er4 shou3 dian4 you3 pian2 yi2 de.',
            translation: 'スマートフォンを壊してしまいました。 問題ありません、 中古の店に安いものがあります。',
            memo: '※壞(形容詞)+了 → 状態変化'
          },
          {
            word: '對了',
            sentence: '上午的課完了. 對了, 下午的課什麼時候開始呢?',
            bopomofo: 'ㄕㄤˋ ㄨˇ ㄉㄜ˙ ㄎㄜˋ ㄨㄢˊ ㄌㄜ˙. ㄉㄨㄟˋ ㄌㄜ˙, ㄒㄧㄚˋ ㄨˇ ㄉㄜ˙ ㄎㄜˋ ㄕㄣˊ ㄇㄜ˙ ㄕˊ ㄏㄡˋ ㄎㄞ ㄕˇ ㄋㄜ˙?',
            pinyin: 'shang4 wu3 de ke4 wan2 le. dui4 le, xia4 wu3 de ke4 shen2 me shi2 hou4 kai1 shi3 ne?',
            translation: '午前の授業は終わりました。 ところで、午後の授業はいつ始まりますか?'
          },
          {
            word: '有空',
            sentence: '由於我現在有空, 我幫你做作業。',
            bopomofo: 'ㄧㄡˊ ㄩˊ ㄨㄛˇ ㄒㄧㄢˋ ㄗㄞˋ ㄧㄡˇ ㄎㄨㄥˋ, ㄨㄛˇ ㄅㄤ ㄋㄧˇ ㄗㄨㄛˋ ㄗㄨㄛˋ ㄧㄝˋ.',
            pinyin: 'you2 yu2 wo3 xian4 zai4 you3 kong4, wo3 bang1 ni3 zuo4 zuo4 ye4.',
            translation: '今は暇なので、宿題を手伝います。'
          },
          {
            word: '再見',
            sentence: '你對你的朋友說再見了嗎?',
            bopomofo: 'ㄋㄧˇ ㄉㄨㄟˋ ㄋㄧˇ ㄉㄜ˙ ㄆㄥˊ ㄧㄡˇ ㄕㄨㄛ ㄗㄞˋ ㄐㄧㄢˋ ㄌㄜ˙ ㄇㄚ˙?',
            pinyin: 'ni3 dui4 ni3 de peng2 you3 shuo1 zai4 jian4 le ma2?',
            translation: '友達にさよならを言いましたか?'
          },
          {
            word: '在',
            sentence: '我用微波爐微波洋蔥。 那個方法不但方便, 而且快。',
            bopomofo: 'ㄨㄛˇ ㄩㄥˋ ㄨㄟ ㄅㄛ ㄌㄨˊ ㄨㄟ ㄅㄛ ㄧㄤˊ ㄘㄨㄥ. ㄋㄚˋ ㄍㄜˋ ㄈㄤ ㄈㄚˇ ㄅㄨˊ ㄉㄢˋ ㄈㄤ ㄅㄧㄢˋ, ㄦˊ ㄑㄧㄝˇ ㄎㄨㄞˋ.',
            pinyin: 'wo3 yong4 wei1 bo1 lu2 wei1 bo1 yang2 cong1. na4 ge4 fang1 fa3 bu2 dan4 fang1 bian4, er2 qie3 kuai4.',
            translation: '電子レンジで玉ねぎを調理しています。 この方法は便利なだけでなく、速いです。'
          },
          {
            word: '午餐',
            sentence: '你想什麼時間吃午餐?',
            bopomofo: 'ㄋㄧˇ ㄒㄧㄤˇ ㄕㄣˊ ㄇㄜ˙ ㄕˊ ㄐㄧㄢ ㄔ ㄨˇ ㄘㄢ?',
            pinyin: 'ni3 xiang3 shen2 me shi2 jian1 chi1 wu3 can1?',
            translation: '何時にランチを食べたいですか?'
          },
          {
            word: '剛',
            sentence: '我剛起床。',
            bopomofo: 'ㄨㄛˇ ㄍㄤ ㄑㄧˇ ㄔㄨㄤˊ.',
            pinyin: 'wo3 gang1 qi3 chuang2.',
            translation: '今起きたばかりです。'
          },
          {
            word: '下課',
            sentence: '今天早一點下課。',
            bopomofo: 'ㄐㄧㄣ ㄊㄧㄢ ㄗㄠˇ ㄧˋ ㄉㄧㄢˇ ㄒㄧㄚˋ ㄎㄜˋ.',
            pinyin: 'jin1 tian1 zao3 yi1 dian3 xia4 ke4.',
            translation: '今日は少し早く授業が終わりました。'
          },
          {
            word: '下午',
            sentence: '火車下午兩點會到。',
            bopomofo: 'ㄏㄨㄛˇ ㄔㄜ ㄒㄧㄚˋ ㄨˇ ㄌㄧㄤˇ ㄉㄧㄢˇ ㄏㄨㄟˋ ㄉㄠˋ.',
            pinyin: 'huo3 che1 xia4 wu3 liang3 dian3 hui4 dao4.',
            translation: '電車は午後２時に到着します。'
          },
          {
            word: '半',
            sentence: '你可以吃一半的洋芋片。',
            bopomofo: 'ㄋㄧˇ ㄎㄜˇ ㄧˇ ㄔ ㄧ ㄅㄢˋ ㄉㄜ˙ ㄧㄤˊ ㄩˋ ㄆㄧㄢˋ.',
            pinyin: 'ni3 ke3 yi3 chi1 yi1 ban4 de yang2 yu4 pian4.',
            translation: 'ポテトチップスの半分を食べていいですよ。',
            memo: '※「洋芋片(ㄧㄤˊ ㄩˋ ㄆㄧㄢˋ/yang2 yu4 pian4)」は台湾らしい表現。 「薯片(ㄕㄨˇ ㄆㄧㄢˋ/shu3 pian4)」はどちらかと言うと中国大陸の表現。'
          },
          {
            word: '比賽',
            sentence: '足球比賽後, 人太多走不動。',
            bopomofo: 'ㄗㄨˊ ㄑㄧㄡˊ ㄅㄧˇ ㄙㄞˋ ㄏㄡˋ, ㄖㄣˊ ㄊㄞˋ ㄉㄨㄛ ㄗㄡˇ ㄅㄨˋ ㄉㄨㄥˋ.',
            pinyin: 'zu2 qiu2 bi3 sai3 hou4, ren2 tai4 duo1 zou3 bu4 dong4.',
            translation: 'サッカーの試合の後は、人が多すぎて歩けません。'
          },
          {
            word: '結束',
            sentence: '賞櫻的季節結束了, 天氣越來越暖和了。',
            bopomofo: 'ㄕㄤˇ ㄧㄥ ㄉㄜ˙ ㄐㄧˋ ㄐㄧㄝˊ ㄐㄧㄝˊ ㄕㄨˋ ㄌㄜ˙, ㄊㄧㄢ ㄑㄧˋ ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ ㄋㄨㄢˇ ㄏㄨㄛ˙ ㄌㄜ˙.',
            pinyin: 'shang3 ying1 de ji4 jie2 jie2 shu4 le, tian1 qi4 yue4 lai2 yue4 nuan3 huo le.',
            translation: '花見の季節が終わって、 暖かくなってきました。',
            memo: '※「暖和了」 → 「形容詞+了」で状態変化。'
          },
          {
            word: '最近',
            sentence: '我最近走路去上班。',
            bopomofo: 'ㄨㄛˇ ㄗㄨㄟˋ ㄐㄧㄣˋ ㄗㄡˇ ㄌㄨˋ ㄑㄩˋ ㄕㄤˋ ㄅㄢ.',
            pinyin: 'wo3 zui4 jin4 zou3 lu4 qu4 shang4 ban1.',
            translation: '最近、歩いて通勤しています。'
          },
          {
            word: '忙',
            sentence: '太忙的工作對健康不好。',
            bopomofo: 'ㄊㄞˋ ㄇㄤˊ ㄉㄜ˙ ㄍㄨㄥ ㄗㄨㄛˋ ㄉㄨㄟˋ ㄐㄧㄢˋ ㄎㄤ ㄅㄨˋ ㄏㄠˇ.',
            pinyin: 'tai4 mang2 de gong1 zuo4 dui4 jian4 kang1 bu4 hao3.',
            translation: '忙しすぎる仕事は健康に悪いです。'
          },
          {
            word: '每',
            sentence: '他每小時休息一次。',
            bopomofo: 'ㄊㄚ ㄇㄟˇ ㄒㄧㄠˇ ㄕˊ ㄒㄧㄡ ㄒㄧ ㄧ ㄘˋ.',
            pinyin: 'ta1 mei3 xiao3 shi2 xiu1 xi1 yi1 ci4.',
            translation: '彼は一時間に一回休憩します。'
          },
          {
            word: '天',
            sentence: '每週我上五天班。',
            bopomofo: 'ㄇㄟˇ ㄓㄡ ㄨㄛˇ ㄕㄤˋ ㄨˇ ㄊㄧㄢ ㄅㄢ.',
            pinyin: 'mei3 zhou1 wo shang4 wu3 tian1 ban1.',
            translation: '私は一週間に5日会社に行きます。'
          },
          {
            word: '書法',
            sentence: '台灣的孩子們都練習書法嗎?',
            bopomofo: 'ㄊㄞˊ ㄨㄢ ㄉㄜ˙ ㄏㄞˊ ㄗ˙ ㄇㄣ˙ ㄉㄡ ㄌㄧㄢˋ ㄒㄧˊ ㄕㄨ ㄈㄚˇ ㄇㄚ˙?',
            pinyin: 'tai2 wan1 de hai2 zi3 men dou1 lian4 xi2 shu1 fa3 ma2?',
            translation: '台湾の子供たちはみんな書道を練習しますか?'
          },
          {
            word: '課',
            sentence: '數學課和化學課都從十點開始， 你要去哪一個?',
            bopomofo: 'ㄕㄨˋ ㄒㄩㄝˊ ㄎㄜˋ ㄏㄢˋ ㄏㄨㄚˋ ㄒㄩㄝˊ ㄎㄜˋ ㄉㄡ ㄘㄨㄥˊ ㄕˊ ㄉㄧㄢˇ ㄎㄞ ㄕˇ， ㄋㄧˇ ㄧㄠˋ ㄑㄩˋ ㄋㄚˇ ㄧ ㄍㄜ˙?',
            pinyin: 'shu4 xue2 ke4 han4 hua4 xue2 ke4 dou1 cong2 shi2 dian3 kai1 shi3, ni3 yao4 qu4 na3 yi1 ge4?',
            translation: '数学のクラスも化学のクラスも10時からです。 どちらに行きますか?'
          },
          {
            word: '開始',
            sentence: '聽說那家商店開始賣包子。 今天你想去買嗎?',
            bopomofo: 'ㄊㄧㄥ ㄕㄨㄛ ㄋㄚˋ ㄐㄧㄚ ㄕㄤ ㄉㄧㄢˋ ㄎㄞ ㄕˇ ㄇㄞˋ ㄅㄠ ㄗ˙． ㄐㄧㄣ ㄊㄧㄢ ㄋㄧˇ ㄒㄧㄤˇ ㄑㄩˋ ㄇㄞˇ ㄇㄚ˙?',
            pinyin: 'ting1 shuo1 na4 jia1 shang1 dian4 kai1 shi3 mai4 bao1 zi3. jin1 tian1 ni3 xiang3 qu4 mai3 ma2?',
            translation: 'あの店が肉まんを販売し始めたそうです。 今日買いに行きますか?'
          },
          {
            word: '字',
            sentence: '這個字怎麼念?',
            bopomofo: 'ㄓㄜˋ ㄍㄜˋ ㄗˋ ㄗㄣˇ ㄇㄜ˙ ㄋㄧㄢˋ?',
            pinyin: 'zhe4 ge4 zi4 zen3 me nian4?',
            translation: 'この字はどのように読むのですか?'
          },
          {
            word: '寫',
            sentence: '請你在這裡寫下你說的單字。',
            bopomofo: 'ㄑㄧㄥˇ ㄋㄧˇ ㄗㄞˋ ㄓㄜˋ ㄌㄧˇ ㄒㄧㄝˇ ㄒㄧㄚˋ ㄋㄧˇ ㄕㄨㄛ ㄉㄜ˙ ㄉㄢ ㄗˋ.',
            pinyin: 'qing3 ni3 zai4 zhe4 li3 xie3 xia4 ni3 shuo1 de dan1 zi4.',
            translation: 'ここにあなたが言った単語を書いてください。'
          },
          {
            word: '可以',
            sentence: '房租可以便宜一點嗎?',
            bopomofo: 'ㄈㄤˊ ㄗㄨ ㄎㄜˇ ㄧˇ ㄆㄧㄢˊ ㄧˊ ㄧˋ ㄉㄧㄢˇ ㄇㄚ˙?',
            pinyin: 'fang2 zu1 ke3 yi3 pian2 yi2 yi1 dian3 ma2?',
            translation: '家賃を安くできませんか?'
          },
          {
            word: '問',
            sentence: '你可不可以幫我問店員他們有沒有別的顏色。',
            bopomofo: 'ㄋㄧˇ ㄎㄜˇ ㄅㄨˋ ㄎㄜˇ ㄧˇ ㄅㄤ ㄨㄛˇ ㄨㄣˋ ㄉㄧㄢˋ ㄩㄢˊ ㄊㄚ ㄇㄣ˙ ㄧㄡˇ ㄇㄟˊ ㄧㄡˇ ㄅㄧㄝˊ ㄉㄜ˙ ㄧㄢˊ ㄙㄜˋ?',
            pinyin: 'ni3 ke3 bu4 ke3 yi3 bang1 wo3 wen4 dian4 yuan2 ta1 men you3 mei2 you3 bie2 de yan2 se4?',
            translation: '他の色があるかどうか店員に尋ねてもらえませんか?'
          },
          {
            word: '等一下',
            sentence: '我等一下得去買牛奶。',
            bopomofo: 'ㄨㄛˇ ㄉㄥˇ ㄧ ㄒㄧㄚˋ ㄉㄟˇ ㄑㄩˋ ㄇㄞˇ ㄋㄧㄡˊ ㄋㄞˇ.',
            pinyin: 'wo3 deng3 yi1 xia4 dei3 qu4 mai3 niu2 nai3.',
            translation: '後で牛乳を買わなければいけません。'
          },
          {
            word: '有事',
            sentence: '因為今天有事， 不會去上課。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄐㄧㄣ ㄊㄧㄢ ㄧㄡˇ ㄕˋ， ㄅㄨˊ ㄏㄨㄟˋ ㄑㄩˋ ㄕㄤˋ ㄎㄜˋ.',
            pinyin: 'yin1 wei4 jin1 tian1 you3 shi4, bu2 hui4 qu4 shang4 ke4.',
            translation: '今日は用事があるので、 授業には行きません。'
          },
          {
            word: '有意思',
            sentence: '釀酒很有意思。',
            bopomofo: 'ㄋㄧㄤˋ ㄐㄧㄡˇ ㄏㄣˇ ㄧㄡˇ ㄧˋ ㄙ.',
            pinyin: 'niang4 jiu3 hen3 you3 yi4 si1.',
            translation: 'お酒作りは面白いです。'
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
