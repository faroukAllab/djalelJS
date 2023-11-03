//toggle menu on small screen
let navDrop = document.querySelector('.navbar');
let iconDrop = document.querySelector('#menu-icon');

iconDrop.onclick = () => {
    iconDrop.classList.toggle('bx-x');
    navDrop.classList.toggle('down');
}
//showing the right plan

function eventChange() {
    var eventype = document.getElementById("eventype").value;
    var lab = document.querySelector('#eventype option:checked').parentElement.label;
    const packofcards1 = document.querySelector(".packofcards1");
    const packofcards2 = document.querySelector(".packofcards2");
    const packofcards3 = document.querySelector(".packofcards3");

    if (lab == "wedding") {
        packofcards2.classList.add("off");
        packofcards3.classList.add("off");
        packofcards1.classList.remove("off");   
    } else if (lab == "actes de mariages") {
        packofcards1.classList.add("off");
        packofcards3.classList.add("off");
        packofcards2.classList.remove("off");
        
    } else if (lab == "graduation") {
        packofcards1.classList.add("off");
        packofcards2.classList.add("off");
        packofcards3.classList.remove("off");
    }
    
}

//soutenance fee caclulator

const h1 = document.querySelector("#feeH1");
var checkbox = document.getElementById('video');
const one = document.getElementById("photot");
const two = document.getElementById("photoi");

var fullprice = 0;
var rangeprev1 = 0;
var rangeprev2 = 0;


function pricerefresher() {
    h1.innerHTML = fullprice+" DA";
}

function rangeChange1(value) {
    var actual = 0;
    fullprice -= rangeprev1;
    if (value<15) {
        actual = value*200;
    } else if (value == 15) {
        actual = 2500;
    } else if(value>15){
        actual = 2500 + (value - 15)*100;  
    }
    fullprice += actual;
    rangeprev1 = actual;
    pricerefresher();
}
function rangeChange2(value) {
    fullprice -= rangeprev2*50;
    fullprice += value*50;
    rangeprev2 = value;
    pricerefresher();
  
}
function tretimp() {


    if (Number(one.value) < Number(two.value)) {
        console.log(two.value+ "  " +one.value);
        two.value = one.value;
        
        rangeChange1(one.value);
        rangeChange2(two.value);
    } 
    
}
function videofull() {
    if (checkbox.checked == true) {
        fullprice += 10000;
        pricerefresher();
    } else {
        fullprice -=10000;
        pricerefresher();
    }

}
var rad = document.getElementsByName("vid");
var prev = document.getElementById("none");

    for(var i = 0; i < rad.length; i++) {
        rad[i].onclick = function () {
            (prev)? console.log(prev.value):null;
            if(this !== prev) {
                if (prev.value == "one") {
                    fullprice -= 3000;
                } else if (prev.value =="two") {
                    fullprice -= 5000;
                }
                if (this.value=="one") {
                    fullprice += 3000;
                } else if (this.value=="two") {
                    fullprice += 5000;
                }
                
                prev = this;
                console.log(this.value +"  the fullprice = "+ fullprice );
                pricerefresher();
            }
            
        };
    }
var wilayalast = "Skikda";
    function placeChange() {
        var wilaya = document.querySelector('#place option:checked').parentElement.label;
        if (wilaya !== wilayalast) {
            if (wilayalast == "Skikda") {
                fullprice +=2500;
                pricerefresher();
                wilayalast = wilaya;
            } else if (wilaya =="Skikda") {
                
                    fullprice -=2500;
                    pricerefresher();
                    wilayalast = wilaya;
                } 
                
        } 
        
    }
    rangeChange1(one.value);
    rangeChange2(two.value);