const reviewSubmitButton = document.getElementById("reviewButton");
const reviewsContainer = document.getElementById("reviewsRow");

const reviewTitle = document.getElementById("reviewTitle");
const reviewText = document.getElementById("reviewText");
const reviewName = document.getElementById("reviewName");

reviewSubmitButton.addEventListener('click', (ev) => {
    ev.preventDefault();
    createReviewCard()
})

function createReviewCard() {
    let wrapper = document.createElement('div');
    let card = document.createElement('div');
    let cardBody = document.createElement('div');

    let cardBodyTitle = document.createElement('h4');
    let cardBodyText = document.createElement('blockquote');

    let cardBodyTextP = document.createElement('p');
    let cardBodyTextFooter = document.createElement('footer');
    let cardBodyTextFooterItalic = document.createElement('i')

    // Add bootstrap classes to elements
    wrapper.classList.add('col', 'col-lg-4', 'col-md-6', 'col-sm-12', 'py-3')
    card.classList.add('card', 'h-100');
    cardBody.classList.add('card-body');

    cardBodyTitle.classList.add('card-title', 'fw-bold');
    cardBodyText.classList.add('card-text', 'blockquote', 'mb-0');
    cardBodyTextFooter.classList.add('blockquote-footer', 'text-end');

    // Append all elements to reviewsContainer
    cardBodyTextFooter.append(cardBodyTextFooterItalic);
    cardBodyText.append(cardBodyTextP, cardBodyTextFooter);
    cardBody.append(cardBodyTitle, cardBodyText);
    card.append(cardBody);
    wrapper.append(card);
    reviewsContainer.append(wrapper);

    // Get text from form inputs
    cardBodyTitle.innerText = reviewTitle.value;
    cardBodyTextP.innerText = reviewText.value;
    cardBodyTextFooterItalic.innerText = !reviewName.value ? "Anonymous" : reviewName.value;

}