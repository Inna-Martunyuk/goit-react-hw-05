import { useState } from "react";
import css from "./SearchForm.module.css"

function SearchForm({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return; 
    onSubmit(searchTerm); 
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
        name="search"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Enter movie name..."
        className={css.input}
      />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
}

export default SearchForm;
