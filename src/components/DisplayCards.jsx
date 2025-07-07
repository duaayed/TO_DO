import { useState } from "react";
import editIcon from "../assets/edit.png";

const DisplayCards = ({ cards, deleteCard, setCardList }) => {
  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [editId, setEditId] = useState(null);

  function handleEdit(id) {
    setEditId(id);
  }
  // let titleInput = {
  //    display: edit ? "block" : "none"
  // }
  const handleTitleChange = (e, id) => {
    setCardList((prevCard) =>
      prevCard.map((card) =>
        card.id === id ? { ...card, title: e.target.value } : card
      )
    );
  };
  return (
    <div className="cardList">
      {cards.length > 0 ? (
        cards.map((card) => {
          const isEditing = editId === card.id;
          return (
            <div key={card.id} className="card">
              <div className="modification">
                {isEditing ? (
                  <button
                    class="deleteBtn"
                    onClick={() => setEditId(false)}
                    style={{ display: isEditing ? "block" : "none" }}
                  >
                    ✓
                  </button>
                ):(
                  <button
                    className="editBtn"
                    onClick={() => handleEdit(card.id)}
                    style={{ display: isEditing ? "none" : "block" }}
                  >
                    <img src={editIcon} alt="" />
                  </button>
                ) }
                <button
                  className="deleteBtn"
                  style={{ marginRight: "1rem" }}
                  onClick={() => deleteCard(card.id)}
                >
                  x
                </button>
              </div>
              <input
                type="text"
                className="input-title"
                style={{ display: isEditing ? "block" : "none" }}
                value={card.title}
                onChange={(e) => handleTitleChange(e, card.id)}
              />
              <h4
                className="title"
                style={{ display: isEditing ? "none" : "block" }}
              >
                {card.title}
              </h4>
              <p>{card.description}</p>
            </div>
          );
        })
      ) : (
        <p style={{ color: "gray" }}>No Tasks Yet!</p>
      )}
    </div>
  );
};

export default DisplayCards;
