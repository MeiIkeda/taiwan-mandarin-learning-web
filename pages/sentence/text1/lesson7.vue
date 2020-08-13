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
        <p style="font-size: 20px; text-align: center">
          當代中文課程課1・第7章
        </p>
        <p>
          【新単語+例文】
        </p>
        <p>
          ・點
        </p>
        <SentenceFormat
          :sentence="'請你上午九點半之前來教室。'"
          :bopomofo="'ㄑㄧㄥˇ ㄋㄧˇ ㄕㄤˋ ㄨˇ ㄐㄧㄡˇ ㄉㄧㄢˇ ㄅㄢˋ ㄓ ㄑㄧㄢˊ ㄌㄞˊ ㄐㄧㄠˋ ㄕˋ.'"
          :pinyin="'qing3 ni3 shang4 wu3 jiu3 dian3 ban4 zhi1 qian2 lai2 jiao4 shi4.'"
          :translation="'午前9時30分までに教室にお越しください。'"
        />
        <br>
        <p>
          ・KTV
        </p>
        <SentenceFormat
          :sentence="'日本歌在台灣KTV都很舊.'"
          :bopomofo="'ㄖˋ ㄅㄣˇ ㄍㄜ ㄗㄞˋ ㄊㄞˊ ㄨㄢ KTV ㄉㄡ ㄏㄣˇ ㄐㄧㄡˋ.'"
          :pinyin="'ri4 ben3 ge1 zai4 tai2 wa1n KTV dou1 hen3 jiu4.'"
          :translation="'台湾KTVにある日本の歌はどれも古いです。'"
        />
        <br>
        <p>
          ・唱歌
        </p>
        <SentenceFormat
          :sentence="'我不能唱歌用英文.'"
          :bopomofo="'ㄨㄛˇ ㄅㄨˋ ㄋㄥˊ ㄔㄤˋ ㄍㄜ ㄩㄥˋ ㄧㄥ ㄨㄣˊ.'"
          :pinyin="'wo3 bu4 neng2 chang4 ge1 yong4 ying1 wen2.'"
          :translation="'私は英語で歌えません。'"
        />
        <br>
        <p>
          ・分
        </p>
        <SentenceFormat
          :sentence="'別的十分後, 幫我關冷氣。.'"
          :bopomofo="'ㄅㄧㄝˊ ㄉㄜ˙ ㄕˊ ㄈㄣ ㄏㄡˋ, ㄅㄤ ㄨㄛˇ ㄍㄨㄢ ㄌㄥˇ ㄑㄧˋ.'"
          :pinyin="'bie2 de shi2 fen1 hou4, bang1 wo3 guan1 leng3 qi4.'"
          :translation="'あと10分経ったら、 冷房を消してください。'"
        />
        <br>
        <p>
          ・見面
        </p>
        <SentenceFormat
          :sentence="'我不喜歡見面我不知道的人.'"
          :bopomofo="'ㄨㄛˇ ㄅㄨˋ ㄒㄧˇ ㄏㄨㄢ ㄐㄧㄢˋ ㄇㄧㄢˋ ㄨㄛˇ ㄅㄨˋ ㄓ ㄉㄠˋ ㄉㄜ˙ ㄖㄣˊ.'"
          :pinyin="'wo3 bu4 xi3 huan1 jian4 mian4 wo3 bu4 zhi1 dao4 de ren2.'"
          :translation="'知らない人に会うのは好きではありません。'"
        />
        <br>
        <p>
          ・從
        </p>
        <SentenceFormat
          :sentence="'那隻貓的尾巴從根到端是一直.'"
          :bopomofo="'ㄋㄚˋ ㄓˇ ㄇㄠ ㄉㄜ˙ ㄨㄟˇ ㄅㄚ ㄘㄨㄥˊ ㄍㄣ ㄉㄠˋ ㄉㄨㄢ ㄕˋ ㄧ ㄓˊ.'"
          :pinyin="'na4 zhi1 mao1 de wei3 ba1 cong2 gen1 dao4 duan1 shi4 yi1 zhi2.'"
          :translation="'あの猫の尻尾は根元から先までまっすぐです。'"
        />
        <br>
        <p>
          ・中午
        </p>
        <SentenceFormat
          :sentence="'打鐵只是中午開始.'"
          :bopomofo="'ㄉㄚˇ ㄊㄧㄝˇ ㄓˇ ㄕˋ ㄓㄨㄥ ㄨˇ ㄎㄞ ㄕˇ.'"
          :pinyin="'da3 tie zhi3 shi4 zhong1 wu3 kai1 shi3.'"
          :translation="'パーティはちょうど正午に始まります。'"
        />
        <br>
        <p>
          ・得
        </p>
        <SentenceFormat
          :sentence="'我得買兩種豆腐做麻婆豆腐.'"
          :bopomofo="'ㄨㄛˇ ㄉㄟˇ ㄇㄞˇ ㄌㄧㄤˇ ㄓㄨㄥˇ ㄉㄡˋ ㄈㄨˇ ㄗㄨㄛˋ ㄇㄚˊ ㄆㄛˊ ㄉㄡˋ ㄈㄨˇ.'"
          :pinyin="'wo3 dei3 mai3 liang3 zhong3 dou4 fu3 zuo4 ma2 po2 dou4 fu3.'"
          :translation="'麻婆豆腐を作るには2種類の豆腐を買わなければなりません。'"
        />
        <br>
        <p>
          ・銀行
        </p>
        <SentenceFormat
          :sentence="'我得去銀行提款錢.'"
          :bopomofo="'ㄨㄛˇ ㄉㄟˇ ㄑㄩˋ ㄧㄣˊ ㄏㄤˊ ㄊㄧˊ ㄎㄨㄢˇ ㄑㄧㄢˊ.'"
          :pinyin="'wo3 dei3 qu4 yin2 hang2 ti2 kuan3 qian2.'"
          :translation="'銀行にお金をおろしに行かなくてはいけません。'"
        />
        <br>
        <p>
          ・時候
        </p>
        <SentenceFormat
          :sentence="'在超市的時候我常常買不用的東西.'"
          :bopomofo="'ㄗㄞˋ ㄔㄠ ㄕˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄨㄛˇ ㄔㄤˊ ㄔㄤˊ ㄇㄞˇ ㄅㄨˊ ㄩㄥˋ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ.'"
          :pinyin="'zai4 chao1 shi4 de shi2 hou4 wo3 chang2 chang2 mai3 bu2 yong4 de dong1 xi1.'"
          :translation="'スーパーでは、 使わないものを度々買ってしまう。'"
        />
        <br>
        <p>
          ・後天
        </p>
        <SentenceFormat
          :sentence="'明天是假日, 從後天開始工作.'"
          :bopomofo="'ㄇㄧㄥˊ ㄊㄧㄢ ㄕˋ ㄐㄧㄚˋ ㄖˋ, ㄘㄨㄥˊ ㄏㄡˋ ㄊㄧㄢ ㄎㄞ ㄕˇ ㄍㄨㄥ ㄗㄨㄛˋ.'"
          :pinyin="'ming2 tian1 shi4 jia4 ri4, cong2 hou4 tian1 kai1 shi3 gong1 zuo4.'"
          :translation="'明日は休日で、明後日から働きます。'"
        />
        <br>
        <p>
          ・大安
        </p>
        <SentenceFormat
          :sentence="'在日本「大安」是幸運日子, 也是台灣的一家KTV的名字.'"
          :bopomofo="'ㄗㄞˋ ㄖˋ ㄅㄣˇ 「ㄉㄚˋ ㄢ」 ㄕˋ ㄒㄧㄥˋ ㄩㄣˋ ㄖˋ ㄗ˙, ㄧㄝˇ ㄕˋ ㄊㄞˊ ㄨㄢ ㄉㄜ˙ ㄧ ㄐㄧㄚ KTV ㄉㄜ˙ ㄇㄧㄥˊ ㄗˋ.'"
          :pinyin="'zai4 ri4 ben3 da4 an1 shi4 xing4 yun4 ri4 zi3, ye3 shi4 tai2 wa1n de yi1 jia1 KTV de ming2 zi4.'"
          :translation="'日本では「大安」はラッキーな日で、台湾ではKTVの名前です。'"
        />
        <br>
        <p>
          ・下次
        </p>
        <SentenceFormat
          :sentence="'今天的台灣菜做的很好了, 下次我會做法國菜.'"
          :bopomofo="'ㄐㄧㄣ ㄊㄧㄢ ㄉㄜ˙ ㄊㄞˊ ㄨㄢ ㄘㄞˋ ㄗㄨㄛˋ ㄉㄜ˙ ㄏㄣˇ ㄏㄠˇ ㄌㄜ˙, ㄒㄧㄚˋ ㄘˋ ㄨㄛˇ ㄏㄨㄟˋ ㄗㄨㄛˋ ㄈㄚˇ ㄍㄨㄛˊ ㄘㄞˋ.'"
          :pinyin="'ji1n tian1 de tai2 wan1 cai4 zuo4 de hen3 hao3 le, xia4 ci4 wo3 hui4 zuo4 fa3 guo2 cai4.'"
          :translation="'今日の台湾料理はとてもよく出来ました、 次回はフランス料理を作ります。'"
        />
        <br>
        <p>
          ・沒問題
        </p>
        <SentenceFormat
          :sentence="'我壞了手機. 沒問題, 二手店有便宜的.'"
          :bopomofo="'ㄨㄛˇ ㄏㄨㄞˋ ㄌㄜ˙ ㄕㄡˇ ㄐㄧ. ㄇㄟˊ ㄨㄣˋ ㄊㄧˊ, ㄦˋ ㄕㄡˇ ㄉㄧㄢˋ ㄧㄡˇ ㄆㄧㄢˊ ㄧˊ ㄉㄜ˙.'"
          :pinyin="'wo3 huai4 le shou3 ji1. mei2 wen4 ti2, er4 shou3 dian4 you3 pian2 yi2 de.'"
          :translation="'スマートフォンを壊してしまいました。 問題ありません、 中古の店に安いものがあります。'"
        />
        <br>
        <p>
          ・對了
        </p>
        <SentenceFormat
          :sentence="'上午課完了. 對了, 那時候下午課開始呢?'"
          :bopomofo="'ㄕㄤˋ ㄨˇ ㄎㄜˋ ㄨㄢˊ ㄌㄜ˙. ㄉㄨㄟˋ ㄌㄜ˙, ㄋㄚˋ ㄕˊ ㄏㄡ˙ ㄒㄧㄚˋ ㄨˇ ㄎㄜˋ ㄎㄞ ㄕˇ ㄋㄜ˙?'"
          :pinyin="'shang4 wu3 ke4 wan2 le. dui4 le, na4 shi2 hou4 xia4 wu3 ke4 kai1 shi3 ne?'"
          :translation="'午前の授業は終わりました。 ところで、午後の授業はいつ始まりますか?'"
        />
        <br>
        <p>
          ・有空
        </p>
        <SentenceFormat
          :sentence="'由於我現在有空, 我幫你作業.'"
          :bopomofo="'ㄧㄡˊ ㄩˊ ㄨㄛˇ ㄒㄧㄢˋ ㄗㄞˋ ㄧㄡˇ ㄎㄨㄥˋ, ㄨㄛˇ ㄅㄤ ㄋㄧˇ ㄗㄨㄛˋ ㄧㄝˋ.'"
          :pinyin="'you2 yu2 wo3 xian4 zai4 you3 kong4, wo3 bang1 ni3 zuo4 ye4.'"
          :translation="'今は暇なので、宿題を手伝います。'"
        />
        <br>
        <p>
          ・再見
        </p>
        <SentenceFormat
          :sentence="'你說了再見對你的朋友嗎?'"
          :bopomofo="'ㄋㄧˇ ㄕㄨㄛ ㄌㄜ˙ ㄗㄞˋ ㄐㄧㄢˋ ㄉㄨㄟˋ ㄋㄧˇ ㄉㄜ˙ ㄆㄥˊ ㄧㄡˇ ㄇㄚ˙?'"
          :pinyin="'ni3 shuo1 le zai4 jian4 dui4 ni3 de peng2 you3 ma2?'"
          :translation="'友達にさよならを言いましたか?'"
        />
        <br>
        <p>
          ・在
        </p>
        <SentenceFormat
          :sentence="'我在用微波煮洋葱. 那個方法不但方便, 而且快.'"
          :bopomofo="'ㄨㄛˇ ㄗㄞˋ ㄩㄥˋ ㄨㄟˊ ㄅㄛ ㄓㄨˇ ㄧㄤˊ ㄘㄨㄥ. ㄋㄚˋ ㄍㄜˋ ㄈㄤ ㄈㄚˇ ㄅㄨˊ ㄉㄢˋ ㄈㄤ ㄅㄧㄢˋ, ㄦˊ ㄑㄧㄝˇ ㄎㄨㄞˋ.'"
          :pinyin="'wo3 zai4 yong4 wei2 bo1 zhu3 yang2 cong1. na4 ge4 fang1 fa3 bu2 dan4 fang1 bian4, er2 qie3 kuai4.'"
          :translation="'電子レンジで玉ねぎを調理しています。 この方法は便利なだけでなく、速いです。'"
        />
        <br>
        <p>
          ・午餐
        </p>
        <SentenceFormat
          :sentence="'你想什麼時間吃午餐?'"
          :bopomofo="'ㄋㄧˇ ㄒㄧㄤˇ ㄕㄣˊ ㄇㄜ˙ ㄕˊ ㄐㄧㄢ ㄔ ㄨˇ ㄘㄢ?'"
          :pinyin="'ni3 xiang3 shen2 me shi2 jian1 chi1 wu3 can1?'"
          :translation="'何時にランチを食べたいですか?'"
        />
        <br>
        <p>
          ・剛
        </p>
        <SentenceFormat
          :sentence="'我剛起床.'"
          :bopomofo="'ㄨㄛˇ ㄍㄤ ㄑㄧˇ ㄔㄨㄤˊ.'"
          :pinyin="'wo3 gang1 qi3 chuang2.'"
          :translation="'今起きたばかりです。'"
        />
        <br>
        <p>
          ・下課
        </p>
        <SentenceFormat
          :sentence="'今天下課了有一點早.'"
          :bopomofo="'ㄐㄧㄣ ㄊㄧㄢ ㄒㄧㄚˋ ㄎㄜˋ ㄌㄜ˙ ㄧㄡˇ ㄧˋ ㄉㄧㄢˇ ㄗㄠˇ.'"
          :pinyin="'jin1 tian1 xia4 ke4 le you3 yi1 dian3 zao3.'"
          :translation="'今日は少し早く授業が終わりました。'"
        />
        <br>
        <p>
          ・下午
        </p>
        <SentenceFormat
          :sentence="'火車下午兩點會來.'"
          :bopomofo="'ㄏㄨㄛˇ ㄔㄜ ㄒㄧㄚˋ ㄨˇ ㄌㄧㄤˇ ㄉㄧㄢˇ ㄏㄨㄟˋ ㄌㄞˊ.'"
          :pinyin="'huo3 che1 xia4 wu3 liang3 dian3 hui4 lai2.'"
          :translation="'電車は午後２時に到着します。'"
        />
        <br>
        <p>
          ・半
        </p>
        <SentenceFormat
          :sentence="'你可以吃一半的薯片.'"
          :bopomofo="'ㄋㄧˇ ㄎㄜˇ ㄧˇ ㄔ ㄧ ㄅㄢˋ ㄉㄜ˙ ㄕㄨˇ ㄆㄧㄢˋ.'"
          :pinyin="'ni3 ke3 yi3 chi1 yi1 ban4 de shu3 pian4.'"
          :translation="'ポテトチップスの半分を食べていいですよ。'"
        />
        <br>
        <p>
          ・比賽
        </p>
        <SentenceFormat
          :sentence="'足球比賽後, 人太多走不動.'"
          :bopomofo="'ㄗㄨˊ ㄑㄧㄡˊ ㄅㄧˇ ㄙㄞˋ ㄏㄡˋ, ㄖㄣˊ ㄊㄞˋ ㄉㄨㄛ ㄗㄡˇ ㄅㄨˋ ㄉㄨㄥˋ.'"
          :pinyin="'zu2 qiu2 bi3 sai3 hou4, ren2 tai4 duo1 zou3 bu4 dong4.'"
          :translation="'サッカーの試合の後は、人が多すぎて歩けません。'"
        />
        <br>
        <p>
          ・結束
        </p>
        <SentenceFormat
          :sentence="'賞櫻的季節結束了, 天氣越來越暖和.'"
          :bopomofo="'ㄕㄤˇ ㄧㄥ ㄉㄜ˙ ㄐㄧˋ ㄐㄧㄝˊ ㄐㄧㄝˊ ㄕㄨˋ ㄌㄜ˙, ㄊㄧㄢ ㄑㄧˋ ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ ㄋㄨㄢˇ ㄏㄨㄛ˙.'"
          :pinyin="'shang3 ying1 de ji4 jie2 jie2 shu4 le, tia1n qi4 yue4 lai2 yue4 nuan3 huo.'"
          :translation="'花見の季節が終わって、 暖かくなってきました。'"
        />
        <br>
        <p>
          ・最近
        </p>
        <SentenceFormat
          :sentence="'我最近走路去上班.'"
          :bopomofo="'ㄨㄛˇ ㄗㄨㄟˋ ㄐㄧㄣˋ ㄗㄡˇ ㄌㄨˋ ㄑㄩˋ ㄕㄤˋ ㄅㄢ.'"
          :pinyin="'wo3 zui4 jin4 zou3 lu4 qu4 shang4 ban1.'"
          :translation="'最近、歩いて通勤しています。'"
        />
        <br>
        <p>
          ・忙
        </p>
        <SentenceFormat
          :sentence="'太忙的工作對健康不好.'"
          :bopomofo="'ㄊㄞˋ ㄇㄤˊ ㄉㄜ˙ ㄍㄨㄥ ㄗㄨㄛˋ ㄉㄨㄟˋ ㄐㄧㄢˋ ㄎㄤ ㄅㄨˋ ㄏㄠˇ.'"
          :pinyin="'tai4 mang2 de gong1 zuo4 dui4 jian4 kang1 bu4 hao3.'"
          :translation="'忙しすぎる仕事は健康に悪いです。'"
        />
        <br>
        <p>
          ・每
        </p>
        <SentenceFormat
          :sentence="'他每小時休息一次.'"
          :bopomofo="'.'"
          :pinyin="'.'"
          :translation="'彼は一時間に一回休憩します。'"
        />
        <br>
        <p>
          ・天
        </p>
        <SentenceFormat
          :sentence="'每週我上班五天.'"
          :bopomofo="'ㄇㄟˇ ㄓㄡ ㄨㄛˇ ㄕㄤˋ ㄅㄢ ㄨˇ ㄊㄧㄢ.'"
          :pinyin="'mei3 zhou1 wo shang4 ban1 wu3 tian1.'"
          :translation="'私は一週間に5日会社に行きます。'"
        />
        <br>
        <p>
          ・書法
        </p>
        <SentenceFormat
          :sentence="'台灣的孩子們都練習書法嗎?'"
          :bopomofo="'ㄊㄞˊ ㄨㄢ ㄉㄜ˙ ㄏㄞˊ ㄗ˙ ㄇㄣ˙ ㄉㄡ ㄌㄧㄢˋ ㄒㄧˊ ㄕㄨ ㄈㄚˇ ㄇㄚ˙?'"
          :pinyin="'tai2 wan1 de hai2 zi3 men dou1 lian4 xi2 shu1 fa3 ma2?'"
          :translation="'台湾の子供たちはみんな書道を練習しますか?'"
        />
        <br>
        <p>
          ・課
        </p>
        <SentenceFormat
          :sentence="'數學課和化學課都從十點開始， 你要去哪一個?'"
          :bopomofo="'ㄕㄨˋ ㄒㄩㄝˊ ㄎㄜˋ ㄏㄢˋ ㄏㄨㄚˋ ㄒㄩㄝˊ ㄎㄜˋ ㄉㄡ ㄘㄨㄥˊ ㄕˊ ㄉㄧㄢˇ ㄎㄞ ㄕˇ， ㄋㄧˇ ㄧㄠˋ ㄑㄩˋ ㄋㄚˇ ㄧ ㄍㄜ˙?'"
          :pinyin="'shu4 xue2 ke4 han4 hua4 xue2 ke4 dou1 cong2 shi2 dian3 kai1 shi3, ni3 yao4 qu4 na3 yi1 ge4?'"
          :translation="'数学のクラスも化学のクラスも10時からです。 どちらに行きますか?'"
        />
        <br>
        <p>
          ・開始
        </p>
        <SentenceFormat
          :sentence="'聽說那家商店開始賣包子．今天你想去買一個?'"
          :bopomofo="'ㄊㄧㄥ ㄕㄨㄛ ㄋㄚˋ ㄐㄧㄚ ㄕㄤ ㄉㄧㄢˋ ㄎㄞ ㄕˇ ㄇㄞˋ ㄅㄠ ㄗ˙． ㄐㄧㄣ ㄊㄧㄢ ㄋㄧˇ ㄒㄧㄤˇ ㄑㄩˋ ㄇㄞˇ ㄧˊ ㄍㄜˋ?'"
          :pinyin="'ting1 shuo1 na4 jia1 shang1 dian4 kai1 shi3 mai4 bao1 zi3. jin1 tian1 ni3 xiang3 qu4 mai3 yi1 ge4?'"
          :translation="'あの店が肉まんを販売し始めたそうです。 今日買いに行きますか?'"
        />
        <br>
        <p>
          ・字
        </p>
        <SentenceFormat
          :sentence="'這個字怎麼念?'"
          :bopomofo="'ㄓㄜˋ ㄍㄜˋ ㄗˋ ㄗㄣˇ ㄇㄜ˙ ㄋㄧㄢˋ?'"
          :pinyin="'zhe4 ge4 zi4 zen3 me nian4?'"
          :translation="'この字はどのように読むのですか?'"
        />
        <br>
        <p>
          ・寫
        </p>
        <SentenceFormat
          :sentence="'請你寫在這裡你說的語句.'"
          :bopomofo="'ㄑㄧㄥˇ ㄋㄧˇ ㄒㄧㄝˇ ㄗㄞˋ ㄓㄜˋ ㄌㄧˇ ㄋㄧˇ ㄕㄨㄛ ㄉㄜ˙ ㄩˇ ㄐㄩˋ.'"
          :pinyin="'qing3 ni3 xie3 zai4 zhe4 li3 ni3 shuo1 de yu3 ju4.'"
          :translation="'ここにあなたが言った単語を書いてください。'"
        />
        <br>
        <p>
          ・可以
        </p>
        <SentenceFormat
          :sentence="'可以便宜一點房租嗎?'"
          :bopomofo="'ㄎㄜˇ ㄧˇ ㄆㄧㄢˊ ㄧˊ ㄧˋ ㄉㄧㄢˇ ㄈㄤˊ ㄗㄨ ㄇㄚ˙?'"
          :pinyin="'ke3 yi3 pian2 yi2 yi1 dian3 fang2 zu1 ma?.'"
          :translation="'家賃を安くできませんか?'"
        />
        <br>
        <p>
          ・問
        </p>
        <SentenceFormat
          :sentence="'你幫不幫我問店員他們有別的色.'"
          :bopomofo="'ㄋㄧˇ ㄅㄤ ㄅㄨˋ ㄅㄤ ㄨㄛˇ ㄨㄣˋ ㄉㄧㄢˋ ㄩㄢˊ ㄊㄚ ㄇㄣ˙ ㄧㄡˇ ㄅㄧㄝˊ ㄉㄜ˙ ㄙㄜˋ?'"
          :pinyin="'ni3 bang1 bu4 bang1 wo3 wen4 dian4 yuan2 ta1 men you3 bie2 de se4?'"
          :translation="'他の色があるかどうか店員に尋ねてもらえませんか?'"
        />
        <br>
        <p>
          ・等一下
        </p>
        <SentenceFormat
          :sentence="'我等一下得去買牛奶.'"
          :bopomofo="'ㄨㄛˇ ㄉㄥˇ ㄧ ㄒㄧㄚˋ ㄉㄟˇ ㄑㄩˋ ㄇㄞˇ ㄋㄧㄡˊ ㄋㄞˇ.'"
          :pinyin="'wo3 deng3 yi1 xia4 dei3 qu4 mai3 niu2 nai3.'"
          :translation="'後で牛乳を買わなければいけません。'"
        />
        <br>
        <p>
          ・有事
        </p>
        <SentenceFormat
          :sentence="'因為今天有事， 不會去上課.'"
          :bopomofo="'ㄧㄣ ㄨㄟˋ ㄐㄧㄣ ㄊㄧㄢ ㄧㄡˇ ㄕˋ， ㄅㄨˊ ㄏㄨㄟˋ ㄑㄩˋ ㄕㄤˋ ㄎㄜˋ.'"
          :pinyin="'yin1 wei4 jin1 tian1 you3 shi4, bu2 hui4 qu4 shang4 ke4.'"
          :translation="'今日は用事があるので、 授業には行きません。'"
        />
        <br>
        <p>
          ・有意思
        </p>
        <SentenceFormat
          :sentence="'釀酒有意思.'"
          :bopomofo="'ㄋㄧㄤˋ ㄐㄧㄡˇ ㄧㄡˇ ㄧˋ ㄙ.'"
          :pinyin="'niang4 jiu3 you3 yi4 si1.'"
          :translation="'お酒作りは面白いです。'"
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
        { hid: 'description', name: 'description', content: '例文集ページ。 シーン別の対話例や、 テキスト「當代中文課程課」で登場する単語で作成した例文など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: '例文集ページ。 シーン別の対話例や、 テキスト「當代中文課程課」で登場する単語で作成した例文など' }
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
