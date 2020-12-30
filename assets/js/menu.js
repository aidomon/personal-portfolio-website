var tab1 = $("body > nav > div.flex_container > div.nav_items.closeClick > ul > li:nth-child(1) > a");
var tab2 = $("body > nav > div.flex_container > div.nav_items.closeClick > ul > li:nth-child(2) > a");
var tab3 = $("body > nav > div.flex_container > div.nav_items.closeClick > ul > li:nth-child(3) > a");
var tab4 = $("body > nav > div.flex_container > div.nav_items.closeClick > ul > li:nth-child(4) > a");
var tab5 = $("body > nav > div.flex_container > div.nav_items.closeClick > ul > li:nth-child(5) > a");

$(window).scroll(function () {
	if ($(window).scrollTop() >= 50) {
		$(".flex_container").animate({ backgroundColor: "white", color: "black", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)" }, 1);
		$(".flex_container a").animate({ color: "black" }, 1);
		$(".flex_container").css("box-shadow", "0 2px 4px 0 rgba(0, 0, 0, 0.1)");
	} else {
		$(".flex_container").animate({ backgroundColor: "transparent", color: "white", boxShadow: "none" }, 1);
		$(".flex_container a").animate({ color: "white" }, 1);
		$(".flex_container").css("box-shadow", "none");
	}
	var scrollDistance = $(window).scrollTop();
	var tab1_height = $("#o-mne").offset().top;
	var tab2_height = $("#sluzby").offset().top;
	var tab3_height = $("#portfolio").offset().top;
	var tab4_height = $("#kontakt").offset().top;

	if (scrollDistance == 0 || scrollDistance < tab1_height) {
		tab1.addClass("active");
		tab2.removeClass("active");
	}
	if (scrollDistance > 0 && scrollDistance + 90 > tab1_height) {
		tab1.removeClass("active");
		tab3.removeClass("active");
		tab2.addClass("active");
	}
	if (scrollDistance > 0 && scrollDistance + 90 > tab2_height) {
		tab2.removeClass("active");
		tab3.addClass("active");
		tab4.removeClass("active");
	}
	if (scrollDistance > 0 && scrollDistance + 90 > tab3_height) {
		tab3.removeClass("active");
		tab4.addClass("active");
		tab5.removeClass("active");
	}
	if (scrollDistance > 0 && scrollDistance > 2350) {
		tab4.removeClass("active");
		tab5.addClass("active");
	}
});

$(".burger_div").click(function () {
	if ($(".burger").hasClass("toggle") == true) {
		$(".burger").removeClass("toggle");
		$(".submenu").removeClass("submenu_active");
	} else {
		$(".burger").addClass("toggle");
		$(".submenu").addClass("submenu_active");
	}
});

var x = $(".closeClick");
for (var i = 0; i < x.length; i++) {
	x[i].addEventListener("click", function (event) {
		$(".submenu").removeClass("submenu_active");
		$(".burger").removeClass("toggle");
	});
}

$(".nav_items").click(function (e) {
	var target = $(e.target);
	if (target.is("body > nav > div.flex_container > div.nav_items.closeClick > ul > li:nth-child(1) > a")) {
		remove_and_add_active(target);
	} else if (target.is("body > nav > div.flex_container > div.nav_items.closeClick > ul > li:nth-child(2) > a")) {
		remove_and_add_active(target);
	} else if (target.is("body > nav > div.flex_container > div.nav_items.closeClick > ul > li:nth-child(3) > a")) {
		remove_and_add_active(target);
	} else if (target.is("body > nav > div.flex_container > div.nav_items.closeClick > ul > li:nth-child(4) > a")) {
		remove_and_add_active(target);
	} else if (target.is("body > nav > div.flex_container > div.nav_items.closeClick > ul > li:nth-child(5) > a")) {
		remove_and_add_active(target);
	}
});
function remove_and_add_active(target) {
	$(".nav_items a").removeClass("active");
	target.addClass("active");
}
