const Assignment1 = () => {
  const str = "abcdef";
  const reversedStr = [...str].reverse().join("");

  const arr = [1, 2, 3, 5, 4, 2, 6, 4];
  const notDupArr = [];
  notDupArr[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < notDupArr.length; j++) {
      if (arr[i] === notDupArr[j]) {
        count++;
      }
    }
    if (count === 0) notDupArr.push(arr[i]);
  }

  const newArr = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
  newArr.sort();
  const countArr = [];
  for (let i = 0; i < newArr.length; i++) countArr[newArr[i]] = 0;
  for (let i = 0; i < newArr.length; i++) countArr[newArr[i]]++;
  let tempArr = [...countArr];
  tempArr.sort();
  let maxCount = 0;
  for (let i = tempArr.length - 1; i >= 0; i--) {
    if (tempArr[i]) {
      maxCount = tempArr[i];
      break;
    }
  }
  let maxNumber = 0;
  for (let i = 0; i < countArr.length; i++) {
    if (maxCount === countArr[i]) {
      maxNumber = i;
      break;
    }
  }

  const obj = {
    value: maxNumber,
    count: maxCount,
  };
  console.log(obj);
  const message = JSON.stringify(obj);

  return (
    <div>
      <div>1.{reversedStr}</div>
      <div>2.{notDupArr}</div>
      <div>3.{message}</div>
      <div>4.</div>
    </div>
  );
};
export default Assignment1;
