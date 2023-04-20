import re, sys

def deumandanify(s):
    s = re.sub("aiden", "a", s)
    s = re.sub("ipri", "i", s)
    s = re.sub("epre", "e", s)
    s = re.sub("upru", "u", s)
    s = re.sub("opro", "o", s)
    s = re.sub("strengen", "ng", s)
    s = re.sub("(\w)es", r"\1", s)
    return s

for line in sys.stdin:
    print(deumandanifyline.lower())
