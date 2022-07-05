// jQuery로 작성하기
$(function() {
	$(".tab-box ul li").click(function() {
		// unselect
		$(".tab-box ul li.selected").removeClass("selected");

		// select
		$(this).addClass("selected");
	});
});


/*
var tabBox = {
	init: function() {
		$(this._onWindowLoad.bind(this));
	},
	_onTabClicked: function() {
		// unselect
		$(".tab-box ul li.selected").removeClass('selected');

		//select
		$(this).addClass('selected');
	},
	_onWindowLoad: function() {
		$($(".tab-box ul li")[4]).addClass('selected'); // 초기 화면
		for (var i = 0; i < $(".tab-box ul li").length; i++) {
			$($(".tab-box ul li")[i]).click(this._onTabClicked);
		}
	}
};
*/