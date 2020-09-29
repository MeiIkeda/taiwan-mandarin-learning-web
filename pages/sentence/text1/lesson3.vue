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
          當代中文課程課1・第3章
        </h1>
        <p>
          【新単語+例文】
        </p>
        <p>
          ・週末
        </p>
        <SentenceFormat
          :sentence="'週末我去散步或是喝酒。'"
          :bopomofo="'ㄓㄡ ㄇㄛˋ ㄨㄛˇ ㄑㄩˋ ㄙㄢˋ ㄅㄨˋ ㄏㄨㄛˋ ㄕˋ ㄏㄜ ㄐㄧㄡˇ.'"
          :pinyin="'zhou1 mo4 wo3 qu4 san4 bu4 huo4 shi4 he1 jiu3.'"
          :translation="'私は週末に散歩をしたり飲みに行ったりします。'"
        />
        <br>
        <p>
          ・聽
        </p>
        <SentenceFormat
          :sentence="'那個聽起來很好玩。'"
          :bopomofo="'ㄋㄚˋ ㄍㄜˋ ㄊㄧㄥ ㄑㄧˇ ㄌㄞˊ ㄏㄣˇ ㄏㄠˇ ㄨㄢˊ.'"
          :pinyin="'na4 ge4 ting1 qi3 lai2 hen3 hao3 wan2.'"
          :translation="'それは楽しそうですね。'"
        />
        <br>
        <p>
          ・音樂
        </p>
        <SentenceFormat
          :sentence="'運動的時候, 我喜歡聽音樂。'"
          :bopomofo="'ㄩㄣˋ ㄉㄨㄥˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄨㄛˇ ㄒㄧˇ ㄏㄨㄢ ㄊㄧㄥ ㄧㄣ ㄩㄝˋ.'"
          :pinyin="'yun4 dong4 de shi2 hou4, wo3 xi3 huan1 ting1 yin1 yue4.'"
          :translation="'運動するときは音楽を聞くのが好きです。'"
        />
        <br>
        <p>
          ・運動
        </p>
        <SentenceFormat
          :sentence="'我不擅長運動。'"
          :bopomofo="'ㄨㄛˇ ㄅㄨˋ ㄕㄢˋ ㄔㄤˊ ㄩㄣˋ ㄉㄨㄥˋ.'"
          :pinyin="'wo3 bu4 shan4 chang2 yun4 dong4.'"
          :translation="'私は運動が苦手です。'"
        />
        <br>
        <p>
          ・打
        </p>
        <SentenceFormat
          :sentence="'白天打籃球很熱。'"
          :bopomofo="'ㄅㄞˊ ㄊㄧㄢ ㄉㄚˇ ㄌㄢˊ ㄑㄧㄡˊ ㄏㄣˇ ㄖㄜˋ.'"
          :pinyin="'bai2 tian1 da3 lan2 qiu2 hen3 re4.'"
          :translation="'昼間にバスケをするのは暑いです。'"
        />
        <br>
        <p>
          ・網球
        </p>
        <SentenceFormat
          :sentence="'網球是一項時尚運動。'"
          :bopomofo="'ㄨㄤˇ ㄑㄧㄡˊ ㄕˋ ㄧ ㄒㄧㄤˋ ㄕˊ ㄕㄤˋ ㄩㄣˋ ㄉㄨㄥˋ.'"
          :pinyin="'wang3 qiu2 shi4 yi1 xiang4 shi2 shang4 yun4 dong4.'"
          :translation="'テニスはおしゃれなスポーツです。'"
        />
        <br>
        <p>
          ・棒球
        </p>
        <SentenceFormat
          :sentence="'棒球是一種團隊運動。'"
          :bopomofo="'ㄅㄤˋ ㄑㄧㄡˊ ㄕˋ ㄧ ㄓㄨㄥˇ ㄊㄨㄢˊ ㄉㄨㄟˋ ㄩㄣˋ ㄉㄨㄥˋ.'"
          :pinyin="'bang4 qiu2 shi4 yi1 zhong3 tuan2 dui4 yun4 dong4.'"
          :translation="'野球はボール1個とバット1本を使います。'"
        />
        <br>
        <p>
          ・和
        </p>
        <SentenceFormat
          :sentence="'我要吃牛肉湯和白飯。'"
          :bopomofo="'ㄨㄛˇ ㄧㄠˋ ㄔ ㄋㄧㄡˊ ㄖㄡˋ ㄊㄤ ㄏㄢˋ ㄅㄞˊ ㄈㄢˋ.'"
          :pinyin="'wo3 yao4 chi1 niu2 rou4 tang1 han4 bai2 fan4.'"
          :translation="'牛肉湯と白いご飯が食べたいです。'"
        />
        <br>
        <p>
          ・游泳
        </p>
        <SentenceFormat
          :sentence="'我要買新的游泳衣。'"
          :bopomofo="'ㄨㄛˇ ㄧㄠˋ ㄇㄞˇ ㄒㄧㄣ ㄉㄜ˙ ㄧㄡˊ ㄩㄥˇ ㄧ.'"
          :pinyin="'wo3 yao4 mai3 xin1 de you2 yong3 yi1.'"
          :translation="'新しい水着を買いたいです。'"
        />
        <br>
        <p>
          ・常
        </p>
        <SentenceFormat
          :sentence="'太常下雨。'"
          :bopomofo="'ㄊㄞˋ ㄔㄤˊ ㄒㄧㄚˋ ㄩˇ.'"
          :pinyin="'tai4 chang2 xia4 yu3.'"
          :translation="'雨が降りすぎる。'"
        />
        <br>
        <p>
          ・籃球
        </p>
        <SentenceFormat
          :sentence="'他的朋友是籃球選手。'"
          :bopomofo="'ㄊㄚ ㄉㄜ˙ ㄆㄥˊ ㄧㄡˇ ㄕˋ ㄌㄢˊ ㄑㄧㄡˊ ㄒㄩㄢˇ ㄕㄡˇ.'"
          :pinyin="'ta1 de peng2 you3 shi4 lan2 qiu2 xuan3 shou3.'"
          :translation="'彼の友達はバスケットボール選手です.'"
        />
        <br>
        <p>
          ・也
        </p>
        <SentenceFormat
          :sentence="'你也喜歡看電影嗎?'"
          :bopomofo="'ㄋㄧˇ ㄧㄝˇ ㄒㄧˇ ㄏㄨㄢ ㄎㄢˋ ㄉㄧㄢˋ ㄧㄥˇ ㄇㄚ˙?'"
          :pinyin="'ni3 ye3 xi3 huan1 kan4 dian4 ying3 ma2?'"
          :translation="'あなたも映画を見るのが好きですか?'"
        />
        <br>
        <p>
          ・踢
        </p>
        <SentenceFormat
          :sentence="'我不小心踢了那隻狗。'"
          :bopomofo="'ㄨㄛˇ ㄅㄨˋ ㄒㄧㄠˇ ㄒㄧㄣ ㄊㄧ ㄌㄜ˙ ㄋㄚˋ ㄓˇ ㄍㄡˇ.'"
          :pinyin="'wo3 bu4 xiao3 xin1 ti1 le na4 zhi1 go3u.'"
          :translation="'誤って犬を蹴ってしまいました。'"
        />
        <br>
        <p>
          ・足球
        </p>
        <SentenceFormat
          :sentence="'下課後, 我想去踢足球。'"
          :bopomofo="'ㄒㄧㄚˋ ㄎㄜˋ ㄏㄡˋ, ㄨㄛˇ ㄒㄧㄤˇ ㄑㄩˋ ㄊㄧ ㄗㄨˊ ㄑㄧㄡˊ.'"
          :pinyin="'xia4 ke4 hou4, wo3 xiang3 qu4 ti1 zu2 qiu2.'"
          :translation="'放課後はサッカーをしたいです。'"
        />
        <br>
        <p>
          ・覺得
        </p>
        <SentenceFormat
          :sentence="'我覺得那個菜比較好吃。'"
          :bopomofo="'ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄋㄚˋ ㄍㄜˋ ㄘㄞˋ ㄅㄧˇ ㄐㄧㄠˋ ㄏㄠˇ ㄔ.'"
          :pinyin="'wo3 jue2 de na4 ge4 cai4 bi3 jiao4 hao3 chi1.'"
          :translation="'私はあの料理の方が美味しいと思います。'"
        />
        <br>
        <p>
          ・好玩
        </p>
        <SentenceFormat
          :sentence="'上週末, 我們去很好玩的地方了。'"
          :bopomofo="'ㄕㄤˋ ㄓㄡ ㄇㄛˋ, ㄨㄛˇ ㄇㄣ˙ ㄑㄩˋ ㄏㄣˇ ㄏㄠˇ ㄨㄢˊ ㄉㄜ˙ ㄉㄧˋ ㄈㄤ ㄌㄜ˙.'"
          :pinyin="'shang4 zhou1 mo4, wo3 men qu4 hen3 hao3 wan2 de di4 fang1 le.'"
          :translation="'先週末、楽しい場所に行きました。'"
        />
        <br>
        <p>
          ・明天
        </p>
        <SentenceFormat
          :sentence="'明天早上, 我們一起吃早飯吧。'"
          :bopomofo="'ㄇㄧㄥˊ ㄊㄧㄢ ㄗㄠˇ ㄕㄤˋ, ㄨㄛˇ ㄇㄣ˙ ㄧˋ ㄑㄧˇ ㄔ ㄗㄠˇ ㄈㄢˋ ㄅㄚ˙.'"
          :pinyin="'ming2 tian1 zao3 shang4, wo3 men yi1 qi3 chi1 zao3 fan4 ba.'"
          :translation="'明日の朝、一緒に朝食を食べましょう。'"
        />
        <br>
        <p>
          ・早上
        </p>
        <SentenceFormat
          :sentence="'我最喜歡早上游泳。'"
          :bopomofo="'ㄨㄛˇ ㄗㄨㄟˋ ㄒㄧˇ ㄏㄨㄢ ㄗㄠˇ ㄕㄤˋ ㄧㄡˊ ㄩㄥˇ.'"
          :pinyin="'wo3 zui4 xi3 huan1 zao3 shang4 you2 yong3.'"
          :translation="'私は朝の水泳が一番好きです。'"
        />
        <br>
        <p>
          ・去
        </p>
        <SentenceFormat
          :sentence="'你想要去打棒球嗎?'"
          :bopomofo="'ㄋㄧˇ ㄒㄧㄤˇ ㄧㄠˋ ㄑㄩˋ ㄉㄚˇ ㄅㄤˋ ㄑㄧㄡˊ ㄇㄚ˙?'"
          :pinyin="'ni3 xiang3 yao4 qu4 da3 bang4 qiu2 ma2?'"
          :translation="'野球をしに行きたいですか?'"
        />
        <br>
        <p>
          ・怎麼樣
        </p>
        <SentenceFormat
          :sentence="'我買新的衣服了, 怎麼樣?'"
          :bopomofo="'ㄨㄛˇ ㄇㄞˇ ㄒㄧㄣ ㄉㄜ˙ ㄧ ㄈㄨˊ ㄌㄜ˙, ㄗㄣˇ ㄇㄜ˙ ㄧㄤˋ?'"
          :pinyin="'wo3 mai3 xin1 de yi1 fu2 le. zen3 me yang4?'"
          :translation="'新しい服を買いましたが, どうですか?'"
        />
        <br>
        <p>
          ・啊
        </p>
        <SentenceFormat
          :sentence="'我們去買麵包, 怎麼樣? 好啊!'"
          :bopomofo="'ㄨㄛˇ ㄇㄣ˙ ㄑㄩˋ ㄇㄞˇ ㄇㄧㄢˋ ㄅㄠ, ㄗㄣˇ ㄇㄜ˙ ㄧㄤˋ? ㄏㄠˇ ㄚ˙!'"
          :pinyin="'wo3 men qu4 mai3 mian4 bao1, zen3 me yang4? hao3 a!'"
          :translation="'パンを買いに行きませんか? いいですね!'"
        />
        <br>
        <p>
          ・做什麼
        </p>
        <SentenceFormat
          :sentence="'今天晚上, 你做什麼?'"
          :bopomofo="'ㄐㄧㄣ ㄊㄧㄢ ㄨㄢˇ ㄕㄤˋ, ㄋㄧˇ ㄗㄨㄛˋ ㄕˊ ㄇㄛˇ?'"
          :pinyin="'jin1 tin1 wan3 shang4, ni3 zuo4 shen2 me?'"
          :translation="'今夜何をしますか?'"
        />
        <br>
        <p>
          ・好啊
        </p>
        <SentenceFormat
          :sentence="'我可以看你的書嗎? 好啊!'"
          :bopomofo="'ㄨㄛˇ ㄎㄜˇ ㄧˇ ㄎㄢˋ ㄋㄧˇ ㄉㄜ˙ ㄕㄨ ㄇㄚ˙?  ㄏㄠˇ ㄚ˙!'"
          :pinyin="'wo3 ke3 yi3 kan4 ni3 de shu1 ma2 hao3 a!'"
          :translation="'あなたの本を読んでもいいですか? いいですよ!'"
        />
        <br>
        <p>
          ・今天
        </p>
        <SentenceFormat
          :sentence="'今天我頭痛。'"
          :bopomofo="'ㄐㄧㄣ ㄊㄧㄢ ㄨㄛˇ ㄊㄡˊ ㄊㄨㄥˋ.'"
          :pinyin="'jin1 tian1 wo3 tou2 tong4.'"
          :translation="'今日は頭痛がします。'"
        />
        <br>
        <p>
          ・晚上
        </p>
        <SentenceFormat
          :sentence="'你今天晚上要去哪裡?'"
          :bopomofo="'ㄋㄧˇ ㄐㄧㄣ ㄊㄧㄢ ㄨㄢˇ ㄕㄤˋ ㄧㄠˋ ㄑㄩˋ ㄋㄚˇ ㄌㄧˇ?'"
          :pinyin="'ni3 jin1 tian1 wan3 shang4 yao4 qu4 na3 li3?'"
          :translation="'今晩どこに行きますか?'"
        />
        <br>
        <p>
          ・看
        </p>
        <SentenceFormat
          :sentence="'他現在在房間看電視。'"
          :bopomofo="'ㄊㄚ ㄒㄧㄢˋ ㄗㄞˋ ㄗㄞˋ ㄈㄤˊ ㄐㄧㄢ ㄎㄢˋ ㄉㄧㄢˋ ㄕˋ.'"
          :pinyin="'ta1 xian4 zai4 zai4 fang2 jian1 kan4 dian4 shi4.'"
          :translation="'彼は今部屋でテレビを見ています。'"
        />
        <br>
        <p>
          ・電影
        </p>
        <SentenceFormat
          :sentence="'這週末很多人去看電影。'"
          :bopomofo="'ㄓㄜˋ ㄓㄡ ㄇㄛˋ ㄏㄣˇ ㄉㄨㄛ ㄖㄣˊ ㄑㄩˋ ㄎㄢˋ ㄉㄧㄢˋ ㄧㄥˇ.'"
          :pinyin="'zhe4 zhou1 mo4 hen3 duo1 ren2 qu4 kan4 dian4 ying3.'"
          :translation="'今週末多くの人が映画を見に行きます。'"
        />
        <br>
        <p>
          ・妳
        </p>
        <SentenceFormat
          :sentence="'妳常穿台湾衣服?'"
          :bopomofo="'ㄋㄞˇ ㄔㄤˊ ㄔㄨㄢ ㄊㄞˊ ㄨㄢ ㄧ ㄈㄨˊ?'"
          :pinyin="'ni3 chang2 chuan1 tai2 wan1 yi1 fu2?'"
          :translation="'台湾の服をよく着ますか?'"
        />
        <br>
        <p>
          ・想
        </p>
        <SentenceFormat
          :sentence="'台灣的菜很好吃, 我都想吃。'"
          :bopomofo="'ㄊㄞˊ ㄨㄢ ㄉㄜ˙ ㄘㄞˋ ㄏㄣˇ ㄏㄠˇ ㄔ, ㄨㄛˇ ㄉㄡ ㄒㄧㄤˇ ㄔ.'"
          :pinyin="'tai2 wan1 de cai4 hen3 hao3 chi1, wo3 dou1 xiang3 chi1.'"
          :translation="'台湾料理はとても美味しい。 全部食べたいです。'"
        />
        <br>
        <p>
          ・還是
        </p>
        <SentenceFormat
          :sentence="'你要白飯, 還是炒飯?'"
          :bopomofo="'ㄋㄧˇ ㄧㄠˋ ㄅㄞˊ ㄈㄢˋ, ㄏㄞˊ ㄕˋ ㄔㄠˇ ㄈㄢˋ?'"
          :pinyin="'ni3 yao4 bai2 fan4, hai2 shi4 chao3 fan4?'"
          :translation="'白いご飯が良いですか、それともチャーハンが良いですか?'"
        />
        <br>
        <p>
          ・吧
        </p>
        <SentenceFormat
          :sentence="'我們去貓咖啡店吧?'"
          :bopomofo="'ㄨㄛˇ ㄇㄣ˙ ㄑㄩˋ ㄇㄠ ㄎㄚ ㄈㄟ ㄉㄧㄢˋ ㄅㄚ˙?'"
          :pinyin="'wo3 men qu4 mao1 ka1 fe1i dian4 ba?'"
          :translation="'猫カフェに行きませんか?'"
        />
        <br>
        <p>
          ・可以
        </p>
        <SentenceFormat
          :sentence="'我可以在這裡練習中文嗎?'"
          :bopomofo="'ㄨㄛˇ ㄎㄜˇ ㄧˇ ㄗㄞˋ ㄓㄜˋ ㄌㄧˇ ㄌㄧㄢˋ ㄒㄧˊ ㄓㄨㄥ ㄨㄣˊ ㄇㄚ˙?'"
          :pinyin="'wo3 ke3 yi3 zai4 zhe4 li3 lian4 xi2 zhong1 wen2 ma2?'"
          :translation="'ここで中国語を練習してもいいですか?'"
        />
        <br>
        <p>
          ・學
        </p>
        <SentenceFormat
          :sentence="'學中文比學英文難。'"
          :bopomofo="'ㄒㄩㄝˊ ㄓㄨㄥ ㄨㄣˊ ㄅㄧˇ ㄒㄩㄝˊ ㄧㄥ ㄨㄣˊ ㄋㄢˊ.'"
          :pinyin="'xue2 zhong1 wen2 bi3 xue2 ying1 wen2 nan2.'"
          :translation="'中国語を学ぶのは英語を学ぶより難しいです。'"
        />
        <br>
        <p>
          ・中文
        </p>
        <SentenceFormat
          :sentence="'日文漢字和中文漢字不一樣。'"
          :bopomofo="'ㄖˋ ㄨㄣˊ ㄏㄢˋ ㄗˋ ㄏㄢˋ ㄓㄨㄥ ㄨㄣˊ ㄏㄢˋ ㄗˋ ㄅㄨˋ ㄧˊ ㄧㄤˋ.'"
          :pinyin="'ri4 wen2 han4 zi4 han4 zhong1 wen2 han4 zi4 bu4 yi1 yang4.'"
          :translation="'日本語の漢字は中国語の漢字とは異なります。'"
        />
        <br>
        <p>
          ・一起
        </p>
        <SentenceFormat
          :sentence="'我們一起去喝酒, 好不好?'"
          :bopomofo="'ㄨㄛˇ ㄇㄣ˙ ㄧˋ ㄑㄧˇ ㄑㄩˋ ㄏㄜ ㄐㄧㄡˇ, ㄏㄠˇ ㄅㄨˋ ㄏㄠˇ?'"
          :pinyin="'wo3 men yi1 qi3 qu4 he1 jiu3, hao3 bu4 hao3?'"
          :translation="'一緒に飲みに行きませんか?'"
        />
        <br>
        <p>
          ・吃
        </p>
        <SentenceFormat
          :sentence="'我不喜歡吃香菜。'"
          :bopomofo="'ㄨㄛˇ ㄅㄨˋ ㄒㄧˇ ㄏㄨㄢ ㄔ ㄒㄧㄤ ㄘㄞˋ.'"
          :pinyin="'wo3 bu4 xi3 huan1 chi1 xiang1 cai4.'"
          :translation="'パクチーは嫌いです。'"
        />
        <br>
        <p>
          ・晚飯
        </p>
        <SentenceFormat
          :sentence="'晚飯前， 你要洗你的手。'"
          :bopomofo="'ㄨㄢˇ ㄈㄢˋ ㄑㄧㄢˊ， ㄋㄧˇ ㄧㄠˋ ㄒㄧˇ ㄋㄧˇ ㄉㄜ˙ ㄕㄡˇ.'"
          :pinyin="'wan3 fan4 qian2, ni3 yao4 xi3 ni3 de shou3.'"
          :translation="'夕飯の前に、手を洗わなくてはいけません。'"
        />
        <br>
        <p>
          ・菜
        </p>
        <SentenceFormat
          :sentence="'台南菜是甜的。'"
          :bopomofo="'ㄊㄞˊ ㄋㄢˊ ㄘㄞˋ ㄕˋ ㄊㄧㄢˊ ㄉㄜ˙.'"
          :pinyin="'tai2 nan2 cai4 shi4 tian2 de.'"
          :translation="'台南料理は甘いです。'"
        />
        <br>
        <p>
          ・越南
        </p>
        <SentenceFormat
          :sentence="'雖然越南菜常有香菜, 我還算喜歡。'"
          :bopomofo="'ㄙㄨㄟ ㄖㄢˊ ㄩㄝˋ ㄋㄢˊ ㄘㄞˋ ㄔㄤˊ ㄧㄡˇ ㄒㄧㄤ ㄘㄞˋ, ㄨㄛˇ ㄏㄞˊ ㄙㄨㄢˋ ㄒㄧˇ ㄏㄨㄢ.'"
          :pinyin="'sui1 ran2 yue4 nan2 cai4 chang2 you3 xiang1 cai4, wo3 hai2 suan4 xi3 huan1.'"
          :translation="'私はベトナム料理が好きですが、 パクチーが入っています。'"
        />
        <br>
        <p>
          ・好不好
        </p>
        <SentenceFormat
          :sentence="'今天晚飯我會煮飯， 好不好?'"
          :bopomofo="'ㄐㄧㄣ ㄊㄧㄢ ㄨㄢˇ ㄈㄢˋ ㄨㄛˇ ㄏㄨㄟˋ ㄓㄨˇ ㄈㄢˋ， ㄏㄠˇ ㄅㄨˋ ㄏㄠˇ?'"
          :pinyin="'jin1 tian1 wan3 fan4 wo3 hui4 zhu3 fan4, hao3 bu4 hao3?'"
          :translation="'`今夜は私が夕食を作りますが、どうですか?'"
          :memo="'※台湾では、「煮飯(ご飯を炊く)」でも「ご飯を作る」の意味になる。'"
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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第3章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第3章で登場する新単語を使った例文や気づいた事など' }
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
