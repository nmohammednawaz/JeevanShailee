let cart_list = document.getElementById("cart-list");
let cart_data = JSON.parse(localStorage.getItem("cart_items"));
let basket_count = document.getElementById("basket-count");


let total_mrp = document.getElementById("mrp");
let discount = document.getElementById("discount");
let total_amt = document.getElementById("total-amt");
let checkout_btn = document.getElementById("checkout");


if(cart_data == null){
    cart_data = [];
    basket_count.innerText = "0 Products"
    
}
if(cart_data.length >= 1){
    let msg = document.getElementById("msg");
    msg.style.display = "none"
    let cart = document.getElementById("cart");
    cart.style.display = "flex";
    basket_count.innerText = "0 Products"
}

let totalmrp = 0;
display_products(cart_data);





function display_products(data){
    cart_list.innerHTML = null;
    data.forEach(element => {

        totalmrp += +element.price;
        console.log(totalmrp)
        total_mrp.innerText = "₹" + totalmrp;


        let cards = document.createElement("div");
            let card = document.createElement("div");
                let prod_img = document.createElement("img");
                prod_img.setAttribute("src", element.images);

                let card1 = document.createElement("div");
                    let product_name = document.createElement("h5");
                    product_name.innerText = element.name;

                    let desc = document.createElement("p");
                    desc.innerText = element.description;

                    let price = document.createElement("h6");
                    price.innerText = element.price;

                    let quantity_count = 1;
            let quantity_btn = document.createElement("div");
                let quantity_btn_minus = document.createElement("button");
                    quantity_btn_minus.innerText = "-";
                let quantity_display = document.createElement("h6");
                    quantity_display.innerText = quantity_count;
                let quantity_btn_plus = document.createElement("button");
                    quantity_btn_plus.innerText = "+";


                    quantity_btn_minus.addEventListener("click", () => {
                        quantity_count--;
                        quantity_display.innerText = quantity_count;
                        if(quantity_count < 1){
                            let delete_from_cart = cart_data.filter(elements => {
                                if(elements.id == element.id){
                                    return false;
                                }else{
                                    return true;
                                }
                            })
                            cart_data = delete_from_cart;
                            localStorage.setItem("cart_items", JSON.stringify(cart_data));
                            display_products(cart_data);
                        }
                            // totalmrp = -element.price;
                            let newelementprice = -element.price;
                            let newmrp = newelementprice;
                            console.log(newmrp, totalmrp)
                            totalmrp += newmrp;
                            total_mrp.innerText = "₹" + totalmrp;
                        

                    })

                    quantity_btn_plus.addEventListener("click", () => {
                        quantity_count++;
                        quantity_display.innerText = quantity_count;
                        totalmrp -= element.price;
                        let newelementprice = +element.price*quantity_count;
                        let newmrp = newelementprice;
                        totalmrp += newmrp;
                        total_mrp.innerText = "₹" + totalmrp;
                    })

            quantity_btn.append(quantity_btn_minus, quantity_display,quantity_btn_plus);
            
            card1.append(product_name, desc, price);
        card.append(prod_img, card1);
        cards.append(card, quantity_btn);
        cart_list.append(cards);

        basket_count.innerText = cart_data.length + " Products";
    });


    checkout_btn.addEventListener("click", () => {
        alert("Hurray..!\nOrder confirmed.")
        cart_data = [];
        localStorage.setItem("cart_items", JSON.stringify(cart_data));
        window.location.href = "./index.html";

    })
}


// let card = document.createElement("div");
        //   let image = document.createElement("img");
        //   image.setAttribute("src", element.images);

        //   let fav_btn = document.createElement("img");
        //   fav_btn.setAttribute("src","./Images/heart.png");

        //   let price = document.createElement("h4");
        //   price.innerText = "₹" + element.price;

        //   let prod_name = document.createElement("h5");
        //   prod_name.innerText = element.name;

        //   let description = document.createElement("p");
        //   description.innerText = element.description;

        //   let category_label = document.createElement("h6");
        //   category_label.innerText = "Category";

        //   let product_type = document.createElement("h6");
        //   product_type.innerText = element.category;

        //   let add_to_cart_button = document.createElement("button");
        //   add_to_cart_button.innerText = "Add To Cart";

        //   add_to_cart_button.addEventListener("click", () => {
        //     let cart_data = JSON.parse(localStorage.getItem("cart_items"));

        //     if(cart_data == null){
        //         cart_data = [];
        //     }

        //     let cartitem = true;
        //     for(let i = 1; i <= cart_data.length; i++){
        //         if(i == element.id){
        //             cartitem = false;
        //             break;
        //         }
        //     }
        //     if(cartitem){
        //         cart_data.push({...element, quantity:1});
        //         localStorage.setItem("cart_items", JSON.stringify(cart_data));
        //     }
        //     console.log(cart_data);
        //   })

        // card.append(image, fav_btn, price, prod_name, description, category_label, product_type, add_to_cart_button);

        // cart_list.append(card);