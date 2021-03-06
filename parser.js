const fs = require('fs');
const path = require('path');
const md = new require("markdown-it")();
const rimraf = require('rimraf');

const PRINCIPLES_DIR = "./principles";
const QUESTIONS_DIR = "./questions";
const UNRIPE_DIR = "./unripe";

// clean up
rimraf("./lib");
fs.mkdir('./lib');

const directory = fs.readdirSync(".");

const parseDirectory = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const stat = fs.statSync(file);
    if (stat.isDirectory) {
      parseDirectory(path.resolve(dir,file));
    }
  });
};