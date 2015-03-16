//GRUNT Tips: http://24ways.org/2013/grunt-is-not-weird-and-hard/
//About grunt-sass module: https://github.com/sindresorhus/grunt-sass
module.exports = function(grunt) {
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                //takes values such as 'nested' and 'compressed' Try 'em out!
                outputStyle: 'nested'
            },
            dist: {
                
                files: {
                    'build/style.css': 'styles/SASS_sheet.scss'
                }
            } 
        },

        watch: {
         options: {
            livereload: true,
        },
        css: {
            files: ['**/*.scss'],
            tasks: ['sass'],
            options: {
                spawn: false,
            }
        }
    }


});
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass'], ['watch']);

};
