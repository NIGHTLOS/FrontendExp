document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('mouseover', function () {
            const detailsId = this.getAttribute('data-details-id');
            const details = document.getElementById(detailsId);
            details.style.display = 'block';
        });

        button.addEventListener('mouseout', function () {
            const detailsId = this.getAttribute('data-details-id');
            const details = document.getElementById(detailsId);
            details.style.display = 'none';
        });
    });
});