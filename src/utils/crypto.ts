import CryptoJS from 'crypto-js'

// 秘钥
const keyHex: any = CryptoJS.enc.Utf8.parse('xe3vk9tFTMjxvxFwE6Lk7yf0pFU08T6V')

function trim(str) {
  return str.replace(/^\s+|\s+$/g, '')
}

/**
 * @description AES 加密
 * @returns {string} encryptText
 * @param encryptText
 */
// 函数用于使用DES加密文本
function encryptByDES(encryptText: string): string {
  // 使用CryptoJS.AES.encrypt方法对文本进行加密
  const encrypted: any = CryptoJS.AES.encrypt(trim(encryptText), keyHex, {
    // 设置偏移量
    iv: keyHex,
    // 设置加密模式
    mode: CryptoJS.mode.CBC,
    // 设置填充方式
    padding: CryptoJS.pad.Pkcs7,
  })
  // 返回加密后的字符串
  return encrypted.toString()
}

/**
 * @description AES 解密
 * @param {string} decryptText
 * @returns {string} decryptText
 */
// 使用DES解密函数，解密文本
function decryptByDES(decryptText: string): string {
  // 使用CryptoJS.AES.decrypt函数，使用keyHex和decryptText进行解密，使用CryptoJS.mode.CBC，CryptoJS.pad.Pkcs7进行模式和填充
  const decrypted: any = CryptoJS.AES.decrypt(decryptText, keyHex, {
    iv: keyHex,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  })
  // 将解密后的数据转换为Utf8编码
  return decrypted.toString(CryptoJS.enc.Utf8)
}

export { encryptByDES, decryptByDES }
