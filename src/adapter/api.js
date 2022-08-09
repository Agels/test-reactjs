export function getList() {
    return fetch('https://api-dev.hijiofficial.com/v3/products/GetAll.php')
      .then(data => data.json())
  }