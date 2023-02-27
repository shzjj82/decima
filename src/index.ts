import { pipe } from './utils'
export default (digits: number, precision = 12) => {
  return {
    precision(result: number) {
      return parseFloat(pipe(result).toPrecision(precision));
    },
    format(val: number) {
      let str = pipe(val).toString();
      // 过滤小数
      let result = str.replace(/[^\d^.]+/g, '');
      // 去除无效数字
      result = result.replace(/0*(\d+)/, '$1');
      // 保留digits位小数
      let reg = new RegExp(`^[^0-9]*([0-9][0-9]*.?[0-9]{0,${digits}})?.*$`, 'g')

      return Number(result.replace(reg, '$1'));
    }
  }
};
