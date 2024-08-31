<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Final Fantasy</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <p>La saga épica continúa con una nueva entrega llena de magia y aventura...</p>
        <ion-button router-link="/inicio" fill="solid">Página Principal</ion-button>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
  export default {
    name: 'FinalFantasyPage',
    components: {
      IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton
    }
  };
  </script>
  
  <style scoped>
  </style>
  