<h1>vue3


**三大框架**

React:软强制

Angular:强制

Vue:渐进式框架

**Vue3优势：**

1.vue最主要的特点就是响应式机制，模板，以及对象式的组件声明语法，而3.0对这三部分都做了更改

<hr/>
vue3中是没有this指向的 setup是一个函数

vue3中的setup执行顺序是高于vue2中的created的

<hr/>
**vue2和vue3对比**

在vue2版本中创建一个vue实例是通过new Vue()来实现的，而vue3是用过使用createApp这个API返回一个应用实例

传递给createApp的选项用于配置根组件。当我们挂载应用时，该组件被用作渲染的起点

<hr/>
**Vue3移除了Vue2的方法和属性**

1.删掉了vue2中的过滤器filter功能。与此同时，官方建议：用方法调用或计算属性特换过滤器。

2.vue3不支持eventBus了，因为原先实例上的三个方法$on,$off,$once被删除掉了

<hr/>
**ref**

使用ref定义的变量在模板中用插值语句直接使用，因为ref方法定义的变量本质上是一个对象，所以在setup函数中使用的时候需要加上**.value**

不管ref还是函数都需要**return**出去才能在模板中使用

<hr/>
**reactive**

reactive返回对象的响应式副本

reactive的用法和ref的用法相似，也是将数据变成响应式数据，当数据发生变化时UI也会自动更新，不同的是ref用于基本数据类型，而reactive是用于复杂数据类型，比如对象

<hr/>
**在数据上添加ts**

和之前写ts差不多 在数据后面 ：类型   例如 **<span style='color:red'> cui：string = ‘我爱小崔’ </span>**

<hr/>

<h3>创建vue3项目
    
</h3>

1.在文件夹根目录进入小黑框cmd

2.在cmd中创建项目  **vue create 项目名**

3.![1659355083029](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1659355083029.png)

点击最后一个  自己创建

4.

![1659355116778](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1659355116778.png)

​		1）既然是vue3的创建  就要有ts

​			**1.2.4.5.6  这五个选项**

5.![1659355211997](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1659355211997.png)

**选择的是3.x  因为我们创建的是vue3**

6.

![1659355264506](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1659355264506.png)

**第一个是N**

7.

![1659355284997](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1659355284997.png)

**第二个是Y**

8.

![1659355295692](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1659355295692.png)

**第三个是N**

9.![1659355311110](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1659355311110.png)

**第四个选Sass/SCSS**

10.![1659355325046](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1659355325046.png)

**第五个选 In package.json**

11.![1659355338996](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1659355338996.png)

**最后一个N**



12.这样就创建完了，接下来进入项目，启动项目就好

​    1）进入项目  **cd 项目名**

​    2）启动项目  **npm run serve** 

<hr/>

创建vite项目

1.进入文件夹的根目录 进入小黑框cmd

2.在小黑框中输入 **npm init vite@latest**

3.![1659355811239](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1659355811239.png)

这是需要起项目名字

4.

![1659355878194](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1659355878194.png)

选择**vue**  因为我们要使用vue创建

5.

![1659356647033](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1659356647033.png)

选择**vue-ts**

6.

![1659356678408](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1659356678408.png)

接下来按照步骤进行操作  

进入项目  **cd  项目名**

下载依赖  **npm install**

启动项目  **npm run dev**

