// Leaflet Map Initialization
const map = L.map('map').setView([36.5, 54.0], 10); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// داده‌های نمونه (بعداً از دیتابیس فراخوانی می‌شود)
const sensors = [
    { lat: 36.6, lng: 53.9, name: "سنسور SN-001", temp: "32.4°C", status: "هشدار" },
    { lat: 36.4, lng: 54.2, name: "سنسور SN-002", temp: "28.1°C", status: "عادی" },
];

sensors.forEach(sensor => {
    const marker = L.marker([sensor.lat, sensor.lng]).addTo(map);
    marker.bindPopup(`
        <div class="text-right" dir="rtl">
            <b>${sensor.name}</b><br>
            دما: ${sensor.temp}<br>
            وضعیت: ${sensor.status}
        </div>
    `);
});