let BtoG = ['nitish','rahul','neha','preeti','hari','neha2','mohit']
let MtoG = ['nitish','rahul','neha','preeti','hari','neha2','mohit']
let PtoG = ['nitish','rahul','neha','preeti','hari','neha2','mohit']

async function checkAvailabilty(){

    var interval = setInterval(cancelTicket,2000)
    let promise = new Promise(function(resolve,reject){


        setInterval(function(){

        if(BtoG.length < 5){
            resolve('train 1 is available')
            clearInterval(interval)
        }
        else if(MtoG.length < 5){
            resolve('train 2 is available')
            clearInterval(interval)
        }
        else if(PtoG.length < 5){
            resolve('train 3 is available')
            clearInterval(interval)
        }
    },1000)

    

    })
    let res = await promise
    console.log(res)

}

function cancelTicket(){

    let cancelling_speed1 = Math.ceil(Math.random()*5)
    let cancelling_speed2 = Math.ceil(Math.random()*5)
    let cancelling_speed3 = Math.ceil(Math.random()*5)

    setTimeout(function(){

        BtoG.pop()
    },cancelling_speed1*1000)
    setTimeout(function(){

        MtoG.pop()
    },cancelling_speed2*1000)
    setTimeout(function(){

        PtoG.pop()
    },cancelling_speed3*1000)
    
    
    
    console.log(BtoG,MtoG,PtoG)

}


