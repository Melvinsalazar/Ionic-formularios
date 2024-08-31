<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>God of War</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <p>Kratos regresa en una nueva aventura épica...</p>
        <ion-button router-link="/inicio" fill="solid">Página Principal</ion-button>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
  export default {
    name: 'GodOfWarPage',
    components: {
      IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton
    }
  };
  </script>
  
  <style scoped>

  </style>
  