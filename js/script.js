'use strict';

var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

// function searchCountries 
function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';

    fetch(url + countryName)
        .then(function(resp) {
           return resp.json();
        })
        .then(showCountriesList);
}


function showCountriesList(resp){
    countriesList.innerHTML = '';
    
    resp.forEach(function(item) {
      //  var liEl = document.createElement('li');
      //  var liE2 = document.createElement('li');
      //  liEl.innerText = item.name;
      //  liE2.innerText = item.capital;
       
      //  countriesList.appendChild(liEl);
      //  countriesList.appendChild(liE2);
      item.name;
      item.capital;
      item.population;
      item.nativeName;

    var all = `<li>${item.name}</li> <li>${item.capital}</li> <li>${item.population}</li> <li>${item.nativeName}</li>`;
                




      countriesList.innerHTML = all;




    });
}