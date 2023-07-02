// Dedicated to God the Father

// All Rights Reserved Christopher Topalian Copyright 2000-2023

// https://github.com/ChristopherTopalian

// calculation_data.js

let calculationData = [
{
    name: "Addition",
    formula: "Sum = a + b",
    expression: "parseFloat(a) + parseFloat(b)",
    calculationFunction: "calculateAddition(a, b)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Addition'));",
    textBoxOne: "plus",
    textBoxTwo: "equals",
    textBoxResult: "Result",
    amountOfTextBoxes: 2,
    category: "arithmetic",
    type: "simple"
},

{
    name: "Addition of 3",
    formula: "Sum = a + b + c",
    expression: "parseFloat(a) + parseFloat(b) + parseFloat(c)",
    calculationFunction: "calculateAddition3(a,b, c)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Addition of 3'));",
    textBoxOne: "plus",
    textBoxTwo: "plus",
    textBoxThree: "equals",
    textBoxResult: "Result",
    amountOfTextBoxes: 3,
    category: "arithmetic",
    type: "simple"
},

{
    name: "Subtraction",
    formula: "Difference = a - b",
    expression: "a - b",
    calculationFunction: "calculateDifference(a, b)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Subtraction'));",
    textBoxOne: "minus",
    textBoxTwo: "equals",
    textBoxResult: "Result",
    amountOfTextBoxes: 2,
    category: "arithmetic",
    type: "simple"
},

{
    name: "Multiplication",
    formula: "Product = a * b",
    expression: "a * b",
    calculationFunction: "calculateMultiplication(a, b)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Multiplication'));",
    textBoxOne: "multiplied by",
    textBoxTwo: "equals",
    textBoxResult: "Result",
    amountOfTextBoxes: 2,
    category: "arithmetic",
    type: "simple"
},

{
    name: "Division",
    formula: "Quotient = a / b",
    expression: "a / b",
    calculationFunction: "calculateDivision(a, b)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Division'));",
    textBoxOne: "divided by",
    textBoxTwo: "equals",
    textBoxResult: "Result",
    amountOfTextBoxes: 2,
    category: "arithmetic",
    type: "simple"
},

{
    name: "Modulo",
    formula: "Remainder = a % b",
    expression: "a % b",
    calculationFunction: "calculateModulo(a, b)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Modulo'));",
    textBoxOne: "Dividend",
    textBoxTwo: "Divisor",
    textBoxResult: "Result Remainder",
    amountOfTextBoxes: 2,
    category: "arithmetic",
    type: "simple"
},

{
    name: "Percent",
    formula: "Percent = (a / b) * 100",
    expression: "(a / b) * 100",
    calculationFunction: "calculatePercent(a, b)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Percent'));",
    textBoxOne: "is what % of",
    textBoxTwo: "Total Value",
    textBoxResult: "Result %",
    amountOfTextBoxes: 2,
    category: "percent",
    type: "simple"
},

{
    name: "Rectangle Area",
    formula: "Area = width * length",
    expression: "a * b",
    calculationFunction: "calculateRectangleArea(a, b)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Rectangle Area'));",
    textBoxOne: "Width",
    textBoxTwo: "Length",
    textBoxResult: "Result Area",
    amountOfTextBoxes: 2,
    category: "geometry",
    type: "rectangle"
},

{
    name: "Square Area",
    formula: "Area = a * a",
    expression: "a * a",
    calculationFunction: "calculateSquareArea(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Square Area'));",
    textBoxOne: "Side",
    textBoxResult: "Result Area",
    amountOfTextBoxes: 1,
    category: "geometry",
    type: "square"
},

{
    name: "Circle Area from Radius",
    formula: "Area = PI * radius^2",
    expression: "Math.PI * Math.pow(a, 2)",
    calculationFunction: "calculateCircleAreaFromRadius(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Circle Area from Radius'));",
    textBoxOne: "Radius",
    textBoxResult: "Result Area",
    amountOfTextBoxes: 1,
    category: "geometry",
    type: "circle"
},

{
    name: "Circle Area from Diameter",
    formula: "Area = PI * (diameter / 2)^2",
    expression: "Math.PI * Math.pow((a / 2), 2)",
    calculationFunction: "calculateCircleAreaFromDiameter(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Circle Area from Diameter'));",
    textBoxOne: "Diameter",
    textBoxResult: "Result Area",
    amountOfTextBoxes: 1,
    category: "geometry",
    type: "circle"
},

{
    name: "Circle Area from Circumference",
    formula: "Area = (circumference^2) / (4 * PI)",
    expression: "Math.pow(a, 2) / (4 * Math.PI)",
    calculationFunction: "calculateCircleAreaFromCircumference(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Circle Area from Circumference'));",
    textBoxOne: "Circumference",
    textBoxResult: "Result Area",
    amountOfTextBoxes: 1,
    category: "geometry",
    type: "circle"
},

{
    name: "Circle Circumference from Diameter",
    formula: "Circumference = PI * diameter",
    expression: "Math.PI * a",
    calculationFunction: "calculateCircleCircumferenceFromDiameter(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Circle Circumference from Diameter'));",
    textBoxOne: "Diameter",
    textBoxResult: "Result Circumference",
    amountOfTextBoxes: 1,
    category: "geometry",
    type: "circle"
},

{
    name: "Circle Circumference from Radius",
    formula: "Circumference = (2 * PI) * radius",
    expression: "(2 * Math.PI) * a",
    calculationFunction: "calculateCircleCircumferenceFromRadius(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Circle Circumference from Radius'));",
    textBoxOne: "Radius",
    textBoxResult: "Result Circumference",
    amountOfTextBoxes: 1,
    category: "geometry",
    type: "circle"
},

{
    name: "Circle Circumference from Area",
    formula: "Circumference = 2 * Square Root PI * area",
    expression: "2 * (Math.sqrt(Math.PI * a))",
    calculationFunction: "calculateCircleCircumferenceFromArea(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Circle Circumference from Area'));",
    textBoxOne: "Area",
    textBoxResult: "Result Circumference",
    amountOfTextBoxes: 1,
    category: "geometry",
    type: "circle"
},

{
    name: "Distance",
    // distance = speed * time
    formula: "Distance = (mph * minutes) / 60",
    expression: "(a * b) / 60",
    calculationFunction: "calculateDistance(a, b)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Distance'));",
    textBoxOne: "Mph",
    textBoxTwo: "Minutes",
    textBoxResult: "Result Miles",
    amountOfTextBoxes: 2,
    category: "speed time distance",
    type: "distance"
},

{
    name: "Speed",
    // speed = distance / time
    // feet to miles is feet * 0.000189394
    // minutes to hours is minutes * 0.166667
    formula: "Speed = (feet * 0.000189394) / (minutes * 0.166667)",
    expression: "(a * 0.000189394) / (b * 0.0166667)",
    calculationFunction: "calculateSpeed(a, b)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Speed'));",
    textBoxOne: "Feet",
    textBoxTwo: "Minutes",
    textBoxResult: "Result Mph",
    amountOfTextBoxes: 2,
    category: "speed time distance",
    type: "speed"
},

{
    name: "Time",
    // time = distance / time
    // feet to miles is feet * 000189394
    // mph to mpm is mph * 0.0166667
    formula: "Time =  (feet * 0.000189394) / (b * 0.0166667)",
    expression: "(a * 0.000189394) / (b * 0.0166667)",
    calculationFunction: "calculateTime(a, b)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Time'));",
    textBoxOne: "Feet",
    textBoxTwo: "MPH",
    textBoxResult: "Result Minutes",
    amountOfTextBoxes: 2,
    category: "speed time distance",
    type: "time"
},

{
    name: "Recatangle Perimeter",
    formula: "Perimeter = (2 * a) + (2 * b);",
    expression: "(2 * a) + (2 * b)",
    calculationFunction: "calculateRectanglePerimeter(a, b)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Recatangle Perimeter'));",
    textBoxOne: "Width",
    textBoxTwo: "Length",
    textBoxResult: "Result Perimeter",
    amountOfTextBoxes: 2,
    category: "geometry",
    type: "rectangle"
},

{
    name: "Square Perimeter",
    formula: "Perimeter = 4 * side",
    expression: "4 * a",
    calculationFunction: "calculateSquarePerimeter(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Square Perimeter'));",
    textBoxOne: "Side",
    textBoxResult: "Result Perimeter",
    amountOfTextBoxes: 1,
    category: "geometry",
    type: "square"
},

{
    name: "Triangle Equilateral Perimeter",
    formula: "Perimeter = 3 * side",
    expression: "3 * a",
    calculationFunction: "calculateTriangleEquilateralPerimeter(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Triangle Equilateral Perimeter'));",
    textBoxOne: "Side",
    textBoxResult: "Result Perimeter",
    amountOfTextBoxes: 1,
    category: "geometry",
    type: "triangle"
},

{
    name: "Triangle Isosceles Perimeter",
    formula: "Perimeter = (2 * a) + b",
    expression: "(2 * parseFloat(a)) + parseFloat(b)",
    calculationFunction: "calculateTriangleIsoscelesPerimeter(a, b)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Triangle Isosceles Perimeter'));",
    textBoxOne: "Leg",
    textBoxTwo: "Base",
    textBoxResult: "Result Perimeter",
    amountOfTextBoxes: 2,
    category: "geometry",
    type: "triangle"
},

{
    name: "Sphere Area from Radius",
    formula: "Area = 4 * PI * radius^2",
    expression: "4 * Math.PI * Math.pow(a, 2)",
    calculationFunction: "calculateSphereAreaFromRadius(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Sphere Area from Radius'));",
    textBoxOne: "Radius",
    textBoxResult: "Result Area",
    amountOfTextBoxes: 1,
    category: "geometry",
    type: "sphere"
},

{
    name: "Sphere Radius from Diameter",
    formula: "Radius = diameter / 2",
    expression: "a / 2",
    calculationFunction: "calculateSphereRadiusFromDiameter(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Sphere Radius from Diameter'));",
    textBoxOne: "Diameter",
    textBoxResult: "Result Radius",
    amountOfTextBoxes: 1,
    category: "geometry",
    type: "sphere"
},

{
    name: "Sphere Volume from Radius",
    formula: "Volume = (4 / 3 * Math.PI) * Math.pow(radius, 3.0)",
    expression: "(4 / 3 * Math.PI) * Math.pow(a, 3.0)",
    calculationFunction: "calculateSphereVolumeFromRadius(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Sphere Volume from Radius'));",
    textBoxOne: "Radius",
    textBoxResult: "Result Volume",
    amountOfTextBoxes: 1,
    category: "geometry",
    type: "sphere"
},

{
    name: "Celsius to Fahrenheit",
    formula: "Fahrenheit = (celsius * 1.8) + 32",
    expression: "(a * 1.8) + 32",
    calculationFunction: "calculateCelsiusToFahrenheit(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Celsius to Fahrenheit'));",
    textBoxOne: "Celsius",
    textBoxResult: "Result Fahrenheit",
    amountOfTextBoxes: 1,
    category: "conversion",
    type: "temperature"
},

{
    name: "Fahrenheit to Celsius",
    formula: "Celsius = 5 * (fahrenheit - 32) / 9;",
    expression: "5 * (a - 32) / 9",
    calculationFunction: "calculateFahrenheitToCelsius(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Fahrenheit to Celsius'));",
    textBoxOne: "Fahrenheit",
    textBoxResult: "Result Celsius",
    amountOfTextBoxes: 1,
    category: "conversion",
    type: "temperature"
},

{
    name: "Decimal to Percent",
    formula: "Percent = decimal * 100",
    expression: "a * 100",
    calculationFunction: "calculateDecimalToPercent(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Decimal to Percent'));",
    textBoxOne: "Decimal",
    textBoxResult: "Result Percent",
    amountOfTextBoxes: 1,
    category: "conversion",
    type: "percent"
},

{
    name: "Percent to Decimal",
    formula: "Decimal = percent / 100",
    expression: "a / 100",
    calculationFunction: "calculatePercentToDecimal(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Percent to Decimal'));",
    textBoxOne: "Percent",
    textBoxResult: "Result Decimal",
    amountOfTextBoxes: 1,
    category: "conversion",
    type: "percent"
},

{
    name: "Mph to Kph",
    formula: "Kph = mph * 1.60934",
    expression: "a * 1.60934",
    calculationFunction: "calculateMphToKph(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Mph to Kph'));",
    textBoxOne: "Mph",
    textBoxResult: "Result Kph",
    amountOfTextBoxes: 1,
    category: "conversion",
    type: "speed"
},

{
    name: "Kph to Mph",
    formula: "Mph = kph * 0.621371",
    expression: "a * 0.621371",
    calculationFunction: "calculateKphToMph(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Kph to Mph'));",
    textBoxOne: "Kph",
    textBoxResult: "Result Mph",
    amountOfTextBoxes: 1,
    category: "conversion",
    type: "speed"
},

{
    name: "Fps to Mph",
    formula: "Mph = a * 0.681818",
    expression: "a * 0.681818",
    calculationFunction: "calculateFpsToMph(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Fps to Mph'));",
    textBoxOne: "Fps",
    textBoxResult: "Result Mph",
    amountOfTextBoxes: 1,
    category: "conversion",
    type: "speed"
},

{
    name: "Mph to Fps",
    formula: "Fps = (mph * 5280) / 3600",
    expression: "(a * 5280) / 3600",
    calculationFunction: "calculateMphToFps(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Mph to Fps'));",
    textBoxOne: "Mph",
    textBoxResult: "Result Fps",
    amountOfTextBoxes: 1,
    category: "conversion",
    type: "speed"
},

{
    name: "Feet to Meter",
    formula: "Meter = feet * 0.3048",
    expression: "a * 0.3048",
    calculationFunction: "calculateFeetToMeter(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Feet to Meter'));",
    textBoxOne: "Feet",
    textBoxResult: "Result Meter",
    amountOfTextBoxes: 1,
    category: "conversion",
    type: "distance"
},

{
    name: "Meter to Feet",
    formula: "Feet = meters * 3.28084",
    expression: "a * 3.28084",
    calculationFunction: "calculateMeterToFeet(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Meter to Feet'));",
    textBoxOne: "Meter",
    textBoxResult: "Result Feet",
    amountOfTextBoxes: 1,
    category: "conversion",
    type: "distance"
},

{
    name: "Percent of Hour",
    formula: "PercentOfHour = (minute * 100) / 60",
    expression: "(a * 100) / 60",
    calculationFunction: "calculatePercentOfHour(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Percent of Hour'));",
    textBoxOne: "Minutes",
    textBoxResult: "Result Percent of Hour",
    amountOfTextBoxes: 1,
    category: "percent",
    type: "time"
},

{
    name: "Calculate Sales Tax and Total Price",
    formula: " Sales Tax Amount = price * (taxRate / 100)",
    expression: "price * (taxRate / 100)",
    calculationFunction: "calculateSalesTaxAndTotalPrice(a, b)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Calculate Sales Tax and Total Price'));",
    textBoxOne: "Price",
    textBoxTwo: "Tax Rate",
    textBoxThree: "Sales Tax Amount",
    textBoxResult: "Result Sales Tax Included",
    amountOfTextBoxes: 3,
    category: "business",
    type: "money"
},

{
    name: "Calculate Year Born From Current Year",
    formula: "YearBorn = CurrentYear - Age",
    expression: "CurrentYear - a",
    calculationFunction: "calculateYearBornFromCurrentYear(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Calculate Year Born From Current Year'));",
    textBoxOne: "Age",
    textBoxTwo: "Current Year",
    textBoxResult: "Result Year Born (est)",
    amountOfTextBoxes: 2,
    category: "investigations",
    type: "background check"
},

{
    name: "Calculate Year Born From Specified Year",
    formula: "Year Born = SpecifiedYear - Age",
    expression: "SpecifiedYear - a",
    calculationFunction: "calculateYearBornFromSpecifiedYear(a, b)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Calculate Year Born From Specified Year'));",
    textBoxOne: "Age",
    textBoxTwo: "Specified Year",
    textBoxResult: "Result Year Born (est)",
    amountOfTextBoxes: 2,
    category: "investigations",
    type: "background check"
},

{
    name: "Calculate Mean Average Of Numbers",
    formula: "",
    expression: "",
    calculationFunction: "calculateMeanAverageOfNumbers()",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Calculate Mean Average Of Numbers'));",
    textBoxOne: "Numbers (Comma Separated)",
    textBoxResult: "Result Mean Average",
    amountOfTextBoxes: 1,
    category: "average",
    type: "mean"
},

{
    name: "Calculate Median Average Of Numbers",
    formula: "",
    expression: "",
    calculationFunction: "calculateMedianAverageOfNumbers()",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Calculate Median Average Of Numbers'));",
    textBoxOne: "Numbers (Comma Separated)",
    textBoxResult: "Result Median Average",
    amountOfTextBoxes: 1,
    category: "average",
    type: "median"
},

{
    name: "Calculate Feet and Inch to Meter",
    formula: "",
    expression: "",
    calculationFunction: "calculateFeetAndInchToMeter(a, b)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Calculate Feet and Inch to Meter'));",
    textBoxOne: "Feet",
    textBoxTwo: "Inch",
    textBoxResult: "Result Meters",
    amountOfTextBoxes: 2,
    category: "conversion",
    type: "distance"
},

{
    name: "Calculate Meter and Centimeter to Feet",
    formula: "",
    expression: "",
    calculationFunction: "calculateMeterAndCentimeterToFeet(a, b)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Calculate Meter and Centimeter to Feet'));",
    textBoxOne: "Meter",
    textBoxTwo: "Centimeter",
    textBoxResult: "Result Feet",
    amountOfTextBoxes: 2,
    category: "conversion",
    type: "distance"
},

{
    name: "Calculate Meter to Mile",
    formula: "",
    expression: "",
    calculationFunction: "calculateMeterToMile(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Calculate Meter to Mile'));",
    textBoxOne: "Meter",
    textBoxResult: "Result Mile",
    amountOfTextBoxes: 1,
    category: "conversion",
    type: "distance"
},

{
    name: "Calculate Mile to Meter",
    formula: "",
    expression: "",
    calculationFunction: "calculateMileToMeter(a)",
    calculatorType: "createCalculator(findIndexByName(calculationData, 'Calculate Mile to Meter'));",
    textBoxOne: "Mile",
    textBoxResult: "Result Meter",
    amountOfTextBoxes: 1,
    category: "conversion",
    type: "distance"
}

];

