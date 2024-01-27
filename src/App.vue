<script setup>
import lock from './assets/lock.svg'
import unlock from './assets/unlock.svg'
import { decryptByDES, encryptByDES } from '@/utils/crypto'

const encryption = ref('')
const decryption = ref('')

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
        加密 <img :src="lock" style="width: 20px; margin-left: 8px" alt="">
      </el-button>
      <el-button type="success" class="btn2" @click="getDecryption(decryption)">
        <img :src="unlock" style="width: 20px; margin-right: 8px" alt=""> 解密
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

.btn-box {
    width: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 12px;
}

.bg .el-button + .el-button {
    margin-left: 0;
}

.bg .el-textarea__inner,
.bg .el-textarea {
    resize: none;
    background: transparent;
    height: 100% !important;
    font-family: "Monofur Nerd Font";
    font-size: 20px;
    color: #fff;
}
</style>
