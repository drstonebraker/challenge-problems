const nested = {
  username: 'sally',
  profile: {
    name: 'Sally Clojurian',
    address: [
      {
        city: 'Austin',
        state: 'TX'
      },
      {
        city: 'San Francisco',
        state: 'CA'
      },
      {
        city: 'Baltimore',
        state: 'MD'
      }
    ]
  }
};

function getIn(obj, path, optional = null) {
  let currentObj = obj;

  for (let i = 0; i < path.length; i++) {
    const key = path[i]
    currentObj = currentObj[key];
    if (currentObj === undefined) return optional;
  }

  return currentObj;
}

console.log(getIn(nested, ['profile', 'address', 0, 'city'])) // 'Austin'

// lake
// mblf

function caesarShift(str) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']

  const result = str.split('').map(ch => {
    const oldIndex = alphabet.indexOf(ch)
    const newIndex = (oldIndex + 1) % alphabet.length

    return alphabet[newIndex]
  })

  return result.join('')
}

console.log(caesarShift('make'))
