// Check off specific todos by clicking
// Select all LI and put the CLICK event when being clicked

/*Method 1 to apply click function
$("li").click(function(){
  //if li is gray
   if($(this).css("color") === "rgb(128, 128, 128)"){
     //turn it black
     $(this).css({
       color: "black",
       textDecoration: "none"
     });
  //else turn it gray and line-through
   } else {
  $(this).css({
    color: "gray",
    textDecoration: "line-through"
     });
   }
});
*/

//Method 2
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//Click on X to delete
$("ul").on("click", "span", function(event){
  //add fadeOut method with time and remove method
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  //stopPropagation to stop firing event in parent element till html
  event.stopPropagation();
});

//add keyPresse event to input
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    //extract input text to li
    var todoText = $(this).val();
    //clear input text
    $(this).val("");
    //create new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});
