function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  const token = '065d3b08c94396a8eddfa50375264d4eee4253e0';

  fetch('https://api.github.com/repos/learn-co-students/javascript-fetch-lab-nyc-web-040218/forks').then(resp => resp.json()).then(json => console.log(json));

  
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
