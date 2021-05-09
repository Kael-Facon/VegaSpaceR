const modal = document.querySelector(".modal");
const images = document.querySelectorAll(".images img");
const original = document.querySelector(".full-img");
const imgText = document.querySelector(".caption");

images.forEach(image => {
    image.addEventListener('click', () =>{
        modal.classList.add("open")
        original.classList.add("open");

        original.src = image.src;
        imgText.textContent = image.alt;
    });
});

modal.addEventListener('click', (e =>{
    if(e.target.classList.contains('modal')) {
        modal.classList.remove("open");
        original.classList.remove("open");
    }
}))