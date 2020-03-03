let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (data) {
    let inputs = parseInt(data);
    let result = solveProblem(inputs);
    console.log(result);
    rl.close();
});

rl.on("close", () => {
    process.exit(0);
});

function solveProblem(n) {
    if (n == 1) {
        return 1;
    }
    if ((n >> 1) << 1 == n) {
        return solveProblem(n >> 1);
    }
    else {
        return 0;
    }
}