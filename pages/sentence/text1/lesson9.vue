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
          當代中文課程課1・第9章
        </h1>
        <p>
          【新単語+例文】
        </p>
        <p>
          ・星期
        </p>
        <SentenceFormat
          :sentence="'到星期五我得完成這個功課。'"
          :bopomofo="'ㄉㄠˋ ㄒㄧㄥ ㄑㄧ ㄨˇ ㄨㄛˇ ㄉㄜˊ ㄨㄢˊ ㄔㄥˊ ㄓㄜˋ ㄍㄜˋ ㄍㄨㄥ ㄎㄜˋ.'"
          :pinyin="'dao4 xing1 qi1 wu3 wo3 dei3 wan2 cheng2 zhe4 ge4 gong1 ke4.'"
          :translation="'金曜日までにこの宿題を終えなければなりません。'"
        />
        <br>
        <p>
          ・回國
        </p>
        <SentenceFormat
          :sentence="'什麼時候你下次回國?'"
          :bopomofo="'ㄕㄣˊ ㄇㄜ˙ ㄕˊ ㄏㄡˋ ㄋㄧˇ ㄒㄧㄚˋ ㄘˋ ㄏㄨㄟˊ ㄍㄨㄛˊ?'"
          :pinyin="'shen2 me shi2 hou4 ni3 xia4 ci4 hui2 guo2?'"
          :translation="'次回はいつ帰国しますか?'"
        />
        <br>
        <p>
          ・打算
        </p>
        <SentenceFormat
          :sentence="'老師打算下下星期得放假。'"
          :bopomofo="'ㄌㄠˇ ㄕ ㄉㄚˇ ㄙㄨㄢˋ ㄒㄧㄚˋ ㄒㄧㄚˋ ㄒㄧㄥ ㄑㄧ ㄉㄟˇ ㄈㄤˋ ㄐㄧㄚˋ.'"
          :pinyin="'lao3 shi1 da3 suan4 xia4 xia4 xing1 qi1 dei3 fang4 jia4.'"
          :translation="'先生は再来週休暇を取る予定です。'"
        />
        <br>
        <p>
          ・電視
        </p>
        <SentenceFormat
          :sentence="'最近看Youtube比受歡迎看電視。'"
          :bopomofo="'ㄗㄨㄟˋ ㄐㄧㄣˋ ㄎㄢˋ Youtube ㄅㄧˇ ㄕㄡˋ ㄏㄨㄢ ㄧㄥˊ ㄎㄢˋ ㄉㄧㄢˋ ㄕˋ.'"
          :pinyin="'zui4 jin4 kan4 Youtube bi3 shou4 huan1 ying2 kan4 dian4 shi4.'"
          :translation="'最近はテレビを見るよりもYouTubeの方が人気があります。'"
        />
        <br>
        <p>
          ・影片
        </p>
        <SentenceFormat
          :sentence="'做影片要快電腦。'"
          :bopomofo="'ㄗㄨㄛˋ ㄧㄥˇ ㄆㄧㄢ ㄧㄠˋ ㄎㄨㄞˋ ㄉㄧㄢˋ ㄋㄠˇ.'"
          :pinyin="'zuo4 ying3 pian4 yao4 kuai4 dian4 nao3.'"
          :translation="'ビデオを作成するには高速のコンピューターが必要です。'"
        />
        <br>
        <p>
          ・旅行
        </p>
        <SentenceFormat
          :sentence="'你已經完旅行準備?'"
          :bopomofo="'ㄋㄧˇ ㄧˇ ㄐㄧㄥ ㄨㄢˊ ㄌㄩˇ ㄒㄧㄥˊ ㄓㄨㄣˇ ㄅㄟˋ?'"
          :pinyin="'ni3 yi3 jing1 wan2 lu3 xing2 zhun3 bei4?'"
          :translation="'旅行の準備はできていますか?'"
        />
        <br>
        <p>
          ・功課
        </p>
        <SentenceFormat
          :sentence="'做這個功課後, 我跟我朋友會一起去逛街。'"
          :bopomofo="'ㄗㄨㄛˋ ㄓㄜˋ ㄍㄜˋ ㄍㄨㄥ ㄎㄜˋ ㄏㄡˋ, ㄨㄛˇ ㄍㄣ ㄨㄛˇ ㄆㄥˊ ㄧㄡˇ ㄏㄨㄟˋ ㄧˋ ㄑㄧˇ ㄑㄩˋ ㄍㄨㄤˋ ㄐㄧㄝ.'"
          :pinyin="'zuo4 zhe4 ge4 gong1 ke4 hou4, wo3 gen1 wo3 peng2 you3 hui4 yi1 qi3 qu4 guang4 jie1.'"
          :translation="'この宿題を終えたら、友達と一緒に買い物に行きます。'"
        />
        <br>
        <p>
          ・出去
        </p>
        <SentenceFormat
          :sentence="'現在太熱, 我想等一下出去。'"
          :bopomofo="'ㄒㄧㄢˋ ㄗㄞˋ ㄊㄞˋ ㄖㄜˋ, ㄨㄛˇ ㄒㄧㄤˇ ㄉㄥˇ ㄧ ㄒㄧㄚˋ ㄔㄨ ㄑㄩˋ.'"
          :pinyin="'xian4 zai4 tai4 re4, wo3 xiang3 deng3 yi1 xia4 chu1 qu4.'"
          :translation="'今は暑すぎるので、後で外出したいです。'"
        />
        <br>
        <p>
          ・大概
        </p>
        <SentenceFormat
          :sentence="'他應該要大概兩小時到市區去。'"
          :bopomofo="'ㄊㄚ ㄧㄥ ㄍㄞ ㄧㄠˋ ㄉㄚˋ ㄍㄞˋ ㄌㄧㄤˇ ㄒㄧㄠˇ ㄕˊ ㄉㄠˋ ㄕˋ ㄑㄩ ㄑㄩˋ.'"
          :pinyin="'ta1 ying1 gai1 yao4 da4 gai4 liang3 xiao3 shi2 dao4 shi4 qu1 qu4.'"
          :translation="'彼は約２時間で市内へ着くはずです。'"
        />
        <br>
        <p>
          ・放假
        </p>
        <SentenceFormat
          :sentence="'我每年夏天放一個星期假。'"
          :bopomofo="'ㄨㄛˇ ㄇㄟˇ ㄋㄧㄢˊ ㄒㄧㄚˋ ㄊㄧㄢ ㄈㄤˋ ㄧˊ ㄍㄜˋ ㄒㄧㄥ ㄑㄧ ㄐㄧㄚˇ.'"
          :pinyin="'wo3 mei3 nian2 xia4 tian1 fang4 yi1 ge4 xing1 qi1 jia3.'"
          :translation="'私は毎年夏に一週間休暇を取ります。'"
        />
        <br>
        <p>
          ・下個星期
        </p>
        <SentenceFormat
          :sentence="'如果臺風來到, 下個星期我們得取消旅行。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄊㄞˊ ㄈㄥ ㄌㄞˊ ㄉㄠˋ, ㄒㄧㄚˋ ㄍㄜˋ ㄒㄧㄥ ㄑㄧ ㄨㄛˇ ㄇㄣ˙ ㄉㄟˇ ㄑㄩˇ ㄒㄧㄠ ㄌㄩˇ ㄒㄧㄥˊ.'"
          :pinyin="'ru2 guo3 tai1 feng1 lai2 dao4, xia4 ge4 xing1 qi1 wo3 men dei3 qu3 xiao1 lu3 xing2.'"
          :translation="'台風が来たら、来週の旅行をキャンセルしなければなりません。'"
        />
        <br>
        <p>
          ・有時候
        </p>
        <SentenceFormat
          :sentence="'有空的時候, 有時候我去逛逛,  有時候我找朋友。'"
          :bopomofo="'ㄧㄡˇ ㄎㄨㄥˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄧㄡˇ ㄕˊ ㄏㄡˋ ㄨㄛˇ ㄑㄩˋ ㄍㄨㄤˋ ㄍㄨㄤˋ, ㄧㄡˇ ㄕˊ ㄏㄡˋ ㄨㄛˇ ㄓㄠˇ ㄆㄥˊ ㄧㄡˇ.'"
          :pinyin="'you3 kong4 de shi2 hou4, you3 shi2 hou4 wo3 qu4 guang4 guang4, you3 shi2 hou4 wo3 zhao3 peng2 you3.'"
          :translation="'暇な時は、 ぶらぶらする事もあれば、 友達に会う事もあります。'"
        />
        <br>
        <p>
          ・多久
        </p>
        <SentenceFormat
          :sentence="'這個菜你要煮多久?'"
          :bopomofo="'ㄓㄜˋ ㄍㄜˋ ㄘㄞˋ ㄋㄧˇ ㄧㄠˋ ㄓㄨˇ ㄉㄨㄛ ㄐㄧㄡˇ?'"
          :pinyin="'zhe4 ge4 cai4 ni3 yao4 zhu3 duo1 jiu3?'"
          :translation="'この料理はどのくらい煮なければいけませんか?'"
        />
        <br>
        <p>
          ・臺東
        </p>
        <SentenceFormat
          :sentence="'從臺中到臺東, 你可以去沿著海岸還是越山上。'"
          :bopomofo="'ㄘㄨㄥˊ ㄊㄞˊ ㄓㄨㄥ ㄉㄠˋ ㄊㄞˊ ㄉㄨㄥ, ㄋㄧˇ ㄎㄜˇ ㄧˇ ㄑㄩˋ ㄧㄢˊ ㄓㄜ˙ ㄏㄞˇ ㄢˋ ㄏㄞˊ ㄕˋ ㄩㄝˋ ㄕㄢ ㄕㄤˋ.'"
          :pinyin="'cong2 tai1 zhong1 dao4 tai1 dong1, ni3 ke3 yi3 qu4 yan2 zhe hai3 an4 hai2 shi4 yue4 shan1 shang4.'"
          :translation="'台中から台東まで、海岸沿いまたは山を越えて行くことができます。'"
        />
        <br>
        <p>
          ・女
        </p>
        <SentenceFormat
          :sentence="'我覺得我們後面的女生是警察。'"
          :bopomofo="'ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄨㄛˇ ㄇㄣ˙ ㄏㄡˋ ㄇㄧㄢˋ ㄉㄧˊ ㄋㄩˇ ㄕㄥ ㄕˋ ㄐㄧㄥˇ ㄔㄚˊ.'"
          :pinyin="'wo3 jue2 de wo3 men hou4 mian4 de nu3 sheng1 shi4 jing3 cha2.'"
          :translation="'私たちの後ろの女性は警官だと思います。'"
        />
        <br>
        <p>
          ・月
        </p>
        <SentenceFormat
          :sentence="'在台灣, 五月已經雨季。'"
          :bopomofo="'ㄗㄞˋ ㄊㄞˊ ㄨㄢ, ㄨˇ ㄩㄝˋ ㄧˇ ㄐㄧㄥ ㄩˇ ㄐㄧˋ.'"
          :pinyin="'zai4 tai2 wan1, wu3 yue4 yi3 jing1 yu3 ji4.'"
          :translation="'台湾では、5月は既に雨季です。'"
        />
        <br>
        <p>
          ・號
        </p>
        <SentenceFormat
          :sentence="'七月七號是星期幾?'"
          :bopomofo="'ㄑㄧ ㄩㄝˋ ㄑㄧ ㄏㄠˋ ㄕˋ ㄒㄧㄥ ㄑㄧ ㄐㄧˇ.'"
          :pinyin="'qi1 yue4 qi1 hao4 shi4 xing1 qi1 ji3?'"
          :translation="'7月7日は何曜日ですか?'"
        />
        <br>
        <p>
          ・帶
        </p>
        <SentenceFormat
          :sentence="'我找可以帶我的狗的餐廳。'"
          :bopomofo="'ㄨㄛˇ ㄓㄠˇ ㄎㄜˇ ㄧˇ ㄉㄞˋ ㄨㄛˇ ㄉㄜ˙ ㄍㄡˇ ㄉㄜ˙ ㄘㄢ ㄊㄧㄥ.'"
          :pinyin="'wo3 zhao3 ke3 yi3 dai4 wo3 de gou3 de can1 ting1.'"
          :translation="'犬を連れて行けるレストランを探しています。'"
        />
        <br>
        <p>
          ・她
        </p>
        <SentenceFormat
          :sentence="'雖然很熱, 她總是穿長袖。'"
          :bopomofo="'ㄙㄨㄟ ㄖㄢˊ ㄏㄣˇ ㄖㄜˋ, ㄊㄚ ㄗㄨㄥˇ ㄕˋ ㄔㄨㄢ ㄔㄤˊ ㄒㄧㄡˋ.'"
          :pinyin="'sui1 ran2 hen3 re4, ta1 zong3 shi4 chuan1 chang2 xiu4.'"
          :translation="'暑いのに、 彼女はいつも長袖を着ています。'"
        />
        <br>
        <p>
          ・還
        </p>
        <SentenceFormat
          :sentence="'我買的東西還沒有送到我家。'"
          :bopomofo="'ㄨㄛˇ ㄇㄞˇ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ ㄏㄞˊ ㄇㄟˊ ㄧㄡˇ ㄙㄨㄥˋ ㄉㄠˋ ㄨㄛˇ ㄐㄧㄚ.'"
          :pinyin="'wo3 mai3 de dong1 xi1 hai2 mei2 you3 song4 dao4 wo3 jia1.'"
          :translation="'私が買ったものはまだ家に届いていません。'"
        />
        <br>
        <p>
          ・建議
        </p>
        <SentenceFormat
          :sentence="'如果有人有建議，請舉手。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄧㄡˇ ㄖㄣˊ ㄧㄡˇ ㄐㄧㄢˋ ㄧˋ， ㄑㄧㄥˇ ㄐㄩˇ ㄕㄡˇ.'"
          :pinyin="'ru2 guo3 you3 ren2 you3 jian4 yi4, qing3 ju3 shou3.'"
          :translation="'提案がある人がいれば、 手を挙げてください。'"
        />
        <br>
        <p>
          ・夜市
        </p>
        <SentenceFormat
          :sentence="'逛逛夜市的時候，你應該帶零錢。'"
          :bopomofo="'ㄍㄨㄤˋ ㄍㄨㄤˋ ㄧㄝˋ ㄕˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ， ㄋㄧˇ ㄧㄥ ㄍㄞ ㄉㄞˋ ㄌㄧㄥˊ ㄑㄧㄢˊ.'"
          :pinyin="'guang4 guang4 ye4 shi4 de shi2 hou4, ni3 ying1 gai1 dai4 ling2 qian2.'"
          :translation="'夜市に行くときは、 小銭を持って行った方が良いです。'"
        />
        <br>
        <p>
          ・應該
        </p>
        <SentenceFormat
          :sentence="'這個時間， 商店應該已經關門。'"
          :bopomofo="'ㄓㄜˋ ㄍㄜˋ ㄕˊ ㄐㄧㄢ， ㄕㄤ ㄉㄧㄢˋ ㄧㄥ ㄍㄞ ㄧˇ ㄐㄧㄥ ㄍㄨㄢ ㄇㄣˊ.'"
          :pinyin="'zhe4 ge4 shi2 jian1, shang1 dian4 ying1 gai1 yi3 jing1 guan1 men2.'"
          :translation="'この時間、 店は既に閉まっている筈です。'"
        />
        <br>
        <p>
          ・逛
        </p>
        <SentenceFormat
          :sentence="'沒什麼事可做， 所以我們在城市逛逛。'"
          :bopomofo="'ㄇㄟˊ ㄕㄣˊ ㄇㄜ˙ ㄕˋ ㄎㄜˇ ㄗㄨㄛˋ， ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄇㄣ˙ ㄗㄞˋ ㄔㄥˊ ㄕˋ ㄍㄨㄤˋ ㄍㄨㄤˋ.'"
          :pinyin="'mei2 shen2 me shi4 ke3 zuo4, suo3 yi3 wo3 men zai4 cheng2 shi4 guang4 guang4.'"
          :translation="'何もすることがなかったので、 私達は街をぶらぶらしました。'"
        />
        <br>
        <p>
          ・特別
        </p>
        <SentenceFormat
          :sentence="'在許多餐廳中， 我認為那家餐廳的味道特別。'"
          :bopomofo="'ㄗㄞˋ ㄒㄩˇ ㄉㄨㄛ ㄘㄢ ㄊㄧㄥ ㄓㄨㄥ， ㄨㄛˇ ㄖㄣˋ ㄨㄟˊ ㄋㄚˋ ㄐㄧㄚ ㄘㄢ ㄊㄧㄥ ㄉㄜ˙ ㄨㄟˋ ㄉㄠˋ ㄊㄜˋ ㄅㄧㄝˊ.'"
          :pinyin="'zai3 xu3 duo1 can1 ting1 zhong1, wo3 ren4 wei2 na4 jia1 can1 ting1 de wei4 dao4 te4 bie2.'"
          :translation="'多くのレストランがある中で、 そのレストランの味は特別だと思います。'"
        />
        <br>
        <p>
          ・茶館
        </p>
        <SentenceFormat
          :sentence="'下午我會停在茶館，然後跟朋友一起去逛街。'"
          :bopomofo="'ㄒㄧㄚˋ ㄨˇ ㄨㄛˇ ㄏㄨㄟˋ ㄊㄧㄥˊ ㄗㄞˋ ㄔㄚˊ ㄍㄨㄢˇ， ㄖㄢˊ ㄏㄡˋ ㄍㄣ ㄆㄥˊ ㄧㄡˇ ㄧˋ ㄑㄧˇ ㄑㄩˋ ㄍㄨㄤˋ ㄐㄧㄝ.'"
          :pinyin="'xia4 wu3 wo3 hui4 ting2 zai4 cha2 guan3, ran2 hou4 gen1 peng2 you3 yi1 qi3 qu4 guang4 jie1.'"
          :translation="'午後はお茶屋さんに寄ってから、 友達と買い物に行きます。'"
        />
        <br>
        <p>
          ・決定
        </p>
        <SentenceFormat
          :sentence="'你決定了什麼時間預約餐廳嗎?'"
          :bopomofo="'ㄋㄧˇ ㄐㄩㄝˊ ㄉㄧㄥˋ ㄌㄜ˙ ㄕㄣˊ ㄇㄜ˙ ㄕˊ ㄐㄧㄢ ㄩˋ ㄩㄝ ㄘㄢ ㄊㄧㄥㄇㄚ˙?'"
          :pinyin="'ni3 jue2 ding4 le shen2 me shi2 jian1 yu4 yue1 can1 ting1 ma2?'"
          :translation="'レストランを何時に予約するか決めましたか?'"
        />
        <br>
        <p>
          ・要是
        </p>
        <SentenceFormat
          :sentence="'要是你有空， 請從便利店取行李。'"
          :bopomofo="'ㄧㄠˋ ㄕˋ ㄋㄧˇ ㄧㄡˇ ㄎㄨㄥˋ， ㄑㄧㄥˇ ㄘㄨㄥˊ ㄅㄧㄢˋ ㄌㄧˋ ㄉㄧㄢˋ ㄑㄩˇ ㄒㄧㄥˊ ㄌㄧˇ.'"
          :pinyin="'yao4 shi4 ni3 you3 kong4, qing3 cong2 bian4 li4 dian4 qu3 xing2 li3.'"
          :translation="'暇なら、 コンビニから荷物を受け取って来てください。'"
        />
        <br>
        <p>
          ・就
        </p>
        <SentenceFormat
          :sentence="'你要是認識他， 就向我介紹他。'"
          :bopomofo="'ㄋㄧˇ ㄧㄠˋ ㄕˋ ㄖㄣˋ ㄕ˙ ㄊㄚ， ㄐㄧㄡˋ ㄒㄧㄤˋ ㄨㄛˇ ㄐㄧㄝˋ ㄕㄠˋ ㄊㄚ.'"
          :pinyin="'ni3 yao4 shi4 ren4 shi2 ta1, jiu4 xiang4 wo3 jie4 shao4 ta1.'"
          :translation="'彼を知っているなら、 私に彼を紹介してください。'"
        />
        <br>
        <p>
          ・貓空
        </p>
        <SentenceFormat
          :sentence="'從貓空, 可以看到台北的夜景。'"
          :bopomofo="'ㄘㄨㄥˊ ㄇㄠ ㄎㄨㄥ, ㄎㄜˇ ㄧˇ ㄎㄢˋ ㄉㄠˋ ㄊㄞˊ ㄅㄟˇ ㄉㄜ˙ ㄧㄝˋ ㄐㄧㄥˇ.'"
          :pinyin="'cong2 mao1 kong1, ke3 yi3 kan4 da4o tai2 bei3 de ye4 jing3.'"
          :translation="'貓空からは台北の夜景が一望できます。'"
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
