import { useState } from 'react';

function SearchBar ({onSubmit}) {
    // Creating a new piece of state
    const[term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(
            'cars'
        );
    };

    const handleChange = (event) => {
        // Updates our state
        // Everytime user enters a string, it causes our component to update
        setTerm(event.target.value);
    };

    return (
        <div>
            <form onSubmit= {handleFormSubmit}>
                <input value= {term} onChange={handleChange} />
            </form>
        </div>
    );
}

export default SearchBar;



// Video: Handling form submission

// User selects input, then presses enter key which triggers a submit event on form
// Form event looks at what ever value was passed to onSubmit, and then calls it

// (event) --> Any time we wire up an event handler on a plain JSX element, we're going 
// to have an event handler receive that event object
// event.preventDefault(); --> disables all the form input collection

// {onSubmit} --> reference to event handler thta's being created inside parent component

// <input value= {term} --> passes your state to the input as the value prop