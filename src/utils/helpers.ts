export const emailIsValid = (email: string) => {
  // const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const re =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  return re.test(email.toLowerCase());
};
