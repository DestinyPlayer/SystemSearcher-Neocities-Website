import os

basePath = "/graphics art/"
endPath = "/fileList/"
foldersPaths = [
    "logos",
    "sigils",
    "misc",
    "misc/touhou",
    "maps",
    "pixel art",
    "kitbashes"
]
for i in range(len(foldersPaths)):
    curFolder = "_site"+basePath+foldersPaths[i]
    curContent = os.listdir(curFolder)
    f = open("_site"+endPath+foldersPaths[i]+".js", "w")
    
    f.write("const images = [\n")
    for j in range(len(curContent)):
        if ".png" in curContent[j]:
            if j == len(curContent)-1:
                f.write('   "'+basePath+foldersPaths[i]+"/"+curContent[j]+'"\n')
            else:
                f.write('   "'+basePath+foldersPaths[i]+"/"+curContent[j]+'",\n')
    f.write("];")
    f.close()