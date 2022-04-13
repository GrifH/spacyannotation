import sys
import os

def main():
    args = sys.argv
    texts = []
    if len(args) > 1:
        print("Command Line Args")
        for i in range(1, len(args)):
            file = open(args[i], "r")
            texts.append(file.read())
            file.close()
    else:
        print("Read from directory")
        directory = "./thesisPapers"
        for filename in os.listdir(directory):
            f = os.path.join(directory, filename)
    # checking if it is a file
            if os.path.isfile(f):
                print(f)
                file = open(f, "r")
                texts.append(file.read())
                file.close()
    jsCode = "export var localAbstracts = [\"" + "\",\"".join(texts) + "\"];"
    file = open("js/papers.js", "w")
    file.write(jsCode)
    file.close()


if __name__=="__main__":
    main()
