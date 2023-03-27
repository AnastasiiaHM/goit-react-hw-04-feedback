import css from './Buttons.module.css';

export const Buttons = ({ nameBtn, handleClick }) => {
  return (
    <button
      type="button"
      name={nameBtn}
      className={css.statistic__btn}
      onClick={handleClick}
    >
      {nameBtn}
    </button>
  );
};
