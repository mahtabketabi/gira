def joke():
    fruit=input("Enter your fruit:")
    oldername=input("Enter your oldername:")
    youngername = input("Enter your youngername:")
    print(""" {} دو{} داشت {} کوچکتر را به خواهر کوچکتر خود {} داد
         {} گفت: {} بی ادبی! 
         {} پرسید: چرا؟
          {} پاسخ داد: چون تو {} کوچکتر را به من دادی. من ناراحتم چون اگر من دو {} داشته باشم، همیشه {} بزرگتر را به تو می دهم و {} کوچکتر را برای خودم برمیدارم.
           {} جواب داد: پس چرا دلخوری تو الان {} کوچکتر را داری مگه نه؟ """
        .format(oldername, fruit, fruit, youngername , youngername , oldername, oldername, youngername ,fruit , fruit, fruit, fruit, oldername , fruit)
    )

joke()