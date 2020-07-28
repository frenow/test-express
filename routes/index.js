var express = require('express');
var router = express.Router();


function fib(n) {
	if(n <= 1) {
		return n;
	}
	else {
		return fib(n - 1) + fib(n - 2);
	}
}

/* GET home page. */
router.get('/fib', async function(req, res, next) {
const f = await fib(40);
res.json({ title: 'Hello Fibonacci 40', f });
});

module.exports = router;
