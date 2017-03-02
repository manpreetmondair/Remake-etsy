var items = [];

document.querySelector('#searchbutton').addEventListener('click', getSearchResults);
document.querySelector('#search').addEventListener('keypress', function(e) {
    // console.log(e);
    if (e.key === 'Enter') {
        getSearchResults();
    }
});

getSearchResults();

function getSearchResults() {
    var searchTerm = document.querySelector('#search').value;

    if (searchTerm !== '') {
        fetch('https://thinksaydo.com/tiyproxy.php?https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent(searchTerm) + '&includes=Images,Shop')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            items = data.results;
            createResultCards();
        });
    }
}

function createResultCards() {
    document.querySelector('#cards').innerHTML = '';

    // Loop over the users array, one by one, passing each user into our function as "user"
    items.forEach(function(item) {
       createCard(item);
    });
}

function createCard(image) {
    var card = `<div class="col-sm-4 col-md-3">
        <div class="card">
        <img src="${image.Images[0].url_75x75}" alt="Image" />
           <p class="card-caption">${image.title.slice(0,20)}...</p>
            <div>
                    <span class="text-muted">${image.Shop.shop_name}</span>
                    <span class="text-success pull-right">${'$'}${image.price}</span>
                </div>
           
        </div>
    </div>`;

    document.querySelector('#cards').innerHTML += card; 
}
