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
    <div
      className={"relative cursor-pointer"}
      ref={listBoxRef}
      tabIndex="0"
      onKeyDown={handleKeyDown}
    >
      <div
        className="text-[32px] font-bold relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        {options && options[selectedIndex]}
      </div>
      {isOpen && (
        <ul className="flex flex-col gap-2 no-scrollbar border p-2 rounded shadow-xl mt-2 h-60 w-28 overflow-auto absolute bg-white right-0">
          {options &&
            options.map((option, index) => (
              <li
                key={option}
                ref={index === selectedIndex ? selectedOptionRef : null}
                className={`hover:bg-[#DFECFB] p-1 rounded ${index === selectedIndex ? "selected" : ""}`}
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
