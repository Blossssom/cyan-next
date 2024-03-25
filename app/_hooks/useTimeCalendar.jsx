import React, { useEffect, useState } from "react";
import { getListReservationApi } from "../_api/index";

export default function useTimeCalendar() {
  const [reservation, setReservation] = useState([]);

  useEffect(() => {
    getListReservationData();
  }, []);

  const getListReservationData = async () => {
    const response = await getListReservationApi();
    setReservation(await response.json());
  };
  return [reservation];
}
