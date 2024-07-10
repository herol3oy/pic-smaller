import { gstate } from "./global";
import { MenuProps } from "antd";
import { locales } from "./modules";

const localeCacheKey = "Pic-Smaller-Locale";
const defaultLang = "fa-IR";

export const langList: MenuProps["items"] = [{ key: "fa-IR", label: "فارسی" }];

async function setLocaleData() {
  const importer = locales[`/src/locales/fa-IR.ts`];
  gstate.locale = (await importer()).default;
}

export async function changeLang() {
  gstate.lang = defaultLang;
  window.localStorage.setItem(localeCacheKey, defaultLang);
  await setLocaleData();
}

export async function initLang() {
  gstate.lang = defaultLang;
  await setLocaleData();
}
