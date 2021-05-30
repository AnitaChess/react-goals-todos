import React from "react";

export default function List(props) {
    const {items, remove, toggle} = props;
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                <span
                    onClick={() => toggle && toggle(item.id)}
                    style={{textDecoration: item.complete ? "line-through" : "none"}}
                >
                  {item.name}
                </span>
                    <button onClick={() => remove(item)}>
                        x
                    </button>
                </li>
            ))}
        </ul>
    )
}
