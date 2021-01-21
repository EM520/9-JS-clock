//convert milTime to Regulartime (24 h to 12 h)
function toRegularTime(h){
    let newH = h
    if (h>12){
        newH = newH - 12
    }
    if (h==0){
        newH = 12
    }
    return newH
}

// when h,m,s <10 add  "0" before time num
function padZero(num){
    if (num<10){
        return "0" + num
    }
        return num
}

//Format time finally
function formatTime (h,m,s){
    const newH = toRegularTime(h)
    const formatH = padZero(newH)
    const formatM =  padZero(m)
    const formatS =  padZero(s)
    const meridian= h >12 ?"pm" :"am"
    const time = formatH +":"+formatM+":"+formatS +" " +meridian
    return time
}


function handleTime()  {
    const date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    const time =formatTime(h,m,s)
    document.querySelector("#showtime").innerHTML= time
    //console.log(time)
  }
    handleTime()
    setInterval(handleTime, 1000)
    
  
