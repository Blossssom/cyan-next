export const getGalleryApi = async () => {
  try {
    const result = fetch("https://photocyan.com:8000/api/common/listGallery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });

    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getStudioListApi = async () => {
  try {
    const result = fetch("https://photocyan.com:8000/api/common/listStudio", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ regionSeq: 0 }),
    });

    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getListReservationApi = async () => {
  try {
    const result = fetch(
      "https://photocyan.com:8000/api/common/listReservation",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studioSeq: 4, rsrvtDay: "20240326" }),
      },
    );

    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getProductItemApi = async () => {
  try {
    const result = fetch(
      "https://photocyan.com:8000/api/common/listPhotoItem",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      },
    );

    return result;
  } catch (err) {
    console.log(err);
  }
};
