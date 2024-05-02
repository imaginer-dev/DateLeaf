export const isValidName = (name: string) => {
  return name.length >= 2;
};

export const isValidPhone = (phone: string) => {
  return phone.length == 11;
};

export function formatPhone(phone: string) {
  const formatted = phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  return formatted;
}

export const isValidEmail = (email: string): boolean => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
};

export const isValidPassword = (password: string) => {
  return password.length >= 6;
};

export const isValidPwCheck = (pwCheck: string, password: string) => {
  return pwCheck == password;
};
