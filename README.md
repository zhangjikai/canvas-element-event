# Canvas 元素事件处理

## 功能
* 支持自定义对象的 `addListener` 和 `removeListener`
* 支持`mouseover`, `mouseout`, `mouseover`, `click` 事件

## 参考文章
* [Custom events in JavaScript](https://www.nczonline.net/blog/2010/03/09/custom-events-in-javascript/)
* [深入理解JavaScript系列（3）：全面解析Module模式](http://www.cnblogs.com/TomXu/archive/2011/12/30/2288372.html)
* [javascript中constructor的作用](http://www.ghugo.com/javascript-constructor/)
* [调用父类方法](https://www.bennadel.com/blog/1566-using-super-constructors-is-critical-in-prototypal-inheritance-in-javascript.htm)

## 知识点
* 自定义事件
* apply call
* addEventListener 添加参数
* 调用父类方法 


## 判断
### 判断对象为`null`或者`undefined`
```js
if (variable == null) {
    // code
}
```
因为 `null == undefined` 为true
### 判断是否存在属性
```js
if(myObj.hasOwnProperty("<property name>")){
    alert("yes, i have that property");
}
```
或者
```
if("<property name>" in myObj) {
    alert("yes, i have that property");
}
```