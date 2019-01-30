var OSInfo = require('./modules/OSInfo');

process.stdin.setEncoding("utf-8");
process.stdin.on("readable", function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case 'showVersion':
                process.stdout.write(process.versions.node);
                break;
            case 'showLang':
                process.stdout.write(process.env.lang);
                break;
            case 'getOSinfo':
                OSInfo.print();
                break;
            case 'exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
            default:
                process.stderr.write('Wrong instruction!\n');
                break;
        }
    }
});