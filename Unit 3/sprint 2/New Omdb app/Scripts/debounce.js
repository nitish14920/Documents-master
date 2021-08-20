
var timerId;
function finalDebounce(func,delay,){

    
    
    if(timerId){
        clearTimeout(timerId)
    }
    timerId = setTimeout(()=>{
        func()
        timerId = false
    },delay)


}

async function Debounce(){

    let input = document.getElementById("input").value
    console.log(input)
    let res = await fetch(`http://www.omdbapi.com/?t=${input}&i=tt3896198&apikey=7d4812ec`)
    let data = await res.json()
    console.log(data)
    
}
