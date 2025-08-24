lucide.createIcons();

const themeToggle = document.getElementById("theme-toggle");
const htmlEl = document.documentElement;

if (
  localStorage.getItem("theme") === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  htmlEl.classList.add("dark");
} else {
  htmlEl.classList.remove("dark");
}

themeToggle.addEventListener("click", () => {
  if (htmlEl.classList.contains("dark")) {
    htmlEl.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    htmlEl.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

const skills = [
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "Python", category: "language" },
  { name: "Java", category: "language" },
  { name: "HTML", category: "fe" },
  { name: "CSS", category: "fe" },
  { name: "Angular", category: "fe" },
  { name: "SQL", category: "db" },
  { name: "Git", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "Azure", category: "tools" },
  { name: "Splunk", category: "tools" },
  { name: "SauceLabs", category: "tools" },
];

const skillsGrid = document.getElementById("skills-grid");
const skillsFilter = document.getElementById("skills-filter");

const renderSkills = (filter = "all") => {
  skillsGrid.innerHTML = "";
  const filteredSkills =
    filter === "all" ? skills : skills.filter((s) => s.category === filter);

  filteredSkills.forEach((skill) => {
    const skillEl = document.createElement("div");
    skillEl.className =
      "skill-item card rounded-lg p-4 text-center font-semibold shadow-md hover:shadow-xl transform hover:scale-105";
    skillEl.textContent = skill.name;
    skillEl.dataset.category = skill.category;
    skillsGrid.appendChild(skillEl);
  });
};

skillsFilter.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    document.querySelector(".skill-tag.active").classList.remove("active");
    e.target.classList.add("active");
    renderSkills(e.target.dataset.filter);
  }
});

renderSkills();

// --- ACTIVE NAV LINK ON SCROLL ---
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// --- LEAFLET MAP ---
const map = L.map("map").setView([28.7041, 77.1025], 4); // Centered on Delhi, India & Zoomed out

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  maxZoom: 20,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
}).addTo(map);

const travelStops = [
  // Netherlands
  {
    coords: [51.9244, 4.4777],
    title: "Rotterdam",
    imageUrl: "./assets/cities/Rotterdam.jpg",
    content:
      "Explored the modern architecture and vibrant port. The Cube Houses were a highlight!",
  },
  {
    coords: [52.0705, 4.3007],
    title: "The Hague",
    imageUrl: "./assets/cities/Den+Hague.jpg",
    content:
      "Visited the Peace Palace and enjoyed the beautiful coastline at Scheveningen.",
  },
  {
    coords: [51.4416, 5.4697],
    title: "Eindhoven",
    imageUrl: "./assets/cities/Eindoven.jpg",
    content:
      "A hub of technology and design. The Philips Museum was fascinating.",
  },
  {
    coords: [52.3676, 4.9041],
    title: "Amsterdam",
    imageUrl: "./assets/cities/Amsterdam.jpg",
    content:
      "Wandered through the iconic canals and visited the Anne Frank House. A truly historic city.",
  },
  {
    coords: [52.0907, 5.1214],
    title: "Utrecht",
    imageUrl: "./assets/cities/Utrecht.jpg",
    content:
      "Climbed the Dom Tower for a breathtaking view and enjoyed the cozy cafes along the canals.",
  },
  {
    coords: [52.3874, 4.6462],
    title: "Haarlem",
    imageUrl: "./assets/cities/Haarlem.jpg",
    content:
      "A charming city with beautiful old buildings and a relaxed atmosphere.",
  },
  // Italy
  {
    coords: [43.7228, 10.4017],
    title: "Pisa",
    imageUrl: "./assets/cities/Pisa.jpg",
    content:
      "Saw the famous Leaning Tower and explored the Piazza dei Miracoli.",
  },
  {
    coords: [41.9028, 12.4964],
    title: "Rome",
    imageUrl: "./assets/cities/Rome.jpg",
    content:
      "Stepped back in time at the Colosseum and the Roman Forum. The Vatican City was awe-inspiring.",
  },
  {
    coords: [43.7696, 11.2558],
    title: "Florence",
    imageUrl: "./assets/cities/Florence.jpg",
    content:
      "Immersed in Renaissance art and architecture. The Duomo is a masterpiece.",
  },
  // Austria
  {
    coords: [47.2692, 11.4041],
    title: "Innsbruck",
    imageUrl: "./assets/cities/Innsbruck.jpg",
    content:
      "Surrounded by the stunning Alps, a perfect blend of city life and nature.",
  },
  // Liechtenstein
  {
    coords: [47.141, 9.5215],
    title: "Vaduz",
    imageUrl: "./assets/cities/Vaduz.jpg",
    content:
      "Explored the capital of a tiny, beautiful country, with a castle overlooking the city.",
  },
  // France
  {
    coords: [48.8566, 2.3522],
    title: "Paris",
    imageUrl: "./assets/cities/Paris.jpg",
    content:
      "The city of lights! From the Eiffel Tower to the Louvre, every moment was magical.",
  },
  // Belgium
  {
    coords: [50.8503, 4.3517],
    title: "Brussels",
    imageUrl: "./assets/cities/Brussel.jpg",
    content:
      "Enjoyed delicious waffles and chocolates while admiring the Grand-Place.",
  },
  // Switzerland
  {
    coords: [47.0502, 8.3093],
    title: "Lucerne",
    imageUrl: "./assets/cities/Lucerne.jpg",
    content:
      "A picturesque city on a beautiful lake, with the Chapel Bridge as a centerpiece.",
  },
  {
    coords: [47.3769, 8.5417],
    title: "Zurich",
    imageUrl: "./assets/cities/Zurich.jpg",
    content:
      "A vibrant city with a beautiful old town and a stunning lakeside setting.",
  },
  // Luxembourg
  {
    coords: [49.6116, 6.1319],
    title: "Luxembourg",
    imageUrl: "./assets/cities/Luxembourg.jpg",
    content:
      "Explored the historic fortifications and the beautiful Grund district.",
  },
  // Czechia
  {
    coords: [50.0755, 14.4378],
    title: "Prague",
    imageUrl: "./assets/cities/Prague.jpg",
    content:
      "Walked across the Charles Bridge and explored the historic Prague Castle.",
  },
  {
    coords: [50.2306, 12.8725],
    title: "Karlovy Vary",
    imageUrl: "./assets/cities/Karlovy+Vary.jpg",
    content:
      "A beautiful spa town with colorful architecture and healing mineral springs.",
  },
  // Germany
  {
    coords: [52.52, 13.405],
    title: "Berlin",
    imageUrl: "./assets/cities/Berlin.jpg",
    content:
      "A city rich in history and culture, from the Brandenburg Gate to the East Side Gallery.",
  },
  // India
  {
    coords: [26.2389, 73.0243],
    title: "Jodhpur",
    imageUrl: "./assets/cities/Jodhpur.jpg",
    content:
      "The Blue City! The view from Mehrangarh Fort was absolutely breathtaking.",
  },
  {
    coords: [12.9716, 77.5946],
    title: "Bangalore",
    imageUrl: "./assets/cities/Bangalore.png",
    content:
      "India's Garden City, full of parks, tech hubs, and a vibrant food scene.",
  },
  {
    coords: [29.3919, 79.4543],
    title: "Nainital",
    imageUrl: "./assets/cities/Nainital.jpg",
    content:
      "A serene hill station with a beautiful lake, perfect for boating and relaxing.",
  },
  {
    coords: [19.076, 72.8777],
    title: "Mumbai",
    imageUrl: "./assets/cities/Mumbai.jpg",
    content:
      "The city that never sleeps. From Marine Drive to bustling markets, the energy is infectious.",
  },
  {
    coords: [18.5204, 73.8567],
    title: "Pune",
    imageUrl: "./assets/cities/Pune.jpg",
    content:
      "A blend of history and modernity, with beautiful temples and a lively student population.",
  },
  {
    coords: [28.7041, 77.1025],
    title: "Delhi",
    imageUrl: "./assets/cities/Delhi.jpg",
    content:
      "A journey through history, from the ancient lanes of Old Delhi to the grand monuments of New Delhi.",
  },
  {
    coords: [23.0225, 72.5714],
    title: "Ahmedabad",
    imageUrl: "./assets/cities/Ahmedabad.jpg",
    content:
      "Visited the Sabarmati Ashram and admired the intricate architecture of the old city.",
  },
  {
    coords: [12.4244, 75.7382],
    title: "Coorg",
    imageUrl: "./assets/cities/Coorg.jpg",
    content: "The Scotland of India. Lush coffee plantations and misty hills.",
  },
  {
    coords: [13.0827, 80.2707],
    title: "Chennai",
    imageUrl: "./assets/cities/Chennai.jpg",
    content: "Enjoyed the Marina Beach and the rich culture of South India.",
  },
  {
    coords: [12.2958, 76.6394],
    title: "Mysore",
    imageUrl: "./assets/cities/Mysore.jpg",
    content:
      "The City of Palaces. The Mysore Palace, especially when illuminated, is a sight to behold.",
  },
  {
    coords: [13.3164, 75.7772],
    title: "Chikmagalur",
    imageUrl: "./assets/cities/Chikamangalur.jpg",
    content:
      "A trekker's paradise with beautiful trails and stunning viewpoints.",
  },
  {
    coords: [17.385, 78.4867],
    title: "Hyderabad",
    imageUrl: "./assets/cities/Hyderabad.jpg",
    content: "Famous for its biryani and historic sites like the Charminar.",
  },
  {
    coords: [15.5993, 73.8221],
    title: "North Goa",
    imageUrl: "./assets/cities/Goa.jpg",
    content: "Vibrant beaches, lively shacks, and a party atmosphere.",
  },
  {
    coords: [30.0869, 78.2676],
    title: "Rishikesh",
    imageUrl: "./assets/cities/Rishikesh.jpg",
    content:
      "The Yoga Capital of the World. A spiritual and adventurous place by the Ganges.",
  },
  {
    coords: [26.8467, 80.9462],
    title: "Lucknow",
    imageUrl: "./assets/cities/Lucknow.jpg",
    content:
      "The City of Nawabs, known for its rich history, culture, and delicious kebabs.",
  },
  {
    coords: [27.1767, 78.0081],
    title: "Agra",
    imageUrl: "./assets/cities/Agra.jpg",
    content: "Home to the magnificent Taj Mahal, a symbol of eternal love.",
  },
];

travelStops.forEach((stop) => {
  const popupContent = `
                <div class="travel-popup-content">
                    <img src="${stop.imageUrl}" alt="${stop.title}" class="travel-popup-image" onerror="this.onerror=null;this.src='';">
                    <b>${stop.title}</b>
                    <p>${stop.content}</p>
                </div>
            `;
  L.marker(stop.coords).addTo(map).bindPopup(popupContent);
});

// --- CONTACT FORM ---
// Need actual Implementation
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formStatus.textContent = "Thank you! Your message has been sent.";
  contactForm.reset();
  setTimeout(() => {
    formStatus.textContent = "";
  }, 3000);
});
