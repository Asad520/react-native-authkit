export const getBuilders = (builder) => ({
  query: (url, options = {}) =>
    builder.query({
      query:
        typeof url === 'string'
          ? (arg) => ({
              params: arg ?? {},
              method: 'GET',
              url,
            })
          : url,
      ...options,
    }),
  mutation: (
    url,
    { method, ...options } = {
      method: 'POST',
    },
  ) =>
    builder.mutation({
      query: (payload) => ({
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        method: method ?? 'POST',
        url,
      }),
      ...options,
    }),
});
