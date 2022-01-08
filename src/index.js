
module.exports = function towelSort (matrix) {
 if (matrix === undefined) {
   return [];
 }
 let res = [];
 for(let i = 0; i < matrix.length; i++){ // пробегаемся по двумерному массиву
   if (i % 2 === 0){ // если кол-во элементов четное
     for(let j = 0; j < matrix[i].length; j++){
       res.push(matrix[i][j]); // пушим в переменную результат - новый массив
     }
   }else{ // если матрица нечетная (кол-во элементов i)
     for(let a = matrix[i].length - 1; a >= 0; a--) { // пробегаемся по массиву, исключая несовпадения по длине
        res.push(matrix[i][a]); 
     }
   }
 }
 return res;
};
