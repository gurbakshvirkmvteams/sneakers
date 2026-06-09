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
