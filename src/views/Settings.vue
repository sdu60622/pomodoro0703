<template lang="pug">
  #Settings
    h1.text-center
      font-awesome-icon(:icon="['fas', 'bell']")
      | &emsp;鈴聲設定
    b-table.text-white(:items="items" :fields="fields" @row-clicked="alarmSet")
      template(v-slot:cell(select)='row')
        font-awesome-icon(:icon="['fas', 'check']" v-if="row.item.file === alarmSelected")
      template(v-slot:cell(preview)='row')
        audio(controls :src="row.item.file")
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          name: '鬧鐘',
          file: './alarms/alarm1.mp3'
        },
        {
          name: 'nokia鈴聲',
          file: './alarms/nokia.mp3'
        },
        {
          name: 'Uber鈴聲',
          file: './alarms/uber.mp3'
        }
      ],
      fields: [
        {
          key: 'name',
          sortable: true,
          label: '名稱'
        },
        {
          key: 'preview',
          label: '預覽'
        },
        {
          key: 'select',
          label: '選擇'
        }
      ]
    }
  },
  computed: {
    alarmSelected () {
      return this.$store.getters.alarmSelected
    }
  },
  methods: {
    alarmSet (record, index) {
      this.$store.commit('alarmSet', record.file)
    }
  }
}
</script>
