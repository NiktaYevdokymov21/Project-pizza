
class Spinner {
    showSpinner() {
        document.querySelector(".spinner__wrapper").style.display = "block"
        const spinner = document.getElementById("spinner");
        spinner.classList.add('show');
        if (document.querySelector(".main__wrapper") !== null) {
            document.querySelector(".main__wrapper").style.display = "none"
        } else {
            document.querySelector(".product__wrapper").style.display = "none"
        }
    }
    hideSpinner() {
        const spinner = document.getElementById("spinner");
        document.querySelector(".spinner__wrapper").style.display = "none"
        spinner.classList.remove('show');
    }
}

export default Spinner