function startTime() {
    const mumbai = new Date().toLocaleString("en-GB", {timeZone:'Asia/Kolkata', timeStyle:'medium', hourCycle:'h24'})

    document.getElementById('Mumbai').innerHTML = mumbai;
    const london = new Date().toLocaleString("en-GB", {timeZone:'Europe/London', timeStyle:'medium', hourCycle:'h24'})

    document.getElementById('London').innerHTML = london;
    setTimeout(startTime, 1000);
}


window.addEventListener("DOMContentLoaded", (event) => {
    const toggle = document.getElementById("dark-mode-checkbox");
    toggle.addEventListener('change', e => {
        if(e.target.checked === true) {
            document.getElementsByTagName("html")[0].style = 'background-color: black; color: white;'
            document.getElementsByTagName("body")[0].style = 'background-color: black; color: white;'
            var r = document.querySelector(':root');
            r.style.setProperty('--b', 'white');
            r.style.setProperty('--c', 'black');
            try {
                document.getElementsByClassName("github")[0].style = 'color: #FDF4DC;'
                document.getElementsByClassName("github1")[0].style = 'color: #FDF4DC;'
            } catch {}
            const uni = document.getElementsByTagName("h5")
            for(let i = 0; i < uni.length; i ++) {
                uni[i].style = 'color: #04d9ff'
            }
            const title = document.getElementsByClassName("small title")
            for(let i = 0; i < title.length; i ++) {
                title[i].style = 'background-color: black; color: white;'
            }
        }
        if(e.target.checked === false) {
            document.getElementsByTagName("html")[0].style = 'background-color: white; color: black;'
            document.getElementsByTagName("body")[0].style = 'background-color: white; color: black;'
            var r = document.querySelector(':root');
            r.style.setProperty('--b', 'black');
            r.style.setProperty('--c', 'white');
            try {
                document.getElementsByClassName("github")[0].style = 'color: #444;'
                document.getElementsByClassName("github1")[0].style = 'color: #444;'
            } catch {}
            const uni = document.getElementsByTagName("h5")
            for(let i = 0; i < uni.length; i ++) {
                uni[i].style = 'color: black;'
            }
            const title = document.getElementsByClassName("small title")
            for(let i = 0; i < title.length; i ++) {
                title[i].style = 'background-color: white; color: black;'
            }
        }
    });
});