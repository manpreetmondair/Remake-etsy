// createCard({
//     src: 'http://unsplash.it/400/300?image=500',
//     caption: 'Unknown Image'
// });

// createCard({
//     src: 'http://unsplash.it/400/300?image=600',
//     caption: 'Mystery'
// });

// createCard({
//     src: 'http://unsplash.it/400/300?image=700',
//     caption: 'Something'
// });

// createCard({
//     src: 'http://unsplash.it/400/300?image=800',
//     caption: 'Something'
// });
// createCard({
//     src: 'http://unsplash.it/400/300?image=900',
//     caption: 'Something'
// });
// createCard({
//     src: 'http://unsplash.it/400/300?image=1000',
//     caption: 'Something'
// });
// createCard({
//     src: 'http://unsplash.it/400/300?image=500',
//     caption: 'Something'
// });

createCard({
    src: './img/image2.jpg',
    caption: 'Taracea Chess Set - free shipping',
    writer: 'ElGranio',
    price: '$156.00'
});
createCard({
    src: './img/image1.jpg',
    caption: 'Taracea Chess Set - free shipping',
    writer: 'ElGranio',
    price: '$156.00'
});
createCard({
    src: './img/image1.jpg',
    caption: 'Taracea Chess Set - free shipping',
    writer: 'ElGranio',
    price: '$156.00'
});
createCard({
    src: './img/image4.jpg',
    caption: 'Taracea Chess Set - free shipping',
    writer: 'ElGranio',
    price: '$156.00'
});
createCard({
    src: './img/image1.jpg',
    caption: 'Taracea Chess Set - free shipping',
    writer: 'ElGranio',
    price: '$156.00'
});
createCard({
    src: './img/image1.jpg',
    caption: 'Taracea Chess Set - free shipping',
    writer: 'ElGranio',
    price: '$156.00'
});
createCard({
    src: './img/image1.jpg',
    caption: 'Taracea Chess Set - free shipping',
    writer: 'ElGranio',
    price: '$156.00'
});
createCard({
    src: './img/image1.jpg',
    caption: 'Taracea Chess Set - free shipping',
    writer: 'ElGranio',
    price: '$156.00'
});
createCard({
    src: './img/image1.jpg',
    caption: 'Taracea Chess Set - free shipping',
    writer: 'ElGranio',
    price: '$156.00'
});
createCard({
    src: './img/image1.jpg',
    caption: 'Taracea Chess Set - free shipping',
    writer: 'ElGranio',
    price: '$156.00'
});
createCard({
    src: './img/image1.jpg',
    caption: 'Taracea Chess Set - free shipping',
    writer: 'ElGranio',
    price: '$156.00'
});
createCard({
    src: './img/image1.jpg',
    caption: 'Taracea Chess Set - free shipping',
    writer: 'ElGranio',
    price: '$156.00'
});

function createCard(image) {
    var card = `<div class="col-sm-4 col-md-3">
        <div class="card">
        <img src="${image.src}" alt="Image" />
           <p class="card-caption">${image.caption}</p>
           <ul li class="writername col-sm-6">${image.writer}</ul>
            <ul li class="prices col-sm-3 col-sm-offset-2">${image.price}</ul>
           
        </div>
    </div>`;
    //  <ul class="list-inline">
    //                                 <li class="col-sm-6">ghsgdhs</li>
    //                                 <li class="col-sm-4 col-sm-offset-2">gsfgd</li>
    //                                 </ul>

    document.querySelector('#cards').innerHTML += card; 
}
