<template>
  <section>
    <Header
      :name="'sentence'"
    />
    <GoogleAds
      :gslot="'8835446919'"
      :display="'inline-block'"
      :width="'300px'"
      :height="'50px'"
    />
    <div class="main-text1">
      <div class="text-itself-about">
        <br>
        <h1 style="font-size: 20px; text-align: center">
          當代中文課程課2・第7章
        </h1>
        <p>
          【新単語+例文】
        </p>
        <p>
          ・垃圾
        </p>
        <SentenceFormat
          :sentence="'可燃垃圾和不燃垃圾一定得分類。'"
          :bopomofo="'ㄎㄜˇ ㄖㄢˊ ㄌㄜˋ ㄙㄜˋ ㄏㄢˋ ㄅㄨˋ ㄖㄢˊ ㄌㄜˋ ㄙㄜˋ ㄧˊ ㄉㄧㄥˋ ㄉㄟˇ ㄈㄣ ㄌㄟˋ.'"
          :pinyin="'ke3 ran2 le4 se4 han4 bu4 ran2 la4 se4 yi1 ding4 dei4 fen1 lei4.'"
          :translation="'可燃性のゴミと不燃性のゴミは分離する必要があります。'"
        />
        <br>
        <p>
          ・倒
        </p>
        <SentenceFormat
          :sentence="'倒垃圾來不及, 我看到垃圾車剛剛過去了。'"
          :bopomofo="'ㄉㄠˋ ㄌㄜˋ ㄙㄜˋ ㄌㄞˊ ㄅㄨˋ ㄐㄧˊ, ㄨㄛˇ ㄎㄢˋ ㄉㄠˋ ㄌㄜˋ ㄙㄜˋ ㄔㄜ ㄍㄤ ㄍㄤ ㄍㄨㄛˋ ㄑㄩˋ ㄌㄜ˙.'"
          :pinyin="'dao4 le4 se4 lai2 bu4 ji2, wo3 kan4 dao4 le4 se4 che1 gang1 gang1 guo4 qu4 le.'"
          :translation="'ゴミ出しに間に合いません、 ゴミの車がたった今通りすぎたのを見ました。'"
        />
        <br>
        <p>
          ・ 丟
        </p>
        <SentenceFormat
          :sentence="'我恐怕我手錶在丟的垃圾之中。'"
          :bopomofo="'ㄨㄛˇ ㄎㄨㄥˇ ㄆㄚˋ ㄨㄛˇ ㄕㄡˇ ㄅㄧㄠˇ ㄗㄞˋ ㄉㄧㄡ ㄉㄜ˙ ㄌㄜˋ ㄙㄜˋ ㄓ ㄓㄨㄥ.'"
          :pinyin="'wo3 kong3 pa4 wo3 shou3 biao3 zai4 diu1 de le4 se4 zhi1 zhong1.'"
          :translation="'捨てたゴミの中に腕時計があったのではないかと恐れています。'"
        />
        <br>
        <p>
          ・收
        </p>
        <SentenceFormat
          :sentence="'必須收盡可能多的人的簽名。'"
          :bopomofo="'ㄅㄧˋ ㄒㄩ ㄕㄡ ㄐㄧㄣˋ ㄎㄜˇ ㄋㄥˊ ㄉㄨㄛ ㄉㄜ˙ ㄖㄣˊ ㄉㄜ˙ ㄑㄧㄢ ㄇㄧㄥˊ.'"
          :pinyin="'bi4 xu1 shou1 jin4 ke3 neng2 duo1 de ren2 de qian1 ming2.'"
          :translation="'できるだけ多くの人から署名を集める必要があります。'"
        />
        <br>
        <p>
          ・以為
        </p>
        <SentenceFormat
          :sentence="'我以為生菜和高麗菜是一樣的蔬菜。'"
          :bopomofo="'ㄨㄛˇ ㄧˇ ㄨㄟˊ ㄕㄥ ㄘㄞˋ ㄏㄜˊ ㄍㄠ ㄌㄧˊ ㄘㄞˋ ㄕˋ ㄧˊ ㄧㄤˋ ㄉㄜ˙ ㄕㄨ ㄘㄞˋ.'"
          :pinyin="'wo3 yi3 wei2 sheng1 cai4 han4 gao1 li4 cai4 shi4 yi1 yang4 de shu1 cai4.'"
          :translation="'レタスとキャベツは同じ野菜だと思っていました。'"
        />
        <br>
        <p>
          ・回收
        </p>
        <SentenceFormat
          :sentence="'這個衛生紙由回收紙製成。'"
          :bopomofo="'ㄓㄜˋ ㄍㄜˋ ㄨㄟˋ ㄕㄥ ㄓˇ ㄧㄡˊ ㄏㄨㄟˊ ㄕㄡ ㄓˇ ㄓˋ ㄔㄥˊ.'"
          :pinyin="'zhe4 ge4 wei4 sheng1 zhi3 you2 hui2 shou1 zhi3 zhi4 cheng2.'"
          :translation="'このティッシュペーパーは再生紙から作られています。'"
        />
        <br>
        <p>
          ・規定
        </p>
        <SentenceFormat
          :sentence="'小學常常有奇怪的規定。'"
          :bopomofo="'ㄒㄧㄠˇ ㄒㄩㄝˊ ㄔㄤˊ ㄔㄤˊ ㄧㄡˇ ㄑㄧˊ ㄍㄨㄞˋ ㄉㄜ˙ ㄍㄨㄟ ㄉㄧㄥˋ.'"
          :pinyin="'xiao3 xue2 chang2 chang2 you3 qi2 guai4 de gui4 ding4.'"
          :translation="'小学校にはしばしば奇妙な規則があります。'"
        />
        <br>
        <p>
          ・要不然
        </p>
        <SentenceFormat
          :sentence="'你得捕魚, 要不然你的貓不能吃晚餐。'"
          :bopomofo="'ㄋㄧˇ ㄉㄜˊ ㄅㄨˇ ㄩˊ, ㄧㄠˋ ㄅㄨˋ ㄖㄢˊ ㄋㄧˇ ㄉㄜ˙ ㄇㄠ ㄅㄨˋ ㄋㄥˊ ㄔ ㄨㄢˇ ㄘㄢ.'"
          :pinyin="'ni3 de bu3 yu2, yao4 bu4 ran2 ni3 de mao1 bu4 neng2 chi1 wan3 can1.'"
          :translation="'釣りをしないと、 あなたの猫は夕飯を食べられませんよ。'"
        />
        <br>
        <p>
          ・皮包
        </p>
        <SentenceFormat
          :sentence="'皮包內跟發票滿滿的。'"
          :bopomofo="'ㄆㄧˊ ㄅㄠ ㄋㄟˋ ㄍㄣ ㄈㄚ ㄆㄧㄠˋ ㄇㄢˇ ㄇㄢˇ ㄉㄜ˙.'"
          :pinyin="'pi2 bao1 nei4 gen1 fa1 piao4 man2 man2 de.'"
          :translation="'財布の中はレシートで一杯です。'"
        />
        <br>
        <p>
          ・跑
        </p>
        <SentenceFormat
          :sentence="'樓上的孩子跑著的聲音很吵。'"
          :bopomofo="'ㄌㄡˊ ㄕㄤˋ ㄉㄜ˙ ㄏㄞˊ ㄗ˙ ㄆㄠˇ ㄓㄜ˙ ㄉㄜ˙ ㄕㄥ ㄧㄣ ㄏㄣˇ ㄔㄠˇ.'"
          :pinyin="'lou2 shang4 de hai2 zi3 pao3 zhe de sheng1 yin1 hen3 chao3.'"
          :translation="'上の階で子供が走っている音がすごくうるさいです。'"
        />
        <br>
        <p>
          ・追
        </p>
        <SentenceFormat
          :sentence="'貓追了老鼠， 但是老鼠躲進了洞裡。'"
          :bopomofo="'ㄇㄠ ㄓㄨㄟ ㄌㄜ˙ ㄌㄠˇ ㄕㄨˇ， ㄉㄢˋ ㄕˋ ㄌㄠˇ ㄕㄨˇ ㄉㄨㄛˇ ㄐㄧㄣˋ ㄌㄜ˙ ㄉㄨㄥˋ ㄌㄧˇ.'"
          :pinyin="'mao1 zhui1 le lao3 shu3, dan4 shi4 lao3 shu3 duo3 jin4 le dong4 li3.'"
          :translation="'猫はネズミを追いかけましたが、 ネズミは穴に逃げ込みました。'"
        />
        <br>
        <p>
          ・有趣
        </p>
        <SentenceFormat
          :sentence="'因為鄰居的笑聲一直聽到, 他正在看的動畫一定有趣。'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄌㄧㄣˊ ㄐㄩ ㄉㄜ˙ ㄒㄧㄠˋ ㄕㄥ ㄧ ㄓˊ ㄊㄧㄥ ㄉㄠˋ, ㄊㄚ ㄓㄥˋ ㄗㄞˋ ㄎㄢˋ ㄉㄜ˙ ㄉㄨㄥˋ ㄏㄨㄚˋ ㄧˊ ㄉㄧㄥˋ ㄧㄡˇ ㄑㄩˋ.'"
          :pinyin="'yin1 wei4 lin2 ju1 de xiao4 sheng1 yi1 zhi2 ting1 dao4, ta1 zheng4 zai4 kan4 de dong4 hua4 yi1 ding4 you3 qu4.'"
          :translation="'お隣さんの笑い声がずっと聞こえてくるので、 彼が見ているアニメは面白いに違いないです。'"
        />
        <br>
        <p>
          ・不壞
        </p>
        <SentenceFormat
          :sentence="'為賺錢我有一個不壞的建議， 您有興趣嗎?'"
          :bopomofo="'ㄨㄟˋ ㄓㄨㄢˋ ㄑㄧㄢˊ ㄨㄛˇ ㄧㄡˇ ㄧˊ ㄍㄜˋ ㄅㄨˋ ㄏㄨㄞˋ ㄉㄜ˙ ㄐㄧㄢˋ ㄧˋ， ㄋㄧㄣˊ ㄧㄡˇ ㄒㄧㄥˋ ㄑㄩˋ ㄇㄚ˙?'"
          :pinyin="'wei4 zhuan4 qian2 wo3 you3 yi1 ge4 bu2 huai4 de jian4 yi4, nin2 you3 xing4 qu4 ma?'"
          :translation="'お金を稼ぐための悪くない提案があるのですが、 興味はありますか?'"
        />
        <br>
        <p>
          ・天天
        </p>
        <SentenceFormat
          :sentence="'我的貓天天希望吃生魚片。'"
          :bopomofo="'ㄨㄛˇ ㄉㄜ˙ ㄇㄠ ㄊㄧㄢ ㄊㄧㄢ ㄒㄧ ㄨㄤˋ ㄔ ㄕㄥ ㄩˊ ㄆㄧㄢˋ.'"
          :pinyin="'wo3 de mao1 tian1 tian1 xi1 wang4 chi1 sheng1 yu2 pian4.'"
          :translation="'私の猫は毎日刺身が食べたいと思っています。'"
        />
        <br>
        <p>
          ・汽水罐
        </p>
        <SentenceFormat
          :sentence="'我每天喝威士忌跟氣泡水， 所以得回收很多汽水罐。'"
          :bopomofo="'ㄨㄛˇ ㄇㄟˇ ㄊㄧㄢ ㄏㄜ ㄨㄟ ㄕˋ ㄐㄧˋ ㄍㄣ ㄑㄧˋ ㄆㄠˋ ㄕㄨㄟˇ， ㄙㄨㄛˇ ㄧˇ ㄉㄜˊ ㄏㄨㄟˊ ㄕㄡ ㄏㄣˇ ㄉㄨㄛ ㄑㄧˋ ㄕㄨㄟˇ ㄍㄨㄢˋ.'"
          :pinyin="'wo3 mei3 tian1 he1 wei1 shi4 ji4 gen1 qi4 pao4 shui3, suo3 yi3 dei3 hui2 shou1 hen3 duo1 qi4 shui3 guan4.'"
          :translation="'私は毎日ハイボールを飲むので、 ソーダ缶をたくさんリサイクルに出さないといけません。'"
        />
        <br>
        <p>
          ・紙杯
        </p>
        <SentenceFormat
          :sentence="'賞櫻的時候用的紙杯你已經拿到嗎?'"
          :bopomofo="'ㄕㄤˇ ㄧㄥ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄩㄥˋ ㄉㄜ˙ ㄓˇ ㄅㄟ ㄋㄧˇ ㄧˇ ㄐㄧㄥ ㄋㄚˊ ㄉㄠˋ ㄇㄚ˙?'"
          :pinyin="'shang3 ying1 de shi2 hou4 yong4 de zhi3 bei1 ni3 yi3 jing1 na2 dao4 ma?'"
          :translation="'花見をする時に使う紙コップはもう持ちましたか?'"
        />
        <br>
        <p>
          ・放下
        </p>
        <SentenceFormat
          :sentence="'我抱的貓太胖太重了， 我終於放下它。'"
          :bopomofo="'ㄨㄛˇ ㄅㄠˋ ㄉㄜ˙ ㄇㄠ ㄊㄞˋ ㄆㄤˋ ㄊㄞˋ ㄓㄨㄥˋ ㄌㄜ˙， ㄨㄛˇ ㄓㄨㄥ ㄩˊ ㄈㄤˋ ㄒㄧㄚˋ ㄊㄚ.'"
          :pinyin="'wo3 bao4 de mao1 tai4 pang4 tai4 zhong4 le, wo3 zhong1 yu2 fang4 xia4 ta1.'"
          :translation="'私が抱っこしていた猫は太りすぎて重かったので、 ついに下に下ろしました。'"
        />
        <br>
        <p>
          ・走出來
        </p>
        <SentenceFormat
          :sentence="'雨停之後從超市很多人走出來。'"
          :bopomofo="'ㄩˇ ㄊㄧㄥˊ ㄓ ㄏㄡˋ ㄘㄨㄥˊ ㄔㄠ ㄕˋ ㄏㄣˇ ㄉㄨㄛ ㄖㄣˊ ㄗㄡˇ ㄔㄨ ㄌㄞˊ.'"
          :pinyin="'yu3 ting2 zhi1 hou4 cong2 chao1 shi4 hen3 duo1 ren2 zou3 chu1 lai2.'"
          :translation="'雨がやんだ後、 たくさんの人がスーパーマーケットから出て来ました。'"
        />
        <br>
        <p>
          ・怎麼辦
        </p>
        <SentenceFormat
          :sentence="'躺在電腦上的貓怎麼辦?'"
          :bopomofo="'ㄊㄤˇ ㄗㄞˋ ㄉㄧㄢˋ ㄋㄠˇ ㄕㄤˋ ㄉㄜ˙ ㄇㄠ ㄗㄣˇ ㄇㄜ˙ ㄅㄢˋ?'"
          :pinyin="'tang3 zai4 dian4 nao3 shang4 de mao1 zen3 me ban4?'"
          :translation="'パソコンの上に横になっている猫をどうしましょうか?'"
        />
        <br>
        <p>
          ・聊
        </p>
        <SentenceFormat
          :sentence="'在超市每天閒人們都在聊傳聞。'"
          :bopomofo="'ㄗㄞˋ ㄔㄠ ㄕˋ ㄇㄟˇ ㄊㄧㄢ ㄒㄧㄢˊ ㄖㄣˊ ㄇㄣ˙ ㄉㄡ ㄗㄞˋ ㄌㄧㄠˊ ㄔㄨㄢˊ ㄨㄣˊ.'"
          :pinyin="'zai4 chao1 shi4 mei3 tian1 jian1 ren2 men dou1 zai4 liao2 chuan2 wen2.'"
          :translation="'スーパーでは、 毎日暇な人たちが噂話をしています。'"
        />
        <br>
        <p>
          ・忽然
        </p>
        <SentenceFormat
          :sentence="'忽然餓了, 現在差不多不能步的狀態。'"
          :bopomofo="'ㄏㄨ ㄖㄢˊ ㄜˋ ㄌㄜ˙, ㄒㄧㄢˋ ㄗㄞˋ ㄔㄚˋ ㄅㄨˋ ㄉㄨㄛ ㄅㄨˋ ㄋㄥˊ ㄅㄨˋ ㄉㄜ˙ ㄓㄨㄤˋ ㄊㄞˋ.'"
          :pinyin="'hu1 ran2 e4 le, xian4 zai4 cha1 bu4 duo1 bu4 neng2 bu4 de zhuang4 tai4.'"
          :translation="'突然お腹が空いて、 今ほとんど歩けない状態です。'"
        />
        <br>
        <p>
          ・聲音
        </p>
        <SentenceFormat
          :sentence="'從路上忽然聽到很大的聲音, 每個人都很困惑了。'"
          :bopomofo="'ㄘㄨㄥˊ ㄌㄨˋ ㄕㄤˋ ㄏㄨ ㄖㄢˊ ㄊㄧㄥ ㄉㄠˋ ㄏㄣˇ ㄉㄚˋ ㄉㄜ˙ ㄕㄥ ㄧㄣ, ㄇㄟˇ ㄍㄜ˙ ㄖㄣˊ ㄉㄡ ㄏㄣˇ ㄎㄨㄣˋ ㄏㄨㄛˋ ㄌㄜ˙.'"
          :pinyin="'cong2 lu4 shang4 hu1 ran2 ting1 dao4 hen3 da4 de sheng1 yin1, mei3 ge4 ren2 dou1 hen3 kun4 huo4 le.'"
          :translation="'突然道路から大きな音がしたので、 みんな困惑しました。'"
        />
        <br>
        <p>
          ・奇怪
        </p>
        <SentenceFormat
          :sentence="'他今天很奇怪，我肯定他在隱滿東西。'"
          :bopomofo="'ㄊㄚ ㄐㄧㄣ ㄊㄧㄢ ㄏㄣˇ ㄑㄧˊ ㄍㄨㄞˋ， ㄨㄛˇ ㄎㄣˇ ㄉㄧㄥˋ ㄊㄚ ㄗㄞˋ ㄧㄣˇ ㄇㄢˇ ㄉㄨㄥ ㄒㄧ˙.'"
          :pinyin="'ta1 jin1 tian1 hen3 qi2 guai4, wo3 ken3 ding4 ta1 zai4 yin3 man3 dong1 xi.'"
          :translation="'彼は今日とても変なので、 きっと何か隠していると思います。'"
        />
        <br>
        <p>
          ・袋子
        </p>
        <SentenceFormat
          :sentence="'拿到購物袋子必須付錢, 所以我總是有很多自己的。'"
          :bopomofo="'ㄋㄚˊ ㄉㄠˋ ㄍㄡˋ ㄨˋ ㄉㄞˋ ㄗ˙ ㄅㄧˋ ㄒㄩ ㄈㄨˋ ㄑㄧㄢˊ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄗㄨㄥˇ ㄕˋ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄗˋ ㄐㄧˇ ㄉㄜ˙.'"
          :pinyin="'na2 dao4 gou4 wu4 dai4 zi3 bi4 xu1 fu4 qian2, suo3 yi3 wo3 zong3 shi4 you3 hen3 duo1 zi4 ji3 de.'"
          :translation="'買い物袋を貰うためにはお金を払わなければならないので、 私はいつも自分のものをたくさん持っています。'"
        />
        <br>
        <p>
          ・輛
        </p>
        <SentenceFormat
          :sentence="'今天發生了三輛汽車相撞的事故。'"
          :bopomofo="'ㄐㄧㄣ ㄊㄧㄢ ㄈㄚ ㄕㄥ ㄌㄜ˙ ㄙㄢ ㄌㄧㄤˋ ㄑㄧˋ ㄔㄜ ㄒㄧㄤ ㄓㄨㄤˋ ㄉㄜ˙ ㄕˋ ㄍㄨˋ.'"
          :pinyin="'jin1 tian1 fa1 sheng1 le san1 liang4 qi4 che1 xiang1 zhuang4 de shi4 gu4.'"
          :translation="'今日、 3台の車が衝突する事故がありました。'"
        />
        <br>
        <p>
          ・一定
        </p>
        <SentenceFormat
          :sentence="'我有一陣子繼續吃一定的食物的習慣。'"
          :bopomofo="'ㄨㄛˇ ㄧㄡˇ ㄧ ㄓㄣˋ ㄗ˙ ㄐㄧˋ ㄒㄩˋ ㄔ ㄧˊ ㄉㄧㄥˋ ㄉㄜ˙ ㄕˊ ㄨˋ ㄉㄜ˙ ㄒㄧˊ ㄍㄨㄢˋ.'"
          :pinyin="'wo3 you3 yi1 zhen4 zi3 ji4 xu4 chi1 yi1 ding4 de shi2 wu4 de xi2 guan4.'"
          :translation="'私はしばらくの間、 特定の食べ物を食べ続ける習慣があります。'"
        />
        <br>
        <p>
          ・地點
        </p>
        <SentenceFormat
          :sentence="'我用中文告訴了目的地的地點， 但是司機用台語再問我。'"
          :bopomofo="'ㄨㄛˇ ㄩㄥˋ ㄓㄨㄥ ㄨㄣˊ ㄍㄠˋ ㄙㄨˋ ㄌㄜ˙ ㄇㄨˋ ㄉㄧˋ ㄉㄧˋ ㄉㄜ˙ ㄉㄧˋ ㄉㄧㄢˇ， ㄉㄢˋ ㄕˋ ㄙ ㄐㄧ ㄩㄥˋ ㄊㄞˊ ㄩˇ ㄗㄞˋ ㄨㄣˋ ㄨㄛˇ.'"
          :pinyin="'wo3 yong4 zhong1 wen2 gao4 su4 le mu4 di4 di4 de di4 dian3, dan4 shi4 si1 ji1 yong4 tai2 yu3 zai4 wen4 wo3.'"
          :translation="'目的地の住所を中国語で伝えましたが、 運転手に台湾語で聞き返されました。'"
        />
        <br>
        <p>
          ・為了
        </p>
        <SentenceFormat
          :sentence="'為了洗完澡後的幸福的時間， 請你冰啤酒在冰箱裡。'"
          :bopomofo="'ㄨㄟˋ ㄌㄜ˙ ㄒㄧˇ ㄨㄢˊ ㄗㄠˇ ㄏㄡˋ ㄉㄜ˙ ㄒㄧㄥˋ ㄈㄨˊ ㄉㄜ˙ ㄕˊ ㄐㄧㄢ， ㄑㄧㄥˇ ㄋㄧˇ ㄅㄧㄥ ㄆㄧˊ ㄐㄧㄡˇ ㄗㄞˋ ㄅㄧㄥ ㄒㄧㄤ ㄌㄧˇ.'"
          :pinyin="'wei4 le xi3 wan2 zao3 hou4 de xing4 fu2 de shi2 jian1, qing3 ni3 bing1 pi2 jiu3 zai4 bing1 xiang1 li3.'"
          :translation="'シャワーの後の幸せな時間の為に、 冷蔵庫でビールを冷やしておいて下さい。'"
        />
        <br>
        <p>
          ・保護
        </p>
        <SentenceFormat
          :sentence="'為了保護考拉我捐贈了。'"
          :bopomofo="'ㄨㄟˋ ㄌㄜ˙ ㄅㄠˇ ㄏㄨˋ ㄎㄠˇ ㄌㄚ ㄨㄛˇ ㄐㄩㄢ ㄗㄥˋ ㄌㄜ˙.'"
          :pinyin="'wei4 le bao3 hu4 kao3 la1 wo3 juan1 zeng4 le.'"
          :translation="'コアラを保護するための寄付をしました。'"
        />
        <br>
        <p>
          ・分類
        </p>
        <SentenceFormat
          :sentence="'根據分類， 貓和獅子屬於同一貓科。'"
          :bopomofo="'ㄍㄣ ㄐㄩˋ ㄈㄣ ㄌㄟˋ， ㄇㄠ ㄏㄜˊ ㄕ ㄗ˙ ㄕㄨˇ ㄩˊ ㄊㄨㄥˊ ㄧ ㄇㄠ ㄎㄜ.'"
          :pinyin="'gen1 ju4 fen lei4, mao1 han4 shi1 zi3 shu3 yu2 tong2 yi1 mao1 ke1.'"
          :translation="'分類によると、 猫とライオンは同じネコ科に属しています。'"
        />
        <br>
        <p>
          ・利用
        </p>
        <SentenceFormat
          :sentence="'利用活動中心需要付會費。'"
          :bopomofo="'ㄌㄧˋ ㄩㄥˋ ㄏㄨㄛˊ ㄉㄨㄥˋ ㄓㄨㄥ ㄒㄧㄣ ㄒㄩ ㄧㄠˋ ㄈㄨˋ ㄏㄨㄟˋ ㄈㄟˋ.'"
          :pinyin="'li4 yong4 huo2 dong4 zhong1 xin1 xu1 yao4 fu4 hui4 fei4.'"
          :translation="'活動センターを利用するには会費の支払いが必要です。'"
        />
        <br>
        <p>
          ・紙
        </p>
        <SentenceFormat
          :sentence="'為了減少紙張使用量， 請避免不必要的複印。'"
          :bopomofo="'ㄨㄟˋ ㄌㄜ˙ ㄐㄧㄢˇ ㄕㄠˇ ㄓˇ ㄓㄤ ㄕˇ ㄩㄥˋ ㄌㄧㄤˋ， ㄑㄧㄥˇ ㄅㄧˋ ㄇㄧㄢˇ ㄅㄨˋ ㄅㄧˋ ㄧㄠˋ ㄉㄜ˙ ㄈㄨˋ ㄧㄣˋ.'"
          :pinyin="'wei4 le jian3 shao3 zhi3 zhang1 shi3 yong4 liang4, qing3 bi4 mian3 bu2 bi4 yao4 de fu4 yin4.'"
          :translation="'紙の使用量を減らすために、 無駄なコピーは避けて下さい。'"
        />
        <br>
        <p>
          ・瓶子
        </p>
        <SentenceFormat
          :sentence="'請你破的瓶子用報紙包後丟掉。'"
          :bopomofo="'ㄑㄧㄥˇ ㄋㄧˇ ㄆㄛˋ ㄉㄧˋ ㄆㄧㄥˊ ㄗ˙ ㄩㄥˋ ㄅㄠˋ ㄓˇ ㄅㄠ ㄏㄡˋ ㄉㄧㄡ ㄉㄧㄠˋ.'"
          :pinyin="'qing3 ni3 po4 de ping2 zi yong4 bao4 zhi3 bao1 hou4 diu1 diao4.'"
          :translation="'割れた瓶は新聞に包んで捨ててください。'"
        />
        <br>
        <p>
          ・塑膠
        </p>
        <SentenceFormat
          :sentence="'有時候我可能會覺得塑料包裝過多。'"
          :bopomofo="'ㄧㄡˇ ㄕˊ ㄏㄡˋ ㄨㄛˇ ㄎㄜˇ ㄋㄥˊ ㄏㄨㄟˋ ㄐㄩㄝˊ ㄉㄜ˙ ㄙㄨˋ ㄌㄧㄠˋ ㄅㄠ ㄓㄨㄤ ㄍㄨㄛˋ ㄉㄨㄛ.'"
          :pinyin="'you3 shi2 hou4 wo3 ke3 neng2 hui4 jue2 de su4 liao4 bao1 zhuang1 guo4 duo1.'"
          :translation="'プラスチックの包装は過剰だと感じる時があります。'"
        />
        <br>
        <p>
          ・資源
        </p>
        <SentenceFormat
          :sentence="'紙, 塑料等那種資源能回收。'"
          :bopomofo="'ㄓˇ, ㄙㄨˋ ㄌㄧㄠˋ ㄉㄥˇ ㄋㄚˋ ㄓㄨㄥˇ ㄗ ㄩㄢˊ ㄋㄥˊ ㄏㄨㄟˊ ㄕㄡ.'"
          :pinyin="'zhi3, su4 liao4 deng3 na4 zhong3 zi1 yuan2 neng2 hui2 shou1.'"
          :translation="'紙やプラスチックなどの資源はリサイクルできます。'"
        />
        <br>
        <p>
          ・回收桶
        </p>
        <SentenceFormat
          :sentence="'別放一般垃圾放進回收桶。'"
          :bopomofo="'ㄅㄧㄝˊ ㄈㄤˋ ㄧˋ ㄅㄢ ㄌㄜˋ ㄙㄜˋ ㄈㄤˋ ㄐㄧㄣˋ ㄏㄨㄟˊ ㄕㄡ ㄊㄨㄥˇ.'"
          :pinyin="'bie2 fang4 yi1 ban1 la4 se4 fang4 jin4 hui2 shou1 tong3.'"
          :translation="'一般ゴミをリサイクルボックスに入れないで下さい。'"
        />
        <br>
        <p>
          ・城市
        </p>
        <SentenceFormat
          :sentence="'根據城市的公告， 年末年初沒有垃圾收集。'"
          :bopomofo="'ㄍㄣ ㄐㄩˋ ㄔㄥˊ ㄕˋ ㄉㄜ˙ ㄍㄨㄥ ㄍㄠˋ， ㄋㄧㄢˊ ㄇㄛˋ ㄋㄧㄢˊ ㄔㄨ ㄇㄟˊ ㄧㄡˇ ㄌㄜˋ ㄙㄜˋ ㄕㄡ ㄐㄧˊ.'"
          :pinyin="'gen1 ju4 cheng2 shi4 de gong1 gao4, nian2 mo4 nian2 chu1 mei2 you3 la4 se4 shou1 ji2 .'"
          :translation="'市のお知らせによると、 年末年始のゴミ収集はありません。'"
        />
        <br>
        <p>
          ・聽見
        </p>
        <SentenceFormat
          :sentence="'我在聽見從外面醉漢的歌聲。'"
          :bopomofo="'ㄨㄛˇ ㄗㄞˋ ㄊㄧㄥ ㄐㄧㄢˋ ㄘㄨㄥˊ ㄨㄞˋ ㄇㄧㄢˋ ㄗㄨㄟˋ ㄏㄢˋ ㄉㄜ˙ ㄍㄜ ㄕㄥ.'"
          :pinyin="'wo3 zai4 ting1 jian4 cong2 wai4 mian4 zui4 han4 de ge1 sheng1.'"
          :translation="'外から酔っぱらいの歌声が聞こえます。'"
        />
        <br>
        <p>
          ・開過來
        </p>
        <SentenceFormat
          :sentence="'校車會開過來接孩子們。'"
          :bopomofo="'ㄒㄧㄠˋ ㄔㄜ ㄏㄨㄟˋ ㄎㄞ ㄍㄨㄛˋ ㄌㄞˊ ㄐㄧㄝ ㄏㄞˊ ㄗ˙ ㄇㄣ˙.'"
          :pinyin="'xiao4 che1 hui4 kai1 guo4 lai2 jie1 hai2 zi3 men.'"
          :translation="'スクールバスが子供たちを迎えに来ます。'"
        />
        <br>
        <p>
          ・走過來
        </p>
        <SentenceFormat
          :sentence="'拿著看起來很重的包包的阿媽走過來, 我們幫忙吧!'"
          :bopomofo="'ㄋㄚˊ ㄓㄜ˙ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄏㄣˇ ㄓㄨㄥˋ ㄉㄜ˙ ㄅㄠ ㄅㄠ ㄉㄜ˙ ㄚ ㄇㄚ ㄗㄡˇ ㄍㄨㄛˋ ㄌㄞˊ, ㄨㄛˇ ㄇㄣ˙ ㄅㄤ ㄇㄤˊ ㄅㄚ˙!'"
          :pinyin="'na2 zhe kan4 qi3 lai2 hen3 zhong4 de bao1 bao1 de a1 ma1 zou3 guo4 lai2, wo3 men bang1 mang2 ba!'"
          :translation="'とても重そうなバッグを持ったおばあさんがやってくるので、 手伝いましょう!'"
        />
        <br>
        <p>
          ・丟進去
        </p>
        <SentenceFormat
          :sentence="'他把捲起的衛生紙丟進去垃圾桶。'"
          :bopomofo="'ㄊㄚ ㄅㄚˇ ㄐㄩㄢˇ ㄑㄧˇ ㄉㄜ˙ ㄨㄟˋ ㄕㄥ ㄓˇ ㄉㄧㄡ ㄐㄧㄣˋ ㄑㄩˋ ㄌㄜˋ ㄙㄜˋ ㄊㄨㄥˇ.'"
          :pinyin="'ta1 ba3 juan4 qi3 de wei4 sheng1 zhi3 diu1 jin4 qu4 la4 se4 tong3.'"
          :translation="'彼は丸めたティッシュペーパーをゴミ箱に投げ入れました。'"
        />
        <br>
        <p>
          ・路上
        </p>
        <SentenceFormat
          :sentence="'有人將垃圾倒在路上, 所以烏鴉正在聚集。'"
          :bopomofo="'ㄧㄡˇ ㄖㄣˊ ㄐㄧㄤ ㄌㄚ ㄐㄧ ㄉㄠˋ ㄗㄞˋ ㄌㄨˋ ㄕㄤˋ, ㄙㄨㄛˇ ㄧˇ ㄨ ㄧㄚ ㄓㄥˋ ㄗㄞˋ ㄐㄩˋ ㄐㄧˊ.'"
          :pinyin="'you3 ren2 jiang1 la1 ji1 dao4 zai4 lu4 sha4ng, suo3 yi3 wu1 ya1 zheng4 zai4 ju4 ji2.'"
          :translation="'誰かが道路にゴミを捨てたので、カラスが集まっています。'"
        />
        <br>
      </div>
    </div>
    <br>
    <GoogleAds
      :gslot="'8835446919'"
      :display="'inline-block'"
      :width="'300px'"
      :height="'50px'"
    />
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
import GoogleAds from '../../components/googleAds'
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
      script: [{
        'data-ad-client': process.env.GA_ADSENSE_ID,
        async: true,
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
      }],
      meta: [
        { hid: 'keywords', name: 'keywords', content: '中国語, 台湾, 台湾華語, 繁体字, 単語, 聞き流し, ボポモフォ, 當代中文課程課, 例文' },
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第7章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第7章で登場する新単語を使った例文や気づいた事など' }
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
