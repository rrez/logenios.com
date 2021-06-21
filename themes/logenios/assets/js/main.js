const myModal = new bootstrap.Modal(document.getElementById('cookieconsent'), {
    keyboard: false
})


if (!localStorage.acceptCookies) {
    myModal.toggle()
}

function acceptCookies() {
    localStorage.acceptCookies = true;
    myModal.toggle()

}