// VARIABLES //
var celebArray = [
  "Ariana Grande",
  "Justin Bieber",
  "Beyonce",
  "Frank Ocean",
  "Bassnectar"
];

var gifName;
let button = "";
var newArr = {};
var still = "";
// var selImg = "";
var counter = 0;
var userInput;
var searchInput;
var rating;

function createButtons(){
  $("#buttons-group").empty();
  for (var i = 0; i < celebArray.length; i++) {
    let newDiv = $("<button>");
    newDiv.attr("class", "btn btn-sm btn-info p-2 mb-2 ml-2 mr-2 showGif");
    newDiv.attr('data-name', celebArray[i]);
    // newDiv.attr("value", celebArray[i]);
    newDiv.text(celebArray[i]);
    newDiv.attr("id", "btns");
    $("#buttons-group").append(newDiv);
  }
};

$("#submitBtn").on("click", function(){
  $("#buttons-group").empty();
  // $('gifs');
  userInput = $("#search-input").val().trim();
  celebArray.push(userInput);
  createButtons();
  return false;
});


function displayGifs(){
  var showGif = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q= " + showGif + "&api_key=aLmPTea54aoiKFEdYH3P5691MbyVaDJP";
  $.ajax({
    url: queryURL,
    type: "GET",
  }).done(function(response) {
    console.log(response.data);
    gifAmt = 10;
    for (var i = 0; i < 10; i++) {
      var selGif =
      '<img src= " ' +
      response.data[i].images.fixed_height_still.url +
      '" data-still=" ' +
      response.data[i].images.fixed_height_still.url +
      ' " data-animate=" ' +
      response.data[i].images.fixed_height.url +
      '" data-state="still" class="gif pr-3 pt-3 pl-3" style= "width:250px; height:250px">';
      rating =response.data[i].rating;

      $( '<figure id="outer">' +  selGif +  '<figcaption class=" text-center small">'+ 'rated: ' + rating +'</figcaption>' +'</figure>' ).appendTo( '#gifDiv');  
    }
  });
};



$(document).on('click', '.gif', function(){
      var state = $(this).attr("data-state");
      var still = $(this).attr("data-still");
      var src = $(this).attr("src");
      var animate = $(this).attr("data-animate");
      if (state === "still") {
        $(this).attr("src", animate);
        $(this).attr("data-state", "animate");
      } else if (state === "animate") {
        $(this).attr("src", still);
        $(this).attr("data-state", "still");
      }
});
  




$(document).on("click", ".showGif", displayGifs);

createButtons();


  // var rating = response.data[j].rating;
// console.log(response);
// var pRating = $("<p>").text("Rating: " + rating);
// displayDiv.append(pRating)
