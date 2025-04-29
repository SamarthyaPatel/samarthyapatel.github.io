function startTime() {
    const mumbai = new Date().toLocaleString("en-GB", {timeZone:'Asia/Kolkata', timeStyle:'medium', hourCycle:'h24'})
    document.getElementById('Mumbai').innerHTML = mumbai;

    const london = new Date().toLocaleString("en-GB", {timeZone:'Europe/London', timeStyle:'medium', hourCycle:'h24'})
    document.getElementById('London').innerHTML = london;

    setTimeout(startTime, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    startTime();
});