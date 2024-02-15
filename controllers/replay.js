function response(res, found, msg = "not found ", failed = 404, success = 200) {
  if (!found) res.status(failed).json({ messege: msg });
  else res.status(success).json({ found });
}
export default response;
