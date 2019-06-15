let request = require('request');
var DomParser = require('dom-parser');
var parser = new DomParser();
var htmlAttributeParser = require('html-attribute-parser');

let url = process.argv[2];

request(url, function (err, res, body){
    if(err) 
	throw err;
    var dom = parser.parseFromString(body);
    
    function crawler(a){
    var number_slides = dom.getElementsByTagName('link').length;
    let arr_slides = [];
    for(var i = 0; i < number_slides; i++)
	arr_slides.push(dom.getElementsByTagName('link')[i].getAttribute('href'));
    for(var  i = 0; i < number_slides; i++)
	console.log(arr_slides[i]);
    for(var i = 0; i < number_slides; i++)
	crawler(arr_slides[i]);
    };

    crawler(url);
})
