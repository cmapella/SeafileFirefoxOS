'use strict';

describe('Service: serviceRest', function () {

  // load the service's module
  beforeEach(module('seafileFirefoxOsApp'));

  // instantiate service
  var serviceRest;
  beforeEach(inject(function (_serviceRest_) {
    serviceRest = _serviceRest_;
  }));

  it('should do something', function () {
    expect(!!serviceRest).toBe(true);
  });

});
