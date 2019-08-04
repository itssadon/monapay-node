/**
 * MONAPAY API Wrapper
 * @author Abubakar Sadiq Hassan
 */

const request = require('request-promise')
const Events = require('./resources/events')
const endpoint = 'https://www.monapay.com/v1/merchant'

function Monapay(key) {
    if (!(this instanceof Monapay)) {
        return new Monapay(key)
    }

    this.endpoint = endpoint
    this.key = key
    this.importResources()

    this.Events = new Events(this.key)
}