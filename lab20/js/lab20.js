//This code barely works
//(function getComic() {
$.ajax({
  url: "https://xkcd.com/614/info.0.json",
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
