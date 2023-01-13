const deleteDataFetch = async (url) => {
  try {
    const option = {
      method: "DELETE",
    };
    const response = await fetch(url, option);
    const resp = await response.json();
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export default deleteDataFetch;
