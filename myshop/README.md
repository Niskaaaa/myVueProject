Swiper要在获取数据之后创建，所以采用了watch监视数据的改变， this.$nextTick()回调函数，将回调延迟到下次 DOM 更新循环之后执行



v-if 不解析 

v-show 解析了 只是不显示 



<keep-alive> 缓存路由组件对象

replace模式



路由组件懒加载：打包的时候进行代码分割

![image-20201102012803101](C:\Users\11623\AppData\Roaming\Typora\typora-user-images\image-20201102012803101.png)

只有请求对应的路由路径才会执行