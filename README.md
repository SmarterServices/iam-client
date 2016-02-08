# iam-client
client wrapper for iam service [open-iam](https://github.com/SmarterServices/IAM).
 

## Installation via Bower
The easiest way to install the iam-client is:
```
bower install iam-client --save
```

Declare dependency:

```
App = angular.module('app', ['blocks.iam']);
```

Inject the iamService to the function where the iam is going to be performed.
Here iamService has been injected to the mainCtrl function which is a controller
belonging to a module that has declared 'blocks.iam' as a dependency

```
mainCtrl.$inject = ['iamService'];
```

iamService has 3 methods:

1) processIamData: This function takes a iam json data and processes it to do
authorization on subsequent step.

2) authorize: This function determines if an action can be invoked for the resource
on discussion. This function returns a boolean result.


```
var iamData = {
    "payload":{},
    "iam":{
        "Statement": [
            {
                "Effect": "Allow",
                "Action": ["sm:*"],
                "Resource": [
                    "ssrn:ss:sm::578:*"
                ]
            },
            {
                "Effect": "Deny",
                "Action": ["sm:DeleteUser"],
                "Resource": [
                    "ssrn:ss:sm::578:user/8539699"
                ]
            }
        ]
    }
}

var resource = 'ssrn:ss:iam:::account/578/user/8539699';
var action = 'sm:DeleteUser';

iamService.processIamData(iamData);

var result = iamService.authorize(resource, action);

```

