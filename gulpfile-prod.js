// let config = require('./config');
const gulp = require('gulp'),
      cnd = require('gulp-cdn-service');


//上传到cdn
gulp.task('qiniu',function(){
  return gulp.src(['dist/**'])
    .pipe(cnd({
      name: 'qiniu',
      config: {
        ACCESS_KEY: "5VlGUQr026lWXxOVZ2qTg-lujOqJzPi8A_IcyCBe",
        SECRET_KEY: "jcXpA-Je5LpHX9gStaQv-L-7qEN3jtKgq9WpSFx_",
        bucket: "pmt-sited"
      },
      debug: true, //default: true
      processPath: process.cwd(), //default: process.cwd()
      removePrefix: 'dist'
    }))
})

//正式构建
/*gulp --vs 1.0.x.x*///自动化任务默认执行入口
gulp.task('default', function () {
    gulp.start('qiniu');
});
