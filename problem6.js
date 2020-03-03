let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (data) {
    let result = solveProblem(data);
    console.log(result);
    rl.close();
});

rl.on("close", () => {
    process.exit(0);
});

function solveProblem(calcString) {
    let totalSum = 0;
    let tempNumber = 0;
    let tempGroup = 0;
    let minusFlag = false;
    for (let i = 0; i < calcString.length; i++) {
        var char = calcString[i];
        switch (char) {
            case "-":
                {
                    tempGroup += tempNumber;
                    if (minusFlag == true) {
                        totalSum = totalSum - tempGroup;
                        //minusFlag = false;
                    }
                    else {
                        totalSum = totalSum + tempGroup;
                        minusFlag = true;
                    }

                    tempGroup = 0;
                    tempNumber = 0;
                    break;
                }
            case "+":
                {
                    tempGroup += tempNumber;
                    tempNumber = 0;
                    break;
                }
            default:
                {
                    tempNumber = tempNumber * 10 + parseInt(char);
                    break;
                }

        }
    }

    if (minusFlag == true) {
        totalSum = totalSum - tempGroup - tempNumber;
    }
    else {
        totalSum = totalSum + tempGroup + tempNumber;
    }

    return totalSum;
}