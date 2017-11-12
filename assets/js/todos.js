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
$("li").click(function(){
  $(this).toggleClass("completed");
});
