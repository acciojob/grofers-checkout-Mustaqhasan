const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


const getSum = () => {
  //Add your code here
  let table = document.getElementById("table");
  let tableRow = table.insertRow();
  let totalTextCell = tableRow.insertCell();
  totalTextCell.textContent = "Total";
  totalTextCell.style.backgroundColor = "red";

  let prices = document.querySelectorAll(".price");
  let sum = 0;
    for(let i=0; i<prices.length; i++){
        sum=sum+Number(prices[i].innerText);
    }
    let sumCell = tableRow.insertCell();
    sumCell.textContent = sum;
    sumCell.style.backgroundColor="green"
};




getSumBtn.addEventListener("click", getSum);
