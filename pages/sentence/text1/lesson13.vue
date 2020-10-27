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
          當代中文課程課1・第13章
        </h1>
        <p>
          【新単語+例文】
        </p>
        <p>
          ・生日
        </p>
        <SentenceFormat
          :sentence="'媽媽的生日快到了, 我得去買禮物。'"
          :bopomofo="'ㄇㄚ ㄇㄚ ㄉㄜ˙ ㄕㄥ ㄖˋ ㄎㄨㄞˋ ㄉㄠˋ ㄌㄜ˙, ㄨㄛˇ ㄉㄟˇ ㄑㄩˋ ㄇㄞˇ ㄌㄧˇ ㄨˋ.'"
          :pinyin="'ma1 ma1 de sheng1 ri4 kuai4 dao4 le, wo3 dei3 qu4 mai3 li3 wu4.'"
          :translation="'お母さんの誕生日がもうすぐなので、 プレゼントを買いに行かなければいけません。'"
        />
        <br>
        <p>
          ・快樂
        </p>
        <SentenceFormat
          :sentence="'聖誕節快樂, 今天晚上我們吃蛋糕吧。'"
          :bopomofo="'ㄕㄥˋ ㄉㄢˋ ㄐㄧㄝˊ ㄎㄨㄞˋ ㄌㄜˋ, ㄐㄧㄣ ㄊㄧㄢ ㄨㄢˇ ㄕㄤˋ ㄨㄛˇ ㄇㄣ˙ ㄔ ㄉㄢˋ ㄍㄠ ㄅㄚ˙.'"
          :pinyin="'sheng4 dan4 jie2 kui4 le4, jin1 tian1 wan3 shang4 wo3 men chi1 dan4 gao1 ba.'"
          :translation="'メリークリスマス、 今夜はケーキを食べましょう。'"
        />
        <br>
        <p>
          ・回來
        </p>
        <SentenceFormat
          :sentence="'肚子餓的時候， 貓會回來的。'"
          :bopomofo="'ㄉㄨˋ ㄗ˙ ㄜˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ， ㄇㄠ ㄏㄨㄟˋ ㄏㄨㄟˊ ㄌㄞˊ ㄉㄜ˙.'"
          :pinyin="'du4 zi3 e4 de shi2 hou4, mao1 hui4 hui2 lai2 de.'"
          :translation="'お腹が空いたら、 猫は帰ってきます。'"
        />
        <br>
        <p>
          ・啊
        </p>
        <SentenceFormat
          :sentence="'啊, 我剛剛想起來我今天一定要去銀行。'"
          :bopomofo="'ㄚ˙, ㄨㄛˇ ㄍㄤ ㄍㄤ ㄒㄧㄤˇ ㄑㄧˇ ㄌㄞˊ ㄨㄛˇ ㄐㄧㄣ ㄊㄧㄢ ㄧˊ ㄉㄧㄥˋ ㄧㄠˋ ㄑㄩˋ ㄧㄣˊ ㄏㄤˊ.'"
          :pinyin="'a, wo3 gang1 gang1 xiang3 qi3 lai2 wo3 jin1 tian1 yi1 ding4 yao4 qu4 yin2 hang2.'"
          :translation="'ああ、 今日は銀行に行かなければならないことを思い出しました。'"
        />
        <br>
        <p>
          ・怎麼
        </p>
        <SentenceFormat
          :sentence="'你怎麼做這樣的錯誤?'"
          :bopomofo="'ㄋㄧˇ ㄗㄣˇ ㄇㄜ˙ ㄗㄨㄛˋ ㄓㄜˋ ㄧㄤˋ ㄉㄜ˙ ㄘㄨㄛˋ ㄨˋ?'"
          :pinyin="'ni3 zen3 me zuo4 zhe4 yang4 de cuo4 wu4?'"
          :translation="'どうやってそんな間違いをしたのですか?'"
        />
        <br>
        <p>
          ・忘(了)
        </p>
        <SentenceFormat
          :sentence="'他一定忘了結婚紀念日。'"
          :bopomofo="'ㄊㄚ ㄧˊ ㄉㄧㄥˋ ㄨㄤˋ ㄌㄧㄠˇ ㄐㄧㄝˊ ㄏㄨㄣ ㄐㄧˋ ㄋㄧㄢˋ ㄖˋ.'"
          :pinyin="'ta1 yi1 ding4 wang4 le jie2 hun1 ji4 nian4 ri4.'"
          :translation="'彼は結婚記念日を忘れていたに違いありません。'"
        />
        <br>
        <p>
          ・記得
        </p>
        <SentenceFormat
          :sentence="'你記得這個甜點是在哪裡買的?'"
          :bopomofo="'ㄋㄧˇ ㄐㄧˋ ㄉㄜ˙ ㄓㄜˋ ㄍㄜˋ ㄊㄧㄢˊ ㄉㄧㄢˇ ㄕˋ ㄗㄞˋ ㄋㄚˇ ㄌㄧˇ ㄇㄞˇ ㄉㄜ˙?'"
          :pinyin="'ni3 ji4 de zhe4 ge4 tian2 dian3 shi4 zai4 na3 li3 mai3 de?'"
          :translation="'このデザートをどこで買ったか覚えていますか?'"
        />
        <br>
        <p>
          ・當然
        </p>
        <SentenceFormat
          :sentence="'當然， 上班不要遲到。'"
          :bopomofo="'ㄉㄤ ㄖㄢˊ， ㄕㄤˋ ㄅㄢ ㄅㄨˊ ㄧㄠˋ ㄔˊ ㄉㄠˋ.'"
          :pinyin="'dang1 ran2, shang4 ban1 bu2 yao4 chi2 dao4.'"
          :translation="'もちろん、 仕事に遅刻してはいけません。'"
        />
        <br>
        <p>
          ・語言
        </p>
        <SentenceFormat
          :sentence="'因為他的聲音太小, 我不知道那種語言他在說。'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄊㄚ ㄉㄜ˙ ㄕㄥ ㄧㄣ ㄊㄞˋ ㄒㄧㄠˇ, ㄨㄛˇ ㄅㄨˋ ㄓ ㄉㄠˋ ㄋㄚˋ ㄓㄨㄥˇ ㄩˇ ㄧㄢˊ ㄊㄚ ㄗㄞˋ ㄕㄨㄛ.'"
          :pinyin="'yin1 wei4 ta1 de sheng1 yin1 tai4 xiao3, wo3 bu4 zhi1 dao4 na4 zhong3 yu3 yan2 ta1 zai4 shuo1.'"
          :translation="'彼の声が小さすぎるので、 彼が何語を話しているのかわかりません。'"
        />
        <br>
        <p>
          ・交換
        </p>
        <SentenceFormat
          :sentence="'請你交換我們的筆?'"
          :bopomofo="'ㄑㄧㄥˇ ㄋㄧˇ ㄐㄧㄠ ㄏㄨㄢˋ ㄨㄛˇ ㄇㄣ˙ ㄉㄜ˙ ㄅㄧˇ?'"
          :pinyin="'qing3 ni3 jiao1 huan4 wo3 men de bi3?'"
          :translation="'ペンを交換していただけませんか?'"
        />
        <br>
        <p>
          ・那麼
        </p>
        <SentenceFormat
          :sentence="'北部那麼冷, 只有一件衣服不足夠。'"
          :bopomofo="'ㄅㄟˇ ㄅㄨˋ ㄋㄚˋ ㄇㄜ˙ ㄌㄥˇ, ㄓˇ ㄧㄡˇ ㄧ ㄐㄧㄢˋ ㄧ ㄈㄨˊ ㄅㄨˋ ㄗㄨˊ ㄍㄡˋ.'"
          :pinyin="'bei3 bu4 na4 me leng3, zhi3 you3 yi1 jian4 yi1 fu2 bu4 zu2 gou4.'"
          :translation="'北はとても寒いので、 服一枚では不十分です。'"
        />
        <br>
        <p>
          ・熱心
        </p>
        <SentenceFormat
          :sentence="'他讀書讀的很熱心。'"
          :bopomofo="'ㄊㄚ ㄉㄨˊ ㄕㄨ ㄉㄨˊ ㄉㄜ˙ ㄏㄣˇ ㄖㄜˋ ㄒㄧㄣ.'"
          :pinyin="'ta1 du2 shu1 du2 de hen3 re4 xin1.'"
          :translation="'彼は読書にとても熱心です。'"
        />
        <br>
        <p>
          ・西班牙語
        </p>
        <SentenceFormat
          :sentence="'西班牙語的發音有一點好像日語的。'"
          :bopomofo="'ㄒㄧ ㄅㄢ ㄧㄚˊ ㄩˇ ㄉㄜ˙ ㄈㄚ ㄧㄣ ㄧㄡˇ ㄧˋ ㄉㄧㄢˇ ㄏㄠˇ ㄒㄧㄤˋ ㄖˋ ㄩˇ ㄉㄜ˙.'"
          :pinyin="'xi1 ban1 ya2 yu3 de fa1 yin1 you3 yi1 dian3 hao3 xiang4 ri4 yu3 de.'"
          :translation="'スペイン語の発音は日本語に少し似ています。'"
        />
        <br>
        <p>
          ・一樣
        </p>
        <SentenceFormat
          :sentence="'那兩隻狗看起來一樣。'"
          :bopomofo="'ㄋㄚˋ ㄌㄧㄤˇ ㄓˇ ㄍㄡˇ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄧˊ ㄧㄤˋ.'"
          :pinyin="'na4 liang3 zhi1 gou3 kan4 qi3 lai2 yi1 yang4.'"
          :translation="'あの2匹の犬の見た目は同じように見えます。'"
        />
        <br>
        <p>
          ・過
        </p>
        <SentenceFormat
          :sentence="'我想跟家人一起過我的生日。'"
          :bopomofo="'ㄨㄛˇ ㄒㄧㄤˇ ㄍㄣ ㄐㄧㄚ ㄖㄣˊ ㄧˋ ㄑㄧˇ ㄍㄨㄛˋ ㄨㄛˇ ㄉㄜ˙ ㄕㄥ ㄖˋ.'"
          :pinyin="'wo3 xiang3 gen1 jia1 ren2 yi1 qi3 guo4 wo3 de sheng1 ri4.'"
          :translation="'家族と一緒に誕生日を過ごしたいです。'"
        />
        <br>
        <p>
          ・左右
        </p>
        <SentenceFormat
          :sentence="'那家便利商店九點左右開。'"
          :bopomofo="'ㄋㄚˋ ㄐㄧㄚ ㄅㄧㄢˋ ㄌㄧˋ ㄕㄤ ㄉㄧㄢˋ ㄐㄧㄡˇ ㄉㄧㄢˇ ㄗㄨㄛˇ ㄧㄡˋ ㄎㄞ.'"
          :pinyin="'na4 jia1 bian4 li4 shang1 dian4 jiu3 dian3 zuo3 you4 kai1.'"
          :translation="'あのコンビニは9時ごろ開店します。'"
        />
        <br>
        <p>
          ・門口
        </p>
        <SentenceFormat
          :sentence="'那個站著門口前面的先生是我昨天講的人。'"
          :bopomofo="'ㄋㄚˋ ㄍㄜˋ ㄓㄢˋ ㄓㄜ˙ ㄇㄣˊ ㄎㄡˇ ㄑㄧㄢˊ ㄇㄧㄢˋ ㄉㄧˊ ㄒㄧㄢ ㄕㄥ ㄕˋ ㄨㄛˇ ㄗㄨㄛˊ ㄊㄧㄢ ㄐㄧㄤˇ ㄉㄜ˙ ㄖㄣˊ.'"
          :pinyin="'na4 ge4 zhan4 zhe men2 kou3 qian2 mian4 de xian1 sheng1 shi4 wo3 zuo2 tian1 jiang3 de ren2.'"
          :translation="'ドアの前に立っている男性は私が昨日話した人です。'"
        />
        <br>
        <p>
          ・西班牙
        </p>
        <SentenceFormat
          :sentence="'往西班牙的飛機被取消了。'"
          :bopomofo="'ㄨㄤˇ ㄒㄧ ㄅㄢ ㄧㄚˊ ㄉㄜ˙ ㄈㄟ ㄐㄧ ㄅㄟˋ ㄑㄩˇ ㄒㄧㄠ ㄌㄜ˙.'"
          :pinyin="'wang3 xi1 ban1 ya2 de fei1 ji1 bei4 qu3 xiao1 le.'"
          :translation="'スペイン行きの飛行機はキャンセルされました。'"
        />
        <br>
        <p>
          ・生日快樂
        </p>
        <SentenceFormat
          :sentence="'我昨天告訴他生日快樂， 但我意識到他的生日是今天。'"
          :bopomofo="'ㄨㄛˇ ㄗㄨㄛˊ ㄊㄧㄢ ㄍㄠˋ ㄙㄨˋ ㄊㄚ ㄕㄥ ㄖˋ ㄎㄨㄞˋ ㄌㄜˋ， ㄉㄢˋ ㄨㄛˇ ㄧˋ ㄕˊ ㄉㄠˋ ㄊㄚ ㄉㄜ˙ ㄕㄥ ㄖˋ ㄕˋ ㄐㄧㄣ ㄊㄧㄢ.'"
          :pinyin="'wo3 zuo2 tian1 gao4 su4 ta1 sheng1 ri4 kuai4 le4, dan4 wo3 yi4 shi2 dao4 ta1 de sheng1 ri4 shi4 jin1 tian1.'"
          :translation="'昨日彼にお誕生日おめでとうと言いましたが、 彼の誕生日は今日だったことに気が付きました。'"
        />
        <br>
        <p>
          ・我就是
        </p>
        <SentenceFormat
          :sentence="'妳是陳小姐嗎? -我就是. 請問, 您貴姓?'"
          :bopomofo="'ㄋㄧˇ ㄕˋ ㄔㄣˊ ㄒㄧㄠˇ ㄐㄧㄝˇ ㄇㄚ˙? -ㄨㄛˇ ㄐㄧㄡˋ ㄕˋ. ㄑㄧㄥˇ ㄨㄣˋ, ㄋㄧㄣˊ ㄍㄨㄟˋ ㄒㄧㄥˋ?'"
          :pinyin="'ni3 shi4 chen2 xiao3 jie3 ma2? -wo3 jiu4 shi4. qing3 wen4, nin2 gui4 xing4?'"
          :translation="'陳さんですか? -そうです。 あなたはどちら様ですか?'"
        />
        <br>
        <p>
          ・好久不見
        </p>
        <SentenceFormat
          :sentence="'好久不見, 比以前妳的頭髮變長了。'"
          :bopomofo="'ㄏㄠˇ ㄐㄧㄡˇ ㄅㄨˊ ㄐㄧㄢˋ, ㄅㄧˇ ㄧˇ ㄑㄧㄢˊ ㄋㄧˇ ㄉㄜ˙ ㄊㄡˊ ㄈㄚˋ ㄅㄧㄢˋ ㄓㄤˇ ㄌㄜ˙.'"
          :pinyin="'hao3 jiu3 bu2 jia4n, bi3 yi3 qian2 ni3 de tou2 fa4 bian4 zhang3 le.'"
          :translation="'お久しぶりです、 前より髪が長くなりましたね。'"
        />
        <br>
        <p>
          ・不必客氣
        </p>
        <SentenceFormat
          :sentence="'謝謝你送了禮物給我們. -不必客氣。'"
          :bopomofo="'ㄒㄧㄝˋ ㄒㄧㄝˋ ㄋㄧˇ ㄙㄨㄥˋ ㄌㄜ˙ ㄌㄧˇ ㄨˋ ㄍㄟˇ ㄨㄛˇ ㄇㄣ˙. ㄅㄨˋ ㄅㄧˋ ㄎㄜˋ ㄑㄧˋ.'"
          :pinyin="'xie4 xie4 ni3 song4 le li3 wu4 gei3 wo3 men. bu2 bi4 ke4 qi4.'"
          :translation="'プレゼントを送っていただきありがとうございます。 -どういたしまして。'"
        />
        <br>
        <p>
          ・太客氣
        </p>
        <SentenceFormat
          :sentence="'他太客氣，說明了我沒參加的會議。'"
          :bopomofo="'ㄊㄚ ㄊㄞˋ ㄎㄜˋ ㄑㄧˋ， ㄕㄨㄛ ㄇㄧㄥˊ ㄌㄜ˙ ㄨㄛˇ ㄇㄟˊ ㄘㄢ ㄐㄧㄚ ㄉㄜ˙ ㄏㄨㄟˋ ㄧˋ.'"
          :pinyin="'ta1 tai4 ke4 qi4, shuo1 ming2 le wo3 mei2 can1 jia1 de hui4 yi4.'"
          :translation="'彼はとても親切で、 私が出席しなかった会議について説明してくれました。'"
        />
        <br>
        <p>
          ・禮物
        </p>
        <SentenceFormat
          :sentence="'我失敗了。 我忘了把發票放在禮物袋裡。'"
          :bopomofo="'ㄨㄛˇ ㄕ ㄅㄞˋ ㄌㄜ˙. ㄨㄛˇ ㄨㄤˋ ㄌㄜ˙ ㄅㄚˇ ㄈㄚ ㄆㄧㄠˋ ㄈㄤˋ ㄗㄞˋ ㄌㄧˇ ㄨˋ ㄉㄞˋ ㄌㄧˇ.'"
          :pinyin="'wo3 shi1 bai4 le. wo3 wang4 le ba3 fa1 piao4 fang4 zai4 li3 wu4 dai4 li3.'"
          :translation="'失敗しました。 レシートをプレゼントの袋に入れていた事を忘れていました。'"
        />
        <br>
        <p>
          ・今年
        </p>
        <SentenceFormat
          :sentence="'今年颱風沒來, 所以冬天水因該不足夠。'"
          :bopomofo="'ㄐㄧㄣ ㄋㄧㄢˊ ㄊㄞˊ ㄈㄥ ㄇㄟˊ ㄌㄞˊ, ㄙㄨㄛˇ ㄧˇ ㄉㄨㄥ ㄊㄧㄢ ㄕㄨㄟˇ ㄧㄣ ㄍㄞ ㄅㄨˋ ㄗㄨˊ ㄍㄡˋ.'"
          :pinyin="'jin1 nian2 tai2 feng1 mei2 lai2, suo3 yi3 dong1 tian1 shui3 yin1 gai1 bu4 zu2 gou4.'"
          :translation="'今年は台風が来なかったので、 冬は水が足りないはずです。'"
        />
        <br>
        <p>
          ・訂
        </p>
        <SentenceFormat
          :sentence="'為了媽媽的生日送到, 我訂了鮮花。'"
          :bopomofo="'ㄨㄟˋ ㄌㄜ˙ ㄇㄚ ㄇㄚ ㄉㄜ˙ ㄕㄥ ㄖˋ ㄙㄨㄥˋ ㄉㄠˋ, ㄨㄛˇ ㄉㄧㄥˋ ㄌㄜ˙ ㄒㄧㄢ ㄏㄨㄚ.'"
          :pinyin="'wei4 le ma1 ma1 de sheng1 ri4 song4 dao4, wo3 ding4 le xian1 hua1.'"
          :translation="'母の誕生日に届くように、 花を注文しました。'"
        />
        <br>
        <p>
          ・了
        </p>
        <SentenceFormat
          :sentence="'今天我吃了午餐有一點早。'"
          :bopomofo="'ㄐㄧㄣ ㄊㄧㄢ ㄨㄛˇ ㄔ ㄌㄜ˙ ㄨˇ ㄘㄢ ㄧㄡˇ ㄧˋ ㄉㄧㄢˇ ㄗㄠˇ.'"
          :pinyin="'jin1 tian1 wo3 chi1 le wu3 can1 you3 yi1 dian3 zao3.'"
          :translation="'今日は少し早めに昼食をとりました。'"
        />
        <br>
        <p>
          ・豬腳
        </p>
        <SentenceFormat
          :sentence="'豬腳非常有營養。'"
          :bopomofo="'ㄓㄨ ㄐㄧㄠˇ ㄈㄟ ㄔㄤˊ ㄧㄡˇ ㄧㄥˊ ㄧㄤˇ.'"
          :pinyin="'zhu1 jiao3 fei1 chang2 you3 ying2 yang3.'"
          :translation="'豚足は栄養価がとても高いです。'"
        />
        <br>
        <p>
          ・麵線
        </p>
        <SentenceFormat
          :sentence="'麵線的麵很細, 煮得時間比較少。'"
          :bopomofo="'ㄇㄧㄢˋ ㄒㄧㄢˋ ㄉㄜ˙ ㄇㄧㄢˋ ㄏㄣˇ ㄒㄧˋ, ㄓㄨˇ ㄉㄜ˙ ㄕˊ ㄐㄧㄢ ㄅㄧˇ ㄐㄧㄠˋ ㄕㄠˇ.'"
          :pinyin="'mian4 xian1 de mian4 hen3 xi4, zhu3 de shi2 jian1 bi3 jiao4 shao3.'"
          :translation="'麵線の麵はとても細いので、調理に時間がかかりません。'"
        />
        <br>
        <p>
          ・蛋
        </p>
        <SentenceFormat
          :sentence="'攪拌三個雞蛋、 然後把它烤。'"
          :bopomofo="'ㄐㄧㄠˇ ㄅㄢˋ ㄙㄢ ㄍㄜ˙ ㄐㄧ ㄉㄢˋ、 ㄖㄢˊ ㄏㄡˋ ㄅㄚˇ ㄊㄚ ㄎㄠˇ.'"
          :pinyin="'jiao3 ban4 san1 ge4 ji1 dan4, ran2 hou4 ba3 ta1 kao3.'"
          :translation="'3つの卵をかき混ぜてから焼きます。'"
        />
        <br>
        <p>
          ・一點
        </p>
        <SentenceFormat
          :sentence="'你想吃一點東西的時候， 便利商店很方便。'"
          :bopomofo="'ㄋㄧˇ ㄒㄧㄤˇ ㄔ ㄧˋ ㄉㄧㄢˇ ㄉㄨㄥ ㄒㄧ ㄉㄜ˙ ㄕˊ ㄏㄡˋ， ㄅㄧㄢˋ ㄌㄧˋ ㄕㄤ ㄉㄧㄢˋ ㄏㄣˇ ㄈㄤ ㄅㄧㄢˋ.'"
          :pinyin="'ni3 xiang3 chi1 yi1 dian3 dong1 xi1 de shi2 hou4, bian4 li4 shang1 dian4 hen3 fang1 bian4.'"
          :translation="'何か少し食べたいときは、 コンビニがとても便利です。'"
        />
        <br>
        <p>
          ・傳統
        </p>
        <SentenceFormat
          :sentence="'這個城市的歷史很久, 所以有很多傳統。'"
          :bopomofo="'ㄓㄜˋ ㄍㄜˋ ㄔㄥˊ ㄕˋ ㄉㄜ˙ ㄌㄧˋ ㄕˇ ㄏㄣˇ ㄐㄧㄡˇ, ㄙㄨㄛˇ ㄧˇ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄔㄨㄢˊ ㄊㄨㄥˇ.'"
          :pinyin="'zhe4 ge4 cheng2 shi4 de li4 shi3 hen3 jiu3, suo3 yi3 you3 hen3 duo1 chuan2 tong3.'"
          :translation="'この街の歴史は長いので、 たくさんの伝統があります。'"
        />
        <br>
        <p>
          ・年輕
        </p>
        <SentenceFormat
          :sentence="'從這個村, 所有的年輕人都去大城市。'"
          :bopomofo="'ㄘㄨㄥˊ ㄓㄜˋ ㄍㄜˋ ㄘㄨㄣ, ㄙㄨㄛˇ ㄧㄡˇ ㄉㄜ˙ ㄋㄧㄢˊ ㄑㄧㄥ ㄖㄣˊ ㄉㄡ ㄑㄩˋ ㄉㄞˋ ㄔㄥˊ ㄕˋ.'"
          :pinyin="'cong2 zhe4 ge4 cun1, suo3 you3 de nian2 qing1 ren2 dou1 qu4 da4 cheng2 shi4.'"
          :translation="'この村から、 若者はみんな大都市に行ってしまいます。'"
        />
        <br>
        <p>
          ・蛋糕
        </p>
        <SentenceFormat
          :sentence="'我過敏， 所以我吃沒有雞蛋的蛋糕。'"
          :bopomofo="'ㄨㄛˇ ㄍㄨㄛˋ ㄇㄧㄣˇ， ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄔ ㄇㄟˊ ㄧㄡˇ ㄐㄧ ㄉㄢˋ ㄉㄜ˙ ㄉㄢˋ ㄍㄠ.'"
          :pinyin="'wo3 guo4 min3, suo3 yi3 wo3 chi1 mei2 you3 ji1 dan4 de dan4 gao1.'"
          :translation="'アレルギーがあるので、 卵の入っていないケーキを食べます。'"
        />
        <br>
        <p>
          ・對
        </p>
        <SentenceFormat
          :sentence="'那位老師對新生嚴格。'"
          :bopomofo="'ㄋㄚˋ ㄨㄟˋ ㄌㄠˇ ㄕ ㄉㄨㄟˋ ㄒㄧㄣ ㄕㄥ ㄧㄢˊ ㄍㄜˊ.'"
          :pinyin="'na4 wei4 lao3 shi1 dui4 xin1 sheng1 yan2 ge2.'"
          :translation="'あの先生は新入生に厳しいです。'"
        />
        <br>
        <p>
          ・祝
        </p>
        <SentenceFormat
          :sentence="'我祝你找到工作。'"
          :bopomofo="'ㄨㄛˇ ㄓㄨˋ ㄋㄧˇ ㄓㄠˇ ㄉㄠˋ ㄍㄨㄥ ㄗㄨㄛˋ.'"
          :pinyin="'wo3 zhu4 ni3 zhao3 dao4 gong1 zuo1.'"
          :translation="'就職おめでとうございます。'"
        />
        <br>
        <p>
          ・哪裡, 哪裡
        </p>
        <SentenceFormat
          :sentence="'謝謝你也買了我們的晚飯。 -哪裡，哪裡。'"
          :bopomofo="'ㄒㄧㄝˋ ㄒㄧㄝˋ ㄋㄧˇ ㄧㄝˇ ㄇㄞˇ ㄌㄜ˙ ㄨㄛˇ ㄇㄣ˙ ㄉㄜ˙ ㄨㄢˇ ㄈㄢˋ. ㄋㄚˇ ㄌㄧˇ， ㄋㄚˇ ㄌㄧˇ.'"
          :pinyin="'xie4 xie4 ni3 ye3 mai3 le wo3 men de wan3 fan4. na3 li3, na3 li3.'"
          :translation="'私達の夕飯も買ってくれてありがとうございます。 -いいえ、いいえ。'"
        />
        <br>
        <p>
          ・大部分
        </p>
        <SentenceFormat
          :sentence="'這個城市的大部分人喜歡吃牛肉麵。'"
          :bopomofo="'ㄓㄜˋ ㄍㄜˋ ㄔㄥˊ ㄕˋ ㄉㄜ˙ ㄉㄚˋ ㄅㄨˋ ㄈㄣˋ ㄖㄣˊ ㄒㄧˇ ㄏㄨㄢ ㄔ ㄋㄧㄡˊ ㄖㄡˋ ㄇㄧㄢˋ.'"
          :pinyin="'zhe4 ge4 cheng2 shi4 de da4 bu4 fen4 ren2 xi3 huan1 chi1 niu2 rou4 mian4.'"
          :translation="'この街のほとんどの人は牛肉麵が好きです。'"
        />
        <br>
        <p>
          ・萬事如意
        </p>
        <SentenceFormat
          :sentence="'你加入公司以後， 我願萬事如意。'"
          :bopomofo="'ㄋㄧˇ ㄐㄧㄚ ㄖㄨˋ ㄍㄨㄥ ㄙ ㄧˇ ㄏㄡˋ， ㄨㄛˇ ㄩㄢˋ ㄨㄢˋ ㄕˋ ㄖㄨˊ ㄧˋ.'"
          :pinyin="'ni3 jia1 ru4 gong1 si1 yi3 hou4, wo3 yuan4 wan4 shi4 ru2 yi4.'"
          :translation="'あなたが会社に入った後、 すべてがうまくいくように願っています。'"
        />
        <br>
        <p>
          ・心想事成
        </p>
        <SentenceFormat
          :sentence="'如果你很努力, 心想事成。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄏㄣˇ ㄋㄨˇ ㄌㄧˋ, ㄒㄧㄣ ㄒㄧㄤˇ ㄕˋ ㄔㄥˊ.'"
          :pinyin="'ru2 guo3 ni3 hen3 nu3 li4, xin1 xiang3 shi4 cheng2.'"
          :translation="'一生懸命努力すれば、 すべてが実現するでしょう。'"
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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第13章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第13章で登場する新単語を使った例文や気づいた事など' }
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
