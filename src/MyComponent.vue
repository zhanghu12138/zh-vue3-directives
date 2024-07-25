<script lang="ts">
import { defineComponent } from 'vue'

export interface MyComponentProps {
  msg: string
}

export default defineComponent({
  name: 'MyComponent',
  props: {
    msg: {
      type: String,
      required: true
    }
  }
})
</script>

<template>
  <div>{{ msg }}</div>
</template>
