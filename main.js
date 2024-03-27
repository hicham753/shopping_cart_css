console.log("test hicham");

// 
// 
// 
// arrow function
// callback function
// aysnc & await & Promises
// 


const productsPrice = [22, 456 ,78];
let deletedItem = 0;

const minusButtons = document.querySelectorAll(".minus");
const plusButtons = document.querySelectorAll(".plus");
const deleteButtons = document.querySelectorAll("button.delete");
const priceTotalPerItem = document.querySelectorAll(".price_total_per_item");
const quantityByItem = document.getElementsByClassName("in");
const productContainer = document.getElementsByClassName("item");
const productCounter = document.querySelectorAll(".counter");


// force the value to be equal 1

// for (var i = 0 ; i < quantityByItem.length ; i++) {
//     console.log(quantityByItem[i]);
//     quantityByItem[i].setAttribute("value",1);
// }


// quantityByItem.forEach((input)=> {
//     console.log(input);
//     input.setAttribute("value",1);
// })

for (const input of quantityByItem) {
    console.log(input);
    input.setAttribute("value",1);
}




plusButtons.forEach((button , index)=>{
    button.addEventListener('click',(e)=> {    
        incrementsQuantity(index);
        incrementsProductPrice(index);
    })
})



function incrementsProductPrice(index){
    
    //debugger 
    let productPriceTotal = priceTotalPerItem[index].innerHTML.trim().split(" ")[1];
    let quantity = Number(quantityByItem[index].value);
    let productPrice = productPriceTotal / ( quantity - 1) ;
    priceTotalPerItem[index].innerHTML = "$ " +  productPrice * quantity;
}


function incrementsQuantity(index){
    quantityByItem[index].value = Number(quantityByItem[index].value) + 1;
}



minusButtons.forEach((button, index) => {
    button.addEventListener('click', (e)=> {
        if(isQuantityCanDecrement(index)){
            decrementsQuantity(index);
            decrementsProductPrice(index);
        }
    })
})

function decrementsProductPrice(index){
    let productTotalPrice = Number(priceTotalPerItem[index].textContent.trim().split(" ")[1]);
    let quantity = Number(quantityByItem[index].value);
    let productPrice = productTotalPrice / (quantity + 1) ;
    priceTotalPerItem[index].innerHTML = "$ " + productPrice * quantity;
}


function decrementsQuantity(index){
    quantityByItem[index].value = Number(quantityByItem[index].value) - 1;
}

function isQuantityCanDecrement(index){
    if(Number(quantityByItem[index].value) <= 1)
        return false;
    else
        return true;
}


deleteButtons.forEach((button , index)=>{
    button.addEventListener('click',(event)=>{
        // deleteProduct(index);
        // hideProduct(index);
        deleteProduct2(event);
        decrementsProductCounter();
    })
});


function hideProduct(index){
    console.log(index);
    // productContainer[index].setAttribute('style' , 'display:none;');
    // productContainer[index].setAttribute('class' , 'hide');

    productContainer[index].classList.add("hide");

    // element : class = "item animation test "
    // element : class = "item animation test hide"
}


// methode 1
function deleteProduct(index){
    debugger
    // let productItem = document.getElementsByClassName("item");
    productContainer[index - deletedItem].remove();
    deletedItem++;
}

// methode 2
function deleteProduct2(event){
    if(confirm("delete product"))
        event.target.parentElement.parentElement.remove();

    // decrementsTotalProduct
}


function decrementsProductCounter(){
    productCounter.forEach(counter => {
        counter.innerHTML = Number(counter.innerHTML) - 1;
    })
}