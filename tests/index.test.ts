import {
  describe,
  expect,
  it,
} from "@jest/globals";
import { sum } from "../src";

describe("Tests", () => {
  it("sum", async () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
