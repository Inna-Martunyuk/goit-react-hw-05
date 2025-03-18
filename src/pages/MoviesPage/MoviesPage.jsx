import { useState } from "react";
function MoviesPage() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = query.trim();
    if (!value) return; // Захист від пустого введення

    console.log("Searching for:", value);
    // Тут можна викликати API для пошуку фільмів

    setQuery(""); // Очистка після пошуку
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default MoviesPage;
