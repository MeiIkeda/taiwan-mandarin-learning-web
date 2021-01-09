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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第14章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第14章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      data: {
        title: '當代中文課程課1・第14章',
        words: [
          {
            word: '天氣',
            sentence: '我根據天氣來選擇衣服。',
            bopomofo: 'ㄨㄛˇ ㄍㄣ ㄐㄩˋ ㄊㄧㄢ ㄑㄧˋ ㄌㄞˊ ㄒㄩㄢˇ ㄗㄜˊ ㄧ ㄈㄨˊ.',
            pinyin: 'wo3 gen1 ju4 tian1 qi4 lai2 xuan3 ze2 yi1 fu2.',
            translation: '私は天気に合わせて服を選びます。'
          },
          {
            word: '冷',
            sentence: '雖然台灣大部分的天氣多暖和, 可是冬天也有冷的日子。',
            bopomofo: 'ㄙㄨㄟ ㄖㄢˊ ㄊㄞˊ ㄨㄢ ㄉㄚˋ ㄅㄨˋ ㄈㄣˋ ㄉㄜ˙ ㄊㄧㄢ ㄑㄧˋ ㄉㄨㄛ ㄋㄨㄢˇ ㄏㄨㄛ˙, ㄎㄜˇ ㄕˋ ㄉㄨㄥ ㄊㄧㄢ ㄧㄝˇ ㄧㄡˇ ㄌㄥˇ ㄉㄜ˙ ㄖˋ ㄗ˙.',
            pinyin: 'sui1 ran2 tai2 wan1 da4 bu4 fen4 de tian1 qi4 duo1 nuan3 huo, ke3 shi4 dong1 tian1 ye3 you3 leng3 de ri4 zi3.',
            translation: '台湾は大体暖かいですが、 冬は寒い日もあります。'
          },
          {
            word: '風',
            sentence: '因為風太大, 我的洗的衣服飛掉了。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄈㄥ ㄊㄞˋ ㄉㄚˋ, ㄨㄛˇ ㄉㄜ˙ ㄒㄧˇ ㄉㄜ˙ ㄧ ㄈㄨˊ ㄈㄟ ㄉㄧㄠˋ ㄌㄜ˙.',
            pinyin: 'yin1 wei4 feng1 tai4 da4, wo3 de xi3 de yi1 fu2 fei1 diao4 le.',
            translation: '風が強すぎて、 洗濯物が飛んでしまいました。'
          },
          {
            word: '滑雪',
            sentence: '滑雪的時候我跌倒了受傷了。',
            bopomofo: 'ㄏㄨㄚˊ ㄒㄩㄝˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄨㄛˇ ㄉㄧㄝ ㄉㄠˇ ㄌㄜ˙ ㄕㄡˋ ㄕㄤ ㄌㄜ˙.',
            pinyin: 'hua2 xue3 de shi2 hou4 wo3 die1 dao3 le shou4 shang1 le.',
            translation: 'スキー中に転んで怪我をしました。'
          },
          {
            word: '春天',
            sentence: '春天在山上有很多花開了。',
            bopomofo: 'ㄔㄨㄣ ㄊㄧㄢ ㄗㄞˋ ㄕㄢ ㄕㄤˋ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄏㄨㄚ ㄎㄞ ㄌㄜ˙.',
            pinyin: 'chun1 tian1 zai4 shan1 shang4 you3 hen3 duo1 hua1 kai1 le.',
            translation: '春は山にたくさんの花が咲きます。'
          },
          {
            word: '想',
            sentence: '旅行比較久的時候, 我想我家的貓了。',
            bopomofo: 'ㄌㄩˇ ㄒㄧㄥˊ ㄅㄧ ㄐㄧㄠˋ ㄐㄧㄡˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄨㄛˇ ㄒㄧㄤˇ ㄨㄛˇ ㄐㄧㄚ ㄉㄜ˙ ㄇㄠ ㄌㄜ˙.',
            pinyin: 'lu3 xing2 bi3 jiao4 jiu3 de shi2 hou4, wo3 xiang3 wo3 jia1 de mao1 le.',
            translation: '長い旅行に出た時は、 家にいる猫が恋しかったです。',
            memo: '※ここでは「想」＝「想念」。'
          },
          {
            word: '新年',
            sentence: '為了新年的準備, 這個星期會很忙。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄒㄧㄣ ㄋㄧㄢˊ ㄉㄜ˙ ㄓㄨㄣˇ ㄅㄟˋ, ㄓㄜˋ ㄍㄜˋ ㄒㄧㄥ ㄑㄧˊ ㄏㄨㄟˋ ㄏㄣˇ ㄇㄤˊ.',
            pinyin: 'wei4 le xin1 nian2 de zhun3 bei4, zhe4 ge4 xing1 qi2 hui4 hen3 mang2.',
            translation: '新年の準備のため、 今週は忙しくなります。'
          },
          {
            word: '快',
            sentence: '熱的季節快來了, 我得確認冷氣有沒有問題。',
            bopomofo: 'ㄖㄜˋ ㄉㄜ˙ ㄐㄧˋ ㄐㄧㄝˊ ㄎㄨㄞˋ ㄌㄞˊ ㄌㄜ˙, ㄨㄛˇ ㄉㄟˇ ㄑㄩㄝˋ ㄖㄣˋ ㄌㄥˇ ㄑㄧˋ ㄧㄡˇ ㄇㄟˊ ㄧㄡˇ ㄨㄣˋ ㄊㄧˊ.',
            pinyin: 're4 de ji4 jie2 kuai4 lai2 le, wo3 dei3 que4 ren4 leng3 qi4 you3 mei2 you3 wen4 ti2.',
            translation: '暑い季節がもうすぐ来るので、 エアコンが大丈夫か確認しなければなりません。'
          },
          {
            word: '父母',
            sentence: '我父母為了無聊的事在吵架。',
            bopomofo: 'ㄨㄛˇ ㄈㄨˋ ㄇㄨˇ ㄨㄟˋ ㄌㄜ˙ ㄨˊ ㄌㄧㄠˊ ㄉㄜ˙ ㄕˋ ㄗㄞˋ ㄔㄠˇ ㄐㄧㄚˋ.',
            pinyin: 'wo3 fu4 mu3 wei4 le wu2 liao2 de shi4 zai4 chao3 jia4.',
            translation: '両親がつまらない事で喧嘩しています。'
          },
          {
            word: '冬天',
            sentence: '冬天很乾燥, 我們買加濕器吧。',
            bopomofo: 'ㄉㄨㄥ ㄊㄧㄢ ㄏㄣˇ ㄍㄢ ㄗㄠˋ, ㄨㄛˇ ㄇㄣ˙ ㄇㄞˇ ㄐㄧㄚ ㄕ ㄑㄧˋ ㄅㄚ˙.',
            pinyin: 'dong1 tian1 hen3 gan1 zao4, wo3 men mai3 jia1 shi1 qi4 ba.',
            translation: '冬はとても乾燥するので、 加湿器を買いましょう。'
          },
          {
            word: '明年',
            sentence: '你明年的目標是什麼?',
            bopomofo: 'ㄋㄧˇ ㄇㄧㄥˊ ㄋㄧㄢˊ ㄉㄜ˙ ㄇㄨˋ ㄅㄧㄠ ㄕˋ ㄕㄣˊ ㄇㄜ˙?',
            pinyin: 'ni3 ming2 nian2 de mu4 biao1 shi4 shen2 me?',
            translation: '来年のあなたの目標は何ですか?'
          },
          {
            word: '秋天',
            sentence: '聽說秋天的鮭魚又肥又好吃。',
            bopomofo: 'ㄊㄧㄥ ㄕㄨㄛ ㄑㄧㄡ ㄊㄧㄢ ㄉㄜ˙ ㄍㄨㄟ ㄩˊ ㄧㄡˋ ㄈㄟˊ ㄧㄡˋ ㄏㄠˇ ㄔ.',
            pinyin: 'ting1 shuo1 qiu1 tian1 de gui1 yu2 you4 fei2 you4 hao3 chi1.',
            translation: '秋の鮭は脂がのっていて美味しいと聞きました。'
          },
          {
            word: '紅葉',
            sentence: '不遠的地方中, 哪裡可以看到紅葉?',
            bopomofo: 'ㄅㄨˋ ㄩㄢˇ ㄉㄜ˙ ㄉㄧˋ ㄈㄤ ㄓㄨㄥ, ㄋㄚˇ ㄌㄧˇ ㄎㄜˇ ㄧˇ ㄎㄢˋ ㄉㄠˋ ㄏㄨㄥˊ ㄧㄝˋ?',
            pinyin: 'bu4 yuan3 de di4 fang1 zhong1, na3 li3 ke3 yi3 kan4 dao4 hong2 ye4?',
            translation: 'それほど遠くない場所だと、 どこで紅葉を見る事ができますか?'
          },
          {
            word: '只',
            sentence: '因為我不能早起, 所以只吃午餐跟晚餐。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄨㄛˇ ㄅㄨˋ ㄋㄥˊ ㄗㄠˇ ㄑㄧˇ, ㄙㄨㄛˇ ㄧˇ ㄓˇ ㄔ ㄨˇ ㄘㄢ ㄍㄣ ㄨㄢˇ ㄘㄢ.',
            pinyin: 'yin1 wei4 wo3 bu4 neng2 zao3 qi3, suo3 yi3 zhi3 chi1 wu3 can1 gen1 wan3 can1.',
            translation: '早く起きないので、 ランチと夕食だけ食べます。'
          },
          {
            word: '玉山',
            sentence: '玉山是台灣的最高的山, 夏天很多人去爬山。',
            bopomofo: 'ㄩˋ ㄕㄢ ㄕˋ ㄊㄞˊ ㄨㄢ ㄉㄜ˙ ㄗㄨㄟˋ ㄍㄠ ㄉㄜ˙ ㄕㄢ, ㄒㄧㄚˋ ㄊㄧㄢ ㄏㄣˇ ㄉㄨㄛ ㄖㄣˊ ㄑㄩˋ ㄆㄚˊ ㄕㄢ.',
            pinyin: 'yu4 shan1 shi4 tai2 wan1 de zui4 gao1 de shan1, xia4 tian1 hen3 duo1 ren2 qu4 pa2 shan1.',
            translation: '玉山は台湾で最も高い山で、夏には多くの人が登山します。'
          },
          {
            word: '紐約',
            sentence: '在紐約，雪積到腰部的高度了。',
            bopomofo: 'ㄗㄞˋ ㄋㄧㄡˇ ㄩㄝ，ㄒㄩㄝˇ ㄐㄧ ㄉㄠˋ ㄧㄠ ㄅㄨˋ ㄉㄜ˙ ㄍㄠ ㄉㄨˋ ㄌㄜ˙ .',
            pinyin: 'zai4 niu3 yue1, xue3 ji1 dao4 yao1 bu4 de gao1 du4 le.',
            translation: 'ニューヨークでは、 腰の高さまで雪が積もっています。'
          },
          {
            word: '下雪',
            sentence: '下三天雪後，村變了真白色。',
            bopomofo: 'ㄒㄧㄚˋ ㄙㄢ ㄊㄧㄢ ㄒㄩㄝˇ ㄏㄡˋ，ㄘㄨㄣ ㄅㄧㄢˋ ㄌㄜ˙ ㄓㄣ ㄅㄞˊ ㄙㄜˋ.',
            pinyin: 'xia4 san1 tian1 xue3 hou4, cun1 bian4 le zhen1 bai2 se4.',
            translation: '3日間の雪の後、村は真っ白になりました。'
          },
          {
            word: '十二月底',
            sentence: '我到十二月底一定付學費。',
            bopomofo: 'ㄨㄛˇ ㄉㄠˋ ㄕˊ ㄦˋ ㄩㄝˋ ㄉㄧˇ ㄧˊ ㄉㄧㄥˋ ㄈㄨˋ ㄒㄩㄝˊ ㄈㄟˋ.',
            pinyin: 'wo3 dao4 shi2 er4 yue4 di3 yi1 ding4 fu4 xue2 fei4.',
            translation: '授業料は12月末までに必ず払います。'
          },
          {
            word: '雨',
            sentence: '如果在雨中弄濕了，會感冒。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄗㄞˋ ㄩˇ ㄓㄨㄥ ㄋㄨㄥˋ ㄕ ㄌㄜ˙，ㄏㄨㄟˋ ㄍㄢˇ ㄇㄠˋ.',
            pinyin: 'ru2 guo3 zai4 yu3 zhong1 nong4 shi1 le, hui4 gan3 mao4.',
            translation: '雨に濡れると風邪をひきます。',
            memo: '※ここでの「了」は「～したら」の意。'
          },
          {
            word: '傘',
            sentence: '這傘可以用來作普通傘也可以用來作太陽傘。',
            bopomofo: 'ㄓㄜˋ ㄙㄢˇ ㄎㄜˇ ㄧˇ ㄩㄥˋ ㄌㄞˊ ㄗㄨㄛˋ ㄆㄨˇ ㄊㄨㄥ ㄙㄢˇ ㄧㄝˇ ㄎㄜˇ ㄧˇ ㄩㄥˋ ㄌㄞˊ ㄗㄨㄛˋ ㄊㄞˋ ㄧㄤˊ ㄙㄢˇ.',
            pinyin: 'zhe4 san3 ke3 yi3 yong4 lai2 zuo4 pu3 tong1 san3 ye3 ke3 yi3 yong4 lai2 zuo4 tai4 yang2 san3.',
            translation: 'この傘は、 普通の傘としても日傘としても使えます。',
            memo: '※「A用來B」＝「AをBのために用いる」 + 「作」＝「...とみなす」 → 「用來作」＝「～として使う」。'
          },
          {
            word: '颱風',
            sentence: '我確認颱風預報後，再回復你我會不會去。',
            bopomofo: 'ㄨㄛˇ ㄑㄩㄝˋ ㄖㄣˋ ㄊㄞˊ ㄈㄥ ㄩˋ ㄅㄠˋ ㄏㄡˋ，ㄗㄞˋ ㄏㄨㄟˊ ㄈㄨˋ ㄋㄧˇ ㄨㄛˇ ㄏㄨㄟˋ ㄅㄨˊ ㄏㄨㄟˋ ㄑㄩˋ.',
            pinyin: 'wo3 que4 ren4 tai2 feng1 yu4 bao4 hou4, zai4 hui2 fu4 ni3 wo3 hui4 bu2 hui4 qu4.',
            translation: '台風予報を確認した後、 行くかどうか返事します。',
            memo: '※「回復」=「返事をする」。'
          },
          {
            word: '要',
            sentence: '如果下雨，我不要走路去。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄒㄧㄚˋ ㄩˇ，ㄨㄛˇ ㄅㄨˊ ㄧㄠˋ ㄗㄡˇ ㄌㄨˋ ㄑㄩˋ.',
            pinyin: 'ru2 guo3 xia4 yu3, wo3 bu2 yao4 zou3 lu4 qu4.',
            translation: '雨が降ったら、 歩きでは行きません。'
          },
          {
            word: '夏天',
            sentence: '夏天去離島旅行很有人氣。',
            bopomofo: 'ㄒㄧㄚˋ ㄊㄧㄢ ㄑㄩˋ ㄌㄧˊ ㄉㄠˇ ㄌㄩˇ ㄒㄧㄥˊ ㄏㄣˇ ㄧㄡˇ ㄖㄣˊ ㄑㄧˋ.',
            pinyin: 'xia4 tian1 qu4 li4 dao3 lu3 xing2 hen3 you3 ren2 qi4.',
            translation: '夏は離島への旅行が人気です。',
            memo: '※「人気」は名詞。'
          },
          {
            word: '濕',
            sentence: '好像誰灑了水, 地上都濕濕的。',
            bopomofo: 'ㄏㄠˇ ㄒㄧㄤˋ ㄕㄨㄟˊ ㄙㄚˇ ㄌㄜ˙ ㄕㄨㄟˇ, ㄉㄧˋ ㄕㄤˋ ㄉㄡ ㄕ ㄕ ㄉㄜ˙.',
            pinyin: 'hao3 xiang4 shei2 sa3 le shui3, di4 shang4 dou1 shi1 shi1 de.',
            translation: '誰かが水をこぼしたようで、 地面が濡れています。'
          },
          {
            word: '討厭',
            sentence: '她真的討厭蟲，所以沒辦法看到它們。',
            bopomofo: 'ㄊㄚ ㄓㄣ ㄉㄜ˙ ㄊㄠˇ ㄧㄢˋ ㄔㄨㄥˊ，ㄙㄨㄛˇ ㄧˇ ㄇㄟˊ ㄅㄢˋ ㄈㄚˇ ㄎㄢˋ ㄉㄠˋ ㄊㄚ ㄇㄣ˙.',
            pinyin: 'ta1 zhen1 de tao3 yan4 chong2, suo3 yi3 mei2 ban4 fa3 kan4 dao4 ta1 men.',
            translation: '彼女は本当に虫が嫌いなので、 見るのも無理です。'
          },
          {
            word: '新聞',
            sentence: '早上我習慣一邊看電視新聞一邊吃早飯。',
            bopomofo: 'ㄗㄠˇ ㄕㄤˋ ㄨㄛˇ ㄒㄧˊ ㄍㄨㄢˋ ㄧ ㄅㄧㄢ ㄎㄢˋ ㄉㄧㄢˋ ㄕˋ ㄒㄧㄣ ㄨㄣˊ ㄧ ㄅㄧㄢ ㄔ ㄗㄠˇ ㄈㄢˋ.',
            pinyin: 'zao3 shang4 wo3 xi2 guan4 yi1 bian1 kan4 dian4 shi4 xin1 wen2 yi1 bian1 chi1 zao3 fan4.',
            translation: '朝はテレビのニュースを見ながら朝食をとるのに慣れています。'
          },
          {
            word: '更',
            sentence: '我告訴他要打掃，但是現在房間更亂了。',
            bopomofo: 'ㄨㄛˇ ㄍㄠˋ ㄙㄨˋ ㄊㄚ ㄧㄠˋ ㄉㄚˇ ㄙㄠˇ，ㄉㄢˋ ㄕˋ ㄒㄧㄢˋ ㄗㄞˋ ㄈㄤˊ ㄐㄧㄢ ㄍㄥˋ ㄌㄨㄢˋ ㄌㄜ˙.',
            pinyin: 'wo3 gao4 su4 ta1 yao4 da3 sao3, dan4 shi4 xian4 zai4 fang2 jian1 geng4 luan4 le.',
            translation: '彼に片付けるように言ったのに、 部屋は更に散らかっています。'
          },
          {
            word: '大家',
            sentence: '捷運裡大家都在滑手機。',
            bopomofo: 'ㄐㄧㄝˊ ㄩㄣˋ ㄌㄧˇ ㄉㄚˋ ㄐㄧㄚ ㄉㄡ ㄗㄞˋ ㄏㄨㄚˊ ㄕㄡˇ ㄐㄧ.',
            pinyin: 'jie2 yun4 li3 da4 jia1 dou1 zai4 hua2 shou3 ji1.',
            translation: 'MRTの中では誰もが携帯電話を触っています。',
            memo: '※「在」と「著」の使い分け：「在」は今まさに行われている事(動作)に使う。 「著」は継続している状態→例.「今天我穿著紅色的衣服(今日は赤い服を着ている)」/「我想留著長頭髮(髪を伸ばしている)」。'
          },
          {
            word: '小心',
            sentence: '月台和火車之間有縫隙, 小心東西別掉了。',
            bopomofo: 'ㄩㄝˋ ㄊㄞˊ ㄏㄜˊ ㄏㄨㄛˇ ㄔㄜ ㄓ ㄐㄧㄢ ㄧㄡˇ ㄈㄥˋ ㄒㄧˋ, ㄒㄧㄠˇ ㄒㄧㄣ ㄉㄨㄥ ㄒㄧ ㄅㄧㄝˊ ㄉㄧㄠˋ ㄌㄜ˙.',
            pinyin: 'yue4 tai2 han4 huo3 che1 zhi1 jian1 you3 feng4 xi4, xiao3 xin1 dong1 xi1 bie2 diao4 le.',
            translation: '電車とホームの間には隙間があるので、 誤って物を落とさないでください。'
          },
          {
            word: '可怕',
            sentence: '大狗吠的樣子很可怕。',
            bopomofo: 'ㄉㄚˋ ㄍㄡˇ ㄈㄟˋ ㄉㄜ˙ ㄧㄤˋ ㄗ˙ ㄏㄣˇ ㄎㄜˇ ㄆㄚˋ.',
            pinyin: 'da4 gou3 fei4 de yang4 zi3 hen3 ke3 pa4.',
            translation: '大きな犬が吠えているのは怖いです。',
            memo: '※「可怕」と「害怕」の違い：「可怕」は、人/事/物etcを形容して「怖い」。「害怕」は怖いと感じる事で、動詞として使える。 例.「他看了可怕的電影以後，他害怕去洗手間=怖い映画を観た後、 トイレに行くのが怖い」。'
          },
          {
            word: '停',
            sentence: '我家前面施工的聲音突然停了。',
            bopomofo: 'ㄨㄛˇ ㄐㄧㄚ ㄑㄧㄢˊ ㄇㄧㄢˋ ㄕ ㄍㄨㄥ ㄉㄜ˙ ㄕㄥ ㄧㄣ ㄊㄨ ㄖㄢˊ ㄊㄧㄥˊ ㄌㄜ˙.',
            pinyin: 'wo3 jia1 qian2 mian4 shi1 gong1 de sheng1 yin1 tu1 ran2 ting2 le.',
            translation: '家の前の工事の音が突然止まりました。'
          },
          {
            word: '下雨',
            sentence: '下雨下得很大, 可能是因為低氣壓。',
            bopomofo: 'ㄒㄧㄚˋ ㄩˇ ㄒㄧㄚˋ ㄉㄜ˙ ㄏㄣˇ ㄉㄚˋ, ㄎㄜˇ ㄋㄥˊ ㄕˋ ㄧㄣ ㄨㄟˋ ㄉㄧ ㄑㄧˋ ㄧㄚ.',
            pinyin: 'xia4 yu3 xia4 de hen3 da4, ke3 neng2 shi4 yin1 wei4 di1 qi4 ya1.',
            translation: '大雨が降っているのは、 おそらく低気圧のせいです。'
          },
          {
            word: '這次',
            sentence: '這家百貨公司這次的折扣是最棒的。',
            bopomofo: 'ㄓㄜˋ ㄐㄧㄚ ㄅㄞˇ ㄏㄨㄛˋ ㄍㄨㄥ ㄙ ㄓㄜˋ ㄘˋ ㄉㄜ˙ ㄓㄜˊ ㄎㄡˋ ㄕˋ ㄗㄨㄟˋ ㄅㄤˋ ㄉㄜ˙.',
            pinyin: 'zhe4 jia1 bai3 huo4 gong1 si1 zhe4 ci4 de zhe2 kou4 shi4 zui4 bang4 de.',
            translation: 'このデパートの今回のセールは最高です。'
          },
          {
            word: '上次',
            sentence: '上次他來的時候, 他走錯了路。',
            bopomofo: 'ㄕㄤˋ ㄘˋ ㄊㄚ ㄌㄞˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄊㄚ ㄗㄡˇ ㄘㄨㄛˋ ㄌㄜ˙ ㄌㄨˋ.',
            pinyin: 'shang4 ci4 ta1 lai2 de shi2 hou4, ta1 zou3 cuo4 le lu4.',
            translation: '前回来た時、 彼は道を間違えました。'
          },
          {
            word: '慢走',
            sentence: '這個月是鬼月，你回家小心。 -慢走。',
            bopomofo: 'ㄓㄜˋ ㄍㄜˋ ㄩㄝˋ ㄕˋ ㄍㄨㄟˇ ㄩㄝˋ，ㄋㄧˇ ㄏㄨㄟˊ ㄐㄧㄚ ㄒㄧㄠˇ ㄒㄧㄣ。 -ㄇㄢˋ ㄗㄡˇ.',
            pinyin: 'zhe4 ge4 yue4 shi4 gui3 yue4, ni3 hui2 jia1 xiao3 xin1. -man4 zou3.',
            translation: '今月は鬼月だから、 注意して帰って下さい。 -気を付けて。'
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
