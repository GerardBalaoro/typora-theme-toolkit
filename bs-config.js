module.exports = {
	server: {
		files: ["./src/**/*.*"],
		baseDir: "preview",
		routes: {
	        "/theme": "theme"
	    },
		middleware: {
			1: require('connect-history-api-fallback')({
				index: '/index.html',
				verbose: true
			})
		}
	}
};