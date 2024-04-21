document.addEventListener("DOMContentLoaded", function() {
    fetch('movies.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(film => {
                const newFilmDiv = document.createElement("div");
                newFilmDiv.classList.add("col-6", "col-sm-3");
                newFilmDiv.innerHTML = `
                    <div class="card" style="width: 18rem;">
                        <img id="resizableImage" src="https://wallpapers.video/wp-content/uploads/2023/01/rick-realism-wallpaper-estatico.jpg" alt="Kép">
                        <div class="card-body">
                            <h5 class="card-title">${film.title}</h5>
                            <p class="card-text">Kategória: ${film.category}</p>
                            <p class="card-text">Időtartam: ${film.duration} perc</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                `;
                document.getElementById("filmContainer").appendChild(newFilmDiv);
            });
        })
        .catch(error => console.error('Hiba a filmek betöltése közben:', error));

        document.getElementById("filmForm").addEventListener("submit", function(event) {
            event.preventDefault();
            const title = document.getElementById("title").value;
            const category = document.getElementById("category").value;
            const duration = document.getElementById("duration").value;
            const newFilmDiv = document.createElement("div");
            newFilmDiv.classList.add("col-6", "col-sm-3");
            newFilmDiv.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <img id="resizableImage" src="https://wallpapers.video/wp-content/uploads/2023/01/rick-realism-wallpaper-estatico.jpg" alt="Kép">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">Kategória: ${category}</p>
                        <p class="card-text">Időtartam: ${duration} perc</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            `;
            document.getElementById("filmContainer").appendChild(newFilmDiv);
            this.reset();
        });
});
