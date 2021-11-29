import { fetchProduct } from "./api.js"
import { createProductItem, activateGallery, changeBtnState } from "./productItem.js"
import { addItemTokart } from './cart.js'

let addItem = addItemTokart()
let currentProductData = await fetchProduct()

document.body.querySelector('.product-container').appendChild(createProductItem(currentProductData))

activateGallery()
document.getElementById('addBtn').onclick = function (e) {
    addItem()
    changeBtnState()
}



