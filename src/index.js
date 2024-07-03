// JS for index.html

;(function () {
    console.log('window.location.href:', window.location.href)
    const rand = Math.floor(Math.random() * photos.length)
    console.log(`rand: ${rand}:`, photos[rand])
    const image = window.location.href + photos[rand]
    console.log('image:', image)
    document.body.style.backgroundImage = `url('${image}')`
})()
