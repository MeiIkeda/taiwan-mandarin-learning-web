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
          當代中文課程課2・第3章
        </h1>
        <p>
          【新単語+例文】
        </p>
        <p>
          ・進步
        </p>
        <SentenceFormat
          :sentence="'因為要趕快進步， 我每天練習。'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄧㄠˋ ㄍㄢˇ ㄎㄨㄞˋ ㄐㄧㄣˋ ㄅㄨˋ， ㄨㄛˇ ㄇㄟˇ ㄊㄧㄢ ㄌㄧㄢˋ ㄒㄧˊ.'"
          :pinyin="'yin1 wei4 yao4 gan3 kuai4 jin4 bu4, wo3 mei3 tian1 lian4 xi2.'"
          :translation="'早く上達したいので、 私は毎日練習します。'"
          :memo="'※「進步(ㄐㄧㄣˋ ㄅㄨˋ/jin4 bu4)」の反対語＝「退步(ㄊㄨㄟˋ ㄅㄨˋ/tui4 bu4)」'"
        />
        <br>
        <p>
          ・早
        </p>
        <SentenceFormat
          :sentence="'今天的工作很忙， 我起得比較早。'"
          :bopomofo="'ㄐㄧㄣ ㄊㄧㄢ ㄉㄜ˙ ㄍㄨㄥ ㄗㄨㄛˋ ㄏㄣˇ ㄇㄤˊ， ㄨㄛˇ ㄑㄧˇ ㄉㄜˊ ㄅㄧˇ ㄐㄧㄠˋ ㄗㄠˇ.'"
          :pinyin="'jin1 tian1 de gong1 zuo4 hen3 mang2, wo3 qi3 de bi3 jiao4 zao3.'"
          :translation="'今日の仕事は忙しいので、 早めに起きました。'"
          :memo="'※「早(ㄗㄠˇ/zao3)」の反対語＝「晚(ㄨㄢˇ/wan3)」'"
        />
        <br>
        <p>
          ・考試
        </p>
        <SentenceFormat
          :sentence="'我怕我媽媽看到考試的結果。'"
          :bopomofo="'ㄨㄛˇ ㄆㄚˋ ㄨㄛˇ ㄇㄚ ㄇㄚ ㄎㄢˋ ㄉㄠˋ ㄎㄠˇ ㄕˋ ㄉㄜ˙ ㄐㄧㄝˊ ㄍㄨㄛˇ.'"
          :pinyin="'wo3 pa4 wo3 ma1 ma1 kan4 dao4 kao3 shi4 de jie2 guo3.'"
          :translation="'お母さんが試験の結果を見てしまうのが怖いです。'"
        />
        <br>
        <p>
          ・準備
        </p>
        <SentenceFormat
          :sentence="'準備不夠要怪你。'"
          :bopomofo="'ㄓㄨㄣˇ ㄅㄟˋ ㄅㄨˊ  ㄍㄡˋ ㄧㄠˋ ㄍㄨㄞˋ ㄋㄧˇ.'"
          :pinyin="'zhun3 bei4 bu2 gou4 yao4 guai4 ni3.'"
          :translation="'十分な準備ができていないのはあなたのせいです。'"
          :memo="'※「怪(ㄍㄨㄞˋ/guai4)～」で「～のせい」。'"
        />
        <br>
        <p>
          ・考
        </p>
        <SentenceFormat
          :sentence="'孩子們今天要考試， 每個人看起來都很沮喪。'"
          :bopomofo="'ㄏㄞˊ ㄗ˙ ㄇㄣ˙ ㄐㄧㄣ ㄊㄧㄢ ㄧㄠˋ ㄎㄠˇ ㄕˋ， ㄇㄟˇ ㄍㄜ˙ ㄖㄣˊ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄉㄡ ㄏㄣˇ ㄐㄩˇ ㄙㄤˋ.'"
          :pinyin="'hai2 zi3 men jin1 tian1 yao4 kao3 shi4, mei3 ge4 ren2 kan4 qi3 lai2 dou1 hen3 ju3 sang4.'"
          :translation="'子供たちは今日試験を受けるので、 みんな憂鬱そうに見えます。'"
        />
        <br>
        <p>
          ・聽寫
        </p>
        <SentenceFormat
          :sentence="'他不擅長聽寫， 但是擅長說話。'"
          :bopomofo="'ㄊㄚ ㄅㄨˊ ㄕㄢˋ ㄔㄤˊ ㄊㄧㄥ ㄒㄧㄝˇ， ㄉㄢˋ ㄕˋ ㄕㄢˋ ㄔㄤˊ ㄕㄨㄛ ㄏㄨㄚˋ.'"
          :pinyin="'ta1 bu2 shan4 chang2 ting1 xie3, dan4 shi4 shan4 chang2 shuo1 hua4.'"
          :translation="'彼は書き取りが苦手ですが、 話すことは得意です。'"
        />
        <br>
        <p>
          ・容易
        </p>
        <SentenceFormat
          :sentence="'如果我可以選擇， 我想做容易的工作。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄨㄛˇ ㄎㄜˇ ㄧˇ ㄒㄩㄢˇ ㄗㄜˊ， ㄨㄛˇ ㄒㄧㄤˇ ㄗㄨㄛˋ ㄖㄨㄥˊ ㄧˋ ㄉㄜ˙ ㄍㄨㄥ ㄗㄨㄛˋ.'"
          :pinyin="'ru2 guo3 wo3 ke3 yi3 xuan3 ze2, wo3 xiang3 zuo4 rong2 yi4 de gong1 zuo4.'"
          :translation="'もし選べるのなら、 簡単な仕事をしたいです。'"
        />
        <br>
        <p>
          ・小學
        </p>
        <SentenceFormat
          :sentence="'在台灣， 小學跟日本的一樣都是六年。'"
          :bopomofo="'ㄗㄞˋ ㄊㄞˊ ㄨㄢ， ㄒㄧㄠˇ ㄒㄩㄝˊ ㄍㄣ ㄖˋ ㄅㄣˇ ㄉㄜ˙ ㄧˊ ㄧㄤˋ ㄉㄡ ㄕˋ ㄌㄧㄡˋ ㄋㄧㄢˊ.'"
          :pinyin="'zai4 tai2 wan1, xiao3 xue2 gen1 ri4 ben3 de yi1 yang4 dou1 shi4 liu4 nian2.'"
          :translation="'台湾では、 小学校の期間は日本と同じ6年間です。'"
        />
        <br>
        <p>
          ・漢字
        </p>
        <SentenceFormat
          :sentence="'通常, 相似的漢字有相似的讀法。'"
          :bopomofo="'ㄊㄨㄥ ㄔㄤˊ, ㄒㄧㄤ ㄙˋ ㄉㄜ˙ ㄏㄢˋ ㄗˋ ㄧㄡˇ ㄒㄧㄤ ㄙˋ ㄉㄜ˙ ㄉㄨˊ ㄈㄚˇ.'"
          :pinyin="'tong1 chang2, xiang1 si4 de han4 zi4 you3 xiang1 si4 de du2 fa3.'"
          :translation="'通常、 似た漢字は似た読み方をします。'"
        />
        <br>
        <p>
          ・高中
        </p>
        <SentenceFormat
          :sentence="'附近有高中， 所以在商店賣的東西都很便宜。'"
          :bopomofo="'ㄈㄨˋ ㄐㄧㄣˋ ㄧㄡˇ ㄍㄠ ㄓㄨㄥ， ㄙㄨㄛˇ ㄧˇ ㄗㄞˋ ㄕㄤ ㄉㄧㄢˋ ㄇㄞˋ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ ㄉㄡ ㄏㄣˇ ㄆㄧㄢˊ ㄧˊ.'"
          :pinyin="'fu4 jin4 you3 gao1 zhong1, suo3 yi3 zai4 shang1 dian4 mai4 de dong1 xi1 dou1 hen3 pian2 yi2.'"
          :translation="'近くに高校があるので、 店頭で売られているものはどれもとても安いです。'"
        />
        <br>
        <p>
          ・過
        </p>
        <SentenceFormat
          :sentence="'我不記得是否我吃過這家店的香腸。'"
          :bopomofo="'ㄨㄛˇ ㄅㄨˋ ㄐㄧˋ ㄉㄜ˙ ㄕˋ ㄈㄡˇ ㄨㄛˇ ㄔ ㄍㄨㄛˋ ㄓㄜˋ ㄐㄧㄚ ㄉㄧㄢˋ ㄉㄜ˙ ㄒㄧㄤ ㄔㄤˊ.'"
          :pinyin="'wo3 bu2 ji4 de shi4 fou3 wo3 chi1 guo4 zhe4 jia1 dian4 de xiang1 chang2.'"
          :translation="'このお店のソーセージを食べた事があるかどうか覚えていません。'"
        />
        <br>
        <p>
          ・才
        </p>
        <SentenceFormat
          :sentence="'你可能不相信, 我才喝了一瓶啤酒而已。'"
          :bopomofo="'ㄋㄧˇ ㄎㄜˇ ㄋㄥˊ ㄅㄨˋ ㄒㄧㄤ ㄒㄧㄣˋ, ㄨㄛˇ ㄘㄞˊ ㄏㄜ ㄌㄜ˙ ㄧ ㄆㄧㄥˊ ㄆㄧˊ ㄐㄧㄡˇ ㄦˊ ㄧˇ.'"
          :pinyin="'ni3 ke3 neng2 bu4 xiang1 xin4, wo3 cai2 he1 le yi1 ping2 pi2 jiu3 er2 yi3.'"
          :translation="'あなたは信じないと思いますが、 私はビールを一本飲んだだけです。'"
          :memo="'※「才(ㄘㄞˊ/cai2)～而已(ㄦˊ ㄧˇ/er2 yi3)」で「～しただけ」。'"
        />
        <br>
        <p>
          ・說話
        </p>
        <SentenceFormat
          :sentence="'因為太閑了， 我嘗試跟貓說話了。'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄊㄞˋ ㄒㄧㄢˊ ㄌㄜ˙， ㄨㄛˇ ㄔㄤˊ ㄕˋ ㄍㄣ ㄇㄠ ㄕㄨㄛ ㄏㄨㄚˋ ㄌㄜ˙.'"
          :pinyin="'yin1 wei4 tai4 xian2 le, wo3 chang2 shi4 gen1 mao1 shuo1 hua4 le.'"
          :translation="'あまりにも暇だったので、 猫と話そうと試みました。'"
        />
        <br>
        <p>
          ・不夠
        </p>
        <SentenceFormat
          :sentence="'如果你的飯不夠，可以再來一碗。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄉㄜ˙ ㄈㄢˋ ㄅㄨˊ ㄍㄡˋ， ㄎㄜˇ ㄧˇ ㄗㄞˋ ㄌㄞˊ ㄧ ㄨㄢˇ.'"
          :pinyin="'ru2 guo3 ni3 de fan4 bu2 gou4, ke3 yi3 zai4 lai2 yi1 wan3.'"
          :translation="'ご飯が足りなければ、 お代わりできます。'"
          :memo="'※「再來一碗(ㄗㄞˋ ㄌㄞˊ ㄧ ㄨㄢˇ/zai4 lai2 yi1 wan3)」＝「もう一杯、 お代わり」。'"
        />
        <br>
        <p>
          ・流利
        </p>
        <SentenceFormat
          :sentence="'她的英語說得很流利。'"
          :bopomofo="'ㄊㄚ ㄉㄜ˙ ㄧㄥ ㄩˇ ㄕㄨㄛ ㄉㄜ˙ ㄏㄣˇ ㄌㄧㄡˊ ㄌㄧˋ.'"
          :pinyin="'ta1 de ying1 yu3 shuo1 de hen3 liu2 li4.'"
          :translation="'彼女の英語はとても流暢です。'"
        />
        <br>
        <p>
          ・雖然
        </p>
        <SentenceFormat
          :sentence="'雖然他有很多錢， 他的吃相不怎麼優雅。'"
          :bopomofo="'ㄙㄨㄟ ㄖㄢˊ ㄊㄚ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄑㄧㄢˊ， ㄊㄚ ㄉㄜ˙ ㄔ ㄒㄧㄤˋ ㄅㄨˋ ㄗㄣˇ ㄇㄜ˙ ㄧㄡ ㄧㄚˇ.'"
          :pinyin="'sui1 ran2 ta1 you3 hen3 duo1 qian2, ta1 de chi1 xiang4 bu4 zen3 me you1 ya3.'"
          :translation="'彼はお金をたくさん持っていますが、 食べ方はエレガントではありません。'"
          :memo="'※ここでの「怎麼(ㄗㄣˇ ㄇㄜ˙/zen3 me)」は「あんまり」の意。'"
        />
        <br>
        <p>
          ・環境
        </p>
        <SentenceFormat
          :sentence="'問題不是在環境， 你也必須改變才行。'"
          :bopomofo="'ㄨㄣˋ ㄊㄧˊ ㄅㄨˊ ㄕˋ ㄗㄞˋ ㄏㄨㄢˊ ㄐㄧㄥˋ， ㄋㄧˇ ㄧㄝˇ ㄅㄧˋ ㄒㄩ ㄍㄞˇ ㄅㄧㄢˋ ㄘㄞˊ ㄒㄧㄥˊ.'"
          :pinyin="'wen4 ti2 bu2 shi4 zai4 huan2 jing4, ni3 ye3 bi4 xu1 gai3 bian4 cai2 xing2.'"
          :translation="'問題は環境にあるのではなく、 あなたも変わる必要があります。'"
          :memo="'※「才行(ㄘㄞˊ ㄒㄧㄥˊ/cai2 xing2)」は「才可以(ㄘㄞˊ ㄎㄜˇ ㄧˇ/cai2 ke3 yi3)」とする事もでき、 「～でなければいけない」。'"
        />
        <br>
        <p>
          ・同意
        </p>
        <SentenceFormat
          :sentence="'我不同意我們從下個星期早一點上班。'"
          :bopomofo="'ㄨㄛˇ ㄅㄨˋ ㄊㄨㄥˊ ㄧˋ ㄨㄛˇ ㄇㄣ˙ ㄘㄨㄥˊ ㄒㄧㄚˋ ㄍㄜˋ ㄒㄧㄥ ㄑㄧˊ ㄗㄠˇ ㄧˋ ㄉㄧㄢˇ ㄕㄤˋ ㄅㄢ.'"
          :pinyin="'wo3 bu4 tong2 yi4 wo3 men cong2 xia4 ge4 xing1 qi2 zao3 yi1 dian3 shang4 ban1.'"
          :translation="'来週から早めに仕事に行く事には同意しません。'"
          :memo="'「同意(ㄊㄨㄥˊ ㄧˋ/tong2 yi4)」＝「贊成(ㄗㄢˋ ㄔㄥˊ/zan4 cheng2)」。'"
        />
        <br>
        <p>
          ・報紙
        </p>
        <SentenceFormat
          :sentence="'報紙說, 蘋果的價格會更高。'"
          :bopomofo="'ㄅㄠˋ ㄓˇ ㄕㄨㄛ, ㄆㄧㄥˊ ㄍㄨㄛˇ ㄉㄜ˙ ㄐㄧㄚˋ ㄍㄜˊ ㄏㄨㄟˋ ㄍㄥˋ ㄍㄠ.'"
          :pinyin="'bao4 zhi3 shuo1, ping2 guo3 de jia4 ge2 hui4 geng4 gao1.'"
          :translation="'新聞によると、 林檎の価格が高くなるらしい。'"
        />
        <br>
        <p>
          ・麵包
        </p>
        <SentenceFormat
          :sentence="'一般來說亞洲的麵包比歐洲的軟。'"
          :bopomofo="'ㄧˋ ㄅㄢ ㄌㄞˊ ㄕㄨㄛ ㄧㄚˋ ㄓㄡ ㄉㄜ˙ ㄇㄧㄢˋ ㄅㄠ ㄅㄧˇ ㄡ ㄓㄡ ㄉㄜ˙ ㄖㄨㄢˇ.'"
          :pinyin="'yi1 ban1 lai2 shuo1 ya4 zhou1 de mian4 bao1 bi3 ou1 zhou1 de ruan3.'"
          :translation="'一般的に、 アジアのパンはヨーロッパのパンよりも柔らかいです。'"
        />
        <br>
        <p>
          ・演講
        </p>
        <SentenceFormat
          :sentence="'聽演講的時候， 手機得調為靜音模式。'"
          :bopomofo="'ㄊㄧㄥ ㄧㄢˇ ㄐㄧㄤˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ， ㄕㄡˇ ㄐㄧ ㄉㄟˇ ㄊㄧㄠˊ ㄨㄟˊ ㄐㄧㄥˋ ㄧㄣ ㄇㄛˊ ㄕˋ.'"
          :pinyin="'ting1 yan3 jiang3 de shi2 hou4, shou3 ji1 dei3 tiao2 wei2 jing4 yin1 mo2 shi4.'"
          :translation="'講義を聞くときは、 携帯をマナーモードに設定する必要があります。'"
        />
        <br>
        <p>
          ・噢
        </p>
        <SentenceFormat
          :sentence="'噢， 我忘記了確認終點站在哪裡。'"
          :bopomofo="'ㄛˋ， ㄨㄛˇ ㄨㄤˋ ㄐㄧˋ ㄌㄜ˙ ㄑㄩㄝˋ ㄖㄣˋ ㄓㄨㄥ ㄉㄧㄢˇ ㄓㄢˋ ㄗㄞˋ ㄋㄚˇ ㄌㄧˇ.'"
          :pinyin="'o4, wo3 wang4 ji4 le que4 ren4 zhong1 dian3 zhan4 zai4 na3 li3.'"
          :translation="'ああ、 終点がどこにあるか確認するのを忘れてしまいました。'"
        />
        <br>
        <p>
          ・活動中心
        </p>
        <SentenceFormat
          :sentence="'這個地區有老人的活動中心。'"
          :bopomofo="'ㄓㄜˋ ㄍㄜˋ ㄉㄧˋ ㄑㄩ ㄧㄡˇ ㄌㄠˇ ㄖㄣˊ ㄉㄜ˙ ㄏㄨㄛˊ ㄉㄨㄥˋ ㄓㄨㄥ ㄒㄧㄣ.'"
          :pinyin="'zhe4 ge4 di4 qu1 you3 lao3 ren2 de huo2 dong4 zhong1 xin1.'"
          :translation="'この地域にはお年寄り向けの活動センター/公民館があります。'"
        />
        <br>
        <p>
          ・想起來
        </p>
        <SentenceFormat
          :sentence="'他想起今天的打掃是輪到他來了。'"
          :bopomofo="'ㄊㄚ ㄒㄧㄤˇ ㄑㄧˇ ㄐㄧㄣ ㄊㄧㄢ ㄉㄜ˙ ㄉㄚˇ ㄙㄠˇ ㄕˋ ㄌㄨㄣˊ ㄉㄠˋ ㄊㄚ ㄌㄞˊ ㄌㄜ˙.'"
          :pinyin="'ta1 xiang3 qi3 jin1 tian1 de da3 sao3 shi4 lun2 dao4 ta1 lai2 le.'"
          :translation="'彼は今日の掃除が彼の番であることを思い出しました。'"
          :memo="'※想起＋O(目的語)＋來。 例：「想起他的名字來了(ㄒㄧㄤˇ ㄑㄧˇ ㄊㄚ ㄉㄜ˙ ㄇㄧㄥˊ ㄗˋ ㄌㄞˊ ㄌㄜ˙/xiang3 qi3 ta1 de ming2 zi4 lai2 le)＝彼の名前を思い出した」。'"
        />
        <br>
        <p>
          ・選
        </p>
        <SentenceFormat
          :sentence="'他選的蔬菜是半價。'"
          :bopomofo="'ㄊㄚ ㄒㄩㄢˇ ㄉㄜ˙ ㄕㄨ ㄘㄞˋ ㄕˋ ㄅㄢˋ ㄐㄧㄚˋ.'"
          :pinyin="'ta1 xuan3 de shu1 cai4 shi4 ban4 jia4.'"
          :translation="'彼が選んだ野菜は半額でした。'"
          :memo="'※「半額」 → 「半價(ㄅㄢˋ ㄐㄧㄚˋ/ban4 jia4)」＝「價格的一半(ㄐㄧㄚˋ ㄍㄜˊ ㄉㄜ˙ ㄧ ㄅㄢˋ/jia4 ge2 de yi1 ban4)」。'"
        />
        <br>
        <p>
          ・作業
        </p>
        <SentenceFormat
          :sentence="'兒子不想做作業， 所以告訴媽媽他有頭痛。'"
          :bopomofo="'ㄦˊ ㄗ˙ ㄅㄨˋ ㄒㄧㄤˇ ㄗㄨㄛˋ ㄗㄨㄛˋ ㄧㄝˋ， ㄙㄨㄛˇ ㄧˇ ㄍㄠˋ ㄙㄨˋ ㄇㄚ ㄇㄚ ㄊㄚ ㄧㄡˇ ㄊㄡˊ ㄊㄨㄥˋ.'"
          :pinyin="'er2 zi3 bu4 xiang3 zuo4 zuo4 ye4, suo3 yi3 gao4 su4 ma1 ma1 ta1 you3 tou2 tong4.'"
          :translation="'息子は宿題をしたくないので、 お母さんに頭が痛いと言いました。'"
        />
        <br>
        <p>
          ・練習
        </p>
        <SentenceFormat
          :sentence="'你一陣子不練習外國語言， 就會忘記發音了。'"
          :bopomofo="'ㄋㄧˇ ㄧ ㄓㄣˋ ㄗ˙ ㄅㄨˊ ㄌㄧㄢˋ ㄒㄧˊ ㄨㄞˋ ㄍㄨㄛˊ ㄩˇ ㄧㄢˊ， ㄐㄧㄡˋ ㄨㄤˋ ㄐㄧˋ ㄈㄚ ㄧㄣ ㄌㄜ˙.'"
          :pinyin="'ni3 yi1 zhen4 zi bu2 lian4 xi2 wai4 guo2 yu3 yan2, jiu4 wang4 ji4 fa1 yin1 le.'"
          :translation="'しばらく外国語を練習しないでいると、 すぐ発音を忘れてしまいます。'"
        />
        <br>
        <p>
          ・半夜
        </p>
        <SentenceFormat
          :sentence="'我玩了線上遊戲很久了， 剛剛意識到已經半夜了。'"
          :bopomofo="'ㄨㄛˇ ㄨㄢˊ ㄌㄜ˙ ㄒㄧㄢˋ ㄕㄤˋ ㄧㄡˊ ㄒㄧˋ ㄏㄣˇ ㄐㄧㄡˇ ㄌㄜ˙， ㄍㄤ ㄍㄤ ㄧˋ ㄕˊ ㄉㄠˋ ㄧˇ ㄐㄧㄥ ㄅㄢˋ ㄧㄝˋ ㄌㄜ˙.'"
          :pinyin="'wo3 wan2 le xian4 shang4 you2 xi4 hen3 jiu3 le, gang1 gang1 yi4 shi2 dao4 yi3 jing1 ban4 ye4 le.'"
          :translation="'長い時間オンラインゲームをしていて、 たった今もう真夜中である事に気が付きました。'"
          :memo="'※「気が付く」 → 「意識到( ㄧˋ ㄕˊ ㄉㄠˋ/yi4 shi2 dao4)」＝「發現(ㄈㄚ ㄒㄧㄢˋ/fa1 xian4)」。'"
        />
        <br>
        <p>
          ・高興
        </p>
        <SentenceFormat
          :sentence="'狗狗得到骨頭的時候， 看起來很高興。'"
          :bopomofo="'ㄍㄡˇ ㄍㄡˇ ㄉㄜˊ ㄉㄠˋ ㄍㄨˊ ㄊㄡ˙ ㄉㄜ˙ ㄕˊ ㄏㄡˋ， ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄏㄣˇ ㄍㄠ ㄒㄧㄥˋ.'"
          :pinyin="'gou3 gou3 de2 dao4 gu3 tou2 de shi2 hou4, kan4 qi3 lai2 hen3 gao1 xing4.'"
          :translation="'骨を手に入れると、 犬はとても嬉しそうです。'"
        />
        <br>
        <p>
          ・平常
        </p>
        <SentenceFormat
          :sentence="'平常那家快餐店早上最忙。'"
          :bopomofo="'ㄆㄧㄥˊ ㄔㄤˊ ㄋㄚˋ ㄐㄧㄚ ㄎㄨㄞˋ ㄘㄢ ㄉㄧㄢˋ ㄗㄠˇ ㄕㄤˋ ㄗㄨㄟˋ ㄇㄤˊ.'"
          :pinyin="'ping2 chang2 na4 jia1 kuai4 can1 dian4 zao3 shang4 zui4 mang2.'"
          :translation="'通常、 あのファーストフード店は朝が最も忙しいです。'"
        />
        <br>
        <p>
          ・爬山
        </p>
        <SentenceFormat
          :sentence="'我想體驗爬山， 但是不喜歡滿頭大汗。'"
          :bopomofo="'ㄨㄛˇ ㄒㄧㄤˇ ㄊㄧˇ ㄧㄢˋ ㄆㄚˊ ㄕㄢ， ㄉㄢˋ ㄕˋ ㄅㄨˋ ㄒㄧˇ ㄏㄨㄢ ㄇㄢˇ ㄊㄡˊ ㄉㄚˋ ㄏㄢˋ.'"
          :pinyin="'wo3 xiang3 ti3 yan4 pa2 shan1, dan4 shi4 bu4 xi3 huan1 man3 tou2 da4 han4.'"
          :translation="'登山を体験してみたいのですが、 汗だくになるのは好きではありません。'"
        />
        <br>
        <p>
          ・認識
        </p>
        <SentenceFormat
          :sentence="'因為我大學畢業後就進入了公司， 所以我認識老闆很久了。'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄨㄛˇ ㄉㄚˋ ㄒㄩㄝˊ ㄅㄧˋ ㄧㄝˋ ㄏㄡˋ ㄐㄧㄡˋ ㄐㄧㄣˋ ㄖㄨˋ ㄌㄜ˙ ㄍㄨㄥ ㄙ， ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄖㄣˋ ㄕˋ ㄌㄠˇ ㄅㄢˇ ㄏㄣˇ ㄐㄧㄡˇ ㄌㄜ˙.'"
          :pinyin="'yin1 wei4 wo3 da4 xue2 bi4 ye4 hou4 jiu4 jin4 ru4 le gong1 si1, suo3 yi3 wo3 ren4 shi4 lao3 ban3 hen3 jiu3 le.'"
          :translation="'大学を卒業した後すぐに入社したので、 社長の事は長い間知っています。'"
        />
        <br>
        <p>
          ・聊天
        </p>
        <SentenceFormat
          :sentence="'小鳥們看起來一起享受聊天。'"
          :bopomofo="'ㄒㄧㄠˇ ㄋㄧㄠˇ ㄇㄣ˙ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄧˋ ㄑㄧˇ ㄒㄧㄤˇ ㄕㄡˋ ㄌㄧㄠˊ ㄊㄧㄢ.'"
          :pinyin="'xiao3 niao3 men kan4 qi3 lai2 yi1 qi3 xiang3 shou4 liao2 tian1.'"
          :translation="'鳥たちは一緒におしゃべりを楽しんでいるようです。'"
        />
        <br>
        <p>
          ・文化
        </p>
        <SentenceFormat
          :sentence="'有時候, 接受不同的文化很難。'"
          :bopomofo="'ㄧㄡˇ ㄕˊ ㄏㄡˋ, ㄐㄧㄝ ㄕㄡˋ ㄅㄨˋ ㄊㄨㄥˊ ㄉㄜ˙ ㄨㄣˊ ㄏㄨㄚˋ ㄏㄣˇ ㄋㄢˊ.'"
          :pinyin="'you3 shi2 hou4, jie1 shou4 bu4 tong2 de wen2 hua4 hen3 nan2.'"
          :translation="'時に、 異なる文化を受け入れる事は難しい。'"
        />
        <br>
        <p>
          ・廣告
        </p>
        <SentenceFormat
          :sentence="'雖然這個網站上的廣告太多， 可是我不想訂閱。'"
          :bopomofo="'ㄙㄨㄟ ㄖㄢˊ ㄓㄜˋ ㄍㄜˋ ㄨㄤˇ ㄓㄢˋ ㄕㄤˋ ㄉㄜ˙ ㄍㄨㄤˇ ㄍㄠˋ ㄊㄞˋ ㄉㄨㄛ， ㄎㄜˇ ㄕˋ ㄨㄛˇ ㄅㄨˋ ㄒㄧㄤˇ ㄉㄧㄥˋ ㄩㄝˋ.'"
          :pinyin="'sui1 ran2 zhe4 ge4 wang3 zhan4 shang4 de guang3 gao4 tai4 duo1, ke3 shi4 wo3 bu4 xiang3 ding4 yue4.'"
          :translation="'このウェブサイトには広告が多すぎますが、 購読はしたくありません。'"
        />
        <br>
        <p>
          ・位
        </p>
        <SentenceFormat
          :sentence="'預約的三位客人還沒到來。'"
          :bopomofo="'ㄩˋ ㄩㄝ ㄉㄜ˙ ㄙㄢ ㄨㄟˋ ㄎㄜˋ ㄖㄣˊ ㄏㄞˊ ㄇㄟˊ ㄉㄠˋ ㄌㄞˊ.'"
          :pinyin="'yu4 yue1 de san1 wei4 ke4 ren2 hai2 mei2 dao4 lai2.'"
          :translation="'予約した三名のお客さんはまだ来ていません。'"
        />
        <br>
        <p>
          ・了解
        </p>
        <SentenceFormat
          :sentence="'他在網路上學了餐桌禮儀， 所以現在了解怎麼吃法國料理。'"
          :bopomofo="'ㄊㄚ ㄗㄞˋ ㄨㄤˇ ㄌㄨˋ ㄕㄤˋ ㄒㄩㄝˊ ㄌㄜ˙ ㄘㄢ ㄓㄨㄛ ㄌㄧˇ ㄧˊ， ㄙㄨㄛˇ ㄧˇ ㄒㄧㄢˋ ㄗㄞˋ ㄌㄧㄠˇ ㄐㄧㄝˇ ㄗㄣˇ ㄇㄜ˙ ㄔ ㄈㄚˇ ㄍㄨㄛˊ ㄌㄧㄠˋ ㄌㄧˇ.'"
          :pinyin="'ta1 zai4 wang3 lu4 shang4 xue2 le can1 zhuo1 li3 yi2, suo3 yi3 xian4 zai4 liao3 jie3 zen3 me chi1 fa3 guo2 liao4 li3.'"
          :translation="'彼はインターネットでテーブルマナーを学んだので、 今ではフランス料理の食べ方が分かります。'"
        />
        <br>
        <p>
          ・生活
        </p>
        <SentenceFormat
          :sentence="'可以一個人住， 但是養貓會讓你的生活更快樂。'"
          :bopomofo="'ㄎㄜˇ ㄧˇ ㄧˊ ㄍㄜ˙ ㄖㄣˊ ㄓㄨˋ， ㄉㄢˋ ㄕˋ ㄧㄤˇ ㄇㄠ ㄏㄨㄟˋ ㄖㄤˋ ㄋㄧˇ ㄉㄜ˙ ㄕㄥ ㄏㄨㄛˊ ㄍㄥˋ ㄎㄨㄞˋ ㄌㄜˋ.'"
          :pinyin="'ke3 yi3 yi1 ge4 ren2 zhu4, dan4 shi4 yang3 mao1 hui4 rang4 ni3 de sheng1 huo2 geng4 kuai4 le4.'"
          :translation="'一人で暮らすこともできますが、 猫を飼えば生活がもっと楽しくなります。'"
        />
        <br>
        <p>
          ・陽明山
        </p>
        <SentenceFormat
          :sentence="'陽明山是很潮濕的， 常常下起霧來。'"
          :bopomofo="'ㄧㄤˊ ㄇㄧㄥˊ ㄕㄢ ㄕˋ ㄏㄣˇ ㄔㄠˊ ㄕ ㄉㄜ˙， ㄔㄤˊ ㄔㄤˊ ㄒㄧㄚˋ ㄑㄧˇ ㄨˋ ㄌㄞˊ.'"
          :pinyin="'yang2 ming2 shan1 shi4 hen3 chao2 shi1 de, chang2 chang2 xia4 qi3 wu4 lai2.'"
          :translation="'陽明山非常に湿気が多いので、 霧が発生することがよくあります。'"
          :memo="'※「下起霧來(ㄒㄧㄚˋ ㄑㄧˇ ㄨˋ ㄌㄞˊ/xia4 qi3 wu4 lai2)＝霧が出る」、 「下起雨來(ㄒㄧㄚˋ ㄑㄧˇ ㄩˇ ㄌㄞˊ/xia4 qi3 yu3 lai2)＝雨が降る」。'"
        />
        <br>
        <p>
          ・外國人
        </p>
        <SentenceFormat
          :sentence="'外國人一定得帶著護照。'"
          :bopomofo="'ㄨㄞˋ ㄍㄨㄛˊ ㄖㄣˊ ㄧˊ ㄉㄧㄥˋ ㄉㄟˇ ㄉㄞˋ ㄓㄜ˙ ㄏㄨˋ ㄓㄠˋ.'"
          :pinyin="'wai4 guo2 ren2 yi1 ding4 dei3 dai4 zhe hu4 zhao4.'"
          :translation="'外国人はパスポートを持ち歩く必要があります。'"
        />
        <br>
        <p>
          ・一些
        </p>
        <SentenceFormat
          :sentence="'星期五， 買一點貴的紅酒讓我小確幸一下'"
          :bopomofo="'ㄒㄧㄥ ㄑㄧˊ ㄨˇ， ㄇㄞˇ ㄧˋ ㄉㄧㄢˇ ㄍㄨㄟˋ ㄉㄜ˙ ㄏㄨㄥˊ ㄐㄧㄡˇ ㄖㄤˋ ㄨㄛˇ ㄒㄧㄠˇ ㄑㄩㄝˋ ㄒㄧㄥˋ ㄧ ㄒㄧㄚˋ.'"
          :pinyin="'xing1 qi2 wu3, mai3 yi1 dian3 gui4 de hong2 jiu3 rang4 wo3 xiao3 que4 xing4 yi1 xia4.'"
          :translation="'金曜日に、 少し高価な赤ワインを買う事で少し幸せな時間が過ごせます。'"
          :memo="'※小さな幸せ → 「小確幸」＝「幸福的時間(ㄒㄧㄥˋ ㄈㄨˊ ㄉㄜ˙ ㄕˊ ㄐㄧㄢ/xing4 fu2 de shi2 jian1)」。'"
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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第3章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第3章で登場する新単語を使った例文や気づいた事など' }
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
