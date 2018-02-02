(function () {
  'use stric';

  // create a circle object
  var circle = {
    radius: 3,
    getArea: function (radius) {
    // TODO: complete this method
    // hint: area = pi * radius^2
      return ((Math.pow(radius, 2)) * (Math.PI));
    },

    logInfo: function (doRounding) {
      // TODO: complete this method.
      // If doRounding is true, round the result to the nearest integer.
      // Otherwise, output the complete value
      var round = (doRounding) ? Math.round(circle.getArea(circle.radius)) : Math.ceil(circle.getArea(circle.radius));
      console.log(`Area of a circle with radius: ${this.radius}, is: ${round}`);
    }
  };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
  circle.radius = 5;
  circle.getArea(circle.radius);
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
