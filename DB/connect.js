import mongoose from "mongoose";
function connect() {
  return mongoose.connect(process.env.MONGO_URL);
}
export default connect;
