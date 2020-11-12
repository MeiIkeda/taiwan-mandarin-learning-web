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
          當代中文課程課2・第1章
        </h1>
        <p>
          【新単語+例文】
        </p>
        <p>
          ・走
        </p>
        <SentenceFormat
          :sentence="'騎自行車走山上很難。'"
          :bopomofo="'ㄑㄧˊ ㄗˋ ㄒㄧㄥˊ ㄔㄜ ㄗㄡˇ ㄕㄢ ㄕㄤˋ ㄏㄣˇ ㄋㄢˊ.'"
          :pinyin="'qi2 zi4 xing2 che1 zou3 shan1 shang4 hen3 nan2.'"
          :translation="'自転車で山に行くのは難しいです。'"
        />
        <br>
        <p>
          ・路人
        </p>
        <SentenceFormat
          :sentence="'我要問路, 但是每個路人好像很忙。'"
          :bopomofo="'ㄨㄛˇ ㄧㄠˋ ㄨㄣˋ ㄌㄨˋ, ㄉㄢˋ ㄕˋ ㄇㄟˇ ㄍㄜˋ ㄌㄨˋ ㄖㄣˊ ㄏㄠˇ ㄒㄧㄤˋ ㄏㄣˇ ㄇㄤˊ.'"
          :pinyin="'wo3 yao4 wen4 lu4, dan4 shi4 mei3 ge4 lu4 ren2 hao3 xiang4 hen3 mang2.'"
          :translation="'道を聞きたいのですが、 道を行く人はみんな忙しそうです。'"
        />
        <br>
        <p>
          ・幫忙
        </p>
        <SentenceFormat
          :sentence="'我剛剛來到這個城市的時候, 當地人幫忙我。'"
          :bopomofo="'ㄨㄛˇ ㄍㄤ ㄍㄤ ㄌㄞˊ ㄉㄠˋ ㄓㄜˋ ㄍㄜˋ ㄔㄥˊ ㄕˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄉㄤ ㄉㄧˋ ㄖㄣˊ ㄅㄤ ㄇㄤˊ ㄨㄛˇ.'"
          :pinyin="'wo3 gang1 gang1 lai2 dao4 zhe4 ge4 cheng2 shi4 de shi2 hou4, dang1 di4 ren2 bang1 mang2 wo3.'"
          :translation="'この街に来たばかりの時は、 地元の人が助けてくれました。'"
        />
        <br>
        <p>
          ・迷路
        </p>
        <SentenceFormat
          :sentence="'地鐵站在東京太複雜, 很容易迷路。'"
          :bopomofo="'ㄉㄧˋ ㄊㄧㄝˇ ㄓㄢˋ ㄗㄞˋ ㄉㄨㄥ ㄐㄧㄥ ㄊㄞˋ ㄈㄨˋ ㄗㄚˊ, ㄏㄣˇ ㄖㄨㄥˊ ㄧˋ ㄇㄧˊ ㄌㄨˋ.'"
          :pinyin="'di4 tie3 zhan4 zai4 dong1 jing1 tai4 fu4 za2, hen3 rong2 yi4 mi2 lu4.'"
          :translation="'東京の地下鉄の駅は複雑すぎるので、 道に迷いやすいです。'"
        />
        <br>
        <p>
          ・下
        </p>
        <SentenceFormat
          :sentence="'你要準備, 下一站是我們下車的。'"
          :bopomofo="'ㄋㄧˇ ㄧㄠˋ ㄓㄨㄣˇ ㄅㄟˋ, ㄒㄧㄚˋ ㄧ ㄓㄢˋ ㄕˋ ㄨㄛˇ ㄇㄣ˙ ㄒㄧㄚˋ ㄔㄜ ㄉㄜ˙.'"
          :pinyin="'ni3 yao4 zhun3 bei4, xia4 yi1 zhan4 shi4 wo3 men xia4 che1 de.'"
          :translation="'準備して下さい、 次の駅は私達が降りる駅です。'"
        />
        <br>
        <p>
          ・路口
        </p>
        <SentenceFormat
          :sentence="'在路口車對別的車撞了。'"
          :bopomofo="'ㄗㄞˋ ㄌㄨˋ ㄎㄡˇ ㄔㄜ ㄉㄨㄟˋ ㄅㄧㄝˊ ㄉㄜ˙ ㄔㄜ ㄓㄨㄤˋ ㄌㄜ˙.'"
          :pinyin="'zai4 lu4 kou3 che1 dui4 bie2 de che1 zhuang4 le.'"
          :translation="'交差点で車と車がぶつかりました。'"
        />
        <br>
        <p>
          ・段
        </p>
        <SentenceFormat
          :sentence="'如果目的地是離這裡三段遠, 我想坐計程車去。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄇㄨˋ ㄉㄧˋ ㄉㄧˋ ㄕˋ ㄌㄧˊ ㄓㄜˋ ㄌㄧˇ ㄙㄢ ㄉㄨㄢˋ ㄩㄢˇ, ㄨㄛˇ ㄒㄧㄤˇ ㄗㄨㄛˋ ㄐㄧˋ ㄔㄥˊ ㄔㄜ ㄑㄩˋ.'"
          :pinyin="'ru2 guo3 mu4 di4 di4 shi4 li4 zhe4 li3 san1 duan4 yuan3, wo3 xiang3 zuo4 ji4 cheng2 che1 qu4.'"
          :translation="'目的地が3区間も離れているなら、 私はタクシーに乗って行きたいです。'"
        />
        <br>
        <p>
          ・過
        </p>
        <SentenceFormat
          :sentence="'為什麼我沒注意到已經過了郵局?'"
          :bopomofo="'ㄨㄟˋ ㄕˊ ㄇㄜ˙ ㄨㄛˇ ㄇㄟˊ ㄓㄨˋ ㄧˋ ㄉㄠˋ ㄧˇ ㄐㄧㄥ ㄍㄨㄛˋ ㄌㄜ˙ ㄧㄡˊ ㄐㄩˊ?'"
          :pinyin="'wei4 shen2 me wo3 mei2 zhu4 yi4 dao4 yi3 jing1 guo4 le you2 ju2?'"
          :translation="'どうして郵便局を通り過ぎた事に気が付かなかったのだろう?'"
        />
        <br>
        <p>
          ・第
        </p>
        <SentenceFormat
          :sentence="'第一次我吃了皮蛋的時候我覺得不好吃。'"
          :bopomofo="'ㄉㄧˋ ㄧ ㄘˋ ㄨㄛˇ ㄔ ㄌㄜ˙ ㄆㄧˊ ㄉㄢˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄅㄨˋ ㄏㄠˇ ㄔ.'"
          :pinyin="'di4 yi1 ci4 wo3 chi1 le pi2 dan4 de shi2 hou4 wo3 jue2 de bu4 hao3 chi1.'"
          :translation="'ピータンを初めて食べた時は、 美味しくないと思いました。'"
        />
        <br>
        <p>
          ・紅綠燈
        </p>
        <SentenceFormat
          :sentence="'紅綠燈下面一個警察在站。'"
          :bopomofo="'ㄏㄨㄥˊ ㄌㄩˋ ㄉㄥ ㄒㄧㄚˋ ㄇㄧㄢˋ ㄧˊ ㄍㄜˋ ㄐㄧㄥˇ ㄔㄚˊ ㄗㄞˋ ㄓㄢˋ.'"
          :pinyin="'hong2 lu4 deng1 xia4 mian4 yi1 ge4 jing3 cha2 zai4 zhan4.'"
          :translation="'1人の警官が信号の下に立っています。'"
        />
        <br>
        <p>
          ・告訴
        </p>
        <SentenceFormat
          :sentence="'我下一次告訴他不要亂房間。'"
          :bopomofo="'ㄨㄛˇ ㄒㄧㄚˋ ㄧ ㄘˋ ㄍㄠˋ ㄙㄨˋ ㄊㄚ ㄅㄨˊ ㄧㄠˋ ㄌㄨㄢˋ ㄈㄤˊ ㄐㄧㄢ.'"
          :pinyin="'wo3 xia4 yi1 ci4 gao4 su4 ta1 bu2 yao4 luan4 fang2 jian1.'"
          :translation="'次回は、 部屋を散らかさないように彼に言います。'"
        />
        <br>
        <p>
          ・提款機
        </p>
        <SentenceFormat
          :sentence="'使用提款機後，你因該算紙鈔。'"
          :bopomofo="'ㄕˇ ㄩㄥˋ ㄊㄧˊ ㄎㄨㄢˇ ㄐㄧ ㄏㄡˋ，ㄋㄧˇ ㄧㄣ ㄍㄞ ㄙㄨㄢˋ ㄓˇ ㄔㄠ.'"
          :pinyin="'shi3 yong4 ti2 kuan3 ji1 hou4, ni3 yin1 gai1 suan4 zhi3 chao1.'"
          :translation="'ATMを使った後は、 お札を数えた方がいいです。'"
        />
        <br>
        <p>
          ・超商
        </p>
        <SentenceFormat
          :sentence="'喜歡哪種超商是於你的嗜好。'"
          :bopomofo="'ㄒㄧˇ ㄏㄨㄢ ㄋㄚˇ ㄓㄨㄥˇ ㄔㄠ ㄕㄤ ㄕˋ ㄩˊ ㄋㄧˇ ㄉㄜ˙ ㄕˋ ㄏㄠˋ.'"
          :pinyin="'xi3 huan1 na3 zhong3 chao1 shang1 shi4 yu1 ni3 de shi4 hao4.'"
          :translation="'どのコンビニが好きかは、 好みによります。'"
        />
        <br>
        <p>
          ・應該
        </p>
        <SentenceFormat
          :sentence="'你應該走快一點，否則銀行就關門。'"
          :bopomofo="'ㄋㄧˇ ㄧㄥ ㄍㄞ ㄗㄡˇ ㄎㄨㄞˋ ㄧˋ ㄉㄧㄢˇ，ㄈㄡˇ ㄗㄜˊ ㄧㄣˊ ㄏㄤˊ ㄐㄧㄡˋ ㄍㄨㄢ ㄇㄣˊ.'"
          :pinyin="'ni3 ying1 gai1 zou3 kuai4 yi1 dian3, fou3 ze2 yin2 hang2 jiu4 guan1 men2.'"
          :translation="'早く行った方がいいです、 さもないと銀行は閉まってしまいます。'"
        />
        <br>
        <p>
          ・郵局
        </p>
        <SentenceFormat
          :sentence="'郵局的營業時間是到四點還是五點?'"
          :bopomofo="'ㄧㄡˊ ㄐㄩˊ ㄉㄜ˙ ㄧㄥˊ ㄧㄝˋ ㄕˊ ㄐㄧㄢ ㄕˋ ㄉㄠˋ ㄙˋ ㄉㄧㄢˇ ㄏㄞˊ ㄕˋ ㄨˇ ㄉㄧㄢˇ?'"
          :pinyin="'you2 ju2 de ying2 ye4 shi2 jian1 shi4 dao4 si4 dian3 hai2 shi4 wu3 dian3?'"
          :translation="'郵便局の営業時間は4時までですか、それとも5時までですか?'"
        />
        <br>
        <p>
          ・提
        </p>
        <SentenceFormat
          :sentence="'這個提款機提錢要一百塊的費用。'"
          :bopomofo="'ㄓㄜˋ ㄍㄜˋ ㄊㄧˊ ㄎㄨㄢˇ ㄐㄧ ㄊㄧˊ ㄑㄧㄢˊ ㄧㄠˋ ㄧ ㄅㄞˇ ㄎㄨㄞˋ ㄉㄜ˙ ㄈㄟˋ ㄩㄥˋ.'"
          :pinyin="'zhe4 ge4 ti2 kuan3 ji1 ti2 qian2 yao4 yi1 bai3 kuai4 de fei4 yong4.'"
          :translation="'このATMはお金を引き出すのに100元の手数料がかかります。'"
        />
        <br>
        <p>
          ・那邊
        </p>
        <SentenceFormat
          :sentence="'你往右邊大概五分鐘,那邊有很多超商。'"
          :bopomofo="'ㄋㄧˇ ㄨㄤˇ ㄧㄡˋ ㄅㄧㄢ ㄉㄚˋ ㄍㄞˋ ㄨˇ ㄈㄣ ㄓㄨㄥ, ㄋㄚˋ ㄅㄧㄢ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄔㄠ ㄕㄤ.'"
          :pinyin="'ni3 wang3 you4 bian1 da4 gai4 wu3 fen1 zhong1, na4 bian1 you3 hen3 duo1 chao1 shang1.'"
          :translation="'右の方に5分ほど行くと、 コンビニがたくさんあります。'"
        />
        <br>
        <p>
          ・師大(師範大學)
        </p>
        <SentenceFormat
          :sentence="'師大是師範大學的縮寫。'"
          :bopomofo="'ㄕ ㄉㄚˋ ㄕˋ ㄕ ㄈㄢˋ ㄉㄚˋ ㄒㄩㄝˊ ㄉㄜ˙ ㄙㄨㄛ ㄒㄧㄝˇ.'"
          :pinyin="'shi1 da4 shi4 shi1 fan4 da4 xue2 de suo1 xie3.'"
          :translation="'師大は師範大學の略です。'"
        />
        <br>
        <p>
          ・和平東路
        </p>
        <SentenceFormat
          :sentence="'和平東路是台北市的重要幹道。'"
          :bopomofo="'ㄏㄜˊ ㄆㄧㄥˊ ㄉㄨㄥ ㄌㄨˋ ㄕˋ ㄊㄞˊ ㄅㄟˇ ㄕˋ ㄉㄜ˙ ㄓㄨㄥˋ ㄧㄠˋ ㄍㄢˋ ㄉㄠˋ.'"
          :pinyin="'he2 ping2 dong1 lu4 shi4 tai2 bei3 shi4 de zhong4 yao4 gan4 dao4.'"
          :translation="'和平東路は台北市の重要な幹線道路です。'"
        />
        <br>
        <p>
          ・往前
        </p>
        <SentenceFormat
          :sentence="'袋鼠只能往前走。'"
          :bopomofo="'ㄉㄞˋ ㄕㄨˇ ㄓˇ ㄋㄥˊ ㄨㄤˇ ㄑㄧㄢˊ ㄗㄡˇ.'"
          :pinyin="'dai4 shu3 zhi3 neng2 wang3 qian2 zou3.'"
          :translation="'カンガルーは前進することしかできません。'"
        />
        <br>
        <p>
          ・右轉
        </p>
        <SentenceFormat
          :sentence="'在右車道的情況下、右轉比較容易。'"
          :bopomofo="'ㄗㄞˋ ㄧㄡˋ ㄔㄜ ㄉㄠˋ ㄉㄜ˙ ㄑㄧㄥˊ ㄎㄨㄤˋ ㄒㄧㄚˋ、 ㄧㄡˋ ㄓㄨㄢˇ ㄅㄧˇ ㄐㄧㄠˋ ㄖㄨㄥˊ ㄧˋ.'"
          :pinyin="'zai4 you4 che1 dao4 de qing2 kuang4 xia4, you4 zhuan3 bi3 jiao4 rong2 yi4.'"
          :translation="'右車線の場合、 右折はしやすいです。'"
        />
        <br>
        <p>
          ・聽起來
        </p>
        <SentenceFormat
          :sentence="'引擎聲音聽起來車子壞了。'"
          :bopomofo="'ㄧㄣˇ ㄑㄧㄥˊ ㄕㄥ ㄧㄣ ㄊㄧㄥ ㄑㄧˇ ㄌㄞˊ ㄔㄜ ㄗ˙ ㄏㄨㄞˋ ㄌㄜ˙.'"
          :pinyin="'yin3 qing2 sheng1 yin1 ting1 qi3 lai2 che1 zi3 huai4 le.'"
          :translation="'エンジン音を聞くと、 車が壊れているようです。'"
        />
        <br>
        <p>
          ・看見
        </p>
        <SentenceFormat
          :sentence="'我看見招牌了, 動物園就在附近。'"
          :bopomofo="'ㄨㄛˇ ㄎㄢˋ ㄐㄧㄢˋ ㄓㄠ ㄆㄞˊ ㄌㄜ˙, ㄉㄨㄥˋ ㄨˋ ㄩㄢˊ ㄐㄧㄡˋ ㄗㄞˋ ㄈㄨˋ ㄐㄧㄣˋ.'"
          :pinyin="'wo3 kan4 jian4 zhao1 pai2 le, dong4 wu4 yuan2 jiu4 zai4 fu4 jin4.'"
          :translation="'看板を見ました、 動物園はすぐそこです。'"
        />
        <br>
        <p>
          ・下載
        </p>
        <SentenceFormat
          :sentence="'家裡的網路讓我下載電影的時間太久。'"
          :bopomofo="'ㄐㄧㄚ ㄌㄧˇ ㄉㄜ˙ ㄨㄤˇ ㄌㄨˋ ㄖㄤˋ ㄨㄛˇ ㄒㄧㄚˋ ㄗㄞˋ ㄉㄧㄢˋ ㄧㄥˇ ㄉㄜ˙ ㄕˊ ㄐㄧㄢ ㄊㄞˋ ㄐㄧㄡˇ.'"
          :pinyin="'jia1 li3 de wang3 lu4 rang4 wo3 xia4 zai4 dian4 ying3 de shi2 jian1 tai4 jiu3.'"
          :translation="'自宅のインターネットで映画をダウンロードするのには長い時間がかかります。'"
        />
        <br>
        <p>
          ・地圖
        </p>
        <SentenceFormat
          :sentence="'這個地圖在沒有wi-fi的情況下可以用。'"
          :bopomofo="'ㄓㄜˋ ㄍㄜˋ ㄉㄧˋ ㄊㄨˊ ㄗㄞˋ ㄇㄟˊ ㄧㄡˇ wi-fi ㄉㄜ˙ ㄑㄧㄥˊ ㄎㄨㄤˋ ㄒㄧㄚˋ ㄎㄜˇ ㄧˇ ㄩㄥˋ.'"
          :pinyin="'zhe4 ge4 di4 tu2 zai4 mei2 you3 wi-fi de qing2 kuang4 xia4 ke3 yi3 yong4.'"
          :translation="'この地図はWi-Fiなしでも使えます。'"
        />
        <br>
        <p>
          ・好用
        </p>
        <SentenceFormat
          :sentence="'我想換比較好用的手機。'"
          :bopomofo="'ㄨㄛˇ ㄒㄧㄤˇ ㄏㄨㄢˋ ㄅㄧˇ ㄐㄧㄠˋ ㄏㄠˇ ㄩㄥˋ ㄉㄜ˙ ㄕㄡˇ ㄐㄧ.'"
          :pinyin="'wo3 xiang3 huan4 bi3 jiao4 hao3 yong4 de shou3 ji1.'"
          :translation="'もっと使いやすい携帯に変えたいです。'"
        />
        <br>
        <p>
          ・著
        </p>
        <SentenceFormat
          :sentence="'他拿著一枝筆寫東西。'"
          :bopomofo="'ㄊㄚ ㄋㄚˊ ㄓㄜ˙ ㄧ ㄓ ㄅㄧˇ ㄒㄧㄝˇ ㄉㄨㄥ ㄒㄧ˙.'"
          :pinyin="'ta1 na2 zhe yi1 zhi1 bi3 xie3 dong1 xi.'"
          :translation="'彼はペンを持って何かを書いています。'"
        />
        <br>
        <p>
          ・日用品
        </p>
        <SentenceFormat
          :sentence="'省買日用品的錢很好。'"
          :bopomofo="'ㄕㄥˇ ㄇㄞˇ ㄖˋ ㄩㄥˋ ㄆㄧㄣˇ ㄉㄜ˙ ㄑㄧㄢˊ ㄏㄣˇ ㄏㄠˇ.'"
          :pinyin="'sheng3 mai3 ri4 yong4 pin3 de qian2 hen3 hao3.'"
          :translation="'日用品を買うお金を節約するのは良い事です。'"
        />
        <br>
        <p>
          ・經過
        </p>
        <SentenceFormat
          :sentence="'雖然經過一些路口,我還沒找到超商了。'"
          :bopomofo="'ㄙㄨㄟ ㄖㄢˊ ㄐㄧㄥ ㄍㄨㄛˋ ㄧ ㄒㄧㄝ ㄌㄨˋ ㄎㄡˇ, ㄨㄛˇ ㄏㄞˊ ㄇㄟˊ ㄓㄠˇ ㄉㄠˋ ㄔㄠ ㄕㄤ ㄌㄜ˙.'"
          :pinyin="'sui1 ran2 jing1 guo4 yi1 xie1 lu4 kou3, wo3 hai2 mei2 zhao3 dao4 chao1 shang1 le.'"
          :translation="'いくつか交差点を通り過ぎましたが、 まだコンビニが見つかりません。'"
        />
        <br>
        <p>
          ・巷子
        </p>
        <SentenceFormat
          :sentence="'大學後面的巷子有很多可愛的店。'"
          :bopomofo="'ㄉㄚˋ ㄒㄩㄝˊ ㄏㄡˋ ㄇㄧㄢˋ ㄉㄧˊ ㄒㄧㄤˋ ㄗ˙ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄎㄜˇ ㄞˋ ㄉㄜ˙ ㄉㄧㄢˋ.'"
          :pinyin="'da4 xue2 hou4 mian4 de xiang4 zi3 you3 hen3 duo1 ke3 ai4 de dian4.'"
          :translation="'大学裏の路地にはかわいいお店がたくさんあります。'"
        />
        <br>
        <p>
          ・餓
        </p>
        <SentenceFormat
          :sentence="'我太餓了, 別等著他我們先吃飯吧。'"
          :bopomofo="'ㄨㄛˇ ㄊㄞˋ ㄜˋ ㄌㄜ˙, ㄅㄧㄝˊ ㄉㄥˇ ㄓㄜ˙ ㄊㄚ ㄨㄛˇ ㄇㄣ˙ ㄒㄧㄢ ㄔ ㄈㄢˋ ㄅㄚ˙.'"
          :pinyin="'wo3 tai4 e4 le, bie2 deng3 zhe ta1 wo3 men xian1 chi1 fan4 ba.'"
          :translation="'とてもお腹がすいたので、 彼を待たずに先に食べましょう。'"
        />
        <br>
        <p>
          ・一邊
        </p>
        <SentenceFormat
          :sentence="'一邊滑手機一邊聽別人的話不好。'"
          :bopomofo="'ㄧ ㄅㄧㄢ ㄏㄨㄚˊ ㄕㄡˇ ㄐㄧ ㄧ ㄅㄧㄢ ㄊㄧㄥ ㄅㄧㄝˊ ㄖㄣˊ ㄉㄜ˙ ㄏㄨㄚˋ ㄅㄨˋ ㄏㄠˇ.'"
          :pinyin="'yi1 bian1 hua2 shou3 ji1 yi1 bian1 ting1 bie2 ren2 de hua4 bu4 hao3.'"
          :translation="'携帯をいじりながら人の話を聞くのは良くないです。'"
        />
        <br>
        <p>
          ・發現
        </p>
        <SentenceFormat
          :sentence="'他發現以前他喜歡的店已經沒了。'"
          :bopomofo="'ㄊㄚ ㄈㄚ ㄒㄧㄢˋ ㄧˇ ㄑㄧㄢˊ ㄊㄚ ㄒㄧˇ ㄏㄨㄢ ㄉㄜ˙ ㄉㄧㄢˋ ㄧˇ ㄐㄧㄥ ㄇㄟˊ ㄌㄜ˙.'"
          :pinyin="'ta1 fa1 xian4 yi3 qian2 ta1 xi3 huan1 de dian4 yi3 jing1 mei2 le.'"
          :translation="'彼は以前好きだった店がなくなっていることに気づきました。'"
        />
        <br>
        <p>
          ・離
        </p>
        <SentenceFormat
          :sentence="'離他家到海邊是大概三公里。'"
          :bopomofo="'ㄌㄧˊ ㄊㄚ ㄐㄧㄚ ㄉㄠˋ ㄏㄞˇ ㄅㄧㄢ ㄕˋ ㄉㄚˋ ㄍㄞˋ ㄙㄢ ㄍㄨㄥ ㄌㄧˇ.'"
          :pinyin="'li4 ta1 jia1 dao4 hai3 bian1 shi4 da4 gai4 san1 gong1 li3.'"
          :translation="'彼の家から海までは約3キロです。'"
        />
        <br>
        <p>
          ・背包
        </p>
        <SentenceFormat
          :sentence="'我想把貓放在背包離去上班。'"
          :bopomofo="'ㄨㄛˇ ㄒㄧㄤˇ ㄅㄚˇ ㄇㄠ ㄈㄤˋ ㄗㄞˋ ㄅㄟ ㄅㄠ ㄌㄧˊ ㄑㄩˋ ㄕㄤˋ ㄅㄢ.'"
          :pinyin="'wo3 xiang3 ba3 mao1 fang4 zai4 bei1 bao1 li4 qu4 shang4 ban1.'"
          :translation="'猫をリュックに入れて一緒に仕事に行きたいです。'"
        />
        <br>
        <p>
          ・正好
        </p>
        <SentenceFormat
          :sentence="'我正好要去地鐵站。'"
          :bopomofo="'ㄨㄛˇ ㄓㄥˋ ㄏㄠˇ ㄧㄠˋ ㄑㄩˋ ㄉㄧˋ ㄊㄧㄝˇ ㄓㄢˋ.'"
          :pinyin="'wo3 zheng4 hao3 yao4 qu4 di4 tie3 zhan4.'"
          :translation="'ちょうど地下鉄の駅に向かうところです。'"
        />
        <br>
        <p>
          ・最後
        </p>
        <SentenceFormat
          :sentence="'幸運的是，我得到了最後一個。'"
          :bopomofo="'ㄒㄧㄥˋ ㄩㄣˋ ㄉㄜ˙ ㄕˋ，ㄨㄛˇ ㄉㄜˊ ㄉㄠˋ ㄌㄜ˙ ㄗㄨㄟˋ ㄏㄡˋ ㄧˊ ㄍㄜˋ.'"
          :pinyin="'xing4 yun4 de shi4, wo3 de2 dao4 le zui4 hou4 yi1 ge4.'"
          :translation="'幸いなことに、 私は最後の1つを手に入れました。'"
        />
        <br>
        <p>
          ・枝
        </p>
        <SentenceFormat
          :sentence="'入國的時候，通常可以帶二十枝香煙。'"
          :bopomofo="'ㄖㄨˋ ㄍㄨㄛˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ，ㄊㄨㄥ ㄔㄤˊ ㄎㄜˇ ㄧˇ ㄉㄞˋ ㄦˋ ㄕˊ ㄓ ㄒㄧㄤ ㄧㄢ.'"
          :pinyin="'ru4 guo2 de shi2 hou4, tong1 chang2 ke3 yi3 dai4 er4 shi2 zhi1 xiang1 yan1.'"
          :translation="'入国の際、 通常20本のタバコを持ち込めます。'"
        />
        <br>
        <p>
          ・筆
        </p>
        <SentenceFormat
          :sentence="'因為不用, 我最近不帶筆了。'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄅㄨˋ ㄩㄥˋ, ㄨㄛˇ ㄗㄨㄟˋ ㄐㄧㄣˋ ㄅㄨˋ ㄉㄞˋ ㄅㄧˇ ㄌㄜ˙.'"
          :pinyin="'yin1 wei4 bu2 yong4, wo3 zui4 jin4 bu2 dai4 bi3 le.'"
          :translation="'使わないので、 最近ペンを持ち歩くのをやめました。'"
        />
        <br>
        <p>
          ・本
        </p>
        <SentenceFormat
          :sentence="'我一次買了三本課本。'"
          :bopomofo="'ㄨㄛˇ ㄧ ㄘˋ ㄇㄞˇ ㄌㄜ˙ ㄙㄢ ㄅㄣˇ ㄎㄜˋ ㄅㄣˇ.'"
          :pinyin="'wo3 yi1 ci4 mai3 le san1 ben3 ke4 ben3.'"
          :translation="'一度に3冊の教科書を購入しました。'"
        />
        <br>
        <p>
          ・本子
        </p>
        <SentenceFormat
          :sentence="'你還有你小時候用的本子嗎?'"
          :bopomofo="'ㄋㄧˇ ㄏㄞˊ ㄧㄡˇ ㄋㄧˇ ㄒㄧㄠˇ ㄕˊ ㄏㄡˋ ㄩㄥˋ ㄉㄜ˙ ㄅㄣˇ ㄗ˙ ㄇㄚ˙?'"
          :pinyin="'ni3 hai2 you3 ni3 xiao3 shi2 hou4 yong4 de ben3 zi3 ma?'"
          :translation="'子供の頃に使っていたノートはまだ持っていますか?'"
        />
        <br>
        <p>
          ・左轉
        </p>
        <SentenceFormat
          :sentence="'為了施工, 在那個路口今天不能左轉。'"
          :bopomofo="'ㄨㄟˋ ㄌㄜ˙ ㄕ ㄍㄨㄥ, ㄗㄞˋ ㄋㄚˋ ㄍㄜˋ ㄌㄨˋ ㄎㄡˇ ㄐㄧㄣ ㄊㄧㄢ ㄅㄨˋ ㄋㄥˊ ㄗㄨㄛˇ ㄓㄨㄢˇ.'"
          :pinyin="'wei4 le shi1 gong1, zai4 na4 ge4 lu4 kou3 jin1 tian1 bu4 neng2 zuo3 zhuan3.'"
          :translation="'工事のため、 今日はあの交差点は左折できません。'"
        />
        <br>
        <p>
          ・師大路上
        </p>
        <SentenceFormat
          :sentence="'師大路上有很多外國學生聊聊天。'"
          :bopomofo="'ㄕ ㄉㄚˋ ㄌㄨˋ ㄕㄤˋ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄨㄞˋ ㄍㄨㄛˊ ㄒㄩㄝˊ ㄕㄥ ㄌㄧㄠˊ ㄌㄧㄠˊ ㄊㄧㄢ.'"
          :pinyin="'shi1 da4 lu4 shang4 you3 hen3 duo1 wai4 guo2 xue2 sheng1 liao2 liao2 tian1.'"
          :translation="'師大路にはおしゃべりをしている外国人学生がたくさんいます。'"
        />
        <br>
        <p>
          ・麵店
        </p>
        <SentenceFormat
          :sentence="'麵店在日本和台灣的差距是湯的濃度。'"
          :bopomofo="'ㄇㄧㄢˋ ㄉㄧㄢˋ ㄗㄞˋ ㄖˋ ㄅㄣˇ ㄏㄢˋ ㄊㄞˊ ㄨㄢ ㄉㄜ˙ ㄔㄚ ㄐㄩˋ ㄕˋ ㄊㄤ ㄉㄜ˙ ㄋㄨㄥˊ ㄉㄨˋ.'"
          :pinyin="'mian4 dian4 zai4 ri4 ben3 han2 tai2 wan1 de cha1 ju4 shi4 tang1 de nong2 du4.'"
          :translation="'日本と台湾のヌードルショップの違いはスープの濃さです。'"
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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第1章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第1章で登場する新単語を使った例文や気づいた事など' }
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
