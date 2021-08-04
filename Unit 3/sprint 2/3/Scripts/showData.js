


async function getData(url){

    try{
        let res = await fetch(url)
        let data = await res.json()
        return data
        
    }
    catch(e){
        console.log(e)
    }

    

}


function appendData(products,parent){
    console.log(products)
    products.forEach(({image,title}) => {

        let div = document.createElement('div')
        let p = document.createElement('p')
        let img = document.createElement('img')

        img.src = image
        p.innerText = title

        div.append(img,p)
        parent.append(div)
        
    });

}

export {getData,appendData}