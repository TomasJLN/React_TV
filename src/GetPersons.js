import React, { useEffect, useState } from 'react';
import pullPeople from './helpers/pullPeople';
import PersonCard from './PersonCard';

const GetPersons = ({ searchName }) => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    pullPeople({ searchName }).then((people) => setCard(people));
  }, [searchName]);

  return (
    <div className="card-deck">
      {card && card.map((item) => <PersonCard key={item.id} item={item} />)}
    </div>
  );
};

export default GetPersons;
