<template>
    <rs-panes split-to="columns" :allow-resize="true" :min-size="500" :size="500">
        <div slot="firstPane" class="min-w-full min-h-full" style="height: 100%;">
           <BAceEditor 
                width="100%"
                height="100%"
                lang="json"
                :readonly="false"
                v-model="jsonStr"
            ></BAceEditor>
        </div>
        <div slot="secondPane">
            <ve-line :data="jsonStrCharts"></ve-line>
        </div>
    </rs-panes>
</template>

<script>

import VeLine from 'v-charts/lib/line.common'

const jsonData = {
    columns: ['日期', '销售量'],
    rows: [
        { '日期': '1月1日', '销售量': 123 },
        { '日期': '1月2日', '销售量': 1223 },
        { '日期': '1月3日', '销售量': 2123 },
        { '日期': '1月4日', '销售量': 4123 },
        { '日期': '1月5日', '销售量': 3123 },
        { '日期': '1月6日', '销售量': 7123 }
    ]
}
export default {
    name: 'app',
    components: {VeLine},
    data() {
        return {
            jsonStr: JSON.stringify(jsonData, null, 2)
        }
    },

    mounted() {
        this.jsonStr = JSON.stringify(jsonData, null, 2);
    },
    computed: {
        jsonStrCharts(){
            return JSON.parse(this.jsonStr);
        }
    },
    methods: {
        onEditorChange(e) {
            try {
                console.log(JSON.parse(e));
            }catch {
                console.log(1)
            }
        },
        onEditorInit(e) {
            console.log(e);
            this.jsonStr = '5555555555';
        },
        handleFormat() {
            this.jsonStr = JSON.stringify(JSON.parse(this.jsonStr), null, 2);
        }
    }
}
</script>

<style lang="less" scoped>



</style>