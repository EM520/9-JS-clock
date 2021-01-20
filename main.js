let timer = setInterval(() => {
    const date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    
// if (h > 0 && h <= 12) {
//   timeValue= "" + h;
// } else if (h > 12) {
//   timeValue= "" + (h - 12);
// } else if (h == 0) {
//   timeValue= "12";
// }
 
// timeValue += (m < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
// timeValue += (s < 10) ? ":0" + seconds : ":" + seconds;  // get seconds
// timeValue += (h>= 12) ? " P.M." : " A.M.";  // get AM/PM


    let Am0rPm = (h >=12) ? 'pm':'am'
    h = (h%12) || 12
    // let Am0rPm +=(m<10)? ":0":":" + m
    // let Am0rPm +=(s<10)? ":0":":" + s
    // let Am0rPm +=(h<10)? ":0":":" + h
    let milTime = h + ":" + m + ":"+ s
   
    document.getElementById("showtime").innerHTML= milTime
  },1000)

    
  



    
    
