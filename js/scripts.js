// console.log("hello!") testing if .js worked//


$(".joke").text ("What Bow can't be tied?")

var $one = $("#l1");
var $two = $("#l2");
var $three = $("#l3");
var $four = $("#l4");


$one.on("click", function() {
	$(this).hide();
	$two.show();
})

$two.on("click", function() {
	$(this).hide();
	$three.show();
})

$three.on("click", function() {
	$(this).hide();
	$four.show();
})

$four.on("click", function() {
	$(this).hide();
	$one.show();
})
