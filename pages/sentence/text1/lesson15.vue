<template>
  <section>
    <Header
      :name="'sentence'"
    />
    <GoogleAds />
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
          :sentence="'水從天花板流下來, 我們怎麼辦??'"
          :bopomofo="'ㄕㄨㄟˇ ㄘㄨㄥˊ ㄊㄧㄢ ㄏㄨㄚ ㄅㄢˇ ㄌㄧㄡˊ ㄒㄧㄚˋ ㄌㄞˊ, ㄨㄛˇ ㄇㄣ˙ ㄗㄣˇ ㄇㄜ˙ ㄅㄢˋ.'"
          :pinyin="'shui3 cong2 tian1 hua1 ban3 liu2 xia4 lai2, wo3 men zen3 me ban4?.'"
          :translation="'天井から水が流れています、 どうしましょう?'"
        />
        <br>
        <p>
          ・鼻水
        </p>
        <SentenceFormat
          :sentence="'因為花粉症，我的鼻水停不下來。'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄏㄨㄚ ㄈㄣˇ ㄓㄥˋ，ㄨㄛˇ ㄉㄜ˙ ㄅㄧˊ ㄕㄨㄟˇ ㄊㄧㄥˊ ㄅㄨˊ ㄒㄧㄚˋ ㄌㄞˊ.'"
          :pinyin="'yin1 wei4 hua1 fen3 zheng4, wo3 de bi2 shui3 ting2 bu2 xia4 lai2.'"
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
          :sentence="'他對工作的態度很差。'"
          :bopomofo="'ㄊㄚ ㄉㄨㄟˋ ㄍㄨㄥ ㄗㄨㄛˋ ㄉㄜ˙ ㄊㄞˋ ㄉㄨˋ ㄏㄣˇ ㄔㄚˋ.'"
          :pinyin="'ta1 dui4 gong1 zuo4 de tai4 du4 hen3 cha1.'"
          :translation="'彼の仕事に対する態度はひどいです。'"
        />
        <br>
        <p>
          ・喉嚨
        </p>
        <SentenceFormat
          :sentence="'員工因為喉嚨腫起來了早一點回家了。'"
          :bopomofo="'ㄩㄢˊ ㄍㄨㄥ ㄧㄣ ㄨㄟˋ ㄏㄡˊ ㄌㄨㄥˊ ㄓㄨㄥˇ ㄑㄧˇ ㄌㄞˊ ㄌㄜ˙ ㄗㄠˇ ㄧˋ ㄉㄧㄢˇ ㄏㄨㄟˊ ㄐㄧㄚ ㄌㄜ˙.'"
          :pinyin="'yuan2 gong1 yin1 wei4 hou2 long2 zhong3 qi3 lai2 le zao3 yi1 dian3 hui2 jia1 le.'"
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
          :sentence="'如果你發燒了, 就不能進百貨公司。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄈㄚ ㄕㄠ ㄌㄜ˙,  ㄐㄧㄡˋ ㄅㄨˋ ㄋㄥˊ ㄐㄧㄣˋ ㄅㄞˇ ㄏㄨㄛˋ ㄍㄨㄥ ㄙ.'"
          :pinyin="'ru2 guo3 ni3 fa1 shao1 le, jiu4 bu4 neng2 jin4 bai3 huo4 gong1 si1.'"
          :translation="'熱があるとデパートには入れません。'"
        />
        <br>
        <p>
          ・感冒
        </p>
        <SentenceFormat
          :sentence="'狗狗不會感冒。'"
          :bopomofo="'ㄍㄡˇ ㄍㄡˇ ㄅㄨˊ ㄏㄨㄟˋ ㄍㄢˇ ㄇㄠˋ.'"
          :pinyin="'gou3 gou3 bu2 hui4 gan3 mao4.'"
          :translation="'犬は風邪をひきません。'"
          :memo="'※「感冒」には動詞と名詞があり、 例文は動詞。 ' +
            '名詞の例として、「狗狗不會得人的感冒(ㄍㄡˇ ㄍㄡˇ ㄅㄨˊ ㄏㄨㄟˋ ㄉㄜˊ ㄖㄣˊ ㄉㄜ˙ ㄍㄢˇ ㄇㄠˋ/' +
            'gou3 gou3 bu2 hui4 de2 ren2 de gan3 mao4)」 = 「犬は人間の風邪をひきません」 '"
        />
        <br>
        <p>
          ・藥
        </p>
        <SentenceFormat
          :sentence="'你要用冷水還是熱水吃藥?'"
          :bopomofo="'ㄋㄧˇ ㄧㄠˋ ㄩㄥˋ ㄌㄥˇ ㄕㄨㄟˇ ㄏㄞˊ ㄕˋ ㄖㄜˋ ㄕㄨㄟˇ ㄔ ㄧㄠˋ?'"
          :pinyin="'ni3 yao4 yong4 leng3 shui3 hai2 shi4 re4 shui3 chi1 yao4?'"
          :translation="'薬を飲むのに、 冷たい水とお湯どちらが欲しいですか?'"
        />
        <br>
        <p>
          ・藥局
        </p>
        <SentenceFormat
          :sentence="'我找藥局找了很久，但是找不到。'"
          :bopomofo="'ㄨㄛˇ ㄓㄠˇ ㄧㄠˋ ㄐㄩˊ ㄓㄠˇ ㄌㄜ˙ ㄏㄣˇ ㄐㄧㄡˇ，ㄉㄢˋ ㄕˋ ㄓㄠˇ ㄅㄨ˙ ㄉㄠˋ.'"
          :pinyin="'wo3 zhao3 yao4 ju2 zhao3 le hen3 jiu3, dan4 shi4 zhao3 bu2 dao4.'"
          :translation="'長い時間薬局を探したのですが、 見つかりません。'"
        />
        <br>
        <p>
          ・拿
        </p>
        <SentenceFormat
          :sentence="'我會去朋友家拿新的雜誌。'"
          :bopomofo="'ㄨㄛˇ ㄏㄨㄟˋ ㄑㄩˋ ㄆㄥˊ ㄧㄡˇ ㄐㄧㄚ ㄋㄚˊ ㄒㄧㄣ ㄉㄜ˙ ㄗㄚˊ ㄓˋ.'"
          :pinyin="'wo3 hui4 qu4 peng2 you3 jia1 na2 xin1 de za2 zhi4.'"
          :translation="'友達の家に行って、 新しい雑誌を手に入れます。'"
        />
        <br>
        <p>
          ・把
        </p>
        <SentenceFormat
          :sentence="'如果你不看他，他把壽司給貓。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄅㄨˊ ㄎㄢˋ ㄊㄚ，ㄊㄚ ㄅㄚˇ ㄕㄡˋ ㄙ ㄍㄟˇ ㄇㄠ.'"
          :pinyin="'ru2 guo3 ni3 bu2 kan4 ta1, ta1 ba3 shou4 si1 gei3 mao1.'"
          :translation="'見ていないと、 彼は寿司を猫にあげてしまいます。'"
        />
        <br>
        <p>
          ・水
        </p>
        <SentenceFormat
          :sentence="'今天天氣會很熱，所以我要去院子灑水。'"
          :bopomofo="'ㄐㄧㄣ ㄊㄧㄢ ㄊㄧㄢ ㄑㄧˋ ㄏㄨㄟˋ ㄏㄣˇ ㄖㄜˋ，ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄧㄠˋ ㄑㄩˋ ㄩㄢˋ ㄗ˙ ㄙㄚˇ ㄕㄨㄟˇ.'"
          :pinyin="'jin1 tian1 tian1 qi4 hui4 hen3 re4, suo3 yi3 wo3 yao4 qu4 yuan4 zi3 sa3 shui3.'"
          :translation="'今日は暑くなりそうなので、庭に水を撒こうと思います。'"
        />
        <br>
        <p>
          ・休息
        </p>
        <SentenceFormat
          :sentence="'他想休息，但是他的狗繼續跑。'"
          :bopomofo="'ㄊㄚ ㄒㄧㄤˇ ㄒㄧㄡ ㄒㄧˊ， ㄉㄢˋ ㄕˋ ㄊㄚ ㄉㄜ˙ ㄍㄡˇ ㄐㄧˋ ㄒㄩˋ ㄆㄠˇ.'"
          :pinyin="'ta1 xiang3 xiu1 xi2, dan4 shi4 ta1 de gou3 ji4 xu4 pao3.'"
          :translation="'彼は休みたいのだけど、 彼の犬は走り続けています。'"
        />
        <br>
        <p>
          ・睡覺
        </p>
        <SentenceFormat
          :sentence="'我今天睡了十個小時覺，脖子很痛。'"
          :bopomofo="'ㄨㄛˇ ㄐㄧㄣ ㄊㄧㄢ ㄕㄨㄟˋ ㄌㄜ˙ ㄕˊ ㄍㄜˋ ㄒㄧㄠˇ ㄕˊ ㄐㄧㄠˋ，ㄅㄛˊ ㄗ˙ ㄏㄣˇ ㄊㄨㄥˋ.'"
          :pinyin="'wo3 jin1 tian1 shui4 le shi2 ge4 xiao3 shi2 jiao4, bo2 zi3 hen3 tong4.'"
          :translation="'今日は10時間も寝たので、 首が痛いです。'"
        />
        <br>
        <p>
          ・早一點
        </p>
        <SentenceFormat
          :sentence="'如果可以，我想早一點起床。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄎㄜˇ ㄧˇ，ㄨㄛˇ ㄒㄧㄤˇ ㄗㄠˇ ㄧˋ ㄉㄧㄢˇ ㄑㄧˇ ㄔㄨㄤˊ.'"
          :pinyin="'ru2 guo3 ke3 yi3, wo3 xiang3 zao3 yi1 dian3 qi3 chuang2.'"
          :translation="'できれば、 もう少し早く起きたいです。'"
        />
        <br>
        <p>
          ・臉色
        </p>
        <SentenceFormat
          :sentence="'他發現錢包丟了，他的臉色變綠了。'"
          :bopomofo="'ㄊㄚ ㄈㄚ ㄒㄧㄢˋ ㄑㄧㄢˊ ㄅㄠ ㄉㄧㄡ ㄌㄜ˙， ㄊㄚ ㄉㄜ˙ ㄌㄧㄢˇ ㄙㄜˋ ㄅㄧㄢˋ ㄌㄩˋ ㄌㄜ˙.'"
          :pinyin="'ta1 fa1 xian4 qian2 bao1 diu1 le, ta1 de lian3 se4 bian4 lu4 le.'"
          :translation="'財布を紛失したことに気づいて、 彼の顔は青くなりました。'"
          :memo="'※「顔が青くなる」は、中国語では「緑」の方がよく使う。 (「青」でも可)'"
        />
        <br>
        <p>
          ・難看
        </p>
        <SentenceFormat
          :sentence="'他一定受傷了，現在走路的樣子很難看。'"
          :bopomofo="'ㄊㄚ ㄧˊ ㄉㄧㄥˋ ㄕㄡˋ ㄕㄤ ㄌㄜ˙， ㄒㄧㄢˋ ㄗㄞˋ ㄗㄡˇ ㄌㄨˋ ㄉㄜ˙ ㄧㄤˋ ㄗ˙ ㄏㄣˇ ㄋㄢˊ ㄎㄢˋ.'"
          :pinyin="'ta1 yi1 ding4 shou4 shang1 le, xian4 zai4 zou3 lu4 de yang4 zi3 hen3 nan2 kan4.'"
          :translation="'彼は怪我をした違いない、 歩く様子はとても調子が悪そうです。'"
        />
        <br>
        <p>
          ・肚子
        </p>
        <SentenceFormat
          :sentence="'肚子餓了，你有什麼容易吃的東西嗎?'"
          :bopomofo="'ㄉㄨˋ ㄗ˙ ㄜˋ ㄌㄜ˙， ㄋㄧˇ ㄧㄡˇ ㄕㄣˊ ㄇㄜ˙ ㄖㄨㄥˊ ㄧˋ ㄔ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙ ㄇㄚ˙?'"
          :pinyin="'du4 zi3 e4 le, ni3 you3 shen2 me rong2 yi4 chi1 de dong1 xi ma?'"
          :translation="'お腹がすいたのですが、 何か簡単に食べられるものはありますか?'"
        />
        <br>
        <p>
          ・吐
        </p>
        <SentenceFormat
          :sentence="'我的貓吐了食物以後，總是吃一些草。'"
          :bopomofo="'ㄨㄛˇ ㄉㄜ˙ ㄇㄠ ㄊㄨˋ ㄌㄜ˙ ㄕˊ ㄨˋ ㄧˇ ㄏㄡˋ， ㄗㄨㄥˇ ㄕˋ ㄔ ㄧ ㄒㄧㄝ ㄘㄠˇ.'"
          :pinyin="'wo3 de mao1 tu4 le shi2 wu4 yi3 hou4, zong3 shi4 chi1 yi1 xie1 cao3.'"
          :translation="'私の猫は食べ物を吐いたあと、 いつも草を食べます。'"
        />
        <br>
        <p>
          ・幾
        </p>
        <SentenceFormat
          :sentence="'家裡沒有洋蔥了，我們買幾個吧。'"
          :bopomofo="'ㄐㄧㄚ ㄌㄧˇ ㄇㄟˊ ㄧㄡˇ ㄧㄤˊ ㄘㄨㄥ ㄌㄜ˙，ㄨㄛˇ ㄇㄣ˙ ㄇㄞˇ ㄐㄧˇ ㄍㄜˋ ㄅㄚ˙ .'"
          :pinyin="'jia1 li3 mei2 you3 yang2 cong1 le, wo3 men mai3 ji3 ge4 ba.'"
          :translation="'家の玉ねぎが無くなったので、 いくつか買いましょう。'"
        />
        <br>
        <p>
          ・次
        </p>
        <SentenceFormat
          :sentence="'要通過這個考試，得參加兩，三次。'"
          :bopomofo="'ㄧㄠˋ ㄊㄨㄥ ㄍㄨㄛˋ ㄓㄜˋ ㄍㄜˋ ㄎㄠˇ ㄕˋ，ㄉㄟˇ ㄘㄢ ㄐㄧㄚ ㄌㄧㄤˇ，ㄙㄢ ㄘˋ.'"
          :pinyin="'yao4 tong1 guo4 zhe4 ge4 kao3 shi4, dei3 can1 jia1 liang3, san1 ci4.'"
          :translation="'この試験を通過するには、 2、3回受験する必要があります。'"
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
          :sentence="'為了緊急的時候，你因該有保險。'"
          :bopomofo="'ㄨㄟˋ ㄌㄜ˙ ㄐㄧㄣˇ ㄐㄧˊ ㄉㄜ˙ ㄕˊ ㄏㄡˋ，ㄋㄧˇ ㄧㄣ ㄍㄞ ㄧㄡˇ ㄅㄠˇ ㄒㄧㄢˇ.'"
          :pinyin="'wei4 le jin3 ji2 de shi2 hou4, ni3 yin1 gai1 you3 bao3 xian3.'"
          :translation="'緊急時のため、 保険には入っておいた方がいいです。'"
          :memo="'※「保険に加入する」という意味の、 「投保(ㄊㄡˊ ㄅㄠˇ/tou2 bao3)」という単語もある。'"
        />
        <br>
        <p>
          ・跟
        </p>
        <SentenceFormat
          :sentence="'今天我看到他跟一個女人講話。'"
          :bopomofo="'ㄐㄧㄣ ㄊㄧㄢ ㄨㄛˇ ㄎㄢˋ ㄉㄠˋ ㄊㄚ ㄍㄣ ㄧˊ ㄍㄜˋ ㄋㄩˇ ㄖㄣˊ ㄐㄧㄤˇ ㄏㄨㄚˋ.'"
          :pinyin="'jin1 tian1 wo3 kan4 dao4 ta1 gen1 yi1 ge4 nu3 ren2 jiang3 hua4.'"
          :translation="'今日、彼が女性と話しているのを見ました。'"
        />
        <br>
        <p>
          ・油
        </p>
        <SentenceFormat
          :sentence="'油膩膩的拉麵好吃，但是如果吃太多肚子會不舒服。'"
          :bopomofo="'ㄧㄡˊ ㄋㄧˋ ㄋㄧˋ ㄉㄜ˙ ㄌㄚ ㄇㄧㄢˋ ㄏㄠˇ ㄔ，ㄉㄢˋ ㄕˋ ㄖㄨˊ ㄍㄨㄛˇ ㄔ ㄊㄞˋ ㄉㄨㄛ ㄉㄨˋ ㄗ˙ ㄏㄨㄟˋ ㄅㄨˋ ㄕㄨ ㄈㄨ˙.'"
          :pinyin="'you2 ni4 ni4 de la1 mian4 hao3 chi1, dan4 shi4 ru2 guo3 chi1 tai4 duo1 du4 zi3 hui4 bu2 shu1 fu2.'"
          :translation="'油たっぷりのラーメンは美味しいですが、 食べすぎるとお腹の調子が悪くなります。'"
          :memo="'※「ネギたっぷりの」 = 「蔥滿滿的(ㄘㄨㄥ ㄇㄢˇ ㄇㄢˇ ㄉㄜ˙/cong1 man3 man3 de)」。'"
        />
        <br>
        <p>
          ・冰
        </p>
        <SentenceFormat
          :sentence="'摸冰的東西太久，你的手會沒有感覺。'"
          :bopomofo="'ㄇㄛ ㄅㄧㄥ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ ㄊㄞˋ ㄐㄧㄡˇ，ㄋㄧˇ ㄉㄜ˙ ㄕㄡˇ ㄏㄨㄟˋ ㄇㄟˊ ㄧㄡˇ ㄍㄢˇ ㄐㄩㄝˊ.'"
          :pinyin="'mo1 bing1 de dong1 xi1 tai4 jiu3, ni3 de shou3 hui4 mei2 you3 gan3 jue2'"
          :translation="'冷たいものに長時間触れていると、 手の感覚がなくなります。'"
        />
        <br>
        <p>
          ・別
        </p>
        <SentenceFormat
          :sentence="'別擔心，我能自己剪瀏海。'"
          :bopomofo="'ㄅㄧㄝˊ ㄉㄢ ㄒㄧㄣ，ㄨㄛˇ ㄋㄥˊ ㄗˋ ㄐㄧˇ ㄐㄧㄢˇ ㄌㄧㄡˊ ㄏㄞˇ.'"
          :pinyin="'bie2 dan1 xin1, wo3 neng2 zi4 ji3 jian3 liu2 hai3.'"
          :translation="'心配しないで下さい、 前髪は自分で切れます。'"
          :memo="'※「整理瀏海(ㄓㄥˇ ㄌㄧˇ ㄌㄧㄡˊ ㄏㄞˇ/zheng3 li3 liu2 hai3)」 だと美容院などで綺麗に整える感覚。'"
        />
        <br>
        <p>
          ・關心
        </p>
        <SentenceFormat
          :sentence="'阿嫲關心那個孩子，每天跟他聊天。'"
          :bopomofo="'ㄚ ㄇㄚ˙ ㄍㄨㄢ ㄒㄧㄣ ㄋㄚˋ ㄍㄜˋ ㄏㄞˊ ㄗ˙， ㄇㄟˇ ㄊㄧㄢ ㄍㄣ ㄊㄚ ㄌㄧㄠˊ ㄊㄧㄢ.'"
          :pinyin="'a1 ma guan1 xin1 na4 ge4 hai2 zi3, mei3 tian1 gen1 ta1 liao2 tian1.'"
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
          :sentence="'如果他已經睡了，別叫醒他。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄊㄚ ㄧˇ ㄐㄧㄥ ㄕㄨㄟˋ ㄌㄜ˙， ㄅㄧㄝˊ ㄐㄧㄠˋ ㄒㄧㄥˇ ㄊㄚ.'"
          :pinyin="'ru2 guo3 ta1 yi3 jing1 shui4 le, bie2 jiao4 xing3 ta1.'"
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
          :sentence="'你要袋子嗎? -不用了, 謝謝。'"
          :bopomofo="'ㄋㄧˇ ㄧㄠˋ ㄉㄞˋ ㄗ˙ ㄇㄚ˙?  -ㄅㄨˊ ㄩㄥˋ ㄌㄜ˙, ㄒㄧㄝˋ ㄒㄧㄝˋ.'"
          :pinyin="'ni3 yao4 dai4 zi3 ma2? -bu2 yong4 le, xie4 xie4.'"
          :translation="'袋はいりますか? -結構です、 ありがとう。'"
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
          :sentence="'我有很多不做完不行的工作，不知道什麼時候我能回家。'"
          :bopomofo="'ㄨㄛˇ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄅㄨˊ ㄗㄨㄛˋ ㄨㄢˊ ㄅㄨˋ ㄒㄧㄥˊ ㄉㄜ˙ ㄍㄨㄥ ㄗㄨㄛˋ，ㄅㄨˋ ㄓ ㄉㄠˋ ㄕㄣˊ ㄇㄜ˙ ㄕˊ ㄏㄡˋ ㄨㄛˇ ㄋㄥˊ ㄏㄨㄟˊ ㄐㄧㄚ.'"
          :pinyin="'wo3 you3 hen3 duo1 bu2 zuo4 wan2 bu4 xing2 de gong1 zuo4, bu4 zhi1 dao4 shen2 me shi2 hou4 wo3 neng2 hui2 jia1.'"
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
    <GoogleAds />
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
import GoogleAds from '../../components/googleAdsHorizontal'
export default {
  components: {
    Header,
    Footer,
    SentenceFormat,
    GoogleAds
  },
  component: {
    MySpeechSynthesis
  },
  head () {
    return {
      title: '例文集 sentence',
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
