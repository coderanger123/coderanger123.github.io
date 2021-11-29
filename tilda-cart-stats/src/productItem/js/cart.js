export const addItemTokart = (id) => {
    //по хорошему лучше записывать id товаров в некий массив и пулять на бек
    let itemsInKart = 0

    return function increment() {
        itemsInKart++
        if (itemsInKart > 0) {
            document.querySelector('.counter').style.display = 'block'
        }

        else {
            document.querySelector('.counter').style.display = 'none'
        }

        document.querySelector('.counter').textContent = itemsInKart

    }
}