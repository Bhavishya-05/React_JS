import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
    // above statement is doing the work for onSubmit(document.querySelector('input').value);
  };
  const handleChange = (event) => {
    setTerm(event.target.value);
    // to only accept numbers 
    // setTerm(event.target.value.replace(/[a-z]/,''));

  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
          {/* Confirm your search:&nbsp; */}
          {/* {term} */}
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
        {/* {term.length < 3 && 'Term must be longer'} */}
      </form>
    </div>
  );
}
export default SearchBar;
