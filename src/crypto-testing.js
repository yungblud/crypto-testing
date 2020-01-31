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
