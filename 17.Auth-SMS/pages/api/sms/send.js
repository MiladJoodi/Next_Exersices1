const request = require("request");
const otpModel = require("@/models/otp");


const handler = async (req, res) => {
  if (req.method !== "POST") {
    return false;
  }

  const { phone } = req.body;

  const code = Math.floor(Math.random() * 99999);
  console.log("Phone ->", phone);
  console.log("Code ->", code);

  request.post(
    {
      url: "http://ippanel.com/api/select",
      body: {
        op: "pattern",
        user: "09921558293",
        pass: "sabzLearn12!@",
        fromNum: "3000505",
        toNum: phone,
        patternCode: "jqcrkffb9sevvss",
        inputData: [{ "verification-code": code }],
      },
      json: true,
    },
    function (error, response, body) {
      if (!error && response.statusCode === 200) {
        //YOU‌ CAN‌ CHECK‌ THE‌ RESPONSE‌ AND SEE‌ ERROR‌ OR‌ SUCCESS‌ MESSAGE
        console.log("Response ->", response.body);
        return res.status(201).json({ message: "Code Sent Successfully :))" });
      } else {
        console.log("whatever you want");
        return res.status(500).json({ message: "UnKnown Error !!" });
      }
    }
  );
};

export default handler;
