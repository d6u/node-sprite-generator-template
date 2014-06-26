module.exports = function (grunt)  {

  grunt.initConfig({
    spriteGenerator: {

      regularSprite: {
        src: [
          'images-sprite/regular/*.png'
        ],
        spritePath: 'images-final/sprite.png',
        stylesheet: 'css', // it can also generate `scss` or `less`
        stylesheetPath: 'css/sprite.css'
      },

      retinaSprite: {
        src: [
          'images-sprite/retina/*.png'
        ],
        spritePath: 'images-final/sprite@2x.png',
        stylesheet: 'css', // it can also generate `scss` or `less`
        stylesheetPath: 'css/sprite-retina.css',
        stylesheetOptions: {
          pixelRatio: 2,
          nameMapping: function(name) {
            var paths = name.split('/');
            var match = /^(.+)(?:@2x\..+)$/.exec(paths[paths.length - 1]);
            if (match) {
              return match[1];
            } else {
              throw "Could not match \"@2x\" in image name";
            }
          }
        }
      }

    }
  });

  grunt.loadNpmTasks('node-sprite-generator');
  grunt.registerTask('default', ['spriteGenerator:regularSprite',
                                 'spriteGenerator:retinaSprite']);
};
