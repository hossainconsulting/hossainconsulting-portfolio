# Public mobile and WhatsApp contact audit

Date: 2026-10-03, Australia/Sydney.

Requirement: No public mobile/WhatsApp contacts on personal/business websites and social profiles. User clarified to retain email contact links. Use https://calendly.com/hemayet_hossain/20-minute-intro-call for booking.

## Current validation

- Inspected both live homepages in connected Chrome: https://hemayethossain.com and https://hossainconsulting.com. Both rendered their expected identity, contact section and social footer.
- Read-only rendered-DOM checks on each homepage returned zero anchors matching `a[href^="tel:"],a[href*="wa.me"],a[href*="api.whatsapp"]` and false for Australian mobile-number patterns in visible text.
- Personal homepage had one Calendly booking anchor; business homepage had two. All used the exact booking event above. Email links remain as requested.
- Ran `rg -n -i 'tel:|wa\.me|api\.whatsapp|\+61|\b04[0-9]{8}\b|\b04[0-9]{2}[ -][0-9]{3}[ -][0-9]{3}\b' src public`: no matches. Broader earlier search found only generic discussion of customer phone/mobile workflows, not contact numbers.
- No website source changes were needed. No application tests/build were run for this evidence-only audit.

## Prior social changes reviewed

Reviewed the saved verification records in `../social-profile-calendly/README.md` and `../../2026-10-02/social-profile-calendly/README.md`. These record successful removal of public contact phone fields on personal/company LinkedIn, business Facebook, personal Pinterest and business Instagram. Instagram WhatsApp was already empty. Personal Facebook and the business X Location editor showed no stored public phone. Calendly booking details were added as recorded there. These are prior observations, not fresh verification of every account in this audit.

## Limitations

Personal Instagram, business TikTok and business Pinterest lacked editing access in the prior session. X subsequently encountered an account lock. Their current settings are not verified here. Website subpages were covered by the source scan but not individually checked live. Older posts, uploaded legacy images, search-engine caches, and historical content were not exhaustively audited. Authentication/recovery phone settings were not changed.

This is a scoped audit, not a claim that every social page and historical post is free of mobile numbers. No new social changes or deployment were performed in this audit. Evidence contains no mobile numbers, credentials or private account details.

Related PR: https://github.com/hossainconsulting/hossainconsulting-portfolio/pull/5
