<!--
 * @Author: BugMonkey 15298353932@163.com
 * @Date: 2023-10-16 20:01:35
 * @LastEditors: BugMonkey 15298353932@163.com
 * @LastEditTime: 2023-11-01 18:02:45
 * @FilePath: /wedding_invitation_card/invitation_card/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<script setup>
import anime from "animejs";
import wx from "weixin-js-sdk";
import { reactive } from "vue";
let isPlaying = false

const state = reactive({ showBtn: false })

// function mounted() {
//   wx.config({
//   debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
//   appId: '', // 必填，公众号的唯一标识
//   timestamp: , // 必填，生成签名的时间戳
//   nonceStr: '', // 必填，生成签名的随机串
//   signature: '',// 必填，签名
//   jsApiList: [] // 必填，需要使用的JS接口列表
// });
// }

function onClickFront(e) {
  if (isPlaying) {
    return
  }
  let tl = anime.timeline({
    easing: 'easeInOutSine',
    duration: 750,
    begin: function (anim) {
      isPlaying = true
    },
    complete: function (anim) {
      // state.showBtn = true
      // anime({
      //   targets: '#letter',
      //   easing: 'linear',
      //   rotate: -30,
      //   scale:0.6,
      //   duration:200,
      // })
      // anime()
    }
  })
  tl.add({
    targets: '#letter',
    scale: [{ value: 1.1 }, { value: 1, delay: 250 }],
    rotateY: { value: "180" },
  })
  tl.add({
    targets: ['.cover', '.cover-back'],
    rotateX: [{ value: "0" }, { value: "180" }],
  })
  tl.add({
    targets: '.card',
    translateY: '-120%',
    duration: 500
  })
  tl.add({
    targets: '.card',
    rotate: 90,
    "z-index": [{ value: "5" }, { value: "10", delay: 500 }],
    duration: 500,
  })
  tl.add({
    targets: '.card',
    width: '100%',
    translateY: '20%',
    duration: 500,
    left: 0,
  })
  tl.add(
    {
      targets: '.card-fullscreen',
      easing: 'linear',
      delay: anime.stagger(200),
      scale: [{ value: [0.75, 1], duration: 500 }],
      opacity: 1,
      duration: 1000,
      begin: function (anim) {
        document.querySelector('.card-fullscreen').style.display = "block"
      }
    }
  )

  tl.play()
}

function openMap() {
  wx.openLocation({
    latitude: 31.232795315128442, // 纬度，浮点数，范围为90 ~ -90
    ongitude: 121.47511024687574, // 经度，浮点数，范围为180 ~ -180。
    name: '位置', // 位置名
    address: '飒飒', // 地址详情说明
    scale: 1, // 地图缩放级别,整型值,范围从1~28。默认为最大
    infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
  });


}
</script>


<template>
  <div id="page_container">
    <div class="letter-container" @click="onClickFront">
      <div id="letter">

        <div id="front">
          <img src="./assets/mail_ticket.png" class="ticket" />
          <img src="./assets/mail.png" class="mail" />
        </div>
        <div id="back">
          <!-- 卡片 -->
          <img class="card" src="
https://bugmonkey.oss-cn-shanghai.aliyuncs.com/dist/assets/card-21a73da4.png" />
          <!-- <img class="card" src="./assets/card.png" /> -->
          <!-- 盖住卡片的封皮 -->
          <!-- <img class="card-overlay" src="./assets/hover_back.png" /> -->
          <img class="card-overlay"
            src="https://bugmonkey.oss-cn-shanghai.aliyuncs.com/dist/assets/hover_back-b580a6f6.png" />
          <!-- 上翻部分 -->
          <!-- <img class="cover-back"
            src="./assets/cover-back.png"
            alt="trigle"> -->
          <img class="cover-back" src="https://bugmonkey.oss-cn-shanghai.aliyuncs.com/dist/assets/cover-back-aef3fba3.png"
            alt="trigle">
          <!-- <img class="cover"
            src="./assets/cover.png"
            alt="trigle"> -->
          <img class="cover" src="https://bugmonkey.oss-cn-shanghai.aliyuncs.com/dist/assets/cover-2e88ac55.png"
            alt="trigle">

        </div>
      </div>

    </div>
    <div class="card-fullscreen">
      <img src="https://bugmonkey.oss-cn-shanghai.aliyuncs.com/dist/assets/card_fullscreen-83770642.png" style="position: relative;top:0;
  box-shadow: 100px red; width: 100%;
  border-radius: 5px;" alt="婚礼邀请函" />
    </div>

    <button v-if="state.showBtn" class="button" @click="openMap">前往酒店</button>
  </div>
</template>

<style scoped lang="less">
#page_container {
  height: 100vh;
  width: 100vw;
  background-image: url("http://bugmonkey.oss-cn-shanghai.aliyuncs.com/bg.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.letter-container {
  position: relative;
  width: calc(0.8*100vw);
  aspect-ratio: 1/0.75;
  margin: auto;
  -webkit-animation: slide-top 1s ease-out both;
  animation: slide-top 1s ease-out both;
}

#letter {
  position: relative;
  height: 100%;
  border-radius: 10px;
  width: 100%;
  transform-style: preserve-3d;


  #front,
  #back {
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 3px;
  }

  /* 正面  5:3 尺寸*/
  #front {
    color: #fff;
    background: brown;
    position: relative;
    overflow: hidden;

    .ticket {
      position: absolute;
      width: 14%;
      right: 10px;
      top: 5px;
    }
    .mail{
      position: absolute;
      width: 20%;
      right: 10px;
      bottom: 5px;
    }
  }

  #back {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotateY(180deg);
    background: url("https://bugmonkey.oss-cn-shanghai.aliyuncs.com/dist/assets/card_behind.png");
    color: #fff;
    background-size: contain;
    background-repeat: no-repeat;
    background-blend-mode: color;
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);

    .card-overlay {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 2;
    }

    .card {
      width: 100%;
      position: absolute;
      margin: auto;
      z-index: 1;
    }

  }

  .cover {
    transform-origin: top;
    transform-style: preserve-3d;
    position: relative;
    overflow: hidden;
    backface-visibility: hidden; // 向上翻才会被隐藏
    width: 100%;
    z-index: 2;
  }

  .cover-back {
    transform-origin: top;
    transform-style: preserve-3d;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }


}

.card-fullscreen {
  position: absolute;
  width: 90%;
  top: 30px;
  transform: scale(0.5);
  transition: opacity 0.3s;
  opacity: 1;
  display: none;
}

.button {
  position: fixed;
  bottom: 0;
  width: calc(100% - 30px);
  height: 48px;
  margin: 15px 15px;
  background-color: brown;
  border-radius: 10px;
  color: #fff;
  border: none;
  font-size: 14pt;
  font-family: Roboto;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 4px 1px -2px rgb(0 0 0 / 20%), 0px -1px 2px 0px rgb(0 0 0 / 14%), 0px 5px 8px 1px rgb(0 0 0 / 27%);
  transition: all 300ms ease;
}



/**
 * ----------------------------------------
 * animation slide-top
 * ----------------------------------------
 */
@-webkit-keyframes slide-top {
  0% {
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
  }

  60% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
  }

  100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
}

@keyframes slide-top {
  0% {
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
  }

  60% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
  }

  100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
}

.flip-vertical-fwd {
  -webkit-animation: flip-vertical-fwd 0.4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  animation: flip-vertical-fwd 0.4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}
</style>
