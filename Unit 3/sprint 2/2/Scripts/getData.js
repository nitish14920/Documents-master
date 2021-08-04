async function getData(url) {
    let r = await fetch(url);
    let d = await r.json();
    console.log(d.meals[0]);
    return d.meals[0];
  }
  
  function appendData(d) {
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
    let in1 = document.createElement("p");
    in1.innerHTML = `Item 1: ${d.strIngredient1} => QTY: ${d.strMeasure1}`;
    if (d.strIngredient1 != "") {
      div.append(in1);
    }
    let in2 = document.createElement("p");
    in2.innerHTML = `Item 2: ${d.strIngredient2} => QTY: ${d.strMeasure2}`;
    if (d.strIngredient1 != "") {
      div.append(in2);
    }
    let in3 = document.createElement("p");
    in3.innerHTML = `Item 3: ${d.strIngredient3} => QTY: ${d.strMeasure3}`;
    if (d.strIngredient1 != "") {
      div.append(in3);
    }
    let in4 = document.createElement("p");
    in4.innerHTML = `Item 4: ${d.strIngredient4} => QTY: ${d.strMeasure4}`;
    if (d.strIngredient1 != "") {
      div.append(in4);
    }
    let in5 = document.createElement("p");
    in5.innerHTML = `Item 5: ${d.strIngredient5} => QTY: ${d.strMeasure5}`;
    if (d.strIngredient1 != "") {
      div.append(in5);
    }
    let in6 = document.createElement("p");
    in6.innerHTML = `Item 6: ${d.strIngredient6} => QTY: ${d.strMeasure6}`;
    if (d.strIngredient1 != "") {
      div.append(in6);
    }
    let in7 = document.createElement("p");
    in7.innerHTML = `Item 7: ${d.strIngredient7} => QTY: ${d.strMeasure7}`;
    if (d.strIngredient1 != "") {
      div.append(in7);
    }
    let in8 = document.createElement("p");
    in8.innerHTML = `Item 8: ${d.strIngredient8} => QTY: ${d.strMeasure8}`;
    if (d.strIngredient1 != "") {
      div.append(in8);
    }
    let in9 = document.createElement("p");
    in9.innerHTML = `Item 9: ${d.strIngredient9} => QTY: ${d.strMeasure9}`;
    if (d.strIngredient1 != "") {
      div.append(in9);
    }
    let in10 = document.createElement("p");
    in10.innerHTML = `Item 10: ${d.strIngredient10} => QTY: ${d.strMeasure10}`;
    if (d.strIngredient1 != "") {
      div.append(in10);
    }
    let instr = document.createElement("p");
    instr.innerHTML = `Preperation Steps: ${d.strInstructions}`;
    div.append(instr);
    par.append(div);
  }
  
  export { getData, appendData };
  