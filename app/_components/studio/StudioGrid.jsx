"use client";
import React, { useCallback, useEffect, useState } from "react";
import { getStudioListApi } from "../../_api/index";
import StudioCard from "../card/StudioCard";

const MemoizedStudioCard = React.memo(StudioCard, (prevProps, nextProps) => {
  return (
    prevProps.seq === nextProps.seq &&
    prevProps.isSelected === nextProps.isSelected
  );
});

export default function StudioGrid() {
  useEffect(() => {
    getStudioListData();
  }, []);

  const [studioList, setStudioList] = useState([]);
  const [selectedStudio, setSelectedStudio] = useState(null);

  const getStudioListData = async () => {
    const result = await getStudioListApi();
    setStudioList(await result.json());
  };

  return (
    <article className="grid grid-cols-4 gap-5 w-[1440px]">
      {studioList.map((studio) => (
        <MemoizedStudioCard
          key={studio.studioSeq}
          name={studio.studioName}
          image={studio.fileWeb}
          seq={studio.studioSeq}
          itemSetter={setSelectedStudio}
          isSelected={selectedStudio === studio.studioSeq}
        />
      ))}
    </article>
  );
}
