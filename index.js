const core = require('@actions/core');

try {
  const nameToGreet = core.getInput('name');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("greeting", `Hello ${nameToGreet}! The time is ${time}`);
} catch (error) {
  core.setFailed(error.message);
}
