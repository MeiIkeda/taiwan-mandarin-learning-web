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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第10章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第10章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      // 単語数：68
      data: {
        title: '當代中文課程課3・第10章',
        words: [
          {
            word: '住院',
            sentence: '我因為暴飲暴食而住院。',
            bopomofo: 'ㄨㄛˇ ㄧㄣ ㄨㄟˋ ㄅㄠˋ ㄧㄣˇ ㄅㄠˋ ㄕˊ ㄦˊ ㄓㄨˋ ㄩㄢˋ.',
            pinyin: 'wo3 yin1 wei4 bao4 yin3 bao4 shi2 er2 zhu4 yuan4.',
            translation: '暴飲暴食を続けたせいで、 入院する事になりました。',
            memo: ''
          },
          {
            word: '臉',
            sentence: '我的貓不但臉可愛, 而且聲音也可愛。',
            bopomofo: 'ㄨㄛˇ ㄉㄜ˙ ㄇㄠ ㄅㄨˊ ㄉㄢˋ ㄌㄧㄢˇ ㄎㄜˇ ㄞˋ, ㄦˊ ㄑㄧㄝˇ ㄕㄥ ㄧㄣ ㄧㄝˇ ㄎㄜˇ ㄞˋ.',
            pinyin: 'wo3 de mao1 bu2 dan4 lian3 ke3 ai4, er2 qie3 sheng1 yin1 ye3 ke3 ai4.',
            translation: '私の猫は顔が可愛いだけでなく、 声も可愛いです。',
            memo: ''
          },
          {
            word: '受傷',
            sentence: '爸爸太喝醉了, 在樓梯摔倒受傷了。',
            bopomofo: 'ㄅㄚˋ ㄅㄚ˙ ㄊㄞˋ ㄏㄜ ㄗㄨㄟˋ ㄌㄜ˙, ㄗㄞˋ ㄌㄡˊ ㄊㄧ ㄕㄨㄞ ㄉㄠˇ ㄕㄡˋ ㄕㄤ ㄌㄜ˙.',
            pinyin: 'ba4 ba tai4 he1 zui4 le, zai4 lou2 ti1 shuai1 dao3 shou4 shang1 le.',
            translation: 'お父さんはひどく酔っぱらって、 階段で転んで怪我をしました。',
            memo: ''
          },
          {
            word: '撞',
            sentence: '我不小心撞到了我的脛骨, 痛極了。',
            bopomofo: 'ㄨㄛˇ ㄅㄨˋ ㄒㄧㄠˇ ㄒㄧㄣ ㄓㄨㄤˋ ㄉㄠˋ ㄌㄜ˙ ㄨㄛˇ ㄉㄜ˙ ㄐㄧㄥˋ ㄍㄨˇ, ㄊㄨㄥˋ ㄐㄧˊ ㄌㄜ˙.',
            pinyin: 'wo3 bu4 xiao3 xin1 zhuang4 dao4 le wo3 de jing4 gu3, tong4 ji3 le.',
            translation: '誤って向こう脛をぶつけてしまって、 ひどく痛いです。',
            memo: ''
          },
          {
            word: '遵守',
            sentence: '僱用員工的時候, 公司得遵守國家的法律。',
            bopomofo: 'ㄍㄨˋ ㄩㄥˋ ㄩㄢˊ ㄍㄨㄥ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄍㄨㄥ ㄙ ㄉㄟˇ ㄗㄨㄣ ㄕㄡˇ ㄍㄨㄛˊ ㄐㄧㄚ ㄉㄜ˙ ㄈㄚˇ ㄌㄩˋ.',
            pinyin: 'gu4 yong4 yuan2 gong1 de shi2 hou4, gong1 si1 dei3 zun1 shou3 guo2 jia1 de fa3 lu4.',
            translation: '従業員を雇用する時、 会社は国の法律を遵守しなければなりません。',
            memo: ''
          },
          {
            word: '規則',
            sentence: '我不擅長規則過於復雜的運動。',
            bopomofo: 'ㄨㄛˇ ㄅㄨˊ ㄕㄢˋ ㄔㄤˊ ㄍㄨㄟ ㄗㄜˊ ㄍㄨㄛˋ ㄩˊ ㄈㄨˋ ㄗㄚˊ ㄉㄜ˙ ㄩㄣˋ ㄉㄨㄥˋ.',
            pinyin: 'wo3 bu2 shan4 chang2 gui1 ze2 guo4 yu2 fu4 za2 de yun4 dong4.',
            translation: 'ルールが複雑すぎるスポーツは苦手です。',
            memo: ''
          },
          {
            word: '報警',
            sentence: '經過報警， 我發現偷生魚片的犯人是我的貓。',
            bopomofo: 'ㄐㄧㄥ ㄍㄨㄛˋ ㄅㄠˋ ㄐㄧㄥˇ, ㄨㄛˇ ㄈㄚ ㄒㄧㄢˋ ㄊㄡ ㄕㄥ ㄩˊ ㄆㄧㄢˋ ㄉㄜ˙ ㄈㄢˋ ㄖㄣˊ ㄕˋ ㄨㄛˇ ㄉㄜ˙ ㄇㄠ.',
            pinyin: 'jing1 guo4 bao4 jing3, wo3 fa1 xian4 tou1 sheng1 yu2 pian4 de fan4 ren2 shi4 wo3 de mao1.',
            translation: '警察を呼んでから、 お刺身を盗んだのは私の猫だという事に気付きました。',
            memo: ''
          },
          {
            word: '急診室',
            sentence: '事故中受傷的人被立刻送往急診室。',
            bopomofo: 'ㄕˋ ㄍㄨˋ ㄓㄨㄥ ㄕㄡˋ ㄕㄤ ㄉㄜ˙ ㄖㄣˊ ㄅㄟˋ ㄌㄧˋ ㄎㄜˋ ㄙㄨㄥˋ ㄨㄤˇ ㄐㄧˊ ㄓㄣˇ ㄕˋ.',
            pinyin: 'shi4 gu4 zhong1 shou4 shang1 de ren2 bei4 li4 ke4 song4 wang3 ji2 zhen3 shi4.',
            translation: '事故でけがをした人はすぐに救急処置室へ運ばれました。',
            memo: ''
          },
          {
            word: '傷',
            sentence: '因為貓總是隨便咬我, 我的胳膊上滿是傷。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄇㄠ ㄗㄨㄥˇ ㄕˋ ㄙㄨㄟˊ ㄅㄧㄢˋ ㄧㄠˇ ㄨㄛˇ, ㄨㄛˇ ㄉㄜ˙ ㄍㄜ ㄅㄛˊ ㄕㄤˋ ㄇㄢˇ ㄕˋ ㄕㄤ.',
            pinyin: 'yin1 wei4 mao1 zong3 shi4 sui2 bian4 yao3 wo3, wo3 de ge1 bo2 shang4 man3 shi4 shang1.',
            translation: '猫がいつもやたらと噛んでくるので、 腕が傷だらけです。',
            memo: ''
          },
          {
            word: '骨折',
            sentence: '她以為自己的腳受了一點傷， 沒想到卻骨折了。',
            bopomofo: 'ㄊㄚ ㄧˇ ㄨㄟˊ ㄗˋ ㄐㄧˇ ㄉㄜ˙ ㄐㄧㄠˇ ㄕㄡˋ ㄌㄜ˙ ㄧˋ ㄉㄧㄢˇ ㄕㄤ, ㄇㄟˊ ㄒㄧㄤˇ ㄉㄠˋ ㄑㄩㄝˋ ㄍㄨˇ ㄓㄜˊ ㄌㄜ˙.',
            pinyin: 'ta1 yi3 wei2 zi4 ji3 de jiao3 shou4 le yi1 dian3 shang1, mei2 xiang3 dao4 que4 gu3 zhe2 le.',
            translation: '彼女は足を少しばかり怪我したと思っていましたが、 まさか骨折しているとは思ってもみませんでした。',
            memo: ''
          },
          {
            word: '片子',
            sentence: '對於拍了的X光片子, 醫生解釋給我聽。',
            bopomofo: 'ㄉㄨㄟˋ ㄩˊ ㄆㄞ ㄌㄜ˙ ㄉㄜ˙ X ㄍㄨㄤ ㄆㄧㄢ ㄗ˙, ㄧ ㄕㄥ ㄐㄧㄝˇ ㄕˋ ㄍㄟˇ ㄨㄛˇ ㄊㄧㄥ.',
            pinyin: 'dui4 yu2 pai1 le de X guang1 pian4 zi, yi3 sheng1 jie3 shi4 gei3 wo3 ting1.',
            translation: '撮ったレントゲン写真について、 お医者さんが説明してくれました。',
            memo: ''
          },
          {
            word: '開刀',
            sentence: '開五個小時的刀成功了， 他恢復了健康。',
            bopomofo: 'ㄎㄞ ㄨˇ ㄍㄜˋ ㄒㄧㄠˇ ㄕˊ ㄉㄜ˙ ㄉㄠ ㄔㄥˊ ㄍㄨㄥ ㄌㄜ˙, ㄊㄚ ㄏㄨㄟ ㄈㄨˋ ㄌㄜ˙ ㄐㄧㄢˋ ㄎㄤ.',
            pinyin: 'kai1 wu3 ge4 xiao3 shi2 de dao1 cheng2 gong1 le, ta1 hui1 fu4 le jian4 kang1.',
            translation: '5時間にも及んだ手術は成功し、 彼は元気になりました。',
            memo: ''
          },
          {
            word: '病人',
            sentence: '即使醫生說不行， 那個病人還是會吃辛辣的食物。',
            bopomofo: 'ㄐㄧˊ ㄕˇ ㄧ ㄕㄥ ㄕㄨㄛ ㄅㄨˋ ㄒㄧㄥˊ, ㄋㄚˋ ㄍㄜˋ ㄅㄧㄥˋ ㄖㄣˊ ㄏㄞˊ ㄕˋ ㄏㄨㄟˋ ㄔ ㄒㄧㄣ ㄌㄚˋ ㄉㄜ˙ ㄕˊ ㄨˋ.',
            pinyin: 'ji2 shi3 yi1 sheng1 shuo1 bu4 xing2, na4 ge4 bing4 ren2 hai2 shi4 hui4 chi1 xin1 la4 de shi2 wu4.',
            translation: 'あの患者さんは、 医者が駄目だと言っても辛いものばかり食べてしまいます。',
            memo: ''
          },
          {
            word: '情況',
            sentence: '我做的工作失敗了， 向老闆報告情況很鬱悶。',
            bopomofo: 'ㄨㄛˇ ㄗㄨㄛˋ ㄉㄜ˙ ㄍㄨㄥ ㄗㄨㄛˋ ㄕ ㄅㄞˋ ㄌㄜ˙, ㄒㄧㄤˋ ㄌㄠˇ ㄅㄢˇ ㄅㄠˋ ㄍㄠˋ ㄑㄧㄥˊ ㄎㄨㄤˋ ㄏㄣˇ ㄩˋ ㄇㄣˋ.',
            pinyin: 'wo3 zuo4 de gong1 zuo4 shi1 bai4 le, xiang4 lao3 ban3 bao4 gao4 qing2 kuang4 hen3 yu4 men4.',
            translation: '仕事で失敗をしてしまったので、 上司に状況を報告するのがすごく憂鬱です。',
            memo: ''
          },
          {
            word: '緊急',
            sentence: '因為貓無法從樹上下來的緊急情況， 消防隊出動了。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄇㄠ ㄨˊ ㄈㄚˇ ㄘㄨㄥˊ ㄕㄨˋ ㄕㄤˋ ㄒㄧㄚˋ ㄌㄞˊ ㄉㄜ˙ ㄐㄧㄣˇ ㄐㄧˊ ㄑㄧㄥˊ ㄎㄨㄤˋ, ㄒㄧㄠ ㄈㄤˊ ㄉㄨㄟˋ ㄔㄨ ㄉㄨㄥˋ ㄌㄜ˙.',
            pinyin: 'yin1 wei4 mao1 wu2 fa3 cong2 shu4 shang4 xia4 lai2 de jin3 ji2 qing2 kuang4, xiao1 fang2 dui4 chu1 dong4 le.',
            translation: '猫が木から降りられない緊急事態により、 消防隊が出動しました。',
            memo: ''
          },
          {
            word: '★病床',
            sentence: '她都躺在病床上了還偷偷喝酒。',
            bopomofo: 'ㄊㄚ ㄉㄡ ㄊㄤˇ ㄗㄞˋ ㄅㄧㄥˋ ㄔㄨㄤˊ ㄕㄤˋ ㄌㄜ˙ ㄏㄞˊ ㄊㄡ ㄊㄡ ㄏㄜ ㄐㄧㄡˇ.',
            pinyin: 'ta1 dou1 tang3 zai4 bing4 chuang2 shang4 le hai2 tou1 tou1 he1 jiu3.',
            translation: '彼女は病床についてもこっそりお酒を飲み続けています。',
            memo: '※この「都」の役割は?'
          },
          {
            word: '要命',
            sentence: '他今天一直在外面， 所以皮膚被曬得很黑。',
            bopomofo: 'ㄊㄚ ㄐㄧㄣ ㄊㄧㄢ ㄧ ㄓˊ ㄗㄞˋ ㄨㄞˋ ㄇㄧㄢˋ, ㄙㄨㄛˇ ㄧˇ ㄆㄧˊ ㄈㄨ ㄅㄟˋ ㄕㄞˋ ㄉㄜ˙ ㄏㄣˇ ㄏㄟ.',
            pinyin: 'ta1 jin1 tian1 yi1 zhi2 zai4 wai4 mian4, suo3 yi3 pi2 fu1 bei4 shai4 de hen3 hei1.',
            translation: '彼は今日中外にいたので、 ひどく日焼けしています。',
            memo: ''
          },
          {
            word: '打針',
            sentence: '與其我要打針, 不如感冒久一點。',
            bopomofo: 'ㄩˇ ㄑㄧˊ ㄨㄛˇ ㄧㄠˋ ㄉㄚˇ ㄓㄣ, ㄅㄨˋ ㄖㄨˊ ㄍㄢˇ ㄇㄠˋ ㄐㄧㄡˇ ㄧ ㄉㄧㄢˇ.',
            pinyin: 'yu3 qi2 wo3 yao4 da3 zhen1, bu4 ru2 gan3 mao4 jiu3 yi1 dian3.',
            translation: '注射を打つくらいなら、 風邪が長引いても構いません。',
            memo: '※「與其(ㄩˇ ㄑㄧˊ/yu3 qi2)～、 不如(ㄅㄨˋ ㄖㄨˊ/bu4 ru2)～」 : 「～くらいなら～だ」。'
          },
          {
            word: '止痛',
            sentence: '哪種止痛藥最有效?',
            bopomofo: 'ㄋㄚˇ ㄓㄨㄥˇ ㄓˇ ㄊㄨㄥˋ ㄧㄠˋ ㄗㄨㄟˋ ㄧㄡˇ ㄒㄧㄠˋ?',
            pinyin: 'na3 zhong3 zhi3 tong4 yao zui4 you3 xiao4?',
            translation: '一番効く痛み止めはどれですか?',
            memo: ''
          },
          {
            word: '手術',
            sentence: '如果可以， 我想打全身麻醉的手術。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄎㄜˇ ㄧˇ, ㄨㄛˇ ㄒㄧㄤˇ ㄉㄚˇ ㄑㄩㄢˊ ㄕㄣ ㄇㄚˊ ㄗㄨㄟˋ ㄉㄜ˙ ㄕㄡˇ ㄕㄨˋ.',
            pinyin: 'ru2 guo3 ke3 yi3, wo3 xiang3 da3 quan2 shen1 ma2 zui4 de shou3 shu4.',
            translation: 'できれば、 手術は全身麻酔でお願いしたいです。',
            memo: ''
          },
          {
            word: '★警察',
            sentence: '即使我沒有做任何壞事， 警察弄錯的時候我也有點緊張。',
            bopomofo: 'ㄐㄧˊ ㄕˇ ㄨㄛˇ ㄇㄟˊ ㄧㄡˇ ㄗㄨㄛˋ ㄖㄣˋ ㄏㄜˊ ㄏㄨㄞˋ ㄕˋ, ㄐㄧㄥˇ ㄔㄚˊ ㄋㄨㄥˋ ㄘㄨㄛˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄨㄛˇ ㄧㄝˇ ㄧㄡˇ ㄉㄧㄢˇ ㄐㄧㄣˇ ㄓㄤ.',
            pinyin: 'ji2 shi3 wo3 mei2 you3 zuo4 ren4 he2 huai4 shi4, jing3 cha2 nong4 cuo4 de shi2 hou4 wo3 ye3 you3 dian3 jin3 zhang1.',
            translation: '何も悪い事をしていなくても、 警察とすれ違う時は少しドキドキします。',
            memo: '※「弄錯」は「すれ違う」?'
          },
          {
            word: '★危險',
            sentence: '你不快一點把火關上， 熱水就會溢出來很危險。',
            bopomofo: 'ㄋㄧˇ ㄅㄨˊ ㄎㄨㄞˋ ㄧ ㄉㄧㄢˇ ㄅㄚˇ ㄏㄨㄛˇ ㄍㄨㄢ ㄕㄤˋ, ㄖㄜˋ ㄕㄨㄟˇ ㄐㄧㄡˋ ㄏㄨㄟˋ ㄧˋ ㄔㄨ ㄌㄞˊ ㄏㄣˇ ㄨㄟ ㄒㄧㄢˇ.',
            pinyin: 'ni3 bu2 kuai4 yi1 dian3 ba3 huo3 guan1 shang4, re4 shui3 jiu4 hui4 yi4 chu1 lai2 hen3 wei1 xian3.',
            translation: '早く火を止めないと、 お湯が吹きこぼれて危険です。',
            memo: '※「火を止める」 : 「把火關上(ㄅㄚˇ ㄏㄨㄛˇ ㄍㄨㄢ ㄕㄤˋ/ba3 huo3 guan1 shang4)」(「上」の意味は?) = 「熄火(ㄒㄧ ㄏㄨㄛˇ/xi1 huo3)」?'
          },
          {
            word: '至於',
            sentence: '至於這個計劃只有他反對了, 其他人都同意了。',
            bopomofo: 'ㄓˋ ㄩˊ ㄓㄜˋ ㄍㄜˋ ㄐㄧˋ ㄏㄨㄚˋ ㄓˇ ㄧㄡˇ ㄊㄚ ㄈㄢˇ ㄉㄨㄟˋ ㄌㄜ˙, ㄑㄧˊ ㄊㄚ ㄖㄣˊ ㄉㄡ ㄊㄨㄥˊ ㄧˋ ㄌㄜ˙.',
            pinyin: 'zhi4 yu2 zhe4 ge4 ji4 hua4 zhi3 you3 ta1 fan3 dui4 le, qi2 ta1 ren2 dou1 tong2 yi4 le.',
            translation: 'この案に関しては彼だけが反対し、 他の人は賛成しました。',
            memo: ''
          },
          {
            word: '★部位',
            sentence: '我揹背包揹了很久， 所以肩膀的部位很痛。',
            bopomofo: 'ㄨㄛˇ ㄅㄟ ㄅㄟ ㄅㄠ ㄅㄟ ㄌㄜ˙ ㄏㄣˇ ㄐㄧㄡˇ, ㄙㄨㄛˇ ㄧˇ ㄐㄧㄢ ㄅㄤˇ ㄉㄜ˙ ㄅㄨˋ ㄨㄟˋ ㄏㄣˇ ㄊㄨㄥˋ.',
            pinyin: 'wo3 bei1 bei1 bao1 bei1 le hen3 jiu3, suo3 yi3 jian1 bang3 de bu4 wei4 hen3 tong4.',
            translation: '長い時間リュックを背負っていたので、 肩のあたりが痛くなりました。',
            memo: '※「揹(ㄅㄟ/bei1)」の発音?'
          },
          {
            word: '恢復',
            sentence: '很痛苦地過了一個星期， 我終於從流感恢復了。',
            bopomofo: 'ㄏㄣˇ ㄊㄨㄥˋ ㄎㄨˇ ㄉㄜ˙ ㄍㄨㄛˋ ㄌㄜ˙ ㄧ ㄍㄜˋ ㄒㄧㄥ ㄑㄧˊ, ㄨㄛˇ ㄓㄨㄥ ㄩˊ ㄘㄨㄥˊ ㄌㄧㄡˊ ㄍㄢˇ ㄏㄨㄟ ㄈㄨˋ ㄌㄜ˙.',
            pinyin: 'hen3 tong4 ku3 de guo4 le yi1 ge4 xing1 qi2, wo3 zhong1 yu2 cong2 liu2 gan3 hui1 fu4 le.',
            translation: '一週間苦しんで、 インフルエンザからようやく回復しました。',
            memo: ''
          },
          {
            word: '傷口',
            sentence: '不要運動， 因為它會讓傷口裂開。',
            bopomofo: 'ㄅㄨˊ ㄧㄠˋ ㄩㄣˋ ㄉㄨㄥˋ, ㄧㄣ ㄨㄟˋ ㄊㄚ ㄏㄨㄟˋ ㄖㄤˋ ㄕㄤ ㄎㄡˇ ㄌㄧㄝˋ ㄎㄞ.',
            pinyin: 'bu2 yao4 yun4 dong4, yin1 wei4 ta1 hui4 rang4 shang1 kou3 lie4 kai1.',
            translation: '傷口が開いてしまうので、 運動はしないで下さい。',
            memo: ''
          },
          {
            word: '哎呀',
            sentence: '哎呀, 我剛剛喝的不是水而是醋!。',
            bopomofo: 'ㄞ ㄧㄚ˙, ㄨㄛˇ ㄍㄤ ㄍㄤ ㄏㄜ ㄉㄜ˙ ㄅㄨˊ ㄕˋ ㄕㄨㄟˇ ㄦˊ ㄕˋ ㄘㄨˋ.',
            pinyin: 'ai1 ya, wo3 gang1 gang1 he1 de bu2 shi4 shui3 er2 shi4 cu4.',
            translation: 'おっと、 水を飲んだと思ったらお酢でした!',
            memo: ''
          },
          {
            word: '★出車禍',
            sentence: '自從出車禍以後, 他開車的時候會非常注意。',
            bopomofo: 'ㄗˋ ㄘㄨㄥˊ ㄔㄨ ㄔㄜ ㄏㄨㄛˋ ㄧˇ ㄏㄡˋ, ㄊㄚ ㄎㄞ ㄔㄜ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄏㄨㄟˋ ㄈㄟ ㄔㄤˊ ㄓㄨˋ ㄧˋ.',
            pinyin: 'zi4 cong2 chu1 che1 huo4 yi3 hou4, ta1 kai1 che1 de shi2 hou4 hui4 fei1 chang2 zhu4 yi4.',
            translation: '自動車事故の後、 彼は運転にはすごく慎重になりました。',
            memo: '※「自從(ㄗˋ ㄘㄨㄥˊ/zi4 cong2)」 : 「～から、 ～以来」。'
          },
          {
            word: '★趕時間',
            sentence: '沒有時間了， 他走得很急。',
            bopomofo: 'ㄇㄟˊ ㄧㄡˇ ㄕˊ ㄐㄧㄢ ㄌㄜ˙, ㄊㄚ ㄗㄡˇ ㄉㄜ˙ ㄏㄣˇ ㄐㄧˊ.',
            pinyin: 'mei2 you3 shi2 jian1 le, ta1 zou3 de hen3 ji2.',
            translation: '時間があまり無かったので、 彼は急いで歩きだしました。',
            memo: '※「趕時間」は使えない?'
          },
          {
            word: '撞倒',
            sentence: '他每天加班加到半夜， 所以他終於累倒了。',
            bopomofo: 'ㄊㄚ ㄇㄟˇ ㄊㄧㄢ ㄐㄧㄚ ㄅㄢ ㄐㄧㄚ ㄉㄠˋ ㄅㄢˋ ㄧㄝˋ, ㄙㄨㄛˇ ㄧˇ ㄊㄚ ㄓㄨㄥ ㄩˊ ㄌㄟˋ ㄉㄠˇ ㄌㄜ˙.',
            pinyin: 'ta1 mei3 tian1 jia1 ban1 jia1 dao4 ban4 ye4, suo3 yi3 ta1 zhong1 yu2 lei4 dao3 le.',
            translation: '彼は毎日夜中まで残業していたので、 とうとう倒れてしまいました。',
            memo: ''
          },
          {
            word: '★救護車',
            sentence: '他被救護車送走了, 這樣一來我覺得他至少一個星期不能做事。',
            bopomofo: 'ㄊㄚ ㄅㄟˋ ㄐㄧㄡˋ ㄏㄨˋ ㄔㄜ ㄙㄨㄥˋ ㄗㄡˇ ㄌㄜ˙, ㄓㄜˋ ㄧㄤˋ ㄧ ㄌㄞˊ ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄊㄚ ㄓˋ ㄕㄠˇ ㄧ ㄍㄜˋ ㄒㄧㄥ ㄑㄧˊ ㄅㄨˋ ㄋㄥˊ ㄗㄨㄛˋ ㄕˋ.',
            pinyin: 'ta1 bei4 jiu4 hu4 che1 song4 zou3 le, zhe4 yang4 yi1 lai2 wo3 jue2 de ta1 zhi4 shao3 yi1 ge4 xing1 qi2 bu4 neng2 zuo4 shi4.',
            translation: '彼は救急車で運ばれたので、 この様子だと彼は少なくとも一週間は仕事ができないと思います。',
            memo: '※「做事」で「仕事をする」?'
          },
          {
            word: '照X光',
            sentence: '為了確認是否骨折了, 我照了X光。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄑㄩㄝˋ ㄖㄣˋ ㄕˋ ㄈㄡˇ ㄍㄨˇ ㄓㄜˊ ㄌㄜ˙, ㄨㄛˇ ㄓㄠˋ ㄌㄜ˙ X ㄍㄨㄤ.',
            pinyin: 'wei4 le que4 ren4 shi4 fou3 gu3 zhe2 le, wo3 zhao4 le X guang1.',
            translation: '骨折していないか確かめるために、 レントゲン検査を受けました。',
            memo: ''
          },
          {
            word: '動手術',
            sentence: '我早就動過手術了, 現在健康沒有問題。',
            bopomofo: 'ㄨㄛˇ ㄗㄠˇ ㄐㄧㄡˋ ㄉㄨㄥˋ ㄍㄨㄛˋ ㄕㄡˇ ㄕㄨˋ ㄌㄜ˙, ㄒㄧㄢˋ ㄗㄞˋ ㄐㄧㄢˋ ㄎㄤ ㄇㄟˊ ㄧㄡˇ ㄨㄣˋ ㄊㄧˊ.',
            pinyin: 'wo3 zao3 jiu4 dong4 guo4 shou3 shu4 le, xian4 zai4 jian4 kang1 mei2 you3 wen4 ti2.',
            translation: '手術を受けてからしばらく経ったので、 もう健康上の問題はありません。',
            memo: ''
          },
          {
            word: '★醫美',
            sentence: '如果你要美容整形， 得先花足夠的時間諮詢。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄧㄠˋ ㄇㄟˇ ㄖㄨㄥˊ ㄓㄥˇ ㄒㄧㄥˊ, ㄉㄟˇ ㄒㄧㄢ ㄏㄨㄚ ㄗㄨˊ ㄍㄡˋ ㄉㄜ˙ ㄕˊ ㄐㄧㄢ ㄗ ㄒㄩㄣˊ.',
            pinyin: 'ru2 guo3 ni3 yao4 mei3 rong2 zheng3 xing2, dei3 xian1 hua1 zu2 gou4 de shi2 jian1 zi1 xun2.',
            translation: '美容整形を受けるなら、 カウンセリングには十分な時間をかけなければいけません。',
            memo: '※「醫美」を使うには?'
          },
          {
            word: '合理',
            sentence: '在特價時， 你可以用合理的價格購買很貴的物品。',
            bopomofo: 'ㄗㄞˋ ㄊㄜˋ ㄐㄧㄚˋ ㄕˊ, ㄋㄧˇ ㄎㄜˇ ㄧˇ ㄩㄥˋ ㄏㄜˊ ㄌㄧˇ ㄉㄜ˙ ㄐㄧㄚˋ ㄍㄜˊ ㄍㄡˋ ㄇㄞˇ ㄏㄣˇ ㄍㄨㄟˋ ㄉㄜ˙ ㄨˋ ㄆㄧㄣˇ.',
            pinyin: 'zai4 te4 jia4 shi2, ni3 ke3 yi3 yong4 he2 li3 de jia4 ge2 gou4 mai3 hen3 gui4 de wu4 pin3.',
            translation: 'セールの時は、 普段高い商品もリーズナブルな価格で買う事ができます。',
            memo: ''
          },
          {
            word: '休假',
            sentence: '我休了三天的假的時候把這本小說讀完了。',
            bopomofo: 'ㄨㄛˇ ㄒㄧㄡ ㄌㄜ˙ ㄙㄢ ㄊㄧㄢ ㄉㄜ˙ ㄐㄧㄚˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄅㄚˇ ㄓㄜˋ ㄅㄣˇ ㄒㄧㄠˇ ㄕㄨㄛ ㄉㄨˊ ㄨㄢˊ ㄌㄜ˙.',
            pinyin: 'wo3 xiu1 le san1 tian1 de jia4 de shi2 hou4 ba3 zhe4 ben3 xiao3 shuo1 du2 wan2 le.',
            translation: '3日間の休暇中に、 この小説を読み終えました。',
            memo: ''
          },
          {
            word: '迷人',
            sentence: '她很迷人， 穿著奇裝異服看起來也很合適。',
            bopomofo: 'ㄊㄚ ㄏㄣˇ ㄇㄧˊ ㄖㄣˊ, ㄔㄨㄢ ㄓㄜ˙ ㄑㄧˊ ㄓㄨㄤ ㄧˋ ㄈㄨˊ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄧㄝˇ ㄏㄣˇ ㄏㄜˊ ㄕˋ.',
            pinyin: 'ta1 hen3 mi2 ren2, chuan1 zhe qi2 zhuang1 yi4 fu2 kan4 qi3 lai2 ye3 hen3 he2 shi4.',
            translation: '彼女はとても魅力的で、 奇抜な服装でもよく似合います。',
            memo: ''
          },
          {
            word: '★職場',
            sentence: '在職場上， 他身為指導有立場管理部下。',
            bopomofo: 'ㄗㄞˋ ㄓˊ ㄔㄤˇ ㄕㄤˋ, ㄊㄚ ㄕㄣ ㄨㄟˊ ㄓˇ ㄉㄠˇ    ㄧㄡˇ ㄌㄧˋ ㄔㄤˇ ㄍㄨㄢˇ ㄌㄧˇ ㄅㄨˋ ㄒㄧㄚˋ.',
            pinyin: 'zai4 zhi2 chang3 shang4, ta1 shen1 wei2 zhi3 dao3 you3 li4 chang3 guan3 li3 bu4 xia4.',
            translation: '職場では、 彼はディレクターとして部下をまとめる立場にあります。',
            memo: '※「立場 + V」 = 「Vする立場」。 「身為」は「作為」ではない? 「指導(ㄓˇ ㄉㄠˇ/zhi3 dao3)」は「監督(ㄐㄧㄢ ㄉㄨ/jian1 du1)」でも可。'
          },
          {
            word: '競爭力',
            sentence: '雖然競爭產品多了, 我們的產品還有很強的競爭力。',
            bopomofo: 'ㄙㄨㄟ ㄖㄢˊ ㄐㄧㄥˋ ㄓㄥ ㄔㄢˇ ㄆㄧㄣˇ ㄉㄨㄛ ㄌㄜ˙, ㄨㄛˇ ㄇㄣ˙ ㄉㄜ˙ ㄔㄢˇ ㄆㄧㄣˇ ㄏㄞˊ ㄧㄡˇ ㄏㄣˇ ㄑㄧㄤˊ ㄉㄜ˙ ㄐㄧㄥˋ ㄓㄥ ㄌㄧˋ.',
            pinyin: 'sui1 ran2 jing4 zheng1 chan3 pin3 duo1 le, wo3 men de chan3 pin3 hai2 you3 hen3 qiang2 de jing4 zheng1 li4.',
            translation: '競合製品は増えてきましたが、 当社の製品には依然として高い競争力があります。',
            memo: ''
          },
          {
            word: '調查',
            sentence: '根據我的調查, 這附近的貓大部分是黑的。',
            bopomofo: 'ㄍㄣ ㄐㄩˋ ㄨㄛˇ ㄉㄜ˙ ㄉㄧㄠˋ ㄔㄚˊ, ㄓㄜˋ ㄈㄨˋ ㄐㄧㄣˋ ㄉㄜ˙ ㄇㄠ ㄉㄚˋ ㄅㄨˋ ㄈㄣˋ ㄕˋ ㄏㄟ ㄉㄜ˙.',
            pinyin: 'gen1 ju4 wo3 de diao4 cha2, zhe4 fu4 jin4 de mao1 da4 bu4 fen4 shi4 hei1 de.',
            translation: '私が調べたところ、 この付近の猫は大部分が黒猫です。',
            memo: ''
          },
          {
            word: '整型',
            sentence: '她接受整型後自卑感就沒了， 現在常常笑。',
            bopomofo: 'ㄊㄚ ㄐㄧㄝ ㄕㄡˋ ㄓㄥˇ ㄒㄧㄥˊ ㄏㄡˋ ㄗˋ ㄅㄟ ㄍㄢˇ ㄐㄧㄡˋ ㄇㄟˊ ㄌㄜ˙, ㄒㄧㄢˋ ㄗㄞˋ ㄔㄤˊ ㄔㄤˊ ㄒㄧㄠˋ.',
            pinyin: 'ta1 jie1 shou4 zheng3 xing2 hou4 zi4 bei1 gan3 jiu4 mei2 le, xian4 zai4 chang2 chang2 xiao4.',
            translation: '彼女は美容整形によってコンプレックスが無くなり、 よく笑うようになりました。',
            memo: ''
          },
          {
            word: '增加',
            sentence: '他工作量增加了, 有人可以支援他嗎?',
            bopomofo: 'ㄊㄚ ㄍㄨㄥ ㄗㄨㄛˋ ㄌㄧㄤˋ ㄗㄥ ㄐㄧㄚ ㄌㄜ˙, ㄧㄡˇ ㄖㄣˊ ㄎㄜˇ ㄧˇ ㄓ ㄩㄢˊ ㄊㄚ ㄇㄚ˙?',
            pinyin: 'ta1 gong1 zuo4 liang4 zeng1 jia1 le, you3 ren2 ke3 yi3 zhi1 yuan2 ta1 ma?',
            translation: '彼の仕事量が増えているので、 誰かサポートできる人はいますか?。',
            memo: ''
          },
          {
            word: '自信',
            sentence: '他自信滿滿地說著不對的事， 所以你不應該太信任他。',
            bopomofo: 'ㄊㄚ ㄗˋ ㄒㄧㄣˋ ㄇㄢˇ ㄇㄢˇ ㄉㄜ˙ ㄕㄨㄛ ㄓㄜ˙ ㄅㄨˊ ㄉㄨㄟˋ ㄉㄜ˙ ㄕˋ, ㄙㄨㄛˇ ㄧˇ ㄋㄧˇ ㄅㄨˋ ㄧㄥ ㄍㄞ ㄊㄞˋ ㄒㄧㄣˋ ㄖㄣˋ ㄊㄚ.',
            pinyin: 'ta1 zi4 xin4 man3 man3 de shuo1 zhe bu2 dui4 de shi4, suo3 yi3 ni3 bu4 ying1 gai1 tai4 xin4 ren4 ta1.',
            translation: 'あの人は自信たっぷりに間違った事を言うので、 あまり信用しない方がいいですよ。',
            memo: ''
          },
          {
            word: '外表',
            sentence: '他的外表相當好, 但是頭腦有一點問題。',
            bopomofo: 'ㄊㄚ ㄉㄜ˙ ㄨㄞˋ ㄅㄧㄠˇ ㄒㄧㄤ ㄉㄤ ㄏㄠˇ, ㄉㄢˋ ㄕˋ ㄊㄡˊ ㄋㄠˇ ㄧㄡˇ ㄧ ㄉㄧㄢˇ ㄨㄣˋ ㄊㄧˊ.',
            pinyin: 'ta1 de wai4 biao3 xiang1 dang1 hao3, dan4 shi4 tou2 nao3 you3 yi1 dian3 wen4 ti2.',
            translation: '彼は見た目は良いのですが、 頭はあまり良いとは言えません。',
            memo: ''
          },
          {
            word: '普通',
            sentence: '早上三點太早了, 普通的人還是起不來。',
            bopomofo: 'ㄗㄠˇ ㄕㄤˋ ㄙㄢ ㄉㄧㄢˇ ㄊㄞˋ ㄗㄠˇ ㄌㄜ˙, ㄆㄨˇ ㄊㄨㄥ ㄉㄜ˙ ㄖㄣˊ ㄏㄞˊ ㄕˋ ㄑㄧˇ ㄅㄨˋ ㄌㄞˊ.',
            pinyin: 'zao3 shang4 san1 dian3 tai4 zao3 le, pu3 tong1 de ren2 hai2 shi4 qi3 bu4 lai2.',
            translation: '午前3時は早すぎるので、 普通の人は起きられません。',
            memo: ''
          },
          {
            word: '從事',
            sentence: '我幾年前就開始在餐廳工作, 早就習慣了長時間站著的工作了。',
            bopomofo: 'ㄨㄛˇ ㄐㄧˇ ㄋㄧㄢˊ ㄑㄧㄢˊ ㄐㄧㄡˋ ㄎㄞ ㄕˇ ㄗㄞˋ ㄘㄢ ㄊㄧㄥ ㄍㄨㄥ ㄗㄨㄛˋ, ㄗㄠˇ ㄐㄧㄡˋ ㄒㄧˊ ㄍㄨㄢˋ ㄌㄜ˙ ㄔㄤˊ ㄕˊ ㄐㄧㄢ ㄓㄢˋ ㄓㄜ˙ ㄉㄜ˙ ㄍㄨㄥ ㄗㄨㄛˋ ㄌㄜ˙.',
            pinyin: 'wo3 ji3 nian2 qian2 jiu4 kai1 shi3 zai4 can1 ting1 gong1 zuo4, zao3 jiu4 xi2 guan4 le chang2 shi2 jian1 zhan4 zhe de gong1 zuo4 le.',
            translation: '私は数年前にレストランで働き始めたので、 長時間の立ち仕事にはもう慣れました。',
            memo: ''
          },
          {
            word: '醫治',
            sentence: '為了醫治傷口最重要的事是休息。',
            bopomofo: 'ㄨㄟˋ ㄌㄜ˙ ㄧ ㄓˋ ㄕㄤ ㄎㄡˇ ㄗㄨㄟˋ ㄓㄨㄥˋ ㄧㄠˋ ㄉㄜ˙ ㄕˋ ㄕˋ ㄒㄧㄡ ㄒㄧˊ.',
            pinyin: 'wei4 le yi1 zhi4 shang1 kou3 zui4 zhong4 yao4 de shi4 shi4 xiu1 xi2.',
            translation: '傷を癒すために一番重要なのは休養です。',
            memo: '※「醫治(ㄧ ㄓˋ/yi1 zhi4)」 = 「治癒(ㄓˋ ㄩˋ/zhi4 yu4)」でも可'
          },
          {
            word: '一向',
            sentence: '因為牆壁很薄, 鄰居的聲音一向都聽得見。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄑㄧㄤˊ ㄅㄧˋ ㄏㄣˇ ㄅㄠˊ, ㄌㄧㄣˊ ㄐㄩ ㄉㄜ˙ ㄕㄥ ㄧㄣ ㄧ ㄒㄧㄤˋ ㄉㄡ ㄊㄧㄥ ㄉㄜˊ ㄐㄧㄢˋ.',
            pinyin: 'yin1 wei4 qiang2 bi4 hen3 bao2, lin2 ju1 de sheng1 yin1 yi1 xiang4 dou1 ting1 de jian4.',
            translation: '壁がとても薄いので、 いつも隣の音が聞こえます。',
            memo: ''
          },
          {
            word: '★一般',
            sentence: '太多家具， 一般的學生公寓是放不下的。',
            bopomofo: 'ㄊㄞˋ ㄉㄨㄛ ㄐㄧㄚ ㄐㄩˋ, ㄧˋ ㄅㄢ ㄉㄜ˙ ㄒㄩㄝˊ ㄕㄥ ㄍㄨㄥ ㄩˋ ㄕˋ ㄈㄤˋ ㄅㄨˊ ㄒㄧㄚˋ ㄉㄜ˙.',
            pinyin: 'tai4 duo1 jia1 ju4, yi4 ban1 de xue2 sheng1 gong1 yu4 shi4 fang4 bu2 xia4 de.',
            translation: '多すぎる家具は、 一般的な学生用アパートには収まりません。',
            memo: '※「一般(ㄧˋ ㄅㄢ/yi4 ban1)」の発音は「一般(ㄧ ㄅㄢ/yi1 ban1)」の時もある?'
          },
          {
            word: '主要',
            sentence: '主要城市的交通比較發達了。',
            bopomofo: 'ㄓㄨˇ ㄧㄠˋ ㄔㄥˊ ㄕˋ ㄉㄜ˙ ㄐㄧㄠ ㄊㄨㄥ ㄅㄧˇ ㄐㄧㄠˋ ㄈㄚ ㄉㄚˊ ㄌㄜ˙.',
            pinyin: 'zhu3 yao4 cheng2 shi4 de jiao1 tong1 bi3 jiao4 fa1 da2 le.',
            translation: '主要な都市の交通はより発達しています。',
            memo: ''
          },
          {
            word: '待遇',
            sentence: '因為工作的待遇不太好他決定辭職了。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄍㄨㄥ ㄗㄨㄛˋ ㄉㄜ˙ ㄉㄞˋ ㄩˋ ㄅㄨˊ ㄊㄞˋ ㄏㄠˇ ㄊㄚ ㄐㄩㄝˊ ㄉㄧㄥˋ ㄘˊ ㄓˊ ㄌㄜ˙.',
            pinyin: 'yin1 wei4 gong1 zuo4 de dai4 yu4 bu2 tai4 hao3 ta1 jue2 ding4 ci2 zhi2 le.',
            translation: '仕事の待遇があまり良くないので、 彼は辞職する事に決めました。',
            memo: ''
          },
          {
            word: '公立',
            sentence: '公立學校的課程沒有太大的區別。',
            bopomofo: 'ㄍㄨㄥ ㄌㄧˋ ㄒㄩㄝˊ ㄒㄧㄠˋ ㄉㄜ˙ ㄎㄜˋ ㄔㄥˊ ㄇㄟˊ ㄧㄡˇ ㄊㄞˋ ㄉㄚˋ ㄉㄜ˙ ㄑㄩ ㄅㄧㄝˊ.',
            pinyin: 'gong1 li4 xue2 xiao4 de ke4 cheng2 mei2 you3 tai4 da4 de qu1 bie2.',
            translation: '公立校のカリキュラムに大きな差はありません。',
            memo: ''
          },
          {
            word: '外科',
            sentence: '因為傷口化了膿, 醫生說需要外科手術。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄕㄤ ㄎㄡˇ ㄏㄨㄚˋ ㄌㄜ˙ ㄋㄨㄥˊ, ㄧ ㄕㄥ ㄕㄨㄛ ㄒㄩ ㄧㄠˋ ㄨㄞˋ ㄎㄜ ㄕㄡˇ ㄕㄨˋ.',
            pinyin: 'yin1 wei4 shang1 kou3 hua4 le nong2, yi1 sheng1 shuo1 xu1 yao4 wai4 ke1 shou3 shu4.',
            translation: '傷口が化膿しているので、 外科手術が必要だとお医者さんは言いました。',
            memo: ''
          },
          {
            word: '超過',
            sentence: '會議的時間超過了， 好幾個人的臉看起來很想回家。',
            bopomofo: 'ㄏㄨㄟˋ ㄧˋ ㄉㄜ˙ ㄕˊ ㄐㄧㄢ ㄔㄠ ㄍㄨㄛˋ ㄌㄜ˙, ㄏㄠˇ ㄐㄧˇ ㄍㄜˋ ㄖㄣˊ ㄉㄜ˙ ㄌㄧㄢˇ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄏㄣˇ ㄒㄧㄤˇ ㄏㄨㄟˊ ㄐㄧㄚ.',
            pinyin: 'hui4 yi4 de shi2 jian1 chao1 guo4 le, hao3 ji3 ge4 ren2 de lian3 kan4 qi3 lai2 hen3 xiang3 hui2 jia1.',
            translation: '会議が長引いていて、 何人かはとても家に帰りたそうな顔をしています。',
            memo: ''
          },
          {
            word: '倍',
            sentence: '那家餐廳的餃子比一般的餐廳的至少三倍大。',
            bopomofo: 'ㄋㄚˋ ㄐㄧㄚ ㄘㄢ ㄊㄧㄥ ㄉㄜ˙ ㄐㄧㄠˇ ㄗ˙ ㄅㄧˇ ㄧˋ ㄅㄢ ㄉㄜ˙ ㄘㄢ ㄊㄧㄥ ㄉㄜ˙ ㄓˋ ㄕㄠˇ ㄙㄢ ㄅㄟˋ ㄉㄚˋ.',
            pinyin: 'na4 jia1 can1 ting1 de jiao3 zi bi3 yi4 ban1 de can1 ting1 de zhi4 shao3 san1 bei4 da4.',
            translation: 'そのレストランの餃子は、 一般的なレストランのものと比べて少なくとも3倍は大きいです。',
            memo: ''
          },
          {
            word: '另',
            sentence: '只有白飯和湯, 所以我另煮一道菜。',
            bopomofo: 'ㄓˇ ㄧㄡˇ ㄅㄞˊ ㄈㄢˋ ㄏㄢˋ ㄊㄤ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄌㄧㄥˋ ㄓㄨˇ ㄧ ㄉㄠˋ ㄘㄞˋ.',
            pinyin: 'zhi3 you3 bai2 fan4 han4 tang1, suo3 yi3 wo3 ling4 zhu3 yi1 dao4 cai4.',
            translation: 'ご飯とスープしかないので、 もう一品おかずを別に作ります。',
            memo: ''
          },
          {
            word: '價值觀',
            sentence: '我和他有不同的價值觀， 所以我盡量不跟他深談。',
            bopomofo: 'ㄨㄛˇ ㄏㄢˋ ㄊㄚ ㄧㄡˇ ㄅㄨˋ ㄊㄨㄥˊ ㄉㄜ˙ ㄐㄧㄚˋ ㄓˊ ㄍㄨㄢ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄐㄧㄣˋ ㄌㄧㄤˋ ㄅㄨˋ ㄍㄣ ㄊㄚ ㄕㄣ ㄊㄢˊ.',
            pinyin: 'wo3 han4 ta1 you3 bu4 tong2 de jia4 zhi2 guan1, suo3 yi3 wo3 jin4 liang4 bu4 gen1 ta1 shen1 tan2.',
            translation: '彼とは価値観が違うので、 なるべく深い話はしないようにしています。',
            memo: ''
          },
          {
            word: '尊敬',
            sentence: '那個孩子很尊敬動漫的主人公, 總是模仿他。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄏㄞˊ ㄗ˙ ㄏㄣˇ ㄗㄨㄣ ㄐㄧㄥˋ ㄉㄨㄥˋ ㄇㄢˋ ㄉㄜ˙ ㄓㄨˇ ㄖㄣˊ ㄍㄨㄥ, ㄗㄨㄥˇ ㄕˋ ㄇㄛˊ ㄈㄤˇ ㄊㄚ.',
            pinyin: 'na4 ge4 hai2 zi hen3 zun1 jing4 dong4 man4 de zhu3 ren2 gong1, zong3 shi4 mo2 fang3 ta1.',
            translation: 'あの子はアニメの主人公を尊敬していて、 いつも真似をしています。',
            memo: ''
          },
          {
            word: '告',
            sentence: '買的房子有安全上的問題, 所以他告建商。',
            bopomofo: 'ㄇㄞˇ ㄉㄜ˙ ㄈㄤˊ ㄗ˙ ㄧㄡˇ ㄢ ㄑㄩㄢˊ ㄕㄤˋ ㄉㄜ˙ ㄨㄣˋ ㄊㄧˊ, ㄙㄨㄛˇ ㄧˇ ㄊㄚ ㄍㄠˋ ㄐㄧㄢˋ ㄕㄤ.',
            pinyin: 'mai3 de fang2 zi you3 an1 quan2 shang4 de wen4 ti2, suo3 yi3 ta1 gao4 jian4 shang1.',
            translation: '彼が購入した家には安全上の問題があったので、 彼は建設会社を訴えました。',
            memo: ''
          },
          {
            word: '平均',
            sentence: '這個城市的平均年紀一個比一個老。',
            bopomofo: 'ㄓㄜˋ ㄍㄜˋ ㄔㄥˊ ㄕˋ ㄉㄜ˙ ㄆㄧㄥˊ ㄐㄩㄣ ㄋㄧㄢˊ ㄐㄧˋ ㄧ ㄍㄜˋ ㄅㄧˇ ㄧ ㄍㄜˋ ㄌㄠˇ.',
            pinyin: 'zhe4 ge4 cheng2 shi4 de ping2 jun1 nian2 ji4 yi1 ge4 bi3 yi1 ge4 lao3.',
            translation: 'この街の平均年齢は年々上がっています。',
            memo: ''
          },
          {
            word: '醫療',
            sentence: '我會住院了一段時間， 所以我擔心醫療費用。',
            bopomofo: 'ㄨㄛˇ ㄏㄨㄟˋ ㄓㄨˋ ㄩㄢˋ ㄌㄜ˙ ㄧ ㄉㄨㄢˋ ㄕˊ ㄐㄧㄢ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄉㄢ ㄒㄧㄣ ㄧ ㄌㄧㄠˊ ㄈㄟˋ ㄩㄥˋ.',
            pinyin: 'wo3 hui4 zhu4 yuan4 le yi1 duan4 shi2 jian1, suo3 yi3 wo3 dan1 xin1 yi1 liao2 fei4 yong4.',
            translation: 'しばらく入院する事になったので、 医療費が心配です。',
            memo: ''
          },
          {
            word: '怪',
            sentence: '都怪他睡過頭了， 行程才被打亂了。',
            bopomofo: 'ㄉㄡ ㄍㄨㄞˋ ㄊㄚ ㄕㄨㄟˋ ㄍㄨㄛˋ ㄊㄡˊ ㄌㄜ˙, ㄒㄧㄥˊ ㄔㄥˊ ㄘㄞˊ ㄅㄟˋ ㄉㄚˇ ㄌㄨㄢˋ ㄌㄜ˙.',
            pinyin: 'dou1 guai4 ta1 shui4 guo4 tou2 le, xing2 cheng2 cai2 bei4 da3 luan4 le.',
            translation: '彼が寝坊したせいで、 スケジュールが狂いました。',
            memo: ''
          },
          {
            word: '愛林',
            sentence: '愛林每個月剪一次頭髮。',
            bopomofo: 'ㄞˋ ㄌㄧㄣˊ ㄇㄟˇ ㄍㄜˋ ㄩㄝˋ ㄐㄧㄢˇ ㄧ ㄘˋ ㄊㄡˊ ㄈㄚˋ.',
            pinyin: 'ai4 lin2 mei3 ge4 yue4 jian3 yi1 ci4 tou2 fa4.',
            translation: '愛林は毎月一回髪を切りに行きます。',
            memo: ''
          },
          {
            word: '微整型',
            sentence: '雖然微整型便宜, 可是有的時候效果不大。',
            bopomofo: 'ㄙㄨㄟ ㄖㄢˊ ㄨㄟˊ ㄓㄥˇ ㄒㄧㄥˊ ㄆㄧㄢˊ ㄧˊ, ㄎㄜˇ ㄕˋ ㄧㄡˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄒㄧㄠˋ ㄍㄨㄛˇ ㄅㄨˊ ㄉㄚˋ.',
            pinyin: 'sui1 ran2 wei2 zheng3 xing2 pian2 yi2, ke3 shi4 you3 de shi2 hou4 xiao4 guo3 bu2 da4.',
            translation: 'プチ整形は安いですが、 効果が分からない事があります。',
            memo: ''
          },
          {
            word: '數一數二',
            sentence: '他是在這個業界裡數一數二的能人。',
            bopomofo: 'ㄊㄚ ㄕˋ ㄗㄞˋ ㄓㄜˋ ㄍㄜˋ ㄧㄝˋ ㄐㄧㄝˋ ㄌㄧˇ ㄕㄨˇ ㄧ ㄕㄨˇ ㄦˋ ㄉㄜ˙ ㄋㄥˊ ㄖㄣˊ.',
            pinyin: 'ta1 shi4 zai4 zhe4 ge4 ye4 jie4 li3 shu3 yi1 shu3 er4 de neng2 ren2.',
            translation: 'この彼は、 業界屈指のやり手です。',
            memo: '※「やり手」 : 「數一數二的能人(ㄕㄨˇ ㄧ ㄕㄨˇ ㄦˋ ㄉㄜ˙ ㄋㄥˊ ㄖㄣˊ/shu3 yi1 shu3 er4 de neng2 ren2)」または「能幹的人(ㄋㄥˊ ㄍㄢˋ ㄉㄜ˙ ㄖㄣˊ/neng2 gan4 de ren2)」 = 「有能な人」。'
          },
          {
            word: '人際關係',
            sentence: '我厭倦了人際關係， 所以我打算今天一直花時間摸貓。',
            bopomofo: 'ㄨㄛˇ ㄧㄢˋ ㄐㄩㄢˋ ㄌㄜ˙ ㄖㄣˊ ㄐㄧˋ ㄍㄨㄢ ㄒㄧˋ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄉㄚˇ ㄙㄨㄢˋ ㄐㄧㄣ ㄊㄧㄢ ㄧ ㄓˊ ㄏㄨㄚ ㄕˊ ㄐㄧㄢ ㄇㄛ ㄇㄠ.',
            pinyin: 'wo3 yan4 juan4 le ren2 ji4 guan1 xi4, suo3 yi3 wo3 da3 suan4 jin1 tian1 yi1 zhi2 hua1 shi2 jian1 mo1 mao1.',
            translation: '人間関係に疲れたので、 今日は一日猫を撫でて過ごそうと思います。',
            memo: ''
          },
          {
            word: '動不動就',
            sentence: '他是動不動就會生氣的人, 所以你不追過去也沒關係。',
            bopomofo: 'ㄊㄚ ㄕˋ ㄉㄨㄥˋ ㄅㄨˊ ㄉㄨㄥˋ ㄐㄧㄡˋ ㄏㄨㄟˋ ㄕㄥ ㄑㄧˋ ㄉㄜ˙ ㄖㄣˊ, ㄙㄨㄛˇ ㄧˇ ㄋㄧˇ ㄅㄨˋ ㄓㄨㄟ ㄍㄨㄛˋ ㄑㄩˋ ㄧㄝˇ ㄇㄟˊ ㄍㄨㄢ ㄒㄧ˙.',
            pinyin: 'ta1 shi4 dong4 bu2 dong4 jiu4 hui4 sheng1 qi4 de ren2, suo3 yi3 ni3 bu4 zhui1 guo4 qu4 ye3 mei2 guan1 xi.',
            translation: '彼はすぐ怒る人なので、 追いかけなくても大丈夫ですよ。',
            memo: ''
          },
          {
            word: '找回',
            sentence: '他透過簡單的任務找回了工作的感覺。',
            bopomofo: 'ㄊㄚ ㄊㄡˋ ㄍㄨㄛˋ ㄐㄧㄢˇ ㄉㄢ ㄉㄜ˙ ㄖㄣˋ ㄨˋ ㄓㄠˇ ㄏㄨㄟˊ ㄌㄜ˙ ㄍㄨㄥ ㄗㄨㄛˋ ㄉㄜ˙ ㄍㄢˇ ㄐㄩㄝˊ.',
            pinyin: 'ta1 tou4 guo4 jian3 dan1 de ren4 wu4 zhao3 hui2 le gong1 zuo4 de gan3 jue2.',
            translation: '彼は簡単なタスクを通して、 仕事の感覚を取り戻しました。',
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
