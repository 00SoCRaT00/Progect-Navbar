var timeout = 500;
var closetimer = 0;
var ddmenuitem = 0;
// open hidden layer
function mopen(id) {
    // cancel close timer
    mcancelclosetime();
    // close old layer
    if (ddmenuitem) ddmenuitem.style.visibility = 'hidden';
    // get new layer and show it
    ddmenuitem = document.getElementById(id);
    ddmenuitem.style.visibility = 'visible';
}
// close showed layer
function mclose() {
    if (ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}
// go close timer
function mclosetime() {
    closetimer = window.setTimeout(mclose, timeout);
}
// cancel close timer
function mcancelclosetime() {
    if (closetimer) {
        window.clearTimeout(closetimer);
        closetimer = null;
    }
}
// close layer when click-out
document.onclick = mclose;



var mylist = document.getElementById('bars')

myIcon = document.getElementById('icon')

mylistbotton = document.getElementById('listbotton');

var countfortoggle = 1;

myIcon.onclick = function() {
    "use strick";
    if (countfortoggle == 1) {
        myIcon.setAttribute('class', 'fas fa-times');
        mylistbotton.classList.add('active');
        countfortoggle++;
    } else {
        myIcon.setAttribute('class', 'fas fa-bars');
        mylistbotton.classList.remove('active');
        countfortoggle--;

    }
}
var myDrob1 = document.getElementById('First-drop');
var myDrob2 = document.getElementById('second-drop');
var myDrob3 = document.getElementById('thard-drop');
var myDrob4 = document.getElementById('four-drop');
var myMinDrob1 = document.getElementById('First');
var myMinDrob2 = document.getElementById('second');
var myMinDrob3 = document.getElementById('thard');
var myMinDrob4 = document.getElementById('four');
var M2 = document.getElementById('m2');
var M1 = document.getElementById('m1');
var M5 = document.getElementById('m5');
var M6 = document.getElementById('m6');
var s1 = document.getElementById('child1');
var s2 = document.getElementById('child2');
var s3 = document.getElementById('child3');
var s4 = document.getElementById('child4');
var s5 = document.getElementById('child5');
var s6 = document.getElementById('child6');
var s7 = document.getElementById('child7');
var s8 = document.getElementById('child8');
var s9 = document.getElementById('child9');
var s10 = document.getElementById('child10');
var s11 = document.getElementById('child11');
var mylist = Array.from(document.querySelectorAll("nav .continer .nav-bottom .listbotton li:first-of-type .pairnt .child:first-of-type li"));

var mylist1 = Array.from(document.querySelectorAll("nav .continer .nav-bottom .listbotton li:first-of-type .pairnt .child:nth-of-type(2) li"));

var mylist2 = Array.from(document.querySelectorAll("nav .continer .nav-bottom .listbotton li:first-of-type .pairnt .child:nth-of-type(3) li"));

var mylist3 = Array.from(document.querySelectorAll("nav .continer .nav-bottom .listbotton li:first-of-type .pairnt .child:nth-of-type(4) li"));

var mylist4 = Array.from(document.querySelectorAll("nav .continer .nav-bottom .listbotton li:nth-of-type(2) .pairnt .for-grid"));

var mylist5 = Array.from(document.querySelectorAll(" nav .continer .nav-bottom .listbotton li:last-of-type .pairnt ul li:first-of-type ul li"));

var mylist6 = Array.from(document.querySelectorAll(" nav .continer .nav-bottom .listbotton li:last-of-type .pairnt ul li:last-of-type ul li"));

var mylist7 = Array.from(document.querySelectorAll(" nav .continer .nav-bottom .listbotton li:nth-of-type(8) .pairnt .child:first-of-type li"));

var mylist8 = Array.from(document.querySelectorAll(" nav .continer .nav-bottom .listbotton li:nth-of-type(8) .pairnt .child:nth-of-type(2) li"));
var mylist9 = Array.from(document.querySelectorAll(" nav .continer .nav-bottom .listbotton li:nth-of-type(8) .pairnt .child:nth-of-type(3) li"));
var mylist10 = Array.from(document.querySelectorAll(" nav .continer .nav-bottom .listbotton li:nth-of-type(8) .pairnt .child:last-of-type li"));



window.onresize = function() {
    "use strick";
    if (window.innerWidth > 992) {
        myIcon.setAttribute('class', 'fas fa-bars');
        myDrob1.setAttribute('onmouseover', "mopen('m2')");
        myDrob2.setAttribute('onmouseover', "mopen('m1')");
        myDrob3.setAttribute('onmouseover', "mopen('m5')");
        myDrob4.setAttribute('onmouseover', "mopen('m6')");
        mylistbotton.classList.remove('active');
        countfortoggle = 1;
    } else if (window.innerWidth <= 992) {
        myDrob1.setAttribute('onmouseover', "");
        myDrob2.setAttribute('onmouseover', "");
        myDrob3.setAttribute('onmouseover', "");
        myDrob4.setAttribute('onmouseover', "");
    }
}



if (window.innerWidth <= 992) {
    myDrob1.onclick = function() {
        "use strick";
        M2.classList.toggle('active-me');
    }
    myDrob2.onclick = function() {
        "use strick";
        M1.classList.toggle('active-me');
    }
    myDrob4.onclick = function() {
        "use strick";
        M6.classList.toggle('active-me');
    }
    myDrob3.onclick = function() {
        "use strick";
        M5.classList.toggle('active-me');
    }
    s1.onclick = function() {
        "use strick";
        for (let i = 0; i < mylist.length; i++) {
            mylist[i].classList.toggle('active-me');
        }
    }
    s2.onclick = function() {
        "use strick";
        for (let i = 0; i < mylist1.length; i++) {
            mylist1[i].classList.toggle('active-me');
        }
    }

    s3.onclick = function() {
        "use strick";
        for (let i = 0; i < mylist2.length; i++) {
            mylist2[i].classList.toggle('active-me');
        }
    }
    s4.onclick = function() {
        "use strick";
        for (let i = 0; i < mylist3.length; i++) {
            mylist3[i].classList.toggle('active-me');
        }
    }

    s5.onclick = function() {
        "use strick";
        for (let i = 0; i < mylist4.length; i++) {
            mylist4[i].classList.toggle('active-me');
        }
    }
    s6.onclick = function() {
        "use strick";
        for (let i = 0; i < mylist5.length; i++) {
            mylist5[i].classList.toggle('active-me');
        }
    }

    s8.onclick = function() {
        "use strick";
        for (let i = 0; i < mylist7.length; i++) {
            mylist7[i].classList.toggle('active-me');
        }
    }
    s9.onclick = function() {
        "use strick";
        for (let i = 0; i < mylist8.length; i++) {
            mylist8[i].classList.toggle('active-me');
        }
    }
    s10.onclick = function() {
        "use strick";
        for (let i = 0; i < mylist9.length; i++) {
            mylist9[i].classList.toggle('active-me');
        }
    }
    s11.onclick = function() {
        "use strick";
        for (let i = 0; i < mylist10.length; i++) {
            mylist10[i].classList.toggle('active-me');
        }
    }
}