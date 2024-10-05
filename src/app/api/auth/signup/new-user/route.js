import connectDB from "@/lib/connectDB";

export const POST = async (req) => {
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const newUser = await req.json();
    const res = await userCollection.insertOne(newUser);
    return Response.json({ message: "new user create" });
  } catch (error) {
    return Response.json({ message: "Somthing wrong" });
  }
};
