/*
$(function(){
    'use strict';
    var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    var year = d.getFullYear();
    //console.log(d.getFullYear());

    var month = months[d.getMonth()];
    //console.log(months[d.getMonth()]);

    var date = d.getDate();
    //console.log(d.getDate());

    console.log(month + ' ' + date + ', ' + year);
});
*/
var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   
    var year = d.getFullYear();
    //console.log(d.getFullYear());

    var month = months[d.getMonth()];
    //console.log(months[d.getMonth()]);

    var date = d.getDate();
    //console.log(d.getDate());

    var day = days[d.getDay()];
    //console.log(d.getDate());

    console.log(day + ' ' + month + ' ' + date + ', ' + year);
console.log('test1-2-3');