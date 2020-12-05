<template>
  <section>
    <Header
      :name="'sentence'"
    />
    <!--    <head>-->
    <!--      <script data-ad-client="ca-pub-9333963654003765" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />-->
    <!--      <title />-->
    <!--    </head>-->
    <!--
  <div style="color: #3b8070" align="center">
    スポンサーリンク
  </div>
  <script data-ad-client="ca-pub-9333963654003765" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
  -->
    <div class="main-text1">
      <div class="text-itself-about">
        <br>
        <h1 style="font-size: 20px; text-align: center">
          當代中文課程課2・第4章
        </h1>
        <p>
          【新単語+例文】
        </p>
        <p>
          ・高美玲
        </p>
        <SentenceFormat
          :sentence="'高美玲對台北好吃的餐廳很熟。'"
          :bopomofo="'ㄍㄠ ㄇㄟˇ ㄌㄧㄥˊ ㄉㄨㄟˋ ㄊㄞˊ ㄅㄟˇ ㄏㄠˇ ㄔ ㄉㄜ˙ ㄘㄢ ㄊㄧㄥ ㄏㄣˇ ㄕㄡˊ.'"
          :pinyin="'gao1 mei3 ling2 dui4 tai2 bei3 hao3 chi1 de can1 ting1 hen3 shou2.'"
          :translation="'高美玲は台北の美味しいレストランに精通しています。'"
          :memo="'※「熟」/「熟悉」(熟知している) → 台湾の発音は「ㄕㄡˊ/shou」「ㄕㄡˊ ㄒㄧ/shou xi」、 中国では一般的に「ㄕㄨˊ ㄒㄧ/shu2」「ㄕㄨˊ ㄒㄧ/shu2 xi」。'"
        />
        <br>
        <p>
          ・打工
        </p>
        <SentenceFormat
          :sentence="'在鄉下找打工不是容易。'"
          :bopomofo="'ㄗㄞˋ ㄒㄧㄤ ㄒㄧㄚˋ ㄓㄠˇ ㄉㄚˇ ㄍㄨㄥ ㄅㄨˊ ㄕˋ ㄖㄨㄥˊ ㄧˋ.'"
          :pinyin="'zai4 xiang1 xia4 zhao3 da3 gong1 bu2 shi4 rong2 yi4.'"
          :translation="'田舎でパートタイムの仕事を見つけるのは簡単ではありません。'"
        />
        <br>
        <p>
          ・主任
        </p>
        <SentenceFormat
          :sentence="'為了找工作你應該先跟主任說話。'"
          :bopomofo="'ㄨㄟˋ ㄌㄜ˙ ㄓㄠˇ ㄍㄨㄥ ㄗㄨㄛˋ ㄋㄧˇ ㄧㄥ ㄍㄞ ㄒㄧㄢ ㄍㄣ ㄓㄨˇ ㄖㄣˋ ㄕㄨㄛ ㄏㄨㄚˋ.'"
          :pinyin="'wei4 le zhao3 gong1 zuo4 ni3 ying1 gai1 xian1 gen1 zhu3 ren4 shuo1 hua4.'"
          :translation="'就職するためにはまずマネージャーと話をするべきです。'"
        />
        <br>
        <p>
          ・介紹
        </p>
        <SentenceFormat
          :sentence="'你可不可以向我介紹誰詳細了解外國工作機會?'"
          :bopomofo="'ㄋㄧˇ ㄎㄜˇ ㄅㄨˋ ㄎㄜˇ ㄧˇ ㄒㄧㄤˋ ㄨㄛˇ ㄐㄧㄝˋ ㄕㄠˋ ㄕㄨㄟˊ ㄒㄧㄤˊ ㄒㄧˋ ㄌㄧㄠˇ ㄐㄧㄝˇ ㄨㄞˋ ㄍㄨㄛˊ ㄍㄨㄥ ㄗㄨㄛˋ ㄐㄧ ㄏㄨㄟˋ?'"
          :pinyin="'ni3 ke3 bu4 ke3 yi3 xiang4 wo3 jie4 shao4 shei2 xiang2 xi4 le jie3 wai4 guo2 gong1 zuo4 ji1 hui4?'"
          :translation="'外国での仕事の機会について詳しく知っている人を紹介してもらえませんか?'"
        />
        <br>
        <p>
          ・歲
        </p>
        <SentenceFormat
          :sentence="'他有十幾歲的女兒。'"
          :bopomofo="'ㄊㄚ ㄧㄡˇ ㄕˊ ㄐㄧˇ ㄙㄨㄟˋ ㄉㄜ˙ ㄋㄩˇ ㄦˊ.'"
          :pinyin="'ta1 you3 shi2 ji3 sui4 de nu3 er2.'"
          :translation="'彼には10代の娘がいます。'"
        />
        <br>
        <p>
          ・語言學
        </p>
        <SentenceFormat
          :sentence="'那家學校找語言學的教授。'"
          :bopomofo="'ㄋㄚˋ ㄐㄧㄚ ㄒㄩㄝˊ ㄒㄧㄠˋ ㄓㄠˇ ㄩˇ ㄧㄢˊ ㄒㄩㄝˊ ㄉㄜ˙ ㄐㄧㄠˋ ㄕㄡˋ.'"
          :pinyin="'na4 jia1 xue2 xiao4 zhao3 yu3 yan2 xue2 de jiao4 shou4.'"
          :translation="'その学校は言語学の教授を探しています。'"
        />
        <br>
        <p>
          ・經驗
        </p>
        <SentenceFormat
          :sentence="'我的經驗很少, 不能向那家職位應徵。'"
          :bopomofo="'ㄨㄛˇ ㄉㄜ˙ ㄐㄧㄥ ㄧㄢˋ ㄏㄣˇ ㄕㄠˇ, ㄅㄨˋ ㄋㄥˊ ㄒㄧㄤˋ ㄋㄚˋ ㄐㄧㄚ ㄓˊ ㄨㄟˋ ㄧㄥ ㄓㄥ.'"
          :pinyin="'wo3 de jing1 yan4 hen3 shao3, bu4 neng2 xiang4 na4 jia1 zhi2 wei4 ying1 zheng1.'"
          :translation="'私は経験が少ないので、 そのポジションに応募する事はできません。'"
        />
        <br>
        <p>
          ・談
        </p>
        <SentenceFormat
          :sentence="'我們互相談自己的經歷。'"
          :bopomofo="'ㄨㄛˇ ㄇㄣ˙ ㄏㄨˋ ㄒㄧㄤ ㄊㄢˊ ㄗˋ ㄐㄧˇ ㄉㄜ˙ ㄐㄧㄥ ㄌㄧˋ.'"
          :pinyin="'wo3 men hu4 xiang1 tan2 zi4 ji3 de jing1 li4.'"
          :translation="'私たちはお互いに自身の経歴について話しました。'"
        />
        <br>
        <p>
          ・當
        </p>
        <SentenceFormat
          :sentence="'他現在那家超市當店員。'"
          :bopomofo="'ㄊㄚ ㄒㄧㄢˋ ㄗㄞˋ ㄋㄚˋ ㄐㄧㄚ ㄔㄠ ㄕˋ ㄉㄤ ㄉㄧㄢˋ ㄩㄢˊ.'"
          :pinyin="'ta1 xian4 zai4 na4 jia1 chao1 shi4 dang1 dian4 yuan2.'"
          :translation="'彼は今あのスーパーで店員として働いています。'"
        />
        <br>
        <p>
          ・助教
        </p>
        <SentenceFormat
          :sentence="'因為倍率太高了, 成為助教很難。'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄅㄟˋ ㄌㄩˋ ㄊㄞˋ ㄍㄠ ㄌㄜ˙, ㄔㄥˊ ㄨㄟˊ ㄓㄨˋ ㄐㄧㄠˋ ㄏㄣˇ ㄋㄢˊ.'"
          :pinyin="'yin1 wei4 bei4 lu4 tai4 gao1 le, cheng2 wei4 zhu4 jiao4 hen3 nan2.'"
          :translation="'倍率が高すぎるため、 助教になるのは難しいです。'"
        />
        <br>
        <p>
          ・上午
        </p>
        <SentenceFormat
          :sentence="'上午的雨會下午停止。'"
          :bopomofo="'ㄕㄤˋ ㄨˇ ㄉㄜ˙ ㄩˇ ㄏㄨㄟˋ ㄒㄧㄚˋ ㄨˇ ㄊㄧㄥˊ ㄓˇ.'"
          :pinyin="'shang4 wu3 de yu3 hui4 xia4 wu3 ting2 zhi3.'"
          :translation="'午前中の雨は午後には止むでしょう。'"
        />
        <br>
        <p>
          ・除了
        </p>
        <SentenceFormat
          :sentence="'除了紅蘿蔔你有沒有什麼不喜歡的蔬菜?'"
          :bopomofo="'ㄔㄨˊ ㄌㄜ˙ ㄏㄨㄥˊ ㄌㄨㄛˊ ㄅㄛˊ ㄋㄧˇ ㄧㄡˇ ㄇㄟˊ ㄧㄡˇ ㄕㄣˊ ㄇㄜ˙ ㄅㄨˋ ㄒㄧˇ ㄏㄨㄢ ㄉㄜ˙ ㄕㄨ ㄘㄞˋ?'"
          :pinyin="'chu2 le hong2 luo2 bo2 ni3 you3 mei2 you3 shen2 me bu4 xi3 huan1 de shu1 cai4?'"
          :translation="'にんじん以外に嫌いな野菜はありますか?'"
        />
        <br>
        <p>
          ・年級
        </p>
        <SentenceFormat
          :sentence="'義務教育的九年級, 學生準備上高中。'"
          :bopomofo="'ㄧˋ ㄨˋ ㄐㄧㄠˋ ㄩˋ ㄉㄜ˙ ㄐㄧㄡˇ ㄋㄧㄢˊ ㄐㄧˊ, ㄒㄩㄝˊ ㄕㄥ ㄓㄨㄣˇ ㄅㄟˋ ㄕㄤˋ ㄍㄠ ㄓㄨㄥ.'"
          :pinyin="'yi4 wu4 jiao4 yu4 de jiu3 nian2 ji2, xue2 sheng1 zhun3 bei4 shang4 gao1 zhong1.'"
          :translation="'義務教育の9年次に学生は高校に行く準備をします。'"
        />
        <br>
        <p>
          ・暑假
        </p>
        <SentenceFormat
          :sentence="'在台灣, 暑假後新學期開始。'"
          :bopomofo="'ㄗㄞˋ ㄊㄞˊ ㄨㄢ, ㄕㄨˇ ㄐㄧㄚˋ ㄏㄡˋ ㄒㄧㄣ ㄒㄩㄝˊ ㄑㄧ ㄎㄞ ㄕˇ.'"
          :pinyin="'zai4 tai2 wan1, shu3 jia4 hou4 xin1 xue2 qi1 kai1 shi3.'"
          :translation="'台湾では、 夏休みの後新しい学期が始まります。'"
        />
        <br>
        <p>
          ・請教
        </p>
        <SentenceFormat
          :sentence="'請教我為什麼台灣的罐頭怎麼難開。'"
          :bopomofo="'ㄑㄧㄥˇ ㄐㄧㄠˋ ㄨㄛˇ ㄨㄟˋ ㄕˊ ㄇㄜ˙ ㄊㄞˊ ㄨㄢ ㄉㄜ˙ ㄍㄨㄢˋ ㄊㄡ˙ ㄗㄣˇ ㄇㄜ˙ ㄋㄢˊ ㄎㄞ.'"
          :pinyin="'qing3 jiao4 wo3 wei4 shen2 me tai2 wan1 de guan4 tou2 zen3 me nan2 kai1.'"
          :translation="'台湾の缶詰がなぜあんなに開けづらいのか教えて下さい。'"
        />
        <br>
        <p>
          ・貴
        </p>
        <SentenceFormat
          :sentence="'貴公司是不是會支付加班費?'"
          :bopomofo="'ㄍㄨㄟˋ ㄍㄨㄥ ㄙ ㄕˋ ㄅㄨˊ ㄕˋ ㄏㄨㄟˋ ㄓ ㄈㄨˋ ㄐㄧㄚ ㄅㄢ ㄈㄟˋ?'"
          :pinyin="'gui4 gong1 si1 shi4 bu2 shi4 hui4 zhi1 fu4 jia1 ban1 fei4.'"
          :translation="'あなたの会社では残業代は支払われないのですか?'"
        />
        <br>
        <p>
          ・薪水
        </p>
        <SentenceFormat
          :sentence="'為了提高薪水我計劃跟老闆談判。'"
          :bopomofo="'ㄨㄟˋ ㄌㄜ˙ ㄊㄧˊ ㄍㄠ ㄒㄧㄣ ㄕㄨㄟˇ ㄨㄛˇ ㄐㄧˋ ㄏㄨㄚˋ ㄍㄣ ㄌㄠˇ ㄅㄢˇ ㄊㄢˊ ㄆㄢˋ.'"
          :pinyin="'wei4 le ti2 gao1 xin1 shui3 wo3 ji4 hua4 gen1 lao3 ban3 tan2 pan4.'"
          :translation="'給料を上げるために上司と交渉する予定です。'"
        />
        <br>
        <p>
          ・算
        </p>
        <SentenceFormat
          :sentence="'當我算學費時， 我感到驚訝的是它太貴了。'"
          :bopomofo="'ㄉㄤ ㄨㄛˇ ㄙㄨㄢˋ ㄒㄩㄝˊ ㄈㄟˋ ㄕˊ， ㄨㄛˇ ㄍㄢˇ ㄉㄠˋ ㄐㄧㄥ ㄧㄚˋ ㄉㄜ˙ ㄕˋ ㄊㄚ ㄊㄞˋ ㄍㄨㄟˋ ㄌㄜ˙.'"
          :pinyin="'dang1 wo3 suan4 xue2 fei4 shi2, wo3 gan3 dao4 jing1 ya4 de shi4 ta1 tai4 gui4 le.'"
          :translation="'学費を計算したところ、 高すぎて驚きました。'"
        />
        <br>
        <p>
          ・按照
        </p>
        <SentenceFormat
          :sentence="'按照市場價格超市決定價格。'"
          :bopomofo="'ㄢˋ ㄓㄠˋ ㄕˋ ㄔㄤˇ ㄐㄧㄚˋ ㄍㄜˊ ㄔㄠ ㄕˋ ㄐㄩㄝˊ ㄉㄧㄥˋ ㄐㄧㄚˋ ㄍㄜˊ.'"
          :pinyin="'an4 zhao4 shi4 chang3 jia4 ge2 chao1 shi4 jue2 ding4 jia4 ge2.'"
          :translation="'スーパーは市場価格に応じて価格を決定します。'"
        />
        <br>
        <p>
          ・教授
        </p>
        <SentenceFormat
          :sentence="'那個教授很奇怪, 通常只吃水果。'"
          :bopomofo="'ㄋㄚˋ ㄍㄜˋ ㄐㄧㄠˋ ㄕㄡˋ ㄏㄣˇ ㄑㄧˊ ㄍㄨㄞˋ, ㄊㄨㄥ ㄔㄤˊ ㄓˇ ㄔ ㄕㄨㄟˇ ㄍㄨㄛˇ.'"
          :pinyin="'na4 ge4 jiao4 shou4 hen3 qi2 guai4, tong1 chang2 zhi3 chi1 shui3 guo3.'"
          :translation="'その教授はとても変わっていて、 普段は果物しか食べません。'"
        />
        <br>
        <p>
          ・鐘點費
        </p>
        <SentenceFormat
          :sentence="'雖然鐘點費很低， 我想找工作可以摸動物。'"
          :bopomofo="'ㄙㄨㄟ ㄖㄢˊ ㄓㄨㄥ ㄉㄧㄢˇ ㄈㄟˋ ㄏㄣˇ ㄉㄧ， ㄨㄛˇ ㄒㄧㄤˇ ㄓㄠˇ ㄍㄨㄥ ㄗㄨㄛˋ ㄎㄜˇ ㄧˇ ㄇㄛ ㄉㄨㄥˋ ㄨˋ.'"
          :pinyin="'sui1 ran2 zhong1 dian3 fei4 hen3 di1, wo3 xiang3 zhao3 gong1 zuo4 ke3 yi3 mo1 dong4 wu4.'"
          :translation="'時給が安くても、 動物を触れる仕事がしたいです。'"
        />
        <br>
        <p>
          ・份
        </p>
        <SentenceFormat
          :sentence="'他好像有很多體力， 每天做三份工作。'"
          :bopomofo="'ㄊㄚ ㄏㄠˇ ㄒㄧㄤˋ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄊㄧˇ ㄌㄧˋ， ㄇㄟˇ ㄊㄧㄢ ㄗㄨㄛˋ ㄙㄢ ㄈㄣˋ ㄍㄨㄥ ㄗㄨㄛˋ.'"
          :pinyin="'ta1 hao3 xiang4 you3 hen3 duo1 ti3 li4, mei3 tian1 zuo4 san1 fen4 gong1 zuo4.'"
          :translation="'彼は体力があるようで、 一日に3つの仕事をしています。'"
        />
        <br>
        <p>
          ・法文
        </p>
        <SentenceFormat
          :sentence="'如果你會說法文， 非洲旅行變容易。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄏㄨㄟˋ ㄕㄨㄛ ㄈㄚˇ ㄨㄣˊ， ㄈㄟ ㄓㄡ ㄌㄩˇ ㄒㄧㄥˊ ㄅㄧㄢˋ ㄖㄨㄥˊ ㄧˋ.'"
          :pinyin="'ru2 guo3 ni3 hui4 shuo1 fa3 wen2, fei1 zhou1 lu3 xing2 bian4 rong2 yi4.'"
          :translation="'フランス語を話せれば、 アフリカ旅行が楽になりますよ。'"
        />
        <br>
        <p>
          ・亞洲
        </p>
        <SentenceFormat
          :sentence="'他離開歐洲之後已經過了三年,多少習慣了亞洲的料理。'"
          :bopomofo="'ㄊㄚ ㄌㄧˊ ㄎㄞ ㄡ ㄓㄡ ㄓ ㄏㄡˋ ㄧˇ ㄐㄧㄥ ㄍㄨㄛˋ ㄌㄜ˙ ㄙㄢ ㄋㄧㄢˊ, ㄉㄨㄛ ㄕㄠˇ ㄒㄧˊ ㄍㄨㄢˋ ㄌㄜ˙ ㄧㄚˋ ㄓㄡ ㄉㄜ˙ ㄌㄧㄠˋ ㄌㄧˇ.'"
          :pinyin="'ta1 li4 kai1 ou1 zhou1 zhi1 hou4 yi3 jing1 guo4 le san1 nian2, duo1 shao3 xi2 guan4 le ya4 zhou1 de liao4 li3.'"
          :translation="'ヨーロッパを離れて既に三年経ったので、 彼はアジアの料理に多少は慣れてきました。'"
        />
        <br>
        <p>
          ・西班牙語
        </p>
        <SentenceFormat
          :sentence="'她一邊做西班牙語翻譯的工作, 一邊養一個孩子。'"
          :bopomofo="'ㄊㄚ ㄧ ㄅㄧㄢ ㄗㄨㄛˋ ㄒㄧ ㄅㄢ ㄧㄚˊ ㄩˇ ㄈㄢ ㄧˋ ㄉㄜ˙ ㄍㄨㄥ ㄗㄨㄛˋ, ㄧ ㄅㄧㄢ ㄧㄤˇ ㄧˊ ㄍㄜˋ ㄏㄞˊ ㄗ˙.'"
          :pinyin="'ta1 yi1 bian1 zuo4 xi1 ban1 ya2 yu3 fan1 yi4 de gong1 zuo4, yi1 bian1 yang3 yi1 ge4 hai2 zi3.'"
          :translation="'彼女は子供を育てながらスペイン語の翻訳者として働いています。'"
        />
        <br>
        <p>
          ・英文
        </p>
        <SentenceFormat
          :sentence="'他的英文有日文口音。'"
          :bopomofo="'ㄊㄚ ㄉㄜ˙ ㄧㄥ ㄨㄣˊ ㄧㄡˇ ㄖˋ ㄨㄣˊ ㄎㄡˇ ㄧㄣ.'"
          :pinyin="'ta1 de ying1 wen2 you3 ri4 wen2 kou3 yin1.'"
          :translation="'彼の英語には日本語訛りがあります。'"
        />
        <br>
        <p>
          ・三年級
        </p>
        <SentenceFormat
          :sentence="'他大學三年級的時候決定了成為Youtuber。'"
          :bopomofo="'ㄊㄚ ㄉㄚˋ ㄒㄩㄝˊ ㄙㄢ ㄋㄧㄢˊ ㄐㄧˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄐㄩㄝˊ ㄉㄧㄥˋ ㄌㄜ˙ ㄔㄥˊ ㄨㄟˊ Youtuber.'"
          :pinyin="'ta1 da4 xue2 san1 nian2 ji2 de shi2 hou4 jue2 ding4 le cheng2 wei4 Youtuber.'"
          :translation="'彼は大学三年生の時にYoutuberになる事を決心しました。'"
        />
        <br>
        <p>
          ・法律
        </p>
        <SentenceFormat
          :sentence="'根據法律， 如果你沒有執照就不能開車。'"
          :bopomofo="'ㄍㄣ ㄐㄩˋ ㄈㄚˇ ㄌㄩˋ， ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄇㄟˊ ㄧㄡˇ ㄓˊ ㄓㄠˋ ㄐㄧㄡˋ ㄅㄨˋ ㄋㄥˊ ㄎㄞ ㄔㄜ.'"
          :pinyin="'gen1 ju4 fa3 lu4, ru2 guo3 ni3 mei2 you3 zhi2 zhao4 jiu4 bu4 neng2 kai1 che1.'"
          :translation="'法律によると、 免許無しで運転する事はできません。'"
        />
        <br>
        <p>
          ・夠
        </p>
        <SentenceFormat
          :sentence="'我有的錢不夠買新的電腦。'"
          :bopomofo="'ㄨㄛˇ ㄧㄡˇ ㄉㄜ˙ ㄑㄧㄢˊ ㄅㄨˊ ㄍㄡˋ ㄇㄞˇ ㄒㄧㄣ ㄉㄜ˙ ㄉㄧㄢˋ ㄋㄠˇ.'"
          :pinyin="'wo3 you3 de qian2 bu2 gou4 mai3 xin1 de dian4 nao3.'"
          :translation="'新しいパソコンを買うお金が足りません。'"
        />
        <br>
        <p>
          ・履歷表
        </p>
        <SentenceFormat
          :sentence="'我對履歷表得粘貼照片嗎?'"
          :bopomofo="'ㄨㄛˇ ㄉㄨㄟˋ ㄌㄩˇ ㄌㄧˋ ㄅㄧㄠˇ ㄉㄜˊ ㄓㄢ ㄊㄧㄝ ㄓㄠˋ ㄆㄧㄢ ㄇㄚ˙?'"
          :pinyin="'wo3 dui4 lu3 li4 biao3 dei3 zhan1 tie1 zhao4 pian4 ma.'"
          :translation="'履歴書に写真を貼り付ける必要がありますか?'"
        />
        <br>
        <p>
          ・面談
        </p>
        <SentenceFormat
          :sentence="'去面談的時候你是不是穿西裝?'"
          :bopomofo="'ㄑㄩˋ ㄇㄧㄢˋ ㄊㄢˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄋㄧˇ ㄕˋ ㄅㄨˊ ㄕˋ ㄔㄨㄢ ㄒㄧ ㄓㄨㄤ?'"
          :pinyin="'qu4 mian4 tan2 de shi2 hou4 ni3 shi4 bu2 shi4 chuan1 xi1 zhuang1?'"
          :translation="'面接にはスーツを着て行きますか?'"
        />
        <br>
        <p>
          ・華僑
        </p>
        <SentenceFormat
          :sentence="'華僑的意思是從中國的移民。'"
          :bopomofo="'ㄏㄨㄚˊ ㄑㄧㄠˊ ㄉㄜ˙ ㄧˋ ㄙ ㄕˋ ㄘㄨㄥˊ ㄓㄨㄥ ㄍㄨㄛˊ ㄉㄜ˙ ㄧˊ ㄇㄧㄣˊ.'"
          :pinyin="'hua2 qiao2 de yi4 si1 shi4 cong2 zhong1 guo2 de yi2 min2.'"
          :translation="'華僑は中国からの移民を意味します。'"
        />
        <br>
        <p>
          ・辦公室
        </p>
        <SentenceFormat
          :sentence="'現在辦公室關門了, 請你下午一點再來。'"
          :bopomofo="'ㄒㄧㄢˋ ㄗㄞˋ ㄅㄢˋ ㄍㄨㄥ ㄕˋ ㄍㄨㄢ ㄇㄣˊ ㄌㄜ˙, ㄑㄧㄥˇ ㄋㄧˇ ㄒㄧㄚˋ ㄨˇ ㄧˋ ㄉㄧㄢˇ ㄗㄞˋ ㄌㄞˊ.'"
          :pinyin="'xian4 zai4 ban4 gong1 shi4 guan1 men2 le, qing3 ni3 xia4 wu3 yi1 dian3 zai4 lai2.'"
          :translation="'今オフィスは閉まっていますので、 午後一時にまた来てください。'"
        />
        <br>
        <p>
          ・談話
        </p>
        <SentenceFormat
          :sentence="'跟他一談話, 我們就發現實際的問題。'"
          :bopomofo="'ㄍㄣ ㄊㄚ ㄧ ㄊㄢˊ ㄏㄨㄚˋ, ㄨㄛˇ ㄇㄣ˙ ㄐㄧㄡˋ ㄈㄚ ㄒㄧㄢˋ ㄕˊ ㄐㄧˋ ㄉㄜ˙ ㄨㄣˋ ㄊㄧˊ.'"
          :pinyin="'gen1 ta1 yi1 tan2 hua4, wo3 men jiu4 fa1 xian4 shi2 ji4 de wen4 ti2.'"
          :translation="'彼と話すとすぐに、 実際の問題が分かりました。'"
        />
        <br>
        <p>
          ・情形
        </p>
        <SentenceFormat
          :sentence="'我盡可能考慮每個人的情況計畫旅行。'"
          :bopomofo="'ㄨㄛˇ ㄐㄧㄣˋ ㄎㄜˇ ㄋㄥˊ ㄎㄠˇ ㄌㄩˋ ㄇㄟˇ ㄍㄜ˙ ㄖㄣˊ ㄉㄜ˙ ㄑㄧㄥˊ ㄎㄨㄤˋ ㄐㄧˋ ㄏㄨㄚˋ ㄌㄩˇ ㄒㄧㄥˊ.'"
          :pinyin="'wo3 jin4 ke3 neng2 kao3 lu4 mei3 ge4 ren2 de qing2 kuang4 ji4 hua4 lu3 xing2.'"
          :translation="'できるだけみんなの状況を考えて旅行を計画します。'"
        />
        <br>
        <p>
          ・適合
        </p>
        <SentenceFormat
          :sentence="'他認真的性格適合銀行職員的工作。'"
          :bopomofo="'ㄊㄚ ㄖㄣˋ ㄓㄣ ㄉㄜ˙ ㄒㄧㄥˋ ㄍㄜˊ ㄕˋ ㄏㄜˊ ㄧㄣˊ ㄏㄤˊ ㄓˊ ㄩㄢˊ ㄉㄜ˙ ㄍㄨㄥ ㄗㄨㄛˋ.'"
          :pinyin="'ta1 ren4 zhen1 de xing4 ge2 shi4 he2 yin2 hang2 zhi2 yuan2 de gong1 zuo4.'"
          :translation="'彼の真面目な性格は銀行員の仕事に適しています。'"
        />
        <br>
        <p>
          ・說明
        </p>
        <SentenceFormat
          :sentence="'同事對參加人快要說明怎麼使用公共設施。'"
          :bopomofo="'ㄊㄨㄥˊ ㄕˋ ㄉㄨㄟˋ ㄘㄢ ㄐㄧㄚ ㄖㄣˊ ㄎㄨㄞˋ ㄧㄠˋ ㄕㄨㄛ ㄇㄧㄥˊ ㄗㄣˇ ㄇㄜ˙ ㄕˇ ㄩㄥˋ ㄍㄨㄥ ㄍㄨㄥˋ ㄕㄜˋ ㄕ.'"
          :pinyin="'tong2 shi4 dui4 can1 jia1 ren2 kuai4 yao4 shuo1 ming2 zen3 me shi3 yong4 gong1 gong4 she4 shi1.'"
          :translation="'同僚がもうすぐ参加者に公共施設の使い方を説明します。'"
        />
        <br>
        <p>
          ・然後
        </p>
        <SentenceFormat
          :sentence="'早上爸爸給花園澆水, 然後他出門找朋友。'"
          :bopomofo="'ㄗㄠˇ ㄕㄤˋ ㄅㄚˋ ㄅㄚˋ ㄍㄟˇ ㄏㄨㄚ ㄩㄢˊ ㄐㄧㄠ ㄕㄨㄟˇ, ㄖㄢˊ ㄏㄡˋ ㄊㄚ ㄔㄨ ㄇㄣˊ ㄓㄠˇ ㄆㄥˊ ㄧㄡˇ.'"
          :pinyin="'zao3 shang4 ba4 ba4 gei3 hua1 yuan2 jiao1 shui3, ran2 hou4 ta1 chu1 men2 zhao3 peng2 you3.'"
          :translation="'朝にお父さんは庭に水撒きをした後、 友達に会いに出かけました。'"
        />
        <br>
        <p>
          ・月底
        </p>
        <SentenceFormat
          :sentence="'所有的房間必須到這個月底打掃乾淨。'"
          :bopomofo="'ㄙㄨㄛˇ ㄧㄡˇ ㄉㄜ˙ ㄈㄤˊ ㄐㄧㄢ ㄅㄧˋ ㄒㄩ ㄉㄠˋ ㄓㄜˋ ㄍㄜˋ ㄩㄝˋ ㄉㄧˇ ㄉㄚˇ ㄙㄠˇ ㄍㄢ ㄐㄧㄥˋ.'"
          :pinyin="'suo3 you3 de fang2 jian1 bi4 xu1 dao4 zhe4 ge4 yue4 di3 da3 sao3 gan1 jing4.'"
          :translation="'すべての部屋を今月末までにきれいに掃除する必要があります。'"
        />
        <br>
        <p>
          ・發
        </p>
        <SentenceFormat
          :sentence="'我恐怕上個月的加班津貼不會發。'"
          :bopomofo="'ㄨㄛˇ ㄎㄨㄥˇ ㄆㄚˋ ㄕㄤˋ ㄍㄜ˙ ㄩㄝˋ ㄉㄜ˙ ㄐㄧㄚ ㄅㄢ ㄐㄧㄣ ㄊㄧㄝ ㄅㄨˊ ㄏㄨㄟˋ ㄈㄚ.'"
          :pinyin="'wo3 kong3 pa4 shang4 ge4 yue4 de jia1 ban1 jin1 tie1 bu2 hui4 fa1.'"
          :translation="'先月の残業代が支払われないのではないかと恐れています。'"
        />
        <br>
        <p>
          ・馬上
        </p>
        <SentenceFormat
          :sentence="'因為孩子受傷了，我會馬上帶他去看醫生。'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄏㄞˊ ㄗ˙ ㄕㄡˋ ㄕㄤ ㄌㄜ˙， ㄨㄛˇ ㄏㄨㄟˋ ㄇㄚˇ ㄕㄤˋ ㄉㄞˋ ㄊㄚ ㄑㄩˋ ㄎㄢˋ ㄧ ㄕㄥ.'"
          :pinyin="'yin1 wei4 hai2 zi3 shou4 shang1 le, wo3 hui4 ma3 shang4 dai4 ta1 qu4 kan4 yi3 sheng1.'"
          :translation="'子供が怪我をしたので、 すぐに医者に診せに連れていきます。'"
        />
        <br>
        <p>
          ・答應
        </p>
        <SentenceFormat
          :sentence="'姐姐問我今天照顧孩子, 但是我不能答應。'"
          :bopomofo="'ㄐㄧㄝˇ ㄐㄧㄝ˙ ㄨㄣˋ ㄨㄛˇ ㄐㄧㄣ ㄊㄧㄢ ㄓㄠˋ ㄍㄨˋ ㄏㄞˊ ㄗ˙, ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄅㄨˋ ㄋㄥˊ ㄉㄚ ㄧㄥˋ.'"
          :pinyin="'jie3 jie wen4 wo3 jin1 tian1 zhao4 gu4 hai2 zi3, dan4 shi4 wo3 bu4 neng2 da1 ying4.'"
          :translation="'お姉さんに今日子供を預かってほしいと頼まれましたが、 引き受ける事ができません。'"
        />
        <br>
        <p>
          ・順利
        </p>
        <SentenceFormat
          :sentence="'除了缺乏人員的問題， 所有的是進展一切順利。'"
          :bopomofo="'ㄔㄨˊ ㄌㄜ˙ ㄑㄩㄝ ㄈㄚˊ ㄖㄣˊ ㄩㄢˊ ㄉㄜ˙ ㄨㄣˋ ㄊㄧˊ， ㄙㄨㄛˇ ㄧㄡˇ ㄉㄜ˙ ㄕˋ ㄐㄧㄣˋ ㄓㄢˇ ㄧ ㄑㄧㄝˋ ㄕㄨㄣˋ ㄌㄧˋ.'"
          :pinyin="'chu2 le que1 fa2 ren2 yuan2 de wen4 ti2, suo3 you3 de shi4 jin4 zhan3 yi1 qie4 shun4 li4.'"
          :translation="'人員が不足している事を除けば、 全て順調に進んでいます。'"
        />
        <br>
        <p>
          ・黃
        </p>
        <SentenceFormat
          :sentence="'黃先生和爸爸的關係很好, 常常來家玩。'"
          :bopomofo="'ㄏㄨㄤˊ ㄒㄧㄢ ㄕㄥ ㄏㄢˋ ㄅㄚˋ ㄅㄚˋ ㄉㄜ˙ ㄍㄨㄢ ㄒㄧˋ ㄏㄣˇ ㄏㄠˇ, ㄔㄤˊ ㄔㄤˊ ㄌㄞˊ ㄐㄧㄚ ㄨㄢˊ.'"
          :pinyin="'huang2 xian1 sheng1 han4 ba4 ba4 de guan1 xi4 hen3 hao3, chang2 chang2 lai2 jia1 wan2.'"
          :translation="'黃さんと父はとても仲が良く、 よく家に遊びに来ます。'"
        />
        <br>
        <p>
          ・沒想到
        </p>
        <SentenceFormat
          :sentence="'我沒想到飛往台北的航班會被取消。'"
          :bopomofo="'ㄨㄛˇ ㄇㄟˊ ㄒㄧㄤˇ ㄉㄠˋ ㄈㄟ ㄨㄤˇ ㄊㄞˊ ㄅㄟˇ ㄉㄜ˙ ㄏㄤˊ ㄅㄢ ㄏㄨㄟˋ ㄅㄟˋ ㄑㄩˇ ㄒㄧㄠ.'"
          :pinyin="'wo3 mei2 xiang3 dao4 fei1 wang3 tai2 bei3 de hang2 ban1 hui4 bei4 qu3 xiao1.'"
          :translation="'台北行きのフライトがキャンセルされるとは思っていませんでした。'"
        />
        <br>
      </div>
    </div>
    <br>
    <!--
    <div style="color: #3b8070" align="center">
      スポンサーリンク
    </div>
    <script data-ad-client="ca-pub-9333963654003765" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
    -->
    <!--    <head>-->
    <!--      <script data-ad-client="ca-pub-9333963654003765" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />-->
    <!--      <title />-->
    <!--    </head>-->
    <Footer
      :name="'sentence'"
    />
    <br>
  </section>
</template>

<script>
import Header from '../../components/header'
import Footer from '../../components/footer'
import MySpeechSynthesis from '../../../plugins/mySpeechSynthesis.js'
import SentenceFormat from '../components/sentenceFormat'
export default {
  components: {
    Header,
    Footer,
    SentenceFormat
  },
  component: {
    MySpeechSynthesis
  },
  head () {
    return {
      title: '例文集 sentence',
      script: [{
        'data-ad-client': process.env.GA_ADSENSE_ID,
        async: true,
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
      }],
      meta: [
        { hid: 'keywords', name: 'keywords', content: '中国語, 台湾, 台湾華語, 繁体字, 単語, 聞き流し, ボポモフォ, 當代中文課程課, 例文' },
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第4章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第4章で登場する新単語を使った例文や気づいた事など' }
      ]
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
