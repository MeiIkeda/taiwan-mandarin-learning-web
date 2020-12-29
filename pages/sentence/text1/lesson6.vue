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
          當代中文課程課1・第6章
        </h1>
        <p>
          【新単語+例文】
        </p>
        <p>
          ・他們
        </p>
        <SentenceFormat
          :sentence="'他們一起去學做甜點.'"
          :bopomofo="'ㄊㄚ ㄇㄣ˙ ㄧˋ ㄑㄧˇ ㄑㄩˋ ㄒㄩㄝˊ ㄗㄨㄛˋ ㄊㄧㄢˊ ㄉㄧㄢˇ.'"
          :pinyin="'ta1 men yi1 qi3 qu4 xue2 zuo4 tian2 dian3.'"
          :translation="'彼らは一緒にデザートを作る方法を学びに行きます。'"
        />
        <br>
        <p>
          ・學校
        </p>
        <SentenceFormat
          :sentence="'去學校前我一定吃早飯.'"
          :bopomofo="'ㄑㄩˋ ㄒㄩㄝˊ ㄒㄧㄠˋ ㄑㄧㄢˊ ㄨㄛˇ ㄧˊ ㄉㄧㄥˋ ㄔ ㄗㄠˇ ㄈㄢˋ.'"
          :pinyin="'qu4 xue2 xiao4 qian2 wo3 yi1 ding4 chi1 zao3 fan4.'"
          :translation="'学校に行く前に朝ご飯を食べなくてはいけません。'"
        />
        <br>
        <p>
          ・在
        </p>
        <SentenceFormat
          :sentence="'我最喜歡的餐廳在市區.'"
          :bopomofo="'ㄨㄛˇ ㄗㄨㄟˋ ㄒㄧˇ ㄏㄨㄢ ㄉㄜ˙ ㄘㄢ ㄊㄧㄥ ㄗㄞˋ ㄕˋ ㄑㄩ.'"
          :pinyin="'wo3 zui4 xi3 huan1 de can1 ting1 zai4 shi4 qu1.'"
          :translation="'私のお気に入りのレストランは市内中心部にあります。'"
        />
        <br>
        <p>
          ・山上
        </p>
        <SentenceFormat
          :sentence="'山上正在下雨.'"
          :bopomofo="'ㄕㄢ ㄕㄤˋ ㄓㄥˋ ㄗㄞˋ ㄒㄧㄚˋ ㄩˇ.'"
          :pinyin="'shan1 shang4 zheng4 zai4 xia4 yu3.'"
          :translation="'山の上は雨が降っている。'"
        />
        <br>
        <p>
          ・哪裡
        </p>
        <SentenceFormat
          :sentence="'台灣哪裡不太熱?'"
          :bopomofo="'ㄊㄞˊ ㄨㄢ ㄋㄚˇ ㄌㄧˇ ㄅㄨˊ ㄊㄞˋ ㄖㄜˋ?'"
          :pinyin="'tai2 wan1 na3 li3 bu2 tai4 re4?'"
          :translation="'台湾で暑すぎないところはどこですか?'"
        />
        <br>
        <p>
          ・遠
        </p>
        <SentenceFormat
          :sentence="'夜市有一點遠, 所以我不常去.'"
          :bopomofo="'ㄧㄝˋ ㄕˋ ㄧㄡˇ ㄧˋ ㄉㄧㄢˇ ㄩㄢˇ, ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄅㄨˋ ㄔㄤˊ ㄑㄩˋ.'"
          :pinyin="'ye4 shi4 you3 yi1 dian3 yuan3, suo3 yi3 wo3 bu4 chang2 qu4.'"
          :translation="'ナイトマーケットは少し遠いので、あまり行きません。'"
        />
        <br>
        <p>
          ・那裡
        </p>
        <SentenceFormat
          :sentence="'那裡的貓咪們都喜歡喝牛奶.'"
          :bopomofo="'ㄋㄚˋ ㄌㄧˇ ㄉㄜ˙ ㄇㄠ ㄇㄧ ㄇㄣ˙ ㄉㄡ ㄒㄧˇ ㄏㄨㄢ ㄏㄜ ㄋㄧㄡˊ ㄋㄞˇ.'"
          :pinyin="'na4 li3 de mao1 mi1 men dou1 xi3 huan1 he1 niu2 nai3.'"
          :translation="'あそこの猫はみんなミルクを飲むのが好きです。'"
        />
        <br>
        <p>
          ・風景
        </p>
        <SentenceFormat
          :sentence="'海邊的風景跟山上的， 他比較想看山上的.'"
          :bopomofo="'ㄏㄞˇ ㄅㄧㄢ ㄉㄜ˙ ㄈㄥ ㄐㄧㄥˇ ㄍㄣ ㄕㄢ ㄕㄤˋ ㄉㄜ˙， ㄊㄚ ㄅㄧˇ ㄐㄧㄠˋ ㄒㄧㄤˇ ㄎㄢˋ ㄕㄢ ㄕㄤˋ ㄉㄜ˙.'"
          :pinyin="'hai3 bian1 de feng1 jing3 gen1 shan1 shang4 de, ta1 bi3 jiao4 xiang3 kan4 shan1 shang4 de.'"
          :translation="'海の景色と山の景色とでは、 彼は山の景色が見たいです。'"
        />
        <br>
        <p>
          ・美
        </p>
        <SentenceFormat
          :sentence="'所有的貓當中, 那一隻貓澎澎的毛最美.'"
          :bopomofo="'ㄙㄨㄛˇ ㄧㄡˇ ㄉㄜ˙ ㄇㄠ ㄉㄤ ㄓㄨㄥ, ㄋㄚˋ ㄧ ㄓ ㄇㄠ ㄆㄥˊ  ㄆㄥˊ  ㄉㄜ˙ ㄇㄠˊ ㄗㄨㄟˋ ㄇㄟˇ.'"
          :pinyin="'suo3 you3 de mao1 dang1 zhong1, na4 yi1 zhi1 mao1 peng2 peng2 de mao2 zui4 mei3.'"
          :translation="'すべての猫の中で、その猫のモフモフの毛が最も美しいです。'"
        />
        <br><p>
          ・前面
        </p>
        <SentenceFormat
          :sentence="'Uber Eats送貨員來到房子的前面.'"
          :bopomofo="'Uber Eats ㄙㄨㄥˋ ㄏㄨㄛˋ ㄩㄢˊ ㄌㄞˊ ㄉㄠˋ ㄈㄤˊ ㄗ˙ ㄉㄜ˙ ㄑㄧㄢˊ ㄇㄧㄢˋ.'"
          :pinyin="'Uber Eats song4 huo4 yuan2 lai2 dao4 fang2 zi3 de qian2 mian4.'"
          :translation="'UberEatsの配達人は家の前まで来ます。'"
        />
        <br>
        <p>
          ・海
        </p>
        <SentenceFormat
          :sentence="'在海中採牡蠣.'"
          :bopomofo="'ㄗㄞˋ ㄏㄞˇ ㄓㄨㄥ ㄘㄞˇ ㄇㄨˇ ㄌㄧˋ.'"
          :pinyin="'zai4 hai3 zhong1 cai3 mu3 li4.'"
          :translation="'海で牡蠣を採ります。'"
        />
        <br>
        <p>
          ・後面
        </p>
        <SentenceFormat
          :sentence="'小心後面!'"
          :bopomofo="'ㄒㄧㄠˇ ㄒㄧㄣ ㄏㄡˋ ㄇㄧㄢˋ!'"
          :pinyin="'xiao3 xin1 hou4 mian4!'"
          :translation="'後ろに注意してください!'"
        />
        <br>
        <p>
          ・山
        </p>
        <SentenceFormat
          :sentence="'他喜歡山, 他的興趣是爬山 .'"
          :bopomofo="'ㄊㄚ ㄒㄧˇ ㄏㄨㄢ ㄕㄢ, ㄊㄚ ㄉㄜ˙ ㄒㄧㄥˋ ㄑㄩˋ ㄕˋ ㄆㄚˊ ㄕㄢ.'"
          :pinyin="'ta1 xi3 huan1 shan1, ta1 de xing4 qu4 shi4 pa2 shan1.'"
          :translation="'彼は山が好きで、 彼の趣味は登山です。'"
        />
        <br>
        <p>
          ・真的
        </p>
        <SentenceFormat
          :sentence="'那家超市今天賣的啤酒真的便宜.'"
          :bopomofo="'ㄋㄚˋ ㄐㄧㄚ ㄔㄠ ㄕˋ ㄐㄧㄣ ㄊㄧㄢ ㄇㄞˋ ㄉㄜ˙ ㄆㄧˊ ㄐㄧㄡˇ ㄓㄣ ㄉㄜ˙ ㄆㄧㄢˊ ㄧˊ.'"
          :pinyin="'na4 jia1 chao1 shi4 jin1 tian1 mai4 de pi2 jiu3 zhen1 de pian2 yi2.'"
          :translation="'そのスーパーマーケットは今日本当に安いビールを売っている。'"
        />
        <br>
        <p>
          ・地方
        </p>
        <SentenceFormat
          :sentence="'你喜歡他的什麼地方.'"
          :bopomofo="'ㄋㄧˇ ㄒㄧˇ ㄏㄨㄢ ㄊㄚ ㄉㄜ˙ ㄕㄣˊ ㄇㄜ˙ ㄉㄧˋ ㄈㄤ.'"
          :pinyin="'ni3 xi3 huan1 ta1 de shen2 me di4 fang1.'"
          :translation="'彼のどんなところが好きですか?'"
        />
        <br>
        <p>
          ・現在
        </p>
        <SentenceFormat
          :sentence="'我現在沒辦法去接你.'"
          :bopomofo="'ㄨㄛˇ ㄒㄧㄢˋ ㄗㄞˋ ㄇㄟˊ ㄅㄢˋ ㄈㄚˇ ㄑㄩˋ ㄐㄧㄝ ㄋㄧˇ.'"
          :pinyin="'wo3 xian4 zai4 mei2 ban4 fa3 qu4 jie1 ni3.'"
          :translation="'今迎えに行くのは無理です。'"
        />
        <br>
        <p>
          ・附近
        </p>
        <SentenceFormat
          :sentence="'學校附近有很多便宜的餐廳.'"
          :bopomofo="'ㄒㄩㄝˊ ㄒㄧㄠˋ ㄈㄨˋ ㄐㄧㄣˋ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄆㄧㄢˊ ㄧˊ ㄉㄜ˙ ㄘㄢ ㄊㄧㄥ.'"
          :pinyin="'xue2 xiao4 fu4 jin4 you3 hen3 duo1 pian2 yi2 de can1 ting1.'"
          :translation="'学校の近くには安いレストランがたくさんあります。'"
        />
        <br>
        <p>
          ・樓下
        </p>
        <SentenceFormat
          :sentence="'我先去樓下等你.'"
          :bopomofo="'ㄨㄛˇ ㄒㄧㄢ ㄑㄩˋ ㄌㄡˊ ㄒㄧㄚˋ ㄉㄥˇ ㄋㄧˇ.'"
          :pinyin="'wo3 xian1 qu4 lou2 xia4 deng3 ni3.'"
          :translation="'私は先に階下に行ってあなたを待ちます。'"
        />
        <br>
        <p>
          ・找
        </p>
        <SentenceFormat
          :sentence="'我會去學校找我的老師.'"
          :bopomofo="'ㄨㄛˇ ㄏㄨㄟˋ ㄑㄩˋ ㄒㄩㄝˊ ㄒㄧㄠˋ ㄓㄠˇ ㄨㄛˇ ㄉㄜ˙ ㄌㄠˇ ㄕ.'"
          :pinyin="'wo3 hui4 qu4 xue2 xiao4 zhao3 wo3 de la3o shi1.'"
          :translation="'私は先生に会いに学校に行きます。'"
        />
        <br>
        <p>
          ・朋友
        </p>
        <SentenceFormat
          :sentence="'學校是交朋友的地方.'"
          :bopomofo="'ㄒㄩㄝˊ ㄒㄧㄠˋ ㄕˋ ㄐㄧㄠ ㄆㄥˊ ㄧㄡˇ ㄉㄜ˙ ㄉㄧˋ ㄈㄤ.'"
          :pinyin="'xue2 xiao4 shi4 jiao1 peng2 you3 de di4 fang1.'"
          :translation="'学校は友達を作る場所です。'"
        />
        <br>
        <p>
          ・上課
        </p>
        <SentenceFormat
          :sentence="'由於他是在線生， 不必去上課.'"
          :bopomofo="'ㄧㄡˊ ㄩˊ ㄊㄚ ㄕˋ ㄗㄞˋ ㄒㄧㄢˋ ㄕㄥ， ㄅㄨˊ ㄅㄧˋ ㄑㄩˋ ㄕㄤˋ ㄎㄜˋ.'"
          :pinyin="'you2 yu2 ta1 shi4 zai4 xian4 sheng1, bu2 bi4 qu4 shang4 ke4.'"
          :translation="'彼はオンラインの生徒なので、 クラスに行く必要はありません。'"
        />
        <br>
        <p>
          ・花蓮
        </p>
        <SentenceFormat
          :sentence="'花蓮在台灣的東北.'"
          :bopomofo="'ㄏㄨㄚ ㄌㄧㄢˊ ㄗㄞˋ ㄊㄞˊ ㄨㄢ ㄉㄜ˙ ㄉㄨㄥ ㄅㄟˇ.'"
          :pinyin="'hua1 lian2 zai4 tai2 wan1 de dong1 bei3.'"
          :translation="'花蓮は台湾の北東にあります。'"
        />
        <br>
        <p>
          ・聽說
        </p>
        <SentenceFormat
          :sentence="'你聽說他要去台北了嗎?'"
          :bopomofo="'ㄋㄧˇ ㄊㄧㄥ ㄕㄨㄛ ㄊㄚ ㄧㄠˋ ㄑㄩˋ ㄊㄞˊ ㄅㄟˇ ㄌㄜ˙ ㄇㄚ˙.'"
          :pinyin="'ni3 ting1 shuo1 ta1 yao4 qu4 tai2 bei3 le ma2?'"
          :translation="'彼が台北に行くと聞きましたか?'"
        />
        <br>
        <p>
          ・近
        </p>
        <SentenceFormat
          :sentence="'我家到那家便利商店很近.'"
          :bopomofo="'ㄨㄛˇ ㄐㄧㄚ ㄉㄠˋ ㄋㄚˋ ㄐㄧㄚ ㄅㄧㄢˋ ㄌㄧˋ ㄕㄤ ㄉㄧㄢˋ ㄏㄣˇ ㄐㄧㄣˋ.'"
          :pinyin="'wo3 jia1 dao4 na4 jia1 bian4 li4 shang1 dian4 hen3 jin4.'"
          :translation="'私の家はそのコンビニにとても近いです。'"
        />
        <br>
        <p>
          ・方便
        </p>
        <SentenceFormat
          :sentence="'這附近不太方便.'"
          :bopomofo="'ㄓㄜˋ ㄈㄨˋ ㄐㄧㄣˋ ㄅㄨˊ ㄊㄞˋ ㄈㄤ ㄅㄧㄢˋ.'"
          :pinyin="'zhe4 fu4 jin4 bu2 tai4 fang1 bian4.'"
          :translation="'この辺りはあまり便利ではありません。'"
        />
        <br>
        <p>
          ・這裡
        </p>
        <SentenceFormat
          :sentence="'你的書在我這裡.'"
          :bopomofo="'ㄋㄧˇ ㄉㄜ˙ ㄕㄨ ㄗㄞˋ ㄨㄛˇ ㄓㄜˋ ㄌㄧˇ.'"
          :pinyin="'ni3 de shu1 zai4 wo3 zhe4 li3.'"
          :translation="'あなたの本は私のところにあります。'"
        />
        <br>
        <p>
          ・學生
        </p>
        <SentenceFormat
          :sentence="'學生到這個週末一定要買那本書.'"
          :bopomofo="'ㄒㄩㄝˊ ㄕㄥ ㄉㄠˋ ㄓㄜˋ ㄍㄜˋ ㄓㄡ ㄇㄛˋ ㄧˊ ㄉㄧㄥˋ ㄧㄠˋ ㄇㄞˇ ㄋㄚˋ ㄅㄣˇ ㄕㄨ.'"
          :pinyin="'xue2 sheng1 dao4 zhe4 ge4 zhou1 mo4 yi1 ding4 yao4 mai3 na4 ben3 shu1.'"
          :translation="'学生は今週末までにその本を購入する必要があります。'"
        />
        <br>
        <p>
          ・在
        </p>
        <SentenceFormat
          :sentence="'在山上, 你必須小心天氣.'"
          :bopomofo="'ㄗㄞˋ ㄕㄢ ㄕㄤˋ, ㄋㄧˇ ㄅㄧˋ ㄒㄩ ㄒㄧㄠˇ ㄒㄧㄣ ㄊㄧㄢ ㄑㄧˋ.'"
          :pinyin="'zai4 shan1 shang4, ni3 bi4 xu1 xiao3 xin1 tian1 qi4.'"
          :translation="'山では天気に気をつけなければならない。'"
        />
        <br>
        <p>
          ・東西
        </p>
        <SentenceFormat
          :sentence="'你有什麼能快吃到的東西嗎?'"
          :bopomofo="'ㄋㄧˇ ㄧㄡˇ ㄕㄣˊ ㄇㄜ˙ ㄋㄥˊ ㄎㄨㄞˋ ㄔ ㄉㄠˋ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ ㄇㄚ˙?'"
          :pinyin="'ni3 you3 shen2 me neng2 kuai4 chi1 dao4 de dong1 xi1 ma2?'"
          :translation="'何か早く食べられるものはありますか?'"
        />
        <br>
        <p>
          ・外面
        </p>
        <SentenceFormat
          :sentence="'如果你要去外面, 你必須穿外套.'"
          :bopomofo="'ㄖㄨˊ ㄍㄨㄛˇ ㄋㄧˇ ㄧㄠˋ ㄑㄩˋ ㄨㄞˋ ㄇㄧㄢˋ, ㄋㄧˇ ㄅㄧˋ ㄒㄩ ㄔㄨㄢ ㄨㄞˋ ㄊㄠˋ.'"
          :pinyin="'ru2 guo3 ni3 yao4 qu4 wai4 mian4, ni3 bi4 xu1 chuan1 wai4 tao4.'"
          :translation="'外に出るなら、上着を着なくてはいけません。'"
        />
        <br>
        <p>
          ・裡面
        </p>
        <SentenceFormat
          :sentence="'因為她每天打掃, 那棟房子的裡面很乾淨.'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄊㄚ ㄇㄟˇ ㄊㄧㄢ ㄉㄚˇ ㄙㄠˇ, ㄋㄚˋ ㄉㄨㄥˋ ㄈㄤˊ ㄗ˙ ㄉㄜ˙ ㄌㄧˇ ㄇㄧㄢˋ ㄏㄣˇ ㄍㄢ ㄐㄧㄥˋ.'"
          :pinyin="'yin1 wei4 ta1 mei3 tian1 da3 sao3, na4 dong4 fang2 zi3 de li3 mian4 hen3 gan1 jing4.'"
          :translation="'彼女は毎日掃除をしているので、家の中はとてもきれいです。'"
        />
        <br>
        <p>
          ・商店
        </p>
        <SentenceFormat
          :sentence="'今天那家商店有買一送一.'"
          :bopomofo="'ㄐㄧㄣ ㄊㄧㄢ ㄋㄚˋ ㄐㄧㄚ ㄕㄤ ㄉㄧㄢˋ ㄧㄡˇ ㄇㄞˇ ㄧ ㄙㄨㄥˋ ㄧ.'"
          :pinyin="'jin1 tian1 na4 jia1 shang1 dian4 you3 mai3 yi1 song4 yi1.'"
          :translation="'今日、その店で1つ購入すると1つ無料になります。'"
          :memo="'※「買一送一」は1つ買うと1つ無料、「買五送二」だと5つ買うと2つ無料。'"
        />
        <br>
        <p>
          ・吃飯
        </p>
        <SentenceFormat
          :sentence="'吃飯的地方在二樓.'"
          :bopomofo="'ㄔ ㄈㄢˋ ㄉㄜ˙ ㄉㄧˋ ㄈㄤ ㄗㄞˋ ㄦˋ ㄌㄡˊ.'"
          :pinyin="'chi1 fan4 de di4 fang1 zai4 er4 lou2.'"
          :translation="'食べる場所は2階です。'"
        />
        <br>
        <p>
          ・宿舍
        </p>
        <SentenceFormat
          :sentence="'宿舍的房間有幾張床?'"
          :bopomofo="'ㄙㄨˋ ㄕㄜˋ ㄉㄜ˙ ㄈㄤˊ ㄐㄧㄢ ㄧㄡˇ ㄐㄧˇ ㄓㄤ ㄔㄨㄤˊ?'"
          :pinyin="'su4 she4 de fang2 jian1 you3 ji3 zhang1 chuang2?'"
          :translation="'寮の部屋にはいくつベッドがありますか?'"
        />
        <br>
        <p>
          ・樓
        </p>
        <SentenceFormat
          :sentence="'從樓上可以看到很美的風景.'"
          :bopomofo="'ㄘㄨㄥˊ ㄌㄡˊ ㄕㄤˋ ㄎㄜˇ ㄧˇ ㄎㄢˋ ㄉㄠˋ ㄏㄣˇ ㄇㄟˇ ㄉㄜ˙ ㄈㄥ ㄐㄧㄥˇ.'"
          :pinyin="'cong2 lou2 shang4 ke3 yi3 kan4 dao4 hen3 mei3 de feng1 jing3.'"
          :translation="'上階からは美しい景色をご覧いただけます。'"
          :memo="'※「上階」は「樓上」。 「階下=樓下」と同じ語順。 「上樓」だと「上の階に行く」。'"
        />
        <br>
        <p>
          ・棟
        </p>
        <SentenceFormat
          :sentence="'右邊有三棟大樓, 正中間是醫院.'"
          :bopomofo="'ㄧㄡˋ ㄅㄧㄢ ㄧㄡˇ ㄙㄢ ㄉㄨㄥˋ ㄉㄚˋ ㄌㄡˊ, ㄓㄥˋ ㄓㄨㄥ ㄐㄧㄢ ㄕˋ ㄧ ㄩㄢˋ.'"
          :pinyin="'you4 bian1 you3 san1 dong4 da4 lou2, zheng4 zhong1 jian1 shi4 yi1 yuan4.'"
          :translation="'右側に3つの建物があり、真ん中は病院です。'"
        />
        <br>
        <p>
          ・大樓
        </p>
        <SentenceFormat
          :sentence="'那棟大樓的五樓有很好吃的餐廳.'"
          :bopomofo="'ㄋㄚˋ ㄉㄨㄥˋ ㄉㄚˋ ㄌㄡˊ ㄉㄜ˙ ㄨˇ ㄌㄡˊ ㄧㄡˇ ㄏㄣˇ ㄏㄠˇ ㄔ ㄉㄜ˙ ㄘㄢ ㄊㄧㄥ.'"
          :pinyin="'na4 dong4 da4 lou2 de wu3 lou2 you3 hen3 hao3 chi1 de can1 ting1.'"
          :translation="'そのビルの5階にはおいしいレストランがあります。'"
        />
        <br>
        <p>
          ・圖書館
        </p>
        <SentenceFormat
          :sentence="'我會去圖書館找動物有關的書.'"
          :bopomofo="'ㄨㄛˇ ㄏㄨㄟˋ ㄑㄩˋ ㄊㄨˊ ㄕㄨ ㄍㄨㄢˇ ㄓㄠˇ ㄉㄨㄥˋ ㄨˋ ㄧㄡˇ ㄍㄨㄢ ㄉㄜ˙ ㄕㄨ.'"
          :pinyin="'wo3 hui4 qu4 tu2 shu1 guan3 zhao3 dong4 wu4 you3 guan1 de shu1.'"
          :translation="'図書館に行って動物に関する本を探します。'"
        />
        <br>
        <p>
          ・旁邊
        </p>
        <SentenceFormat
          :sentence="'那棟大樓的旁邊有另一棟大樓.'"
          :bopomofo="'ㄋㄚˋ ㄉㄨㄥˋ ㄉㄚˋ ㄌㄡˊ ㄉㄜ˙ ㄆㄤˊ ㄅㄧㄢ ㄧㄡˇ ㄌㄧㄥˋ ㄧ ㄉㄨㄥˋ ㄉㄚˋ ㄌㄡˊ.'"
          :pinyin="'na4 dong4 da4 lou2 de pang2 bian1 you3 ling4 yi1 dong4 da4 lo2u.'"
          :translation="'そのビルの隣に別のビルがあります。'"
          :memo="'※「另一個/棟 etc..」は、 「たくさんある中のもう1つ」。 「別的」は、「2つある中のもう1つ」のニュアンス。 ' +
            '例：「我買了禮物給你, 還有別的.(プレゼントをあげます。 もう1つありました!)」'"
        />
        <br>
        <p>
          ・教室
        </p>
        <SentenceFormat
          :sentence="'請整理教室裡的桌子和椅子.'"
          :bopomofo="'ㄑㄧㄥˇ ㄓㄥˇ ㄌㄧˇ ㄐㄧㄠˋ ㄕˋ ㄌㄧˇ ㄉㄜ˙ ㄓㄨㄛ ㄗ˙ ㄏㄢˋ ㄧˇ ㄗ˙.'"
          :pinyin="'qing3 zheng3 li3 jiao4 shi4 li3 de zhuo1 zi han4 yi3 zi.'"
          :translation="'教室の机と椅子を片付けてください。'"
          :memo="'※動詞の「教(ㄐㄧㄠ/jiao1)=教える」は一声。 ' +
            '「教室/教師/教科書/教堂 etc..」 など、 「教」がつく名詞になってるものは四声(ㄐㄧㄠˋ/jiao4)。'"
        />
        <br>
        <p>
          ・游泳池
        </p>
        <SentenceFormat
          :sentence="'這個游泳池中間很深.'"
          :bopomofo="'ㄓㄜˋ ㄍㄜˋ ㄧㄡˊ ㄩㄥˇ ㄔˊ ㄓㄨㄥ ㄐㄧㄢ ㄏㄣˇ ㄕㄣ.'"
          :pinyin="'zhe4 ge4 you2 yong3 chi2 zhong1 jian1 hen3 shen1.'"
          :translation="'このプールの真ん中は深いです。'"
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
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第6章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 1冊目・第6章で登場する新単語を使った例文や気づいた事など' }
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
