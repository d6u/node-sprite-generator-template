module.exports = function (grunt)  {

  grunt.initConfig({

    spriteGenerator: {
      sprite: {
        src: [
          'images-sprite/*.png'
        ],
        spritePath: 'images-final/sprite.png',
        stylesheet: 'less',
        stylesheetPath: 'less/sprite.less'
      }
    }

  });

  grunt.loadNpmTasks('node-sprite-generator');
};
