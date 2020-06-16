# BrowserRouter
```
<BrowserRouter> 使用 HTML5 提供的 history API (pushState, replaceState 和 popstate 事件) 来保持 UI 和 URL 的同步。
```
```js
    import { BrowserRouter } from 'react-router-dom';

    <BrowserRouter
        basename={string}
        forceRefresh={bool}
        getUserConfirmation={func}
        keyLength={number}
    >
    <App />
    </BrowserRouter>
```
## basename: string
```
所有位置的基准 URL。如果你的应用程序部署在服务器的子目录，则需要将其设置为子目录。basename 的正确格式是前面有一个前导斜杠，但不能有尾部斜杠。
```
```js
<BrowserRouter basename="/calendar">
  <Link to="/today" />
</BrowserRouter>

//上例中的 <Link> 最终将被呈现为：
<a href="/calendar/today" />
```
## forceRefresh: bool
```
如果为 true ，在导航的过程中整个页面将会刷新。一般情况下，只有在不支持 HTML5 history API 的浏览器中使用此功能。
```
```js
const supportsHistory = 'pushState' in window.history;

<BrowserRouter forceRefresh={!supportsHistory} />
```
## getUserConfirmation: func
```
用于确认导航的函数，默认使用 window.confirm。例如，当从 /a 导航至 /b 时，会使用默认的 confirm 函数弹出一个提示，用户点击确定后才进行导航，否则不做任何处理。译注：需要配合 <Prompt> 一起使用。
```
```js
// 这是默认的确认函数
const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message);
  callback(allowTransition);
}

<BrowserRouter getUserConfirmation={getConfirmation} />
```
## keyLength: number
```
location.key 的长度，默认为 6。
```
```js
<BrowserRouter keyLength={12} />
```

# <HashRouter>
```
<HashRouter> 使用 URL 的 hash 部分（即 window.location.hash）来保持 UI 和 URL 的同步。
```
```js
import { HashRouter } from 'react-router-dom';

<HashRouter>
  <App />
</HashRouter>
```
```
注意： 使用 hash 记录导航历史不支持 location.key 和 location.state。在以前的版本中，我们视图 shim 这种行为，但是仍有一些问题我们无法解决。任何依赖此行为的代码或插件都将无法正常使用。由于该技术仅用于支持旧式（低版本）浏览器，因此对于一些新式浏览器，我们鼓励你使用 <BrowserHistory> 代替。
```
## basename: string
```
所有位置的基准 URL。basename 的正确格式是前面有一个前导斜杠，但不能有尾部斜杠。
```
```js
<HashRouter basename="/calendar">
  <Link to="/today" />
</HashRouter>
//上例中的 <Link> 最终将被呈现为：

<a href="#/calendar/today" />
```
## getUserConfirmation: func
```
用于确认导航的函数，默认使用 window.confirm。
```
```js
// 这是默认的确认函数
const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message);
  callback(allowTransition);
}
<HashRouter getUserConfirmation={getConfirmation} />
```
## hashType: string
```
window.location.hash 使用的 hash 类型，有如下几种：
```
```
slash - 后面跟一个斜杠，例如 #/ 和 #/sunshine/lollipops
noslash - 后面没有斜杠，例如 # 和 #sunshine/lollipops
hashbang - Google 风格的 ajax crawlable，例如 #!/ 和 #!/sunshine/lollipops
默认为 slash。
```