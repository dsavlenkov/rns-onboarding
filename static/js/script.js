let IsExtended_1 = false;
let IsExtended_2 = false;
let IsExtended_3 = false;
let IsExtended_4 = false
let IsExtended_5 = false

function ExtendBlock_1() {
    if (!IsExtended_1) {
        IsExtended_1 = true;
        document.getElementById("section-1").style.height = '250px';
        document.getElementById('section-text-1').style.display = 'inherit';
    }
    else {
        IsExtended_1 = false;
        document.getElementById('section-1').style.height = '67px';
        document.getElementById('section-text-1').style.display = 'none';
    }
}

function ExtendBlock_2() {
    if (!IsExtended_2) {
        IsExtended_2 = true;
        document.getElementById("section-2").style.height = '250px';
        document.getElementById('section-text-2').style.display = 'inherit';
    }
    else {
        IsExtended_2 = false;
        document.getElementById('section-2').style.height = '67px';
        document.getElementById('section-text-2').style.display = 'none';
    }
}

function ExtendBlock_3() {
    if (!IsExtended_3) {
        IsExtended_3 = true;
        document.getElementById("section-3").style.height = '250px';
        document.getElementById('section-text-3').style.display = 'inherit';
    }
    else {
        IsExtended_3 = false;
        document.getElementById('section-3').style.height = '67px';
        document.getElementById('section-text-3').style.display = 'none';
    }
}

function ExtendBlock_4() {
    if (!IsExtended_4) {
        IsExtended_4 = true;
        document.getElementById("section-4").style.height = '250px';
        document.getElementById('section-text-4').style.display = 'inherit';
    }
    else {
        IsExtended_4 = false;
        document.getElementById('section-4').style.height = '67px';
        document.getElementById('section-text-4').style.display = 'none';
    }
}

function ExtendBlock_5() {
    if (!IsExtended_5) {
        IsExtended_5 = true;
        document.getElementById("section-5").style.height = '250px';
        document.getElementById('section-text-5').style.display = 'inherit';
    }
    else {
        IsExtended_5 = false;
        document.getElementById('section-5').style.height = '67px';
        document.getElementById('section-text-5').style.display = 'none';
    }
}
let xhr = new XMLHttpRequest()