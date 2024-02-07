const img = document.querySelector('img')
const input = document.querySelector('input')

input.addEventListener('change', (event) => {
    img.src = URL.createObjectURL(event.target.files[0])
})

deleteButton.addEventListener("click", () => {
  img.src = "./img/images-1.jpg";
  input.value = "";
});