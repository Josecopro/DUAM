import pandas as pd

# Diccionario de reemplazo de acentos por entidades HTML
html_entities = {
    'á': 'á',
    'é': 'é',
    'í': 'í',
    'ó': 'ó',
    'ú': 'ú',
    'Á': 'Á',
    'É': 'É',
    'Í': 'Í',
    'Ó': 'Ó',
    'Ú': 'Ú',
    'ñ': 'ñ',
    'Ñ': 'Ñ'
}

# Función para reemplazar acentos por entidades HTML
def replace_accents(text):
    if isinstance(text, str):
        for char, entity in html_entities.items():
            text = text.replace(char, entity)
    return text

# Diccionario de renombrado de columnas
columns_to_rename_instituciones = {
    'Código Institución': 'CodigoInstitucion',
    'Nombre Institución': 'NombreInstitucion',
    'Principal/Seccional': 'TipoDeSede',
    'Sector': 'Sector',
    'Carácter Académico': 'NombreCaracterAcademico',
    'Departamento Domicilio': 'DepartamentoDomicilio',
    'Municipio Domicilio': 'NombreMunicipioPrograma',
    'Dirección Domicilio': 'DireccionDomicilio',
    'Teléfono Domicilio': 'TelefonoDomicilio',
    'Estado': 'NombreEstadoPrograma',
    'Página Web': 'PaginaWeb'
}

# Cargar los datos desde un archivo CSV
df_instituciones = pd.read_csv('DataInstituciones.csv')

# Eliminar columnas innecesarias
columns_to_keep = [
    'Código Institución', 'Nombre Institución', 'Principal/Seccional', 
    'Sector', 'Carácter Académico', 'Departamento Domicilio', 
    'Municipio Domicilio', 'Dirección Domicilio', 'Teléfono Domicilio', 
    'Estado', 'Página Web'
]
df_instituciones = df_instituciones[columns_to_keep]

# Renombrar columnas para consistencia
df_instituciones.rename(columns=columns_to_rename_instituciones, inplace=True)

# Aplicar la función a las columnas necesarias
columns_to_apply = [
    'NombreInstitucion', 'TipoDeSede', 'Sector', 'NombreCaracterAcademico',
    'DepartamentoDomicilio', 'NombreMunicipioPrograma', 'DireccionDomicilio',
    'TelefonoDomicilio', 'NombreEstadoPrograma', 'PaginaWeb'
]

for column in columns_to_apply:
    df_instituciones[column] = df_instituciones[column].apply(lambda x: replace_accents(str(x)))

# Guardar el DataFrame procesado en un nuevo archivo JSON con formato legible
df_instituciones.to_json('DataInstituciones_Procesado.json', orient='records', indent=4)

# Guardar el DataFrame procesado en un nuevo archivo CSV
df_instituciones.to_csv('DataInstituciones_Procesado.csv', index=False)

print("Archivos procesados y guardados exitosamente.")
