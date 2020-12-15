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
          當代中文課程課2・第5章
        </h1>
        <p>
          【新単語+例文】
        </p>
        <p>
          ・喜酒
        </p>
        <SentenceFormat
          :sentence="'她看起來今天喝喜酒, 穿得漂漂亮亮的。'"
          :bopomofo="'ㄊㄚ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄐㄧㄣ ㄊㄧㄢ ㄏㄜ ㄒㄧˇ ㄐㄧㄡˇ, ㄔㄨㄢ ㄉㄜ˙ ㄆㄧㄠ ㄆㄧㄠ ㄌㄧㄤˋ ㄌㄧㄤˋ ㄉㄜ˙.'"
          :pinyin="'ta1 kan4 qi3 lai2 jin1 tian1 he1 xi3 jiu3, chuan1 de piao4 piao4 liang4 liang4 de.'"
          :translation="'彼女は今日結婚式に参列するようで、 綺麗に着飾っています。'"
        />
        <br>
        <p>
          ・恭喜
        </p>
        <SentenceFormat
          :sentence="'恭喜, 我聽過你家貓生寶貝。'"
          :bopomofo="'ㄍㄨㄥ ㄒㄧˇ, ㄨㄛˇ ㄊㄧㄥ ㄍㄨㄛˋ ㄋㄧˇ ㄐㄧㄚ ㄇㄠ ㄕㄥ ㄅㄠˇ ㄅㄟˋ.'"
          :pinyin="'gong1 xi3, wo3 ting1 guo4 ni3 jia1 mao1 sheng1 bao3 bei4.'"
          :translation="'おめでとうございます、 あなたの家の猫が赤ちゃんを産んだと聞きました。'"
        />
        <br>
        <p>
          ・新娘
        </p>
        <SentenceFormat
          :sentence="'新娘打算幾次換衣服?'"
          :bopomofo="'ㄒㄧㄣ ㄋㄧㄤˊ ㄉㄚˇ ㄙㄨㄢˋ ㄐㄧˇ ㄘˋ ㄏㄨㄢˋ ㄧ ㄈㄨˊ?'"
          :pinyin="'xin1 niang2 da3 suan4 ji3 ci4 huan4 yi1 fu2?'"
          :translation="'花嫁は何回着替える予定ですか?'"
        />
        <br>
        <p>
          ・參加
        </p>
        <SentenceFormat
          :sentence="'兩百多人會參加這次比賽。'"
          :bopomofo="'ㄌㄧㄤˇ ㄅㄞˇ ㄉㄨㄛ ㄖㄣˊ ㄏㄨㄟˋ ㄘㄢ ㄐㄧㄚ ㄓㄜˋ ㄘˋ ㄅㄧˇ ㄙㄞˋ.'"
          :pinyin="'liang3 bai3 duo1 ren2 hui4 can1 jia1 zhe4 ci4 bi3 sai4.'"
          :translation="'この大会には200人以上が参加します。'"
        />
        <br>
        <p>
          ・婚禮
        </p>
        <SentenceFormat
          :sentence="'參加婚禮前你應該去整理頭髮。'"
          :bopomofo="'ㄘㄢ ㄐㄧㄚ ㄏㄨㄣ ㄌㄧˇ ㄑㄧㄢˊ ㄋㄧˇ ㄧㄥ ㄍㄞ ㄑㄩˋ ㄓㄥˇ ㄌㄧˇ ㄊㄡˊ ㄈㄚˇ.'"
          :pinyin="'can1 jia1 hun1 li3 qian2 ni3 ying1 gai1 qu4 zheng3 li3 tou2 fa3.'"
          :translation="'結婚式に出席する前にあなたは髪を切りに行った方がいいです。'"
        />
        <br>
        <p>
          ・西裝
        </p>
        <SentenceFormat
          :sentence="'西裝不能在家洗, 你得去洗衣房。'"
          :bopomofo="'ㄒㄧ ㄓㄨㄤ ㄅㄨˋ ㄋㄥˊ ㄗㄞˋ ㄐㄧㄚ ㄒㄧˇ, ㄋㄧˇ ㄉㄟˇ ㄑㄩˋ ㄒㄧˇ ㄧ ㄈㄤˊ.'"
          :pinyin="'xi1 zhuang1 bu4 neng2 zai4 jia1 xi3, ni3 dei3 qu4 xi3 yi1 fang2.'"
          :translation="'スーツは家で洗えないので、 ランドリーに行かないといけません。'"
        />
        <br>
        <p>
          ・正式
        </p>
        <SentenceFormat
          :sentence="'這個派對的氣氛休閒, 不必穿太正式了。'"
          :bopomofo="'ㄓㄜˋ ㄍㄜˋ ㄆㄞˋ ㄉㄨㄟˋ ㄉㄜ˙ ㄑㄧˋ ㄈㄣ ㄒㄧㄡ ㄒㄧㄢˊ, ㄅㄨˊ ㄅㄧˋ ㄔㄨㄢ ㄊㄞˋ ㄓㄥˋ ㄕˋ ㄌㄜ˙.'"
          :pinyin="'zhe4 ge4 pai4 dui4 de qi4 fen1 xiu1 xian2, bu2 bi4 chuan1 tai4 zheng4 shi4 le.'"
          :translation="'このパーティはカジュアルな雰囲気なので、 フォーマルな服を着る必要はありません。'"
        />
        <br>
        <p>
          ・客人
        </p>
        <SentenceFormat
          :sentence="'在網站上看到廣告的很多客人來了商店。'"
          :bopomofo="'ㄗㄞˋ ㄨㄤˇ ㄓㄢˋ ㄕㄤˋ ㄎㄢˋ ㄉㄠˋ ㄍㄨㄤˇ ㄍㄠˋ ㄉㄜ˙ ㄏㄣˇ ㄉㄨㄛ ㄎㄜˋ ㄖㄣˊ ㄌㄞˊ ㄌㄜ˙ ㄕㄤ ㄉㄧㄢˋ.'"
          :pinyin="'zai4 wang3 zhan4 shang4 kan4 dao4 guang3 gao4 de hen3 duo1 ke4 ren2 lai2 le shang1 dian4.'"
          :translation="'ウェブサイトで広告を見たたくさんお客さんが店に来てくれました。'"
        />
        <br>
        <p>
          ・手
        </p>
        <SentenceFormat
          :sentence="'你要坐巴士的時候, 手得起來。'"
          :bopomofo="'ㄋㄧˇ ㄧㄠˋ ㄗㄨㄛˋ ㄅㄚ ㄕˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ, ㄕㄡˇ ㄉㄟˇ ㄑㄧˇ ㄌㄞˊ.'"
          :pinyin="'ni3 yao4 zuo4 ba1 shi4 de shi2 hou4, shou3 dei3 qi3 lai2.'"
          :translation="'バスに乗りたいときは、手を挙げてください。'"
        />
        <br>
        <p>
          ・照相機
        </p>
        <SentenceFormat
          :sentence="'我打算購買一個新鏡頭來安裝到照相機。'"
          :bopomofo="'ㄨㄛˇ ㄉㄚˇ ㄙㄨㄢˋ ㄍㄡˋ ㄇㄞˇ ㄧˊ ㄍㄜˋ ㄒㄧㄣ ㄐㄧㄥˋ ㄊㄡˊ ㄌㄞˊ ㄢ ㄓㄨㄤ ㄉㄠˋ ㄓㄠˋ ㄒㄧㄤˋ ㄐㄧ.'"
          :pinyin="'wo3 da3 suan4 gou4 mai3 yi1 ge4 xin1 jing4 tou2 lai2 an1 zhuang1 dao4 zhao4 xiang4 ji1.'"
          :translation="'カメラに取り付ける新しいレンズを購入する予定です。'"
        />
        <br>
        <p>
          ・新郎
        </p>
        <SentenceFormat
          :sentence="'其實是, 新郎以前跟別的女人結婚了。'"
          :bopomofo="'ㄑㄧˊ ㄕˊ ㄕˋ, ㄒㄧㄣ ㄌㄤˊ ㄧˇ ㄑㄧㄢˊ ㄍㄣ ㄅㄧㄝˊ ㄉㄜ˙ ㄋㄩˇ ㄖㄣˊ ㄐㄧㄝˊ ㄏㄨㄣ ㄌㄜ˙.'"
          :pinyin="'qi2 shi2 shi4, xin1 lang2 yi3 qian2 gen1 bie2 de nu3 ren2 jie2 hun1 le.'"
          :translation="'実は、 新郎は以前に別の女の人と結婚していました。'"
        />
        <br>
        <p>
          ・站
        </p>
        <SentenceFormat
          :sentence="'剛剛忽然站起來的人是媽媽的老朋友。'"
          :bopomofo="'ㄍㄤ ㄍㄤ ㄏㄨ ㄖㄢˊ ㄓㄢˋ ㄑㄧˇ ㄌㄞˊ ㄉㄜ˙ ㄖㄣˊ ㄕˋ ㄇㄚ ㄇㄚ ㄉㄜ˙ ㄌㄠˇ ㄆㄥˊ ㄧㄡ˙.'"
          :pinyin="'gang1 gang1 hu1 ran2 zhan4 qi3 lai2 de ren2 shi4 ma1 ma1 de lao3 peng2 you3.'"
          :translation="'たった今突然立ち上がった人は、 母の古い友人です。'"
        />
        <br>
        <p>
          ・白
        </p>
        <SentenceFormat
          :sentence="'請你到變白色攪拌蛋清。'"
          :bopomofo="'ㄑㄧㄥˇ ㄋㄧˇ ㄉㄠˋ ㄅㄧㄢˋ ㄅㄞˊ ㄙㄜˋ ㄐㄧㄠˇ ㄅㄢˋ ㄉㄢˋ ㄑㄧㄥ.'"
          :pinyin="'qing3 ni3 dao4 bian4 bai2 se4 jiao3 ban4 dan4 qing1.'"
          :translation="'卵白が白くなるまでかき混ぜてください。'"
        />
        <br>
        <p>
          ・帥
        </p>
        <SentenceFormat
          :sentence="'他很帥， 他的周圍總是有很多女生。'"
          :bopomofo="'ㄊㄚ ㄏㄣˇ ㄕㄨㄞˋ， ㄊㄚ ㄉㄜ˙ ㄓㄡ ㄨㄟˊ ㄗㄨㄥˇ ㄕˋ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄋㄩˇ ㄕㄥ.'"
          :pinyin="'ta1 hen3 shuai4, ta1 de zhou1 wei2 zong3 shi4 you3 hen3 duo1 nu3 sheng1.'"
          :translation="'彼はとてもカッコ良いので、 彼の周りにはいつもたくさんの女の子がいます。'"
        />
        <br>
        <p>
          ・禮服
        </p>
        <SentenceFormat
          :sentence="'完蛋了， 我把肉鬆洒在禮服上了。'"
          :bopomofo="'ㄨㄢˊ ㄉㄢˋ ㄌㄜ˙， ㄨㄛˇ ㄅㄚˇ ㄖㄡˋ ㄙㄨㄥ ㄙㄚˇ ㄗㄞˋ ㄌㄧˇ ㄈㄨˊ ㄕㄤˋ ㄌㄜ˙.'"
          :pinyin="'wan2 dan4 le, wo3 ba3 rou4 song4 sa3 zai4 li3 fu2 shang4 le.'"
          :translation="'大変です、 ドレスの上にでんぶをこぼしてしまいました。'"
        />
        <br>
        <p>
          ・座位
        </p>
        <SentenceFormat
          :sentence="'他們的關係很差， 所以讓他們坐分開的座位。'"
          :bopomofo="'ㄊㄚ ㄇㄣ˙ ㄉㄜ˙ ㄍㄨㄢ ㄒㄧˋ ㄏㄣˇ ㄔㄚ， ㄙㄨㄛˇ ㄧˇ ㄖㄤˋ ㄊㄚ ㄇㄣ˙ ㄗㄨㄛˋ ㄈㄣ ㄎㄞ ㄉㄜ˙ ㄗㄨㄛˋ ㄨㄟˋ.'"
          :pinyin="'ta1 men de guan1 xi4 hen3 cha1, suo3 yi3 rang4 ta1 men zuo4 fen1 kai1 de zuo4 wei4.'"
          :translation="'彼らはとても仲が悪いので、 離れた席に座らせましょう。'"
        />
        <br>
        <p>
          ・看起來
        </p>
        <SentenceFormat
          :sentence="'圓圓的滿月看起來好吃的包子。'"
          :bopomofo="'ㄩㄢˊ ㄩㄢˊ ㄉㄜ˙ ㄇㄢˇ ㄩㄝˋ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄏㄠˇ ㄔ ㄉㄜ˙ ㄅㄠ ㄗ˙.'"
          :pinyin="'yuan2 yuan2 de man3 yue4 kan4 qi3 lai2 hao3 chi1 de bao1 zi.'"
          :translation="'真ん丸な満月は美味しい肉まんのように見えます。'"
        />
        <br>
        <p>
          ・結婚
        </p>
        <SentenceFormat
          :sentence="'如果你不結婚， 就不必離婚。'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄅㄨˋ ㄐㄧㄝˊ ㄏㄨㄣ， ㄐㄧㄡˋ ㄅㄨˊ ㄅㄧˋ ㄌㄧˊ ㄏㄨㄣ.'"
          :pinyin="'ru2 guo3 ni3 bu4 jie2 hun1, jiu4 bu2 bi4 li2 hun1.'"
          :translation="'結婚しなければ、 離婚しなくて済みます。'"
        />
        <br>
        <p>
          ・日子
        </p>
        <SentenceFormat
          :sentence="'發薪日是對每各人很高興的日子。'"
          :bopomofo="'ㄈㄚ ㄒㄧㄣ ㄖˋ ㄕˋ ㄉㄨㄟˋ ㄇㄟˇ ㄍㄜˋ ㄖㄣˊ ㄏㄣˇ ㄍㄠ ㄒㄧㄥˋ ㄉㄜ˙ ㄖˋ ㄗ˙.'"
          :pinyin="'fa1 xin1 ri4 shi4 dui4 mei3 ge4 ren2 hen3 gao1 xing1 de ri4 zi.'"
          :translation="'給料日は誰にとっても幸せな日です。'"
        />
        <br>
        <p>
          ・親戚
        </p>
        <SentenceFormat
          :sentence="'我跟親戚只在婚禮和葬禮上見面。'"
          :bopomofo="'ㄨㄛˇ ㄍㄣ ㄑㄧㄣ ㄑㄧ ㄓ ㄗㄞˋ ㄏㄨㄣ ㄌㄧˇ ㄏㄢˋ ㄗㄤˋ ㄌㄧˇ ㄕㄤˋ ㄐㄧㄢˋ ㄇㄧㄢˋ.'"
          :pinyin="'wo3 gen1 qin1 qi1 zhi1 zai4 hun1 li3 han4 zang4 li3 shang4 jian4 mian4.'"
          :translation="'親戚とは、 結婚式かお葬式でしか会いません。'"
        />
        <br>
        <p>
          ・熱鬧
        </p>
        <SentenceFormat
          :sentence="'這個城市今天有個節日, 氣氛很熱鬧。'"
          :bopomofo="'ㄓㄜˋ ㄍㄜˋ ㄔㄥˊ ㄕˋ ㄐㄧㄣ ㄊㄧㄢ ㄧㄡˇ ㄍㄜˋ ㄐㄧㄝˊ ㄖˋ, ㄑㄧˋ ㄈㄣ ㄏㄣˇ ㄖㄜˋ ㄋㄠˋ.'"
          :pinyin="'zhe4 ge4 cheng2 shi4 jin1 tian1 you3 ge4 jie2 ri4, qi4 fen1 hen3 re4 nao4.'"
          :translation="'今日はこの街でお祭りがあるので、 とても賑やかな雰囲気です。'"
        />
        <br>
        <p>
          ・慶祝
        </p>
        <SentenceFormat
          :sentence="'昨天我去了慶祝找到工作的朋友。'"
          :bopomofo="'ㄗㄨㄛˊ ㄊㄧㄢ ㄨㄛˇ ㄑㄩˋ ㄌㄜ˙ ㄑㄧㄥˋ ㄓㄨˋ ㄓㄠˇ ㄉㄠˋ ㄍㄨㄥ ㄗㄨㄛˋ ㄉㄜ˙ ㄆㄥˊ ㄧㄡˇ.'"
          :pinyin="'zuo2 tian1 wo3 qu4 le qing4 zhu4 zhao3 dao4 gong1 zuo4 de peng2 you3.'"
          :translation="'昨日、 就職した友達をお祝いしに行きました。'"
        />
        <br>
        <p>
          ・件
        </p>
        <SentenceFormat
          :sentence="'最近我有一件不幸的事, 吃牡蠣後吃壞了肚子。'"
          :bopomofo="'ㄗㄨㄟˋ ㄐㄧㄣˋ ㄨㄛˇ ㄧㄡˇ ㄧ ㄐㄧㄢˋ ㄅㄨˊ ㄒㄧㄥˋ ㄉㄜ˙ ㄕˋ, ㄔ ㄇㄨˇ ㄌㄧˋ ㄏㄡˋ ㄔ ㄏㄨㄞˋ ㄌㄜ˙ ㄉㄨˇ ㄗ˙.'"
          :pinyin="'zui4 jin4 wo3 you3 yi1 jian4 bu2 xing4 de shi4, chi1 mu3 li4 hou4 chi1 huai4 le du4 zi3.'"
          :translation="'最近不幸な事がありまして、 牡蠣を食べてお腹を壊してしまいました。'"
        />
        <br>
        <p>
          ・喜事
        </p>
        <SentenceFormat
          :sentence="'這個月有很多喜事, 放進紅包的錢不夠。'"
          :bopomofo="'ㄓㄜˋ ㄍㄜˋ ㄩㄝˋ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄒㄧˇ ㄕˋ, ㄈㄤˋ ㄐㄧㄣˋ ㄏㄨㄥˊ ㄅㄠ ㄉㄜ˙ ㄑㄧㄢˊ ㄅㄨˊ ㄍㄡˋ.'"
          :pinyin="'zhe4 ge4 yue4 you3 hen3 duo1 xi3 shi4, fang4 jin4 hong2 bao1 de qian2 bu2 gou4.'"
          :translation="'今月は祝い事がたくさんあるので、 赤い封筒に入れるお金が足りません。'"
        />
        <br>
        <p>
          ・請客
        </p>
        <SentenceFormat
          :sentence="'為了請客, 請你從客廳把你的東西拿出來。'"
          :bopomofo="'ㄨㄟˋ ㄌㄜ˙ ㄑㄧㄥˇ ㄎㄜˋ, ㄑㄧㄥˇ ㄋㄧˇ ㄘㄨㄥˊ ㄎㄜˋ ㄊㄧㄥ ㄅㄚˇ ㄋㄧˇ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙ ㄋㄚˊ ㄔㄨ ㄌㄞˊ.'"
          :pinyin="'wei4 le qing3 ke4, qing3 ni3 cong2 ke4 ting1 ba3 ni3 de dong1 xi na2 chu1 lai2.'"
          :translation="'お客さんを迎えるために、 居間からあなたの荷物を出してください。'"
        />
        <br>
        <p>
          ・紅包
        </p>
        <SentenceFormat
          :sentence="'你不應該撿起在路上掉落的紅包。'"
          :bopomofo="'ㄋㄧˇ ㄅㄨˋ ㄧㄥ ㄍㄞ ㄐㄧㄢˇ ㄑㄧˇ ㄗㄞˋ ㄌㄨˋ ㄕㄤˋ ㄉㄧㄠˋ ㄌㄨㄛˋ ㄉㄜ˙ ㄏㄨㄥˊ ㄅㄠ.'"
          :pinyin="'ni3 bu4 ying1 gai1 jian3 qi3 zai4 lu4 shang4 diao4 luo4 de hong2 bao1.'"
          :translation="'道に落ちている赤い封筒は拾わない方がいいです。'"
        />
        <br>
        <p>
          ・送
        </p>
        <SentenceFormat
          :sentence="'襪子裡有聖誕老人送的禮物。'"
          :bopomofo="'ㄨㄚˋ ㄗ˙ ㄌㄧˇ ㄧㄡˇ ㄕㄥˋ ㄉㄢˋ ㄌㄠˇ ㄖㄣˊ ㄙㄨㄥˋ ㄉㄜ˙ ㄌㄧˇ ㄨˋ.'"
          :pinyin="'wa4 zi li3 you3 sheng4 dan4 lao3 ren2 song4 de li3 wu4.'"
          :translation="'靴下の中には、 サンタクロースのプレゼントが入っています。'"
        />
        <br>
        <p>
          ・新人
        </p>
        <SentenceFormat
          :sentence="'新人們被指教怎麼繼續結婚。'"
          :bopomofo="'ㄒㄧㄣ ㄖㄣˊ ㄇㄣ˙ ㄅㄟˋ ㄓˇ ㄐㄧㄠˋ ㄗㄣˇ ㄇㄜ˙ ㄐㄧˋ ㄒㄩˋ ㄐㄧㄝˊ ㄏㄨㄣ.'"
          :pinyin="'xin1 ren2 men bei4 zhi3 jiao4 zen3 me ji4 xu4 jie2 hun1.'"
          :translation="'新婚さん達はどのように結婚を継続すればよいか教えられました。'"
        />
        <br>
        <p>
          ・喜宴
        </p>
        <SentenceFormat
          :sentence="'因為今天有喜宴, 那個路不能通行。'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄐㄧㄣ ㄊㄧㄢ ㄧㄡˇ ㄒㄧˇ ㄧㄢˋ, ㄋㄚˋ ㄍㄜˋ ㄌㄨˋ ㄅㄨˋ ㄋㄥˊ ㄊㄨㄥ ㄒㄧㄥˊ.'"
          :pinyin="'yin1 wei4 jin1 tian1 you3 xi3 yan4, na4 ge4 lu4 bu4 neng2 tong1 xing2.'"
          :translation="'今日は結婚式の宴会があるので、 あの道は通行できません。'"
        />
        <br>
        <p>
          ・敬酒
        </p>
        <SentenceFormat
          :sentence="'敬酒的時候動力太強了， 我摔碎了杯子。'"
          :bopomofo="'ㄐㄧㄥˋ ㄐㄧㄡˇ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄉㄨㄥˋ ㄌㄧˋ ㄊㄞˋ ㄑㄧㄤˊ ㄌㄜ˙， ㄨㄛˇ ㄕㄨㄞ ㄙㄨㄟˋ ㄌㄜ˙ ㄅㄟ ㄗ˙.'"
          :pinyin="'jing4 jiu3 de shi2 hou4 dong4 li4 tai4 qiang2 le, wo3 shuai1 sui4 le bei1 zi.'"
          :translation="'乾杯の時勢いが良すぎて、 コップを割りました。'"
        />
        <br>
        <p>
          ・大人
        </p>
        <SentenceFormat
          :sentence="'苦甜的葡萄酒是大人的味道。'"
          :bopomofo="'ㄎㄨˇ ㄊㄧㄢˊ ㄉㄜ˙ ㄆㄨˊ ㄊㄠˊ ㄐㄧㄡˇ ㄕˋ ㄉㄚˋ ㄖㄣˊ ㄉㄜ˙ ㄨㄟˋ ㄉㄠˋ.'"
          :pinyin="'ku3 tian2 de pu2 tao2 jiu3 shi4 da4 ren2 de wei4 dao4.'"
          :translation="'ほろ苦いワインは大人の味です。'"
        />
        <br>
        <p>
          ・小孩
        </p>
        <SentenceFormat
          :sentence="'小孩們都有不喜歡吃的食物， 但是番茄醬解決所有的問題。'"
          :bopomofo="'ㄒㄧㄠˇ ㄏㄞˊ ㄇㄣ˙ ㄉㄡ ㄧㄡˇ ㄅㄨˋ ㄒㄧˇ ㄏㄨㄢ ㄔ ㄉㄜ˙ ㄕˊ ㄨˋ， ㄉㄢˋ ㄕˋ ㄈㄢ ㄑㄧㄝˊ ㄐㄧㄤˋ ㄐㄧㄝˇ ㄐㄩㄝˊ ㄙㄨㄛˇ ㄧㄡˇ ㄉㄜ˙ ㄨㄣˋ ㄊㄧˊ.'"
          :pinyin="'xiao3 hai2 men dou1 you3 bu4 xi3 huan1 chi1 de shi2 wu4, dan4 shi4 fan1 qie2 jiang4 jie3 jue2 suo3 you3 de wen4 ti2.'"
          :translation="'子供たちはみんな嫌いな食べ物がありますが、 ケチャップは全てを解決します。'"
        />
        <br>
        <p>
          ・不得了
        </p>
        <SentenceFormat
          :sentence="'最近我能吃很多美食, 覺得幸福得不得了。'"
          :bopomofo="'ㄗㄨㄟˋ ㄐㄧㄣˋ ㄨㄛˇ ㄋㄥˊ ㄔ ㄏㄣˇ ㄉㄨㄛ ㄇㄟˇ ㄕˊ, ㄐㄩㄝˊ ㄉㄜ˙ ㄒㄧㄥˋ ㄈㄨˊ ㄉㄜˊ ㄅㄨˋ ㄉㄜˊ ㄌㄧㄠˇ.'"
          :pinyin="'zui4 jin4 wo3 neng2 chi1 hen3 duo1 mei3 shi2, jue2 de xing4 fu2 de bu4 de2 liao3.'"
          :translation="'最近は美味しいものがたくさん食べられてとても嬉しいです。'"
        />
        <br>
        <p>
          ・另外
        </p>
        <SentenceFormat
          :sentence="'青蛙我能摸, 但是是否能吃是另外的話。'"
          :bopomofo="'ㄑㄧㄥ ㄨㄚ ㄨㄛˇ ㄋㄥˊ ㄇㄛ, ㄉㄢˋ ㄕˋ ㄕˋ ㄈㄡˇ ㄋㄥˊ ㄔ ㄕˋ ㄌㄧㄥˋ ㄨㄞˋ ㄉㄜ˙ ㄏㄨㄚˋ.'"
          :pinyin="'qing1 wa1 wo3 neng2 mo1, dan4 shi4 shi4 fou3 neng3 chi1 shi4 ling4 wai4 de hua4.'"
          :translation="'カエルに触る事はできますが、 食べられるかどうかは別問題です。'"
        />
        <br>
        <p>
          ・糖
        </p>
        <SentenceFormat
          :sentence="'吃太多糖讓你有蛀牙。'"
          :bopomofo="'ㄔ ㄊㄞˋ ㄉㄨㄛ ㄊㄤˊ ㄖㄤˋ ㄋㄧˇ ㄧㄡˇ ㄓㄨˋ ㄧㄚˊ.'"
          :pinyin="'chi1 tai4 duo1 tang2 rang4 ni3 you3 zhu4 ya2.'"
          :translation="'お菓子を食べ過ぎると虫歯になります。'"
        />
        <br>
        <p>
          ・離開
        </p>
        <SentenceFormat
          :sentence="'離開家後， 我總是擔心我忘了東西。'"
          :bopomofo="'ㄌㄧˊ ㄎㄞ ㄐㄧㄚ ㄏㄡˋ， ㄨㄛˇ ㄗㄨㄥˇ ㄕˋ ㄉㄢ ㄒㄧㄣ ㄨㄛˇ ㄨㄤˋ ㄌㄜ˙ ㄉㄨㄥ ㄒㄧ˙.'"
          :pinyin="'li2 kai1 jia1 hou4, wo3 zong3 shi4 dan1 xin1 wo3 wang4 le dong1 xi.'"
          :translation="'家を出た後、 忘れ物をしていないかいつも心配になります。'"
        />
        <br>
        <p>
          ・句
        </p>
        <SentenceFormat
          :sentence="'他失戀了， 請你給他一句有精神的話。'"
          :bopomofo="'ㄊㄚ ㄕ ㄌㄧㄢˋ ㄌㄜ˙， ㄑㄧㄥˇ ㄋㄧˇ ㄍㄟˇ ㄊㄚ ㄧ ㄐㄩˋ ㄧㄡˇ ㄐㄧㄥ ㄕㄣˊ ㄉㄜ˙ ㄏㄨㄚˋ.'"
          :pinyin="'ta1 shi1 lian4 le, qing3 ni3 gei3 ta1 yi1 ju4 you3 jing1 shen2 de hua4.'"
          :translation="'彼は失恋したので、 元気が出る言葉をかけてあげて下さい。'"
        />
        <br>
        <p>
          ・祝福
        </p>
        <SentenceFormat
          :sentence="'大家都在祝福比賽的冠軍。'"
          :bopomofo="'ㄉㄚˋ ㄐㄧㄚ ㄉㄡ ㄗㄞˋ ㄓㄨˋ ㄈㄨˊ ㄅㄧˇ ㄙㄞˋ ㄉㄜ˙ ㄍㄨㄢˋ ㄐㄩㄣ.'"
          :pinyin="'da4 jia1 dou1 zai4 zhu4 fu2 bi3 sai4 de guan4 jun1.'"
          :translation="'みんな大会のチャンピオンを祝福しています。'"
        />
        <br>
        <p>
          ・話
        </p>
        <SentenceFormat
          :sentence="'我不擅長外語， 但是我知道一， 兩句英語話。'"
          :bopomofo="'ㄨㄛˇ ㄅㄨˊ ㄕㄢˋ ㄔㄤˊ ㄨㄞˋ ㄩˇ， ㄉㄢˋ ㄕˋ ㄨㄛˇ ㄓ ㄉㄠˋ ㄧ， ㄌㄧㄤˇ ㄐㄩˋ ㄧㄥ ㄩˇ ㄏㄨㄚˋ.'"
          :pinyin="'wo3 bu2 shan4 chang2 wai4 yu3, dan4 shi4 wo3 zhi1 dao4 yi1, liang3 ju4 ying1 yu3 hua4.'"
          :translation="'外国語は苦手ですが、 英語なら1、2個単語を知っています。'"
        />
        <br>
        <p>
          ・一會兒
        </p>
        <SentenceFormat
          :sentence="'在教室等了一會兒， 我意識到今天是放假。'"
          :bopomofo="'ㄗㄞˋ ㄐㄧㄠˋ ㄕˋ ㄉㄥˇ ㄌㄜ˙ ㄧ ㄏㄨㄟˇ ㄦ， ㄨㄛˇ ㄧˋ ㄕˊ ㄉㄠˋ ㄐㄧㄣ ㄊㄧㄢ ㄕˋ ㄈㄤˋ ㄐㄧㄚˋ.'"
          :pinyin="'zai4 jiao4 shi4 deng3 le yi1 hui3 er, wo3 yi4 shi2 dao4 jin1 tian1 shi4 fang4 jia4.'"
          :translation="'しばらく教室で待っていましたが、 今日は休日だと気づきました。'"
        />
        <br>
        <p>
          ・有說有笑
        </p>
        <SentenceFormat
          :sentence="'因為朋友們都沒見面很久，  每個人熱鬧地有說有笑。'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄆㄥˊ ㄧㄡˇ ㄇㄣ˙ ㄉㄡ ㄇㄟˊ ㄐㄧㄢˋ ㄇㄧㄢˋ ㄏㄣˇ ㄐㄧㄡˇ， ㄇㄟˇ ㄍㄜ˙ ㄖㄣˊ ㄖㄜˋ ㄋㄠˋ ㄉㄜ˙ ㄧㄡˇ ㄕㄨㄛ ㄧㄡˇ ㄒㄧㄠˋ.'"
          :pinyin="'yin1 wei4 peng2 you3 men dou1 mei2 jian4 mian4 hen4 jiu3, mei3 ge4 ren2 re4 nao4 de you3 shuo1 you3 xiao4.'"
          :translation="'友人同士で会うのが久しぶりだったので、 みんな楽しそうに笑ったり喋ったりしていました。'"
        />
        <br>
        <p>
          ・有吃有喝
        </p>
        <SentenceFormat
          :sentence="'今天的派對有吃有喝， 也可以跳舞。'"
          :bopomofo="'ㄐㄧㄣ ㄊㄧㄢ ㄉㄜ˙ ㄆㄞˋ ㄉㄨㄟˋ ㄧㄡˇ ㄔ ㄧㄡˇ ㄏㄜ， ㄧㄝˇ ㄎㄜˇ ㄧˇ ㄊㄧㄠˋ ㄨˇ.'"
          :pinyin="'jin1 tian1 de pai4 dui4 you3 chi1 you3 he1, ye3 ke3 yi3 tiao4 wu3.'"
          :translation="'今日のパーティは食べられて、 飲めて、 ダンスも出来ます。'"
        />
        <br>
        <p>
          ・百年好合
        </p>
        <SentenceFormat
          :sentence="'「百年好合」是傳統的話給新人。'"
          :bopomofo="'ㄅㄞˇ ㄋㄧㄢˊ ㄏㄠˇ ㄏㄜˊ ㄕˋ ㄔㄨㄢˊ ㄊㄨㄥˇ ㄉㄜ˙ ㄏㄨㄚˋ ㄍㄟˇ ㄒㄧㄣ ㄖㄣˊ.'"
          :pinyin="' bai3 nian2 hao3 he2 shi4 chuan2 tong3 de hua4 gei3 xin1 ren2.'"
          :translation="'「百年好合」は新婚の人に送る伝統的な言葉です。'"
        />
        <br>
        <p>
          ・早生貴子
        </p>
        <SentenceFormat
          :sentence="'親戚說的「早生貴子」讓我感到有點壓力。'"
          :bopomofo="'ㄑㄧㄣ ㄑㄧ ㄕㄨㄛ ㄉㄜ˙ ㄗㄠˇ ㄕㄥ ㄍㄨㄟˋ ㄗˇ ㄖㄤˋ ㄨㄛˇ ㄍㄢˇ ㄉㄠˋ ㄧㄡˇ ㄉㄧㄢˇ ㄧㄚ ㄌㄧˋ.'"
          :pinyin="'qin1 qi1 shuo1 de zao3 sheng1 gui4 zi3 rang4 wo3 gan3 dao4 you3 dian3 ya1 li4.'"
          :translation="'親戚に「早生貴子」と言われると、 若干プレッシャーを感じます。'"
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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第5章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 2冊目・第5章で登場する新単語を使った例文や気づいた事など' }
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
