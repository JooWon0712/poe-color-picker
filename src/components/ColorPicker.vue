<template>

  <v-container>
    <v-app>
      <v-container class="container-custom">
        <v-row style="text-align: center; justify-content: center;">
          <div class="VisualUtilityItemDiv"
            v-bind:style="{backgroundColor: poeBackgroundColor, border: '2px solid '+poeBorderColor, color: poeTextColor}">
            <label class="VisualUtilityItemLabel" >{{itemNameText}}</label>
          </div>
        </v-row>
      </v-container>

      <v-container class="container-custom">
        <v-row>
          <v-col>
            <div class="text-center">백그라운드 컬러</div>
            <v-text-field v-model="poeBackgroundColor" v-mask="mask" hide-details class="ma-0 pa-0" solo>
              <template v-slot:append>
                <v-menu v-model="menu1" nudge-bottom="105" nudge-left="-400" :close-on-content-click="false">
                  <template v-slot:activator="{ on }">
                    <div :style="swatchStyle1" v-on="on" />
                  </template>
                  <v-card>
                    <v-card-text class="pa-0">
                      <v-color-picker v-model="poeBackgroundColor" mode="hexa" flat show-swatches swatches-max-height="400px"/>
                    </v-card-text>
                  </v-card>
                </v-menu>
              </template>
            </v-text-field>
          </v-col>
          <v-col>
            <div class="text-center">테두리 컬러</div>
            <v-text-field v-model="poeBorderColor" v-mask="mask" hide-details class="ma-0 pa-0" solo>
              <template v-slot:append>
                <v-menu v-model="menu2" nudge-bottom="105" nudge-left="-150" :close-on-content-click="false">
                  <template v-slot:activator="{ on }">
                    <div :style="swatchStyle2" v-on="on" />
                  </template>
                  <v-card>
                    <v-card-text class="pa-0">
                      <v-color-picker v-model="poeBorderColor" mode="hexa" flat show-swatches swatches-max-height="400px"/>
                    </v-card-text>
                  </v-card>
                </v-menu>
              </template>
            </v-text-field>
          </v-col>
          <v-col>
            <div class="text-center">폰트 컬러</div>
            <v-text-field v-model="poeTextColor" v-mask="mask" hide-details class="ma-0 pa-0" solo>
              <template v-slot:append>
                <v-menu v-model="menu3" nudge-bottom="105" nudge-left="16" :close-on-content-click="false">
                  <template v-slot:activator="{ on }">
                    <div :style="swatchStyle3" v-on="on" />
                  </template>
                  <v-card>
                    <v-card-text class="pa-0">
                      <v-color-picker v-model="poeTextColor" mode="hexa" flat show-swatches swatches-max-height="400px"/>
                    </v-card-text>
                  </v-card>
                </v-menu>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row>
          <v-col class="col md-6" >
            <v-textarea v-model="inputText" label="메모 공간" outlined rows="5"></v-textarea>
          </v-col>
          <v-col class="col md-3">
            <v-text-field v-model="userInputText" label="아이템 이름 변경" solo outlined></v-text-field>
          </v-col>
          <v-col class="col md-3" >
            <v-btn class="mb-4" @click="copyToClipboard" block>색상 코드 복사</v-btn>
            <v-btn class="mb-4" @click="captureImage" block>색상 정보 이미지로 저장</v-btn>
            <v-btn class="mb-4" @click="convertTextReset" block>입력한 색상 정보 초기화</v-btn>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="container-row" style="width: 600px;">
        <v-row style="display: flex; text-align: center; justify-content: center; margin: 40px;">
          <!-- <p style="text-align: left; white-space: pre;">&nbsp;&nbsp;&nbsp;&nbsp;SetTextColor {{hexToRgba(poeTextColor)}}<br/>&nbsp;&nbsp;&nbsp;&nbsp;SetBorderColor {{hexToRgba(poeBorderColor)}}<br/>&nbsp;&nbsp;&nbsp;&nbsp;SetBackgroundColor {{hexToRgba(poeBackgroundColor)}}</p> -->
          <v-textarea
            clearable
            auto-grow
            clear-icon="mdi-close-circle"
            v-model="colorText"
            disabled
          ></v-textarea>
        </v-row>
      </v-container>
        
      <v-container class="container-row" style="width: 900px;">
        <v-row style="display: flex; text-align: center; justify-content: center; margin: 40px;">
          <v-col>
            <v-textarea
              clearable
              auto-grow
              clear-icon="mdi-close-circle"
              label="hex covert"
              v-model="convertHexColorText"
            ></v-textarea>
          </v-col>
          <v-col>
            <v-textarea
              clearable
              auto-grow
              clear-icon="mdi-close-circle"
              label="rgb covert"
              v-model="convertRgbColorText"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-container>
      <div>
  </div>
    </v-app>
  </v-container>

  
  
</template>

<script>
import html2canvas from 'html2canvas'; // html2canvas를 사용하여 HTML 요소를 캡처합니다.

export default {
	// SetTextColor 249 150 25 255 #F99619
	// SetBorderColor 136 44 44 255 #882C2C
	// SetBackgroundColor 0 0 0 255 #000000
  data() {
    return {
      convertHexColorText: '',
      convertRgbColorText: '',
      poeBackgroundColor: '#F99619',
      poeBorderColor: '#000000',
      poeTextColor: '#000000',
      mask: '!#XXXXXX',
      menu1: false,
      menu2: false,
      menu3: false,
      userInputText: '' // 사용자가 입력한 텍스트
    };
  },
  methods: {
    copyToClipboard() {
      // 클립보드에 복사할 텍스트
      const _textColor = this.hexToRgba(this.poeTextColor, 255);
      const _bordrColor = this.hexToRgba(this.poeBorderColor, 255);
      const _backgroundColor = this.hexToRgba(this.poeBackgroundColor, 240);
      const textToCopy = `    SetTextColor ${_textColor}\n    SetBorderColor ${_bordrColor}\n    SetBackgroundColor ${_backgroundColor}`;

      // 클립보드에 텍스트 복사
      this.$copyText(textToCopy);
    },
    hexToRgba(hex, alpha) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      
      return `${r} ${g} ${b} ${alpha} ${hex}`;
    },
    rgbToHex(r, g, b) {
      const toHex = (value) => {
        const hex = value.toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
      };
      
      const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
      return hex.toUpperCase(); // 대문자로 변환
    },
    extractHexColors(text) {
      const regex = /#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/g;
      const matches = text.match(regex) || [];

      this.poeTextColor = matches[0] || '';
      this.poeBorderColor = matches[1] || '';
      this.poeBackgroundColor = matches[2] || '';
    },
    extractRgbColors(text) {
      //const regex = /#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/g;
      const regex = /Set(?:Text|Border|Background)Color\s+(\d+)\s+(\d+)\s+(\d+)\s+\d+/gm;

      let match;
      while ((match = regex.exec(text)) !== null) {
        const [, r, g, b] = match;
        //const rgb = `${r} ${g} ${b}`;
        const hex = this.rgbToHex(parseInt(r), parseInt(g), parseInt(b));

        if (match[0].includes("TextColor")) {
          this.poeTextColor = hex;
        } else if (match[0].includes("BorderColor")) {
          this.poeBorderColor = hex;
        } else if (match[0].includes("BackgroundColor")) {
          this.poeBackgroundColor = hex;
        }
      }
    },
    captureImage() {
      // 지정한 색상을 html2canvas를 이용해서 저장합니다.
      const label = document.querySelector('.VisualUtilityItemLabel'); // 라벨 요소를 선택합니다.
      const fileName = label ? label.textContent.trim() : 'visual_utility_item'; // 라벨 텍스트를 가져와서 파일 이름으로 지정합니다.

      const element = document.querySelector('.VisualUtilityItemDiv'); // 캡처할 요소를 선택합니다.
      html2canvas(element).then(canvas => {
        const image = canvas.toDataURL('image/png'); // 캔버스를 이미지로 변환합니다.
        const link = document.createElement('a'); // 다운로드 링크를 생성합니다.
        
        link.href = image;
        link.download = `${fileName}.png`; // 이미지 파일의 이름을 지정합니다.
        link.click(); // 다운로드 링크를 클릭하여 이미지를 저장합니다.
      });
    },
    convertTextReset() {
      // 입력한 색상 정보를 초기화합니다.
      this.convertHexColorText = '';
      this.convertRgbColorText = '';

      // v-color-picker의 값을 초기화
      this.$nextTick(() => {
        this.poeBackgroundColor = '#F99619';
        this.poeBorderColor = '#000000';
        this.poeTextColor = '#000000';
      });
    }
  },
  watch: {
    convertHexColorText(newText) {
      this.extractHexColors(newText);
    },
    convertRgbColorText(newText) {
      this.extractRgbColors(newText);
    }
  },
  computed: {
    colorText() {
      const _textColor = this.hexToRgba(this.poeTextColor, 255);
      const _bordrColor = this.hexToRgba(this.poeBorderColor, 255);
      const _backgroundColor = this.hexToRgba(this.poeBackgroundColor, 240);
      return `SetTextColor ${_textColor}\nSetBorderColor ${_bordrColor}\nSetBackgroundColor ${_backgroundColor}`;
    },
    swatchStyle1() {
      const { poeBackgroundColor, menu1 } = this
      return {
        backgroundColor: poeBackgroundColor,
        cursor: 'pointer',
        height: '30px',
        width: '30px',
        borderRadius: menu1 ? '50%' : '4px',
        transition: 'border-radius 200ms ease-in-out'
      }
    },
    swatchStyle2() {
      const { poeBorderColor, menu2 } = this
      return {
        backgroundColor: poeBorderColor,
        cursor: 'pointer',
        height: '30px',
        width: '30px',
        borderRadius: menu2 ? '50%' : '4px',
        transition: 'border-radius 200ms ease-in-out'
      }
    },
    swatchStyle3() {
      const { poeTextColor, menu3 } = this
      return {
        backgroundColor: poeTextColor,
        cursor: 'pointer',
        height: '30px',
        width: '30px',
        borderRadius: menu3 ? '50%' : '4px',
        transition: 'border-radius 200ms ease-in-out'
      }
    },
    itemNameText() {
      // 입력된 텍스트가 있는지 확인하고, 있으면 해당 값 사용, 없으면 기본값 사용
      return this.userInputText ? this.userInputText : '서미누기 필터';
    }
  },
};
</script>

<style>
  
  .container {
    max-width: 400px;
    justify-content: center;
    display: flex;
    margin: 40px;
  }

  .container-row {
    max-width: 250px;
    justify-content: center;
    display: flex;
    margin: 0px 40px;
  }

 .VisualUtilityItemDiv {
    display: inline-flex;
    background-color: #adff2f;
    border: 1px solid pink;
    padding: 10px;
    position: relative;
    text-align: center;
    font-family: GeneralFont;
 }

 .VisualUtilityItemLabel {
    font-size: 30px;
    white-space: nowrap;
  }
</style>