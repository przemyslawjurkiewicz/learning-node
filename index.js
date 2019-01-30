var EventEmitter = require("events").EventEmitter;
var OSInfo = require("./modules/OSInfo");

var emitter = new EventEmitter();
emitter.on("beforeCommand", function(instruction) {
  console.log("You wrote: " + instruction + ", trying to run command");
});
emitter.on("afterCommand", function() {
  console.log("Finished command");
});

process.stdin.setEncoding("utf-8");
process.stdin.on("readable", function() {
  var input = process.stdin.read();
  if (input !== null) {
    var instruction = input.toString().trim();
    emitter.emit("beforeCommand", instruction);
    switch (instruction) {
      case "showVersion":
        console.log(process.versions.node);
        break;
      case "showLang":
        console.log(process.env.lang);
        break;
      case "getOSinfo":
        OSInfo.print();
        break;
      case "exit":
        console.log("Quitting app!");
        process.exit();
      default:
        process.stderr.write("Wrong instruction!\n");
        break;
    }
    emitter.emit("afterCommand");
  }
});
