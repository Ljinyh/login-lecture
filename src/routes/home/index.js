"use strict"; //이크마스크립트 문법을 중시하겠다. 명시!

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl"); // 컨트롤러 안에 있는 것을 불러온다.

router.get("/", ctrl.home);

router.get("/login", ctrl.login);

module.exports = router;