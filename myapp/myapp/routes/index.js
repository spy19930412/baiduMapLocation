var express = require('express');
var router = express.Router();


var formidable = require('formidable');
var fs = require('fs'); //node.js核心的文件处理模块





/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.post('/fileUpload', function(req, res) {
    var form = new formidable.IncomingForm(); //创建上传表单
    form.encoding = 'utf-8'; //设置编辑
    form.uploadDir = 'public/upload'; //设置上传目录
    form.keepExtensions = true; //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024; //文件大小

    form.parse(req, function(err, fields, files) {
        var result = {
            res: false,
            msg: '上传失败'
        };
        if (err) {
            console.dir(err);
            res.json(result);
            return;
        }
    });

    var file = new formidable.File();
    files.name = text;

});

module.exports = router;
