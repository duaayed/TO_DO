
const DisplayCards = ({ cards,deleteCard }) => {
  return (
    <div className="cardList">
      
      {cards.length > 0 ? (
        cards.map((card) => (
          <div key={card.id} className="card">
            <button className="deleteBtn" onClick={() => deleteCard(card.id)}>x</button>
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))
      ) : (
        <p style={{color:'gray'}}>No Tasks Yet!</p>
      )}
    </div>
  );
};

export default DisplayCards;
``