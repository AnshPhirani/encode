import axios from "axios";

export default function runCode(code, input, languageChoice) {
  // console.log(code);
  const encodedParams = new URLSearchParams();
  encodedParams.append("LanguageChoice", languageChoice);
  encodedParams.append("Program", code);
  encodedParams.append("Input", input);

  const options = {
    method: "POST",
    url: "https://code-compiler.p.rapidapi.com/v2",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "47072f9a9cmsh08b0805cad6b7eap1e360bjsnfab20f191474",
      "X-RapidAPI-Host": "code-compiler.p.rapidapi.com",
    },
    data: encodedParams,
  };

  return axios.request(options);
}

export const CodeStatus = {
  Running: 1,
  Finished: 2,
  Error: 3,
};

export const languageCode = {
  Java: 4,
  "C#": 1,
  "C++": 7,
  Javascript: 17,
  Python: 5,
};
