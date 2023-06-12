import database from './../database.json' assert { type: 'json' }
import chalk from 'chalk'
import chalkTable from 'chalk-table'
import DraftLog from 'draftlog'
import readline from 'readline'
import Person from './person.js'

DraftLog(console).addLineListener(process.stdin)

const options = {
    leftPad: 2,
    columns: [
        { field: 'id', name: chalk.cyan('ID') },
        { field: 'vehicles', name: chalk.magenta('Vehicles') },
        { field: 'kmTraveled', name: chalk.cyan('KM traveled') },
        { field: 'from', name: chalk.red('ID') },
        { field: 'to', name: chalk.blue('ID') },
    ]
}

const table = chalkTable(options, database.map(item => new Person(item).formatted()))
const print = console.draft(table)

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
