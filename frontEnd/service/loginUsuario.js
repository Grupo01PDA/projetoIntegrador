import fetch from "node-fetch"

async function loginUsuario(user) {
  let options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }

  await fetch("http://localhost:3000/usuario/login", options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export default loginUsuario