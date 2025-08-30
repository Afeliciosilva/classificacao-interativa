const form = document.querySelector('form');
const questionContainer = document.getElementById('question-message');
const thankYouContainer = document.getElementById('thankyou-message');
const selectedRatingDisplay = document.getElementById('selected-rating');


form.addEventListener('submit', event => {
    event.preventDefault();

    
    const checkedRating = form.querySelector('input[name="rating"]:checked');

    if (checkedRating) {
        displayThankYouMessage(checkedRating.value);
    } else {
        alert('Please select a rating.');
    }
});

function displayThankYouMessage(rating) {
    questionContainer.classList.add('hide');
    thankYouContainer.classList.add('show');
    selectedRatingDisplay.textContent = `You selected ${rating} out of 5`;
}
