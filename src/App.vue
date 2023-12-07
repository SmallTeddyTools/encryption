<script setup>
import { encryptByDES, decryptByDES } from "@/utils/crypto";
import lock from './assets/lock.svg'
import unlock from './assets/unlock.svg'

const encryption = ref('')
const decryption = ref('')
const result = ref('')

const getEncryption = (str) => {
  result.value = encryptByDES(str);
}
const getDecryption = (str) => {
  result.value = decryptByDES(str);
}
</script>

<template>
  <div class="bg">
    <div class="box">
      <div class="encryption">
        <input class="ipt" v-model="encryption" />
        <el-button type="success" class="btn1" @click="getEncryption(encryption)">
          <img :src="lock" style="width: 20px; margin-right: 8px" alt=""> 加密
        </el-button>
      </div>
      <div class="decryption">
        <input class="ipt" v-model="decryption" />
        <el-button type="transparent" class="btn2" @click="getDecryption(decryption)">
          <img :src="unlock" style="width: 20px; margin-right: 8px" alt="">  解密
        </el-button>
      </div>
      <div class="res">
        <input disabled class="result" v-model="result" />
      </div>
    </div>
  </div>
</template>

<style>
* {
  margin: 0 auto;
  padding: 0;
}

input {
  outline: none;
}

.bg {
  background: url("./assets/bg.jpeg");
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  width: 420px;
  height: 200px;
  border-radius: 12px;
  border: 1px solid #909399;
  position: absolute;
  overflow: hidden;
}

.box:before {
  content: "";
  width: 420px;
  height: 200px;
  background: inherit;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.3);
  filter: blur(10px);
}

.encryption {
  width: 380px;
  margin: 20px auto;
}

.decryption {
  width: 380px;
  margin: 0 auto;
  margin-bottom: 20px;
}

.res {
  width: 380px;
  margin: 0 auto;
}

.result,
.ipt {
  background: rgba(220, 223, 230, 0.1);
  caret-color: rgba(255, 255, 255, 0.7);
  border: 2px solid #c8a43a;
  height: 40px;
  width: 380px;
  border-radius: 8px;
  padding-left: 15px;
  font-size: 16px;
  position: relative;
  z-index: 99;
}

.ipt {
  height: 40px;
  width: 270px;
}

.btn1,
.btn2 {
  margin-left: 10px;
  font-family: "alliance", mono, sans-serif;
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: none;
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid #c8a43a;
  overflow: hidden;
  background: transparent;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  font-feature-settings: "salt" on, "ss01" on, "ss02" on;
  color: #fff;
  transition: background 0.3s ease-in-out, border-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
  transition-property: background, border-color, color;
  transition-duration: 0.3s, 0.3s, 0.3s;
  transition-timing-function: ease-in-out, ease-in-out, ease-in-out;
  transition-delay: 0s, 0s, 0s;
}

.btn1:before,
.btn2:before {
  content: "";
  display: block;
  position: absolute;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  top: 2px;
  left: 2px;
  border-radius: 8px;
  z-index: -1;
  transform: translate3d(0, 0, 0);
  transition: background 0.3s ease-in-out;
}

.btn1:after {
  content: "";
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  z-index: -3;
  background: linear-gradient(269.16deg,
      #ffe580 -15.83%,
      #ff7571 -4.97%,
      #ff7270 15.69%,
      #ea5dad 32.43%,
      #c2a0fd 50.09%,
      #9867f0 67.47%,
      #3bf0e4 84.13%,
      #33ce43 105.13%,
      #b2f4b6 123.24%);
  background-position: 58% 50%;
  background-size: 500%;
  animation: gradient-shift 30s ease infinite;
}

.btn2:after {
  content: "";
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  z-index: -3;
  background: linear-gradient(269.16deg,
      #b2f4b6 -15.83%,
      #33ce43 -4.97%,
      #3bf0e4 15.69%,
      #9867f0 32.43%,
      #c2a0fd 50.09%,
      #ea5dad 67.47%,
      #ff7270 84.13%,
      #ff7571 105.13%,
      #ffe580 123.24%);
  background-position: 58% 50%;
  background-size: 500%;
  animation: gradient-shift 30s ease infinite;
}

@keyframes gradient-shift {
  0% {
    background-position: 58% 50%;
  }

  25% {
    background-position: 100% 0%;
  }

  75% {
    background-position: 10% 50%;
  }

  to {
    background-position: 58% 50%;
  }
}

.btn1:hover:before,
.btn2:hover:before {
  background: transparent;
}

.btn1:hover,
.btn2:hover {
  cursor: pointer;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}
</style>
