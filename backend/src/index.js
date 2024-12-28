const express = require("express");
let unirest = require("unirest");

const app = express();
const PORT = 8000;
const SAFARICOM_SANBOX_URL_AUTH =
  "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";

app.get("/authorize", (req, res) => {
  req = unirest("GET", SAFARICOM_SANBOX_URL_AUTH)
    .headers({
      Authorization:
        "Basic WVhlQkVWdnJ1bzVidlpYYWNYSzloQTYzbFpVNXI0ZzdBR2ZWQ0IyZmhvZ2pIYlhqOndNajlMZEdSejk3V0RFNnVsWjFkMGdLV2FZbDdVdHk2NFdVNVpEQWpnUW1HcE5OSVNNM3dxUEFCN0F1NVFZQjA=",
    })
    .send()
    .end((res) => {
      if (res.error) throw new Error(res.error);
      console.log(res.raw_body);
    });
  res.send("Authorization successful");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
