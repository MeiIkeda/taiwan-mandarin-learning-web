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
          當代中文課程課1・第12章
        </h1>
        <p>
          【新単語+例文】
        </p>
        <p>
          ・計畫
        </p>
        <SentenceFormat
          :sentence="'雖然他計畫了到八點完這個功課， 但他太累， 入睡覺了。'"
          :bopomofo="'ㄙㄨㄟ ㄖㄢˊ ㄊㄚ ㄐㄧˋ ㄏㄨㄚˋ ㄌㄜ˙ ㄉㄠˋ ㄅㄚ ㄉㄧㄢˇ ㄨㄢˊ ㄓㄜˋ ㄍㄜˋ ㄍㄨㄥ ㄎㄜˋ， ㄉㄢˋ ㄊㄚ ㄊㄞˋ ㄌㄟˋ， ㄖㄨˋ ㄕㄨㄟˋ ㄐㄧㄠˋ ㄌㄜ˙.'"
          :pinyin="'sui1 ran2 ta1 ji4 hua4 le dao4 ba1 dian3 wan2 zhe4 ge4 gong1 ke4, dan4 ta1 tai4 lei4, ru4 shui4 jiao4 le.'"
          :translation="'彼はこの宿題を8時までに終えるつもりでしたが、疲れすぎて寝てしまいました。'"
        />
        <br>
        <p>
          ・年
        </p>
        <SentenceFormat
          :sentence="'你想學中文幾年?'"
          :bopomofo="'ㄋㄧˇ ㄒㄧㄤˇ ㄒㄩㄝˊ ㄓㄨㄥ ㄨㄣˊ ㄐㄧˇ ㄋㄧㄢˊ?'"
          :pinyin="'ni3 xiang3 xue2 zhong1 wen2 ji3 nian2?'"
          :translation="'何年中国語を学びたいですか?'"
        />
        <br>
        <p>
          ・久
        </p>
        <SentenceFormat
          :sentence="'這個課很有意思, 但是有點太久。'"
          :bopomofo="'ㄓㄜˋ ㄍㄜˋ ㄎㄜˋ ㄏㄣˇ ㄧㄡˇ ㄧˋ ㄙ, ㄉㄢˋ ㄕˋ ㄧㄡˇ ㄉㄧㄢˇ ㄊㄞˋ ㄐㄧㄡˇ.'"
          :pinyin="'zhe4 ge4 ke4 hen3 you3 yi4 si1, dan4 shi4 you3 dian3 tai4 jiu3.'"
          :translation="'このクラスはとても面白いのですが、 少し長すぎます。'"
        />
        <br>
        <p>
          ・時間
        </p>
        <SentenceFormat
          :sentence="'如果得花太多時間, 我不想做飯。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄉㄜˊ ㄏㄨㄚ ㄊㄞˋ ㄉㄨㄛ ㄕˊ ㄐㄧㄢ, ㄨㄛˇ ㄅㄨˋ ㄒㄧㄤˇ ㄗㄨㄛˋ ㄈㄢˋ.'"
          :pinyin="'ru2 guo3 dei3 hua1 tai4 duo1 shi2 jian1, wo3 bu4 xiang3 zuo4 fan4.'"
          :translation="'時間がかかりすぎるなら、 料理したくないです。'"
        />
        <br>
        <p>
          ・先
        </p>
        <SentenceFormat
          :sentence="'我們先吃晚餐, 那後會去散步吧。'"
          :bopomofo="'ㄨㄛˇ ㄇㄣ˙ ㄒㄧㄢ ㄔ ㄨㄢˇ ㄘㄢ, ㄋㄚˋ ㄏㄡˋ ㄏㄨㄟˋ ㄑㄩˋ ㄙㄢˋ ㄅㄨˋ ㄅㄚ˙.'"
          :pinyin="'wo3 men xian1 chi1 wan3 can1, na4 hou4 hui4 qu4 san4 bu4 ba.'"
          :translation="'最初に夕食をとって、 それから散歩に行きましょう。'"
        />
        <br>
        <p>
          ・念
        </p>
        <SentenceFormat
          :sentence="'念高中的學生常常吃漢堡。'"
          :bopomofo="'ㄋㄧㄢˋ ㄍㄠ ㄓㄨㄥ ㄉㄜ˙ ㄒㄩㄝˊ ㄕㄥ ㄔㄤˊ ㄔㄤˊ ㄔ ㄏㄢˋ ㄅㄠˇ.'"
          :pinyin="'nian4 gao1 zhong1 de xue2 sheng1 chang2 chang2 chi1 han4 bao3.'"
          :translation="'高校生はよくハンバーガーを食べます。'"
        />
        <br>
        <p>
          ・大學
        </p>
        <SentenceFormat
          :sentence="'我念大學的時候, 我住在雅房。'"
          :bopomofo="'ㄨㄛˇ ㄋㄧㄢˋ ㄉㄚˋ ㄒㄩㄝˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄨㄛˇ ㄓㄨˋ ㄗㄞˋ ㄧㄚˇ ㄈㄤˊ.'"
          :pinyin="'wo3 nian4 da4 xue2 de shi2 hou4, wo3 zhu4 zai4 ya3 fang2.'"
          :translation="'大学時代はシェアルームに住んでいました。'"
        />
        <br>
        <p>
          ・需要
        </p>
        <SentenceFormat
          :sentence="'為了解決這個問題, 我需要你的幫助。'"
          :bopomofo="'ㄨㄟˋ ㄌㄧㄠˇ ㄐㄧㄝˇ ㄐㄩㄝˊ ㄓㄜˋ ㄍㄜˋ ㄨㄣˋ ㄊㄧˊ, ㄨㄛˇ ㄒㄩ ㄧㄠˋ ㄋㄧˇ ㄉㄜ˙ ㄅㄤ ㄓㄨˋ.'"
          :pinyin="'wei4 le jie3 jue2 zhe4 ge4 wen4 ti2, wo3 xu1 yao4 ni3 de bang1 zhu4.'"
          :translation="'この問題を解決するためには、 あなたの協力が必要です。'"
        />
        <br>
        <p>
          ・花
        </p>
        <SentenceFormat
          :sentence="'上個月我花了一萬多元吃飯。'"
          :bopomofo="'ㄕㄤˋ ㄍㄜ˙ ㄩㄝˋ ㄨㄛˇ ㄏㄨㄚ ㄌㄜ˙ ㄧ ㄨㄢˋ ㄉㄨㄛ ㄩㄢˊ ㄔ ㄈㄢˋ.'"
          :pinyin="'shang4 ge4 yue4 wo3 hua1 le yi1 wan4 duo1 yuan2 chi1 fan4.'"
          :translation="'先月私は食費に1万元以上を費やしました。'"
        />
        <br>
        <p>
          ・獎學金
        </p>
        <SentenceFormat
          :sentence="'退還獎學金需要數年時間。'"
          :bopomofo="'ㄊㄨㄟˋ ㄏㄨㄢˊ ㄐㄧㄤˇ ㄒㄩㄝˊ ㄐㄧㄣ ㄒㄩ ㄧㄠˋ ㄕㄨˋ ㄋㄧㄢˊ ㄕˊ ㄐㄧㄢ.'"
          :pinyin="'tui4 huan2 jiang3 xue2 jin1 xu1 yao4 shu4 nian2 shi2 jian1.'"
          :translation="'奨学金の返済には数年かかります。'"
        />
        <br>
        <p>
          ・成績
        </p>
        <SentenceFormat
          :sentence="'你的成績決定你的課程。'"
          :bopomofo="'ㄋㄧˇ ㄉㄜ˙ ㄔㄥˊ ㄐㄧ ㄐㄩㄝˊ ㄉㄧㄥˋ ㄋㄧˇ ㄉㄜ˙ ㄎㄜˋ ㄔㄥˊ.'"
          :pinyin="'ni3 de cheng2 ji4 jue2 ding4 ni3 de ke4 cheng2.'"
          :translation="'あなたの成績によって、 クラスが決まります。'"
        />
        <br>
        <p>
          ・學費
        </p>
        <SentenceFormat
          :sentence="'一般來說， 私立學校的學費很高。'"
          :bopomofo="'ㄧˋ ㄅㄢ ㄌㄞˊ ㄕㄨㄛ， ㄙ ㄌㄧˋ ㄒㄩㄝˊ ㄒㄧㄠˋ ㄉㄜ˙ ㄒㄩㄝˊ ㄈㄟˋ ㄏㄣˇ ㄍㄠ.'"
          :pinyin="'yi1 ban1 lai2 shuo1, si1 li4 xue2 xiao4 de xue2 fei4 hen3 gao1.'"
          :translation="'一般的に、 私立の学費は高いです。'"
        />
        <br>
        <p>
          ・公司
        </p>
        <SentenceFormat
          :sentence="'那家公司利用每週休息兩天的工作制度。'"
          :bopomofo="'ㄋㄚˋ ㄐㄧㄚ ㄍㄨㄥ ㄙ ㄌㄧˋ ㄩㄥˋ ㄇㄟˇ ㄓㄡ ㄒㄧㄡ ㄒㄧ ㄌㄧㄤˇ ㄊㄧㄢ ㄉㄜ˙ ㄍㄨㄥ ㄗㄨㄛˋ ㄓˋ ㄉㄨˋ.'"
          :pinyin="'na4 jia1 gong1 si1 li4 yong4 mei3 zhou1 xiu1 xi1 liang3 tian1 de gong1 zuo1 zhi4 du4.'"
          :translation="'あの会社は週休2日制を採用しています。'"
        />
        <br>
        <p>
          ・替
        </p>
        <SentenceFormat
          :sentence="'因為他感冒了, 我替他參加會議。'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄊㄚ ㄍㄢˇ ㄇㄠˋ ㄌㄜ˙, ㄨㄛˇ ㄊㄧˋ ㄊㄚ ㄘㄢ ㄐㄧㄚ ㄏㄨㄟˋ ㄧˋ.'"
          :pinyin="'yin1 wei4 ta1 gan3 mao4 le, wo3 ti4 ta1 can1 jia1 hui4 yi4.'"
          :translation="'彼が風邪をひいたので、 私が代わりに会議に主席します。'"
        />
        <br>
        <p>
          ・希望
        </p>
        <SentenceFormat
          :sentence="'我希望下一次考試中獲得好成績。'"
          :bopomofo="'ㄨㄛˇ ㄒㄧ ㄨㄤˋ ㄒㄧㄚˋ ㄧ ㄘˋ ㄎㄠˇ ㄕˋ ㄓㄨㄥ ㄏㄨㄛˋ ㄉㄜˊ ㄏㄠˇ ㄔㄥˊ ㄐㄧ.'"
          :pinyin="'wo3 xi1 wang4 xia4 yi1 ci4 kao3 shi4 zhong1 huo4 de2 hao3 cheng2 ji1.'"
          :translation="'次の試験では良い成績を取りたいです。'"
        />
        <br>
        <p>
          ・以後
        </p>
        <SentenceFormat
          :sentence="'熊貓來動物園以後, 很多人來看它。'"
          :bopomofo="'ㄒㄩㄥˊ ㄇㄠ ㄌㄞˊ ㄉㄨㄥˋ ㄨˋ ㄩㄢˊ ㄧˇ ㄏㄡˋ, ㄏㄣˇ ㄉㄨㄛ ㄖㄣˊ ㄌㄞˊ ㄎㄢˋ ㄊㄚ.'"
          :pinyin="'xiong2 mao1 lai2 dong4 wu4 yuan2 yi3 hou4, hen3 duo1 ren2 lai2 kan4 ta1.'"
          :translation="'パンダが動物園に来た後、 多くの人が見に来ました。'"
        />
        <br>
        <p>
          ・到
        </p>
        <SentenceFormat
          :sentence="'如果我們現在出門, 到九點會到火車站。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄨㄛˇ ㄇㄣ˙ ㄒㄧㄢˋ ㄗㄞˋ ㄔㄨ ㄇㄣˊ, ㄉㄠˋ ㄐㄧㄡˇ ㄉㄧㄢˇ ㄏㄨㄟˋ ㄉㄠˋ ㄏㄨㄛˇ ㄔㄜ ㄓㄢˋ.'"
          :pinyin="'ru2 guo3 wo3 men xian4 zai4 chu1 men2, dao4 jiu3 dian3 hui4 dao4 huo3 che1 zhan4.'"
          :translation="'今出かければ、 9時までに駅に着く事ができます。'"
        />
        <br>
        <p>
          ・上班
        </p>
        <SentenceFormat
          :sentence="'他每週上三天班, 學習兩天。'"
          :bopomofo="'ㄊㄚ ㄇㄟˇ ㄓㄡ ㄕㄤˋ ㄙㄢ ㄊㄧㄢ ㄅㄢ, ㄒㄩㄝˊ ㄒㄧˊ ㄌㄧㄤˇ ㄊㄧㄢ.'"
          :pinyin="'ta1 mei3 zhou1 shang4 san1 tian1 ban1, xue2 xi2 liang3 tian1.'"
          :translation="'彼は週に3日働いて、 2日勉強します。'"
        />
        <br>
        <p>
          ・念書
        </p>
        <SentenceFormat
          :sentence="'我想念書， 但是不能因為外面太吵。'"
          :bopomofo="'ㄨㄛˇ ㄒㄧㄤˇ ㄋㄧㄢˋ ㄕㄨ， ㄉㄢˋ ㄕˋ ㄅㄨˋ ㄋㄥˊ ㄧㄣ ㄨㄟˋ ㄨㄞˋ ㄇㄧㄢˋ ㄊㄞˋ ㄔㄠˇ.'"
          :pinyin="'wo3 xiang3 nian4 shu1, dan4 shi4 bu4 neng2 yin1 wei4 wai4 mian4 tai4 chao3.'"
          :translation="'勉強したいのですが、 外がうるさすぎて出来ません。'"
        />
        <br>
        <p>
          ・累
        </p>
        <SentenceFormat
          :sentence="'如果床很硬， 那麼睡覺就很累。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄔㄨㄤˊ ㄏㄣˇ ㄧㄥˋ， ㄋㄚˋ ㄇㄜ˙ ㄕㄨㄟˋ ㄐㄧㄠˋ ㄐㄧㄡˋ ㄏㄣˇ ㄌㄟˋ.'"
          :pinyin="'ru2 guo3 chuang2 hen3 ying4, na4 me shui4 jiao4 jiu4 hen3 lei4.'"
          :translation="'ベッドが硬いと、 寝ているだけでも疲れます。'"
        />
        <br>
        <p>
          ・語言中心
        </p>
        <SentenceFormat
          :sentence="'我計畫到語言中心， 找人跟我交換語言。'"
          :bopomofo="'ㄨㄛˇ ㄐㄧˋ ㄏㄨㄚˋ ㄉㄠˋ ㄩˇ ㄧㄢˊ ㄓㄨㄥ ㄒㄧㄣ， ㄓㄠˇ ㄖㄣˊ ㄍㄣ ㄨㄛˇ ㄐㄧㄠ ㄏㄨㄢˋ ㄩˇ ㄧㄢˊ.'"
          :pinyin="'wo3 ji4 hua4 dao4 yu3 yan2 zhong1 xin1, zhao3 ren2 gen1 wo3 jiao1 huan4 yu3 yan2.'"
          :translation="'ランゲージセンターに行って、 言語交換の相手を見つけようと思います。'"
        />
        <br>
        <p>
          ・加油
        </p>
        <SentenceFormat
          :sentence="'單詞「加油」不是只是在加油站使用， 還在歡呼什麼人的時候使用。'"
          :bopomofo="'ㄉㄢ ㄘˊ  ㄐㄧㄚ ㄧㄡˊ ㄅㄨˊ ㄕˋ ㄓˇ ㄕˋ ㄗㄞˋ ㄐㄧㄚ ㄧㄡˊ ㄓㄢˋ ㄕˇ ㄩㄥˋ， ㄏㄞˊ ㄗㄞˋ ㄏㄨㄢ ㄏㄨ ㄕㄣˊ ㄇㄜ˙ ㄖㄣˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄕˇ ㄩㄥˋ.'"
          :pinyin="'dan1 ci2 jia1 you2 bu2 shi4 zhi3 shi4 zai4 jia1 you2 zhan4 shi3 yong4, hai2 za4i huan1 hu1 shen2 me ren2 de shi2 hou4 shi3 yong4.'"
          :translation="'「加油」という言葉はガソリンスタンドでだけでなく、 誰かを応援するときにも使われます。'"
        />
        <br>
        <p>
          ・工作
        </p>
        <SentenceFormat
          :sentence="'工作的重要事是速度和正確。'"
          :bopomofo="'ㄍㄨㄥ ㄗㄨㄛˋ ㄉㄜ˙ ㄓㄨㄥˋ ㄧㄠˋ ㄕˋ ㄕˋ ㄙㄨˋ ㄉㄨˋ ㄏㄢˋ ㄓㄥˋ ㄑㄩㄝˋ.'"
          :pinyin="'gong1 zuo1 de zhong4 yao4 shi4 shi4 su4 du4 han4 zheng4 que4.'"
          :translation="'仕事で重要なことはスピードと正確さです。'"
        />
        <br>
        <p>
          ・去年
        </p>
        <SentenceFormat
          :sentence="'直到去年， 這條路都沒有路燈。'"
          :bopomofo="'ㄓˊ ㄉㄠˋ ㄑㄩˋ ㄋㄧㄢˊ， ㄓㄜˋ ㄊㄧㄠˊ ㄌㄨˋ ㄉㄡ ㄇㄟˊ ㄧㄡˇ ㄌㄨˋ ㄉㄥ.'"
          :pinyin="'zhi2 dao4 qu4 nian2, zhe4 tiao2 lu4 dou1 mei2 you3 lu4 deng1.'"
          :translation="'昨年まで、 この道路には街灯がありませんでした。'"
        />
        <br>
        <p>
          ・做
        </p>
        <SentenceFormat
          :sentence="'為了進去那棟大樓, 要做檢查。'"
          :bopomofo="'ㄨㄟˋ ㄌㄜ˙ ㄐㄧㄣˋ ㄑㄩˋ ㄋㄚˋ ㄉㄨㄥˋ ㄉㄚˋ ㄌㄡˊ, ㄧㄠˋ ㄗㄨㄛˋ ㄐㄧㄢˇ ㄔㄚˊ.'"
          :pinyin="'wei4 le jin4 qu4 na4 dong4 da4 lou2, yao4 zuo4 jian3 cha2.'"
          :translation="'その建物に入るには、 検査が必要です。'"
        />
        <br>
        <p>
          ・生意
        </p>
        <SentenceFormat
          :sentence="'為了在台灣做生意, 我們從什麼開始?'"
          :bopomofo="'ㄨㄟˋ ㄌㄜ˙ ㄗㄞˋ ㄊㄞˊ ㄨㄢ ㄗㄨㄛˋ ㄕㄥ ㄧˋ, ㄨㄛˇ ㄇㄣ˙ ㄨㄥˊ ㄕㄣˊ ㄇㄜ˙ ㄎㄞ ㄕˇ?'"
          :pinyin="'wei4 le zai4 tai2 wan1 zuo4 sheng1 yi4, wo3 men cong2 shen2 me kai1 shi3?'"
          :translation="'台湾でビジネスをするためには、 何から始めれ婆いいですか?'"
        />
        <br>
        <p>
          ・以後
        </p>
        <SentenceFormat
          :sentence="'洗完碗以後, 你可不可以幫我倒垃圾?'"
          :bopomofo="'ㄒㄧˇ ㄨㄢˊ ㄨㄢˇ ㄧˇ ㄏㄡˋ, ㄋㄧˇ ㄎㄜˇ ㄅㄨˋ ㄎㄜˇ ㄧˇ ㄅㄤ ㄨㄛˇ ㄉㄠˋ ㄌㄜˋ ㄙㄜˋ?'"
          :pinyin="'xi3 wan2 wan3 yi3 hou4, ni3 ke3 bu4 ke3 yi3 bang1 wo3 dao3 le4 se4?'"
          :translation="'お皿を洗った後、 ゴミ出しを手伝ってもらえますか?'"
        />
        <br>
        <p>
          ・好
        </p>
        <SentenceFormat
          :sentence="'條件很好， 所以我訂了一份新的手機計劃。'"
          :bopomofo="'ㄊㄧㄠˊ ㄐㄧㄢˋ ㄏㄣˇ ㄏㄠˇ， ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄉㄧㄥˋ ㄌㄜ˙ ㄧ ㄈㄣˋ ㄒㄧㄣ ㄉㄜ˙ ㄕㄡˇ ㄐㄧ ㄐㄧˋ ㄏㄨㄚˋ.'"
          :pinyin="'tiao2 jian4 hen3 hao3, suo3 yi3 wo3 ding4 le yi1 fen4 xin1 de shou3 ji1 ji4 hua4.'"
          :translation="'条件が良いので、 新しい携帯電話のプランを契約しました。'"
        />
        <br>
        <p>
          ・找
        </p>
        <SentenceFormat
          :sentence="'除了主要業務， 我正在找打工。'"
          :bopomofo="'ㄔㄨˊ ㄌㄜ˙ ㄓㄨˇ ㄧㄠˋ ㄧㄝˋ ㄨˋ， ㄨㄛˇ ㄓㄥˋ ㄗㄞˋ ㄓㄠˇ ㄉㄚˇ ㄍㄨㄥ.'"
          :pinyin="'chu2 le zhu3 yao4 ye4 wu4, wo3 zheng4 zai4 zhao3 da3 gong1.'"
          :translation="'本業に加えて、 パートタイムの仕事を探しています。'"
        />
        <br>
        <p>
          ・工作
        </p>
        <SentenceFormat
          :sentence="'我要求工作的條件是我可以自由放假。'"
          :bopomofo="'ㄨㄛˇ ㄧㄠˋ ㄑㄧㄡˊ ㄍㄨㄥ ㄗㄨㄛˋ ㄉㄜ˙ ㄊㄧㄠˊ ㄐㄧㄢˋ ㄕˋ ㄨㄛˇ ㄎㄜˇ ㄧ ㄗˋ ㄧㄡˊ ㄈㄤˋ ㄐㄧㄚˋ.'"
          :pinyin="'wo3 yao4 qiu2 gong1 zuo4 de tiao2 jian4 shi4 wo3 ke3 yi3 zi4 you2 fang4 jia4.'"
          :translation="'私が仕事に求める条件は、 休みが自由に取れるという事です。'"
        />
        <br>
        <p>
          ・這樣
        </p>
        <SentenceFormat
          :sentence="'地球是平坦的， 以前有這樣的主意。'"
          :bopomofo="'ㄉㄧˋ ㄑㄧㄡˊ ㄕˋ ㄆㄧㄥˊ ㄊㄢˇ ㄉㄜ˙， ㄧˇ ㄑㄧㄢˊ ㄧㄡˇ ㄓㄜˋ ㄧㄤˋ ㄉㄜ˙ ㄓㄨˇ ㄧˋ.'"
          :pinyin="'di4 qiu2 shi4 ping2 tan3 de, yi3 qian2 you3 zhe4 yang4 de zhu3 yi4.'"
          :translation="'地球は平ら、 以前はそのような考え方がありました。'"
        />
        <br>
        <p>
          ・國家
        </p>
        <SentenceFormat
          :sentence="'國家之間的問題不應該影響國民。'"
          :bopomofo="'ㄍㄨㄛˊ ㄐㄧㄚ ㄓ ㄐㄧㄢ ㄉㄜ˙ ㄨㄣˋ ㄊㄧˊ ㄅㄨˋ ㄧㄥ ㄍㄞ ㄧㄥˇ ㄒㄧㄤˇ ㄍㄨㄛˊ ㄇㄧㄣˊ.'"
          :pinyin="'guo2 jia1 zhi1 jian1 de wen4 ti2 bu4 ying1 gai1 ying3 xiang3 guo2 min2.'"
          :translation="'国同士の問題は国民に影響を及ぼすべきではありません。'"
        />
        <br>
        <p>
          ・試
        </p>
        <SentenceFormat
          :sentence="'你買汽車的時候, 你因該試開車。'"
          :bopomofo="'ㄋㄧˇ ㄇㄞˇ ㄑㄧˋ ㄔㄜ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄋㄧˇ ㄧㄣ ㄍㄞ ㄕˋ ㄎㄞ ㄔㄜ.'"
          :pinyin="'ni3 mai3 qi4 che1 de shi2 hou4, ni3 yin1 gai1 shi4 kai1 che1.'"
          :translation="'車を買うときは、 試乗してみるべきです。'"
        />
        <br>
        <p>
          ・難
        </p>
        <SentenceFormat
          :sentence="'你可以在網路上查找難的問題的答案。'"
          :bopomofo="'ㄋㄧˇ ㄎㄜˇ ㄧˇ ㄗㄞˋ ㄨㄤˇ ㄌㄨˋ ㄕㄤˋ ㄔㄚˊ ㄓㄠˇ ㄋㄢˊ ㄉㄜ˙ ㄨㄣˋ ㄊㄧˊ ㄉㄜ˙ ㄉㄚˊ ㄢˋ.'"
          :pinyin="'ni3 ke3 yi3 zai4 wang3 lu4 shang4 cha2 zhao3 nan2 de wen4 ti2 de da2 an4.'"
          :translation="'難しい問題は、 インターネットで答えを調べてもいいですよ。'"
        />
        <br>
        <p>
          ・那麼
        </p>
        <SentenceFormat
          :sentence="'我不想再去那麼無聊的地方。'"
          :bopomofo="'ㄨㄛˇ ㄅㄨˋ ㄒㄧㄤˇ ㄗㄞˋ ㄑㄩˋ ㄋㄚˋ ㄇㄜ˙ ㄨˊ ㄌㄧㄠˊ ㄉㄜ˙ ㄉㄧˋ ㄈㄤ.'"
          :pinyin="'wo3 bu4 xiang3 zai4 qu4 na4 me wu2 liao2 de di4 fang1.'"
          :translation="'そんなつまらないところにはもう行きたくないです。'"
        />
        <br>
        <p>
          ・再
        </p>
        <SentenceFormat
          :sentence="'如果失敗, 你可以再試一次。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄕ ㄅㄞˋ, ㄋㄧˇ ㄎㄜˇ ㄧˇ ㄗㄞˋ ㄕˋ ㄧ ㄘˋ.'"
          :pinyin="'ru2 guo3 shi1 bai4, ni3 ke3 yi3 zai4 shi4 yi1 ci4.'"
          :translation="'失敗した場合は、 もう一度やってみる事ができます。'"
        />
        <br>
        <p>
          ・試試看
        </p>
        <SentenceFormat
          :sentence="'我不知道是否可以做到， 我先試試看。'"
          :bopomofo="'ㄨㄛˇ ㄅㄨˋ ㄓ ㄉㄠˋ ㄕˋ ㄈㄡˇ ㄎㄜˇ ㄧˇ ㄗㄨㄛˋ ㄉㄠˋ， ㄨㄛˇ ㄒㄧㄢ ㄕˋ ㄕˋ ㄎㄢˋ.'"
          :pinyin="'wo3 bu4 zhi1 dao4 shi4 fou3 ke3 yi3 zuo4 dao4, wo3 xian1 shi4 shi4 kan4.'"
          :translation="'出来るかどうかわかりませんが、 まずやってみます。'"
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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第12章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第12章で登場する新単語を使った例文や気づいた事など' }
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
