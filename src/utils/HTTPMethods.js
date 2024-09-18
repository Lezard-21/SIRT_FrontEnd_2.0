import { getUserCokie } from "./UserCookie"

export const get = async (url) => {
  const token = getUserCokie("token")
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    const jsonResponse = await response.json()

    if (!response.ok) return { error: true, ...jsonResponse }

    return { error: false, ...jsonResponse }
  } catch (error) {
    return { error: true, message: 'Ha ocurrido un error al intentar conectarse con el servidor, intentalo más tarde.' }
  }
}

export const post = async (url, data) => {
  const token = getUserCokie("token")
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })

    const jsonResponse = await response.json()

    if (!response.ok) return { error: true, ...jsonResponse }

    return { error: false, ...jsonResponse }
  } catch (error) {
    return { error: true, message: 'Ha ocurrido un error al intentar conectarse con el servidor, intentalo más tarde.' }
  }
}

export const deleteMethod = async (url, id) => {
  const token = getUserCokie("token")
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });

    const jsonResponse = await response.json();

    if (!response.ok) return { error: true, ...jsonResponse };

    return { error: false, ...jsonResponse };
  } catch (error) {
    return { error: true, message: 'Ha ocurrido un error al intentar conectarse con el servidor, intentalo más tarde.' };
  }
}

export const postAuth = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })

    const jsonResponse = await response.json()

    if (!response.ok) return { error: true, ...jsonResponse }

    return { error: false, ...jsonResponse }
  } catch (error) {
    return { error: true, message: 'Ha ocurrido un error al intentar conectarse con el servidor, intentalo más tarde.' }
  }
}