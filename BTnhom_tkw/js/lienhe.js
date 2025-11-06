document.getElementById("form-cocoon").addEventListener("submit", function(e) {
    e.preventDefault();
    let hopLe = true;

    const truong = [
        { id: "ten", rule: v => v.trim() !== "" },
        { id: "sdt", rule: v => /^[0-9]{9,11}$/.test(v) },
        { id: "email", rule: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
        { id: "cau-hoi", rule: v => v.trim() !== "" }
    ];

    truong.forEach(t => {
        const el = document.getElementById(t.id);
        const nhom = el.parentElement;

        if (!t.rule(el.value)) {
            nhom.classList.add("loi");
            nhom.querySelector(".tb-loi").style.display = "block";
            hopLe = false;
        } else {
            nhom.classList.remove("loi");
            nhom.querySelector(".tb-loi").style.display = "none";
        }
    });

    if (hopLe) {
        window.location.href = "camon.html";
    }
});
