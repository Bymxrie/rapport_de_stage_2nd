async function get_data(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (err) {
        alert(err);
    }
}

async function load_a_fact() {
    // on appel le service catfact 
    let fact = await get_data("https://catfact.ninja/fact");

    // si j'ai bien une réponse et que dans cette réponse il y a bien la clé fact alors ...
    if (fact && fact.fact) {
        document.querySelector('#cat_fact').innerHTML = fact.fact;
    } else {
        document.querySelector('#cat_fact').innerHTML = "Erreur lors du chargement 😿";
    }
}

async function load_a_cat_picture() {
    let picture = await get_data("https://api.thecatapi.com/v1/images/search");

    if (picture && picture[0]) {
        let container = document.querySelector('#fact_picture')

        let exist = document.querySelectorAll('.fact_picture_img')

        if (exist.length) {
            exist.forEach(node => node.remove());
        }

        let newImg = document.createElement("img");
        newImg.src = picture[0].url
        newImg.style.width = '100%'
        newImg.classList = "fact_picture_img"

        container.appendChild(newImg)
    }
}

load_a_fact()
load_a_cat_picture()
