
function nav(){
    return `<nav>
    <a href="">Home</a>
    <input type="text" name="" id="input" oninput="finalDebounce(Debounce,1000)">
    <button onclick="Search()">Search</button>
<div>
    <a href="./jwell.html">Top 10 Movies</a>
    <a href="./elec.html">Top 10 TV Series</a>
    <a href="#">Register</a>
    <a href="#">Login</a>
</div>
</nav>
<div id="data"> 
</div>`
}
export default nav