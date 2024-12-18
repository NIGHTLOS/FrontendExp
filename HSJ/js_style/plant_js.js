document.querySelectorAll('.modal').forEach(modal => {
    const btn = document.getElementById(modal.id.replace('modal', 'btn'));
    const closeBtn = modal.querySelector('.close');

    btn.onclick = function () {
        modal.style.display = "block";
    }

    closeBtn.onclick = function () {
        modal.style.display = "none";
    }

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});