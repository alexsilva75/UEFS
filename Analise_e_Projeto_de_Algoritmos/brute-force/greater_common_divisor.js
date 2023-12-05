"use strict";

function gcd(m, n) {
  let t = Math.min(m, n);

  while (t > 1) {
    if (m % t == 0 && n % t == 0) {
      return t;
    }

    t--;
  }

  return t;
}

console.log(gcd(70, 14));

function euclidean_gcd(m, n) {
  while (n > 0) {
    let r = m % n;
    m = n;
    n = r;
  }

  return m;
}

console.log(euclidean_gcd(70, 17));
