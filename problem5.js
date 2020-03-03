let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let counts = 0;
let init = false;
let totalCommandList = [];

rl.on('line', function (data) {
    if (init == false) {
        counts = parseInt(data);
        init = true;
    }
    else {
        totalCommandList.push(data);
        counts--;

        if (counts <= 0) {
            let result = solveProblem(totalCommandList);
            console.log(result);
            rl.close();
        }
    }
});

rl.on("close", () => {
    process.exit(0);
});

function solveProblem(commandStringList) {
    //startTime = new Date().valueOf();
    let turnLeftCount = 0;
    let turnRightCount = 0;
    let finalCoordX = 0;
    let finalCoordY = 0;
    let currentDirX = 0;
    let currentDirY = 1;
    for (let i = 0; i < commandStringList.length; i++) {
        for (let j = 0; j < commandStringList[i].length; j++) {
            let char = commandStringList[i][j];
            switch (char) {
                case 'S':
                    {
                        finalCoordX = finalCoordX + currentDirX;
                        finalCoordY = finalCoordY + currentDirY;
                        break;
                    }
                case 'L':
                    {
                        turnLeftCount++;
                        let tempX = 0 * currentDirX - currentDirY;
                        let tempY = 1 * currentDirX + 0 * currentDirY;
                        currentDirX = tempX;
                        currentDirY = tempY;

                        break;
                    }
                case 'R':
                    {
                        turnRightCount++;;
                        let tempX = 0 * currentDirX + 1 * currentDirY;
                        let tempY = -1 * currentDirX + 0 * currentDirY;
                        currentDirX = tempX;
                        currentDirY = tempY;
                        break;
                    }
                default:
                    break;
            }
        }
    }

    if (Math.abs(turnLeftCount - turnRightCount) % 4 != 0) {
        return "bounded";
    }
    else {
        if (finalCoordX == 0 && finalCoordY == 0) {
            return "bounded";
        }
        else {
            return "unbounded";
        }
    }
}