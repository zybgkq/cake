$(function (){
	var carouselHeight = $('.carousel').width();
	// console.log(carouselHeight)
	// 获取轮播图宽度
	var ListHeight = $('.carousel_list').width();
	var imgHeight = $('.carousel_list_img').width();
	// console.log(ListHeight)
	// console.log(imgHeight)
	function rollTwo(){
        $(".carousel_list").animate({left:"-1600px",opacity:"0.8"},2000,function(){
	        $(".carousel_list").css({left:"0px",opacity: "1"});
	        $(".carousel_list li:first").remove().clone(true).appendTo(".carousel_list");
        })
    }
    var startRollTwo=setInterval(rollTwo,2000);
    // <!--鼠标移入停止移出继续-->
    $(".carousel_list").hover(function(){
        clearInterval(startRollTwo);
    },function(){
        startRollTwo=setInterval(rollTwo,2000);
    });
})