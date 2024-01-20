import datetime

date = datetime.datetime.now()
datestr = date.strftime("%Y/%m/%d %H:%M")

f = open("_site/wiki/prismofstars/components/underbar.html", "r")
text = f.read()
f.close()
f = open("_site/wiki/prismofstars/components/underbar.html", "w")

if "LASTUPDATE" in text:
    print("Found LASTUPDATE! Replacing with date...")
    print("Date - "+datestr)
    text = text.replace("LASTUPDATE",datestr)
else:
    print("No LASTUPDATE elements found. File will stay the same.")

print(text)

f.write(text)
f.close()