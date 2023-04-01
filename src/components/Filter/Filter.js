import React,{useEffect,Fragment} from 'react'

const Filter = ({ langs, active, onClickHandler }) => {
   
  const btnFilter = langs.map(lang => {
    return (
      <li>
      <a
        key={lang}
        onClick={() => onClickHandler(lang)}
        className={active === lang ? "active" : ""}
      >
        {lang}
      </a>
      </li>
    );
  });
  return<div>
  <ul className="languages">{btnFilter}</ul></div>;
};

export default Filter;
