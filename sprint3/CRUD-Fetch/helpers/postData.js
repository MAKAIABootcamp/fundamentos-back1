const postDataFetch = async (url, objeto) => {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(objeto),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    };
    const response = await fetch(url, options);
    const resp = await response.json();
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export default postDataFetch;