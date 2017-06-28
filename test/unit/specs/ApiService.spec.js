import ApiService from 'src/services/ApiService'

describe('ApiService', () => {
  let service

  beforeEach(() => {
    service = new ApiService()
  })

  it('has an axios cancel token as a property', () => {
    expect(service).to.have.property('CancelToken')
    expect(service.CancelToken).to.be.a('function')
  })

  it('has a source property with a cancel token and cancellation function', () => {
    expect(service).to.have.property('source')
    expect(service.source).to.be.a('object')
    expect(service.source).to.have.property('token')
    expect(service.source).to.have.property('cancel')
    expect(service.source.token).to.be.a('object')
    expect(service.source.cancel).to.be.a('function')
  })

  it('can cancel a request', () => {
    const spy = sinon.spy()

    service.source.cancel = spy
    service.cancelRequest()

    expect(spy.called).to.be.true
  })
})
