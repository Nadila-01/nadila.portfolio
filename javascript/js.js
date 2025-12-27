const params = new URLSearchParams(window.location.search);

document.getElementById("profilResult").innerHTML = `
  <p>NIM: ${params.get("nim")}</p>
  <p>Nama: ${params.get("nama")}</p>
  <p>Alamat: ${params.get("alamat")}</p>
  <p>Hobi: ${params.get("hobi")}</p>
  <p>Instagram: ${params.get("instagram")}</p>
`;

