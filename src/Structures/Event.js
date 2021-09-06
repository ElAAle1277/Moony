/**@format */
const Discord = require('discord.js')

const Client = require('./Client.js')

/**
 * @template {keyof Discord.ClientEvents} K
 * @param {Client} client 
 * @param  {...Discord.ClientEvents[K]} eventArgs 
 */

function RunFunction(client, ...eventArgs) {

}
/**
 * @template {keyof Discord.ClientEvents} K
 */
class Event {

    /**
     * @param {K} event 
     * @param {RunFunction<K>} RunFunction 
     */
    constructor(event, RunFunction) {

        this.event = event;
        this.run = RunFunction;
    }
}

module.exports = Event;