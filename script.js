// Show car details when clicking on a car card
const carCards = document.querySelectorAll('.car-card');

carCards.forEach(card => {
    card.addEventListener('click', () => {
        alert('You clicked on a car!');
    });
});
