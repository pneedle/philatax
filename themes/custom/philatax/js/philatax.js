// genersaate date formatted as: "Tuesday, January 7, 2020"
jQuery(function(){
  'use strict';
  var d = new Date();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var day = days[d.getDay()];
  var month = months[d.getMonth()];
  var date = d.getDate();
  var year = d.getFullYear();

  console.log(day + ' ' + month + ' ' + date + ', ' + year);
});
