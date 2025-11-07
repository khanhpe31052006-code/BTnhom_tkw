const checkoutItems = document.getElementById("checkout-items");
const checkoutTotal = document.getElementById("checkout-total");
const subtotalEl = document.getElementById("subtotal");
const discountEl = document.getElementById("discount");

let items = [];
let subtotal = 0;
let discount = 0;
// thẻ giảm giá 
const coupons = {
    "SALE10": 0.1,
    "GIAM20": 0.2,
    "FREESHIP": 0.05,
    "10DIEM": 1, //1 = 100% giảm giá
    "COCOONFAKE": 0.2, //0.2 = 20%
    "JOJO": 0.0001
};

// Lấy dữ liệu từ localStorage
if (localStorage.getItem("checkoutFromCart")) {
    items = JSON.parse(localStorage.getItem("cart")) || [];
    localStorage.removeItem("checkoutFromCart");
} else if (localStorage.getItem("buyNowItem")) {
    items = [JSON.parse(localStorage.getItem("buyNowItem"))];
    localStorage.removeItem("buyNowItem");
}

// Hiển thị danh sách sản phẩm (có hình ảnh)
function renderCheckout() {
    checkoutItems.innerHTML = "";
    subtotal = 0;

    items.forEach(item => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
      <div class="d-flex align-items-center">
        <img src="${item.image}" alt="${item.name}" style="width:60px;height:60px;object-fit:cover;margin-right:10px;border-radius:8px;">
        <div>
          <div>${item.name}</div>
          <small class="text-muted">Số lượng: ${item.quantity}</small>
        </div>
      </div>
      <strong>${(item.price * item.quantity).toLocaleString()}₫</strong>
    `;
        checkoutItems.appendChild(li);
        subtotal += item.price * item.quantity;
    });

    subtotalEl.textContent = subtotal.toLocaleString() + "₫";
    updateTotal();
}

function updateTotal() {
    const total = subtotal - discount;
    checkoutTotal.textContent = total.toLocaleString() + "₫";
    discountEl.textContent = discount > 0 ? `-${discount.toLocaleString()}₫` : "0₫";
}

// Áp dụng mã giảm giá
document.getElementById("apply-coupon").addEventListener("click", () => {
    const code = document.getElementById("coupon-code").value.trim().toUpperCase();
    if (coupons[code]) {
        discount = Math.round(subtotal * coupons[code]);
        alert(`Mã "${code}" được áp dụng. Giảm ${coupons[code] * 100}%`);
    } else {
        discount = 0;
        alert("Mã giảm giá không hợp lệ!");
    }
    updateTotal();
});

renderCheckout();

// Xử lý form đặt hàng
document.getElementById("checkout-form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Đặt hàng thành công! Cảm ơn bạn đã mua sắm.");
    localStorage.removeItem("cart");
    window.location.href = "trangchu.html";
});
