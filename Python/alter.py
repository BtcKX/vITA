
age = float(input("Bitte Alter angeben: "))

if age >= 18:
    print("Erwachsener")

elif age < 14 and age > 1:
    print("Kind")

elif age <= 1:
    print("Baby")
    
else:
    print("Jugendlicher")

