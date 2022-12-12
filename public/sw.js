
  
// All the jobs that we want our service worker to do can be done in here
fetch('https://fakestoreapi.com/products')
.then((response) => response.json())
.then((data) => console.log(data));


  
  self.addEventListener('fetch', (event) => {
  

  
  });