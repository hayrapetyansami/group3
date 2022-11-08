import $ from "jquery";

const px = "200px";

$("#box")
.css("width", px)
.css("height", px)
.css("background", "#cc2266")

$("h1")
.text("Hello World !!!")
.on("click", function () {
	$(this).text("Hello Armenia !!!");
	$("#box").animate({
		height: "800px"
	}, 2000, function () {
		console.log("DONE");
	})
});

$("button").on("click", function () {
	$("#box").animate({
		marginLeft: "150px"
	}, 2000, function () {
		console.log("DONE");
	})
});

$("span").each(function(index) {
	$(this).on("click", (e) => {
		console.log(index);
		console.log(e);
	})
})