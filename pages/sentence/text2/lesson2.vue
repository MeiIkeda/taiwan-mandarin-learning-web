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
          當代中文課程課2・第2章
        </h1>
        <p>
          【新単語+例文】
        </p>
        <p>
          ・還是
        </p>
        <SentenceFormat
          :sentence="'雨和風太大, 你還是穿雨衣吧。'"
          :bopomofo="'ㄩˇ ㄏㄢˋ ㄈㄥ ㄊㄞˋ ㄉㄚˋ, ㄋㄧˇ ㄏㄞˊ ㄕˋ ㄔㄨㄢ ㄩˇ ㄧ ㄅㄚ˙.'"
          :pinyin="'yu3 han4 feng1 tai4 da4, ni3 hai2 shi4 chuan1 yu3 yi1 ba.'"
          :translation="'雨も風も強いので、 レインコートを着ていった方がいいですよ。'"
        />
        <br>
        <p>
          ・早
        </p>
        <SentenceFormat
          :sentence="'早! 今天我們去哪家早飯店呢?'"
          :bopomofo="'ㄗㄠˇ! ㄐㄧㄣ ㄊㄧㄢ ㄨㄛˇ ㄇㄣ˙ ㄑㄩˋ ㄋㄚˇ ㄐㄧㄚ ㄗㄠˇ ㄈㄢˋ ㄉㄧㄢˋ ㄋㄜ˙?'"
          :pinyin="'zao3! jin1 tian1 wo3 men qu4 na3 jia1 zao3 fan4 dian4 ne?'"
          :translation="'おはようございます！ 今日はどこの朝ご飯屋さんに行きましょうか?'"
        />
        <br>
        <p>
          ・約
        </p>
        <SentenceFormat
          :sentence="'我約了孩子去玩公園。'"
          :bopomofo="'ㄨㄛˇ ㄩㄝ ㄌㄜ˙ ㄏㄞˊ ㄗ˙ ㄑㄩˋ ㄨㄢˊ ㄍㄨㄥ ㄩㄢˊ.'"
          :pinyin="'wo3 yue1 le hai2 zi3 qu4 wan2 gong1 yuan2.'"
          :translation="'子供を公園に遊びに連れて行くと約束しました。'"
        />
        <br>
        <p>
          ・對面
        </p>
        <SentenceFormat
          :sentence="'在車站對面的大樓是我們會住的飯店。'"
          :bopomofo="'ㄗㄞˋ ㄔㄜ ㄓㄢˋ ㄉㄨㄟˋ ㄇㄧㄢˋ ㄉㄧˊ ㄉㄚˋ ㄌㄡˊ ㄕˋ ㄨㄛˇ ㄇㄣ˙ ㄏㄨㄟˋ ㄓㄨˋ ㄉㄜ˙ ㄈㄢˋ ㄉㄧㄢˋ.'"
          :pinyin="'zai4 che1 zhan4 dui4 mian4 de da4 lou2 shi4 wo3 men hui4 zhu4 de fan4 dian4.'"
          :translation="'駅の向かいの建物が私達が泊まるホテルです。'"
        />
        <br>
        <p>
          ・直接
        </p>
        <SentenceFormat
          :sentence="'現在往目的地沒有直接航班。'"
          :bopomofo="'ㄒㄧㄢˋ ㄗㄞˋ ㄨㄤˇ ㄇㄨˋ ㄉㄧˋ ㄉㄧˋ ㄇㄟˊ ㄧㄡˇ ㄓˊ ㄐㄧㄝ ㄏㄤˊ ㄅㄢ.'"
          :pinyin="'xian4 zai4 wang3 mu4 di4 di4 mei2 you3 zhi2 jie1 hang2 ban1.'"
          :translation="'現在、目的地への直行便はありません。'"
        />
        <br>
        <p>
          ・不必
        </p>
        <SentenceFormat
          :sentence="'你不必帶很多東西， 旅行只是兩天一夜。'"
          :bopomofo="'ㄋㄧˇ ㄅㄨˋ ㄅㄧˋ ㄉㄞˋ ㄏㄣˇ ㄉㄨㄛ ㄉㄨㄥ ㄒㄧ˙， ㄌㄩˇ ㄒㄧㄥˊ ㄓˇ ㄕˋ ㄌㄧㄤˇ ㄊㄧㄢ ㄧ ㄧㄝˋ.'"
          :pinyin="'ni3 bu4 bi4 dai4 hen3 duo1 dong1 xi, lu3 xing2 zhi3 shi4 liang3 tian1 yi1 ye4.'"
          :translation="'たくさんものを持ってくる必要はありません、 1泊2日だけの旅行です。'"
        />
        <br>
        <p>
          ・換
        </p>
        <SentenceFormat
          :sentence="'我們換空氣吧， 麻煩你開窗戶?'"
          :bopomofo="'ㄨㄛˇ ㄇㄣ˙ ㄏㄨㄢˋ ㄎㄨㄥ ㄑㄧˋ ㄅㄚ˙， ㄇㄚˊ ㄈㄢˊ ㄋㄧˇ ㄎㄞ ㄔㄨㄤ ㄏㄨˋ?'"
          :pinyin="'wo3 men huan4 kong1 qi4 ba, ma2 fan2 ni3 kai1 chuang1 hu4?'"
          :translation="'空気を入れ替えましょう、 窓を開けてもらえますか?'"
        />
        <br>
        <p>
          ・車站
        </p>
        <SentenceFormat
          :sentence="'在車站屋頂的燕窩現在有小鳥。'"
          :bopomofo="'ㄗㄞˋ ㄔㄜ ㄓㄢˋ ㄨ ㄉㄧㄥˇ ㄉㄜ˙ ㄧㄢˋ ㄨㄛ ㄒㄧㄢˋ ㄗㄞˋ ㄧㄡˇ ㄒㄧㄠˇ ㄋㄧㄠˇ.'"
          :pinyin="'zai4 che1 zhan4 wu1 ding3 de yan4 wo1 xian4 zai4 you3 xiao3 niao3.'"
          :translation="'駅の屋根にある鳥の巣に小鳥がいます。'"
        />
        <br>
        <p>
          ・麻煩
        </p>
        <SentenceFormat
          :sentence="'因為有很多麻煩的文件， 今天我得加班。'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄇㄚˊ ㄈㄢˊ ㄉㄜ˙ ㄨㄣˊ ㄐㄧㄢˋ， ㄐㄧㄣ ㄊㄧㄢ ㄨㄛˇ ㄉㄟˇ ㄐㄧㄚ ㄅㄢ.'"
          :pinyin="'yin1 wei4 you3 hen3 duo1 ma2 fan2 de wen2 jian4, jin1 tian1 wo3 dei3 jia1 ban1.'"
          :translation="'面倒な書類が多いので、 今日は残業しなければなりません。'"
        />
        <br>
        <p>
          ・趕快
        </p>
        <SentenceFormat
          :sentence="'如果我不趕快完功課， 我不能出去。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄨㄛˇ ㄅㄨˋ ㄍㄢˇ ㄎㄨㄞˋ ㄨㄢˊ ㄍㄨㄥ ㄎㄜˋ， ㄨㄛˇ ㄅㄨˋ ㄋㄥˊ ㄔㄨ ㄑㄩˋ.'"
          :pinyin="'ru2 guo3 wo3 bu4 gan3 kuai4 wan2 gong1 ke4, wo3 bu4 neng2 chu1 qu4.'"
          :translation="'宿題を早く終わらせないと外出できません。'"
        />
        <br>
        <p>
          ・走
        </p>
        <SentenceFormat
          :sentence="'火車快要出發， 買票的人要趕快走。'"
          :bopomofo="'ㄏㄨㄛˇ ㄔㄜ ㄎㄨㄞˋ ㄧㄠˋ ㄔㄨ ㄈㄚ， ㄇㄞˇ ㄆㄧㄠˋ ㄉㄜ˙ ㄖㄣˊ ㄧㄠˋ ㄍㄢˇ ㄎㄨㄞˋ ㄗㄡˇ.'"
          :pinyin="'huo3 che1 kuai4 yao4 chu1 fa1, mai3 piao4 de ren2 yao4 gan3 kuai4 zou3.'"
          :translation="'電車がもうすぐ出発するので、 チケットを買った人は早く行かなくてはいけません。'"
        />
        <br>
        <p>
          ・班次
        </p>
        <SentenceFormat
          :sentence="'台北的捷運， 每三分有班次。'"
          :bopomofo="'ㄊㄞˊ ㄅㄟˇ ㄉㄜ˙ ㄐㄧㄝˊ ㄩㄣˋ， ㄇㄟˇ ㄙㄢ ㄈㄣ ㄧㄡˇ ㄅㄢ ㄘˋ.'"
          :pinyin="'tai2 bei3 de jie2 yun4, mei3 san1 fen1 you3 ban1 ci4.'"
          :translation="'台北のMRTは、 3分ごとに電車が来ます。'"
        />
        <br>
        <p>
          ・禮拜
        </p>
        <SentenceFormat
          :sentence="'因為這個是第一次的嘗試， 準備要幾個禮拜。'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄓㄜˋ ㄍㄜˋ ㄕˋ ㄉㄧˋ ㄧ ㄘˋ ㄉㄜ˙ ㄔㄤˊ ㄕˋ， ㄓㄨㄣˇ ㄅㄟˋ ㄧㄠˋ ㄐㄧˇ ㄍㄜˋ ㄌㄧˇ ㄅㄞˋ.'"
          :pinyin="'yin1 wei4 zhe4 ge4 shi4 di4 yi1 ci4 de chang2 shi4, zhun3 bei4 yao4 ji3 ge4 li3 bai4.'"
          :translation="'これは初めての試みなので、 準備に数週間かかります。'"
        />
        <br>
        <p>
          ・見
        </p>
        <SentenceFormat
          :sentence="'我們兩個白天很忙， 下班後見。'"
          :bopomofo="'ㄨㄛˇ ㄇㄣ˙ ㄌㄧㄤˇ ㄍㄜˋ ㄅㄞˊ ㄊㄧㄢ ㄏㄣˇ ㄇㄤˊ， ㄒㄧㄚˋ ㄅㄢ ㄏㄡˋ ㄐㄧㄢˋ.'"
          :pinyin="'wo3 men liang3 ge4 bai2 tian1 hen3 mang2, xia4 ban1 hou4 jian4.'"
          :translation="'私達は2人とも昼間忙しいので、 仕事が終わったら会いましょう。'"
        />
        <br>
        <p>
          ・電腦展
        </p>
        <SentenceFormat
          :sentence="'。'"
          :bopomofo="'.'"
          :pinyin="'.'"
          :translation="'。'"
        />
        <br>
        <p>
          ・世貿展覽館
        </p>
        <SentenceFormat
          :sentence="'。'"
          :bopomofo="'.'"
          :pinyin="'.'"
          :translation="'。'"
        />
        <br>
        <p>
          ・展覽館
        </p>
        <SentenceFormat
          :sentence="'他借了小小的展覽館展出他畫的畫。'"
          :bopomofo="'ㄊㄚ ㄐㄧㄝˋ ㄌㄜ˙ ㄒㄧㄠˇ ㄒㄧㄠˇ ㄉㄜ˙ ㄓㄢˇ ㄌㄢˇ ㄍㄨㄢˇ ㄓㄢˇ ㄔㄨ ㄊㄚ ㄏㄨㄚˋ ㄉㄜ˙ ㄏㄨㄚˋ.'"
          :pinyin="'ta1 jie4 le xiao3 xiao3 de zhan3 lan3 guan3 zhan3 chu1 ta1 hua4 de hua4.'"
          :translation="'彼は自分の絵を展示するために小さな展示場を借りました。。'"
        />
        <br>
        <p>
          ・台北101
        </p>
        <SentenceFormat
          :sentence="'新年的時刻， 在台北101有很壯觀的煙花。'"
          :bopomofo="'ㄒㄧㄣ ㄋㄧㄢˊ ㄉㄜ˙ ㄕˊ ㄎㄜˋ， ㄗㄞˋ ㄊㄞˊ ㄅㄟˇ 101 ㄧㄡˇ ㄏㄣˇ ㄓㄨㄤˋ ㄍㄨㄢ ㄉㄜ˙ ㄧㄢ ㄏㄨㄚ.'"
          :pinyin="'xin1 nian2 de shi2 ke4. zai4 tai2 bei3 101 you3 hen3 zhuang4 guan1 de yan1 hua1.'"
          :translation="'年越しの時刻には、 台北101で壮大な花火が上がります. 。'"
        />
        <br>
        <p>
          ・台北
        </p>
        <SentenceFormat
          :sentence="'台北的房租太貴， 所以年輕人在新竹租房子。'"
          :bopomofo="'ㄊㄞˊ ㄅㄟˇ ㄉㄜ˙ ㄈㄤˊ ㄗㄨ ㄊㄞˋ ㄍㄨㄟˋ， ㄙㄨㄛˇ ㄧˇ ㄋㄧㄢˊ ㄑㄧㄥ ㄖㄣˊ ㄗㄞˋ ㄒㄧㄣ ㄓㄨˊ ㄗㄨ ㄈㄤˊ ㄗ˙.'"
          :pinyin="'tai2 bei3 de fang2 zu1 tai4 gui4, suo3 yi3 nian2 qing1 ren2 zai4 xin1 zhu2 zu1 fang2 zi3.'"
          :translation="'台北の家賃は高すぎるので、 若い人は新竹で部屋を借ります。'"
        />
        <br>
        <p>
          ・2號線
        </p>
        <SentenceFormat
          :sentence="'。'"
          :bopomofo="'.'"
          :pinyin="'.'"
          :translation="'。'"
        />
        <br>
        <p>
          ・別急
        </p>
        <SentenceFormat
          :sentence="'別急， 超市的打折剛剛開始了。'"
          :bopomofo="'ㄅㄧㄝˊ ㄐㄧˊ， ㄔㄠ ㄕˋ ㄉㄜ˙ ㄉㄚˇ ㄓㄜˊ ㄍㄤ ㄍㄤ ㄎㄞ ㄕˇ ㄌㄜ˙.'"
          :pinyin="'bie2 ji2, chao1 shi4 de da3 zhe2 gang1 gang1 kai1 shi3 le.'"
          :translation="'急がないで下さい、 スーパーの安売りは始まったばかりです。'"
        />
        <br>
        <p>
          ・飛機
        </p>
        <SentenceFormat
          :sentence="'我也喜歡看飛機， 所以我常常去機場。'"
          :bopomofo="'ㄨㄛˇ ㄧㄝˇ ㄒㄧˇ ㄏㄨㄢ ㄎㄢˋ ㄈㄟ ㄐㄧ， ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄔㄤˊ ㄔㄤˊ ㄑㄩˋ ㄐㄧ ㄔㄤˇ.'"
          :pinyin="'wo3 ye3 xi3 huan1 kan4 fei1 ji1, suo3 yi3 wo3 chang2 chang2 qu4 ji1 chang2.'"
          :translation="'飛行機は見るのも好きなので、 空港にはよく行きます。'"
        />
        <br>
        <p>
          ・轉機
        </p>
        <SentenceFormat
          :sentence="'你得兩次轉機。 最初的是在西班牙國，下次的是在美國。'"
          :bopomofo="'ㄋㄧˇ ㄉㄟˇ ㄌㄧㄤˇ ㄘˋ ㄓㄨㄢˇ ㄐㄧ。 ㄗㄨㄟˋ ㄔㄨ ㄉㄜ˙ ㄕˋ ㄗㄞˋ ㄒㄧ ㄅㄢ ㄧㄚˊ ㄍㄨㄛˊ， ㄒㄧㄚˋ ㄘˋ ㄉㄜ˙ ㄕˋ ㄗㄞˋ ㄇㄟˇ ㄍㄨㄛˊ.'"
          :pinyin="'ni3 dei3 liang3 ci4 zhuan3 ji1. zui4 chu1 de shi4 zai4 xi1 ban1 ya2 guo2, xia4 ci4 de shi4 zai4 mei3 guo2.'"
          :translation="'あなたは2回トランジットする必要があります。 最初はスペインで、 次はアメリカです。'"
        />
        <br>
        <p>
          ・機場
        </p>
        <SentenceFormat
          :sentence="'兩個小時以前我們一定到機場， 否則遲到坐飛機。'"
          :bopomofo="'ㄌㄧㄤˇ ㄍㄜˋ ㄒㄧㄠˇ ㄕˊ ㄧˇ ㄑㄧㄢˊ ㄨㄛˇ ㄇㄣ˙ ㄧˊ ㄉㄧㄥˋ ㄉㄠˋ ㄐㄧ ㄔㄤˇ， ㄈㄡˇ ㄗㄜˊ ㄔˊ ㄉㄠˋ ㄗㄨㄛˋ ㄈㄟ ㄐㄧ.'"
          :pinyin="'liang3 ge4 xiao3 shi2 yi3 qian2 wo3 men yi1 ding4 dao4 ji1 chang2, fou3 ze2 chi2 dao4 zuo4 fei1 ji1.'"
          :translation="'2時間前には空港に着かなくてはいけません、 さもないと飛行機に乗り遅れます。'"
        />
        <br>
        <p>
          ・巴士
        </p>
        <SentenceFormat
          :sentence="'坐台北的巴士可以用悠遊卡。'"
          :bopomofo="'ㄗㄨㄛˋ ㄊㄞˊ ㄅㄟˇ ㄉㄜ˙ ㄅㄚ ㄕˋ ㄎㄜˇ ㄧˇ ㄩㄥˋ ㄧㄡ ㄧㄡˊ ㄎㄚˇ.'"
          :pinyin="'zuo4 tai2 bei3 de ba1 shi4 ke3 yi3 yong4 you1 you2 ka3.'"
          :translation="'台北でバスに乗るには悠遊カードが使えます。'"
        />
        <br>
        <p>
          ・市區
        </p>
        <SentenceFormat
          :sentence="'通勤的時間市區太擁擠、 我們別的時間出門吧。'"
          :bopomofo="'ㄊㄨㄥ ㄑㄧㄣˊ ㄉㄜ˙ ㄕˊ ㄐㄧㄢ ㄕˋ ㄑㄩ ㄊㄞˋ ㄩㄥ ㄐㄧˇ、 ㄨㄛˇ ㄇㄣ˙ ㄅㄧㄝˊ ㄉㄜ˙ ㄕˊ ㄐㄧㄢ ㄔㄨ ㄇㄣˊ ㄅㄚ˙.'"
          :pinyin="'tong1 qin2 de shi2 jian1 shi4 qu1 tai4 yong1 ji3, wo3 men bie2 de shi2 jian1 chu1 men2 ba.'"
          :translation="'通勤時間は市内がとても混んでいるので、 別の時間に出かけましょう。'"
        />
        <br>
        <p>
          ・下
        </p>
        <SentenceFormat
          :sentence="'在台北車站別忘記下巴士。 那個站是從這裡第三個。'"
          :bopomofo="'ㄗㄞˋ ㄊㄞˊ ㄅㄟˇ ㄔㄜ ㄓㄢˋ ㄅㄧㄝˊ ㄨㄤˋ ㄐㄧˋ ㄒㄧㄚˋ ㄅㄚ ㄕˋ. ㄋㄚˋ ㄍㄜˋ ㄓㄢˋ ㄕˋ ㄘㄨㄥˊ ㄓㄜˋ ㄌㄧˇ ㄉㄧˋ ㄙㄢ ㄍㄜ˙.'"
          :pinyin="'zai4 tai2 bei3 che1 zhan4 bie2 wang4 ji4 xia4 ba1 shi4. na4 ge4 zhan4 shi4 cong2 zhe4 li3 di4 san1 ge4.'"
          :translation="'台北駅でバスを降りるのを忘れないで下さい。 この駅から三番目です。'"
        />
        <br>
        <p>
          ・交通
        </p>
        <SentenceFormat
          :sentence="'為了交通變通暢， 這個城市開始出租腳踏車。'"
          :bopomofo="'ㄨㄟˋ ㄌㄜ˙ ㄐㄧㄠ ㄊㄨㄥ ㄅㄧㄢˋ ㄊㄨㄥ ㄔㄤˋ， ㄓㄜˋ ㄍㄜˋ ㄔㄥˊ ㄕˋ ㄎㄞ ㄕˇ ㄔㄨ ㄗㄨ ㄐㄧㄠˇ ㄊㄚˋ ㄔㄜ.'"
          :pinyin="'wei4 le jiao1 tong1 bian4 tong1 chang4, zhe4 ge4 cheng2 shi4 kai1 shi3 chu1 zu1 jiao3 ta4 che1.'"
          :translation="'交通をスムーズにするために、 市は自転車の貸し出しを始めました。'"
        />
        <br>
        <p>
          ・便利
        </p>
        <SentenceFormat
          :sentence="'最近找餐廳很便利的網站出現了。'"
          :bopomofo="'ㄗㄨㄟˋ ㄐㄧㄣˋ ㄓㄠˇ ㄘㄢ ㄊㄧㄥ ㄏㄣˇ ㄅㄧㄢˋ ㄌㄧˋ ㄉㄜ˙ ㄨㄤˇ ㄓㄢˋ ㄔㄨ ㄒㄧㄢˋ ㄌㄜ˙.'"
          :pinyin="'zui4 jin4 zhao3 can1 ting1 hen3 bian4 li4 de wang3 zhan4 chu1 xian4 le.'"
          :translation="'最近、レストランを探すのにとても便利なウェブサイトが登場しました。'"
        />
        <br>
        <p>
          ・到處
        </p>
        <SentenceFormat
          :sentence="'因為情人節， 到處都有情侶。'"
          :bopomofo="'ㄧㄣ ㄨㄟˊ ㄑㄧㄥˊ ㄖㄣˊ ㄐㄧㄝˊ， ㄉㄠˋ ㄔㄨˋ ㄉㄡ ㄧㄡˇ有 ㄧㄥˊ ㄌㄩˇ.'"
          :pinyin="'yin1 wei4 qing2 ren2 jie2, dao4 chu4 dou1 you3 qing2 lu3.'"
          :translation="'バレンタインデーなので、 いたるところにカップルがいます。'"
        />
        <br>
        <p>
          ・路線
        </p>
        <SentenceFormat
          :sentence="'這個路線雖然便宜可是有太多轉乘， 我們用別的吧。'"
          :bopomofo="'ㄓㄜˋ ㄍㄜˋ ㄌㄨˋ ㄒㄧㄢˋ ㄙㄨㄟ ㄖㄢˊ ㄆㄧㄢˊ ㄧˊ ㄎㄜˇ ㄕˋ ㄧㄡˇ ㄊㄞˋ ㄉㄨㄛ ㄓㄨㄢˇ ㄔㄥˊ， ㄨㄛˇ ㄇㄣ˙ ㄩㄥˋ ㄅㄧㄝˊ ㄉㄜ˙ ㄅㄚ˙.'"
          :pinyin="'zhe4 ge4 lu4 xian4 sui1 ran2 pian2 yi2 ke3 shi4 you3 tai4 duo1 zhuan3 cheng2, wo3 men yong4 bie2 de ba.'"
          :translation="'このルートは安いですが乗り換えが多すぎるので、 別のルートを使いましょう。'"
        />
        <br>
        <p>
          ・複雜
        </p>
        <SentenceFormat
          :sentence="'費用系統太複雜， 我放棄了報名課。'"
          :bopomofo="'ㄈㄟˋ ㄩㄥˋ ㄒㄧˋ ㄊㄨㄥˇ ㄊㄞˋ ㄈㄨˋ ㄗㄚˊ， ㄨㄛˇ ㄈㄤˋ ㄑㄧˋ ㄌㄜ˙ ㄅㄠˋ ㄇㄧㄥˊ ㄎㄜˋ.'"
          :pinyin="'fei4 yong4 xi4 tong3 tai4 fu4 za2, wo3 fang4 qi4 le bao4 ming2 ke4.'"
          :translation="'料金体系が複雑すぎるので、 授業に申し込むのを諦めました。'"
        />
        <br>
        <p>
          ・輕鬆
        </p>
        <SentenceFormat
          :sentence="'因為台灣是很安全的地方， 旅行是輕鬆的。'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄊㄞˊ ㄨㄢ ㄕˋ ㄏㄣˇ ㄢ ㄑㄩㄢˊ ㄉㄜ˙ ㄉㄧˋ ㄈㄤ， ㄌㄩˇ ㄒㄧㄥˊ ㄕˋ ㄑㄧㄥ ㄙㄨㄥ ㄉㄜ˙.'"
          :pinyin="'yin1 wei4 tai2 wan1 shi4 hen3 an1 quan2 de di4 fang1, lu3 xing2 shi4 qing1 song4 de.'"
          :translation="'台湾はとても安全な場所なので、 旅行もリラックスしてできます。'"
        />
        <br>
        <p>
          ・東部
        </p>
        <SentenceFormat
          :sentence="'東京的東部和西部的氣氛是不同。'"
          :bopomofo="'ㄉㄨㄥ ㄐㄧㄥ ㄉㄜ˙ ㄉㄨㄥ ㄅㄨˋ ㄏㄢˋ ㄒㄧ ㄅㄨˋ ㄉㄜ˙ ㄑㄧˋ ㄈㄣ ㄕˋ ㄅㄨˋ ㄊㄨㄥˊ.'"
          :pinyin="'dong1 jing1 de dong1 bu4 han4 xi1 bu4 de qi4 fen1 shi4 bu4 tong2.'"
          :translation="'東京の東部と西部は雰囲気が違います。'"
        />
        <br>
        <p>
          ・海邊
        </p>
        <SentenceFormat
          :sentence="'如果你住在海邊， 留著短髮比較方便。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄓㄨˋ ㄗㄞˋ ㄏㄞˇ ㄅㄧㄢ， ㄌㄧㄡˊ ㄓㄜ˙ ㄉㄨㄢˇ ㄈㄚ ㄅㄧˇ ㄐㄧㄠˋ ㄈㄤ ㄅㄧㄢˋ.'"
          :pinyin="'ru2 guo3 ni3 zhu4 zai4 hai3 bian1, liu2 zhe duan3 fa4 bi3 jiao4 fang1 bian4.'"
          :translation="'海沿いに住むなら、 髪は短くしておいた方が便利です。'"
        />
        <br>
        <p>
          ・島
        </p>
        <SentenceFormat
          :sentence="'從海灘可以看見小小的島。'"
          :bopomofo="'ㄘㄨㄥˊ ㄏㄞˇ ㄊㄢ ㄎㄜˇ ㄧˇ ㄎㄢˋ ㄐㄧㄢˋ ㄒㄧㄠˇ ㄒㄧㄠˇ ㄉㄜ˙ ㄉㄠˇ.'"
          :pinyin="'cong2 hai3 tan1 ke3 yi3 kan4 jian4 xiao3 xiao3 de dao3.'"
          :translation="'ビーチからは小さな島が見えます。'"
        />
        <br>
        <p>
          ・搭
        </p>
        <SentenceFormat
          :sentence="'從台灣到外國去， 搭飛機比搭船快。'"
          :bopomofo="'ㄘㄨㄥˊ ㄊㄞˊ ㄨㄢ ㄉㄠˋ ㄨㄞˋ ㄍㄨㄛˊ ㄑㄩˋ， ㄉㄚ ㄈㄟ ㄐㄧ ㄅㄧˇ ㄉㄚ ㄔㄨㄢˊ ㄎㄨㄞˋ.'"
          :pinyin="'cong2 tai2 wan1 dao4 wai4 guo2 qu4, da1 fei1 ji1 bi3 da1 chuan2 kuai4.'"
          :translation="'台湾から海外へ行く時、 船よりも飛行機の方が早いです。'"
        />
        <br>
        <p>
          ・船
        </p>
        <SentenceFormat
          :sentence="'你必須得執照有船嗎?'"
          :bopomofo="'ㄋㄧˇ ㄅㄧˋ ㄒㄩ ㄉㄜˊ ㄓˊ ㄓㄠˋ ㄧㄡˇ ㄔㄨㄢˊ ㄇㄚ˙?'"
          :pinyin="'ni3 bi4 xu1 de2 zhi2 zhao4 you3 chuan2 ma2?'"
          :translation="'船を所有するにはライセンスを取る必要がありますか?'"
        />
        <br>
        <p>
          ・地
        </p>
        <SentenceFormat
          :sentence="'。'"
          :bopomofo="'.'"
          :pinyin="'.'"
          :translation="'。'"
        />
        <br>
        <p>
          ・美美
        </p>
        <SentenceFormat
          :sentence="'美美是在日本的外國語言課本很一般的名字。'"
          :bopomofo="'ㄇㄟˇ ㄇㄟˇ ㄕˋ ㄗㄞˋ ㄖˋ ㄅㄣˇ ㄉㄜ˙ ㄨㄞˋ ㄍㄨㄛˊ ㄩˇ ㄧㄢˊ ㄎㄜˋ ㄅㄣˇ ㄏㄣˇ ㄧˋ ㄅㄢ ㄉㄜ˙ ㄇㄧㄥˊ ㄗˋ.'"
          :pinyin="'mei3 mei3 shi4 zai4 ri4 ben3 de wai4 guo2 yu3 yan2 ke4 ben3 hen3 yi1 ban1 de ming2 zi4.'"
          :translation="'美美は日本の外国語の教科書に出てくる一般的な名前です。'"
        />
        <br>
        <p>
          ・法國
        </p>
        <SentenceFormat
          :sentence="'法國的菜很貴， 但是法國人說他們也有家庭料理。'"
          :bopomofo="'ㄈㄚˇ ㄍㄨㄛˊ ㄉㄜ˙ ㄘㄞˋ ㄏㄣˇ ㄍㄨㄟˋ， ㄉㄢˋ ㄕˋ ㄈㄚˇ ㄍㄨㄛˊ ㄖㄣˊ ㄕㄨㄛ ㄊㄚ ㄇㄣ˙ ㄧㄝˇ ㄧㄡˇ ㄐㄧㄚ ㄊㄧㄥˊ ㄌㄧㄠˋ ㄌㄧˇ.'"
          :pinyin="'fa3 guo2 de cai4 hen3 gui4, dan4 shi4 fa3 guo2 ren2 shuo1 ta1 men ye3 you3 jia1 ting2 liao4 li3.'"
          :translation="'フランス料理はとても高価ですが、 フランス人は家庭料理もあると言います。'"
        />
        <br>
        <p>
          ・歐洲
        </p>
        <SentenceFormat
          :sentence="'台灣和歐洲的時差太大， 選擇打電話的時間很難。'"
          :bopomofo="'ㄊㄞˊ ㄨㄢ ㄏㄜˊ ㄡ ㄓㄡ ㄉㄜ˙ ㄕˊ ㄔㄚˋ ㄊㄞˋ ㄉㄚˋ， ㄒㄩㄢˇ ㄗㄜˊ ㄉㄚˇ ㄉㄧㄢˋ ㄏㄨㄚˋ ㄉㄜ˙ ㄕˊ ㄐㄧㄢ ㄏㄣˇ ㄋㄢˊ.'"
          :pinyin="'tai2 wan1 han4 ou1 zhou1 de shi2 cha4 tai4 da4, xuan3 ze2 da3 dian4 hua4 de shi2 jian1 hen3 nan2.'"
          :translation="'台湾とヨーロッパは時差が大きいので、 電話をかける時間を選ぶのが難しいです。'"
        />
        <br>
        <p>
          ・悠遊卡
        </p>
        <SentenceFormat
          :sentence="'在便利商店可以加錢到悠遊卡。'"
          :bopomofo="'ㄗㄞˋ ㄅㄧㄢˋ ㄌㄧˋ ㄕㄤ ㄉㄧㄢˋ ㄎㄜˇ ㄧˇ ㄐㄧㄚ ㄑㄧㄢˊ ㄉㄠˋ ㄧㄡ ㄧㄡˊ ㄎㄚˇ.'"
          :pinyin="'zai4 bian4 li4 shang1 dian4 ke3 yi3 jia1 qian2 dao4 you1 you2 ka3.'"
          :translation="'コンビニで、 悠遊カードにお金をチャージできます。'"
        />
        <br>
        <p>
          ・綠島
        </p>
        <SentenceFormat
          :sentence="'在綠島你可以看到很多海龜， 但是肯定不可以摸。'"
          :bopomofo="'ㄗㄞˋ ㄌㄩˋ ㄉㄠˇ ㄋㄧˇ ㄎㄜˇ ㄧˇ ㄎㄢˋ ㄉㄠˋ ㄏㄣˇ ㄉㄨㄛ ㄏㄞˇ ㄍㄨㄟ， ㄉㄢˋ ㄕˋ ㄎㄣˇ ㄉㄧㄥˋ ㄅㄨˋ ㄎㄜˇ ㄧˇ  ㄇㄛ.'"
          :pinyin="'zai4 lu4 dao3 ni3 ke3 yi3 kan4 dao4 hen3 duo1 hai3 gui1, dan4 shi4 ken3 ding4 bu4 ke3 yi3 mo1.'"
          :translation="'綠島ではたくさんの海亀を見る事が出来ますが、 絶対に触ってはいけません。'"
        />
        <br>
        <p>
          ・東南邊
        </p>
        <SentenceFormat
          :sentence="'亞洲東南邊的咖喱常常放椰奶。'"
          :bopomofo="'ㄧㄚˋ ㄓㄡ ㄉㄨㄥ ㄋㄢˊ ㄅㄧㄢ ㄉㄜ˙ ㄍㄚ ㄌㄧˊ ㄔㄤˊ ㄔㄤˊ ㄈㄤˋ ㄧㄝ ㄋㄞˇ.'"
          :pinyin="'ya4 zhou1 dong1 nan2 bian1 de ga1 li2 chang2 chang2 fang4 ye1 nai3.'"
          :translation="'東南アジアのカレーにはよくココナッツミルクが使われています。'"
        />
        <br>
        <p>
          ・好好地
        </p>
        <SentenceFormat
          :sentence="'。'"
          :bopomofo="'.'"
          :pinyin="'.'"
          :translation="'。'"
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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第2章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第2章で登場する新単語を使った例文や気づいた事など' }
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
