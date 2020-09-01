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
          當代中文課程課1・第8章
        </h1>
        <p>
          【新単語+例文】
        </p>
        <p>
          ・坐
        </p>
        <SentenceFormat
          :sentence="'最近我變肥, 所以我停止坐電梯。'"
          :bopomofo="'ㄗㄨㄟˋ ㄐㄧㄣˋ ㄨㄛˇ ㄅㄧㄢˋ ㄈㄟˊ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄊㄧㄥˊ ㄓˇ ㄗㄨㄛˋ ㄉㄧㄢˋ ㄊㄧ.'"
          :pinyin="'zui4 jin4 wo3 bian4 fei2, suo3 yi3 wo3 ting2 zhi3 zuo4 dian4 ti1.'"
          :translation="'最近太ってしまったので、エレベーターに乗るのを止めました。'"
        />
        <br>
        <p>
          ・火車
        </p>
        <SentenceFormat
          :sentence="'由于人太多, 我不喜歡在東京坐火車。'"
          :bopomofo="'ㄧㄡˊ ㄩˊ ㄖㄣˊ ㄊㄞˋ ㄉㄨㄛ, ㄨㄛˇ ㄅㄨˋ ㄒㄧˇ ㄏㄨㄢ ㄗㄞˋ ㄉㄨㄥ ㄐㄧㄥ ㄗㄨㄛˋ ㄏㄨㄛˇ ㄔㄜ.'"
          :pinyin="'you2 yu2 ren2 tai4 duo1, wo3 bu4 xi3 huan1 zai4 dong1 jing1 zuo4 huo3 che1.'"
          :translation="'人が多すぎて、 東京で電車に乗るのは嫌いです。'"
        />
        <br>
        <p>
          ・跟
        </p>
        <SentenceFormat
          :sentence="'我要跟你配啤酒看電影。'"
          :bopomofo="'ㄨㄛˇ ㄧㄠˋ ㄍㄣ ㄋㄧˇ ㄆㄟˋ ㄆㄧˊ ㄐㄧㄡˇ ㄎㄢˋ ㄉㄧㄢˋ ㄧㄥˇ.'"
          :pinyin="'wo3 yao4 gen1 ni3 pei4 pi2 jiu3 kan4 dian4 ying3.'"
          :translation="'あなたとビールを飲みながら映画を見たいです。'"
        />
        <br>
        <p>
          ・玩
        </p>
        <SentenceFormat
          :sentence="'他會去他的朋友家玩。'"
          :bopomofo="'ㄊㄚ ㄏㄨㄟˋ ㄑㄩˋ ㄊㄚ ㄉㄜ˙ ㄆㄥˊ ㄧㄡˇ ㄐㄧㄚ ㄨㄢˊ.'"
          :pinyin="'ta1 hui4 qu4 ta1 de peng2 you3 jia1 wan2.'"
          :translation="'彼は友達の家に遊びに行きます。'"
        />
        <br>
        <p>
          ・怎麼
        </p>
        <SentenceFormat
          :sentence="'教我用中文怎麼說apple。'"
          :bopomofo="'ㄐㄧㄠˋ ㄨㄛˇ ㄩㄥˋ ㄓㄨㄥ ㄨㄣˊ ㄗㄣˇ ㄇㄜ˙ ㄕㄨㄛ apple.'"
          :pinyin="'jiao1 wo3 yong4 zhong1 wen2 zen3 me shuo1 apple.'"
          :translation="'中国語でりんごを何と言うか教えて。'"
        />
        <br>
        <p>
          ・慢
        </p>
        <SentenceFormat
          :sentence="'雖然郵局有很多人，手續不太慢。'"
          :bopomofo="'ㄙㄨㄟ ㄖㄢˊ ㄧㄡˊ ㄐㄩˊ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄖㄣˊ， ㄕㄡˇ ㄒㄩˋ ㄅㄨˋ ㄊㄞˋ ㄇㄢˋ.'"
          :pinyin="'sui1 ran2 you2 ju2 you3 hen3 duo1 ren2, shou3 xu4 bu4 tai4 man4.'"
          :translation="'郵便局にはたくさんの人がいますが、手続きは遅くありません。'"
        />
        <br>
        <p>
          ・鐘頭
        </p>
        <SentenceFormat
          :sentence="'做這個菜要兩鐘頭多。'"
          :bopomofo="'ㄗㄨㄛˋ ㄓㄜˋ ㄍㄜˋ ㄘㄞˋ ㄧㄠˋ ㄌㄧㄤˇ ㄓㄨㄥ ㄊㄡˊ ㄉㄨㄛ.'"
          :pinyin="'zuo4 zhe4 ge4 cai4 yao4 liang3 zhong1 tou2 duo1.'"
          :translation="'この料理を作るのに2時間以上かかります。'"
        />
        <br>
        <p>
          ・比較
        </p>
        <SentenceFormat
          :sentence="'他的日文比較我的中文好。'"
          :bopomofo="'ㄊㄚ ㄉㄜ˙ ㄖˋ ㄨㄣˊ ㄅㄧˇ ㄐㄧㄠˋ ㄨㄛˇ ㄉㄜ˙ ㄓㄨㄥ ㄨㄣˊ ㄏㄠˇ.'"
          :pinyin="'ta1 de ri4 we2n bi3 jiao4 wo3 de zhong1 wen2 hao3.'"
          :translation="'彼の日本語は私の中国語よりも上手です。'"
        />
        <br>
        <p>
          ・快
        </p>
        <SentenceFormat
          :sentence="'我得快走，不然來不及吃飯。'"
          :bopomofo="'ㄨㄛˇ ㄉㄟˇ ㄎㄨㄞˋ ㄗㄡˇ， ㄅㄨˋ ㄖㄢˊ ㄌㄞˊ ㄅㄨˋ ㄐㄧˊ ㄔ ㄈㄢˋ.'"
          :pinyin="'wo3 dei3 kuai4 zou3, bu4 ran2 lai2 bu4 ji2 chi1 fan4.'"
          :translation="'急いで行かなければ、食べる時間がありません。'"
        />
        <br>
        <p>
          ・車票
        </p>
        <SentenceFormat
          :sentence="'你幫我確認這張車票的火車沒到。'"
          :bopomofo="'ㄋㄧˇ ㄅㄤ ㄨㄛˇ ㄑㄩㄝˋ ㄖㄣˋ ㄓㄜˋ ㄓㄤ ㄔㄜ ㄆㄧㄠˋ ㄉㄜ˙ ㄏㄨㄛˇ ㄔㄜ ㄇㄟˊ ㄉㄠˋ.'"
          :pinyin="'ni3 bang1 wo3 que4 ren4 zhe4 zhang1 che1 piao4 de huo3 che1 mei2 dao4.'"
          :translation="'このチケットの列車が到着していないことを確認してください。'"
        />
        <br>
        <p>
          ・非常
        </p>
        <SentenceFormat
          :sentence="'這家店好像非常忙。'"
          :bopomofo="'ㄓㄜˋ ㄐㄧㄚ ㄉㄧㄢˋ ㄏㄠˇ ㄒㄧㄤˋ ㄈㄟ ㄔㄤˊ ㄇㄤˊ.'"
          :pinyin="'zhe4 jia1 dian4 hao3 xiang4 fei1 chang2 mang2.'"
          :translation="'この店はとても忙しいようです。'"
        />
        <br>
        <p>
          ・但是
        </p>
        <SentenceFormat
          :sentence="'他說我必須去學校，但是我不要。'"
          :bopomofo="'ㄊㄚ ㄕㄨㄛ ㄨㄛˇ ㄅㄧˋ ㄒㄩ ㄑㄩˋ ㄒㄩㄝˊ ㄒㄧㄠˋ， ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄅㄨˊ ㄧㄠˋ.'"
          :pinyin="'ta1 shuo1 wo3 bi4 xu1 qu4 xue2 xiao4, dan4 shi4 wo3 bu2 yao4.'"
          :translation="'彼は私が学校に行かなければならないと言ったが、私は行きたくない。'"
        />
        <br>
        <p>
          ・又
        </p>
        <SentenceFormat
          :sentence="'這季節的芒果又甜又便宜。'"
          :bopomofo="'ㄓㄜˋ ㄐㄧˋ ㄐㄧㄝˊ ㄉㄜ˙ ㄇㄤˊ ㄍㄨㄛˇ ㄧㄡˋ ㄊㄧㄢˊ ㄧㄡˋ ㄆㄧㄢˊ ㄧˊ.'"
          :pinyin="'zhe4 ji4 jie2 de mang2 guo3 you4 tian2 you4 pian2 yi2.'"
          :translation="'今シーズンのマンゴーはとても甘くて安いです。'"
        />
        <br>
        <p>
          ・舒服
        </p>
        <SentenceFormat
          :sentence="'冷氣讓夏天的房間很舒服。'"
          :bopomofo="'ㄌㄥˇ ㄑㄧˋ ㄖㄤˋ ㄒㄧㄚˋ ㄊㄧㄢ ㄉㄜ˙ ㄈㄤˊ ㄐㄧㄢ ㄏㄣˇ ㄕㄨ ㄈㄨˊ.'"
          :pinyin="'leng3 qi4 rang4 xia4 tian1 de fang2 jian1 hen3 shu1 fu2.'"
          :translation="'エアコンは夏の部屋をとても快適にします。'"
        />
        <br>
        <p>
          ・站
        </p>
        <SentenceFormat
          :sentence="'我可以在車站買便當嗎?'"
          :bopomofo="'ㄨㄛˇ ㄎㄜˇ ㄧˇ ㄗㄞˋ ㄔㄜ ㄓㄢˋ ㄇㄞˇ ㄅㄧㄢˋ ㄉㄤ ㄇㄚ˙?'"
          :pinyin="'wo3 ke3 yi3 zai4 che1 zhan4 mai3 bian4 dang1 ma2?'"
          :translation="'駅で弁当は買えますか？'"
        />
        <br>
        <p>
          ・或是
        </p>
        <SentenceFormat
          :sentence="'哪家店可以接受現錢或是信用卡。'"
          :bopomofo="'ㄋㄚˇ ㄐㄧㄚ ㄉㄧㄢˋ ㄎㄜˇ ㄧˇ ㄐㄧㄝ ㄕㄡˋ ㄒㄧㄢˋ ㄑㄧㄢˊ ㄏㄨㄛˋ ㄕˋ ㄒㄧㄣˋ ㄩㄥˋ ㄎㄚˇ.'"
          :pinyin="'na3 jia1 dian4 ke3 yi3 jie1 shou4 xian4 qian2 huo4 shi4 xin4 yong4 ka3.'"
          :translation="'あの店では現金またはクレジットカードが使えます。'"
        />
        <br>
        <p>
          ・臺南
        </p>
        <SentenceFormat
          :sentence="'從台北到臺南坐公共汽車需要五個小時。'"
          :bopomofo="'ㄘㄨㄥˊ ㄊㄞˊ ㄅㄟˇ ㄉㄠˋ ㄊㄞˊ ㄋㄢˊ ㄗㄨㄛˋ ㄍㄨㄥ ㄍㄨㄥˋ ㄑㄧˋ ㄔㄜ ㄒㄩ ㄧㄠˋ ㄨˇ ㄍㄜˋ ㄒㄧㄠˇ ㄕˊ .'"
          :pinyin="'cong2 tai2 bei3 dao4 tai2 nan2 zuo4 gong1 gong4 qi4 che1 xu1 yao4 wu3 ge4 xiao3 shi2.'"
          :translation="'台北から台南までバスで5時間かかります。'"
        />
        <br>
        <p>
          ・高鐵
        </p>
        <SentenceFormat
          :sentence="'我希望高鐵票變便宜。'"
          :bopomofo="'ㄨㄛˇ ㄒㄧ ㄨㄤˋ ㄍㄠ ㄊㄧㄝˇ ㄆㄧㄠˋ ㄅㄧㄢˋ ㄆㄧㄢˊ ㄧˊ.'"
          :pinyin="'wo3 xi1 wang4 gao1 tie3 piao4 bian4 pian2 yi2.'"
          :translation="'私は高速鉄道の切符が安くなることを期待しています。'"
        />
        <br>
        <p>
          ・網路上
        </p>
        <SentenceFormat
          :sentence="'他在網路上找二手書。'"
          :bopomofo="'ㄊㄚ ㄗㄞˋ ㄨㄤˇ ㄌㄨˋ ㄕㄤˋ ㄓㄠˇ ㄦˋ ㄕㄡˇ ㄕㄨ.'"
          :pinyin="'ta1 zai4 wang3 lu4 shang4 zhao3 er4 shou3 shu1.'"
          :translation="'彼はインターネットで古本を探しています。'"
        />
        <br>
        <p>
          ・便利商店
        </p>
        <SentenceFormat
          :sentence="'車站前面的便利商店是二十四小時営業。'"
          :bopomofo="'ㄔㄜ ㄓㄢˋ ㄑㄧㄢˊ ㄇㄧㄢˋ ㄉㄧˊ ㄅㄧㄢˋ ㄌㄧˋ ㄕㄤ ㄉㄧㄢˋ ㄕˋ ㄦˋ ㄕˊ ㄙˋ ㄒㄧㄠˇ ㄕˊ ㄧㄥˊ ㄧㄝˋ.'"
          :pinyin="'che1 zhan4 qian2 mian4 de bian4 li4 shang1 dian4 shi4 er4 shi2 si4 xiao3 shi2 ying2 ye4.'"
          :translation="'駅前のコンビニは24時間営業です。'"
        />
        <br>
        <p>
          ・同學
        </p>
        <SentenceFormat
          :sentence="'有時候我見面高學的同學。'"
          :bopomofo="'ㄧㄡˇ ㄕˊ ㄏㄡˋ ㄨㄛˇ ㄐㄧㄢˋ ㄇㄧㄢˋ ㄍㄠ ㄒㄩㄝˊ ㄉㄜ˙ ㄊㄨㄥˊ ㄒㄩㄝˊ.'"
          :pinyin="'you3 shi2 hou4 wo3 jian4 mian4 gao1 xue2 de tong2 xue2.'"
          :translation="'時々高校のクラスメートに会います。'"
        />
        <br>
        <p>
          ・參觀
        </p>
        <SentenceFormat
          :sentence="'一個星期我參觀阿媽兩次。'"
          :bopomofo="'ㄧˊ ㄍㄜˋ ㄒㄧㄥ ㄑㄧ ㄨㄛˇ ㄘㄢ ㄍㄨㄢ ㄚ ㄇㄚ ㄌㄧㄤˇ ㄘˋ.'"
          :pinyin="'yi1 ge4 xing1 qi1 wo3 can1 guan1 a1 ma1 liang3 ci4.'"
          :translation="'私は週に2回おばあちゃんを訪ねます。'"
        />
        <br>
        <p>
          ・古代
        </p>
        <SentenceFormat
          :sentence="'我喜歡讀古代故事。'"
          :bopomofo="'ㄨㄛˇ ㄒㄧˇ ㄏㄨㄢ ㄉㄨˊ ㄍㄨˇ ㄉㄞˋ ㄍㄨˋ ㄕˋ.'"
          :pinyin="'wo3 xi3 huan1 du2 gu3 dai4 gu4 shi4.'"
          :translation="'私は古代の物語を読むのが好きです。'"
        />
        <br>
        <p>
          ・騎
        </p>
        <SentenceFormat
          :sentence="'我常常騎機車兜兜風。'"
          :bopomofo="'ㄨㄛˇ ㄔㄤˊ ㄔㄤˊ ㄑㄧˊ ㄐㄧ ㄔㄜ ㄉㄡ ㄉㄡ ㄈㄥ.'"
          :pinyin="'wo3 chang2 chang2 qi2 ji1 che1 dou1 dou1 feng1.'"
          :translation="'私はよくモーターバイクでドライブします。'"
        />
        <br>
        <p>
          ・機車
        </p>
        <SentenceFormat
          :sentence="'我想領機車的駕駛執照。'"
          :bopomofo="'ㄨㄛˇ ㄒㄧㄤˇ ㄌㄧㄥˇ ㄐㄧ ㄔㄜ ㄉㄜ˙ ㄐㄧㄚˋ ㄕˇ ㄓˊ ㄓㄠˋ.'"
          :pinyin="'wo3 xiang3 ling3 ji1 che1 de jia4 shi3 zhi2 zhao4.'"
          :translation="'私はモーターバイクの免許を取りたいです。'"
        />
        <br>
        <p>
          ・載
        </p>
        <SentenceFormat
          :sentence="'朋友開車戴我去學校。'"
          :bopomofo="'ㄆㄥˊ ㄧㄡˇ ㄎㄞ ㄔㄜ ㄉㄞˋ ㄨㄛˇ ㄑㄩˋ ㄒㄩㄝˊ ㄒㄧㄠˋ.'"
          :pinyin="'peng2 you3 kai1 che1 dai4 wo3 qu4 xue2 xiao4.'"
          :translation="'友達は学校まで私を車に乗せて行ってくれました。'"
        />
        <br>
        <p>
          ・捷運
        </p>
        <SentenceFormat
          :sentence="'坐捷運的時候，悠遊卡很方便。'"
          :bopomofo="'ㄗㄨㄛˋ ㄐㄧㄝˊ ㄩㄣˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ， ㄧㄡ ㄧㄡˊ ㄎㄚˇ ㄏㄣˇ ㄈㄤ ㄅㄧㄢˋ.'"
          :pinyin="'zuo4 jie2 yun4 de shi2 hou4, you1 you2 ka3 hen3 fang1 bian4.'"
          :translation="'MRTに乗る時は、 悠遊カードが便利です。'"
        />
        <br>
        <p>
          ・比
        </p>
        <SentenceFormat
          :sentence="'走這條路比走那條路比快嗎?'"
          :bopomofo="'ㄗㄡˇ ㄓㄜˋ ㄊㄧㄠˊ ㄌㄨˋ ㄅㄧˇ ㄗㄡˇ ㄋㄚˋ ㄊㄧㄠˊ ㄌㄨˋ ㄅㄧˇ ㄎㄨㄞˋ ㄇㄚ˙?'"
          :pinyin="'zou3 zhe4 tiao2 lu4 bi3 zou3 na4 tiao2 lu4 bi3 kuai4 ma2?'"
          :translation="'この道を行くより、あの道を行った方が早いですか？'"
        />
        <br>
        <p>
          ・故宮博物院
        </p>
        <SentenceFormat
          :sentence="'他還沒參觀故宮博物院。'"
          :bopomofo="'ㄊㄚ ㄏㄞˊ ㄇㄟˊ ㄘㄢ ㄍㄨㄢ ㄍㄨˋ ㄍㄨㄥ ㄅㄛˊ ㄨˋ ㄩㄢˋ.'"
          :pinyin="'ta1 hai2 mei2 can1 guan1 gu4 gong1 bo2 wu4 yuan4.'"
          :translation="'彼はまだ宮殿博物館を訪れていません。'"
        />
        <br>
        <p>
          ・中國
        </p>
        <SentenceFormat
          :sentence="'動物園裡有中國熊貓。'"
          :bopomofo="'ㄉㄨㄥˋ ㄨˋ ㄩㄢˊ ㄌㄧˇ ㄧㄡˇ ㄓㄨㄥ ㄍㄨㄛˊ ㄒㄩㄥˊ ㄇㄠ.'"
          :pinyin="'dong4 wu4 yuan2 li3 you3 zhong1 guo2 xiong2 mao1.'"
          :translation="'動物園には中国から来たパンダがいます。'"
        />
        <br>
        <p>
          ・公共汽車
        </p>
        <SentenceFormat
          :sentence="'公共汽車按時到達。'"
          :bopomofo="'ㄍㄨㄥ ㄍㄨㄥˋ ㄑㄧˋ ㄔㄜ ㄢˋ ㄕˊ ㄉㄠˋ ㄉㄚˊ.'"
          :pinyin="'gong1 gong4 qi4 che1 an4 shi2 dao4 da2.'"
          :translation="'バスは時間通りに到着します。'"
        />
        <br>
        <p>
          ・不行
        </p>
        <SentenceFormat
          :sentence="'我們可以去買什麼酒嗎? 不行， 商店已經關門了。'"
          :bopomofo="'ㄨㄛˇ ㄇㄣ˙ ㄎㄜˇ ㄧˇ ㄑㄩˋ ㄇㄞˇ ㄕㄣˊ ㄇㄜ˙ ㄐㄧㄡˇ ㄇㄚ˙? ㄅㄨˋ ㄒㄧㄥˊ， ㄕㄤ ㄉㄧㄢˋ ㄧˇ ㄐㄧㄥ ㄍㄨㄢ ㄇㄣˊ ㄌㄜ˙.'"
          :pinyin="'wo3 men ke3 yi3 qu4 mai3 shen2 me jiu3 ma2? bu4 xing2, shang1 dian4 yi3 jing1 guan1 men2 le.'"
          :translation="'何かお酒を買いに行けますか? いいえ、店は既に閉まりました。'"
        />
        <br>
        <p>
          ・計程車
        </p>
        <SentenceFormat
          :sentence="'如果坐計程車去，大概需要兩百元。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄗㄨㄛˋ ㄐㄧˋ ㄔㄥˊ ㄔㄜ ㄑㄩˋ， ㄉㄚˋ ㄍㄞˋ ㄒㄩ ㄧㄠˋ ㄌㄧㄤˇ ㄅㄞˇ ㄩㄢˊ.'"
          :pinyin="'ru2 guo3 zuo4 ji4 cheng2 che1 qu4, da4 gai4 xu1 yao4 liang3 bai3 yuan2.'"
          :translation="'タクシーで行くと約200元かかります。'"
        />
        <br>
        <p>
          ・差不多
        </p>
        <SentenceFormat
          :sentence="'這家店跟網路上價格差不多。'"
          :bopomofo="'ㄓㄜˋ ㄐㄧㄚ ㄉㄧㄢˋ ㄍㄣ ㄨㄤˇ ㄌㄨˋ ㄕㄤˋ ㄐㄧㄚˋ ㄍㄜˊ ㄔㄚ ㄅㄨ˙ ㄉㄨㄛ.'"
          :pinyin="'zhe4 jia1 dian4 gen1 wang3 lu4 shang4 jia4 ge2 cha1 bu5 duo1.'"
          :translation="'この店の価格はインターネットとほとんど同じです。'"
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
