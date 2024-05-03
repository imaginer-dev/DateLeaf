export function FormatPhone(phone: string) {
  const formatted = phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  return formatted;
}
