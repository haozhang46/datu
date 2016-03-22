;jQuery.fn.extend({
     move:function()
     {
     	//document中不能select
 	  document.onselectstart=function(){
     	return false;
     }
     
 	 $(this).each(function(index,key) {
       //有多少张图片
        var index; 
        var wrap_h=$(this).height();
       	var num=$(key).children(".move").find("a").length;
       	console.log("mun"+num);
       	//move 的宽度
       	var move_w=$(".move img").width()*num;
       //删除inlinebox中的空隙
       	 $('.move').contents().filter(function()
	   	{
		 	 return this.nodeType === 3;
   		}).remove();

     
       //设置宽度
       	$(".move a").css(
       	{
       		padding:0,
       		margin:0,
       	})
       	$(".move").width(move_w);
       	//wrap 宽
       	$(".wrap").width($(".move a").width());
       	$(".wrap").css({
       		"overflow":"hidden",
       		"margin":"0 auto"
       	})
       
       //加button
       // var spanA=
       	for(var i=0;i<num;i++)
       	{   

         	var span=$("<span></span",
         	{
         		text:i+1,
         		class:"button",

        	 })
         	if(i==0){
       		  span.addClass("active");
       		  span.removeClass("button");
       		}
         	console.log(span);
         	$(key).children(".do").append(span);

        }
       //do居中
       	$(".do").css({
       		"left":"50%",
       		"width":$(".do span").outerWidth(true)*num,
       		"margin-left":-$(".do").width()/2,

       	})
       	console.log($(".do").width());

       //left
       var div_L=$("<div></div>",{
       	text:"<",
       	class:"left",
       });
       div_L.css({
       	  text:"",
          "height":wrap_h,
          "width":"50px",
          "background-color":"black",
          "opacity":"0.8",
          "position":"absolute",
          "left":0,
          "top":0,
          "color":"white",
          "text-align":"center",
          "line-height":wrap_h+"px",
          "font-size":"50px",
          "font-weight":"bold",

       })
      
       $(this).append(div_L);
       //right
       var div_R=$("<div></div>",{
       	  text:">",
       	  class:"right",
       	  
       } )
       div_R.css({
       	"position":"absolute",
       	"left":$(".move img").width()-50,
          "top":0,
          "height":wrap_h,
          "width":"50px",
          "background-color":"black",
          "opacity":"0.8",
          "position":"absolute",   
          "color":"white",
          "text-align":"center",
          "line-height":wrap_h+"px",
          "font-size":"50px",
          "font-weight":"bold",
       "-webkit-moz-user-select": "none",
        "-moz-moz-user-select": "none",
        "-ms-moz-user-select": "none",
        "-o-moz-user-select": "none",
      
       })
      $(this).append(div_R);
     
      
      //click btn
      //让move变absolute
     $(".move").css({
     	"position":"absolute",
     })
    $(key).find(".do").children().on("click",function(){
    	 index=$(this).index();
         var ind=index;
         tab();
      })

     //left
     $(".left").on("click",function(){
        index--;
        tab();
       
     })
     //right
     $(".right").on("click",function(){
     	index++;
     	tab();
     
     })
   //auto move
  // setinterval what the fuck !!!!
     var time= setInterval(next,1000);

   	$(key).hover(function(){
      clearInterval(time);

   	},function() {
         time = setInterval(next,1000);
       })
    
   	// $(key).on("mouseout",function(){     
   	// 	    time=setInterval(next,1000);
   	// 	});
   		   // clearInterval(time);


//teacher auto
function next(){
  index++
  if(index>num){
    index=0
  }
  tab()

}
//   
//    $(key).hover(function() {
//         clearInterval(timer);
//       },function() {
//         timer = setInterval(next,1000);
//       })

  
    //tab
    function tab()
    {
    	 console.log(index);
    	 if(index<0)
    	 {  
    	 	index=num-1;
    	 }
    	 	 console.log(index);
    	 if(index>num-1)
    	 {
          index=0;
    	 }
    	 $(key).children(".move").stop().animate(
 	 	{
        	"left":-$(".move img").width()*index,
     	 })
     	 $(key).children(".do").children().eq(index).addClass("active").removeClass("button").siblings().removeClass("active").addClass("button"); 	 
    	
    }

 
     })

     }



})