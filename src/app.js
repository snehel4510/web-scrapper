const feed = document.querySelector('#feed')

fetch('http://localhost:3000/news')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const article = document.createElement('article')
            article.innerHTML = `
                <h3><a href="${item.link}">${item.title}</a></h3><br><hr>
            `
            feed.appendChild(article)
        })
    }).catch(error => { console.log(error) });
