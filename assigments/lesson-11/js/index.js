$(function() {
   var toggleStyle = function() {
   var inputFileds = $('input[type="text"]');
    if (inputFileds.css('background-color') === 'rgb(255, 255, 0)') {
      inputFileds.css('background-color', 'rgb(255, 255, 255)'); 
    } else {
       inputFileds.css('background-color', 'rgb(255, 255, 0)'); 
    }
  }

   $('#ReqAQuoteBtn').click(toggleStyle);

  })