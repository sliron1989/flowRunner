const request = require('request-promise')

[{
    url: '',
    params: {},
    body: {

    },
    method: '',
    onResponse: function onResponse(err, res, { next, fail }) {

    }

}]

class FlowRunner {
    constructor(items) {
        this.items = items;
    }
    start() {
        this.currentItem = 0;
    }
    runCurrentStep() {
        const item = items[currentItem];
        const options = {
            method: item.method || 'get',
            url: item.url,
            body: item.body,
            qs: item.params
        }
        request(options).then((res) => {

        })
    }
}