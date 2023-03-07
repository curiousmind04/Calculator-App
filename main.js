const themeToggle = document.querySelector("#theme-css");

const themeToggleFirst = document.querySelector("#first");
const themeToggleSecond = document.querySelector("#second");
const themeToggleThird = document.querySelector("#third");

function changeTheme(themeName) {
  themeToggle.href = `style/${themeName}`;
}

themeToggleFirst.addEventListener("click", () => {
  changeTheme("theme-1.css");
});

themeToggleSecond.addEventListener("click", () => {
  changeTheme("theme-2.css");
});

themeToggleThird.addEventListener("click", () => {
  changeTheme("theme-3.css");
});

const nums = document.querySelectorAll(".num");
const decimal = document.querySelector(".decimal");
const output1 = document.querySelector(".output1");
const output2 = document.querySelector(".output2");
const output3 = document.querySelector(".output3");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const equals = document.querySelector("#equals");
const del = document.querySelector("#del");
const reset = document.querySelector("#reset");

nums.forEach((num) => {
  num.addEventListener("click", () => {
    if (output2.innerHTML === "") {
      output1.innerHTML = output1.innerHTML + num.innerHTML;
    } else {
      output3.innerHTML = output3.innerHTML + num.innerHTML;
    }
  });
});

decimal.addEventListener("click", () => {
  if (output2.innerHTML === "" && !output1.innerHTML.includes(".")) {
    output1.innerHTML = output1.innerHTML + decimal.innerHTML;
  }
  if (output2.innerHTML.length > 0 && !output3.innerHTML.includes(".")) {
    output3.innerHTML = output3.innerHTML + decimal.innerHTML;
  }
});

add.addEventListener("click", () => {
  if (
    output1.innerHTML === "-" ||
    output1.innerHTML === "." ||
    output1.innerHTML === "-."
  ) {
    return;
  }
  if (output2.innerHTML.length > 0) {
    return;
  }
  if (output1.innerHTML.length > 0) {
    output2.innerHTML = "+";
  }
});

subtract.addEventListener("click", () => {
  if (
    output1.innerHTML === "-" ||
    output1.innerHTML === "." ||
    output1.innerHTML === "-."
  ) {
    return;
  }
  if (output2.innerHTML.length > 0 && output3.innerHTML.length > 0) {
    return;
  }
  if (output2.innerHTML.length > 0 && output3.innerHTML.length === 0) {
    output3.innerHTML = "-";
  }
  if (output1.innerHTML.length > 0 && output2.innerHTML.length === 0) {
    output2.innerHTML = "-";
  }
  if (output1.innerHTML.length === 0) {
    output1.innerHTML = "-";
  }
});

multiply.addEventListener("click", () => {
  if (
    output1.innerHTML === "-" ||
    output1.innerHTML === "." ||
    output1.innerHTML === "-."
  ) {
    return;
  }
  if (output2.innerHTML.length > 0) {
    return;
  }
  if (output1.innerHTML.length > 0) {
    output2.innerHTML = "x";
  }
});

divide.addEventListener("click", () => {
  if (
    output1.innerHTML === "-" ||
    output1.innerHTML === "." ||
    output1.innerHTML === "-."
  ) {
    return;
  }
  if (output2.innerHTML.length > 0) {
    return;
  }
  if (output1.innerHTML.length > 0) {
    output2.innerHTML = "/";
  }
});

reset.addEventListener("click", () => {
  output1.innerHTML = "";
  output2.innerHTML = "";
  output3.innerHTML = "";
});

del.addEventListener("click", () => {
  if (output3.innerHTML.length > 0) {
    output3.innerHTML = output3.innerHTML.slice(
      0,
      output3.innerHTML.length - 1
    );
  } else if (output2.innerHTML.length > 0) {
    output2.innerHTML = "";
  } else {
    output1.innerHTML = output1.innerHTML.slice(
      0,
      output1.innerHTML.length - 1
    );
  }
});

function calculateAnswer(calc) {
  roundedCalculation = parseFloat(calc).toFixed(2);
  checkForFloat = roundedCalculation.split(".");
  if (parseInt(checkForFloat[1]) > 0) {
    final = roundedCalculation;
    return final;
  } else {
    final = checkForFloat[0];
    return final;
  }
}

equals.addEventListener("click", () => {
  //check if second number is NaN
  if (
    output3.innerHTML === "-" ||
    output3.innerHTML === "." ||
    output3.innerHTML === "-."
  ) {
    return;
  }
  //addition
  if (
    output1.innerHTML.length > 0 &&
    output2.innerHTML === "+" &&
    output3.innerHTML.length > 0
  ) {
    calculation = parseFloat(output1.innerHTML) + parseFloat(output3.innerHTML);
    const final = calculateAnswer(calculation);
    output1.innerHTML = `${final}`;
    output2.innerHTML = "";
    output3.innerHTML = "";
  }

  //subtraction
  if (
    output1.innerHTML.length > 0 &&
    output2.innerHTML === "-" &&
    output3.innerHTML.length > 0
  ) {
    calculation = parseFloat(output1.innerHTML) - parseFloat(output3.innerHTML);
    const final = calculateAnswer(calculation);
    output1.innerHTML = `${final}`;
    output2.innerHTML = "";
    output3.innerHTML = "";
  }

  //multiplication
  if (
    output1.innerHTML.length > 0 &&
    output2.innerHTML === "x" &&
    output3.innerHTML.length > 0
  ) {
    calculation = parseFloat(output1.innerHTML) * parseFloat(output3.innerHTML);
    const final = calculateAnswer(calculation);
    output1.innerHTML = `${final}`;
    output2.innerHTML = "";
    output3.innerHTML = "";
  }

  //division
  if (
    output1.innerHTML.length > 0 &&
    output2.innerHTML === "/" &&
    output3.innerHTML.length > 0
  ) {
    calculation = parseFloat(output1.innerHTML) / parseFloat(output3.innerHTML);
    const final = calculateAnswer(calculation);
    output1.innerHTML = `${final}`;
    output2.innerHTML = "";
    output3.innerHTML = "";
  }
});
