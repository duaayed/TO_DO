import { useState,useEffect } from 'react'
import Header from './components/Header'
import AddNew from './components/AddNew'
import DisplayCards from './components/DisplayCards'
import Modal from './components/Modal';

function App() {
 const [card, setCard] = useState({title:'', description:''});
  const [isOpen, setIsOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState("");

  const [cardList, setCardList] = useState(() => {
    // Try to load from localStorage on initial render
    const stored = localStorage.getItem('todoList');
    return stored ? JSON.parse(stored) : [];
  });

  // Save to localStorage on every change
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(cardList));
  }, [cardList]);

const handleTitleChange = (e) => {
    setCard((prev) => ({
      ...prev,
      title: e.target.value
    }));
  };
const handleDescChange = (e) => {
    setCard((prev) => ({
      ...prev,
      description: e.target.value
    }));
  };

  function addNewCard() {
    setCardList([
      ...cardList,
      { id: crypto.randomUUID(),title: card.title, description: card.description },
    ]);
    setCard({title: '', description: ''});
  }
  function deleteCard(id) {
    showModal(id);
  }
  function confirmDelete() {
    setCardList(cardList.filter((card) => card.id !== currentCard));
    setIsOpen(false);
  }
const showModal = (id) => {
    setIsOpen(true);
    setCurrentCard(id);
  };
  return (
    <>
    <Header />
    <section className='hero'>
    <AddNew addNewCard={addNewCard} card={card} handleTitleChange={handleTitleChange} handleDescChange={handleDescChange} />
    <div className='cardContainer'>

    <h2>Tasks</h2>
    <DisplayCards cards={cardList} deleteCard={deleteCard}/>
    <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onDelete={confirmDelete}
          
        ></Modal>
    </div>
    </section>
    </>
  )
}

export default App
