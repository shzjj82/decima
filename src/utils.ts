export const validate = (num: number) => {
  if (isNaN(num)) return { error: true, message: '非法数字' }
  return { error: false }
}

export const pipe = (val: number) => {
  const { error, message } = validate(val);
  if (error) throw Error(message)
  return val;
}
