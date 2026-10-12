import { describe, it, expect } from "vitest";
import { expandPath } from "../src/utils/paths.js";
import os from "node:os";
import path from "node:path";

describe("expandPath", () => {
  it("expands ~ to home directory", () => {
    expect(expandPath("~/.codex")).toBe(path.join(os.homedir(), ".codex"));
  });

  it("leaves absolute paths unchanged", () => {
    expect(expandPath("/tmp/foo")).toBe("/tmp/foo");
  });

  it("leaves relative paths unchanged (resolver's job)", () => {
    expect(expandPath("./.codex")).toBe("./.codex");
  });

  it("handles ~ alone", () => {
    expect(expandPath("~")).toBe(os.homedir());
  });
});
