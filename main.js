const menuEmail= document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const productDetailCloseIcon= document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('#shoppingCartContainer')
const cardsContainer =document.querySelector('.cards-container')
const productDetailContainer =document.querySelector('#productDetail')

menuCarritoIcon.addEventListener('click',toggleCarritoAside)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuEmail.addEventListener('click', toggleDesktopMenu)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleCarritoAside(){
    const isMobileMenuClosed= mobileMenu.classList.toggle('inactive')
    const isDesktopMenuClosed= desktopMenu.classList.toggle('inactive')
    const isProductDetailClosed = productDetailContainer.classList.toggle('inactive')


    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }
    if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive')
    }


    aside.classList.toggle('inactive')

}
function toggleDesktopMenu(){
    const isAsideClosed= aside.classList.toggle('inactive')
    if (!isAsideClosed){
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')

}
function toggleMobileMenu(){
    const isAsideClosed= aside.classList.toggle('inactive')

    if (!isAsideClosed){
        aside.classList.add('inactive')
    }
    closeProductDetailAside()
    mobileMenu.classList.toggle('inactive')
}
function openProductDetailAside(){
    aside.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')

}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}

const productList =[];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Moto',
    price: 420,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Car',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Truck',
    price: 2000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})


function renderProducts(arr){
    for (product of arr){
        const productCard=document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg=document.createElement('img')
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', openProductDetailAside)

        const productInfo=document.createElement('div')
        productInfo.classList.add('product-info')
        const productInfoDiv=document.createElement('div')
       
        const productPrice=document.createElement('p')
        productPrice.innerText = '$' + product.price
        const productName=document.createElement('p')
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement('figure')
        const productImgCar = document.createElement('img') 
        productImgCar.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCar)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
        
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}
renderProducts(productList)