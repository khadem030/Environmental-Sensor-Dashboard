function initDashboardCharts() {
    const ctx = document.getElementById('tempChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه'],
            datasets: [{
                label: 'میانگین دمای سنسورها',
                data: [22, 24, 23, 28, 25],
                borderColor: '#16a34a',
                fill: true,
                backgroundColor: 'rgba(22, 163, 74, 0.1)',
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

document.addEventListener('DOMContentLoaded', initDashboardCharts);