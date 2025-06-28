//枚举类型
const STATUS = {
  RWADT: Symbol('ready'),
  RUNNING: Symbol('running'),
  DONE: Symbol('done')
}
let state = STATUS.READY;
if (state === STATUS.READY) {
  console.log('ready');
}