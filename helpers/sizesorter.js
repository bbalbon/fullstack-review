const sortRepos = (repoArray) => {
  let sorted = false;

  while (!sorted) {
      let swapMade = false;
      for (let i = 0; i < repoArray.length; i++) {
          if (repoArray[i+1] !== undefined && repoArray[i].size < repoArray[i+1].size) {
              let temp = repoArray[i];
              repoArray[i] = repoArray[i+1];
              repoArray[i+1] = temp;
              swapMade = true;
          }
      }
      if (!swapMade) {
          sorted = true;
      }
  }
  return repoArray;
}

module.exports.sortRepos = sortRepos;