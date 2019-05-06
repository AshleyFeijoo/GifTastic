// VARIABLES //
var celebArray = [
    "Ariana Grande",
    "Justin Bieber",
    "Beyonce",
    "Frank Ocean",
    "Bassnectar"
  ];

  console.log(celebArray);
  var gifName;
  let button = "";
  var newArr = {};
  var still = "";
  var selImg = "";
  var counter =0;
  var userInput;
  var searchInput;
//   $(document).ready(function() {
  
    for (var i = 0; i < celebArray.length; i++) {
        counter ++;
      let newDiv = $("<button>");
      newDiv.text(celebArray[i]);
      newDiv.attr('class', 'btn btn-sm btn-info p-2 ml-2 mr-2')
      newDiv.attr('value', counter);
      newDiv.attr('id', 'btns')
      $("#buttons-group").append(newDiv);
    }
    $;
  
  // ============================+++++++++++++===========================//
    //pulls data from url and places gifs 
  // ============================+++++++++++++===========================//
  
    $.ajax({
      url:
        "https://api.giphy.com/v1/gifs/search?q= " +
        gifName +
        " &api_key=aLmPTea54aoiKFEdYH3P5691MbyVaDJP",
      type: "GET"
    }).done(function(response) {
        var gifAmt = response.data.length;
        
        console.log(gifAmt);
        gifAmt =10;
        console.log(gifAmt);
      for (var i = 0; i < 10; i++) {
        selImg =
          '<img src= " ' +
          response.data[i].images.fixed_height_still.url +
          '" data-still=" ' +
          response.data[i].images.fixed_height_still.url +
          ' " data-animate=" ' +
          response.data[i].images.fixed_height.url +
          '" data-state="still" class="gif" style= "width:250px; height:250px">';
        $("#gifDiv").append(selImg);
      }

          
  $(".gif").on("click", function() {
    if (state === "still"){
        $(this).attr('src', animate);
        $(this).attr('data-state', 'animate')
    } else if(state === 'animate'){
      $(this).attr('src', still);
        $(this).attr('data-state', 'still');
    };
});
  
      // $('.btn').on("click", function(response) {
      //     userInput = $(this).text()
      //      console.log(userInput);
      //      gifName = userInput;
      //  });
  
      //  $('.inputt').on("click", function(response){
      //      searchInput = $(this).val();
      //  });
  
  
    });
  
      //gif clicks////
  
  
  
  //clicking tag buttons will search giphy for the designated tag.
  
  
      ///search input
  
  //     $("#btns").on("click", function()){
  
  
  
  //     }
  
  //   });
  



  
          
  });
