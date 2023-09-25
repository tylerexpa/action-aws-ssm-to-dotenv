export const formatShell = (prefix = '') =>
  ({Name, Value}) => `export ${prefix}${Name}=${JSON.stringify(Value)}`
