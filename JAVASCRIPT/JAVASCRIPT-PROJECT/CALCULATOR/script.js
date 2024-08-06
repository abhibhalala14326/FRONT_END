input = document.querySelector(".input");

function display(inputdata) {
  input.value += inputdata;
}

function clearAll() {
  input.value = "";
}

function allsum() {
  try {
    input.value = eval(input.value);
  } catch {
    input.value = "Err";
  }
}


