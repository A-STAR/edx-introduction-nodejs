module.exports = {
  sayHelloInSwedish() {
    return 'Hej';
  },
  sayHelloInTatar() {
    return 'Isänme';
  }
};

module.exports.sayHelloInEnglish = function() {
  return 'Hello';
};
