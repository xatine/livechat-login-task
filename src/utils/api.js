const loginRequest = async (email, password) => {
  return await new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000);
  }).then(() => {
    if (email === "test@test.pl" && password === "Password1") {
      return "gdIpPw628dh2"; // mocked token
    } else {
      throw Error("Invalid email or password");
    }
  });
};

export default loginRequest;
