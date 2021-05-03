//This code barely works
//(function getComic() {
$.ajax({
  dataType: 'json',
  url: "http://apod.nasa.gov",
  data: 'at8C2QbEldz0xCopFzRPUhgFU8MVeJlvFeeihM5a',
  method: "GET",
  success: function(data){
    console.log(data);
    $("h3").html(data.title);
    $(".rs").html(data.alt);
    var comicNum = data.num;
    var newImage = $("<img>");
    newImage.attr("src", data.img);
    $(".res").append(newImage);

    // add event listener to new pev button
    $("#prev").click(function(){
      getComic(data.num - 1);
    });

    // add event listener to new next button
    $("#next").click(function(){
      getComic(data.num + 1);
    });

  }

});
//})
//}
