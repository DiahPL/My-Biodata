// Memperbesar gambar saat mengarahkan kursor ke atasnya di halaman hobby
let imagesHobby = document.querySelectorAll('.hobby img');
imagesHobby.forEach(img => {
    img.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.2)';
    });
    img.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});