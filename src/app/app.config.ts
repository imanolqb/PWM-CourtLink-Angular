import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {getFirestore, provideFirestore} from '@angular/fire/firestore'; // Cambio en la importación

// Importa initializeApp correctamente desde Firebase
import { initializeApp } from 'firebase/app';
import {provideFirebaseApp} from "@angular/fire/app";
import {ObtaincourtsService} from "./obtaincourts.service";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCDXByPzhlbYGgXvfWlZv3eAr04Szvta34",
  authDomain: "courtlink-basketball-33d44.firebaseapp.com",
  projectId: "courtlink-basketball-33d44",
  storageBucket: "courtlink-basketball-33d44.appspot.com",
  messagingSenderId: "181877081097",
  appId: "1:181877081097:web:d28f1311de627aee69a4d8"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    ObtaincourtsService,
    provideClientHydration(),
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(firebaseConfig)), // Inicializa la aplicación Firebase correctamente
      provideFirestore(() => getFirestore())
    )
  ]
};
