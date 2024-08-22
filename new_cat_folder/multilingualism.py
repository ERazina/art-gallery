from flask import Flask, request, redirect, url_for, render_template, make_response
from flask_babel import Babel, _

app = Flask(__name__)
app.config['BABEL_DEFAULT_LOCALE'] = 'ru'  # Язык по умолчанию - русский
babel = Babel(app)

# Доступные языки
LANGUAGES = {
    'en': 'English',
    'ru': 'Русский',
    'de': 'Deutsch',
    'fr': 'Français',
    'es': 'Español',
    'sv': 'Svenska',
    'zh': '中文'
}

@babel.localeselector
def get_locale():
    # Проверка наличия cookies с языком
    lang = request.cookies.get('language')
    if lang in LANGUAGES:
        return lang
    return request.accept_languages.best_match(LANGUAGES.keys())

@app.route('/set_language/<language>')
def set_language(language=None):
    if language not in LANGUAGES:
        language = 'ru'  # Язык по умолчанию
    response = make_response(redirect(request.referrer or url_for('index')))
    response.set_cookie('language', language, max_age=30*24*60*60)  # Сохраняем язык на 30 дней
    return response

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
