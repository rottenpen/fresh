/** @jsx h */
import { h } from "preact";
import { i18n } from "$fresh/i18n-runtime.ts";

export default function Counter() {
  return (
    <div>
      {i18n('WELCOME_TO_FRESH_WORLD')}
    </div>
  );
}
