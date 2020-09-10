## Local AWS-ALB

This is just a small server that I wrote using node and express that allows me to do local testing on an AWS ALB like endpoints. It can be configured via a config json file and Target Groups and listener rules can be defined. It allows authentication to happen on a remote cognito endpoint and can forward the http headers required by your instance servers to identify a user.

This works in a limited way and satisfies my need to test a rudimentary load balancer without having to spin up a load balancer in the cloud and deploy the application there.

```js

{
    targetGroups: [{
        name:"tg1",
        instances: ["localhost:8080", "localhost:8090"]
    }],
    listeners: [
        {
            name: "",
            port: "",
            protocol: "HTTP/HTTPS",
            rules: [
                {                    
                   order: "",
                   
                }
            ]
        }
    ],

}

```
