   function validateBattlefield(field) {
  return checkingdiagonal(field) && checkingquantity(field);
     
     function checkingquantity(field) {
        let ship = 0, cruiser = 0, hunter = 0, submarine = 0, errors = 0;
        for (let row = 0; row <= 9; row++) {
            let accumulate = 0;  
           
            for (let column = 0; column <= 9; column++) {
                if (field[row][column] == 1) {
                    accumulate += 1;
                } else {
                    switchReset(accumulate);
                    accumulate = 0;
                }
            }
         
            switchReset(accumulate);
       }
       
       for (let column = 0; column <= 9; column++) {
            let accumulate = 0;  
           
            for (let row = 0; row <= 9; row++) {
                if (field[row][column] == 1) {
                    accumulate += 1;
                } else {
                    switchReset(accumulate);
                    accumulate = 0;
                }
            }
         
            switchReset(accumulate);
       }
       
       if (ship == 1 && cruiser == 2 && hunter == 3 && submarine == 24 && errors == 0) {
            return true;
       } else {
            return false;
       }
       
       
       function switchReset(accumulate) {
          switch(accumulate) {
          case 0:
             break;
          case 1:
             submarine += 1;
             break;
          case 2:
             hunter += 1;
             break;
          case 3:
             cruiser += 1;
             break;
          case 4:
             ship += 1;
             break;
          default:
             errors += 1;
          }
       }
       
     }
     
     
     function checkingdiagonal(field) {
    for (let row = 0; row < 10; row ++){
        for (let column = 0; column < 10; column++) {
            if (field[row][column] == 1) {
                if (row == 0) {
                    if (field[row + 1][column - 1] == 1 || field[row + 1][column + 1] == 1) {
                        return false;
                }
                } else if (row == 9) {
                    if (field[row - 1][column - 1] == 1 || field[row - 1][column + 1] == 1) {
                        return false;
                }
                } else if (column == 0) {
                    if (field[row - 1][column + 1] == 1 || field[row + 1][column + 1] == 1) {
                        return false;
                }
                } else if (column == 9) {
                    if (field[row - 1][column - 1] == 1 || field[row + 1][column - 1] == 1) {
                        return false;
                }
                } else { 
                    if (field[row - 1][column - 1] == 1 || field[row - 1][column + 1] == 1 || field[row + 1][column - 1] == 1 || field[row + 1][column + 1] == 1) {
                        return false;
                    }
                }
            }    
        }
    }
    return true;
  }
  
}
