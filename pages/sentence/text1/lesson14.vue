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
          當代中文課程課1・第14章
        </h1>
        <p>
          【新単語+例文】
        </p>
        <p>
          ・天氣
        </p>
        <SentenceFormat
          :sentence="'根據天氣我選擇衣服。'"
          :bopomofo="'ㄍㄣ ㄐㄩˋ ㄊㄧㄢ ㄑㄧˋ ㄨㄛˇ ㄒㄩㄢˇ ㄗㄜˊ ㄧ ㄈㄨˊ.'"
          :pinyin="'gen1 ju4 tian1 qi4 wo3 xuan3 ze2 yi1 fu2.'"
          :translation="'私は天気に合わせて服を選びます。'"
        />
        <br>
        <p>
          ・冷
        </p>
        <SentenceFormat
          :sentence="'雖然台灣差不多暖和, 冬天也有冷的日子。'"
          :bopomofo="'ㄙㄨㄟ ㄖㄢˊ ㄊㄞˊ ㄨㄢ ㄔㄚˋ ㄅㄨˋ ㄉㄨㄛ ㄋㄨㄢˇ ㄏㄨㄛ˙, ㄉㄨㄥ ㄊㄧㄢ ㄧㄡˇ ㄌㄥˇ ㄉㄜ˙ ㄖˋ ㄗ˙.'"
          :pinyin="'sui1 ran2 tai2 wan1 cha1 bu4 duo1 nuan3 huo, dong1 tian1 you3 leng3 de ri4 zi3.'"
          :translation="'台湾は大体暖かいですが、 冬は寒い日もあります。'"
        />
        <br>
        <p>
          ・風
        </p>
        <SentenceFormat
          :sentence="'因為風太大, 我的洗衣服飛掉了。'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄈㄥ ㄊㄞˋ ㄉㄚˋ, ㄨㄛˇ ㄉㄜ˙ ㄒㄧˇ ㄧ ㄈㄨˊ ㄈㄟ ㄉㄧㄠˋ ㄌㄜ˙.'"
          :pinyin="'yin1 wei4 feng1 tai4 da4, wo3 de xi3 yi1 fu2 fei1 diao4 le.'"
          :translation="'風が強すぎて、 洗濯物が飛んでしまいました。'"
        />
        <br>
        <p>
          ・滑雪
        </p>
        <SentenceFormat
          :sentence="'滑雪的時候我跌倒了受傷了。'"
          :bopomofo="'ㄏㄨㄚˊ ㄒㄩㄝˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄨㄛˇ ㄉㄧㄝ ㄉㄠˇ ㄌㄜ˙ ㄕㄡˋ ㄕㄤ ㄌㄜ˙.'"
          :pinyin="'hua2 xue3 de shi2 hou4 wo3 die1 dao3 le shou4 shang1 le.'"
          :translation="'スキー中に転んで怪我をしました。'"
        />
        <br>
        <p>
          ・春天
        </p>
        <SentenceFormat
          :sentence="'很多花春天在山上開。'"
          :bopomofo="'ㄏㄣˇ ㄉㄨㄛ ㄏㄨㄚ ㄔㄨㄣ ㄊㄧㄢ ㄗㄞˋ ㄕㄢ ㄕㄤˋ ㄎㄞ.'"
          :pinyin="'hen3 duo1 hua1 chun1 tian1 zai4 shan1 shang4 kai1.'"
          :translation="'春は山にたくさんの花が咲きます。'"
        />
        <br>
        <p>
          ・想
        </p>
        <SentenceFormat
          :sentence="'去長旅行的時候, 我想了在家我的貓。'"
          :bopomofo="'ㄑㄩˋ ㄔㄤˊ ㄌㄩˇ ㄒㄧㄥˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄨㄛˇ ㄒㄧㄤˇ ㄌㄜ˙ ㄗㄞˋ ㄐㄧㄚ ㄨㄛˇ ㄉㄜ˙ ㄇㄠ.'"
          :pinyin="'qu4 chang2 lu3 xing2 de shi2 hou4, wo3 xiang3 le zai4 jia1 wo3 de mao1.'"
          :translation="'長い旅行に出た時は、 家にいる猫が恋しかったです。'"
        />
        <br>
        <p>
          ・新年
        </p>
        <SentenceFormat
          :sentence="'為了新年做準備, 這個星期會忙了。'"
          :bopomofo="'ㄨㄟˋ ㄌㄜ˙ ㄒㄧㄣ ㄋㄧㄢˊ ㄗㄨㄛˋ ㄓㄨㄣˇ ㄅㄟˋ, ㄓㄜˋ ㄍㄜˋ ㄒㄧㄥ ㄑㄧ ㄏㄨㄟˋ ㄇㄤˊ ㄌㄜ˙.'"
          :pinyin="'wei4 le xin1 nian2 zuo4 zhun3 bei4, zhe4 ge4 xing1 qi1 hui4 mang2 le.'"
          :translation="'新年の準備のため、 今週は忙しくなります。'"
        />
        <br>
        <p>
          ・快
        </p>
        <SentenceFormat
          :sentence="'熱的季節快來到, 我得確認冷氣好不好。'"
          :bopomofo="'ㄖㄜˋ ㄉㄜ˙ ㄐㄧˋ ㄐㄧㄝˊ ㄎㄨㄞˋ ㄌㄞˊ ㄉㄠˋ, ㄨㄛˇ ㄉㄟˇ ㄑㄩㄝˋ ㄖㄣˋ ㄌㄥˇ ㄑㄧˋ ㄏㄠˇ ㄅㄨˋ ㄏㄠˇ.'"
          :pinyin="'re4 de ji4 jie2 kuai4 lai2 dao4, wo3 dei3 que4 ren4 leng3 qi4 hao3 bu4 hao3.'"
          :translation="'暑い季節がもうすぐ来るので、 エアコンが大丈夫か確認しなければなりません。'"
        />
        <br>
        <p>
          ・父母
        </p>
        <SentenceFormat
          :sentence="'我父母因為無聊的事在吵架。'"
          :bopomofo="'ㄨㄛˇ ㄈㄨˋ ㄇㄨˇ ㄧㄣ ㄨㄟˋ ㄨˊ ㄌㄧㄠˊ ㄉㄜ˙ ㄕˋ ㄗㄞˋ ㄔㄠˇ ㄐㄧㄚˋ.'"
          :pinyin="'wo3 fu4 mu3 yin1 wei4 wu2 liao2 de shi4 zai4 chao3 jia4.'"
          :translation="'両親がつまらない事で喧嘩しています。'"
        />
        <br>
        <p>
          ・冬天
        </p>
        <SentenceFormat
          :sentence="'冬天很乾燥, 我們買加濕器吧。'"
          :bopomofo="'ㄉㄨㄥ ㄊㄧㄢ ㄏㄣˇ ㄍㄢ ㄗㄠˋ, ㄨㄛˇ ㄇㄣ˙ ㄇㄞˇ ㄐㄧㄚ ㄕ ㄑㄧˋ ㄅㄚ˙.'"
          :pinyin="'dong1 tian1 hen3 gan2 zao4, wo3 men mai3 jia1 shi1 qi4 ba.'"
          :translation="'冬はとても乾燥するので、 加湿器を買いましょう。'"
        />
        <br>
        <p>
          ・明年
        </p>
        <SentenceFormat
          :sentence="'你明年的目標是什麼?'"
          :bopomofo="'ㄋㄧˇ ㄇㄧㄥˊ ㄋㄧㄢˊ ㄉㄜ˙ ㄇㄨˋ ㄅㄧㄠ ㄕˋ ㄕㄣˊ ㄇㄜ˙?'"
          :pinyin="'ni3 ming2 nian2 de mu4 biao1 shi4 shen2 me?'"
          :translation="'来年のあなたの目標は何ですか?'"
        />
        <br>
        <p>
          ・秋天
        </p>
        <SentenceFormat
          :sentence="'聽說秋天的鮭魚又肥又好吃。'"
          :bopomofo="'ㄊㄧㄥ ㄕㄨㄛ ㄑㄧㄡ ㄊㄧㄢ ㄉㄜ˙ ㄍㄨㄟ ㄩˊ ㄧㄡˋ ㄈㄟˊ ㄧㄡˋ ㄏㄠˇ ㄔ.'"
          :pinyin="'ting1 shuo1 qiu1 tian1 de gui1 yu2 you4 fei2 you4 hao3 chi1.'"
          :translation="'秋の鮭は脂がのっていて美味しいと聞きました。'"
        />
        <br>
        <p>
          ・紅葉
        </p>
        <SentenceFormat
          :sentence="'不太遠的地方之中, 在哪裡可以看到紅葉?'"
          :bopomofo="'ㄅㄨˋ ㄊㄞˋ ㄩㄢˇ ㄉㄜ˙ ㄉㄧˋ ㄈㄤ ㄓ ㄓㄨㄥ, ㄗㄞˋ ㄋㄚˇ ㄌㄧˇ ㄎㄜˇ ㄧˇ ㄎㄢˋ ㄉㄠˋ ㄏㄨㄥˊ ㄧㄝˋ?'"
          :pinyin="'bu4 tai4 yuan3 de di4 fang1 zhi1 zhong1, zai4 na3 li3 ke3 yi3 kan4 dao4 hong2 ye4?'"
          :translation="'それほど遠くない場所だと、 どこで紅葉を見る事ができますか?'"
        />
        <br>
        <p>
          ・只
        </p>
        <SentenceFormat
          :sentence="'因為我不早起來, 只要吃午餐和晚餐。'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄨㄛˇ ㄅㄨˋ ㄗㄠˇ ㄑㄧˇ ㄌㄞˊ, ㄓˇ ㄧㄠˋ ㄔ ㄨˇ ㄘㄢ ㄏㄢˋ ㄨㄢˇ ㄘㄢ.'"
          :pinyin="'yin1 wei4 wo3 bu4 zao3 qi3 lai2, zhi3 yao4 chi1 wu3 can1 han4 wan3 can1.'"
          :translation="'早く起きないので、 ランチと夕食だけで食べます。'"
        />
        <br>
        <p>
          ・玉山
        </p>
        <SentenceFormat
          :sentence="'玉山是台灣的最高山, 夏天很多人去爬山。'"
          :bopomofo="'ㄩˋ ㄕㄢ ㄕˋ ㄊㄞˊ ㄨㄢ ㄉㄜ˙ ㄗㄨㄟˋ ㄍㄠ ㄕㄢ, ㄒㄧㄚˋ ㄊㄧㄢ ㄏㄣˇ ㄉㄨㄛ ㄖㄣˊ ㄑㄩˋ ㄆㄚˊ ㄕㄢ.'"
          :pinyin="'yu4 shan1 shi4 tai2 wan1 de zui4 gao1 shan1, xia4 tian1 hen3 duo1 ren2 qu4 pa2 shan1.'"
          :translation="'玉山は台湾で最も高い山で、夏には多くの人が登山します。'"
        />
        <br>
        <p>
          ・紐約
        </p>
        <SentenceFormat
          :sentence="'在紐約，雪在堆積到腰部的高度。'"
          :bopomofo="'ㄗㄞˋ ㄋㄧㄡˇ ㄩㄝ，ㄒㄩㄝˇ ㄗㄞˋ ㄉㄨㄟ ㄐㄧ ㄉㄠˋ ㄧㄠ ㄅㄨˋ ㄉㄜ˙ ㄍㄠ ㄉㄨˋ.'"
          :pinyin="'zai4 niu3 yue1, xue3 zai4 dui1 ji1 dao4 yao1 bu4 de gao1 du4.'"
          :translation="'ニューヨークでは、 腰の高さまで雪が積もっています。'"
        />
        <br>
        <p>
          ・下雪
        </p>
        <SentenceFormat
          :sentence="'下三天雪後，村變了真白色。'"
          :bopomofo="'ㄒㄧㄚˋ ㄙㄢ ㄊㄧㄢ ㄒㄩㄝˇ ㄏㄡˋ，ㄘㄨㄣ ㄅㄧㄢˋ ㄌㄜ˙ ㄓㄣ ㄅㄞˊ ㄙㄜˋ.'"
          :pinyin="'xia4 san1 tian1 xue3 hou4, cun1 bian4 le zhen1 bai2 se4.'"
          :translation="'3日間の雪の後、村は真っ白になりました。'"
        />
        <br>
        <p>
          ・十二月底
        </p>
        <SentenceFormat
          :sentence="'我到十二月底一定付學費。'"
          :bopomofo="'ㄨㄛˇ ㄉㄠˋ ㄕˊ ㄦˋ ㄩㄝˋ ㄉㄧˇ ㄧˊ ㄉㄧㄥˋ ㄈㄨˋ ㄒㄩㄝˊ ㄈㄟˋ.'"
          :pinyin="'wo3 dao4 shi2 er4 yue4 di3 yi1 ding4 fu4 xue2 fei4.'"
          :translation="'授業料は12月末までに必ず払います。'"
        />
        <br>
        <p>
          ・雨
        </p>
        <SentenceFormat
          :sentence="'如果在雨中弄濕，會感冒。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄗㄞˋ ㄩˇ ㄓㄨㄥ ㄋㄨㄥˋ ㄕ，ㄏㄨㄟˋ ㄍㄢˇ ㄇㄠˋ.'"
          :pinyin="'ru2 guo3 zai4 yu3 zhong1 nong4 shi1, hui4 gan3 mao4.'"
          :translation="'雨に濡れると風邪をひきます。'"
        />
        <br>
        <p>
          ・傘
        </p>
        <SentenceFormat
          :sentence="'這傘可以用作普通傘也可以用作太陽傘。'"
          :bopomofo="'ㄓㄜˋ ㄙㄢˇ ㄎㄜˇ ㄧˇ ㄩㄥˋ ㄗㄨㄛˋ ㄆㄨˇ ㄊㄨㄥ ㄙㄢˇ ㄧㄝˇ ㄎㄜˇ ㄧˇ ㄩㄥˋ ㄗㄨㄛˋ ㄊㄞˋ ㄧㄤˊ ㄙㄢˇ.'"
          :pinyin="'zhe4 san3 ke3 yi3 yong4 zuo4 pu3 tong1 san3 ye3 ke3 yi3 yong4 zuo4 tai4 yang2 san3.'"
          :translation="'この傘は、 普通の傘としても日傘としても使えます。'"
        />
        <br>
        <p>
          ・颱風
        </p>
        <SentenceFormat
          :sentence="'我確認颱風預報後，會答案我是否去。'"
          :bopomofo="'ㄨㄛˇ ㄑㄩㄝˋ ㄖㄣˋ ㄊㄞˊ ㄈㄥ ㄩˋ ㄅㄠˋ ㄏㄡˋ，ㄏㄨㄟˋ ㄉㄚˊ ㄢˋ ㄨㄛˇ ㄕˋ ㄈㄡˇ ㄑㄩˋ.'"
          :pinyin="'wo3 que4 ren4 tai2 feng1 yu4 bao4 hou4, hui4 da2 an4 wo3 shi4 fou3 qu4.'"
          :translation="'台風予報を確認した後、 行くかどうか返事します。'"
        />
        <br>
        <p>
          ・要
        </p>
        <SentenceFormat
          :sentence="'如果下雨，我不要走路去。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄒㄧㄚˋ ㄩˇ，ㄨㄛˇ ㄅㄨˊ ㄧㄠˋ ㄗㄡˇ ㄌㄨˋ ㄑㄩˋ.'"
          :pinyin="'ru2 guo3 xia4 yu3, wo3 bu2 yao4 zou3 lu4 qu4.'"
          :translation="'雨が降ったら、 歩きでは行きません。'"
        />
        <br>
        <p>
          ・夏天
        </p>
        <SentenceFormat
          :sentence="'夏天去離島的旅行很人氣。'"
          :bopomofo="'ㄒㄧㄚˋ ㄊㄧㄢ ㄑㄩˋ ㄌㄧˊ ㄉㄠˇ ㄉㄜ˙ ㄌㄩˇ ㄒㄧㄥˊ ㄏㄣˇ ㄖㄣˊ ㄑㄧˋ.'"
          :pinyin="'xia4 tian1 qu4 li4 dao3 de lu3 xing2 hen3 ren2 qi4.'"
          :translation="'夏は離島への旅行が人気です。'"
        />
        <br>
        <p>
          ・濕
        </p>
        <SentenceFormat
          :sentence="'好像誰灑了水, 地上濕濕的。'"
          :bopomofo="'ㄏㄠˇ ㄒㄧㄤˋ ㄕㄨㄟˊ ㄙㄚˇ ㄌㄜ˙ ㄕㄨㄟˇ, ㄉㄧˋ ㄕㄤˋ ㄕ ㄕ ㄉㄜ˙.'"
          :pinyin="'hao3 xiang4 shei2 xian3 le shui3, di4 shang4 shi1 shi1 de.'"
          :translation="'誰かが水をこぼしたようで、 地面が濡れています。'"
        />
        <br>
        <p>
          ・討厭
        </p>
        <SentenceFormat
          :sentence="'她真的討厭蟲，所以甚至看不到它們。'"
          :bopomofo="'ㄊㄚ ㄓㄣ ㄉㄜ˙ ㄊㄠˇ ㄧㄢˋ ㄔㄨㄥˊ，ㄙㄨㄛˇ ㄧˇ ㄕㄣˋ ㄓˋ ㄎㄢˋ ㄅㄨˊ ㄉㄠˋ ㄊㄚ ㄇㄣ˙.'"
          :pinyin="'ta1 zhen1 de tao3 yan4 chong2, suo3 yi3 shen4 zhi4 kan4 bu2 dao4 ta1 men.'"
          :translation="'彼女は本当に虫が嫌いなので、 見るのも無理です。'"
        />
        <br>
        <p>
          ・新聞
        </p>
        <SentenceFormat
          :sentence="'早上我習慣一邊看電視新聞一邊吃早飯。'"
          :bopomofo="'ㄗㄠˇ ㄕㄤˋ ㄨㄛˇ ㄒㄧˊ ㄍㄨㄢˋ ㄧ ㄅㄧㄢ ㄎㄢˋ ㄉㄧㄢˋ ㄕˋ ㄒㄧㄣ ㄨㄣˊ ㄧ ㄅㄧㄢ ㄔ ㄗㄠˇ ㄈㄢˋ.'"
          :pinyin="'zao3 shang4 wo3 xi2 guan4 yi1 bian1 kan4 dian4 shi4 xin1 wen2 yi1 bian1 chi1 zao3 fan4.'"
          :translation="'朝はテレビのニュースを見ながら朝食をとるのに慣れています。'"
        />
        <br>
        <p>
          ・更
        </p>
        <SentenceFormat
          :sentence="'我告訴了他打掃，但現在房間更乱。'"
          :bopomofo="'ㄨㄛˇ ㄍㄠˋ ㄙㄨˋ ㄌㄜ˙ ㄊㄚ ㄉㄚˇ ㄙㄠˇ，ㄉㄢˋ ㄒㄧㄢˋ ㄗㄞˋ ㄈㄤˊ ㄐㄧㄢ ㄍㄥˋ ㄌㄨㄢˋ.'"
          :pinyin="'wo3 gao4 su4 le ta1 da3 sao3, dan4 xian4 zai4 fang2 jian1 geng4 luan4.'"
          :translation="'彼に片付けるように言ったのに、 部屋は更に散らかっています。'"
        />
        <br>
        <p>
          ・大家
        </p>
        <SentenceFormat
          :sentence="'在捷運裡大家都用著手機。'"
          :bopomofo="'ㄗㄞˋ ㄐㄧㄝˊ ㄩㄣˋ ㄌㄧˇ ㄉㄚˋ ㄐㄧㄚ ㄉㄡ ㄩㄥˋ ㄓㄨㄛˊ ㄕㄡˇ ㄐㄧ.'"
          :pinyin="'zai4 jie2 yun4 li3 da4 jia1 dou1 yong4 zhe shou3 ji1.'"
          :translation="'MRTの中では誰もが携帯電話を触っています。'"
        />
        <br>
        <p>
          ・小心
        </p>
        <SentenceFormat
          :sentence="'和火車之間有縫隙, 別不小心落掉東西。'"
          :bopomofo="'ㄏㄢˋ ㄏㄨㄛˇ ㄔㄜ ㄓ ㄐㄧㄢ ㄧㄡˇ ㄈㄥˋ ㄒㄧˋ, ㄅㄧㄝˊ ㄅㄨˋ ㄒㄧㄠˇ ㄒㄧㄣ ㄌㄨㄛˋ ㄉㄧㄠˋ ㄉㄨㄥ ㄒㄧ˙.'"
          :pinyin="'han4 huo3 che1 zhi1 jian1 you3 feng4 xi4, bie2 bu4 xiao3 xin1 luo4 diao4 dong1 xi.'"
          :translation="'電車との間には隙間があるので、 誤って物を落とさないでください。'"
        />
        <br>
        <p>
          ・可怕
        </p>
        <SentenceFormat
          :sentence="'大狗吠吠的樣子很可怕。'"
          :bopomofo="'ㄉㄚˋ ㄍㄡˇ ㄈㄟˋ ㄈㄟˋ ㄉㄜ˙ ㄧㄤˋ ㄗ˙ ㄏㄣˇ ㄎㄜˇ ㄆㄚˋ.'"
          :pinyin="'da4 gou3 fei4 fei4 de yang4 zi3 hen3 ke3 pa4.'"
          :translation="'大きな犬が吠えているのは怖いです。'"
        />
        <br>
        <p>
          ・停
        </p>
        <SentenceFormat
          :sentence="'我家前面施工的聲音突然停了。'"
          :bopomofo="'ㄨㄛˇ ㄐㄧㄚ ㄑㄧㄢˊ ㄇㄧㄢˋ ㄕ ㄍㄨㄥ ㄉㄜ˙ ㄕㄥ ㄧㄣ ㄊㄨ ㄖㄢˊ ㄊㄧㄥˊ ㄌㄜ˙.'"
          :pinyin="'wo3 jia1 qian2 mian4 shi1 gong1 de sheng1 yin1 tu1 ran2 ting2 le.'"
          :translation="'家の前の工事の音が突然止まりました。'"
        />
        <br>
        <p>
          ・下雨
        </p>
        <SentenceFormat
          :sentence="'下雨下得很大, 可能是因為低氣壓。'"
          :bopomofo="'ㄒㄧㄚˋ ㄩˇ ㄒㄧㄚˋ ㄉㄜ˙ ㄏㄣˇ ㄉㄚˋ, ㄎㄜˇ ㄋㄥˊ ㄕˋ ㄧㄣ ㄨㄟˋ ㄉㄧ ㄑㄧˋ ㄧㄚ.'"
          :pinyin="'xia4 yu3 xia4 de hen3 da4, ke3 neng2 shi4 yin1 wei4 di1 qi4 ya1.'"
          :translation="'大雨が降っているのは、 おそらく低気圧のせいです。'"
        />
        <br>
        <p>
          ・這次
        </p>
        <SentenceFormat
          :sentence="'這家百貨公司這次的折扣是最棒的。'"
          :bopomofo="'ㄓㄜˋ ㄐㄧㄚ ㄅㄞˇ ㄏㄨㄛˋ ㄍㄨㄥ ㄙ ㄓㄜˋ ㄘˋ ㄉㄜ˙ ㄓㄜˊ ㄎㄡˋ ㄕˋ ㄗㄨㄟˋ ㄅㄤˋ ㄉㄜ˙.'"
          :pinyin="'zhe4 jia1 bai3 huo4 gong1 si1 zhe4 ci4 de zhe2 kou4 shi4 zui4 bang4 de.'"
          :translation="'このデパートの今回のセールは最高です。'"
        />
        <br>
        <p>
          ・上次
        </p>
        <SentenceFormat
          :sentence="'上次他來的時候, 他走錯了路。'"
          :bopomofo="'ㄕㄤˋ ㄘˋ ㄊㄚ ㄌㄞˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄊㄚ ㄗㄡˇ ㄘㄨㄛˋ ㄌㄜ˙ ㄌㄨˋ.'"
          :pinyin="'shang4 ci4 ta1 lai2 de shi2 hou4, ta1 zou3 cuo4 le lu4.'"
          :translation="'前回来た時、 彼は道を間違えました。'"
        />
        <br>
        <p>
          ・慢走
        </p>
        <SentenceFormat
          :sentence="'大家因該會來晚，我覺得我們可以少一點慢走。'"
          :bopomofo="'ㄉㄚˋ ㄐㄧㄚ ㄧㄣ ㄍㄞ ㄏㄨㄟˋ ㄌㄞˊ ㄨㄢˇ，ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄨㄛˇ ㄇㄣ˙ ㄎㄜˇ ㄧˇ ㄕㄠˇ ㄧˋ ㄉㄧㄢˇ ㄇㄢˋ ㄗㄡˇ.'"
          :pinyin="'da4 jia1 yin1 ga1i hui4 lai2 wan3, wo3 jue2 de wo3 men ke3 yi3 shao3 yi1 dian3 man4 zou3.'"
          :translation="'みんな遅く来るだろうから、 私たちはもう少しゆっくり行っても大丈夫だと思います。'"
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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第14章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第14章で登場する新単語を使った例文や気づいた事など' }
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
