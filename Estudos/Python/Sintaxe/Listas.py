nums = [1, 2, 3, 4]

nums.append(5)
nums.remove(2)
nums[0]
nums[-1]  # último

#Slice:
nums[1:3]   # [2,3]
nums[:2]    # [1,2]
nums[::2]   # pula de 2 em 2


# List comprehension:
quadrados = [x**2 for x in range(5)]

pares = [x for x in range(10) if x % 2 == 0]    # Com condição


# Tuplas => array imutável:
coord = (10, 20)

x, y = coord

# Sets :=> coleção sem repetição:
s = {1, 2, 3 , 3}
print(s)  # {1,2,3}
s.add(4)
