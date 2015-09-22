module.exports = function (grunt) {

    grunt.initConfig({
        'less': {
            'options': {
                sourceMap: false
            },
            'dist': {
                'files': {
                    'sources/css/app.css' : 'sources/less/app.less'
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'assets/css/app.min.css': ['sources/css/**/*.css']
                }
            }
        },
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 5
                },
                files: [{
                    expand: true,
                    cwd: 'sources/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'assets/img/'
                }]
            }
        },
        uglify: {
            my_target: {
                options: {
                    sourceMap: false
                },
                files: {
                    'assets/js/app.min.js': ['sources/js/**/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('css', ['less', 'cssmin']);
    grunt.registerTask('js', ['uglify']);
    grunt.registerTask('img', ['imagemin']);
};