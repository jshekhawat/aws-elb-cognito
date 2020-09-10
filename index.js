const app = require('express')()
const aws = require('aws-sdk')
const https = require('https')
const nconf = require('nconf')
const fs = require('fs')

const {
    HTTPS_PORT,
    HTTP_PORT,
    KEY_PATH,
    CERT_PATH
} = nconf.env().get()

const key  = fs.readFileSync(`${KEY_PATH}`)
const cert  = fs.readFileSync(`${CERT_PATH}`)



http.createServer(app).listen(HTTP_PORT, () => {
    console.log(`http listening in on ${HTTP_PORT}`)
})

https.createServer({key: key, cert: cert}, app).listen(HTTPS_PORT, () => {
    console.log(`listening in on ${HTTPS_PORT}`)
})
