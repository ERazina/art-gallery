from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed
from wtforms import StringField, TextAreaField, SubmitField
from wtforms.validators import DataRequired

class ArtworkForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    main_image = FileField('Main Image', validators=[FileAllowed(['jpg', 'png'])])
    additional_images = FileField('Additional Images', validators=[FileAllowed(['jpg', 'png'])])
    style = StringField('Style', validators=[DataRequired()])
    materials = StringField('Materials', validators=[DataRequired()])
    technique = StringField('Technique', validators=[DataRequired()])
    genre = StringField('Genre', validators=[DataRequired()])
    size = StringField('Size', validators=[DataRequired()])
    frame = StringField('Framed or Not', validators=[DataRequired()])
    description = TextAreaField('Description', validators=[DataRequired()])
    seo_keywords = StringField('SEO Keywords', validators=[DataRequired()])
    submit = SubmitField('Add Artwork')

@app.route('/add_artwork', methods=['GET', 'POST'])
@login_required
def add_artwork():
    form = ArtworkForm()
    if form.validate_on_submit():
        # Обработка данных формы
        return redirect(url_for('dashboard'))
    return render_template('add_artwork.html', form=form)
