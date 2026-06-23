// ========== Sample Style Data ==========
const styles = [
    {
        id: 1,
        name: "Classic Navy Suit",
        desc: "Two-piece single-breasted suit in navy wool.",
        category: "suits",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=300&fit=crop",
    },
    {
        id: 2,
        name: "Charcoal Business Suit",
        desc: "Sharp charcoal grey suit for the modern professional.",
        category: "suits",
        image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&h=300&fit=crop",
    },
    {
        id: 3,
        name: "Ivory Wedding Suit",
        desc: "Elegant double-breasted ivory suit for special occasions.",
        category: "suits",
        image: "https://images.unsplash.com/photo-1602810316693-3667c854239a?w=400&h=300&fit=crop",
    },
    {
        id: 4,
        name: "Embroidered Kurta",
        desc: "Hand-embroidered cotton kurta with mandarin collar.",
        category: "traditional",
        image: "https://images.unsplash.com/photo-1598965402089-897f2652b1e9?w=400&h=300&fit=crop",
    },
    {
        id: 5,
        name: "Silk Sherwani",
        desc: "Royal maroon silk sherwani with gold detailing.",
        category: "traditional",
        image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&h=300&fit=crop",
    },
    {
        id: 6,
        name: "Linen Dhoti Kurta",
        desc: "Lightweight linen kurta paired with dhoti pants.",
        category: "traditional",
        image: "https://images.unsplash.com/photo-1598965402089-897f2652b1e9?w=400&h=300&fit=crop",
    },
    {
        id: 7,
        name: "Casual Linen Shirt",
        desc: "Breathable white linen shirt — perfect for summer.",
        category: "casual",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=300&fit=crop",
    },
    {
        id: 8,
        name: "Tailored Chinos",
        desc: "Slim-fit beige chinos that pair with anything.",
        category: "casual",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=300&fit=crop",
    },
    {
        id: 9,
        name: "Wool Blazer",
        desc: "Unstructured brown blazer for smart-casual looks.",
        category: "casual",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=300&fit=crop",
    },
];

// ========== Render Gallery ==========
const grid = document.getElementById("galleryGrid");
const filterBtns = document.getElementById("filterBtns");

function render(filter = "all") {
    const filtered = filter === "all" ? styles : styles.filter(s => s.category === filter);
    grid.innerHTML = filtered.map(s => `
        <div class="card">
            <img src="${s.image}" alt="${s.name}" loading="lazy" />
            <div class="card-body">
                <h3>${s.name}</h3>
                <p>${s.desc}</p>
            </div>
        </div>
    `).join("");
}

// ========== Filter Logic ==========
filterBtns.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn || btn.dataset.filter === undefined) return;

    filterBtns.querySelectorAll("button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    render(btn.dataset.filter);
});

// ========== Request Form ==========
const form = document.getElementById("requestForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = data.get("name")?.trim();
    const email = data.get("email")?.trim();

    formMsg.textContent = `Thanks, ${name || "there"}! We'll reach out at ${email || "your email"} shortly.`;
    formMsg.style.color = "#2e7d32";
    form.reset();
});

// ========== Hamburger Menu ==========
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => nav.classList.toggle("open"));

// Close nav on link click
nav.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => nav.classList.remove("open"))
);

// ========== Init ==========
render();
