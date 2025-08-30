const target = {
  field1: 1,
  field2: undefined,
  field3: 'hxt',
  field4: {
    child: 'child',
    child2: {
      child2: 'child2'
    }
  },
  field5: [2, 4, 8]
}
target["target"] = target;//循环引用
//es6 新的数据类型hashMap 
function clone(target, map = new WeakMap()) {
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);
    for (const key in target) {
      cloneTarget[key] = clone(target[key], map);
    }

    return cloneTarget;
  } else {
    return target
  }
}
console.log(clone(target));