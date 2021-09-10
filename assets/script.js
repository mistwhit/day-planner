$(document).ready(function() {

// Variable assignments
let timeEl = $('<p>');
let dayEl = $('<p>');

let div9 = $('#div9');
let div10 = $('#div10');
let div11 = $('#div11');
let div12 = $('#div12');
let div1 = $('#div1');
let div2 = $('#div2');
let div3 = $('#div3');
let div4 = $('#div4');
let div5 = $('#div5');

let button9 = $('#btn9');
let button10 = $('#btn10');
let button11 = $('#btn11');
let button12 = $('#btn12');
let button1 = $('#btn1');
let button2 = $('#btn2');
let button3 = $('#btn3');
let button4 = $('#btn4');
let button5 = $('#btn5');
let clearBtn = $('#clearBtn');

// Calls the current time from Moment
var timeNow = parseInt(moment().format('HH'));

// Appends the current time to the header
function tick() {
    dayEl.text(moment().format('LL'));
    timeEl.text(moment().format('hh:mm A'));
    $('.jumbotron').append(dayEl);
    $('.jumbotron').append(timeEl);
}

tick();
setInterval(tick, 1000);
setInterval(checkTime, 600000);

// Checks the current time and determines the color of each box accordingly
function checkTime() {
    if (parseInt(div12.attr('data-hour')) > timeNow) {
        div12.removeClass('past present future');
        div12.addClass('future');
    } else if (parseInt(div12.attr('data-hour')) === timeNow) {
        div12.removeClass('past present future');
        div12.addClass('present');
    } else {
        div12.removeClass('past present future');
        div12.addClass('past');
    }
    if (parseInt(div1.attr('data-hour')) > timeNow) {
        div1.removeClass('past present future');
        div1.addClass('future')
    } else if (parseInt(div1.attr('data-hour')) === timeNow) {
        div1.removeClass('past present future');
        div1.addClass('present');
    } else {
        div1.removeClass('past present future');
        div1.addClass('past');
    }
    if (parseInt(div2.attr('data-hour')) > timeNow) {
        div2.removeClass('past present future');
        div2.addClass('future');
    } else if (parseInt(div2.attr('data-hour')) === timeNow) {
        div2.removeClass('past present future');
        div2.addClass('present');
    } else {
        div2.removeClass('past present future');
        div2.addClass('past');
    }
    if (parseInt(div3.attr('data-hour')) > timeNow) {
        div3.removeClass('past present future');
        div3.addClass('future');
    } else if (parseInt(div3.attr('data-hour')) === timeNow) {
        div3.removeClass('past present future');
        div3.addClass('present');
    } else {
        div3.removeClass('past present future');
        div3.addClass('past');
    }
    if (parseInt(div4.attr('data-hour')) > timeNow) {
        div4.removeClass('past present future');
        div4.addClass('future');
    } else if (parseInt(div4.attr('data-hour')) === timeNow) {
        div4.removeClass('past present future');
        div4.addClass('present');
    } else {
        div4.removeClass('past present future');
        div4.addClass('past');
    }
    if (parseInt(div5.attr('data-hour')) > timeNow) {
        div5.removeClass('past present future');
        div5.addClass('future');
    } else if (parseInt(div5.attr('data-hour')) === timeNow) {
        div5.removeClass('past present future');
        div5.addClass('present');
    } else {
        div5.removeClass('past present future');
        div5.addClass('past');
    }
    if (parseInt(div9.attr('data-hour')) > timeNow) {
        div9.removeClass('past present future');
        div9.addClass('future');
    } else if (parseInt(div9.attr('data-hour')) === timeNow) {
        div9.removeClass('past present future');
        div9.addClass('present');
    } else {
        div9.removeClass('past present future');
        div9.addClass('past');
    }
    if (parseInt(div10.attr('data-hour')) > timeNow) {
        div10.removeClass('past present future');
        div10.addClass('future');
    } else if (parseInt(div10.attr('data-hour')) === timeNow) {
        div10.removeClass('past present future');
        div10.addClass('present');
    } else {
        div10.removeClass('past present future');
        div10.addClass('past');
    }
    if (parseInt(div11.attr('data-hour')) > timeNow) {
        div11.removeClass('past present future');
        div11.addClass('future');
    } else if (parseInt(div11.attr('data-hour')) === timeNow) {
        div11.removeClass('past present future');
        div11.addClass('present');
    } else {
        div11.removeClass('past present future');
        div11.addClass('past');
    }
}

checkTime();

// Designates user input being stored in local storage
div1.val(localStorage.getItem('Entry1'));
div2.val(localStorage.getItem('Entry2'));
div3.val(localStorage.getItem('Entry3'));
div4.val(localStorage.getItem('Entry4'));
div5.val(localStorage.getItem('Entry5'));
div9.val(localStorage.getItem('Entry9'));
div10.val(localStorage.getItem('Entry10'));
div11.val(localStorage.getItem('Entry11'));
div12.val(localStorage.getItem('Entry12'));

// Saves the user input to local storage when the save button is clicked
button9.on('click', function() {
    if (div9.val() !== '') {
        localStorage.setItem('Entry9', div9.val());
    }
});

button10.on('click', function() {
    if (div10.val() !== '') {
        localStorage.setItem('Entry10', div10.val());
    }
});

button11.on('click', function() {
    if (div11.val() !== '') {
        localStorage.setItem('Entry11', div11.val());
    }
});

button12.on('click', function() {
    if (div12.val() !== '') {
        localStorage.setItem('Entry12', div12.val());
    }
});

button1.on('click', function() {
    if (div1.val() !== '') {
        localStorage.setItem('Entry1', div1.val());
    }
});

button2.on('click', function() {
    if (div2.val() !== '') {
        localStorage.setItem('Entry2', div2.val());
    }
});

button3.on('click', function() {
    if (div3.val() !== '') {
        localStorage.setItem('Entry3', div3.val());
    }
});

button4.on('click', function() {
    if (div4.val() !== '') {
        localStorage.setItem('Entry4', div4.val());
    }
});

button5.on('click', function() {
    if (div5.val() !== '') {
        localStorage.setItem('Entry5', div5.val());
    }
});

// Clears the user input that is saved in local storage
function clear() {
    localStorage.clear();
    div1.val('');
    div2.val('');
    div3.val(''); 
    div4.val('');
    div5.val('');
    div9.val('');
    div10.val('');
    div11.val('');
    div12.val('');
}

clearBtn.on('click', clear);

});