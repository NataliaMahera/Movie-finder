import css from './Form.module.css';

const Form = ({ onFormSubmit }) => {
  return (
    <form className={css.searchForm} onSubmit={onFormSubmit}>
      <label className={css.label}>
        <input
          type="text"
          required
          placeholder="Search movie"
          name="searchKey"
        />
      </label>
      <button type="submit">search</button>
    </form>
  );
};

export default Form;
