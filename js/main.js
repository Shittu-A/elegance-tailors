// ========== Sample Style Data ==========
const styles = [
    {
        id: 1,
        name: "Classic Kaftan",
        desc: "Floor-length caftan in premium ankara fabric with subtle embroidery.",
        category: "classic",
        image: "https://images.unsplash.com/photo-1663044022596-25bc5df1c6e0?w=400&h=300&fit=crop",
    },
    {
        id: 2,
        name: "Gold Accent Dashiki",
        desc: "Purple and gold long-sleeve dashiki with intricate front detailing.",
        category: "classic",
        image: "https://images.unsplash.com/photo-1696962678565-bee84e6b9cb6?w=400&h=300&fit=crop",
    },
    {
        id: 3,
        name: "White Embroidered Caftan",
        desc: "Elegant white caftan with hand-stitched embroidery — perfect for occasions.",
        category: "classic",
        image: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?w=400&h=300&fit=crop",
    },
    {
        id: 4,
        name: "Red &amp; White Print Caftan",
        desc: "Vibrant red and white patterned caftan, lightweight for all-day wear.",
        category: "modern",
        image: "https://images.unsplash.com/photo-1625646741211-711bdd65c570?w=400&h=300&fit=crop",
    },
    {
        id: 5,
        name: "Green Senator Style",
        desc: "Modern senator-style caftan with clean lines and premium stitching.",
        category: "modern",
        image: "https://images.unsplash.com/photo-1663044022648-08bf87cfdc05?w=400&h=300&fit=crop",
    },
    {
        id: 6,
        name: "Blue Floral Caftan",
        desc: "Relaxed-fit blue floral print caftan with side slits.",
        category: "modern",
        image: "https://images.unsplash.com/photo-1663044023437-6b3f9be28a90?w=400&h=300&fit=crop",
    },
    {
        id: 7,
        name: "Kente-Inspired Caftan",
        desc: "Bold kente-pattern caftan in gold, green, and black stripes.",
        category: "premium",
        image: "https://images.unsplash.com/photo-1663044022726-889ee51a682e?w=400&h=300&fit=crop",
    },
    {
        id: 8,
        name: "Royal Agbada",
        desc: "Full agbada set with rich embroidery and matching cap.",
        category: "premium",
        image: "https://images.unsplash.com/photo-1687952622898-4e9514a710d5?w=400&h=300&fit=crop",
    },
    {
        id: 9,
        name: "Gold &amp; Ivory Caftan",
        desc: "Luxury gold-thread embroidery on ivory caftan — made for celebrations.",
        category: "premium",
        image: "https://images.unsplash.com/photo-1663043994777-7ed4b4e6cba3?w=400&h=300&fit=crop",
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
