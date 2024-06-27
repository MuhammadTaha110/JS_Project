import { main } from "./shoes.js";
import { productsPage } from "./shoes.js";
import { newProductCardContainer } from "./shoes.js";
import { shoeDetails } from "./shoeDetail.js";
import { themeColors } from "./theme.js";
//import { filteredResult } from "./shoes.js"



/* Wishlistlist button functionality */
const wishlistBtn = document.querySelector('.shoeDetails .tittle-disc .btn-container .add-to-wishlist');
var flag = 0;

function clicked(){

    if(flag==0){
        wishlistBtn.style.fontSize= '1.8rem';
        wishlistBtn.style.color= 'red';
        flag++;
    }

    else{
        wishlistBtn.style.fontSize= '1.5rem';
        wishlistBtn.style.color= themeColors[1];
        flag--;
    }

}

wishlistBtn.addEventListener("click",clicked);

productsPage('Shoes');
newProductCardContainer();






//shoeDetails('Shoe Details');
//import filteredResult from "./filter.js";

/*const applyButton = document.getElementById('apply-btn');

let filteredResult = () => {

    const prices = document.getElementById("prices");
    
    let values = prices.value.split('-');

    

    //alert (values[0]);


  
  }

applyButton.addEventListener("click",filteredResult);


*/

