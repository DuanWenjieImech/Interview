let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (data) {
    let inputs = data;
    let result = solveProblem(inputs);
    console.log(result);
    rl.close();
});

rl.on("close", () => {
    process.exit(0);
});

function solveProblem(n) {
    let connectionMatrix = [
        0, 1, 2, 1, 2, 3, 2, 3, 4, 3, 4, 5,
        1, 0, 1, 2, 1, 2, 3, 2, 3, 4, 3, 4,
        2, 1, 0, 3, 2, 1, 4, 3, 2, 5, 4, 3,
        1, 2, 3, 0, 1, 2, 1, 2, 3, 2, 3, 4,
        2, 1, 2, 1, 0, 1, 2, 1, 2, 3, 2, 3,
        3, 2, 1, 2, 1, 0, 3, 2, 1, 4, 3, 2,
        2, 3, 4, 1, 2, 3, 0, 1, 2, 1, 2, 3,
        3, 2, 3, 2, 1, 2, 1, 0, 1, 2, 1, 2,
        4, 3, 2, 3, 2, 1, 2, 1, 0, 3, 2, 1,
        3, 4, 5, 2, 3, 4, 1, 2, 3, 0, 1, 2,
        4, 3, 4, 3, 2, 3, 2, 1, 2, 1, 0, 1,
        5, 4, 3, 4, 3, 2, 3, 2, 1, 2, 1, 0
    ];

    let startPosition = 5;
    let resultDistance = 0;

    let count = 0;

    while (count < n.length) {
        let char = n.slice(count, count + 1);
        let index = 0;
        if (char == "*") {
            index = 10;
        }
        else if (char == "#") {
            index = 12;
        }
        else if (char == "0") {
            index = 11;
        }
        else {
            let number = parseInt(char);
            if (!number) {
                console.log("Error input");
            }
            else {
                index = number;
            }
        }

        resultDistance = resultDistance + connectionMatrix[(startPosition - 1) * 12 + index - 1];
        startPosition = index;

        count++;
    }

    return resultDistance;
}