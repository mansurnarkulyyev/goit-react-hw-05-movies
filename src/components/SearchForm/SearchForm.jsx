import { useState } from "react";
import PropTypes from "prop-types";
import st from "./searchForm.module.css";

const SearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({ search: "" });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(state.search.trim());
    setState({ search: "" });
  };

  const { search } = state;
  return (
    <form className={st.form} onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        className={st.input}
        type="text"
        name="search"
        value={search}
        placeholder="movie name..."
        required
      />
      <button className={st.button} type="sumbit" aria-label="button-search">
        search
      </button>
    </form>
  );
};
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
