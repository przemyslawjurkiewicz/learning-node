process.stdin.setEncoding("utf-8");
process.stdin.on("readable", function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case 'show version':
            process.stdout.write(process.versions.node);
            break;
            case 'show lang':
            process.stdout.write(process.env.LANG);
            break;






            // process.stdout.write("Quitting app!\n");
            //  process.exit();
            //  } else {
            //      process.stderr.write('Wrong instruction!\n');
            //  }
        }
    }
});