// مدیریت دکمه‌های خروجی (CSV/PDF)
document.querySelector('[title="خروجی PDF"]')?.addEventListener('click', () => {
    alert("در حال آماده‌سازی گزارش PDF رسمی...");
    // در آینده متصل به API جنگو برای خروجی PDF
});

// منطق اولیه جست‌وجوی تمام‌متن
const searchInput = document.getElementById('searchInput');
searchInput?.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    console.log(`Searching for: ${term}`);
    // در اینجا منطق فیلتر کردن ردیف‌های جدول قرار می‌گیرد
});

// مدیریت حذف نرم (Soft Delete)
function confirmDelete(id) {
    if(confirm("آیا از انتقال این سنسور به زباله‌دان اطمینان دارید؟ (قابل بازیابی است)")) {
        console.log(`Soft deleting sensor: ${id}`);
    }
}