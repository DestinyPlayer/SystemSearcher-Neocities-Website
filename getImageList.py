import os

basePath = "_site/graphics art/"
endPath = "_site/fileList/"
foldersPaths = [
    "kitbashes",
    "logos",
    "maps",
    "misc",
    "pixel art",
    "sigils"
]
for i in range(len(foldersPaths)):
    curFolder = basePath+foldersPaths[i]
    curContent = os.listdir(curFolder)
    print(curFolder)
    print(os.listdir(curFolder))
    f = open(endPath+foldersPaths[i]+".js", "w")
    
    f.write("const images = [\n")
    for j in range(len(curContent)):
        if j == len(curContent)-1:
            f.write('   "'+basePath+curContent[j]+'"\n')
        else:
            f.write('   "'+basePath+curContent[j]+'",\n')
    f.write("];")
    f.close()