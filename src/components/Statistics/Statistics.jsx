import css from "./Statistics.module.css";
import PropTypes from "prop-types";
let Statistics = ({title, stats}) => {
    return(
<section className={css.statistics}>
  {(title !== undefined)?<h2 className={css.title}>{title}</h2>:<></>}

  <ul className={css.statList}>
    {stats.map(elem => (
    <Item 
        key={elem.id} 
        label={elem.label}
        percentage={elem.percentage + "%"}    
    />
    ))}
    
        
  </ul>
</section>
    );
}

let Item = ({id, label, percentage}) => {
    return(
<li className={css.item} key={id + "item"} style={{backgroundColor: getRandomHexColor()}}>
    <span className={css.label} key={id + "label"}>{label}</span>
    <span className={css.percentage} key={id + "percentage"}>{percentage}</span>
</li>
  );
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

Statistics.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    percentage: PropTypes.number
  }))
}

export default Statistics;