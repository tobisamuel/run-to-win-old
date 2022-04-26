export default async function verifyTransaction(req, res) {
  const { ref } = req.query;
  const baseUrl = `https://api.paystack.co/transaction/verify/${ref}`;
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${process.env.NEXT_PUBLIC_SECRET_KEY}`
  );
  const options = {
    method: "GET",
    headers: myHeaders,
  };

  const response = await fetch(baseUrl, options).then((response) =>
    response.json()
  );
  res.status(200).json(response);
}
