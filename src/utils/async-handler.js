// a generic async handler to handle db get requests or requests that take some time to
// resolve and might lead to some errors, to handle which, we use inbuilt express handler,
// invoked using next(err)

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
