const getRootProperty = (obj, toFind, rootKey = null) => {
    if (Array.isArray(obj)){
        if (obj.includes(toFind)) {
            return rootKey;
        }
    } else {
        for (const key in obj) {
          result = getRootProperty(obj[key], toFind, rootKey || key);
          if (result) return result;
        }
    }
    return null;
  }


let object1 = {
    "one": {
        "nest1": {
            "val1": [9, 34, 92, 100]
        }
    },
    "2f7": {
        "n1": [10, 92, 53, 71],
        "n2": [82, 34, 6, 19]
    }
};

console.log(getRootProperty(object1, 9)); 