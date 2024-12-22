console.log('Hello from Parcel!');

fetch('http://localhost:3000/calculate')
  .then(response => response.json())
  .then(data => console.log(data));
