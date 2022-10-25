import React from 'react';
import s from "./WordsImagesList.module.css";

const WordsImagesList = ({ words }) => {
  return (
    <div>
      <ul>
        {words && (
          words.map(({ image, word, id }) => (
            <li key={id} className={s.item}>
              <img src={image} alt={word} width='190' />
              <p className={s.text}>{word}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  )
};

export default WordsImagesList