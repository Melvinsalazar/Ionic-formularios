<template>
  <ion-content class="ion-padding">
    <ion-grid>
      <ion-row>
        <ion-col size="12" size-md="6">
          <ion-title>
            Videojuegos
          </ion-title>

          <ion-card>
            <ion-card-content>
              <ion-list>
                <ion-item>
                  <ion-label>The Legend of Zelda</ion-label>
                </ion-item>
                <ion-button fill="solid" router-link="/zelda">
                  Leer más...
                </ion-button>

                <ion-item>
                  <ion-label>Mario Bros</ion-label>
                </ion-item>
                <ion-button fill="solid" router-link="/mario">
                  Leer más...
                </ion-button>

                <ion-item>
                  <ion-label>God of War</ion-label>
                </ion-item>
                <ion-button fill="solid" router-link="/godofwar">
                  Leer más...
                </ion-button>

                <ion-item>
                  <ion-label>Final Fantasy</ion-label>
                </ion-item>
                <ion-button fill="solid" router-link="/finalfantasy">
                  Leer más...
                </ion-button>

                <ion-item>
                  <ion-label>Mi nombre</ion-label>
                </ion-item>
                <ion-button fill="solid" router-link="/minombre">
                  Leer más...
                </ion-button>
              </ion-list>
            </ion-card-content>
          </ion-card>
        </ion-col>

        <ion-col size="12" size-md="6">
          <ion-title>
            The Legend of Zelda
          </ion-title><br>
          <ion-card-content class="Cartaimg">
            <img src="/public/Zelda.png" alt="Esta es una imagen de Zelda">
          </ion-card-content>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis dolorum libero nostrum earum, asperiores debitis ipsum, in, dolore dolores odit repellat error molestias fugiat pariatur numquam! Tenetur quisquam sunt a. <br>
          <ion-button fill="solid" router-link="/minombre" class="btnleer">
                  Leer más...
          </ion-button>
        </ion-col>
     
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script>
import {
  IonContent, IonGrid, IonRow, IonCol, IonTitle, IonCard, IonCardContent, IonList, IonItem, IonButton,IonLabel
} from "@ionic/vue";

export default {
  name: 'PaginaInicio',
  components: {
    IonContent, IonGrid, IonRow, IonCol, IonTitle, IonCard, IonCardContent, IonList, IonItem, IonButton,IonLabel
  }
}
</script>

<style>
ion-card-title {
  text-align: center;
}

ion-button {
  --background: #007bff;
  margin-top: 10px;
}

ion-grid {
  padding: 20px;
}

ion-col {
  margin-bottom: 20px;
}

img {
  width: 70%;
  height: auto;
  border-radius: 5px;
}

.Cartaimg {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btnleer{
  display: flex;
  align-items: center;
  justify-content: center;

}
</style>
