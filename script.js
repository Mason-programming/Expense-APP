let expenseInput = document.getElementById("Name");
let tdlist = document.getElementById("Table");
let date = document.getElementById("Date");
let amount = document.getElementById("Amount");
let btn = document.getElementById("Button");
let button;


btn.addEventListener("click", function (){
  let newRow = document.createElement("tr");
  tdlist.appendChild(newRow);
  let newExpense = document.createElement("td");
  let newDate = document.createElement("td");
  let newAmount = document.createElement("td");
  button = document.createElement("td");
  newDate.innerHTML = date.value;
  newExpense.innerHTML = expenseInput.value;
  newAmount.innerHTML = amount.value;
  button.innerHTML = '<button type="submit">Delete</button>';
  newRow.appendChild(newExpense);
  newRow.appendChild(newDate);
  newRow.appendChild(newAmount);
  newRow.appendChild(button);
  expenseInput.value = "";

  date.value ="";
  button.addEventListener('click', function(){

    tdlist.removeChild(newRow);
  });


});
