<template>
  <section>
    <Header
      :name="'sentence'"
    />
    <TextExampleSentenceFormat
      :data="data"
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
import TextExampleSentenceFormat from '../components/textExampleSentenceFormat'
export default {
  components: {
    Header,
    Footer,
    TextExampleSentenceFormat
  },
  head () {
    return {
      title: '例文集 sentence',
      meta: [
        { hid: 'keywords', name: 'keywords', content: '中国語, 台湾, 台湾華語, 繁体字, 単語, 聞き流し, ボポモフォ, 當代中文課程課, 例文' },
        { hid: 'description', name: 'description', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第11章で登場する新単語を使った例文や気づいた事など' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'テキスト「當代中文課程課」の勉強ページ。 3冊目・第11章で登場する新単語を使った例文や気づいた事など' }
      ]
    }
  },
  data () {
    return {
      // 単語数：85
      data: {
        title: '當代中文課程課3・第11章',
        words: [
          {
            word: '建',
            sentence: '我的房子前面建了一棟公寓房， 日光變差了。',
            bopomofo: '.',
            pinyin: '.',
            translation: '家の前に集合住宅が建てられ、 日当たりが悪くなりました。',
            memo: ''
          },
          {
            word: '重建',
            sentence: '需要花費相當的精力來重建信任關係。',
            bopomofo: '.',
            pinyin: '.',
            translation: '信頼関係を再構築するには、 それなりの努力が必要です。',
            memo: ''
          },
          {
            word: '到底',
            sentence: '員工也發表意見， 但是到底老闆決定。',
            bopomofo: '.',
            pinyin: '.',
            translation: '従業員も意見は出しますが、 最終的には上司が決めます。',
            memo: ''
          },
          {
            word: '世紀',
            sentence: '那位百萬富翁購買了幾世紀前做的古董家具。',
            bopomofo: '.',
            pinyin: '.',
            translation: 'その大富豪は、 数世紀前のアンティーク家具を購入しました。',
            memo: ''
          },
          {
            word: '貿易',
            sentence: '在主要港口附近有很多貿易公司。',
            bopomofo: '.',
            pinyin: '.',
            translation: '主要な港の近くには、 貿易会社が多くあります。',
            memo: ''
          },
          {
            word: '商業',
            sentence: '他正在考慮使用當地特產品的新商業。',
            bopomofo: '.',
            pinyin: '.',
            translation: '彼は、 地元の特産品を使った新しいビジネスを検討しています。',
            memo: ''
          },
          {
            word: '利益',
            sentence: '老闆打算三年以內她的公司可以得到利益。',
            bopomofo: '.',
            pinyin: '.',
            translation: '社長は、 3年以内に会社が利益を得ることができるようになると予想しています。',
            memo: ''
          },
          {
            word: '派',
            sentence: '她被公司派來跟海外企業做生意。',
            bopomofo: '.',
            pinyin: '.',
            translation: '海外の企業と取引するために、 彼女は会社から派遣されました。',
            memo: ''
          },
          {
            word: '軍隊',
            sentence: '兩國軍隊都在邊界附近積極進行軍事演習， 緊張正在加劇。',
            bopomofo: '.',
            pinyin: '.',
            translation: '両国の軍隊は国境付近で盛んに軍事演習を行い、 緊張が高まっています。',
            memo: ''
          },
          {
            word: '燒',
            sentence: '當我嘗試點煙時， 我不小心用打火機的火焰燒了劉海。',
            bopomofo: '.',
            pinyin: '.',
            translation: 'タバコに火をつけようとした時、 誤ってライターの炎で前髪も燃やしてしまいました。',
            memo: ''
          },
          {
            word: '城牆',
            sentence: '士兵們正在在城牆上做監視任務。',
            bopomofo: '.',
            pinyin: '.',
            translation: '城壁の上で、 兵隊さんが見張りをしています。',
            memo: ''
          },
          {
            word: '頭髮',
            sentence: '我的頭髮的長度和她的差不多。',
            bopomofo: '.',
            pinyin: '.',
            translation: '私の髪は、 彼女とほぼ同じ長さです。',
            memo: ''
          },
          {
            word: '甚至',
            sentence: '甚至十年來的第一次相聚, 他不會來。',
            bopomofo: '.',
            pinyin: '.',
            translation: '10年来の集まりにすら、 彼は姿を見せません。',
            memo: ''
          },
          {
            word: '打仗',
            sentence: '由於打長期的仗， 難民一直湧向鄰國下去。',
            bopomofo: '.',
            pinyin: '.',
            translation: '長い戦争のせいで、 隣国には難民が押し寄せています。',
            memo: ''
          },
          {
            word: '少數',
            sentence: '少數民族之間的衝突結果變為了泥潭的內戰。',
            bopomofo: '.',
            pinyin: '.',
            translation: '少数民族同士の対立は泥沼の内戦に発展しました。',
            memo: ''
          },
          {
            word: '開墾',
            sentence: '開墾這片土地了的大多數農民都是從外國的來的移民。',
            bopomofo: '.',
            pinyin: '.',
            translation: 'この土地を開墾した農民は、 ほとんどが外国からの移民です。',
            memo: ''
          },
          {
            word: '將軍',
            sentence: '他是自從建國以來最勇敢而聰明的將軍。',
            bopomofo: '.',
            pinyin: '.',
            translation: '彼は、 建国以来最も勇敢で聡明な将軍です。',
            memo: ''
          },
          {
            word: '軍人',
            sentence: '他不是徵兵而是職業軍人。',
            bopomofo: '.',
            pinyin: '.',
            translation: '彼は徴兵された兵士ではなく、 職業軍人です。',
            memo: ''
          },
          {
            word: '平原',
            sentence: '這個平原不適合農業， 所以畜產業很興旺。',
            bopomofo: '.',
            pinyin: '.',
            translation: 'この平原は農業には適さないため、 畜産が盛んです。',
            memo: ''
          },
          {
            word: '人口',
            sentence: '長期不景氣也助長了人口下降。',
            bopomofo: '.',
            pinyin: '.',
            translation: '長引く不況も、 人口減少の一因です。',
            memo: ''
          },
          {
            word: '血統',
            sentence: '我跟大媽不是一個血統。',
            bopomofo: '.',
            pinyin: '.',
            translation: '父方の伯父さんの奥さんと私には、 血縁関係がありません。',
            memo: ''
          },
          {
            word: '嘍',
            sentence: '如果免費, 你一定會去那家酒吧喝啤酒嘍?',
            bopomofo: '.',
            pinyin: '.',
            translation: 'もしタダなら、 間違いなくそのバーにビールを飲みに行くんじゃないですか?',
            memo: ''
          },
          {
            word: '孫子',
            sentence: '奶奶很愛她的孫子， 總是寵壞他。',
            bopomofo: '.',
            pinyin: '.',
            translation: 'おばあさんは孫をとても可愛がっていて、 いつも甘やかしすぎてしまいます。',
            memo: ''
          },
          {
            word: '領土',
            sentence: '每個國家都有多少領土問題。',
            bopomofo: '.',
            pinyin: '.',
            translation: 'どの国にも多少の領土問題は存在します。',
            memo: ''
          },
          {
            word: '男性',
            sentence: '要說是哪一個的話,　該商品在男性中受歡迎。',
            bopomofo: '.',
            pinyin: '.',
            translation: 'この製品は、　どちらかと言うと男性に人気があります。',
            memo: ''
          },
          {
            word: '禁止',
            sentence: '經過禁止亂扔垃圾, 路上變相當乾淨了。',
            bopomofo: '.',
            pinyin: '.',
            translation: 'ポイ捨てを禁止してから、 道路はかなり綺麗になりました。',
            memo: ''
          },
          {
            word: '娶',
            sentence: '自從娶了妻子以來， 他似乎每天都在快樂。',
            bopomofo: '.',
            pinyin: '.',
            translation: 'お嫁さんを貰ってから、 彼は毎日幸せそうです。',
            memo: ''
          },
          {
            word: '相信',
            sentence: '我不能相信他麻將比賽中排名了前十名。',
            bopomofo: '.',
            pinyin: '.',
            translation: '彼が麻雀大会でトップ10に入ったなんて、 信じられません。',
            memo: ''
          },
          {
            word: '精彩',
            sentence: '她的嘻哈舞蹈表演非常精彩。',
            bopomofo: '.',
            pinyin: '.',
            translation: '彼女のヒップホップダンスのパフォーマンスは大変素晴らしいものでした。',
            memo: ''
          },
          {
            word: '紅毛城',
            sentence: '紅毛城最初是西班牙人建造的城堡。',
            bopomofo: '.',
            pinyin: '.',
            translation: '紅毛城は、 元々スペイン人が建てた城です。',
            memo: ''
          },
          {
            word: '東方',
            sentence: '絲綢是從東方給西方帶來的物品之一。',
            bopomofo: '.',
            pinyin: '.',
            translation: '東洋から西洋にもたらされた品物の1つに、 シルクがあります。',
            memo: ''
          },
          {
            word: '淡水',
            sentence: '從台北車站到淡水可以不轉車去嗎?',
            bopomofo: '.',
            pinyin: '.',
            translation: '淡水までは、 台北メインステーションから一本で行けますか?',
            memo: ''
          },
          {
            word: '漢人',
            sentence: '漢人搬到的唐人街遍布世界各地。',
            bopomofo: '.',
            pinyin: '.',
            translation: '漢民族が移り住んだ中華街は、 世界の至る所に点在します。',
            memo: ''
          },
          {
            word: '鄭成功',
            sentence: '台南的安平古堡出售鄭成功薯片作為紀念品。',
            bopomofo: '.',
            pinyin: '.',
            translation: '台南の安平古堡は、 鄭成功ポテトチップスをお土産に販売しています。',
            memo: ''
          },
          {
            word: '明朝',
            sentence: '故宮是在明朝時代建造了。',
            bopomofo: '.',
            pinyin: '.',
            translation: '紫禁城は、 明朝の時代に建てられました。',
            memo: ''
          },
          {
            word: '中南美洲',
            sentence: '如果你去中南美洲， 會說西班牙語是很有利的。',
            bopomofo: '.',
            pinyin: '.',
            translation: '中南米に行くなら、 スペイン語ができると有利です。',
            memo: ''
          },
          {
            word: '清朝',
            sentence: '清朝是中國最後一個統一的朝代。',
            bopomofo: '.',
            pinyin: '.',
            translation: '清朝は、 中国最後の統一王朝です。',
            memo: ''
          },
          {
            word: '大清帝國',
            sentence: '大清帝國是一個龐大的國家， 包括今天的中國和蒙古。',
            bopomofo: '.',
            pinyin: '.',
            translation: '大清帝国は、 現在の中国とモンゴル等も含む巨大な国でした。',
            memo: ''
          },
          {
            word: '輪到',
            sentence: '我的家人輪流做晚飯， 明天輪到爸爸了。',
            bopomofo: '.',
            pinyin: '.',
            translation: '家族で交代で夕飯作りをしていて、 明日はお父さんの番です。',
            memo: ''
          },
          {
            word: '十七世紀初',
            sentence: '十七世紀初, 世界上第一家股份制公司成立了。',
            bopomofo: '.',
            pinyin: '.',
            translation: '17世紀初頭、 世界初の株式会社が設立されました。',
            memo: ''
          },
          {
            word: '打敗',
            sentence: '終於人工智能打敗了圍棋冠軍。',
            bopomofo: '.',
            pinyin: '.',
            translation: 'ついに、 AIが囲碁のチャンピオンを打ち負かしました。',
            memo: ''
          },
          {
            word: '十七世紀末',
            sentence: '萬有引力定律是在十七世紀末發表的。',
            bopomofo: '.',
            pinyin: '.',
            translation: '万有引力の法則は、 17世紀の末に発表されました。',
            memo: ''
          },
          {
            word: '餐桌',
            sentence: '在餐桌上餐具已經整齊地放好。',
            bopomofo: '.',
            pinyin: '.',
            translation: 'ダイニングテーブルには、 既に食器がセッティングがされています。',
            memo: ''
          },
          {
            word: '中式',
            sentence: '中式餐桌可以旋轉， 很方便拿到菜。',
            bopomofo: '.',
            pinyin: '.',
            translation: '中華風のダイニングテーブルは回転するので、 料理を取るのに便利です。',
            memo: ''
          },
          {
            word: '套',
            sentence: '似乎缺少刀叉， 請你拿幾套給我?',
            bopomofo: '.',
            pinyin: '.',
            translation: 'ナイフとフォークが足りないみたいなので、 何セットか持ってきてもらえませんか?',
            memo: ''
          },
          {
            word: '燒餅',
            sentence: '那家店的很受歡迎的燒餅, 我沒想到只在二個小時卻都賣光了。',
            bopomofo: '.',
            pinyin: '.',
            translation: 'その店で人気の燒餅が、 たった2時間で完売するとは思ってもみませんでした。',
            memo: ''
          },
          {
            word: '油條',
            sentence: '油條浸泡在豆漿一起吃很美味。',
            bopomofo: '.',
            pinyin: '.',
            translation: '油條を豆乳に浸して一緒に食べると美味しいです。',
            memo: ''
          },
          {
            word: '飯糰',
            sentence: '我用飯糰把午餐簡單地吃完。',
            bopomofo: '.',
            pinyin: '.',
            translation: 'お昼ご飯は、 おにぎりで簡単に済ませます。',
            memo: ''
          },
          {
            word: '豆漿',
            sentence: '取決於用作原料的豆類， 可以做到很多不同的豆漿。',
            bopomofo: '.',
            pinyin: '.',
            translation: '原料にする豆によって、 様々な種類の豆乳ができます。',
            memo: ''
          },
          {
            word: '內戰',
            sentence: '內戰給國民帶來貧困, 人口的一半失掉了房子。',
            bopomofo: '.',
            pinyin: '.',
            translation: '内戦は人々に貧困をもたらし、 人口の半分は家を失いました。',
            memo: ''
          },
          {
            word: '人民',
            sentence: '中產階級人民的生活是相似的。',
            bopomofo: '.',
            pinyin: '.',
            translation: '中流階級の人々の暮らしは似たり寄ったりです。',
            memo: ''
          },
          {
            word: '攤子',
            sentence: '有幾家賣相同小吃的攤子， 但是我喜歡那家店的口味。',
            bopomofo: '.',
            pinyin: '.',
            translation: '同じスナックを売っている屋台はいくつかありますが、 私はあの店の味がお気に入りです。',
            memo: ''
          },
          {
            word: '菜單',
            sentence: '他不會說當地的語言, 所以在餐廳靠菜單上的照片點菜。',
            bopomofo: '.',
            pinyin: '.',
            translation: '彼は地元の言葉を話せないので、 レストランのメニューの写真を使って注文します。',
            memo: ''
          },
          {
            word: '蘿萄',
            sentence: '收穫了直徑大概十厘米的很棒的蘿萄。',
            bopomofo: '.',
            pinyin: '.',
            translation: '直径およそ10センチメートルの立派な大根が採れました。',
            memo: ''
          },
          {
            word: '接著',
            sentence: '她打開了窗戶， 接著把洗好的衣服收進來了。',
            bopomofo: '.',
            pinyin: '.',
            translation: '彼女は窓を開けてすぐに、 洗濯物を取り込みました。',
            memo: ''
          },
          {
            word: '戰爭',
            sentence: '那位演員的演過的電影我什麼都看過了, 就是這個戰爭片我還沒看。',
            bopomofo: '.',
            pinyin: '.',
            translation: 'あの俳優が演じたもの映画は全て見ましたが、 この戦争映画は見たことがありません。',
            memo: '※「什麼都.., 就是..」。'
          },
          {
            word: '不断',
            sentence: '因為他不断問， 她終於生氣了。',
            bopomofo: '.',
            pinyin: '.',
            translation: '彼がひっきりなしに質問したので、 彼女はとうとう怒り出してしまいました。',
            memo: ''
          },
          {
            word: '遷移',
            sentence: '我想引入一個新系統， 但是我擔心數據遷移是否會成功。',
            bopomofo: '.',
            pinyin: '.',
            translation: '新しいシステムを導入したいのですが、 データ移行が上手くいくか心配です。',
            memo: ''
          },
          {
            word: '多半',
            sentence: '在多半情況下， 我在最晚八點從工作解放了。',
            bopomofo: '.',
            pinyin: '.',
            translation: 'ほとんどの場合、 遅くとも8時には仕事から解放されます。',
            memo: ''
          },
          {
            word: '困難',
            sentence: '睡覺的時候覺得呼吸困難就醒來了， 原來是貓坐在我的胸口上。',
            bopomofo: '.',
            pinyin: '.',
            translation: '寝ている時に息苦しくて目が覚めたら、 猫が胸の上に座っていました。',
            memo: ''
          },
          {
            word: '節儉',
            sentence: '吃節儉的菜既對身體健康好又可以節省錢。',
            bopomofo: '.',
            pinyin: '.',
            translation: '質素なおかずを食べる事は健康的な上に、 お金の節約にもなります。',
            memo: ''
          },
          {
            word: '主婦',
            sentence: '從結婚的時候以後, 她成為主婦了。',
            bopomofo: '.',
            pinyin: '.',
            translation: '結婚してから、 彼女は主婦になりました。',
            memo: ''
          },
          {
            word: '煎',
            sentence: '我會煎培根到脆皮， 在麵包中加著跟煎雞蛋一起吃。',
            bopomofo: '.',
            pinyin: '.',
            translation: 'ベーコンをカリカリに焼いてから、 目玉焼きと一緒にパンに挟んで食べます。',
            memo: ''
          },
          {
            word: '菜色',
            sentence: '她的平常飲食很簡單, 但是在菜色上很講究',
            bopomofo: '.',
            pinyin: '.',
            translation: '彼女の普段の食事はとてもシンプルですが、 料理のバラエティにはこだわりがあります。',
            memo: ''
          },
          {
            word: '以及',
            sentence: '請教職員工以及學生集合在體育館。',
            bopomofo: '.',
            pinyin: '.',
            translation: '教職員及び生徒は、 体育館に集まって下さい。',
            memo: ''
          },
          {
            word: '美味',
            sentence: '五顏六色的水果看上去很美味。',
            bopomofo: '.',
            pinyin: '.',
            translation: '色とりどりの果物がとても美味しそうです。',
            memo: ''
          },
          {
            word: '點心',
            sentence: '我還沒學過這個點心的做法。',
            bopomofo: '.',
            pinyin: '.',
            translation: '私はまだ、 このデザートの作り方を学んでいません。',
            memo: ''
          },
          {
            word: '日式',
            sentence: '壽司和天婦羅等日式料理在海外也聞名。',
            bopomofo: '.',
            pinyin: '.',
            translation: '寿司や天ぷらなどの日本料理は海外でも有名です。',
            memo: ''
          },
          {
            word: '飲食',
            sentence: '糖化物占我的大部分的飲食。',
            bopomofo: '.',
            pinyin: '.',
            translation: '炭水化物は私の食事の大部分を占めています。',
            memo: ''
          },
          {
            word: '深',
            sentence: '當你離岸一點時， 這個海灘突然變得更深。',
            bopomofo: '.',
            pinyin: '.',
            translation: 'このビーチは、 少し沖へ行くと急に水深が深くなります。',
            memo: ''
          },
          {
            word: '蔣介石',
            sentence: '在蔣介石時代， 頒布了長期的戒嚴法。',
            bopomofo: '.',
            pinyin: '.',
            translation: '蒋介石の時代には、 長期にわたる戒厳令がしかれました。',
            memo: ''
          },
          {
            word: '國共內戰',
            sentence: '在國共內戰中， 國民黨和中國共產黨進行了鬥爭。',
            bopomofo: '.',
            pinyin: '.',
            translation: '国共内戦では、 中国国民党と中国共産党とが戦いました。',
            memo: ''
          },
          {
            word: '客家人',
            sentence: '客家人自古以來就反复遷徙。',
            bopomofo: '.',
            pinyin: '.',
            translation: '客家人は古来から、 移住を繰り返してきました。',
            memo: ''
          },
          {
            word: '閩南人',
            sentence: '清朝時期， 一些閩南人從福建南部移民到台灣。',
            bopomofo: '.',
            pinyin: '.',
            translation: '閩南人の一部は、 清朝時代に福建省南部から台湾に移住しました。',
            memo: ''
          },
          {
            word: '蛋餅',
            sentence: '甜醬也是蛋餅味道的致勝的關鍵。',
            bopomofo: '.',
            pinyin: '.',
            translation: '甘めのソースも、 蛋餅の味の決め手です。',
            memo: ''
          },
          {
            word: '打輸',
            sentence: '由於某些原因， 我總是剪刀石頭布打輸。',
            bopomofo: '.',
            pinyin: '.',
            translation: 'ジャンケンには何故かいつも負けてしまいます。',
            memo: ''
          },
          {
            word: '擺攤子',
            sentence: '我會擺章魚燒的攤子， 所以請你們來吃。',
            bopomofo: '.',
            pinyin: '.',
            translation: 'たこ焼きの屋台を出すので、 是非食べに来てください。',
            memo: ''
          },
          {
            word: '蘿蔔糕',
            sentence: '我喜歡蘿蔔糕的粘粘的口感。',
            bopomofo: '.',
            pinyin: '.',
            translation: '大根餅のもちもちとした食感が好きです。',
            memo: ''
          },
          {
            word: '烹飪課',
            sentence: '在烹飪課上， 從怎麼把食材事前大致準備仔細地教你。',
            bopomofo: '.',
            pinyin: '.',
            translation: '料理教室では、 食材の下処理から丁寧に教えてくれます。',
            memo: ''
          },
          {
            word: '曬乾',
            sentence: '曬乾的水果不但變可以長期保存， 而且增加了它們的甜度。',
            bopomofo: '.',
            pinyin: '.',
            translation: '果物を天日干しすると、 長期保存が可能になるだけでなく甘みも増します。',
            memo: ''
          },
          {
            word: '各種各樣',
            sentence: '遊樂園裡有各種各樣的遊樂設施， 但是因為暈了他不能坐任何一個。',
            bopomofo: '.',
            pinyin: '.',
            translation: '遊園地にある様々なアトラクションがありますが、彼は酔ってしまうのでどれも乗れません。',
            memo: ''
          },
          {
            word: '殖民統治',
            sentence: '在殖民統治下， 大多數時候與當地人發生軍事衝突。',
            bopomofo: '.',
            pinyin: '.',
            translation: '植民地支配においては、 ほとんどの場合現地人との間で軍事的な衝突が起こります。',
            memo: ''
          },
          {
            word: '味噌湯',
            sentence: '我會冰箱裡的剩下的蔬菜用作味噌湯的成分。',
            bopomofo: '.',
            pinyin: '.',
            translation: '冷蔵庫の中の余っている野菜を、 味噌汁の具にします。',
            memo: ''
          },
          {
            word: '蘿蔔乾',
            sentence: '蘿蔔乾洗淨， 在水中浸泡一陣子去除鹽分。',
            bopomofo: '.',
            pinyin: '.',
            translation: '乾燥大根を綺麗に洗い、 しばらく水に浸して塩分を取り除きます。',
            memo: ''
          },
          {
            word: '進一步',
            sentence: '這個城市通過重建得到了進一步發展。',
            bopomofo: '.',
            pinyin: '.',
            translation: 'この街は、 再開発によって更なる発展を遂げました。',
            memo: ''
          }
        ]
      }
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
