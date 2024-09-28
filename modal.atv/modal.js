document.addEventListener("DOMContentLoaded", function() { 
    const abrir = document.querySelector("#abrir");
    const fechar = document.querySelector("#fechar");
    const modal = document.querySelector("#modal");

    abrir.onclick = function() {
        modal.showModal();
    }

    fechar.onclick = function() {
        modal.close();
    }
});
