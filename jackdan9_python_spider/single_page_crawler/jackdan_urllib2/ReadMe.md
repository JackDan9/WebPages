---
title: jackdan_urllib2
tags: python, urllib2, jackdan
author: jackdan

---

# jackdan_urllib2
## About some methods of urllib2
- `urlopen(url[, data[, timeout[, cafile[, capath[, cadefault[, context]]]]])`:(functions)
	- `url`: Open the URL(Like "http://www.baidu.com/") `url`, which can be either a string or a `Request` object.
	- `Request` object:`class urllib2.Request(url[,data][,headers][, origin_req_host][, unverifiable])`
		- This class is an abstraction of a URL request.
		- `url` should be a string containing a valid URL.
		- `data` is like to the following.
		- `headers` should be a dictionary, and will be treated as if `add_header()` was called with each key and value as arguments. This is often used to "spoof" the `User-Agent` header value, which is used by a browser to identify itself——some HTTP servers only allow requests coming from common browsers as opposed to scripts. For example, Mollize Firefox may identify itself as "Mozilla/5.0 (Mozilla/5.0 (X11; U; Linux i686) Gecko/20071127 Firefox/2.0.0.11)", while `urllib2's` default user agent string is `Python-urllib/2.6`(on Python 2.6).
		- The final two arguments are only of interest for correct handling of thid-party HTTP cookies:
			- `origin_req_host` should be the request-host of the origin transaction, as defined by [RFC 2965][1]. It defaults to `cookielib.request_host(self)`. This is the host name or IP address of the original request that was initiated by the user. For example, if the request is for an image in an HTML document, this should be the request-host of the request for the page containing the image.
		- `unverifiable` should indicate whether the request is unverifiable, as defined by [RFC 2965][1]. It defaults to `False`. An unverifiable request is one whose URL the user did not have the option to approve. For example, if the request is for an image in an HTML document, and the user had no option to approve the automatic fetching of the image, this should be be true.
	- `data`: `data` may be a string specifying additional data to send to the server, or `None`(Default property) if no such data is needed. Currently HTTP requests are the only ones that use `data`, the HTTP request will be a POST instead of a GET when the `data` parameter is provided. `data` should be a buffer in the standard `application/x-www-form-urlencoded` format. The `urllib.urlencode()` function takes a mapping or sequence of 2-tuples and returns a string in this format. urllib2 module sends `HTTP/1.1` requests with `Connection:close` header included.
	- `urllib.urlencode()`: `urllib.urlencode(query[, doseq])`
		- Convert a mapping object or a sequence of two-element tuples to a "precent-encoded" string, suitable to pass to `urlopen()` above as the optional `data` argument. This is useful to pass a dictionary of form fileds to a `POST` requested. The resulting string is a series of `key=value` pairs separated by `&` characters, where both `key` and `value` are quoted using `quote_plus()` above. When a sequence of two-element tuples is used as the `query` argument, the first element of each tuple is a key and the second is a value. The value element in itself can be a sequence and in that case, if the optional parameter `doseq` is evaluates to `True`, individual `key=value` pairs separated by `&` are generated for each element of the value sequence for the key. The order of parameters in the encoded string will match the order of parameter tuples in the sequence. The `urlparse` module provides the functions `parse_qs()` which are used to parse query strings into Python data structures.
	- The optional `timeout` parameter specifies a timeout in seconds for blocking operations like the connection attempt (if not specified, the global default timeout setting will be used). This actually only worls for `HTTP`, `HTTPS` and `FTP` connenctions.
	- If `context` is specified, it mush be a `ssl.SSLContext` instance describing the various SSL options. See `HTTPSConnection` for more details.
	- The optional `cafile` and `capath` parameters specify a set of trusted CA certificates for HTTPS requests. `cafile` should point to a single file containing a bundle of CA certificates, whereas `capath` should point to a directory of hashed certificates files. More information can be found in `ssl.SSLContext.load_verify_locations()`.
	- The `cadefault` parameters is ignored.
	- This function returns a file-like object with three additional methods:
		- `geturl()` —— return the URL of the resource retrieved, commonly used to determine if a redirect was followed;
		- `info()` —— return the meta-information of the page, such as headers, in the form of an `mimetools.Message` instance(See Qucik Reference to HTTP Headers)
		- `getcode()` —— return the HTTP status code of the response.
	- Raises `URLError` on errors.
	- Note that `None` may be returned if no handler the request (though the default installed global `OpenerDirector` uses `Unknown Handler` to ensure this never happens).
	- In addition, if proxy settings are detected (for example, when a `*_proxy` environment variable like `http_proxy` is set), `ProxyHandler` is default installed and makes sure the requests are handled through the proxy.
> Changed in version 2.6: timeout was added.
> Changed in version 2.7.9: cafile, capath, cadefault, and context were added.

	[1] "https://tools.ietf.org/html/rfc2965.html"

