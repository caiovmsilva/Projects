fname = input("Enter file name: ")
fh = open(fname)
list_of_words = list()
splitted = list()
for line in fh:
    line.rstrip()
    line.split()
    splitted.append(line.split())

for collection in splitted:
    for word in collection:
        if word not in list_of_words:
            list_of_words.append(word)
        continue

list_of_words.sort()
print(list_of_words)
