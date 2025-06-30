var FreqStack = function () {
  // 记录 FreqStack 中元素的最大频率
  this.maxFreq = 0;
  // 记录 FreqStack 中每个 val 对应的出现频率，后文就称为 VF 表
  this.valToFreq = new Map();
  // 记录频率 freq 对应的 val 列表，后文就称为 FV 表
  this.freqToVals = new Map();
};

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  // 修改 VF 表：val 对应的 freq 加一
  let freq = (this.valToFreq.get(val) || 0) + 1;
  this.valToFreq.set(val, freq);
  // 修改 FV 表：在 freq 对应的列表加上 val
  let vals = this.freqToVals.get(freq) || [];
  vals.push(val);
  this.freqToVals.set(freq, vals);
  // 更新 maxFreq
  this.maxFreq = Math.max(this.maxFreq, freq);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  // 修改 FV 表：pop 出一个 maxFreq 对应的元素 v
  let vals = this.freqToVals.get(this.maxFreq);
  let v = vals.pop();
  // 修改 VF 表：v 对应的 freq 减一
  let freq = this.valToFreq.get(v) - 1;
  this.valToFreq.set(v, freq);
  // 更新 maxFreq
  if (!vals.length) {
    // 如果 maxFreq 对应的元素空了
    this.maxFreq--;
  }
  return v;
};