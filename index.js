const app = require('express')()
const aws = require('aws-sdk')
const https = require('https')
const nconf = require('nconf')

const {
    NODE_PORT
} = nconf.env().get()




app.get('/', async (req, res, next)=> {
    res.json({
        status: "Success"
    })
})

https.createServer(app).listen(NODE_PORT, () => {
    console.log(`listening in on ${NODE_PORT}`)
})
