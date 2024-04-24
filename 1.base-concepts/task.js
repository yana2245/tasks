"use strict";
function solveEquation(a, b, c) {
  let discriminant = b**2-4*a*c;
  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    return [-b/(2*a)];
} else {
return [(-b + Math.sqrt(discriminant) )/(2*a), (-b - Math.sqrt(discriminant) )/(2*a)];
}
}


