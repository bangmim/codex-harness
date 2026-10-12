import os from "node:os";
import path from "node:path";

export function expandPath(p: string): string {
  if (p === "~") return os.homedir();
  if (p.startsWith("~/")) return path.join(os.homedir(), p.slice(2));
  return p;
}

export const USER_CODEX_DIR = expandPath("~/.codex");

export function projectCodexDir(cwd: string = process.cwd()): string {
  return path.join(cwd, ".codex");
}
