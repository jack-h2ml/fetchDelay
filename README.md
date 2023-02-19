## About

The @h2ml/fetchdelay library provides a simple function which wraps the native <code>fetch()</code> method, allowing for control over when the returned <code>Promise</code> resolves or rejects. 

## Quick Start Guide

### The [fetchDelay](#module_@h2ml/fetchreplace.fetchDelay) Function

The <code>fetchDelay</code> function is invoked by providing a <code>url</code> and <code>options</code>, this will return a <code>Promise</code>, which will not resolve until after the duration specified by <code>options.minDelay</code> and will reject if the internal <code>fetch()</code> call does not resolve before the duration specified by <code>options.maxDelay</code>.

```
import { fetchDelay } from '@h2ml/fetchdelay';

(async () => {
	try {
		// This will resolve after a minimum of 3 seconds, 
		// and will reject after 5 seconds if the resource does not load.
		const res1 = await fetchDelay('https://ipapi.co/json', {
			minDelay: 3000,
			maxDelay: 5000
		});
		const json1 = await res.json();
		console.log(json);

		// This will reject, as the requested resource 
		// will not resolve until after 6 seconds.
		const res2 = await fetchDelay('https://httpbin.org/delay/6', {
			minDelay: 3000,
			maxDelay: 5000
		});
		const json2 = await res.json(); // This won't get called.
		console.log(json);              // Neither will this.
	} catch (err) {
		// Catch-all rejections.
		console.dir(err);
	}
})();
```

<a name="module_@h2ml/fetchreplace"></a>

## @h2ml/fetchreplace
**Version**: 1.0.0  
**Author**: Jack Notman  
<a name="module_@h2ml/fetchreplace.fetchDelay"></a>

### @h2ml/fetchreplace.fetchDelay ⇒ <code>Promise.&lt;Response&gt;</code> \| <code>Error</code>
The [fetchDelay](fetchDelay) function.

**Kind**: static constant of [<code>@h2ml/fetchreplace</code>](#module_@h2ml/fetchreplace)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | <code>String</code> |  | The url to fetch. |
| options | <code>Object</code> |  | fetchDelay Configuration options. |
| [options.minDelay] | <code>Number</code> | <code>1000</code> | The minimum delay before the Promise resolves. |
| [options.maxDelay] | <code>Number</code> | <code>3000</code> | The maximum amount of time before the Promise rejects. |
| [options.fetchOptions] | <code>Object</code> | <code>{}</code> | The configuration options to pass to fetch(). |
