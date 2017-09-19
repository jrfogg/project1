function getAmount (coinType) {

  const coins = {
    p: 1,
    n: 5,
    d: 10,
    q: 25,
  }
  switch (coinType) {
    case 'p': return 1
    case 'n': return 5
    case 'd': return 10
    case 'q': return 25
    default: throw new Error ('Unrecognized coin ' + coinType)

  }
}

function testGetAmount (coinType, value) {
  const expected = value
  const actual = getAmount(coinType)
  if (expected === actual) {
  return console.log(`test for ${coinType} passed!`)
  }
  return console.log(`test for ${coinType} failed`)
}

testGetAmount('p', 1)
testGetAmount('n', 5)
testGetAmount('d', 10)
testGetAmount('q', 25)

}
