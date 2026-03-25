import zipfile, xml.etree.ElementTree as ET
try:
    z = zipfile.ZipFile(r'c:\Users\mohan\OneDrive\Desktop\final.cvv\final.cv.docx')
    rels = {r.attrib['Id']: r.attrib['Target'] for r in ET.fromstring(z.read('word/_rels/document.xml.rels')) if 'Hyperlink' in r.attrib.get('Type', '')}
    ns= {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main', 'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'}
    doc_root = ET.fromstring(z.read('word/document.xml'))
    links = []
    for h in doc_root.findall('.//w:hyperlink', ns):
        text_nodes = h.findall('.//w:t', ns)
        text = ''.join([t.text for t in text_nodes if t.text])
        r_id = h.attrib.get('{' + ns['r'] + '}id')
        if r_id in rels:
            links.append(f"{text}: {rels[r_id]}")
    print('\n'.join(links))
except Exception as e:
    print(str(e))
