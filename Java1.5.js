/** function sigHej(){
	var fornavn= document.test.fornavn.value;
	var efternavn= document.test.efternavn.value;
	document.test.kommentar.value="Hej "+fornavn+" "+efternavn;
	document.getElementById("kommentar2").innerHTML="Hej "+fornavn+" "+efternavn;a
	
} **/

function slet() {
	document.test.tal1.value="";
	document.test.tal2.value="";
	document.test.kommentar.value=""
	
}

function konverter() {
	tal1=parseFloat(document.test.tal1.value);
	tal2=parseFloat(document.test.tal2.value);
}

function sum1() {
	konverter();
	var resultat =tal1+tal2;
	document.test.kommentar.value=resultat;
}

function sum2() {
	konverter();
	var resultat =tal1-tal2;
	document.test.kommentar.value=resultat;
}

function sum3() {
	konverter();
	var resultat =tal1*tal2;
	document.test.kommentar.value=resultat;
}

function sum4() {
	konverter();
	var resultat =tal1/tal2;
	document.test.kommentar.value=resultat;
}

