"use strict";

const express = require('express');
const router = express.Router();
const ctrl = require("./home.ctrl");
const limiter = require("../../models/limiter.js");

router.get("/", ctrl.output.home);
router.get("/index", ctrl.output.home);
router.get('/login', ctrl.output.login);
router.get('/register', ctrl.output.register);
router.get('/download', limiter, ctrl.output.download);
router.get('/contact', ctrl.output.contact);

router.post('/login', ctrl.process.login);
router.post('/register', ctrl.process.register);
router.post('/contact', limiter, ctrl.process.contact);

module.exports = router;
