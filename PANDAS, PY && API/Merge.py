import pandas as pd
import json

# Cargar los datos desde el archivo JSON ya procesado
with open('DataInstituciones_Procesado.json', 'r', encoding='utf-8') as file:
    data_instituciones = json.load(file)

# Normalizar los datos JSON
df_instituciones = pd.json_normalize(data_instituciones)

# Convertir la columna CodigoInstitucion a tipo str
df_instituciones['CodigoInstitucion'] = df_instituciones['CodigoInstitucion'].astype(str)

# Cargar los datos desde el archivo CSV de programas
df_programas = pd.read_csv('ProgramasEducacionSuperior_Procesado.csv')

# Convertir la columna CodigoInstitucion a tipo str
df_programas['CodigoInstitucion'] = df_programas['CodigoInstitucion'].astype(str)

# Realizar el merge de los datos de instituciones y programas
df_merged = pd.merge(df_instituciones, df_programas, on='CodigoInstitucion', suffixes=('', '_programa'))

# Eliminar las columnas repetidas del archivo de programas
columns_to_drop = [col for col in df_merged.columns if col.endswith('_programa')]
df_merged.drop(columns=columns_to_drop, inplace=True)

# Guardar el DataFrame procesado en un nuevo archivo JSON con formato legible
df_merged.to_json('DataInstituciones_Programas_Merged.json', orient='records', indent=4, force_ascii=False)

# Guardar el DataFrame procesado en un nuevo archivo CSV
df_merged.to_csv('DataInstituciones_Programas_Merged.csv', index=False, encoding='utf-8')

print("Archivos procesados y guardados exitosamente.")
