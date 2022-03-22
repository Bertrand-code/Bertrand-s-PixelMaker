//Changing color and font-size by using DOM concept

const colorChange=document.getElementById('divPicker');
colorChange.style.backgroundColor= "crimson";

// Using getElementById

const submit=document.getElementById('submitbutton');
submit.style.backgroundColor="yellow";
submit.style.fontSize="18pt";

//https://api.jquery.com/submit/

// jQuery
$('#sizePicker').submit(function(event) {
    event.preventDefault();
   let height=$('#inputHeight').val();
   let width=$('#inputWidth').val();
   makeGrid(height, width);
    

})
// When size is submitted by the user, call makeGrid()


// Use of function &&jQuery

function makeGrid(height, width) {
   $('tr').remove();
   $('td').remove();

   // Adding loops to the function statement. 

    for (let i=1; i<=height; i++){

     //Appending table rows & jQuery

        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (let m=1; m <=width ; m++){

            //Appending table data

            $('#table' + i).append('<td></td');
        }
    }
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this


    // Adding functions to table data to give function and style & jQuery


    $('td').mousemove(function addColor() {
        mouseColor=$('#colorPicker').val();


    // Use of conditions & jQuery


        if ($(this).attr('style')) {
            $(this).removeAttr('style');
        }else {$(this).attr('style', 'background-color :' + mouseColor);

        }
    })
}

