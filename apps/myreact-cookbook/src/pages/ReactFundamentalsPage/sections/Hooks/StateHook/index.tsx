import { useState } from 'react';
import { turtles } from './turtles';
import StateHookTyping from './StateHookTyping';
import * as S from './styles';

const StateHookNinjaTurtles: React.FC = () => {
  const [selectTurtles, setSelectTurtles] = useState<string[]>([]);

  const isChecked = (turtle: string): boolean =>
    !!selectTurtles.find((tur) => tur === turtle);

  const handleSelectTurtle = (turtle: string): void => {
    const turtleInArray = selectTurtles.find((tur) => tur === turtle);

    if (turtleInArray) {
      setSelectTurtles(selectTurtles.filter((tur) => tur !== turtle));
    } else {
      setSelectTurtles([...selectTurtles, turtle]);
    }
  };

  return (
    <>
      <StateHookTyping />
      <header>
        <h4>Practice example using React Hooks</h4>
        <p>Select a Ninja Turtle to set a color over they</p>
        <p>
          Here a <code>useState</code> hook will hold the state color of each
          turtle
        </p>
      </header>
      <S.Section>
        {turtles.map((turtle, index) => (
          <S.Turtle key={index}>
            <S.Img
              key={index}
              src={`/assets/images/ninja_turtles/${
                isChecked(turtle.name)
                  ? turtle.image
                  : `${turtle.image}_outline`
              }.svg`}
              onClick={(): void => handleSelectTurtle(turtle.name)}
            />
            <S.Name>{turtle.name}</S.Name>
          </S.Turtle>
        ))}
      </S.Section>
    </>
  );
};

export default StateHookNinjaTurtles;
