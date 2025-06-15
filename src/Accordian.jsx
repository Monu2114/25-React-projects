//single selection
// multiple selection
import { useState } from "react";
import "./App.css";
function Accordian() {
  const content = [
    {
      id: "1",
      title: "What is Potential ?",
      text: "Something that is so stupid that people have been brainwashed with it",
    },
    {
      id: "2",
      title: "Is it helpful word ? ",
      text: "It is just used to give fake optimism.People are made to believe that they have to live upto this illusion.",
    },
    {
      id: "3",
      title: "Potential is a social evil",
      text: "It is a drug injected unknowingly. It is a trap. Ur actions and process matter much more than your potential.",
    },
    {
      id: "4",
      title: "How do i get over this potential trap ?",
      text: "By constantly questioning what work you have put in and are u satisfied with it and how else could u improve it. ",
    },
  ];
  const [selectedItems, setItems] = useState([]);
  const [clickButton, setClick] = useState(false);
  const handleClick = (item) => {
    if (clickButton) {
      if (selectedItems.includes(item.id)) {
        setItems(selectedItems.filter((id) => id !== item.id));
      } else {
        setItems([...selectedItems, item.id]);
      }
    } else setItems([item.id]);
    // setDiv(item.text);
  };

  return (
    <>
      <div className="container">
        <button className="button" onClick={() => setClick(!clickButton)}>
          Enable Multi Selection
        </button>
        {content.map((item) => {
          return (
            <div className="item" onClick={() => handleClick(item)}>
              {item.title}{" "}
              {selectedItems.includes(item.id) && <p>{item.text}</p>}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Accordian;
