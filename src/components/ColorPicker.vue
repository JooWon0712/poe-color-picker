<template>

  <v-container>
    <v-app>
      <v-container class="itemFilterOfficialInfo" style="margin: 4px;">
        <v-row style="margin: 4px;">
          <div
            v-bind:style="{ backgroundColor: '#000000', border: '4px solid #000000', color: '#C8C8C8', marginRight: '10px' }"
            v-clipboard:copy="'C8C8C8'" v-clipboard:success="onCopySuccess" v-clipboard:error="onCopyError">
            <label>일반 아이템</label>
          </div>
          <div
            v-bind:style="{ backgroundColor: '#000000', border: '4px solid #000000', color: '#8888FF', marginRight: '10px' }"
            v-clipboard:copy="'8888FF'" v-clipboard:success="onCopySuccess" v-clipboard:error="onCopyError">
            <label>마법 아이템</label>
          </div>
          <div
            v-bind:style="{ backgroundColor: '#000000', border: '4px solid #000000', color: '#FFFF77', marginRight: '10px' }"
            v-clipboard:copy="'FFFF77'" v-clipboard:success="onCopySuccess" v-clipboard:error="onCopyError">
            <label>희귀 아이템</label>
          </div>
          <div
            v-bind:style="{ backgroundColor: '#000000', border: '4px solid #000000', color: '#AF6025', marginRight: '10px' }"
            v-clipboard:copy="'AF6025'" v-clipboard:success="onCopySuccess" v-clipboard:error="onCopyError">
            <label>고유 아이템</label>
          </div>
          <div
            v-bind:style="{ backgroundColor: '#000000', border: '4px solid #000000', color: '#4AE63A', marginRight: '10px' }"
            v-clipboard:copy="'4AE63A'" v-clipboard:success="onCopySuccess" v-clipboard:error="onCopyError">
            <label>퀘스트 아이템</label>
          </div>
          <div
            v-bind:style="{ backgroundColor: '#000000', border: '4px solid #000000', color: '#0EBAFF', marginRight: '10px' }"
            v-clipboard:copy="'0EBAFF'" v-clipboard:success="onCopySuccess" v-clipboard:error="onCopyError">
            <label>점술 카드</label>
          </div>
          <div
            v-bind:style="{ backgroundColor: '#000000', border: '4px solid #000000', color: '#1BA29B', marginRight: '10px' }"
            v-clipboard:copy="'1BA29B'" v-clipboard:success="onCopySuccess" v-clipboard:error="onCopyError">
            <label>스킬 젬</label>
          </div>
          <div
            v-bind:style="{ backgroundColor: '#000000', border: '4px solid #000000', color: '#AA9E82', marginRight: '10px' }"
            v-clipboard:copy="'AA9E82'" v-clipboard:success="onCopySuccess" v-clipboard:error="onCopyError">
            <label>화폐</label>
          </div>
        </v-row>
      </v-container>
      <v-container class="itemFilterSeoMinugiInfo" style="margin: 4px;">
        <v-row style="margin: 4px;">
          <div v-bind:style="{ backgroundColor: '#000000', border: '4px solid #000000', color: '#D5245F' }"
            v-clipboard:copy="'D5245F'" v-clipboard:success="onCopySuccess" v-clipboard:error="onCopyError">
            <label>서미누기-타락템 테투리</label>
          </div>
        </v-row>
        <!-- Snackbar for success message -->
        <v-snackbar v-model="successSnackbar" color="green" timeout="1000">
          {{ successMessage }}
          <template #action="{ attrs }">
            <v-btn color="white" text v-bind="attrs" @click="successSnackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>

        <!-- Snackbar for error message -->
        <v-snackbar v-model="errorSnackbar" color="red" timeout="1000">
          {{ errorMessage }}
          <template #action="{ attrs }">
            <v-btn color="white" text v-bind="attrs" @click="errorSnackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </v-container>

      <v-container class="container-custom itemFilterInfo">
        <v-row style="text-align: center; justify-content: center; margin: 4px;">
          <div class="VisualUtilityItemDiv"
            v-bind:style="{ backgroundColor: poeBackgroundColor, border: '4px solid ' + poeBorderColor, color: poeTextColor, marginRight: '10px' }">
            <label class="VisualUtilityItemLabel">{{ itemNameText }}</label>
          </div>
          <div class="VisualUtilityItemDiv"
            v-bind:style="{ backgroundColor: poeBackgroundColor, border: '4px solid ' + poeBorderColor, color: '#C8C8C8', marginRight: '10px' }">
            <label class="VisualUtilityItemLabel">{{ itemNameText }} (일반 등급)</label>
          </div>
          <div class="VisualUtilityItemDiv"
            v-bind:style="{ backgroundColor: poeBackgroundColor, border: '4px solid ' + poeBorderColor, color: '#8888FF', marginRight: '10px' }">
            <label class="VisualUtilityItemLabel">{{ itemNameText }} (마법 등급)</label>
          </div>
          <div class="VisualUtilityItemDiv"
            v-bind:style="{ backgroundColor: poeBackgroundColor, border: '4px solid ' + poeBorderColor, color: '#FFFF77' }">
            <label class="VisualUtilityItemLabel">{{ itemNameText }} (희귀 등급)</label>
          </div>
          <div id="app" style="display: flex; justify-content: center; align-items: center; margin: 10px;">
            <v-btn @click="toggleMode">{{ isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode' }}</v-btn>
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
                    <div :style="swatchStyle1" v-on="on"></div>
                  </template>
                  <v-card>
                    <v-card-text class="pa-0">
                      <v-color-picker v-model="poeBackgroundColor" mode="hexa" flat show-swatches
                        swatches-max-height="400px" />
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
                    <div :style="swatchStyle2" v-on="on"></div>
                  </template>
                  <v-card>
                    <v-card-text class="pa-0">
                      <v-color-picker v-model="poeBorderColor" mode="hexa" flat show-swatches
                        swatches-max-height="400px" />
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
                    <div :style="swatchStyle3" v-on="on"></div>
                  </template>
                  <v-card>
                    <v-card-text class="pa-0">
                      <v-color-picker v-model="poeTextColor" mode="hexa" flat show-swatches
                        swatches-max-height="400px" />
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
          <v-col class="col md-6">
            <v-textarea class="custom-textarea" v-model="notePadText" label="메모 공간" outlined rows="5"></v-textarea>
          </v-col>
          <v-col class="col md-3">
            <v-text-field v-model="userInputText" label="아이템 이름 변경" solo outlined></v-text-field>
          </v-col>
          <v-col class="col md-3">
            <v-btn class="mb-4" @click="copyTextToClipboard" block>색상 필터 코드로 복사</v-btn>
            <v-btn class="mb-4" @click="copyImageToClipboard" block>색상 정보 이미지로 복사</v-btn>
            <v-btn class="mb-4" @click="captureImage" block>색상 정보 이미지로 저장</v-btn>
            <v-btn class="mb-4" @click="convertTextReset" block>입력한 색상 정보 초기화</v-btn>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="container-row" style="width: 900px;">
        <v-row style="display: flex; text-align: center; justify-content: center; margin: 40px;">
          <v-col>
            <v-textarea class="custom-textarea" clearable auto-grow clear-icon="mdi-close-circle" label="hex convert"
              v-model="convertHexColorText"></v-textarea>
          </v-col>
          <v-col>
            <v-textarea class="custom-textarea" clearable auto-grow clear-icon="mdi-close-circle" label="rgb convert"
              v-model="convertRgbColorText"></v-textarea>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="container-row" style="width: 600px;">
        <v-row style="display: flex; text-align: center; justify-content: center; margin: 40px;">
          <!-- <p style="text-align: left; white-space: pre;">&nbsp;&nbsp;&nbsp;&nbsp;SetTextColor {{hexToRgba(poeTextColor)}}<br/>&nbsp;&nbsp;&nbsp;&nbsp;SetBorderColor {{hexToRgba(poeBorderColor)}}<br/>&nbsp;&nbsp;&nbsp;&nbsp;SetBackgroundColor {{hexToRgba(poeBackgroundColor)}}</p> -->
          <v-textarea clearable auto-grow clear-icon="mdi-close-circle" v-model="colorText" disabled></v-textarea>
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
      userInputText: '', // 사용자가 입력한 텍스트
      notePadText: '', //메모공간 텍스트,
      isDarkMode: false,
      successSnackbar: false, // 성공 스낵바 상태
      errorSnackbar: false, // 실패 스낵바 상태
      successMessage: '', // 성공 메시지
      errorMessage: '' // 실패 메시지
    };
  },
  mounted() {
    // Check local storage for mode preference
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      this.isDarkMode = savedMode === 'dark';
      document.body.classList.add(savedMode === 'dark' ? 'dark-mode' : 'light-mode');
    }
  },
  methods: {
    copyTextToClipboard() {
      // 클립보드에 복사할 텍스트
      const _textColor = this.hexToRgba(this.poeTextColor, 255);
      const _bordrColor = this.hexToRgba(this.poeBorderColor, 255);
      const _backgroundColor = this.hexToRgba(this.poeBackgroundColor, 255);
      const textToCopy = `    SetTextColor ${_textColor}\n    SetBorderColor ${_bordrColor}\n    SetBackgroundColor ${_backgroundColor}`;

      // 클립보드에 텍스트 복사
      this.$copyText(textToCopy);
    },
    copyImageToClipboard() {
      // 이미지를 클립보드에 복사하는 함수
      // 이미지를 포함하는 요소 선택
      const element = document.querySelector('.VisualUtilityItemDiv');

      // html2canvas를 사용하여 선택한 요소를 캡처
      html2canvas(element).then(canvas => {
        // 캔버스를 이미지(blob)로 변환
        canvas.toBlob(blob => {
          // Clipboard API를 사용하여 클립보드에 이미지 복사
          const item = new ClipboardItem({ 'image/png': blob });
          navigator.clipboard.write([item]);
        });
      });
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
      // 첫 번째 줄을 추출
      const firstLine = text.split('\n')[0];

      // 첫 번째 줄이 #으로 시작하면 userInputText 변수에 할당
      if (firstLine.startsWith('#')) {
        this.userInputText = firstLine.replace(/^#\s*/, '');
      }

      // Hex 색상을 추출하는 정규 표현식
      // const regex = /#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/g;

      // 특정 텍스트를 제외하는 정규 표현식
      const regex = /#(?!default\b|starter\b|early\b|mid\b|end\b|highEnd\b|uber\b)([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/g;
      const matches = text.match(regex) || [];

      // 추출된 색상 값을 각 변수에 할당
      this.poeTextColor = matches[0] || '';
      this.poeBorderColor = matches[1] || '';
      this.poeBackgroundColor = matches[2] || '';
    }
    ,
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
      const elements = document.querySelectorAll('.VisualUtilityItemDiv');

      elements.forEach((element, index) => {
        const label = element.querySelector('.VisualUtilityItemLabel');
        const fileName = label ? label.textContent.trim() : `visual_utility_item_${index + 1}`;

        html2canvas(element).then(canvas => {
          const image = canvas.toDataURL('image/png');
          const link = document.createElement('a');
          link.href = image;
          link.download = `${fileName}.png`;
          link.click();
        });
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
  },
  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      localStorage.setItem('mode', 'dark');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      localStorage.setItem('mode', 'light');
    }
  },
  onCopySuccess() {
    this.successMessage = '복사 성공'; // 성공 메시지 설정
    this.successSnackbar = true; // 성공 스낵바 표시
  },
  onCopyError() {
    this.errorMessage = '복사 실패!'; // 실패 메시지 설정
    this.errorSnackbar = true; // 실패 스낵바 표시
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
    const _backgroundColor = this.hexToRgba(this.poeBackgroundColor, 255);
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
}
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

/* 기본 스타일 */
body,
.itemFilterInfo {
  margin: 10px;
  padding: 10px;
  transition: background-color 0.5s ease, color 0.5s ease;
  /* 배경색과 텍스트 색상에 대한 애니메이션 추가 */
}

/* v-application--wrap 스타일 추가 */
body.dark-mode .itemFilterInfo {
  background-color: #121212;
  color: #ffffff;
}

body.light-mode .itemFilterInfo {
  background-color: #ffffff;
  color: #000000;
}
</style>
