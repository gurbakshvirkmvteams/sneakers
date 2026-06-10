const incrementBtn = document.getElementById('incrementbtn')
const decrementBtn = document.getElementById('decrementbtn')
const qty = document.getElementById('qty')
var val = 0;
incrementBtn.addEventListener('click', () => {
    val++;
    qty.textContent = val;
})
decrementBtn.addEventListener('click', () => {
    if (val >= 1) {
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
})

// view cart section 
const cartBtnIcon = document.getElementById('cartBtnIcon')
const cartOverlay = document.getElementById('cartOverlay')
const emptyMessage = document.getElementById('emptyMessage')
const cartProductSection = document.getElementById('cartProductSection')
const cartOverlayContainer = document.querySelector('.cart-overlay-container')

cartBtnIcon.addEventListener('click', () => {
    cartOverlay.classList.toggle("cart-active")
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
                                    <span class="cart-price">$125.00</span>
                                    <span>x</span>
                                    <span class="cart-qty">1</span>
                                    <span class="cart-total">$125.00</span>
                                </div>

                            </div>
                            <div class="cart-delete-icon" id="cartEmpty">
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
    } else {
        cartOverlayContainer.innerHTML = 
                                        `
                                            <div class="empty-message" id="emptyMessage">
                                                <p>Your cart is empty</p>
                                            </div>
                                        `
    }
})

// empty cart button 
const cartEmpty = document.getElementById('cartEmpty')
console.log(cartEmpty)
// cartEmpty.addEventListener('click', ()=>{
//     alert('cart delete')
//     cart = 0;
//     cartOverlayContainer.innerHTML = 
//                                         `
//                                             <div class="empty-message" id="emptyMessage">
//                                                 <p>Your cart is empty</p>
//                                             </div>
//                                         `
// })