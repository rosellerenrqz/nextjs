import { MongoClient } from "mongodb";
// /api/new-meetup

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://test:x0AUXfRrMdkdUe14@cluster0.mijxkzw.mongodb.net/meetups?retryWrites=true&w=majority",
    );

    const db = client.db();

    const meetupsColletion = db.collection("meetups");
    const result = await meetupsColletion.insertOne(data);

    console.log(result);
    client.close();

    res.status(201).json({ message: "Meetup Inserted" });
  }
};

export default handler;
