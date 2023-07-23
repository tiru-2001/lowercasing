const lowercasing = (param) => {
  try {
    if (typeof param !== "string") {
      throw new Error("Enter the  String");
    } else {
      if (!isNaN(param)) {
        throw new Error("Enter the valid String");
      } else {
        return param.toLowerCase();
      }
    }
  } catch (e) {
    return e;
  }
};

module.exports = lowercasing;
