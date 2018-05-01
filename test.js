var moment = require('moment');

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
}

var start = moment([2007, 0, 29]);
var today = moment();
var diffInDays = today.diff(start, 'days');

console.log( numberWithCommas(diffInDays) );