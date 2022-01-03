import React, { useEffect, useState } from 'react';
import pullPeople from './helpers/pullPeople';
import PersonCard from './PersonCard';

const GetPersons = ({ searchName = 'tom' }) => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    pullPeople({ searchName }).then((people) => setCard(people));
  }, [searchName]);

  //   const pullPersons = async () => {
  //     const url = `https://api.tvmaze.com/search/people?q=${searchName}`;
  //     const resp = await fetch(url);
  //     const data = await resp.json();
  //     const people = data.map((person) => {
  //       return {
  //         id: person.person.id,
  //         name: person.person.name,
  //         image: person.person.image?.medium,
  //       };
  //     });
  //     console.log(people);
  //     setCard(people);
  //     };

  return (
    <div className="card-deck">
      {card.map((item) => (
        <PersonCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default GetPersons;
