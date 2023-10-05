
import APIURL from "./ApiUrl"
export default  async function fetchProducts() {
    const url = APIURL+"products";
     console.log(APIURL)
    return fetch(url, {
      method: 'GET'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then(result => {
        return result;
      })
      .catch(error => {
        console.error('Error: ', error);
      });
  }