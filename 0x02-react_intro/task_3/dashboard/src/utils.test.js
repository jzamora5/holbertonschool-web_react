import { strict as assert } from "assert";
import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("utils_tests", function () {
  describe("getFullYear", function () {
    it("should return current year", function () {
      const year = getFullYear();
      assert.equal(year, new Date().getFullYear());
    });
  });
  describe("getFooterCopy", function () {
    const trueMsg = "Holberton School";
    const falseMsg = "Holberton School main dashboard";

    it("Should return true message", function () {
      const msg = getFooterCopy(true);
      assert.equal(msg, trueMsg);
    });
    it("Should return false message", function () {
      const msg = getFooterCopy(false);
      assert.equal(msg, falseMsg);
    });
  });
  describe("getLatestNotification", function () {
    it("shold return correct string element", function () {
      const element = "<strong>Urgent requirement</strong> - complete by EOD";

      assert.equal(getLatestNotification(), element);
    });
  });
});
