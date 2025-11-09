function themVaoGio(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let index = cart.findIndex(item => item.name === name);

    if (index >= 0) {
        cart[index].quantity += 1;
    } else {
        cart.push({ name, price, image, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Hiện thông báo Bootstrap Toast
    const toast = document.createElement("div");
    toast.className = "toast align-items-center text-bg-success border-0 show position-fixed bottom-0 end-0 m-3";
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">Đã thêm vào giỏ hàng!</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}
/*hàm mua ngay*/
function buyNow(name, price, image) {
    const item = { name, price, image, quantity: 1 };
    localStorage.setItem("buyNowItem", JSON.stringify(item));
    window.location.href = "thanhtoan.html"; // Trang thanh toán
}
