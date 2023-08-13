
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc')



const getTime = () => {
    const date = new Date();

    return {
        hour: date.getHours(),
        min: date.getMinutes(),
        sec: date.getSeconds()
    };
}

setInterval(() => {

    const {sec, min, hour} = getTime()
    sc.style.transform = 'rotate(${sec * 6}deg)'
    mn.style.transform = 'rotate(${min * 6}deg)'
    hr.style.transform = 'rotate(${hour}deg)'
}, 1000);


