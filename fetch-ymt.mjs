import fetch from 'node-fetch';

const url = "https://m.ymt.com/gfw/hangqing_ditu/api/hot_market_price_list?channel=1001&app_key=4001&fCode=100009&version=5.10.15"
const response = await fetch(url, {
	method: "POST",
	headers: {
		"x-app-version": "V1.0.0",
		"x-user-agent": "4001",
		"cookie": 'sajssdk_2015_cross_new_user=1; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2218629f07817fe-09c1ec27c63e05-16525635-1296000-18629f07818b2e%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E5%BC%95%E8%8D%90%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fsummerfarm.yuque.com%2F%22%7D%2C%22%24device_id%22%3A%2218629f07817fe-09c1ec27c63e05-16525635-1296000-18629f07818b2e%22%7D; ymtwebgfwuuid=63e1c6c7b4f223a848357294000000; mymtcominitedUUID=1; mymtcom_uid=337178047576167'
	}
});
const data = await response.json();

console.log(JSON.stringify(data, null, 4));