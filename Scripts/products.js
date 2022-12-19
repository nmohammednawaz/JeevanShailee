const url = "https://639decf21ec9c6657bb5cb11.mockapi.io/products";

let product_list = document.getElementById("products-list");

let fetch_data  = [];

fetch(url).then((responseObject) => {
    return responseObject.json();
})
.then((actualData) => {
    fetch_data = actualData;
    display_products(fetch_data);
})

let searchText = document.getElementById("search-text");
searchText.addEventListener("input", () => {
    let close = document.getElementById("close");
    close.style.display = "inline";
    close.style.cursor = "pointer";

    close.addEventListener("click", () => {
        searchText.value = "";
        close.style.display = "none";
    })

    let filtered = fetch_data.forEach(el => {
        if(el.name == searchText.value){
            return true;
        }else{
            return false;
        }
    })
    fetch_data = filtered;
    display_products(fetch_data);
})

function display_products(data){
    product_list.innerHTML = null;
    data.forEach(element => {
        let card = document.createElement("div");
          let image = document.createElement("img");
          image.setAttribute("src", element.images);

          let fav_btn = document.createElement("img");
          fav_btn.setAttribute("src","./Images/heart.png");

          let color_count = 0;
          fav_btn.addEventListener("click", () => {
            if(color_count == 0){
                fav_btn.style.backgroundColor = "red";
                color_count = 1;
            }else{
                fav_btn.style.backgroundColor = "white";
                color_count = 0;
            }
            
            let fav_data = JSON.parse(localStorage.getItem("favourite"));

            if(fav_data == null){
                fav_data = [];
            }

            let isPresent = false;
            for(let i = 1; i <= fav_data.length; i++){
              if(i == element.id){
                isPresent = true;
                break;
              }
            }
            if(isPresent == false){
              fav_data.push({...element, quantity:1});
              localStorage.setItem("favourite", JSON.stringify(fav_data));
            }

            if(isPresent == true){
                let deleted = fav_data.filter(el => {
                    if(el.id == element.id){
                        return false;
                    }else{
                        return true;
                    }
                })
                fav_data = deleted;
                localStorage.setItem("favourite", JSON.stringify(fav_data));
            }
            console.log(fav_data);

          })

          let price = document.createElement("h4");
          price.innerText = "₹" + element.price;

          let prod_name = document.createElement("h5");
          prod_name.innerText = element.name;

          let description = document.createElement("p");
          description.innerText = element.description;

          let category_label = document.createElement("h6");
          category_label.innerText = "Category";

          let product_type = document.createElement("h6");
          product_type.innerText = element.category;

          let add_to_cart_button = document.createElement("button");
          add_to_cart_button.innerText = "Add To Cart";

          add_to_cart_button.addEventListener("click", () => {
            let cart_data = JSON.parse(localStorage.getItem("cart_items"));

            if(cart_data == null){
                cart_data = [];
            }

            let cartitem = true;
            for(let i = 1; i <= cart_data.length; i++){
                if(i == element.id){
                    cartitem = false;
                    break;
                }
            }
            if(cartitem){
                cart_data.push({...element, quantity:1});
                localStorage.setItem("cart_items", JSON.stringify(cart_data));
            }
            console.log(cart_data);
          })

        card.append(image, fav_btn, price, prod_name, description, category_label, product_type, add_to_cart_button);

        product_list.append(card);
    });
}