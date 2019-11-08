// src/js/person.js

//function Person(attr) {
//    this.weight = attr.weight;
//    this.height = attr.height;
//};
// src/js/person.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Person;
} 

function Person(attr) {
    this.weight = attr.weight;
    this.height = attr.height;
    //this.calculate_bmi = function() {
    //    this.bmiValue = 26.01;
    //    this.bmiMessage = "Overweight"
   // }
   this.calculate_bmi = function () {
     calculator = new BMICalculator();
     calculator.metric_bmi(this)
   };
   Person.prototype.calculate_imperial_bmi  = function() {
    calculator = new BMICalculator();
    calculator.imperial_bmi(this);
  };

};

