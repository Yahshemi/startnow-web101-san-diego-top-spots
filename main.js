$(document).ready(function () {
    $.getJSON("./data.json", function (data) {
        var items = [];
        $.each(data, function (key, val) {
            items.push("<tr><td>" + val.name + "</td></tr>" + val.description + "</td><td><a target='_blank' href='https://www.google.com/maps?q=" + val.location + "'>link</a></td></tr>");
        });
        $('table').append(items);

    });
    // write your code here

    //Use the $.getJSON method to download the contents of the data.json file.
    //Iterate through the top spots and create a table row for each spot.
    //Create a link to the location using the longitude and latitude 
    //provided. (Example https://www.google.com/maps?q=33.09745,-116.99572)
    //jQuery.getJSON( "./data.json", [, data ] [, success ] )
    //});
});




   
       
       
        
   