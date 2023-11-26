function solve() {
  let text = document.getElementById('text').value.toLowerCase().split(' ');
  let convention = document.getElementById('naming-convention').value;

  let result = document.getElementById('result');

  let resultArray = [];
  
  if (convention === 'Camel Case') {
    resultArray.push(text[0]);

    for (let i = 1; i < text.length; i++) {
      text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);

      resultArray.push(text[i]);
    }
  } else if (convention === 'Pascal Case') {
    for (let i = 0; i < text.length; i++) {
      text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);

      resultArray.push(text[i]);
    }
  } else {
    resultArray.push('Error!');
  }

  result.innerHTML = resultArray.join('');
}