
const youtubeel = document.getElementById("youtube")
let youtubeOpen = false
const twitterel = document.getElementById("twitter")
let twitterOpen = false


youtubeel.addEventListener("click", () => {
    if (youtubeOpen === false) {
        youtubeel.innerHTML = `<span class="player">
                                    Youtube OPEN
                                </span>`
        youtubeOpen = true
    } else {
        youtubeel.innerHTML = `<span>
                                    YouTube
                                </span>`
        youtubeOpen = false
    }
})


twitterel.addEventListener("click", () => {
    if (twitterOpen === false) {
        twitterel.innerHTML = `<div>
                                    Twitter OPEN
                                </div>`
        twitterOpen = true
    } else {
        twitterel.innerHTML = `<div>
                                    Twitter
                                </div>`
        twitterOpen = false
    }

})