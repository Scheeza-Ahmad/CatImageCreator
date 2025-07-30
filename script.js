    let cat = document.querySelector("#cat");
    
    let catImage = document.querySelector("#image");
    let URL = "https://api.thecatapi.com/v1/images/search";


    cat.addEventListener("click", async () => {
        let response = await fetch(URL);
        let data = await response.json();
        console.log(data);
        catImage.src = data[0].url;
    });
