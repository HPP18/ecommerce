const loginmodal = document.getElementById('loginmodal');
const signupbox = document.querySelector('#loginmodal .signupbox');
const loginbox = document.querySelector('#loginmodal .loginbox');

const signupfooter = document.getElementById('signupfooter');
const loginfooter = document.getElementById('loginfooter');

const modaltitle = document.querySelector('#loginmodal .modal-title');
const closebtn = document.getElementById('closebtn');


function showloginform(){
    loginmodal.style.display = 'block';
    signupbox.style.display = 'none';
    loginbox.style.display = 'block';
    signupfooter.style.display = 'none';
    loginfooter.style.display = 'block';
}

function showsignupform(){
    modaltitle.innerText = 'SIGN UP';
    signupbox.style.display = 'block';
    loginbox.style.display = 'none';
    signupfooter.style.display = 'block';
    loginfooter.style.display = 'none';
}

closebtn.onclick = function(){
    loginmodal.style.display = 'none';
}

window.onclick = function(e){
    if(e.target === loginmodal){
        loginmodal.style.display = 'none';
    }
    // e.preventDefault();
}

const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const contactnumber = document.getElementById('phno');
const signupemail = document.getElementById('signupemail');
const signuppassword = document.getElementById('signuppassword');
const cfmpassword = document.getElementById('cfmpassword');
const progressbar = signupbox.querySelector('.formerror .progress-bar');

console.log(signupbox);
signupbox.addEventListener('submit',(e)=>{
    console.log('hello');

    if(firstname.value === ''){
        showerror(firstname, 'Firstname is required');
    }

    if(lastname.value === ''){
        showerror(lastname, 'Lastname is required');
    }

    if(contactnumber.value[0] != 0 && contactnumber.value[0] === '9'){
        contactnumber.value = '0'+contactnumber.value;
        if(contactnumber.value.length < 10 || contactnumber.value.length > 11){
            showerror(contactnumber.parentElement, 'Contact number is invalid');
        }
    }else{
        showerror(contactnumber.parentElement, 'Contact number is required');
    }
    
    
    if(signupemail.value === ''){
        showerror(signupemail, 'Email is required');
    }else if(!isvalidemail(signupemail.value)){
        showerror(signupemail, 'Email is invalid');
    }

    if(signuppassword.value === ''){
        showerror(signuppassword.parentElement, 'Password is required');
    }else if(signuppassword.value.length < 6){
        showerror(signuppassword.parentElement, 'Minimum number of characters is 6.');
    }else if(signuppassword.value.length > 12){
        showerror(signuppassword.parentElement, 'Maximum number of characters is 12.');
    }

    if(signuppassword.value !== cfmpassword.value){
        showerror(cfmpassword, 'Passwords do not match');
    }
    e.preventDefault();
});

function showerror(input, message){
    const formerror = input.parentElement;
    const small = formerror.querySelector('small');
    small.innerText= message;
}

function isvalidemail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function passwordcheck(t){ 
    var progress = t.parentElement.nextElementSibling;
    progress.style.opacity = '1';
    var a = t.value.match(/[a-z]+/);
    var b = t.value.match(/[A-Z]+/);
    var c = t.value.match(/[0-9]+/);
    var d = t.value.match(/[$@#&!]+/);
        if(a || b || c || d){
            progressbar.style.width = 25 +'%';
            progress.nextElementSibling.innerText = 'Very weak';
            if(a && b || a && c || a && d || b && c || b && d || c && d){
                progressbar.style.width = 50 +'%';
                progress.nextElementSibling.innerText = 'Weak';
                if((a && b && c || a && b && d || a && c && d) && (t.value.length > 6)){
                    progressbar.style.width = 75 +'%';
                    progress.nextElementSibling.innerText = 'Strong';
                    if(a && b && c && d && t.value.length <12){
                        progressbar.style.width = 100 +'%';
                        progress.nextElementSibling.innerText = 'Excellent'; 
                    }else{
                        progressbar.style.width = 75 +'%';
                        progress.nextElementSibling.innerText = 'Strong';
                    }              
                }else{
                    progressbar.style.width = 50 +'%';
                    progress.nextElementSibling.innerText = 'Weak';
                }             
            }else{
                progressbar.style.width = 25 +'%';
                progress.nextElementSibling.innerText = 'Very weak';
            }        
        }else{
            progressbar.style.width = 0 +'%';
            showerror(signuppassword.parentElement, 'Password is required');
        }        
    }

const showbtn = document.getElementById('showbtn');
const showicon = showbtn.querySelector('i.fas');

showbtn.addEventListener('mousedown',()=>{
    showicon.classList.replace('fa-eye-slash','fa-eye');
    showbtn.innerHTML = `<i class="fas fa-eye"></i>`;
    showbtn.parentElement.previousElementSibling.type = 'text';
});
showbtn.addEventListener('mouseup',()=>{
    showicon.classList.replace('fa-eye','fa-eye-slash');
    showbtn.innerHTML = `<i class="fas fa-eye-slash"></i>`;
    showbtn.parentElement.previousElementSibling.type = 'password';
});


const watchmorebtn = document.getElementById('watchmorebtn');
const hidecard = document.querySelectorAll('#watches .card.hidecard');

watchmorebtn.addEventListener("click",showallwatch);

function showallwatch(){
    for(i = 0; i < hidecard.length; i++){
        hidecard[i].classList.toggle('hidecard');
    }
}

const card = document.querySelectorAll('#watches .card');
const girlbtn = document.getElementById('girlbtn');
const boybtn = document.getElementById('boybtn');

boybtn.addEventListener('click',showbyboy);
girlbtn.addEventListener('click',showbygirl);


function showbyboy(){
    for(i = 0; i < card.length; i++){
        if(card[i].getAttribute('value') === 'boy'){
                card[i].style.display = 'block';
        }else{
            card[i].style.display = 'none';
        }
    }
}

function showbygirl(){
    for(i = 0; i < card.length; i++){
        if(card[i].getAttribute('value') === 'girl'){
            card[i].style.display = 'block';
        }else{
            card[i].style.display = 'none';
        }
    }
}


const itemimg = document.querySelector('#watch img');
const itemtitle = document.querySelector('#watch h3');
const itemprice = document.querySelector('#watch span');
const itemcolor = document.querySelector('#watch p');

const watches = document.getElementById('watches');
const watch = document.getElementById('watch');

watches.addEventListener('click',function(e){
    const{parentNode} = e.target;
    if(parentNode.parentNode.classList.contains('card')){
        watch.style.display = 'block';
        let selectitem = parentNode.parentNode;
        
        let cardimg = selectitem.children[0].children[0].getAttribute('src');
        let cardtitle = selectitem.children[1].children[0].innerText;
        let cardcolor = selectitem.children[1].children[1].innerText;
        let cardprice = selectitem.children[1].children[2].innerText;

        itemimg.src = `${cardimg}`;
        itemtitle.innerHTML = `${cardtitle}`;
        itemprice.innerHTML = `US$${cardprice.slice(3)}`;
        itemcolor.innerHTML = `${cardcolor}`;
    }

});

const addtocartbtn = document.getElementById('addtocartbtn');
const cartbtn = document.getElementById('cartbtn');
const cartsidebar = document.getElementById('cartsidebar');

const firstcart = document.getElementById('firstcart');
const smallsizebtn = document.getElementById('smallsizebtn');
const largesizebtn = document.getElementById('largesizebtn');

const grandtotalprice = document.querySelector('#cartsidebar .cartfooter span');
const badgesup = document.querySelector('#cartbtn .badge');

    var itemsize = 32;
    function smallsizefun(t){
        return itemsize = t.value;       
    }
    function largesizefun(t){
        return itemsize = t.value;
    }


let x = 0;
addtocartbtn.addEventListener('click',function(e){

    x++;
    badgesup.innerText = x;

    const{parentNode} = e.target;
    let addtocartlist = parentNode.parentNode.previousElementSibling;

    let addtocartimg = addtocartlist.children[0].getAttribute('src');
    let addtocarttitle = addtocartlist.children[1].innerText;
    let addtocartcolor = addtocartlist.children[3].innerText;
    let addtocartprice = addtocartlist.children[2].innerText;

    addtocartfun(addtocartimg, addtocarttitle, addtocartcolor, addtocartprice);
});

function addtocartfun(itemimg, itemtitle, itemcolor, itemprice){

    var cartrowcontents = `<div class="row" style="padding: 10px 0;">
        <div class="col-sm-6">
            <img src="${itemimg}" width="100px"/>
        </div>
        <div class="col-sm-6">
            <h5 class="itemcarttitle">${itemtitle}</h5>
            <p>${itemcolor}</p>
            <small>${itemsize}mm</small>
        </div>
    </div>
    <div class="row"> 
        <span class="cartprice col-sm-6">${itemprice}</span>
        <div class="col-sm-4">
            <small>Qty:</small>
            <select id="quantity" class="quantity">
                <option value="1" selected>1</option>
                <option value="2">2</option>  
                <option value="3">3</option>  
                <option value="4">4</option>  
                <option value="5">5</option>    
            </select>
        </div>
        <a href="#" id="carttrash" class="btn deleteitem col-sm-2"><i class="far fa-trash-alt fa-2x text-muted"></i></a>
    </div>`;

    var firstcart = document.getElementById('firstcart');
    var itemcarttitle = firstcart.getElementsByClassName('itemcarttitle');
    for (var a=0; a< itemcarttitle.length; a++){
        if(itemcarttitle[a].innerText === itemtitle && parseInt(itemcarttitle[a].nextElementSibling.nextElementSibling.innerText.substring(0,2)) === itemsize){
                var e = parseInt(itemcarttitle[a].nextElementSibling.nextElementSibling.innerText.substring(0,2));
                if(!alert('This item is already added to the cart.')){
                    x--;
                    badgesup.innerText = x;            
                removecartitem(itemcarttitle[a].parentElement.parentElement.parentElement);
                return;
            }
        }
    }

    var onecart = document.createElement('div');
    onecart.classList.add('onecart');
    onecart.innerHTML = cartrowcontents;
    firstcart.appendChild(onecart);

    var quantity = document.getElementById('quantity');
    firstcart.addEventListener('click',removecartitem);
    quantity.addEventListener('change',quantitychanged);

    let cartitem = {'img' : itemimg, 'title' : itemtitle, 'color' : itemcolor, 'size' : itemsize, 'price' : itemprice};
    storeinlocalstorage(cartitem);
    carttotalfun();
}

function removecartitem(e){
    console.log(e.target);
        if(e.target.parentElement.parentElement.classList.contains('deleteitem')){
            if(confirm('Are you sure?')){
                x--;
                badgesup.innerText = x;
                e.target.parentElement.parentElement.parentElement.parentElement.remove();
                removeitemsfromlocalstorage(e.target.parentElement.parentElement.parentElement.parentElement);
                carttotalfun();
                return;
            }
        }

}


function quantitychanged(e){
    if(isNaN(e.target.value) || e.target.value <=0){
        e.target.value = 1;
    }        
    carttotalfun();
}

function carttotalfun(){
    var firstcart = document.getElementById('firstcart');
    var onecart = firstcart.getElementsByClassName('onecart');
    var total = 0;
    for(var c=0; c < onecart.length; c++){
        var priceelement = onecart[c].getElementsByClassName('cartprice')[0];
        var qtyelement = onecart[c].getElementsByClassName('quantity')[0];
        var qty = Number(qtyelement.value);
        var itemprice = Number(priceelement.innerText.slice(3));
        total = total + (itemprice * qty);
    }
    grandtotalprice.innerText = 'US$'+total;

}

function storeinlocalstorage(cartitem){
    let cartitems;
    if(localStorage.getItem('cartitems') === null){
        cartitems = [];
    }else{
        cartitems = JSON.parse(localStorage.getItem('cartitems'));
    }
    cartitems.push(cartitem);
    localStorage.setItem('cartitems',JSON.stringify(cartitems));

}


document.addEventListener('DOMContentLoaded',getitems);

function getitems(){
    let cartitems;
    if(localStorage.getItem('cartitems') === null){
         cartitems = [];
    }else{
         cartitems = JSON.parse(localStorage.getItem('cartitems'));
    }
    cartitems.forEach(function(cartitem){
        // console.log(cartitem.img);
        var cartrowcontents = `<div class="row" style="padding: 10px 0;">
        <div class="col-sm-6">
            <img src="${cartitem.img}" width="100px"/>
        </div>
        <div class="col-sm-6">
            <h5 class="itemcarttitle">${cartitem.title}</h5>
            <p>${cartitem.color}</p>
            <small>${cartitem.size}mm</small>
        </div>
        </div>
        <div class="row"> 
            <span class="cartprice col-sm-6">${cartitem.price}</span>
            <div class="col-sm-4">
                <small>Qty:</small>
                <select id="quantity" class="quantity">
                    <option value="1" selected>1</option>
                    <option value="2">2</option>  
                    <option value="3">3</option>  
                    <option value="4">4</option>  
                    <option value="5">5</option>    
                </select>
            </div>
            <a href="#" id="carttrash" class="btn deleteitem col-sm-2"><i class="far fa-trash-alt fa-2x text-muted"></i></a>
        </div>`;
        var onecart = document.createElement('div');
        onecart.classList.add('onecart');
        onecart.innerHTML = cartrowcontents;
        firstcart.appendChild(onecart);

        x++;
        badgesup.innerText = x;
        return;
     });
     firstcart.addEventListener('click',removecartitem);
}

function removeitemsfromlocalstorage(removeitem){
    let cartitems;
    if(localStorage.getItem('cartitems') === null){
        cartitems = [];
    }else{
        cartitems = JSON.parse(localStorage.getItem('cartitems'))
    }

    cartitems.forEach(function(item,index){
        if(removeitem.children[0].children[0].nextElementSibling.children[0].innerText === item.title){
            cartitems.splice(index,1);
        }
    });
    localStorage.setItem('cartitems',JSON.stringify(cartitems));
}

cartbtn.addEventListener('click',opensidebar);

function closesidebar(){
    cartsidebar.style.width = '0';
}
function opensidebar(){
    cartsidebar.style.width = '300px';
}

const leftbtn = document.getElementById('leftbtn');
const rightbtn = document.getElementById('rightbtn'); 
const homesection = document.getElementById('home');
const bgtext = document.getElementById('bgtext');
var bgimg = ['bg2.jpg','bg6.jpeg','bg10.jpg'];

let imgindex = 0;
loadimg(bgimg[imgindex]);


function loadimg(img){
    homesection.style.backgroundImage = `url(./img/${img})`;

    homesection.style.backgroundSize = 'cover';
    homesection.style.backgroundPosition = 'center';
    
    if(imgindex < 0){
        bgtext.style.transform = 'translateX(100%)';

    }else if(imgindex === 0){
        bgtext.style.transform = 'translateX(0%)';

    }else{
        bgtext.style.transform = 'translateX(100%)';

    }
}

rightbtn.addEventListener('click',previousbgimgfun);
leftbtn.addEventListener('click',nextbgimgfun);

function previousbgimgfun(){
    // homesection.className = 'bganimation';
    imgindex--;
    if(imgindex < 0){
        imgindex = bgimg.length-1;
    }

    loadimg(bgimg[imgindex]);

}

function nextbgimgfun(){
    // homesection.className = 'bganimation1';
    imgindex++;
    if(imgindex > bgimg.length-1){
        imgindex = 0;   
    } 

    loadimg(bgimg[imgindex]);

}