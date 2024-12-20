document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('industry_PieChart').getContext('2d');
    const myPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [
        'Financial Services',
        'IT Consultancy',
        'Media & Telecommunications',
        'Energy',
        'Entrepreneur'], // Add your labels here
        datasets: [{
          label: 'My Dataset',
          data: [50, 15, 15, 10, 10], // Add proportions for each slice
          backgroundColor: [
            'red',
            'blue',
            'green',
            'orange',
            'purple',
          ],
          borderColor: [
            'darkred',
            'darkblue',
            'darkgreen',
            'darkorange',
            'darkpurple',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true
      }
    });
});
