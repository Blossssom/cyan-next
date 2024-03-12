export const getGalleryApi = async () => {
  try {
    const result = fetch("/api/common/listGallery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });

    return result;
  } catch (err) {
    console.log(err);
  }
};
