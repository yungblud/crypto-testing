import crypto from 'crypto'

const secretKey = 'abcdefg12345!@#$%'

export const encryptHmac = pureString => {
    console.log(crypto.createHmac('sha256', secretKey))
    return crypto
        .createHmac('sha256', secretKey)
        .update(pureString)
        .digest('hex')
}

export const encryptHash = pureString => {
    console.log(crypto.createHash('sha256', secretKey))
    return crypto
        .createHash('sha256', secretKey)
        .update(pureString)
        .digest('hex')
}

export const encryptCipherIv = pureString => {
    return crypto
        .createCipheriv('aes-256-gcm', secretKey)
        .update(pureString, 'utf8')
}

export const decryptCipherIv = pureString => {
    const encryptedByCipherIv = encryptCipherIv(pureString)
    return crypto
        .createDecipheriv('aes-256-gcm', secretKey)
        .update(encryptedByCipherIv, 'base64')
}
