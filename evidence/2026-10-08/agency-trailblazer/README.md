# Agency founder Trailblazer footer link

8 October 2026. Owner requested the existing personal Trailblazer URL in the agency footer. Added one AGENCY_SOCIAL entry labelled “Founder’s Trailblazer”, pointing to https://www.salesforce.com/trailblazer/hemayethossain. This clearly identifies a founder profile rather than an agency certification profile. All previous agency and personal footer links preserved; personal footer unchanged.

Validation: npm run lint and npm run build passed (exit 0). Built production server GET / with agency and personal Host headers returned 200; footer HTML contained the exact URL and corresponding agency/personal labels. git diff --check passed. No visual browser check performed; existing shared footer rendering and styling reused. Prepared on review branch; not merged or deployed to production pending owner approval.
