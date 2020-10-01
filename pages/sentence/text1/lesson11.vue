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
          當代中文課程課1・第11章
        </h1>
        <p>
          【新単語+例文】
        </p>
        <p>
          ・租
        </p>
        <SentenceFormat
          :sentence="'在台湾租車要国際駕駛執照。'"
          :bopomofo="'ㄗㄞˋ ㄊㄞˊ ㄨㄢ ㄗㄨ ㄔㄜ ㄧㄠˋ ㄍㄨㄛˊ ㄐㄧˋ ㄐㄧㄚˋ ㄕˇ ㄓˊ ㄓㄠˋ.'"
          :pinyin="'zai4 tai2 wan1 zu1 che1 yao4 guo2 ji4 jia4 shi3 zhi2 zhao4.'"
          :translation="'台湾で車を借りるには、国際運転免許証が必要です。'"
        />
        <br>
        <p>
          ・房東
        </p>
        <SentenceFormat
          :sentence="'要是你想變房間的什麼東西, 你得問房東。'"
          :bopomofo="'ㄧㄠˋ ㄕˋ ㄋㄧˇ ㄒㄧㄤˇ ㄅㄧㄢˋ ㄈㄤˊ ㄐㄧㄢ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙, ㄋㄧˇ ㄉㄟˇ ㄨㄣˋ ㄈㄤˊ ㄉㄨㄥ.'"
          :pinyin="'yao4 shi4 ni3 xiang3 bian4 fang2 jian1 de dong1 xi, ni3 dei3 wen4 fang2 dong1.'"
          :translation="'部屋の何かを変更したい場合は、 家主に聞く必要があります。'"
        />
        <br>
        <p>
          ・客廳
        </p>
        <SentenceFormat
          :sentence="'我想在客廳裡放一個大沙發。'"
          :bopomofo="'ㄨㄛˇ ㄒㄧㄤˇ ㄗㄞˋ ㄎㄜˋ ㄊㄧㄥ ㄌㄧˇ ㄈㄤˋ ㄧˊ ㄍㄜˋ ㄉㄚˋ ㄕㄚ ㄈㄚ.'"
          :pinyin="'wo3 xiang3 zai4 ke4 ting1 li3 fang4 yi1 ge4 da4 sha1 fa1.'"
          :translation="'リビングに大きなソファを置きたい。'"
        />
        <br>
        <p>
          ・廚房
        </p>
        <SentenceFormat
          :sentence="'廚房需要一個蒸鍋。'"
          :bopomofo="'ㄔㄨˊ ㄈㄤˊ ㄒㄩ ㄧㄠˋ ㄧˊ ㄍㄜˋ ㄓㄥ ㄍㄨㄛ.'"
          :pinyin="'chu2 fang2 xu1 yao4 yi1 ge4 zheng1 guo1.'"
          :translation="'キッチンには蒸し器が必要です。'"
        />
        <br>
        <p>
          ・左邊
        </p>
        <SentenceFormat
          :sentence="'去往左邊, 你就看到醫院。'"
          :bopomofo="'ㄑㄩˋ ㄨㄤˇ ㄗㄨㄛˇ ㄅㄧㄢ, ㄋㄧˇ ㄐㄧㄡˋ ㄎㄢˋ ㄉㄠˋ ㄧ ㄩㄢˋ.'"
          :pinyin="'qu4 wang3 zuo3 bian1, ni3 jiu4 kan4 dao4 yi3 yuan4.'"
          :translation="'左に行くと病院が見えます。'"
        />
        <br>
        <p>
          ・右邊
        </p>
        <SentenceFormat
          :sentence="'你的右邊的人是你的弟弟嗎?'"
          :bopomofo="'ㄋㄧˇ ㄉㄜ˙ ㄧㄡˋ ㄅㄧㄢ ㄉㄜ˙ ㄖㄣˊ ㄕˋ ㄋㄧˇ ㄉㄜ˙ ㄉㄧˋ ㄉㄧ˙ ㄇㄚ˙?'"
          :pinyin="'ni3 de you4 bian1 de ren2 shi4 ni3 de di4 di4 ma?'"
          :translation="'あなたの右側の人はあなたの弟ですか?'"
        />
        <br>
        <p>
          ・浴室
        </p>
        <SentenceFormat
          :sentence="'浴室總是是濕濕的。'"
          :bopomofo="'ㄩˋ ㄕˋ ㄗㄨㄥˇ ㄕˋ ㄕˋ ㄕ ㄕ ㄉㄜ˙.'"
          :pinyin="'yu4 shi4 zong3 shi4 shi4 shi1 shi1 de.'"
          :translation="'バスルームにはいつも湿気がこもっています。'"
        />
        <br>
        <p>
          ・超市
        </p>
        <SentenceFormat
          :sentence="'下次你去超市的時候， 你可不可以幫我買番茄?'"
          :bopomofo="'ㄒㄧㄚˋ ㄘˋ ㄋㄧˇ ㄑㄩˋ ㄔㄠ ㄕˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ， ㄋㄧˇ ㄎㄜˇ ㄅㄨˋ ㄎㄜˇ ㄧˇ ㄅㄤ ㄨㄛˇ ㄇㄞˇ ㄈㄢ ㄑㄧㄝˊ?'"
          :pinyin="'xia4 ci4 ni3 qu4 chao1 shi4 de shi2 hou4, ni3 ke3 bu4 ke3 yi3 bang1 wo3 mai3 fan1 qie2?'"
          :translation="'次にスーパーに行く時、 トマトを買って来てもらえますか?'"
        />
        <br>
        <p>
          ・走路
        </p>
        <SentenceFormat
          :sentence="'如果你走路去, 小心車'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄗㄡˇ ㄌㄨˋ ㄑㄩˋ, ㄒㄧㄠˇ ㄒㄧㄣ ㄔㄜ.'"
          :pinyin="'ru2 guo3 ni3 zou3 lu4 qu4, xiao3 xin1 che1.'"
          :translation="'徒歩で行く場合は、車に注意してください。'"
        />
        <br>
        <p>
          ・分鐘
        </p>
        <SentenceFormat
          :sentence="'完讀這本書我要花三十分鐘。'"
          :bopomofo="'ㄨㄢˊ ㄉㄨˊ ㄓㄜˋ ㄅㄣˇ ㄕㄨ ㄨㄛˇ ㄧㄠˋ ㄏㄨㄚ ㄙㄢ ㄕˊ ㄈㄣ ㄓㄨㄥ.'"
          :pinyin="'wan2 du2 zhe4 ben3 shu1 wo3 yao4 hua1 san1 shi2 fen1 zhong1.'"
          :translation="'この本を読み終えるのに30分かかります。'"
        />
        <br>
        <p>
          ・就
        </p>
        <SentenceFormat
          :sentence="'只要寫上你的名字， 你就會中了兩百塊。'"
          :bopomofo="'ㄓˇ ㄧㄠˋ ㄒㄧㄝˇ ㄕㄤˋ ㄋㄧˇ ㄉㄜ˙ ㄇㄧㄥˊ ㄗˋ， ㄋㄧˇ ㄐㄧㄡˋ ㄏㄨㄟˋ ㄓㄨㄥ ㄌㄜ˙ ㄌㄧㄤˇ ㄅㄞˇ ㄎㄨㄞˋ.'"
          :pinyin="'zhi3 yao4 xie3 shang4 ni3 de ming2 zi4, ni3 jiu4 hui4 zhong4 le liang3 bai3 kuai4.'"
          :translation="'名前を書くだけで200元が当たります。'"
        />
        <br>
        <p>
          ・到
        </p>
        <SentenceFormat
          :sentence="'逛街後我到家的時候, 我發覺忘了買電燈泡。'"
          :bopomofo="'ㄍㄨㄤˋ ㄐㄧㄝ ㄏㄡˋ ㄨㄛˇ ㄉㄠˋ ㄐㄧㄚ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄨㄛˇ ㄈㄚ ㄐㄩㄝˊ ㄨㄤˋ ㄌㄜ˙ ㄇㄞˇ ㄉㄧㄢˋ ㄉㄥ ㄆㄠˋ.'"
          :pinyin="'guang4 jie1 hou4 wo3 dao4 jia1 de shi2 hou4, wo3 fa1 jue2 wang4 le mai3 dian4 deng1 pao4.'"
          :translation="'買い物をして帰宅したとき、 電球を買うのを忘れていたことに気づきました。'"
        />
        <br>
        <p>
          ・間
        </p>
        <SentenceFormat
          :sentence="'這間房間裡有看起來很舒服的床, 我要躺躺看。'"
          :bopomofo="'ㄓㄜˋ ㄐㄧㄢ ㄈㄤˊ ㄐㄧㄢ ㄌㄧˇ ㄧㄡˇ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄏㄣˇ ㄕㄨ ㄈㄨˊ ㄉㄜ˙ ㄔㄨㄤˊ, ㄨㄛˇ ㄧㄠˋ ㄊㄤˇ ㄊㄤˇ ㄎㄢˋ.'"
          :pinyin="'zhe4 jia1n fang2 jian1 li3 you3 kan4 qi3 lai2 hen3 shu1 fu2 de chuang2, wo3 yao4 tang3 tang3 kan4.'"
          :translation="'この部屋にはとても快適そうなベッドがあるので、 横になってみたいです。'"
        />
        <br>
        <p>
          ・空
        </p>
        <SentenceFormat
          :sentence="'我們得快找一家有空的酒店。'"
          :bopomofo="'ㄨㄛˇ ㄇㄣ˙ ㄉㄟˇ ㄎㄨㄞˋ ㄓㄠˇ ㄧ ㄐㄧㄚ ㄧㄡˇ ㄎㄨㄥˋ ㄉㄜ˙ ㄐㄧㄡˇ ㄉㄧㄢˋ.'"
          :pinyin="'wo3 men dei3 kuai4 zhao3 yi1 jia1 you3 kong4 de jiu3 dian4.'"
          :translation="'空いているホテルをすぐに見つけなければいけません。'"
        />
        <br>
        <p>
          ・房間
        </p>
        <SentenceFormat
          :sentence="'在房間裡別吃東西。'"
          :bopomofo="'ㄗㄞˋ ㄈㄤˊ ㄐㄧㄢ ㄌㄧˇ ㄅㄧㄝˊ ㄔ ㄉㄨㄥ ㄒㄧ˙.'"
          :pinyin="'zai4 fang2 jian1 li3 bie2 chi1 dong1 xi.'"
          :translation="'部屋でものを食べないで下さい。'"
        />
        <br>
        <p>
          ・套房
        </p>
        <SentenceFormat
          :sentence="'租套房貴, 但是比較方便。'"
          :bopomofo="'ㄗㄨ ㄊㄠˋ ㄈㄤˊ ㄍㄨㄟˋ, ㄉㄢˋ ㄕˋ ㄅㄧˇ ㄐㄧㄠˋ ㄈㄤ ㄅㄧㄢˋ.'"
          :pinyin="'zu1 tao4 fang2 gui4, dan4 shi4 bi3 jiao4 fang1 bian4.'"
          :translation="'バストイレ付きの部屋を借りると高いですが、 より便利です。'"
        />
        <br>
        <p>
          ・回去
        </p>
        <SentenceFormat
          :sentence="'天黑之前我想要回去家。'"
          :bopomofo="'ㄊㄧㄢ ㄏㄟ ㄓ ㄑㄧㄢˊ ㄨㄛˇ ㄒㄧㄤˇ ㄧㄠˋ ㄏㄨㄟˊ ㄑㄩˋ ㄐㄧㄚ.'"
          :pinyin="'tian1 hei1 zhi1 qian2 wo3 xiang3 yao4 hui2 qu4 jia1.'"
          :translation="'暗くなる前に帰りたいです。'"
        />
        <br>
        <p>
          ・想
        </p>
        <SentenceFormat
          :sentence="'我想買電風扇, 因為房間裡太熱我滿身大汗。'"
          :bopomofo="'ㄨㄛˇ ㄒㄧㄤˇ ㄇㄞˇ ㄉㄧㄢˋ ㄈㄥ ㄕㄢˋ, ㄧㄣ ㄨㄟˋ ㄈㄤˊ ㄐㄧㄢ ㄌㄧˇ ㄊㄞˋ ㄖㄜˋ ㄨㄛˇ ㄇㄢˇ ㄕㄣ ㄉㄚˋ ㄏㄢˋ.'"
          :pinyin="'wo3 xiang3 mai3 dian4 feng1 shan4, yin1 wei4 fang2 jian1 li3 tai4 re4 wo3 man3 shen1 da4 han4.'"
          :translation="'部屋が暑すぎて汗だくになるので、 扇風機を買いたいです。'"
        />
        <br>
        <p>
          ・再
        </p>
        <SentenceFormat
          :sentence="'我想再次看那部電影。'"
          :bopomofo="'ㄨㄛˇ ㄒㄧㄤˇ ㄗㄞˋ ㄘˋ ㄎㄢˋ ㄋㄚˋ ㄅㄨˋ ㄉㄧㄢˋ ㄧㄥˇ.'"
          :pinyin="'wo3 xiang3 zai4 ci4 kan4 na4 bu4 dian4 ying3.'"
          :translation="'あの映画はもう一度見たいです。'"
        />
        <br>
        <p>
          ・電話
        </p>
        <SentenceFormat
          :sentence="'現代人送電子郵件的機會比打電話的多。'"
          :bopomofo="'ㄒㄧㄢˋ ㄉㄞˋ ㄖㄣˊ ㄙㄨㄥˋ ㄉㄧㄢˋ ㄗˇ ㄧㄡˊ ㄐㄧㄢˋ ㄉㄜ˙ ㄐㄧ ㄏㄨㄟˋ ㄅㄧˇ ㄉㄚˇ ㄉㄧㄢˋ ㄏㄨㄚˋ ㄉㄜ˙ ㄉㄨㄛ.'"
          :pinyin="'xian4 dai4 ren2 song4 dian4 zi3 you2 jian4 de ji1 hui4 bi3 da3 dian4 hua4 de duo1 .'"
          :translation="'現代人は電話よりも電子メールをする機会の方が多いです。'"
        />
        <br>
        <p>
          ・給
        </p>
        <SentenceFormat
          :sentence="'我去旅行, 買了伴手禮給你。'"
          :bopomofo="'ㄨㄛˇ ㄑㄩˋ ㄌㄩˇ ㄒㄧㄥˊ, ㄇㄞˇ ㄌㄜ˙ ㄅㄢˋ ㄕㄡˇ ㄌㄧˇ ㄍㄟˇ ㄋㄧˇ.'"
          :pinyin="'wo3 qu4 lu3 xing2, ma3i le ban4 shou3 li3 gei3 ni3.'"
          :translation="'旅行に行って、 あなたにお土産を買ってきました。'"
        />
        <br>
        <p>
          ・林
        </p>
        <SentenceFormat
          :sentence="'在台灣林是一個一般的姓氏。'"
          :bopomofo="'ㄗㄞˋ ㄊㄞˊ ㄨㄢ ㄌㄧㄣˊ ㄕˋ ㄧˊ ㄍㄜˋ ㄧˋ ㄅㄢ ㄉㄜ˙ ㄒㄧㄥˋ ㄕˋ.'"
          :pinyin="'zai4 tai2 wan1 lin2 shi4 yi1 ge4 yi1 ban1 de xing4 shi4.'"
          :translation="'林は台湾では一般的な姓です。'"
        />
        <br>
        <p>
          ・打電話
        </p>
        <SentenceFormat
          :sentence="'雖然現在已經晚, 我得打電話給他。'"
          :bopomofo="'ㄙㄨㄟ ㄖㄢˊ ㄒㄧㄢˋ ㄗㄞˋ ㄧˇ ㄐㄧㄥ ㄨㄢˇ, ㄨㄛˇ ㄉㄟˇ ㄉㄚˇ ㄉㄧㄢˋ ㄏㄨㄚˋ ㄍㄟˇ ㄊㄚ.'"
          :pinyin="'sui1 ran2 xian4 zai4 yi3 jing1 wan3, wo3 dei3 da3 dian4 hua4 gei3 ta1.'"
          :translation="'もう遅いですが、 彼に電話しなければいけません。'"
        />
        <br>
        <p>
          ・喂
        </p>
        <SentenceFormat
          :sentence="'「喂」是打電話的時候的「是」。'"
          :bopomofo="'ㄨㄟˋ ㄕˋ ㄉㄚˇ ㄉㄧㄢˋ ㄏㄨㄚˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄉㄜ˙ ㄕˋ.'"
          :pinyin="' wei4 shi4 da3 dian4 hua4 de shi2 hou4 de shi4.'"
          :translation="'「喂」は電話をする時の「はい」です。'"
        />
        <br>
        <p>
          ・房租
        </p>
        <SentenceFormat
          :sentence="'我用轉帳付每個月的房租。'"
          :bopomofo="'ㄨㄛˇ ㄩㄥˋ ㄓㄨㄢˇ ㄓㄤˋ ㄈㄨˋ ㄇㄟˇ ㄍㄜˋ ㄩㄝˋ ㄉㄜ˙ ㄈㄤˊ ㄗㄨ.'"
          :pinyin="'wo3 yong4 zhuan3 zhang4 fu4 mei3 ge4 yue4 de fang2 zu1.'"
          :translation="'私は毎月の家賃を振込で支払います。'"
        />
        <br>
        <p>
          ・已經
        </p>
        <SentenceFormat
          :sentence="'他已經洗澡完了， 下一次輪到你。'"
          :bopomofo="'ㄊㄚ ㄧˇ ㄐㄧㄥ ㄒㄧˇ ㄗㄠˇ ㄨㄢˊ ㄌㄜ˙， ㄒㄧㄚˋ ㄧ ㄘˋ ㄌㄨㄣˊ ㄉㄠˋ ㄋㄧˇ.'"
          :pinyin="'ta1 yi3 jing1 xi3 zao3 wan2 le, xia4 yi1 ci4 lun2 dao4 ni3.'"
          :translation="'彼はシャワーを浴び終わったので、次はあなたの番です。'"
        />
        <br>
        <p>
          ・習慣
        </p>
        <SentenceFormat
          :sentence="'這需要時間習慣這個電腦。'"
          :bopomofo="'ㄓㄜˋ ㄒㄩ ㄧㄠˋ ㄕˊ ㄐㄧㄢ ㄒㄧˊ ㄍㄨㄢˋ ㄓㄜˋ ㄍㄜˋ ㄉㄧㄢˋ ㄋㄠˇ.'"
          :pinyin="'zhe4 xu1 yao4 shi2 jian1 xi2 guan4 zhe4 ge4 dian4 nao3.'"
          :translation="'このコンピュータに慣れるには時間がかかります。'"
        />
        <br>
        <p>
          ・問題
        </p>
        <SentenceFormat
          :sentence="'最重要的問題是我們沒有夠的時間。'"
          :bopomofo="'ㄗㄨㄟˋ ㄓㄨㄥˋ ㄧㄠˋ ㄉㄜ˙ ㄨㄣˋ ㄊㄧˊ ㄕˋ ㄨㄛˇ ㄇㄣ˙ ㄇㄟˊ ㄧㄡˇ ㄍㄡˋ ㄉㄜ˙ ㄕˊ ㄧㄢ.'"
          :pinyin="'zui4 zhong4 yao4 de wen4 ti2 shi4 wo3 men mei2 you3 gou4 de shi2 jian1.'"
          :translation="'最も重要な問題は、十分な時間がないことです。'"
        />
        <br>
        <p>
          ・熱水器
        </p>
        <SentenceFormat
          :sentence="'熱水器中的水是否足以熱煮泡麵嗎?'"
          :bopomofo="'ㄖㄜˋ ㄕㄨㄟˇ ㄑㄧˋ ㄓㄨㄥ ㄉㄜ˙ ㄕㄨㄟˇ ㄕˋ ㄈㄡˇ ㄗㄨˊ ㄧˇ ㄖㄜˋ ㄓㄨˇ ㄆㄠ ㄇㄧㄢˋ ㄇㄚ˙?'"
          :pinyin="'re4 shui3 qi4 zhong1 de shui3 shi4 fou3 zu2 yi3 re4 zhu3 pao4 mian4 ma?'"
          :translation="'給湯器のお湯はカップラーメンを作るのに充分熱いですか?'"
        />
        <br>
        <p>
          ・好像
        </p>
        <SentenceFormat
          :sentence="'你的衣服好像昨天她穿的那件。'"
          :bopomofo="'ㄋㄧˇ ㄉㄜ˙ ㄧ ㄈㄨˊ ㄏㄠˇ ㄒㄧㄤˋ ㄗㄨㄛˊ ㄊㄧㄢ ㄊㄚ ㄔㄨㄢ ㄉㄜ˙ ㄋㄚˋ ㄐㄧㄢˋ.'"
          :pinyin="'ni3 de yi1 fu2 hao3 xiang4 zuo2 tian1 ta1 chuan1 de na4 jian4.'"
          :translation="'あなたの服は昨日彼女が着ていた服と同じように見えます。'"
        />
        <br>
        <p>
          ・會
        </p>
        <SentenceFormat
          :sentence="'我們得保持蛋糕， 否則他會全吃掉。'"
          :bopomofo="'ㄨㄛˇ ㄇㄣ˙ ㄉㄜˊ ㄅㄠˇ ㄔˊ ㄉㄢˋ ㄍㄠ， ㄈㄡˇ ㄗㄜˊ ㄊㄚ ㄏㄨㄟˋ ㄑㄩㄢˊ ㄔ ㄉㄧㄠˋ.'"
          :pinyin="'wo3 men dei3 bao3 chi2 dan4 gao1, fou3 ze2 ta1 hui4 quan2 chi1 diao4.'"
          :translation="'ケーキを取っておかないと、 彼が全部食べてしまいます。'"
        />
        <br>
        <p>
          ・等
        </p>
        <SentenceFormat
          :sentence="'我不想要等到那家餐廳開。'"
          :bopomofo="'ㄨㄛˇ ㄅㄨˋ ㄒㄧㄤˇ ㄧㄠˋ ㄉㄥˇ ㄉㄠˋ ㄋㄚˋ ㄐㄧㄚ ㄘㄢ ㄊㄧㄥ ㄎㄞ.'"
          :pinyin="'wo3 bu4 xiang3 yao4 deng3 dao4 na4 jia1 can1 ting1 kai1.'"
          :translation="'そのレストランが開くまで待ちたくないです。'"
        />
        <br>
        <p>
          ・那
        </p>
        <SentenceFormat
          :sentence="'開始下雨了， 那我們去進什麼店吧。'"
          :bopomofo="'ㄎㄞ ㄕˇ ㄒㄧㄚˋ ㄩˇ ㄌㄜ˙， ㄋㄚˋ ㄨㄛˇ ㄇㄣ˙ ㄑㄩˋ ㄐㄧㄣˋ ㄕㄣˊ ㄇㄜ˙ ㄉㄧㄢˋ ㄅㄚ˙.'"
          :pinyin="'kai1 shi3 xia4 yu3 le, na4 wo3 men qu4 jin4 shen2 me dian4 ba.'"
          :translation="'雨が降り始めたので、 どこかお店に入りましょう。'"
        />
        <br>
        <p>
          ・裝
        </p>
        <SentenceFormat
          :sentence="'雖然他要裝新的冷氣, 他的太太說現在的是夠。'"
          :bopomofo="'ㄙㄨㄟ ㄖㄢˊ ㄊㄚ ㄧㄠˋ ㄓㄨㄤ ㄒㄧㄣ ㄉㄜ˙ ㄌㄥˇ ㄑㄧˋ, ㄊㄚ ㄉㄜ˙ ㄊㄞˋ ㄊㄞˋ ㄕㄨㄛ ㄒㄧㄢˋ ㄗㄞˋ ㄉㄜ˙ ㄕˋ ㄍㄡˋ.'"
          :pinyin="'sui1 ran2 ta1 yao4 zhuang1 xin1 de leng3 qi4, ta1 de tai4 tai4 shuo1 xian4 zai4 de shi4 gou4.'"
          :translation="'彼は新しいエアコンを設置したいが、 彼の奥さんは今のもので十分だと言った。'"
        />
        <br>
        <p>
          ・不過
        </p>
        <SentenceFormat
          :sentence="'他不喜歡住吵的地方, 不過不能住離公司太遠的地方。'"
          :bopomofo="'ㄊㄚ ㄅㄨˋ ㄒㄧˇ ㄏㄨㄢ ㄓㄨˋ ㄔㄠˇ ㄉㄜ˙ ㄉㄧˋ ㄈㄤ, ㄅㄨˋ ㄍㄨㄛˋ ㄅㄨˋ ㄋㄥˊ ㄓㄨˋ ㄌㄧˊ ㄍㄨㄥ ㄙ ㄊㄞˋ ㄩㄢˇ ㄉㄜ˙ ㄉㄧˋ ㄈㄤ.'"
          :pinyin="'ta1 bu4 xi3 huan1 zhu4 chao3 de di4 fang1, bu4 guo4 bu4 neng2 zhu4 li4 gong1 si1 tai4 yuan3 de di4 fang1.'"
          :translation="'彼は騒々しい場所に住むのは好きではありませんが、 会社から離れすぎた場所に住むことはできません。'"
        />
        <br>
        <p>
          ・付
        </p>
        <SentenceFormat
          :sentence="'我跟朋友去餐廳的時候, 付錢是各付各的。'"
          :bopomofo="'ㄨㄛˇ ㄍㄣ ㄆㄥˊ ㄧㄡˇ ㄑㄩˋ ㄘㄢ ㄊㄧㄥ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄈㄨˋ ㄑㄧㄢˊ ㄕˋ ㄍㄜˋ ㄈㄨˋ ㄍㄜˋ ㄉㄜ˙.'"
          :pinyin="'wo3 gen1 peng2 you3 qu4 can1 ting1 de shi2 hou4, fu4 qian2 shi4 ge4 fu4 ge4 de.'"
          :translation="'友達とレストランに行くとき、 会計は割り勘です。'"
        />
        <br>
        <p>
          ・收到
        </p>
        <SentenceFormat
          :sentence="'我還沒收到他昨天送的電子郵件。'"
          :bopomofo="'ㄨㄛˇ ㄏㄞˊ ㄇㄛˋ ㄕㄡ ㄉㄠˋ ㄊㄚ ㄗㄨㄛˊ ㄊㄧㄢ ㄙㄨㄥˋ ㄉㄜ˙ ㄉㄧㄢˋ ㄗˇ ㄧㄡˊ ㄐㄧㄢˋ.'"
          :pinyin="'wo3 hai2 mei2 shou1 dao4 ta1 zuo2 tian1 song4 de dian4 zi3 you2 jian4.'"
          :translation="'彼が昨日送ったメールをまだ受け取っていません。'"
        />
        <br>
        <p>
          ・不好意思
        </p>
        <SentenceFormat
          :sentence="'「不好意思」是大部分的日本人第一次學的中文語句之中。'"
          :bopomofo="'ㄅㄨˋ ㄏㄠˇ ㄧˋ ㄙ ㄕˋ ㄉㄚˋ ㄅㄨˋ ㄈㄣˋ ㄉㄜ˙ ㄖˋ ㄅㄣˇ ㄖㄣˊ ㄉㄧˋ ㄧ ㄘˋ ㄒㄩㄝˊ ㄉㄜ˙ ㄓㄨㄥ ㄨㄣˊ ㄩˇ ㄐㄩˋ ㄓ ㄓㄨㄥ.'"
          :pinyin="'bu4 hao3 yi4 si1 shi4 da4 bu4 fen4 de ri4 ben3 ren2 di4 yi1 ci4 xue2 de zhong1 wen2 yu3 ju4 zhi1 zhong1.'"
          :translation="'「すみません」は、 ほとんどの日本人が初めて学ぶ中国語の文章の1つです。'"
        />
        <br>
        <p>
          ・沒關係
        </p>
        <SentenceFormat
          :sentence="'我忘了買牛奶。 沒關係，可以用豆漿代替。'"
          :bopomofo="'ㄨㄛˇ ㄨㄤˋ ㄌㄜ˙ ㄇㄞˇ ㄋㄧㄡˊ ㄋㄞˇ。 ㄇㄟˊㄍㄨㄢ ㄒㄧˋ， ㄎㄜˇ ㄧˇ ㄩㄥˋ ㄉㄡˋ ㄐㄧㄤ ㄉㄞˋ ㄊㄧˋ.'"
          :pinyin="'wo3 wang4 le mai3 niu2 nai3. mei2 guan1 xi4, ke3 yi3 yong4 dou4 jiang1 dai4 ti4.'"
          :translation="'牛乳を買うのを忘れました。 大丈夫です, 豆乳で代用できます。'"
        />
        <br>
        <p>
          ・有線電視
        </p>
        <SentenceFormat
          :sentence="'最近合約有線電視的人少了。'"
          :bopomofo="'ㄗㄨㄟˋ ㄐㄧㄣˋ ㄏㄜˊ ㄩㄝ ㄧㄡˇ ㄒㄧㄢˋ ㄉㄧㄢˋ ㄕˋ ㄉㄜ˙ ㄖㄣˊ ㄕㄠˇ ㄌㄜ˙.'"
          :pinyin="'zui4 jin4 he2 yue1 you3 xian1 dian4 shi4 de ren2 shao3 le.'"
          :translation="'最近ケーブルテレビを契約する人は少なくなっています。'"
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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第11章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第11章で登場する新単語を使った例文や気づいた事など' }
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
