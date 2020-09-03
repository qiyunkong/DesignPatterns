/**
 * @函数名：getBrowserType
 * @作用：根据userAgent判断浏览器的类型及版本
 * @参数：无
 * @返回值：Object
**/
function getBrowserType() {
	var ua = navigator.userAgent.toLowerCase(), s, o = {};
	if( s=ua.match(/msie ([\d.]+)/) ) {
		o.ie = true;
		o.info = "ie";
	} else if( s=ua.match(/firefox\/([\d.]+)/) ) {
		o.ff = true;
		o.info = "ff";
	} else if( s=ua.match(/chrome\/([\d.]+)/) ) {
		o.chrome = true;
		o.info = "chrome";
	} else if( s=ua.match(/opera.([\d.]+)/) ) {
		o.opera = true;
		o.info = "opera";
	} else if( s=ua.match(/version\/([\d.]+).*safari/) ) {
		o.safari = true;
		o.info = "safari";
	}
	if( s && s[1] ) {
		o.version = parseFloat( s[1] );
	} else {
		o.version = 0;
	}
	return o;
}