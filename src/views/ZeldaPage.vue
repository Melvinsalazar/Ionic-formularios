<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>The Legend of Zelda</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <p>Esta nueva aventura pretende llevarnos a las profundidades...</p>
        <ion-button router-link="/inicio" fill="solid">Página Principal</ion-button>

        <ion-button fill="solid" router-link="/zelda">
                      Leer más...
                    </ion-button>
      </ion-content>
    </ion-page>
  </template>
  
  
  <script>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
  export default {
    name: 'ZeldaPage',
    components: {
      IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton
    }
  };
  </script>
  
  <style scoped>

  </style>
  