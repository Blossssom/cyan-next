"use client";
import React, { useEffect, useState } from "react";
import { getStudioListApi } from "../../_api/index";
import StudioCard from "../card/StudioCard";

export default function StudioGrid() {
  useEffect(() => {
    getStudioListData();
  }, []);

  const [studioList, setStudioList] = useState([]);

  const getStudioListData = async () => {
    const result = await getStudioListApi();
    setStudioList(await result.json());
  };
  return (
    <div className="grid grid-cols-4 gap-5 w-[1440px]">
      {studioList.map((studio) => (
        <StudioCard
          key={studio.studioSeq}
          name={studio.studioName}
          image={studio.fileWeb}
        />
      ))}
    </div>
  );
}
