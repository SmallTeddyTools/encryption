<script setup>
import top from './assets/top.svg'
import bottom from './assets/bottom.svg'
import left from './assets/left.svg'
import right from './assets/right.svg'
import { decryptByDES, encryptByDES } from '@/utils/crypto'

const encryption = ref('')
const decryption = ref('')
const bgWidth = computed(() => document.body.clientWidth)

function getEncryption(str) {
  decryption.value = encryptByDES(str)
}

function getDecryption(str) {
  encryption.value = decryptByDES(str)
}
</script>

<template>
  <div class="bg">
    <div class="encryption-text">
      <el-input v-model="encryption" type="textarea" />
    </div>
    <div class="btn-box">
      <el-button type="success" class="btn1" @click="getEncryption(encryption)">
        <img v-if="bgWidth <= 640" style="width: 20px; margin-right: 8px" :src="bottom" alt="Bottom">
        <span>加密</span>
        <img v-if="bgWidth > 640" :src="right" style="width: 20px; margin-left: 8px" alt="Right">
      </el-button>
      <el-button type="success" class="btn2" @click="getDecryption(decryption)">
        <img v-if="bgWidth > 640" style="width: 20px; margin-right: 8px" :src="left" alt="Left">
        <span>解密</span>
        <img v-if="bgWidth <= 640" style="width: 20px; margin-left: 8px" :src="top" alt="Top">
      </el-button>
    </div>
    <div class="decryption-text">
      <el-input v-model="decryption" type="textarea" />
    </div>
  </div>
</template>

<style>
* {
    margin: 0 auto;
    padding: 0;
}

.bg {
    background: url("./assets/bg.jpeg");
    background-size: 100% 100%;
    width: 100%;
    height: 100vh;
    display: flex;
    gap: 12px;
}

.encryption-text,
.decryption-text {
    padding: 12px;
    flex: 1;
}

.bg .el-button + .el-button {
    margin-left: 0;
}

.btn-box {
    display: flex;
    gap: 12px;
}

.bg .el-textarea__inner,
.bg .el-textarea {
    resize: none;
    background: transparent;
    height: 100% ;
    font-family: "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,monospace";
    font-size: 20px;
    color: #fff;
}

/* 移动端 */
@media (min-width: 320px) and (max-width: 640px) {
    .bg {
        flex-direction: column;
    }

    .btn-box {
        height: 32px;
        flex-direction: row;
        justify-content: center;
        align-content: center;
    }
}

/* web 端 */
@media (min-width: 640px) {
    .btn-box {
        width: 120px;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }
}
</style>
