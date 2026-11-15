from pathlib import Path
h=Path('index.html').read_text()
assert 'class="journal-hero"' in h
assert 'COMPARISON PROTOCOL' in h
assert 'style.css?v=photo-20261115' in h
assert '최신 순위표나 자체 종합 점수를 제공하지 않습니다' in h
for p in Path('rankings').glob('*.html'):
 s=p.read_text()
 assert 'class="dossier-nav"' in s
 for x in ['results','method','limits','sources']:assert f'id="{x}"' in s and f'href="#{x}"' in s,(p,x)
print('journal presentation + honest scope + dossier anchors PASS')
