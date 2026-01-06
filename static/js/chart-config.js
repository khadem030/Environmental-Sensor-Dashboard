// Chart.js Configuration
const ctx = document.getElementById('tempChart').getContext('2d');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['۹ دی', '۱۰ دی', '۱۱ دی', '۱۲ دی', '۱۳ دی', '۱۴ دی', '۱۵ دی'],
        datasets: [{
            label: 'دمای متوسط (°C)',
            data: [25, 27, 29, 30, 31, 32.4, 33],
            borderColor: '#16a34a',
            backgroundColor: 'rgba(22, 163, 74, 0.1)',
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: { font: { family: 'Vazir' } }
            }
        },
        scales: {
            y: { beginAtZero: false }
        }
    }
});