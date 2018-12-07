const portfolioContainer = document.querySelector(".portfolio-items");

portfolioContainer.addEventListener("click", e => {
    // Para que el link no nos redireccione
    e.preventDefault();

    // Closest devuelve el ascendiente mas cercano si no especificamos bien (ej: poniendo div) o el elemento con la clase especificada. Si clickeamos algo que no es lo especificado devuelve null
    const modalToggle = e.target.closest(".portfolio-link");

    if(!modalToggle) return;

    // Seleccionamos el div del modal
    const modal = modalToggle.parentNode.nextElementSibling;
    const closeButton = modal.querySelector(".modal-close");
    
    const modalOpen = () => {
        modal.classList.add("is-open");
        modal.style.animation = "modalIn .5s forwards";
        // Para que no pueda scrollear por afuera del modal
        document.body.style.overflowY = "hidden";
    }

    const modalClose = () => {
        modal.classList.remove("is-open");
        // Lo sacamos porque sino se sigue activando al querer abrir el modal devuelta
        modal.removeEventListener("animationend", modalClose);
        // Le devolvemos el scroll
        document.body.style.overflowY = "scroll";
    }

    closeButton.addEventListener("click", () => {
        modal.style.animation = "modalOut .5s forwards";
        // Corre la funcion cuando termina la animacion, tambien podriamos usar un timeout
        modal.addEventListener("animationend",modalClose);
    });

    // Para cerrar el modal con esc (lo deje asi pero esta bug porque si tocas esc antes de abrir el modal se cierra automaticamente al abrirlo)
    document.addEventListener("keydown", e => {
        if(e.keyCode === 27){
            modal.style.animation = "modalOut .5s forwards";
            modal.addEventListener("animationend",modalClose);
        }
    });

    modalOpen();
});