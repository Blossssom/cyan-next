"use client";
import React from "react";
import useListBox from "../../_hooks/useListBox";

export default function ListBox(props) {
  const { options } = props;
  const {
    listBoxRef,
    selectedOptionRef,
    isOpen,
    selectedIndex,
    setSelectedIndex,
    setIsOpen,
    handleKeyDown,
  } = useListBox(options);
  return (
    <div ref={listBoxRef} className="" tabIndex="0" onKeyDown={handleKeyDown}>
      <div className="text-[32px] font-bold" onClick={() => setIsOpen(!isOpen)}>
        {options && options[selectedIndex]}
      </div>
      {isOpen && (
        <ul className="listBox__options">
          {options &&
            options.map((option, index) => (
              <li
                key={option}
                ref={index === selectedIndex ? selectedOptionRef : null}
                className={`listBox__option ${index === selectedIndex ? "selected" : ""}`}
                onClick={() => {
                  setSelectedIndex(index);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
