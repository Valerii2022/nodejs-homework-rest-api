const { BASE_URL } = process.env;

const createVerifyEmail = (email, verificationToken) => {
  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click verify email</a>`,
  };
  return verifyEmail;
};

export default createVerifyEmail;
