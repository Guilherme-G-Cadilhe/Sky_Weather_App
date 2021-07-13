let p = document.querySelector('#teste');

p.innerText += `Tudo bem`;

async function pegaData() {
  try {
    let response = await fetch('http://localhost:3000/');
    const data = await response.json();

    p.innerText = data[1].name;
  } catch (error) {
    console.log(error);
  }
}
pegaData();
