function runProgram(input) {
    var newInput = input.split(/[\r\n]+/);
    var t = Number(newInput[0]);
    var s = 1;
    for(i=0;i<t;i++){
      var d = Number(newInput[s])
        var data = newInput.slice(s+1,s+1+d).map(function(a){ return a.split(" ").map(Number)});
  
    }
  }
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });