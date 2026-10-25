const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const searchInput = document.getElementById("searchInput");
const projectRows = [...document.querySelectorAll(".project-row")];
const emptyState = document.getElementById("emptyState");
const projectCount = document.getElementById("projectCount");
const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

themeToggle.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark-theme");
  themeToggle.textContent = isDark ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  try { localStorage.setItem("novaboard-theme", isDark ? "dark" : "light"); } catch (_) {}
});

try {
  if (localStorage.getItem("novaboard-theme") === "dark") {
    body.classList.add("dark-theme");
    themeToggle.textContent = "☀";
    themeToggle.setAttribute("aria-label", "Switch to light theme");
  }
} catch (_) {}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  let visible = 0;
  projectRows.forEach(row => {
    const matches = row.dataset.search.includes(query) || row.textContent.toLowerCase().includes(query);
    row.hidden = !matches;
    if (matches) visible++;
  });
  emptyState.hidden = visible !== 0;
  projectCount.textContent = `${visible} project${visible === 1 ? "" : "s"}`;
});

document.getElementById("newProjectBtn").addEventListener("click", () => {
  showToast("Demo action: connect a backend to create and save projects.");
});
document.getElementById("viewAllBtn").addEventListener("click", () => {
  showToast("You are viewing all recent activity in this demo.");
});

document.getElementById("chartRange").addEventListener("change", event => {
  const month = event.target.value === "month";
  const heights = month ? [72, 48, 86, 60, 95, 78, 66] : [42, 64, 50, 82, 70, 94, 58];
  document.querySelectorAll("#chartBars .bar-column i").forEach((bar, index) => {
    bar.style.height = `${heights[index]}%`;
  });
  showToast(month ? "Chart updated: this month" : "Chart updated: this week");
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});
