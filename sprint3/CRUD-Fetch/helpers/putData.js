const putDataFetch = async(url, objeto) => {
    try {
        const options = {
          method: "PUT",
          headers: { "Content-type": "application/json; charset=UTF-8" },
          body: JSON.stringify(objeto),
        };

        const response = await fetch(url, options);
        const resp = await response.json();
        console.log(resp);
        return resp;
        
    } catch (error) {
        console.log(error)
    }
};

export default putDataFetch;