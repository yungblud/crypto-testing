import crypto from 'crypto'

const secretKey = 'abcd'
const iv = '1234'

export const encryptHmac = pureString => {
    return crypto
        .createHmac('sha256', secretKey)
        .update(pureString)
        .digest('hex')
}

export const encryptHash = pureString => {
    return crypto
        .createHash('sha256')
        .update(pureString)
        .digest('hex')
}

export const encryptCipherIv = pureString => {
    const cipher = crypto.createCipheriv(
        'aes-256-gcm',
        Buffer.alloc(32, secretKey, 'binary'),
        Buffer.alloc(16, iv, 'binary')
    )
    let encrypted = cipher.update(pureString, 'utf8', 'hex')
    return encrypted
}

export const decryptCipherIv = pureString => {
    const encrypted = encryptCipherIv(pureString)
    const decipher = crypto.createDecipheriv(
        'aes-256-gcm',
        Buffer.alloc(32, secretKey, 'binary'),
        Buffer.alloc(16, iv, 'binary')
    )

    let decrypted = decipher.update(encrypted, 'hex', 'utf8')

    return decrypted
}
