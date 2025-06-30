const subarraysDivByK = (A, K) => {
  let preSumModK = 0;
  let count = 0;
  const map = { 0: 1 };
  for (let i = 0; i < A.length; i++) {
    preSumModK = (preSumModK + A[i]) % K; // 递推式子
    if (preSumModK < 0) {
      preSumModK += K;
    }
    if (map[preSumModK]) {      // 已经存在于map
      count += map[preSumModK]; // 把对应的次数累加给count
      map[preSumModK]++;        // 并且更新出现次数，次数+1
    } else {
      map[preSumModK] = 1;      // 之前没出现过，初始化值为1
    }
  }
  return count;
};