const allDetails = document.querySelectorAll("details")

allDetails.forEach((details) => {
    details.addEventListener("toggle", (e) => {
        if (details.open) {
            allDetails.forEach((details) => {
                if (details != e.target && details.open) {
                    details.open = false
                }
            })
        }
    })

})

let bsc = document.getElementById('bsc');
let foundation = document.getElementById('foundation');
let diploma = document.getElementById('diploma');
let gcse = document.getElementById('gcse');

foundation.addEventListener('click', (ev) => {
    bsc.scrollIntoView({behavior: "smooth"});
})
diploma.addEventListener('click', (ev) => {
    foundation.scrollIntoView({behavior: "smooth"});
})
gcse.addEventListener('click', (ev) => {
    diploma.scrollIntoView({behavior: "smooth"});
})
