<template>
<div class="list">
  
</div>

</template>

<script>
import api from '../api'

export default {
  props: ['coodiateWidth','coodiate','coodiateHeight'],
  data() {
    return {
      styles: this.fetchData()
      // title: '12',
      // InputValue: '23',
      // coodiate: {
      //   down: {
      //     y: '100',
      //     x: '100' 
      //   } 
      // },
      // coodiateWidth: '100',
      // coodiateHeight: '100'
    }
  },
  created() {
    console.log(1)
    // console.log(this.coodiate.down.y)
  },
  watch: {
    // '$route': 'fetchData'
  },
  methods: {
    fetchData: () => {
      return {
        top: this.coodiate.down.y + 'px',
        left: this.coodiate.down.x + 'px',
        width: coodiateWidth + 'px',
        height: coodiateHeight + 'px'
      }      
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/fn.scss';

.list {
  .el-pagination {
    text-align: right;
    padding: $global-gap*2 0 0;
  }
  td {
    position: relative;
  }
  .el-row {
    padding-bottom: $global-gap*2;
    > * {
      float: left;
    }
    > .el-input-group,
    > .el-button {
      margin-right: $global-gap/2;
    }
  }
}
</style>
