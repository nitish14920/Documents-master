

async function getData(url){

    try{
        let res = await fetch(url)
        let data = await res.json()
        return data.meals[0]
        
    }
    catch(e){
        console.log(e)
    }

}
export {getData}