import React from "react";

export function BirthDayList(props) {
  const people = props.people;
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image, birthDate } = person;
        return (
          <article className="person" key={id}>
            <img src={image}></img>
            <div className="person-details">
              <p>{name}</p>
              <p>Age: {age}</p>
              <p>Birthday:{birthDate}</p>
            </div>
          </article>
        );
      })}
    </>
  );
}
