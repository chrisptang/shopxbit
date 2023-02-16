import hashlib
import requests
import time
import json


if __name__ == "__main__":
    secret = '3nVbcALI3ApBond7YCRnH2'
    params = {
        "license": "P62EF6DF7659806F3",
        "time": int(time.time()),
        "cnt": 10,
    }
    params["sign"] = hashlib.md5((params["license"] + str(params["time"]) + secret).encode('utf-8')).hexdigest()
    print(params)
    try:

        # Step 1 : Obtain proxy IP   
        # Important: the ip addresses in the obtained ip:port list belong to TTProxy central server, NOT the proxy node ip which finally communicate with the target server.   
        response = requests.get(
            url="https://api.ttproxy.com/v1/obtain",
            params=params,
            headers={
                "Content-Type": "text/plain; charset=utf-8",
            }
        )
        print(esponse.content)
        proxies = json.loads(response.content).data.proxies
        
        whitelist_url="https://api.ttproxy.com/v1/whitelist/add"
        params["ip"]="115.204.230.51"
        whitelist_response = requests.get(
            url=whitelist_url,
            params=params,
            headers={
                "Content-Type": "text/plain; charset=utf-8",
            }
        )
        print(whitelist_response.content)

        # Step 2 : Use proxy IP   
        targrtUrl = "https://httpbin.org/ip"

        proxies = {
            # "http"  : "http://" + res.data.proxies[0],
            # "https" : "http://" + res.data.proxies[0],
            "http"  : "http://" + proxies[0],
        }

        response = requests.get(
            url="https://ifconfig.co/ip",
            # params=params,
            proxies=proxies
        )

        print('Response HTTP Status Code: {status_code}'.format(
        status_code=response.status_code))
        print('Response HTTP Response Body: {content}'.format(
        content=response.content))

    except requests.exceptions.RequestException:
        print('HTTP Request failed')