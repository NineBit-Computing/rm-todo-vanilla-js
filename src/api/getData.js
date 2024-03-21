const URL_COUNTRIES_LIST = 'https://restcountries.com/v3.1/all';

function fetchData(url, done) {
  fetch(URL_COUNTRIES_LIST).then(function (apiresponse) {
    // console.log('------ ', data.json());
    return apiresponse.json();
  }).then(function (data) {
    console.log('------ ', data);
  }).catch(function (err) {

  });
}

function getData(url1, done) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // console.log('------xhr.responseText in JSON ', JSON.parse(xhr.responseText));
      const jsonData = JSON.parse(xhr.responseText);
      done(jsonData);
    }
  };
  xhr.open("GET", url1, true);
  xhr.send();
}

function getCountries(callback) {
  getData(URL_COUNTRIES_LIST, callback);
}

export { getCountries };