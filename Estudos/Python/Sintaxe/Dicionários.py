user = {
    "name": "Rafael",
    "age": 22,
    "active": True
}

user["name"]
user.get("email", "não existe")

for key, value in user.items():
    print(key, value)