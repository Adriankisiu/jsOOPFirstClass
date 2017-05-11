function telephone(brand, price, color, keyboard) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.keyboard = keyboard;
}
telephone.prototype.printInfo = function() {
	console.log('Marka telefonu to ' + this.brand + ', kolor to ' + this.color + ', a cena to ' + this.price + ' pln', "jaka klawiatura  -  " + this.keyboard + '.')
}

var iPhone6S = new telephone('Samsung', 1000, 'czarny', 'dotykowa');
var nokia = new telephone('klapka', 2.5, 'czerwony', 'bezdotykowa');
var sony = new telephone('bez klapki', 1.5, 'żółty', 'napędzana myślami');

iPhone6S.printInfo();
nokia.printInfo();
sony.printInfo();