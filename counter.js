var counter = document.querySelector("#counter");
var saved = document.querySelector("p");
count = 0;

function add() {
  count++;
  console.log(count);
  counter.innerHTML = count;
}

function subtract() {
  if (count > 0) {
    count--;
    counter.innerHTML = count;
  }
  console.log(count);
}

function reset() {
  counter.innerHTML = 0;
  count = 0;

  console.log("Data reset");
}

function save() {
  const date = new Date();
  saved.innerHTML = date + "--" + count;
  // saved.innerHTML= count;
  reset();
}
