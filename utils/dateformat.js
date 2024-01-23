const { Schema, model } = require('mongoose');


var date = new Date();
    var dateformat = require('dateformat');
    var periode = dateformat(date, "yyyy-mm");