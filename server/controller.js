const http = require("http");
const url = require("url");
const methods = require("../methods/methods");

http.createServer(((req, res) => {

    let requestUrl = url.parse(req.url, true);
    switch (req.method) {
        case 'GET': {
            switch (true) {
                case requestUrl.pathname.startsWith('/api/v1/user/id/'): {
                    const arr = requestUrl.path.split('/');
                    const id =parseInt(arr[arr.length-1]);
                    const user = methods.getUserById(id);
                    res.end(JSON.stringify({user}));
                }
                    break;
                case requestUrl.pathname.startsWith('/api/v1/user/name'): {
                    const name = requestUrl.query.name;
                    console.log(name.toString());
                    const user = methods.getUserByName(name);
                    console.log(user);
                    res.end(JSON.stringify({user}));
                }
                    break;
                case requestUrl.pathname.startsWith('/api/v1/user/search'): {
                    const subStr = requestUrl.query.subStr;
                    const user = methods.getUserBySubstring(subStr);
                    res.end(JSON.stringify({user}));
                }
                    break;
            }
        }
            break;
        case 'PUT': {
            switch (true) {
                case requestUrl.pathname.startsWith('/api/v1/user/update/id/'): {
                    const arr = requestUrl.path.split('/');
                    const id =parseInt(arr[arr.length-1]);
                    req.on("data", (body) => {
                        console.log(JSON.parse(body.toString()));
                        methods.updateUserById(id, JSON.parse(body.toString()));
                    })
                    res.end(() => {
                        console.log("User was updated.")
                    })
                }
                    break;

            }

        }
            break;
        case 'POST': {
            switch (requestUrl.pathname) {
                case '/api/v1/user/add': {
                    req.on('data', (body) => {
                        methods.addUser(JSON.parse(body.toString()));
                    })
                    res.end(() => {
                        console.log("User was  added.");
                    })
                }
            }
        }
            break;

        case 'DELETE': {
            switch (true) {
                case requestUrl.pathname.startsWith('/api/v1/user/id/'): {
                    const arr = requestUrl.path.split('/');
                    const id =parseInt(arr[arr.length-1]);
                    methods.deleteUserById(id);
                    res.end(() => {
                        console.log("User was deleted. ")
                    })
                }
                    break;
            }

        }



    }


})).listen(2001, () => {
    console.log("Server connected.");
})