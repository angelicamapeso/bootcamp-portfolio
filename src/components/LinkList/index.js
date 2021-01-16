import React from "react";

function LinkList(props) {
  return (
    <ul class="text-list">
      {props.items.map(item => (
        <li>
          {item.link ? (
            <a className="icon-link" href={item.link}>
              {item.name}
            </a>
          ) : (
            <p className="d-inline-block mb-0">{item.name}</p>
          )}
        </li>
      ))}
    </ul>
  );
}

export default LinkList;