let count = 0;


function Area(target) {


  const baseInputField = target.parentNode.previousElementSibling.childNodes[1].childNodes[1].value;
  const heightInputField = target.parentNode.previousElementSibling.childNodes[3].childNodes[1].value;
  const areaResult = target.parentNode.previousElementSibling.previousElementSibling.childNodes[1];
  const titleElement = target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.childNodes[1];
  const tableRow = document.getElementById('tableElement')
  const CreatTableRow = document.createElement('tr');

tableRow.appendChild(CreatTableRow)




    switch(titleElement.innerText){
      case 'Tringle' : 
      const tringleCalc = baseInputField * heightInputField * 0.5;
      areaResult.innerText = tringleCalc;
      CreatTableRow.innerHTML = `<th>${count}</th><td>${titleElement.innerHTML}</td><td>${tringleCalc}mc<sup>2</sup></td>`
      break;
      case 'Rectangle' : 
      const rectangleCalc = baseInputField * heightInputField;
      areaResult.innerText = rectangleCalc;
      CreatTableRow.innerHTML = `<th>${count}</th><td>${titleElement.innerHTML}</td><td>${rectangleCalc}mc<sup>2</sup></td>`
      break;
      case 'Parralellogram' : 
      const parralellogramCalc = baseInputField * heightInputField;
      areaResult.innerText = parralellogramCalc;
      CreatTableRow.innerHTML = `<th>${count}</th><td>${titleElement.innerHTML}</td><td>${parralellogramCalc}mc<sup>2</sup></td>`
      break;
    }

    count++
}


