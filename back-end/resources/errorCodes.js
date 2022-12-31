export default {
  GRAPHQL_PARSE_FAILED: {
    code: 400,
    message: 'invalid input format',
  },
  GRAPHQL_VALIDATION_FAILED: {
    code: 400,
    message: 'invalid input schema',
  },
  BAD_USER_INPUT: {
    code: 400,
    message: 'invalid input value',
  },
  UNAUTHENTICATED: {
    code: 401,
    message: 'unauthenticated',
  },
  FORBIDDEN: {
    code: 403,
    message: 'unauthorized',
  },
  INTERNAL_SERVER_ERROR: {
    code: 500,
    message: 'something went wrong',
  },
  GENERIC_ERROR: {
    code: 500,
    message: 'something went wrong',
  },
};
