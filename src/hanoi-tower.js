const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */

 /*const hanoi_towers = (int quantity, int from, int to, int buf_peg)   //quantity-число колец, from-начальное положение колец(1-3),to-конечное положение колец(1-3)
 {                                                         //buf_peg - промежуточный колышек(1-3)
         if (quantity != 0)
         {
                 hanoi_towers(quantity-1, from, buf_peg, to);
  
                 cout << from << " -> " << to << endl;
  
                 hanoi_towers(quantity-1, buf_peg, to, from);
         }
 }
  
 int main()
 {
         setlocale(LC_ALL,"rus");
         int start_peg, destination_peg, buffer_peg, plate_quantity;
         cout << "Номер первого столбика:" << endl;
         cin  >> start_peg;
         cout << "Номер конечного столбика:" << endl;
         cin  >> destination_peg;
         cout << "Номер промежуточного столбика:" << endl;
         cin  >> buffer_peg;
         cout << "Количество дисков:" << endl;
         cin  >> plate_quantity;
  
         hanoi_towers(plate_quantity, start_peg, destination_peg, buffer_peg);
 return 0;
 }*/
function calculateHanoi(/* disksNumber, turnsSpeed */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  calculateHanoi
};
