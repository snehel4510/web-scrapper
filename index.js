const PORT = 3000

const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

const url = "https://www.theguardian.com/international"
axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const titles = []
        $('.fc-item__container', html).each((i, e) => {
            const title = $(e).find('a').text()
            const link = $(e).find('a').attr('href')
            titles.push({ title, link })
        })
        console.log(titles)
    }).catch(error => { console.log(error) });

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))