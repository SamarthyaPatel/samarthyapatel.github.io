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
            document.getElementsByClassName("github")[0].style = 'color: #FDF4DC;'
            document.getElementsByClassName("github1")[0].style = 'color: #FDF4DC;'
            const uni = document.getElementsByTagName("h5")
            console.log(uni)
            for(let i = 0; i < uni.length; i ++) {
                uni[i].style = 'color: #04d9ff'
            }
        }
      if(e.target.checked === false) {
        document.getElementsByTagName("html")[0].style = 'background-color: white; color: black;'
        document.getElementsByTagName("body")[0].style = 'background-color: white; color: black;'
        document.getElementsByClassName("github")[0].style = 'color: #444;'
        document.getElementsByClassName("github1")[0].style = 'color: #444;'
        const uni = document.getElementsByTagName("h5")
            console.log(uni)
            for(let i = 0; i < uni.length; i ++) {
                uni[i].style = 'color: black;'
            }
        }
      });
});

