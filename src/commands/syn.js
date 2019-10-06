const {Command, flags} = require('@oclif/command')

class SynCommand extends Command {
  async run() {
    const {flags} = this.parse(SynCommand)
    const name = flags.name || 'System'
    this.log(`syn ${name} from ./src/commands/syn.js`)
  }
}

SynCommand.description = `Describe the command here
...
Extra documentation goes here
`

SynCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = SynCommand
