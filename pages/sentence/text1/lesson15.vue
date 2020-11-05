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
          當代中文課程課1・第15章
        </h1>
        <p>
          【新単語+例文】
        </p>
        <p>
          ・醫生
        </p>
        <SentenceFormat
          :sentence="'成為醫生要很多努力。'"
          :bopomofo="'ㄔㄥˊ ㄨㄟˊ ㄧ ㄕㄥ ㄧㄠˋ ㄏㄣˇ ㄉㄨㄛ ㄋㄨˇ ㄌㄧˋ.'"
          :pinyin="'cheng2 wei2 yi3 sheng1 yao4 hen3 duo1 nu3 li4.'"
          :translation="'医者になるには大変な努力が必要です。'"
        />
        <br>
        <p>
          ・一直
        </p>
        <SentenceFormat
          :sentence="'最近我一直在節省伙食費用。'"
          :bopomofo="'ㄗㄨㄟˋ ㄐㄧㄣˋ ㄨㄛˇ ㄧ ㄓˊ ㄗㄞˋ ㄐㄧㄝˊ ㄕㄥˇ ㄏㄨㄛˇ ㄕˊ ㄈㄟˋ ㄩㄥˋ.'"
          :pinyin="'zui4 jin4 wo3 yi1 zhi2 zai4 jie2 sheng3 huo3 shi2 fei4 yong4.'"
          :translation="'最近はずっと食費を節約しています。'"
        />
        <br>
        <p>
          ・流
        </p>
        <SentenceFormat
          :sentence="'從天花板水在流, 我們怎麼辦?'"
          :bopomofo="'ㄘㄨㄥˊ ㄊㄧㄢ ㄏㄨㄚ ㄅㄢˇ ㄕㄨㄟˇ ㄗㄞˋ ㄌㄧㄡˊ, ㄨㄛˇ ㄇㄣ˙ ㄗㄣˇ ㄇㄜ˙ ㄅㄢˋ.'"
          :pinyin="'cong2 tian1 hua1 ban3 shui3 zai4 liu2, wo3 men zen3 me ban4?.'"
          :translation="'天井から水が流れています、 どうしましょう?'"
        />
        <br>
        <p>
          ・鼻水
        </p>
        <SentenceFormat
          :sentence="'因為花粉病，我的鼻水沒有停止。'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄏㄨㄚ ㄈㄣˇ ㄅㄧㄥˋ，ㄨㄛˇ ㄉㄜ˙ ㄅㄧˊ ㄕㄨㄟˇ ㄇㄟˊ ㄧㄡˇ ㄊㄧㄥˊ ㄓˇ.'"
          :pinyin="'yin1 wei4 hua1 fen3 bing4, wo3 de bi2 shui3 mei2 you3 ting2 zhi3.'"
          :translation="'花粉症で、 鼻水が止まらない。'"
        />
        <br>
        <p>
          ・頭
        </p>
        <SentenceFormat
          :sentence="'我很粗心我的頭撞到了柱子。'"
          :bopomofo="'ㄨㄛˇ ㄏㄣˇ ㄘㄨ ㄒㄧㄣ ㄨㄛˇ ㄉㄜ˙ ㄊㄡˊ ㄓㄨㄤˋ ㄉㄠˋ ㄌㄜ˙ ㄓㄨˋ ㄗ˙.'"
          :pinyin="'wo3 hen3 cu1 xin1 wo3 de tou2 zhuang4 dao4 le zhu4 zi3.'"
          :translation="'不注意で、 頭を柱にぶつけてしまいました。'"
        />
        <br>
        <p>
          ・痛
        </p>
        <SentenceFormat
          :sentence="'口內炎很痛，今天我不能說話。'"
          :bopomofo="'ㄎㄡˇ ㄋㄟˋ ㄧㄢˊ ㄏㄣˇ ㄊㄨㄥˋ，ㄐㄧㄣ ㄊㄧㄢ ㄨㄛˇ ㄅㄨˋ ㄋㄥˊ ㄕㄨㄛ ㄏㄨㄚˋ.'"
          :pinyin="'kou3 nei4 yan2 hen3 tong4, jin1 tian1 wo3 bu4 neng2 shuo1 hua4.'"
          :translation="'口内炎がとても痛いので、 今日は喋れません。'"
        />
        <br>
        <p>
          ・胃口
        </p>
        <SentenceFormat
          :sentence="'我沒有胃口，但是我可以吃甜點。'"
          :bopomofo="'ㄨㄛˇ ㄇㄟˊ ㄧㄡˇ ㄨㄟˋ ㄎㄡˇ，ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄎㄜˇ ㄧˇ ㄔ ㄊㄧㄢˊ ㄉㄧㄢˇ.'"
          :pinyin="'wo3 mei2 you3 wei4 kou3, dan4 shi4 wo3 ke3 yi3 chi1 tian2 dian3.'"
          :translation="'食欲はありませんが、 デザートなら食べられます。'"
        />
        <br>
        <p>
          ・差
        </p>
        <SentenceFormat
          :sentence="'我的幹勁對工作太差了。'"
          :bopomofo="'ㄨㄛˇ ㄉㄜ˙ ㄍㄢˋ ㄐㄧㄣˋ ㄉㄨㄟˋ ㄍㄨㄥ ㄗㄨㄛˋ ㄊㄞˋ ㄔㄚ ㄌㄜ˙.'"
          :pinyin="'wo3 de gan4 jin4 dui4 gong1 zuo1 tai4 cha1 le.'"
          :translation="'仕事に対するやる気がありません。'"
        />
        <br>
        <p>
          ・喉嚨
        </p>
        <SentenceFormat
          :sentence="'員工因為喉嚨腫了早回家了。'"
          :bopomofo="'ㄩㄢˊ ㄍㄨㄥ ㄧㄣ ㄨㄟˋ ㄏㄡˊ ㄌㄨㄥˊ ㄓㄨㄥˇ ㄌㄜ˙ ㄗㄠˇ ㄏㄨㄟˊ ㄐㄧㄚ ㄌㄜ˙.'"
          :pinyin="'yuan2 gong1 yin1 wei4 hou2 long2 zhong3 le zao3 hui2 jia1 le.'"
          :translation="'喉が腫れたため、従業員は早退しました。'"
        />
        <br>
        <p>
          ・發炎
        </p>
        <SentenceFormat
          :sentence="'他的胃好像發炎了，看起來很痛。'"
          :bopomofo="'ㄊㄚ ㄉㄜ˙ ㄨㄟˋ ㄏㄠˇ ㄒㄧㄤˋ ㄈㄚ ㄧㄢˊ ㄌㄜ˙，ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄏㄣˇ ㄊㄨㄥˋ.'"
          :pinyin="'ta1 de wei4 hao3 xiang4 fa1 yan2 le,  kan4 qi3 lai2 hen3 tong4.'"
          :translation="'彼の胃は炎症を起こしているようで、とても痛そうです。'"
        />
        <br>
        <p>
          ・生病
        </p>
        <SentenceFormat
          :sentence="'天氣太冷，我覺得快要生病了。'"
          :bopomofo="'ㄊㄧㄢ ㄑㄧˋ ㄊㄞˋ ㄌㄥˇ，ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄎㄨㄞˋ ㄧㄠˋ ㄕㄥ ㄅㄧㄥˋ ㄌㄜ˙.'"
          :pinyin="'tian1 qi4 tai4 leng3, wo3 jue2 de kuai4 yao4 sheng1 bing4 le.'"
          :translation="'寒すぎるので、 病気になりそうです。'"
        />
        <br>
        <p>
          ・發燒
        </p>
        <SentenceFormat
          :sentence="'如果你發燒不能進百貨公司。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄈㄚ ㄕㄠ ㄅㄨˋ ㄋㄥˊ ㄐㄧㄣˋ ㄅㄞˇ ㄏㄨㄛˋ ㄍㄨㄥ ㄙ.'"
          :pinyin="'ru2 guo3 ni3 fa1 shao1 bu4 neng2 jin4 bai3 huo4 gong1 si1.'"
          :translation="'熱があるとデパートには入れません。'"
        />
        <br>
        <p>
          ・感冒
        </p>
        <SentenceFormat
          :sentence="'狗狗不感冒人類的冒。'"
          :bopomofo="'ㄍㄡˇ ㄍㄡˇ ㄅㄨˋ ㄍㄢˇ ㄇㄠˋ ㄖㄣˊ ㄌㄟˋ ㄉㄜ˙ ㄇㄠˋ.'"
          :pinyin="'gou3 gou3 bu4 gan3 mao4 ren2 lei4 de mao4.'"
          :translation="'犬は人間の風邪をひきません。'"
        />
        <br>
        <p>
          ・藥
        </p>
        <SentenceFormat
          :sentence="'為了吃藥, 你要冷水還是熱水?'"
          :bopomofo="'ㄨㄟˋ ㄌㄜ˙ ㄔ ㄧㄠˋ, ㄋㄧˇ ㄧㄠˋ ㄌㄥˇ ㄕㄨㄟˇ ㄏㄞˊ ㄕˋ ㄖㄜˋ ㄕㄨㄟˇ?'"
          :pinyin="'wei4 le chi1 yao4, ni3 yao4 leng3 shui3 hai2 shi4 re4 shui3?'"
          :translation="'薬を飲むのに、 冷たい水とお湯どちらが欲しいですか?'"
        />
        <br>
        <p>
          ・藥局
        </p>
        <SentenceFormat
          :sentence="'我找了藥局很多時間了，但是不能找到。'"
          :bopomofo="'ㄨㄛˇ ㄓㄠˇ ㄌㄜ˙ ㄧㄠˋ ㄐㄩˊ ㄏㄣˇ ㄉㄨㄛ ㄕˊ ㄐㄧㄢ ㄌㄜ˙， ㄉㄢˋ ㄕˋ ㄅㄨˋ ㄋㄥˊ ㄓㄠˇ ㄉㄠˋ.'"
          :pinyin="'wo3 zhao3 le yao4 ju2 hen3 duo1 shi2 jian1 le, dan4 shi4 bu4 neng2 zhao3 dao4.'"
          :translation="'長い時間薬局を探しているのですが、 見つかりません。'"
        />
        <br>
        <p>
          ・拿
        </p>
        <SentenceFormat
          :sentence="'我會去書店拿新的雜誌。'"
          :bopomofo="'ㄨㄛˇ ㄏㄨㄟˋ ㄑㄩˋ ㄕㄨ ㄉㄧㄢˋ ㄋㄚˊ ㄒㄧㄣ ㄉㄜ˙ ㄗㄚˊ ㄓˋ.'"
          :pinyin="'wo3 hui4 qu4 shu1 dian4 na2 xin1 de za2 zhi4.'"
          :translation="'本屋に行って、 新しい雑誌を買います。'"
        />
        <br>
        <p>
          ・把
        </p>
        <SentenceFormat
          :sentence="'如果不看看，他把壽司給我的貓。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄅㄨˊ ㄎㄢˋ ㄎㄢˋ，ㄊㄚ ㄅㄚˇ ㄕㄡˋ ㄙ ㄍㄟˇ ㄨㄛˇ ㄉㄜ˙ ㄇㄠ.'"
          :pinyin="'ru2 guo3 bu2 kan4 kan4, ta1 ba3 shou4 si1 gei3 wo3 de mao1.'"
          :translation="'見ていないと、 彼は寿司を猫にあげてしまいます。'"
        />
        <br>
        <p>
          ・水
        </p>
        <SentenceFormat
          :sentence="'今天天氣會很熱，所以我要給花園澆水。'"
          :bopomofo="'ㄐㄧㄣ ㄊㄧㄢ ㄊㄧㄢ ㄑㄧˋ ㄏㄨㄟˋ ㄏㄣˇ ㄖㄜˋ，ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄧㄠˋ ㄍㄟˇ ㄏㄨㄚ ㄩㄢˊ ㄐㄧㄠ ㄕㄨㄟˇ.'"
          :pinyin="'jin1 tian1 tian1 qi4 hui4 hen3 re4, suo3 yi3 wo3 yao4 gei3 hua1 yuan2 jiao1 shui3.'"
          :translation="'今日は暑くなりそうなので、庭に水を撒こうと思います。'"
        />
        <br>
        <p>
          ・休息
        </p>
        <SentenceFormat
          :sentence="'他想休息，但是他的狗在不停跑步。'"
          :bopomofo="'ㄊㄚ ㄒㄧㄤˇ ㄒㄧㄡ ㄒㄧ， ㄉㄢˋ ㄕˋ ㄊㄚ ㄉㄜ˙ ㄍㄡˇ ㄗㄞˋ ㄅㄨˋ ㄊㄧㄥˊ ㄆㄠˇ ㄅㄨˋ.'"
          :pinyin="'ta1 xiang3 xiu1 xi1, dan4 shi4 ta1 de gou3 zai4 bu4 ting2 pao3 bu4.'"
          :translation="'彼は休みたいのだけど、 彼の犬は走り続けています。'"
        />
        <br>
        <p>
          ・睡覺
        </p>
        <SentenceFormat
          :sentence="'我今天睡覺了太長，脖子很痛。'"
          :bopomofo="'ㄨㄛˇ ㄐㄧㄣ ㄊㄧㄢ ㄕㄨㄟˋ ㄐㄧㄠˋ ㄌㄜ˙ ㄊㄞˋ ㄔㄤˊ，ㄅㄛˊ ㄗ˙ ㄏㄣˇ ㄊㄨㄥˋ.'"
          :pinyin="'wo3 jin1 tian1 shui4 jiao4 le tai4 chang2, bo2 zi3 hen3 tong4.'"
          :translation="'今日は寝すぎたので、 首が痛いです。'"
        />
        <br>
        <p>
          ・早一點
        </p>
        <SentenceFormat
          :sentence="'如果可以的話，我想早一點起床。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄎㄜˇ ㄧˇ ㄉㄜ˙ ㄏㄨㄚˋ，ㄨㄛˇ ㄒㄧㄤˇ ㄗㄠˇ ㄧˋ ㄉㄧㄢˇ ㄑㄧˇ ㄔㄨㄤˊ.'"
          :pinyin="'ru2 guo3 ke3 yi3 de hua4, wo3 xiang3 zao3 yi1 dian3 qi3 chuang2.'"
          :translation="'できれば、 もう少し早く起きたいです。'"
        />
        <br>
        <p>
          ・臉色
        </p>
        <SentenceFormat
          :sentence="'他發現著錢包丟了，他的臉色變藍。'"
          :bopomofo="'ㄊㄚ ㄈㄚ ㄒㄧㄢˋ ㄓㄜ˙ ㄑㄧㄢˊ ㄅㄠ ㄉㄧㄡ ㄌㄜ˙， ㄊㄚ ㄉㄜ˙ ㄌㄧㄢˇ ㄙㄜˋ ㄅㄧㄢˋ ㄌㄢˊ.'"
          :pinyin="'ta1 fa1 xian4 zhe qian2 bao1 diu1 le, ta1 de lian3 se4 bian4 lan2.'"
          :translation="'財布を紛失したことに気づいて、 彼の顔は青くなりました。'"
        />
        <br>
        <p>
          ・難看
        </p>
        <SentenceFormat
          :sentence="'他一定受傷了，現在走的樣子很難看。'"
          :bopomofo="'ㄊㄚ ㄧˊ ㄉㄧㄥˋ ㄕㄡˋ ㄕㄤ ㄌㄜ˙， ㄒㄧㄢˋ ㄗㄞˋ ㄗㄡˇ ㄉㄜ˙ ㄧㄤˋ ㄗ˙ ㄏㄣˇ ㄋㄢˊ ㄎㄢˋ.'"
          :pinyin="'ta1 yi1 ding4 shou4 shang1 le, xian4 zai4 zou3 de yang4 zi3 hen3 nan2 kan4.'"
          :translation="'彼は怪我をした違いない、 歩く様子はとても調子が悪そうです。'"
        />
        <br>
        <p>
          ・肚子
        </p>
        <SentenceFormat
          :sentence="'肚子餓了，你有什麼容易吃的東西?'"
          :bopomofo="'ㄉㄨˇ ㄗ˙ ㄜˋ ㄌㄜ˙， ㄋㄧˇ ㄧㄡˇ ㄕㄣˊ ㄇㄜ˙ ㄖㄨㄥˊ ㄧˋ ㄔ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙?'"
          :pinyin="'du4 zi3 e4 le, ni3 you3 shen2 me rong2 yi4 chi1 de dong1 xi?'"
          :translation="'お腹がすいたのですが、 何か簡単に食べられるものはありますか?'"
        />
        <br>
        <p>
          ・吐
        </p>
        <SentenceFormat
          :sentence="'我的貓吐食物以後，總是吃一些草。'"
          :bopomofo="'ㄨㄛˇ ㄉㄜ˙ ㄇㄠ ㄊㄨˇ ㄕˊ ㄨˋ ㄧˇ ㄏㄡˋ， ㄗㄨㄥˇ ㄕˋ ㄔ ㄧ ㄒㄧㄝ ㄘㄠˇ.'"
          :pinyin="'wo3 de mao1 tu3 shi2 wu4 yi3 hou4, zong3 shi4 chi1 yi1 xie1 cao3.'"
          :translation="'私の猫は食べ物を吐いたあと、 いつも草を食べます。'"
        />
        <br>
        <p>
          ・幾
        </p>
        <SentenceFormat
          :sentence="'在家沒有洋蔥，我們買幾個吧。'"
          :bopomofo="'ㄗㄞˋ ㄐㄧㄚ ㄇㄟˊ ㄧㄡˇ ㄧㄤˊ ㄘㄨㄥ，ㄨㄛˇ ㄇㄣ˙ ㄇㄞˇ ㄐㄧˇ ㄍㄜˋ ㄅㄚ˙ .'"
          :pinyin="'zai4 jia1 mei2 you3 yang2 cong1, wo3 men mai3 ji3 ge4 ba.'"
          :translation="'家に玉ねぎが無いので、 いくつか買いましょう。'"
        />
        <br>
        <p>
          ・次
        </p>
        <SentenceFormat
          :sentence="'合格這個考試，你因該參加兩，三次。'"
          :bopomofo="'ㄏㄜˊ ㄍㄜˊ ㄓㄜˋ ㄍㄜˋ ㄎㄠˇ ㄕˋ，ㄋㄧˇ ㄧㄣ ㄍㄞ ㄘㄢ ㄐㄧㄚ ㄌㄧㄤˇ，ㄙㄢ ㄘˋ.'"
          :pinyin="'he2 ge2 zhe4 ge4 kao3 shi4, ni3 yin1 gai1 can1 jia1 liang3, san1 ci4.'"
          :translation="'この試験に合格するには、2、3回は受験する必要があります。'"
        />
        <br>
        <p>
          ・陪
        </p>
        <SentenceFormat
          :sentence="'我陪我的寵物去散步。'"
          :bopomofo="'ㄨㄛˇ ㄆㄟˊ ㄨㄛˇ ㄉㄜ˙ ㄔㄨㄥˇ ㄨˋ ㄑㄩˋ ㄙㄢˋ ㄅㄨˋ.'"
          :pinyin="'wo3 pei2 wo3 de chong3 wu4 qu4 san4 bu4.'"
          :translation="'ペットと散歩に行きます。'"
        />
        <br>
        <p>
          ・看病
        </p>
        <SentenceFormat
          :sentence="'你看起來很不舒服，我會陪你去看病。'"
          :bopomofo="'ㄋㄧˇ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄏㄣˇ ㄅㄨˋ ㄕㄨ ㄈㄨ˙， ㄨㄛˇ ㄏㄨㄟˋ ㄆㄟˊ ㄋㄧˇ ㄑㄩˋ ㄎㄢˋ ㄅㄧㄥˋ.'"
          :pinyin="'ni3 kan4 qi3 lai2 hen3 bu4 shu1 fu2, wo3 hui4 pei2 ni3 qu4 kan4 bing4.'"
          :translation="'とても具合が悪そうなので、 私はあなたを病院に連れて行きます。'"
        />
        <br>
        <p>
          ・健康
        </p>
        <SentenceFormat
          :sentence="'為了健康每個人的生活方式不一樣。'"
          :bopomofo="'ㄨㄟˋ ㄌㄜ˙ ㄐㄧㄢˋ ㄎㄤ ㄇㄟˇ ㄍㄜ˙ ㄖㄣˊ ㄉㄜ˙ ㄕㄥ ㄏㄨㄛˊ ㄈㄤ ㄕˋ ㄅㄨˋ ㄧˊ ㄧㄤˋ.'"
          :pinyin="'wei4 le jian4 kang1 mei3 ge4 ren2 de sheng1 huo2 fang1 shi4 bu4 yi2 yang4.'"
          :translation="'健康のためのライフスタイルは人それぞれです。'"
        />
        <br>
        <p>
          ・保險
        </p>
        <SentenceFormat
          :sentence="'為了緊急的時，你因該加入保險。'"
          :bopomofo="'ㄨㄟˋ ㄌㄜ˙ ㄐㄧㄣˇ ㄐㄧˊ ㄉㄜ˙ ㄕˊ， ㄋㄧˇ ㄧㄣ ㄍㄞ ㄐㄧㄚ ㄖㄨˋ ㄅㄠˇ ㄒㄧㄢˇ.'"
          :pinyin="'wei4 le jin3 ji2 de shi2, ni3 yin1 gai1 jia1 ru4 bao3 xian3.'"
          :translation="'緊急時のため、 保険には加入しておいた方がいいです。'"
        />
        <br>
        <p>
          ・跟
        </p>
        <SentenceFormat
          :sentence="'今天我看過他跟一個女人講話。'"
          :bopomofo="'ㄐㄧㄣ ㄊㄧㄢ ㄨㄛˇ ㄎㄢˋ ㄍㄨㄛˋ ㄊㄚ ㄍㄣ ㄧˊ ㄍㄜˋ ㄋㄩˇ ㄖㄣˊ ㄐㄧㄤˇ ㄏㄨㄚˋ.'"
          :pinyin="'jin1 tian1 wo3 kan4 guo4 ta1 gen1 yi1 ge4 nu3 ren2 jiang3 hua4.'"
          :translation="'今日、彼が女性と話しているのを見ました。'"
        />
        <br>
        <p>
          ・油
        </p>
        <SentenceFormat
          :sentence="'油很多的拉麵好吃，如果吃太多肚子變不舒服。'"
          :bopomofo="'ㄧㄡˊ ㄏㄣˇ ㄉㄨㄛ ㄉㄜ˙ ㄌㄚ ㄇㄧㄢˋ ㄏㄠˇ ㄔ，ㄖㄨˊ ㄍㄨㄛˇ ㄔ ㄊㄞˋ ㄉㄨㄛ ㄉㄨˇ ㄗ˙ ㄅㄧㄢˋ ㄅㄨˋ ㄕㄨ ㄈㄨ˙.'"
          :pinyin="'you2 hen3 duo1 de la1 mian4 hao3 chi1, ru2 guo3 chi1 tai4 duo1 du4 zi3 bian4 bu4 shu1 fu2.'"
          :translation="'油たっぷりのラーメンは美味しいですが、 食べすぎるとお腹の調子が悪くなります。'"
        />
        <br>
        <p>
          ・冰
        </p>
        <SentenceFormat
          :sentence="'摸冰的東西太久，你的手會沒有感覺。'"
          :bopomofo="'ㄇㄛ ㄅㄧㄥ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ ㄊㄞˋ ㄐㄧㄡˇ，ㄋㄧˇ ㄉㄜ˙ ㄕㄡˇ ㄏㄨㄟˋ ㄇㄟˊ ㄧㄡˇ ㄍㄢˇ ㄐㄩㄝˊ.'"
          :pinyin="'.mo1 bing1 de dong1 xi1 tai4 jiu3, ni3 de shou3 hui4 mei2 you3 gan3 jue2'"
          :translation="'冷たいものに長時間触れていると、 手の感覚がなくなります。'"
        />
        <br>
        <p>
          ・別
        </p>
        <SentenceFormat
          :sentence="'別擔心，我能自己整理瀏海。'"
          :bopomofo="'ㄅㄧㄝˊ ㄉㄢ ㄒㄧㄣ，ㄨㄛˇ ㄋㄥˊ ㄗˋ ㄐㄧˇ ㄓㄥˇ ㄌㄧˇ ㄌㄧㄡˊ ㄏㄞˇ.'"
          :pinyin="'bie2 dan1 xin1, wo3 neng2 zi4 ji3 zheng3 li3 liu2 hai3.'"
          :translation="'心配しないで下さい、 前髪は自分で切れます。'"
        />
        <br>
        <p>
          ・關心
        </p>
        <SentenceFormat
          :sentence="'阿媽關心那個孩子，每天跟他聊天。'"
          :bopomofo="'ㄚ ㄇㄚ ㄍㄨㄢ ㄒㄧㄣ ㄋㄚˋ ㄍㄜˋ ㄏㄞˊ ㄗ˙， ㄇㄟˇ ㄊㄧㄢ ㄍㄣ ㄊㄚ ㄌㄧㄠˊ ㄊㄧㄢ.'"
          :pinyin="'a1 ma1 guan1 xin1 na4 ge4 hai2 zi3, mei3 tian1 gen1 ta1 liao2 tian1.'"
          :translation="'おばあちゃんはその子供を気遣って、 毎日お喋りをします。'"
        />
        <br>
        <p>
          ・包
        </p>
        <SentenceFormat
          :sentence="'我為了健康每天吃一包維他命。'"
          :bopomofo="'ㄨㄛˇ ㄨㄟˋ ㄌㄜ˙ ㄐㄧㄢˋ ㄎㄤ ㄇㄟˇ ㄊㄧㄢ ㄔ ㄧ ㄅㄠ ㄨㄟˊ ㄊㄚ ㄇㄧㄥˋ.'"
          :pinyin="'wo3 wei4 le jian4 kang1 mei3 tian1 chi1 yi1 bao1 wei2 ta1 ming4.'"
          :translation="'健康のために、 毎日1パックのビタミン剤を飲みます。'"
        />
        <br>
        <p>
          ・睡
        </p>
        <SentenceFormat
          :sentence="'如果他已經睡，別叫醒他。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄊㄚ ㄧˇ ㄐㄧㄥ ㄕㄨㄟˋ， ㄅㄧㄝˊ ㄐㄧㄠˋ ㄒㄧㄥˇ ㄊㄚ.'"
          :pinyin="'ru2 guo3 ta1 yi3 jing1 shui4,  bie2 jiao4 xing3 ta1.'"
          :translation="'彼がもう寝ているなら、 起こさないで下さい。'"
        />
        <br>
        <p>
          ・小時
        </p>
        <SentenceFormat
          :sentence="'我想要幾個小時的學習時間。'"
          :bopomofo="'ㄨㄛˇ ㄒㄧㄤˇ ㄧㄠˋ ㄐㄧˇ ㄍㄜˋ ㄒㄧㄠˇ ㄕˊ ㄉㄜ˙ ㄒㄩㄝˊ ㄒㄧˊ ㄕˊ ㄐㄧㄢ.'"
          :pinyin="'wo3 xiang3 yao4 ji3 ge4 xiao3 shi2 de xue2 xi2 shi2 jian1.'"
          :translation="'数時間の勉強する時間が欲しいです。'"
        />
        <br>
        <p>
          ・怎麼了
        </p>
        <SentenceFormat
          :sentence="'怎麼了? 你看起來不太開心。'"
          :bopomofo="'ㄗㄣˇ ㄇㄜ˙ ㄌㄜ˙? ㄋㄧˇ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄅㄨˋ ㄊㄞˋ ㄎㄞ ㄒㄧㄣ.'"
          :pinyin="'zen3 me le? ni3 kan4 qi3 lai2 bu2 tai4 kai1 xin1.'"
          :translation="'どうしたんですか? あまり楽しくなさそうに見えます。'"
        />
        <br>
        <p>
          ・不用了
        </p>
        <SentenceFormat
          :sentence="'你必須跟經理直接說法? -不用了。'"
          :bopomofo="'ㄋㄧˇ ㄅㄧˋ ㄒㄩ ㄍㄣ ㄐㄧㄥ ㄌㄧˇ ㄓˊ ㄐㄧㄝ ㄕㄨㄛ ㄈㄚˇ? -ㄅㄨˊ  ㄩㄥˋ ㄌㄜ˙.'"
          :pinyin="'ni3 bi4 xu1 gen1 jing1 li3 zhi2 jie1 shuo1 fa3? -bu2 yong4 le.'"
          :translation="'あなたはマネージャーと直接話す必要がありますか? -大丈夫です。'"
        />
        <br>
        <p>
          ・健康中心
        </p>
        <SentenceFormat
          :sentence="'一年一次我去健康中心檢查。'"
          :bopomofo="'ㄧ ㄋㄧㄢˊ ㄧ ㄘˋ ㄨㄛˇ ㄑㄩˋ ㄐㄧㄢˋ ㄎㄤ ㄓㄨㄥ ㄒㄧㄣ ㄐㄧㄢˇ ㄔㄚˊ.'"
          :pinyin="'yi1 nian2 yi1 ci4 wo3 qu4 jian4 kang1 zhong1 xin1 jian3 cha2.'"
          :translation="'一年に一回ヘルスセンターに検査に行きます。'"
        />
        <br>
        <p>
          ・回家
        </p>
        <SentenceFormat
          :sentence="'我有很多得完的工作，我不知道什麼時候我能回家。'"
          :bopomofo="'ㄨㄛˇ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄉㄜ˙ ㄨㄢˊ ㄉㄜ˙ ㄍㄨㄥ ㄗㄨㄛˋ，ㄅㄨˋ ㄓ ㄉㄠˋ ㄕㄣˊ ㄇㄜ˙ ㄕˊ ㄏㄡˋ ㄨㄛˇ ㄋㄥˊ ㄏㄨㄟˊ ㄐㄧㄚ.'"
          :pinyin="'wo3 you3 hen3 duo1 dei3 wan2 de gong1 zuo4, bu4 zhi1 dao4 shen2 me shi2 hou4 wo3 neng2 hui2 jia1.'"
          :translation="'終わらせなければいけない仕事がたくさんあるので、 いつ帰れるか分かりません。'"
        />
        <br>
        <p>
          ・最好
        </p>
        <SentenceFormat
          :sentence="'他還在生氣，最好不要說話。'"
          :bopomofo="'ㄊㄚ ㄏㄞˊ ㄗㄞˋ ㄕㄥ ㄑㄧˋ， ㄗㄨㄟˋ ㄏㄠˇ ㄅㄨˊ ㄧㄠˋ ㄕㄨㄛ ㄏㄨㄚˋ.'"
          :pinyin="'ta1 hai2 zai4 sheng1 qi4, zui4 hao3 bu2 yao4 shuo1 hua4.'"
          :translation="'彼はまだ怒っているので、 話しかけない方がよいです。'"
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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第15章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第15章で登場する新単語を使った例文や気づいた事など' }
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
