
let val = "";
const z = document.getElementById("displayText");

function append(v) {
  val += v;
  z.value = val;
}

function calculate() {
  try {
    
    z.value = eval(z.value);
    val = "";
  } catch (error) {
    z.value = "Error";
    
  }
}

function clearValue() {
  val = "";
  z.value = "";
}

