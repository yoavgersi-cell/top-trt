import { type SiteConfig } from "./config";
import { trtConfig } from "./seeds/trt";

// ─────────────────────────────────────────────────────────────────────────────
// Single-vertical config store.
//
// This site is a single, standalone TRT vertical whose content is
// code-authoritative (src/lib/seeds/trt.ts), so config-store is a thin
// accessor: every page calls getConfig() and gets the TRT config. The `vertical`
// argument is accepted (so existing call sites keep compiling) but ignored -
// there is only one vertical here.
// ─────────────────────────────────────────────────────────────────────────────

export async function getConfig(_vertical?: string): Promise<SiteConfig> {
  return trtConfig;
}

// No-op: content is code-authoritative on this site (no blob CMS). Kept so the
// admin/api routes that import it continue to type-check.
export async function saveConfig(_config: SiteConfig, _vertical?: string): Promise<void> {
  return;
}
