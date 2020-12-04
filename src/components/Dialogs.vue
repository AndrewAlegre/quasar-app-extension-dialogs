<template>
  <div style="position: absolute;">
    <q-dialog
      ref="dialogs"
      v-for="(item, index) in dialogs"
      :key="item.id"
      :value="true"
      v-bind="item.dialogProps"
      @hide="onHide(item)">
      <component
        :is="getComponentFromName(item.name)"
        v-bind="item.props"
        @hide="hideDialog(index)" />
    </q-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      components: {}
    }
  },
  computed: {
    dialogs () {
      return this.$store.state['dialogs'].list
    }
  },
  methods: {
    getComponentFromName (name) {
      if (!this.components[name]) {
        this.components[name] = () => import(`src/dialogs/${name}`)
      }
      return this.components[name]
    },
    hideDialog (index) {
      this.$refs.dialogs[index].hide()
    },
    onHide ({ id }) {
      this.$store.commit('dialogs/hide', { id })
    }
  }
}
</script>
