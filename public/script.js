$(function(){
  console.log('jquery loaded');

  $("button").on("click", function(){

    $.ajax({
      url: 'http://localhost:3000/balance',
      type: 'GET'
    }).done(function(response){
      var responseData = response;
      console.log(responseData);
      var htmlOutput = '<p>' + responseData.string + '</p><p>' + responseData.money + '</p>';
      $(".container").append(htmlOutput);
    });
  })
})
