
### Callback pattern

You see the word "end" shows up before the XXXXX XXXXX

```js 
const delay = (seconds, cb) => {
	setTimeout(cb, seconds * 1000)
}

function hideString(str) {
	console.log(str.replace(/[a-zA-z]/g, 'X'))
}

delay(0, () => hideString("Hello world"))

console.log('end');
```
Result
```
end
XXXXX XXXXX
```