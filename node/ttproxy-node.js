const axios = require('axios');
const crypto = require('crypto');

const license = 'P62EF6DF7659806F3';
const secret = '3nVbcALI3ApBond7YCRnH2';
const ts = Math.floor(+new Date() / 1000);

const queries = {
	license: license,
	time: ts
};

const my_ip = '115.204.230.51';

const md5Sum = crypto.createHash('md5');
md5Sum.update(license + ts + secret);

queries.sign = md5Sum.digest('hex').toLowerCase();

// Step 1 : Obtain proxy IP
// Important: the ip addresses in the obtained ip:port list belong to TTProxy central server, NOT the proxy node ip which finally communicate with the target server.

let proxies = await axios.get('https://api.ttproxy.com/v1/obtain', {
	params: queries,
}).data.proxies;

queries.ip=my_ip;


let whitelist = await axios.get('https://api.ttproxy.com/v1/whitelist/add', {
	params: queries,
}).data;

console.log(proxies,whitelist);


var proxy = proxies[0].split(':');
let targetUrl = "https://httpbin.org/get";
let result = await axios.get(targetUrl, {
	proxy: {
		host: proxy[0],
		port: proxy[1]
	},
}).data;

console.log(result);