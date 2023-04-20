import re, sys

def stemming(sentence):
    vocal = False
    result = ""
    for letter in sentence:
        if letter == ' ':
            result += letter + "| "
            vocal = False
            continue
        elif letter in "aiueo":
            vocal = True
            result += letter
        elif letter in "bcdfghjklmnpqrstvwxyz":
            result += letter
        else:
            result += " " + letter + " "
            vocal = False
            continue
        if vocal:
            result += " "
            vocal = False
            continue
    ss = re.sub("\s+", " ", result)
    result = ""
    for s in ss.split(" "):
        if len(s) == 3 and s[:2] != "ng" and s[:2] != "ny":
            result += s[0] + " " + s[1:]
        elif len(s) == 4 and s[:2] == "ng":
            result += s[:2] + " " + s[2:]
        elif len(s) == 4 and s[1:4] == "nya":
            result += s[0] + " " + s[1:]
        elif len(s) == 4 and s[1:4] != "nya":
            result += s[0] + " " + s[1] + " " + s[2:]
        else:
            result += s
        result += " "
    return result

def umandanify(ss):
    ss = re.sub("i", "ipri", ss)
    ss = re.sub("e", "epre", ss)
    ss = re.sub("o", "opro", ss)
    ss = re.sub("u", "upru", ss)
    ss = re.sub("a", "aiden", ss)
    ss = re.sub(" (\w) ", r" \1es ", ss)
    ss = re.sub("^(\w) ", r"\1es ", ss)
    ss = re.sub(" ng ", r" strengen ", ss)
    ss = re.sub("\|", "", ss)
    ss = re.sub("\s+", " ", ss)
    ss = re.sub("^ | $", "", ss)
    ss = re.sub(" ([^\w])", r"\1", ss)
    return ss

for line in sys.stdin:
    print(umandanify(stemming(line.lower())))
