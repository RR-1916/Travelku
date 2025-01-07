<script>
    // Mendapatkan elemen navbar
    const navbar = document.querySelector('.navbar');

    // Fungsi untuk menambahkan/removing kelas saat halaman di-scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Ketika halaman digulir lebih dari 50px
            navbar.classList.add('scrolled');} 
        else {
            navbar.classList.remove('scrolled'); // Menghapus kelas 'scrolled' ketika scroll kembali ke atas
        }
    });
</script>