var express = require('express');
var router = express.Router();
var appdata=require('../data.json');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/products', function(req, res) {
  res.json(appdata.products)
//  res.render('products', { 
//  	title: 'Products' 
//  	});
});

router.get('/porders', function(req, res) {
	res.render('porders', { 
  	title: 'Purchase Order' 
  	});
});

router.get('/shipments', function(req, res) {
  res.render('shipments', { 
  	title: 'Shipment' 
  	});
});

router.get('/orders', function(req, res) {
  res.render('orders', { 
  	title: 'Order' 
  	});
});

router.get('*',function(req,res){
	  res.sendFIle('../public/index.html');
	});
	
module.exports = router;
