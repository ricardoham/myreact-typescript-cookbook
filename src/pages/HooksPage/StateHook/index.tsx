import React, { useState } from 'react';
import turtles from './turtles';
import { Section, Turtle } from './styles';

const StateHookNinjaTurtles = () => {
  const  [isSelect, setSelect] = useState(false);

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
                isSelect ? turtle.image : `${turtle.image}_outline`
              }.svg`}
              onClick={() => setSelect(!isSelect)}
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
