const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const result = document.getElementById("result");

searchBtn.addEventListener("click", searchPlace);

searchInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        searchPlace();
    }

});

async function searchPlace() {

    let place = searchInput.value.trim();

    if (place === "") {

        result.innerHTML = `
            <p class="error">Please enter a destination.</p>
        `;

        return;

    }

    result.innerHTML = `
        <p class="error">Searching destination...</p>
    `;

    try {

        const wikiResponse = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${place}`
        );

        const wikiData = await wikiResponse.json();

        const image =
            wikiData.thumbnail?.source ||
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200";

        result.innerHTML = `
            <div class="card">

                <img src="${image}" alt="${place}">

                <div class="card-content">

                    <h2>${wikiData.title}</h2>

                    <p>${wikiData.extract || "No description available."}</p>

                    <div class="info">

                        <span>🌍 ${place}</span>

                        <span>📖 Wikipedia</span>

                    </div>

                </div>

            </div>
        `;

    }

    catch (error) {

        result.innerHTML = `
            <p class="error">
                Unable to fetch destination details.
            </p>
        `;

    }

}