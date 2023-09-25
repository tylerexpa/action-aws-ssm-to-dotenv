export const formatDotenv = (prefix = '') =>
  ({Name, Value}) => `${prefix}${Name}=${JSON.stringify(Value)}`
