// FIREBASE
var firebaseConfig = {
    apiKey: "AIzaSyBr8B7f3YkMZM8t1PBLfT5aj_6k_oS4zlU",
    authDomain: "organicano.firebaseapp.com",
    databaseURL: "https://organicano.firebaseio.com",
    projectId: "organicano",
    storageBucket: "organicano.appspot.com",
    messagingSenderId: "805352444698",
    appId: "1:805352444698:web:fc83d3f1316ff67f1852a3",
    measurementId: "G-XSK4G7Y6DF"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// GLOBAL
var products=[];
var cartItems=[];
var cart_n = document.getElementById('cart_n');
// DIVS
var fruitDIV = document.getElementById("fruitDIV");
var juiceDIV = document.getElementById("juiceDIV");
var saladDIV = document.getElementById("saladDIV");
//INFORMATIN
var FRUIT=[
    {name:'Banana' ,price:1},
    {name:'Pineapple' ,price:3},
    {name:'Berries' ,price:6},
    {name:'Strawberry' ,price:9},
    {name:'Guava' ,price:6},
    {name:'Peaches' ,price:3}
];
var JUICE=[
    {name:'Funky Lemonade' ,price:10},
    {name:'Blaster Berry' ,price:15},
    {name:'Small Kiwi' ,price:17}
];
var SALAD=[
    {name:'Only spinach' ,price:11},
    {name:'Mind mix' ,price:12},
    {name:'All in' ,price:15}
];
// HTML
function HTMLfruitProduct(con){
    let URL = `img/fruits/fruits${con}.jpg`;
    let btn = `btnFruits${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="heigth:16rem;" src="${URL}"
                alt="Card image cap">
                <div class="card-body">
                <i style="color:orange;" class="fa fa-star" ></i>
                <i style="color:orange;" class="fa fa-star" ></i>
                <i style="color:orange;" class="fa fa-star" ></i>
                <i style="color:orange;" class="fa fa-star" ></i>
                <i style="color:orange;" class="fa fa-star" ></i>
                <p class="card-text">${FRUIT[con-1].name}</p>
                <p class="card-text">Price:$ ${FRUIT[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart2('${FRUIT[con-1]
                            .name}','${FRUIT[con-1].price}','${URL}','${con}',
                            '${btn}')
                        " class="btn btn-sm btn-outline-secondary" ><a href="cart.html" style="color:inherit";>Buy</a></button>
                        <button id="${btn}" type="button" onclick="cart('${FRUIT[con-1]
                            .name}','${FRUIT[con-1].price}','${URL}','${con}','${btn}')
                        " class="btn btn-sm btn-outline-secondary" >Add to cart</button>
                    </div>
                    <small class="text-muted">Free shipping</small>
                </div>
                </div>
            </div>
        </div>
    `;
}

function HTMLjuiceProduct(con){
    let URL = `img/juices/juice${con}.jpg`;
    let btn = `btnJuice${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="heigth:16rem;" src="${URL}"
                alt="Card image cap">
                <div class="card-body">
                <i style="color:orange;" class="fa fa-star" ></i>
                <i style="color:orange;" class="fa fa-star" ></i>
                <i style="color:orange;" class="fa fa-star" ></i>
                <i style="color:orange;" class="fa fa-star" ></i>
                <i style="color:orange;" class="fa fa-star" ></i>
                <p class="card-text">${JUICE[con-1].name}</p>
                <p class="card-text">Price:$ ${JUICE[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart2('${JUICE[con-1]
                            .name}','${JUICE[con-1].price}','${URL}','${con}',
                            '${btn}')
                        " class="btn btn-sm btn-outline-secondary" ><a href="cart.html" style="color:inherit";>Buy</a></button>
                        <button id="${btn}" type="button" onclick="cart('${JUICE[con-1]
                            .name}','${JUICE[con-1].price}','${URL}','${con}','${btn}')
                        " class="btn btn-sm btn-outline-secondary" >Add to cart</button>
                    </div>
                    <small class="text-muted">Free shipping</small>
                </div>
                </div>
            </div>
        </div>
    `;
}

function HTMLsaladProduct(con){
    let URL = `img/salads/salad${con}.jpg`;
    let btn = `btnSalad${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="heigth:16rem;" src="${URL}"
                alt="Card image cap">
                <div class="card-body">
                <i style="color:orange;" class="fa fa-star" ></i>
                <i style="color:orange;" class="fa fa-star" ></i>
                <i style="color:orange;" class="fa fa-star" ></i>
                <i style="color:orange;" class="fa fa-star" ></i>
                <i style="color:orange;" class="fa fa-star" ></i>
                <p class="card-text">${SALAD[con-1].name}</p>
                <p class="card-text">Price:$ ${SALAD[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart2('${SALAD[con-1]
                            .name}','${SALAD[con-1].price}','${URL}','${con}',
                            '${btn}')
                        " class="btn btn-sm btn-outline-secondary" >
                        <a href="cart.html" style="color:inherit";>Buy</a></button>
                        <button id="${btn}" type="button" onclick="cart('${SALAD[con-1]
                            .name}','${SALAD[con-1].price}','${URL}','${con}','${btn}')
                        " class="btn btn-sm btn-outline-secondary" >Add to cart</button>
                    </div>
                    <small class="text-muted">Free shipping</small>
                </div>
                </div>
            </div>
        </div>
    `;
}

// CART FUNCTIONS
function cart(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage=JSON.parse(localStorage.getItem("cart"));
    if (storage==null) {
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    } else {
        products=JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products=JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display="none";
    animationA();
}

function cart2(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage=JSON.parse(localStorage.getItem("cart"));
    if (storage==null) {
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    } else {
        products=JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products=JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display="none";
}


// ANIMATION
function animationA(){
    const toasts = swal.mixin({
        toast:true,
        position:'top-end',
        showConfirmButton:true,
        timer:1000
    });
    toasts({
        type:'success',
        title:'Added to cart'
    });
}


// RENDER
function render(){
    for (let index = 1; index <= 6; index++) {
        fruitDIV.innerHTML +=`${HTMLfruitProduct(index)}`;
        
    }
    for (let index = 1; index <= 6; index++) {
        juiceDIV.innerHTML +=`${HTMLjuiceProduct(index)}`;
        saladDIV.innerHTML +=`${HTMLsaladProduct(index)}`;
    }
    if (localStorage.getItem("cart")==null) {
        
    }else{
        products=JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;
    }
}