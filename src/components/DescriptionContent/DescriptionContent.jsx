import React from 'react';
import { Link } from "react-router-dom";
import s from "./DescriptionContent.module.css";

const DescriptionContent = () => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        <li className={s.item}>
          <Link to='vocabulary'>
            <h4 className={s.title}>Vocabulary block</h4>
            <p className={s.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, id numquam? Similique dolore accusantium aliquid delectus nam, quas assumenda enim.</p>
          </Link>
        </li>
        <li className={s.item}>
          <Link to="grammar">
            <h4 className={s.title}>Grammar block</h4>
            <p className={s.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, id numquam? Similique dolore accusantium aliquid delectus nam, quas assumenda enim.</p>
          </Link>
        </li>
        <li className={s.item}>
          <Link to="reading">
            <h4 className={s.title}>Reading block</h4>
            <p className={s.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, id numquam? Similique dolore accusantium aliquid delectus nam, quas assumenda enim.</p>
          </Link>
        </li>
        <li className={s.item}>
          <Link to="speaking">
            <h4 className={s.title}>Speaking block</h4>
            <p className={s.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, id numquam? Similique dolore acc</p>
          </Link>
        </li>
      </ul>
    </div>
  )
};

export default DescriptionContent