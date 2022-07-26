<h1>tsconfig的配置
有json的情况下  cmd中进行 tsc-w   开始监听  json开启是  tsc --init





tsconfig  里面的

include  :指定哪些路径的文件需要编译，可以多写 **=目录 *=文件

exclude：不包含哪些 除去哪些文件，就是不包含哪些文件，不被编译，一般情况下 是不被编译的

files ：包含关系，包含数组的文件被编译

compilerOptions: 里面target 可以改变编译的模式 例如：es3,es4,es5,es6

target:用来指定编译之后的版本目标

**outDir:表示的是 输出的文件  编译后文件存放的位置** 

outFile:把所有的文件大包到一个文件中进行编译

removeComments： 默认是fales  改变成true的话  注释会被移除

lib：是个数组，可以指定用到哪些库 默认值是dom和es6

module：用来指定编译的版块