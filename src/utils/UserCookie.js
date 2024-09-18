export const setUserCokie = (key, value) => {
  setCookie(key, value, { 'Secure': true });
}

export const getUserCokie = (key) => {
  return getCookie(key);
}

export const removeUserCokie = (key) => {
  deleteCookie(key);
}
const setCookie = (name, value, options = {}) => {
  const defaults = {
    path: '/',
    Secure: true, 
    SameSite: 'None' 
  };
  const settings = { ...defaults, ...options };
  
  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
  for (let optionKey in settings) {
    updatedCookie += "; " + optionKey;
    let optionValue = settings[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
  
  document.cookie = updatedCookie;
};

const getCookie = (name) => {
  const matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([.$?*|{}()[]\\\/+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

const deleteCookie = (name) => {
  setCookie(name, "", {
    'max-age': -1
  });
}
