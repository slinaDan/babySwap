const path = require('path');  
module.exports = {
	mode: 'development', // 或者 'production' 
	entry: './src/tp.js', // 确保这里的路径正确
	output: {
		filename: 'tp.js', // 打包后的文件名  
		path: path.resolve(__dirname, 'dist'), // 打包后文件的输出目录  
	},
	// 其他配置...  
};