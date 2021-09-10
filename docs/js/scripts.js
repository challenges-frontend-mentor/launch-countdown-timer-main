const daysElement = document.getElementById("days-element")
const hoursElement = document.getElementById("hours-element")
const minutesElement = document.getElementById("minutes-element")
const secondsElement = document.getElementById("seconds-element")

let days = 8
let days2 = 8
let hours = 0
let hours2 = 0
let minutes = 0
let minutes2 = 0
let seconds = 3
let seconds2 = 3

const writeNumbers = ({days, days2, hours, hours2, minutes, minutes2, seconds, seconds2}) => {
    daysElement.children[0].children[0].dataset.number = days
    daysElement.children[0].children[1].dataset.number = days2
    daysElement.children[1].children[0].dataset.number = days
    daysElement.children[1].children[1].dataset.number = days2

    hoursElement.children[0].children[0].dataset.number = hours
    hoursElement.children[0].children[1].dataset.number = hours2
    hoursElement.children[1].children[0].dataset.number = hours
    hoursElement.children[1].children[1].dataset.number = hours2

    minutesElement.children[0].children[0].dataset.number = minutes
    minutesElement.children[0].children[1].dataset.number = minutes2
    minutesElement.children[1].children[0].dataset.number = minutes
    minutesElement.children[1].children[1].dataset.number = minutes2

    secondsElement.children[0].children[0].dataset.number = seconds
    secondsElement.children[0].children[1].dataset.number = seconds2
    secondsElement.children[1].children[0].dataset.number = seconds
    secondsElement.children[1].children[1].dataset.number = seconds2
}


const intervaloCuentaArriba = () =>{
    seconds = seconds - 1
    if(seconds === -1){
        seconds = 59
        minutes = minutes - 1
        minutesElement.children[1].children[0].classList.add("clock-animate-top")
     }

     if(minutes === -1){
        minutes = 59
        hours = hours - 1
        hoursElement.children[1].children[0].classList.add("clock-animate-top")
        }

    if(hours === -1){
        hours = 23
        days = days - 1
        daysElement.children[1].children[0].classList.add("clock-animate-top")
    }

    if(days === -1){
        days = 0
    }
           
    const contadorArriba =() =>{
        let tiempoContadorArriba = setInterval(() =>{
            writeNumbers({days, days2, hours, hours2, minutes, minutes2, seconds, seconds2})
            clearInterval(tiempoContadorArriba)
        },200)
    }
    
    daysElement.children[1].children[1].classList.remove("clock-animate-bottom")
    hoursElement.children[1].children[1].classList.remove("clock-animate-bottom")
    minutesElement.children[1].children[1].classList.remove("clock-animate-bottom")
    secondsElement.children[1].children[1].classList.remove("clock-animate-bottom")
    secondsElement.children[1].children[0].classList.add("clock-animate-top")
    contadorArriba()
    setTimeout(intervaloCuentaAbajo,250)
}

//------contador Abajo--------
const intervaloCuentaAbajo = () =>{
    seconds2 = seconds2 - 1
    if(seconds2 === -1){
        seconds2 = 59
        minutes2 = minutes2 - 1
        minutesElement.children[1].children[1].classList.add("clock-animate-bottom")
    }

    if(minutes2 === -1){
        minutes2 = 59
        hours2 = hours2 - 1
        hoursElement.children[1].children[1].classList.add("clock-animate-bottom")
    }

    if(hours2 === -1){
        hours2 = 23
        days2 = days2 - 1
        daysElement.children[1].children[1].classList.add("clock-animate-bottom")
    }

    if(days2 === -1){
        days2 = 0
    }

    const contadorAbajo = () =>{
        let tiempoContadorAbajo = setInterval(() =>{
            writeNumbers({days, days2, hours, hours2, minutes, minutes2, seconds, seconds2})
            clearInterval(tiempoContadorAbajo)
        },20)
    }
    daysElement.children[1].children[0].classList.remove("clock-animate-top")
    hoursElement.children[1].children[0].classList.remove("clock-animate-top")
    minutesElement.children[1].children[0].classList.remove("clock-animate-top")
    secondsElement.children[1].children[0].classList.remove("clock-animate-top")
    secondsElement.children[1].children[1].classList.add("clock-animate-bottom")
    contadorAbajo()
}
//-----ejecuta intervalo
setInterval(() =>{
    intervaloCuentaArriba(intervaloCuentaAbajo)  
},1000)


