file1 = open("file1.txt", "r")
file2 = open("data_sort.txt",'w')

lst = file1.readlines()
valren =[]
cpt = 0
lst =[]
for i in lst: 
    
    lst.append(i)
    cpt += 1 
       
    
    if cpt == 10:
        #file2.write(valren)
        valren.append(lst)
        print(valren)
        lst = []
        cpt = 0
          
        print('test')