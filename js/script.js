$(function() {
    var url = 'https://restcountries.eu/rest/v2/name/';
    var countriesList = $('#countries');
    $('#search').click(searchCountries);
    
    function searchCountries() {
        var countryName = $('#country-name').val(); 
        
        if(!countryName.length) countryName = 'Poland';
        $.ajax({
  		    url: url + countryName,
  		    method: 'GET',
  		    success: showCountriesList
  	    });
    }
    
    function showCountriesList(resp) {
        countriesList.empty();
        
        resp.forEach(function(item){
            
            countriesList.append("<div></div>");
            $("div:last").addClass("country-" + resp.indexOf(item));
            var newDiv = $(".country-" + resp.indexOf(item));
   
            $('<h3>').text(item.name).appendTo(newDiv);
            $('<img>').attr('src', item.flag).appendTo(newDiv);
            $('<p>').text('Capital: ' + item.capital).appendTo(newDiv);
            $('<p>').text('Area: ' + item.area).appendTo(newDiv);
            $('<p>').text('Region: ' + item.region).appendTo(newDiv);
            $('<p>').text('Currency: ' + item.currencies[0].name).appendTo(newDiv);
                 
        });
    }
});
