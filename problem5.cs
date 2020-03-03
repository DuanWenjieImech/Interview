using System;

public class Example
{
    public static void Main()
    {
        string line = Console.ReadLine();
        int num = Int32.Parse(line);

        var listCommand = new string[num];
        for (int i=0;i<num;i++)
        {
            string tempLine = Console.ReadLine();
            listCommand[i] = tempLine;
        }

        var result = solveProblem(listCommand);

        Console.Write(result);
    }

    public static string solveProblem(string[] listCommand)
    {
        int turnLeftCount = 0;
        int turnRightCount = 0;
        int finalCoordX = 0;
        int finalCoordY = 0;
        int currentDirX = 0;
        int currentDirY = 1;
        for (int i = 0; i < commandStringList.length; i++) {
            for (int j = 0; j < commandStringList[i].length; j++) {
                string char = commandStringList[i][j];
                switch (char) {
                    case "S":
                        {
                            finalCoordX = finalCoordX + currentDirX;
                            finalCoordY = finalCoordY + currentDirY;
                            break;
                        }
                    case "L":
                        {
                            turnLeftCount++;
                            int tempX = 0 * currentDirX - currentDirY;
                            int tempY = 1 * currentDirX + 0 * currentDirY;
                            currentDirX = tempX;
                            currentDirY = tempY;
                            break;
                        }
                    case "R":
                        {
                            turnRightCount++;;
                            int tempX = 0 * currentDirX + 1 * currentDirY;
                            int tempY = -1 * currentDirX + 0 * currentDirY;
                            currentDirX = tempX;
                            currentDirY = tempY;
                            break;
                        }
                    default:
                        break;
                }
            }
        }

        if (Math.Abs(turnLeftCount - turnRightCount) % 4 != 0) {

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
}