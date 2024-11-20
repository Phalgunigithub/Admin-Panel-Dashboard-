document.addEventListener('DOMContentLoaded', () => {

const ctx = document.getElementById('doughnut');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'Earnings in $',
      data: [5, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    responsive:true
  }
});

});