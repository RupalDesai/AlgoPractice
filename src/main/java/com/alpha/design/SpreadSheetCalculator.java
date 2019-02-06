package com.alpha.design;
/*
Spreadsheet Calculator
A simple textual spreadsheet calculator based on java. Developed for a coding challenge.
Supported Functionalities
Supports operations on negative and positive Integers and cell based references.
Detects and reports circular dependencies between cells
Supported Operations as of now:
Additon +
Subtraction -
Multiplication *
Division /
Increment ++
Decrement --

Examples
1. input1.txt
Inputs:
1	2	3
A	A2	4 5 *	A1
B	A1 B2 / 2 +	3	39 B1 B2 * /
Results:
20.00000

20.00000

20.00000

8.66667

3.00000

1.50000

PrettyPrint Results:
1	2	3
A	20.00000	20.00000	20.00000
B	8.66667	3.00000	1.50000
2. input2.txt
Inputs:
1	2	3
A	A2	4 5 * A1 /	A1
B	A1 B2 / 2 +	3	39 B1 B2 * /
Results:
Not Evaluated (Circular Dependency)

Not Evaluated (Circular Dependency)

Not Evaluated

Not Evaluated (Circular Dependency)

3.00000

Not Evaluated

PrettyPrint Results:
1	2	3
A	Not Evaluated (Circular Dependency)	Not Evaluated (Circular Dependency)	Not Evaluated
B	Not Evaluated (Circular Dependency)


*/

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.Stack;

public class SpreadSheetCalculator {

    static Double[][] result;
    static List<String> operations = Arrays.asList("+", "-", "/", "*", "++", "--");
    static List<String> singleOperations = Arrays.asList("++", "--");

    public static void main(String[] args) throws FileNotFoundException {
        File file = new File(args[0]);

        System.out.println("Each operation and operands must be seperated by space else the Logic won't run ");
        Scanner sc = new Scanner(file);

        String ip = sc.nextLine();
        String ipArr[] = ip.split("\\s");

        int n = Integer.valueOf(ipArr[0]);
        int m = Integer.valueOf(ipArr[1]);
        String[][] arr = new String[m][n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                String str = sc.nextLine();
                arr[i][j] = (str);
            }

        }
        result = new Double[m][n];
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++) {
                result[i][j] = Double.MAX_VALUE;
            }
        boolean visited[][] = new boolean[m][n];
        boolean exceptionChecker = true;
        for (int i = 0; i < m && exceptionChecker; i++) {
            for (int j = 0; j < n; j++) {
                visited = new boolean[m][n];

                try {
                    evaluateandPrint(arr, m, n, i, j, visited);
                    System.out.print(String.format("%.5f", result[i][j]) + " ");
                } catch (Exception e) {

                    System.out.println("An error has occured due to malformed input The error is :" + e.getMessage()
                            + " \nClosing the SpreadSheet Program");
                    exceptionChecker = false;
                    break;
                }
            }
            System.out.println();
        }
        sc.close();
    }

    private static void evaluateandPrint(String[][] arr, int n, int m, int i, int j, boolean[][] visited)
            throws Exception {

        if (i < 0 || i >= n || j < 0 || j >= m)
            throw new Exception("Column And Row Out of Bounds");

        if (!visited[i][j] || result[i][j] != (Double.MAX_VALUE))
            visited[i][j] = true;
        else
            throw new Exception("Cyclic Dependency In Input");

        if (result[i][j] != (Double.MAX_VALUE))
            return;
        String[] expr = arr[i][j].split("\\s");
        Double totalvalue = 0d;

        if (expr.length == 1) {
            if (expr[0].matches("[a-zA-Z]+[0-9]+")) {

                int newI = LetterToRow(expr[0].charAt(0));
                int newJ = Integer.valueOf(expr[0].substring(1)) - 1;
                if (result[newI][newJ] == (Double.MAX_VALUE)) {
                    evaluateandPrint(arr, n, m, newI, newJ, visited);
                }
                totalvalue = result[newI][newJ];
            } else {
                totalvalue = Double.valueOf(expr[0]);

            }

        } else {
            Stack<String> st = new Stack<>();

            for (int k = 0; k < expr.length; k++) {
                if (!operations.contains(expr[k]) && !singleOperations.contains(expr[k])) {
                    if (expr[k].matches("[a-zA-Z]+[0-9]+")) {
                        int newI = LetterToRow(expr[k].charAt(0));
                        int newJ = Integer.valueOf(expr[k].substring(1)) - 1;
                        evaluateandPrint(arr, n, m, newI, newJ, visited);
                        expr[k] = String.valueOf(result[newI][newJ]);
                    }
                    st.push(expr[k]);
                } else if (singleOperations.contains(expr[k])) {
                    calculateSingle(st, expr[k]);
                } else {
                    calculate(st, expr[k]);
                }

            }
            totalvalue = Double.valueOf(st.pop());

        }

        result[i][j] = totalvalue;
    }

    private static void calculateSingle(Stack<String> st, String str) throws Exception {
        if (st.size() < 1) {
            throw new Exception("POSTFIX EXPR NOT CORRECT");
        }
        Double value1 = Double.valueOf(st.pop());
        st.push(String.valueOf(calculateOperationValue(value1, value1, str)));

    }

    private static void calculate(Stack<String> st, String str) throws Exception {

        Double value1 = Double.valueOf(st.pop());
        if (st.size() < 1) {
            throw new Exception("POSTFIX EXPR NOT CORRECT");
        }
        Double value2 = Double.valueOf(st.pop());
        st.push(String.valueOf(calculateOperationValue(value2, value1, str)));

    }

    private static Double calculateOperationValue(Double value2, Double value1, String op) throws Exception {
        if (op.equals("+")) {
            return value2 + value1;
        } else if (op.equals("-")) {
            return value2 - value1;
        } else if (op.equals("*")) {
            return value2 * value1;
        } else if (op.equals("/")) {
            return value2 / value1;
        } else if (op.equals("++")) {
            value2++;
            return value2;
        } else if (op.equals("--")) {
            value2--;
            return value2;
        } else {
            throw new Exception("Operation Not Supported");

        }

    }

    private static Integer LetterToRow(char c) {
        return Character.toUpperCase(c) - 65;

    }

    static boolean isOperand(String x) {
        return x.matches("[a-zA-Z0-9]+");
    }

}
