function showSection(sectionId, element) {
    // 1. Tüm sayfaları gizle
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // 2. Tıklanan sayfayı göster
    document.getElementById(sectionId).classList.add('active');

    // 3. Menüdeki 'active' (mavi çizgi) sınıfını güncelle
    const menuItems = document.querySelectorAll('nav ul li');
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
    element.classList.add('active');
}