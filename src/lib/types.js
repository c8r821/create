const types = [
        /* AMEX */  {
        regex: /3[4,7]\d{13}/,
        class: "amex",
        name: "American Express",
        url: "https://www.americanexpress.com/"
    },
    /* VISA */ {
        regex: /4\d{15}/,
        class: "visa",
        name: "Visa",
        url: "https://usa.visa.com/"
    },
    /* DINERS CLUB */ {
        regex: /(30[0-5]\d{11,16})|(3095\d{12,15})|(36\d{12,17})|(3[8-9]\d{14,17})/,
        class: "diners-club",
        name: "Diners Club",
        url: "https://www.dinersclub.com/"
    },
    /* MASTERCARD */ {
        regex: /(5[1-5]|2[2-7])\d{14}/,
        class: "mastercard",
        name: "MasterCard",
        url: "https://www.mastercard.us/"
    },
    /* JCB */ {
        regex: /(352[89]\d{11,14})|(35[3-8]\d{13,16})/,
        class: "jcb",
        name: "JCB",
        url: "https://www.jcbusa.com/"
    },
    /* DISCOVER */ {
        regex: /(6011\d{12,15})|(6[4-5]\d{14,17})/,
        class: "discover",
        name: "Discover",
        url: "https://www.discover.com/"
    }
]

export default types