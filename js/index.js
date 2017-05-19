window.navsticky = false;
window.sidenavsticky = false;
window.plusclick = 0;
$(document).ready(function(){
  checkSticky();
  $(".menu-toggle").click(function(){
    $(".side-nav").slideToggle(100);
    if(window.sidenavsticky) {
      $(".top-nav").removeClass("sticky");
      window.sidenavsticky = false;
    }
    else {
      $(".top-nav").addClass("sticky");
      window.sidenavsticky = true;
    }
  });
  $(".interactive-image-container .plus").click(function(){
    displayPlusContent(this);
  });
  $(".interactive-image-container .closure").click(function(){
    closePlusContent(this);
  });
});
$(window).scroll(function(e){
  checkSticky();
});
function checkSticky(){
  if(window.scrollY > 160 && !window.navsticky) {
    $(".top-nav").addClass("sticky");
    window.navsticky = true;
  }
  else if (window.scrollY < 161 && !window.sidenavsticky) {
    $(".top-nav").removeClass("sticky");
    window.navsticky = false;
  }
}
function closePlusContent(obj){
  let thisclass = $(obj).parent(".dialog").prop("class");
  thisclass = thisclass.replace("dialog ","").replace("dialog-","");
  thisclass = ".interactive-image-container .plus." + thisclass;
  $(thisclass).click();
}
function displayPlusContent(obj){
  let thisclass = $(obj).prop("class");
  thisclass = thisclass.replace("plus pulse","").replace("plus","").replace("pulse","").replace(" ","");
  let temp = ["-","+"];
  $(".interactive-image-container .plus").not(obj).text("+");
  let thisText = $(obj).text();
  thisText = temp.indexOf(thisText) === 0 ? temp[1] : temp[0];
  $(obj).text(thisText);
  $(obj).toggleClass("pulse");
  let targetclass = ".interactive-image-container .dialog-" + thisclass;
  $(".interactive-image-container .dialog").not(targetclass).fadeOut(100);
  $(targetclass).fadeToggle(300);
}
