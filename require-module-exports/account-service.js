const sum = require('./utility.js');

const checkingAccountBalance = 200;
const savingsAccountBalance = 1000;
const retirementAccountBalance = 20000;

const totalBalance = sum([checkingAccountBalance, savingsAccountBalance, retirementAccountBalance]);

console.log(totalBalance);
