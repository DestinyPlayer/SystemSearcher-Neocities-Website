import os

basePath = "/graphics art/"
threedPath = "/3d art/"
endPath = "/fileList/"
foldersPaths = [
    "logos",
    "sigils",
    "sigils/Destiny Pack 01",
    "misc",
    "misc/Touhou",
    "maps",
    "pixel art",
    "kitbashes"
]
threedFoldersPaths = [
    "safe/3d models",
    "safe/3d models/nokama",
    "lewd/posters"
]

def rollThrough(path1,path2):
    for i in range(len(path2)):
        curFolder = "_site"+path1+path2[i]
        curContent = os.listdir(curFolder)
        curContent.sort()
        f = open("_site"+endPath+path2[i]+".js", "w")
        
        f.write("const images = [\n")
        for j in range(len(curContent)):
            if ".png" in curContent[j]:
                if j == len(curContent)-1:
                    f.write('   "'+path1+path2[i]+"/"+curContent[j]+'"\n')
                else:
                    f.write('   "'+path1+path2[i]+"/"+curContent[j]+'",\n')
        f.write("];")
        f.close()
        
rollThrough(basePath,foldersPaths)
rollThrough(threedPath,threedFoldersPaths)