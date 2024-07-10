with open('./intern2024[1].csv', 'r', encoding='utf-8') as file:
    lines = file.readlines()
with open('./intern2024[1].csv', 'w', encoding='utf-8') as file:
    for line in lines:
        line = line.replace('"', '')
        line = line.replace(':', '')
        file.write(line)