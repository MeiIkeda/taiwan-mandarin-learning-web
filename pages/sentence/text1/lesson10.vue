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
          當代中文課程課1・第10章
        </h1>
        <p>
          【新単語+例文】
        </p>
        <p>
          ・水果
        </p>
        <SentenceFormat
          :sentence="'在日本水果的價格很高。'"
          :bopomofo="'ㄗㄞˋ ㄖˋ ㄅㄣˇ ㄕㄨㄟˇ ㄍㄨㄛˇ ㄉㄜ˙ ㄐㄧㄚˋ ㄍㄜˊ ㄏㄣˇ ㄍㄠ.'"
          :pinyin="'zai4 ri4 ben3 shui3 guo3 de jia4 ge2 hen3 gao1.'"
          :translation="'日本では果物の価格が高い。'"
        />
        <br>
        <p>
          ・黃色
        </p>
        <SentenceFormat
          :sentence="'你不可以越過黃色的線。'"
          :bopomofo="'ㄋㄧˇ ㄅㄨˋ ㄎㄜˇ ㄧˇ ㄩㄝˋ ㄍㄨㄛˋ ㄏㄨㄤˊ ㄙㄜˋ ㄉㄜ˙ ㄒㄧㄢˋ.'"
          :pinyin="'ni3 bu4 ke3 yi3 yue4 guo4 huang2 se4 de xian4.'"
          :translation="'黄色い線を越えてはいけません。'"
        />
        <br>
        <p>
          ・芒果
        </p>
        <SentenceFormat
          :sentence="'你可不可以幫我選一顆大的芒果?'"
          :bopomofo="'ㄋㄧˇ ㄎㄜˇ ㄅㄨˋ ㄎㄜˇ ㄧˇ ㄅㄤ ㄨㄛˇ ㄒㄩㄢˇ ㄧ ㄎㄜ ㄉㄚˋ ㄉㄜ˙ ㄇㄤˊ ㄍㄨㄛˇ?'"
          :pinyin="'ni3 ke3 bu4 ke3 yi3 bang1 wo3 xuan3 yi1 ke1 da4 de mang2 guo3?'"
          :translation="'大きなマンゴーを選ぶのを手伝ってくれませんか?'"
        />
        <br>
        <p>
          ・給
        </p>
        <SentenceFormat
          :sentence="'他會拿一杯茶給你。'"
          :bopomofo="'ㄊㄚ ㄏㄨㄟˋ ㄋㄚˊ ㄧ ㄅㄟ ㄔㄚˊ ㄍㄟˇ ㄋㄧˇ.'"
          :pinyin="'ta1 hui4 na2 yi1 be1i cha2 gei3 ni3.'"
          :translation="'彼はあなたにお茶を一杯持ってきてくれます。'"
        />
        <br>
        <p>
          ・塊
        </p>
        <SentenceFormat
          :sentence="'為了煮咖喱, 我買的雞肉要切一塊一塊的大小。'"
          :bopomofo="'ㄨㄟˋ ㄌㄜ˙ ㄓㄨˇ ㄍㄚ ㄌㄧˊ, ㄨㄛˇ ㄇㄞˇ ㄉㄜ˙ ㄐㄧ ㄖㄡˋ ㄧㄠˋ ㄑㄧㄝ ㄧˊ ㄎㄨㄞˋ ㄧˊ ㄎㄨㄞˋ ㄉㄜ˙ ㄉㄚˋ ㄒㄧㄠˇ.'"
          :pinyin="'wei4 le zhu3 ga1 li2, wo3 mai3 de ji1 rou4 yao4 qie1 yi1 kuai4 yi1 kuai4 de da4 xiao3.'"
          :translation="'カレーを作るためにチキンを買いたいです。'"
        />
        <br>
        <p>
          ・香
        </p>
        <SentenceFormat
          :sentence="'這個香香的味道從哪裡來的?'"
          :bopomofo="'ㄓㄜˋ ㄍㄜˋ ㄒㄧㄤ ㄒㄧㄤ ㄉㄜ˙ ㄨㄟˋ ㄉㄠˋ ㄘㄨㄥˊ ㄋㄚˇ ㄌㄧˇ ㄌㄞˊ ㄉㄜ˙?'"
          :pinyin="'zhe4 ge4 xiang1 xiang1 de wei4 dao4 cong2 na3 li3 lai2 de?'"
          :translation="'この良い香りはどこから来たのですか?'"
        />
        <br>
        <p>
          ・甜
        </p>
        <SentenceFormat
          :sentence="'亞洲甜點比較不甜。'"
          :bopomofo="'ㄧㄚˋ ㄓㄡ ㄊㄧㄢˊ ㄉㄧㄢˇ ㄅㄧˇ ㄐㄧㄠˋ ㄅㄨˋ ㄊㄧㄢˊ.'"
          :pinyin="'ya4 zhou1 tian2 dian3 bi3 jiao4 bu4 tian2.'"
          :translation="'アジアのデザートは比較的甘くない。'"
        />
        <br>
        <p>
          ・紅色
        </p>
        <SentenceFormat
          :sentence="'吃喜酒的時候新娘穿紅色的衣服。'"
          :bopomofo="'ㄔ ㄒㄧˇ ㄐㄧㄡˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄒㄧㄣ ㄋㄧㄤˊ ㄔㄨㄢ ㄏㄨㄥˊ ㄙㄜˋ ㄉㄜ˙ ㄧ ㄈㄨˊ.'"
          :pinyin="'chi1 xi3 jiu3 de shi2 hou4 xin1 niang2 chuan1 hong2 se4 de yi1 fu2.'"
          :translation="'花嫁は結婚式で赤いドレスを着ます。'"
        />
        <br>
        <p>
          ・西瓜
        </p>
        <SentenceFormat
          :sentence="'我應該在哪里丟掉西瓜籽?'"
          :bopomofo="'ㄨㄛˇ ㄧㄥ ㄍㄞ ㄗㄞˋ ㄋㄚˇ ㄌㄧˇ ㄉㄧㄡ ㄉㄧㄠˋ ㄒㄧ ㄍㄨㄚ ㄗˇ?'"
          :pinyin="'wo3 ying1 gai1 zai4 na3 li3 diu1 diao4 xi1 gua1 zi3?'"
          :translation="'スイカの種はどこに捨てればいいですか?'"
        />
        <br>
        <p>
          ・吧
        </p>
        <SentenceFormat
          :sentence="'您在尋找的是錢包吧?'"
          :bopomofo="'ㄋㄧㄣˊ ㄗㄞˋ ㄒㄩㄣˊ ㄓㄠˇ ㄉㄜ˙ ㄕˋ ㄑㄧㄢˊ ㄅㄠ ㄅㄚ˙?'"
          :pinyin="'nin2 zai4 xun2 zhao3 de shi4 qian2 bao1 ba?'"
          :translation="'財布をお探しですか?'"
        />
        <br>
        <p>
          ・對
        </p>
        <SentenceFormat
          :sentence="'他說的真對, 我們得解決這個問題。'"
          :bopomofo="'ㄊㄚ ㄕㄨㄛ ㄉㄧˊ ㄓㄣ ㄉㄨㄟˋ, ㄨㄛˇ ㄇㄣ˙ ㄉㄟˇ ㄐㄧㄝˇ ㄐㄩㄝˊ ㄓㄜˋ ㄍㄜˋ ㄨㄣˋ ㄊㄧˊ.'"
          :pinyin="'ta1 shuo1 de zhen1 dui4, wo3 men dei3 jie3 jue2 zhe4 ge4 wen4 ti2.'"
          :translation="'彼の言う事は正しい、 私たちはこの問題を解決しなければなりません。'"
        />
        <br>
        <p>
          ・以前
        </p>
        <SentenceFormat
          :sentence="'便利商店以前， 我在一家菸酒專賣店常常買酒。'"
          :bopomofo="'ㄅㄧㄢˋ ㄌㄧˋ ㄕㄤ ㄉㄧㄢˋ ㄧˇ ㄑㄧㄢˊ， ㄨㄛˇ ㄗㄞˋ ㄧ ㄐㄧㄚ ㄧㄢ ㄐㄧㄡˇ ㄓㄨㄢ ㄇㄞˋ ㄉㄧㄢˋ ㄔㄤˊ ㄔㄤˊ ㄇㄞˇ ㄐㄧㄡˇ.'"
          :pinyin="'bian4 li4 shang1 dian4 yi3 qian2, wo3 zai4 yi1 jia1 yan1 jiu3 zhuan1 mai4 dian4 chang2 chang2 mai3 jiu3.'"
          :translation="'コンビニができる前は、 酒屋(タバコ屋)でお酒を買っていました。'"
        />
        <br>
        <p>
          ・機會
        </p>
        <SentenceFormat
          :sentence="'如果有機會， 我想見大學同學。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄧㄡˇ ㄐㄧ ㄏㄨㄟˋ， ㄨㄛˇ ㄒㄧㄤˇ ㄐㄧㄢˋ ㄉㄚˋ ㄒㄩㄝˊ ㄊㄨㄥˊ ㄒㄩㄝˊ.'"
          :pinyin="'ru2 guo3 you3 ji1 hui4, wo3 xiang3 jian4 da4 xue2 tong2 xue2.'"
          :translation="'機会があれば、 大学の同級生に会いたいです。'"
        />
        <br>
        <p>
          ・請
        </p>
        <SentenceFormat
          :sentence="'叔叔非常喜歡酒, 他一定請你喝。'"
          :bopomofo="'ㄕㄨ ㄕㄨ ㄈㄟ ㄔㄤˊ ㄒㄧˇ ㄏㄨㄢ ㄐㄧㄡˇ, ㄊㄚ ㄧˊ ㄉㄧㄥˋ ㄑㄧㄥˇ ㄋㄧˇ ㄏㄜ.'"
          :pinyin="'shu1 shu1 fei1 chang2 xi3 huan1 jiu3, ta1 yi1 ding4 qing3 ni3 he1.'"
          :translation="'おじさんはお酒がとても好きなので、 間違いなくあなたを飲みに誘うでしょう。'"
        />
        <br>
        <p>
          ・吃吃看
        </p>
        <SentenceFormat
          :sentence="'聽說有一家新餐廳開了，我想去吃吃看。'"
          :bopomofo="'ㄊㄧㄥ ㄕㄨㄛ ㄧㄡˇ ㄧ ㄐㄧㄚ ㄒㄧㄣ ㄘㄢ ㄊㄧㄥ ㄎㄞ ㄌㄜ˙， ㄨㄛˇ ㄒㄧㄤˇ ㄑㄩˋ ㄔ ㄔ ㄎㄢˋ.'"
          :pinyin="'ting1 shuo1 you3 yi1 jia1 xin1 can1 ting1 kai1 le, wo3 xiang3 qu4 chi1 chi1 kan4.'"
          :translation="'新しいレストランがオープンしたと聞いたので、 食べに行ってみたいです。'"
        />
        <br>
        <p>
          ・拍
        </p>
        <SentenceFormat
          :sentence="'如果你拍了照片， 請給我看看。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄆㄞ ㄌㄜ˙ ㄓㄠˋ ㄆㄧㄢ， ㄑㄧㄥˇ ㄍㄟˇ ㄨㄛˇ ㄎㄢˋ ㄎㄢˋ.'"
          :pinyin="'ru2 guo3 ni3 pai1 le zhao4 pian4, qing3 gei3 wo3 kan4 kan4.'"
          :translation="'写真を撮ったら見せてください。'"
        />
        <br>
        <p>
          ・笑
        </p>
        <SentenceFormat
          :sentence="'因為她帶了狗狗來， 大家都笑了。'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄊㄚ ㄉㄞˋ ㄌㄜ˙ ㄍㄡˇ ㄍㄡˇ ㄌㄞˊ， ㄉㄚˋ ㄐㄧㄚ ㄉㄡ ㄒㄧㄠˋ ㄌㄜ˙.'"
          :pinyin="'yin1 wei4 ta1 dai4 le gou3 gou3 lai2, da4 jia1 dou1 xiao4 le.'"
          :translation="'彼女が犬を連れてきたので、 みんなが笑った。'"
        />
        <br>
        <p>
          ・開心
        </p>
        <SentenceFormat
          :sentence="'因為很多朋友來家玩， 他很開心。'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄏㄣˇ ㄉㄨㄛ ㄆㄥˊ ㄧㄡˇ ㄌㄞˊ ㄐㄧㄚ ㄨㄢˊ， ㄊㄚ ㄏㄣˇ ㄎㄞ ㄒㄧㄣ.'"
          :pinyin="'yin1 wei4 hen3 duo1 peng2 you3 lai2 jia1 wan2, ta1 hen3 kai1 xin1.'"
          :translation="'たくさんの友人が家に遊びに来るので、 彼はとても幸せです。'"
        />
        <br>
        <p>
          ・穿
        </p>
        <SentenceFormat
          :sentence="'你得穿上外套、 否则你會感冒。'"
          :bopomofo="'ㄋㄧˇ ㄉㄟˇ ㄔㄨㄢ ㄕㄤ˙ ㄨㄞˋ ㄊㄠˋ、 ㄈㄡˇ ㄗㄜˊ ㄋㄧˇ ㄏㄨㄟˋ ㄍㄢˇ ㄇㄠˋ.'"
          :pinyin="'ni3 dei3 chuan1 shang4 wai4 tao4, fou3 ze2 ni3 hui4 gan3 mao4.'"
          :translation="'上着を着ないと風邪をひきます。'"
        />
        <br>
        <p>
          ・衣服
        </p>
        <SentenceFormat
          :sentence="'每天選衣服很麻煩。'"
          :bopomofo="'ㄇㄟˇ ㄊㄧㄢ ㄒㄩㄢˇ ㄧ ㄈㄨˊ ㄏㄣˇ ㄇㄚˊ ㄈㄢˊ.'"
          :pinyin="'mei3 tian1 xuan3 yi1 fu2 hen3 ma2 fan2.'"
          :translation="'毎日服を選ぶのは面倒です。'"
        />
        <br>
        <p>
          ・旅館
        </p>
        <SentenceFormat
          :sentence="'住旅館的時候, 你帶吹風機嗎?'"
          :bopomofo="'ㄓㄨˋ ㄌㄩˇ ㄍㄨㄢˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄋㄧˇ ㄉㄞˋ ㄔㄨㄟ ㄈㄥ ㄐㄧ ㄇㄚ˙?'"
          :pinyin="'zhu4 lu3 guan3 de shi2 hou4, ni3 dai4 chui1 feng1 ji1 ma2?'"
          :translation="'旅館に泊まる時はドライヤーを持っていきますか?'"
        />
        <br>
        <p>
          ・太太
        </p>
        <SentenceFormat
          :sentence="'他的太太很擅長煮飯。'"
          :bopomofo="'ㄊㄚ ㄉㄜ˙ ㄊㄞˋ ㄊㄞˋ ㄏㄣˇ ㄕㄢˋ ㄔㄤˊ ㄓㄨˇ ㄈㄢˋ.'"
          :pinyin="'ta1 de tai4 tai4 hen3 shan4 chang2 zhu3 fan4.'"
          :translation="'彼の妻は料理がとても上手です。'"
        />
        <br>
        <p>
          ・男
        </p>
        <SentenceFormat
          :sentence="'在房間前面站著的男護士你看到了嗎?'"
          :bopomofo="'ㄗㄞˋ ㄈㄤˊ ㄐㄧㄢ ㄑㄧㄢˊ ㄇㄧㄢˋ ㄓㄢˋ ㄓㄜ˙ ㄉㄜ˙ ㄋㄢˊ ㄏㄨˋ ㄕˋ ㄋㄧˇ ㄎㄢˋ ㄉㄠˋ ㄌㄜ˙ ㄇㄚ˙?'"
          :pinyin="'zai4 fang2 jian1 qian2 mian4 zhan4 zhe de nan2 hu4 shi4 ni3 kan4 dao4 le ma?'"
          :translation="'部屋の前に立っている男性看護師を見ましたか?'"
        />
        <br>
        <p>
          ・矮
        </p>
        <SentenceFormat
          :sentence="'如果那棟大樓矮一點， 我們可以看到美麗的風景。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄚˋ ㄉㄨㄥˋ ㄉㄚˋ ㄌㄡˊ ㄞˇ ㄧˋ ㄉㄧㄢˇ， ㄨㄛˇ ㄇㄣ˙ ㄎㄜˇ ㄧˇ ㄎㄢˋ ㄉㄠˋ ㄇㄟˇ ㄌㄧˋ ㄉㄜ˙ ㄈㄥ ㄐㄧㄥˇ.'"
          :pinyin="'ru2 guo3 na4 dong4 da4 lou2 ai3 yi1 dian3, wo3 men ke3 yi3 kan4 dao4 mei3 li4 de feng1 jing3.'"
          :translation="'その建物がもう少し低ければ、 良い景色が見られる筈です。'"
        />
        <br>
        <p>
          ・高
        </p>
        <SentenceFormat
          :sentence="'他想每天呼吸新鮮的空氣， 所以住一個高的地方。'"
          :bopomofo="'ㄊㄚ ㄒㄧㄤˇ ㄇㄟˇ ㄊㄧㄢ ㄏㄨ ㄒㄧ ㄒㄧㄣ ㄒㄧㄢ ㄉㄜ˙ ㄎㄨㄥ ㄑㄧˋ， ㄙㄨㄛˇ ㄧˇ ㄓㄨˋ ㄧˊ ㄍㄜˋ ㄍㄠ ㄉㄜ˙ ㄉㄧˋ ㄈㄤ.'"
          :pinyin="'ta1 xiang3 mei3 tian1 hu1 xi1 xin1 xian1 de kong1 qi4, suo3 yi3 zhu4 yi1 ge4 gao1 de di4 fang1.'"
          :translation="'彼は毎日新鮮な空気を吸いたいので、 高いところに住んでいます。'"
        />
        <br>
        <p>
          ・弟弟
        </p>
        <SentenceFormat
          :sentence="'他很聰明的弟弟現在在美國念醫學。'"
          :bopomofo="'ㄊㄚ ㄏㄣˇ ㄘㄨㄥ ㄇㄧㄥˊ ㄉㄜ˙ ㄉㄧˋ ㄉㄧ˙ ㄒㄧㄢˋ ㄗㄞˋ ㄗㄞˋ ㄇㄟˇ ㄍㄨㄛˊ ㄋㄧㄢˋ ㄧ ㄒㄩㄝˊ.'"
          :pinyin="'ta1 hen3 cong1 ming2 de di4 di4 xian4 zai4 zai4 mei3 guo2 nian4 yi3 xue2.'"
          :translation="'彼のとても賢い弟は現在アメリカで医学を勉強しています。'"
        />
        <br>
        <p>
          ・乾淨
        </p>
        <SentenceFormat
          :sentence="'我剛剛消毒完， 洗澡間很乾淨。'"
          :bopomofo="'ㄨㄛˇ ㄍㄤ ㄍㄤ ㄒㄧㄠ ㄉㄨˊ ㄨㄢˊ， ㄒㄧˇ ㄗㄠˇ ㄐㄧㄢ ㄏㄣˇ ㄍㄢ ㄐㄧㄥˋ.'"
          :pinyin="'wo3 gang1 gang1 xiao1 du2 wan2, xi3 zao3 jian1 hen3 gan1 jing4.'"
          :translation="'消毒を終えたばかりなので、 バスルームはとてもきれいです。'"
        />
        <br>
        <p>
          ・窗戶
        </p>
        <SentenceFormat
          :sentence="'聲音從窗戶外面傳來。'"
          :bopomofo="'ㄕㄥ ㄧㄣ ㄘㄨㄥˊ ㄔㄨㄤ ㄏㄨˋ ㄨㄞˋ ㄇㄧㄢˋ ㄔㄨㄢˊ ㄌㄞˊ.'"
          :pinyin="'sheng1 yin1 cong2 chuang1 hu4 wai4 mian4 chuan2 lai2.'"
          :translation="'窓の外から音がしました。'"
        />
        <br>
        <p>
          ・往
        </p>
        <SentenceFormat
          :sentence="'往台北的下一班火車什麼時候來?'"
          :bopomofo="'ㄨㄤˇ ㄊㄞˊ ㄅㄟˇ ㄉㄜ˙ ㄒㄧㄚˋ ㄧ ㄅㄢ ㄏㄨㄛˇ ㄔㄜ ㄕㄣˊ ㄇㄜ˙ ㄕˊ ㄏㄡˋ ㄌㄞˊ?'"
          :pinyin="'wang3 tai2 bei3 de xia4 yi1 ban1 huo3 che1 shen2 me shi2 hou4 lai2?'"
          :translation="'台北への次の列車はいつ来るのですか?'"
        />
        <br>
        <p>
          ・藍色
        </p>
        <SentenceFormat
          :sentence="'台灣的紅綠燈不是藍色的, 綠色的。'"
          :bopomofo="'ㄊㄞˊ ㄨㄢ ㄉㄜ˙ ㄏㄨㄥˊ ㄌㄩˋ ㄉㄥ ㄅㄨˊ ㄕˋ ㄌㄢˊ ㄙㄜˋ ㄉㄜ˙, ㄌㄩˋ ㄙㄜˋ ㄉㄜ˙.'"
          :pinyin="'tai2 wan1 de hong2 lu4 deng1 bu2 shi4 lan2 se4 de, lu4 se4 de.'"
          :translation="'台湾の信号は青ではなく、 緑です。'"
        />
        <br>
        <p>
          ・因為
        </p>
        <SentenceFormat
          :sentence="'因為我覺得明天會下雨， 今天我們得去買東西。'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄇㄧㄥˊ ㄊㄧㄢ ㄏㄨㄟˋ ㄒㄧㄚˋ ㄩˇ， ㄐㄧㄣ ㄊㄧㄢ ㄨㄛˇ ㄇㄣ˙ ㄉㄟˇ ㄑㄩˋ ㄇㄞˇ ㄉㄨㄥ ㄒㄧ˙.'"
          :pinyin="'yin1 wei4 wo3 jue2 de ming2 tian1 hui4 xia4 yu3, jin1 tian1 wo3 men dei3 qu4 mai3 dong1 xi1.'"
          :translation="'明日は雨が降ると思うので、 今日買い物に行かなければなりません。'"
        />
        <br>
        <p>
          ・住
        </p>
        <SentenceFormat
          :sentence="'我想小心決定住在哪里。'"
          :bopomofo="'ㄨㄛˇ ㄒㄧㄤˇ ㄒㄧㄠˇ ㄒㄧㄣ ㄐㄩㄝˊ ㄉㄧㄥˋ ㄓㄨˋ ㄗㄞˋ ㄋㄚˇ ㄌㄧˇ.'"
          :pinyin="'wo3 xiang3 xiao3 xin1 jue2 ding4 zhu4 zai4 na3 li3.'"
          :translation="'どこに住むかは慎重に決めたいです。'"
        />
        <br>
        <p>
          ・上個月
        </p>
        <SentenceFormat
          :sentence="'我忘記了到上個月必須提供的資料。'"
          :bopomofo="'ㄨㄛˇ ㄨㄤˋ ㄐㄧˋ ㄌㄜ˙ ㄉㄠˋ ㄕㄤˋ ㄍㄜ˙ ㄩㄝˋ ㄅㄧˋ ㄒㄩ ㄊㄧˊ ㄍㄨㄥ ㄉㄜ˙ ㄗ ㄌㄧㄠˋ.'"
          :pinyin="'wo3 wang4 ji4 le dao4 shang4 ge4 yue4 bi4 xu1 ti2 gong1 de zi1 liao4.'"
          :translation="'先月までに作らなくてはいけない資料を忘れていました。'"
        />
        <br>
        <p>
          ・這些
        </p>
        <SentenceFormat
          :sentence="'您可不可以幫我扔掉這些文件?'"
          :bopomofo="'ㄋㄧㄣˊ ㄎㄜˇ ㄅㄨˋ ㄎㄜˇ ㄧˇ ㄅㄤ ㄨㄛˇ ㄖㄥ ㄉㄧㄠˋ ㄓㄜˋ ㄒㄧㄝ ㄨㄣˊ ㄐㄧㄢˋ?'"
          :pinyin="'nin2 ke3 bu4 ke3 yi3 bang1 wo3 reng1 diao4 zhe4 xie1 wen2 jian4?'"
          :translation="'これらのファイルを破棄してくれませんか?'"
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
        { hid: 'description', name: 'description', content: '例文集ページ。 シーン別の対話例や、 テキスト「當代中文課程課」で登場する単語で作成した例文など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: '例文集ページ。 シーン別の対話例や、 テキスト「當代中文課程課」で登場する単語で作成した例文など' }
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
