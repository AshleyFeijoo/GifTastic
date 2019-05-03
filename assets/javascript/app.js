// VARIABLES //
var celebArray = [
    "Ariana Grande",
    "Justin Bieber",
    "Beyonce",
    "Frank Ocean",
    "Bassnectar",
];

var gifName = "Beyonce";
let button = '';
var newArr = {};
var still = '';
var selImg = '';
$(document).ready(function () {
    for (var i = 0; i < celebArray.length; i++) {
        let newDiv = $("<div>");
        newDiv.text(" + celebArray[i] + " );
    
        // newDiv.attr('src', '')
        // let button =  $("#buttons-group").append("<button type='button' onclick='searchGif(\"" + celebArray[i] + "\")' class='btn btn-primary' value=' " + celebArray[i] + "'> " + celebArray[i] + " </button>");
   
    }
    $


$.ajax({
        url: 'https://api.giphy.com/v1/gifs/search?q= ' + gifName + ' &api_key=aLmPTea54aoiKFEdYH3P5691MbyVaDJP',
        type: 'GET',
    })
    .done(function(response) {
        // var results = response.data;
        for (var i =0; i < response.data.length; i++){
            console.log(response.data)
           selImg = '<img src= " ' + response.data[i].images.fixed_height_still.url +
            '" data-still=" ' + response.data[i].images.fixed_height_still.url +
            ' " data-animate=" ' + response.data[i].images.fixed_height.url + '" data-state="still" class="gif" style= "width:250px; height:250px">';
            $("#gifDiv").append(selImg);
     
        }
        console.log(response);
    })



});