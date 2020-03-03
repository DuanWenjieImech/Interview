let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (data) {
    let inputs = data;
    console.log(inputs);
    rl.close();
});

rl.on("close", () => {
    process.exit(0);
});