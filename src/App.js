import React from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = React.useState("");
    const [ageValue, setAgeValue] = React.useState(0);
    const [reviewValue, setReviewValue] = React.useState("");
    const [newsletterValue, toggleNewsletterValue] = React.useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(nameValue, ageValue, reviewValue, newsletterValue);
    }

  return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Gegevens</legend>
                <label htmlFor="form-name">Naam:</label>
                <input
                    type="text"
                    id="form-name"
                    name="name"
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                />
                <br/>
                <label htmlFor="form-age">Leeftijd:</label>
                <input
                    type="text"
                    id="form-age"
                    name="age"
                    value={ageValue}
                    onChange={(e) => setAgeValue(e.target.value)}
                />
            </fieldset>
            <fieldset>
                <legend>Jouw review</legend>
                <label htmlFor="form-review">Opmerkingen:</label>
                <input
                    type="textfield"
                    id="form-review"
                    name="review"
                    value={reviewValue}
                    onChange={(e) => setReviewValue(e.target.value)}
                />
                <br/>
                <input
                    type="checkbox"
                    id="newsletter-sign-in"
                    name="Newsletter"
                    value={newsletterValue}
                    onChange={(e) => toggleNewsletterValue(!newsletterValue)}
                />
                <label htmlFor="newsletter-sign-in">Ik schrijf me in voor de nieuwsbrief</label>
                <br/>
                <button
                    type="submit"
                >Versturen
                </button>
            </fieldset>
        </form>
  );
}

export default App;
