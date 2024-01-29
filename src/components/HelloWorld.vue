<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">

      <v-col class="d-flex justify-center">
        <v-color-picker
          v-model="selectedColor"
          show-swatches
          swatches-max-height="400px"
        ></v-color-picker>
      </v-col>

      <v-btn class="my-4" block @click="selectedColor = '#ff00ffff'">hexa</v-btn>
      <v-btn class="my-4" block @click="selectedColor = { r: 255, g: 0, b: 255, a: 1 }">rgba</v-btn>

      <v-row class="select-color">
        <v-col>
          <v-card :color="selectedColor" class="pa-5">
            <v-subheader>Selected Color</v-subheader>
            <v-divider></v-divider>
            <v-row>
              <v-col>
                <div>{{ selectedColor }}</div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue';

  const selectedColor = ref('rgba(0, 255, 0, 1)');

  function hexToRGBA(hex) {
    const bigint = parseInt(hex.substring(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    // 알파 값을 추출 (만약 없으면 기본값으로 1 사용)
    const a = hex.length === 9 ? Math.round(((bigint >> 24) & 255) / 255 * 100) / 100 : 1;

    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  const color1 = hexToRGBA("#0D3D0D"); // 13 ,61, 13, 1
  const color2 = hexToRGBA("#0D3D0D5C"); // 13, 61, 13, 0.36

  console.log(color1); // rgba(38, 158, 38, 1)
  console.log(color2); // rgba(38, 158, 38, 0.67)

</script>

<style scoped>
.color-preview {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin-right: 10px;
}
</style>