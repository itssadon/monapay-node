"use strict";

var route = "";

module.exports = {
    /*
    Initialize transaction
    */
    initialize: {
        method: "get",
        route: [route, "/pay"].join(""),
        params: ["reference_id*", "merchant_id*", "product_key*", "uuid*", "amount*", "description*", "redirect_url"]
    },

    /*
    Verify transaction
    */
    verify: {
        method: "get",
        route: [route, "/verifytransaction/{reference_id}"].join(""),
        params: ["reference_id*"]
    }
};