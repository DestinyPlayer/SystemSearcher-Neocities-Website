import os

basePath = "/graphics art/"
endPath = "/fileList/"
foldersPaths = [
    "kitbashes",
    "logos",
    "maps",
    "misc",
    "pixel art",
    "sigils"
]
for i in range(len(foldersPaths)):
    curFolder = "_site"+basePath+foldersPaths[i]
    curContent = os.listdir(curFolder)
    f = open("_site"+endPath+foldersPaths[i]+".js", "w")
    
    f.write("const images = [\n")
    for j in range(len(curContent)):
        if ".png" in curContent[i-1]:
            if j == len(curContent)-1:
                f.write('   "'+basePath+foldersPaths[i]+"/"+curContent[j]+'"\n')
            else:
                f.write('   "'+basePath+foldersPaths[i]+"/"+curContent[j]+'",\n')
    f.write("];")
    f.close()