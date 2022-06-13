const search = () => {

  const inputSearch = document.querySelector('.input-search')

  const getData = async function (url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Ошибка по адресу ${url}, статус: ${response.status}`);
    }
    return response.json();
  };


  function init() {
    inputSearch.addEventListener('keypress', function (event) {
      if (event.charCode === 13) {
        const value = event.target.value;
        getData('./db/partners.json')
          .then(function (data) {
            return data.map(function (partner) {
              return partner.products;
            })
          })
          .then(function (linksProduct) {
            linksProduct.forEach(function (link) {
              getData(`./db/${link}`)
                .then(function (data) {
                  console.log(data);
                })
            })
          })
      }
    })
  }

  init();


  // function init() {

  //   inputSearch.addEventListener('keydown', function (event) {
  //     if (event.keyCode === 13) {
  //       const target = event.target;

  //       const value = target.value;

  //       const goods = [];
  //       getData('./db/partners.json')
  //         .then(function (data) {
  //           const products = data.map(function (item) {
  //             return item.products;
  //           })

  //           products.forEach(function (product) {
  //             getData(`./db/${product}`)
  //               .then(function (data) {
  //                 goods.push(...data)

  //                 const searchGoods = goods.filter(function (item) {
  //                   return item.name.includes(value)
  //                 })

  //                 console.log(searchGoods);

  //                 return searchGoods
  //               })
  //               .then(function(data){
  //                 data.forEach(createCardGood);
  //               })
  //           })
  //         })
  //     }
  //   })
  // }
  // init()









}
search();