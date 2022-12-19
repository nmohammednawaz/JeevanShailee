// ----------------------------Navbar search--------------------
let searchText = document.getElementById("search-text");

searchText.addEventListener("input", () => {
    let close = document.getElementById("close");
    close.style.display = "inline";
    close.style.cursor = "pointer";

    close.addEventListener("click", () => {
        searchText.value = "";
        close.style.display = "none";
    })
})


// -------------------------------------Slideshow---------------------------------------------

let cont = document.getElementById("slideshow-container");
let images = [
    "./Images/slide1.png",
    "./Images/slide3.png",
    "./Images/slide4.png",
    "./Images/slide5.png",
    "./Images/slide6.png",
    "./Images/slide7.png",
];
let myimg = document.createElement("img");
myimg.setAttribute("src", "./Images/slide1.png");
myimg.style.width = "100%";
myimg.style.height = "350px";
cont.append(myimg);
let index = 0;
setInterval(function(){
    myimg.setAttribute("src", images[index]);
    index++;
    console.log(index)
    cont.append(myimg);
    if(index >= images.length){
        index = 0;
    }
}, 2000)

// -----------------------------------------Slider Button---------------------------------------------
let offer_slider = document.getElementById("offers-slider");
    let cont1 = document.createElement("div");
        let img1 = document.createElement("img");
        img1.setAttribute("src", "./Images/Os_Img1.png");

        let img2 = document.createElement("img");
        img2.setAttribute("src", "./Images/Os_Img2.png");

        let img3 = document.createElement("img");
        img3.setAttribute("src", "./Images/Os_Img3.png");

        let img4 = document.createElement("img");
        img4.setAttribute("src", "./Images/Os_Img4.png");

        let btn = document.createElement("button");
        btn.innerHTML = "<i class='fa fa-angle-right'></i>";


        sliderButton();
        function sliderButton(){
            btn.addEventListener("click", () => {
                img1.setAttribute("src", "./Images/Os_Img4.png");
                img2.setAttribute("src", "./Images/Os_Img5.png");
                img3.setAttribute("src", "./Images/Os_Img6.png");
                img4.setAttribute("src", "./Images/Os_Img7.png");

                btn.style.float = "left";
                btn.innerHTML = "<i class='fa fa-angle-left'></i>";

                btn.addEventListener("click", () => {
                    img1.setAttribute("src", "./Images/Os_Img1.png");
                    img2.setAttribute("src", "./Images/Os_Img2.png");
                    img3.setAttribute("src", "./Images/Os_Img3.png");
                    img4.setAttribute("src", "./Images/Os_Img4.png");

                    btn.style.float = "right";
                    btn.innerHTML = "<i class='fa fa-angle-right'></i>";

                    sliderButton();
                })
            })
        }
     cont1.append(img1, img2, img3, img4, btn);
offer_slider.append(cont1);


// ---------------------------Watch brands--------------------------------------------

let cont2 = document.getElementById("watch-brands");

let brands_images = [
    "https://1000logos.net/wp-content/uploads/2020/09/Fossil-Logo.jpg",
    "https://www.exchange4media.com/news-photo/1503467083_8OFVxG_70204.jpg",
    "https://logos-download.com/wp-content/uploads/2016/06/Titan_Watches_logo.png",
    "https://cdn.shopify.com/s/files/1/0271/1882/9625/collections/casio-logo_1200x1200.png?v=1590552906"
];
let brand_img = document.createElement("img");

let index1 = 0;
setInterval(function(){
    brand_img.setAttribute("src", brands_images[index1]);
    brand_img.style.width = "100%";
    brand_img.style.height = "100%";
    index1++;
    cont2.append(brand_img)
    if(index1 >= brands_images.length){
        index1 = 0;
    }
}, 1000)

// ------------------------------Top Categories------------------------------------------------------

let womenBtn = document.getElementById("women-btn");
womenBtn.setAttribute("autofocus","true");
let menBtn = document.getElementById("men-btn");
let kidsBtn = document.getElementById("kids-btn");
let bagBtn = document.getElementById("bags-btn");
let beautyBtn = document.getElementById("beauty-btn");

let selected_category_display = document.getElementById("selected-category");
let display_selected = document.getElementById("display-selected");

let women_category_images = [
    "./Images/women1.png",
    "./Images/women2.png",
    "./Images/women3.png",
    "./Images/women4.png",
    "./Images/women5.png",
    "./Images/women6.png"
];

let category_women = [
    "Tops & Tees",
    "Kurtas",
    "Dresses",
    "Bottomwear",
    "Kurta Sets",
    "Lingerie & Sleepwear"
]



let men_category_images = [
    "./Images/men1.png",
    "./Images/men2.png",
    "./Images/men3.png",
    "./Images/men4.png",
    "./Images/men5.png",
    "./Images/men6.png",
];

let category_men = [
    "T-Shirts",
    "Casual Shirts",
    "Trackpants",
    "Jeans",
    "Shorts",
    "Activewear"
];

let category_kids_images = [
    "./Images/kid1.png",
    "./Images/kid2.png",
    "./Images/kid3.png",
    "./Images/kid4.png",
    "./Images/kid5.png",
    "./Images/kid6.png",
];
let category_kid = [
    "Boy's Tees",
    "Girl's Tops",
    "Boy's Shirts",
    "Girl's Dresses",
    "Winterwear",
    "Ethenicwear"
];

let shoes_category_images = [
    "./Images/shoes1.png",
    "./Images/shoes2.png",
    "./Images/shoes3.png",
    "./Images/shoes4.png",
    "./Images/shoes5.png",
    "./Images/shoes6.png"
];

let category_bags = [
    "Heals",
    "Casual Shoes",
    "Flip Flops",
    "Ballerinas",
    "Formal Shoes",
    "Handbags"
];

let beauty_category_images = [
    "./Images/beauty1.png",
    "./Images/beauty2.png",
    "./Images/beauty3.png",
    "./Images/beauty4.png",
    "./Images/beauty5.png",
    "./Images/beauty6.png",
]

let category_beauty = [
    "Face",
    "Lips",
    "Eyes",
    "Nails",
    "Skincare",
    "Fragnances"
]


womenBtn.addEventListener("click", () => {
    create_display(women_category_images, category_women, "Women");
})

menBtn.addEventListener("click", () => {
    create_display(men_category_images, category_men, "Men");
})

kidsBtn.addEventListener("click", () => {
    create_display(category_kids_images, category_kid, "Kids");
});

bagBtn.addEventListener("click", () => {
    create_display(shoes_category_images, category_bags, "Shoes & Bags")
})

beautyBtn.addEventListener("click", () => {
    create_display(beauty_category_images, category_beauty, "Beauty");
})


create_display(women_category_images, category_women, "Women");

function create_display(images1, category, selected_cat){
    display_selected.style.marginLeft = "10px";
    display_selected.innerHTML= null;
    for(let i = 0; i < images1.length; i++){
        let anchor = document.createElement("a");
        anchor.setAttribute("href", "#");
            let cont3 = document.createElement("div");
                let category_type_image = document.createElement("img");
                category_type_image.setAttribute("src", images1[i]);

                let category_type = document.createElement("h6");
                category_type.innerText = category[i];
            cont3.append(category_type_image, category_type);
        anchor.append(cont3);
        display_selected.append(anchor);
    }
    selected_category_display.innerText = selected_cat;
}



// ---------------------------Top Deals ----------------------------------------------

let womenBtn2 = document.getElementById("women-btn2");
let menBtn2 = document.getElementById("men-btn2");
let kidsBtn2 = document.getElementById("kids-btn2");
let bagBtn2 = document.getElementById("bags-btn2");
let beautyBtn2 = document.getElementById("beauty-btn2");

let display_selected2 = document.getElementById("display-deals");

let women_deals = [
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner1-14Dec22.jpg",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner2-14Dec22.jpg",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner3-14Dec22.jpg",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner4-14Dec22.jpg"
];

let men_deals = [
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner1-14Dec22.jpg",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner2-14Dec22.jpg",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner3-14Dec22.jpg",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner3-14Dec22.jpg"
];

let kid_deals = [
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner3-14Dec22.jpg",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner1-14Dec22.jpg",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner2-14Dec22.jpg",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner4-14Dec22.jpg"
];

let shoes_deals = [
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-S&B-Banner3-16Dec22.jpg",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-S&B-Banner1-16Dec22.jpg",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-S&B-Banner2-16Dec22.jpg",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-S&B-Banner4-16Dec22.jpg"
];

let beauty_deals = [
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Beauty-Banner1-14Dec22.jpg",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Beauty-Banner2-14Dec22.jpg",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Beauty-Banner2-14Dec22.jpg",
    "https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Beauty-Banner4-14Dec22.jpg"
];

womenBtn2.addEventListener("click", () => {
    display_deal(women_deals);
})

menBtn2.addEventListener("click", () => {
    display_deal(men_deals);
})

kidsBtn2.addEventListener("click", () => {
    display_deal(kid_deals);
})

bagBtn2.addEventListener("click", () => {
    display_deal(shoes_deals);
})

beautyBtn2.addEventListener("click" , () => {
    display_deal(beauty_deals);
})

display_deal(women_deals);

function display_deal(images2){
    display_selected2.innerHTML= null;
    for(let i = 0; i < images2.length; i++){
        let anchor = document.createElement("a");
        anchor.setAttribute("href", "#");
            let category_type_image = document.createElement("img");
            category_type_image.setAttribute("src", images2[i]);

        anchor.append(category_type_image);
        display_selected2.append(anchor);
    }
}

