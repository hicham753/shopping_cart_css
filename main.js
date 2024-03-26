console.log("test hicham");

// 
// 
// 
// arrow function
// callback function
// aysnc & await & Promises
// 


const productsPrice = [22, 456 ,78];

const minusButtons = document.getElementsByClassName("minus");
const plusButtons = document.querySelectorAll(".plus");
const deleteButtons = document.querySelectorAll("button.delete");
const priceTotalPerItem = document.querySelectorAll(".price_total_per_item");
const quantityByItem = document.getElementsByClassName("in");
console.log(quantityByItem);


for (const input in quantityByItem) {
    console.log(input);
    input.setAttribute("value",1);
}



plusButtons.forEach((button , index)=>{
    button.addEventListener('click',(e)=> {    
        quantityByItem[index].value = Number(quantityByItem[index].value) + 1;
        //debugger 
        let price = priceTotalPerItem[index].innerHTML.trim().split(" ")[1];
        console.log(price);
        // 20 => 1 
        // 40 => 2
        // 120  => 3
        // 480  => 4
        priceTotalPerItem[index].innerHTML = "$ " + (price / (Number(quantityByItem[index].value)- 1) ) * Number(quantityByItem[index].value);
    })
})



