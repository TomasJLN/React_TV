const pullPeople = async ({ searchName }) => {
  const url = `https://api.tvmaze.com/search/people?q=${searchName}`;
  const resp = await fetch(url);
  const data = await resp.json();

  const people = data.map((person) => {
    return {
      id: person.person.id,
      name: person.person.name,
      image: person.person.image?.medium,
    };
  });
  return people;
};

export default pullPeople;
