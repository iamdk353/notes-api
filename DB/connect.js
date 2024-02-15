import mongoose from "mongoose";
function connect() {
  return mongoose.connect("mongodb+srv://iamdk353:iamdk353@blog.alaokrb.mongodb.net/");
}
export default connect;
