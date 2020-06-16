# Link
```js
    import { Link } from 'react-router-dom';
    <Link to="/about">About</Link>
```
## to:string
```
一个字符串形式的链接地址，通过 pathname、search 和 hash 属性创建。
```
```js
<Link to='/courses?sort=name' />
```
## to: object
```
一个对象形式的链接地址，可以具有以下任何属性：
```
```
pathname - 要链接到的路径
search - 查询参数
hash - URL 中的 hash，例如 #the-hash
state - 存储到 location 中的额外状态数据
```
```js
<Link to={{
  pathname: '/courses',
  search: '?sort=name',
  hash: '#the-hash',
  state: {
    fromDashboard: true
  }
}} />
```
## replace: bool
```
当设置为 true 时，点击链接后将替换历史堆栈中的当前条目，而不是添加新条目。默认为 false。
```
```js
<Link to="/courses" replace />
```
## innerRef: func
```
允许访问组件的底层引用。
```
```js
const refCallback = node => {
  // node 指向最终挂载的 DOM 元素，在卸载时为 null
}

<Link to="/" innerRef={refCallback} />
```
## others
```
你还可以传递一些其它属性，例如 title、id 或 className 等。
```
```js
<Link to="/" className="nav" title="a title">About</Link>
```

# NavLink
```
一个特殊版本的 <Link>，它会在与当前 URL 匹配时为其呈现元素添加样式属性。
```
```js
import { NavLink } from 'react-router-dom';
<NavLink to="/about">About</NavLink>
```
## activeClassName: string
```
当元素处于激活状态时应用的类，默认为 active。它将与 className 属性一起使用。
```
```js
<NavLink to="/faq" activeClassName="selected">FAQs</NavLink>
```
## activeStyle: object
```
当元素处于激活状态时应用的样式。
```
```js
const activeStyle = {
  fontWeight: 'bold',
  color: 'red'
};

<NavLink to="/faq" activeStyle={activeStyle}>FAQs</NavLink>
```
## exact: bool
```
如果为 true，则只有在位置完全匹配时才应用激活类/样式。
```
```js
<NavLink exact to="/profile">Profile</NavLink>
```
## strict: bool
```
如果为 true，则在确定位置是否与当前 URL 匹配时，将考虑位置的路径名后面的斜杠。有关更多信息，请参阅 <Route strict> 文档。
```
```js
<NavLink strict to="/events/">Events</NavLink>
``` 
## isActive: func
```
添加额外逻辑以确定链接是否处于激活状态的函数。如果你要做的不仅仅是验证链接的路径名与当前 URL 的路径名相匹配，那么应该使用它。
```
```js
// 只有当事件 id 为奇数时才考虑激活
const oddEvent = (match, location) => {
  if (!match) {
    return false;
  }
  const eventID = parseInt(match.params.eventID);
  return !isNaN(eventID) && eventID % 2 === 1;
}

<NavLink to="/events/123" isActive={oddEvent}>Event 123</NavLink>
```
## location: object
```
isActive 默认比较当前历史位置（通常是当前的浏览器 URL）。你也可以传递一个不同的位置进行比较。
```