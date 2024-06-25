// JS for index.html
/* global photos */

;(function () {
    console.log('window.location.href:', window.location.href)
    const rand = Math.floor(Math.random() * photos.length)
    console.log('rand:', rand)
    console.log('photo:', photos[rand])
    const redirect = window.location.href + photos[rand]
    console.log('redirect:', redirect)
    window.location.replace(redirect)
})()
