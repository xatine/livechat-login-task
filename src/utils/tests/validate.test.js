const { isFormValid } = require("../validate.js");

const faker = require("faker");
const {
  random: { alphaNumeric, number },
  internet: { email },
  lorem: { word }
} = faker;

const randomCorrectPassword =
  number() +
  alphaNumeric(10) +
  word().toUpperCase() +
  alphaNumeric(1).toLowerCase();

describe("isFormValid", () => {
  it("empty values", () => {
    expect(
      Object.keys(
        isFormValid({
          email: "",
          password: ""
        })
      ).length
    ).toBe(2);
  });

  it("correct email and password", () => {
    expect(
      Object.keys(
        isFormValid({
          email: email(),
          password: randomCorrectPassword
        })
      ).length
    ).toBe(0);
  });

  it("incorrect email and password", () => {
    expect(
      Object.keys(
        isFormValid({
          email: alphaNumeric(),
          password: alphaNumeric(3)
        })
      ).length
    ).toBe(2);
  });

  it("incorrect password", () => {
    expect(
      Object.keys(
        isFormValid({
          email: email(),
          password: alphaNumeric(3)
        })
      ).length
    ).toBe(1);
  });

  it("incorrect email", () => {
    expect(
      Object.keys(
        isFormValid({
          email: alphaNumeric(),
          password: randomCorrectPassword
        })
      ).length
    ).toBe(1);
  });
});
