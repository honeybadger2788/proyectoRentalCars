/**
 * fix: `matchMedia` not present, legacy browsers require a polyfill
 */
import polyfill from "polyfill";

global.matchMedia =
global.matchMedia ||
function () {
    return {
    matches: false,
    addListener: function () {},
    removeListener: function () {},
    };
};