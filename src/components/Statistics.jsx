import "./css/Statistics.css";
let Statistics = ({data}) => {
    return(
<section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
    {data.map(elem => (
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
<li className="item" key={id + "item"} style={{backgroundColor: getRandomHexColor()}}>
    <span className="label" key={id + "label"}>{label}</span>
    <span className="percentage" key={id + "percentage"}>{percentage}</span>
</li>
  );
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

export default Statistics;