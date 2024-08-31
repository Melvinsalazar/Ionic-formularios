<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Mario Bros</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <p>El clásico fontanero está de vuelta en esta emocionante aventura...</p>
        <ion-button router-link="/inicio" fill="solid">Página Principal</ion-button>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
    import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
  export default {
    name: 'MarioPage',
    components: {
      IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton
    }

  };
  </script>
  
  <style scoped>

  </style>
  