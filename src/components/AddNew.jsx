const AddNew = ({addNewCard,card, handleTitleChange,handleDescChange}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (card.title.trim() === "") return; // Only add if title is not empty
    addNewCard();
  };

  return (
    <div className='newList' onSubmit={handleSubmit}>
      <form action="" className="newList"  >
           <label htmlFor="">Title:</label>
        <input
          type="text"
          value={card.title}
          onChange={handleTitleChange}
          placeholder="Enter task title"
          required
        />
        <label>Description:</label>
        <textarea
        rows={12}
          value={card.description}
          onChange={handleDescChange}
          placeholder="Enter task description"
        />
        <button type="submit">Add Task</button>
      
      </form>
     
    </div>
  )
}

export default AddNew