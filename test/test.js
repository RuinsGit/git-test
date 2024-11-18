document.addEventListener('DOMContentLoaded', function () {
    // Footer'ın görünür hale gelmesi
    gsap.from(".footer", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power4.out"
    });

    // Footer içindeki her bir bölüm için animasyon
    gsap.from(".footer-section", {
        opacity: 0,
        y: 30,
        stagger: 0.3,
        duration: 1.5,
        ease: "power4.out"
    });

    // Sosyal medya ikonları için animasyon
    gsap.from(".social-icon", {
        opacity: 0,
        scale: 0.6,
        stagger: 0.2,
        duration: 1.5,
        ease: "elastic.out(1, 0.7)"
    });
});
