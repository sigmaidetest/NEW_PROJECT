const ddb = AWS.DynamoDB();
exports.handler = function (event, context, callback) {
    ddb.put({
        TableName: 'iotdatatable',
        Item: { field: 'HI' }
    }, function (err, data) {
        if (err) {
            //handle error
        } else {
            //your logic goes here
        }
    });

}