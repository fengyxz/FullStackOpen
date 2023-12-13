const PersonForm = ({ handleSubmit, handleNameChange, handleNumberChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input onChange={handleNameChange} />
      </div>
      <div>
        number:
        <input onChange={handleNumberChange} />
      </div>
      {/* <div>debug:{newName}</div> */}
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
