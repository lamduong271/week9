import React, { useState } from "react";
import MyList from "./MyList";
export default function MyContainer() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const onSubmit = () => {
    if (text !== "") {
      setItems([
        ...items,
        {
          id: Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, "")
            .substr(2, 10),
          text,
        },
      ]);
      setText("");
    }
  };
  const updateItem = (id) => {
    const newList = items.map((item) => {
      if (item.id === id) {
        const newItem = {
          ...item,
          text: "updated",
        };
        return newItem;
      }
      return item;
    });
    setItems(newList);
  };
  return (
    <div>
      <div className="text-input">
        <textarea
          placeholder="enter text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button onClick={onSubmit}>submit</button>
      </div>
      <MyList
        updateItem={updateItem}
        header="Really epic list component"
        items={items}
      />
    </div>
  );
}
