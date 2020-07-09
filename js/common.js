// JavaScript Document
$(function(){

   /* $('.share li').each(function(){
	   $(this).hover(function(){
		   $(this).find('>.ewm').stop(true,false).fadeIn('fast');
		    $(this).find('>.search').stop(true,true).fadeIn('fast')
		   },function(){
			   $(this).find('>.ewm').stop(true,false).fadeOut('fast');
			   $(this).find('>.search').stop(true,true).fadeOut('fast')
			   })
	   })*/
      
		//二级导航			
		$('.nav .w1400>ul>li').hover(function(){
				$(this).addClass('cur')
				$(this).find('.subMenuBox').stop(true,false).show()
				/*nav subMenu*/
				var thisSubMenuWidth=0;
				$(this).find("dl dd").each(function(){
					thisSubMenuWidth += $(this).outerWidth()	
				})
				$(this).find('.subMenuBox').width(thisSubMenuWidth)
				if(thisSubMenuWidth){
					$(".nav_bg").addClass("nav_bg_cur");
				}
				//set marginLeft
				var thisIndex = $(this).index();
				var thisLiScrollLeft=0
				for(var i=0;i<thisIndex;i++){
					thisLiScrollLeft += $('.nav .w1400>ul>li').eq(i).outerWidth();	
				}
				if(thisLiScrollLeft+thisSubMenuWidth>1400){
					$(this).find('.subMenuBox').css({marginLeft:(thisLiScrollLeft+thisSubMenuWidth-1400)*-1})
				}
			},function(){
				$(this).removeClass('cur')
				$(this).find('.subMenuBox').stop(true,false).hide()
				$(".nav_bg").removeClass("nav_bg_cur");
			})
		
	
	$('.nav .w1400>ul>li:last').css('background-image','none')
	
	
	 $(window).scroll(function(){
	     var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
		 if(scrollTop>0){
			 $('.rSlide').removeClass('ani01')
			 }
		 if(scrollTop>600){
			 $('.backtoTop').fadeIn('fast')
		 }else{
			 $('.backtoTop').fadeOut('fast')
			 }
	  })  
  $('.backtoTop').click(function(){
	     $('html,body').animate({scrollTop:0},500)
	  })
  
  
  $('.menu').click(function(){
	    $('.rSlide').toggleClass('ani01')
	  })
  $("body,html").click(function(i){ 
		if(!$(i.target).parents().is($('.top'))){
			   $('.rSlide').removeClass('ani01')
			}
      })
  $('.rSlide').css('height', window.screen.height)
  $(window).resize(function (){
        $('.rSlide').css('height', window.screen.height)
  });
  
  
  //移动端头部fixed
  $(window).ready(function(){
	  var _width = $(window).width(); 
      if(_width < 800){
           $(window).scroll(function(){
			 var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
			 if(scrollTop>0){
				 $('.top').css('position','fixed')
				 }else{
					 $('.top').css('position','relative')
					 }
	       })   
     }
  })
  
  //移动端导航下拉
  $('.rSlide ul>li').each(function(){
	  $(this).click(function(){
		  if($(this).has('dl').length>0){
			  $(this).toggleClass('cur').siblings().removeClass('cur');
			  $(this).find('dl').slideToggle('fast');
			  $(this).siblings().find('dl').slideUp('fast')
			  }else{
				  $(this).siblings().find('dl').slideUp('fast');
				  $(this).siblings().removeClass('cur');
				  }
		  })
	  })
	  
   $('.swiper-slide:last').css('margin',0)
   
   //新闻中心和党建之窗列表
   var liBox = $(".newsbox_cont ul li");
		liBox.each(function(){
		var thisLiInfo = $(this).find(".newsbox_info a").height();
		if(thisLiInfo<40){
			$(this).find("a").addClass("mgt10")
		}
	})

//列表左侧导航
  $('.left_nav>ul>li').each(function(){
	  	//console.log()
	    if($(this).has('>ul').length>0){
			$(this).addClass("addIcon")
			$('>a',$(this)).click(function(){
				 $this = $(this).parent();
				 $this.find('>ul').slideToggle('fast');
				 $this.siblings().find('>ul').slideUp('fast');
				 $this.find('>a').toggleClass('cur');
				 $this.siblings().find('>a').removeClass('cur')
			})
			$(this).find("li").click(function(){
				$(this).addClass("cur").siblings("li").removeClass("cur");
			})
		}else{
				$('>a',$(this)).click(function(){
					$(this).removeClass('cur');
				})
		}
		
        
		/*if($(this).find('li').hasClass('cur')){
			  $('>a',$(this)).addClass("cur")
		      $(this).find('ul').css('display','block');
              //$(this).siblings().find('>ul').css('display','none')
		}
		*/
})
  
                    
  
	
})

 
 



	


