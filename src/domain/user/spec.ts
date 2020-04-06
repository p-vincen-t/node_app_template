import chai from 'chai';

let expect = chai.expect;

import makeUser, { UserType, VALIDATOR_SCENARIOS } from '@domain/user'

describe('makeUser', () => {
  it('throws error if invalid payload', () => {
    let errorMessage = [
      'must have names as string',
      'email must be a email',
      'phone number must be a string',
      'admin must be a boolean'
    ].join('\n')

    let user: UserType = {
      id: undefined,
      names: 'Vincent Peter',
      email: 'dev4vin@gmail.com',
      phone_number: '0700000000',
      admin: true
    }

    expect(() => {
      makeUser(user, VALIDATOR_SCENARIOS.CREATE_USER)
    }).to.throw(errorMessage)
  })
  it('must have name', () => {
    let user = makeUser({
      names: 'howie', id: undefined, email: "", phone_number: "", admin: false
    }, VALIDATOR_SCENARIOS.CREATE_USER)
    let input = user.names
    let actual = 'howie'
    expect(input).to.equal(actual)
  })

})