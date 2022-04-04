//Hide Fieldset Content on Load
$("fieldset legend").click(function() {
  if ($(this).parent().children().length == 2)
    $(this).parent().find("div").toggle();
  else
  {
    $(this).parent().wrapInner("<div>");
    $(this).appendTo($(this).parent().parent());
    $(this).parent().find("div").toggle();
  }
});

//Toggle Custom Exercise Session from Checklists
$(document).ready(function() 
{
  $('[id^="exercise"]').click(function()
  {
      let id = $(this).attr('id');
      let num = /\d+/.exec(id)[0];
      $('#sessionDIV' + num).slideToggle();                  
  }); 
});

//How-to Info Modals
$(document).ready(function() 
{
  $('[id^="infoBtn"]').click(function()
  {
      let id = $(this).attr('id');
      let num = /\d+/.exec(id)[0];
      $('#modal' + num).slideToggle(); 
      
      let span = document.getElementsByClassName("close")[0];
      let modal = $("#modal" + num) [0];

      span.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
      modal.style.display = "none";
    }
} 
  });
});