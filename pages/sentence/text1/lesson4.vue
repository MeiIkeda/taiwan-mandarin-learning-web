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
          當代中文課程課1・第4章
        </h1>
        <p>
          【新単語+例文】
        </p>
        <p>
          ・一共
        </p>
        <SentenceFormat
          :sentence="'你的公司有一共多少日本人?'"
          :bopomofo="'ㄋㄧˇ ㄉㄜ˙ ㄍㄨㄥ ㄙ ㄧㄡˇ ㄧˇ ㄍㄨㄥˋ ㄉㄨㄛ ㄕㄠˇ ㄖˋ ㄅㄣˇ ㄖㄣˊ?'"
          :pinyin="'ni3 de gong1 si1 you3 yi2 gong4 duo1 shao3 ri4 ben3 ren2?'"
          :translation="'あなたの会社には何人の日本人がいますか？'"
        />
        <br>
        <p>
          ・多少
        </p>
        <SentenceFormat
          :sentence="'今天作業多少?'"
          :bopomofo="'ㄐㄧㄣ ㄊㄧㄢ ㄗㄨㄛˋ ㄧㄝˋ ㄉㄨㄛ ㄕㄠˇ?'"
          :pinyin="'jin1 tian1 zuo4 ye4 duo1 shao3?'"
          :translation="'今日の宿題の量はどれくらいですか?'"
        />
        <br>
        <p>
          ・錢
        </p>
        <SentenceFormat
          :sentence="'這個月我沒有錢.'"
          :bopomofo="'ㄓㄜˋ ㄍㄜˋ ㄩㄝˋ ㄨㄛˇ ㄇㄟˊ ㄧㄡˇ ㄑㄧㄢˊ.'"
          :pinyin="'zhe4 ge4 yue4 wo3 mei2 you3 qian2.'"
          :translation="'今月はお金がありません。'"
        />
        <br>
        <p>
          ・老闆
        </p>
        <SentenceFormat
          :sentence="'老闆看起來很忙.'"
          :bopomofo="'ㄌㄠˇ ㄅㄢˇ ㄎㄢˋ ㄑㄧˇ ㄌㄞˊ ㄏㄣˇ ㄇㄤˊ.'"
          :pinyin="'lao3 ban3 kan4 qi3 lai2 hen3 mang2.'"
          :translation="'店主は忙しそうです。'"
        />
        <br>
        <p>
          ・買
        </p>
        <SentenceFormat
          :sentence="'我會去超市買東西.'"
          :bopomofo="'ㄨㄛˇ ㄏㄨㄟˋ ㄑㄩˋ ㄔㄠ ㄕˋ ㄇㄞˇ ㄉㄨㄥ ㄒㄧ˙.'"
          :pinyin="'wo3 hui4 qu4 chao1 shi4 mai3 dong1 xi.'"
          :translation="'スーパーに行って買い物をします。'"
        />
        <br>
        <p>
          ・杯
        </p>
        <SentenceFormat
          :sentence="'你要一杯冰水嗎?'"
          :bopomofo="'ㄋㄧˇ ㄧㄠˋ ㄧ ㄅㄟ ㄅㄧㄥ ㄕㄨㄟˇ ㄇㄚ˙?'"
          :pinyin="'ni3 yao4 yi1 be1i bing1 shui3 ma2?'"
          :translation="'氷水を一杯いかがですか?'"
        />
        <br>
        <p>
          ・熱
        </p>
        <SentenceFormat
          :sentence="'這杯咖啡太熱了.'"
          :bopomofo="'ㄓㄜˋ ㄅㄟ ㄎㄚ ㄈㄟ ㄊㄞˋ ㄖㄜˋ ㄌㄜ˙.'"
          :pinyin="'zhe4 be1i ka1 fe1i tai4 re4 le.'"
          :translation="'この一杯のコーヒーは熱すぎる。'"
        />
        <br>
        <p>
          ・包子
        </p>
        <SentenceFormat
          :sentence="'我會買兩個包子,給你一個之中．'"
          :bopomofo="'ㄨㄛˇ ㄏㄨㄟˋ ㄇㄞˇ ㄌㄧㄤˇ ㄍㄜˋ ㄅㄠ ㄗ˙, ㄍㄟˇ ㄋㄧˇ ㄧˊ ㄍㄜˋ ㄓ ㄓㄨㄥ.'"
          :pinyin="'wo3 hui4 mai3 liang3 ge4 bao1 zi3, gei3 ni3 yi1 ge4 zhi1 zhong1.'"
          :translation="'肉まんを2つ買って、1つあげます。'"
        />
        <br>
        <p>
          ・要
        </p>
        <SentenceFormat
          :sentence="'我要一杯中杯綜合果汁, 微糖微冰.'"
          :bopomofo="'ㄨㄛˇ ㄧㄠˋ ㄧ ㄅㄟ ㄓㄨㄥ ㄅㄟ ㄗㄨㄥ ㄏㄜˊ ㄍㄨㄛˇ ㄓ, ㄨㄟ ㄊㄤˊ ㄨㄟ ㄅㄧㄥ.'"
          :pinyin="'wo3 yao4 yi1 be1i zhong1 be1i zong1 he2 guo3 zhi1, we1i tang2 we1i bing1.'"
          :translation="'ミディアムのミックスジュースを下さい、砂糖と氷少なめで。'"
        />
        <br>
        <p>
          ・大
        </p>
        <SentenceFormat
          :sentence="'大杯多大?'"
          :bopomofo="'ㄉㄚˋ ㄅㄟ ㄉㄨㄛ ㄉㄚˋ?'"
          :pinyin="'da4 be1i duo1 da4?'"
          :translation="'ラージサイズはどのくらい大きいですか?'"
        />
        <br>
        <p>
          ・中
        </p>
        <SentenceFormat
          :sentence="'我要點中杯拿鐵.'"
          :bopomofo="'ㄨㄛˇ ㄧㄠˋ ㄉㄧㄢˇ ㄓㄨㄥ ㄅㄟ ㄋㄚˊ ㄊㄧㄝˇ.'"
          :pinyin="'wo3 yao4 dian3 zhong1 bei1 na2 tie3.'"
          :translation="'ミディアムラテを注文したいです。'"
        />
        <br>
        <p>
          ・小
        </p>
        <SentenceFormat
          :sentence="'我不餓, 會買小碗的魯肉飯.'"
          :bopomofo="'ㄨㄛˇ ㄅㄨˋ ㄜˋ, ㄏㄨㄟˋ ㄇㄞˇ ㄒㄧㄠˇ ㄨㄢˇ ㄉㄜ˙ ㄌㄨˇ ㄖㄡˋ ㄈㄢˋ.'"
          :pinyin="'wo3 bu2 e4, hui4 mai3 xiao3 wan3 de lu3 rou4 fan4.'"
          :translation="'お腹がすいていないので、ルーロー飯のスモールを買います。'"
        />
        <br>
        <p>
          ・幫
        </p>
        <SentenceFormat
          :sentence="'你幫我找我的錢包嗎?'"
          :bopomofo="'ㄋㄧˇ ㄅㄤ ㄨㄛˇ ㄓㄠˇ ㄨㄛˇ ㄉㄜ˙ ㄑㄧㄢˊ ㄅㄠ ㄇㄚ˙?'"
          :pinyin="'ni3 bang1 wo3 zhao3 wo3 de qian2 bao1 ma2?'"
          :translation="'私の財布を探すのを手伝ってくれませんか?'"
        />
        <br>
        <p>
          ・微波
        </p>
        <SentenceFormat
          :sentence="'用微波煮拉麵.'"
          :bopomofo="'ㄩㄥˋ ㄨㄟ ㄅㄛ ㄓㄨˇ ㄌㄚ ㄇㄧㄢˋ.'"
          :pinyin="'yong4 wei1 bo1 zhu3 la1 mian4.'"
          :translation="'電子レンジでラーメンを調理します。'"
        />
        <br>
        <p>
          ・百
        </p>
        <SentenceFormat
          :sentence="'我買一百塊的衣服了, 那件很便宜.'"
          :bopomofo="'ㄨㄛˇ ㄇㄞˇ ㄧ ㄅㄞˇ ㄎㄨㄞˋ ㄉㄜ˙ ㄧ ㄈㄨˊ ㄌㄜ˙, ㄋㄚˋ ㄐㄧㄢˋ ㄏㄣˇ ㄆㄧㄢˊ ㄧˊ.'"
          :pinyin="'wo3 mai3 yi1 bai3 kuai4 de yi1 fu2 le, na4 jian4 hen3 pian2 yi2.'"
          :translation="'100元の服を購入しました。 とても安かったです。'"
        />
        <br>
        <p>
          ・塊
        </p>
        <SentenceFormat
          :sentence="'我要買一塊起司.'"
          :bopomofo="'ㄨㄛˇ ㄧㄠˋ ㄇㄞˇ ㄧˊ ㄎㄨㄞˋ ㄑㄧˇ ㄙ.'"
          :pinyin="'wo3 yao4 mai3 yi1 kuai4 qi3 si1.'"
          :translation="'チーズを買いたいです。'"
        />
        <br>
        <p>
          ・好的
        </p>
        <SentenceFormat
          :sentence="'我們沒有牛奶, 黑咖啡是OK嗎? 好的.'"
          :bopomofo="'ㄨㄛˇ ㄇㄣ˙ ㄇㄟˊ ㄧㄡˇ ㄋㄧㄡˊ ㄋㄞˇ, ㄏㄟ ㄎㄚ ㄈㄟ ㄕˋ OK ㄇㄚ˙? ㄏㄠˇ ㄉㄜ˙.'"
          :pinyin="'wo3 men mei2 you3 niu2 nai3, he1i ka1 fe1i shi4 OK ma2? hao3 de.'"
          :translation="'牛乳がありません、ブラックコーヒーでも大丈夫ですか? 大丈夫です。'"
        />
        <br>
        <p>
          ・外帶
        </p>
        <SentenceFormat
          :sentence="'我要一杯小杯熱咖啡, 外帶.'"
          :bopomofo="'ㄨㄛˇ ㄧㄠˋ ㄧ ㄅㄟ ㄒㄧㄠˇ ㄅㄟ ㄖㄜˋ ㄎㄚ ㄈㄟ, ㄨㄞˋ ㄉㄞˋ.'"
          :pinyin="'wo3 yao4 yi1 bei1 xiao3 bei1 re4 ka1 fei1, wai4 dai4.'"
          :translation="'ホットコーヒーのスモールを持ち帰りでお願いします。'"
        />
        <br>
        <p>
          ・內用
        </p>
        <SentenceFormat
          :sentence="'我要一個漢堡和炸薯條, 內用.'"
          :bopomofo="'ㄨㄛˇ ㄧㄠˋ ㄧˊ ㄍㄜˋ ㄏㄢˋ ㄅㄠˇ ㄏㄢˋ ㄓㄚˊ ㄕㄨˇ ㄊㄧㄠˊ, ㄋㄟˋ ㄩㄥˋ.'"
          :pinyin="'wo3 yao4 yi1 ge4 han4 bao3 han4 zha2 shu3 tiao2, nei4 yong4.'"
          :translation="'ハンバーガーとフライドポテトを下さい、店内で。'"
        />
        <br>
        <p>
          ・支
        </p>
        <SentenceFormat
          :sentence="'我給媽媽我舊的一支手機.'"
          :bopomofo="'ㄨㄛˇ ㄍㄟˇ ㄇㄚ ㄇㄚ ㄨㄛˇ ㄐㄧㄡˋ ㄉㄜ˙ ㄧ ㄓ ㄕㄡˇ ㄐㄧ.'"
          :pinyin="'wo3 gei3 ma1 ma wo3 jiu4 de yi1 zhi1 shou3 ji1.'"
          :translation="'母に私の古い携帯をあげました。'"
        />
        <br>
        <p>
          ・新
        </p>
        <SentenceFormat
          :sentence="'他常買新的電腦.'"
          :bopomofo="'ㄊㄚ ㄔㄤˊ ㄇㄞˇ ㄒㄧㄣ ㄉㄜ˙ ㄉㄧㄢˋ ㄋㄠˇ.'"
          :pinyin="'ta1 chang2 mai3 xin1 de dian4 nao3.'"
          :translation="'彼はよく新しいパソコンを買います。'"
        />
        <br>
        <p>
          ・手機
        </p>
        <SentenceFormat
          :sentence="'最近手機可以照相.'"
          :bopomofo="'ㄗㄨㄟˋ ㄐㄧㄣˋ ㄕㄡˇ ㄐㄧ ㄎㄜˇ ㄧˇ ㄓㄠˋ ㄒㄧㄤˋ.'"
          :pinyin="'zui4 jin4 shou3 ji1 ke3 yi3 zhao4 xiang4.'"
          :translation="'最近の携帯は写真が撮れます。'"
        />
        <br>
        <p>
          ・太
        </p>
        <SentenceFormat
          :sentence="'我的電腦太慢了.'"
          :bopomofo="'ㄨㄛˇ ㄉㄜ˙ ㄉㄧㄢˋ ㄋㄠˇ ㄊㄞˋ ㄇㄢˋ ㄌㄜ˙.'"
          :pinyin="'wo3 de dian4 nao3 tai4 man4 le.'"
          :translation="'私のパソコンは遅すぎる。'"
        />
        <br>
        <p>
          ・舊
        </p>
        <SentenceFormat
          :sentence="'我的舊家有兩層.'"
          :bopomofo="'ㄨㄛˇ ㄉㄜ˙ ㄐㄧㄡˋ ㄐㄧㄚ ㄧㄡˇ ㄌㄧㄤˇ ㄘㄥˊ.'"
          :pinyin="'wo3 de jiu4 jia1 you3 liang3 ceng2.'"
          :translation="'私の古い家は2階建てです。'"
        />
        <br>
        <p>
          ・了
        </p>
        <SentenceFormat
          :sentence="'夏天來了.'"
          :bopomofo="'ㄒㄧㄚˋ ㄊㄧㄢ ㄌㄞˊ ㄌㄜ˙.'"
          :pinyin="'xia4 tian1 lai2 le.'"
          :translation="'夏が来た。'"
        />
        <br>
        <p>
          ・種
        </p>
        <SentenceFormat
          :sentence="'這是哪種種子?'"
          :bopomofo="'ㄓㄜˋ ㄕˋ ㄋㄚˇ ㄓㄨㄥˇ ㄓㄨㄥˇ ㄗ˙?'"
          :pinyin="'zhe4 shi4 na3 zhong3 zhong3 zi3?'"
          :translation="'これは何の種ですか?'"
        />
        <br>
        <p>
          ・能
        </p>
        <SentenceFormat
          :sentence="'我不能出去, 這麼無聊.'"
          :bopomofo="'ㄨㄛˇ ㄅㄨˋ ㄋㄥˊ ㄔㄨ ㄑㄩˋ, ㄓㄜˋ ㄇㄜ˙ ㄨˊ ㄌㄧㄠˊ.'"
          :pinyin="'wo3 bu4 neng2 chu1 qu4, zhe4 me wu2 liao2.'"
          :translation="'外に出られないので、つまらない。'"
        />
        <br>
        <p>
          ・上網
        </p>
        <SentenceFormat
          :sentence="'舊的手機不能上網.'"
          :bopomofo="'ㄐㄧㄡˋ ㄉㄜ˙ ㄕㄡˇ ㄐㄧ ㄅㄨˋ ㄋㄥˊ ㄕㄤˋ ㄨㄤˇ.'"
          :pinyin="'jiu4 de shou3 ji1 bu4 neng2 shang4 wang3.'"
          :translation="'古い携帯はインターネットが使えない。'"
        />
        <br>
        <p>
          ・那
        </p>
        <SentenceFormat
          :sentence="'那個人是我的朋友.'"
          :bopomofo="'ㄋㄚˋ ㄍㄜˋ ㄖㄣˊ ㄕˋ ㄨㄛˇ ㄉㄜ˙ ㄆㄥˊ ㄧㄡˇ.'"
          :pinyin="'na4 ge4 ren2 shi4 wo3 de peng2 you3.'"
          :translation="'あの人は私の友達です。'"
        />
        <br>
        <p>
          ・貴
        </p>
        <SentenceFormat
          :sentence="'我不賣貴衣服.'"
          :bopomofo="'ㄨㄛˇ ㄅㄨˋ ㄇㄞˋ ㄍㄨㄟˋ ㄧ ㄈㄨˊ.'"
          :pinyin="'wo3 bu4 mai4 gui4 yi1 fu2.'"
          :translation="'私は高い服を買いません。'"
        />
        <br>
        <p>
          ・賣
        </p>
        <SentenceFormat
          :sentence="'他賣他的舊手機.'"
          :bopomofo="'ㄊㄚ ㄇㄞˋ ㄊㄚ ㄉㄜ˙ ㄐㄧㄡˋ ㄕㄡˇ ㄐㄧ.'"
          :pinyin="'ta1 mai4 ta1 de jiu4 shou3 ji1.'"
          :translation="'彼は彼の古い携帯を売った。'"
        />
        <br>
        <p>
          ・便宜
        </p>
        <SentenceFormat
          :sentence="'我愛便宜的東西.'"
          :bopomofo="'ㄨㄛˇ ㄞˋ ㄆㄧㄢˊ ㄧˊ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ˙.'"
          :pinyin="'wo3 ai4 pian2 yi2 de dong1 xi.'"
          :translation="'私は安いものが大好きです。'"
        />
        <br>
        <p>
          ・要
        </p>
        <SentenceFormat
          :sentence="'飛機票要五千多.'"
          :bopomofo="'ㄈㄟ ㄐㄧ ㄆㄧㄠˋ ㄧㄠˋ ㄨˇ ㄑㄧㄢ ㄉㄨㄛ.'"
          :pinyin="'fei1 ji1 piao4 yao4 wu3 qian1 duo1.'"
          :translation="'航空券の価格は5,000NT以上です。'"
        />
        <br>
        <p>
          ・萬
        </p>
        <SentenceFormat
          :sentence="'日本得最貴錢是一萬圓.'"
          :bopomofo="'ㄖˋ ㄅㄣˇ ㄉㄜˊ ㄗㄨㄟˋ ㄍㄨㄟˋ ㄑㄧㄢˊ ㄕˋ ㄧ ㄨㄢˋ ㄩㄢˊ.'"
          :pinyin="'ri4 ben3 de zui4 gui4 qian2 shi4 yi1 wan4 yuan2.'"
          :translation="'日本で一番高いお金は１万円です。'"
        />
        <br>
        <p>
          ・千
        </p>
        <SentenceFormat
          :sentence="'台灣的一千元有小朋友.'"
          :bopomofo="'ㄊㄞˊ ㄨㄢ ㄉㄜ˙ ㄧ ㄑㄧㄢ ㄩㄢˊ ㄧㄡˇ ㄒㄧㄠˇ ㄆㄥˊ ㄧㄡˇ.'"
          :pinyin="'tai2 wan1 de yi1 qian1 yuan2 you3 xiao3 peng2 you3.'"
          :translation="'台湾の千元札には子供(絵)がいます。'"
        />
        <br>
        <p>
          ・為什麼
        </p>
        <SentenceFormat
          :sentence="'為什麼我不會說中文.'"
          :bopomofo="'ㄨㄟˋ ㄕˊ ㄇㄜ˙ ㄨㄛˇ ㄅㄨˊ ㄏㄨㄟˋ ㄕㄨㄛ ㄓㄨㄥ ㄨㄣˊ.'"
          :pinyin="'wei4 shen2 me wo3 bu2 hui4 shuo1 zhong4 wen2.'"
          :translation="'なぜ私は中国語が話せないのか。'"
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
