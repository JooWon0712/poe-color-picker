<template>

  <v-app>
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
          <v-text-field v-model="color1" v-mask="mask" hide-details class="ma-0 pa-0" solo>
            <template v-slot:append>
              <v-menu v-model="menu1" top nudge-bottom="105" nudge-left="16" :close-on-content-click="false">
                <template v-slot:activator="{ on }">
                  <div :style="swatchStyle1" v-on="on" />
                </template>
                <v-card>
                  <v-card-text class="pa-0">
                    <v-color-picker v-model="color1" mode="hexa" flat show-swatches swatches-max-height="400px"/>
                  </v-card-text>
                </v-card>
              </v-menu>
            </template>
          </v-text-field>
        </v-col>
        <v-col>
          <div class="text-center">테두리 컬러</div>
          <v-text-field v-model="color2" v-mask="mask" hide-details class="ma-0 pa-0" solo>
            <template v-slot:append>
              <v-menu v-model="menu2" top nudge-bottom="105" nudge-left="16" :close-on-content-click="false">
                <template v-slot:activator="{ on }">
                  <div :style="swatchStyle2" v-on="on" />
                </template>
                <v-card>
                  <v-card-text class="pa-0">
                    <v-color-picker v-model="color2" mode="hexa" flat show-swatches/>
                  </v-card-text>
                </v-card>
              </v-menu>
            </template>
          </v-text-field>
        </v-col>
        <v-col>
          <div class="text-center">폰트 컬러</div>
          <v-text-field v-model="color3" v-mask="mask" hide-details class="ma-0 pa-0" solo>
            <template v-slot:append>
              <v-menu v-model="menu3" top nudge-bottom="105" nudge-left="16" :close-on-content-click="false">
                <template v-slot:activator="{ on }">
                  <div :style="swatchStyle3" v-on="on" />
                </template>
                <v-card>
                  <v-card-text class="pa-0">
                    <v-color-picker v-model="color3" mode="hexa" flat show-swatches swatches-max-height="400px"/>
                  </v-card-text>
                </v-card>
              </v-menu>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
      <!-- <v-row style="display: flex; text-align: center; justify-content: center;">
        <v-btn @click="copyColor()">복사</v-btn>
      </v-row> -->
      <v-row style="display: flex; text-align: center; justify-content: center; margin: 40px;">
        <p style="text-align: left; white-space: pre;">
          &nbsp;&nbsp;&nbsp;SetTextColor {{ hexToRgba(color3) }}
          <br/>
          &nbsp;&nbsp;&nbsp;SetBorderColor {{ hexToRgba(color2) }}
          <br/>
          &nbsp;&nbsp;&nbsp;SetBackgroundColor {{ hexToRgba(color1) }}
        </p>
        
      </v-row>
    </v-container>
    

  </v-app>
</template>

<script>
export default {
	// SetTextColor 255 255 255 255
	// SetBorderColor 255 255 255 255
	// SetBackgroundColor 20 110 220
  data() {
    return {
      color1: '#F99619',
      color2: '#000000',
      color3: '#000000',
      mask: '!#XXXXXX',
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
    },
    hexToRgba(hex) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);

      return `${r} ${g} ${b} 255 #${hex}`;
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