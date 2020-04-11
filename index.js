const checks = {
    /*
    It can check weather data pass as a parameter is empty or not. Return true if data is empty and return false if data is not empty.
    pass secoud parameter true to tell the function that zero is not empty.
    */
    isEmpty(data, zeroIsNotEmpty) {
        if (typeof data !== 'object' && (data === null || data === '' || typeof data === 'undefined')) {
            return true;
        } else if (data === null) {
            return true;
        } else if (typeof data === 'string' && data === '0' && !zeroIsNotEmpty) {
            return true;
        } else if (typeof data.length !== 'undefined') {
            if (data.length > 0) {
                return false;
            } else {
                return true;
            }
        } else {
            if (Object.keys(data).length > 0) {
                return false;
            } else if (typeof data === 'number' && (data !== 0 || zeroIsNotEmpty)) {
                return false;
            } else {
                if (data === true) {
                    return false
                }
                return true;
            }
        }
    },
    /* 
    Parameter of Array, Object, Number, String, Boolean. It will return its type.
     */
    strictTypeOf(value) {
        switch (value.constructor) {
            case Array: return "Array";
            case Function: return "Function";
            case Object: return "Object";
            case String: return "String";
            case Number: return "Number";
            case Boolean: return "Boolean";
            default: return "Not Found!";
        }
    }
}

export default checks;