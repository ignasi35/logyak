function random () {
	var n = new Date().getTime();
	console.log(n);
	if (n % 2 === 0) {
		console.log("p1");
	} else {
		console.log("p2");
	}
};