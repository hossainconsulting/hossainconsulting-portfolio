# Social maintenance skill

Date: 2026-10-03, Australia/Sydney.

User requested turning the footer/account maintenance workflow into a skill. Installed hossain-social-maintenance in the user's Codex skills directory, with SKILL.md and agents/openai.yaml. This directory contains a reviewed archival copy for GitHub evidence.

Scope covers identity-specific footer edits and related requested social profile/contact/branding/content maintenance. Captures confirmed X handles, websites, Calendly/email preferences and truthful positioning; preserves publication, deployment and deletion authorization boundaries. Historical branch, assets and login states are not hardcoded as current facts.

Validation: Read skill-creator instructions and UI metadata reference. Initial quick_validate run lacked PyYAML; installed PyYAML 6.0.3 into workspace-only work/skill-validation-deps and reran with PYTHONPATH. Validator passed. Manually checked account mappings, metadata, conditional workflow and absence of scaffold placeholders, secrets and private contact data. No live social mutation or deployment was used to test the skill. Installed skill discovery in a future turn is not yet observed.

Supporting files: skill/SKILL.md and skill/agents/openai.yaml. Commit/push uses existing repository PR workflow. No website source changes.
