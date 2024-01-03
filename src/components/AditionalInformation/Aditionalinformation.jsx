import React from 'react';
import css from './Aditionalinformation.module.css';
import { Link } from 'react-router-dom';

const AditionalInformation = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Aditional information</h3>
      <ul className={css.list}>
        <li className={css.item}>
          <Link className={css.link} to="cast">
            Cast
          </Link>
        </li>
        <li className={css.item}>
          <Link className={css.link} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AditionalInformation;
