import React from 'react'
import axios from "axios";
function App() {

  
  const options = {
    method: 'GET',
    url: 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup/',
    params: {term: 'bojack', country: 'uk'},
    headers: {
      'x-rapidapi-key': '8c71aa6288mshf8d721368e32656p1f7f47jsnffd8e8f430e1',
      'x-rapidapi-host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  return (
    <div className="App">
      123

    </div>
  );
}

export default App;
