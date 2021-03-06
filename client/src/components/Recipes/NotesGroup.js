import React from "react";

export function NotesGroup(props) {
    let noteGroup = props.item;

    let innerContent = noteGroup.content.map((item, index) => {
        return <li key={index}>{item}</li>;
    });

    return (
        <li>
            <div>
                <b>{props.item.heading}</b>
            </div>
            <ul>{innerContent}</ul>
        </li>
    );
}
