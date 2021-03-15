var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var bd = document.querySelector("body");
var btn = document.querySelector("button");

function setGrad() {
	bd.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
	css.innerText = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
}

function randomi()
{
	var r1 = Math.floor((Math.random() * 256) + 1);
	var b1 = Math.floor((Math.random() * 256) + 1);
	var g1 = Math.floor((Math.random() * 256) + 1);
	var r2 = Math.floor((Math.random() * 256) + 1);
	var b2 = Math.floor((Math.random() * 256) + 1);
	var g2 = Math.floor((Math.random() * 256) + 1);
	bd.style.background = "linear-gradient(to right, rgb("+r1+","+g1+","+b1+") ,  rgb("+r2+","+g2+","+b2+"))";
	// bd.style.background = "linear-gradient(to right,  + rgb("+r1+","+g1+","+b1+",) ,  rgb("+r2+","+g2+","+b2+",))";
	css.innerText = "linear-gradient(to right,  + rgba("+r1+","+g1+","+b1+","+0+") ,  rgba("+r2+","+g2+","+b2+","+0+"))";
	console.log(bd.style.background);

}
color1.addEventListener("input", setGrad)

color2.addEventListener("input", setGrad)

btn.addEventListener("click", randomi);


