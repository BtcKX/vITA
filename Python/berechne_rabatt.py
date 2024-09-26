
bestellwert = float(input("Bitte Preis angeben: "))
rabatt = 0

if bestellwert > 100.00:
    rabatt = bestellwert * 0.1
else:
    rabatt = 0

print(rabatt)