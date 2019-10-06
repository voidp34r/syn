const {expect, test} = require('@oclif/test')

describe('syn', () => {
  test
  .stdout()
  .command(['syn'])
  .it('runs syn', ctx => {
    expect(ctx.stdout).to.contain('syn System')
  })

  test
  .stdout()
  .command(['syn', '--name', 'jeff'])
  .it('runs syn --name jeff', ctx => {
    expect(ctx.stdout).to.contain('syn jeff')
  })
})
