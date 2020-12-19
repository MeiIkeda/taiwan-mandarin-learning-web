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
          當代中文課程課2・第6章
        </h1>
        <p>
          【新単語+例文】
        </p>
        <p>
          ・李東健
        </p>
        <SentenceFormat
          :sentence="'李東健今天不舒服， 所以決定了早一點睡覺。'"
          :bopomofo="'ㄌㄧˇ ㄉㄨㄥ ㄐㄧㄢˋ ㄐㄧㄣ ㄊㄧㄢ ㄅㄨˋ ㄕㄨ ㄈㄨ˙， ㄙㄨㄛˇ ㄧˇ ㄐㄩㄝˊ ㄉㄧㄥˋ ㄌㄜ˙ ㄗㄠˇ ㄧˋ ㄉㄧㄢˇ ㄕㄨㄟˋ ㄐㄧㄠˋ.'"
          :pinyin="'li3 dong1 jian4 jin1 tian1 bu4 shu1 fu, suo3 yi3 jue2 ding4 le zao3 yi1 dian3 shui4 jiao4.'"
          :translation="'李東建は今日体調が悪かったので、 早く寝ることにしました。'"
        />
        <br>
        <p>
          ・搬
        </p>
        <SentenceFormat
          :sentence="'最近員工多了， 我們應該搬辦公室。'"
          :bopomofo="'ㄗㄨㄟˋ ㄐㄧㄣˋ ㄩㄢˊ ㄍㄨㄥ ㄉㄨㄛ ㄌㄜ˙， ㄨㄛˇ ㄇㄣ˙ ㄧㄥ ㄍㄞ ㄅㄢ ㄅㄢˋ ㄍㄨㄥ ㄕˋ.'"
          :pinyin="'zui4 jin4 yuan2 gong1 duo1 le, wo3 men ying1 gai1 ban1 ban4 gong1 shi4.'"
          :translation="'最近は従業員が増えてきたので、 事務所を移転すべきです。'"
        />
        <br>
        <p>
          ・河邊
        </p>
        <SentenceFormat
          :sentence="'因為今天很暖和， 在河邊的龜們都在灑太陽。'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄐㄧㄣ ㄊㄧㄢ ㄏㄣˇ ㄋㄨㄢˇ ㄏㄨㄛ˙， ㄗㄞˋ ㄏㄜˊ ㄅㄧㄢ ㄉㄜ˙ ㄍㄨㄟ ㄇㄣ˙ ㄉㄡ ㄗㄞˋ ㄙㄚˇ ㄊㄞˋ ㄧㄤˊ.'"
          :pinyin="'yin1 wei4 jin1 tian1 hen3 nuan3 huo, zai4 he2 bian1 de gui1 men dou1 zai4 sa3 tai4 yang2.'"
          :translation="'今日は暖かいので、 川べりの亀たちはみんな日向ぼっこしています。'"
        />
        <br>
        <p>
          ・公園
        </p>
        <SentenceFormat
          :sentence="'秋天來了， 在公園樹的葉子變紅色了。'"
          :bopomofo="'ㄑㄧㄡ ㄊㄧㄢ ㄌㄞˊ ㄌㄜ˙， ㄗㄞˋ ㄍㄨㄥ ㄩㄢˊ ㄕㄨˋ ㄉㄜ˙ ㄧㄝˋ ㄗ˙ ㄅㄧㄢˋ ㄏㄨㄥˊ ㄙㄜˋ ㄌㄜ˙.'"
          :pinyin="'qiu1 tian1 lai2 le, zai4 gong1 yuan2 shu4 de ye4 zi3 bian4 hong2 se4 le.'"
          :translation="'秋が来て、 公園では木々の葉っぱが赤くなりました。'"
        />
        <br>
        <p>
          ・腳踏車
        </p>
        <SentenceFormat
          :sentence="'直到變會騎腳踏車， 我摔倒了很多次。'"
          :bopomofo="'ㄓˊ ㄉㄠˋ ㄅㄧㄢˋ ㄏㄨㄟˋ ㄑㄧˊ ㄐㄧㄠˇ ㄊㄚˋ ㄔㄜ， ㄨㄛˇ ㄕㄨㄞ ㄉㄠˇ ㄌㄜ˙ ㄏㄣˇ ㄉㄨㄛ ㄘˋ.'"
          :pinyin="'zhi2 dao4 bian4 hui4 qi2 jiao3 ta4 che1, wo3 shuai1 dao3 le hen3 duo1 ci4.'"
          :translation="'自転車に乗れるようになるまで、 何度も転びました。'"
        />
        <br>
        <p>
          ・正在
        </p>
        <SentenceFormat
          :sentence="'我想他幫忙， 但是他正在迷上玩線上遊戲。'"
          :bopomofo="'ㄨㄛˇ ㄒㄧㄤˇ ㄊㄚ ㄅㄤ ㄇㄤˊ， ㄉㄢˋ ㄕˋ ㄊㄚ ㄓㄥˋ ㄗㄞˋ ㄇㄧˊ ㄕㄤˋ ㄨㄢˊ ㄒㄧㄢˋ ㄕㄤˋ ㄧㄡˊ ㄒㄧˋ.'"
          :pinyin="'wo3 xiang3 ta1 bang1 mang2, dan4 shi4 ta1 zheng4 zai4 mi2 shang4 wan2 xian4 shang4 you2 xi4.'"
          :translation="'手伝ってもらいたいのですが、 彼は今オンラインゲームに夢中になっています。'"
        />
        <br>
        <p>
          ・網站
        </p>
        <SentenceFormat
          :sentence="'為了賣東西他做了一個網站。'"
          :bopomofo="'ㄨㄟˋ ㄌㄜ˙ ㄇㄞˋ ㄉㄨㄥ ㄒㄧ ㄊㄚ ㄗㄨㄛˋ ㄌㄜ˙ ㄧˊ ㄍㄜˋ ㄨㄤˇ ㄓㄢˋ.'"
          :pinyin="'wei4 le mai4 dong1 xi ta1 zuo4 le yi1 ge4 wang3 zhan4.'"
          :translation="'物を売るために彼はウェブサイトを作りました。'"
        />
        <br>
        <p>
          ・資料
        </p>
        <SentenceFormat
          :sentence="'紙質資料太多了， 我想將它們數字化。'"
          :bopomofo="'ㄓˇ ㄓˋ ㄗ ㄌㄧㄠˋ ㄊㄞˋ ㄉㄨㄛ ㄌㄜ˙， ㄨㄛˇ ㄒㄧㄤˇ ㄐㄧㄤ ㄊㄚ ㄇㄣ˙ ㄕㄨˋ ㄗˋ ㄏㄨㄚˋ.'"
          :pinyin="'zhi3 zhi4 zi1 liao4 tai4 duo1 le, wo3 xiang3 jiang1 ta1 men shu4 zi4 hua4.'"
          :translation="'紙の資料が多すぎるので、 デジタル化したいと思っています。'"
        />
        <br>
        <p>
          ・搬家
        </p>
        <SentenceFormat
          :sentence="'你有沒有一個推薦的搬家公司?'"
          :bopomofo="'ㄋㄧˇ ㄧㄡˇ ㄇㄟˊ ㄧㄡˇ ㄧˊ ㄍㄜˋ ㄊㄨㄟ ㄐㄧㄢˋ ㄉㄜ˙ ㄅㄢ ㄐㄧㄚ ㄍㄨㄥ ㄙ?'"
          :pinyin="'ni3 you3 mei2 you3 yi1 ge4 tui1 jian4 de ban1 jia1 gong1 si1?'"
          :translation="'おすすめの引っ越し業者はありますか?'"
        />
        <br>
        <p>
          ・近
        </p>
        <SentenceFormat
          :sentence="'這個物件到動物園很近但到學校遠。'"
          :bopomofo="'ㄓㄜˋ ㄍㄜˋ ㄨˋ ㄐㄧㄢˋ ㄉㄠˋ ㄉㄨㄥˋ ㄨˋ ㄩㄢˊ ㄏㄣˇ ㄐㄧㄣˋ ㄉㄢˋ ㄉㄠˋ ㄒㄩㄝˊ ㄒㄧㄠˋ ㄩㄢˇ.'"
          :pinyin="'zhe4 ge4 wu4 jian4 dao4 do4ng4 wu4 yuan2 hen3 jin4 dan4 dao4 xue2 xiao4 yuan3.'"
          :translation="'この物件は動物園にはすごく近いけど学校からは遠いです。'"
        />
        <br>
        <p>
          ・合約
        </p>
        <SentenceFormat
          :sentence="'到明天， 請你決定是否簽名合約。'"
          :bopomofo="'ㄉㄠˋ ㄇㄧㄥˊ ㄊㄧㄢ， ㄑㄧㄥˇ ㄋㄧˇ ㄐㄩㄝˊ ㄉㄧㄥˋ ㄕˋ ㄈㄡˇ ㄑㄧㄢ ㄇㄧㄥˊ ㄏㄜˊ ㄩㄝ.'"
          :pinyin="'dao4 ming2 tian1, qing3 ni3 jue2 ding4 shi4 fou3 qian1 ming2 he2 yue1.'"
          :translation="'明日までに、 契約にサインするかどうか決めて下さい。'"
        />
        <br>
        <p>
          ・到期
        </p>
        <SentenceFormat
          :sentence="'這個應用程式的免費期間快到期。'"
          :bopomofo="'ㄓㄜˋ ㄍㄜˋ ㄧㄥˋ ㄩㄥˋ ㄔㄥˊ ㄕˋ ㄉㄜ˙ ㄇㄧㄢˇ ㄈㄟˋ ㄑㄧ ㄐㄧㄢ ㄎㄨㄞˋ ㄉㄠˋ ㄑㄧ.'"
          :pinyin="'zhe4 ge4 ying4 yong4 cheng2 shi4 de mian3 fei4 qi1 jian1 kuai4 dao4 qi1.'"
          :translation="'このアプリの無料期間はもうすぐ終了します。'"
        />
        <br>
        <p>
          ・還好
        </p>
        <SentenceFormat
          :sentence="'雖然經濟不好， 還好他的餐廳在市區。'"
          :bopomofo="'ㄙㄨㄟ ㄖㄢˊ ㄐㄧㄥ ㄐㄧˋ ㄅㄨˋ ㄏㄠˇ， ㄏㄞˊ ㄏㄠˇ ㄊㄚ ㄉㄜ˙ ㄘㄢ ㄊㄧㄥ ㄗㄞˋ ㄕˋ ㄑㄩ.'"
          :pinyin="'sui1 ran2 jing1 ji4 bu4 hao3, hai2 hao3 ta1 de can1 ting1 zai4 shi4 qu1.'"
          :translation="'景気は悪いですが、 幸い彼のレストランは市内中心部にあります。'"
        />
        <br>
        <p>
          ・光線
        </p>
        <SentenceFormat
          :sentence="'太陽還沒升起來， 但是在房間的光線足夠讀書。'"
          :bopomofo="'ㄊㄞˋ ㄧㄤˊ ㄏㄞˊ ㄇㄟˊ ㄕㄥ ㄑㄧˇ ㄌㄞˊ， ㄉㄢˋ ㄕˋ ㄗㄞˋ ㄈㄤˊ ㄐㄧㄢ ㄉㄜ˙ ㄍㄨㄤ ㄒㄧㄢˋ ㄗㄨˊ ㄍㄡˋ ㄉㄨˊ ㄕㄨ.'"
          :pinyin="'tai4 yang2 hai2 mei2 sheng1 qi3 lai2, dan4 shi4 zai4 fang2 jian1 de guang1 xian4 zu2 gou4 du2 shu1.'"
          :translation="'まだ太陽は昇っていませんが、 部屋の明かりは読書するには十分です。'"
        />
        <br>
        <p>
          ・重要
        </p>
        <SentenceFormat
          :sentence="'懶惰的人的最重要的事是怎麼不做工作著生活。'"
          :bopomofo="'ㄌㄢˇ ㄉㄨㄛˋ ㄉㄜ˙ ㄖㄣˊ ㄉㄜ˙ ㄗㄨㄟˋ ㄓㄨㄥˋ ㄧㄠˋ ㄉㄜ˙ ㄕˋ ㄕˋ ㄗㄣˇ ㄇㄜ˙ ㄅㄨˊ ㄗㄨㄛˋ ㄍㄨㄥ ㄗㄨㄛˋ ㄓㄜ˙ ㄕㄥ ㄏㄨㄛˊ.'"
          :pinyin="'lan3 duo4 de ren2 de zui4 zhong4 yao4 de shi4 shi4 zen3 me bu2 zuo4 gong1 zuo4 zhe sheng1 huo2.'"
          :translation="'怠け者にとって最も重要な事は、 いかに仕事せずに生活するかです。'"
        />
        <br>
        <p>
          ・如果
        </p>
        <SentenceFormat
          :sentence="'如果外面的溫度變高一點， 我才能去買東西。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄨㄞˋ ㄇㄧㄢˋ ㄉㄧˊ ㄨㄣ ㄉㄨˋ ㄅㄧㄢˋ ㄍㄠ ㄧˋ ㄉㄧㄢˇ， ㄨㄛˇ ㄘㄞˊ ㄋㄥˊ ㄑㄩˋ ㄇㄞˇ ㄉㄨㄥ ㄒㄧ˙.'"
          :pinyin="'ru2 guo3 wai4 mian4 de wen1 du4 bian4 gao1 yi1 dian3, wo3 cai2 neng2 qu4 mai3 dong1 xi.'"
          :translation="'外の気温がもう少し高くなれば、 買い物に行けるのですが。'"
        />
        <br>
        <p>
          ・別的
        </p>
        <SentenceFormat
          :sentence="'我肯定不想去太冷的地方， 我們選擇別的選擇吧。'"
          :bopomofo="'ㄨㄛˇ ㄎㄣˇ ㄉㄧㄥˋ ㄅㄨˋ ㄒㄧㄤˇ ㄑㄩˋ ㄊㄞˋ ㄌㄥˇ ㄉㄜ˙ ㄉㄧˋ ㄈㄤ， ㄨㄛˇ ㄇㄣ˙ ㄒㄩㄢˇ ㄗㄜˊ ㄅㄧㄝˊ ㄉㄜ˙ ㄒㄩㄢˇ ㄗㄜˊ ㄅㄚ˙.'"
          :pinyin="'wo3 ken3 ding4 bu4 xiang3 qu4 tai4 leng3 de di4 fang1, wo3 men xuan3 ze2 bie2 de xuan3 ze2 ba.'"
          :translation="'寒すぎるところには絶対に行きたくないので、 他の選択肢を選びましょう。'"
        />
        <br>
        <p>
          ・合適
        </p>
        <SentenceFormat
          :sentence="'這裡的氣候跟長頭髮的狗狗很合適。'"
          :bopomofo="'ㄓㄜˋ ㄌㄧˇ ㄉㄜ˙ ㄑㄧˋ ㄏㄡˋ ㄍㄣ ㄔㄤˊ ㄊㄡˊ ㄈㄚˇ ㄉㄜ˙ ㄍㄡˇ ㄍㄡˇ ㄏㄣˇ ㄏㄜˊ ㄕˋ.'"
          :pinyin="'zhe4 li3 de qi4 hou4 gen1 chang2 tou2 fa3 de gou3 gou3 hen3 he2 shi4.'"
          :translation="'ここの気候は、 毛の長い犬にとても適しています。'"
          :memo="'※「合適」? 「適合」?'"
        />
        <br>
        <p>
          ・少
        </p>
        <SentenceFormat
          :sentence="'在餐房的鹽巴有一點少了， 你要不要幫我買?'"
          :bopomofo="'ㄗㄞˋ ㄘㄢ ㄈㄤˊ ㄉㄜ˙ ㄧㄢˊ ㄅㄚ ㄧㄡˇ ㄧˋ ㄉㄧㄢˇ ㄕㄠˇ ㄌㄜ˙， ㄋㄧˇ ㄧㄠˋ ㄅㄨˊ ㄧㄠˋ ㄅㄤ ㄨㄛˇ ㄇㄞˇ?'"
          :pinyin="'zai4 can1 fang2 de yan2 ba1 you3 yi1 dian3 shao3 le, ni3 yao4 bu2 yao4 bang1 wo3 mai3?'"
          :translation="'キッチンの塩が足りなくなってきたので、 買ってもらえますか?'"
        />
        <br>
        <p>
          ・可惜
        </p>
        <SentenceFormat
          :sentence="'很可惜的事是我來不及去吃她做的菜。'"
          :bopomofo="'ㄏㄣˇ ㄎㄜˇ ㄒㄧ ㄉㄜ˙ ㄕˋ ㄕˋ ㄨㄛˇ ㄌㄞˊ ㄅㄨˋ ㄐㄧˊ ㄑㄩˋ ㄔ ㄊㄚ ㄗㄨㄛˋ ㄉㄜ˙ ㄘㄞˋ.'"
          :pinyin="'hen3 ke3 xi1 de shi4 shi4 wo3 lai2 bu4 ji2 qu4 chi1 ta1 zuo4 de cai4.'"
          :translation="'残念なのは、 彼女の料理を食べるのに間に合わない事です。'"
        />
        <br>
        <p>
          ・放
        </p>
        <SentenceFormat
          :sentence="'從早上， 誰的手機一直放在桌子上。'"
          :bopomofo="'ㄘㄨㄥˊ ㄗㄠˇ ㄕㄤˋ， ㄕㄨㄟˊ ㄉㄜ˙ ㄕㄡˇ ㄐㄧ ㄧ ㄓˊ ㄈㄤˋ ㄗㄞˋ ㄓㄨㄛ ㄗ˙ ㄕㄤˋ.'"
          :pinyin="'cong2 zao3 shang4, shei2 de shou3 ji1 yi1 zhi2 fang4 zai4 zhuo1 zi3 shang4.'"
          :translation="'朝から誰かの携帯が机の上に置きっぱなしになっています。'"
        />
        <br>
        <p>
          ・兩邊
        </p>
        <SentenceFormat
          :sentence="'今天我會從台北到台南去， 所以得考慮兩邊的天氣選擇衣服。'"
          :bopomofo="'ㄐㄧㄣ ㄊㄧㄢ ㄨㄛˇ ㄏㄨㄟˋ ㄘㄨㄥˊ ㄊㄞˊ ㄅㄟˇ ㄉㄠˋ ㄊㄞˊ ㄋㄢˊ ㄑㄩˋ， ㄙㄨㄛˇ ㄧˇ ㄉㄟˇ ㄎㄠˇ ㄌㄩˋ ㄌㄧㄤˇ ㄅㄧㄢ ㄉㄜ˙ ㄊㄧㄢ ㄑㄧˋ ㄒㄩㄢˇ ㄗㄜˊ ㄧ ㄈㄨˊ.'"
          :pinyin="'jin1 tian1 wo3 hui4 cong2 tai2 bei3 dao4 tai2 nan2 qu4, suo3 yi3 dei3 kao3 lu4 liang3 bian1 de tian1 qi4 xuan3 ze2 yi1 fu2.'"
          :translation="'今日は台北から台南に行くので、 両方の天気を考えて服を選ばないといけません。'"
        />
        <br>
        <p>
          ・願意
        </p>
        <SentenceFormat
          :sentence="'她很喜歡動物， 所以願意照顧朋友的寵物。'"
          :bopomofo="'ㄊㄚ ㄏㄣˇ ㄒㄧˇ ㄏㄨㄢ ㄉㄨㄥˋ ㄨˋ， ㄙㄨㄛˇ ㄧˇ ㄩㄢˋ ㄧˋ ㄓㄠˋ ㄍㄨˋ ㄆㄥˊ ㄧㄡˇ ㄉㄜ˙ ㄔㄨㄥˇ ㄨˋ.'"
          :pinyin="'ta1 hen3 xi3 huan1 dong4 wu4, suo3 yi3 yuan4 yi4 zhao4 gu4 peng2 you3 de chong3 wu4.'"
          :translation="'彼女は動物がとても好きなので、 喜んで友達のペットの世話をしてくれます。'"
        />
        <br>
        <p>
          ・開
        </p>
        <SentenceFormat
          :sentence="'山上可能下雪， 開車的時候注意安全。'"
          :bopomofo="'ㄕㄢ ㄕㄤˋ ㄎㄜˇ ㄋㄥˊ ㄒㄧㄚˋ ㄒㄩㄝˇ， ㄎㄞ ㄔㄜ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄓㄨˋ ㄧˋ ㄢ ㄑㄩㄢˊ.'"
          :pinyin="'shan1 shang4 ke3 neng2 xia4 xue3, kai1 che1 de shi2 hou4 zhu4 yi4 an1 quan2.'"
          :translation="'山は雪が降る可能性がありますので、 運転の際は安全に注意して下さい。'"
        />
        <br>
        <p>
          ・存
        </p>
        <SentenceFormat
          :sentence="'你回家去以前， 別忘記存數據。'"
          :bopomofo="'ㄋㄧˇ ㄏㄨㄟˊ ㄐㄧㄚ ㄑㄩˋ ㄧˇ ㄑㄧㄢˊ， ㄅㄧㄝˊ ㄨㄤˋ ㄐㄧˋ ㄘㄨㄣˊ ㄕㄨˋ ㄐㄩˋ.'"
          :pinyin="'ni3 hui2 jia1 qu4 yi3 qian2, bie2 wang4 ji4 cun2 shu4 ju4.'"
          :translation="'家に帰る前にデータを保存することを忘れないでください。'"
        />
        <br>
        <p>
          ・隨身碟
        </p>
        <SentenceFormat
          :sentence="'請你一定得備份存隨身碟上的數據。'"
          :bopomofo="'ㄑㄧㄥˇ ㄋㄧˇ ㄧˊ ㄉㄧㄥˋ ㄉㄟˇ ㄅㄟˋ ㄈㄣˋ ㄘㄨㄣˊ ㄙㄨㄟˊ ㄕㄣ ㄉㄧㄝˊ ㄕㄤˋ ㄉㄜ˙ ㄕㄨˋ ㄐㄩˋ.'"
          :pinyin="'qing3 ni3 yi1 ding4 dei3 bei4 fen4 cun2 sui2 shen1 die2 shang4 de shu4 ju4.'"
          :translation="'USBのデータは必ずバックアップして下さい。'"
        />
        <br>
        <p>
          ・什麼樣
        </p>
        <SentenceFormat
          :sentence="'你覺得什麼樣的衣服適合我?'"
          :bopomofo="'ㄋㄧˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄕㄣˊ ㄇㄜ˙ ㄧㄤˋ ㄉㄜ˙ ㄧ ㄈㄨˊ ㄕˋ ㄏㄜˊ ㄨㄛˇ?'"
          :pinyin="'ni3 jue2 de shen2 me yang4 de yi1 fu2 shi4 he2 wo3?'"
          :translation="'どんな服が私に似合うと思いますか?'"
        />
        <br>
        <p>
          ・慢慢來
        </p>
        <SentenceFormat
          :sentence="'這個問題有一點難， 你慢慢來想一想。'"
          :bopomofo="'ㄓㄜˋ ㄍㄜˋ ㄨㄣˋ ㄊㄧˊ ㄧㄡˇ ㄧˋ ㄉㄧㄢˇ ㄋㄢˊ， ㄋㄧˇ ㄇㄢˋ ㄇㄢˋ ㄌㄞˊ ㄒㄧㄤˇ ㄧ ㄒㄧㄤˇ.'"
          :pinyin="'zhe4 ge4 wen4 ti2 you3 yi1 dian3 nan2, ni3 man4 man4 lai2 xiang3 yi1 xiang3.'"
          :translation="'この問題は少し難しいですから、 ゆっくり考えて下さい。'"
        />
        <br>
        <p>
          ・不急
        </p>
        <SentenceFormat
          :sentence="'不急， 如果你有一點遲到誰不生氣。'"
          :bopomofo="'ㄅㄨˋ ㄐㄧˊ， ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄧㄡˇ ㄧˋ ㄉㄧㄢˇ ㄔˊ ㄉㄠˋ ㄕㄨㄟˊ ㄅㄨˋ ㄕㄥ ㄑㄧˋ.'"
          :pinyin="'bu4 ji2, ru2 guo3 ni3 you3 yi1 dian3 chi2 dao4 shei2 bu4 sheng1 qi4.'"
          :translation="'急がないで下さい、 少しくらい遅れても誰も怒りません。'"
        />
        <br>
        <p>
          ・相當
        </p>
        <SentenceFormat
          :sentence="'因為我的貓相當可愛， 我總是擔心有人會帶走它。'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄨㄛˇ ㄉㄜ˙ ㄇㄠ ㄒㄧㄤ ㄉㄤ ㄎㄜˇ ㄞˋ， ㄨㄛˇ ㄗㄨㄥˇ ㄕˋ ㄉㄢ ㄒㄧㄣ ㄧㄡˇ ㄖㄣˊ ㄏㄨㄟˋ ㄉㄞˋ ㄗㄡˇ ㄊㄚ.'"
          :pinyin="'yin1 wei4 wo3 de mao1 xiang1 dang1 ke3 ai4, wo3 zong3 shi4 dan1 xin1 you3 ren2 hui4 dai4 zou3 ta1.'"
          :translation="'私の猫はかなり可愛いので、 誰かに連れていかれてしまうのではないかといつも心配しています。'"
        />
        <br>
        <p>
          ・自行車
        </p>
        <SentenceFormat
          :sentence="'我恐怕撞人， 所以我不能騎自行車。'"
          :bopomofo="'ㄨㄛˇ ㄎㄨㄥˇ ㄆㄚˋ ㄓㄨㄤˋ ㄖㄣˊ， ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄅㄨˋ ㄋㄥˊ ㄑㄧˊ ㄗˋ ㄒㄧㄥˊ ㄔㄜ.'"
          :pinyin="'wo3 kong3 pa4 zhuang4 ren2, suo3 yi3 wo3 bu4 neng2 qi2 zi4 xing2 che1.'"
          :translation="'人をはねるのが怖いので、 自転車には乗れません。'"
        />
        <br>
        <p>
          ・床
        </p>
        <SentenceFormat
          :sentence="'放在床上的毛絨數量越來越多。'"
          :bopomofo="'ㄈㄤˋ ㄗㄞˋ ㄔㄨㄤˊ ㄕㄤˋ ㄉㄜ˙ ㄇㄠˊ ㄖㄨㄥˊ ㄕㄨˋ ㄌㄧㄤˋ ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ ㄉㄨㄛ.'"
          :pinyin="'fang4 zai4 chuang2 shang4 de mao2 rong2 shu4 liang4 yue4 lai2 yue4 duo1.'"
          :translation="'ベッドのぬいぐるみの数が日に日に増えていきます。'"
        />
        <br>
        <p>
          ・桌子
        </p>
        <SentenceFormat
          :sentence="'她們在喝咖啡聊是非很多時間， 桌子上有很多空的杯子。'"
          :bopomofo="'ㄊㄚ ㄇㄣ˙ ㄗㄞˋ ㄏㄜ ㄎㄚ ㄈㄟ ㄌㄧㄠˊ ㄕˋ ㄈㄟ ㄏㄣˇ ㄉㄨㄛ ㄕˊ ㄐㄧㄢ, ㄓㄨㄛ ㄗ˙ ㄕㄤˋ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄎㄨㄥ ㄉㄜ˙ ㄅㄟ ㄗ˙.'"
          :pinyin="'ta1 men zai4 he1 ka1 fei1 liao2 shi4 fei1 hen3 duo1 shi2 jian1, zhuo1 zi shang4 you3 hen3 duo1 kong1 de bei1 zi3.'"
          :translation="'彼女たちは長い時間コーヒーを飲みながら無駄話をしているので、 テーブルの上には空のコップがたくさんあります。。'"
        />
        <br>
        <p>
          ・椅子
        </p>
        <SentenceFormat
          :sentence="'媽媽在椅子上站著試拿櫃子裡的東西， 看起來很危險。'"
          :bopomofo="'ㄇㄚ ㄇㄚ ㄗㄞˋ ㄧˇ ㄗ˙ ㄕㄤˋ ㄓㄢˋ ㄓㄜ˙ ㄕˋ ㄋㄚˊ ㄍㄨㄟˋ ㄗ˙ ㄌㄧˇ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ， ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄏㄣˇ ㄨㄟ ㄒㄧㄢˇ.'"
          :pinyin="'ma1 ma1 zai4 yi3 zi shang4 zhan4 zhe shi4 na2 gui4 zi li3 de dong1 xi, kan4 qi3 lai2 hen3 wei1 xian3.'"
          :translation="'お母さんは椅子の上に立って戸棚から物を取ろうとしていますが、 見たところとても危ないです。'"
        />
        <br>
        <p>
          ・家具
        </p>
        <SentenceFormat
          :sentence="'家裡的一些家具變舊了, 應該處置它們。'"
          :bopomofo="'ㄐㄧㄚ ㄌㄧˇ ㄉㄜ˙ ㄧ ㄒㄧㄝ ㄐㄧㄚ ㄐㄩˋ ㄅㄧㄢˋ ㄐㄧㄡˋ ㄌㄜ˙, ㄧㄥ ㄍㄞ ㄔㄨˇ ㄓˋ ㄊㄚ ㄇㄣ˙.'"
          :pinyin="'jia1 li3 de yi1 xie1 jia1 ju4 bian4 jiu4 le, ying1 gai1 chu3 zhi4 ta1 men.'"
          :translation="'家の家具のいくつかは古くなったので、 処分した方が良いです。'"
        />
        <br>
        <p>
          ・而且
        </p>
        <SentenceFormat
          :sentence="'存錢很重要， 而且交際的錢也重要。'"
          :bopomofo="'ㄘㄨㄣˊ ㄑㄧㄢˊ ㄏㄣˇ ㄓㄨㄥˋ ㄧㄠˋ， ㄦˊ ㄑㄧㄝˇ ㄐㄧㄠ ㄐㄧˋ ㄉㄜ˙ ㄑㄧㄢˊ ㄧㄝˇ ㄓㄨㄥˋ ㄧㄠˋ.'"
          :pinyin="'cun2 qian2 hen3 zhong4 yao4, er2 qie3 jiao1 ji4 de qian2 ye3 zhong4 yao4.'"
          :translation="'お金を貯める事は重要ですが、 交際費もまた重要です。'"
        />
        <br>
        <p>
          ・吵
        </p>
        <SentenceFormat
          :sentence="'貓對貓在外面打架， 很吵。'"
          :bopomofo="'ㄇㄠ ㄉㄨㄟˋ ㄇㄠ ㄗㄞˋ ㄨㄞˋ ㄇㄧㄢˋ ㄉㄚˇ ㄐㄧㄚˋ， ㄏㄣˇ ㄔㄠˇ.'"
          :pinyin="'mao1 dui4 mao1 zai4 wai4 mian4 da3 jia4, hen3 chao3.'"
          :translation="'猫同士が表で喧嘩していて、 とてもうるさいです。'"
        />
        <br>
        <p>
          ・生活費
        </p>
        <SentenceFormat
          :sentence="'我想減少生活費, 所以我想要搬到鄉下。'"
          :bopomofo="'ㄨㄛˇ ㄒㄧㄤˇ ㄐㄧㄢˇ ㄕㄠˇ ㄕㄥ ㄏㄨㄛˊ ㄈㄟˋ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄒㄧㄤˇ ㄧㄠˋ ㄅㄢ ㄉㄠˋ ㄒㄧㄤ ㄒㄧㄚˋ.'"
          :pinyin="'wo3 xiang3 jian3 shao3 sheng1 huo2 fei4, suo3 yi3 wo3 xiang3 yao4 ban1 dao4 xiang1 xia4.'"
          :translation="'生活費を抑えたいので、 田舎に引っ越したいです。'"
        />
        <br>
        <p>
          ・低
        </p>
        <SentenceFormat
          :sentence="'我的血壓很低， 所以我不能早上上班。'"
          :bopomofo="'ㄨㄛˇ ㄉㄜ˙ ㄒㄧㄝˇ ㄧㄚ ㄏㄣˇ ㄉㄧ， ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄅㄨˋ ㄋㄥˊ ㄗㄠˇ ㄕㄤˋ ㄕㄤˋ ㄅㄢ.'"
          :pinyin="'wo3 de xie3 ya1 hen3 di1, suo3 yi3 wo3 bu4 neng2 zao3 shang4 shang4 ban1.'"
          :translation="'血圧がとても低いので、 朝は出勤できません。'"
        />
        <br>
        <p>
          ・留
        </p>
        <SentenceFormat
          :sentence="'因為他跑進了教室， 在那裡留著學生們都嚇一跳。'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄊㄚ ㄆㄠˇ ㄐㄧㄣˋ ㄌㄜ˙ ㄐㄧㄠˋ ㄕˋ， ㄗㄞˋ ㄋㄚˋ ㄌㄧ˙ ㄌㄧㄡˊ ㄓㄜ˙ ㄒㄩㄝˊ ㄕㄥ ㄇㄣ˙ ㄉㄡ ㄒㄧㄚˋ ㄧ ㄊㄧㄠˋ.'"
          :pinyin="'yin1 wei4 ta1 pao3 jin4 le jiao4 shi4, zai4 na4 li3 liu2 zhe xue2 sheng1 men dou1 xia4 yi1 tiao4.'"
          :translation="'彼が教室に駆け込んだので、 そこに残っていた学生達はみんな驚きました。'"
        />
        <br>
        <p>
          ・長
        </p>
        <SentenceFormat
          :sentence="'長頸鹿的腿太長， 看起來走路有一點困難。'"
          :bopomofo="'ㄔㄤˊ ㄐㄧㄥˇ ㄌㄨˋ ㄉㄜ˙ ㄊㄨㄟˇ ㄊㄞˋ ㄔㄤˊ， ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄗㄡˇ ㄌㄨˋ ㄧㄡˇ ㄧˋ ㄉㄧㄢˇ ㄎㄨㄣˋ ㄋㄢˊ.'"
          :pinyin="'chang2 jing3 lu4 de tui3 tai4 chang2, kan4 qi3 lai2 zou3 lu4 you3 yi1 dian3 kun4 nan2.'"
          :translation="'キリンの足は長すぎて、 歩きにくそうに見えます。'"
        />
        <br>
        <p>
          ・討論
        </p>
        <SentenceFormat
          :sentence="'他們太熱情地討論， 一個人終於生氣了。'"
          :bopomofo="'ㄊㄚ ㄇㄣ˙ ㄊㄞˋ ㄖㄜˋ ㄑㄧㄥˊ ㄉㄜ˙ ㄊㄠˇ ㄌㄨㄣˋ， ㄧˊ ㄍㄜ˙ ㄖㄣˊ ㄓㄨㄥ ㄩˊ ㄕㄥ ㄑㄧˋ ㄌㄜ˙.'"
          :pinyin="'ta1 men tai4 re4 qing2 de tao3 lun4, yi1 ge4 ren2 zhong1 wu2 sheng1 qi4 le.'"
          :translation="'彼らの討論は熱心過ぎたので、 ついに片方が怒ってしまいました。'"
        />
        <br>
        <p>
          ・社團
        </p>
        <SentenceFormat
          :sentence="'我想參加什麼社團， 但是不太喜歡跟不知道的人說話。'"
          :bopomofo="'ㄨㄛˇ ㄒㄧㄤˇ ㄘㄢ ㄐㄧㄚ ㄕㄣˊ ㄇㄜ˙ ㄕㄜˋ ㄊㄨㄢˊ， ㄉㄢˋ ㄕˋ ㄅㄨˋ ㄊㄞˋ ㄒㄧˇ ㄏㄨㄢ ㄍㄣ ㄅㄨˋ ㄓ ㄉㄠˋ ㄉㄜ˙ ㄖㄣˊ ㄕㄨㄛ ㄏㄨㄚˋ.'"
          :pinyin="'wo3 xiang3 can1 jia1 shen2 me she4 tuan2, dan4 shi4 bu2 tai4 xi3 huan1 gen1 bu4 zhi1 dao4 de ren2 shuo1 hua4.'"
          :translation="'何かクラブに参加したいのですが、 知らない人と話すのはあまり好きではありません。'"
        />
        <br>
        <p>
          ・活動
        </p>
        <SentenceFormat
          :sentence="'我的客戶想要做戶外活動， 請你介紹一下?'"
          :bopomofo="'ㄨㄛˇ ㄉㄜ˙ ㄎㄜˋ ㄏㄨˋ ㄒㄧㄤˇ ㄧㄠˋ ㄗㄨㄛˋ ㄏㄨˋ ㄨㄞˋ ㄏㄨㄛˊ ㄉㄨㄥˋ， ㄑㄧㄥˇ ㄋㄧˇ ㄐㄧㄝˋ ㄕㄠˋ ㄧ ㄒㄧㄚˋ?'"
          :pinyin="'wo3 de ke4 hu4 xiang3 yao4 zuo4 hu4 wai4 huo2 dong4, qing3 ni3 jie4 shao4 yi1 xia4?'"
          :translation="'私のお客さんが野外活動をしたがっているので、 何か紹介していただけませんか?'"
        />
        <br>
        <p>
          ・失望
        </p>
        <SentenceFormat
          :sentence="'因為他意識到他讓媽媽失望了, 他的臉變蒼白了。'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄊㄚ ㄧˋ ㄕˊ ㄉㄠˋ ㄊㄚ ㄖㄤˋ ㄇㄚ ㄇㄚ ㄕ ㄨㄤˋ ㄌㄜ˙, ㄊㄚ ㄉㄜ˙ ㄌㄧㄢˇ ㄅㄧㄢˋ ㄘㄤ ㄅㄞˊ ㄌㄜ˙.'"
          :pinyin="'yin1 wei4 ta1 yi4 shi2 dao4 ta1 rang4 ma1 ma1 shi1 wang4 le, ta1 de lian3 bian4 cang1 bai2 le.'"
          :translation="'お母さんを失望させた事に気付いたので、 彼の顔は蒼白になりました。'"
        />
        <br>
        <p>
          ・放心
        </p>
        <SentenceFormat
          :sentence="'三天不見的貓回家了， 我很放心了。'"
          :bopomofo="'ㄙㄢ ㄊㄧㄢ ㄅㄨˊ ㄐㄧㄢˋ ㄉㄜ˙ ㄇㄠ ㄏㄨㄟˊ ㄐㄧㄚ ㄌㄜ˙， ㄨㄛˇ ㄏㄣˇ ㄈㄤˋ ㄒㄧㄣ ㄌㄜ˙.'"
          :pinyin="'san1 tian1 bu2 jian4 de mao1 hui2 jia1 le, wo3 hen3 fang4 xin1 le.'"
          :translation="'3日間姿が見えなかった猫が帰ってきたので、 とても安心しました。'"
        />
        <br>
        <p>
          ・用
        </p>
        <SentenceFormat
          :sentence="'用公共空間的時候， 請清潔使用。'"
          :bopomofo="'ㄩㄥˋ ㄍㄨㄥ ㄍㄨㄥˋ ㄎㄨㄥ ㄐㄧㄢ ㄉㄜ˙ ㄕˊ ㄏㄡˋ， ㄑㄧㄥˇ ㄑㄧㄥ ㄐㄧㄝˊ ㄕˇ ㄩㄥˋ.'"
          :pinyin="'yong4 gong1 gong4 kong1 jian1 de shi2 hou4, qing3 qing1 jie2 shi3 yong4.'"
          :translation="'公共スペースを使用する時は、 きれいに使ってください。'"
        />
        <br>
        <p>
          ・首爾
        </p>
        <SentenceFormat
          :sentence="'在首爾有幾個朋友，下次去到那裡的時候我打算一起吃烤肉。'"
          :bopomofo="'ㄗㄞˋ ㄕㄡˇ ㄦˇ ㄧㄡˇ ㄐㄧˇ ㄍㄜˋ ㄆㄥˊ ㄧㄡˇ， ㄒㄧㄚˋ ㄘˋ ㄑㄩˋ ㄉㄠˋ ㄋㄚˋ ㄌㄧˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄨㄛˇ ㄉㄚˇ ㄙㄨㄢˋ ㄧˋ ㄑㄧˇ ㄔ ㄎㄠˇ ㄖㄡˋ.'"
          :pinyin="'zai4 shou3 er3 you3 ji3 ge4 peng2 you3, xia4 ci4 qu4 dao4 na4 li3 de shi2 hou4 wo3 da3 suan4 yi1 qi3 chi1 kao3 rou4.'"
          :translation="'ソウルには何人か友達がいるので、 次に行く時は一緒に焼き肉を食べる予定です。'"
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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第6章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第6章で登場する新単語を使った例文や気づいた事など' }
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
