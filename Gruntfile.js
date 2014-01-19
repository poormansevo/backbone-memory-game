module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');


    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // https://github.com/gruntjs/grunt-contrib-clean
        clean: {
            prod: ["dist"]
        },

        // https://github.com/gruntjs/grunt-contrib-uglify
        uglify: {
            prod: {
                options: {
                    // Uglify it out!  No comments, no nothing.
                    preserveComments: false,
                    mangle: true,
                    beautify: false
                },
                files: {
                    'dist/js/all.js': [
                        'js/header',
                        'js/models/*.js',
                        'js/collections/*.js',
                        'js/views/*.js',
                        'js/init.js'
                    ]
                }
            }
        },

        // https://github.com/gruntjs/grunt-contrib-copy
        copy: {
            prod: {
                files: [

                    // Node modules
                    { src: ['node_modules/**'], dest: 'dist/' },

                    { src: ['images/'], dest: 'dist/images/' },

                    { expand: true, cwd: 'css/', src: ['**'], dest: 'dist/css/'}, // makes all src relative to cwd
                    { expand: true, cwd: 'images/', src: ['**'], dest: 'dist/images/'}, // makes all src relative to cwd

                    { src: ['index-prod.html'], dest: 'dist/index.html', filter: 'isFile' },

                    // Copy over all the supporting Javascript libraries for the application
                    { src: ['js/jquery.min.js'], dest: 'dist/js/jquery.min.js', filter: 'isFile' },
                    
                    { src: ['js/underscore.min.js'], dest: 'dist/js/underscore.min.js', filter: 'isFile' },

                    { src: ['js/backbone.min.js'], dest: 'dist/js/backbone.min.js', filter: 'isFile' }

                ]
            }

        }

    });

    // Default task(s).
    grunt.registerTask('default', ['clean', 'uglify', 'copy']);

    grunt.registerTask('prod', ['clean:prod', 'uglify:prod', 'copy:prod']);

};
