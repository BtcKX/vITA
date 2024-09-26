
a = float(input("Bitte Breite eingeben (in m): "))
b = float(input("Bitte Länge eingeben (in m): "))
c = float(input("Bitte Höhe eingeben (in m): "))

flaeche = a * b
volumen = a * b * c

print("Das Ergebnis beträgt: ", flaeche,"m²")
print(f"Das Ergebnis beträgt: {flaeche} m²") # mit f

print("Das Ergebnis beträgt: ", volumen,"m²")