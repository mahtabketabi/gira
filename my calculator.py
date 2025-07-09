
#شرطی که باعث میشه برنامه تا وقتی کاربر دکمه خروج رو نزده اجرا بشه
a=True
while a==True:
    print("""
      1. جمع    2.تفریق   3.ضرب  4.تقسیم
                            5.خروج      
       """)
#انتخاب عملیات با عدد
    choice = input(" عدد عملیات مورد نظر را انتخاب کنید")

#در صورتی که کاربر خروج را انتخاب کند با تغییر a برنامه از while خارج شده و دیگر اجرا نخواهد شد
    if choice == '5':
        print("خروج از برنامه...")
        a=False

#در صورتی که کاربر خروج را انتخاب نکرد دو ورودی جهت انجام عملیات بگیر
    if choice in ('1', '2', '3', '4'):
        num1 = input("عدد اول: ")
        num2 = input("عدد دوم: ")

#چک کردن اعشاری و حتی عدد بودن ورودی ها
        try:
            num1 = float(num1)
            num2 = float(num2)
        except:
            print("لطفا عدد وارد کنید!")
            continue

        if choice == '1':
            result = num1 + num2
            print(f"نتیجه: {num1} + {num2} = {result}")
        elif choice == '2':
            result = num1 - num2
            print(f"نتیجه: {num1} - {num2} = {result}")
        elif choice == '3':
            result = num1 * num2
            print(f"نتیجه: {num1} * {num2} = {result}")
        elif choice == '4':
            if num2 == 0:
                print("خطا: تقسیم بر صفر مجاز نیست.")
            else:
                result = num1 / num2
                print(f"نتیجه: {num1} / {num2} = {result}")
    else:
        print("عدد مورد نظر اشتباه است یا خارج شده اید!")