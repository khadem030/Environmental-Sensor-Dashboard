function initSensorMap() {
    // مرکز نقشه (محدوده شمال ایران)
    const map = L.map('map').setView([36.5, 53.5], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // نمونه داده‌های شبیه‌سازی شده (بعدا از API دریافت می‌شود)
    const mockSensors = [
        { id: 1, name: "ایستگاه مرکزی", lat: 36.6, lng: 53.0, status: "normal" },
        { id: 2, name: "واحد مانیتورینگ B", lat: 36.2, lng: 54.0, status: "warning" }
    ];

    mockSensors.forEach(s => {
        const markerColor = s.status === 'warning' ? 'red' : 'green';
        const marker = L.marker([s.lat, s.lng]).addTo(map);
        marker.bindPopup(`<b>${s.name}</b><br>وضعیت: ${s.status === 'normal' ? 'عادی' : 'هشدار'}`);
    });
}

document.addEventListener('DOMContentLoaded', initSensorMap);