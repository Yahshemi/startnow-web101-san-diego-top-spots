$(document).ready(function () {
  $.getJSON("./data.json", function (data) {
    var items = [];
    $.each(data, function (key, val) {
      items.push(
        "<tr><td>" +
          val.name +
          "</td></tr>" +
          val.description +
          "</td><td><a target='_blank' href='https://www.google.com/maps?q=" +
          val.location +
          "'>link</a></td></tr>"
      );
    });
    $("table").append(items);
  });
});