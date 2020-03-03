let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (data) {
    let inputs = parseInt(data);
    let result = partFib(inputs);
    console.log(result);
    rl.close();
});

rl.on("close", () => {
    process.exit(0);
});

function partFib(n) {
    if (n == 1 && n == 2) {
        return 1;
    }
    else {
        let a = 1;
        let b = 1;
        let c = a;
        while (n > 2) {
            c = a + b;
            a = b;
            b = c;
            n = n - 1;

            if (c > 999999) {
                c = c - 1000000;
                if (a > 999999) {
                    a = a - 1000000;
                }
                if (b > 999999) {
                    b = b - 1000000;
                }
            }
        }
        return c;
    }
}