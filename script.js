


let selectedService = "";

const services = [
    "نقاش محترف",
    "شغل على المحارة",
    "دهان قديم",
    "رطوبة",
    "أخشاب",
    "أستر",
    "لاكيه",
    "دوكو",
    "ديكور",
    "ورق حائط",
    "إيبوكسي",
    "حجر مايكا",
    "بديل رخام",
    "بديل خشب",
    "واجهات",
    "مرمات محارة",
    "دهانات بتينة",
    "دهانات مطابخ",
    "دهانات صالون دهبي",
    "عزل أسطح"
];

window.onload = function () {

    let container = document.getElementById("services");

    services.forEach(service => {
        let div = document.createElement("div");

        div.className = "serviceBox";
        div.innerText = service;

        div.onclick = () => openWelcome(service);

        container.appendChild(div);
    });

    goHome();

    let ordersBtn = document.querySelector(".bottomNav div:nth-child(4)");

    if (ordersBtn) {

        let pressTimer;

        ordersBtn.addEventListener("touchstart", function () {

            pressTimer = setTimeout(function () {

                let btn = document.getElementById("clearOrdersBtn");

                if (btn) {
                    btn.classList.toggle("hidden");
                }

            }, 1200);

        });

        ordersBtn.addEventListener("touchend", function () {
            clearTimeout(pressTimer);
        });
    }

    let slides = document.querySelectorAll(".slide");

    let index = 0;

    function showSlide() {

        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        index++;

        if (index >= slides.length) {
            index = 0;
        }

        slides[index].classList.add("active");
    }

    if (slides.length > 0) {
        slides[0].classList.add("active");
        setInterval(showSlide, 3000);
    }
};

function toggleMenu() {

    let menu = document.getElementById("menuList");

    if (menu) {
        menu.style.display =
            menu.style.display === "block" ? "none" : "block";
    }
}

function closeMenu() {

    let menu = document.getElementById("menuList");

    if (menu) {
        menu.style.display = "none";
    }
}

document.addEventListener("click", function (e) {

    let menu = document.getElementById("menuList");

    let icon = document.querySelector(".menuIcon");

    if (
        menu &&
        icon &&
        !menu.contains(e.target) &&
        !icon.contains(e.target)
    ) {
        menu.style.display = "none";
    }
});

function hideAll() {

    let sections = [
        "home",
        "services",
        "cleaning",
        "offers",
        "orders",
        "complaints",
        "about",
        "privacy",
        "welcome",
        "formPage"
    ];

    sections.forEach(id => {

        let element = document.getElementById(id);

        if (element) {
            element.style.display = "none";
        }
    });

    let backBtn = document.getElementById("backBtn");

    if (backBtn) {
        backBtn.classList.add("hidden");
    }
}

function showServices() {

    hideAll();

    document.getElementById("services").style.display = "grid";

    document.getElementById("backBtn").classList.remove("hidden");
}

function showCleaning() {

    hideAll();

    document.getElementById("cleaning").style.display = "block";

    document.getElementById("backBtn").classList.remove("hidden");
}

function showOffers() {

    hideAll();

    document.getElementById("offers").style.display = "grid";

    document.getElementById("backBtn").classList.remove("hidden");
}

function showOrders() {

    hideAll();

    document.getElementById("orders").style.display = "block";

    document.getElementById("backBtn").classList.remove("hidden");
}

function showAbout() {

    hideAll();

    document.getElementById("about").style.display = "block";

    document.getElementById("backBtn").classList.remove("hidden");
}

function showComplaints() {

    hideAll();

    document.getElementById("complaints").style.display = "block";

    document.getElementById("backBtn").classList.remove("hidden");
}

function showPrivacy() {

    hideAll();

    document.getElementById("privacy").style.display = "block";

    document.getElementById("backBtn").classList.remove("hidden");
}

function openWelcome(service) {

    selectedService = service;

    hideAll();

    document.getElementById("welcome").style.display = "block";

    document.getElementById("backBtn").classList.remove("hidden");
}

function showForm() {

    hideAll();

    document.getElementById("formPage").style.display = "block";

    document.getElementById("backBtn").classList.remove("hidden");
}

function goHome() {

    hideAll();

    document.getElementById("home").style.display = "block";
}

function sendComplaint() {

    let text = document.getElementById("complaintText").value;

    let url =
        `https://wa.me/201143724475?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
}

function sendOrder() {

    let name = document.getElementById("name").value.trim();

    let phone = document.getElementById("phone").value.trim();

    let message = document.getElementById("message").value.trim();

    let location = document.getElementById("location").value.trim();

    let sendBtn = document.getElementById("sendBtn");

    if (name === "" || phone === "" || location === "") {

        alert("من فضلك اكتب الاسم ورقم التليفون والعنوان");

        return;
    }

    if (sendBtn) {
        sendBtn.disabled = true;
        sendBtn.innerText = "جاري الإرسال...";
    }

    let order = {
        service: selectedService,
        name: name,
        phone: phone,
        location: location,
        message: message,
        date: Date.now()
    };

    let orders =
        JSON.parse(localStorage.getItem("orders") || "[]");

    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));

    emailjs.send(
        "service_94l7und",
        "template_zoftj6d",
        {
            service: selectedService,
            name: name,
            phone: phone,
            location: location,
            message: message
        }
    )

    .then(function () {

        alert("تم إرسال الطلب بنجاح");

        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
        document.getElementById("location").value = "";

        if (sendBtn) {
            sendBtn.disabled = false;
            sendBtn.innerText = "إرسال الطلب";
        }

        goHome();
    })

    .catch(function (error) {

        alert("حدث خطأ أثناء الإرسال");

        console.log(error);

        if (sendBtn) {
            sendBtn.disabled = false;
            sendBtn.innerText = "إرسال الطلب";
        }
    });
}

function contactUs() {

    window.open(
        "https://wa.me/201143724475",
        "_blank"
    );
}

function showCurrentOrders() {

    let container = document.getElementById("currentOrders");

    let old = document.getElementById("oldOrders");

    old.classList.add("hidden");

    container.classList.remove("hidden");

    let orders =
        JSON.parse(localStorage.getItem("orders") || "[]");

    container.innerHTML = "";

    let now = Date.now();

    orders.forEach(order => {

        let diff =
            (now - order.date) / (1000 * 60 * 60 * 24);

        if (diff < 10) {

            let div = document.createElement("div");

            div.className = "orderBox";

            div.innerHTML = `
            الخدمة: ${order.service}<br>
            الاسم: ${order.name}<br>
            العنوان: ${order.location}
            `;

            container.appendChild(div);
        }
    });

    if (container.innerHTML === "") {

        container.innerHTML =
            "لا يوجد طلبات تحت التنفيذ";
    }
}

function showOldOrders() {

    let container = document.getElementById("oldOrders");

    let current = document.getElementById("currentOrders");

    current.classList.add("hidden");

    container.classList.remove("hidden");

    let orders =
        JSON.parse(localStorage.getItem("orders") || "[]");

    container.innerHTML = "";

    let now = Date.now();

    orders.forEach(order => {

        let diff =
            (now - order.date) / (1000 * 60 * 60 * 24);

        if (diff >= 10) {

            let div = document.createElement("div");

            div.className = "orderBox";

            div.innerHTML = `
            الخدمة: ${order.service}<br>
            الاسم: ${order.name}<br>
            العنوان: ${order.location}
            `;

            container.appendChild(div);
        }
    });

    if (container.innerHTML === "") {

        container.innerHTML =
            "لا يوجد طلبات سابقة";
    }
}

function clearOrders() {

    if (confirm("هل تريد مسح كل الطلبات؟")) {

        localStorage.removeItem("orders");

        alert("تم مسح كل الطلبات");

        showOrders();
    }
}
