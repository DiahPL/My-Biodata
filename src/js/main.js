var timer = null;
function stop() {
  clearTimeout(timer);
}
function start() {
  var waktu = new Date();
  var bulan = new Array(
    "Desember",
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November"
  );
  var hari = new Array(
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at",
    "Sabtu"
  );
  var tanggal =
    hari[waktu.getDay()] +
    ", " +
    waktu.getDate() +
    " " +
    bulan[waktu.getMonth()] +
    " " +
    waktu.getFullYear();

  var jam =
    waktu.getHours() + ":" + waktu.getMinutes() + ":" + waktu.getSeconds();

  // document.querySelector("input[name='tanggal']").value = tanggal;
  // document.querySelector("input[name='jam']").value = jam;
  document.querySelector(".tanggal").innerHTML = tanggal;
  document.querySelector(".jam").innerHTML = jam;
  timer = setTimeout("start()", 1000);   
}

// Memperbesar gambar saat mengarahkan kursor ke atasnya di halaman gallery
const imagesGallery = document.querySelectorAll('.gallery img');
console.log(imagesGallery);
imagesGallery.forEach(img => {
    img.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.2)';
    });
    img.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});