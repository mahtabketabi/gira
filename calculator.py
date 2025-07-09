from tkinter import *
def add():

    if n1.get()=="" or n2.get()=="":
        result.config(text="type something")
    else:
        result.config(text=float(n1.get())+float(n2.get()))

def minus():
    if n1.get() == "" or n2.get() == "":
        result.config(text="type something")
    else:
        result.config(text=float(n1.get()) - float(n2.get()))

def multiply():
    if n1.get() == "" or n2.get() == "":
        result.config(text="type something")
    else:
        result.config(text=float(n1.get()) * float(n2.get()))

def division():
    if n1.get()=="" or n2.get()=="":
        result.config(text="type something")
    elif float(n2.get())==0:
        result.config(text="division with zero is not possible!")
    else:
        result.config(text=float(n1.get())/float(n2.get()))

def close():
    win.withdraw()

win=Tk()
win.title("Calculator")
win.geometry("600x300")
win.resizable(width=False, height=False)
win.configure(bg="rosybrown1")
lb1=Label(win,text="n1", fg='black')
lb2=Label(win,text="n2", fg='black')
n1=Entry(win)
n2=Entry(win)
b1=Button(win,text="+",fg='black',command=add , width=10 )
b2=Button(win,text="-",fg='black',command=minus ,width=10 )
b3=Button(win,text="*",fg='black',command=multiply , width=10 )
b4=Button(win,text="/",fg='black',command=division , width=10 )
b5=Button(win,text="close",fg='black',command=close)
result=Label(win, text="" , background='green' , fg='white')
lb1.place(x=150,y=20)
lb2.place(x=150,y=50)
n1.place(x=180,y=20)
n2.place(x=180,y=50)
b1.place(x=50,y=80)
b2.place(x=150,y=80)
b3.place(x=250,y=80)
b4.place(x=350,y=80)
b5.place(x=10,y=120)
result.place(x=80,y=120)
win.mainloop()

