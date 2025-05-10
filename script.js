const searchBar = document.getElementById("searchBar");
const dropdown = document.getElementById("searchDropdown");

const players = [
  { name: "Héctor Fort", id: "hector-fort" },
  { name: "Luke Shaw", id: "luke-shaw" },
  { name: "Fabio Baldé", id: "fabio-balde" },
  { name: "Lionel Messi", id: "lionel-messi" },
  { name: "Cristiano Ronaldo", id: "cristiano-ronaldo" },
  { name: "David de Gea", id: "david-de-gea" },
  { name: "Heung-min Son", id: "heung-min-son" },
  { name: "Pelé", id: "pele" },
];

searchBar.addEventListener("input", function (e) {
  const value = e.target.value.toLowerCase();
  dropdown.innerHTML = "";

  if (!value) {
    dropdown.style.display = "none";
    return;
  }

  const matches = players.filter(player =>
    player.name.toLowerCase().includes(value)
  );

  if (matches.length > 0) {
    matches.forEach(player => {
      const item = document.createElement("div");
      item.className = "dropdown-item";
      item.textContent = player.name;

      item.addEventListener("click", () => {

        const homepage = document.getElementById("homepage");
        if (homepage) homepage.style.display = "none";

        document.querySelectorAll(".player-section").forEach(section => {
          section.classList.add("hidden");
        });

        const target = document.getElementById(player.id);
        if (target) {
          target.classList.remove("hidden");
          target.scrollIntoView({ behavior: "smooth" });
          searchBar.value = player.name;
          dropdown.style.display = "none";
        }
      });

      dropdown.appendChild(item);
    });

    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
});

document.addEventListener("click", function (e) {
  if (!dropdown.contains(e.target) && e.target !== searchBar) {
    dropdown.style.display = "none";
  }
});

function returnhome() {
  const homepage = document.getElementById("homepage");
  if (homepage) homepage.style.display = "block";

  document.querySelectorAll(".player-section").forEach(section => {
    section.classList.add("hidden");
  });
}

const topplayers = [
  { name: "Lionel Messi", team: "Inter Miami", rating: "9.1" },
  { name: "Pelé", team: "New York Cosmos", rating: "9.0" },
  { name: "Cristiano Ronaldo", team: "Al Nassr", rating: "8.9" },
];

const tbody = document.getElementById("leaderboard-body");

topplayers.forEach((player, index) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td class="rank">${index + 1}</td>
    <td>${player.name}</td>
    <td>${player.team}</td>
    <td>${player.rating}</td>
  `;
  tbody.appendChild(row);
});