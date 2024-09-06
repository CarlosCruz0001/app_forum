import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import Routes from "./src/routes/routes";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const iniciarBancoDeDados = async (db) => {
    try {
      await db.execAsync(`
        PRAGMA journal_mode = WAL;
        -- DROP TABLE usuario;
        CREATE TABLE IF NOT EXISTS usuario (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          email TEXT,
          password TEXT,
          letter TEXT
        );
      `);
      console.log("Banco de Dados inicializado");
    } catch (error) {
      console.log("Erro ao iniciar o Banco de Dados. ", error);
    }
  };

  return (
    <SQLiteProvider databaseName="bancoUsuario.db" onInit={iniciarBancoDeDados}>
      <NavigationContainer>
        <StatusBar style="light" />
        <Routes />
      </NavigationContainer>
    </SQLiteProvider>
  );
}
