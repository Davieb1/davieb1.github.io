const openBtn = document.querySelector(".js-open")
const modalbg = document.getElementById("modal-background")
const modalbox = document.getElementById("modal-box")
openBtn.addEventListener('click', function (event) {
    event.preventDefault()
    modalbg.classList.add("active")
    modalbox.classList.add("active")

})

const closeBtn = document.querySelectorAll(".js-close")
closeBtn.forEach(node => {
    node.addEventListener('click', function (e) {
        e.preventDefault()
        modalbg.classList.remove("active")
        modalbox.classList.remove("active")
    })
})