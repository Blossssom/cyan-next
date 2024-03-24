"use client";

import { useState, useEffect, useRef } from "react";

export default function useListBox(options) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const listBoxRef = useRef(null);
  const selectedOptionRef = useRef(null);

  useEffect(() => {
    console.log("useListBox", options);
    const handleClickOutside = (event) => {
      if (listBoxRef.current && !listBoxRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prevIndex) => (prevIndex + 1) % options.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex(
          (prevIndex) => (prevIndex - 1 + options.length) % options.length,
        );
        break;
      case "Enter":
      case "Space":
        e.preventDefault();
        setIsOpen(!isOpen);
        break;
      case "Escape":
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  //   useEffect(() => {
  //     if (isOpen) {
  //       selectedOptionRef.current?.scrollIntoView({
  //         block: "nearest",
  //       });
  //     }
  //   }, [selectedIndex, isOpen]);

  return {
    listBoxRef,
    selectedOptionRef,
    isOpen,
    selectedIndex,
    setSelectedIndex,
    setIsOpen,
    handleKeyDown,
  };
}
