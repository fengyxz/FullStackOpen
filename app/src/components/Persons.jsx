import server from "../server/person";

const Persons = ({ persons, setPersons }) => {
  return (
    <div>
      {persons.map((p) => (
        <div key={p.id}>
          {p.name} {p.number}
          <button
            onClick={() => {
              if (confirm(`are you sure to delete ${p.name}'s phone number?`)) {
                server.deletePerson(p.id).then(() => {
                  // console.log("delete", persons);
                  setPersons(persons.filter((i) => i.id !== p.id));
                });
              }
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Persons;
