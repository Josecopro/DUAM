import pandas as pd
import json

# Cargar los datos desde el archivo JSON ya procesado
with open('DataInstituciones_Procesado.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# Normalizar los datos JSON
df_instituciones = pd.json_normalize(data)

# Aplicar la función a las columnas necesarias
columns_to_apply = [
    'NombreInstitucion', 'TipoDeSede', 'Sector', 'NombreCaracterAcademico',
    'DepartamentoDomicilio', 'NombreMunicipioPrograma', 'DireccionDomicilio',
    'TelefonoDomicilio', 'NombreEstadoPrograma', 'PaginaWeb'
]

# Guardar el DataFrame procesado en un nuevo archivo JSON con formato legible
df_instituciones.to_json('DataInstituciones_Procesado_Final.json', orient='records', indent=4, force_ascii=False)

# Guardar el DataFrame procesado en un nuevo archivo CSV
df_instituciones.to_csv('DataInstituciones_Procesado_Final.csv', index=False, encoding='utf-8')

print("Archivos procesados y guardados exitosamente.")
