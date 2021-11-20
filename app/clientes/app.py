from flask import Flask

app = Flask(__name__)

# TODO: Poner aquí la lógica del servicio de consulta de clientes almacenados en la BD de mongo

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)