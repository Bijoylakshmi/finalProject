function cat(data) {                           // Callback when JSON loads
  var newContent = '';                                // Variable to hold HTML

    // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
    //for (var i = 0; i < data.events.length; i++) {    // Loop through object
     newContent += '<table class="event table table-bordered">';
     newContent += '<tr><td>Location</td><td>' + data.name + '</td></tr>';
     newContent += '<tr><td>Temperature</td><td>' + data.main.temp + '%</td></tr>';
     newContent += '<tr><td>Weather</td><td>' + data.weather[0].main + data.clouds.all + '%</td></tr>';
     newContent += '<tr><td>Wind Degree</td><td>' + data.wind.deg + '&deg;C</td></tr>';
     newContent += '<tr><td>Humidity</td><td>' + data.main.humidity + '%</td></tr>';
     newContent += '</table>';
    //}

    // Update the page with the new content
    document.getElementById('content').innerHTML = newContent;
}
