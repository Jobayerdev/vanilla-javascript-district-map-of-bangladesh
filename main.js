const getDivison = document.getElementById("divison");

//img
const showImg = document.getElementById("showMap");
//btn
const sylhetBtn = document.getElementById("sylhet");
const rajshahiBtn = document.getElementById("rajshahi");
const rangpurBtn = document.getElementById("rangpur");
const khulnaBtn = document.getElementById("khulna");
const dhakaBtn = document.getElementById("dhaka");
const chittagongBtn = document.getElementById("chittagong");
const barisalBtn = document.getElementById("barisal");

//Event Listene
sylhetBtn.addEventListener("click", function() {
	showImg.src = "img/map-sylet.png";
});
rajshahiBtn.addEventListener("click", function() {
	showImg.src = "img/map-rajshashi.png";
});
rangpurBtn.addEventListener("click", function() {
	showImg.src = "img/map-ragpur.png";
});
khulnaBtn.addEventListener("click", function() {
	showImg.src = "img/map-khulna.png";
});
dhakaBtn.addEventListener("click", function() {
	showImg.src = "img/map-dhaka.png";
});
chittagongBtn.addEventListener("click", function() {
	showImg.src = "img/map-ctg.png";
});
barisalBtn.addEventListener("click", function() {
	showImg.src = "img/map-barishal.png";
});
