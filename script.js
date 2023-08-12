const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

function getTime() {
    const time = new Date();

    let hh = (360 /12) * time.getHours();
    let mm = (360 /60) * time.getMinutes();
    let ss = (360 /60) * time.getSeconds();

    hr.style.transform = `rotateZ(${hh}deg)`;
    mn.style.transform = `rotateZ(${mn}deg)`;
    sc.style.transform = `rotateZ(${sc}deg)`;
}

setInterval(() => {
    getTime();
}, 1000);

getTime();