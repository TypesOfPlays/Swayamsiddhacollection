"use client";

import { SITE } from "@/lib/site";
import { MAP_HREF } from "./Visit";
import { IconPhone, IconPin, IconSearch, IconWhatsApp } from "./Icons";

/**
 * Persistent actions on small screens. PRODUCT.md principle 4: phone,
 * WhatsApp, tests and directions never leave reach on a phone.
 */
export function ActionBar() {
  return (
    <nav className="actionbar" aria-label="Quick actions">
      <a className="actionbar__item" href={SITE.phone.href}>
        <IconPhone size={19} />
        <span className="spec">Call</span>
      </a>
      <a
        className="actionbar__item"
        href={SITE.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconWhatsApp size={19} />
        <span className="spec">WhatsApp</span>
      </a>
      <a className="actionbar__item" href="#tests">
        <IconSearch size={19} />
        <span className="spec">Tests</span>
      </a>
      <a
        className="actionbar__item"
        href={MAP_HREF}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconPin size={19} />
        <span className="spec">Map</span>
      </a>
    </nav>
  );
}
