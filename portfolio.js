
document.querySelectorAll('.list a').forEach(anchor => {
    anchor.addEventListener('click', function() {
        document.querySelector('.list a.active').classList.remove('active');
        this.classList.add('active');
    });
});

