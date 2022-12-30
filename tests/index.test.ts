import {
  describe,
  expect,
  it,
} from "@jest/globals";
import { diff, sum } from "../src";

describe("Tests", () => {
  it("sum", async () => {
    expect(sum(1, 1)).toEqual(2);
  });

  it("diff", async () => {
    expect(diff(1, 1)).toEqual(0);
  });
});
