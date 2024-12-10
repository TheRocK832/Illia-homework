const text = document.getElementById("text-id");
const btn = document.getElementById("btn-id");

btn.addEventListener('click', () => {
   if (text.style.color === "red") {
        text.style.color = "black"
   } else {
        text.style.color = "red"
   }
});
