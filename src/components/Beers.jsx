import Beer from './Beer.jsx'

// a kapcs zárójel arra jó h ha csak a számunkra fontos kulcsokat tudjuk kiszedni
const Beers = ( {list} ) =>{
    /* console.log(props.list); */ 
    const a = 10
    const beers = list.map( (item, index) => <Beer info={item} randomNum = {a} key = {index} /> )
    console.log(<Beer info={list[0]} randomNum = {a} key = {100} />);
    return (
        <div className="beers">
            {beers}
        </div>
    )
}

export default Beers