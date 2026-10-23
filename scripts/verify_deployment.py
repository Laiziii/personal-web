"""Verify a built website at its deployment URL, including assets under a subpath."""

from html.parser import HTMLParser
import sys
import time
from urllib.parse import urljoin, urlparse
from urllib.request import urlopen


class Assets(HTMLParser):
    def __init__(self):
        super().__init__()
        self.urls = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "script" and attrs.get("src"):
            self.urls.append(attrs["src"])
        if tag == "link" and attrs.get("rel") in ("stylesheet", "icon"):
            self.urls.append(attrs["href"])


def verify(site_url):
    if urlparse(site_url).scheme not in ("https", "http"):
        raise ValueError("A website URL is required")
    with urlopen(site_url, timeout=20) as response:
        assert response.status == 200, "Homepage did not return HTTP 200"
        html = response.read().decode("utf-8")
    assert "Azeez Adigun" in html, "Expected site title is missing"
    assert 'id="root"' in html, "Application mount point is missing"
    parser = Assets()
    parser.feed(html)
    assert len(parser.urls) >= 3, "Expected script, stylesheet, and favicon"
    for asset in parser.urls:
        asset_url = urljoin(site_url, asset)
        assert urlparse(asset_url).netloc == urlparse(site_url).netloc
        with urlopen(asset_url, timeout=20) as response:
            assert response.status == 200, f"Asset unavailable: {asset}"
            assert response.read(256), f"Empty asset: {asset}"
            content_type = response.headers.get("Content-Type", "")
            assert "text/html" not in content_type, f"Asset returned HTML: {asset}"
    print(f"Verified homepage, application script, stylesheet, and favicon: {site_url}")


if __name__ == "__main__":
    for attempt in range(12):
        try:
            verify(sys.argv[1])
            break
        except Exception:
            if attempt == 11:
                raise
            time.sleep(5)
