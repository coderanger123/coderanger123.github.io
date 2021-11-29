export const createProductItem = ({ title, descr, price, priceold, quantity, images }) => {
    let productItem = document.createElement('div')

    images = JSON.parse(images)

    let mainImg = `<div class="main">
<img src="${images[0].img}" alt="product-photo">
    </div>`

    let thumbs = images.map((current, index) => {
        return `<a><img src="${current.img}" alt="product-photo"></a>`
    })

    productItem.classList.add('product-item')

    productItem.innerHTML = `
<div class="photo-container">
  ${mainImg}
     <div class="thumbs">
      ${thumbs}
    </div>
</div>
<div class="info">
    <h2 class="title">
        ${title}
    </h2>
    <div class="price">${priceold && quantity ? `<span class="old">${priceold}</span>` : ''}<span class="current">${quantity ? `${price}$` : 'sold out'}</span></div>
    <p>${descr}</p>
    <button ${quantity ? '' : 'disabled'} id="addBtn" class="btn">add to cart</button>
</div>`

    return productItem
}
export const changeBtnState = () => {
    const btn = document.getElementById('addBtn')
    btn.textContent = 'go to cart'
    btn.disabled = true

}

export const activateGallery = () => {

    document.querySelector('.thumbs').onclick = function (event) {

        let thumbnail = event.target.closest('a').children[0]
        if (!thumbnail) return
        showThumbnail(thumbnail.src, thumbnail.alt);
        event.preventDefault()
    }

    function showThumbnail(href, title) {

        document.querySelector('.main').children[0].src = href
        document.querySelector('.main').children[0].alt = title
    }
}


