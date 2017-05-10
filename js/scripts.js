function Telefon(marka, cena, kolor, klawiatura) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
	this.klawiatura = klawiatura;
}
Telefon.prototype.printInfo = function() {
	console.log('Marka telefonu to ' + this.marka + ', kolor to ' + this.kolor + ', a cena to ' + this.cena + ' pln', "jaka klawiatura  - " + this.klawiatura + '.')
}

var iPhone6S = new Telefon('Samsung', 1000, 'czarny', 'dotykowa');
var Nokia = new Telefon('klapka', 2.5, 'czerwony', 'bezdotykowa');
var Sony = new Telefon('bez klapki', 1.5, 'żółty', 'napędzana myślami');

iPhone6S.printInfo();
Nokia.printInfo();
Sony.printInfo();