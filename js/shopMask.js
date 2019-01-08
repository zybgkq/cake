$(function(){
	$('.entry_list').on('click','.shopping',function(){
		// on支持动态绑定
		elemtShowHide = $(this).next('.img').find('.shopMask')
		elemtShowHide.fadeToggle(500)
	})
})