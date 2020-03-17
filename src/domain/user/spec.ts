import chai from 'chai';

let expect = chai.expect;

import makeUser, { UserType } from '@domain/user'

describe('makeUser', () => {
  it('throws error if invalid payload', () => {
    let errorMessage = [
      'must have names as string',
      'email must be a email',
      'phone number must be a string',
      'admin must be a boolean'
    ].join('\n')

    let user: UserType = {
        names: 'Vincent Peter',
        email: 'dev4vin@gmail.com',
        phone_number: '0700000000',
        admin: true
    }

    expect(() => {
      makeUser(user)
    }).to.throw(errorMessage)
  })
  it('must have name', () => {
    let user = makeUser({
      names: 'howie',
    })
    let input = user.getNames()
    let actual = 'howie'
    expect(input).to.equal(actual)
  })
  
})