from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse
root=Path(__file__).resolve().parents[1]
class Images(HTMLParser):
 def __init__(self):super().__init__();self.images=[]
 def handle_starttag(self,t,a):
  if t=='img':self.images.append(dict(a))
s=(root/'index.html').read_text();h=Images();h.feed(s);assert len(h.images)==1
im=h.images[0];assert 'AI' in im.get('alt','');assert im.get('width')=='1672' and im.get('height')=='941'
assert im.get('fetchpriority')=='high';p=root/urlparse(im['src']).path;assert p.exists() and p.stat().st_size<250_000
b=p.read_bytes();assert b[:4]==b'RIFF' and b[8:12]==b'WEBP'
assert 'AI 생성 연출 이미지' in s and 'noindex' in s
print('AI hero caption/alt/intrinsic dimensions/local optimized WebP/noindex PASS')

assert s.index('class="notice"') < s.index('class="editorial-hero"'), "Original safety/scope notice must precede the AI hero"
