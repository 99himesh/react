import './card.css';

 const card=(props)=>{

    const classes="card "+props.className;
    return <div className="card">{props.children}</div>
}

export default card;