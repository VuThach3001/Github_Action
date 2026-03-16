const core = require('@actions/core');
const exec = require('@actions/exec');

async function run(){
  core.notice('Hello from my custom javascript action!');
}

run();