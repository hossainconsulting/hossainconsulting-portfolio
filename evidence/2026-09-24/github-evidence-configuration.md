# Evidence workflow configuration

Date: 2026-09-24 (Australia/Sydney).

Request: configure GitHub evidence tracking for all projects.

Added EVIDENCE.md and an evidence instruction block in AGENTS.md across all 17 current repositories. Existing AGENTS.md content and historical evidence were preserved. Configured the local Codex global instructions for future projects.

Validation: each GitHub ref update succeeded without force; both files were then read back at the created commit using the GitHub Contents API and compared with the intended content. All 17 comparisons passed. This was a documentation-only configuration; no application tests or deployments were performed.

VM baseline commits 8d6dc84, cc2b1a6, 6a31506, 7e72b27 and c6c4be9 were found in vm-lab history. The existing README retains the b9140bb Ubuntu label correction.

Limitations: these are agent workflow instructions, not a scheduled uploader. Existing clones must fetch/pull the instructions safely. Direct VM access was attempted for rhel-lab and failed host-key verification; no VM configuration was changed. The current Windows SunRise working folder has no commits or remote and was not synchronized or overwritten by this change.

| Repository | Verified configuration commit |
| --- | --- |
| vm-lab | [3c009c0](https://github.com/hossainconsulting/vm-lab/commit/3c009c09156752c2ddc686e08e754b7d2b3c6b63) |
| rhel-lab | [b98e31c](https://github.com/hossainconsulting/rhel-lab/commit/b98e31c714cfcb68e3ef0e642af1eee3daf694d6) |
| tradelink-group | [ff745e3](https://github.com/hossainconsulting/tradelink-group/commit/ff745e370fe22f25bc7761a6ed102270eb149d3b) |
| agentforce-meridian-care | [68de2b1](https://github.com/hossainconsulting/agentforce-meridian-care/commit/68de2b191b9fd9a874c6baf2ba595b80648a6ece) |
| meridian-field-services | [23d54ad](https://github.com/hossainconsulting/meridian-field-services/commit/23d54ad36d5f9af70049f93aecfd5a0247d71609) |
| salesforce-sunrise-solar | [d20385a](https://github.com/hossainconsulting/salesforce-sunrise-solar/commit/d20385aad4549811c0a8107d7e658c93566a0370) |
| kurrajong-energy | [2b692b1](https://github.com/hossainconsulting/kurrajong-energy/commit/2b692b13d3ea406523d924f8004fd4b342e97cb5) |
| hossainconsulting-portfolio | [0ea8adf](https://github.com/hossainconsulting/hossainconsulting-portfolio/commit/0ea8adf97a1fd5d7254c19e4d0065a5cd92386e9) |
| career-automation-system | [f6b8938](https://github.com/hossainconsulting/career-automation-system/commit/f6b893829b88a8a8ff374c98cfdd2fe32c3874df) |
| python-lab | [b582b29](https://github.com/hossainconsulting/python-lab/commit/b582b29895868f24dbf5ea6795d03be0f1ba5245) |
| api-engineering-lab | [fff9317](https://github.com/hossainconsulting/api-engineering-lab/commit/fff93177ea073c3cd26ab2eace5260fea9bf71a7) |
| salesforce-integration-lab | [7c58b55](https://github.com/hossainconsulting/salesforce-integration-lab/commit/7c58b55a4d1f36508d61d04e4a9e90c058ee9c83) |
| portfolio | [53c2082](https://github.com/hossainconsulting/portfolio/commit/53c2082e44a93ce74eb4c8c14f81b5e2a1554793) |
| ironbark-industrial-supply | [c0333b8](https://github.com/hossainconsulting/ironbark-industrial-supply/commit/c0333b816a8b605bbfdcff29f785aea818d74333) |
| coastline-retail-group | [eff5bea](https://github.com/hossainconsulting/coastline-retail-group/commit/eff5bea919974dcde723e29fb519c668fa82891f) |
| salesforce-user-lifecycle-sop | [35b9cdb](https://github.com/hossainconsulting/salesforce-user-lifecycle-sop/commit/35b9cdb58140b8656b3304ba4006354e586ee9ae) |
| home-services-ai | [71a24db](https://github.com/hossainconsulting/home-services-ai/commit/71a24dbe37ea00493197ec1887b484c52adda51f) |
