import React, { useState } from 'react';
import { turtles } from './turtles';
import { Section, Turtle } from './styles';

const StateHookNinjaTurtles = () => {
  const  [selectTurtles, setSelectTurtles] = useState<string[]>([]);

  const isChecked = (turtle: string) => !!selectTurtles.find(tur => tur === turtle);

  const handleSelectTurtle = (turtle: string) => {
    const turtleInArray = selectTurtles.find(tur => tur === turtle);

    if (turtleInArray) {
      setSelectTurtles(selectTurtles.filter(tur => tur !== turtle));
    } else {
      setSelectTurtles([...selectTurtles, turtle])
    }
  }
    
  return (
    <>
      <header>
      <h4>Click in the Ninja Turtles</h4>
    </header>
      <Section>
      {
        turtles.map((turtle, index) => (
          <>
            <Turtle
              key={index}
              src={`/images/ninja_turtles/${
                isChecked(turtle.name) ? turtle.image : `${turtle.image}_outline`
              }.svg`}
              onClick={() => handleSelectTurtle(turtle.name)}
            />
            <Turtle.Name>{turtle.name}</Turtle.Name>
          </>
        ))
      }
    </Section>
    </>
  )

}

export default StateHookNinjaTurtles;
