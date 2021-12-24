import currency from "currency.js";

const utility = {
    difference: function (valueA, valueB) {
        if (valueA && valueB) {
            return valueA - valueB;
        } else return false;
    },

    total: function (arr) {
        if (arr) {
            return arr.reduce((a, b) => a + b, 0);
        } else return false;
    },

    percent: function (valueA, valueB, symbol) {
        if (valueA && valueB) {
            if(symbol) {
                return (valueA / valueB) + (symbol || null)
            }
            return (valueA / valueB);
        } else return false;
    },

    formatCurrency: function(value, symbol) {
        return currency(value, { symbol: symbol || '', precision: 0 }).format()
    }
}

export default utility;