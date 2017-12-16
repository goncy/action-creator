import { getStatus, getError, getResponse } from "../src/utils"

const status = [
  {
    payload: "STARTED",
    result: "pending"
  },
  {
    payload: "CANCELED",
    result: "canceled"
  },
  {
    payload: "RESOLVED",
    result: "resolved"
  },
  {
    payload: "REJECTED",
    result: "rejected"
  },
  {
    payload: undefined,
    result: "init"
  }
]

const error = [
  {
    payload: {
      foo: "this is an error"
    },
    result: {
      foo: "this is an error"
    }
  },
  {
    payload: undefined,
    result: undefined
  }
]

const response = [
  {
    payload: {
      foo: "bar"
    },
    result: {
      foo: "bar"
    }
  },
  {
    payload: undefined,
    result: undefined
  }
]

describe("Utils", function() {
  describe("getStatus", function() {
    status.forEach(({ payload, result }) => {
      test(`should get the status correctly when payload is ${payload}`, function() {
        const actual = getStatus(payload)
        const expected = result
        expect(actual).toEqual(expected)
      })
    })
  })

  describe("getError", function() {
    error.forEach(({ payload, result }) => {
      test(`should get the status correctly when payload is ${payload}`, function() {
        const actual = getError({ payload })
        const expected = result
        expect(actual).toEqual(expected)
      })
    })
  })

  describe("getResponse", function() {
    response.forEach(({ payload, result }) => {
      test(`should get the status correctly when payload is ${payload}`, function() {
        const actual = getResponse({ payload })
        const expected = result
        expect(actual).toEqual(expected)
      })
    })
  })
})
