document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("searchForm");
  const universityList = document.getElementById("universityList");
  const favoriteList = document.getElementById("favoriteList");

  searchForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const country = document.getElementById("country").value;
    try {
      const response = await fetch(
        `http://universities.hipolabs.com/search?name=${name}&country=${country}`
      );
      const universities = await response.json();
      renderUniversities(universities);
    } catch (error) {
      console.error("Error fetching universities:", error);
    }
  });

  function renderUniversities(universities) {
    universityList.innerHTML = "";
    universities.forEach((university) => {
      const row = `
                    <tr>
                        <td>${university.name}</td>
                        <td>${university.country}</td>
                        <td><a href="${university.web_page}" target="_blank">${university.web_page}</a></td>
                        <td><button class="btn btn-outline-danger btn-sm" onclick="saveFavorite('${university.name}', '${university.country}', '${university.web_page}')">Favorite</button></td>
                    </tr>
                `;
      universityList.innerHTML += row;
    });
  }

  async function saveFavorite(name, country, webPage) {
    try {
      const response = await fetch(
        "http://localhost:3306/universities/favorite",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name, country, webPage })
        }
      );
      const result = await response.json();
      console.log("Favorite saved:", result);
    } catch (error) {
      console.error("Error saving favorite:", error);
    }
  }

  async function fetchFavorites() {
    try {
      const response = await fetch(
        "http://localhost:3306/universities/favorites"
      );
      const favorites = await response.json();
      renderFavorites(favorites);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  }

  function renderFavorites(favorites) {
    favoriteList.innerHTML = "";
    favorites.forEach((favorite) => {
      const row = `
                <tr>
                    <td>${favorite.name}</td>
                    <td>${favorite.state}</td>
                    <td><a href="${favorite.web_page}" target="_blank">${favorite.web_page}</a></td>
                </tr>
            `;
      favoriteList.innerHTML += row;
    });
  }

  if (window.location.pathname === "/universities/favorites") {
    fetchFavorites();
  }
});
