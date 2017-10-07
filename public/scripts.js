const fetchName = () => {
  fetch('/api/v1/dan', {
    method: 'GET'
  })
  .then(data => data.json())
  .then(name => console.log('name', name))
  .catch(error => console.log('why you no work', error))
};


$('.button').on('click', fetchName)
