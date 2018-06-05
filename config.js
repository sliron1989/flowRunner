const request = require('request-promise');
const Promise = require('bluebird');
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
            item.onResponse(null, res, (() => {
                return new Promise((resolve, reject) => {}).catch((fail) => {
                    fail: reject();
                }).then((next) => {
                    this.currentItem++;
                    this.runCurrentStep();
                    next: resolve();
                })
            }))
        })
    }
}