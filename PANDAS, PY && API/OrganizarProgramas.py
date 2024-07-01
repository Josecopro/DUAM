import pandas as pd

# Diccionario de reemplazo de acentos por entidades HTML
# html_entities = {
#     'á': '&aacute;',
#     'é': '&eacute;',
#     'í': '&iacute;',
#     'ó': '&oacute;',
#     'ú': '&uacute;',
#     'Á': '&Aacute;',
#     'É': '&Eacute;',
#     'Í': '&Iacute;',
#     'Ó': '&Oacute;',
#     'Ú': '&Uacute;',
#     'ñ': '&ntilde;',
#     'Ñ': '&Ntilde;'
# }

# Función para reemplazar acentos por entidades HTML
# def replace_accents(text):
#     if isinstance(text, str):
#         for char, entity in html_entities.items():
#             text = text.replace(char, entity)
#     return text


# Diccionario de renombrado de columnas
columns_to_rename = {
    'codigoinstitucion': 'CodigoInstitucion',
    'nombreinstitucion': 'NombreInstitucion',
    'nombredepartinstitucion': 'DepartamentoDomicilio',
    'nombreorigeninstitucional': 'Sector',
    'nombrecaracteracademico': 'NombreCaracterAcademico',
    'nombremunicipioprograma': 'NombreMunicipioPrograma',
    'nombreestadoprograma': 'NombreEstadoPrograma',
    'cantidadcreditos': 'CantidadCreditos',
    'nombreareaconocimiento': 'NombreAreaConocimiento',
    'nombremetodologia': 'NombreMetodologia',
    'nombrenbc': 'NombreNBC',
    'nombrenivelformacion': 'NombreNivelFormacion',
    'nombrenivelacademico': 'NombreNivelAcademico',
    'nombreperiodicidad': 'NombrePeriodicidad',
    'cantidadperiodos': 'CantidadPeriodos',
    'nombretipoacreditacion': 'NombreTipoAcreditacion',
    'nombretituloobtenido': 'NombreTituloObtenido'
}

# Cargar los datos desde un archivo CSV
df_programas = pd.read_csv('ProgramasEducacionSuperior_20240627.csv')

# Eliminar columnas innecesarias
columns_to_keep = [
    'codigoinstitucion', 'nombreinstitucion', 'nombredepartinstitucion',
    'nombreorigeninstitucional', 'nombrecaracteracademico', 'nombremunicipioprograma',
    'nombreestadoprograma', 'cantidadcreditos',
    'nombreareaconocimiento', 'nombremetodologia', 'nombrenbc',
    'nombrenivelformacion', 'nombrenivelacademico', 'nombreperiodicidad',
    'cantidadperiodos', 'nombretipoacreditacion', 'nombretituloobtenido'
]
df_programas = df_programas[columns_to_keep]

# Renombrar columnas para consistencia
df_programas.rename(columns=columns_to_rename, inplace=True)

# Aplicar la función a las columnas necesarias
columns_to_apply = [
    'NombreInstitucion', 'NombreDepartInstitucion', 'NombreOrigenInstitucional',
    'NombreCaracterAcademico', 'NombreMunicipioPrograma', 'NombreEstadoPrograma',
    'NombreAreaConocimiento', 'NombreMetodologia', 'NombreNBC',
    'NombreNivelFormacion', 'NombreNivelAcademico', 'NombrePeriodicidad',
    'NombreTipoAcreditacion', 'NombreTituloObtenido'
]

# for column in columns_to_apply:
#     df_programas[column] = df_programas[column].apply(replace_accents)

# Guardar el DataFrame procesado en un nuevo archivo CSV
df_programas.to_csv('ProgramasEducacionSuperior_Procesado.csv', index=False)

# Guardar el DataFrame procesado en un nuevo archivo JSON
df_programas.to_json('ProgramasEducacionSuperior_Procesado.json', orient='records', indent=4)
