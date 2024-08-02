"use client";
import React, { useState } from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { BlockPicker, ChromePicker, ColorResult } from "react-color";

const professionalVideoColors = [
  "#000000", // Black
  "#FFFFFF", // White
  "#404040", // Dark Gray
  "#808080", // Gray
  "#C0C0C0", // Silver
  "#E0E0E0", // Light Gray
  "#003366", // Dark Blue
  "#336699", // Medium Blue
  "#6699CC", // Blue
  "#99CCFF", // Light Blue
  "#990000", // Dark Red
  "#CC3333", // Red
  "#FF6666", // Light Red
  "#663300", // Dark Brown
  "#996633", // Brown
  "#CC9966", // Light Brown
  "#006600", // Dark Green
  "#339933", // Green
  "#66CC99", // Light Green
  "#FFFF00", // Yellow
];

export const FillPanel = observer(() => {
  const store = React.useContext(StoreContext);
  const [isPickerActive, setIsPickerActive] = useState(false);

  const handleColorClick = (color: string) => {
    store.setBackgroundColor(color);
  };

  const handlePickerClick = () => {
    setIsPickerActive(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const pickerElement = document.getElementById("color-picker");
    if (pickerElement && !pickerElement.contains(event.target as Node)) {
      setIsPickerActive(false);
    }
  };

  React.useEffect(() => {
    if (isPickerActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPickerActive]);

  return (
    <>
      <div className="text-sm px-[16px] pt-[16px] pb-[8px] font-semibold">
        Background Colour
      </div>
      <div className="flex items-center justify-center">
        <BlockPicker
          colors={professionalVideoColors}
          color={store.backgroundColor}
          onChangeComplete={(color: ColorResult) => handleColorClick(color.hex)}
        />
      </div>
      <div className="flex items-center justify-center mt-4">
        <button
          onClick={handlePickerClick}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Pick a Color
        </button>
        {isPickerActive && (
          <div id="color-picker" style={{ position: "absolute", zIndex: 2 }}>
            <ChromePicker
              color={store.backgroundColor}
              onChangeComplete={(color: ColorResult) => handleColorClick(color.hex)}
            />
          </div>
        )}
      </div>
    </>
  );
});
