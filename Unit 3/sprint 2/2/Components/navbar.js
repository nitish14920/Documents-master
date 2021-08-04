
function navbar(){
    return `<nav>
    <a href="">Home</a>
    <input type="text" name="" id="inp" placeholder="Enter Receipe">
    <button id="searchbtn" onclick="search()">
      <i id="search"class="fas fa-search"></i>
    </button>
    
<div>
    <a href="./resoftheday.html"> Receipe of the day </a>
    <a href="./latestres.html">Latest Receipe</a>
    <a href="#">Register</a>
    <a href="#">Login</a>
</div>
</nav>
<div id="data"> 
</div>`
}
export default navbar