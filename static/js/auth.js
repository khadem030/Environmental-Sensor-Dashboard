// فرضا نقش کاربر از سمت سرور یا توکن دریافت می‌شود
const currentUser = {
    username: "admin_user",
    role: "admin" // می تواند 'admin', 'staff', 'observer' باشد
};

function applyPermissions() {
    // مخفی کردن المان‌های حساس برای کاربران غیر مدیر
    if (currentUser.role !== 'admin') {
        document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'none');
    }
    
    // محدودیت برای ناظر (فقط مشاهده)
    if (currentUser.role === 'observer') {
        document.querySelectorAll('.edit-btn').forEach(el => el.style.display = 'none');
    }
    
    console.log(`Permissions applied for: ${currentUser.role}`);
}

// اجرای اولیه
document.addEventListener('DOMContentLoaded', applyPermissions);