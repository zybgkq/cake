$(function(){
	 $.ajax({
	    url:'../json/index.json',
      	// type:'post',
	    dataType:'json',
	    success:function(data,status){
	    	for(var i in data){
	    		$('.entry_list').append("<li class='list_contents' id="+data[i].id+"></li>")
	    		var html_id = $(".list_contents").attr('id');
	    		// console.log(html_id)
	    		$('.list_contents').eq(i).append("<a href='javascript:;' class='shopping' id='addToCar "+data[i].id+"'></a>")
    			$('.list_contents').eq(i).append("<div class='img'></div>");
    			$('.img').eq(i).css("background-image","url("+data[i].image+")") ;
    			// 购物车弹框
    			$('.img').eq(i).append("<div class='shopMask'><a href='javascript:' class='routine'>常规款</a><ol class='details'><li class='details_size row'>14CM*14CM*4.5CM≈6寸,约640g</li><li class='details_free row'>免费赠送5套餐具</li><li class='details_edible row'>4-5人食用</li></ol></div>");
    			$('.list_contents').eq(i).append("<div class='tsxt'></div>");
    			$('.tsxt').eq(i).append("<p class='introduce'>"+ data[i].introduce+"</p>");
    			$('.tsxt').eq(i).append("<p class='name'><span class='name_cn'>"+ data[i].name +"</span><span class='name_en'>"+ data[i].word +"</span></div");
    			$('.tsxt').eq(i).append("<p class='name'><span class='term'>"+ data[i].price +"</span><span class='pound'>"+ data[i].pound +"</span></div")
	    		// console.log(data[i].introduce)
	    	}
	    },
	    error:function(err,status){
	    	console.log(err)
	    }
	})



	// $.getJSON('http://localhost:8080/index.json',function(data){
	// 	console.log(data)
	// })
	

})