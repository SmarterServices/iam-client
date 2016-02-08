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
auhorization on subsequent step.

2) authorize: This function determines if an action can be invoked for the resource
on discussion. The third argument is the processedIamData. This function returns
a boolean result.


```
                var iamData = {
                    "Statement": [
                        {
                            "Effect": "Allow",
                            "Action": ["CanRead"],
                            "Resource": [
                                "ssrn:ss:iam:::account/100/assestmentgroup/*/customquestions"
                            ]
                        },
                        {
                            "Effect": "Allow",
                            "Action": ["CanUpdate","CanDelete","CanCreate"],
                            "Resource": "ssrn:ss:iam:::account/100/assestmentgroup/1/customquestions"
                        },
                        {
                            "Effect": "Deny",
                            "Action": ["CanUpdate"],
                            "Resource": [
                                "ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions"
                            ]
                        }
                    ]
                };

                var processedData = iamService.processIamData(iamData);
                                
                var resource = 'ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions';
                var action = 'CanRead';

                var result = iamService.authorize(resource, action,processedData);
```

