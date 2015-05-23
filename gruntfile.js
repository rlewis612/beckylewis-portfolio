module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'), 
		concat: {
			options: {
				separator: '\n\n\n'
			}, 
			dist: {
				src: ['js/menu.js', 'js/jumpPage.js'], 
				dest: 'js/portfolio.js'
			}
		}, 
		uglify: {
			my_target:{
				files: {
					'js/portfolio.min.js' : 'js/portfolio.js'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Tasks
	grunt.registerTask('default', ['concat', 'uglify']);

}