const partners = () => {

  const cardsRestaurants = document.querySelector('.cards-restaurants')

  const renderItems = (data) => {
    data.forEach((item) => {
      const { image, name,
        products, } = item
     
      const a = document.createElement('a')


      a.setAttribute('href', '/books.html')
      a.classList.add('card')
      a.classList.add('card-restaurant')
      a.dataset.products = products
    
      a.innerHTML = `
        <img src="${image}" alt="${name}" class="card-image" />
						<div class="card-text"> 
							 <div class="card-heading">
								 <h3 class="card-title">${name}</h3>               
						</div>
     						</div>						
`
      a.addEventListener('click', (e) => {
        e.preventDefault()




        localStorage.setItem('restaurant', JSON.stringify(item))

        window.location.href = '/books.html'
      })
      cardsRestaurants.append(a)


    });

  }

  fetch('./db/partners.json')
    .then((response) =>
      response.json())
    .then((data) => {
      renderItems(data)
    })
    .catch((error) => {
      console.log(error)
    })
}
partners()

