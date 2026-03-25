import zipfile
import re
import shutil

try:
    with zipfile.ZipFile(r'c:\Users\mohan\OneDrive\Desktop\portfolio\temp.cv.docx', 'r') as zf:
        rels_content = zf.read('word/_rels/document.xml.rels').decode('utf-8')
        links = re.findall(r'Target="(http[^"]+)"', rels_content)
        for link in set(links):
            if any(x in link.lower() for x in ['hackerrank', 'github', 'linkedin']):
                print(link)
except Exception as e:
    print(e)
