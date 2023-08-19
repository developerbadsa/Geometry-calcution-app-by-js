let count = 1;

function calculateArea(target) {
  const baseInputField = target.parentNode.previousElementSibling.childNodes[1].childNodes[1].value;
  const heightInputField = target.parentNode.previousElementSibling.childNodes[3].childNodes[1].value;
  const areaResult = target.parentNode.previousElementSibling.previousElementSibling.childNodes[1];
  const titleElement = target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.childNodes[1];
  const tableRow = document.getElementById('tableElement')
  const CreatTableRow = document.createElement('tr');
  let calcA = 0;

    switch(titleElement.innerText){
      case 'Tringle' : 
       calcA = baseInputField * heightInputField * 0.5;
      break;
      case 'Rectangle' : 
        calcA = baseInputField * heightInputField;
      break;
      case 'Parralellogram' : 
       calcA = baseInputField * heightInputField;
      break;
    }
    // value passed for result
    tableRow.appendChild(CreatTableRow)
    areaResult.innerText = calcA;
    CreatTableRow.innerHTML = `<th>${count}</th><td>${titleElement.innerHTML}</td><td>${calcA}mc<sup>2</sup></td>`

    count++
}


