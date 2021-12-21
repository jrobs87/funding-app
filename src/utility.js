const utility = {
    difference: function (a, b) {
        if (a && b) {
            return a - b;
        } else return false;
    },

    total: function (arr) {
        if (arr) {
            return arr.reduce((a, b) => a + b, 0);
        } else return false;
    },

    percent: function (a, b) {
        if (a && b) {
            return ((a / b));
        } else return false;
    }
}

export default utility;