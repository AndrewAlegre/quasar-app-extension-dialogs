<template>
  <div style="position: absolute;">
    <q-dialog
      ref="dialogs"
      v-for="(item, index) in dialogs"
      :key="item.id"
      :value="true"
      v-bind="item.dialogProps"
      v-on="dialogListeners[item.id]"
      @hide="onHide(item)">
      <component
        :is="item.component"
        v-bind="item.props"
        v-on="componentListeners[item.id]"
        @hide="hideDialog(index)" />
    </q-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      componentListeners: {},
      dialogListeners: {}
    }
  },
  computed: {
    dialogs () {
      return this.$store.state['dialogs'].list.map(({
        id,
        name,
        props,
        listeners,
        dialogListeners
      }) => {
        if (!this.componentListeners[id]) {
          this.componentListeners[id] = listeners
        }
        if (!this.dialogListeners[id]) {
          this.dialogListeners[id] = dialogListeners
        }
        return {
          id,
          name,
          props,
          component: () => import(`src/dialogs/${name}`)
        }
      })
    }
  },
  methods: {
    hideDialog (index) {
      this.$refs.dialogs[index].hide()
    },
    onHide ({ id }) {
      delete this.dialogListeners[id]
      delete this.componentListeners[id]
      this.$store.commit('dialogs/hide', { id })
    }
  }
}
</script>
