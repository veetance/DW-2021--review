// console.log("hello!") testing if .js worked//


// $(".joke").text ("What Bow can't be tied?")

// variables for for logos///////////////
var $one = $("#l1");
var $two = $("#l2");
var $three = $("#l3");
var $four = $("#l4");



// variables for for jokes//////////////
var $strt = $("#clkme");
var $jk1 = $("#q1");
var $jk2 = $("#q2");
var $jk3 = $("#q3");

// variables for for joke answers//////////////
var $a1 = $("#a1");
var $a2 = $("#a2");
var $a3 = $("#a3");



// logic for logo//////////////////////

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




// logic for jokes////////////////////

$strt.on("click", function() {
	$(this).hide();
	// $(".joke").text ("What Bow can't be tied?")
    $jk1.show();
	
})

$jk1.on("click", function() {
	$(this).hide();
	$a1.show();
})

$a1.on("click", function() {
	$(this).hide();
	$jk2.show();
})

$jk2.on("click", function() {
	$(this).hide();
	$a2.show();
})

$a2.on("click", function() {
	$(this).hide();
	$jk3.show();
})

$jk3.on("click", function() {
	$(this).hide();
	$a3.show();
})

$a3.on("click", function() {
	$(this).hide();
	$strt.show();
	
})