const incrementBtn = document.getElementById('incrementbtn')
const decrementBtn = document.getElementById('decrementbtn')
const qty = document.getElementById('qty')
const price = 125
var val = 1;
incrementBtn.addEventListener('click', () => {
    val++;
    qty.textContent = val;
})
decrementBtn.addEventListener('click', () => {
    if (val >= 2) {
        val--;
        qty.textContent = val;
    }
})

// navbar sidebar
const closeSidebar = document.getElementById('closeSidebar')
const hamburger = document.getElementById('hamburger')
const sidebar = document.getElementById('sidebar')
hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('nav-active')
})
closeSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('nav-active')
})

// cart logic 
const addToCart = document.getElementById('addToCart')
const cartQtyIcon = document.getElementById('cartQtyIcon')
var cart = 0;
addToCart.addEventListener('click', () => {
    if (val > 0) {
        cart += val
    }
    else {
        cart++
    }
    cartQtyIcon.innerText = cart;
     cartOverlay.classList.add("cart-active")
    cartProduct()
})

// view cart section 
const cartBtnIcon = document.getElementById('cartBtnIcon')
const cartOverlay = document.getElementById('cartOverlay')
const emptyMessage = document.getElementById('emptyMessage')
const cartProductSection = document.getElementById('cartProductSection')
const cartOverlayContainer = document.querySelector('.cart-overlay-container');

const cartProduct = () =>{
if (cart > 0) {
        cartOverlayContainer.innerHTML =
            `
                        <div class="cart-product-section" id="cartProductSection">
                            <div class="cart-product-img">
                                <span><img src="assets/image-product-1.jpg" alt="products" /></span>
                            </div>
                            <div class="cart-middle-section">
                                <div class="cart-description">Autumn Limited Edition Sneakers</div>
                                <div class="cart-price-section">
                                    <span class="cart-price">$${price}</span>
                                    <span>x</span>
                                    <span class="cart-qty">${cart}</span>
                                    <span class="cart-total">$${price * cart}</span>
                                </div>
                            </div>
                            <div class="cart-delete-icon" id="cartEmpty" >
                                <span>
                                    <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <defs>
                                            <path
                                                d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                                                id="a" />
                                        </defs>
                                        <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    `
        const cartEmpty = document.getElementById('cartEmpty');
        cartEmpty.addEventListener('click', () => {
            cart = 0;
            cartQtyIcon.innerText = cart;
            cartOverlayContainer.innerHTML =
                `
                    <div class="empty-message" id="emptyMessage">
                        <p>Your cart is empty</p>
                    </div>
                `
        })
    } else {
        cartOverlayContainer.innerHTML =
            `
                                            <div class="empty-message" id="emptyMessage">
                                                <p>Your cart is empty</p>
                                            </div>
                                        `
    }
}
cartBtnIcon.addEventListener('click', () => {
    cartOverlay.classList.toggle("cart-active")
    cartProduct()
})

// products overlay toggle
const mainImage = document.getElementById('mainImage');
const productPreviewOverlay = document.getElementById('productPreviewOverlay')
const closeProductPreview = document.getElementById('closeProductPreview')
mainImage.addEventListener('click', () => {
    productPreviewOverlay.classList.toggle('cart-active')
})
closeProductPreview.addEventListener('click', () => {
    productPreviewOverlay.classList.toggle('cart-active')
})

// preview-image-btns
const previewImageBtns = document.querySelectorAll('.preview-image-btns');
const previewMainImg = document.getElementById('previewMainImg');
previewImageBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        previewImageBtns.forEach((btn) => {
            btn.classList.remove('img-btn-active')
        })
        btn.classList.add('img-btn-active')
        let imgLocation = btn.innerHTML
        previewMainImg.innerHTML = imgLocation
    });
})

const imageBtns = document.querySelectorAll('.image-btns')
imageBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        imageBtns.forEach((btn) => {
            btn.classList.remove('img-btn-active')
        })
        btn.classList.add('img-btn-active')
        let imgLocation = btn.innerHTML
        mainImage.innerHTML = imgLocation
    })
})

//slider buttons
const sliderBtnRight = document.getElementById('sliderBtnRight')
const sliderBtnLeft = document.getElementById('sliderBtnLeft')
const overlaysliderBtnRight = document.getElementById('overlaysliderBtnRight')
const overlaysliderBtnLeft = document.getElementById('overlaysliderBtnLeft')

// console.log(imageBtns[1].innerHTML)
let index = 0
updateimg = () => {
    previewMainImg.innerHTML = previewImageBtns[index].innerHTML;
    mainImage.innerHTML = imageBtns[index].innerHTML;
       previewImageBtns.forEach((img)=>{
        img.classList.remove('img-btn-active')
       })
       previewImageBtns[index].classList.add('img-btn-active')
}
increaseIndex = () => {
    index++;
    if (index >= imageBtns.length) {
        index = 0;
    }
    updateimg();
}
decreaseIndex = () => {
    if (index > 0) {
        index--;
    }
    updateimg();
}
sliderBtnRight.addEventListener("click", () => {
    increaseIndex()
});
overlaysliderBtnRight.addEventListener("click", () => {
    increaseIndex()
});
sliderBtnLeft.addEventListener("click", () => {
    decreaseIndex()
});
overlaysliderBtnLeft.addEventListener("click", () => {
    decreaseIndex()
});