# <span><img src="../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> Express - Sessions

## At the end of this lesson, you should:
1. Explain what a session is
1. Use express-session package as middleware
1. Save user information on the session object
1. Retrieve user information saved on the session object
1. Update user information saved on the session object
1. Destroy the session

---

## What is a session?

Cookies are little strings of data that get stored on your computer so that, when you return to a web page, it will remember what you did the last time you were there. You can specify how long a cookie will stay around on a browser before it "expires" or is deleted. This can be a specific date, or it can end as soon as the user closes their browser.

The problem with cookies is that if you store sensitive information in them (usernames, etc), someone could take the computer and view this sensitive information just by opening up the web browser. Sessions are basically cookies, but the server stores the sensitive info in its own memory and passes an encrypted string to the browser, which gets stored in the cookie. The server then uses this encrypted string to know what was saved on the user's computer.

Sessions typically only last for as long as the user keeps their window open, and aren't assigned a specific date to expire. **BE CAREFUL: IF YOU RESTART YOUR SERVER, IT WILL LOSE ALL MEMORY OF THE SESSIONS IT CREATED, AND USERS' SESSIONS WILL NOT WORK**

## Use express-session package as middleware

Install

```
npm install express-session --save
```

Require

```javascript
const session = require('express-session');
```

Use

```javascript
app.use(session({
  secret: "feedmeseymour", // a random string do not copy this value or your stuff will get hacked
  resave: false,
  saveUninitialized: false
}));
```

## Save user information on the session object

For each of the routes you create, the `req` variable will now have a session property which is itself an object. You can put things on this.

```javascript
app.get('/', (req, res)=>{ //any route will work
	req.session.anyProperty = 'any value';
});
```

## Retrieve user information saved on the session object

Once you add a property onto the session object, you can retrieve it when a user navigates to any other route. Then you can use it to make decisions based on the design of your application. Remember though, this session will end when the user closes their browser, or you restart your sever app.

```javascript
app.get('/retrieve', (req, res)=>{ // any route will work
	if(req.session.anyProperty === "something you want it to"){ // test to see if that value exists
		//do something if it's a match
	} else {
		//do something else if it's not
	}
});
```

## Update user information saved on the session object

You can overwrite a session value somewhere else too, just like any other property on a normal JS object.

```javascript
app.get('/update', (req, res) => { //any route will work
	req.session.anyProperty = 'changing anyProperty to this value';
});
```

## Destroy the session

Lastly, you can forcibly destroy a session before a user closes their browser window.

```javascript
app.get('/destroy-route', ()=>{ // any route will work
	req.session.destroy((err)=> {
		if (err) {
			//do something if destroying the session fails
		} else {
			//do something if destroying the session succeeds
		}
	});
});
```