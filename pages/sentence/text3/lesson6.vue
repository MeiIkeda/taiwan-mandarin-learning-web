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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第6章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第6章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      // 単語数：65
      data: {
        title: '當代中文課程課3・第6章',
        words: [
          {
            word: '李文彥',
            sentence: '李文彥不但常被別人騙, 還常把東西弄丟。',
            bopomofo: 'ㄌㄧˇ ㄨㄣˊ ㄧㄢˋ ㄅㄨˊ  ㄉㄢˋ ㄔㄤˊ ㄅㄟˋ ㄅㄧㄝˊ ㄖㄣˊ ㄆㄧㄢˋ, ㄏㄞˊ ㄔㄤˊ ㄅㄚˇ ㄉㄨㄥ ㄒㄧ ㄋㄨㄥˋ ㄉㄧㄡ.',
            pinyin: 'li3 wen2 yan4 bu2 dan4 chang2 bei4 bie2 ren2 pian4, hai2 chang2 ba3 dong1 xi nong4 diu1.',
            translation: '李文彥は騙されやすいだけではなく、 よく物も失くします。',
            memo: ''
          },
          {
            word: '表哥',
            sentence: '表哥太優秀了, 我不想跟他被比較。',
            bopomofo: 'ㄅㄧㄠˇ ㄍㄜ ㄊㄞˋ ㄧㄡ ㄒㄧㄡˋ ㄌㄜ˙, ㄨㄛˇ ㄅㄨˋ ㄒㄧㄤˇ ㄍㄣ ㄊㄚ ㄅㄟˋ ㄅㄧˇ ㄐㄧㄠˋ.',
            pinyin: 'biao3 ge1 tai4 you1 xiu4 le, wo3 bu4 xiang3 gen1 ta1 bei4 bi3 jiao4.',
            translation: 'いとこは優秀過ぎるので、 彼と比べられたくないです。',
            memo: '',
            changed: '☆'
          },
          {
            word: '隨便',
            sentence: '你可以隨便喝冰箱裡的啤酒。',
            bopomofo: 'ㄋㄧˇ ㄎㄜˇ ㄧˇ ㄙㄨㄟˊ ㄅㄧㄢˋ ㄏㄜ ㄅㄧㄥ ㄒㄧㄤ ㄌㄧˇ ㄉㄜ˙ ㄆㄧˊ ㄐㄧㄡˇ.',
            pinyin: 'ni3 ke3 yi3 sui2 bian4 he1 bing1 xiang1 li3 de pi2 jiu3.',
            translation: '冷蔵庫の中のビールは好きに飲んでいいですよ。',
            memo: ''
          },
          {
            word: '★種',
            sentence: '我種了的一棵樹看起來快要結實了。',
            bopomofo: 'ㄨㄛˇ ㄓㄨㄥˋ ㄌㄜ˙ ㄉㄜ˙ ㄧ ㄎㄜ ㄕㄨˋ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄎㄨㄞˋ ㄧㄠˋ ㄐㄧㄝˊ ㄕˊ ㄌㄜ˙.',
            pinyin: 'wo3 zhong4 le de yi1 ke1 shu4 kan4 qi3 lai2 kuai4 yao4 jie2 shi2 le.',
            translation: '私が植えた木に、 そろそろ実がなりそうです。',
            memo: '※「結實(ㄐㄧㄝˊ ㄕˊ/jie2 shi2)」 = 「出果(ㄔㄨ ㄍㄨㄛˇ/chu1 guo3)」でも可。',
            changed: '☆'
          },
          {
            word: '蔬菜',
            sentence: '我覺得酪梨是蔬菜, 但是他硬說是水果。',
            bopomofo: 'ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄌㄠˋ ㄌㄧˊ ㄕˋ ㄕㄨ ㄘㄞˋ, ㄉㄢˋ ㄕˋ ㄊㄚ ㄧㄥˋ ㄕㄨㄛ ㄕˋ ㄕㄨㄟˇ ㄍㄨㄛˇ.',
            pinyin: 'wo3 jue2 de lao4 li2 shi4 shu1 cai4, dan4 shi4 ta1 ying4 shuo1 shi4 shui3 guo3.',
            translation: 'アボカドは野菜だと思うのですが、 彼は果物だと言って譲りません。',
            memo: ''
          },
          {
            word: '農夫',
            sentence: '他當農夫種植農作物， 但同時也經營一家餐廳。',
            bopomofo: 'ㄊㄚ ㄉㄤ ㄋㄨㄥˊ ㄈㄨ ㄓㄨㄥˋ ㄓˊ ㄋㄨㄥˊ ㄗㄨㄛˋ ㄨˋ, ㄉㄢˋ ㄊㄨㄥˊ ㄕˊ ㄧㄝˇ ㄐㄧㄥ ㄧㄥˊ ㄧ ㄐㄧㄚ ㄘㄢ ㄊㄧㄥ.',
            pinyin: 'ta1 dang1 nong2 fu1 zhong4 zhi2 nong2 zuo4 wu4, dan4 tong2 shi2 ye3 jing1 ying2 yi1 jia1 can1 ting1.',
            translation: '彼は百姓として農作物を栽培していますが、 同時にレストランも経営しています。',
            memo: '※「種植(ㄓㄨㄥˋ ㄓˊ)」の発音?',
            changed: '☆'
          },
          {
            word: '減少',
            sentence: '這家餐廳最近漲價了, 難怪客人減少了。',
            bopomofo: 'ㄓㄜˋ ㄐㄧㄚ ㄘㄢ ㄊㄧㄥ ㄗㄨㄟˋ ㄐㄧㄣˋ ㄓㄤˇ ㄐㄧㄚˋ ㄌㄜ˙, ㄋㄢˊ ㄍㄨㄞˋ ㄎㄜˋ ㄖㄣˊ ㄐㄧㄢˇ ㄕㄠˇ ㄌㄜ˙.',
            pinyin: 'zhe4 jia1 can1 ting1 zui4 jin4 zhang3 jia4 le, nan2 guai4 ke4 ren2 jian3 shao3 le.',
            translation: 'このレストランは最近値上げしたので、　お客さんが減ったのも不思議ではありません。',
            memo: '',
            changed: '☆'
          },
          {
            word: '農藥',
            sentence: '沒用農藥的蔬菜是雖然很理想, 但是花太多時間跟錢了。',
            bopomofo: 'ㄇㄟˊ ㄩㄥˋ ㄋㄨㄥˊ ㄧㄠˋ ㄉㄜ˙ ㄕㄨ ㄘㄞˋ ㄕˋ ㄙㄨㄟ ㄖㄢˊ ㄏㄣˇ ㄌㄧˇ ㄒㄧㄤˇ,  ㄉㄢˋ ㄕˋ ㄏㄨㄚ ㄊㄞˋ ㄉㄨㄛ ㄕˊ ㄐㄧㄢ ㄍㄣ ㄑㄧㄢˊ ㄌㄜ˙.',
            pinyin: 'mei2 yong4 nong2 yao4 de shu1 cai4 shi4 sui1 ran2 hen3 li3 xiang3, dan4 shi4 hua1 tai4 duo1 shi2 jian1 gen1 qian2 le.',
            translation: '無農薬の野菜が理想ですが、 時間とお金がかかりすぎます。',
            memo: '',
            changed: '☆'
          },
          {
            word: '天然',
            sentence: '味道好的話， 天然的魚或是養殖的我都不講究。',
            bopomofo: 'ㄨㄟˋ ㄉㄠˋ ㄏㄠˇ ㄉㄜ˙ ㄏㄨㄚˋ, ㄊㄧㄢ ㄖㄢˊ ㄉㄜ˙ ㄩˊ ㄏㄨㄛˋ ㄕˋ ㄧㄤˇ ㄓˊ ㄉㄜ˙ ㄨㄛˇ ㄉㄡ ㄅㄨˋ ㄐㄧㄤˇ ㄐㄧㄡˋ.',
            pinyin: 'wei4 dao4 hao3 de hua4, tian1 ran2 de yu2 huo4 shi4 yang3 zhi2 de wo3 dou1 bu4 jiang3 jiu4.',
            translation: '美味しければ、 天然魚か養殖魚かは気にしません。',
            memo: '',
            changed: '☆'
          },
          {
            word: '★堆肥',
            sentence: '花快要枯萎了, 所以給它澆水和施肥。',
            bopomofo: 'ㄏㄨㄚ ㄎㄨㄞˋ ㄧㄠˋ ㄎㄨ ㄨㄟˇ ㄌㄜ˙, ㄙㄨㄛˇ ㄧˇ ㄍㄟˇ ㄊㄚ ㄐㄧㄠ ㄕㄨㄟˇ ㄏㄢˇ ㄕ ㄈㄟˊ.',
            pinyin: 'hua1 kuai4 yao4 ku1 wei3 le, suo3 yi3 gei3 ta1 jiao1 shui3 han4 shi1 fei2.',
            translation: 'お花が枯れかけているので、 お水と肥料をあげてみましよう。',
            memo: '※「堆肥」 は 「施肥」と同じ？',
            changed: '☆'
          },
          {
            word: '辛苦',
            sentence: '她一直談我不知道的連續劇, 聽得我都覺得累了。',
            bopomofo: 'ㄊㄚ ㄧ ㄓˊ ㄊㄢˊ ㄨㄛˇ ㄅㄨˋ ㄓ ㄉㄠˋ ㄉㄜ˙ ㄌㄧㄢˊ ㄒㄩˋ ㄐㄩˋ, ㄊㄧㄥ ㄉㄜ˙ ㄨㄛˇ ㄉㄡ ㄐㄩㄝˊ ㄉㄜ˙ ㄌㄟˋ ㄌㄜ˙.',
            pinyin: 'ta1 yi1 zhi2 tan2 wo3 bu4 zhi1 dao4 de lian2 xu4 ju4, ting1 de wo3 dou1 jue2 de lei4 le.',
            translation: '彼女は私が知らない連続ドラマについてずっと話しているので、 聞くのは疲れます。',
            memo: '※「聽得我都覺得累了(ㄊㄧㄥ ㄉㄜ˙ ㄨㄛˇ ㄉㄡ ㄐㄩㄝˊ ㄉㄜ˙ ㄌㄟˋ ㄌㄜ˙/ting1 de wo3 dou1 jue2 de lei4 le)」 =　「我聽得很辛苦」(ㄨㄛˇ ㄊㄧㄥ ㄉㄜ˙ ㄏㄣˇ ㄒㄧㄣ ㄎㄨˇ/wo3 ting1 de hen3 xin1 ku3)でも可',
            changed: '☆'
          },
          {
            word: '地位',
            sentence: '不必執著於什麼社會地位, 輕鬆的生活是最好的。',
            bopomofo: 'ㄅㄨˊ ㄅㄧˋ ㄓˊ ㄓㄨㄛˊ ㄩˊ ㄕㄣˊ ㄇㄜ˙ ㄕㄜˋ ㄏㄨㄟˋ ㄉㄧˋ ㄨㄟˋ, ㄑㄧㄥ ㄙㄨㄥ ㄉㄜ˙ ㄕㄥ ㄏㄨㄛˊ ㄕˋ ㄗㄨㄟˋ ㄏㄠˇ ㄉㄜ˙.',
            pinyin: 'bu2 bi4 zhi2 zhuo2 yu2 shen2 me she4 hui4 di4 wei4, qing1 song1 de sheng1 huo2 shi4 zui4 hao3 de.',
            translation: '社会的地位に執着する必要はありません、 気楽な生活が一番です。',
            memo: '',
            changed: '☆'
          },
          {
            word: '收入',
            sentence: '你的收入再低，你也要把現在的工作做下去嗎?',
            bopomofo: 'ㄋㄧˇ ㄉㄜ˙ ㄕㄡ ㄖㄨˋ ㄗㄞˋ ㄉㄧ, ㄋㄧˇ ㄧㄝˇ ㄧㄠˋ ㄅㄚˇ ㄒㄧㄢˋ ㄗㄞˋ ㄉㄜ˙ ㄍㄨㄥ ㄗㄨㄛˋ ㄗㄨㄛˋ ㄒㄧㄚˋ ㄑㄩˋ ㄇㄚ˙?',
            pinyin: 'ni3 de shou1 ru4 zai4 di1, ni3 ye3 yao4 ba3 xian4 zai4 de gong1 zuo4 zuo4 xia4 qu4 ma?',
            translation: '収入が下がっても、 今の仕事を続けますか?',
            memo: '',
            changed: '☆'
          },
          {
            word: '利潤',
            sentence: '因為不會得到利潤， 所以我停了代替做功課的事業。',
            bopomofo: 'ㄧㄣ ㄨㄟˋ ㄅㄨˊ ㄏㄨㄟˋ ㄉㄜˊ ㄉㄠˋ ㄌㄧˋ ㄖㄨㄣˋ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄊㄧㄥˊ ㄌㄜ˙ ㄉㄞˋ ㄊㄧˋ ㄗㄨㄛˋ ㄍㄨㄥ ㄎㄜˋ ㄉㄜ˙ ㄕˋ ㄧㄝˋ.',
            pinyin: 'yin1 wei4 bu2 hui4 de2 dao4 li4 run4, suo3 yi3 wo3 ting2 le dai4 ti4 zuo4 gong1 ke4 de shi4 ye4.',
            translation: '儲からないので、 宿題を代わりにやってあげるビジネスは止めました。',
            memo: '',
            changed: '☆'
          },
          {
            word: '屋子',
            sentence: '今天颳大風, 屋子也有一點搖晃。',
            bopomofo: 'ㄐㄧㄣ ㄊㄧㄢ ㄍㄨㄚ ㄉㄚˋ ㄈㄥ, ㄨ ㄗ˙ ㄧㄝˇ ㄧㄡˇ ㄧˋ ㄉㄧㄢˇ ㄧㄠˊ ㄏㄨㄤˋ.',
            pinyin: 'jin1 tian1 gua1 da4 feng1, wu1 zi ye3 you3 yi1 dian3 yao2 huang4.',
            translation: '今日は強い風が吹いていて、 家も少し揺れています。',
            memo: '',
            changed: '☆'
          },
          {
            word: '番茄',
            sentence: '我知道番茄會加鹽, 但是沒想到居然也會加糖。',
            bopomofo: 'ㄨㄛˇ ㄓ ㄉㄠˋ ㄈㄢ ㄑㄧㄝˊ ㄏㄨㄟˋ ㄐㄧㄚ ㄧㄢˊ, ㄉㄢˋ ㄕˋ ㄇㄟˊ ㄒㄧㄤˇ ㄉㄠˋ ㄐㄩ ㄖㄢˊ ㄧㄝˇ ㄏㄨㄟˋ ㄐㄧㄚ ㄊㄤˊ.',
            pinyin: 'wo3 zhi1 dao4 fan1 qie2 hui4 jia1 yan2, dan4 shi4 mei2 xiang3 dao4 ju1 ran2 ye3 hui4 jia1 tang2.',
            translation: 'トマトに塩をかける事はありますが、 砂糖をかけるとは思ってもみませんでした。',
            memo: '',
            changed: '☆'
          },
          {
            word: '品種',
            sentence: '這個地區種植又大又甜的鳳梨品種。',
            bopomofo: 'ㄓㄜˋ ㄍㄜˋ ㄉㄧˋ ㄑㄩ ㄓㄨㄥˋ ㄓˊ ㄧㄡˋ ㄉㄚˋ ㄧㄡˋ ㄊㄧㄢˊ ㄉㄜ˙ ㄈㄥˋ ㄌㄧˊ ㄆㄧㄣˇ ㄓㄨㄥˇ.',
            pinyin: 'zhe4 ge4 di4 qu1 zhong4 zhi2 you4 da4 you4 tian2 de feng4 li2 pin3 zhong3.',
            translation: 'この地域では大きくて甘いパイナップルの品種を栽培しています。',
            memo: ''
          },
          {
            word: '氣候',
            sentence: '對於某些人來說， 很難接受熱帶氣候的高溫和潮濕。',
            bopomofo: 'ㄉㄨㄟˋ ㄩˊ ㄇㄡˇ ㄒㄧㄝ ㄖㄣˊ ㄌㄞˊ ㄕㄨㄛ, ㄏㄣˇ ㄋㄢˊ ㄐㄧㄝ ㄕㄡˋ ㄖㄜˋ ㄉㄞˋ ㄑㄧˋ ㄏㄡˋ ㄉㄜ˙ ㄍㄠ ㄨㄣ ㄏㄢˋ ㄔㄠˊ ㄕ.',
            pinyin: 'dui4 yu2 mou3 xie1 ren2 lai2 shuo1, hen3 nan2 jie1 shou4 re4 dai4 qi4 hou4 de gao1 wen1 han4 chao2 shi1.',
            translation: '人によっては、 熱帯気候の暑さと湿気は耐えがたいです。',
            memo: ''
          },
          {
            word: '長',
            sentence: '寶寶長得很快, 最近可以簡單溝通了。',
            bopomofo: 'ㄅㄠˇ ㄅㄠ˙ ㄓㄤˇ ㄉㄜ˙ ㄏㄣˇ ㄎㄨㄞˋ, ㄗㄨㄟˋ ㄐㄧㄣˋ ㄎㄜˇ ㄧˇ ㄐㄧㄢˇ ㄉㄢ ㄍㄡ ㄊㄨㄥ ㄌㄜ˙.',
            pinyin: 'bao3 bao zhang3 de hen3 kuai4, zui4 jin4 ke3 yi3 jian3 dan1 gou1 tong1 le.',
            translation: '赤ちゃんの成長は早く、 最近では簡単なコミュニケーションを取る事ができます。',
            memo: '',
            changed: '☆'
          },
          {
            word: '熟',
            sentence: '奶奶給我們的水果已經熟了, 現在是吃的好時機。',
            bopomofo: 'ㄋㄞˇ ㄋㄞ˙ ㄍㄟˇ ㄨㄛˇ ㄇㄣ˙ ㄉㄜ˙ ㄕㄨㄟˇ ㄍㄨㄛˇ ㄧˇ ㄐㄧㄥ ㄕㄨˊ ㄌㄜ˙, ㄒㄧㄢˋ ㄗㄞˋ ㄕˋ ㄔ ㄉㄜ˙ ㄏㄠˇ ㄕˊ ㄐㄧ.',
            pinyin: 'nai3 nai gei3 wo3 men de shui3 guo3 yi3 jing1 shu2 le, xian4 zai4 shi4 chi1 de hao3 shi2 ji1.',
            translation: 'おばあちゃんがくれた果物は既に熟していて、 食べるには良い頃合いです。',
            memo: ''
          },
          {
            word: '片',
            sentence: '那個一片空地總是有很多貓。',
            bopomofo: 'ㄋㄚˋ ㄍㄜˋ ㄧ ㄆㄧㄢˋ ㄎㄨㄥˋ ㄉㄧˋ ㄗㄨㄥˇ ㄕˋ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄇㄠ.',
            pinyin: 'na4 ge4 yi1 pian4 kong4 di4 zong3 shi4 you3 hen3 duo1 mao1.',
            translation: 'その空き地には、 いつも猫がたくさんいます。',
            memo: '',
            changed: '☆'
          },
          {
            word: '田',
            sentence: '我在想在一個不使用的田裡種一些什麼作物。',
            bopomofo: 'ㄨㄛˇ ㄗㄞˋ ㄒㄧㄤˇ ㄗㄞˋ ㄧˊ ㄍㄜˋ ㄅㄨˋ ㄕˇ ㄩㄥˋ ㄉㄜ˙ ㄊㄧㄢˊ ㄌㄧˇ ㄓㄨㄥˋ ㄧ ㄒㄧㄝ ㄕㄣˊ ㄇㄜ˙ ㄗㄨㄛˋ ㄨˋ.',
            pinyin: 'wo3 zai4 xiang3 zai4 yi1 ge4 bu4 shi3 yong4 de tian2 li3 zhong4 yi1 xie1 shen2 me zuo4 wu4.',
            translation: '使っていない畑に、 何か作物を植えたいと考えています。',
            memo: '',
            changed: '☆'
          },
          {
            word: '照顧',
            sentence: '姐姐在抱怨照顧她的妹妹，但是她的臉看起來有點開心。',
            bopomofo: 'ㄐㄧㄝˇ ㄐㄧㄝ˙ ㄗㄞˋ ㄅㄠˋ ㄩㄢˋ ㄓㄠˋ ㄍㄨˋ ㄊㄚ ㄉㄜ˙ ㄇㄟˋ ㄇㄟ˙, ㄉㄢˋ ㄕˋ ㄊㄚ ㄉㄜ˙ ㄌㄧㄢˇ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄧㄡˇ ㄉㄧㄢˇ ㄎㄞ ㄒㄧㄣ.',
            pinyin: 'jie3 jie zai4 bao4 yuan4 zhao4 gu4 ta1 de mei4 mei, dan4 shi4 ta1 de lian3 kan4 qi3 lai2 you3 dian3 kai1 xin1.',
            translation: 'お姉ちゃんは文句を言いながら妹の世話をしていますが、 顔はまんざらでもありません。',
            memo: '※「開心(ㄎㄞ ㄒㄧㄣ/kai1 xin1)」 = 「暗爽(ㄢˋ ㄕㄨㄤˇ/an4 shuang3)」でも可。',
            changed: '☆'
          },
          {
            word: '敢',
            sentence: '老闆褲子上的拉鍊一直開著， 但是我不敢說。',
            bopomofo: 'ㄌㄠˇ ㄅㄢˇ ㄎㄨˋ ㄗ˙ ㄕㄤˋ ㄉㄜ˙ ㄌㄚ ㄌㄧㄢˋ ㄧ ㄓˊ ㄎㄞ ㄓㄜ˙, ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄅㄨˋ ㄍㄢˇ ㄕㄨㄛ.',
            pinyin: 'lao3 ban3 ku4 zi shang4 de la1 lian4 yi1 zhi2 kai1 zhe, dan4 shi4 wo3 bu4 gan3 shuo1.',
            translation: '上司のズボンのチャックがずっと開いているのですが、 あえて言いません。',
            memo: '',
            changed: '☆'
          },
          {
            word: '條件',
            sentence: '媽媽說我可以去玩的條件是把功課寫完。',
            bopomofo: 'ㄇㄚ ㄇㄚ ㄕㄨㄛ ㄨㄛˇ ㄎㄜˇ ㄧˇ ㄑㄩˋ ㄨㄢˊ ㄉㄜ˙ ㄊㄧㄠˊ ㄐㄧㄢˋ ㄕˋ ㄅㄚˇ ㄍㄨㄥ ㄎㄜˋ ㄒㄧㄝˇ ㄨㄢˊ.',
            pinyin: 'ma1 ma1 shuo1 wo3 ke3 yi3 qu4 wan2 de tiao2 jian4 shi4 ba3 gong1 ke4 xie3 wan2.',
            translation: '遊びに行くための条件は宿題を終わらせる事だとお母さんは言いました。',
            memo: '',
            changed: '☆'
          },
          {
            word: '黑',
            sentence: '我曬黑了， 所以我有的口紅的顏色變得不適合我了。',
            bopomofo: 'ㄨㄛˇ ㄕㄞˋ ㄏㄟ ㄌㄜ˙, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄧㄡˇ ㄉㄜ˙ ㄎㄡˇ ㄏㄨㄥˊ ㄉㄜ˙ ㄧㄢˊ ㄙㄜˋ ㄅㄧㄢˋ ㄉㄜ˙ ㄅㄨˊ ㄕˋ ㄏㄜˊ ㄨㄛˇ ㄌㄜ˙.',
            pinyin: 'wo3 shai4 hei1 le, suo3 yi3 wo3 you3 de kou3 hong2 de yan2 se4 bian4 de bu2 shi4 he2 wo3 le.',
            translation: '日焼けしたので、 手持ちの口紅の色が似合わなくなってしまいました。',
            memo: '',
            changed: '☆'
          },
          {
            word: '摘下來',
            sentence: '把葡萄摘下來後, 我們就做葡萄酒吧。',
            bopomofo: 'ㄅㄚˇ ㄆㄨˊ ㄊㄠˊ ㄓㄞ ㄒㄧㄚˋ ㄌㄞˊ ㄏㄡˋ, ㄨㄛˇ ㄇㄣ˙ ㄐㄧㄡˋ ㄗㄨㄛˋ ㄆㄨˊ ㄊㄠˊ ㄐㄧㄡˇ ㄅㄚ˙.',
            pinyin: 'ba3 pu2 tao2 zhai1 xia4 lai2 hou4, wo3 men jiu4 zuo4 pu2 tao2 jiu3 ba.',
            translation: 'ブドウを摘んだら、 ワインを作りましょう。',
            memo: ''
          },
          {
            word: '做不動',
            sentence: '我太老了已經做不動了， 所以用宅配服務的方式買酒。',
            bopomofo: 'ㄨㄛˇ ㄊㄞˋ ㄌㄠˇ ㄌㄜ˙ ㄧˇ ㄐㄧㄥ ㄗㄨㄛˋ ㄅㄨˊ ㄉㄨㄥˋ ㄌㄜ˙, ㄙㄨㄛˇ ㄧˇ ㄩㄥˋ ㄓㄞˊ ㄆㄟˋ ㄈㄨˊ ㄨˋ ㄉㄜ˙ ㄈㄤ ㄕˋ ㄇㄞˇ ㄐㄧㄡˇ.',
            pinyin: 'wo3 tai4 lao3 le yi3 jing1 zuo4 bu2 dong4 le, suo3 yi3 yong4 zhai2 pei4 fu2 wu4 de fang1 shi4 mai3 jiu3.',
            translation: '私はもう年で動けないので、 お酒は宅配サービスを利用して買います。',
            memo: '',
            changed: '☆'
          },
          {
            word: '基因改造',
            sentence: '基因改造的食品對人們的身體有什麼影響?',
            bopomofo: 'ㄐㄧ ㄧㄣ ㄍㄞˇ ㄗㄠˋ ㄉㄜ˙ ㄕˊ ㄆㄧㄣˇ ㄉㄨㄟˋ ㄖㄣˊ ㄇㄣ˙ ㄉㄜ˙ ㄕㄣ ㄊㄧˇ ㄧㄡˇ ㄕㄣˊ ㄇㄜ˙ ㄧㄥˇ ㄒㄧㄤˇ?',
            pinyin: 'ji1 yin1 gai3 zao4 de4 shi2 pin3 dui4 ren2 men de shen1 ti3 you3 shen2 me ying3 xiang3?',
            translation: '遺伝子組み換えの食品は、 人体にどのような影響を及ぼしますか?',
            memo: ''
          },
          {
            word: '忙得過來',
            sentence: '這個工作我自己忙得過來, 別擔心我。',
            bopomofo: 'ㄓㄜˋ ㄍㄜˋ ㄍㄨㄥ ㄗㄨㄛˋ ㄨㄛˇ ㄗˋ ㄐㄧˇ ㄇㄤˊ ㄉㄜˊ ㄍㄨㄛˋ ㄌㄞˊ, ㄅㄧㄝˊ ㄉㄢ ㄒㄧㄣ ㄨㄛˇ.',
            pinyin: 'zhe4 ge4 gong1 zuo4 wo3 zi4 ji3 mang2 de guo4 lai2, bie2 dan1 xin1 wo3.',
            translation: 'この仕事は自分で片付けられるので、 心配しないで下さい。',
            memo: ''
          },
          {
            word: '開玩笑',
            sentence: '我不知道他是在開玩笑還是是認真的。',
            bopomofo: 'ㄨㄛˇ ㄅㄨˋ ㄓ ㄉㄠˋ ㄊㄚ ㄕˋ ㄗㄞˋ ㄎㄞ ㄨㄢˊ ㄒㄧㄠˋ ㄏㄞˊ ㄕˋ ㄕˋ ㄖㄣˋ ㄓㄣ ㄉㄜ˙.',
            pinyin: 'wo3 bu4 zhi1 dao4 ta1 shi4 zai4 kai1 wan2 xiao4 hai2 shi4 shi4 ren4 zhen1 de.',
            translation: '彼が冗談を言っているのか本気なのかわかりません。',
            memo: '',
            changed: '☆'
          },
          {
            word: '★看天吃飯',
            sentence: '他每天過著拮据的生活, 大家都希望他能找到好工作。',
            bopomofo: 'ㄊㄚ ㄇㄟˇ ㄊㄧㄢ ㄍㄨㄛˋ ㄓㄜ˙ ㄐㄧㄝˊ ㄐㄩ ㄉㄜ˙ ㄕㄥ ㄏㄨㄛˊ, ㄉㄚˋ ㄐㄧㄚ ㄉㄡ ㄒㄧ ㄨㄤˋ ㄊㄚ ㄋㄥˊ ㄓㄠˇ ㄉㄠˋ ㄏㄠˇ ㄍㄨㄥ ㄗㄨㄛˋ.',
            pinyin: 'ta1 mei3 tian1 guo4 zhe jie2 ju4 de sheng1 huo2, da4 jia1 dou1 xi1 wang4 ta1 neng2 zhao3 dao4 hao3 gong1 zuo4.',
            translation: '彼はその日暮らしの生活をしているので、 みんな彼が良い仕事を見つけるよう祈っています。',
            memo: '※「拮据(ㄐㄧㄝˊ ㄐㄩ/jie2 ju4)」？ 「看天吃飯」？',
            changed: '☆'
          },
          {
            word: '小農',
            sentence: '即使是小農在繁忙的季節也需要人手。',
            bopomofo: 'ㄐㄧˊ ㄕˇ ㄕˋ ㄒㄧㄠˇ ㄋㄨㄥˊ ㄗㄞˋ ㄈㄢˊ ㄇㄤˊ ㄉㄜ˙ ㄐㄧˋ ㄐㄧㄝˊ ㄧㄝˇ ㄒㄩ ㄧㄠˋ ㄖㄣˊ ㄕㄡˇ.',
            pinyin: 'ji2 shi3 shi4 xiao3 nong2 zai4 fan2 mang2 de ji4 jie2 ye3 xu1 yao4 ren2 shou3.',
            translation: '小規模農家でも、 繁忙期には人手が要ります。',
            memo: '',
            changed: '☆'
          },
          {
            word: '市集',
            sentence: '外國的市集賣著很多稀有的品物, 逛起來很有趣。',
            bopomofo: 'ㄨㄞˋ ㄍㄨㄛˊ ㄉㄜ˙ ㄕˋ ㄐㄧˊ ㄇㄞˋ ㄓㄜ˙ ㄏㄣˇ ㄉㄨㄛ ㄒㄧ ㄧㄡˇ ㄉㄜ˙ ㄆㄧㄣˇ ㄨˋ, ㄍㄨㄤˋ ㄑㄧˇ ㄌㄞˊ ㄏㄣˇ ㄧㄡˇ ㄑㄩˋ.',
            pinyin: 'wai4 guo2 de shi4 ji2 mai4 zhe hen3 duo1 xi1 you3 de pin3 wu4, guang4 qi3 lai2 hen3 you3 qu4.',
            translation: '外国の市場には珍しい品物がたくさんあり、 とても面白いです。',
            memo: '',
            changed: '☆'
          },
          {
            word: '食材',
            sentence: '即使用了一樣的食材， 因調味料， 味道也會完全不一樣。',
            bopomofo: 'ㄐㄧˊ ㄕˇ ㄩㄥˋ ㄌㄜ˙ ㄧ ㄧㄤˋ ㄉㄜ˙ ㄕˊ ㄘㄞˊ, ㄧㄣ ㄊㄧㄠˊ ㄨㄟˋ ㄌㄧㄠˋ, ㄨㄟˋ ㄉㄠˋ ㄧㄝˇ ㄏㄨㄟˋ ㄨㄢˊ ㄑㄩㄢˊ ㄅㄨˋ ㄧ ㄧㄤˋ.',
            pinyin: 'ji2 shi3 yong4 le yi1 yang4 de shi2 cai2, yin1 tiao2 wei4 liao4, wei4 dao4 ye3 hui4 wan2 quan2 bu4 yi1 yang4.',
            translation: '同じ食材を使っても、 調味料次第で味は全く異なるものになります。',
            memo: '',
            changed: '☆'
          },
          {
            word: '★產地',
            sentence: '小學教科書中也提到了該地區是花生的產地。',
            bopomofo: 'ㄒㄧㄠˇ ㄒㄩㄝˊ ㄐㄧㄠˋ ㄎㄜ ㄕㄨ ㄓㄨㄥ ㄧㄝˇ ㄊㄧˊ ㄉㄠˋ ㄌㄜ˙ ㄍㄞ ㄉㄧˋ ㄑㄩ ㄕˋ ㄏㄨㄚ ㄕㄥ ㄉㄜ˙ ㄔㄢˇ ㄉㄧˋ.',
            pinyin: 'xiao3 xue2 jiao4 ke1 shu1 zhong1 ye3 ti2 dao4 le gai1 di4 qu1 shi4 hua1 sheng1 de chan3 di4.',
            translation: 'その辺りがピーナッツの産地だという事は、小学校の教科書にも載っています。',
            memo: '※「教科書」の発音？ 「花生」：台湾華語でピーナッツ。 ちなみにピーナッツは台湾語では「土豆」 だが、 同じ漢字で中国では「ジャガイモ」となる。'
          },
          {
            word: '盡量',
            sentence: '我會盡量在早上七點起床吃早餐。',
            bopomofo: 'ㄨㄛˇ ㄏㄨㄟˋ ㄐㄧㄣˇ ㄌㄧㄤˋ ㄗㄞˋ ㄗㄠˇ ㄕㄤˋ ㄑㄧ ㄉㄧㄢˇ ㄑㄧˇ ㄔㄨㄤˊ ㄔ ㄗㄠˇ ㄘㄢ.',
            pinyin: 'wo3 hui4 jin3 liang4 zai4 zao3 shang4 qi1 dian3 qi3 chuang2 chi1 zao3 can1.',
            translation: '朝7時に起きて朝ご飯を食べるために全力を尽くします。',
            memo: ''
          },
          {
            word: '友善',
            sentence: '如果我可以選擇, 我會選友善環境的品物。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄨㄛˇ ㄎㄜˇ ㄧˇ ㄒㄩㄢˇ ㄗㄜˊ, ㄨㄛˇ ㄏㄨㄟˋ ㄒㄩㄢˇ ㄧㄡˇ ㄕㄢˋ ㄏㄨㄢˊ ㄐㄧㄥˋ ㄉㄜ˙ ㄆㄧㄣˇ ㄨˋ.',
            pinyin: 'ru2 guo3 wo3 ke3 yi3 xuan3 ze2, wo3 hui4 xuan3 you3 shan4 huan2 jing4 de pin3 wu4.',
            translation: '選択肢があるなら、 エコフレンドリーな品物を選びます。',
            memo: ''
          },
          {
            word: '對待',
            sentence: '如果你好好地對待衣服, 可以穿得久一點。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄏㄠˇ ㄏㄠˇ ㄉㄜ˙ ㄉㄨㄟˋ ㄉㄞˋ ㄧ ㄈㄨˊ, ㄎㄜˇ ㄧˇ ㄔㄨㄢ ㄉㄜ˙ ㄐㄧㄡˇ ㄧ ㄉㄧㄢˇ.',
            pinyin: 'ru2 guo3 ni3 hao3 hao3 de dui4 dai4 yi1 fu2, ke3 yi3 chuan1 de jiu3 yi1 dian3.',
            translation: 'きちんと取り扱えば、 服は長く着られますよ。',
            memo: '',
            changed: '☆'
          },
          {
            word: '土地',
            sentence: '你知道如何好好的利用鄉下土地嗎?',
            bopomofo: 'ㄋㄧˇ ㄓ ㄉㄠˋ ㄖㄨˊ ㄏㄜˊ ㄏㄠˇ ㄏㄠˇ ㄉㄜ˙ ㄌㄧˋ ㄩㄥˋ ㄒㄧㄤ ㄒㄧㄚˋ ㄊㄨˇ ㄉㄧˋ ㄇㄚ˙?',
            pinyin: 'ni3 zhi1 dao4 ru2 he2 hao3 hao3 de li4 yong4 xiang1 xia4 tu3 di4 ma?',
            translation: '田舎の土地を上手く活用する方法を知りませんか?',
            memo: ''
          },
          {
            word: '信任',
            sentence: '雖然有一點雞婆, 我很信任住在隔壁的阿姨。',
            bopomofo: 'ㄙㄨㄟ ㄖㄢˊ ㄧㄡˇ ㄧˋ ㄉㄧㄢˇ ㄐㄧ ㄆㄛˊ, ㄨㄛˇ ㄏㄣˇ ㄒㄧㄣˋ ㄖㄣˋ ㄓㄨˋ ㄗㄞˋ ㄍㄜˊ ㄅㄧˋ ㄉㄜ˙ ㄚ ㄧˊ.',
            pinyin: 'sui1 ran2 you3 yi1 dian3 ji1 po2, wo3 hen3 xin4 ren4 zhu4 zai4 ge2 bi4 de a1 yi2.',
            translation: '少しお節介なところはありますが、 隣に住むおばさんの事はすごく信頼しています。',
            memo: '',
            changed: '☆'
          },
          {
            word: '寧可',
            sentence: '我認為拉麵的麵不是配角， 當然是主角。',
            bopomofo: 'ㄨㄛˇ ㄖㄣˋ ㄨㄟˊ ㄌㄚ ㄇㄧㄢˋ ㄉㄧˊ ㄇㄧㄢˋ ㄅㄨˊ ㄕˋ ㄆㄟˋ ㄐㄧㄠˇ, ㄉㄤ ㄖㄢˊ ㄕˋ ㄓㄨˇ ㄐㄧㄠˇ.',
            pinyin: 'wo3 ren4 wei2 la1 mian4 de mian4 bu2 shi4 pei4 jiao3, dang1 ran2 shi4 zhu3 jiao3.',
            translation: 'ラーメンの麺は脇役ではなく、 むしろ主役だと思います。',
            memo: '',
            changed: '☆'
          },
          {
            word: '跑',
            sentence: '我這個幾年也沒什麼活動， 只去逛街買東西也可能會有肌肉痛。',
            bopomofo: 'ㄨㄛˇ ㄓㄜˋ ㄍㄜˋ ㄐㄧˇ ㄋㄧㄢˊ ㄧㄝˇ ㄇㄟˊ ㄕㄣˊ ㄇㄜ˙ ㄏㄨㄛˊ ㄉㄨㄥˋ, ㄓˇ ㄑㄩˋ ㄍㄨㄤˋ ㄐㄧㄝ ㄇㄞˇ ㄉㄨㄥ ㄒㄧ˙ ㄧㄝˇ ㄎㄜˇ ㄋㄥˊ ㄏㄨㄟˋ ㄧㄡˇ ㄐㄧ ㄖㄡˋ ㄊㄨㄥˋ.',
            pinyin: 'wo3 zhe4 ge4 ji3 nian2 ye3 mei2 shen2 me huo2 dong4, zhi3 qu4 guang4 jie1 mai3 dong1 xi ye3 ke3 neng2 hui4 you3 ji1 rou4 tong4.',
            translation: 'ここ数年は一切活動していないので、 買い物に行くだけでも筋肉痛になります。',
            memo: '',
            changed: '☆'
          },
          {
            word: '★支持',
            sentence: '他工作量增加了, 有人可以支援他嗎?',
            bopomofo: 'ㄊㄚ ㄍㄨㄥ ㄗㄨㄛˋ ㄌㄧㄤˋ ㄗㄥ ㄐㄧㄚ ㄌㄜ˙, ㄧㄡˇ ㄖㄣˊ ㄎㄜˇ ㄧˇ ㄓ ㄩㄢˊ ㄊㄚ ㄇㄚ˙?',
            pinyin: 'ta1 gong1 zuo4 liang4 zeng1 jia1 le, you3 ren2 ke3 yi3 zhi1 yuan2 ta1 ma?',
            translation: '彼の仕事量が増えているので、 誰かサポートできる人はいますか?',
            memo: '※「支持」の使い方？',
            changed: '☆'
          },
          {
            word: '★文章',
            sentence: '我很困， 文章的內容完全進不了腦袋裏。',
            bopomofo: 'ㄨㄛˇ ㄏㄣˇ ㄎㄨㄣˋ, ㄨㄣˊ ㄓㄤ ㄉㄜ˙ ㄋㄟˋ ㄖㄨㄥˊ ㄨㄢˊ ㄑㄩㄢˊ ㄐㄧㄣˋ ㄅㄨˋ ㄌㄧㄠˇ ㄋㄠˇ ㄉㄞˋ ㄌㄧˇ.',
            pinyin: 'wo3 hen3 kun4, wen2 zhang1 de nei4 rong2 wan2 quan2 jin4 bu4 liao3 nao3 dai4 li3.',
            translation: 'とても眠いので、 記事の内容が全く頭に入ってきません。',
            memo: '※「裏」でOK?',
            changed: '☆'
          },
          {
            word: '推銷',
            sentence: '那家公司的商品現在受歡迎的演員正在推銷。',
            bopomofo: 'ㄋㄚˋ ㄐㄧㄚ ㄍㄨㄥ ㄙ ㄉㄜ˙ ㄕㄤ ㄆㄧㄣˇ ㄒㄧㄢˋ ㄗㄞˋ ㄕㄡˋ ㄏㄨㄢ ㄧㄥˊ ㄉㄜ˙ ㄧㄢˇ ㄩㄢˊ ㄓㄥˋ ㄗㄞˋ ㄊㄨㄟ ㄒㄧㄠ.',
            pinyin: 'na4 jia1 gong1 si1 de shang1 pin3 xian4 zai4 shou4 huan1 ying2 de yan3 yuan2 zheng4 zai4 tui1 xiao1.',
            translation: 'あの会社の商品は、 今人気俳優が宣伝しています。',
            memo: '',
            changed: '☆'
          },
          {
            word: '其中',
            sentence: '盤子上有五片生魚片, 其中幾片好像被貓舔了。',
            bopomofo: 'ㄆㄢˊ ㄗ˙ ㄕㄤˋ ㄧㄡˇ ㄨˇ ㄆㄧㄢˋ ㄕㄥ ㄩˊ ㄆㄧㄢˋ, ㄑㄧˊ ㄓㄨㄥ ㄐㄧˇ ㄆㄧㄢˋ ㄏㄠˇ ㄒㄧㄤˋ ㄅㄟˋ ㄇㄠ ㄊㄧㄢˇ ㄌㄜ˙.',
            pinyin: 'pan2 zi shang4 you3 wu3 pian4 sheng1 yu2 pian4, qi2 zhong1 ji3 pian4 hao3 xiang4 bei4 mao1 tian3 le.',
            translation: 'お皿の上には5枚のお刺身がありますが、 その内の何枚かは猫が舐めたようです。',
            memo: '',
            changed: '☆'
          },
          {
            word: '★師傅',
            sentence: '西點師傅教了弟子怎麼把奶油打到蓬鬆。',
            bopomofo: 'ㄒㄧ ㄉㄧㄢˇ ㄕ ㄈㄨ ㄐㄧㄠ ㄌㄜ˙ ㄉㄧˋ ㄗˇ ㄗㄣˇ ㄇㄜ˙ ㄅㄚˇ ㄋㄞˇ ㄧㄡˊ ㄉㄚˇ ㄉㄠˋ ㄆㄥˊ ㄙㄨㄥ.',
            pinyin: 'xi1 dian3 shi1 fu4 jiao1 le di4 zi3 zen3 me ba3 nai3 you2 da3 dao4 peng2 song1.',
            translation: 'パティシエの師匠は、 弟子たちにホイップクリームのふわふわな泡立て方を教えました。',
            memo: '※「弟子(ㄉㄧˋ ㄗˇ)」の発音？',
            changed: '☆'
          },
          {
            word: '農村',
            sentence: '就算是用一句話來說農村, 因地區也會有很大的差異。',
            bopomofo: 'ㄐㄧㄡˋ ㄙㄨㄢˋ ㄕˋ ㄩㄥˋ ㄧ ㄐㄩˋ ㄏㄨㄚˋ ㄌㄞˊ ㄕㄨㄛ ㄋㄨㄥˊ ㄘㄨㄣ, ㄧㄣ ㄉㄧˋ ㄑㄩ ㄧㄝˇ ㄏㄨㄟˋ ㄧㄡˇ ㄏㄣˇ ㄉㄚˋ ㄉㄜ˙ ㄔㄚ ㄧˋ.',
            pinyin: 'jiu4 suan4 shi4 yong4 yi1 ju4 hua4 lai2 shuo1 nong2 cun1, yin1 di4 qu1 ye3 hui4 you3 hen3 da4 de cha1 yi4.',
            translation: '一言で農村と言っても、 地域によってかなり差があります。',
            memo: '',
            changed: '☆'
          },
          {
            word: '長大',
            sentence: '你的貓不是長大了而是應該說胖了才對?',
            bopomofo: 'ㄋㄧˇ ㄉㄜ˙ ㄇㄠ ㄅㄨˊ ㄕˋ ㄓㄤˇ ㄉㄚˋ ㄌㄜ˙ ㄦˊ ㄕˋ ㄧㄥ ㄍㄞ ㄕㄨㄛ ㄆㄤˋ ㄌㄜ˙ ㄘㄞˊ ㄉㄨㄟˋ?',
            pinyin: 'ni3 de mao1 bu2 shi4 zhang3 da4 le er2 shi4 ying1 gai1 shuo1 pang4 le cai2 dui4?',
            translation: 'あなたの猫は、 成長したと言うよりはむしろ太ったんじゃないですか?',
            memo: '',
            changed: '☆'
          },
          {
            word: '幫助',
            sentence: '我想算一下貓有多少鬍鬚, 請你幫助我?',
            bopomofo: 'ㄨㄛˇ ㄒㄧㄤˇ ㄙㄨㄢˋ ㄧ ㄒㄧㄚˋ ㄇㄠ ㄧㄡˇ ㄉㄨㄛ ㄕㄠˇ ㄏㄨˊ ㄒㄩ, ㄑㄧㄥˇ ㄋㄧˇ ㄅㄤ ㄓㄨˋ ㄨㄛˇ?',
            pinyin: 'wo3 xiang3 suan4 yi1 xia4 mao1 you3 duo1 shao3 hu2 xu1, qing3 ni3 bang1 zhu4 wo3?',
            translation: '猫には髭が何本あるのか数えてみたいのですが、 手伝ってくれませんか?',
            memo: '※「幫助」 = 「幫幫」でも可。'
          },
          {
            word: '拜訪',
            sentence: '叔叔拜訪的時候他總是帶酒來， 所以今晚會宴會。',
            bopomofo: 'ㄕㄨˊ ㄕㄨ˙ ㄅㄞˋ ㄈㄤˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄊㄚ ㄗㄨㄥˇ ㄕˋ ㄉㄞˋ ㄐㄧㄡˇ ㄌㄞˊ, ㄙㄨㄛˇ ㄧˇ ㄐㄧㄣ ㄨㄢˇ ㄏㄨㄟˋ ㄧㄢˋ ㄏㄨㄟˋ.',
            pinyin: 'shu2 shu bai4 fang3 de shi2 hou4 ta1 zong3 shi4 dai4 jiu3 lai2, suo3 yi3 jin1 wan3 hui4 yan4 hui4.',
            translation: 'おじさんが訪ねてくる時はいつもお酒を持ってくるので、 今夜は宴会です。',
            memo: ''
          },
          {
            word: '出產',
            sentence: '氣候會左右蔬菜的出產， 不是那麼簡單的事。',
            bopomofo: 'ㄑㄧˋ ㄏㄡˋ ㄏㄨㄟˋ ㄗㄨㄛˇ ㄧㄡˋ ㄕㄨ ㄘㄞˋ ㄉㄜ˙ ㄔㄨ ㄔㄢˇ, ㄅㄨˊ ㄕˋ ㄋㄚˋ ㄇㄜ˙ ㄐㄧㄢˇ ㄉㄢ ㄉㄜ˙ ㄕˋ.',
            pinyin: 'qi4 hou4 hui4 zuo3 you4 shu1 cai4 de chu1 chan3, bu2 shi4 na4 me jian3 dan1 de shi4.',
            translation: '天候にも左右されるので、 野菜を生産するのは簡単な事ではありません。',
            memo: '',
            changed: '☆'
          },
          {
            word: '由於',
            sentence: '由於是禮物，我沒辦法丟掉這個奇怪的娃娃。',
            bopomofo: 'ㄧㄡˊ ㄩˊ ㄕˋ ㄌㄧˇ ㄨˋ, ㄨㄛˇ ㄇㄟˊ ㄅㄢˋ ㄈㄚˇ ㄉㄧㄡ ㄉㄧㄠˋ ㄓㄜˋ ㄍㄜˋ ㄑㄧˊ ㄍㄨㄞˋ ㄉㄜ˙ ㄨㄚˊ ㄨㄚ˙.',
            pinyin: 'you2 yu2 shi4 li3 wu4, wo3 mei2 ban4 fa3 diu1 diao4 zhe4 ge4 qi2 guai4 de wa2 wa.',
            translation: 'プレゼントなので、 このへんてこな人形を捨てる事がどうしてもできません。',
            memo: '',
            changed: '☆'
          },
          {
            word: '許多',
            sentence: '今天鄰居正在開心地烤肉, 許多野狗聚集過來了。',
            bopomofo: 'ㄐㄧㄣ ㄊㄧㄢ ㄌㄧㄣˊ ㄐㄩ ㄓㄥˋ ㄗㄞˋ ㄎㄞ ㄒㄧㄣ ㄉㄧˋ ㄎㄠˇ ㄖㄡˋ, ㄒㄩˇ ㄉㄨㄛ ㄧㄝˇ ㄍㄡˇ ㄐㄩˋ ㄐㄧˊ ㄍㄨㄛˋ ㄌㄞˊ ㄌㄜ˙.',
            pinyin: 'jin1 tian1 lin2 ju1 zheng4 zai4 kai1 xin1 di4 kao3 rou4, xu3 duo1 ye3 gou3 ju4 ji2 guo4 lai2 le.',
            translation: '今日はご近所でバーベキューを楽しんでいるので、 野良犬がつられて集まってきています。',
            memo: '',
            changed: '☆'
          },
          {
            word: '接近',
            sentence: '接近貓咪才知道牠也有眉毛。',
            bopomofo: 'ㄐㄧㄝ ㄐㄧㄣˋ ㄇㄠ ㄇㄧ ㄘㄞˊ ㄓ ㄉㄠˋ ㄊㄚ ㄧㄝˇ ㄧㄡˇ ㄇㄟˊ ㄇㄠˊ.',
            pinyin: 'jie1 jin4 mao1 mi1 cai2 zhi1 dao4 ta1 ye3 you3 mei2 mao2.',
            translation: '猫に近づいてみると、 眉毛がある事が分かります。',
            memo: ''
          },
          {
            word: '自然',
            sentence: '自然有很多人工無法創造的美。',
            bopomofo: 'ㄗˋ ㄖㄢˊ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄖㄣˊ ㄍㄨㄥ ㄨˊ ㄈㄚˇ ㄔㄨㄤˋ ㄗㄠˋ ㄉㄜ˙ ㄇㄟˇ.',
            pinyin: 'zi4 ran2 you3 hen3 duo1 ren2 gong1 wu2 fa3 chuang4 zao4 de mei3.',
            translation: '自然には、 人工的には作り出せない美しさがあります。',
            memo: '',
            changed: '☆'
          },
          {
            word: '變成',
            sentence: '世界變得更方便了，在家做得到任何事情了。',
            bopomofo: 'ㄕˋ ㄐㄧㄝˋ ㄅㄧㄢˋ ㄉㄜ˙ ㄍㄥˋ ㄈㄤ ㄅㄧㄢˋ ㄌㄜ˙, ㄗㄞˋ ㄐㄧㄚ ㄗㄨㄛˋ ㄉㄜˊ ㄉㄠˋ ㄖㄣˋ ㄏㄜˊ ㄕˋ ㄑㄧㄥˊ ㄌㄜ˙.',
            pinyin: 'shi4 jie4 bian4 de geng4 fang1 bian4 le, zai4 jia1 zuo4 de2 dao4 ren4 he2 shi4 qing2 le.',
            translation: '世の中はとても便利になって、 なんでも家でできるようになりました。',
            memo: '',
            changed: '☆'
          },
          {
            word: '★休閒',
            sentence: '如果我事先知道派對的氣氛那麼休閒, 我就不會穿西裝了。',
            bopomofo: 'ㄖㄨˊ ㄍㄨㄛˇ ㄨㄛˇ ㄕˋ ㄒㄧㄢ ㄓ ㄉㄠˋ ㄆㄞˋ ㄉㄨㄟˋ ㄉㄜ˙ ㄑㄧˋ ㄈㄣ ㄋㄚˋ ㄇㄜ˙ ㄒㄧㄡ ㄒㄧㄢˊ, ㄨㄛˇ ㄐㄧㄡˋ ㄅㄨˊ ㄏㄨㄟˋ ㄔㄨㄢ ㄒㄧ ㄓㄨㄤ ㄌㄜ˙.',
            pinyin: 'ru2 guo3 wo3 shi4 xian1 zhi1 dao4 pai4 dui4 de qi4 fen1 na4 me xiu1 xian2, wo3 jiu4 bu2 hui4 chuan1 xi1 zhuang1 le.',
            translation: 'カジュアルな雰囲気のパーティだと事前に知っていたら、 スーツは着てこなかったのですが。',
            memo: '※「休閒」 = 「余暇の」？ 「カジュアル」ではない？',
            changed: '☆'
          },
          {
            word: '隨著',
            sentence: '隨著城市的發展, 私人經營的商店少了。',
            bopomofo: 'ㄙㄨㄟˊ ㄓㄜ˙ ㄔㄥˊ ㄕˋ ㄉㄜ˙ ㄈㄚ ㄓㄢˇ, ㄙ ㄖㄣˊ ㄐㄧㄥ ㄧㄥˊ ㄉㄜ˙ ㄕㄤ ㄉㄧㄢˋ ㄕㄠˇ ㄌㄜ˙.',
            pinyin: 'sui2 zhe cheng2 shi4 de fa1 zhan3, si1 ren2 jing1 ying2 de shang1 dian4 shao3 le.',
            translation: '街が発展するにつれ、 個人経営の店は少なくなりました。',
            memo: ''
          },
          {
            word: '觀光',
            sentence: '當我出差時， 我也會趁空閒時間觀光。',
            bopomofo: 'ㄉㄤ ㄨㄛˇ ㄔㄨ ㄔㄞ ㄕˊ, ㄨㄛˇ ㄧㄝˇ ㄏㄨㄟˋ ㄔㄣˋ ㄎㄨㄥˋ ㄒㄧㄢˊ ㄕˊ ㄐㄧㄢ ㄍㄨㄢ ㄍㄨㄤ.',
            pinyin: 'dang1 wo3 chu1 chai1 shi2, wo3 ye3 hui4 chen4 kong4 xian2 shi2 jian1 guan1 guang1.',
            translation: '出張の時は、 空き時間を利用して観光もします。',
            memo: ''
          },
          {
            word: '消費',
            sentence: '即使不是生活必需品, 有的時候我也會衝動消費。',
            bopomofo: 'ㄐㄧˊ ㄕˇ ㄅㄨˊ ㄕˋ ㄕㄥ ㄏㄨㄛˊ ㄅㄧˋ ㄒㄩ ㄆㄧㄣˇ, ㄧㄡˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄨㄛˇ ㄧㄝˇ ㄏㄨㄟˋ ㄔㄨㄥ ㄉㄨㄥˋ ㄒㄧㄠ ㄈㄟˋ.',
            pinyin: 'ji2 shi3 bu2 shi4 sheng1 huo2 bi4 xu1 pin3, you3 de shi2 hou4 wo3 ye3 hui4 chong1 dong4 xiao1 fei4.',
            translation: '生活必需品でなくても、 衝動買いしてしまう事がたまにあります。',
            memo: '※「即使⋯也⋯」。',
            changed: '☆'
          },
          {
            word: '安静',
            sentence: '這個村莊通常很安靜, 只在過節的時候變得熱鬧起來。',
            bopomofo: 'ㄓㄜˋ ㄍㄜˋ ㄘㄨㄣ ㄓㄨㄤ ㄊㄨㄥ ㄔㄤˊ ㄏㄣˇ ㄢ ㄐㄧㄥˋ, ㄓˇ ㄗㄞˋ ㄍㄨㄛˋ ㄐㄧㄝˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄅㄧㄢˋ ㄉㄜ˙ ㄖㄜˋ ㄋㄠˋ ㄑㄧˇ ㄌㄞˊ.',
            pinyin: 'zhe4 ge4 cun1 zhuang1 tong1 chang2 hen3 an1 jing4, zhi3 zai4 guo4 jie2 de shi2 hou4 bian4 de re4 nao4 qi3 lai2.',
            translation: 'この村は普段とても静かですが、 お祭りの時だけは活気づきます。',
            memo: '',
            changed: '☆'
          },
          {
            word: '消失',
            sentence: '打掃的時候一到，他就消失了。',
            bopomofo: 'ㄉㄚˇ ㄙㄠˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄧˊ ㄉㄠˋ, ㄊㄚ ㄐㄧㄡˋ ㄒㄧㄠ ㄕ ㄌㄜ˙.',
            pinyin: 'da3 sao3 de shi2 hou4 yi1 dao4, ta1 jiu4 xiao1 shi1 le.',
            translation: '掃除の時間になると、 彼はいつもどこかに消えてしまいます。',
            memo: '',
            changed: '☆'
          },
          {
            word: '★出問題',
            sentence: '★新發售的商品出問題, 客戶的查詢蜂擁而至。',
            bopomofo: 'ㄒㄧㄣ ㄈㄚ ㄕㄡˋ ㄉㄜ˙ ㄕㄤ ㄆㄧㄣˇ ㄔㄨ ㄨㄣˋ ㄊㄧˊ, ㄎㄜˋ ㄏㄨˋ ㄉㄜ˙ ㄔㄚˊ ㄒㄩㄣˊ ㄈㄥ ㄩㄥ ㄦˊ ㄓˋ.',
            pinyin: 'xin1 fa1 shou4 de shang1 pin3 chu1 wen4 ti2, ke4 hu4 de cha2 xun2 feng1 yong1 er2 zhi4.',
            translation: '新しく発売した商品に問題があったため、 お客さんからの問い合わせが殺到しています。',
            memo: '※「蜂擁而至」の発音？'
          },
          {
            word: '一方面',
            sentence: '他並不是討厭工作, 而是一方面他想每天輕鬆生活。',
            bopomofo: 'ㄊㄚ ㄅㄧㄥˋ ㄅㄨˊ ㄕˋ ㄊㄠˇ ㄧㄢˋ ㄍㄨㄥ ㄗㄨㄛˋ, ㄦˊ ㄕˋ ㄧ ㄈㄤ ㄇㄧㄢˋ ㄊㄚ ㄒㄧㄤˇ ㄇㄟˇ ㄊㄧㄢ ㄑㄧㄥ ㄙㄨㄥ ㄕㄥ ㄏㄨㄛˊ.',
            pinyin: 'ta1 bing4 bu2 shi4 tao3 yan4 gong1 zuo4, er2 shi4 yi1 fang1 mian4 ta1 xiang3 mei3 tian1 qing1 song1 sheng1 huo2.',
            translation: '彼は仕事が嫌いではありませんが、 一方で毎日ゴロゴロして暮らしたいと思っています。',
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
