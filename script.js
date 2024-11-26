document.getElementById('applyNowButton').addEventListener('click', function() {
    const careers = ['HR Officer', 'HR Adviser', 'HR Manager'];
    const careerList = document.getElementById('careerList');

   
    careerList.innerHTML = '';

    careers.forEach(function(career) {
        const listItem = document.createElement('li');
        listItem.textContent = career;
        careerList.appendChild(listItem);
    });
});
var facilitatorName, item;

function convertToNumber(value) {
  
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}

function randomInt(n) {
  
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
 
  return arr[randomInt(arr.length)]
}

var facilitatorName, item;
function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
} else {
    return number_value
}
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

facilitatorName = ['Oxford University', 'Swansea University', 'Cardiff University', 'Bristol University', 'Kingston University', 'Manchester University'];
item = [];

document.getElementById('addFacilitatorButton').addEventListener('click', (event) => {
  let element_facilitatorList = document.getElementById('facilitatorList');
  let new_span = document.createElement('span');
  let element_facilitatorName = document.getElementById('facilitatorName');
  element_facilitatorName.innerText = document.getElementById('facilitatorInput').value;

  element_facilitatorList.appendChild(new_span);

});

document.getElementById('selectFacilitatorButton').addEventListener('click', (event) => {
  let element_facilitatorList2 = document.getElementById('facilitatorList');
  element_facilitatorList2.innerText = randomMember(facilitatorName);
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = facilitatorName[0];

  element_list.appendChild(new_li);

});
facilitatorName.unshift(null);

