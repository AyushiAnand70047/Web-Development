import './Card.css';

function Card(props){
    return(
        <div className="Card">
            This is card
            {props.children}
        </div>
    );
}

export default Card;