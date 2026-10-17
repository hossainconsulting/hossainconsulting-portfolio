"""Read-only public release checks. Does not submit enquiries or activate services."""
import json
from datetime import datetime, timezone
from pathlib import Path
from urllib.request import Request, urlopen

results = []
for domain in ("hossainconsulting.com", "hemayethossain.com"):
    for path in ("/", "/legal", "/privacy", "/services"):
        if domain == "hemayethossain.com" and path == "/services":
            continue
        url = "https://" + domain + path
        with urlopen(Request(url, headers={"User-Agent": "WebsiteReleaseVerification/1.0"}), timeout=30) as response:
            html = response.read().decode("utf-8")
            assert response.status == 200
            assert response.url == url, response.url
        if path in ("/legal", "/privacy"):
            assert "18 October 2026" in html
        if domain == "hossainconsulting.com" and path == "/services":
            for token in ("A$4,950", "A$1,980", "A$880", "A$770", "A$1,320", "A$660", "A$2,640", "A$330", "Essential Connection", "Connected Operations", "AI FAQ", "Extra costs:", "testing required", "Published 18 October 2026"):
                assert token in html, token
            for token in ("50%", "UNPUBLISHED", "this preview"):
                assert token not in html, token
        if domain == "hemayethossain.com" and path == "/":
            assert "Agency services, prices" in html
        results.append({"url": url, "status": 200, "release_content": "passed"})
record = {"checked_at_utc": datetime.now(timezone.utc).isoformat(), "checks": results}
Path(__file__).with_name("live-checks.json").write_text(json.dumps(record, indent=2) + "\n", encoding="utf-8")
print(json.dumps(record, indent=2))
