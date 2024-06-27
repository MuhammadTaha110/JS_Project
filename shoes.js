//* Theme Colors
import { themeColors } from "./theme.js";
import { products } from "./products.js";


export const main = document.createElement('main');
document.body.appendChild(main);


//! function to create productsPage
export let productsPage = (tittle) => {

    //!Home Main Div Element
    const home = document.createElement('div');
    home.className = 'home';
    home.style.width = '100%';
    home.style.backgroundColor = themeColors[0];
    home.style.textAlign = 'center';
    //! ye uncomment kia tha
    home.style.display = 'flex';

    main.appendChild(home);
    document.body.style.backgroundColor = themeColors[0];

    //!Home Inner Div Element
    const homeHeadDiv = document.createElement('div');
    homeHeadDiv.style.marginLeft = 'auto';
    homeHeadDiv.style.marginRight = 'auto';
    homeHeadDiv.style.marginTop = '80px';
    homeHeadDiv.style.boxShadow = 'var(--shadow-color) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
    homeHeadDiv.style.width = '95%';
    homeHeadDiv.style.height = '250px'
    homeHeadDiv.style.backgroundColor = themeColors[1];
    homeHeadDiv.style.borderRadius = '18px';
    homeHeadDiv.className = 'homeHeadContainer';


    const filterBtn = document.createElement('div');
    filterBtn.style.width='240px';
    filterBtn.style.height='50px';
    filterBtn.style.borderRadius='12px';
    filterBtn.style.paddingLeft='10px';
    filterBtn.style.paddingRight='10px';

    filterBtn.style.marginTop='12px';
    filterBtn.style.marginLeft='auto';
    filterBtn.style.marginRight='auto';
    filterBtn.style.backgroundColor='white';
    filterBtn.style.display='flex';
    filterBtn.style.alignItems='center';
    filterBtn.style.justifyContent='space-around';
    filterBtn.style.backgroundColor= themeColors[6];
    filterBtn.style.color= 'white';




    // Create select element
var selectElement = document.createElement("select");
selectElement.name = "prices";
selectElement.id = "prices";

// Array of price ranges
var priceRanges = [
  { value: "50-60", label: "50 to 60 $" },
  { value: "61-70", label: "61 to 70 $" },
  { value: "71-90", label: "71 to 90 $" }
];

// Create and append options
priceRanges.forEach(function(range) {
  var option = document.createElement("option");
  option.value = range.value;
  option.textContent = range.label;
  selectElement.appendChild(option);
});

// Append select element to body (or any other desired parent element)

const filterBtnTittle = document.createTextNode('Filter');
filterBtn.appendChild(filterBtnTittle);
filterBtn.appendChild(selectElement);

    homeHeadDiv.appendChild(filterBtn);


const applyBtn = document.createElement('button');
applyBtn.style.width='80px';
applyBtn.style.height='30px';
applyBtn.style.borderRadius='10px';
applyBtn.style.backgroundColor= themeColors[7];
applyBtn.style.color = 'white';
applyBtn.id = 'apply-btn';






const applyBtnTittle = document.createTextNode('Apply');
applyBtn.appendChild(applyBtnTittle);


filterBtn.appendChild(applyBtn);





    //* Create a div element to wrap the heading text node
    const headingWrapper = document.createElement('div');
    //* Create the text node
    const heading = document.createTextNode(tittle);
    //* Append the text node to the heading wrapper
    headingWrapper.appendChild(heading);
    //* Apply marginTop style to the heading wrapper
    headingWrapper.style.paddingTop = '25px';
    headingWrapper.style.fontWeight = '600'
    headingWrapper.style.fontSize = '1.4rem'
    // * Append the heading wrapper to the homeHeadDiv or any other parent element
    homeHeadDiv.appendChild(headingWrapper);
    home.appendChild(homeHeadDiv);

    // !Container Object of Sun and Moon
    const ball = document.createElement('div');
    ball.className = 'sunMoon';
    homeHeadDiv.appendChild(ball);

    ball.style.display = 'none';

    //* Object of Sun and Moon
    const sunMoon = document.querySelector('.sunMoon');
    sunMoon.style.margin = '-30px 0px 20px 20px';
    sunMoon.style.borderRadius = '50%';
    sunMoon.style.width = '70px';
    sunMoon.style.height = '70px';
    sunMoon.style.backgroundColor = 'orange';
    sunMoon.style.boxShadow = '0 0 35px 5px yellow, 0 0 25px 10px yellow inset';

}

export let newProductCardContainer = () => {


    //? ColorIndex to give unique colors to cards
    let color = 5;

    // ! Product Card Container
    const cardContainer = document.createElement('div');
    cardContainer.style.display = 'flex';
    cardContainer.style.flexWrap = 'wrap';
    cardContainer.style.justifyContent = 'space-around'
    cardContainer.style.margin = '-120px auto ';
    cardContainer.style.width = '95%';
    cardContainer.className = 'cardContainer';
    main.appendChild(cardContainer);


    // *function to create new items cards
    let newProduct = (producttittle, productprice , productimage) => {

        //* Card Element
        const card = document.createElement('div');
        cardContainer.appendChild(card);

        card.style.width = '280px'; // Set width here
        card.style.height = '300px'; // Set height here
        card.style.backgroundColor = themeColors[3];
        card.style.borderRadius = '20px';
        card.style.cursor = 'pointer';
        card.style.margin = '12px 5px'
        card.className = 'card';
        card.style.position = 'relative';
        card.style.boxShadow = 'var(--shadow-color) 0px 54px 55px, var(--shadow-color) 0px -12px 30px, var(--shadow-color) 0px 4px 6px, var(--shadow-color) 0px 12px 13px, var(--shadow-color) 0px -3px 5px'
        card.style.userSelect = 'none';

        //* card wishlist button
        const wishlistButton = document.createElement('button');
        card.appendChild(wishlistButton);

        const addToCartButton = document.createElement('button');
        card.appendChild(addToCartButton);

        wishlistButton.className = 'card-buttons';
        addToCartButton.className = 'card-buttons';
        
        wishlistButton.style.width = '30px';
        wishlistButton.style.cursor = 'pointer';
        wishlistButton.style.height = '30px';
        wishlistButton.style.borderRadius = '6px';
        wishlistButton.className = '.wishlist-btn';
        wishlistButton.style.backgroundColor = themeColors[1];
        wishlistButton.style.marginLeft = '230px';
        wishlistButton.style.marginTop = '10px';
        wishlistButton.style.position = 'absolute';


        addToCartButton.style.width = '30px';
        addToCartButton.style.height = '30px';
        addToCartButton.style.borderRadius = '6px';
        addToCartButton.style.cursor = 'pointer';
        addToCartButton.className = '.wishlist-btn';
        addToCartButton.style.backgroundColor = themeColors[1];
        addToCartButton.style.marginLeft = '195px';
        addToCartButton.style.marginTop = '10px';
        addToCartButton.style.position = 'absolute';

        var wishlisticon = document.createElement('i');
        wishlistButton.appendChild(wishlisticon);

        var carticon = document.createElement('i');
        addToCartButton.appendChild(carticon);

        wishlisticon.className = 'fa-solid fa-heart';
        carticon.className = 'fa-solid fa-cart-shopping';

        //* Set styles for the icon
        wishlisticon.style.display = 'flex'
        wishlisticon.style.justifyContent = 'center'
        wishlisticon.style.fontSize = '1rem'

          //* Set styles for the icon
          carticon.style.display = 'flex'
          carticon.style.justifyContent = 'center'
          carticon.style.fontSize = '1rem'

        //* card InnerDiv Rectangle
        const cardInnerDivBG = document.createElement('div');
        // Append the new rectangular div element to the card
        card.appendChild(cardInnerDivBG);
        // Set the width and height of the new div element
        cardInnerDivBG.style.width = '84%';
        cardInnerDivBG.style.borderRadius = '12px';
        cardInnerDivBG.style.height = '100px';
        cardInnerDivBG.style.margin = '25% auto'
        // Set the class name of the new div element
        cardInnerDivBG.className = 'cardInnerBG';
        // Set the background color of the new div element
        cardInnerDivBG.style.backgroundColor = themeColors[color];
        //cardInnerDivBG.style.boxShadow = '10px 10px 10px rgba(0, 0, 0, 0.5)';

        //* Card InnerDiv Circle
        const cardInnerCircleBG = document.createElement('div');
        cardInnerDivBG.appendChild(cardInnerCircleBG);
        // Set the class name of the new div element
        cardInnerCircleBG.className = 'cardInnerCircle';
        // Set the background color of the new div element
        cardInnerCircleBG.style.backgroundColor = themeColors[1];
        cardInnerCircleBG.style.width = '96px';
        cardInnerCircleBG.style.height = '96px';
        cardInnerCircleBG.style.borderRadius = '50%';
        cardInnerCircleBG.style.margin = 'auto';
        cardInnerCircleBG.style.border = '2px solid white';

        //* Card Image Element

        const productImage = document.createElement('img');
        card.appendChild(productImage);
        productImage.className = 'productImage';
        productImage.style.position = 'absolute';
        productImage.src = productimage;
        productImage.style.width = '75%';
        productImage.style.top = '30%'
        productImage.style.left = '10%'
        productImage.style.filter = 'drop-shadow(#000000 0.5rem 0.5rem 1rem)';
        productImage.style.transform = 'rotate(-25deg)';


        // * Give Colors to cardsInner BG 
        if (color <= 8) {
            color++;
        }
        else {
            color = 5;
        }



        const productTittleContainer = document.createElement('div');
        const productPriceContainer = document.createElement('div');

        productTittleContainer.className = 'productTittle';
        productPriceContainer.className = 'productPrice';


        const productTittle = document.createTextNode(producttittle);
        const productPrice = document.createTextNode(productprice);

        productTittleContainer.style.fontWeight = '800';
        productPriceContainer.style.display = 'flex';
        productPriceContainer.style.alignContent = 'center';
        productPriceContainer.style.justifyContent = 'center';
        productTittleContainer.style.display = 'flex';
        productTittleContainer.style.alignContent = 'center';
        productTittleContainer.style.justifyContent = 'center';

        productTittleContainer.style.color = themeColors[6];
        productPriceContainer.style.color = themeColors[6];

        //productTittleContainer.style.marginLeft = '110px';
        //productPriceContainer.style.marginLeft = '115px';



        productTittleContainer.appendChild(productTittle);
        productPriceContainer.appendChild(productPrice);


        // TODO: Append the text node to the heading wrapper
        card.appendChild(productTittleContainer);
        card.appendChild(productPriceContainer);


    }


    let id ;

    /*for (let i = 0; i < products.length; i++) {
        
        id = i;

      newProduct()
    }*/

    const cards = products.map((cards,index) => {

      //console.warn(products[index].title)

      newProduct(products[index].title,products[index].price,products[index].img)
      return 0;
    });


    //const checkthis = 



    const applyButton = document.getElementById('apply-btn');
    applyButton.addEventListener("click",() => { 
      cardContainer.innerHTML = '';
      products.filter((cards,index) => {

      console.warn('clicked')

      const prices = document.getElementById("prices");
      let values = prices.value.split('-');
      let price =  products[index].price.split('$');

      if(values[0] <= price[1] && values[1] >= price[1]){

        newProduct(products[index].title,products[index].price,products[index].img)

      }

      return 0;

    });
  });

    //console.log(cardstry);

    
/*
    let filteredResult = () => {


        const prices = document.getElementById("prices");
        
        let values = prices.value.split('-');

        let lowValue = values[0].toNumber;
        let highValue = values[1];

        let check2 = parseFloat(lowValue);
        let check3 = parseFloat(highValue);

        

        //console.warn(products.length)
        //console.warn(products[1].price)

        let id;

    
    
        for (let i = 0; i < products.length; i++) {

            id = i;

            let price =  products[i].price.split('$');

            let check = parseFloat(price[1]);

             //console.warn("Price" + price[1])
            
            if(check >= check2  ||  check <= check3){

              console.warn(products[id]);
              //newProduct()
    
            }
    
        }
    
      }
    
    
     
  */ 
  
}


//



//export 