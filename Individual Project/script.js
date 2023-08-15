const form = document.querySelector('.converter');
const input = document.getElementById('inputval');
const fromTemp = document.querySelector('.temp1');
const toTemp = document.querySelector('.temp2');
const result = document.getElementById('result');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputValue = input.value;
  const fromValue = fromTemp.value;
  const toValue = toTemp.value;

  if (!inputValue || !fromValue || !toValue) {
    alert('Please fill the form');
    return;
  }

  let tempResult;

  if (fromValue === 'celsius' && toValue === 'fahrenheit') {
    tempResult = +inputValue * (9 / 5) + 32;
    result.innerText = ` you have ${Math.round(tempResult)} in degree ${toValue}`;
  } else if (fromValue === 'celsius' && toValue === 'kelvin') {
    tempResult = +inputValue + 273.15;
    result.innerText = `you have ${Math.round(tempResult)} in degree ${toValue}`;
  } else if (fromValue === 'fahrenheit' && toValue === 'celsius') {
    tempResult = +inputValue - 32 * (5 / 9);
    result.innerText = `you have ${Math.round(tempResult)} in degree ${toValue}`;
  } else if (fromValue === 'fahrenheit' && toValue === 'kelvin') {
    tempResult = +inputValue - 32 * (5 / 9) + 273.15;
    result.innerText = `you have ${Math.round(tempResult)} in degree ${toValue}`;
  } else if (fromValue === 'kelvin' && toValue === 'celsius') {
    tempResult = +inputValue - 273.15;
    result.innerText = `you have ${Math.round(tempResult)} in degree ${toValue}`;
  } else if (fromValue === 'kelvin' && toValue === 'fahrenheit') {
    tempResult = +inputValue - 273.15 * (9 / 5) + 32;
    result.innerText = `you have ${Math.round(tempResult)} in degree ${toValue}`;
  } else if (fromValue === toValue) {
    result.innerText = `you have ${inputValue} degree ${toValue}`;
  }
});