<template>

  <v-app id="inspire">
    <v-container>
      <v-row style="text-align: center; justify-content: center;">
        <div class="VisualUtilityItemDiv"
          style="text-align: center; align-items: center; justify-content: center; margin: 40px;"
          v-bind:style="{backgroundColor: color1, border: '2px solid '+color2, color: color3}">
          <label class="VisualUtilityItemLabel">Chaos Orb</label>
        </div>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col>
          <div class="text-center">백그라운드 컬러</div>
          <v-text-field v-model="color1" v-mask="mask1" hide-details class="ma-0 pa-0" solo>
            <template v-slot:append>
              
              <v-menu v-model="menu1" top nudge-bottom="105" nudge-left="16" :close-on-content-click="false">
                <template v-slot:activator="{ on }">
                  <div :style="swatchStyle1" v-on="on" />
                </template>
                <v-card>
                  <v-card-text class="pa-0">
                    <v-color-picker v-model="color1" flat show-swatches swatches-max-height="400px"/>
                  </v-card-text>
                </v-card>
              </v-menu>
            </template>
          </v-text-field>
        </v-col>
        <v-col>
          <div class="text-center">테두리 컬러</div>
          <v-text-field v-model="color2" v-mask="mask2" hide-details class="ma-0 pa-0" solo>
            <template v-slot:append>
              <v-menu v-model="menu2" top nudge-bottom="105" nudge-left="16" :close-on-content-click="false">
                <template v-slot:activator="{ on }">
                  <div :style="swatchStyle2" v-on="on" />
                </template>
                <v-card>
                  <v-card-text class="pa-0">
                    <v-color-picker v-model="color2" flat show-swatches swatches-max-height="400px"/>
                  </v-card-text>
                </v-card>
              </v-menu>
            </template>
          </v-text-field>
        </v-col>
        <v-col>
          <div class="text-center">폰트 컬러</div>
          <v-text-field v-model="color3" v-mask="mask3" hide-details class="ma-0 pa-0" solo>
            <template v-slot:append>
              
              <v-menu v-model="menu3" top nudge-bottom="105" nudge-left="16" :close-on-content-click="false">
                <template v-slot:activator="{ on }">
                  <div :style="swatchStyle3" v-on="on" />
                </template>
                <v-card>
                  <v-card-text class="pa-0">
                    <v-color-picker v-model="color3" flat show-swatches swatches-max-height="400px"/>
                  </v-card-text>
                </v-card>
              </v-menu>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row style="display: flex; text-align: center; justify-content: center;">
        <v-btn @click="copyColor()">복사</v-btn>
      </v-row>
    </v-container>
    

  </v-app>
</template>

<script>
export default {
	// SetTextColor 255 0 0 255
	// SetBorderColor 255 0 0 255
	// SetBackgroundColor 255 255 255 255
  data() {
    return {
      color1: '#F99619',
      color2: '#000000',
      color3: '#000000FF',
      mask1: '!#XXXXXXXX',
      mask2: '!#XXXXXXXX',
      mask3: '!#XXXXXXXX',
      menu1: false,
      menu2: false,
      menu3: false
    };
  },
  methods: {
    copyColor() {
      console.log("test1", this.color1)
      console.log("test2", this.color2)
      console.log("test3", this.color3)
    }
  },
  computed: {
    swatchStyle1() {
      const { color1, menu1 } = this
      return {
        backgroundColor: color1,
        cursor: 'pointer',
        height: '30px',
        width: '30px',
        borderRadius: menu1 ? '50%' : '4px',
        transition: 'border-radius 200ms ease-in-out'
      }
    },
    swatchStyle2() {
      const { color2, menu2 } = this
      return {
        backgroundColor: color2,
        cursor: 'pointer',
        height: '30px',
        width: '30px',
        borderRadius: menu2 ? '50%' : '4px',
        transition: 'border-radius 200ms ease-in-out'
      }
    },
    swatchStyle3() {
      const { color3, menu3 } = this
      return {
        backgroundColor: color3,
        cursor: 'pointer',
        height: '30px',
        width: '30px',
        borderRadius: menu3 ? '50%' : '4px',
        transition: 'border-radius 200ms ease-in-out'
      }
    }
  },
};
</script>

<style>
 .VisualUtilityItemDiv {
    display: inline-flex;
    background-color: #adff2f;
    border: 1px solid pink;
    padding: 5px;
    position: relative;
    top: 40%;
    text-align: center;
    font-family: GeneralFont;
 }

 .VisualUtilityItemLabel {
    font-size: 30px;
    white-space: nowrap;
  }
</style>