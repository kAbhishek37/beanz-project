let reviews = document.getElementsByClassName("review__items");
let totalLen = reviews.length;
let totPage = Math.ceil(totalLen / 8);
let indexArr = [];
let i;
for (i = 0, p = 0; p < totalLen; i++, p = p + 8) {
  indexArr[i] = p;
}
indexArr[i] = totalLen;
let current = 0;
let last = 1;
let currp = 1;
carousel();

function previousReview() {
  current = current - 1;
  last = last - 1;
  currp = currp - 1;
  carousel();
}
function nextReview() {
  current = current + 1;
  last = last + 1;
  currp = currp + 1;
  carousel();
}
function carousel() {
  if (last > indexArr.length - 1) {
    last = 1;
    current = 0;
    currp = 1;
  }
  if (current < 0) {
    last = indexArr.length - 1;
    current = last - 1;
    currp = totPage;
  }
  for (let i = 0; i < totalLen; i++) {
    reviews[i].style.display = "none";
  }
  document.getElementById("cardcurrbytot").innerHTML =
    "" + currp + "/" + totPage;
  for (let i = indexArr[current]; i < indexArr[last]; i++) {
    reviews[i].style.display = "block";
  }
}
