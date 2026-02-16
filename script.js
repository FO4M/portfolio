// เพิ่มลูกเล่น Fade-in เมื่อเลื่อนหน้าจอลงมา (Scroll Reveal)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullImg");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close-btn");

// เลือกการ์ดเกียรติบัตรทั้งหมด
document.querySelectorAll('.award-card').forEach(card => {
    card.addEventListener('click', function() {
        const img = this.querySelector('.cert-img');
        const title = this.querySelector('p').innerText;
        
        modal.style.display = "flex";
        modal.style.alignItems = "center";
        modal.style.flexDirection = "column";
        modal.style.justifyContent = "center";
        
        modalImg.src = img.src;
        captionText.innerHTML = title;
    });
});


// เมื่อคลิกที่การ์ดเกียรติบัตร ให้โชว์รูปใหญ่ (ง่ายๆ ด้วย alert หรือจะประยุกต์ใช้ Modal ก็ได้ค่ะ)
document.querySelectorAll('.award-card').forEach(card => {
    card.addEventListener('click', () => {
        const imgSrc = card.querySelector('.cert-img').src;
        // เปิดรูปใน Tab ใหม่แบบเก๋ๆ
        window.open(imgSrc, '_blank');
    });
});
