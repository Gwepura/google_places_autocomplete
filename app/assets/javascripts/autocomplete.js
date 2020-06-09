$(document).on('turbolinks:load', function() {
  function initializeAutocomplete(id) {
    var element = document.getElementById(id);
    if (element) {
      var autocomplete = new google.maps.places.Autocomplete(element, { types: ['geocode'], componentRestrictions: {country: 'za'} });
      google.maps.event.addListener(autocomplete, 'place_changed', onPlaceChanged);
    }
  }
  
  function onPlaceChanged() {
    var place = this.getPlace();
    
    document.getElementById('autocomplete_line_1').value = place.address_components[0].long_name + " " + place.address_components[1].long_name;
    document.getElementById('autocomplete_suburb').value = format_suburb(place.address_components[2].long_name, place.address_components[3].long_name)
    document.getElementById('autocomplete_city').value = place.address_components[3].long_name;
    document.getElementById('autocomplete_province').value = place.address_components[5].long_name;
    document.getElementById('autocomplete_postal_code').value = place.address_components[7].long_name;
  }
  
  function format_suburb(full_suburb, city) {
    return full_suburb.includes(city) ?  full_suburb.substr(city.length + 1, full_suburb.length - 1) : full_suburb;
  }
  
  
  
  google.maps.event.addDomListener(window, 'load', function() {
    document.getElementById('address_capture').reset();
    initializeAutocomplete('autocomplete_line_1');
  });
});