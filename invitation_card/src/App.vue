<!--
 * @Author: BugMonkey 15298353932@163.com
 * @Date: 2023-10-16 20:01:35
 * @LastEditors: BugMonkey 15298353932@163.com
 * @LastEditTime: 2023-10-18 13:56:43
 * @FilePath: /wedding_invitation_card/invitation_card/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<script setup>
import anime from "animejs";
let isPlaying = false

function onClickFront(e) {

  let tl = anime.timeline({
    easing: 'easeInOutSine',
    duration: 750
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
    duration: 600
  })
  tl.add({
    targets: '.card',
    rotate: 90,
    "z-index":[{ value: "5" }, { value: "10",delay:500}],
    duration: 600,
  })
  tl.add({
    targets: '.card',
    width:'80vw',
    translateY:'20%',
    duration: 1000,
  })

  tl.play()
}
</script>


<template>
  <div id="page_container">
    <div class="letter-container" @click="onClickFront">
      <div id="letter">

        <div id="front"></div>
        <div id="back">
          <!-- 卡片 -->
          <div class="card"></div>

          <!-- 盖住卡片的封皮 -->
          <img class="card-overlay"
            src="https://cdn.greenvelope.com/GreenvelopeImages/envelope/cover/2030.portrait.back.png" />

          <!-- 上翻部分 -->
          <img class="cover-back"
            src="https://cdn.greenvelope.com/viewer/envelope.ashx?mode=combinedflap&coverid=2030&liningid=1022&orientation=portrait&liningcolor=6a0001&sealid=null"
            alt="trigle">

          <img class="cover"
            src="https://cdn.greenvelope.com/viewer/envelope.ashx?mode=backflap&lastmodified=638324286467130000&ActivityCode=qKLJ68g&ga=0"
            alt="trigle">


        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
#page_container {
  height: 100vh;
  width: 100vw;
  background-image: url("https://cdn.greenvelope.com/viewer/background.ashx?backgroundid=1021&backgroundcolor=CCCCCC&q=100&w=1621");
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
    border-radius: 2px;
  }

  /* 正面  5:3 尺寸*/
  #front {
    color: #fff;
    background: brown;
    position: relative;
    overflow: hidden;
  }

  #back {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotateY(180deg);
    background: url("https://cdn.greenvelope.com/viewer/envelope.ashx?mode=combinedback&coverid=2030&liningid=1022&orientation=portrait&liningcolor=6a0001&borderid=null");
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
      aspect-ratio: 1/0.75;
      position: absolute;
      margin: auto;
      background-color: aqua;
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
