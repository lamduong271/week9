import React, { useState } from "react";

// interface MyListProps {
//   header: String;
//   items: ListItemType[];
// }

// interface ListItemType {
//   id: string;
//   text: string;
// }
export default function MyList(props) {
  const { header, items, updateItem } = props;
  const [editedItems, setEditedItems] = useState([]);
  const updateItemHandler = (id) => {
    // updateItem(id);
    const foundEditedItem = editedItems.find((item) => item === id);
    console.log("haha", foundEditedItem);
    setEditedItems([...editedItems, id]);
  };
  const findEditedItem = (id) => {
    const foundEditedItem = editedItems.find((item) => item === id);
    return foundEditedItem ? true : false;
  };
  return (
    <div>
      <h1>{header}</h1>
      <div>
        <ol>
          {items.map((item) => (
            <div key={item.id} className="list-item">
              <li
                onClick={() => updateItemHandler(item.id)}
                style={{
                  textDecoration: `${
                    findEditedItem(item.id) ? "line-through" : ""
                  }`,
                }}
              >
                {" "}
                {item.text}
              </li>
              <button onClick={() => updateItemHandler(item.id)}>edit</button>
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
}
