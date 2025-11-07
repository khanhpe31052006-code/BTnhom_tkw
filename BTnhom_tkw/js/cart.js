const emptyCart = document.getElementById("empty-cart");
const cartItems = document.getElementById("cart-items");
const cartList = document.getElementById("cart-list");
const subtotalEl = document.getElementById("subtotal");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
    if (cart.length === 0) {
        emptyCart.classList.remove("d-none");
        cartItems.classList.add("d-none");
        return;
    }

    emptyCart.classList.add("d-none");
    cartItems.classList.remove("d-none");

    cartList.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        cartList.innerHTML += `
        <div class="cart-item">
            <div class="item-info">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <p class="mb-0 fw-semibold">${item.name}</p>
                    <small class="text-muted">${item.price.toLocaleString()} đ</small>
                </div>
            </div>

            <div class="quantity-control">
                <button class="btn btn-outline-secondary btn-sm" onclick="giamSoLuong(${index})">−</button>
                <span>${item.quantity}</span>
                <button class="btn btn-outline-secondary btn-sm" onclick="tangSoLuong(${index})">+</button>
            </div>

            <div class="text-end">
                <span class="fw-semibold">${(item.price * item.quantity).toLocaleString()} đ</span>
                <button class="remove-btn ms-2" onclick="xoaSanPham(${index})">&times;</button>
            </div>
        </div>
        `;
    });

    subtotalEl.textContent = total.toLocaleString();
    localStorage.setItem("cart", JSON.stringify(cart));
}

function tangSoLuong(index) {
    cart[index].quantity++;
    renderCart();
}

function giamSoLuong(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function xoaSanPham(index) {
    if (confirm("Xóa sản phẩm này khỏi giỏ?")) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }
}
/*hàm thanh toán*/
function checkoutCart() {
    localStorage.setItem("checkoutFromCart", "true");
    window.location.href = "thanhtoan.html"; // Trang thanh toán
}
renderCart();
