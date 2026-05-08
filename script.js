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

    if (container) {

        services.forEach(service => {

            let div = document.createElement("div");

            div.className = "serviceBox";

            div.innerText = service;

            div.onclick = () => openWelcome(service);

            container.appendChild(div);
        });
    }

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

            element.classList.add("hidden");
        }
    });

    let backBtn = document.getElementById("backBtn");

    if (backBtn) {

        backBtn.classList.add("hidden");
    }
}

function showServices() {

    hideAll();

    let el = document.getElementById("services");

    if (el) {

        el.classList.remove("hidden");

        el.style.display = "grid";
    }

    let backBtn = document.getElementById("backBtn");

    if (backBtn) {

        backBtn.classList.remove("hidden");
    }
}

function showCleaning() {

    hideAll();

    let el = document.getElementById("cleaning");

    if (el) {

        el.classList.remove("hidden");

        el.style.display = "block";
    }

    let backBtn = document.getElementById("backBtn");

    if (backBtn) {

        backBtn.classList.remove("hidden");
    }
}

function showOffers() {

    hideAll();

    let el = document.getElementById("offers");

    if (el) {

        el.classList.remove("hidden");

        el.style.display = "grid";
    }

    let backBtn = document.getElementById("backBtn");

    if (backBtn) {

        backBtn.classList.remove("hidden");
    }
}

function showOrders() {

    hideAll();

    let el = document.getElementById("orders");

    if (el) {

        el.classList.remove("hidden");

        el.style.display = "block";
    }

    let backBtn = document.getElementById("backBtn");

    if (backBtn) {

        backBtn.classList.remove("hidden");
    }
}

function showAbout() {

    hideAll();

    let el = document.getElementById("about");

    if (el) {

        el.classList.remove("hidden");

        el.style.display = "block";
    }

    let backBtn = document.getElementById("backBtn");

    if (backBtn) {

        backBtn.classList.remove("hidden");
    }
}

function showComplaints() {

    hideAll();

    let el = document.getElementById("complaints");

    if (el) {

        el.classList.remove("hidden");

        el.style.display = "block";
    }

    let backBtn = document.getElementById("backBtn");

    if (backBtn) {

        backBtn.classList.remove("hidden");
    }
}

function showPrivacy() {

    hideAll();

    let el = document.getElementById("privacy");

    if (el) {

        el.classList.remove("hidden");

        el.style.display = "block";
    }

    let backBtn = document.getElementById("backBtn");

    if (backBtn) {

        backBtn.classList.remove("hidden");
    }
}

function openWelcome(service) {

    selectedService = service;

    hideAll();

    let el = document.getElementById("welcome");

    if (el) {

        el.classList.remove("hidden");

        el.style.display = "block";
    }

    let backBtn = document.getElementById("backBtn");

    if (backBtn) {

        backBtn.classList.remove("hidden");
    }
}

function showForm() {

    hideAll();

    let el = document.getElementById("formPage");

    if (el) {

        el.classList.remove("hidden");

        el.style.display = "block";
    }

    let backBtn = document.getElementById("backBtn");

    if (backBtn) {

        backBtn.classList.remove("hidden");
    }
}

function goHome() {

    hideAll();

    let el = document.getElementById("home");

    if (el) {

        el.classList.remove("hidden");

        el.style.display = "block";
    }
}

function sendComplaint() {

    let text = document.getElementById("complaintText");

    if (!text) return;

    let url =
        `https://wa.me/201143724475?text=${encodeURIComponent(text.value)}`;

    window.open(url, "_blank");
}

function sendOrder() {

    let name = document.getElementById("name");

    let phone = document.getElementById("phone");

    let message = document.getElementById("message");

    let location = document.getElementById("location");

    if (!name || !phone || !location) {

        alert("بعض الحقول غير موجودة");

        return;
    }

    let sendBtn = document.getElementById("sendBtn");

    if (
        name.value.trim() === "" ||
        phone.value.trim() === "" ||
        location.value.trim() === ""
    ) {

        alert("من فضلك اكتب الاسم ورقم التليفون والعنوان");

        return;
    }

    if (sendBtn) {

        sendBtn.disabled = true;

        sendBtn.innerText = "جاري الإرسال...";
    }

    let order = {

        service: selectedService,

        name: name.value,

        phone: phone.value,

        location: location.value,

        message: message ? message.value : "",

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
            name: name.value,
            phone: phone.value,
            location: location.value,
            message: message ? message.value : ""
        }
    )

    .then(function () {

    let successBox = document.createElement("div");

    successBox.style.position = "fixed";
    successBox.style.top = "50%";
    successBox.style.left = "50%";
    successBox.style.transform = "translate(-50%, -50%)";
    successBox.style.background = "#1e1e1e";
    successBox.style.color = "#fff";
    successBox.style.padding = "20px";
    successBox.style.borderRadius = "15px";
    successBox.style.zIndex = "9999";
    successBox.style.textAlign = "center";
    successBox.style.fontSize = "20px";
    successBox.style.width = "80%";
    successBox.style.maxWidth = "320px";
    successBox.style.boxShadow = "0 0 20px rgba(0,0,0,0.5)";

    successBox.innerHTML = `
        <div style="font-size:50px;margin-bottom:10px;">✅</div>
        <div>تم إرسال الطلب بنجاح</div>
    `;

    document.body.appendChild(successBox);

    setTimeout(() => {
        successBox.remove();
    }, 2500);

        name.value = "";

        phone.value = "";

        if (message) {

            message.value = "";
        }

        location.value = "";

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

    if (!container || !old) return;

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

    if (!container || !current) return;

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
