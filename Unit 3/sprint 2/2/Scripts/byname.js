

async function search() {
    let input = document.getElementById("inp").value;
    let res = await fetch(
      `https://themealdb.com/api/json/v1/1/search.php?s=${input}`
    );

    let data = await res.json();
    console.log(data);
    for (var i = 0; i < data.meals.length; i++) {
      appendData2(data.meals[i]);
    }
  }
  
  function appendData2(d) {
    console.log(d);
    var par = document.getElementById("data");
    par.innerHTML=null
    let div = document.createElement("div");
    let p = document.createElement("h2");
    p.innerHTML = `${d.strMeal}`;
    let img = document.createElement("img");
    img.src = d.strMealThumb;
    let str = document.createElement("p");
    str.innerHTML = `Area: ${d.strArea}`;
    let cat = document.createElement("p");
    cat.innerHTML = `Category: ${d.strCategory}`;
  
    div.append(p, img, str, cat);

    let instr = document.createElement("p");
    instr.innerHTML = `Preperation Steps: ${d.strInstructions}`;
    div.append(instr);
    par.append(div);
  }
  