<template>
  <section class="container_vocabulary">
    <Header
      :name="'bopomofo'"
    />
    <GoogleAds />
    <div class="main-image-bopomofo">
      <b-alert v-model="showErrorAlert" style="color: red; background-color: transparent; border-color: transparent" variant="info">
        {{ error_message }}
      </b-alert>
      <div align="center">
        <br>
        <div style="color: black">
          表1.Bopomofo
        </div>
        <table align="center" style="table-layout:fixed; text-align: center">
          <!--1行目-->
          <tbody>
            <tr>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.b)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.b }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.d)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.d }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button style="background-color: #f5f5f5; color: black" disabled>
                  &nbsp;{{ tone.three }}&nbsp;
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button style="background-color: #f5f5f5; color: black" disabled>
                  &nbsp;{{ tone.four }}&nbsp;
                </b-button>
              </td>

              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.zh)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.zh }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button style="background-color: #f5f5f5; color: black" disabled>
                  &nbsp;{{ tone.two }}&nbsp;
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button style="background-color: #f5f5f5; color: black" disabled>
                  &nbsp;{{ tone.five }}&nbsp;
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.a)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.a }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.ai)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.ai }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.an)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.an }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.er)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.er }}
                </b-button>
              </td>
            </tr>
            <tr>
              <td>{{ pinyin.b }}</td><td>{{ pinyin.d }}</td><td /><td /><td>{{ pinyin.zh }}</td><td /><td /><td>{{ pinyin.a }}</td><td>{{ pinyin.ai }}</td><td>{{ pinyin.an }}</td><td>{{ pinyin.er }}</td>
            </tr>
          </tbody>
        </table>
        <table align="center" style="table-layout:fixed; text-align: center">
          <!--2行目-->
          <tbody>
            <tr>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.p)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.p }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.t)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.t }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.g)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.g }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.j)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.j }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.ch)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.ch }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.z)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.z }}
                </b-button>
              </td><td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.y)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.y }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.o)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.o }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.ei)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.ei }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.en)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.en }}
                </b-button>
              </td>
            </tr>
            <tr>
              <td>{{ pinyin.p }}</td><td>{{ pinyin.t }}</td><td>{{ pinyin.g }}</td><td>{{ pinyin.j }}</td><td>{{ pinyin.ch }}</td><td>{{ pinyin.z }}</td><td>{{ pinyin.y }}</td><td>{{ pinyin.o }}</td><td>{{ pinyin.ei }}</td><td>{{ pinyin.en }}</td>
            </tr>
          </tbody>
        </table>

        <table align="center" style="margin-left:40px; table-layout:fixed; text-align: center">
          <!--3行目-->
          <tbody>
            <tr>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.m)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.m }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.n)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.n }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.k)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.k }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.q)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.q }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.sh)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.sh }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.c)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.c }}
                </b-button>
              </td><td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.w)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.w }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.e)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.e }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.ao)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.ao }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.ang)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.ang }}
                </b-button>
              </td>
            </tr>
            <tr>
              <td>{{ pinyin.m }}</td><td>{{ pinyin.n }}</td><td>{{ pinyin.k }}</td><td>{{ pinyin.q }}</td><td>{{ pinyin.sh }}</td><td>{{ pinyin.c }}</td><td>{{ pinyin.w }}</td><td>{{ pinyin.e }}</td><td>{{ pinyin.ao }}</td><td>{{ pinyin.ang }}</td>
            </tr>
          </tbody>
        </table>
        <table align="center" style="margin-left:0px; table-layout:fixed; text-align: center">
          <!--4行目-->
          <tbody>
            <tr>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.f)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.f }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.l)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.l }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.h)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.h }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.x)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.x }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.r)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.r }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.s)" style="background-color: #f0fff0; color: black">
                  {{ bopomofo.s }}
                </b-button>
              </td><td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.yu)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.yu }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.eh)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.eh }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.ou)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.ou }}
                </b-button>
              </td>
              <td style="width:20px;">
                <b-button @click="speak_bopomofo(bopomofo.eng)" style="background-color: #f0f8ff; color: black">
                  {{ bopomofo.eng }}
                </b-button>
              </td>
            </tr>
            <tr>
              <td>{{ pinyin.f }}</td><td>{{ pinyin.l }}</td><td>{{ pinyin.h }}</td><td>{{ pinyin.x }}</td><td>{{ pinyin.r }}</td><td>{{ pinyin.s }}</td><td>{{ pinyin.yu }}</td><td>{{ pinyin.eh }}</td><td>{{ pinyin.ou }}</td><td>{{ pinyin.eng }}</td>
            </tr>
          </tbody>
        </table>
        <!-- <p>声調記号</p>-->
        <br>
        <div style="color: black; white-space: nowrap">
          表2.声調記号
        </div>
        <table class="table-bordered">
          <thead class="thead-light" style="background-color: #e6e6fa">
            <tr><th>第一声</th><th>第二声</th><th>第三声</th><th>第四声</th><th>軽声</th></tr>
          </thead>
          <tbody style="text-align: center">
            <tr><td>無し</td><td>{{ tone.two }}</td><td>{{ tone.three }}</td><td>{{ tone.four }}</td><td>{{ tone.five }}</td></tr>
          </tbody>
        </table>
        <br><br>
      </div>
    </div>
    <br>
    <div align="center">
      <div class="text-itself-bopomofo">
        <h1 style="font-size:17px; font-weight: bold; text-align: center">
          台湾の発音記号ボポモフォ(注音)と中国語の一般的な発音記号ピンイン(拼音)
        </h1>
        <br>
        <p>
          本ページには、ボポモフォと、対応するピンインを載せています。※下記にそれぞれの説明有り<br>
          台湾のパソコン/スマホのキーボードと並びが同じなので、眺めてみて下さい。<br>
          キーボードの[<span style="background-color: honeydew">&nbsp;&nbsp;&nbsp;</span>]で色付けされた部分が子音で、
          [<span style="background-color: aliceblue">&nbsp;&nbsp;&nbsp;</span>]の部分が母音です。<br>
          各ボポモフォのボタンを押すと、発音を聞くことができます。<br>
        </p>
        <p style="color: red">
          ※音声再生に関して:お使いのOSやブラウザ/バージョンによっては、音声再生に対応していない場合があります。<br>
          詳しくは
          <nuxt-link :to="{ name: 'faq' }">
            FAQページ
          </nuxt-link>
          をご覧ください。<br>
        </p>
        <p>
          漢字の意味は何となく分かっても、読み方を知らなければ会話はできません。
          発音の問題で相手に全く伝わらないと、勉強のモチベーションも下がってしまいます。<br>
          ボポモフォが理解できるようになったら、ボポモフォ振り仮名つきの子供向け書籍や、
          アニメ等でも学習する事ができるようになりますので、学習の幅も広がります。<br>
          学習初期には、基本的な発音練習に充分な時間を割くことをお勧めします。<br>
          <br>
        </p>
        <hr width="80%">
      </div>
      <div class="text-itself-bopomofo">
        <p style="font-weight: bold; text-align: center">
          ボポモフォ
        </p>
        <p>
          ボポモフォ(Bopomofo)とは、またの名を注音(ㄓㄨˋ ㄧㄣ)と言い、台湾のひらがなにあたります。<br>
          「あいうえお」のように、最初の4つ「ㄅ・ㄆ・ㄇ・ㄈ」の読みから、ボポモフォ(Bopomofo)と呼ばれています。<br>
          各漢字に対し、母音と子音を計1~3字、そして声調記号を組み合わせて発音を表します。<br>
          ※各声調によって発音がどう変化するかは、下記の「声調」セクションをご覧ください。<br>
        </p>
        <hr width="80%">
        <br>
        <p style="font-weight: bold; text-align: center">
          ピンイン
        </p>
        <p>
          台湾以外では、中国語の発音記号として、拼音(ピンイン)と呼ばれるアルファベット表記のものが広く使われています。<br>
          ボポモフォよりもピンインの方が発音記号として一般的ではありますが、
          アルファベット表記なので英語またはローマ字を連想してしまい、誤った発音になりがちです。<br>
          先入観に囚われることなく事無く発音を学べる点から、本ページではボポモフォをお勧めしています。<br>
        </p>
        <hr width="80%">
        <br>
        <p style="font-weight: bold; text-align: center">
          声調
        </p>
        <p>
          中国語は、音の高低によっても単語の意味が区別され、この音の高低の事を声調と言います。<br>
          日本語で例えるなら「雨」と「飴」のように、音としては同一であっても、イントネーションの違いによって意味は全く異なります。<br>
          中国語には5種類の声調が存在し、これをボポモフォ(またはピンイン)と組み合わせて最終的な発音を表します。<br>
          表2や表3のような声調記号を用いる場合と、単に数字を用いる場合があります。<br>
          例1：ㄊㄞˊ&nbsp;ㄨㄢ<br>例2：tai2&nbsp;wan1<br>
          各声調の違いを確認するために、例としてㄇㄚの発音を下記に記しました。
          (よく聞く、「まーまーまーまー」という例。)<br>
          ボタンを押して発音を確認してみて下さい。
        </p>
        <p style="color: red">
          ※音声再生に関して:お使いのOSやブラウザ/バージョンによっては、音声再生に対応していない場合があります。<br>
          詳しくは
          <nuxt-link :to="{ name: 'faq' }">
            FAQページ
          </nuxt-link>
          をご覧ください。<br>
        </p>
      </div>
      <table class="table-bordered" style="align: center; text-align: center">
        <caption style="text-align: center; vertical-align: top">
          表3
        </caption>
        <thead style="text-align: center">
          <tr>
            <th style="background-color: #e6e6fa">
              第一声
            </th>
            <th style="background-color: #e6e6fa">
              第二声
            </th>
            <th style="background-color: #e6e6fa">
              第三声
            </th>
            <th style="background-color: #e6e6fa">
              第四声
            </th>
            <th style="background-color: #e6e6fa">
              軽声
            </th>
          </tr>
        </thead>
        <tbody style="white-space:nowrap; text-align: center">
          <tr>
            <td>
              <b-button @click="speak_bopomofo('媽')" style="background-color: #f7f8fb; color: black">
                ㄇㄚ
              </b-button>
            </td>
            <td>
              <b-button @click="speak_bopomofo('麻')" style="background-color: #f7f8fb; color: black">
                ㄇㄚˊ
              </b-button>
            </td>
            <td>
              <b-button @click="speak_bopomofo('馬')" style="background-color: #f7f8fb; color: black">
                ㄇㄚˇ
              </b-button>
            </td>
            <td>
              <b-button @click="speak_bopomofo('杩')" style="background-color: #f7f8fb; color: black">
                ㄇㄚˋ
              </b-button>
            </td>
            <td>
              <b-button @click="speak_bopomofo('嗎')" style="background-color: #f7f8fb; color: black">
                ㄇㄚ˙
              </b-button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-itself-bopomofo">
        <hr width="80%">
        <br>
        <p style="font-weight: bold; text-align: center">
          注意する発音
        </p>
        <p>
          日本語ネイティブには特に難しい発音を紹介します。
        </p>
        <p style="text-align: center; font-family:Times New Roman, HGSｺﾞｼｯｸM; font-style: italic; font-weight: bold">
          巻き舌を使用するもの
        </p>
        <p>
          ㄓ(zhi/zh)、ㄔ(chi/ch)、ㄕ(shi/sh)、ㄖ(ri/r)の発音は、日本語ネイティブにとっては1つの壁かもしれません。
          英語の「r」の発音と同様、これらは舌を丸めるいわゆる「巻き舌」で発音します。
          いずれも、日本語には存在しない音です。<br>
          中国語を学び始めてすぐに覚える単語の1つに「好吃(ㄏㄠˇ ㄔ/hao3 chi1)」=「おいしい」がありますが、
          巻き舌が上手くできない内は少なからず戸惑う筈です。
          耳で聞いた音を日本語の発音にあてはめて、「ハオチー」と言っても「ハオツー」と言っても中々通じないのですから。<br>
          表1のㄔの発音を聞いて、巻き舌を意識して発音してみて下さい。きっと、本来の発音に近づくはずです。<br>
          ㄓ(zhi/zh)とㄗ(zi/z)、ㄔ(chi/ch)とㄘ(ci/c)、ㄕ(shi/sh)とㄙ(si/s)の違いがが聞き分けられるようになったら、
          巻き舌にはだいぶ慣れてきたと言ってもいいかもしれません。<br>
          <br>
          ただ、この巻き舌の「巻き」の程度には地域差があります。<br>
          台湾華語を学ぶ上で気をつけなければならないのは、台湾ではこの「巻き」の程度が非常に小さいという事です。
          人によっては、ㄓ(zhi/zh)とㄗ(zi/z)の違いをあまり意識せずに発音する人もいます。<br>
          学習初期には、多少オーバーに巻き舌を発音する方が覚えやすいと思います。
          しかし、慣れてきたら台湾風の「舌をあまり巻かない」発音に寄せていくと、台湾の方々には親しみを感じてもらえるかもしれません。<br>
        </p>
        <p style="text-align: center; font-family:Times New Roman, HGSｺﾞｼｯｸM; font-style: italic; font-weight: bold">
          ㄢ(an)/ㄣ(en)/ㄤ(ang)/ㄥ(eng)の違い
        </p>
        <p>
          ひょっとすると、日本語ネイティブにとって巻き舌より難しいかもしれないのが、この4つの発音の違いです。<br>
          <span style="text-decoration: underline">日本語発音風に言えば</span>、ㄢ(an)とㄤ(ang)は両方とも「あん」と発音し、
          ㄣ(en)とㄥ(eng)は両方とも「'え'と'お'の間の音 + ん」と発音します。<br>
          では何が異なるのかと言うと、<br>
          &nbsp;&nbsp;・ㄢ(an)とㄣ(en)→発音終わりの「ん」の音は、舌を上下の歯の間に挟む/またはくっつけるようにして出す。<br>
          &nbsp;&nbsp;・ㄤ(ang)とㄥ(eng)→発音終わりの「ん」の音は、舌の付け根を喉につけ、空気を鼻に抜くイメージで出す。<br>
          という事です。<br>
          <br>
          自ら発音する時は、自分の舌の位置がわかっているためㄢ(an)なのかㄤ(ang)なのかかろうじて判断がつくものの、
          聞き分けるのは非常に難しいです。<br>
          単体のボポモフォやこれらの発音を含む単語など、 とにかく聞いて発音する練習を繰り返す事で少しずつ慣れてくると思います。
        </p>
      </div>
    </div>
    <GoogleAds />
    <Footer
      :name="'bopomofo'"
    />
  </section>
</template>

<script>
import MySpeechSynthesis from '../../plugins/mySpeechSynthesis.js'
import Header from '../components/header'
import Footer from '../components/footer'
import GoogleAds from '../components/googleAds'
// // eslint-disable-next-line no-unused-vars
// function speak2 (text) {
//   // var text = document.querySelector('.text').value;
//   const count = +document.querySelector('.count').value
//   for (let i = 0; i < count; i++) {
//     speechSynthesis.speak(
//       new SpeechSynthesisUtterance(text)
//     )
//   }
// }
export default {
  components: {
    Header,
    Footer,
    GoogleAds
  },
  component: {
    MySpeechSynthesis
  },

  data () {
    return {
      selected: '',
      tone: {
        one: '',
        two: 'ˊ',
        three: 'ˇ',
        four: 'ˋ',
        five: '˙'
      },
      bopomofo: {
        b: 'ㄅ',
        p: 'ㄆ',
        m: 'ㄇ',
        f: 'ㄈ',
        d: 'ㄉ',
        t: 'ㄊ',
        n: 'ㄋ',
        l: 'ㄌ',
        g: 'ㄍ',
        k: 'ㄎ',
        h: 'ㄏ',
        j: 'ㄐ',
        q: 'ㄑ',
        x: 'ㄒ',
        zh: 'ㄓ',
        ch: 'ㄔ',
        sh: 'ㄕ',
        r: 'ㄖ',
        z: 'ㄗ',
        c: 'ㄘ',
        s: 'ㄙ',
        a: 'ㄚ',
        o: 'ㄛ',
        e: 'ㄜ',
        eh: 'ㄝ',
        ai: 'ㄞ',
        ei: 'ㄟ',
        ao: 'ㄠ',
        ou: 'ㄡ',
        an: 'ㄢ',
        en: 'ㄣ',
        ang: 'ㄤ',
        eng: 'ㄥ',
        er: 'ㄦ',
        y: 'ㄧ',
        w: 'ㄨ',
        yu: 'ㄩ'
      },
      pinyin: {
        b: 'b',
        p: 'p',
        m: 'm',
        f: 'f',
        d: 'd',
        t: 't',
        n: 'n',
        l: 'l',
        g: 'g',
        k: 'k',
        h: 'h',
        j: 'j',
        q: 'q',
        x: 'x',
        zh: 'zhi/zh',
        ch: 'chi/ch',
        sh: 'shi/sh',
        r: 'ri/r',
        z: 'zi/z',
        c: 'ci/c',
        s: 'si/s',
        a: 'a',
        o: 'o',
        e: 'e',
        eh: 'ê',
        ai: 'ai',
        ei: 'ei',
        ao: 'ao',
        ou: 'ou',
        an: 'an',
        en: 'en',
        ang: 'ang',
        eng: 'eng',
        er: 'er',
        y: 'i/y',
        w: 'u/w',
        yu: 'ü/yu'
      },
      error_message: '',
      showErrorAlert: false
    }
  },

  methods: {
    sleep (time) {
      return new Promise(resolve => setTimeout(resolve, time))
    },
    async speak_bopomofo (char) {
      const isSpeechSynthesisMessage = MySpeechSynthesis.methods.checkSpeechSynthesisUtterance()
      if (isSpeechSynthesisMessage !== 'success') {
        this.error_message = 'お使いのブラウザは音声再生に対応していない可能性があります。 (Google Chrome推奨)'
        this.$sentry.captureException(new Error('Error = ' + isSpeechSynthesisMessage))
        this.showErrorAlert = true
        return
      }
      let count = 0
      let voices = MySpeechSynthesis.methods.loadVoices()
      while (voices == null || voices.length === 0) {
        await this.sleep(1000)
        voices = MySpeechSynthesis.methods.loadVoices()
        count++
        if (count > 10) {
          break
        }
      }
      this.showErrorAlert = false
      const message = MySpeechSynthesis.methods.mySpeak(char, voices)
      if (message !== 'success') {
        this.error_message = 'お使いのブラウザは音声再生に対応していない可能性があります。 (Google Chrome推奨)'
        this.$sentry.captureException(new Error('Error = ' + message))
        this.showErrorAlert = true
      }
    }
  },
  head () {
    return {
      title: 'ボポモフォ bopomofo',
      script: [{
        'data-ad-client': process.env.GA_ADSENSE_ID,
        async: true,
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
      }],
      meta: [
        { hid: 'keywords', name: 'keywords', content: '中国語, 台湾, 台湾華語, 繁体字, ボポモフォ' },
        { hid: 'description', name: 'description', content: 'ボポモフォ(bopomofo/注音)ページ。 ピンイン(pyinin/拼音)との対比や、音声確認ができます' },
        { hid: 'og:title', name: 'og:title', content: '中国語語彙　台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
        { hid: 'og:decription', name: 'og:decription', content: 'ボポモフォ(bopomofo/注音)ページ。 ピンイン(pyinin/拼音)との対比や、音声確認ができます' }
      ]
    }
  }
}
</script>

<style lang="stylus">

  .title_vocabulary
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
    display: block
    font-weight: 300
    font-size: 50px
    text-align :center
    color: #35495e
    letter-spacing: 1px
  .subtitle_vocabulary
    font-weight: 300
    font-size: 20px
    align: center !important
    text-align :center
    color: #526488

  .container
    margin: auto
    min-height: 100vh
    display: flex
    justify-content: center
    align-items: center
    text-align: center

  .speak_button
    text-align:center
    margin:auto

  .main_table
    margin: auto
    align-self: center
    border-collapse: separate
    border-spacing:20px 5px
  .text-itself-bopomofo
    text-align: left
    margin: 0 250px
    @media screen and (max-width : 767px)
      margin: 0 20px
    //@media screen and (min-width : 1024px)
    // ここにタブレット・PCの記述
  .main-image-bopomofo
    animation: fadeIn 1.5s ease 0s 1 normal
    -webkit-animation: fadeIn 1.5s ease 0s 1 normal
    text-align: center
    background-image: url('../../static/img/background_baloon2_3.jpg') !important
    width: 90%
    height: 60%
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
