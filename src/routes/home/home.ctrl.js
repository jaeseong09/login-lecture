"use strict";

const hello = (req, res) =>{
  res.render("home/index"); // html 코드 ejs 불러오기
};

const login = (req, res) =>{
  res.render("home/login"); // html 코드 ejs 불러오기
};

module.exports = {
  hello,
  login,
};