// create count, increment the count



// ***** Box 1 *****

var count1 = 0;
var countElement1 = document.querySelector(".count1");

console.log(countElement1);

function add1() {
  count1++;
  countElement1.innerText = count1 + " like(s)";
  console.log(count1);
}

// ***** Box 2 *****

var count2 = 0;
var countElement2 = document.querySelector(".count2");

console.log(countElement2);
function add2() {
  count2++;
  countElement2.innerText = count2 + " like(s)";
  console.log(count2);
}

// ***** Box 3 *****

var count3 = 0;
var countElement3 = document.querySelector(".count3");

console.log(countElement3);
function add3() {
  count3++;
  countElement3.innerText = count3 + " like(s)";
  console.log(count3);
}
