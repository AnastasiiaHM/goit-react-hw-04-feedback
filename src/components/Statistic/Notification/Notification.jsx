import css from '../Notification/Notifikation.module.css';

export const Notification = ({ message }) => {
  return <p className={css.notification}>{message}</p>;
};
