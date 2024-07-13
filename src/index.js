// JS for index.html

;(function () {
    console.log('window.location.href:', window.location.href)
    const rand = Math.floor(Math.random() * images.length)
    console.log(`rand: ${rand}:`, images[rand])
    const image = window.location.href + images[rand]
    // const image = window.location.href + 'images/' + images[rand]
    console.log('image:', image)
    document.body.style.backgroundImage = `url('${image}')`
})()
