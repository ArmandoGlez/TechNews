import tkinter as tk
import time


def update_time():
    current_time = time.strftime("%H:%M:%S")
    time_label.config(text=current_time)
    time_label.after(1000, update_time)  # Actualizar cada 1 segundo


# Crear la ventana
root = tk.Tk()
root.title("Reloj Digital")

# Crear una etiqueta para mostrar la hora
time_label = tk.Label(root, text="", font=("Helvetica", 48))
time_label.pack(padx=20, pady=20)

# Iniciar la actualización del tiempo
update_time()

# Ejecutar el bucle principal de la aplicación
root.mainloop()


class Question:
    def __init__(self, text, answer):
        self.text = text
        self.answer = answer


# Lista de preguntas y respuestas
questions = [
    Question("¿?"),
    Question("¿?"),
    Question("??.%T")
]


def run_quiz():
    score = 0
    for question in questions:
        user_answer = input(question.text + " ")
        if user_answer.lower() == question.answer:
            print("¡Respuesta correcta!")
            score += 1
        else:
            print("Respuesta incorrecta.")
    print("Tu puntaje final es:", score, "/", len(questions))


run_quiz()
