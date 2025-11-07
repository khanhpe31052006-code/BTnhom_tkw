function loadHeaderVaFooter() {
    // --- Header ---
    const headerHTML = `
        <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container">
            <a class="navbar-brand fw-bold" href="trangchu.html"><i class="fa fa-leaf"></i> COCOON</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
                <span class="navbar-toggler-icon" style="filter:invert(1)"></span>
            </button>

            <div class="collapse navbar-collapse" id="nav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item"><a class="nav-link" href="trangchu.html">Trang chủ</a></li>
                    <li class="nav-item"><a class="nav-link" href="sanpham.html">Sản phẩm</a></li>
                    <li class="nav-item"><a class="nav-link" href="khuyenmai.html">Khuyến mãi</a></li>
                    <li class="nav-item"><a class="nav-link" href="lienhe.html">Liên hệ</a></li>
                </ul>
                <form class="d-flex me-2">
                    <input class="form-control form-control-sm" type="search" placeholder="Tìm kiếm...">
                </form>
                <a class="btn btn-sm btn-light" href="giohang.html"><i class="fa fa-shopping-cart"></i></a>
            </div>
        </div>
    </nav>
    `;

    // --- Footer ---
    const footerHTML = `
    <footer>
        © 2025 Cocoon Việt Nam • <i class="fa fa-leaf"></i> Thuần chay – Tự nhiên – Hiệu quả
    </footer>
    `;

    // Gắn vào trang
    document.getElementById("header").innerHTML = headerHTML;
    document.getElementById("footer").innerHTML = footerHTML;
}
/*hàm mua ngay*/
function buyNow(name, price, image) {
    const item = { name, price, image, quantity: 1 };
    localStorage.setItem("buyNowItem", JSON.stringify(item));
    window.location.href = "thanhtoan.html"; // Trang thanh toán
}
window.onload = loadHeaderVaFooter;
