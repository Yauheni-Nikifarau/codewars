var spiralize = function (n) {
    let array = new Array(n),
        row = 0,
        column = 0,
        turn = true,
        vector = ['right','down','left','up'],
        vectorNum = 0;

    for (i=0; i < n; i++) {
        array[i] = new Array(n);
        for (j=0; j < n; j++) {
            array[i][j] = 0;
        }
    }

    while (turn) {
        if (vectorNum == 0) {
            if (array[row - 1] != undefined) {
                if (array[row - 1][column] == 1) break;
            }
            if (array[row + 1] != undefined) {
                if (array[row + 1][column] == 1) break;
            }
            if (array[row][column + 1] == 1) break;
        }
        if (vectorNum == 1) {
            if (array[row][column + 1] == 1) break;
            if (array[row][column - 1] == 1) break;
            if (array[row + 1] != undefined) {
                if (array[row + 1][column] == 1) break;
            }
        }
        if (vectorNum == 2) {
            if (array[row - 1] != undefined) {
                if (array[row - 1][column] == 1) break;
            }
            if (array[row + 1] != undefined) {
                if (array[row + 1][column] == 1) break;
            }
            if (array[row][column - 1] == 1) break;
        }
        if (vectorNum == 3) {
            if (array[row][column + 1] == 1) break;
            if (array[row][column - 1] == 1) break;
            if (array[row - 1] != undefined) {
                if (array[row - 1][column] == 1) break;
            }
        }

        array[row][column] = 1;

        if (vectorNum == 0) {
            if (column == n - 1 || array[row][column + 2] == 1) changeWay();
        }
        if (vectorNum == 1) {
            if (row == n - 1) changeWay();
            if (row + 2 < n) {
                if (array[row + 2][column] == 1) changeWay();
            }
        }
        if (vectorNum == 2) {
            if (column == 0 || array[row][column - 2] == 1) changeWay();
        }
        if (vectorNum == 3) {
            if (row == 0) changeWay();
            if (row - 2 >= 0) {
                if (array[row - 2][column] == 1) changeWay();
            }
        }

        switch (vectorNum) {
            case 0:
                column++;
                break;
            case 1:
                row++;
                break;
            case 2:
                column--;
                break;
            case 3:
                row--;
                break;
        }
    }





    function changeWay() {
        vectorNum++;
        if (vectorNum == 4) vectorNum = 0;
    }
    return array;
}
